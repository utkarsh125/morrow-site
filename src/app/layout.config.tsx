import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

function Logo({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 108 0 C 119.046 0 128 8.954 128 20 C 128 8.954 136.954 0 148 0 L 206 0 C 233.614 0 256 22.386 256 50 L 256 108 C 256 119.046 247.046 128 236 128 C 247.046 128 256 136.954 256 148 L 256 206 C 256 233.614 233.614 256 206 256 L 148 256 C 136.954 256 128 247.046 128 236 C 128 247.046 119.046 256 108 256 L 50 256 C 22.386 256 0 233.614 0 206 L 0 148 C 0 136.954 8.954 128 20 128 C 8.954 128 0 119.046 0 108 L 0 50 C 0 22.386 22.386 0 50 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const baseOptions: BaseLayoutProps = {
  themeSwitch: { enabled: false },
  nav: {
    title: (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 600,
          fontSize: '0.9375rem',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span style={{ color: 'var(--color-fd-primary)', flexShrink: 0, display: 'flex' }}>
          <Logo size={18} />
        </span>
        <span>Morrow</span>
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
