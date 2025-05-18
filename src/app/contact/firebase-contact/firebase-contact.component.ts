import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-firebase-contact',
  templateUrl: './firebase-contact.component.html',
  styleUrls: ['./firebase-contact.component.scss']
})
export class FirebaseContactComponent implements OnInit {
  contactForm: FormGroup;
  isLoading = false;
  feedbackStatus = '';
  submitted = false;
  
  // Font Awesome icons
  faTimes = faTimes;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', Validators.required],
      subject: ['']
    });
  }

  async onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isLoading = true;
    
    try {
      const result = await this.firebaseService.sendContactMessage(
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.message
      );
      
      if (result.success) {
        this.feedbackStatus = 'success';
        this.contactForm.reset();
        this.submitted = false;
      } else {
        this.feedbackStatus = 'error';
      }
    } catch (error) {
      console.error('Erreur:', error);
      this.feedbackStatus = 'error';
    } finally {
      this.isLoading = false;
      
      // Réinitialiser le message de feedback après 5 secondes
      setTimeout(() => {
        this.feedbackStatus = '';
      }, 5000);
    }
  }

  closeFeedbackMessage() {
    this.feedbackStatus = '';
  }

  get contactFormControl() {
    return this.contactForm.controls;
  }
} 