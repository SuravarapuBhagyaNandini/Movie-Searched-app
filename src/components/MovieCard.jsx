import React from 'react';
import './MovieCard.css';

export const MovieCard = ({
  movie,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="no-poster">No Image</div>
        )}
        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          ★
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <p className="movie-type">{movie.Type}</p>
        {movie.Plot && movie.Plot !== 'N/A' && (
          <p className="movie-plot">{movie.Plot}</p>
        )}
        {movie.imdbRating && movie.imdbRating !== 'N/A' && (
          <p className="movie-rating">⭐ {movie.imdbRating}/10</p>
        )}
      </div>
    </div>
  );
};
