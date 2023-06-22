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
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="250"
        />
      </div>

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
