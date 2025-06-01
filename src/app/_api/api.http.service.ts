import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CinemasResponse } from './models/api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  private readonly baseUrl = 'https://ultraplex-solutions.poc.iov42.net/api/v1';

  constructor(private readonly httpClient: HttpClient) {}

  getCinemas(): Observable<CinemasResponse> {
    return this.httpClient.get<CinemasResponse>(`${this.baseUrl}/cinemas`);
  }

  getMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movies`);
  }

  getScreens(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/screens`);
  }

  getBookings(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/bookings`);
  }
}
