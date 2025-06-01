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
      ofType(CoreActions.retrieveCoreData),
      switchMap(() => {
        return this.apiHttpService.getCinemas().pipe(
          switchMap((cinemas) => [
            CoreActions.retrieveCinemasSuccess({ cinemaData: cinemas.content }),
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
            CoreActions.retrieveCinemasSuccess({ cinemaData: movies }),
          ]),
          catchError((error) => [
            CoreActions.retrieveCinemasFailure({ error: error }),
          ])
        );
      })
    )
  );

  retrieveScreens$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.retrieveCoreData),
      switchMap(() => {
        return this.apiHttpService.getScreens().pipe(
          switchMap((screens) => [
            CoreActions.retrieveCinemasSuccess({ cinemaData: screens }),
          ]),
          catchError((error) => [
            CoreActions.retrieveCinemasFailure({ error: error }),
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
            CoreActions.retrieveCinemasSuccess({ cinemaData: bookings }),
          ]),
          catchError((error) => [
            CoreActions.retrieveCinemasFailure({ error: error }),
          ])
        );
      })
    )
  );
}
