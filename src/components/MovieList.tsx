import React from 'react';
import type { Movie } from '../types';
import { MovieCard } from './MovieCard';
import './MovieList.css';

interface MovieListProps {
  movies: Movie[];
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
  isLoading: boolean;
  error?: string;
}

export const MovieList: React.FC<MovieListProps> = ({
  movies,
  favorites,
  onToggleFavorite,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <div className="loading">Loading movies...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (movies.length === 0) {
    return <div className="no-results">No movies found. Try searching for something!</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          onToggleFavorite={() => onToggleFavorite(movie)}
        />
      ))}
    </div>
  );
};
