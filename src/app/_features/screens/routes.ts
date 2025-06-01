import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/screens-listing/screens-listing.component').then(
        (m) => m.ScreensListingComponent
      ),
  },
];
