import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() products?: any[];

}
