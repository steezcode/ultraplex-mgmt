import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/bookings-listing/bookings-listing.component').then(
        (m) => m.BookingsListingComponent
      ),
  },
];
