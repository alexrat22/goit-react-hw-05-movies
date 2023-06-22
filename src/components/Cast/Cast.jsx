import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastInfo } from '../../services/api';
import { CastList, Actor } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMovieCastInfo(movieId)
      .then(response => {
        if (response.cast.length < 1) {
          setCast(null);
          return;
        }
        setCast(response.cast);
      })
      .catch(err => console.error(err));
  });

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={''}
                  width="150"
                ></img>
                <Actor>
                  {actor.original_name} as <br />
                  {actor.character}
                </Actor>
              </li>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
