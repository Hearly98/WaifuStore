import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { LoginRequest } from '../../../models/login';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  success: boolean = false;
  message = "";
  loginData :LoginRequest = {
    "username": '',
    "password": ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
ngOnInit(){

}
formSubmit(){

}
doLogin() {
  if (this.loginData.username && this.loginData.password) {
    this.message = "Error...";
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log(response); 
        this.message = "Login Exitoso!";
        this.success = true; 
        setTimeout(() => {
          this.router.navigate(['/administrador/Dashboard']);
        }, 2000);
      },
      error: (error) => {
        console.error('Error de login', error);
        this.message = "Error en el login: " + (error.error.message || "No se pudo conectar al servidor.");
        this.success = false; 
      }
    });
  } else {
    this.message = "Por favor ingrese todos los campos requeridos.";
    this.success = false; 
  }
}
}
