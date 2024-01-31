import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryService } from '../services/gallery.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  standalone: true,
  providers: [GalleryService],
  imports: [NgbAccordionModule, HttpClientModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = [
    { src: 'https://picsum.photos/300/200', alt: 'test' },
    { src: 'https://picsum.photos/300/600', alt: 'test' },
    { src: 'https://picsum.photos/300/400', alt: 'test' },
    { src: 'https://picsum.photos/300/500', alt: 'test' },
    { src: 'https://picsum.photos/300/300', alt: 'test' },
    { src: 'https://picsum.photos/300/200', alt: 'test' },
    { src: 'https://picsum.photos/300/100', alt: 'test' },
    { src: 'https://picsum.photos/300/600', alt: 'test' },
  ];
  images$: Observable<any> = this.galleryService.getUpcomingData();

  constructor(private galleryService: GalleryService) {}
}
