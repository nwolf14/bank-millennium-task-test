// others
import { BlockType, BlockNodeType, KeyboardKeys } from '../enums';
import { CENTER_MOUSE, REDUCER_KEY } from '../constants';
import { E2EAttribute, Selector } from '../../../enums';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// selectors
import { getSelectorBlockNode, getSelectorInput } from '../selectors';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

describe('Authorized user creates new start block', () => {
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
        BlockType.start
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

  it('should not drag & drop new block when it already exists', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.start
      ),
      getSelector(Selector.diagram)
    );

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0)).should(
      'not.have.length',
      2
    );

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks').should('not.have.length', 2);
  });

  it('should move block to center & should be selected', () => {
    // when
    cy.mouseMove(
      getSelector(Selector.block, E2EAttribute.componentBlock, 0),
      CENTER_MOUSE.x,
      CENTER_MOUSE.y
    );

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0))
      .parent()
      .should('have.css', 'transform', `matrix(1, 0, 0, 1, 350, 350)`);

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.wrap(data).its('x').should('eq', 350);
      cy.wrap(data).its('y').should('eq', 350);
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

  it('should pull connector from block node out', () => {
    // when
    cy.mouseMove(getSelectorBlockNode(BlockNodeType.out, 0), 775, 100, true);

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 1);

    // result from redux
    cy.getState(REDUCER_KEY, 'draggableConnector').should('not.eq', null);
  });

  it('should remove exists block', () => {
    // when
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0)).click();
    cy.keyDown(
      getSelector(Selector.block, E2EAttribute.componentBlock, 0),
      KeyboardKeys.delete
    );

    // result from html
    cy.get(getSelector(Selector.block)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks').should('have.length', 0);
  });

  it('should drag & drop new block even though there is other block', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.condition
      ),
      getSelector(Selector.diagram),
      { clientX: CENTER_MOUSE.x - 300, clientY: CENTER_MOUSE.y }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.start
      ),
      getSelector(Selector.diagram)
    );

    // result from html
    cy.get(getSelector(Selector.block)).should('have.length', 2);

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks').should('have.length', 2);
    cy.getState(REDUCER_KEY, 'selectedElement').should('eq', null);

    // clean up
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0)).click();
    cy.keyDown(
      getSelector(Selector.block, E2EAttribute.componentBlock, 0),
      KeyboardKeys.delete
    );
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0)).click();
    cy.keyDown(
      getSelector(Selector.block, E2EAttribute.componentBlock, 0),
      KeyboardKeys.delete
    );
  });

  it('should drag & drop new block in correct position after moved & zoom on diagram', () => {
    // when
    cy.mouseMove(getSelector(Selector.diagram), 400, 300);
    cy.wheel(getSelector(Selector.diagram), 1);
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.start
      ),
      getSelector(Selector.diagram)
    );

    // result from html
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 0))
      .parent()
      .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 650, 500)');

    // result from redux
    cy.getState(REDUCER_KEY, 'blocks.0').then((data) => {
      cy.wrap(data).its('x').should('eq', 650);
      cy.wrap(data).its('y').should('eq', 500);
    });
  });
});
