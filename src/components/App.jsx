import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieItem from './MovieItem/MovieItem';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}></Route>
        </Route>
      </Routes>
    </>
  );
};
