import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../services/api';
import SearchForm from '../components/SearchBar/SearchBar';
import TrendMovieList from '../components/TrendMovieList/TrendMovieList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

  useEffect(() => {
    if (request === '') {
      return;
    }
    setMovies(null);

    getSearchMovie(request)
      .then(response => {
        if (response.results.length < 1) {
          setMovies(null);
          toast.error('There are no movies with this name');
          return;
        }
        setMovies(response.results);
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
      {movies && <TrendMovieList movies={movies} />}
    </>
  );
};

export default Movies;
