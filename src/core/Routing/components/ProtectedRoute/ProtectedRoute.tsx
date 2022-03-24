import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

// others
import { TMainState } from '../../../../types';
import { TProtectedRouteProps } from '../../types';

const ProtectedRoute: FunctionComponent<TProtectedRouteProps> = ({
  guards = [],
  children,
  ...props
}) => {
  // const failedGuard = useSelector((state: TMainState) =>
  //   guards.find(({ guardCheck }) => !guardCheck(state))
  // );
  const wrapperProps = {
    ...props,
    path: `/${props.path}`,
  };

  // if (failedGuard) {
  //   return failedGuard.renderFallback(props);
  // }

  return <Route {...wrapperProps}>{children}</Route>;
};

export default ProtectedRoute;
