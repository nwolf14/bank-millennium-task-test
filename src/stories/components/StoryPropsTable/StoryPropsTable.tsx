import { FC } from 'react';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';
import { TTableBody } from './types';

// styles
import './story-props-table.scss';

export type TProps = {
  tableBodyData: Array<TTableBody>;
};

const StoryPropsTable: FC<TProps> = ({ tableBodyData }) => {
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <section className={classNamesWithTheme[className]}>
      <h2 className={classNamesWithTheme.title}>Props</h2>
      <table className={classNamesWithTheme.table}>
        <thead>
          <tr className={classNamesWithTheme.rowHeader}>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableBodyData.map(
            ({ defaultValue = '', description, name, type }, key) => (
              <tr className={classNamesWithTheme.rowBody} key={key}>
                <td className={classNamesWithTheme.columnName}>{name}</td>
                <td
                  className={classNamesWithTheme.columnType}
                  dangerouslySetInnerHTML={{
                    __html: type,
                  }}
                />
                <td className={classNamesWithTheme.columnDefaultValue}>
                  {defaultValue}
                </td>
                <td
                  className={classNamesWithTheme.columnDescription}
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};

export default StoryPropsTable;
