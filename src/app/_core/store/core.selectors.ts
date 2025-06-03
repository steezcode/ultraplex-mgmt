import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coreFeatureKey, CoreState } from './core.reducer';
import { cinemasEntityAdapter, moviesEntityAdapter } from './core.adapters';
import { CinemaData } from '../models/core.models';

export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

const selectCinemasState = createSelector(
  selectCoreState,
  (state) => state.cinemas
);

const selectMoviesState = createSelector(
  selectCoreState,
  (state) => state.movies
);

const selectBookingsState = createSelector(
  selectCoreState,
  (state) => state.bookings
);

export const selectNumberOfCinemas = createSelector(
  selectCinemasState,
  (cinemaState) => cinemaState.ids.length
);

export const selectNumberOfMovies = createSelector(
  selectMoviesState,
  (moviesState) => moviesState.ids.length
);

export const selectNumberOfBookings = createSelector(
  selectBookingsState,
  (bookingsState) => bookingsState.ids.length
);

const { selectAll: selectAllCinemasFromAdapter } =
  cinemasEntityAdapter.getSelectors();

export const selectAllCinemas = createSelector(
  selectCinemasState,
  selectAllCinemasFromAdapter
);

export const selectTotalNumberOfScreens = createSelector(
  selectAllCinemas,
  (cinemas: CinemaData[]) =>
    cinemas.reduce((total, cinema) => total + cinema.screens.length, 0)
);

const { selectAll: selectAllMoviesFromAdapter } =
  moviesEntityAdapter.getSelectors();

export const selectAllMovies = createSelector(
  selectMoviesState,
  selectAllMoviesFromAdapter
);
