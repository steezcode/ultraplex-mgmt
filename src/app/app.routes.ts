import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./_features/dashboard/routes').then((m) => m.routes),
      },
      {
        path: 'cinemas',
        loadChildren: () =>
          import('./_features/cinemas/routes').then((m) => m.routes),
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./_features/movies/routes').then((m) => m.routes),
      },
      {
        path: 'screens',
        loadChildren: () =>
          import('./_features/screens/routes').then((m) => m.routes),
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('./_features/bookings/routes').then((m) => m.routes),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];
