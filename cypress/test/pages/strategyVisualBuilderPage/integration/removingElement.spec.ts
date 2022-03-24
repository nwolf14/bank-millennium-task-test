import mapValues from 'lodash/mapValues';

// others
import { BlockType, BlockNodeType, KeyboardKeys } from '../enums';
import { CENTER_MOUSE, REDUCER_KEY } from '../constants';
import { E2EAttribute, Selector } from '../../../enums';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// selectors
import { getSelectorBlockNode, getSelectorConnectorLine } from '../selectors';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

const blocksPositions = {
  A1: { x: -300, y: -200 },
  B1: { x: -150, y: 0 },
  C1: { x: 0, y: 200 },
  D1: { x: 300, y: 200 },
  A2: { x: -300, y: 0 },
  B2: { x: 0, y: 0 },
  C2: { x: 300, y: 0 },
};

const blocksMousePositions = mapValues(blocksPositions, ({ x, y }) => ({
  x: CENTER_MOUSE.x + x,
  y: CENTER_MOUSE.y + y,
}));

describe('Authorized user removes elements', () => {
  /**
   * Explanation:
   * Every letter means number of block eg. A === First Block
   * Every number after letter means current layout level eg. A1 === First BLock & First Layer
   * (+) - means group of blocks connected
   * (-) - means group of blocks disconnected
   * (>) - means the chain of relationships
   */

  before(() => {
    cy.visit(getRouteByName(RouteName.StrategyVisualBuilder));
  });

  beforeEach(() => {
    cy.log('Grid is hidden');
  });

  it('should make: A1 - B1 - C1', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.start
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.A1.x, clientY: blocksMousePositions.A1.y }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.B1.x, clientY: blocksMousePositions.B1.y }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.condition
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.C1.x, clientY: blocksMousePositions.C1.y }
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 0),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 1),
      getSelectorBlockNode(BlockNodeType.in, 2)
    );
    cy.get(getSelectorConnectorLine(0)).click();
    cy.keyDown(getSelectorConnectorLine(0), KeyboardKeys.delete);
    cy.get(getSelectorConnectorLine(0)).click();
    cy.keyDown(getSelectorConnectorLine(0), KeyboardKeys.delete);

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      cy.wrap(data).its('connectors').should('have.length', 0);
    });
  });

  it('should make: A1 - B1 - C1 WHEN B1 is removed', () => {
    // when
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 0),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 1),
      getSelectorBlockNode(BlockNodeType.in, 2)
    );
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 1)).click();
    cy.keyDown(
      getSelector(Selector.block, E2EAttribute.componentBlock, 1),
      KeyboardKeys.delete
    );

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      cy.wrap(data).its('blocks').should('have.length', 2);
      cy.wrap(data).its('connectors').should('have.length', 0);
    });
  });

  it('should remove: (A2, B2, C2) & make: (A1 - B1 - C1)  WHEN B1 is removed', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.B1.x, clientY: blocksMousePositions.B1.y }
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 0),
      getSelectorBlockNode(BlockNodeType.in, 2)
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 2),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );
    cy.get(
      getSelector(Selector.block, E2EAttribute.componentBlock, 2)
    ).dblclick();
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.start
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.A2.x, clientY: blocksMousePositions.A2.y }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.condition
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.B2.x, clientY: blocksMousePositions.B2.y }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.C2.x, clientY: blocksMousePositions.C2.y }
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 0),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 1),
      getSelectorBlockNode(BlockNodeType.in, 2)
    );
    cy.get(
      getSelector(
        Selector.navigationLayerButtonActive,
        E2EAttribute.navigationLayer,
        0
      )
    ).click();
    cy.get(getSelector(Selector.block, E2EAttribute.componentBlock, 2)).click();
    cy.keyDown(
      getSelector(Selector.block, E2EAttribute.componentBlock, 2),
      KeyboardKeys.delete
    );

    // result from html
    cy.get(getSelector(Selector.connector)).should('have.length', 0);

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      cy.wrap(data).its('blocks').should('have.length', 2);
      cy.wrap(data).its('connectors').should('have.length', 0);
    });
  });
});
