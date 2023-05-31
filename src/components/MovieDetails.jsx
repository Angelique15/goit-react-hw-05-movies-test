import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/Movies.API';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  MovieDetailsContainer,
  MovieTitle,
  MovieInfo,
  MovieImage,
  MovieDetailsContent,
} from '../styles/MovieDetailsStyles';
import Reviews from './Reviews';
import Cast from './Cast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    const lightbox = new SimpleLightbox('.movie-image');
    lightbox.on('show.simplelightbox', () => {
      document.body.style.overflow = 'hidden';
    });
    lightbox.on('closed.simplelightbox', () => {
      document.body.style.overflow = 'auto';
    });
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailsContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfo>
        <MovieImage className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <MovieDetailsContent>
          <p>Release Date: {movie.release_date ? movie.release_date : 'N/A'}</p>
          <p>Overview: {movie.overview}</p>
          <Reviews movieId={movieId} />
          <Cast movieId={movieId} />
        </MovieDetailsContent>
      </MovieInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
