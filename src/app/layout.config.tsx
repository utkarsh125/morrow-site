import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import MorrowLogo from '@/components/MorrowLogo';

export const baseOptions: BaseLayoutProps = {
  themeSwitch: { enabled: false },
  nav: {
    title: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <MorrowLogo iconSize={18} fontSize="0.9375rem" fontWeight={600} />
        <span
          style={{
            fontSize: '0.5625rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            padding: '0.12rem 0.32rem',
            borderRadius: '0.2rem',
            background: 'var(--color-fd-muted)',
            color: 'var(--color-fd-primary)',
            border: '1px solid var(--color-fd-border)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
          }}
        >
          v0.1.0
        </span>
      </span>
    ),
  },
  links: [
    { text: 'Docs',     url: '/docs',          active: 'nested-url' },
    { text: 'Themes',   url: '/docs/themes' },
    { text: 'Commands', url: '/docs/commands' },
    { text: 'GitHub',   url: 'https://github.com/utkarsh125/morrow', external: true },
  ],
};
