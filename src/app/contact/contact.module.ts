import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FirebaseContactComponent } from './firebase-contact/firebase-contact.component';

@NgModule({
  declarations: [
    FirebaseContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    FirebaseContactComponent
  ]
})
export class ContactModule { } 