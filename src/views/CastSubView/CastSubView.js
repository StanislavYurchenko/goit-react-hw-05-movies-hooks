import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastByMovieId } from '../../services/themoviedbApi';

function CastSubView() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCastByMovieId(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <div>{actor.name}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CastSubView;
