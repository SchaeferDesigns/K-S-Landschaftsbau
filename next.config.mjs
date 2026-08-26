/**
 * Zwei Betriebsarten:
 *
 * 1. Normal (lokal, eigener Server): Bildoptimierung und Sicherheits-Header aktiv.
 * 2. GITHUB_PAGES=true: statischer Export nach /out, ohne Server.
 *    GitHub Pages liefert das Projekt unter einem Unterpfad aus, deshalb
 *    basePath. Header und Bildoptimierung brauchen einen Server und
 *    entfallen dort.
 */
const isPages = process.env.GITHUB_PAGES === 'true';

/**
 * Unterpfad bei GitHub Pages, entspricht dem Repository-Namen.
 * Die gleiche Variable liest src/config/site.ts, damit Medienpfade
 * und Konfiguration nicht auseinanderlaufen.
 */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '/K-S-Landschaftsbau';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  ...(isPages
    ? {
        output: 'export',
        basePath: repoBasePath,
        // Erzeugt Ordner mit index.html, sonst laufen Unterseiten
        // auf GitHub Pages in einen 404.
        trailingSlash: true,
      }
    : {}),

  images: isPages
    ? {
        // Der Bildoptimierer braucht einen Server, beim Export entfaellt er.
        unoptimized: true,
      }
    : {
        // Keine externen Bildquellen: alle Medien liegen lokal in /public.
        formats: ['image/avif', 'image/webp'],
        // Erlaubte Qualitaetsstufen. 88 fuer das grossflaechige Bild im Startbereich.
        qualities: [75, 88],
        // Die Entwurfsmedien sind eigene SVG-Dateien aus /public.
        // Fremd-SVGs werden nicht geladen, daher ist das unbedenklich.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },

  // Header setzt der Server. Beim statischen Export gibt es keinen,
  // dort muessen sie im Webserver oder beim Hoster hinterlegt werden.
  ...(isPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                },
              ],
            },
            {
              source: '/fonts/:path*',
              headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
            },
          ];
        },
      }),
};

export default nextConfig;
