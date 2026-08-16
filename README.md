# Morrow Documentation

> Official documentation and website for [Morrow](https://github.com/utkarsh125/morrow), live at [morrow.utkarshpandey.in](https://morrow.utkarshpandey.in).

Built with **[Fumadocs](https://fumadocs.vercel.app)**, **Next.js 15+ App Router**, **Inter** typography, and the **Gruvbox Dark** aesthetic.

---

## Design Philosophy

- **Focus & Minimalism**: Pure typography, clean information hierarchy, and zero decorative icon clutter.
- **Instant Search**: Full-text search index accessible via `Cmd + K` or `/`.
- **65+ Kitty Theme Catalog**: Visual color palettes with exact hex values and click-to-copy functionality.
- **Fast & Lightweight**: Server components and pre-rendered static MDX pages.

---

## Documentation Pages

- **[Overview](/docs)**: Core philosophy, privacy guarantees, SQLite storage model.
- **[Installation](/docs/installation)**: Homebrew tap, quick install script, Cargo crates.io, and source build.
- **[Quickstart](/docs/quickstart)**: 60-second setup with Ollama and recommended models.
- **[Slash Commands](/docs/commands)**: Complete directory of all 21 slash commands and aliases.
- **[Keyboard Shortcuts](/docs/shortcuts)**: Ergonomic key bindings for mouse-free navigation.
- **[Themes Catalog](/docs/themes)**: 65+ official Kitty terminal color schemes with live swatches.
- **[Architecture & Privacy](/docs/architecture)**: Local SQLite schema, ephemeral RAM mode, and network boundaries.
- **[Configuration](/docs/configuration)**: `~/.config/morrow/config.toml` options.

---

## Local Development

```bash
# Install dependencies & generate MDX source
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Deployment to `morrow.utkarshpandey.in` (Vercel)

1. Push this repository to GitHub:
   ```bash
   git push origin main
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
8. Vercel will automatically provision SSL/TLS certificates and verify DNS.

---

## License

MIT © [Utkarsh Pandey](https://utkarshpandey.in)
