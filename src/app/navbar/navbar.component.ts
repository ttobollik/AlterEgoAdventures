import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UpcomingService } from '../services/upcoming.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  providers: [UpcomingService, ModalService],
  imports: [NgbDropdownModule, CommonModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  upcomingData: any = {};

  constructor(
    private upcomingService: UpcomingService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.upcomingService.getUpcomingData().subscribe((data) => {
      this.upcomingData = data;
    });
  }

  openModal(): void {
    this.modalService.openModal();
  }
}
