import i18n, { i18n as i18nInterface } from 'i18next';
import { initReactI18next } from 'react-i18next';

// others
import { DEFAULT_LANGUAGE } from './constants';

export const initI18n = async (
  language: string
): Promise<{ i18n: i18nInterface }> => {
  const resource = await import(`./languages/${language}.json`);

  i18n.use(initReactI18next).init({
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    lng: language,
    resources: {
      [language]: { translation: resource },
    },
  });

  return { i18n };
};
