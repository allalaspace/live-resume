import { Injectable } from '@angular/core';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  constructor(private supabaseClientService: SupabaseClientService) {}

  private get supabase() {
    return this.supabaseClientService.client;
  }

  // Méthode pour envoyer un message de contact
  async sendContactMessage(name: string, email: string, message: string) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase.service.ts:15',message:'sendContactMessage called',data:{name,email,messageLength:message.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    try {
      const insertData = {
        name: name,
        email: email,
        message: message,
        date: new Date().toISOString(),
        read: false
      };
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase.service.ts:25',message:'Before Supabase insert',data:{insertData},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      const { data, error } = await this.supabase
        .from('contacts')
        .insert([insertData])
        .select();
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase.service.ts:33',message:'After Supabase insert',data:{hasError:!!error,errorCode:error?.code,errorMessage:error?.message,errorDetails:error?.details,hasData:!!data,dataLength:data?.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion

      if (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase.service.ts:37',message:'Supabase error details',data:{code:error.code,message:error.message,details:error.details,hint:error.hint},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        return { success: false, error: error };
      }

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase.service.ts:44',message:'Insert successful',data:{id:data?.[0]?.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return { success: true, id: data?.[0]?.id };
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/a1567803-7342-4d14-a623-2d536e9a948a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'supabase.service.ts:48',message:'Exception caught',data:{errorMessage:error instanceof Error?error.message:String(error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return { success: false, error: error };
    }
  }

  // Méthode pour vérifier si un email existe déjà
  async checkEmailExists(email: string) {
    try {
      const { data, error } = await this.supabase
        .from('contacts')
        .select('email')
        .eq('email', email)
        .limit(1);

      if (error) {
        console.error("Erreur lors de la vérification de l'email:", error);
        return false;
      }

      return data && data.length > 0;
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email:", error);
      return false;
    }
  }
}

