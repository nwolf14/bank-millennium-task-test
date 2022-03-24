Cypress.Commands.add('getState', (reducerKey: string, path = '') =>
  cy
    .window()
    .its('store')
    .invoke('getState')
    .its(`${[reducerKey, path].join('.')}`)
);
