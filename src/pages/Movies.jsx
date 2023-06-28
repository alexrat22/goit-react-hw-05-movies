import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { lazy } from 'react';
import { getSearchMovie } from '../services/api';
import SearchForm from '../components/SearchBar/SearchBar';
import Loader from '../components/Loader/Loader';

const TrendMovieList = lazy(() =>
  import('../components/TrendMovieList/TrendMovieList')
);

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    if (request === '') {
      return;
    }

    setVisibleLoader(true);
    setMovies(null);

    getSearchMovie(request)
      .then(response => {
        if (response.results.length < 1) {
          setMovies(null);
          toast.error('There are no movies with this name');
          setVisibleLoader(false);
          return;
        }
        setMovies(response.results);
        setVisibleLoader(false);
      })
      .catch(err => console.error(err));
  }, [request]);

  const onFormSubmit = movieName => {
    setSearchParams({ query: movieName });
  };

  return (
    <>
      <ToastContainer autoClose={2500} />
      <SearchForm onSubmit={onFormSubmit} />
      {movies && <TrendMovieList movies={movies} path="" />}
      {visibleLoader && <Loader />}
    </>
  );
};

export default Movies;
