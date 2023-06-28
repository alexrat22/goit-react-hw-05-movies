import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { AddTitle, AddList, Link } from './MovieDetailsAddInfo.styled';

const MovieItemAddInfo = () => {
  return (
    <>
      <AddTitle>
        <b>Additional information:</b>
      </AddTitle>
      <AddList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AddList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieItemAddInfo;
