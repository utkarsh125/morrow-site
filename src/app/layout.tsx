import type { Metadata, Viewport } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import 'fumadocs-ui/style.css';
import './globals.css';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://morrow.utkarshpandey.in'),

  /* ── Core ─────────────────────────────────────── */
  title: {
    default: 'Morrow — Your private AI workspace',
    template: '%s — Morrow',
  },
  description:
    'A Rust-built, keyboard-first terminal workspace for local language models. Ollama and OpenAI-compatible endpoints. Zero telemetry, SQLite persistence, and 65+ Kitty terminal themes.',
  keywords: [
    'Morrow',
    'local AI',
    'terminal AI',
    'Ollama',
    'local LLM',
    'keyboard-first',
    'Rust TUI',
    'private AI',
    'zero telemetry',
    'open source AI',
    'AI workspace',
    'local language models',
  ],
  authors: [{ name: 'Utkarsh Pandey', url: 'https://utkarshpandey.in' }],
  creator: 'Utkarsh Pandey',

  /* ── Canonical + robots ────────────────────────── */
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  /* ── Open Graph ────────────────────────────────── */
  openGraph: {
    type: 'website',
    url: 'https://morrow.utkarshpandey.in',
    siteName: 'Morrow',
    title: 'Morrow — Your private AI workspace',
    description:
      'A Rust-built, keyboard-first terminal workspace for local language models. Zero telemetry. No accounts. Always on your machine.',
    images: [
      {
        url: '/og.png',
        width: 1220,
        height: 630,
        alt: '$morrow — A rust-based AI workspace for your local LLM models',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },

  /* ── Twitter / X Card ──────────────────────────── */
  twitter: {
    card: 'summary_large_image',
    site: '@utkarsh_125',
    creator: '@utkarsh_125',
    title: 'Morrow — Your private AI workspace',
    description:
      'A Rust-built, keyboard-first terminal workspace for local language models. Zero telemetry. No accounts. Always on your machine.',
    images: ['/og.png'],
  },

  /* ── Icons ─────────────────────────────────────── */
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#1d2021' },
    { media: '(prefers-color-scheme: light)', color: '#fbf1c7' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* Preconnect to Google Fonts origin */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload Inter 400/600 for fastest LCP text render */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <JsonLd />
      </head>
      <body>
        <RootProvider
          theme={{ defaultTheme: 'dark', attribute: 'class', enableSystem: false }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
