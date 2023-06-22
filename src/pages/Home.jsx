import TrendMovieList from 'components/TrendMovieList/TrendMovieList';
import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/api';
import { Title } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    getTrendMovies()
      .then(response => {
        setTrendMovies(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {trendMovies && <TrendMovieList movies={trendMovies} />}
    </>
  );
};

export default Home;
