Cypress.Commands.add(
  'dragAndDrop',
  (selectorDragStart: string, selectorDragEnd: string, options = {}) => {
    const dataTransfer = new DataTransfer();

    return cy
      .get(selectorDragStart)
      .trigger('dragstart', { dataTransfer })
      .get(selectorDragEnd)
      .trigger('drop', { ...options, dataTransfer });
  }
);
