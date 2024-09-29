import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  isSuccess = false;
  message = '';

  sendContactForm() {
    
    console.log(this.contactForm);
    
  }

  onSubmit(form: any) {
    
    
    this.isSuccess = true;
    this.message = 'Message envoyé avec succès!';
  }
}
