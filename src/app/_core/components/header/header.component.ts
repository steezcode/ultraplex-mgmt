import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  routes: { name: string; path: string }[] = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Cinemas', path: '/cinemas' },
    { name: 'Screens', path: '/screens' },
    { name: 'Movies', path: '/movies' },
    { name: 'Bookings', path: '/bookings' },
  ];
  constructor(private _router: Router) {}

  isCurrentRoute(route: string): boolean {
    return this._router.url.includes(route);
  }
}
