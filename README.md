# Morrow Website & Documentation

> Landing page and interactive documentation for [Morrow](https://github.com/utkarsh125/morrow), live at [morrow.utkarshpandey.in](https://morrow.utkarshpandey.in).

---

## Features

- **In-Browser Hermes TUI Simulator**: Interactive Ratatui layout emulation with thought collapsible accordions, live telemetry, and slash command autocompletion.
- **65+ Kitty Terminal Theme Explorer**: Searchable and categorized visual gallery of all 65+ official Kitty color schemes with live hex palette swatches and real-time terminal preview.
- **Complete Slash Command Directory**: Reference catalog for all 18+ slash commands (`/help`, `/model`, `/theme`, `/temp`, `/export`, `/copy`, `/stats`, etc.) with arguments and examples.
- **Keyboard-First Hotkey Matrix**: Visual cheat sheet with keycaps for all navigation, chat, and system shortcuts (`Ctrl-S`, `Ctrl-T`, `Ctrl-B`, `Ctrl-P`, `Ctrl-Y`, `PgUp/PgDn`, `Esc`).
- **100% Local Privacy & Architecture**: Explanations of SQLite persistence, ephemeral memory mode, and zero-egress Ollama communications.
- **Multi-Platform Install Tabs**: One-click copy commands for Homebrew, curl script, Cargo crates.io, Cargo Git, and Source build.

---

## Tech Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & CSS Variables
- **Icons**: Lucide React & Custom SVG
- **Typography**: Inter & JetBrains Mono

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Start production server locally
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

---

## Deployment to `morrow.utkarshpandey.in` (Vercel)

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/utkarsh125/morrow-site.git
   git branch -M main
   git push -u origin main
   ```

2. Open the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Select and import the `utkarsh125/morrow-site` repository.
4. Keep default settings (Framework: Next.js) and click **"Deploy"**.
5. Once deployed, navigate to **Project Settings > Domains**.
6. Add `morrow.utkarshpandey.in`.
7. In your DNS provider (e.g., Cloudflare, Namecheap, Route 53):
   - **Type**: `CNAME`
   - **Name / Host**: `morrow`
   - **Value / Target**: `cname.vercel-dns.com`
8. Vercel will automatically provision SSL/TLS certificates and verify DNS within minutes.

---

## License

MIT © [Utkarsh Pandey](https://utkarshpandey.in)
