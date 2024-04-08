import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
salesTeam ='992-771-024';
salesContent= 'Nuestro equipo de ventas está aquí para ayudarte a encontrar exactamente lo que buscas.';
supportContent= 'Nuestro soporte técnico está a tu disposición para resolver cualquier duda y asegurarse de que tu experiencia sea excepcional.';
}
