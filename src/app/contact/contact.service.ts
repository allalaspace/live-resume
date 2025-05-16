import { Contact } from "../model/contact.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    constructor() { }

    async createContact(contact: Contact): Promise<any> {
        console.log('Contact form submission:', contact);
        // Simulation d'une réponse réussie
        return Promise.resolve({ id: 'temp-id-' + new Date().getTime() });
    }
}