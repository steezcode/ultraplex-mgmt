import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BookingData, CinemaData, MovieData } from '../models/core.models';
import { ScreeningPayload } from '../../_api/models/api.interface';

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

export const addCinema = createAction(
  '[Core] Add Cinema',
  props<{ name: string }>()
);

export const addCinemaSuccess = createAction('[Core] Add Cinema Success');

export const addCinemaFailure = createAction(
  '[Core] Add Cinema Failure',
  props<{ error: HttpErrorResponse }>()
);

export const addMovie = createAction(
  '[Core] Add Movie',
  props<{ name: string; runTime: string }>()
);

export const addMovieSuccess = createAction('[Core] Add Movie Success');

export const addMovieFailure = createAction(
  '[Core] Add Movie Failure',
  props<{ error: HttpErrorResponse }>()
);

export const addScreening = createAction(
  '[Core] Add Screening',
  props<{ cinemaId: string; screenId: string; payload: ScreeningPayload }>()
);

export const addScreeningSuccess = createAction('[Core] Add Screening Success');

export const addScreeningFailure = createAction(
  '[Core] Add Screening Failure',
  props<{ error: HttpErrorResponse }>()
);
