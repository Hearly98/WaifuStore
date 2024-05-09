import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../../../models/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/api/auth/documents'

  getAll(): Observable<Document[]>{
    return this.http.get<Document[]>(`${this.url}/all`)
  }
}
