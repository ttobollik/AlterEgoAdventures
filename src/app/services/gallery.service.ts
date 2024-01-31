import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private apiUrl = environment.apiUrl + environment.apiGallery;
  private token = environment.apiKey;

  private galleryDataSubject = new BehaviorSubject<string[]>([]);
  public images$: Observable<string[]> = this.galleryDataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadGalleryData();
  }

  private loadGalleryData() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    this.http
      .get<Data>(this.apiUrl, { headers })
      .pipe(
        tap((data) => {
          this.galleryDataSubject.next(data['records']);
        })
      )
      .subscribe();
  }

  getUpcomingData(): Observable<any[]> {
    return this.images$;
  }
}
