import { useLocation } from 'react-router-dom';
import defaultImage from '../../images/default-image.jpg';
import {
  Container,
  MovieList,
  MovieLink,
  MovieTitle,
} from './TrendMovieList.styled';

const TrendMovieList = ({ movies, path }) => {
  const location = useLocation();
  return (
    <>
      <Container>
        {movies.map(movie => {
          return (
            <MovieLink
              key={movie.id}
              to={`${path}${movie.id}`}
              state={{ from: location }}
            >
              <MovieList>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width="250"
                    height="350"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt={movie.title}
                    width="250"
                    height="350"
                  />
                )}
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieList>
            </MovieLink>
          );
        })}
      </Container>
    </>
  );
};

export default TrendMovieList;
