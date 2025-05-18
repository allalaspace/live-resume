import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Contact } from '../models/contact.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsPath = 'contacts';

  constructor(private db: AngularFireDatabase) {}

  // Ajouter un nouveau contact
  async addContact(contact: Contact): Promise<string> {
    const contactRef = await this.db.list(this.contactsPath).push({
      ...contact,
      date: new Date().toISOString()
    });
    return contactRef.key;
  }

  // Récupérer tous les contacts
  getContacts(): Observable<Contact[]> {
    return this.db.list<Contact>(this.contactsPath)
      .snapshotChanges()
      .pipe(
        map(changes => changes.map(c => ({
          id: c.payload.key,
          ...c.payload.val() as Omit<Contact, 'id'>
        })))
      );
  }

  // Supprimer un contact
  async deleteContact(id: string): Promise<void> {
    return this.db.object(`${this.contactsPath}/${id}`).remove();
  }

  // Mettre à jour un contact
  async updateContact(id: string, contact: Partial<Contact>): Promise<void> {
    return this.db.object(`${this.contactsPath}/${id}`).update(contact);
  }
} 