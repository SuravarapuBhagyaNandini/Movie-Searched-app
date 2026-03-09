/* JSDoc type definitions for Movie Search App */

/**
 * @typedef {Object} Movie
 * @property {string} imdbID
 * @property {string} Title
 * @property {string} Year
 * @property {string} Type
 * @property {string} Poster
 * @property {string} [Plot]
 * @property {string} [Director]
 * @property {string} [Actors]
 * @property {string} [Runtime]
 * @property {string} [imdbRating]
 */

/**
 * @typedef {Object} SearchResult
 * @property {Movie[]} Search
 * @property {string} totalResults
 * @property {string} Response
 * @property {string} [Error]
 */

/**
 * @typedef {Object} SearchFilters
 * @property {string} query
 * @property {string} [year]
 * @property {string} [type]
 */

export {};
