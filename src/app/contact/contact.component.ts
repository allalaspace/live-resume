import { Component, OnInit } from "@angular/core";
import {
  faEnvelope, faPhone, faTimes,
  faMapMarkerAlt, IconDefinition, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import { Contact } from "../models/contact.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss", "./contact.component.responsivity.scss"]
})

export class ContactComponent implements OnInit {
  
  name: string;
  email: string;
  phone: string;
  location: string;
    
  faEnvelope: IconDefinition;
  faPhone: IconDefinition;
  faMapMarkerAlt: IconDefinition;
  faTimes: IconDefinition;
  faArrowRight: IconDefinition;

  isLoading: boolean = false;
  hasBeenSubmited: boolean = false;
  feedbackStatus: string;

  constructor(private contactService: ContactService) { }

  contactForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl("",[
      Validators.required,
      Validators.pattern("[A-zÀ-ú ]*")
    ]),
    email: new UntypedFormControl("",[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    message: new UntypedFormControl("",[
      Validators.required
    ])
  }); 

  get senderEmail() {
    return this.contactForm.get("email")
  }

  get senderName() {
    return this.contactForm.get("name")
  }

  get senderMessage() {
    return this.contactForm.get("message")
  }

  get options() {
    return this.contactForm.get("options")
  }

  ngOnInit(): void {
    this.name = "Boudich Mohamed ali";
    this.email = "contact@mohamedaliboudich.fr";
    this.phone = "+33 603754643";
    this.location = "Puteaux, France";

    this.faEnvelope = faEnvelope;
    this.faPhone = faPhone;
    this.faMapMarkerAlt = faMapMarkerAlt;
    this.faTimes = faTimes;
    this.faArrowRight = faArrowRight;
  }

  saveContact(contact: Contact) {
    this.contactService.createContact(contact).then(() => {
      console.log("created");
      this.displayUserInterfaceMessage(true);
    })
    .catch(error => {
      this.displayUserInterfaceMessage(false);
      console.log(error);
    });
  }
  
  displayUserInterfaceMessage(hasBeenSuccessfuly: boolean) {
    this.isLoading = false;
    this.hasBeenSubmited = true;
    this.feedbackStatus = hasBeenSuccessfuly? "success" : "error";
    this.contactForm.reset();
  }

  closeFeedbackMessage() {
    this.hasBeenSubmited = false;
    this.feedbackStatus = "";
  }

  onSubmit(contactForm) {
    this.isLoading = true;

    const contactValues: Contact = {
      name: this.senderName.value,
      email: this.senderEmail.value,
      message: this.senderMessage.value,
      date: new Date()
    } as Contact;

    this.saveContact(contactValues);
  }
}