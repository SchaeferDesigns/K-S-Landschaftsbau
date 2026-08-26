import type { ReactNode } from 'react';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import Contour from './Contour';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  /** Bestimmt das Höhenlinienmuster, damit sich die Seiten unterscheiden */
  pattern?: 'a' | 'b' | 'c';
};

export default function PageHero({ eyebrow, title, lead, crumbs, children, pattern = 'c' }: PageHeroProps) {
  return (
    <header className="page-hero">
      <Contour variant={pattern} />
      <span className="blob blob--a" aria-hidden="true" />

      <div className="container page-hero__inner">
        {crumbs?.length ? <Breadcrumbs items={crumbs} /> : null}
        {eyebrow ? (
          <p className="eyebrow fade-up" style={{ marginTop: crumbs?.length ? '1.15rem' : 0 }}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="line-mask">
          <span style={{ ['--d' as never]: '90ms' }}>{title}</span>
        </h1>
        {lead ? (
          <p className="lead fade-up" style={{ ['--d' as never]: '220ms' }}>
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
