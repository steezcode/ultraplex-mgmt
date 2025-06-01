import {
  BookingData,
  CinemaData,
  MovieData,
  ScreenData,
} from '../models/core.models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const cinemasEntityAdapter: EntityAdapter<CinemaData> =
  createEntityAdapter<CinemaData>({
    selectId: (cinema: CinemaData) => cinema.id,
  });

export const moviesEntityAdapter: EntityAdapter<MovieData> =
  createEntityAdapter<MovieData>({
    selectId: (movie: MovieData) => movie.id,
  });

export const screensEntityAdapter: EntityAdapter<ScreenData> =
  createEntityAdapter<ScreenData>({
    selectId: (screen: ScreenData) => screen.id,
  });

export const bookingsEntityAdapter: EntityAdapter<BookingData> =
  createEntityAdapter<BookingData>({
    selectId: (booking: BookingData) => booking.id,
  });
