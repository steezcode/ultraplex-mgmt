export interface CinemaData {
  id: number;
  name: string;
  screens: Screen[];
  totalScreens: number;
}

export interface MovieData {
  id: number;
  name: string;
  runtime: Date;
}

export interface ScreenData {
  id: number;
  name: string;
  movieId: number;
  startTime: Date;
}

export interface BookingData {
  id: number;
  screenId: number;
  seat: number;
}
