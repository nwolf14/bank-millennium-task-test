// others
import { TImport } from '../types';
import { TObject } from '../../../../types';

// utils
import { getHTMLElement } from './common';

const getItemWithHighlightAs = (
  itemsToImports: string,
  classNames: TObject<string>
): string =>
  itemsToImports
    .split(' ')
    .map((item) =>
      item === 'as' ? getHTMLElement(classNames.importAs, 'as') : item
    )
    .join(' ');

export const parseImportToHTMLContext = (
  { items: itemsToImports, path }: TImport,
  classNames: TObject<string>
) =>
  [
    getHTMLElement(classNames.import, 'import'),
    getHTMLElement(
      classNames.importItems,
      getItemWithHighlightAs(itemsToImports, classNames)
    ),
    getHTMLElement(classNames.importFrom, 'from'),
    getHTMLElement(classNames.importPath, `'${path}'`),
    getHTMLElement(classNames.importSemicolon, ';'),
  ].join(' ');
