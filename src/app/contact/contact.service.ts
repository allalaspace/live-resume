import { Contact } from "../models/contact.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsPath = 'contacts';

  constructor(private db: AngularFireDatabase) { }

  async createContact(contact: Contact): Promise<any> {
    try {
      console.log('Contact form submission:', contact);
      const contactRef = await this.db.list(this.contactsPath).push({
        ...contact,
        date: new Date().toISOString()
      });
      return Promise.resolve({ id: contactRef.key });
    } catch (error) {
      console.error("Erreur lors de l'ajout du contact:", error);
      return Promise.reject(error);
    }
  }

  // Pour l'administration éventuelle des contacts
  async getAllContacts(): Promise<Contact[]> {
    try {
      const query = this.db.list(this.contactsPath).valueChanges();
      const result = await firstValueFrom(query);
      return result as Contact[];
    } catch (error) {
      console.error("Erreur lors de la récupération des contacts:", error);
      return [];
    }
  }
}