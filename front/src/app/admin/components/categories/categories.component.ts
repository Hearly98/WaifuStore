import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Category } from '../../../../models/category';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  categories=signal<Category[]>([])
  private categoryService=inject(CategoryService)
  errorMessage: string | null = null;
  ngOnInit(){
    this.fetchCategories();
  }
  fetchCategories(){
    this.categoryService.getCategories()
    .subscribe({
      next:(categories)=>{
        this.categories.set(categories)
      },
      error:(err)=>{
        this.errorMessage="No se pueden cargar las marcas en este momento. Por favor, intente más tarde."
      }
    })
  }
}
