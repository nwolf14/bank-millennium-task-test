// utils
import { isCypressRunning } from '../isCypressRunning';

describe('getBlocksWithUpdatedCoordinates', () => {
  it('Should return false when cypress is not working', () => {
    expect(isCypressRunning()).toEqual(false);
  });

  it('Should return true when cypress is working', () => {
    window.Cypress = {};
    expect(isCypressRunning()).toEqual(true);
  });
});
