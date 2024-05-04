import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError,tap } from 'rxjs';
import { Brand } from '../../../models/brand';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/api/'
  getBrands(){
    return this.http.get<Brand[]>(`${this.url}brands/all`)
  }
}
