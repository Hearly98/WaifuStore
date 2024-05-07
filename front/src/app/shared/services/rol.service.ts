import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from '../../../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient ) {}
  url = 'http://localhost:8080/api/roles'

  getAll(): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${this.url}/all`)
  }
}
