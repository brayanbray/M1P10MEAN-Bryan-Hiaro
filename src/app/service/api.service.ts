import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService { 
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  post(endpoint: string, body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, body, httpOptions);
  }
 
  put(endpoint: string, body: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, body, httpOptions);
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
}
