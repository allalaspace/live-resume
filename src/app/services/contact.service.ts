import { Injectable } from '@angular/core';
import { SupabaseClientService } from './supabase-client.service';
import { Contact } from '../models/contact.model';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private supabaseClientService: SupabaseClientService) {}

  private get supabase() {
    return this.supabaseClientService.client;
  }

  // Ajouter un nouveau contact
  async addContact(contact: Contact): Promise<string> {
    try {
      const { data, error } = await this.supabase
        .from('contacts')
        .insert([
          {
            name: contact.name,
            email: contact.email,
            message: contact.message,
            subject: contact.subject || '',
            date: contact.date ? new Date(contact.date).toISOString() : new Date().toISOString(),
            read: false
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      return data?.[0]?.id || '';
    } catch (error) {
      console.error("Erreur lors de l'ajout du contact:", error);
      throw error;
    }
  }

  // Récupérer tous les contacts
  getContacts(): Observable<Contact[]> {
    return from(
      this.supabase
        .from('contacts')
        .select('*')
        .order('date', { ascending: false })
    ).pipe(
      map(response => {
        if (response.error) {
          console.error("Erreur lors de la récupération des contacts:", response.error);
          return [];
        }
        return (response.data || []).map(item => ({
          id: item.id,
          name: item.name,
          email: item.email,
          subject: item.subject || '',
          message: item.message,
          date: new Date(item.date)
        } as Contact));
      })
    );
  }

  // Supprimer un contact
  async deleteContact(id: string): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du contact:", error);
      throw error;
    }
  }

  // Mettre à jour un contact
  async updateContact(id: string, contact: Partial<Contact>): Promise<void> {
    try {
      const updateData: any = {};
      if (contact.name) updateData.name = contact.name;
      if (contact.email) updateData.email = contact.email;
      if (contact.subject) updateData.subject = contact.subject;
      if (contact.message) updateData.message = contact.message;
      if (contact.date) updateData.date = new Date(contact.date).toISOString();

      const { error } = await this.supabase
        .from('contacts')
        .update(updateData)
        .eq('id', id);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du contact:", error);
      throw error;
    }
  }
} 