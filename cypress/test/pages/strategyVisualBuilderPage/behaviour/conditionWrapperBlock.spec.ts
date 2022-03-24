// others
import { CENTER_MOUSE, REDUCER_KEY } from '../constants';
import { BlockNodeType, BlockType, KeyboardKeys } from '../enums';
import { E2EAttribute, Selector } from '../../../enums';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// selectors
import { getSelectorBlockNode, getSelectorInput } from '../selectors';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

describe('Authorized user creates new wrapper block', () => {
  before(() => {
    cy.visit(getRouteByName(RouteName.StrategyVisualBuilder));
  });

  beforeEach(() => {
    cy.log('Grid is hidden');
  });

  afterEach(() => {
    cy.get(getSelector(Selector.diagram)).trigger('mouseup', { force: true });
  });

  it('should drag & drop new block', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
      ),
      getSelector(Selector.diagram)
    );

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0)).should(
      'have.length',
      1
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks').should('have.length', 1);
    cy.getState(REDUCER_KEY, 'selectedElement').should('eq', null);
  });

  it('should move block to given of position & should be selected', () => {
    // when
    cy.mouseMove(
      getSelector(Selector.block, E2EAttribute.componentBlock, 0),
      CENTER_MOUSE.x,
      CENTER_MOUSE.y
    );

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0))
      .parent()
      .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 325, 375)');

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.wrap(data).its('x').should('eq', 325);
      cy.wrap(data).its('y').should('eq', 375);
      cy.getState(REDUCER_KEY, 'selectedElement.id').should('eq', data.id);
    });
  });

  it('should change position in edit component panel', () => {
    // when
    cy.get(getSelectorInput(E2EAttribute.editBlockCoordinatesInput, 'x'))
      .clear()
      .type('200')
      .trigger('keydown', { key: KeyboardKeys.enter });

    cy.get(getSelectorInput(E2EAttribute.editBlockCoordinatesInput, 'y'))
      .clear()
      .type('200')
      .trigger('keydown', { key: KeyboardKeys.enter });

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0))
      .parent()
      .should('have.css', 'transform', `matrix(1, 0, 0, 1, 200, 200)`);

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.wrap(data).its('x').should('eq', 200);
      cy.wrap(data).its('y').should('eq', 200);
    });
  });

  it('should change value in edit component panel and unselected after click outside', () => {
    // when
    cy.get(getSelectorInput(E2EAttribute.editBlockCoordinatesInput, 'x'))
      .clear()
      .type('300');
    cy.get(getSelector(Selector.componentPanel)).click();

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0))
      .parent()
      .should('have.css', 'transform', `matrix(1, 0, 0, 1, 300, 200)`);
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0)).should(
      'not.have.class',
      getSelector(Selector.blockSelected)
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'selectedElement').should('eq', null);
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.wrap(data).its('x').should('eq', 300);
    });
  });

  it('should not pull connector from block node in', () => {
    // when
    cy.mouseMove(getSelectorBlockNode(BlockNodeType.in, 0), 600, 100);

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY, 'draggableConnector').should('eq', null);
  });

  it('should pull connector from block node out', () => {
    // when
    cy.mouseMove(getSelectorBlockNode(BlockNodeType.out, 0), 800, 100, true);

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 1);

    // result from redux
    cy.getState(REDUCER_KEY, 'draggableConnector').should('not.eq', null);
  });

  it('should not connect out with in in the same block', () => {
    // when
    cy.mouseMove(getSelectorBlockNode(BlockNodeType.out, 0), 600, 440, true);

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 1);

    // result from redux
    cy.getState(REDUCER_KEY, 'possibleBlockNodeTarget').should('eq', null);
  });

  it('should be enter the next layer after double click', () => {
    // when
    cy.get(
      getSelector(Selector.block, E2EAttribute.componentBlock, 0)
    ).dblclick();

    // result from html
    cy.get(getSelector(Selector.navigationLayerButton)).should(
      'have.length',
      2
    );
    cy.get(getSelector(Selector.navigationLayerButtonActive)).should(
      'have.length',
      1
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.getState(REDUCER_KEY, 'selectedBlockLayerId').should('eq', data.id);
    });
  });

  it('should be back to base layer after click w base layer in navigation', () => {
    // when
    cy.get(
      getSelector(
        Selector.navigationLayerButtonActive,
        E2EAttribute.navigationLayer,
        0
      )
    ).click();

    // result from html
    cy.get(getSelector(Selector.navigationLayerButton)).should(
      'have.length',
      1
    );
    cy.get(getSelector(Selector.navigationLayerButtonActive)).should(
      'have.length',
      0
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'selectedBlockLayerId').should('eq', -1);
  });

  it('should remove exists block', () => {
    // when
    cy.get(getSelector(Selector.block)).click();
    cy.keyDown(getSelector(Selector.block), KeyboardKeys.delete);

    // result from html
    cy.get(getSelector(Selector.block)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks').should('have.length', 0);
  });

  it('should drag & drop new block in correct position after moved & zoom on diagram', () => {
    // when
    cy.mouseMove(getSelector(Selector.diagram), 400, 300);
    cy.wheel(getSelector(Selector.diagram), 1);
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
      ),
      getSelector(Selector.diagram)
    );

    // result from html
    cy.get(getSelector(Selector.block))
      .parent()
      .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 625, 525)');

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.wrap(data).its('x').should('eq', 625);
      cy.wrap(data).its('y').should('eq', 525);
    });
  });
});
