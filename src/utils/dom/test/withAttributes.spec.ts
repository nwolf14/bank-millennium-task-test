// utils
import { withAttributes } from '../createHtmlElement';

describe('withAttributes', () => {
  it('Should create div element with attributes', () => {
    const result = withAttributes({ id: 'id' }, document.createElement('div'));

    expect(result.tagName).toBe('DIV');
    expect(result.getAttribute('id')).toBe('id');
  });
});
