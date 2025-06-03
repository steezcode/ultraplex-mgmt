import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  MoviesListingViewModel,
  selectMoviesListingViewModel,
} from './movies-listing.selector';
import { Store } from '@ngrx/store';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { AddMovieModalComponent } from '../../modals/add-movie-modal/add-movie-modal.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movies-listing',
  imports: [MovieCardComponent, AddMovieModalComponent, AsyncPipe],
  templateUrl: './movies-listing.component.html',
  styleUrl: './movies-listing.component.scss',
})
export class MoviesListingComponent {
  vm$!: Observable<MoviesListingViewModel>;
  movieModalOpened: boolean = false;

  constructor(private store: Store) {
    this.vm$ = this.store.select(selectMoviesListingViewModel);
  }
}
