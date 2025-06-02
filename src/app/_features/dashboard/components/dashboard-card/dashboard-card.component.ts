import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface DashboardCard {
  title: string;
  value: number;
  route: string;
}

@Component({
  selector: 'app-dashboard-card',
  imports: [RouterLink],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input() data!: DashboardCard;
}
