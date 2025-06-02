import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiHttpService } from '../../_api/api.http.service';
import { catchError, Observable, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';
import * as CoreActions from './core.actions';

@Injectable()
export class CoreEffects {
  private readonly actions$ = inject(Actions);

  constructor(private apiHttpService: ApiHttpService) {}

  retrieveCinemas$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.retrieveCoreData, CoreActions.addCinemaSuccess),
      switchMap(() => {
        return this.apiHttpService.getCinemas().pipe(
          switchMap((cinemas) => [
            CoreActions.retrieveCinemasSuccess({
              cinemasData: cinemas.content,
            }),
          ]),
          catchError((error) => [
            CoreActions.retrieveCinemasFailure({ error: error }),
          ])
        );
      })
    )
  );

  retrieveMovies$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.retrieveCoreData),
      switchMap(() => {
        return this.apiHttpService.getMovies().pipe(
          switchMap((movies) => [
            CoreActions.retrieveMoviesSuccess({ moviesData: movies.content }),
          ]),
          catchError((error) => [
            CoreActions.retrieveMoviesFailure({ error: error }),
          ])
        );
      })
    )
  );

  retrieveBookings$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.retrieveCoreData),
      switchMap(() => {
        return this.apiHttpService.getBookings().pipe(
          switchMap((bookings) => [
            CoreActions.retrieveBookingsSuccess({
              bookingsData: bookings.content,
            }),
          ]),
          catchError((error) => [
            CoreActions.retrieveBookingsFailure({ error: error }),
          ])
        );
      })
    )
  );

  addCinema$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.addCinema),
      switchMap((action) => {
        return this.apiHttpService.addCinema(action.name).pipe(
          switchMap(() => [CoreActions.addCinemaSuccess()]),
          catchError((error) => [
            CoreActions.retrieveCinemasFailure({ error: error }),
          ])
        );
      })
    )
  );
}
