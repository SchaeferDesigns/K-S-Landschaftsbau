/**
 * Bildmarke: ein Blatt, das aus einem Trieb wächst.
 * Bewusst kein Buchstabenkürzel, damit die Marke auch als kleines
 * Symbol funktioniert und zur Branche passt.
 */
export default function BrandMark({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-hidden="true">
      <path
        d="M31 9c0 10.2-6.9 17.3-16 18.3V32a2.2 2.2 0 1 1-4.4 0v-4.7C10.6 17.2 17.5 10.1 26.6 9.1c1.6-.2 3.1-.5 4.4-1.1Z"
        fill="currentColor"
      />
      <path
        d="M12.8 32c0-6.8 3.5-12.3 9.3-15.5"
        stroke="#0d2e20"
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
