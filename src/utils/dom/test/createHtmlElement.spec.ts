// utils
import { createHtmlElement } from '../createHtmlElement';

describe('createHtmlElement', () => {
  it('Should create div element', () => {
    const result = createHtmlElement('div');

    expect(result.tagName).toBe('DIV');
  });

  it('Should create div element with attributes', () => {
    const result = createHtmlElement('div', { id: 'id' });

    expect(result.getAttribute('id')).toBe('id');
  });
});
