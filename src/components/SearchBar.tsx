import React, { useState } from 'react';
import type { SearchFilters } from '../types';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch({
        query: query.trim(),
        year: year || undefined,
      });
    }
  };

  const handleClear = () => {
    setQuery('');
    setYear('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies, TV shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            className="search-input"
          />
          <input
            type="number"
            placeholder="Year (optional)"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max={currentYear}
            disabled={isLoading}
            className="year-input"
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="search-button"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={isLoading}
            className="clear-button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
