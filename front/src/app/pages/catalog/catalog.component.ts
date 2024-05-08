import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../../models/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit{
products = signal<Product[]>([])
 private productService = inject(ProductService)
errorMessage = ""

ngOnInit(){
  this.fetchProducts();
}
fetchProducts(){
  this.productService.getProducts()
  .subscribe({
    next:(products)=>{
      this.products.set(products)
    },
    error:(err)=>{
      this.errorMessage ="No se puede cargar los productos en estos momentos"
    }
  })
}
}
