import { Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: '',
    component: HeroComponent,
  },
];
