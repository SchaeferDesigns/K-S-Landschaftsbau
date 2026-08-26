'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Icon from './Icon';
import type { Project } from '@/data/projects';

/**
 * Projektgalerie mit Filter.
 * Solange keine Projekte hinterlegt sind, wird die Galerie gar nicht erst
 * eingebunden. Sobald src/data/projects.ts gefuellt ist, funktioniert alles
 * ohne weitere Anpassung.
 */
export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ['Alle', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [active, setActive] = useState('Alle');

  const visible = active === 'Alle' ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      {categories.length > 2 ? (
        <div className="chip-row mt-2" role="group" aria-label="Projekte filtern">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`chip${category === active ? ' chip--accent' : ''}`}
              aria-pressed={category === active}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid grid--3 mt-4">
        {visible.map((project) => (
          <article className="card card--link" key={project.slug} style={{ padding: 0, overflow: 'hidden' }}>
            <div className="media-frame" style={{ border: 0, borderRadius: 0, boxShadow: 'none' }}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={800}
                height={600}
                sizes="(max-width: 900px) 100vw, 380px"
              />
            </div>
            <div style={{ padding: '1.35rem', display: 'grid', gap: '0.5rem' }}>
              <span className="chip chip--accent" style={{ justifySelf: 'start' }}>
                {project.category}
              </span>
              <h3 className="card__title">{project.title}</h3>
              <p className="card__text">{project.summary}</p>
              <p className="muted" style={{ fontSize: '0.88rem' }}>
                <Icon name="MapPin" size={14} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                {project.location}, {project.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
