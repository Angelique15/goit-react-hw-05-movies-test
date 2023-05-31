import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieCast } from '../services/Movies.API';
import { CastContainer, CastTitle, CastList, CastItem, CastImage } from '../styles/CastStyles';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const movieCast = await getMovieCast(parseInt(movieId, 10));
      setCast(movieCast);
    };

    fetchMovieCast();
  }, [movieId]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <CastContainer>
      <CastTitle onClick={handleExpand}>Cast</CastTitle>
      {expanded && (
        <CastList>
          {cast.map((actor) => (
            <CastItem key={actor.id}>
              <CastImage src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
              <p>{actor.name}</p>
            </CastItem>
          ))}
        </CastList>
      )}
    </CastContainer>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;





