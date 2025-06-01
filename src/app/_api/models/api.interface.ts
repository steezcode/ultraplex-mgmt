export interface CinemasResponse {
  content: Cinema[];
  totalElements: number;
}

export interface Cinema {
  id: number;
  name: string;
  screens: Screen[];
  totalScreens: number;
}
