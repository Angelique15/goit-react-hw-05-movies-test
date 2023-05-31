import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPopularMovies } from '../services/Movies.API';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Loader from './Loader';
import { HomeContainer, Title, MovieList, MovieItem, MovieLink, MovieImage } from '../styles/HomeStyles';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      setLoading(false);
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    if (!loading) {
      const lightbox = new SimpleLightbox('.movie-link');
      lightbox.on('show.simplelightbox', () => {
        document.body.style.overflow = 'hidden';
      });
      lightbox.on('closed.simplelightbox', () => {
        document.body.style.overflow = 'auto';
      });
    }
  }, [loading]);

  return (
    <HomeContainer>
      <Title>Popular Movies</Title>
      {loading ? (
        <Loader />
      ) : (
        <MovieList>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} className="movie-link" data-src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}>
                <MovieImage src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                {movie.title}
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </HomeContainer>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default Home;




