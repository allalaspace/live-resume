import { Injectable } from '@angular/core';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseStorageService {
  private readonly BUCKET_NAME = 'posts-content';

  constructor(private supabaseClientService: SupabaseClientService) {}

  private get supabase() {
    return this.supabaseClientService.client;
  }

  /**
   * Télécharge un fichier markdown depuis Supabase Storage
   * @param filePath Chemin du fichier dans le bucket (ex: "post-uuid-123.md")
   * @returns Promise<string> Contenu du fichier markdown
   */
  async downloadMarkdownFile(filePath: string): Promise<string> {
    try {
      // Normaliser le chemin du fichier
      // Le filePath peut être :
      // - Juste le nom du fichier : "post-123.md"
      // - Chemin avec dossier : "posts-content/post-123.md" ou "folder/post-123.md"
      // - Chemin complet avec bucket : "posts-content/post-123.md"
      let fileName = filePath;
      
      // Si le chemin contient le nom du bucket, l'enlever
      if (filePath.startsWith(`${this.BUCKET_NAME}/`)) {
        fileName = filePath.replace(`${this.BUCKET_NAME}/`, '');
      }
      
      // Extraire le nom du fichier si c'est un chemin avec dossier
      if (fileName.includes('/')) {
        fileName = fileName.split('/').pop() || fileName;
      }

      console.log(`[SupabaseStorage] Tentative de téléchargement: bucket="${this.BUCKET_NAME}", file="${fileName}"`);

      // Télécharger directement le fichier
      // Note: On ne vérifie pas l'existence du bucket/fichier car listBuckets() et list() 
      // nécessitent des permissions élevées. La méthode download() retournera 
      // une erreur claire si le bucket ou le fichier n'existe pas.
      const { data, error } = await this.supabase.storage
        .from(this.BUCKET_NAME)
        .download(fileName);

      if (error) {
        console.error('[SupabaseStorage] Erreur lors du téléchargement:', {
          error,
          errorMessage: error.message,
          errorName: error.name,
          errorStatus: (error as any).statusCode,
          bucket: this.BUCKET_NAME,
          fileName: fileName,
          originalPath: filePath
        });
        
        // Fournir un message d'erreur plus détaillé selon le type d'erreur
        let errorDetails = error.message || 'Erreur inconnue';
        
        // Gérer les erreurs spécifiques de Supabase Storage
        if (error.name === 'StorageUnknownError' || (error as any).statusCode === 400) {
          errorDetails = `Le bucket "${this.BUCKET_NAME}" ou le fichier "${fileName}" n'existe pas, ou le bucket n'est pas public. Vérifiez que :
- Le bucket "${this.BUCKET_NAME}" existe dans Supabase Storage
- Le bucket est configuré comme "public" dans les paramètres
- Le fichier "${fileName}" existe dans le bucket
- Le nom du fichier correspond exactement (sensible à la casse)`;
        } else if ((error as any).statusCode === 403 || (error as any).statusCode === 401) {
          errorDetails = `Accès refusé. Vérifiez que le bucket "${this.BUCKET_NAME}" est public et que les permissions sont correctement configurées.`;
        } else if ((error as any).statusCode === 404) {
          errorDetails = `Le fichier "${fileName}" n'existe pas dans le bucket "${this.BUCKET_NAME}".`;
        }
        
        throw new Error(`Impossible de télécharger le fichier "${fileName}": ${errorDetails}`);
      }

      if (!data) {
        throw new Error(`Le fichier "${fileName}" est vide ou introuvable`);
      }

      // Convertir le Blob en texte
      const text = await data.text();
      console.log(`[SupabaseStorage] Fichier "${fileName}" téléchargé avec succès (${text.length} caractères)`);
      return text;
    } catch (error) {
      console.error('[SupabaseStorage] Erreur dans downloadMarkdownFile:', {
        error,
        filePath,
        bucket: this.BUCKET_NAME,
        errorType: error instanceof Error ? error.constructor.name : typeof error,
        errorMessage: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }

  /**
   * Obtient l'URL publique d'un fichier dans le bucket
   * @param filePath Chemin du fichier
   * @returns URL publique du fichier
   */
  getPublicUrl(filePath: string): string {
    const fileName = filePath.includes('/') 
      ? filePath.split('/').pop() || filePath 
      : filePath;

    const { data } = this.supabase.storage
      .from(this.BUCKET_NAME)
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  /**
   * Vérifie si un fichier existe dans le bucket
   * @param filePath Chemin du fichier
   * @returns Promise<boolean> True si le fichier existe
   */
  async fileExists(filePath: string): Promise<boolean> {
    try {
      const fileName = filePath.includes('/') 
        ? filePath.split('/').pop() || filePath 
        : filePath;

      const { data, error } = await this.supabase.storage
        .from(this.BUCKET_NAME)
        .list('', {
          search: fileName
        });

      if (error) {
        console.error('Erreur lors de la vérification du fichier:', error);
        return false;
      }

      return data && data.length > 0 && data.some(file => file.name === fileName);
    } catch (error) {
      console.error('Erreur dans fileExists:', error);
      return false;
    }
  }
}

