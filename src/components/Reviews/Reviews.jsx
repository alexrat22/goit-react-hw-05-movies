import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import Loader from '../Loader/Loader';
import { ReviewItem } from './Reviews.styled';
import { Info } from '../Cast/Cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    setVisibleLoader(true);

    if (!movieId) {
      return;
    }

    getMovieReviews(movieId)
      .then(response => {
        if (response.results.length < 1) {
          setReviews(null);
          setVisibleLoader(false);
          return;
        }
        setReviews(response.results);
        setVisibleLoader(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

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
      {visibleLoader && <Loader />}
    </>
  );
};

export default Reviews;
