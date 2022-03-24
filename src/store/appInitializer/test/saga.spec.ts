import SagaTester from 'redux-saga-tester';

// others
import { appInitSagaTestCases, initLanguageSagaTestCases } from './testCases';
import { initialStateMock } from './mocks';

// store
import appInitializer from '../reducer';
import { appInitSaga, initLanguageSaga } from '../saga';
import { REDUCER_KEY } from '../actionsType';

describe('appInitSaga', () => {
  const testCases = appInitSagaTestCases();

  afterEach(() => {
    global.localStorage.clear();
  });

  testCases.forEach(({ args, description, expectedResult, someAction }) => {
    const { mockStore, response } = args;

    it(description, async () => {
      const sagaTester = new SagaTester({
        initialState: { [REDUCER_KEY]: { ...initialStateMock, ...mockStore } },
        reducers: { [REDUCER_KEY]: appInitializer },
      });

      jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => response as Promise<any>);
      sagaTester.start(appInitSaga);
      await sagaTester.waitFor(someAction);

      expect(sagaTester.getState()).toEqual({
        [REDUCER_KEY]: expectedResult,
      });
    });
  });
});

describe('initLanguageSaga', () => {
  const testCases = initLanguageSagaTestCases();

  afterEach(() => {
    global.localStorage.clear();
  });

  testCases.forEach(({ args, description, expectedResult, someAction }) => {
    const { mockStore, response } = args;

    it(description, async () => {
      const sagaTester = new SagaTester({
        initialState: { [REDUCER_KEY]: { ...initialStateMock, ...mockStore } },
        reducers: { [REDUCER_KEY]: appInitializer },
      });

      jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => response as Promise<any>);
      sagaTester.start(initLanguageSaga);
      await sagaTester.waitFor(someAction);

      expect(sagaTester.getState()).toEqual({
        [REDUCER_KEY]: expectedResult,
      });
    });
  });
});
