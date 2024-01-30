import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpcomingService } from '../services/upcoming.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  providers: [UpcomingService],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private upcomingService: UpcomingService
  ) {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      tripId: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''), // Validators for phone number required
      comments: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      // Handle form submission, like sending data to server
      this.activeModal.close();
    }
  }

  upcomingData$: Observable<any> = this.upcomingService.getUpcomingData();

  dismiss() {
    this.activeModal.dismiss();
  }
}
