Cypress.Commands.add('wheel', (selector: string, deltaY: number) =>
  cy.get(selector).trigger('wheel', { deltaY })
);
