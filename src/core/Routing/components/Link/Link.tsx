import classnames from 'classnames';
import { FC, ReactNode, AnchorHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// others
import { className as classNameLink, classNames } from './classNames';

// styles
import './link.scss';

export type TLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  targetText?: '_blank' | '_self';
  children: ReactNode;
};

const Link: FC<TLinkProps> = ({
  children,
  target = '_self',
  targetText = 'Opens in a new window',
  className,
  href = '',
  ...props
}) => {
  const opensInNewWindow = target === '_blank';

  const isExternalLink = (href: string): boolean => {
    const externalLinkRegexp = /^https?:\/\//;
    return externalLinkRegexp.test(href);
  };

  if (isExternalLink(href) || opensInNewWindow) {
    return (
      <a
        href={href}
        target={target}
        className={classnames(classNames[classNameLink], className)}
        {...props}
      >
        {children}
        {opensInNewWindow && <span>{targetText}</span>}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={classnames(className)} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
