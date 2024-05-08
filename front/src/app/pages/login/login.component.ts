import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

}

