const TrendMovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        );
      })}
    </div>
  );
};

export default TrendMovieList;
