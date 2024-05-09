import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  url= "http://localhost:8080/api/auth"
  constructor(private http: HttpClient) { }

  getDashboardDataClient(): Observable<number> {
    return this.http.get<number>(`${this.url}/count/clients`);
  }
  getDashboardDataWorker(): Observable<number> {
    return this.http.get<number>(`${this.url}/count/workers`);
  }
}
