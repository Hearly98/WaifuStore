import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/api/products'
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/all`)
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  create(data: Product): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.url}/save`, data);
  }

  update(data: any): Observable<any> {
    return this.http.post<Product[]>(`${this.url}/save`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Product[]>(`${this.url}/delete/${id}`);
  }
}
