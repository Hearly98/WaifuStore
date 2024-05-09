import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from '../../../models/sales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private baseUrl = 'http://localhost:8080/auth/header';
  constructor(private http: HttpClient) { }
  getAllHeaders(): Observable<Header[]> {
    return this.http.get<Header[]>(`${this.baseUrl}/all`);
  }

  getHeaderById(id: number): Observable<Header> {
    return this.http.get<Header>(`${this.baseUrl}/${id}`);
  }

  createHeader(header: Header): Observable<Header> {
    return this.http.post<Header>(`${this.baseUrl}/save`, header);
  }
}
