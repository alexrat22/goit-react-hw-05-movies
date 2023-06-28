import { getMovieItem } from '../../services/api';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import BackLink from 'components/BackLink/BackLink';
import MovieItemMainInfo from 'components/MovieDetailsMainInfo/MovieDetailsMainInfo';
import MovieItemAddInfo from 'components/MovieDetailsAddInfo/MovieDetailsAddInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [visibleLoader, setVisibleLoader] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

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
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {movie && <MovieItemMainInfo movie={movie} />}
      {movie && <MovieItemAddInfo />}
      {visibleLoader && <Loader />}
    </>
  );
};

export default MovieDetails;
