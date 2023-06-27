import { getMovieItem } from '../../services/api';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import BackLink from 'components/BackLink/BackLink';
import MovieItemMainInfo from 'components/MovieDetailsMainInfo/MovieDetailsMainInfo';
import MovieItemAddInfo from 'components/MovieDetailsAddInfo/MovieDetailsAddInfo';

const MovieItem = () => {
  const [movie, setMovie] = useState(null);
  const [visibleLoader, setVisibleLoader] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setVisibleLoader(true);
    getMovieItem(movieId)
      .then(response => {
        setMovie(response);
        setVisibleLoader(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie && <MovieItemMainInfo movie={movie} />}
      {movie && <MovieItemAddInfo />}
      {visibleLoader && <Loader />}
    </>
  );
};

export default MovieItem;
