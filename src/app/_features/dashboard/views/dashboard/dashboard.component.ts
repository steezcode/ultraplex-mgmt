import { Component } from '@angular/core';
import {
  DashboardCardComponent,
  DashboardCard,
} from '../../components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cards: DashboardCard[] = [
    {
      title: 'Cinemas',
      value: 12,
    },
    {
      title: 'Screens',
      value: 50,
    },
    {
      title: 'Movies',
      value: 20,
    },
    {
      title: 'Bookings',
      value: 150,
    },
  ];
}
