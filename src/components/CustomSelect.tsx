'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import Icon from './Icon';

export type SelectOption = { value: string; label: string };

type CustomSelectProps = {
  name: string;
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  invalid?: boolean;
  describedBy?: string;
};

/**
 * Eigene Auswahlliste statt des Systemelements.
 *
 * Das Systemelement lässt sich optisch kaum anpassen und sieht auf jedem
 * Gerät anders aus. Diese Fassung ist rund, animiert und bedienbar wie das
 * Original: Pfeiltasten, Pos1, Ende, Eingabe, Escape und Klick daneben.
 * Der Wert wird zusätzlich in einem verstecktem Feld geführt, damit das
 * Formular ihn wie gewohnt übergibt.
 */
export default function CustomSelect({
  name,
  label,
  options,
  value,
  onChange,
  placeholder = 'Bitte auswählen',
  invalid = false,
  describedBy,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const baseId = useId();

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  // Klick außerhalb schließt die Liste
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  // Aktiven Eintrag im sichtbaren Bereich halten
  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const node = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    node?.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  function openList(startIndex?: number) {
    setActiveIndex(startIndex ?? (selectedIndex >= 0 ? selectedIndex : 0));
    setOpen(true);
  }

  function commit(index: number) {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(event: ReactKeyboardEvent) {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
        event.preventDefault();
        openList();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % options.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + options.length) % options.length);
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        commit(activeIndex);
        break;
      case 'Tab':
        setOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <div className="select" ref={rootRef}>
      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        type="button"
        id={`${baseId}-button`}
        className="select__button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${baseId}-list`}
        aria-label={label}
        aria-describedby={describedBy}
        aria-invalid={invalid || undefined}
        data-placeholder={selected ? 'false' : 'true'}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <Icon name="ChevronDown" size={19} className="select__chevron" />
      </button>

      {open ? (
        <ul
          ref={listRef}
          id={`${baseId}-list`}
          className="select__list"
          role="listbox"
          aria-label={label}
          aria-activedescendant={activeIndex >= 0 ? `${baseId}-option-${activeIndex}` : undefined}
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              key={option.value || 'leer'}
              id={`${baseId}-option-${index}`}
              className="select__option"
              role="option"
              aria-selected={option.value === value}
              data-active={index === activeIndex ? 'true' : 'false'}
              onPointerEnter={() => setActiveIndex(index)}
              onClick={() => commit(index)}
            >
              {option.label}
              {option.value === value ? <Icon name="Check" size={17} /> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
