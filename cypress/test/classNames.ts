// classNames
import {
  className as blockClassName,
  classNames as blockClassNames,
} from '../../src/components/StrategyVisualBuilder/components/Diagram/components/Block/classNames';
import {
  className as componentsPanelClassName,
  classNames as componentsPanelClassNames,
} from '../../src/components/StrategyVisualBuilder/components/ComponentsPanel/classNames';
import {
  className as blockNodeClassName,
  classNames as blockNodeClassNames,
} from '../../src/components/StrategyVisualBuilder/components/Diagram/components/Block/components/BlockNode/classNames';
import {
  className as diagramClassName,
  classNames as diagramClassNames,
} from '../../src/components/StrategyVisualBuilder/components/Diagram/classNames';
import {
  className as connectorClassName,
  classNames as connectorClassNames,
} from '../../src/components/StrategyVisualBuilder/components/Diagram/components/Connector/classNames';
import {
  className as moveableElementClassName,
  classNames as moveableElementClassNames,
} from '../../src/components/StrategyVisualBuilder/components/Diagram/components/MoveableElement/classNames';
import { classNames as navigationLayersClassNames } from '../../src/components/StrategyVisualBuilder/components/NavigationLayers/classNames';

// others
import { Selector } from './enums';

export const classNames: { [key in Selector]: string } = {
  [Selector.block]: `.${blockClassNames[blockClassName].name}`,
  [Selector.blockNode]: `.${blockNodeClassNames[blockNodeClassName]}`,
  [Selector.blockSelected]: `.${blockClassNames[blockClassName].modificators.selected}`,
  [Selector.componentPanel]: `.${componentsPanelClassNames[componentsPanelClassName]}`,
  [Selector.componentPanelBlock]: `.${componentsPanelClassNames.block}`,
  [Selector.connector]: `.${connectorClassNames[connectorClassName]}`,
  [Selector.connectorLine]: `.${connectorClassNames.line.name}`,
  [Selector.connectorLineSelected]: `.${connectorClassNames.line.modificators.lineSelected}`,
  [Selector.diagram]: `.${diagramClassNames[diagramClassName].name}`,
  [Selector.diagramArea]: `.${diagramClassNames.area}`,
  [Selector.moveableElement]: `.${moveableElementClassNames[moveableElementClassName]}`,
  [Selector.navigationLayerButton]: `.${navigationLayersClassNames.button.name}`,
  [Selector.navigationLayerButtonActive]: `.${navigationLayersClassNames.button.modificators.active}`,
  [Selector.strategyResult]: `.${diagramClassNames.strategyResult}`,
};
