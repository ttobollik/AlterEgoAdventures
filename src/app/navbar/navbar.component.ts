import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UpcomingService } from '../services/upcoming.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  providers: [UpcomingService],
  imports: [NgbDropdownModule, CommonModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  upcomingData: any = {};

  constructor(private upcomingService: UpcomingService) {}

  ngOnInit(): void {
    this.upcomingService.getUpcomingData().subscribe((data) => {
      this.upcomingData = data;
    });
  }
}
