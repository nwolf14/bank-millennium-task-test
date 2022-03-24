import { fireEvent, render } from '@testing-library/react';

// components
import Accordion from './Accordion';

describe('Accordion', () => {
  const mockCallBack = jest.fn();

  it('should pass children', () => {
    const { container } = render(<Accordion>content</Accordion>);

    expect(
      container.firstChild?.lastChild?.firstChild?.firstChild
    ).toHaveTextContent('content');
  });

  it('should pass className', () => {
    const { container } = render(
      <Accordion className="test">content</Accordion>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should pass className to content', () => {
    const { container } = render(
      <Accordion classNameContent="test">content</Accordion>
    );

    expect(container.firstChild?.lastChild?.firstChild).toHaveClass('test');
  });

  it('should pass className to header', () => {
    const { container } = render(
      <Accordion classNameHeader="test">content</Accordion>
    );

    expect(container.firstChild?.firstChild).toHaveClass('test');
  });

  it('should pass className to wrapper', () => {
    const { container } = render(
      <Accordion classNameWrapper="test">content</Accordion>
    );

    expect(container.firstChild?.lastChild).toHaveClass('test');
  });

  it('should be expanded', () => {
    const { container } = render(
      <Accordion defaultExpanded>content</Accordion>
    );

    expect(container.firstChild?.firstChild).toHaveClass(
      'Accordion__header--expanded'
    );
    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'Accordion__arrow--expanded'
    );
    expect(container.firstChild?.lastChild).toHaveClass(
      'Accordion__wrapper--expanded'
    );
  });

  it('should be expanded', () => {
    const { container } = render(<Accordion expanded>content</Accordion>);

    expect(container.firstChild?.firstChild).toHaveClass(
      'Accordion__header--expanded'
    );
    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'Accordion__arrow--expanded'
    );
    expect(container.firstChild?.lastChild).toHaveClass(
      'Accordion__wrapper--expanded'
    );
  });

  it('should pass header', () => {
    const { container } = render(
      <Accordion header="header">content</Accordion>
    );

    expect(container.firstChild?.firstChild?.firstChild).toHaveTextContent(
      'header'
    );
  });

  it('should trigger onClick', () => {
    const { getByText } = render(
      <Accordion header="header" onClick={mockCallBack}>
        content
      </Accordion>
    );

    fireEvent.click(getByText('header'));
    expect(mockCallBack?.mock.calls.length).toBe(1);
  });

  it('should pass custom styles', () => {
    const { container } = render(
      <Accordion style={{ width: '100%' }}>content</Accordion>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });
});
