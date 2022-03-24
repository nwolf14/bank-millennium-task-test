import { FC, ReactNode } from 'react';

import PageHeader from '../PageHeader/PageHeader';

type TProps = {
  children?: ReactNode;
  showHeader?: boolean;
};

const Page: FC<TProps> = ({ children, showHeader = false }) => (
  <>
    {showHeader && <PageHeader />}
    {children}
  </>
);

export default Page;
