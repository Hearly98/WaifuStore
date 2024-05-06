import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Category } from '../../../../models/category';
import { CategoryService } from '../../../shared/services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit{
  isOpenUpdateModal = false
  isOpenModal = false;
  newCategoryName = '';
  updateCategoryName = '';
  currentCategoryId !:number;

  openUpdateModal(categoria:Category):void{
    this.isOpenUpdateModal = true;
    this.updateCategoryName = categoria.name;
    this.currentCategoryId = categoria.id;
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
  categories=signal<Category[]>([])
  private categoryService=inject(CategoryService)
  errorMessage: string | null = null;

  ngOnInit(): void{
    this.fetchCategories();
  }
  fetchCategories(){
    this.categoryService.getCategories()
    .subscribe({
      next:(categories)=>{
        this.categories.set(categories)
      },
      error:(err)=>{
        this.errorMessage="No se pueden cargar las categorias en este momento. Por favor, intente más tarde."
      }
    })
  }
  addCategory():void{
    const data ={
      name: this.newCategoryName
    };
    this.categoryService.create(data)
    .subscribe(
    response =>{
      this.submitted = true;
      this.fetchCategories();
      this.closeModal();
      this.newCategoryName= '';
    },
    error => {
      this.errorMessage="Error al registrar una Categoría."
    }
    )
  }
  deleteCategory(id:number): void{
  this.categoryService.delete(id)
  .subscribe(
    response =>{
      this.fetchCategories();
      this.closeModal();
    },
    error => {
      this.errorMessage="Error al eliminar una Categoría."
    }
  )
  }
  updateCategory():void{
    const data = {
      id: this.currentCategoryId,
      name: this.updateCategoryName
    };
    this.categoryService.update(data)
    .subscribe(
      response =>{
        this.submitted = true;
        this.fetchCategories();
        this.closeUpdateModal();
        this.updateCategoryName= '';
      },
      error => {
        this.errorMessage="Error al actualizar una Categoría."
      }
    )
  }
}
