import { Component} from '@angular/core';
import {
  NgbAccordionModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { UpcomingService } from '../services/upcoming.service';
import { of, switchMap } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-expedition',
  standalone: true,
  providers: [UpcomingService],
  imports: [
    NgbAccordionModule,
    CommonModule,
    NgbCarouselModule,
    HttpClientModule,
  ],
  templateUrl: './expedition.component.html',
  styleUrl: './expedition.component.scss',
})
export class ExpeditionComponent {
  constructor(
    private upcomingService: UpcomingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  expedition$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      if (id) {
        return this.upcomingService.getRecordById(id);
      }
      this.router.navigate(['.']);
      return of(undefined);
    })
  );

  ngOnInit() {
    //this.expedition$.subscribe((x) => console.log(x?.fields));
  }
}
