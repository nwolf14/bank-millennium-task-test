// others
import {
  BlockType,
  BlockNodeType,
  LogicOperator,
  KeyboardKeys,
} from '../enums';
import { CENTER_MOUSE, REDUCER_KEY } from '../constants';
import { E2EAttribute, Selector } from '../../../enums';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// selectors
import {
  getSelectorBlockNode,
  getSelectorInput,
  getSelectorConnectorLine,
} from '../selectors';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

describe('Authorized user connect connectors', () => {
  before(() => {
    cy.visit(getRouteByName(RouteName.StrategyVisualBuilder));
  });

  beforeEach(() => {
    cy.log('Grid is hidden');
  });

  afterEach(() => {
    cy.get(getSelector(Selector.diagram)).trigger('mouseup', { force: true });
  });

  it('should create connector between blocks & connector should not be selected after create', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.start
      ),
      getSelector(Selector.diagram),
      { clientX: CENTER_MOUSE.x - 300, clientY: CENTER_MOUSE.y - 300 }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.condition
      ),
      getSelector(Selector.diagram)
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 0),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 1);
    cy.get(getSelectorConnectorLine(1, true)).should('not.exist');

    // result from redux
    cy.getState(REDUCER_KEY, 'connectors').should('have.length', 1);
  });

  it('should create connector between blocks & connector should be selected after create', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
      ),
      getSelector(Selector.diagram),
      { clientX: CENTER_MOUSE.x + 300, clientY: CENTER_MOUSE.y + 300 }
    );

    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 1),
      getSelectorBlockNode(BlockNodeType.in, 2)
    );

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 2);
    cy.get(getSelectorConnectorLine(1, true)).should('exist');

    // result from redux
    cy.getState(REDUCER_KEY, 'connectors').should('have.length', 2);
    cy.getState(REDUCER_KEY, 'connectors.1').then((data) => {
      cy.getState(REDUCER_KEY, 'selectedElement.id').should('eq', data.id);
    });
  });

  it('should change logic operator', () => {
    // when
    cy.get(
      getSelectorInput(E2EAttribute.editConnectorInputRadio, LogicOperator.or)
    ).click();

    // result from redux
    cy.getState(REDUCER_KEY, 'connectors').should('have.length', 2);
    cy.getState(REDUCER_KEY, 'connectors.1').then((data) => {
      cy.wrap(data).its('logicOperator').should('eq', LogicOperator.or);
    });
  });

  it('should be unselected after click the panel', () => {
    // when
    cy.get(getSelector(Selector.componentPanel)).trigger('mousedown', {
      button: 0,
    });

    // result from html
    cy.get(getSelectorConnectorLine(1, true)).should('not.exist');

    // result from redux
    cy.getState(REDUCER_KEY, 'selectedElement').should('eq', null);
  });

  it('should remove exist connectors', () => {
    // when
    cy.get(getSelectorConnectorLine(0)).click();
    cy.keyDown(getSelectorConnectorLine(0), KeyboardKeys.delete);
    cy.get(getSelectorConnectorLine(0)).click();
    cy.keyDown(getSelectorConnectorLine(0), KeyboardKeys.delete);

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY, 'connectors').should('have.length', 0);
  });
});
