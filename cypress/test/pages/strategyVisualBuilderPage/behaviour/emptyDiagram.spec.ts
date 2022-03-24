// others
import { Selector } from '../../../enums';
import { REDUCER_KEY } from '../constants';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

describe('Authorized user creates new diagram', () => {
  before(() => {
    cy.visit(getRouteByName(RouteName.StrategyVisualBuilder));
  });

  beforeEach(() => {
    cy.log('Grid is hidden');
  });

  it('should be empty during create new strategy', () => {
    // result from html
    cy.get(getSelector(Selector.moveableElement)).should('have.length', 0);
    cy.get(getSelector(Selector.connector)).should('have.length', 0);
    cy.get(getSelector(Selector.navigationLayerButton)).should(
      'have.length',
      1
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks').should('have.length', 0);
    cy.getState(REDUCER_KEY, 'connectors').should('have.length', 0);
    cy.getState(REDUCER_KEY, 'selectedBlockLayerId').should('eq', -1);
  });

  it('should move area position', () => {
    // when
    cy.mouseMove(getSelector(Selector.diagram), 400, 300);

    // result from html
    cy.get(getSelector(Selector.diagramArea)).should(
      'have.css',
      'transform',
      'matrix(1, 0, 0, 1, -300, -140)'
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'areaCoordinates').should('deep.equal', {
      x: -300,
      y: -140,
    });
  });
});
