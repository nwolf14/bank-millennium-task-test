import { FC } from 'react';

// components
import Link from '../../core/Routing/components/Link/Link';

// others
import { RouteName } from '../../core/Routing/constants/routes';

// utils
import { getRouteByName } from '../../core/Routing/utils/getRouteByName';

const PageHeader: FC = () => (
  <div>
    <Link href={getRouteByName(RouteName.Dashboard)}>
      Home
    </Link>
  </div>
);

export default PageHeader;
