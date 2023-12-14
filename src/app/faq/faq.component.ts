import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from '../services/faq.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  providers: [FaqService],
  imports: [NgbAccordionModule, HttpClientModule, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  faqData: any = {};

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqService.getFaqData().subscribe((data) => {
      this.faqData = data;
      console.log(this.faqData);
    });
  }
}
