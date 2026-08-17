import Link from 'next/link';
import MorrowLogo from '@/components/MorrowLogo';
import DitherHero from '@/components/DitherHero';
import CopyButton from '@/components/CopyButton';

const installMethods = [
  { label: 'homebrew', cmd: 'brew install utkarsh125/tap/morrow' },
  { label: 'cargo',    cmd: 'cargo install morrow' },
  { label: 'curl',     cmd: 'curl -fsSL https://raw.githubusercontent.com/utkarsh125/morrow/main/install.sh | bash' },
];

const capabilities = [
  {
    id: 'local',
    label: 'LOCAL',
    title: 'Everything stays on your machine.',
    desc: 'No accounts, telemetry, or cloud relay. Conversations persist in a SQLite database at ~/.local/share/morrow/. Nothing leaves without your knowledge.',
  },
  {
    id: 'memory',
    label: 'MEMORY',
    title: 'Persistent, SQLite-backed history.',
    desc: 'Sessions survive restarts. Browse, resume, search, or delete past conversations entirely from the keyboard.',
  },
  {
    id: 'keyboard',
    label: 'KEYBOARD',
    title: 'Every action is a single chord.',
    desc: 'Slash commands, session browser, model picker, theme switcher, file attachments — all keyboard-driven. No mouse required.',
  },
  {
    id: 'providers',
    label: 'PROVIDERS',
    title: 'Ollama and any OpenAI-compatible endpoint.',
    desc: 'Not just an Ollama frontend. Point Morrow at any local OpenAI-compatible provider. Model detection, reachability checks, and live switching built in.',
  },
  {
    id: 'themes',
    label: 'THEMES',
    title: '65+ Kitty terminal palettes.',
    desc: 'Switch themes live with /theme or Ctrl-T. Each palette renders a live color preview inside the terminal.',
  },
];

// Actual Kitty theme color palettes from the Morrow theme collection.
const kittyThemes = [
  { name: 'Gruvbox Dark',    bg: '#1d2021', colors: ['#cc241d','#98971a','#d79921','#458588','#b16286','#689d6a','#ebdbb2'] },
  { name: 'Dracula',         bg: '#282a36', colors: ['#ff5555','#50fa7b','#f1fa8c','#bd93f9','#ff79c6','#8be9fd','#f8f8f2'] },
  { name: 'Nord',            bg: '#2e3440', colors: ['#bf616a','#a3be8c','#ebcb8b','#5e81ac','#b48ead','#88c0d0','#d8dee9'] },
  { name: 'Monokai',         bg: '#272822', colors: ['#f92672','#a6e22e','#e6db74','#66d9ef','#ae81ff','#a1efe4','#f8f8f2'] },
  { name: 'Solarized Dark',  bg: '#002b36', colors: ['#dc322f','#859900','#b58900','#268bd2','#d33682','#2aa198','#839496'] },
  { name: 'Tokyo Night',     bg: '#1a1b26', colors: ['#f7768e','#9ece6a','#e0af68','#7aa2f7','#bb9af7','#7dcfff','#c0caf5'] },
  { name: 'One Dark',        bg: '#282c34', colors: ['#e06c75','#98c379','#e5c07b','#61afef','#c678dd','#56b6c2','#abb2bf'] },
  { name: 'Catppuccin Mocha',bg: '#1e1e2e', colors: ['#f38ba8','#a6e3a1','#f9e2af','#89b4fa','#cba6f7','#94e2d5','#cdd6f4'] },
];

export default function HomePage() {
  return (
    <main className="lp-root">

      {/* ── NAV ───────────────────────────────────── */}
      <nav className="lp-nav">
        <span className="lp-nav-brand">
          <MorrowLogo iconSize={18} fontSize="0.9375rem" fontWeight={600} />
          <span className="lp-version">v0.1.0</span>
        </span>
        <div className="lp-nav-links">
          <Link href="/docs" className="lp-nav-link">Docs</Link>
          <Link
            href="https://github.com/utkarsh125/morrow"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-nav-link"
          >
            GitHub ↗
          </Link>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="lp-hero" aria-labelledby="hero-headline">
        <DitherHero />
        <div className="lp-hero-inner">
          <p className="lp-hero-prompt" aria-hidden="true">
            <span className="lp-prompt-dollar">$</span>
            {' '}morrow
            <span className="lp-cursor">▊</span>
          </p>
          <h1 id="hero-headline" className="lp-hero-h1">
            Your private<br />
            AI workspace,<br />
            <span className="lp-hero-h1-soft">always on your machine.</span>
          </h1>
          <p className="lp-hero-sub">
            A Rust-built, keyboard-first terminal workspace for local language models.{' '}
            Ollama and OpenAI-compatible endpoints.{' '}
            Zero telemetry. No accounts.
          </p>
          <div className="lp-hero-actions">
            <Link href="/docs" className="lp-action-primary">
              Read the docs →
            </Link>
            <Link
              href="https://github.com/utkarsh125/morrow"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-action-secondary"
            >
              GitHub ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSTALL ───────────────────────────────── */}
      <section className="lp-section" aria-labelledby="lp-install-label">
        <div className="lp-section-inner">
          <p className="lp-label" id="lp-install-label">Install</p>
          <div className="lp-install-list" role="list">
            {installMethods.map(({ label, cmd }) => (
              <div key={label} className="lp-install-row" role="listitem">
                <span className="lp-dollar" aria-hidden="true">$</span>
                <code className="lp-install-cmd">{cmd}</code>
                <CopyButton text={cmd} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────── */}
      <section className="lp-section" aria-labelledby="lp-caps-label">
        <div className="lp-section-inner">
          <p className="lp-label" id="lp-caps-label">Capabilities</p>
          <div className="lp-caps-list">
            {capabilities.map(({ id, label, title, desc }) => (
              <div key={id} className="lp-cap-row">
                <span className="lp-cap-label">{label}</span>
                <div>
                  <p className="lp-cap-title">{title}</p>
                  <p className="lp-cap-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KITTY THEMES ──────────────────────────── */}
      <section className="lp-section" aria-labelledby="lp-themes-label">
        <div className="lp-section-inner">
          <p className="lp-label" id="lp-themes-label">65+ Kitty Themes</p>
          <p className="lp-themes-hint">
            Switch live with{' '}
            <kbd className="lp-kbd">/theme</kbd>
            {' '}or{' '}
            <kbd className="lp-kbd">Ctrl-T</kbd>.
            {' '}Each palette renders a live preview inside the terminal.
          </p>
          <div className="lp-themes-grid" role="list">
            {kittyThemes.map(({ name, bg, colors }) => (
              <figure
                key={name}
                className="lp-theme-card"
                style={{ background: bg }}
                role="listitem"
              >
                <div className="lp-swatches" aria-hidden="true">
                  {colors.map((c) => (
                    <span
                      key={c}
                      className="lp-swatch"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <figcaption
                  className="lp-theme-name"
                  style={{ color: colors[colors.length - 1] }}
                >
                  {name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer className="lp-footer">
        <span className="lp-footer-brand">
          <MorrowLogo iconSize={14} fontSize="0.8125rem" fontWeight={600} />
          <span> — built by </span>
          <a
            href="https://utkarshpandey.in"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-footer-link"
          >
            Utkarsh Pandey
          </a>
        </span>

      </footer>

    </main>
  );
}
