import { Component, ViewChild } from '@angular/core';
import {
  CinemasListingViewModel,
  selectCinemasListingViewModel,
} from './cinemas-listing.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { CinemaCardComponent } from '../../components/cinema-card/cinema-card.component';
import { AddCinemaModalComponent } from '../../modals/add-cinema-modal/add-cinema-modal.component';

@Component({
  selector: 'app-cinemas-listing',
  imports: [AsyncPipe, CinemaCardComponent, AddCinemaModalComponent],
  templateUrl: './cinemas-listing.component.html',
  styleUrl: './cinemas-listing.component.scss',
})
export class CinemasListingComponent {
  vm$!: Observable<CinemasListingViewModel>;
  cinemaModalOpened: boolean = false;

  constructor(private store: Store) {
    this.vm$ = this.store.select(selectCinemasListingViewModel);
  }
}
