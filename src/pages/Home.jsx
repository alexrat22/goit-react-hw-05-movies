import TrendMovieList from 'components/TrendMovieList';
import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    getTrendMovies()
      .then(response => {
        setTrendMovies(response.results);
        console.log(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  return <>{trendMovies && <TrendMovieList movies={trendMovies} />}</>;
};

export default Home;
