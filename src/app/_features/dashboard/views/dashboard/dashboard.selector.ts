import { createSelector } from '@ngrx/store';
import {
  selectNumberOfBookings,
  selectNumberOfCinemas,
  selectNumberOfMovies,
  selectTotalNumberOfScreens,
} from '../../../../_core/store';

export interface DashboardViewModel {
  numberOfCinemas: number;
  numberOfMovies: number;
  numberOfBookings: number;
  numberOfScreens: number;
}

export const selectDashboardViewModel = createSelector(
  selectNumberOfCinemas,
  selectNumberOfMovies,
  selectTotalNumberOfScreens,
  selectNumberOfBookings,
  (
    numberOfCinemas: number,
    numberOfMovies: number,
    numberOfScreens: number,
    numberOfBookings: number
  ): DashboardViewModel => {
    return {
      numberOfCinemas,
      numberOfMovies,
      numberOfBookings,
      numberOfScreens,
    };
  }
);
