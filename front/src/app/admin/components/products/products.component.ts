import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../shared/services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
titles=[
  {name: 'Nombre Producto'},
  {name:'Codigo'},
  {name:'Marca'},
  {name:'Categoría'},
  {name:'Monto'},
  {name:'Stock'},
]
products=signal<Product[]>([])
private productService=inject(ProductService)
errorMessage: string | null=null;
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
