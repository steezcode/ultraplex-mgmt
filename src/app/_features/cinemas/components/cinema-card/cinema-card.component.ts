import { Component, Input } from '@angular/core';
import { CinemaData, ScreenData } from '../../../../_core/models/core.models';

@Component({
  selector: 'app-cinema-card',
  imports: [],
  templateUrl: './cinema-card.component.html',
  styleUrl: './cinema-card.component.scss',
})
export class CinemaCardComponent {
  @Input() cinemaData!: CinemaData;

  ngOnInit() {
    console.log(this.cinemaData);
  }
}
