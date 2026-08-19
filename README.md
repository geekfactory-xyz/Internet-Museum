# 🏛️ Internet Museum

**The Internet Museum** is an interactive digital archive that preserves the history and culture of the early web. Built as a virtual art gallery, it lets visitors walk through four chronological "wings", admire gold-framed artifacts, view live embeds of the original websites and videos, and read each artifact's archival dossier — all in a fully bilingual (🇬🇧 / 🇫🇷) experience.

> A curated digital archive preserving the history and culture of the early web, digital phenomena, and iconic moments online.
>
> Created by **Émile Gagnon** — **GEEK FACTORY**

---

## ✨ Features

### 🖼️ A Museum, Not a Website
- **Welcome page** with a curator's statement and a 1996-style badge header (Netscape Now & Internet Explorer buttons, complete with grayscale-to-color hover)
- **Lobby** with four golden-framed "wings", each with its own museum plaque
- **Gallery view** — artifacts hang on the wall with 3D flip transitions, spotlighting, and prev/next navigation
- **Artifact Dossier modals** — every artifact opens a detailed archival record: title, year, description, **historical context**, source credit, archivist signature, and an Item ID

### 🗂️ The Four Wings (25 artifacts)
| Wing | Era | Highlights |
|---|---|---|
| **The Dawn** 🌐 | 1960–1989 | ARPANET logical map, the first email (`@`), the first spam |
| **World Wide Web 1.0** 🦕 | 1990–1999 | The first web page (live CERN iframe), Dancing Baby, Space Jam website (live), AOL "1000 Hours Free" CD, "You've Got Mail", the dial-up handshake, Windows 95 "Start Me Up" |
| **The Social & P2P Revolution** 💿 | 2000–2009 | Napster, MSN Messenger, Xbox banned "Champagne" ad, Xbox 360 dashboard, Windows XP & 7, iPod Shuffle, *Me at the zoo*, the original iPhone keynote, **the Rickroll**, the Hamburger Song, Latrell & "A Thousand Miles" |
| **The Modern Web** 📱 | 2010–Present | Minecraft: Xbox 360 Edition, Windows 8, side-eye Chloe |

### 🎥 Three Artifact Types
Each artifact can be presented as:
- **Image** — high-res archival photography
- **Video** — embedded YouTube clips (announcements, ads, cultural moments)
- **Live website** — embedded iframes of surviving relics (info.cern.ch, spacejam.com/1996)

### 📕 Guestbook & Suggestions
The lobby features an on-site **"Artifacts to Add" suggestion box** where visitors can propose new artifacts (name, link, story). Submissions are posted to a Discord webhook via the `/api/suggest` endpoint — a digital guestbook for the internet's past.

### 🌍 Fully Bilingual
Complete **English / French** translation system (`LanguageContext` + `useLanguage` hook) toggled from the footer, covering every page, plaque, button, and artifact record.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | **React 19** (Vite 6 + TypeScript) |
| Styling | **Tailwind CSS 4** (`@tailwindcss/vite`), custom museum theme tokens |
| Animation | **Motion** (`motion/react`) — page transitions, 3D flips, parallax |
| Icons | **lucide-react** |
| Server (dev) | **Express** + Vite middleware via `tsx` |
| API | Serverless function (`api/suggest.ts`) for **Vercel**, Express route (`server.ts`) for local dev |
| Utilities | `clsx` + `tailwind-merge`, `react-router-dom` |

The repo also includes a vintage **OS shell** component set (`src/components/os/` — Desktop, Taskbar, draggable Window) inspired by classic Windows aesthetics, available for the museum's nostalgic windowed mode.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (Express + Vite, port 3000)
npm run dev
```

Open **http://localhost:3000**.

### Other scripts

```bash
npm run build   # Production build → dist/
npm run preview # Preview the production build
npm run lint    # Type-check (tsc --noEmit)
npm run clean   # Remove dist/
```

---

## 🔌 API: Artifact Suggestions

`POST /api/suggest` accepts an artifact suggestion and forwards it as a rich embed to a Discord channel.

**Request body:**
```json
{
  "name": "Windows Millennium",
  "discord_url": "https://en.wikipedia.org/wiki/Windows_Me",
  "description": "The unloved stepchild of Windows..."
}
```

**Responses:**
- `200 { success: true }` — forwarded to Discord
- `400 { error: "Missing name or description" }` — validation failed
- `500/502` — Discord upstream failure

**Configuration:** set the `DISCORD_WEBHOOK_URL` environment variable to point submissions at your own Discord channel. The Suggestion Box runs as a Vercel serverless function in production and as an Express route during local development.

---

## ☁️ Deployment (Vercel)

The repo is pre-configured for **Vercel**:

```json
{
  "framework": "vite",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

1. Push the repo to GitHub and import it into [Vercel](https://vercel.com)
2. Set the `DISCORD_WEBHOOK_URL` environment variable
3. Deploy — SPA routing and the `/api/suggest` function are handled automatically

---

## 📁 Project Structure

```
internet-museum/
├── index.html                  # App shell & SEO/OG/Twitter meta tags
├── server.ts                   # Express + Vite dev/prod server (port 3000)
├── vite.config.ts              # React + Tailwind + env config
├── vercel.json                 # Vercel framework + rewrites
├── tsconfig.json
├── metadata.json               # Project metadata
├── api/
│   └── suggest.ts              # Vercel serverless suggestion endpoint
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # App state, routing, translations, dossier modal
    ├── index.css               # Tailwind theme, museum gallery styles
    ├── content/
    │   └── museum.ts           # ROOMS + ARTIFACTS (all 25 items, EN/FR)
    └── components/
        ├── museum/             # WelcomePage, Lobby, GalleryView, MuseumFooter
        └── os/                 # Vintage OS shell — Desktop, Taskbar, Window
```

**Adding an artifact** is as simple as appending an entry to `src/content/museum.ts` (`Artifact` interface with `id`, `year`, `imageUrl`/`videoEmbedUrl`/`websiteUrl`, `type`, `era`, `source`, and `en`/`fr` translations).

---

## 📜 License & Disclaimer

- Source files carry an **Apache-2.0** SPDX license header.
- The Internet Museum is an **independent educational project**. All trademarks, videos, songs, and multimedia content belong to their respective owners and are presented solely for historical documentation.
- Copyright removal requests: **copyrights@geek-factory.xyz**

## ☕ Support & Contact

- Buy Émile a coffee: [buymeacoffee.com/emileg](https://buymeacoffee.com/emileg)
- General contact: **internetmuseum@geek-factory.xyz**

---

*Archiving the digital ghost since the big bang of the TCP/IP protocol.* 👻
