import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/cinemas-listing/cinemas-listing.component').then(
        (m) => m.CinemasListingComponent
      ),
  },
];
