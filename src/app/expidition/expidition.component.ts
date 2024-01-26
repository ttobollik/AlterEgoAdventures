import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from '../services/faq.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expedition',
  standalone: true,
  providers: [FaqService],
  imports: [NgbAccordionModule, HttpClientModule, CommonModule, NgbCarouselModule],
  templateUrl: './expidition.component.html',
  styleUrl: './expidition.component.scss',
})
export class ExpiditionComponent implements OnInit {
  ngOnInit(): void {}
}
