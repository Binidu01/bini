import{i as e,n as t,t as n}from"./jsx-runtime-8V1sTRGR.js";import{t as r}from"./Header-Dq4tR1qA.js";var i=n(),a=e(t(),1),o=[{id:`quick-start`,label:`Quick Start`,group:`Introduction`},{id:`file-routing`,label:`File-based Routing`,group:`Core Concepts`},{id:`api-routes`,label:`API Routes`,group:`Core Concepts`},{id:`layouts-metadata`,label:`Layouts & Metadata`,group:`Core Concepts`},{id:`deploy-platforms`,label:`Deploy Platforms`,group:`Deployment`}],s=[`Introduction`,`Core Concepts`,`Deployment`],c=[`netlify`,`cloudflare`,`node`,`deno`,`bun`,`aws`],l={netlify:{config:`// vite.config.ts
import { biniroute } from 'bini-router'
import react from '@vitejs/plugin-react'

export default {
  plugins: [react(), biniroute({ platform: 'netlify' })]
}`,build:`# netlify.toml
[build]
  command = "vite build"
  publish = "dist"

[[edge_functions]]
  path     = "/api/*"
  function = "api"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200`,note:`No extra packages needed. Uses Netlify Edge Functions (Deno runtime). vite build auto-generates netlify/edge-functions/api.ts.`},cloudflare:{config:`// vite.config.ts
export default {
  plugins: [react(), biniroute({ platform: 'cloudflare' })]
}`,build:`# wrangler.toml
name = "my-app"
main = "worker.ts"
compatibility_date = "2024-01-01"

[assets]
directory = "./dist"`,note:`Install wrangler: npm install wrangler. Generates worker.ts on build. Deploy with: vite build && npx wrangler deploy`},node:{config:`// vite.config.ts
export default {
  plugins: [react(), biniroute({ platform: 'node' })]
}`,build:`# Start command
vite build && npx tsx server/index.ts

# With pm2 on a VPS
npm install -g pm2
pm2 start "npm start" --name my-app
pm2 save && pm2 startup`,note:`Install @hono/node-server. Generates server/index.ts on build. Railway and Render inject PORT automatically.`},deno:{config:`// vite.config.ts
export default {
  plugins: [react(), biniroute({ platform: 'deno' })]
}`,build:`# Start command
vite build && deno run --allow-net --allow-read server/index.ts`,note:`Generates server/index.ts on build. No extra packages needed for Deno runtime.`},bun:{config:`// vite.config.ts
export default {
  plugins: [react(), biniroute({ platform: 'bun' })]
}`,build:`# Start command
vite build && bun run server/index.ts`,note:`Generates server/index.ts on build. Bun natively handles the server file.`},aws:{config:`// vite.config.ts
export default {
  plugins: [react(), biniroute({ platform: 'aws' })]
}`,build:`# Install Lambda adapter
npm install @hono/aws-lambda

# Deploy with your preferred tooling
# SST, SAM, Serverless Framework, etc.`,note:`Generates handler.ts on build. Deploy with SST, SAM, or Serverless Framework.`}};function u(){return(0,i.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,className:`text-cyan-400 shrink-0`,children:(0,i.jsx)(`path`,{d:`M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})}function d(){return(0,i.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,className:`text-amber-400 shrink-0`,children:(0,i.jsx)(`path`,{d:`M12 9v4m0 4h.01M12 3l9 17H3L12 3z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function f(){return(0,i.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,className:`text-blue-400 shrink-0`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`2`}),(0,i.jsx)(`path`,{d:`M12 16v-4M12 8h.01`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}function p({copied:e}){return e?(0,i.jsx)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,children:(0,i.jsx)(`path`,{d:`M5 13l4 4L19 7`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`})}):(0,i.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,i.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.8`}),(0,i.jsx)(`path`,{d:`M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1`,stroke:`currentColor`,strokeWidth:`1.8`})]})}function m(){return(0,i.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,children:(0,i.jsx)(`path`,{d:`M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function h(){return(0,i.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,i.jsx)(`path`,{d:`M19 12H5M12 19l-7-7 7-7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function g(){return(0,i.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,i.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function _(){return(0,i.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,i.jsx)(`path`,{d:`M3 12h18M3 6h18M3 18h18`,strokeLinecap:`round`})})}function v(){return(0,i.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,i.jsx)(`path`,{d:`M6 18L18 6M6 6l12 12`,strokeLinecap:`round`})})}function y({code:e,label:t}){let[n,r]=(0,a.useState)(!1);return(0,i.jsxs)(`div`,{className:`rounded-xl border border-blue-400/8 bg-blue-500/6 mb-6 overflow-hidden`,children:[t&&(0,i.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2 border-b border-blue-400/8`,children:[(0,i.jsx)(`span`,{className:`text-xs text-cyan-400/45 tracking-widest`,children:t}),(0,i.jsxs)(`button`,{onClick:()=>{navigator.clipboard.writeText(e.trim()),r(!0),setTimeout(()=>r(!1),2e3)},className:`text-xs transition-colors flex items-center gap-1 ${n?`text-cyan-400`:`text-sky-400/40 hover:text-sky-300`}`,"aria-label":n?`Copied!`:`Copy code`,children:[(0,i.jsx)(p,{copied:n}),n?`COPIED`:`COPY`]})]}),(0,i.jsx)(`pre`,{className:`m-0 p-4 bg-black/20 overflow-x-auto hide-scrollbar`,children:(0,i.jsx)(`code`,{className:`text-xs sm:text-sm text-sky-200 font-mono leading-relaxed whitespace-pre-wrap block`,children:e})})]})}function b({type:e,children:t}){let n={tip:{border:`border-l-cyan-400/60`,icon:(0,i.jsx)(u,{}),label:`TIP`,color:`text-cyan-400`},warning:{border:`border-l-amber-400/60`,icon:(0,i.jsx)(d,{}),label:`NOTE`,color:`text-amber-400`},info:{border:`border-l-blue-400/60`,icon:(0,i.jsx)(f,{}),label:`INFO`,color:`text-blue-400`}}[e];return(0,i.jsxs)(`div`,{className:`border-l-3 ${n.border} bg-blue-500/5 rounded-r-xl px-4 sm:px-5 py-4 mb-6 flex gap-3`,children:[(0,i.jsx)(`div`,{className:`mt-0.5 shrink-0`,children:n.icon}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`text-xs font-semibold ${n.color} tracking-widest block mb-1`,children:n.label}),(0,i.jsx)(`div`,{className:`text-xs sm:text-sm text-sky-300/60 leading-relaxed`,children:t})]})]})}function x({children:e}){return(0,i.jsx)(`h2`,{className:`text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-sky-50 mb-4 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-blue-400/8`,children:e})}function S({children:e}){return(0,i.jsx)(`h3`,{className:`text-base sm:text-lg font-semibold text-sky-100 mb-3 mt-6 sm:mt-8`,children:e})}function C({children:e}){return(0,i.jsx)(`p`,{className:`text-xs sm:text-sm text-sky-300/60 leading-relaxed mb-4 font-light`,children:e})}function w({children:e}){return(0,i.jsx)(`code`,{className:`font-mono text-xs sm:text-sm bg-blue-500/10 border border-blue-400/15 rounded px-1.5 py-0.5 text-cyan-400`,children:e})}function T({headers:e,rows:t}){return(0,i.jsx)(`div`,{className:`overflow-x-auto mb-6 rounded-xl border border-blue-400/8`,children:(0,i.jsxs)(`table`,{className:`w-full border-collapse text-xs sm:text-sm`,children:[(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{className:`border-b border-blue-400/8 bg-blue-500/5`,children:e.map(e=>(0,i.jsx)(`th`,{className:`text-left px-3 sm:px-4 py-2.5 sm:py-3 text-cyan-400/50 font-medium text-xs tracking-widest`,children:e},e))})}),(0,i.jsx)(`tbody`,{children:t.map((e,t)=>(0,i.jsx)(`tr`,{className:`border-b border-blue-400/5 even:bg-blue-500/2.5`,children:e.map((e,t)=>(0,i.jsx)(`td`,{className:`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-sky-300/60`,children:e},t))},t))})]})})}function E(){return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{className:`mb-6 sm:mb-8`,children:[(0,i.jsx)(`span`,{className:`text-xs tracking-widest text-cyan-400/45 uppercase block mb-2`,children:`Introduction`}),(0,i.jsx)(`h1`,{className:`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-sky-50 mb-4`,children:`Quick Start`})]}),(0,i.jsx)(C,{children:`Bini.js is a React + Vite 8 framework with file-based routing, Hono-powered API routes, and a zero-dependency production server. Get a full project running in under a minute.`}),(0,i.jsx)(x,{children:`Prerequisites`}),(0,i.jsx)(C,{children:`You need Node.js 20.19.0 or higher and npm, pnpm, yarn, or bun installed.`}),(0,i.jsx)(T,{headers:[`Runtime`,`Minimum version`],rows:[[`Node.js`,`≥ 20.19.0`],[`npm`,`≥ 9.0.0`],[`pnpm`,`≥ 8.0.0`],[`yarn`,`≥ 3.6.0`],[`bun`,`≥ 1.0.0`]]}),(0,i.jsx)(x,{children:`Create a new project`}),(0,i.jsx)(C,{children:`Run the scaffold command and follow the prompts:`}),(0,i.jsx)(y,{label:`terminal`,code:`npx create-bini-app@latest my-app`}),(0,i.jsx)(C,{children:`You'll be asked to choose TypeScript or JavaScript, and Tailwind CSS v4 or CSS Modules. Both combinations are fully supported.`}),(0,i.jsx)(y,{label:`terminal — skip prompts`,code:`# TypeScript + Tailwind v4
npx create-bini-app@latest my-app --typescript --tailwind

# JavaScript + CSS Modules
npx create-bini-app@latest my-app --javascript --css-modules

# Overwrite an existing directory
npx create-bini-app@latest my-app --force`}),(0,i.jsx)(b,{type:`info`,children:`In non-interactive mode (CI/CD), the CLI skips all prompts and defaults to TypeScript + Tailwind. Pass flags to override.`}),(0,i.jsx)(x,{children:`Start the dev server`}),(0,i.jsx)(y,{label:`terminal`,code:`cd my-app
npm install
npm run dev
# Opens http://localhost:3000`}),(0,i.jsx)(b,{type:`tip`,children:`The dev server opens automatically. bini-overlay shows an animated ß badge in the bottom-left corner — it disappears in production builds.`}),(0,i.jsx)(x,{children:`Project structure`}),(0,i.jsx)(y,{label:`my-app/`,code:`src/
  main.tsx            ← React entry point
  App.tsx             ← auto-generated by bini-router — do not edit
  app/
    globals.css
    layout.tsx        ← root layout + global metadata
    page.tsx          ← / (home page)
    loading.tsx       ← custom loading screen (optional)
    not-found.tsx     ← custom 404 (optional)
    api/
      hello.ts        ← /api/hello
public/               ← favicons, og-image, site.webmanifest
vite.config.ts
.oxlintrc.json        ← Oxlint config (auto-generated)
.oxfmt.json           ← Oxfmt config (auto-generated)
package.json`}),(0,i.jsx)(x,{children:`Scripts`}),(0,i.jsx)(T,{headers:[`Command`,`Description`],rows:[[`npm run dev`,`Start Vite dev server with HMR (opens browser automatically)`],[`npm run build`,`Bundle for production → dist/ + generate platform entry`],[`npm run export`,`Static SPA export — pre-renders routes, generates 404.html`],[`npm start`,`Serve the production build via bini-server`],[`npm run preview`,`Preview the production build via Vite`],[`npm run type-check`,`TypeScript type check — tsc --noEmit (TS only)`],[`npm run lint`,`Lint with Oxlint (react + react-hooks plugins)`],[`npm run format`,`Format with Oxfmt`],[`npm run check`,`Lint + format check combined — ideal for CI`]]}),(0,i.jsx)(x,{children:`Ecosystem packages`}),(0,i.jsx)(T,{headers:[`Package`,`Version`,`Role`],rows:[[`bini-router`,`1.0.27`,`File-based routing, API routes, multi-platform deploy`],[`bini-server`,`1.0.2`,`Zero-dependency production server`],[`bini-overlay`,`1.0.5`,`Dev animated badge + Shiki-highlighted error overlay`],[`bini-env`,`1.0.8`,`Env variable system + startup banner`],[`bini-export`,`1.0.1`,`Static SPA export for GitHub Pages, Netlify, S3`],[`create-bini-app`,`9.3.4`,`CLI scaffolder`]]})]})}function D(){return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{className:`mb-6 sm:mb-8`,children:[(0,i.jsx)(`span`,{className:`text-xs tracking-widest text-cyan-400/45 uppercase block mb-2`,children:`Core Concepts`}),(0,i.jsx)(`h1`,{className:`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-sky-50 mb-4`,children:`File-based Routing`})]}),(0,i.jsxs)(C,{children:[`bini-router maps `,(0,i.jsx)(w,{children:`page.tsx`}),` files to URLs automatically — no route config needed. Every route is code-split and lazy-loaded.`]}),(0,i.jsx)(x,{children:`How it works`}),(0,i.jsxs)(C,{children:[`Drop a `,(0,i.jsx)(w,{children:`page.tsx`}),` anywhere inside `,(0,i.jsx)(w,{children:`src/app/`}),` and it becomes a route. bini-router watches the directory during dev and regenerates `,(0,i.jsx)(w,{children:`App.tsx`}),` on every change — no restarts needed.`]}),(0,i.jsx)(y,{label:`src/app/ → URL mapping`,code:`src/app/
  page.tsx              →  /
  about.tsx             →  /about
  dashboard/
    page.tsx            →  /dashboard
    [id]/
      page.tsx          →  /dashboard/:id
  blog/
    [slug]/
      page.tsx          →  /blog/:slug
  not-found.tsx         →  custom 404 (optional)
  loading.tsx           →  custom loading screen (optional)`}),(0,i.jsx)(x,{children:`Basic page`}),(0,i.jsx)(y,{label:`src/app/page.tsx`,code:`export default function Home() {
  return <h1>Hello from Bini.js</h1>
}`}),(0,i.jsx)(x,{children:`Auto-imports`}),(0,i.jsxs)(C,{children:[`bini-router automatically injects imports into every page and layout in `,(0,i.jsx)(w,{children:`src/app/`}),`. You never need to write these import statements:`]}),(0,i.jsx)(T,{headers:[`Package`,`Auto-imported symbols`],rows:[[`react`,`useState, useEffect, useRef, useMemo, useCallback, useContext, createContext, useReducer, useId, useTransition, useDeferredValue`],[`react-router-dom`,`Link, NavLink, useNavigate, useParams, useLocation, useSearchParams, Outlet`],[`bini-env`,`getEnv, requireEnv`]]}),(0,i.jsx)(b,{type:`info`,children:`If you already import from one of these packages manually, bini-router detects it and skips injection — no duplicates ever.`}),(0,i.jsx)(x,{children:`Dynamic routes`}),(0,i.jsxs)(C,{children:[`Wrap a folder name in square brackets to create a dynamic segment. Access the param with `,(0,i.jsx)(w,{children:`useParams()`}),` — it's auto-imported.`]}),(0,i.jsx)(y,{label:`src/app/blog/[slug]/page.tsx`,code:`// useParams is auto-imported — no import statement needed
export default function Post() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`}),(0,i.jsx)(x,{children:`Custom loading screen`}),(0,i.jsxs)(C,{children:[`Create `,(0,i.jsx)(w,{children:`src/app/loading.tsx`}),` with a default export to replace the built-in spinner. Used as the Suspense fallback for every lazy-loaded route.`]}),(0,i.jsx)(y,{label:`src/app/loading.tsx`,code:`export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500" />
    </div>
  )
}`}),(0,i.jsx)(x,{children:`Custom 404`}),(0,i.jsxs)(C,{children:[`Create `,(0,i.jsx)(w,{children:`src/app/not-found.tsx`}),` with a default export. If missing, bini-router renders a built-in 404 page.`]}),(0,i.jsx)(y,{label:`src/app/not-found.tsx`,code:`// Link is auto-imported
export default function NotFound() {
  return (
    <div>
      <h1>404 — Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  )
}`}),(0,i.jsx)(x,{children:`HMR & file watcher`}),(0,i.jsxs)(C,{children:[`bini-router watches `,(0,i.jsx)(w,{children:`src/app/`}),` during development. New files, new folders, renames, deletions — all picked up instantly with smart debounce. You never need to restart the dev server when adding routes.`]}),(0,i.jsxs)(b,{type:`info`,children:[`Dynamic routes like `,(0,i.jsx)(w,{children:`/blog/:slug`}),` are handled client-side by React Router — they are not pre-rendered by bini-export unless you add them manually.`]})]})}function O(){return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{className:`mb-6 sm:mb-8`,children:[(0,i.jsx)(`span`,{className:`text-xs tracking-widest text-cyan-400/45 uppercase block mb-2`,children:`Core Concepts`}),(0,i.jsx)(`h1`,{className:`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-sky-50 mb-4`,children:`API Routes`})]}),(0,i.jsxs)(C,{children:[`Create files in `,(0,i.jsx)(w,{children:`src/app/api/`}),`. Export a Hono app or a plain function handler — bini-router serves it in dev and wraps it for production automatically. The same file runs in dev, `,(0,i.jsx)(w,{children:`bini-server`}),`, and on Netlify Edge.`]}),(0,i.jsx)(x,{children:`Plain function handler`}),(0,i.jsxs)(C,{children:[`The simplest form — just export a function that takes a `,(0,i.jsx)(w,{children:`Request`}),` and returns a `,(0,i.jsx)(w,{children:`Response`}),`.`]}),(0,i.jsx)(y,{label:`src/app/api/hello.ts`,code:`export default function handler(req: Request) {
  return Response.json({ message: 'hello', method: req.method })
}`}),(0,i.jsx)(x,{children:`Hono app`}),(0,i.jsxs)(C,{children:[`For multiple methods or middleware, export a Hono app with `,(0,i.jsx)(w,{children:`.basePath('/api')`}),`.`]}),(0,i.jsx)(y,{label:`src/app/api/users.ts`,code:`import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.get('/users', (c) =>
  c.json({ users: ['alice', 'bob'] })
)

app.post('/users', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, 201)
})

export default app`}),(0,i.jsx)(x,{children:`Dynamic API routes`}),(0,i.jsx)(y,{label:`src/app/api/posts/[id].ts`,code:`import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.get('/posts/:id', (c) =>
  c.json({ id: c.req.param('id') })
)

export default app`}),(0,i.jsx)(x,{children:`Environment variables in API routes`}),(0,i.jsxs)(C,{children:[(0,i.jsx)(w,{children:`getEnv`}),` and `,(0,i.jsx)(w,{children:`requireEnv`}),` are auto-imported — no dotenv setup or import statement needed.`]}),(0,i.jsx)(y,{label:`src/app/api/email.ts`,code:`import { Hono } from 'hono'
import nodemailer from 'nodemailer'

const app = new Hono().basePath('/api')

// requireEnv is auto-imported — throws at startup if missing
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: requireEnv('SMTP_USER'),
    pass: requireEnv('SMTP_PASS'),
  },
})

app.post('/email', async (c) => {
  const { to, subject, html } = await c.req.json()
  await transporter.sendMail({ from: requireEnv('FROM_EMAIL'), to, subject, html })
  return c.json({ ok: true })
})

export default app`}),(0,i.jsx)(x,{children:`With middleware`}),(0,i.jsx)(y,{label:`src/app/api/auth.ts`,code:`import { Hono } from 'hono'
import { bearerAuth } from 'hono/bearer-auth'

const app = new Hono().basePath('/api')

app.use('/auth/*', bearerAuth({ token: requireEnv('SECRET') }))
app.get('/auth/me', (c) => c.json({ user: 'alice' }))

export default app`}),(0,i.jsx)(x,{children:`File → URL mapping`}),(0,i.jsx)(y,{label:`src/app/api/ → URL mapping`,code:`src/app/api/
  hello.ts          →  /api/hello
  users.ts          →  /api/users
  posts/
    index.ts        →  /api/posts
    [id].ts         →  /api/posts/:id
  [...catch].ts     →  /api/* catch-all`}),(0,i.jsx)(x,{children:`How API routing works`}),(0,i.jsxs)(C,{children:[`In `,(0,i.jsx)(`strong`,{children:`dev`}),`, bini-router registers a Vite middleware that intercepts `,(0,i.jsx)(w,{children:`/api/*`}),` requests, scans `,(0,i.jsx)(w,{children:`src/app/api/`}),`, matches the route, and calls the handler — with HMR on every save.`]}),(0,i.jsxs)(C,{children:[`On `,(0,i.jsx)(`strong`,{children:`build`}),`, bini-router auto-generates the platform entry file. Hono apps are merged via `,(0,i.jsx)(w,{children:`app.route()`}),` into a single shared instance. Plain function handlers are wrapped with `,(0,i.jsx)(w,{children:`app.all()`}),`.`]}),(0,i.jsxs)(b,{type:`tip`,children:[`Install Hono as a dependency: `,(0,i.jsx)(w,{children:`npm install hono`})]})]})}function k(){return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{className:`mb-6 sm:mb-8`,children:[(0,i.jsx)(`span`,{className:`text-xs tracking-widest text-cyan-400/45 uppercase block mb-2`,children:`Core Concepts`}),(0,i.jsx)(`h1`,{className:`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-sky-50 mb-4`,children:`Layouts & Metadata`})]}),(0,i.jsxs)(C,{children:[`Layouts wrap all pages in their directory and all subdirectories. Metadata is exported from any layout and injected into `,(0,i.jsx)(w,{children:`index.html`}),` at build time — it never ships to the client.`]}),(0,i.jsx)(x,{children:`Root layout`}),(0,i.jsxs)(C,{children:[`The root layout at `,(0,i.jsx)(w,{children:`src/app/layout.tsx`}),` wraps the entire app using `,(0,i.jsx)(w,{children:`{children}`}),`. It sits outside the router.`]}),(0,i.jsx)(y,{label:`src/app/layout.tsx`,code:`import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}`}),(0,i.jsx)(x,{children:`Nested layout`}),(0,i.jsxs)(C,{children:[`Nested layouts use `,(0,i.jsx)(w,{children:`<Outlet />`}),` from react-router-dom — they are React Router route wrappers.`]}),(0,i.jsx)(y,{label:`src/app/dashboard/layout.tsx`,code:`// Outlet is auto-imported
export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main><Outlet /></main>
    </div>
  )
}`}),(0,i.jsxs)(b,{type:`warning`,children:[`Root layout uses `,(0,i.jsx)(w,{children:`{children}`}),`. Nested layouts use `,(0,i.jsx)(w,{children:`<Outlet />`}),`. Mixing these up is the most common mistake.`]}),(0,i.jsx)(x,{children:`Per-route titles`}),(0,i.jsxs)(C,{children:[`Export `,(0,i.jsx)(w,{children:`metadata.title`}),` from any nested `,(0,i.jsx)(w,{children:`layout.tsx`}),`. bini-router injects a `,(0,i.jsx)(w,{children:`TitleSetter`}),` that updates `,(0,i.jsx)(w,{children:`document.title`}),` when the route becomes active.`]}),(0,i.jsxs)(b,{type:`info`,children:[`Root layout metadata is injected into `,(0,i.jsx)(w,{children:`index.html`}),` at build time. Nested layout titles are updated at runtime via `,(0,i.jsx)(w,{children:`document.title`}),`.`]})]})}function A(){let[e,t]=(0,a.useState)(`netlify`),n=l[e];return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{className:`mb-6 sm:mb-8`,children:[(0,i.jsx)(`span`,{className:`text-xs tracking-widest text-cyan-400/45 uppercase block mb-2`,children:`Deployment`}),(0,i.jsx)(`h1`,{className:`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-sky-50 mb-4`,children:`Deploy Platforms`})]}),(0,i.jsxs)(C,{children:[`Set `,(0,i.jsx)(w,{children:`platform`}),` in `,(0,i.jsx)(w,{children:`vite.config.ts`}),` once. bini-router scans `,(0,i.jsx)(w,{children:`src/app/api/`}),` on every `,(0,i.jsx)(w,{children:`vite build`}),` and generates the correct entry file automatically. You only ever write code in `,(0,i.jsx)(w,{children:`src/app/api/`}),`.`]}),(0,i.jsx)(x,{children:`Choose your platform`}),(0,i.jsx)(`div`,{className:`flex gap-2 flex-wrap mb-6`,children:c.map(n=>(0,i.jsx)(`button`,{onClick:()=>t(n),className:`px-3 sm:px-4 py-1.5 rounded-full text-xs tracking-wide cursor-pointer transition-all duration-150 border ${e===n?`border-cyan-400/60 bg-cyan-400/10 text-cyan-400 font-medium`:`border-blue-400/18 bg-blue-500/5 text-sky-300/55 hover:border-cyan-400/30`}`,children:n},n))}),(0,i.jsx)(b,{type:`info`,children:n.note}),(0,i.jsx)(S,{children:`vite.config.ts`}),(0,i.jsx)(y,{label:`vite.config.ts`,code:n.config}),(0,i.jsx)(S,{children:`Platform config`}),(0,i.jsx)(y,{label:e===`netlify`?`netlify.toml`:e===`cloudflare`?`wrangler.toml`:`terminal`,code:n.build}),(0,i.jsx)(x,{children:`Generated output files`}),(0,i.jsx)(T,{headers:[`Platform`,`Generated file`],rows:[[`netlify`,`netlify/edge-functions/api.ts`],[`cloudflare`,`worker.ts / worker.js`],[`node`,`server/index.ts / server/index.js`],[`deno`,`server/index.ts / server/index.js`],[`bun`,`server/index.ts / server/index.js`],[`aws`,`handler.ts / handler.js`]]}),(0,i.jsx)(x,{children:`Production server (Node.js)`}),(0,i.jsxs)(C,{children:[`For Node.js deployments, `,(0,i.jsx)(w,{children:`bini-server`}),` is the recommended production server — zero dependencies, pure Node.js `,(0,i.jsx)(w,{children:`http`}),`.`]}),(0,i.jsx)(T,{headers:[`Feature`,`bini-server`],rows:[[`ETag / 304 support`,`✅`],[`Body timeout`,`✅ 30s`],[`Body size limit`,`✅ 10MB`],[`Handler timeout`,`✅ 30s`],[`Graceful shutdown`,`✅`],[`Port auto-increment`,`✅`],[`Zero dependencies`,`✅`]]}),(0,i.jsxs)(b,{type:`warning`,children:[`Add the generated platform entry file to `,(0,i.jsx)(w,{children:`.gitignore`}),` — it's auto-generated on every build and shouldn't be committed. The scaffolded `,(0,i.jsx)(w,{children:`.gitignore`}),` already covers this.`]})]})}var j={"quick-start":E,"file-routing":D,"api-routes":O,"layouts-metadata":k,"deploy-platforms":A};function M(){let[e,t]=(0,a.useState)(`quick-start`),[n,c]=(0,a.useState)(!1),l=j[e],u=e=>{t(e),c(!1),window.scrollTo({top:0,behavior:`smooth`})};return(0,i.jsxs)(`div`,{className:`min-h-screen bg-[#040a16] text-sky-100 font-sans`,children:[(0,i.jsx)(r,{}),(0,i.jsx)(`div`,{className:`lg:hidden sticky top-15 z-40 bg-[#040a16] border-b border-blue-400/8 px-4 py-3`,children:(0,i.jsxs)(`button`,{onClick:()=>c(!n),className:`flex items-center gap-2 text-sm text-cyan-400/70 hover:text-cyan-400 transition-colors`,"aria-expanded":n,"aria-label":n?`Close menu`:`Open menu`,children:[n?(0,i.jsx)(v,{}):(0,i.jsx)(_,{}),(0,i.jsx)(`span`,{children:n?`Close`:`Menu`})]})}),(0,i.jsxs)(`div`,{className:`flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 gap-8 relative`,children:[(0,i.jsxs)(`aside`,{className:`
            ${n?`block`:`hidden`} 
            lg:block 
            w-full lg:w-64 
            shrink-0 
            pt-4 lg:pt-10 
            lg:sticky lg:top-15 
            lg:h-[calc(100vh-60px)] 
            overflow-y-auto 
            bg-[#040a16] 
            lg:bg-transparent
            border-b lg:border-b-0 border-blue-400/8
            pb-4 lg:pb-0
            mb-4 lg:mb-0
          `,children:[s.map(t=>(0,i.jsxs)(`div`,{className:`mb-6`,children:[(0,i.jsx)(`p`,{className:`text-xs font-semibold tracking-widest text-cyan-400/45 uppercase mb-2 px-3`,children:t}),o.filter(e=>e.group===t).map(t=>(0,i.jsx)(`button`,{onClick:()=>u(t.id),className:`w-full text-left px-3 py-2.5 lg:py-2 rounded-md text-sm transition-all duration-200 ${e===t.id?`bg-cyan-400/10 text-cyan-400 font-medium`:`text-sky-300/50 hover:text-sky-200 hover:bg-blue-500/5`}`,children:t.label},t.id))]},t)),(0,i.jsx)(`div`,{className:`h-px bg-blue-500/10 mx-3 my-5`}),[{label:`npm`,href:`https://www.npmjs.com/package/create-bini-app`},{label:`GitHub`,href:`https://github.com/Binidu01/bini-cli`},{label:`Examples`,href:`https://github.com/Binidu01/bini-examples`}].map(e=>(0,i.jsxs)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-2 px-3 py-2.5 lg:py-2 text-sm text-sky-300/50 hover:text-sky-200 hover:bg-blue-500/5 rounded-md transition-all duration-200 no-underline`,children:[(0,i.jsx)(m,{}),e.label]},e.label))]}),(0,i.jsxs)(`main`,{className:`flex-1 min-w-0 pt-4 lg:pt-10 pb-20 lg:pl-8 lg:border-l border-blue-400/8`,children:[(0,i.jsx)(l,{}),(0,i.jsx)(`div`,{className:`flex flex-col sm:flex-row justify-between mt-12 sm:mt-16 pt-8 border-t border-blue-400/8 gap-4`,children:(()=>{let t=o.findIndex(t=>t.id===e),n=o[t-1],r=o[t+1];return(0,i.jsxs)(i.Fragment,{children:[n?(0,i.jsxs)(`button`,{onClick:()=>u(n.id),className:`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-blue-400/8 bg-blue-500/5 cursor-pointer transition-all duration-150 text-left hover:border-cyan-400/30 hover:bg-cyan-400/5 group w-full sm:w-auto`,children:[(0,i.jsx)(h,{}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`text-xs text-cyan-400/40 tracking-widest block`,children:`PREVIOUS`}),(0,i.jsx)(`span`,{className:`text-sm text-sky-200`,children:n.label})]})]}):(0,i.jsx)(`div`,{className:`hidden sm:block`}),r?(0,i.jsxs)(`button`,{onClick:()=>u(r.id),className:`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-blue-400/8 bg-blue-500/5 cursor-pointer transition-all duration-150 text-right hover:border-cyan-400/30 hover:bg-cyan-400/5 group w-full sm:w-auto justify-end`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`text-xs text-cyan-400/40 tracking-widest block`,children:`NEXT`}),(0,i.jsx)(`span`,{className:`text-sm text-sky-200`,children:r.label})]}),(0,i.jsx)(g,{})]}):(0,i.jsx)(`div`,{className:`hidden sm:block`})]})})()})]})]}),(0,i.jsx)(`style`,{children:`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `})]})}export{M as default};