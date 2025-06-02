import { Component } from '@angular/core';
import {
  DashboardCardComponent,
  DashboardCard,
} from '../../components/dashboard-card/dashboard-card.component';
import { Observable } from 'rxjs';
import {
  DashboardViewModel,
  selectDashboardViewModel,
} from './dashboard.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  vm$!: Observable<DashboardViewModel>;
  cards: DashboardCard[] = [
    {
      title: 'Cinemas',
      value: 0,
      route: '/cinemas',
    },
    {
      title: 'Screens',
      value: 0,
      route: '/screens',
    },
    {
      title: 'Movies',
      value: 0,
      route: '/movies',
    },
    {
      title: 'Bookings',
      value: 0,
      route: '/bookings',
    },
  ];

  constructor(private store: Store) {
    this.vm$ = this.store.select(selectDashboardViewModel);

    this.vm$.subscribe((vm) => {
      this.cards[0].value = vm.numberOfCinemas;
      this.cards[1].value = vm.numberOfScreens;
      this.cards[2].value = vm.numberOfMovies;
      this.cards[3].value = vm.numberOfBookings;
    });
  }
}
