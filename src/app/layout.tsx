import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import 'fumadocs-ui/style.css';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#1d2021] text-[#ebdbb2] antialiased font-sans flex flex-col selection:bg-[#504945] selection:text-[#fbf1c7]">
        <RootProvider theme={{ defaultTheme: 'dark', enabled: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
