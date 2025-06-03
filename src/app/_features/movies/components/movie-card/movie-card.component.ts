import { Component, Input } from '@angular/core';
import { MovieData } from '../../../../_core/models/core.models';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movieData!: MovieData;
}
