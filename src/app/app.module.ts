import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResumeModule } from "./resume/resume.module";
import { PageNotFoundRoutingModule } from "./404/page-not-found-routing.module";
import { PageNotFoundModule } from "./404/page-not-found.module";
import { CoreModule } from "./core/core.module";
import { ContactModule } from "./contact/contact.module";

// Firebase imports
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import localeEn from "@angular/common/locales/en";
import localePt from "@angular/common/locales/pt";
import localeFr from "@angular/common/locales/fr";
import localePtExtra from "@angular/common/locales/extra/pt";

registerLocaleData(localeEn, "en");
registerLocaleData(localeFr, "fr");
registerLocaleData(localePt, "pt-BR", localePtExtra);

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    ResumeModule,
    ContactModule,
    PageNotFoundModule,
    PageNotFoundRoutingModule,
    ReactiveFormsModule,
    // Firebase modules - utilisation de la version database
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})

export class AppModule {}