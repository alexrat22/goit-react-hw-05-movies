import { getMovieItem } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import MovieItemMainInfo from 'components/MovieItemMainInfo/MovieItemMainInfo';
import MovieItemAddInfo from 'components/MovieItemAddInfo/MovieItemAddInfo';

const MovieItem = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [visibleLoader, setVisibleLoader] = useState(false);

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
      {movie && <MovieItemMainInfo movie={movie} />}
      {movie && <MovieItemAddInfo />}
      {visibleLoader && <Loader />}
    </>
  );
};

export default MovieItem;
