import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  BookingResponse,
  CinemasResponse,
  MoviesResponse,
  ScreeningPayload,
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

  addCinema(name: string): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/cinemas`, { name });
  }

  addScreen(cinemaId: string, name: string): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/cinemas/${cinemaId}/screens`, {
      name,
    });
  }

  addMovie(name: string, runtime: string): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/movies`, { name, runtime });
  }

  addScreening(
    cinemaId: string,
    screenId: string,
    payload: ScreeningPayload
  ): Observable<any> {
    console.log(payload);
    return this.httpClient.put(
      `${this.baseUrl}/cinemas/${cinemaId}/screens/${screenId}/screenings`,
      payload
    );
  }
}
