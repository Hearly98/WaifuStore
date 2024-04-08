import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
lists=[
  {link:"https://www.facebook.com/waifustore1", name: "Facebook",},
  {link:"/Nosotros", name: "Nosotros"},
  {link:"/Contáctanos", name: "Contáctanos"},
  {link:"/", name: "Términos y Condiciones"},
  {link:"/", name: "Horario", content: "Lunes a Viernes: 8:00 - 5:00"},
]
}
