import { EntityState } from '@ngrx/entity';
import {
  bookingsEntityAdapter,
  cinemasEntityAdapter,
  moviesEntityAdapter,
  screensEntityAdapter,
} from './core.adapters';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';
import {
  BookingData,
  CinemaData,
  MovieData,
  ScreenData,
} from '../models/core.models';

export const coreFeatureKey: 'core' = 'core';

export interface CoreState {
  cinemas: EntityState<CinemaData>;
  screens: EntityState<ScreenData>;
  movies: EntityState<MovieData>;
  bookings: EntityState<BookingData>;
}

export const initialCoreState: CoreState = {
  cinemas: cinemasEntityAdapter.getInitialState(),
  screens: screensEntityAdapter.getInitialState(),
  movies: moviesEntityAdapter.getInitialState(),
  bookings: bookingsEntityAdapter.getInitialState(),
};

const coreReducer: ActionReducer<CoreState> = createReducer<CoreState>(
  initialCoreState

  // on(CoreActions.retrieveCinemasSuccess, (state, { cinemaData }) => {
  //   return {
  //     ...state,
  //     cinemas: cinemasEntityAdapter.setAll(cinemaData, state.cinemas),
  //   };
  // })
);

export function reducer(state: CoreState | undefined, action: any): CoreState {
  return coreReducer(state, action);
}
