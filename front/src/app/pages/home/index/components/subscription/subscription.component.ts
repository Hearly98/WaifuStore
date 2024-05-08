import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { EmailService } from '../../../../../shared/services/email.service';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent {

  constructor (private emailService: EmailService){}
sendEmail(event: Event):void{
  event.preventDefault();
  const formData = new FormData();
  formData.append('email', (document.getElementById('email') as HTMLInputElement).value)
  this.emailService.sendEmail(formData)
  .subscribe({
    next:(response)=>{
      console.log('Correo enviado', response);
    },
    error:(error)=>{
      console.error('Error al enviar el correo', error)
    }
  })
}
}
