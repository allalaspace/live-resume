import { Contact } from "../models/contact.model";
import { Injectable } from "@angular/core";
import { SupabaseClientService } from '../services/supabase-client.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private supabaseClientService: SupabaseClientService) {}

  private get supabase() {
    return this.supabaseClientService.client;
  }

  async createContact(contact: Contact): Promise<any> {
    try {
      console.log('Contact form submission:', contact);
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

      return Promise.resolve({ id: data?.[0]?.id });
    } catch (error) {
      console.error("Erreur lors de l'ajout du contact:", error);
      return Promise.reject(error);
    }
  }

  // Pour l'administration éventuelle des contacts
  async getAllContacts(): Promise<Contact[]> {
    try {
      const { data, error } = await this.supabase
        .from('contacts')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        throw error;
      }

      return (data || []).map(item => ({
        id: item.id,
        name: item.name,
        email: item.email,
        subject: item.subject || '',
        message: item.message,
        date: new Date(item.date)
      } as Contact));
    } catch (error) {
      console.error("Erreur lors de la récupération des contacts:", error);
      return [];
    }
  }
}