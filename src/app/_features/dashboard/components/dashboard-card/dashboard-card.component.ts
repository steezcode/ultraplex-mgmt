import { Component, Input } from '@angular/core';

export interface DashboardCard {
  title: string;
  value: number;
}

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input() data!: DashboardCard;
}
