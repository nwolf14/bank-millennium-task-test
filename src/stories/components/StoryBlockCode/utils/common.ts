export const getHTMLElement = (
  className: string,
  context?: string,
  htmlElement: 'span' | 'div' = 'span'
) => `<${htmlElement} class="${className}">${context}</${htmlElement}>`;
