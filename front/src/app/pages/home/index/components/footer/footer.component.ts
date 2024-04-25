import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  empresaTitle = "Nuestra Empresa";
  empresaContent = "¿Quiénes somos?";
  terminos = "Términos y Condiciones";

  contactoTitle = "Contáctanos:";
  whatsappSrc = "/assets/img/whatsapp.png";
  whatsappAlt = "WhatsApp";

  seguirTitle = "Síguenos:";
  facebookSrc = "https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Facebook-icon.svg";
  facebookAlt = "Facebook";

  pagoTitle = "Medio de Pago:";
  visaSrc = "/assets/img/visa.png";
  visaAlt = "Visa";
  yapeSrc = "/assets/img/yape_1.png";
  yapeAlt = "Yape";
  plinSrc = "/assets/img/plin.png";
  plinAlt = "Plin";

  derechos = "Todos los derechos reservados 2024";
}
