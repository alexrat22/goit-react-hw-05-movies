import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import { ReviewItem } from './Reviews.styled';
import { Info } from '../Cast/Cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMovieReviews(movieId)
      .then(response => {
        if (response.results.length < 1) {
          setReviews(null);
          return;
        }
        setReviews(response.results);
      })
      .catch(err => console.error(err));
  });

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </ReviewItem>
            );
          })}
        </ul>
      ) : (
        <Info>We don't have any reviews to this movie</Info>
      )}
    </>
  );
};

export default Reviews;
