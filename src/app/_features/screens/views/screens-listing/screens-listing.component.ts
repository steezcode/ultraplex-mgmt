import { Component } from '@angular/core';
import {
  ScreensListingViewModel,
  selectScreensListingViewModel,
} from './screens-listing.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ScreenCardComponent } from '../../components/screen-card/screen-card.component';
import { AsyncPipe } from '@angular/common';
import { AddScreenModalComponent } from '../../modals/add-screen-modal/add-screen-modal.component';

@Component({
  selector: 'app-screens-listing',
  imports: [ScreenCardComponent, AsyncPipe, AddScreenModalComponent],
  templateUrl: './screens-listing.component.html',
  styleUrl: './screens-listing.component.scss',
})
export class ScreensListingComponent {
  vm$: Observable<ScreensListingViewModel>;

  screenModalOpened: boolean = false;

  constructor(private store: Store) {
    this.vm$ = this.store.select(selectScreensListingViewModel);
  }
}
