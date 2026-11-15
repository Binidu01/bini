import{a as e,n as t}from"./index-DphG0dNL.js";import{_ as n,c as r,g as i,h as a,m as o,n as s,o as c,r as l,u,v as d}from"./DocBlocks-L2h6_38O.js";import{i as f,l as p}from"./DocVisuals-BICpfG8q.js";var m=e(),h=[{id:`quick-start`,label:`Quick Start`},{id:`usage-pattern`,label:`Usage Pattern`},{id:`environment-prefixes`,label:`Environment Prefixes`},{id:`api-reference`,label:`API Reference`},{id:`security`,label:`Security Best Practices`},{id:`troubleshooting`,label:`Troubleshooting`},{id:`complete-example`,label:`Complete Example`}];function g(){let e=d(),r=e===`js`?`js`:`ts`,h=e===`js`?`jsx`:`tsx`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`mb-12`,children:[(0,m.jsxs)(o,{className:`mb-4`,children:[`Bini.js uses standard environment variable handling across the client and server. On the client, variables are accessed through `,(0,m.jsx)(s,{children:`import.meta.env`}),`. In API routes, they are read from the Hono request context via `,(0,m.jsx)(s,{children:`c.env`}),`, ensuring they resolve correctly from the host platform (Node.js, Bun, Deno, Cloudflare, etc.) with no platform-specific code.`]}),(0,m.jsxs)(l,{children:[(0,m.jsx)(`strong`,{children:`Zero config:`}),` During development, `,(0,m.jsx)(s,{children:`.env`}),` files are loaded automatically. Secrets are available in your API routes via `,(0,m.jsx)(s,{children:`c.env`}),` without any extra setup.`]})]}),(0,m.jsxs)(a,{id:`quick-start`,title:`Quick Start`,children:[(0,m.jsx)(o,{className:`mb-4`,children:`Bini.js is configured out of the box. Just start using the environment variables in your routes.`}),(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`vite.config.${r}`},{n:`src`},{n:`app`,d:1},{n:`api`,d:2},{n:`hello.${r}`,d:3,fn:!0,dot:!0,url:`/api/hello`}]}),(0,m.jsx)(c,{filename:`vite.config.${r}`,tsCode:`// vite.config.ts - already configured on scaffold
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // ...your plugins
  ],
})`,jsCode:`// vite.config.js - already configured on scaffold
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // ...your plugins
  ],
})`}),(0,m.jsx)(u,{className:`mt-8 mb-3`,children:`Read env vars in your Hono handlers`}),(0,m.jsx)(c,{filename:`src/app/api/hello.${r}`,tsCode:`// src/app/api/hello.ts
import { Hono } from 'hono'

const app = new Hono()

app.post('/hello', async (c) => {
  const apiKey = c.env.MY_API_KEY
  const appName = c.env.APP_NAME ?? 'World'

  if (!apiKey) {
    return c.json({ error: 'Missing MY_API_KEY' }, 500)
  }

  return c.json({ message: \`Hello, \${appName}!\` })
})

export default app`,jsCode:`// src/app/api/hello.js
import { Hono } from 'hono'

const app = new Hono()

app.post('/hello', async (c) => {
  const apiKey = c.env.MY_API_KEY
  const appName = c.env.APP_NAME ?? 'World'

  if (!apiKey) {
    return c.json({ error: 'Missing MY_API_KEY' }, 500)
  }

  return c.json({ message: \`Hello, \${appName}!\` })
})

export default app`}),(0,m.jsxs)(l,{children:[`Your secret just needs to exist in `,(0,m.jsx)(s,{children:`.env`}),` with no prefix. In production, set it in your hosting platform's dashboard.`]})]}),(0,m.jsxs)(a,{id:`usage-pattern`,title:`Usage Pattern`,children:[(0,m.jsxs)(o,{className:`mb-4`,children:[`Access environment variables directly from the Hono context `,(0,m.jsx)(s,{children:`c.env`}),`. This ensures they are request-scoped and correctly resolved for your runtime.`]}),(0,m.jsx)(c,{filename:`src/app/api/example.${r}`,tsCode:`// src/app/api/example.ts
import { Hono } from 'hono'

const app = new Hono()

app.post('/example', async (c) => {
  // Required vars: check and throw immediately if missing
  const dbUrl = c.env.DATABASE_URL
  const apiKey = c.env.STRIPE_SECRET_KEY
  if (!dbUrl || !apiKey) {
    return c.json({ error: 'Missing required configuration' }, 500)
  }

  // Optional vars: fall back to sensible defaults
  const model = c.env.AI_MODEL ?? 'gpt-4o'
  const region = c.env.AWS_REGION ?? 'us-east-1'
  const maxRetries = parseInt(c.env.MAX_RETRIES ?? '3')
  const debug = c.env.DEBUG_MODE === 'true'

  return c.json({ model, region, maxRetries, debug })
})

export default app`,jsCode:`// src/app/api/example.js
import { Hono } from 'hono'

const app = new Hono()

app.post('/example', async (c) => {
  // Required vars: check and throw immediately if missing
  const dbUrl = c.env.DATABASE_URL
  const apiKey = c.env.STRIPE_SECRET_KEY
  if (!dbUrl || !apiKey) {
    return c.json({ error: 'Missing required configuration' }, 500)
  }

  // Optional vars: fall back to sensible defaults
  const model = c.env.AI_MODEL ?? 'gpt-4o'
  const region = c.env.AWS_REGION ?? 'us-east-1'
  const maxRetries = parseInt(c.env.MAX_RETRIES ?? '3')
  const debug = c.env.DEBUG_MODE === 'true'

  return c.json({ model, region, maxRetries, debug })
})

export default app`}),(0,m.jsx)(o,{className:`mt-4 mb-4`,children:`The pattern in three steps:`}),(0,m.jsx)(c,{filename:`src/app/api/pattern.${r}`,tsCode:`// src/app/api/pattern.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/pattern', (c) => {
  const secret = c.env.KEY        // 1. required: check for missing
  const mode = c.env.MODE ?? 'default' // 2. optional: ?? gives a default

  if (!secret) {
    return c.json({ error: 'Missing KEY' }, 500)
  }

  return c.json({ ok: true, mode })
})

export default app`,jsCode:`// src/app/api/pattern.js
import { Hono } from 'hono'

const app = new Hono()

app.get('/pattern', (c) => {
  const secret = c.env.KEY        // 1. required: check for missing
  const mode = c.env.MODE ?? 'default' // 2. optional: ?? gives a default

  if (!secret) {
    return c.json({ error: 'Missing KEY' }, 500)
  }

  return c.json({ ok: true, mode })
})

export default app`}),(0,m.jsxs)(n,{className:`mt-4 space-y-1`,children:[(0,m.jsxs)(`li`,{children:[`Check `,(0,m.jsx)(s,{children:`c.env.KEY`}),` for vars the handler cannot run without.`]}),(0,m.jsxs)(`li`,{children:[`Use `,(0,m.jsx)(s,{children:`c.env.KEY ?? 'default'`}),` for optional vars with sensible defaults.`]}),(0,m.jsxs)(`li`,{children:[`An empty value (`,(0,m.jsx)(s,{children:`KEY=`}),`) is returned as `,(0,m.jsx)(s,{children:`''`}),`, so `,(0,m.jsx)(s,{children:`??`}),` does not fall back. Check for it explicitly if you rely on a fallback.`]})]})]}),(0,m.jsxs)(a,{id:`environment-prefixes`,title:`Environment Prefixes`,children:[(0,m.jsxs)(o,{className:`mb-4`,children:[`Vite loads `,(0,m.jsx)(s,{children:`.env`}),` files from your project root. The prefix of each variable decides where it ends up.`]}),(0,m.jsx)(f,{width:260,rows:[{n:`.env`,dot:!0},{n:`.env.local`},{n:`.env.development`},{n:`.env.production`}]}),(0,m.jsx)(u,{children:`BINI_ - Client-side vars`}),(0,m.jsxs)(o,{className:`mb-4`,children:[(0,m.jsx)(s,{children:`BINI_`}),` variables are exposed to `,(0,m.jsx)(s,{children:`import.meta.env`}),`. Use them for public client-side config.`]}),(0,m.jsx)(c,{filename:`.env`,lang:`text`,code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com`}),(0,m.jsx)(c,{filename:`src/app/page.${h}`,code:`export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL

  return <p>API: {apiUrl}</p>
}`}),(0,m.jsx)(u,{className:`mt-8 mb-3`,children:`VITE_ - Public client vars`}),(0,m.jsxs)(o,{className:`mb-4`,children:[(0,m.jsx)(s,{children:`VITE_`}),` is Vite's built-in prefix. Any var starting with `,(0,m.jsx)(s,{children:`VITE_`}),` is bundled into your client-side JavaScript.`]}),(0,m.jsx)(c,{filename:`.env`,lang:`text`,code:`# .env
VITE_ANALYTICS_ID=UA-XXXX`}),(0,m.jsx)(c,{filename:`src/app/page.${h}`,code:`export default function HomePage() {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID

  return <p>Analytics: {analyticsId}</p>
}`}),(0,m.jsx)(u,{className:`mt-8 mb-3`,children:`No prefix - Secrets (server only)`}),(0,m.jsxs)(o,{className:`mb-4`,children:[`Variables without a prefix are NOT exposed to the browser. They are read via`,` `,(0,m.jsx)(s,{children:`c.env`}),` in API routes. During dev and preview they are also mirrored into`,` `,(0,m.jsx)(s,{children:`process.env`}),` automatically.`]}),(0,m.jsx)(c,{filename:`.env`,lang:`text`,code:`# .env
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...`}),(0,m.jsx)(c,{filename:`src/app/api/secrets.${r}`,tsCode:`// src/app/api/secrets.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/secrets', (c) => {
  const dbUrl = c.env.DATABASE_URL

  if (!dbUrl) {
    return c.json({ error: 'Missing DATABASE_URL' }, 500)
  }

  return c.json({ dbConnected: true })
})

export default app`,jsCode:`// src/app/api/secrets.js
import { Hono } from 'hono'

const app = new Hono()

app.get('/secrets', (c) => {
  const dbUrl = c.env.DATABASE_URL

  if (!dbUrl) {
    return c.json({ error: 'Missing DATABASE_URL' }, 500)
  }

  return c.json({ dbConnected: true })
})

export default app`}),(0,m.jsx)(u,{className:`mt-8 mb-3`,children:`Prefix Summary`}),(0,m.jsx)(i,{headers:[`Prefix`,`Exposed to browser`,`Mirrored to process.env (dev/preview)`,`Use for`],rows:[[`BINI_`,`Yes`,`Yes (unless already set)`,`Public client config`],[`VITE_`,`Yes`,`Yes (unless already set)`,`Public client config`],[`No prefix`,`No`,`Yes (unless already set)`,`Secrets - server only`]]}),(0,m.jsxs)(l,{children:[(0,m.jsx)(`strong`,{children:`Critical:`}),` Never put secrets in `,(0,m.jsx)(s,{children:`BINI_*`}),` or `,(0,m.jsx)(s,{children:`VITE_*`}),` variables - both are exposed to the browser. Use un-prefixed variables for secrets and read them via `,(0,m.jsx)(s,{children:`c.env`}),` inside API route handlers only.`]})]}),(0,m.jsxs)(a,{id:`api-reference`,title:`API Reference`,children:[(0,m.jsx)(u,{children:`Accessing variables`}),(0,m.jsxs)(o,{className:`mb-2`,children:[`On the client, use `,(0,m.jsx)(s,{children:`import.meta.env`}),` for public variables. In API routes, use`,` `,(0,m.jsx)(s,{children:`c.env`}),` to read from the runtime bindings.`]}),(0,m.jsx)(i,{headers:[`Environment`,`Access Method`,`Behavior`],rows:[[`Client`,`import.meta.env.KEY`,`Bundled at build time. Only BINI_ and VITE_ prefixes.`],[`API Routes`,`c.env.KEY`,`Runtime bindings. All variables, including secrets.`]]}),(0,m.jsx)(c,{filename:`src/app/api/config.${r}`,tsCode:`// src/app/api/config.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/config', async (c) => {
  const region = c.env.AWS_REGION ?? 'us-east-1'
  const logLevel = c.env.LOG_LEVEL ?? 'info'
  const debug = c.env.DEBUG_MODE === 'true'

  return c.json({ region, logLevel, debug })
})

export default app`,jsCode:`// src/app/api/config.js
import { Hono } from 'hono'

const app = new Hono()

app.get('/config', async (c) => {
  const region = c.env.AWS_REGION ?? 'us-east-1'
  const logLevel = c.env.LOG_LEVEL ?? 'info'
  const debug = c.env.DEBUG_MODE === 'true'

  return c.json({ region, logLevel, debug })
})

export default app`})]}),(0,m.jsxs)(a,{id:`security`,title:`Security Best Practices`,children:[(0,m.jsx)(u,{children:`Rule 1: Never Prefix Secrets`}),(0,m.jsx)(c,{filename:`.env`,lang:`text`,code:`# .env

# BAD - This will be exposed to the browser!
BINI_DATABASE_URL=postgres://...

# GOOD - Not exposed, read via c.env in API routes
DATABASE_URL=postgres://...`}),(0,m.jsx)(u,{className:`mt-8 mb-3`,children:`Rule 2: Use BINI_ or VITE_ for Public Data`}),(0,m.jsx)(c,{filename:`.env`,lang:`text`,code:`# .env

# GOOD - Public data
BINI_API_URL=https://api.example.com
VITE_GA_ID=UA-XXXXX`}),(0,m.jsx)(u,{className:`mt-8 mb-3`,children:`Rule 3: Do not Leave Secret Placeholders Empty`}),(0,m.jsxs)(o,{className:`mb-0`,children:[`An empty value (`,(0,m.jsx)(s,{children:`API_KEY=`}),`) is still treated as configured by the runtime, but you should check for it explicitly in your handler to fail fast:`]})]}),(0,m.jsx)(a,{id:`troubleshooting`,title:`Troubleshooting`,children:(0,m.jsx)(i,{headers:[`Problem`,`Solution`],rows:[[`Env var undefined in production`,`Set variables in your hosting platform env dashboard (Vercel, Netlify, Cloudflare, etc.).`],[`Works in dev, undefined in prod`,`Local dev works because .env files are loaded automatically. Production requires platform-level configuration.`],[`c.env is undefined`,`Ensure you are passing the Hono context c directly to your route handlers.`],[`getEnv returned an empty string instead of my default`,`An empty .env value is returned as '', and ?? only falls back for undefined. Check for it explicitly or remove the empty line.`],[`Cloudflare secret not found`,`Secrets set via wrangler secret put are only available via c.env. Ensure you are passing c to the function.`],[`Types not found`,`Add /// <reference types="vite/client" /> to your tsconfig.json or entry file.`]]})}),(0,m.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`page.${h}`,d:2,url:`/`},{n:`api`,d:2},{n:`config.${r}`,d:3,fn:!0,dot:!0,url:`/api/config`}]}),(0,m.jsx)(c,{filename:`.env`,lang:`text`,code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com
VITE_APP_NAME=My App
DATABASE_URL=postgres://localhost:5432/mydb
JWT_SECRET=your_jwt_secret`}),(0,m.jsx)(c,{filename:`src/app/page.${h}`,code:`// src/app/page.tsx
export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.VITE_APP_NAME
  return <h1>{appName}</h1>
}`}),(0,m.jsx)(c,{filename:`src/app/api/config.${r}`,tsCode:`// src/app/api/config.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/config', (c) => {
  const dbUrl = c.env.DATABASE_URL
  const jwtSecret = c.env.JWT_SECRET
  const debug = c.env.DEBUG_MODE === 'true'

  if (!dbUrl || !jwtSecret) {
    return c.json({ error: 'Missing required configuration' }, 500)
  }

  return c.json({ debug, dbConnected: true })
})

export default app`,jsCode:`// src/app/api/config.js
import { Hono } from 'hono'

const app = new Hono()

app.get('/config', (c) => {
  const dbUrl = c.env.DATABASE_URL
  const jwtSecret = c.env.JWT_SECRET
  const debug = c.env.DEBUG_MODE === 'true'

  if (!dbUrl || !jwtSecret) {
    return c.json({ error: 'Missing required configuration' }, 500)
  }

  return c.json({ debug, dbConnected: true })
})

export default app`})]}),(0,m.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,m.jsxs)(t,{to:`/docs/env-prefixes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Prefixes & Client Exposure`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`What gets bundled and what stays server-side.`})]}),(0,m.jsxs)(t,{to:`/docs/env-api`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Using in API Routes`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Read env vars from Hono handlers.`})]}),(0,m.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes Overview`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Files under app/api/ map to /api/*.`})]}),(0,m.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno.`})]})]})]})}function _(){return(0,m.jsx)(r,{title:`Environment Variables`,description:`Standard environment variable handling for Bini.js - works across Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`,url:`https://bini.js.org/docs/environment-variables`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/environment-variables.tsx`,toc:h,prev:{to:`/docs/api-dynamic`,title:`Dynamic API Routes`},next:{to:`/docs/env-prefixes`,title:`Prefixes & Client Exposure`},children:(0,m.jsx)(g,{})})}export{_ as default};