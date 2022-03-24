// others
import { BlockType } from './enums';
import { BLOCK_SIZES as CONDITION_BLOCK_SIZES } from '../../../../src/components/StrategyVisualBuilder/components/Diagram/components/Block/components/ConditionBlock/constants';
import { BLOCK_SIZES as CONTAINER_BLOCK_SIZES } from '../../../../src/components/StrategyVisualBuilder/components/Diagram/components/Block/components/ConditionWrapperBlock/constants';
import { BLOCK_SIZES as START_BLOCK_SIZES } from '../../../../src/components/StrategyVisualBuilder/components/Diagram/components/Block/components/StartBlock/constants';

// store
export { REDUCER_KEY } from '../../../../src/store/strategyVisualBuilder/actionsType';

export const AREA_X_OFFSET = 300;
export const AREA_Y_OFFSET = 40;

export const AREA_SIZES = {
  height: 800,
  width: 800,
};

export const AREA_CENTER = {
  x: AREA_SIZES.width / 2,
  y: AREA_SIZES.height / 2,
};

export const BLOCKS_SIZES = {
  [BlockType.condition]: CONDITION_BLOCK_SIZES,
  [BlockType.conditionWrapper]: CONTAINER_BLOCK_SIZES,
  [BlockType.start]: START_BLOCK_SIZES,
};

export const CENTER_MOUSE = {
  x: AREA_CENTER.x + AREA_X_OFFSET,
  y: AREA_CENTER.y + AREA_Y_OFFSET,
};
