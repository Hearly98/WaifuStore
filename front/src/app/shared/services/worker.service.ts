import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../../../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  url = 'http://localhost:8080/api/auth/worker'
  constructor(private http: HttpClient) { }
  getAll(): Observable<Worker[]>{
    return this.http.get<Worker[]>(`${this.url}/all`)
  }
  create(data: Worker): Observable<any>{
    return this.http.post<Worker[]>(`${this.url}/save`, data)
  }
  update(data: any):Observable<any>{
    return this.http.post<Worker[]>(`${this.url}/save`, data)
  }
  delete(id:number):Observable<any>{
    return this.http.delete<Worker[]>(`${this.url}/delete/${id}`)
  }
}
