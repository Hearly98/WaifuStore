import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  message = "";
  loginData = {
    "username": '',
    "password": ''
  }

  constructor(
    private router: Router
  ){}
ngOnInit(){

}
formSubmit(){

}
doLogin(){
  if (this.loginData.username && this.loginData.password) {
    this.message = "Procesando...";
    setTimeout(()=>{
      this.message = "Login Exitoso!";
      this.router.navigate(['/administrador']);
    },2000);
  }else{
    this.message = "Por favor ingrese todos los campos requeridos.";
  }
}
}
