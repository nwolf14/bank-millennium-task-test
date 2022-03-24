import { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

// components
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage')
);
import RouteTransitionLoader from './components/RouteTransitionLoader/RouteTransitionLoader';

// others
import { APP_ROUTES_DATA } from './constants/appRoutesData';

// utils
import { renderRoute } from './utils/renderRoute';

const Routing: FC = () => {
  // TODO: in the future we need to check if app is loaded wrong
  const appDataLoadaed = true;
  const location = useLocation();

  if (!appDataLoadaed) {
    return (
      <Suspense fallback={null}>
        <ErrorPage />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<RouteTransitionLoader />}>
      <Switch location={location}>
        {APP_ROUTES_DATA.map(renderRoute)}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routing;
