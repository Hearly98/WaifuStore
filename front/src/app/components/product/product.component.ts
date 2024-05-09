import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product!: Product
  isOpenModal = false
  selectedProduct?: Product;
  openModal(product: Product):void{
    this.selectedProduct = product;
    this.isOpenModal = true
  }
  closeModal(){
    this.isOpenModal = !this.isOpenModal
  }
}
