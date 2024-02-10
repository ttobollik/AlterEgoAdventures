import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const apiUrl =
      'https://cbwqx9au58.execute-api.eu-north-1.amazonaws.com/testing/sendEmailToAlterEgo';
    return this.http.post(apiUrl, emailData, httpOptions);
  }
}
