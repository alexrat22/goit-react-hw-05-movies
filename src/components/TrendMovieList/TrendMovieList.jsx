import {
  Title,
  Container,
  MovieList,
  MovieLink,
  MovieTitle,
} from './TrendMovieList.styled';

const TrendMovieList = ({ movies }) => {
  return (
    <>
      <Title>Trending today</Title>
      <Container>
        {movies.map(movie => {
          return (
            <MovieLink key={movie.id} to={`${movie.id}`}>
              <MovieList>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="250"
                />
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
