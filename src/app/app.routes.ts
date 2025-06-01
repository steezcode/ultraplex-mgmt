import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, Store } from '@ngrx/store';
import { inject } from '@angular/core';

import * as fromCore from './_core/store';
import * as CoreActions from './_core/store/core.actions';

export const routes: Routes = [
  {
    path: '',
    providers: [
      provideState(fromCore.coreFeatureKey, fromCore.reducer),
      provideEffects(fromCore.CoreEffects),
    ],
    resolve: [() => inject(Store).dispatch(CoreActions.retrieveCoreData())],
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
