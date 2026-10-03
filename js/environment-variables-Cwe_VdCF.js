import{y as e}from"./index-X2FbCJzf.js";import{_ as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,n as l,o as u,r as d}from"./DocBlocks-BIKMlDXj.js";import{i as f,l as p}from"./DocVisuals-IeNNYK-c.js";var m=e(),h=[{id:`quick-start`,label:`Quick Start`},{id:`usage-pattern`,label:`Usage Pattern`},{id:`environment-prefixes`,label:`Environment Prefixes`},{id:`platform-support`,label:`Platform Support`},{id:`how-it-works`,label:`How It Works`},{id:`api-reference`,label:`API Reference`},{id:`security`,label:`Security Best Practices`},{id:`performance`,label:`Performance`},{id:`troubleshooting`,label:`Troubleshooting`},{id:`complete-example`,label:`Complete Example`}],g=`  ß Bini.js (dev)
  ->  Environments: .env.local, .env
  ->  Local:   http://localhost:3000/
  ->  Network: http://192.168.1.7:3000/`,_=`[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`,v=()=>(0,m.jsx)(`span`,{className:`text-green-600 dark:text-green-400`,children:`➜`}),y=({children:e})=>(0,m.jsx)(`strong`,{className:`font-bold text-neutral-900 dark:text-white`,children:e}),b=({host:e})=>(0,m.jsxs)(`span`,{className:`text-cyan-700 dark:text-cyan-400`,children:[`http://`,e,`:`,(0,m.jsx)(`strong`,{className:`font-bold`,children:`3000`}),`/`]});function x(){return(0,m.jsxs)(n,{code:g,children:[`  `,(0,m.jsx)(`span`,{className:`font-bold text-cyan-700 dark:text-cyan-400`,children:`ß Bini.js`}),` `,(0,m.jsx)(`span`,{className:`text-neutral-500`,children:`(dev)`}),`
  `,(0,m.jsx)(v,{}),`  `,(0,m.jsx)(y,{children:`Environments:`}),` `,(0,m.jsx)(`span`,{className:`text-neutral-600 dark:text-neutral-400`,children:`.env.local, .env`}),`
  `,(0,m.jsx)(v,{}),`  `,(0,m.jsx)(y,{children:`Local:`}),`   `,(0,m.jsx)(b,{host:`localhost`}),`
  `,(0,m.jsx)(v,{}),`  `,(0,m.jsx)(y,{children:`Network:`}),` `,(0,m.jsx)(b,{host:`192.168.1.7`})]})}function S(){return(0,m.jsxs)(n,{code:_,children:[(0,m.jsx)(`span`,{className:`text-cyan-700 dark:text-cyan-400`,children:`[bini-env]`}),` `,(0,m.jsx)(`span`,{className:`font-semibold text-red-600 dark:text-red-400`,children:`error`}),`  Missing required environment variable: `,(0,m.jsx)(`span`,{className:`text-yellow-700 dark:text-yellow-400`,children:`"SMTP_HOST"`}),`
  `,(0,m.jsx)(`span`,{className:`text-green-600 dark:text-green-400`,children:`->`}),` `,(0,m.jsx)(`span`,{className:`text-neutral-500 dark:text-neutral-400`,children:`Set it in your platform's env config or hosting dashboard.`})]})}function C(){let e=t(),n=e===`js`?`js`:`ts`,u=e===`js`?`jsx`:`tsx`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`mb-12`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`bini-env`}),` is `,(0,m.jsx)(`strong`,{children:`installed and configured by default`}),` in every Bini.js project. It reads env vars from the Hono request context, so variables are always resolved from the correct runtime binding - no platform-specific code needed.`]}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Hono-native:`}),` `,(0,m.jsx)(l,{children:`getEnv(c, key)`}),` / `,(0,m.jsx)(l,{children:`requireEnv(c, key)`}),` read directly from the Hono request context. Zero dotenv - no `,(0,m.jsx)(l,{children:`.env`}),` parsing at runtime; vars come from the host platform. Vite handles `,(0,m.jsx)(l,{children:`.env`}),` loading during development.`]})]}),(0,m.jsxs)(c,{id:`quick-start`,title:`Quick Start`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`bini-env`}),` plugin is already registered when you scaffold a new Bini.js project - nothing to configure in `,(0,m.jsx)(l,{children:`vite.config.${n}`}),`. Just start using `,(0,m.jsx)(l,{children:`getEnv`}),` and`,` `,(0,m.jsx)(l,{children:`requireEnv`}),` in your API routes.`]}),(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`vite.config.${n}`},{n:`src`},{n:`app`,d:1},{n:`api`,d:2},{n:`hello.${n}`,d:3,fn:!0,dot:!0,url:`/api/hello`}]}),(0,m.jsx)(o,{filename:`vite.config.${n}`,tsCode:`// vite.config.ts - already configured on scaffold
// biniEnv() is included by default - no setup needed
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()],
})`,jsCode:`// vite.config.js - already configured on scaffold
// biniEnv() is included by default - no setup needed
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()],
})`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`Read env vars in your Hono handlers`}),(0,m.jsx)(o,{filename:`src/app/api/hello.${n}`,tsCode:`// src/app/api/hello.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const ctx = c as any

    const apiKey = requireEnv(ctx, 'MY_API_KEY')
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/hello.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const apiKey = requireEnv(c, 'MY_API_KEY')
    const appName = getEnv(c, 'APP_NAME') ?? 'World'

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`}),(0,m.jsxs)(d,{children:[`Plugin is already registered on scaffold - no manual `,(0,m.jsx)(l,{children:`loadEnv`}),` loop in`,` `,(0,m.jsx)(l,{children:`vite.config.${n}`}),` needed. Your secret just needs to exist in `,(0,m.jsx)(l,{children:`.env`}),` with no prefix, and `,(0,m.jsx)(l,{children:`requireEnv`}),` will find it during dev and preview.`]})]}),(0,m.jsxs)(c,{id:`usage-pattern`,title:`Usage Pattern`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`Always pass `,(0,m.jsx)(l,{children:`c`}),` explicitly. Cast it once at the top of the handler, then use`,` `,(0,m.jsx)(l,{children:`ctx`}),` throughout.`]}),(0,m.jsx)(o,{filename:`src/app/api/example.${n}`,tsCode:`// src/app/api/example.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/example', async (c) => {
  try {
    const ctx = c as any

    const dbUrl = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    const model = getEnv(ctx, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/example.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/example', async (c) => {
  try {
    const dbUrl = requireEnv(c, 'DATABASE_URL')
    const apiKey = requireEnv(c, 'STRIPE_SECRET_KEY')

    const model = getEnv(c, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(c, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(c, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`}),(0,m.jsx)(r,{className:`mt-4 mb-4`,children:`The pattern in three steps:`}),(0,m.jsx)(o,{filename:`src/app/api/pattern.${n}`,tsCode:`// src/app/api/pattern.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/pattern', (c) => {
  const ctx = c as any                          // 1. cast once, at the top
  const secret = requireEnv(ctx, 'KEY')         // 2. throws if missing
  const mode = getEnv(ctx, 'MODE') ?? 'default' // 3. optional with default

  return c.json({ ok: !!secret, mode })
})

export default app`,jsCode:`// src/app/api/pattern.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/pattern', (c) => {
  const secret = requireEnv(c, 'KEY')           // 1. throws if missing
  const mode = getEnv(c, 'MODE') ?? 'default'   // 2. optional with default

  return c.json({ ok: !!secret, mode })
})

export default app`})]}),(0,m.jsxs)(c,{id:`environment-prefixes`,title:`Environment Prefixes`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`Vite loads `,(0,m.jsx)(l,{children:`.env`}),` files from your project root. The prefix of each variable decides where it ends up.`]}),(0,m.jsx)(f,{width:260,rows:[{n:`.env`,dot:!0},{n:`.env.local`},{n:`.env.development`},{n:`.env.production`}]}),(0,m.jsx)(s,{children:`BINI_ - Client-side vars`}),(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`BINI_`}),` variables are exposed to `,(0,m.jsx)(l,{children:`import.meta.env`}),`. Use them for public client-side config.`]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com`}),(0,m.jsx)(o,{filename:`src/app/page.${u}`,code:`export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL

  return <p>API: {apiUrl}</p>
}`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`VITE_ - Public client vars`}),(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`VITE_`}),` is Vite's built-in prefix. Any var starting with `,(0,m.jsx)(l,{children:`VITE_`}),` is bundled into your client-side JavaScript.`]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
VITE_ANALYTICS_ID=UA-XXXX`}),(0,m.jsx)(o,{filename:`src/app/page.${u}`,code:`export default function HomePage() {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID

  return <p>Analytics: {analyticsId}</p>
}`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`No prefix - Secrets (server only)`}),(0,m.jsxs)(r,{className:`mb-4`,children:[`Variables without a prefix are NOT exposed to the browser. During dev/preview they are mirrored into `,(0,m.jsx)(l,{children:`process.env`}),` automatically, and read via `,(0,m.jsx)(l,{children:`getEnv(ctx, key)`}),` in API routes.`]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...`}),(0,m.jsx)(o,{filename:`src/app/api/secrets.${n}`,tsCode:`// src/app/api/secrets.ts
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/secrets', (c) => {
  const ctx = c as any
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')

  return c.json({ dbConnected: !!dbUrl })
})

export default app`,jsCode:`// src/app/api/secrets.js
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/secrets', (c) => {
  const dbUrl = requireEnv(c, 'DATABASE_URL')

  return c.json({ dbConnected: !!dbUrl })
})

export default app`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`Prefix Summary`}),(0,m.jsx)(a,{headers:[`Prefix`,`Exposed to browser`,`Mirrored to process.env`,`Use for`],rows:[[`BINI_`,`Yes`,`No`,`Public client config`],[`VITE_`,`Yes`,`No`,`Public client config`],[`No prefix`,`No`,`Yes (dev/preview)`,`Secrets - server only`]]}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Critical:`}),` Never put secrets in `,(0,m.jsx)(l,{children:`BINI_*`}),` or `,(0,m.jsx)(l,{children:`VITE_*`}),` variables - both are exposed to the browser. Use un-prefixed variables for secrets and read them with `,(0,m.jsx)(l,{children:`getEnv(ctx, key)`}),` inside API route handlers only.`]})]}),(0,m.jsxs)(c,{id:`platform-support`,title:`Platform Support`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`getEnv`}),` and `,(0,m.jsx)(l,{children:`requireEnv`}),` delegate to Hono's `,(0,m.jsx)(l,{children:`env(c)`}),` adapter, which reads from the correct source on every supported platform automatically. Your code never changes regardless of where it deploys.`]}),(0,m.jsx)(a,{headers:[`Platform`,`Runtime`,`How Hono reads it`],rows:[[`Node.js`,`Node`,`process.env`],[`Bun`,`Bun`,`process.env`],[`Vercel Edge`,`V8 isolate`,`process.env`],[`Netlify Edge`,`Deno`,`Deno.env.get()`],[`Cloudflare Workers`,`V8 isolate`,`CF bindings via c.env`],[`Deno Deploy`,`Deno`,`Deno.env.get()`]]}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Cloudflare note:`}),` Secrets set via `,(0,m.jsx)(l,{children:`wrangler secret put`}),` are only available inside the fetch handler via `,(0,m.jsx)(l,{children:`c.env`}),`. `,(0,m.jsx)(l,{children:`getEnv(ctx, key)`}),` reads them correctly as long as you pass `,(0,m.jsx)(l,{children:`c`}),`.`]})]}),(0,m.jsxs)(c,{id:`how-it-works`,title:`How It Works`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`The `,(0,m.jsx)(l,{children:`biniEnv()`}),` plugin does two things:`]}),(0,m.jsxs)(i,{className:`mb-4 space-y-1`,children:[(0,m.jsxs)(`li`,{children:[`Tells Vite to expose `,(0,m.jsx)(l,{children:`BINI_`}),` and `,(0,m.jsx)(l,{children:`VITE_`}),` prefixed vars to`,` `,(0,m.jsx)(l,{children:`import.meta.env`})]}),(0,m.jsxs)(`li`,{children:[`Mirrors non-prefixed `,(0,m.jsx)(l,{children:`.env`}),` values into `,(0,m.jsx)(l,{children:`process.env`}),` during `,(0,m.jsx)(l,{children:`vite dev`}),` `,`/ `,(0,m.jsx)(l,{children:`vite preview`})]})]}),(0,m.jsx)(o,{filename:`bini-env/index.${n}`,code:`// simplified view of the plugin
export function biniEnv() {
  return {
    name: 'bini-env',
    config(userConfig, { command }) {
      if (command === 'serve') {
        const envDir = userConfig.envDir ?? userConfig.root ?? process.cwd()
        // mirrors non-prefixed, non-empty .env values into process.env
        // silent on success, warns on failure - no opt-out
      }
      return { envPrefix: ['BINI_', 'VITE_'] }
    },
  }
}`}),(0,m.jsxs)(r,{className:`mt-4 mb-4`,children:[`The prefix list is fixed - there is no option to add more prefixes. Only `,(0,m.jsx)(l,{children:`BINI_`}),` and`,` `,(0,m.jsx)(l,{children:`VITE_`}),` are ever exposed to the browser.`]}),(0,m.jsx)(r,{className:`mt-4 mb-4`,children:`On server start you will see:`}),(0,m.jsx)(x,{}),(0,m.jsxs)(r,{className:`mt-4 mb-4`,children:[`Vite handles everything natively: loading `,(0,m.jsx)(l,{children:`.env`}),` files, watching, restarting, injecting prefixed vars, and HMR. bini-env does not reimplement any of that.`]}),(0,m.jsxs)(r,{className:`mt-2 mb-4`,children:[(0,m.jsx)(`strong`,{children:`Zero dotenv:`}),` `,(0,m.jsx)(l,{children:`dotenv`}),` is never used at runtime. In production, vars are set in your hosting platform's environment config.`]}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Precedence:`}),` A value already present in `,(0,m.jsx)(l,{children:`process.env`}),` (set by your OS, shell, or CI) always wins. `,(0,m.jsx)(l,{children:`.env`}),` file values only fill in variables that are not already set.`]})]}),(0,m.jsxs)(c,{id:`api-reference`,title:`API Reference`,children:[(0,m.jsx)(s,{children:`getEnv(c, key)`}),(0,m.jsxs)(r,{className:`mb-2`,children:[`Returns `,(0,m.jsx)(l,{children:`string | undefined`}),`. Reads from the Hono request context.`]}),(0,m.jsx)(o,{filename:`src/app/api/config.${n}`,tsCode:`// src/app/api/config.ts
import { Hono } from 'hono'
import { getEnv } from 'bini-env'

const app = new Hono()

app.get('/config', async (c) => {
  const ctx = c as any

  const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
  const logLevel = getEnv(ctx, 'LOG_LEVEL') ?? 'info'
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

  return c.json({ region, logLevel, debug })
})

export default app`,jsCode:`// src/app/api/config.js
import { Hono } from 'hono'
import { getEnv } from 'bini-env'

const app = new Hono()

app.get('/config', async (c) => {
  const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
  const logLevel = getEnv(c, 'LOG_LEVEL') ?? 'info'
  const debug = getEnv(c, 'DEBUG_MODE') === 'true'

  return c.json({ region, logLevel, debug })
})

export default app`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`requireEnv(c, key)`}),(0,m.jsxs)(r,{className:`mb-2`,children:[`Returns `,(0,m.jsx)(l,{children:`string`}),`. Throws immediately if the variable is missing or empty.`]}),(0,m.jsx)(o,{filename:`src/app/api/send-email.${n}`,tsCode:`// src/app/api/send-email.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/send-email', async (c) => {
  try {
    const ctx = c as any

    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')

    // ... send email

    return c.json({ sent: true })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/send-email.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/send-email', async (c) => {
  try {
    const smtpHost = requireEnv(c, 'SMTP_HOST')
    const smtpPass = requireEnv(c, 'SMTP_PASS')
    const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587')

    // ... send email

    return c.json({ sent: true })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`}),(0,m.jsx)(r,{className:`mt-4 mb-4`,children:`On failure, the terminal will show:`}),(0,m.jsx)(S,{}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`biniEnv()`}),(0,m.jsxs)(r,{className:`mb-2`,children:[`Vite plugin. Takes no options. It is already registered in the `,(0,m.jsx)(l,{children:`vite.config`}),` shown in Quick Start.`]}),(0,m.jsxs)(r,{className:`mt-2 mb-4`,children:[`There is nothing to configure - no prefix list to extend, no flag to disable the`,` `,(0,m.jsx)(l,{children:`process.env`}),` mirror. The prefix list is fixed to `,(0,m.jsx)(l,{children:`['BINI_', 'VITE_']`}),`.`]}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`biniLogger`}),(0,m.jsx)(r,{className:`mb-2`,children:`Vite-style terminal logger. Use it in your own Bini.js plugins or server-side code.`}),(0,m.jsx)(o,{filename:`src/app/api/health.${n}`,tsCode:`// src/app/api/health.ts
import { Hono } from 'hono'
import { getEnv, biniLogger } from 'bini-env'

const app = new Hono()

app.get('/health', (c) => {
  const ctx = c as any

  try {
    const region = getEnv(ctx, 'AWS_REGION')

    biniLogger.info('Server ready')
    if (!region) biniLogger.warn('Missing optional var')

    return c.json({ ok: true })
  } catch (error) {
    biniLogger.error('Something broke', error)
    return c.json({ ok: false }, 500)
  }
})

export default app`,jsCode:`// src/app/api/health.js
import { Hono } from 'hono'
import { getEnv, biniLogger } from 'bini-env'

const app = new Hono()

app.get('/health', (c) => {
  try {
    const region = getEnv(c, 'AWS_REGION')

    biniLogger.info('Server ready')
    if (!region) biniLogger.warn('Missing optional var')

    return c.json({ ok: true })
  } catch (error) {
    biniLogger.error('Something broke', error)
    return c.json({ ok: false }, 500)
  }
})

export default app`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`HonoContext`}),(0,m.jsxs)(r,{className:`mb-2`,children:[`Exported type (`,(0,m.jsx)(l,{children:`Context`}),` from Hono). Use it to type helper functions that group env reads.`]}),(0,m.jsx)(o,{filename:`src/app/api/db.${n}`,tsCode:`// src/app/api/db.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'
import type { HonoContext } from 'bini-env'

function readDbConfig(c: HonoContext) {
  const ctx = c as any
  return {
    url: requireEnv(ctx, 'DATABASE_URL'),
    poolSize: parseInt(getEnv(ctx, 'DB_POOL_SIZE') ?? '10'),
    ssl: getEnv(ctx, 'DB_SSL') !== 'false',
  }
}

const app = new Hono()

app.get('/db', (c) => {
  const db = readDbConfig(c)
  return c.json({ poolSize: db.poolSize, ssl: db.ssl })
})

export default app`,jsCode:`// src/app/api/db.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

function readDbConfig(c) {
  return {
    url: requireEnv(c, 'DATABASE_URL'),
    poolSize: parseInt(getEnv(c, 'DB_POOL_SIZE') ?? '10'),
    ssl: getEnv(c, 'DB_SSL') !== 'false',
  }
}

const app = new Hono()

app.get('/db', (c) => {
  const db = readDbConfig(c)
  return c.json({ poolSize: db.poolSize, ssl: db.ssl })
})

export default app`})]}),(0,m.jsxs)(c,{id:`security`,title:`Security Best Practices`,children:[(0,m.jsx)(s,{children:`Rule 1: Never Prefix Secrets`}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env

# BAD - This will be exposed to the browser!
BINI_DATABASE_URL=postgres://...

# GOOD - Not exposed, mirrored into process.env for server-side use
DATABASE_URL=postgres://...`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`Rule 2: Use BINI_ or VITE_ for Public Data`}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env

# GOOD - Public data
BINI_API_URL=https://api.example.com
VITE_GA_ID=UA-XXXXX`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`Rule 3: Do not Leave Secret Placeholders Empty`}),(0,m.jsxs)(r,{className:`mb-0`,children:[`An empty value (`,(0,m.jsx)(l,{children:`API_KEY=`}),`) is skipped by the `,(0,m.jsx)(l,{children:`process.env`}),` mirror, so`,` `,(0,m.jsx)(l,{children:`requireEnv`}),` will correctly throw instead of silently succeeding with an empty string.`]})]}),(0,m.jsxs)(c,{id:`performance`,title:`Performance`,children:[(0,m.jsx)(a,{headers:[`Metric`,`Dev`,`Prod`],rows:[[`File reads`,`1 (loadEnv, cached by Vite)`,`0`],[`Runtime cost`,`~0ms (mirror runs once at server start)`,`0`],[`Bundle impact`,`Minimal`,`Tree-shaken`]]}),(0,m.jsxs)(r,{className:`mt-4 mb-0`,children:[`No dotenv. No per-request disk reads. `,(0,m.jsx)(l,{children:`getEnv`}),` is a direct call to Hono's adapter on every invocation - request-scoped and correct.`]})]}),(0,m.jsx)(c,{id:`troubleshooting`,title:`Troubleshooting`,children:(0,m.jsx)(a,{headers:[`Problem`,`Solution`],rows:[[`Env var undefined in production`,`Set variables in your hosting platform env dashboard (Vercel, Netlify, Cloudflare, etc.).`],[`Works in dev, undefined in prod`,`Local dev works because biniEnv() mirrors non-prefixed vars into process.env automatically. Production requires platform-level configuration.`],[`My .env value is not taking effect in dev`,`Check your shell and CI environment first - the mirror never overrides a variable that is already set. Also check the value is not empty (KEY=).`],[`requireEnv still throws even though my key is in .env`,`If the value is KEY= with nothing after the =, it is treated as unset and skipped by design. Give it a real value.`],[`bini-env is not reading my .env from the right folder`,`biniEnv() reads from your Vite envDir if set, otherwise root, otherwise the working directory. Double check envDir/root in vite.config.ts.`],[`Cloudflare secret not found`,`Secrets set via wrangler secret put are only available via c.env. Ensure you are passing c to the function.`],[`TypeScript error: Context not assignable to HonoContext`,`Cast once per handler: const ctx = c as any`],[`Types not found`,`Add /// <reference types="vite/client" /> to your tsconfig.json or entry file.`]]})}),(0,m.jsxs)(c,{id:`complete-example`,title:`Complete Example`,children:[(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`page.${u}`,d:2,url:`/`},{n:`api`,d:2},{n:`config.${n}`,d:3,fn:!0,dot:!0,url:`/api/config`}]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com
VITE_APP_NAME=My App
DATABASE_URL=postgres://localhost:5432/mydb
JWT_SECRET=your_jwt_secret`}),(0,m.jsx)(o,{filename:`src/app/page.${u}`,code:`// src/app/page.tsx
export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.VITE_APP_NAME
  return <h1>{appName}</h1>
}`}),(0,m.jsx)(o,{filename:`src/app/api/config.${n}`,tsCode:`// src/app/api/config.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const jwtSecret = requireEnv(ctx, 'JWT_SECRET')
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

  return c.json({ debug, dbConnected: !!dbUrl })
})

export default app`,jsCode:`// src/app/api/config.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const dbUrl = requireEnv(c, 'DATABASE_URL')
  const jwtSecret = requireEnv(c, 'JWT_SECRET')
  const debug = getEnv(c, 'DEBUG_MODE') === 'true'

  return c.json({ debug, dbConnected: !!dbUrl })
})

export default app`})]})]})}function w(){return(0,m.jsx)(u,{title:`Environment Variables`,description:`Hono-native environment variable system for Bini.js - works across Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`,url:`https://bini.js.org/docs/environment-variables`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/environment-variables.tsx`,toc:h,prev:{to:`/docs/api-cors`,title:`CORS`},next:{to:`/docs/env-prefixes`,title:`Prefixes & Client Exposure`},children:(0,m.jsx)(C,{})})}export{w as default};