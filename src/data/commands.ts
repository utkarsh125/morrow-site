export interface CommandInfo {
  name: string;
  args: string;
  description: string;
  category: 'General' | 'Chat' | 'Model' | 'Appearance' | 'Tools';
  aliases?: string[];
  example?: string;
}

export const COMMANDS: CommandInfo[] = [
  {
    name: '/help',
    args: '',
    description: 'Open interactive command palette and keyboard shortcut guide',
    category: 'General',
    aliases: ['/?'],
    example: '/help'
  },
  {
    name: '/new',
    args: '',
    description: 'Start a clean conversation session and clear active context',
    category: 'Chat',
    aliases: ['/n', '/reset'],
    example: '/new'
  },
  {
    name: '/history',
    args: '',
    description: 'Interactive session manager (search, preview, delete d, rename r)',
    category: 'Chat',
    aliases: ['/h', '/sessions', '/convs'],
    example: '/history'
  },
  {
    name: '/model',
    args: '[name]',
    description: 'Switch active LLM model or browse installed Ollama models',
    category: 'Model',
    aliases: ['/m', '/models'],
    example: '/model qwen2.5:7b'
  },
  {
    name: '/theme',
    args: '[name]',
    description: 'Open 65+ Kitty terminal theme picker with live preview or switch theme',
    category: 'Appearance',
    aliases: ['/t', '/themes'],
    example: '/theme catppuccin-mocha'
  },
  {
    name: '/temp',
    args: '[on|off]',
    description: 'Toggle ephemeral temporary chat mode (not written to SQLite history database)',
    category: 'Chat',
    aliases: ['/temporary', '/incognito', '/private'],
    example: '/temp on'
  },
  {
    name: '/rename',
    args: '[title]',
    description: 'Rename the active conversation session for easy history searching',
    category: 'Chat',
    aliases: ['/title'],
    example: '/rename Rust Async Architecture'
  },
  {
    name: '/delete',
    args: '',
    description: 'Delete the current conversation session from local storage',
    category: 'Chat',
    aliases: ['/del', '/rm'],
    example: '/delete'
  },
  {
    name: '/delete all',
    args: '',
    description: 'Purge all locally stored conversation history and reset database',
    category: 'Chat',
    aliases: ['/delete-all', '/clear-all', '/purge'],
    example: '/delete all'
  },
  {
    name: '/clear',
    args: '',
    description: 'Clear the message view in the current session window',
    category: 'Chat',
    aliases: ['/cls'],
    example: '/clear'
  },
  {
    name: '/system',
    args: '[prompt]',
    description: 'View or customize the AI system persona and instructions',
    category: 'Model',
    aliases: ['/sys', '/prompt'],
    example: '/system You are an expert Rust compiler engineer.'
  },
  {
    name: '/sidebar',
    args: '',
    description: 'Toggle conversation sidebar visibility on/off',
    category: 'Appearance',
    aliases: ['/toggle-sidebar', '/sb'],
    example: '/sidebar'
  },
  {
    name: '/timestamps',
    args: '',
    description: 'Toggle message timestamp headers above every message',
    category: 'Appearance',
    aliases: ['/time', '/ts'],
    example: '/timestamps'
  },
  {
    name: '/copy',
    args: '',
    description: 'Copy the last assistant response directly to system clipboard (OSC 52)',
    category: 'Tools',
    aliases: ['/y', '/yank', '/cp'],
    example: '/copy'
  },
  {
    name: '/export',
    args: '[md|json]',
    description: 'Export current chat thread to a clean Markdown or JSON file',
    category: 'Tools',
    aliases: ['/save'],
    example: '/export md'
  },
  {
    name: '/retry',
    args: '',
    description: 'Regenerate the last AI response with fresh model streaming',
    category: 'Chat',
    aliases: ['/regenerate', '/redo'],
    example: '/retry'
  },
  {
    name: '/stop',
    args: '',
    description: 'Abort the active streaming generation immediately',
    category: 'Chat',
    aliases: ['/abort', '/cancel'],
    example: '/stop'
  },
  {
    name: '/stats',
    args: '',
    description: 'View session telemetry, token count, generation speed & database stats',
    category: 'General',
    aliases: ['/info', '/status'],
    example: '/stats'
  },
  {
    name: '/url',
    args: '[url]',
    description: 'View or change the Ollama backend API endpoint URL',
    category: 'Model',
    aliases: ['/endpoint', '/host'],
    example: '/url http://192.168.1.50:11434'
  },
  {
    name: '/bye',
    args: '',
    description: 'Exit Morrow with clean session state preservation',
    category: 'General',
    aliases: [],
    example: '/bye'
  },
  {
    name: '/quit',
    args: '',
    description: 'Quit Morrow immediately',
    category: 'General',
    aliases: ['/q', '/exit'],
    example: '/quit'
  }
];
