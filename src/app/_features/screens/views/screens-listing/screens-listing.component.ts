import { Component } from '@angular/core';
import {
  ScreensListingViewModel,
  selectScreensListingViewModel,
} from './screens-listing.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ScreenCardComponent } from '../../components/screen-card/screen-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-screens-listing',
  imports: [ScreenCardComponent, AsyncPipe],
  templateUrl: './screens-listing.component.html',
  styleUrl: './screens-listing.component.scss',
})
export class ScreensListingComponent {
  vm$: Observable<ScreensListingViewModel>;

  constructor(private store: Store) {
    this.vm$ = this.store.select(selectScreensListingViewModel);
  }
}
