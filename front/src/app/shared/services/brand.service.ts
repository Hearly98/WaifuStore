import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../../models/brand';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/api/auth/brands'
  
  //Metodos Crud
  getBrands():Observable<Brand[]>{
    return this.http.get<Brand[]>(`${this.url}/all`)
  }
  create(data:any):Observable<any>{
    return this.http.post<Brand[]>(`${this.url}/save`, data)
  }
  delete(id:any):Observable<any>{
    return this.http.delete<Brand[]>(`${this.url}/delete/${id}`)
  }
  findByName(name:any):Observable<Brand[]>{
    return this.http.get<Brand[]>(`${this.url}/all?name=${name}`)
  }
  update(data:any):Observable<any>{
    return this.http.post<Brand[]>(`${this.url}/save`,data)
  }
}
