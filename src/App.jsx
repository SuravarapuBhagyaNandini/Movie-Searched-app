import { useState, useEffect } from 'react';
import './App.css';
import { searchMovies, getTrendingMovies } from './services/omdbApi.jsx';
import { useFavorites } from './hooks/useFavorites.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { MovieList } from './components/MovieList.jsx';
import { Favorites } from './components/Favorites.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [activeTab, setActiveTab] = useState('search');
  const { favorites, toggleFavorite } = useFavorites();

  // Load trending movies on mount
  useEffect(() => {
    loadTrendingMovies();
  }, []);

  const loadTrendingMovies = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const result = await getTrendingMovies();
      if (result.Search) {
        setMovies(result.Search);
      }
    } catch (err) {
      setError('Failed to load trending movies');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (filters) => {
    setIsLoading(true);
    setError(undefined);
    try {
      const result = await searchMovies(filters);
      if (result.Response === 'False') {
        setMovies([]);
        setError(result.Error || 'No movies found');
      } else if (result.Search) {
        setMovies(result.Search);
      }
    } catch (err) {
      setError('Failed to search movies');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🎬 Movie Search</h1>
          <p>Discover and track your favorite movies</p>
        </div>
        <nav className="header-nav">
          <button
            className={`nav-button ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Search
          </button>
          <button
            className={`nav-button ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites ({favorites.length})
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'search' ? (
          <div className="search-section">
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
            <MovieList
              movies={movies}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              isLoading={isLoading}
              error={error}
            />
          </div>
        ) : (
          <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2026 Movie Search. Powered by OMDB API</p>
      </footer>
    </div>
  );
}

export default App;
