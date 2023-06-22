import { getMovieItem } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieItemMainInfo from 'components/MovieItemMainInfo/MovieItemMainInfo';
import MovieItemAddInfo from 'components/MovieItemAddInfo/MovieItemAddInfo';

const MovieItem = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieItem(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      {movie && <MovieItemMainInfo movie={movie} />}
      {movie && <MovieItemAddInfo />}
    </>
  );
};

export default MovieItem;
