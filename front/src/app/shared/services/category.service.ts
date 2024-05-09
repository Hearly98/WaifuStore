import { Injectable } from '@angular/core';
import { Category } from '../../../models/category';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/api/auth/category'
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.url}/all`)
  }
  create(data:any):Observable<any>{
    return this.http.post<Category[]>(`${this.url}/save`, data)
  }
  delete(id:any):Observable<any>{
    return this.http.delete<Category[]>(`${this.url}/delete/${id}`)
  }
  findByName(name:any):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.url}/all?name=${name}`)
  }
  update(data:any):Observable<any>{
    return this.http.post<Category[]>(`${this.url}/save`,data)
  }
}
