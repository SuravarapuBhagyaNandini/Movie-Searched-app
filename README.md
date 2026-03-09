# Movie Search Advanced

A modern React-based movie search application that allows users to discover, search, and manage their favorite movies. Built with Vite for optimal performance and development experience.

## Features

- **Movie Search**: Search for movies by title with optional year filtering
- **Trending Movies**: Automatically loads trending movies on startup
- **Favorites Management**: Save and manage your favorite movies using localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Movie Details**: View comprehensive information including plot, rating, and metadata
- **Fast Performance**: Built with Vite for lightning-fast HMR and optimized builds

## Technology Stack

- **React 19.2** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite 7.3** - Next-generation build tool
- **Axios** - HTTP client for API requests
- **OMDB API** - Movie data source

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OMDB API key (free tier available at https://www.omdbapi.com/apikey.aspx)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd movie-search-advanced
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your OMDB API key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Project Structure

```
src/
├── components/        # React components
│   ├── SearchBar.tsx
│   ├── MovieCard.tsx
│   ├── MovieList.tsx
│   └── Favorites.tsx
├── services/          # API services
│   └── omdbApi.ts
├── hooks/            # Custom React hooks
│   └── useFavorites.ts
├── types/            # TypeScript type definitions
│   └── index.ts
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Component Overview

### SearchBar
Handles movie search input with optional year filtering. Provides responsive search interface with clear functionality.

### MovieCard
Displays individual movie information including poster, title, year, type, and rating. Features a favorite toggle button.

### MovieList
Grid layout for displaying search results with loading and error states.

### Favorites
Dedicated section for viewing and managing saved favorite movies.

## Customization

### API Key
To use your own OMDB API key:
1. Visit https://www.omdbapi.com/apikey.aspx to get a free API key
2. Create a `.env.local` file in the project root
3. Add `VITE_OMDB_API_KEY=your_api_key_here`

### Styling
All component styles are in separate CSS files in the `src/components/` directory. Global styles are in `src/index.css` and `src/App.css`.

### Trending Movies
The trending movies are currently fetched by searching for popular franchises. Customize the `getTrendingMovies` function in `src/services/omdbApi.ts` to change this behavior.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting via Vite
- Image lazy loading via browser native support
- Optimized re-renders with React hooks
- localStorage caching for favorites

## License

MIT
