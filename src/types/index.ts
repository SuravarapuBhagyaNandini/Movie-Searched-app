export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  Plot?: string;
  Director?: string;
  Actors?: string;
  Runtime?: string;
  imdbRating?: string;
}

export interface SearchResult {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface SearchFilters {
  query: string;
  year?: string;
  type?: string;
}
