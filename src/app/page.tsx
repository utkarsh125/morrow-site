import Link from 'next/link';

function Logo({ size = 40 }: { size?: number }) {
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

const installMethods = [
  { label: 'Homebrew', cmd: 'brew install utkarsh125/tap/morrow' },
  { label: 'Cargo', cmd: 'cargo install morrow' },
  { label: 'curl', cmd: 'curl -fsSL https://raw.githubusercontent.com/utkarsh125/morrow/main/install.sh | bash' },
];

const features = [
  {
    title: 'Fully Local',
    body: 'No accounts, telemetry, or cloud. Conversations persist in a local SQLite database at ~/.local/share/morrow/.',
  },
  {
    title: '65+ Kitty Themes',
    body: 'Switch between 65+ curated terminal color themes live with Ctrl-T or /theme. Palette previews included.',
  },
  {
    title: 'Keyboard First',
    body: 'Every action is a single-chord shortcut. Slash commands, session browser, model picker — all keyboard-driven.',
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        background: 'var(--color-fd-background)',
        color: 'var(--color-fd-foreground)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── NAV ─────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: '1px solid var(--color-fd-border)',
          padding: '0 clamp(1rem, 5vw, 3rem)',
          height: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'var(--color-fd-background)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
          <span style={{ color: 'var(--color-fd-primary)', display: 'flex' }}>
            <Logo size={20} />
          </span>
          Morrow
          <span
            style={{
              fontSize: '0.6rem',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link
            href="/docs"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-fd-muted-foreground)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Docs
          </Link>
          <Link
            href="https://github.com/utkarsh125/morrow"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-fd-muted-foreground)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            GitHub ↗
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 3rem) clamp(3rem, 8vw, 5rem)',
          gap: '2rem',
        }}
      >
        {/* Logo */}
        <span style={{ color: 'var(--color-fd-primary)' }}>
          <Logo size={52} />
        </span>

        {/* Headline */}
        <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h1
            style={{
              fontSize: 'clamp(1.875rem, 5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-fd-foreground)',
              margin: 0,
            }}
          >
            Your private AI workspace,<br />always on your machine.
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)',
              color: 'var(--color-fd-muted-foreground)',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 400,
            }}
          >
            Morrow is a calm, keyboard-first terminal for local LLMs via Ollama.
            Zero telemetry. No cloud. SQLite persistence.
          </p>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            href="/docs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.6rem 1.4rem',
              borderRadius: '0.5rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: 'var(--color-fd-primary)',
              color: 'var(--color-fd-primary-foreground)',
              transition: 'opacity 0.15s',
            }}
          >
            Get started
          </Link>
          <Link
            href="https://github.com/utkarsh125/morrow"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.6rem 1.4rem',
              borderRadius: '0.5rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: 'var(--color-fd-secondary)',
              color: 'var(--color-fd-foreground)',
              border: '1px solid var(--color-fd-border)',
              transition: 'opacity 0.15s',
            }}
          >
            View on GitHub
          </Link>
        </div>

        {/* Install snippets */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '500px',
            marginTop: '0.5rem',
          }}
        >
          {installMethods.map(({ label, cmd }) => (
            <div
              key={label}
              style={{
                display: 'grid',
                gridTemplateColumns: '5.5rem 1fr',
                alignItems: 'center',
                borderRadius: '0.5rem',
                border: '1px solid var(--color-fd-border)',
                overflow: 'hidden',
                background: 'var(--color-fd-muted)',
                fontSize: '0.8125rem',
              }}
            >
              <span
                style={{
                  padding: '0.5rem 0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  fontSize: '0.6875rem',
                  color: 'var(--color-fd-primary)',
                  background: 'var(--color-fd-secondary)',
                  borderRight: '1px solid var(--color-fd-border)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </span>
              <code
                style={{
                  padding: '0.5rem 0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8125rem',
                  color: 'var(--color-fd-foreground)',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                }}
              >
                {cmd}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--color-fd-border)',
          padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 5vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.5rem',
          maxWidth: '960px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {features.map(({ title, body }) => (
          <div
            key={title}
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid var(--color-fd-border)',
              background: 'var(--color-fd-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'var(--color-fd-foreground)',
                margin: 0,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-fd-muted-foreground)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {body}
            </p>
          </div>
        ))}
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid var(--color-fd-border)',
          padding: '1.25rem clamp(1rem, 5vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.8125rem',
          color: 'var(--color-fd-muted-foreground)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: 'var(--color-fd-primary)', display: 'flex' }}>
            <Logo size={14} />
          </span>
          Morrow — built by{' '}
          <a
            href="https://utkarshpandey.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-fd-primary)', textDecoration: 'none', fontWeight: 500 }}
          >
            Utkarsh Pandey
          </a>
        </span>
        <span>MIT License</span>
      </footer>
    </main>
  );
}
