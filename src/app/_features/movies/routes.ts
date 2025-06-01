import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/movies-listing/movies-listing.component').then(
        (m) => m.MoviesListingComponent
      ),
  },
];
