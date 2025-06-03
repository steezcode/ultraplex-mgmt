import { createSelector } from '@ngrx/store';
import {
  selectAllCinemas,
  selectAllMovies,
  selectNumberOfBookings,
  selectNumberOfCinemas,
  selectNumberOfMovies,
  selectTotalNumberOfScreens,
} from '../../../../_core/store';
import { CinemaData, MovieData } from '../../../../_core/models/core.models';

export interface DashboardViewModel {
  numberOfCinemas: number;
  numberOfMovies: number;
  numberOfBookings: number;
  numberOfScreens: number;
  cinemas: CinemaData[];
  movies: MovieData[];
}

export const selectDashboardViewModel = createSelector(
  selectNumberOfCinemas,
  selectNumberOfMovies,
  selectTotalNumberOfScreens,
  selectNumberOfBookings,
  selectAllCinemas,
  selectAllMovies,
  (
    numberOfCinemas: number,
    numberOfMovies: number,
    numberOfScreens: number,
    numberOfBookings: number,
    cinemas: CinemaData[],
    movies: MovieData[]
  ): DashboardViewModel => {
    return {
      numberOfCinemas,
      numberOfMovies,
      numberOfBookings,
      numberOfScreens,
      cinemas,
      movies,
    };
  }
);
