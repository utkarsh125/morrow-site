/**
 * JSON-LD structured data for Morrow.
 * Schema: SoftwareApplication — tells Google/Bing this is installable software.
 * Injected in the root layout so every page carries it.
 */
export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Morrow',
    alternateName: '$morrow',
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'TerminalEmulator',
    operatingSystem: 'macOS, Linux',
    url: 'https://morrow.utkarshpandey.in',
    downloadUrl: 'https://github.com/utkarsh125/morrow/releases',
    installUrl: 'https://github.com/utkarsh125/morrow',
    softwareVersion: '0.1.0',
    releaseNotes: 'https://github.com/utkarsh125/morrow/releases',
    license: 'https://opensource.org/licenses/MIT',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Utkarsh Pandey',
      url: 'https://utkarshpandey.in',
    },
    description:
      'A Rust-built, keyboard-first terminal workspace for local language models. Supports Ollama and OpenAI-compatible endpoints. Zero telemetry, SQLite persistence, and 65+ Kitty terminal themes.',
    image: 'https://morrow.utkarshpandey.in/og.png',
    screenshot: 'https://morrow.utkarshpandey.in/og.png',
    featureList: [
      'Local-only — no telemetry or cloud',
      'SQLite-backed conversation history',
      'Ollama and OpenAI-compatible providers',
      'Keyboard-first navigation',
      '65+ Kitty terminal themes',
      'Streaming responses with live token telemetry',
      'Slash commands with autocomplete',
      'Markdown and JSON export',
      'File attachments and clipboard support',
    ],
    keywords:
      'local AI, terminal AI, Ollama, Rust TUI, keyboard-first, private AI, local LLM, open source',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
