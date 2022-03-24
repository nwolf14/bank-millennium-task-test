import mapValues from 'lodash/mapValues';

// others
import { CENTER_MOUSE, REDUCER_KEY } from '../constants';
import { BlockType, BlockNodeType } from '../enums';
import { E2EAttribute, Selector } from '../../../enums';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// selectors
import { getSelectorBlockNode } from '../selectors';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

const blocksPositions = {
  A1: { x: -300, y: 200 },
  B1: { x: -300, y: 0 },
  C1: { x: 0, y: -200 },
  D1: { x: 300, y: 0 },
  A2: { x: -300, y: 0 },
  B2: { x: 0, y: 0 },
  C2: { x: 300, y: 0 },
};

const blocksMousePositions = mapValues(blocksPositions, ({ x, y }) => ({
  x: CENTER_MOUSE.x + x,
  y: CENTER_MOUSE.y + y,
}));

describe('Authorized user connects blocks', () => {
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

  it('should make: A1 + B1 + C1', () => {
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
        BlockType.condition
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.B1.x, clientY: blocksMousePositions.B1.y }
    );
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.conditionWrapper
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

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      const { blocks, connectors } = data;

      // A1 + B1
      cy.wrap(blocks[0]).its('id').should('eq', connectors[0].source.blockId);
      cy.wrap(blocks[1]).its('id').should('eq', connectors[0].target.blockId);

      // B1 + C1
      cy.wrap(blocks[1]).its('id').should('eq', connectors[1].source.blockId);
      cy.wrap(blocks[2]).its('id').should('eq', connectors[1].target.blockId);
    });
  });

  it('should make: C1 + D1', () => {
    // when
    cy.dragAndDrop(
      getSelector(
        Selector.componentPanelBlock,
        E2EAttribute.componentsPanelBlock,
        BlockType.condition
      ),
      getSelector(Selector.diagram),
      { clientX: blocksMousePositions.D1.x, clientY: blocksMousePositions.D1.y }
    );
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 2),
      getSelectorBlockNode(BlockNodeType.in, 3)
    );

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      const { blocks, connectors } = data;
      const { source, target } = connectors[connectors.length - 1];

      cy.wrap(blocks[2]).its('id').should('eq', source.blockId);
      cy.wrap(blocks[3]).its('id').should('eq', target.blockId);
    });
  });

  it('should not make: C1 + B1 WHEN (B1 > C1)', () => {
    // when
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 2),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );

    // result from html
    cy.get(
      getSelector(Selector.connector, E2EAttribute.componentConnector, 3)
    ).should('not.exist');

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      cy.wrap(data).its('connectors').should('have.length', 3);
    });
  });

  it('should not make: D1 + B1 WHEN (B1 > C1 > D1)', () => {
    // when
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 3),
      getSelectorBlockNode(BlockNodeType.in, 1)
    );

    // result from html
    cy.get(
      getSelector(Selector.connector, E2EAttribute.componentConnector, 3)
    ).should('not.exist');

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      cy.wrap(data).its('connectors').should('have.length', 3);
    });
  });

  it('should make: A2 + B2 + C2', () => {
    // when
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

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      const { blocks, connectors } = data;

      // A2 + B2
      cy.wrap(blocks[4]).its('id').should('eq', connectors[3].source.blockId);
      cy.wrap(blocks[5]).its('id').should('eq', connectors[3].target.blockId);

      // B2 + C2
      cy.wrap(blocks[5]).its('id').should('eq', connectors[4].source.blockId);
      cy.wrap(blocks[6]).its('id').should('eq', connectors[4].target.blockId);
    });
  });

  it('should make: B1 + D1 WHEN (B1 > C1 > D1)', () => {
    // when
    cy.get(
      getSelector(
        Selector.navigationLayerButtonActive,
        E2EAttribute.navigationLayer,
        0
      )
    ).click();
    cy.mouseMoveBySelectors(
      getSelectorBlockNode(BlockNodeType.out, 1),
      getSelectorBlockNode(BlockNodeType.in, 3)
    );

    // result from redux
    cy.getState(REDUCER_KEY).then((data) => {
      const { blocks, connectors } = data;
      const { source, target } = connectors[connectors.length - 1];

      cy.wrap(blocks[1]).its('id').should('eq', source.blockId);
      cy.wrap(blocks[3]).its('id').should('eq', target.blockId);
    });
  });
});
