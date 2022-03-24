import mapValues from 'lodash/mapValues';

// others
import {
  BlockType,
  BlockNodeType,
  KeyboardKeys,
  LogicOperator,
  Operator,
} from '../enums';
import { CENTER_MOUSE, REDUCER_KEY } from '../constants';
import { E2EAttribute, Selector } from '../../../enums';
import { RouteName } from '../../../../../src/core/Routing/constants/routes';

// selectors
import { getSelectorBlockNode, getSelectorInput } from '../selectors';

// utils
import { getRouteByName } from './../../../../../src/core/Routing/utils/getRouteByName';
import { getSelector } from '../../../selectors';

const blocksPositions = {
  A1: { x: -300, y: 200 },
  B1: { x: -300, y: 0 },
  C1: { x: 0, y: -200 },
  D1: { x: 300, y: 0 },
};

const blocksMousePositions = mapValues(blocksPositions, ({ x, y }) => ({
  x: CENTER_MOUSE.x + x,
  y: CENTER_MOUSE.y + y,
}));
const result =
  '200 != checkHistoricRsi(14, 1) || (200 != checkHistoricRsi(14, 1) || (200 != checkHistoricRsi(14, 1) || () && 0 == rsi(14)) && 0 == rsi(14)) && 0 == rsi(14)';

describe('Authorized user creates strategy', () => {
  before(() => {
    cy.visit(getRouteByName(RouteName.StrategyVisualBuilder));
  });

  beforeEach(() => {
    cy.log('Grid is hidden');
  });

  it('should get correct result after create strategy', () => {
    // when
    for (let i = 0; i < 3; i++) {
      cy.dragAndDrop(
        getSelector(
          Selector.componentPanelBlock,
          E2EAttribute.componentsPanelBlock,
          BlockType.start
        ),
        getSelector(Selector.diagram),
        {
          clientX: blocksMousePositions.A1.x,
          clientY: blocksMousePositions.A1.y,
        }
      );
      cy.dragAndDrop(
        getSelector(
          Selector.componentPanelBlock,
          E2EAttribute.componentsPanelBlock,
          BlockType.condition
        ),
        getSelector(Selector.diagram),
        {
          clientX: blocksMousePositions.B1.x,
          clientY: blocksMousePositions.B1.y,
        }
      );
      cy.get(
        getSelector(Selector.block, E2EAttribute.componentBlock, 1)
      ).click();
      cy.get(getSelectorInput(E2EAttribute.editConditionBlockInputText))
        .clear()
        .type('200')
        .trigger('keydown', { key: KeyboardKeys.enter });
      cy.get(getSelectorInput(E2EAttribute.editConditionBlockSelect)).select(
        'checkHistoricRsi'
      );
      cy.get(
        getSelectorInput(
          E2EAttribute.editConditionBlockInputRadio,
          Operator.unequal
        )
      ).click();
      cy.dragAndDrop(
        getSelector(
          Selector.componentPanelBlock,
          E2EAttribute.componentsPanelBlock,
          BlockType.conditionWrapper
        ),
        getSelector(Selector.diagram),
        {
          clientX: blocksMousePositions.C1.x,
          clientY: blocksMousePositions.D1.y,
        }
      );
      cy.dragAndDrop(
        getSelector(
          Selector.componentPanelBlock,
          E2EAttribute.componentsPanelBlock,
          BlockType.condition
        ),
        getSelector(Selector.diagram),
        {
          clientX: blocksMousePositions.D1.x,
          clientY: blocksMousePositions.D1.y,
        }
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
        getSelectorInput(E2EAttribute.editConnectorInputRadio, LogicOperator.or)
      ).click();
      cy.mouseMoveBySelectors(
        getSelectorBlockNode(BlockNodeType.out, 2),
        getSelectorBlockNode(BlockNodeType.in, 3)
      );
      cy.get(
        getSelector(Selector.block, E2EAttribute.componentBlock, 2)
      ).dblclick();
    }
    cy.get(
      getSelector(
        Selector.navigationLayerButtonActive,
        E2EAttribute.navigationLayer,
        0
      )
    ).click();

    // result from html
    cy.get(getSelector(Selector.strategyResult)).contains(result);

    // result from redux
    cy.getState(REDUCER_KEY, 'strategyResult').should('eq', result);
  });
});
