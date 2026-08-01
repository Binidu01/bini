import{c as e,i as t,n,t as r}from"./index-BtLteBkV.js";import{n as i,v as a}from"./Layout-_ilOhwvC.js";import{t as o}from"./arrow-left-CJFMrFVu.js";import{t as s}from"./arrow-right-DqgpFkUE.js";import{n as c,r as l,t as u}from"./TableOfContents-C9sO1CuQ.js";var d=e(t(),1),f=r(),p=[{id:`quick-start`,label:`Quick Start`},{id:`usage-pattern`,label:`Usage Pattern`},{id:`environment-prefixes`,label:`Environment Prefixes`},{id:`platform-support`,label:`Platform Support`},{id:`how-it-works`,label:`How It Works`},{id:`api-reference`,label:`API Reference`},{id:`performance`,label:`Performance`},{id:`troubleshooting`,label:`Troubleshooting`},{id:`complete-example`,label:`Complete Example`}],m=`Environment Variables`,h=`https://bini.js.org/docs/environment-variables`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/environment-variables.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Zero-config environment variable system powered by Hono — works across Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,f.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`bini-env`}),` is `,(0,f.jsx)(`strong`,{className:`text-white`,children:`installed and configured by default`}),` in every Bini.js project. It reads env vars from the Hono request context, so variables are always resolved from the correct runtime binding — no platform-specific code needed.`]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Hono-native:`}),` `,(0,f.jsx)(`code`,{children:`getEnv(c, key)`}),` / `,(0,f.jsx)(`code`,{children:`requireEnv(c, key)`}),` read directly from the Hono request context. Zero dotenv — no `,(0,f.jsx)(`code`,{children:`.env`}),` parsing at runtime; vars come from the host platform. Vite handles `,(0,f.jsx)(`code`,{children:`.env`}),` loading during development.`]})]}),(0,f.jsxs)(a.section,{id:`quick-start`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Quick Start`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`1. Register the Vite plugin`}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()]
})`,filename:`vite.config.ts`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`2. Read env vars in your Hono handlers`}),(0,f.jsx)(_,{code:`// src/app/api/hello.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const ctx = c as any

    const apiKey  = requireEnv(ctx, 'MY_API_KEY')
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'

    return c.json({ message: \`Hello, \${appName}!\` })

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,filename:`src/app/api/hello.ts`})]}),(0,f.jsxs)(a.section,{id:`usage-pattern`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Usage Pattern`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Always pass `,(0,f.jsx)(`code`,{children:`c`}),` explicitly. Cast it once at the top of the handler, then use `,(0,f.jsx)(`code`,{children:`ctx`}),` throughout.`]}),(0,f.jsx)(_,{code:`app.post('/example', async (c) => {
  try {
    const ctx = c as any

    const dbUrl  = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    const model      = getEnv(ctx, 'AI_MODEL')    ?? 'gpt-4o'
    const debug      = getEnv(ctx, 'DEBUG_MODE')  === 'true'

    // ... rest of handler

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The pattern in three steps:`}),(0,f.jsx)(_,{code:`const ctx = c as any              // cast once
requireEnv(ctx, 'KEY')            // throws if missing
getEnv(ctx, 'KEY') ?? 'default'   // optional with default`})]}),(0,f.jsxs)(a.section,{id:`environment-prefixes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Prefixes`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`BINI_ — Client-side vars`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{children:`BINI_`}),` variables are exposed to `,(0,f.jsx)(`code`,{children:`import.meta.env`}),`. Use them for public client-side config.`]}),(0,f.jsx)(_,{code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com`,filename:`.env`}),(0,f.jsx)(_,{code:`const apiUrl = import.meta.env.BINI_PUBLIC_API_URL`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`VITE_ — Public client vars`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{children:`VITE_`}),` is Vite's built-in prefix. Any var starting with `,(0,f.jsx)(`code`,{children:`VITE_`}),` is bundled into your client-side JavaScript.`]}),(0,f.jsx)(_,{code:`# .env
VITE_ANALYTICS_ID=UA-XXXX`,filename:`.env`}),(0,f.jsx)(_,{code:`import.meta.env.VITE_ANALYTICS_ID`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`No prefix — Secrets (server only)`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Variables without a prefix are NOT exposed to the browser. Read them via `,(0,f.jsx)(`code`,{children:`getEnv(ctx, key)`}),` in API routes only.`]}),(0,f.jsx)(_,{code:`# .env
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...`,filename:`.env`}),(0,f.jsx)(_,{code:`const ctx = c as any
const dbUrl = requireEnv(ctx, 'DATABASE_URL')`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Prefix Summary`}),(0,f.jsx)(v,{headers:[`Prefix`,`Exposed to browser`,`Use for`],rows:[[`BINI_`,`Yes`,`Public client config`],[`VITE_`,`Yes`,`Public client config`],[`No prefix`,`No`,`Secrets — server only`]]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Critical:`}),` Never put secrets in `,(0,f.jsx)(`code`,{children:`BINI_*`}),` or `,(0,f.jsx)(`code`,{children:`VITE_*`}),` variables — both are exposed to the browser. Use un-prefixed variables for secrets and read them with `,(0,f.jsx)(`code`,{children:`getEnv(ctx, key)`}),` inside API route handlers only.`]})]}),(0,f.jsxs)(a.section,{id:`platform-support`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Platform Support`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{children:`getEnv`}),` and `,(0,f.jsx)(`code`,{children:`requireEnv`}),` delegate to Hono's `,(0,f.jsx)(`code`,{children:`env(c)`}),` adapter, which reads from the correct source on every supported platform automatically.`]}),(0,f.jsx)(v,{headers:[`Platform`,`Runtime`,`How Hono reads it`],rows:[[`Node.js`,`Node`,`process.env`],[`Bun`,`Bun`,`process.env`],[`Vercel Edge`,`V8 isolate`,`process.env`],[`Netlify Edge`,`Deno`,`Deno.env.get()`],[`Cloudflare Workers`,`V8 isolate`,`CF bindings via c.env`],[`Deno Deploy`,`Deno`,`Deno.env.get()`]]})]}),(0,f.jsxs)(a.section,{id:`how-it-works`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`How It Works`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{children:`biniEnv()`}),` plugin tells Vite which env prefixes to expose to `,(0,f.jsx)(`code`,{children:`import.meta.env`}),`:`]}),(0,f.jsx)(_,{code:`config() {
  return { envPrefix: ['BINI_', 'VITE_', ...yourExtras] }
}`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`On server start you will see:`}),(0,f.jsx)(_,{code:`  ß Bini.js (dev)
  ➜  Environments: .env.local, .env
  ➜  Local:   http://localhost:3000/`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Vite handles everything natively: loading `,(0,f.jsx)(`code`,{children:`.env`}),` files, watching, restarting, injecting prefixed vars, and HMR. bini-env does not reimplement any of that.`]}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-2`,children:[(0,f.jsx)(`strong`,{children:`Zero dotenv:`}),` `,(0,f.jsx)(`code`,{children:`dotenv`}),` is never used at runtime. In production, vars are set in your hosting platform's environment config.`]})]}),(0,f.jsxs)(a.section,{id:`api-reference`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`API Reference`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`getEnv(c, key)`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-2`,children:[`Returns `,(0,f.jsx)(`code`,{children:`string | undefined`}),`.`]}),(0,f.jsx)(_,{code:`app.get('/config', async (c) => {
  const ctx = c as any
  const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
  return c.json({ region })
})`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`requireEnv(c, key)`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-2`,children:[`Returns `,(0,f.jsx)(`code`,{children:`string`}),`. Throws if missing.`]}),(0,f.jsx)(_,{code:`app.post('/send-email', async (c) => {
  const ctx = c as any
  const smtpHost = requireEnv(ctx, 'SMTP_HOST')
  // ...
})`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`On failure, the terminal will show:`}),(0,f.jsx)(_,{code:`[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config.`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`biniEnv(options?)`}),(0,f.jsx)(_,{code:`biniEnv()
biniEnv({ envPrefix: ['MY_PUBLIC_'] })`}),(0,f.jsx)(v,{headers:[`Option`,`Type`,`Default`,`Description`],rows:[[`envPrefix`,`string | string[]`,`[]`,`Extra prefixes to expose`]]})]}),(0,f.jsxs)(a.section,{id:`performance`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Performance`}),(0,f.jsx)(v,{headers:[`Metric`,`Dev`,`Prod`],rows:[[`File reads`,`0`,`0`],[`Runtime cost`,`~0ms`,`0`],[`Bundle impact`,`Minimal`,`Tree-shaken`]]}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`No dotenv. No disk reads. No caching layer.`})]}),(0,f.jsxs)(a.section,{id:`troubleshooting`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Troubleshooting`}),(0,f.jsx)(v,{headers:[`Problem`,`Solution`],rows:[[`Env var undefined in production`,`Set variables in your hosting platform's environment dashboard.`],[`Works in dev, undefined in prod`,`Production requires platform-level configuration.`],[`Cloudflare secret not found`,`Secrets set via wrangler secret put are only available via c.env. Ensure you are passing c to the function.`],[`TypeScript error: Context not assignable`,`Cast once per handler: const ctx = c as any`]]})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(_,{code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com
VITE_APP_NAME=My App
DATABASE_URL=postgres://localhost:5432/mydb
JWT_SECRET=your_jwt_secret`,filename:`.env`}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.VITE_APP_NAME
  return <h1>{appName}</h1>
}`,filename:`src/app/page.tsx`}),(0,f.jsx)(_,{code:`// src/app/api/config.ts
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

export default app`,filename:`src/app/api/config.ts`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/api-cors`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`CORS`})]})]}),(0,f.jsxs)(n,{to:`/docs/env-prefixes`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Prefixes & Client Exposure`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};