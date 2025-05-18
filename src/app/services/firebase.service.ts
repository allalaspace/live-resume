import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  // Méthode pour envoyer un message de contact
  async sendContactMessage(name: string, email: string, message: string) {
    try {
      const contactRef = await this.db.list('contacts').push({
        name: name,
        email: email,
        message: message,
        date: new Date().toISOString(),
        read: false
      });
      return { success: true, id: contactRef.key };
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      return { success: false, error: error };
    }
  }

  // Méthode pour vérifier si un email existe déjà
  async checkEmailExists(email: string) {
    try {
      const query = this.db.list('contacts', 
        ref => ref.orderByChild('email').equalTo(email).limitToFirst(1))
        .valueChanges();
      const result = await firstValueFrom(query);
      return result && result.length > 0;
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email:", error);
      return false;
    }
  }
} 