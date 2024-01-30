import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  openModal(): void {
    this.modalService.open(SignUpComponent, {
      // Optional configuration
    });
  }
}