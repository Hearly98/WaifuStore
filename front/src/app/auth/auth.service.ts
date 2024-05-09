import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../environment/environment';
import { LoginRequest } from '../../models/login';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiUrl = enviroment.API_URL;

  constructor(private http: HttpClient) { }
  
 
  login(loginData: LoginRequest): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/auth/login`, loginData)
  }
  register(loginData: LoginRequest): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/auth/register`, loginData)
  }

  
private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Ocurrió un error desconocido!';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error de red: ${error.error.message}`;
  } else {
    errorMessage = `El servidor devolvió el código ${error.status}, mensaje de error es: ${error.message}`;
  }
  console.error(errorMessage);
  return throwError(() => new Error(errorMessage));
}
  }
