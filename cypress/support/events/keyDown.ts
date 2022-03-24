Cypress.Commands.add('keyDown', (selector: string, key: string) =>
  cy.get(selector).trigger('keydown', { key })
);
