import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView.js' /* webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import(
    '../../views/MoviesView/MoviesView' /* webpackChunkName: "MoviesView" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    '../../views/NotFoundView/NotFoundView' /* webpackChunkName: "NotFoundView" */
  ),
);
const DetailsMovieView = lazy(() =>
  import(
    '../../views/DetailsMovieView/DetailsMovieView' /* webpackChunkName: "DetailsMovieView" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movie" exact>
            <MoviesView />
          </Route>
          <Route path="/movie/:movieId">
            <DetailsMovieView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
