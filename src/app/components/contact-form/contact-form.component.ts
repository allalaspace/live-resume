import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  success = false;
  error = false;
  
  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    try {
      await this.contactService.addContact({
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        date: new Date()
      });
      
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        this.success = false;
      }, 5000);
      
    } catch (err) {
      console.error('Erreur lors de l\'envoi du message:', err);
      this.error = true;
      
      // Réinitialiser le message d'erreur après 5 secondes
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }
  }
} 