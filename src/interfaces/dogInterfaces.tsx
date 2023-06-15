export interface dogData {
  dogName: string;

  sex: string;
  born: string;
  size: string;
  breed: string;

  dogB: string;
  humanB: string;
  animalB: string;

  id: string;
  sterilized: boolean;

  notes?: string;
  warning?: string;

  images200: string[];
  images400: string[];
  images500: string[];
  images700: string[];
}

export interface allDogsData {
  pagination: {
    allDogsCount: number;
    page: number;
    results: number;
    totalPages: number;
  };
  allDogs: dogData[];
}
