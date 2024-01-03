import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class UpcomingService {
  private apiUrl = environment.apiUrl + environment.apiUpcoming;
  private token = environment.apiKey;

  constructor(private http: HttpClient) {}

  getUpcomingData(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
