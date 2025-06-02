import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BookingData, CinemaData, MovieData } from '../models/core.models';

export const retrieveCoreData = createAction('[Core] Retrieve Core Data');

export const retrieveCinemasSuccess = createAction(
  '[Core] Retrieve Cinemas Success',
  props<{ cinemasData: CinemaData[] }>()
);

export const retrieveCinemasFailure = createAction(
  '[Core] Retrieve Cinemas Failure',
  props<{ error: HttpErrorResponse }>()
);

export const retrieveMoviesSuccess = createAction(
  '[Core] Retrieve Movies Success',
  props<{ moviesData: MovieData[] }>()
);

export const retrieveMoviesFailure = createAction(
  '[Core] Retrieve Movies Failure',
  props<{ error: HttpErrorResponse }>()
);

export const retrieveBookingsSuccess = createAction(
  '[Core] Retrieve Bookings Success',
  props<{ bookingsData: BookingData[] }>()
);

export const retrieveBookingsFailure = createAction(
  '[Core] Retrieve Bookings Failure',
  props<{ error: HttpErrorResponse }>()
);
