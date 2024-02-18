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

  images$: Observable<any> = this.galleryService.getUpcomingData();

  constructor(private galleryService: GalleryService) {}
}
