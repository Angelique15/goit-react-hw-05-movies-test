import axios from 'axios';

const API_KEY = '1d5036468eec1d07ae1371ee4e45bdfa';
export { API_KEY };

export const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error getting popular movies:', error);
        return [];
    }
};

export const searchMovies = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error getting movie details:', error);
        return null;
    }
};

export const getMovieCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.cast;
    } catch (error) {
        console.error('Error getting movie credits:', error);
        return [];
    }
};

export const getMovieReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error getting movie reviews:', error);
        return [];
    }
};

export const getMovieCast = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.cast;
    } catch (error) {
        console.error('Error getting movie cast:', error);
        return [];
    }
};



