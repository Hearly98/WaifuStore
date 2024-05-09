import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brand } from '../../../../models/brand';
import { BrandService } from '../../../shared/services/brand.service';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './brands.component.html'
})
export class BrandsComponent implements OnInit{
isOpenModal = false;
isOpenUpdateModal = false;
newBrandName = '';
updateBrandName = '';
currentBrandId !:number;

openUpdateModal(marca:Brand):void{
  this.isOpenUpdateModal = true;
  this.updateBrandName = marca.name;
  this.currentBrandId = marca.id;
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
marcas=signal<Brand[]>([])

private brandService=inject(BrandService)
errorMessage: string | null = null;
ngOnInit(){
  this.fetchBrands();
}
fetchBrands(){
  this.brandService.getBrands()
  .subscribe({
    next:(brands)=>{
      this.marcas.set(brands)
    },
    error:(err)=>{
      this.errorMessage="No se pueden cargar las marcas en este momento. Por favor, intente más tarde."
    }
  })
}
addBrand():void{
  const data ={
    name: this.newBrandName
  };
  this.brandService.create(data)
  .subscribe(
  response =>{
    this.submitted = true;
    this.fetchBrands();
    this.closeModal();
    this.newBrandName= '';
  },
  error => {
    this.errorMessage="Error al registrar una Marca."
  }
  )
}
deleteBrand(id:number): void{
this.brandService.delete(id)
.subscribe(
  response =>{
    this.fetchBrands();
  },
  error => {
    this.errorMessage="Error al eliminar una Marca."
  }
)
}
updateBrand():void{
  const data = {
    id: this.currentBrandId,
    name: this.updateBrandName
  };
  this.brandService.update(data)
  .subscribe(
    response =>{
      this.submitted = true;
      this.fetchBrands();
      this.closeUpdateModal();
      this.updateBrandName= '';
    },
    error => {
      this.errorMessage="Error al registrar una Marca."
    }
  )
}
}
