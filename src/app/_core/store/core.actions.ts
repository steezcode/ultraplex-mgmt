import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { CinemaData } from '../models/core.models';

export const retrieveCoreData = createAction('[Core] Retrieve Core Data');

export const retrieveCinemasSuccess = createAction(
  '[Core] Retrieve Cinemas Success',
  props<{ cinemaData: any }>()
);

export const retrieveCinemasFailure = createAction(
  '[Core] Retrieve Cinemas Failure',
  props<{ error: HttpErrorResponse }>()
);
