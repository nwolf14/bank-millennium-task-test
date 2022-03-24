Cypress.Commands.add(
  'mouseMove',
  (selector: string, x: number, y: number, hold = false) =>
    hold
      ? cy
          .get(selector)
          .trigger('mousedown', { button: 0 })
          .trigger('mousemove', { clientX: x, clientY: y })
      : cy
          .get(selector)
          .trigger('mousedown', { button: 0 })
          .trigger('mousemove', { clientX: x, clientY: y })
          .trigger('mouseup', { force: true })
);

Cypress.Commands.add(
  'mouseMoveBySelectors',
  (sourceSelector: string, targetSelector: string, hold = false) => {
    if (hold) {
      cy.get(sourceSelector).trigger('mousedown', { button: 0 });
      cy.get(targetSelector).trigger('mouseover');
    } else {
      cy.get(sourceSelector).trigger('mousedown', { button: 0 });
      cy.get(targetSelector)
        .trigger('mouseover')
        .trigger('mouseup', { force: true });
    }
  }
);
