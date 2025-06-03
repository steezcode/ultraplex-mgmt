import { createSelector } from '@ngrx/store';
import { selectAllMovies } from '../../../../_core/store';
import { MovieData } from '../../../../_core/models/core.models';

export interface MoviesListingViewModel {
  movies: MovieData[];
}

export const selectMoviesListingViewModel = createSelector(
  selectAllMovies,
  (movies: MovieData[]): MoviesListingViewModel => {
    return {
      movies,
    };
  }
);
