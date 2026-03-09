import React from 'react';
import type { Movie } from '../types';
import { MovieCard } from './MovieCard';
import './Favorites.css';

interface FavoritesProps {
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
}

export const Favorites: React.FC<FavoritesProps> = ({ favorites, onToggleFavorite }) => {
  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <h2>My Favorites</h2>
        <span className="favorites-count">{favorites.length} movie(s)</span>
      </div>

      {favorites.length === 0 ? (
        <div className="no-favorites">
          <p>No favorite movies yet. Start adding your favorites!</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              onToggleFavorite={() => onToggleFavorite(movie)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
