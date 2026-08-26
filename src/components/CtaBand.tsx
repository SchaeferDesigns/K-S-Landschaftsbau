import Link from 'next/link';
import Contour from './Contour';
import Icon from './Icon';
import Reveal from './Reveal';
import { company } from '@/config/company';

type CtaBandProps = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export default function CtaBand({
  title = 'Reden wir über Ihren Garten',
  text = 'Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns zurück, sehen uns die Fläche an und erstellen Ihnen ein Angebot. Kostenfrei und unverbindlich.',
  primaryLabel = 'Angebot anfordern',
  primaryHref = '/kontakt',
}: CtaBandProps) {
  return (
    <section className="section section--tight" aria-labelledby="cta-titel">
      <div className="container">
        <Reveal className="reveal--scale">
          <div className="cta-band">
            <Contour variant="b" />
            <div className="cta-band__inner">
              <div className="cta-band__text">
                <p className="eyebrow">Nächster Schritt</p>
                <h2 id="cta-titel">{title}</h2>
                <p>{text}</p>
              </div>
              <div className="cta-band__actions">
                <Link href={primaryHref} className="btn btn--light btn--lg">
                  {primaryLabel}
                  <Icon name="ArrowRight" size={19} className="btn-arrow" />
                </Link>
                {company.phoneHref ? (
                  <a href={`tel:${company.phoneHref}`} className="btn btn--glass btn--lg">
                    <Icon name="Phone" size={19} />
                    {company.phone}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
