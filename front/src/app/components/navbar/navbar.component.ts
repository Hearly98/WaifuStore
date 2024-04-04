import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen=false;
  toggleMenu(){
    this.menuOpen=!this.menuOpen;
  }
  get myStyles() {
    return {
      'top': this.menuOpen ? '80px' : '-400px',
    };
  }
}
