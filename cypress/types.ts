/// <reference types="cypress" />

// others
import { TObject } from './../src/types';

declare global {
  module Cypress {
    interface Chainable {
      dragAndDrop(
        selectorDragStart: string,
        selectorDragEnd: string,
        options?: TObject<any>
      ): Chainable<JQuery<HTMLElement>>;
      getState(reducerKey: string, path?: string): Chainable<TObject<any>>;
      keyDown(selector: string, key: string): Chainable<JQuery<HTMLElement>>;
      mouseMove(
        selector: string,
        x: number,
        y: number,
        hold?: boolean
      ): Chainable<JQuery<HTMLElement>>;
      mouseMoveBySelectors(
        sourceSelector: string,
        targetSelector: string,
        hold?: boolean
      ): void;
      wheel(selector: string, deltaY: number): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export default Cypress;
