import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  BookingResponse,
  CinemasResponse,
  MoviesResponse,
} from './models/api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  private readonly baseUrl = 'https://ultraplex-solutions.poc.iov42.net/api/v1';

  constructor(private readonly httpClient: HttpClient) {}

  getCinemas(): Observable<CinemasResponse> {
    return this.httpClient.get<CinemasResponse>(`${this.baseUrl}/cinemas`);
  }

  getMovies(): Observable<MoviesResponse> {
    return this.httpClient.get<MoviesResponse>(`${this.baseUrl}/movies`);
  }

  getScreens(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/screens`);
  }

  getBookings(): Observable<BookingResponse> {
    return this.httpClient.get<BookingResponse>(`${this.baseUrl}/bookings`);
  }
}
