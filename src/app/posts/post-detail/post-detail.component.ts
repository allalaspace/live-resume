import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../posts-interfaces';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  post: IPost | null = null;
  markdownContent: string = '';
  htmlContent: SafeHtml = '';
  isLoading: boolean = true;
  error: string | null = null;
  currentLanguage: string = 'en';
  private routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private sanitizer: DomSanitizer,
    @Inject(LOCALE_ID) private locale: string
  ) {
    // Déterminer la langue actuelle
    this.currentLanguage = this.locale.split('-')[0] || 'en';
  }

  ngOnInit(): void {
    // Utiliser route.params pour éviter les problèmes de rechargement
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      
      if (!postId) {
        this.error = 'ID du post manquant';
        this.isLoading = false;
        return;
      }

      // Réinitialiser l'état avant de charger un nouveau post
      this.post = null;
      this.markdownContent = '';
      this.htmlContent = '';
      this.error = null;
      this.isLoading = true;
      
      this.loadPost(postId);
    });
  }

  ngOnDestroy(): void {
    // Nettoyer l'abonnement pour éviter les fuites mémoire
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  async loadPost(postId: string): Promise<void> {
    try {
      this.isLoading = true;
      this.error = null;

      // Récupérer le post
      const post = await this.postsService.getPostById(postId);

      if (!post) {
        this.error = 'Post introuvable';
        this.isLoading = false;
        return;
      }

      this.post = post;

      // Si le post a un fichier markdown, le charger
      if (post.markdownFile) {
        try {
          console.log(`[PostDetail] Chargement du fichier markdown: ${post.markdownFile}`);
          this.markdownContent = await this.postsService.getPostMarkdownContent(post.markdownFile);
          
          // Convertir le markdown en HTML
          // marked.parse() retourne une string synchronement
          const html = marked.parse(this.markdownContent) as string;
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
          console.log(`[PostDetail] Contenu markdown chargé avec succès`);
        } catch (markdownError: any) {
          console.error('[PostDetail] Erreur lors du chargement du contenu markdown:', {
            error: markdownError,
            markdownFile: post.markdownFile,
            errorMessage: markdownError?.message || 'Erreur inconnue'
          });
          
          // Afficher un message d'erreur plus détaillé
          const errorMessage = markdownError?.message || 'Erreur inconnue';
          if (errorMessage.includes('n\'existe pas')) {
            this.error = `Le fichier markdown "${post.markdownFile}" n'existe pas dans le stockage. Veuillez vérifier que le fichier a été correctement uploadé.`;
          } else if (errorMessage.includes('bucket')) {
            this.error = `Erreur d'accès au stockage. Vérifiez la configuration du bucket.`;
          } else {
            this.error = `Impossible de charger le contenu de l'article: ${errorMessage}`;
          }
        }
      } else {
        this.error = 'Ce post n\'a pas de contenu disponible';
      }

      this.isLoading = false;
    } catch (error) {
      console.error('Erreur lors du chargement du post:', error);
      this.error = 'Une erreur est survenue lors du chargement du post';
      this.isLoading = false;
    }
  }

  /**
   * Récupère le titre du post dans la langue actuelle
   */
  getPostTitle(): string {
    if (!this.post) return '';
    
    const intl = this.post.internationalizations.find(i => i.language === this.currentLanguage);
    return intl?.title || this.post.internationalizations[0]?.title || 'Sans titre';
  }

  /**
   * Récupère la description du post dans la langue actuelle
   */
  getPostDescription(): string {
    if (!this.post) return '';
    
    const intl = this.post.internationalizations.find(i => i.language === this.currentLanguage);
    return intl?.description || this.post.internationalizations[0]?.description || '';
  }

  /**
   * Formate la date du post
   */
  formatDate(dateString: string): string {
    try {
      const [month, day, year] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.toLocaleDateString(this.locale, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  }

  /**
   * Retour à la liste des posts
   */
  goBack(): void {
    // Utiliser navigateByUrl pour éviter les problèmes de navigation
    this.router.navigateByUrl('/').then(() => {
      // Attendre un peu avant de scroller pour que la page soit chargée
      setTimeout(() => {
        const element = document.getElementById('posts');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }

  /**
   * Retour à l'accueil
   */
  goHome(): void {
    this.router.navigate(['/']);
  }
}

