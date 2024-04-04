import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './index.component.html'
})
export class IndexComponent {

}
