import axios from 'axios';
import type { Movie, SearchResult, SearchFilters } from '../types';

const API_KEY = '30cd300f';
const BASE_URL = 'https://www.omdbapi.com/';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const searchMovies = async (filters: SearchFilters): Promise<SearchResult> => {
  try {
    const params: Record<string, string> = {
      apikey: API_KEY,
      s: filters.query,
      type: filters.type || 'movie',
    };

    if (filters.year) {
      params.y = filters.year;
    }

    const response = await apiClient.get<SearchResult>('', { params });
    
    if (response.data.Response === 'False') {
      return {
        Search: [],
        totalResults: '0',
        Response: 'False',
        Error: response.data.Error,
      };
    }

    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw new Error('Failed to search movies');
  }
};

export const getMovieDetails = async (imdbID: string): Promise<Movie> => {
  try {
    const response = await apiClient.get<Movie>('', {
      params: {
        apikey: API_KEY,
        i: imdbID,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Failed to fetch movie details');
  }
};

export const getTrendingMovies = async (): Promise<SearchResult> => {
  // OMDB doesn't have a trending endpoint, so we'll search for popular movies
  const trendingQueries = ['Marvel', 'Star Wars', 'Batman', 'Spider-Man', 'Avengers'];
  const randomQuery = trendingQueries[Math.floor(Math.random() * trendingQueries.length)];

  return searchMovies({ query: randomQuery });
};
