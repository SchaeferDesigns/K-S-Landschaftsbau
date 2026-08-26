import Link from 'next/link';
import { Fragment } from 'react';
import Icon from './Icon';

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Sie befinden sich hier" className="breadcrumbs">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={item.href}>
            {isLast ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
            {isLast ? null : <Icon name="ChevronRight" size={14} />}
          </Fragment>
        );
      })}
    </nav>
  );
}
