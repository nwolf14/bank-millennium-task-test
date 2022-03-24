import { ConnectedRouter } from 'connected-react-router';
import { FC } from 'react';
import { useSelector } from 'react-redux';

// components
import AppInitializer from '../AppInitializer/AppInitializer';

// core
import Routing from '../../core/Routing/Routing';

// store
import { isAppLoadedSelector } from '../../store/appInitializer/selectors';

// utils
import { history } from '../../utils/history';

const App: FC = () => {
  const isAppLoaded = useSelector(isAppLoadedSelector);

  if (!isAppLoaded) {
    return (
      <ConnectedRouter history={history}>
        <AppInitializer />
      </ConnectedRouter>
    );
  }

  return (
    <ConnectedRouter history={history}>
      <Routing />
    </ConnectedRouter>
  );
};

export default App;
