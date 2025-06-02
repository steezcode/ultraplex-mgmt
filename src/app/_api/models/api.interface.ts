export interface CinemasResponse {
  content: Cinema[];
}

export interface Cinema {
  id: number;
  name: string;
  screens: Screen[];
  totalScreens: number;
}

export interface MoviesResponse {
  content: Movie[];
}

export interface Movie {
  id: number;
  name: string;
  runtime: Date;
}

export interface BookingResponse {
  content: Booking[];
}

export interface Booking {
  id: number;
  screenId: number;
  seat: number;
}
