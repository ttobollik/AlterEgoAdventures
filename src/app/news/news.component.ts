import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { NewsService } from '../services/news.service';
import { ParagraphPipe } from '../pipes/paragraph.pipe';

@Component({
  selector: 'app-news',
  standalone: true,
  providers: [NewsService],
  imports: [NgbAccordionModule, HttpClientModule, CommonModule, ParagraphPipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  ngOnInit(): void {}

  news$: Observable<any> = this.newsService.getNewsData();

  constructor(private newsService: NewsService) {}
}
