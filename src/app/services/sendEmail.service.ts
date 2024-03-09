import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private apiKey = environment.apiKeyBrevo;

  sendEmail(emailData: any) {
    const data = {
      templateId: 1,
      subject: 'Successfull Sign Up',
      to: [{ email: emailData.email, name: emailData.name }],
      cc: [{ email: 'tim@thealteregoproject.com', name: 'Tim Parrant' }],
      params: emailData,
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey,
    };
    this.http
      .post('https://api.brevo.com/v3/smtp/email', data, {
        headers: headers,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.toastr.error(
            'Please contact us via email to continue.',
            'An error occured.'
          );
          return throwError(error);
        })
      )
      .subscribe((x) => {
        this.toastr.success(
          'You are all set!',
          'You will receive an email soon.'
        );
      });
  }
}
