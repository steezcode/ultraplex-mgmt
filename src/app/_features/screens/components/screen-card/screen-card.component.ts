import { Component, Input } from '@angular/core';
import { CinemaData } from '../../../../_core/models/core.models';

@Component({
  selector: 'app-screen-card',
  imports: [],
  templateUrl: './screen-card.component.html',
  styleUrl: './screen-card.component.scss',
})
export class ScreenCardComponent {
  @Input() cinemaData!: CinemaData;

  isExpanded: boolean = false;
}
