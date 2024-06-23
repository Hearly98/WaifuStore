import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../../models/product';
import { ProductComponent } from '../../components/product/product.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductComponent, ButtonComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent{
//products = signal<Product[]>([])
 //private productService = inject(ProductService)
 isOpenModal = false
  selectedProduct?: any;
  openModal(product: any):void{
    this.selectedProduct = product;
    this.isOpenModal = true
  }
  closeModal():void{
    this.isOpenModal = !this.isOpenModal
  }
errorMessage = ""
products = [
  {
    codigo: "EscalaFrieren01",
    nombre: "Escala 1/7 Frieren",
    id_marca: "16",
    id_categoria: "3",
    monto: "850",
    descripcion: "Serie: Sousou no Frieren Personaje: Frieren Fabricante: Claynel Altura: (Escala 1/7) Aprox. 22.5cm Fecha de Salida: Finales de Febrero 2025",
    imagen: "Frieren_Claynel.jpg"  
  },
  {
    codigo: "Escala_Goblin Slayer",
    nombre: "Escala Goblin Slayer",
    id_marca: "14",
    id_categoria: "3",
    monto: "240",
    descripcion: "Serie: Goblin Slayer Personaje: Goblin Slayer Fabricante: Good Smile Company Altura: Aprox. 17cm Fecha de Salida: Finales de Octubre 2024",
    imagen: "Goblin_Slayer.jpg"
  },
  {
    codigo: "Nendo_Asuka Langley",
    nombre: "Nendoroid Asuka Langley Shikinami",
    id_marca: "14",
    id_categoria: "5",
    monto: "270",
    descripcion: "Serie: Evangelion Personaje: Asuka Langley Shikinami Fabricante: Good Smile Company Linea: Nendoroid Fecha de Salida: Finales de Julio 2024",
    imagen: "Nendo_AsukaLangley.jpg"
  },
  {
    codigo: "Escala_Perseus",
    nombre: "Escala Perseus (Lightweight ver.)",
    id_marca: "12",
    id_categoria: "3",
    monto: "1700",
    descripcion: "Serie: Azur Lane Personaje: Perseus Fabricante: Wings inc. Altura: (Escala 1/7) Aprox. 30cm Fecha de Salida: Finales de Mayo 2025",
    imagen: "Escala_Perseus.jpeg"
  },
  {
    codigo: "Escala Sophie01",
    nombre: "Escala Sophie Neuenmuller",
    id_marca: "2",
    id_categoria: "3",
    monto: "800",
    descripcion: "Serie: Atelier Personaje: Sophie Neuenmuller Fabricante: ques Q Altura: (Escala 1/7) Aprox 21cm Fecha de Salida: Finales de Junio 2025",
    imagen: "Sophie.png"
  }
]

/*
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
}*/
}
