import { createSelector } from '@ngrx/store';
import { selectAllCinemas } from '../../../../_core/store';
import { CinemaData } from '../../../../_core/models/core.models';

export interface ScreensListingViewModel {
  cinemas: CinemaData[];
}

export const selectScreensListingViewModel = createSelector(
  selectAllCinemas,
  (cinemas: CinemaData[]): ScreensListingViewModel => {
    return {
      cinemas,
    };
  }
);
