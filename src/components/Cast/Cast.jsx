import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastInfo } from '../../services/api';
import Loader from '../Loader/Loader';
import { CastList, Actor, Info } from './Cast.styled';
import defaultImage from '../../images/default-image.jpg';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    setVisibleLoader(true);

    if (!movieId) {
      return;
    }

    getMovieCastInfo(movieId)
      .then(response => {
        if (response.cast.length < 1) {
          setCast(null);
          setVisibleLoader(false);
          return;
        }
        setCast(response.cast);
        setVisibleLoader(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      {cast ? (
        <CastList>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={`${actor.original_name}`}
                    width="150"
                  ></img>
                ) : (
                  <img
                    src={defaultImage}
                    alt={actor.original_name}
                    width="150"
                    height="225"
                  ></img>
                )}
                <Actor>
                  {actor.original_name} as <br />
                  {actor.character}
                </Actor>
              </li>
            );
          })}
        </CastList>
      ) : (
        <Info>We don't have any cast-info to this movie</Info>
      )}
      {visibleLoader && <Loader />}
    </>
  );
};

export default Cast;
