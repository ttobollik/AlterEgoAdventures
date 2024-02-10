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
      img: 'assets/img/TimProfile.jpeg',
    },
    {
      name: 'Jeannie Bartholomew',
      description:
        'Jeannie Bartholomew has over 10,500 jumps and 18 years in the sport. She is a full time canopy coach and pro canopy piloting competitor on Team Alter Ego Fastrax. She’s an accomplished competitor currently ranked 2nd in the USA in freestyle and the top female freestyle canopy pilot in the world. She also holds 21 records in CP. She co owns the Alter Ego Project canopy piloting school, the United States Canopy Piloting Association which is a National CP competition circuit in addition to Alter Ego Adventures. She is a USPA National Director, AFFI and has also has her Pro rating. Curt and Jeannie have been traveling the world since 2010 and have been to over 60 countries for skydiving events, competition and vacation. She’s experienced the world from above as well as immersing herself in the local culture of every country she’s visited. She is excited to share her love, passion and experience traveling the world with all of the Alter Ego Adventure travelers!',
      img: 'assets/img/jeannie.jpeg',
    },
    {
      name: 'Curt Bartholomew',
      description:
        'Curt Bartholomew has over 12,500 jumps and 18 years in the sport. He is a full time canopy coach and pro canopy piloting competitor on Team Alter Ego Fastrax. Curt is the current World Champion in CP and CP Freestyle and an 8x World Champion and 10x National Champion. He co owns the Alter Ego Project canopy piloting school, the United States Canopy Piloting Association which is a National CP competition circuit in addition to Alter Ego Adventures with his wife Jeannie. Be has a degree in aeronautics with a several minors; airport management and air traffic control. He is an AFFI and has also his Pro rating. Curt and Jeannie have been traveling the world since 2010 and have been to over 60 countries for skydiving events, competition and vacation. He is excited to share his vast knowledge of skydiving, travel and special projects with all of the Alter Ego Adventure travelers!',
      img: 'assets/img/curt.jpeg',
    },
  ];
  ngOnInit(): void {}
}
