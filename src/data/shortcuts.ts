export interface ShortcutInfo {
  keys: string[];
  action: string;
  description: string;
  category: 'Navigation' | 'Chat' | 'Appearance' | 'System';
}

export const SHORTCUTS: ShortcutInfo[] = [
  {
    keys: ['Ctrl', 'S'],
    action: 'Send Message',
    description: 'Submit the current prompt to Ollama with streaming response',
    category: 'Chat'
  },
  {
    keys: ['Ctrl', 'Enter'],
    action: 'Send Message (Alt)',
    description: 'Alternative combination to send message',
    category: 'Chat'
  },
  {
    keys: ['Enter'],
    action: 'Newline / Execute',
    description: 'Insert newline in multiline mode or execute single-line slash command',
    category: 'Chat'
  },
  {
    keys: ['Tab'],
    action: 'Autocomplete / Indent',
    description: 'Accept current slash command suggestion or indent prompt text',
    category: 'Chat'
  },
  {
    keys: ['Ctrl', 'N'],
    action: 'New Session',
    description: 'Start a fresh conversation thread immediately',
    category: 'Chat'
  },
  {
    keys: ['Ctrl', 'H'],
    action: 'History Browser',
    description: 'Open interactive modal to search, preview, rename (r), or delete (d) past sessions',
    category: 'Navigation'
  },
  {
    keys: ['Ctrl', 'T'],
    action: 'Theme Picker',
    description: 'Open searchable 65+ Kitty terminal themes modal with real-time RGB preview',
    category: 'Appearance'
  },
  {
    keys: ['Ctrl', 'P'],
    action: 'Model Switcher',
    description: 'Open interactive fuzzy picker to switch between installed Ollama models',
    category: 'System'
  },
  {
    keys: ['Ctrl', 'M'],
    action: 'Model Switcher (Alt)',
    description: 'Alternative hotkey to open model selector',
    category: 'System'
  },
  {
    keys: ['Ctrl', 'B'],
    action: 'Toggle Sidebar',
    description: 'Show or hide the conversation session sidebar',
    category: 'Appearance'
  },
  {
    keys: ['Ctrl', 'Y'],
    action: 'Yank / Copy',
    description: 'Copy the most recent assistant response directly to clipboard via OSC 52',
    category: 'System'
  },
  {
    keys: ['PgUp', '/', 'PgDn'],
    action: 'Full Scroll',
    description: 'Scroll chat message history by a full viewport page',
    category: 'Navigation'
  },
  {
    keys: ['Ctrl', 'U', '/', 'Ctrl', 'D'],
    action: 'Half-Page Scroll',
    description: 'Vim-style half page up and half page down scrolling',
    category: 'Navigation'
  },
  {
    keys: ['Up', '/', 'Down'],
    action: 'History / Navigate',
    description: 'Recall previous sent prompts from input history or navigate modal lists',
    category: 'Navigation'
  },
  {
    keys: ['Esc'],
    action: 'Dismiss / Cancel',
    description: 'Close active modal, cancel slash autocomplete popup, or deselect focus',
    category: 'Navigation'
  },
  {
    keys: ['Ctrl', 'C'],
    action: 'Abort / Quit',
    description: 'Abort streaming response immediately if generating, or exit Morrow',
    category: 'System'
  }
];
