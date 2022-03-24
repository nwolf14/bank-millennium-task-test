import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

// config
import { getEnvVar } from '../src/config/provider';

// others
import { THEME_STYLES } from './constants';

const getTheme = () => {
  const theme = getEnvVar('STORYBOOK_THEME');

  return { ...themes[theme], ...THEME_STYLES[theme] };
};

addons.setConfig({
  theme: getTheme(),
});
