import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// store
import { appInit } from '../../store/appInitializer/actions';

const AppInitializer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInit());
  }, []);

  return <div>AppInitializer</div>;
};

export default AppInitializer;
