import type { Metadata, Viewport } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import 'fumadocs-ui/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morrow — Your private AI workspace, always on your machine',
  description:
    'A calm, keyboard-first terminal workspace for chatting with local language models through Ollama. Zero telemetry, SQLite persistence, and 65+ Kitty terminal themes.',
  keywords: [
    'Morrow',
    'AI',
    'TUI',
    'Terminal',
    'Ollama',
    'Rust',
    'Ratatui',
    'Local LLM',
    'Private AI',
    'SQLite',
    'Kitty Themes',
    'Gruvbox',
    'Utkarsh Pandey',
  ],
  authors: [{ name: 'Utkarsh Pandey', url: 'https://utkarshpandey.in' }],
  creator: 'Utkarsh Pandey',
  metadataBase: new URL('https://morrow.utkarshpandey.in'),
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Morrow — Your private AI workspace, always on your machine',
    description:
      'Calm, keyboard-first terminal workspace for local LLMs via Ollama. 100% private with local SQLite persistence and 65+ Kitty terminal themes.',
    url: 'https://morrow.utkarshpandey.in',
    siteName: 'Morrow',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morrow — Your private AI workspace, always on your machine',
    description:
      'Calm, keyboard-first terminal workspace for local Ollama models. Zero telemetry, local SQLite storage, 65+ Kitty themes.',
    creator: '@utkarsh125',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1d2021',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-fd-background text-fd-foreground antialiased flex flex-col selection:bg-[#504945] selection:text-[#fbf1c7] transition-colors duration-150">
        <RootProvider theme={{ defaultTheme: 'dark', attribute: 'class', enableSystem: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
