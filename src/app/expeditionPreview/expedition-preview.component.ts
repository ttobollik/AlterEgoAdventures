import { Component, OnInit } from '@angular/core';
import { UpcomingService } from '../services/upcoming.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expedition-preview',
  standalone: true,
  providers: [UpcomingService],
  imports: [HttpClientModule, CommonModule],
  templateUrl: './expedition-preview.component.html',
  styleUrl: './expedition-preview.component.scss',
})
export class ExpeditionPreviewComponent implements OnInit {
  upcomingData: any = {};

  constructor(private upcomingService: UpcomingService) {}

  ngOnInit(): void {
    this.upcomingService.getUpcomingData().subscribe((data) => {
      this.upcomingData = data;
    });
  }
}
