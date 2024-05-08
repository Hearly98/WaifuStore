import { CommonModule, getLocaleDateFormat } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../shared/services/product.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Brand } from '../../../../models/brand';
import { Category } from '../../../../models/category';
import { CategoryService } from '../../../shared/services/category.service';
import { BrandService } from '../../../shared/services/brand.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink, FormsModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  brands = signal<Brand[]>([]);
  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);

  newProductName: string = '';
  newProductCode: string = '';
  selectedBrand!: Brand;
  selectedCategory!: Category;
  newProductAmount: number = 0;
  newProductDescription: string = '';
  newProductImage: string = '';
  newProductStock: number = 0;
  newProductPublishDate: string = '';
  
  currentProductId!: number;
  updateProductName: string = '';
titles=[
  {name: 'Nombre Producto'},
  {name:'Codigo'},
  {name:'Marca'},
  {name:'Categoría'},
  {name:'Monto'},
  {name:'Stock'},
]
isOpenUpdateModal = false
isOpenModal = false;
private productService = inject(ProductService);
private categoryService = inject(CategoryService);
private brandService = inject(BrandService);
errorMessage: string | null=null;

updateProductCode = '';
updateProductAmount = 0;
updateProductDescription = '';
updateProductImage = '';
updateProductStock = 0;
updateProductPublishDate = '';


openUpdateModal(product: Product): void {
  this.isOpenUpdateModal = true;
  this.currentProductId = product.id;
  this.updateProductName = product.name;
  this.updateProductCode = product.code;
  this.selectedBrand = product.brand; 
  this.selectedCategory = product.category; 
  this.updateProductAmount = product.amount;
  this.updateProductDescription = product.description;
  this.updateProductImage = product.image;
  this.updateProductStock = product.stock;
  this.updateProductPublishDate = product.publishDate;
}

openModal(){
    this.isOpenModal=true;
  }
closeModal(){
  this.isOpenModal=false;
}
closeUpdateModal(){
  this.isOpenUpdateModal=false;
}
submitted = false

ngOnInit(){
  this.loadBrands();
  this.loadCategories();
  this.fetchProducts();
}

loadBrands() {
  this.brandService.getBrands().subscribe({
    next: (brands) => {
      this.brands.set(brands);
    },
    error: (err) => {
      console.error('Error loading brands:', err);
      this.errorMessage = "No se pueden cargar las marcas en este momento";
    }
  });
}


loadCategories() {
  this.categoryService.getCategories().subscribe({
    next: (categories: Category[]) => {
      this.categories.set(categories);
    },
    error: (err: any) => {
      console.error('Error loading categories:', err);
      this.errorMessage = "No se pueden cargar las categorías en este momento";
    }
  });
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
addProduct():void{
  const data ={
    id: 0, 
    code: this.newProductCode,
    name: this.newProductName,
    brand: this.selectedBrand,
    category: this.selectedCategory,
    amount: this.newProductAmount,
    description: this.newProductDescription,
    image: this.newProductImage,
    stock: this.newProductStock,
    publishDate: this.newProductPublishDate 

  };
  this.productService.create(data)
  .subscribe(
  response =>{
    this.submitted = true;
    this.fetchProducts();
    this.closeModal();
  },
  error => {
    this.errorMessage="Error al registrar un Producto."
  }
  )
}
deleteProduct(id:number): void{
this.productService.delete(id)
.subscribe(
  response =>{
    this.fetchProducts();
    this.closeModal();
  },
  error => {
    this.errorMessage="Error al eliminar un Producto."
  }
)
}
updateProduct(): void {
  const data = {
    id: this.currentProductId,
    code: this.updateProductCode,
    name: this.updateProductName,
    brand: this.selectedBrand,
    category: this.selectedCategory,
    amount: this.updateProductAmount,
    description: this.updateProductDescription,
    image: this.updateProductImage,
    stock: this.updateProductStock,
    publishDate: this.updateProductPublishDate 
  };

  this.productService.update(data).subscribe({
    next: (response) => {
      this.submitted = true;
      this.fetchProducts();
      this.closeUpdateModal();
    },
    error: (err) => {
      console.error('Error updating product:', err);
      this.errorMessage = "Error al actualizar el producto.";
    }
  });
}

}
