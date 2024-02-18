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
import { EmailService } from '../services/sendEmail.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  providers: [UpcomingService, EmailService],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpForm: FormGroup;
  packages = ['bronze (5)', 'silver (10)', 'gold (15)'];

  constructor(
    public activeModal: NgbActiveModal,
    private upcomingService: UpcomingService,
    private emailService: EmailService
  ) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      jumps: new FormControl('', Validators.required),
      referral: new FormControl('', Validators.required),
      tripId: new FormControl('', Validators.required),
      package: new FormControl('', Validators.required),
      discipline: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''), // Validators for phone number required
      comments: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formValues = {
        name: this.signUpForm.value.name,
        jumps: this.signUpForm.value.jumps,
        referral: this.signUpForm.value.referral,
        tripId: this.signUpForm.value.tripId,
        package: this.signUpForm.value.package,
        discipline: this.signUpForm.value.discipline,
        email: this.signUpForm.value.email,
        phone: this.signUpForm.value.phone,
        comments: this.signUpForm.value.comments,
      };

      this.emailService.sendEmail(formValues).subscribe();
      this.activeModal.close();
    }
  }

  upcomingData$: Observable<any> = this.upcomingService.getUpcomingData();

  dismiss() {
    this.activeModal.dismiss();
  }
}
