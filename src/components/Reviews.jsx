import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/Movies.API';
import PropTypes from 'prop-types';
import { ReviewsContainer, ReviewsTitle, ReviewAuthor } from '../styles/ReviewStyles';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews);
    };

    fetchMovieReviews();
  }, [movieId]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <ReviewsTitle onClick={handleExpand}>Reviews</ReviewsTitle>
      {expanded && reviews.length > 0 ? (
        <ReviewsContainer>
          {reviews.map((review) => (
            <div key={review.id}>
              <ReviewAuthor href={review.url} target="_blank" rel="noopener noreferrer">
                {review.author}
              </ReviewAuthor>
              <p>{review.content}</p>
            </div>
          ))}
        </ReviewsContainer>
      ) : (
        expanded && <p>We don't have any reviews for this movie!</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
