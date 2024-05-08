import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../environment/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiUrl = enviroment.API_URL;

  constructor(private http: HttpClient) { }
  
 
  login(user:User): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/auth/login`, user)
  }
  register(user:User): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/auth/register`, user)
  }
  }
