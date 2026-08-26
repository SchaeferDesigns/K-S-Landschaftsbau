'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import BrandMark from './BrandMark';
import Icon from './Icon';
import { company } from '@/config/company';
import { mainNav } from '@/config/site';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Kopfleiste im Aufbau eines Plankopfs.
 *
 * Auf einer technischen Zeichnung steht im Schriftfeld der Name des Betriebs,
 * darunter eine gezogene Linie und darunter das Gewerk mit Ort. Genau diese
 * Ordnung nutzt die Leiste. Die Navigation ist als Legende gesetzt, mit
 * Haarlinien zwischen den Punkten und einer kleinen Marke am aktiven Eintrag.
 *
 * Die Leiste bleibt beim Scrollen immer sichtbar. Sie wird nur flacher und
 * wechselt auf hellen Grund, damit der Inhalt darunter lesbar bleibt.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const burgerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? 'true' : 'false';
    return () => {
      document.body.dataset.menuOpen = 'false';
    };
  }, [open]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    burgerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const sheet = sheetRef.current;
    const focusables = sheet?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== 'Tab' || !focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, closeMenu]);

  const sheetItems = [{ href: '/', label: 'Startseite' }, ...mainNav, { href: '/kontakt', label: 'Kontakt' }];

  return (
    <>
      <header
        className="site-header"
        data-solid={solid && !open ? 'true' : 'false'}
        /* Auf der Startseite liegt die Leiste ueber einem hellen Bild,
           auf den Unterseiten ueber einem dunklen Kopf. */
        data-over={pathname === '/' ? 'hell' : 'dunkel'}
      >
        <div className="site-header__inner">
          <Link href="/" className="site-header__brand" aria-label={`${company.name}, zur Startseite`}>
            <span className="site-header__wordmark">
              <span className="site-header__leaf">
                <BrandMark size={20} />
              </span>
              {company.name}
            </span>
            <span className="site-header__rule" aria-hidden="true" />
            <span className="site-header__descriptor">
              {company.descriptor}
              <span className="site-header__place"> · {company.address.city}</span>
            </span>
          </Link>

          <nav aria-label="Hauptnavigation">
            <ul className="site-header__nav">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="site-header__link"
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            {company.phoneHref ? (
              <a className="site-header__tel" href={`tel:${company.phoneHref}`}>
                <span className="site-header__tel-label">Telefon</span>
                <span className="site-header__tel-value">{company.phone}</span>
              </a>
            ) : null}

            {company.phoneHref ? (
              <a className="site-header__call" href={`tel:${company.phoneHref}`}>
                <Icon name="Phone" size={19} strokeWidth={1.9} />
                <span className="sr-only">Anrufen: {company.phone}</span>
              </a>
            ) : null}

            <Link href="/kontakt" className="btn btn--primary btn--sm site-header__cta">
              Angebot anfordern
              <Icon name="ArrowRight" size={16} className="btn-arrow" />
            </Link>

            <button
              ref={burgerRef}
              type="button"
              className="site-header__burger"
              aria-expanded={open}
              aria-controls="hauptmenue"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="burger-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="sr-only">{open ? 'Menü schließen' : 'Menü öffnen'}</span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="nav-sheet" id="hauptmenue" ref={sheetRef} role="dialog" aria-modal="true" aria-label="Menü">
          <button type="button" className="nav-sheet__close" onClick={closeMenu}>
            <Icon name="ChevronUp" strokeWidth={1.6} />
            <span className="sr-only">Menü schließen</span>
          </button>

          <p className="nav-sheet__label">Inhalt</p>

          {sheetItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-sheet__link"
              style={{ ['--d' as never]: `${60 + index * 45}ms` }}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            >
              <span className="nav-sheet__no" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
              <Icon name="ArrowRight" size={19} />
            </Link>
          ))}

          <div className="nav-sheet__footer">
            <Link href="/kontakt" className="btn btn--light btn--block">
              Angebot anfordern
              <Icon name="ArrowRight" size={18} className="btn-arrow" />
            </Link>
            {company.phoneHref ? (
              <a href={`tel:${company.phoneHref}`} className="btn btn--glass btn--block">
                <Icon name="Phone" size={18} />
                {company.phone}
              </a>
            ) : null}
          </div>

          <div className="nav-sheet__meta">
            <span>
              {company.address.street}, {company.address.zip} {company.address.city}
            </span>
            {company.email ? <a href={`mailto:${company.email}`}>{company.email}</a> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
