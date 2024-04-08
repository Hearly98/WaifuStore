import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registers=[
    {type:"text", id: "input-name", placeholder:"Ingrese sus Nombres y Apellidos"},
    {type:"date", id: "input-nacimiento", placeholder:"Ingrese su Fecha de Nacimiento"},
    {type:"text", id: "input-domicilio", placeholder:"Ingrese su Dirección de domicilio"},
    {type:"email", id: "input-email", placeholder:"Ingrese su correo electronico"},
    {type:"password", id: "input-password", placeholder:"Ingrese su contraseña"},
  ]
}
