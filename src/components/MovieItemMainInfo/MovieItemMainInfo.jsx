import defaultImage from '../../images/default-image.jpg';
import {
  MainContainer,
  InfoContainer,
  Overview,
  Genres,
  GenreItem,
} from './MovieItemMainInfo.styled';

const MovieItemMainInfo = ({ movie }) => {
  return (
    <MainContainer>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="250"
        />
      ) : (
        <img src={defaultImage} alt={movie.title} width="250" height="375" />
      )}

      <InfoContainer>
        <h2>{movie.title}</h2>
        <p>
          <b>User score: </b>
          {movie.vote_average}
        </p>
        <Overview>
          <b>Overview: </b>
          {movie.overview}
        </Overview>
        <p>
          <b>Genres: </b>
        </p>
        <Genres>
          {movie.genres.map(genre => {
            return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
          })}
        </Genres>
      </InfoContainer>
    </MainContainer>
  );
};

export default MovieItemMainInfo;
