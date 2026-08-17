import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Morrow — Your private AI workspace',
    short_name: 'Morrow',
    description:
      'A Rust-built, keyboard-first terminal workspace for local language models. Zero telemetry. No accounts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1d2021',
    theme_color: '#fabd2f',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
