import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/api/users' 
  constructor(private http: HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/all`)
  }
  create(data: any):Observable<any>{
    return this.http.post<User[]>(`${this.url}/save`, data)
  }
  delete(id:number):Observable<any>{
    return this.http.delete<User[]>(`${this.url}/delete/${id}`)
  }
  update(data:any):Observable<any>{
    return this.http.post<User[]>(`${this.url}/save`, data)
  }
  getUserWithoutRolWorker(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/withoutRolWorker`)
  }
}
