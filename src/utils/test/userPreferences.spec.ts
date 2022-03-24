// others
import { Theme } from '../../core/ContextProvider/enums';
import { THEME } from './../../core/ContextProvider/constants';

// utils
import { getThemePreferences } from '../userPreferences';

const mockMatchMedia = (matches: boolean) => {
  global.window = Object.create(window);

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches,
    })),
  });
};

describe('getThemePreferences', () => {
  it('Should return light theme from system preferences', () => {
    mockMatchMedia(false);
    expect(getThemePreferences()).toEqual(Theme.light);
  });

  it('Should return dark theme from system preferences', () => {
    mockMatchMedia(true);
    expect(getThemePreferences()).toEqual(Theme.dark);
  });

  it('Should return light theme from localStorage when dark is set in system preferences', () => {
    localStorage.setItem(THEME, Theme.light);

    mockMatchMedia(true);
    expect(getThemePreferences()).toEqual(Theme.light);
  });

  it('Should return dark theme from localStorage when light is set in system preferences', () => {
    localStorage.setItem(THEME, Theme.dark);

    mockMatchMedia(false);
    expect(getThemePreferences()).toEqual(Theme.dark);
  });
});
