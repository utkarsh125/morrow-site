import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Morrow — Your private AI workspace, always on your machine',
  description:
    'A calm, keyboard-first, Hermes-inspired terminal workspace for chatting with local language models through Ollama. Zero telemetry, SQLite persistence, and 65+ Kitty terminal themes.',
  keywords: [
    'Morrow',
    'AI',
    'TUI',
    'Terminal',
    'Ollama',
    'Rust',
    'Ratatui',
    'Local LLM',
    'Hermes',
    'Private AI',
    'SQLite',
    'Kitty Themes',
    'Utkarsh Pandey',
  ],
  authors: [{ name: 'Utkarsh Pandey', url: 'https://utkarshpandey.in' }],
  creator: 'Utkarsh Pandey',
  metadataBase: new URL('https://morrow.utkarshpandey.in'),
  openGraph: {
    title: 'Morrow — Your private AI workspace, always on your machine',
    description:
      'Calm, keyboard-first, Hermes-inspired terminal workspace for local LLMs via Ollama. 100% private with local SQLite persistence and 65+ Kitty terminal themes.',
    url: 'https://morrow.utkarshpandey.in',
    siteName: 'Morrow',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morrow — Your private AI workspace, always on your machine',
    description:
      'Hermes-inspired terminal workspace for local Ollama models. Zero telemetry, local SQLite storage, 65+ Kitty themes.',
    creator: '@utkarsh125',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0d12',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0c0d12] text-zinc-100 antialiased font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
