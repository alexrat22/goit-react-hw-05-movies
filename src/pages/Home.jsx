import { useState, useEffect } from 'react';
import { lazy } from 'react';
import { getTrendMovies } from 'services/api';
import Loader from '../components/Loader/Loader';
import { Title } from './Home.styled';

const TrendMovieList = lazy(() =>
  import('../components/TrendMovieList/TrendMovieList')
);

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    setVisibleLoader(true);

    getTrendMovies()
      .then(response => {
        setTrendMovies(response.results);
        setVisibleLoader(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {trendMovies && <TrendMovieList movies={trendMovies} path="movies/" />}
      {visibleLoader && <Loader />}
    </>
  );
};

export default Home;
