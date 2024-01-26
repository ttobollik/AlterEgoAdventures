import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from '../services/faq.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  providers: [FaqService],
  imports: [NgbAccordionModule, HttpClientModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
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
  ngOnInit(): void {}
}
