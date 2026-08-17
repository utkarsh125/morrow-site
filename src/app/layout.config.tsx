import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  themeSwitch: { enabled: false },
  nav: {
    title: (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {/* Dark-mode logo (white text) */}
        <img
          src="/logo-dark.png"
          alt="$morrow"
          height={22}
          style={{ display: 'block', height: '22px', width: 'auto' }}
          className="morrow-logo-dark"
        />
        {/* Light-mode logo (dark text) */}
        <img
          src="/logo-light.png"
          alt="$morrow"
          height={22}
          style={{ display: 'none', height: '22px', width: 'auto' }}
          className="morrow-logo-light"
        />
        <span
          style={{
            fontSize: '0.625rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            padding: '0.1rem 0.35rem',
            borderRadius: '0.25rem',
            background: 'var(--color-fd-muted)',
            color: 'var(--color-fd-primary)',
            border: '1px solid var(--color-fd-border)',
            letterSpacing: '0.04em',
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
