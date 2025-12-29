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
    try {
      const { data, error } = await this.supabase
        .from('contacts')
        .insert([
          {
            name: name,
            email: email,
            message: message,
            date: new Date().toISOString(),
            read: false
          }
        ])
        .select();

      if (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        return { success: false, error: error };
      }

      return { success: true, id: data?.[0]?.id };
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
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

