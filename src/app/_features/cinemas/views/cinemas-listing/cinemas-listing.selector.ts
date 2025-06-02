import { createSelector } from '@ngrx/store';
import { selectAllCinemas } from '../../../../_core/store';
import { CinemaData } from '../../../../_core/models/core.models';

export interface CinemasListingViewModel {
  cinemas: CinemaData[];
}

export const selectCinemasListingViewModel = createSelector(
  selectAllCinemas,
  (cinemas: CinemaData[]): CinemasListingViewModel => {
    return {
      cinemas,
    };
  }
);
