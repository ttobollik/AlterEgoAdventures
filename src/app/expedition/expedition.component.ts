import { Component, OnInit } from '@angular/core';
import {
  NgbAccordionModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from '../services/faq.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expedition',
  standalone: true,
  providers: [FaqService],
  imports: [
    NgbAccordionModule,
    HttpClientModule,
    CommonModule,
    NgbCarouselModule,
  ],
  templateUrl: './expedition.component.html',
  styleUrl: './expedition.component.scss',
})
export class ExpeditionComponent implements OnInit {
  ngOnInit(): void {}
}
