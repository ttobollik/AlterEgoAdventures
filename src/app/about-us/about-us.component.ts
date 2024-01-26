import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from '../services/faq.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  providers: [FaqService],
  imports: [NgbAccordionModule, HttpClientModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  tmp = [
    {
      name: 'Timothy Parrant',
      description:
        'Tim is Australian born but a worldwide nomad. He has been skydiving for over 15 years and BASE jumping and Paragliding for over 10 years. With 8000 plus skydives and still counting. Tim is an award winning Photographer and film maker, a Chief instructor, HALO operator, Cameraflyer and the creator of the Camera Flying Manual. He has organised some of the most extraordinary aerial stunts in skydive, base and paraglide such as first ever parachute jumps into the Sphinx egypt and Queens Temple, Legally base jumping off Angel Falls, 5 star exotic boogie in the Maldives and Guiness world record stunts just to name a few. Exotic event cannot happen without a professional manager - safety coordinator and photographer like Tim.',
      img: 'assets/img/tim.png',
    },
    {
      name: 'Jeannie',
      description:
        'Tim is Australian born but a worldwide nomad. He has been skydiving for over 15 years and BASE jumping and Paragliding for over 10 years. With 8000 plus skydives and still counting. Tim is an award winning Photographer and film maker, a Chief instructor, HALO operator, Cameraflyer and the creator of the Camera Flying Manual. He has organised some of the most extraordinary aerial stunts in skydive, base and paraglide such as first ever parachute jumps into the Sphinx egypt and Queens Temple, Legally base jumping off Angel Falls, 5 star exotic boogie in the Maldives and Guiness world record stunts just to name a few. Exotic event cannot happen without a professional manager - safety coordinator and photographer like Tim.',
      img: 'assets/img/tim.png',
    },
    {
      name: 'XXX',
      description:
        'Tim is Australian born but a worldwide nomad. He has been skydiving for over 15 years and BASE jumping and Paragliding for over 10 years. With 8000 plus skydives and still counting. Tim is an award winning Photographer and film maker, a Chief instructor, HALO operator, Cameraflyer and the creator of the Camera Flying Manual. He has organised some of the most extraordinary aerial stunts in skydive, base and paraglide such as first ever parachute jumps into the Sphinx egypt and Queens Temple, Legally base jumping off Angel Falls, 5 star exotic boogie in the Maldives and Guiness world record stunts just to name a few. Exotic event cannot happen without a professional manager - safety coordinator and photographer like Tim.',
      img: 'assets/img/tim.png',
    },
  ];
  ngOnInit(): void {}
}
