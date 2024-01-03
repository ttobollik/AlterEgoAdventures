import { Component, OnInit } from '@angular/core';
import { UpcomingService } from '../services/upcoming.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  providers: [UpcomingService],
  imports: [HttpClientModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})

export class HeroComponent implements OnInit {
  upcomingData: any = {};

  constructor(private upcomingService: UpcomingService) {}

  ngOnInit(): void {
    this.upcomingService.getUpcomingData().subscribe((data) => {
      this.upcomingData = data;
      console.log(this.upcomingData);
    });
  }
}
