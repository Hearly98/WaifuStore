import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Brand } from '../../../../models/brand';
import { BrandService } from '../../../shared/services/brand.service';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './brands.component.html'
})
export class BrandsComponent implements OnInit{
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
}
