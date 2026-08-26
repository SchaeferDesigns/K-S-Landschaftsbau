'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState, type FormEvent } from 'react';

import Checkbox from './Checkbox';
import ChoiceCards from './ChoiceCards';
import CustomSelect from './CustomSelect';
import Icon from './Icon';
import { company } from '@/config/company';
import { formEndpoint } from '@/config/site';
import { getService, services } from '@/data/services';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error' | 'unconfigured';

type Errors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const vorhaben = [
  { value: 'Neue Gartenanlage', label: 'Neuer Garten', icon: 'Sprout' },
  { value: 'Einzelne Baumaßnahme', label: 'Einzelne Maßnahme', icon: 'HardHat' },
  { value: 'Regelmäßige Pflege', label: 'Regelmäßige Pflege', icon: 'Leaf' },
  { value: 'Gewerbe oder Kommune', label: 'Gewerbe, Kommune', icon: 'Building2' },
];

const objektarten = [
  { value: 'Privatgarten', label: 'Privatgarten', icon: 'Flower2' },
  { value: 'Neubau', label: 'Neubau', icon: 'HardHat' },
  { value: 'Wohnanlage', label: 'Wohnanlage', icon: 'Building2' },
  { value: 'Gewerbefläche', label: 'Gewerbefläche', icon: 'Briefcase' },
];

const groessen = [
  { value: 'bis 100 m²', label: 'bis 100 m²' },
  { value: '100 bis 300 m²', label: '100 bis 300 m²' },
  { value: '300 bis 800 m²', label: '300 bis 800 m²' },
  { value: 'über 800 m²', label: 'über 800 m²' },
  { value: 'noch unklar', label: 'Weiß ich noch nicht' },
];

const zeitraeume = [
  { value: 'so früh wie möglich', label: 'So früh wie möglich' },
  { value: 'in den nächsten 3 Monaten', label: 'In den nächsten 3 Monaten' },
  { value: 'in dieser Saison', label: 'In dieser Saison' },
  { value: 'nächstes Jahr', label: 'Nächstes Jahr' },
  { value: 'erst einmal informieren', label: 'Erst einmal informieren' },
];

const stepTitles = ['Ihr Vorhaben', 'Das Objekt', 'Ihre Kontaktdaten'];

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const [form, setForm] = useState({
    vorhaben: '',
    leistung: '',
    objektart: '',
    groesse: '',
    zeitraum: '',
    name: '',
    email: '',
    telefon: '',
    ort: '',
    nachricht: '',
    datenschutz: false,
    website: '',
  });

  const leistungOptions = useMemo(
    () => [
      ...services.map((service) => ({ value: service.title, label: service.navTitle })),
      { value: 'Noch offen', label: 'Weiß ich noch nicht' },
    ],
    [],
  );

  // Vorauswahl über die Adresszeile, zum Beispiel von einer Leistungsseite aus
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('leistung');
    if (!slug) return;
    const service = getService(slug);
    if (service) setForm((state) => ({ ...state, leistung: service.title }));
  }, []);

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((state) => ({ ...state, [key]: value }));
    setErrors((state) => {
      if (!state[key as string]) return state;
      const next = { ...state };
      delete next[key as string];
      return next;
    });
  }

  function validateStep(index: number): Errors {
    const next: Errors = {};
    if (index === 0) {
      if (!form.vorhaben) next.vorhaben = 'Bitte wählen Sie aus, worum es geht.';
    }
    if (index === 2) {
      if (form.name.trim().length < 2) next.name = 'Bitte geben Sie Ihren Namen an.';
      if (!emailPattern.test(form.email.trim())) next.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
      if (form.nachricht.trim().length < 10) next.nachricht = 'Ein paar Sätze zu Ihrem Vorhaben helfen uns weiter.';
      if (!form.datenschutz) next.datenschutz = 'Ohne diese Zustimmung dürfen wir die Anfrage nicht bearbeiten.';
    }
    return next;
  }

  function goNext() {
    const stepErrors = validateStep(step);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      const firstKey = Object.keys(stepErrors)[0];
      document.getElementById(`wizard-${firstKey}`)?.focus();
      return;
    }
    setStep((value) => Math.min(value + 1, stepTitles.length - 1));
  }

  function goBack() {
    setErrors({});
    setStep((value) => Math.max(value - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.website.trim() !== '') return;

    const stepErrors = validateStep(2);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      const firstKey = Object.keys(stepErrors)[0];
      document.getElementById(`wizard-${firstKey}`)?.focus();
      return;
    }

    const payload = {
      vorhaben: form.vorhaben,
      leistung: form.leistung,
      objektart: form.objektart,
      groesse: form.groesse,
      zeitraum: form.zeitraum,
      name: form.name.trim(),
      email: form.email.trim(),
      telefon: form.telefon.trim(),
      ort: form.ort.trim(),
      nachricht: form.nachricht.trim(),
    };

    if (formEndpoint) {
      try {
        setStatus('sending');
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error(`Antwortstatus ${response.status}`);
        setStatus('sent');
      } catch {
        setStatus('error');
      }
      return;
    }

    if (company.email) {
      const subject = `Anfrage über die Website${payload.leistung ? `: ${payload.leistung}` : ''}`;
      const body = [
        `Vorhaben: ${payload.vorhaben}`,
        payload.leistung ? `Leistung: ${payload.leistung}` : '',
        payload.objektart ? `Objekt: ${payload.objektart}` : '',
        payload.groesse ? `Größe: ${payload.groesse}` : '',
        payload.zeitraum ? `Zeitraum: ${payload.zeitraum}` : '',
        '',
        `Name: ${payload.name}`,
        `E-Mail: ${payload.email}`,
        payload.telefon ? `Telefon: ${payload.telefon}` : '',
        payload.ort ? `Ort: ${payload.ort}` : '',
        '',
        payload.nachricht,
      ]
        .filter(Boolean)
        .join('\n');

      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('unconfigured');
  }

  if (status === 'sent' || status === 'mailto') {
    return (
      <div className="wizard">
        <div className="form__status form__status--ok">
          <Icon name="CircleCheckBig" size={22} />
          <span>
            {status === 'sent'
              ? 'Vielen Dank. Ihre Anfrage ist bei uns eingegangen. Wir melden uns zeitnah zurück.'
              : 'Ihr E-Mail-Programm wurde mit der vorbereiteten Anfrage geöffnet. Bitte schicken Sie die Nachricht dort ab.'}
          </span>
        </div>
        <div className="flex-actions">
          <Link href="/leistungen" className="btn btn--secondary">
            Weiter zu den Leistungen
            <Icon name="ArrowRight" size={17} className="btn-arrow" />
          </Link>
          {company.phoneHref ? (
            <a href={`tel:${company.phoneHref}`} className="btn btn--secondary">
              <Icon name="Phone" size={17} />
              {company.phone}
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  const progress = (step + 1) / stepTitles.length;

  return (
    <form className="wizard" onSubmit={handleSubmit} noValidate>
      <div className="wizard__head">
        <div className="wizard__meta">
          <span>
            Schritt <strong>{step + 1}</strong> von {stepTitles.length}
          </span>
          <span>{stepTitles[step]}</span>
        </div>
        <div
          className="wizard__track"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={stepTitles.length}
          aria-valuenow={step + 1}
          aria-label="Fortschritt der Anfrage"
        >
          <span className="wizard__bar" style={{ ['--p' as string]: progress }} />
        </div>
      </div>

      <div aria-live="polite">
        {step === 0 ? (
          <div className="wizard__step" key="schritt-1">
            <div className="field" data-invalid={errors.vorhaben ? 'true' : 'false'} id="wizard-vorhaben" tabIndex={-1}>
              <ChoiceCards
                name="vorhaben"
                legend="Worum geht es? *"
                options={vorhaben}
                value={form.vorhaben}
                onChange={(value) => set('vorhaben', value)}
              />
              {errors.vorhaben ? (
                <span className="field__error">
                  <Icon name="CircleAlert" size={15} />
                  {errors.vorhaben}
                </span>
              ) : null}
            </div>

            <div className="field">
              <span className="field__label">Welche Leistung passt am besten?</span>
              <CustomSelect
                name="leistung"
                label="Leistung auswählen"
                options={leistungOptions}
                value={form.leistung}
                onChange={(value) => set('leistung', value)}
                placeholder="Leistung auswählen"
              />
              <span className="field__hint">Sie können das auch offen lassen, wir klären es im Gespräch.</span>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="wizard__step" key="schritt-2">
            <ChoiceCards
              name="objektart"
              legend="Um welches Objekt geht es?"
              options={objektarten}
              value={form.objektart}
              onChange={(value) => set('objektart', value)}
            />

            <div className="form__row">
              <div className="field">
                <span className="field__label">Ungefähre Fläche</span>
                <CustomSelect
                  name="groesse"
                  label="Ungefähre Fläche"
                  options={groessen}
                  value={form.groesse}
                  onChange={(value) => set('groesse', value)}
                  placeholder="Größe wählen"
                />
              </div>

              <div className="field">
                <span className="field__label">Wann soll es losgehen?</span>
                <CustomSelect
                  name="zeitraum"
                  label="Gewünschter Zeitraum"
                  options={zeitraeume}
                  value={form.zeitraum}
                  onChange={(value) => set('zeitraum', value)}
                  placeholder="Zeitraum wählen"
                />
              </div>
            </div>

            <p className="notice">
              <Icon name="Info" size={18} />
              <span>
                Alle Angaben in diesem Schritt sind freiwillig. Sie helfen uns nur, die Anfrage schneller richtig
                einzuschätzen.
              </span>
            </p>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="wizard__step" key="schritt-3">
            <div className="form__row">
              <div className="field" data-invalid={errors.name ? 'true' : 'false'}>
                <label htmlFor="wizard-name">Name *</label>
                <input
                  id="wizard-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => set('name', event.target.value)}
                  aria-describedby={errors.name ? 'fehler-name' : undefined}
                />
                {errors.name ? (
                  <span className="field__error" id="fehler-name">
                    <Icon name="CircleAlert" size={15} />
                    {errors.name}
                  </span>
                ) : null}
              </div>

              <div className="field" data-invalid={errors.email ? 'true' : 'false'}>
                <label htmlFor="wizard-email">E-Mail *</label>
                <input
                  id="wizard-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => set('email', event.target.value)}
                  aria-describedby={errors.email ? 'fehler-email' : undefined}
                />
                {errors.email ? (
                  <span className="field__error" id="fehler-email">
                    <Icon name="CircleAlert" size={15} />
                    {errors.email}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="form__row">
              <div className="field">
                <label htmlFor="wizard-telefon">Telefon</label>
                <input
                  id="wizard-telefon"
                  type="tel"
                  autoComplete="tel"
                  value={form.telefon}
                  onChange={(event) => set('telefon', event.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="wizard-ort">Ort des Vorhabens</label>
                <input
                  id="wizard-ort"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="zum Beispiel Mutlangen"
                  value={form.ort}
                  onChange={(event) => set('ort', event.target.value)}
                />
              </div>
            </div>

            <div className="field" data-invalid={errors.nachricht ? 'true' : 'false'}>
              <label htmlFor="wizard-nachricht">Ihr Vorhaben *</label>
              <textarea
                id="wizard-nachricht"
                value={form.nachricht}
                onChange={(event) => set('nachricht', event.target.value)}
                placeholder="Beschreiben Sie kurz, was entstehen soll. Bestand, Wünsche und Budgetrahmen helfen uns bei der Einschätzung."
                aria-describedby={errors.nachricht ? 'fehler-nachricht' : undefined}
              />
              {errors.nachricht ? (
                <span className="field__error" id="fehler-nachricht">
                  <Icon name="CircleAlert" size={15} />
                  {errors.nachricht}
                </span>
              ) : null}
            </div>

            {form.vorhaben || form.leistung || form.objektart || form.groesse || form.zeitraum ? (
              <dl className="wizard__summary">
                {form.vorhaben ? (
                  <div>
                    <dt>Vorhaben</dt>
                    <dd>{form.vorhaben}</dd>
                  </div>
                ) : null}
                {form.leistung ? (
                  <div>
                    <dt>Leistung</dt>
                    <dd>{form.leistung}</dd>
                  </div>
                ) : null}
                {form.objektart ? (
                  <div>
                    <dt>Objekt</dt>
                    <dd>{form.objektart}</dd>
                  </div>
                ) : null}
                {form.groesse ? (
                  <div>
                    <dt>Fläche</dt>
                    <dd>{form.groesse}</dd>
                  </div>
                ) : null}
                {form.zeitraum ? (
                  <div>
                    <dt>Zeitraum</dt>
                    <dd>{form.zeitraum}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}

            <div className="field" data-invalid={errors.datenschutz ? 'true' : 'false'}>
              <Checkbox
                id="wizard-datenschutz"
                name="datenschutz"
                checked={form.datenschutz}
                onChange={(checked) => set('datenschutz', checked)}
                describedBy={errors.datenschutz ? 'fehler-datenschutz' : undefined}
              >
                Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen und bin damit einverstanden,
                dass meine Angaben zur Bearbeitung dieser Anfrage gespeichert und verarbeitet werden. *
              </Checkbox>
              {errors.datenschutz ? (
                <span className="field__error" id="fehler-datenschutz">
                  <Icon name="CircleAlert" size={15} />
                  {errors.datenschutz}
                </span>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {/* Unsichtbares Feld gegen automatisierte Eintraege */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="wizard-website">Bitte nicht ausfüllen</label>
        <input
          id="wizard-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => set('website', event.target.value)}
        />
      </div>

      <div className="wizard__actions">
        {step > 0 ? (
          <button type="button" className="btn btn--secondary" onClick={goBack}>
            <Icon name="ChevronRight" size={17} style={{ transform: 'rotate(180deg)' }} />
            Zurück
          </button>
        ) : (
          <span className="form__note" style={{ maxWidth: '24ch' }}>
            Dauert ungefähr eine Minute.
          </span>
        )}

        {step < stepTitles.length - 1 ? (
          <button type="button" className="btn btn--primary" onClick={goNext}>
            Weiter
            <Icon name="ArrowRight" size={18} className="btn-arrow" />
          </button>
        ) : (
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <Icon name="LoaderCircle" size={18} className="spin" />
            ) : (
              <Icon name="Send" size={18} />
            )}
            {status === 'sending' ? 'Wird gesendet' : 'Anfrage absenden'}
          </button>
        )}
      </div>

      <div aria-live="polite">
        {status === 'unconfigured' ? (
          <div className="form__status form__status--error">
            <Icon name="CircleAlert" size={20} />
            <span>
              Der Versand ist noch nicht eingerichtet.
              {company.phoneHref ? (
                <>
                  {' '}
                  Bitte erreichen Sie uns telefonisch unter <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
                </>
              ) : null}
            </span>
          </div>
        ) : null}

        {status === 'error' ? (
          <div className="form__status form__status--error">
            <Icon name="CircleAlert" size={20} />
            <span>
              Das Senden hat nicht funktioniert.
              {company.phoneHref ? (
                <>
                  {' '}
                  Bitte rufen Sie uns an unter <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
                </>
              ) : null}
            </span>
          </div>
        ) : null}
      </div>

      {step === stepTitles.length - 1 ? (
        <p className="form__note">
          Mit * markierte Felder sind Pflichtfelder. Ihre Angaben nutzen wir ausschließlich zur Bearbeitung dieser
          Anfrage.
        </p>
      ) : null}
    </form>
  );
}
