const TrendMovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => {
        return (
          <ul key={movie.id}>
            <li>{movie.title}</li>;
          </ul>
        );
      })}
    </div>
  );
};

export default TrendMovieList;
