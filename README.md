# Bini.js Official Website

Official marketing and documentation website for the Bini.js framework - built with Bini.js itself.

A next-generation React framework with built-in source protection, lightning-fast builds, and enterprise-grade tooling.

## Quick Start

```bash
npx create-bini-app@latest bini-js-website
cd bini-js-website
npm install
npm run dev
```

Visit **http://localhost:3000** - your browser will auto-open.

## Project Structure

```
bini-js-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Home page with hero section
│   │   └── globals.css             # Global styles
│   ├── api/
│   │   └── hello.js                # Example API route
│   ├── App.tsx                     # Root component (auto-generated)
│   └── main.tsx                    # Entry point
├── public/
│   ├── favicon.svg                 # Bini.js favicon
│   └── bini-logo.svg              # Logo asset
├── bini/
│   └── internal/
│       └── plugins/                # Vite plugins
│           ├── router.js           # Auto-routing
│           ├── api.js              # API middleware
│           ├── ssr.js              # Meta tags
│           ├── preview.js          # Preview server
│           └── badge.js            # Dev badge
├── .bini/
│   └── dist/                       # Production build output
├── index.html                      # HTML entry
├── vite.config.mjs                 # Vite configuration
├── bini.config.mjs                 # Bini configuration
├── tailwind.config.js              # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies
└── README.md                       # This file
```

## Pages & Routes

### Home Page
**File:** `src/app/page.tsx`
- Hero section with Bini.js logo
- Feature showcase cards
- Statistics with animations
- Call-to-action buttons

### Features Section
**File:** `src/app/page.tsx` (same file, scrollable)
- 6 feature cards showcasing Bini.js advantages
- Hover effects and transitions

### Tutorials Section
**File:** `src/app/page.tsx` (same file, scrollable)
- 8 getting-started guide cards
- Topics, tags, and quick references

### API Reference Section
**File:** `src/app/page.tsx` (same file, scrollable)
- 6 API example cards
- Real-world patterns and code

### FAQ Section
**File:** `src/app/page.tsx` (same file, scrollable)
- 15+ frequently asked questions
- 5 organized categories
- Collapsible accordion interface

## Available Scripts

```bash
# Development server (HMR enabled)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Start production server (Express)
npm run start

# Type checking (TypeScript)
npm run type-check

# Lint code (ESLint)
npm run lint
```

## Features

### Hero Section
- SVG logo with gradient
- Animated "Build. Protect. Deploy." text
- Live statistics counters
- Gradient backgrounds
- Smooth scroll indicators

### Interactive Elements
- Sticky navbar with scroll detection
- Smooth section scrolling
- Card hover effects with scale and glow
- Counter animations for stats
- Accordion expand/collapse
- Responsive mobile menu

### Design
- Modern dark theme (purple/cyan)
- Fully responsive layout
- Gradient text and backgrounds
- SVG favicon
- Social media preview
- Accessibility optimized

## Customization

### Add New Sections

Create a new page in `src/app/`:

```tsx
// src/app/blog/page.tsx
export const metadata = {
  title: 'Blog - Bini.js',
  description: 'Bini.js blog posts and updates'
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold">Blog</h1>
    </div>
  );
}
```

Access at `/blog`

### Update Content

Edit `src/app/page.tsx` to modify:
- Hero text and buttons
- Feature descriptions
- Tutorial topics
- API examples
- FAQ questions and answers

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --purple-400: #c084fc;
  --purple-500: #a855f7;
  --blue-500: #3b82f6;
  --cyan-400: #22d3ee;
  /* Update as needed */
}
```

### Update Links

Edit links in `src/app/page.tsx`:
- Get Started: `https://7jhv5n-3000.csb.app`
- NPM: `https://www.npmjs.com/package/create-bini-app`
- GitHub: `https://github.com/Binidu01/bini-cli`

### Modify Metadata

Edit `src/app/layout.tsx`:

```tsx
export const metadata = {
  title: 'Bini.js - Build. Protect. Deploy.',
  description: 'Next-generation React framework...',
  keywords: ['React', 'Framework', 'Bini.js'],
  // Add more metadata
};
```

## Styling

### Using Tailwind CSS

Already configured! Use utility classes:

```tsx
<div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-8">
  <h1 className="text-4xl font-bold text-purple-300">
    Build. Protect. Deploy.
  </h1>
</div>
```

### Custom CSS

Edit `src/app/globals.css` or create component-specific styles:

```css
.hero {
  background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #000 100%);
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Adding API Routes

Create endpoints in `src/api/`:

```js
// src/api/newsletter.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    return {
      success: true,
      message: 'Subscribed!',
      email
    };
  }
  return { error: 'Method not allowed' };
}
```

Access at `/api/newsletter`

## Deployment

### Vercel (Recommended)

```bash
vercel
```

Auto-detects Bini.js setup and deploys.

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.bini/dist
```

### GitHub Pages

```bash
npm run build
git add .bini/dist
git commit -m "Deploy"
git push
```

### Docker

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm run start
EXPOSE 3000
```

Build and run:
```bash
docker build -t bini-website .
docker run -p 3000:3000 bini-website
```

## Development Tips

### Hot Module Replacement (HMR)
- Edit files in `src/app/` to see instant updates
- Changes to routes auto-reload the app
- No manual refresh needed

### Debug Mode
- Keep browser DevTools open
- Check "Network" tab for API calls
- Use "Console" for JavaScript errors
- Check "Elements" tab for HTML structure

### Performance
- Built with Vite for fast builds
- Automatic code splitting
- Tree shaking removes unused code
- Image optimization ready

## Source Code Protection

In production (`npm run build`):
- Source code is compiled and minified
- TypeScript/JSX files NOT exposed
- Browser only sees compiled JavaScript
- Meta tags injected for SEO
- API handlers run server-side

Development vs Production:
- **Dev:** Full source, HMR, debugging
- **Prod:** Minified, protected, optimized

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+
- Mobile browsers

## Requirements

- Node.js 18.0.0+
- npm, yarn, pnpm, or bun
- ~100MB disk space
- 512MB+ RAM

## Troubleshooting

**Port 3000 already in use:**
```bash
PORT=3001 npm run dev
```

**Routes not generating:**
```bash
node bini/internal/plugins/router.js
npm run dev
```

**Build fails:**
```bash
rm -rf node_modules .bini
npm install
npm run build
```

**Slow on Mac:**
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

## File-Based Routing

Create pages by adding files to `src/app/`:

| File | Route |
|------|-------|
| `src/app/page.tsx` | `/` |
| `src/app/about/page.tsx` | `/about` |
| `src/app/blog/[id]/page.tsx` | `/blog/:id` |

No configuration needed - routes auto-generate!

## SEO Features

- Semantic HTML structure
- Meta tags auto-injected
- Open Graph support
- Twitter Card support
- SVG favicon
- Proper heading hierarchy
- Mobile-responsive

## Contributing

Found an issue?

1. Check [GitHub Issues](https://github.com/Binidu01/bini-cli/issues)
2. Create a new issue with details
3. Submit pull requests

## License

MIT - Free for personal and commercial use.

## Built With

- [Bini.js](https://github.com/Binidu01/bini-cli) - Framework
- [Vite](https://vitejs.dev) - Build tool
- [React](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Language
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React Router](https://reactrouter.com) - Routing

## Links

- [Bini.js CLI](https://github.com/Binidu01/bini-cli)
- [NPM Package](https://www.npmjs.com/package/create-bini-app)
- [GitHub Examples](https://github.com/Binidu01/bini-examples)
- [Creator](https://github.com/Binidu01)

---

**Built with Bini.js by Binidu Ranasinghe**
