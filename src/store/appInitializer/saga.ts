import { all, AllEffect, put, PutEffect } from 'redux-saga/effects';

// others
import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
  LNG,
  LOCATION_API,
} from '../../translations/constants';
import { initI18n } from '../../translations/initI18n';

// store
import { setIsAppLoaded, setIsTranslationLoaded } from './actions';
import { TSetIsAppLoadedAction, TSetIsTransaltionLoadedAction } from './types';

export function* initLanguageSaga(): Generator<
  Promise<any> | PutEffect<TSetIsTransaltionLoadedAction>,
  void,
  string & {
    i18n: any;
  }
> {
  let language = localStorage.getItem(LNG) || '';

  if (!language) {
    language = yield fetch(LOCATION_API)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        const language = (
          data as unknown as { languages: string }
        )?.languages.substring(0, 2);

        return AVAILABLE_LANGUAGES.includes(language)
          ? language
          : DEFAULT_LANGUAGE;
      })
      .catch(() => DEFAULT_LANGUAGE);

    localStorage.setItem(LNG, language);
  }

  const { i18n } = yield initI18n(language);
  yield Promise.resolve(i18n);
  yield put(setIsTranslationLoaded(true));
}

export function* appInitSaga(): Generator<
  | AllEffect<
      Generator<
        Promise<any> | PutEffect<TSetIsTransaltionLoadedAction>,
        void,
        string & {
          i18n: any;
        }
      >
    >
  | PutEffect<TSetIsAppLoadedAction>,
  void,
  unknown
> {
  yield all([initLanguageSaga()]);
  yield put(setIsAppLoaded(true));
}
