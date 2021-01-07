import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';
import CastSubView from '../CastSubView/CastSubView';
import ReviewsSubView from '../ReviewsSubView/ReviewsSubView';
import {
  gethMovieDetailsById,
  BASE_URL_POSTER,
} from '../../services/themoviedbApi';
import styles from './DetailsMovieView.module.css';

function DetailsMovieView() {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();

  const location = useLocation();
  const history = useHistory();
  const from = location?.state?.from ?? { ...location, pathname: '/' };

  useEffect(() => {
    gethMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    console.log(from);
    history.push(from);
  };

  return (
    <>
      {movie && (
        <section>
          <img
            className={styles.img}
            src={`${BASE_URL_POSTER}${movie.poster_path}`}
            alt={movie.original_name || movie.original_title || movie.title}
          />
          <h2>{movie.original_name || movie.original_title || movie.title}</h2>
          <p>{movie.overview}</p>
          <button type="button" onClick={onGoBack}>
            back
          </button>
          <div></div>

          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: from },
            }}
          >
            Cast
          </NavLink>
          <div></div>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: from },
            }}
          >
            Reviews
          </NavLink>
          <div></div>
          <Switch>
            <Route path={`${path}/cast`}>
              <CastSubView />
            </Route>
            <Route path={`${path}/reviews`}>
              <ReviewsSubView />
            </Route>
          </Switch>
        </section>
      )}
    </>
  );
}

export default DetailsMovieView;
