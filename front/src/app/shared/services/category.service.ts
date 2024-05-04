import { Injectable } from '@angular/core';
import { Category } from '../../../models/category';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/api/'
  getCategories(){
    return this.http.get<Category[]>(`${this.url}category/all`)
  }
}
