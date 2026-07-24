import{c as e,i as t,n,t as r}from"./index-D7FaEZaw.js";import{_ as i,n as a,v as o}from"./Layout-LrmNWyF1.js";import{t as s}from"./arrow-left-8HD57GyO.js";import{t as c}from"./arrow-right-DIZirI2P.js";import{t as l}from"./DocSidebar-Rg6aSpzC.js";import{t as u}from"./info-DtQYJHWt.js";import{t as d}from"./lightbulb-DvRw9JHl.js";import{t as f}from"./triangle-alert-f4ARLmGm.js";var p=i(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),m=i(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),h=i(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),g=e(t(),1),_=r();function v({code:e,filename:t}){let[n,r]=g.useState(!1);return(0,_.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,_.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,_.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,_.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,_.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,_.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,_.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,_.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,_.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,_.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function y({headers:e,rows:t}){return(0,_.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,_.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,_.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,_.jsx)(`tr`,{children:e.map((e,t)=>(0,_.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,_.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,_.jsx)(`tr`,{children:e.map((e,t)=>(0,_.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function b({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:u},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:f},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:d},danger:{bg:`bg-rose-500/10`,border:`border-rose-500/30`,color:`text-rose-400`,icon:h}}[e],r=n.icon;return(0,_.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,_.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,_.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:e===`danger`?`Security`:`Tip`})]}),(0,_.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function x(){return(0,_.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,_.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,_.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,_.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,_.jsx)(a,{}),(0,_.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,_.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,_.jsx)(l,{children:(0,_.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,_.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,_.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Environment Variables`}),(0,_.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Zero-config environment variable system powered by Hono — works across Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,_.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[(0,_.jsx)(`code`,{className:`text-cyan-400`,children:`bini-env`}),` is `,(0,_.jsx)(`strong`,{className:`text-white`,children:`installed and configured by default`}),` in every Bini.js project. It reads env vars from the Hono request context, so variables are always resolved from the correct runtime binding — no platform-specific code needed.`]}),(0,_.jsxs)(b,{type:`info`,children:[(0,_.jsx)(`strong`,{children:`Hono-native:`}),` `,(0,_.jsx)(`code`,{children:`getEnv(c, key)`}),` / `,(0,_.jsx)(`code`,{children:`requireEnv(c, key)`}),` read directly from the Hono request context. Zero dotenv — no `,(0,_.jsx)(`code`,{children:`.env`}),` parsing at runtime; vars come from the host platform. Vite handles `,(0,_.jsx)(`code`,{children:`.env`}),` loading during development.`]})]}),(0,_.jsx)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:(0,_.jsxs)(b,{type:`danger`,children:[(0,_.jsx)(`strong`,{children:`Before You Use This:`}),` This library does NOT magically make env vars safe.`,(0,_.jsxs)(`ul`,{className:`mt-2 space-y-1 list-disc list-inside`,children:[(0,_.jsxs)(`li`,{children:[(0,_.jsx)(`code`,{children:`VITE_*`}),` variables are `,(0,_.jsx)(`strong`,{children:`always`}),` bundled into client JavaScript — they are public.`]}),(0,_.jsxs)(`li`,{children:[(0,_.jsx)(`code`,{children:`BINI_*`}),` variables are `,(0,_.jsx)(`strong`,{children:`also exposed`}),` to the client via `,(0,_.jsx)(`code`,{children:`import.meta.env`}),`.`]}),(0,_.jsxs)(`li`,{children:[`Only un-prefixed variables read via `,(0,_.jsx)(`code`,{children:`getEnv(ctx, key)`}),` in API routes are truly server-side.`]}),(0,_.jsx)(`li`,{children:`Misconfigured prefixes = data leak.`})]}),`If you don't understand this, stop and fix that first.`]})}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Quick Start`}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`1. Register the Vite plugin`}),(0,_.jsx)(v,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()]
})`,filename:`vite.config.ts`}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`2. Read env vars in your Hono handlers`}),(0,_.jsx)(v,{code:`// src/app/api/hello.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const ctx = c as any

    // requireEnv throws if the var is missing — fail fast on required config
    const apiKey  = requireEnv(ctx, 'MY_API_KEY')

    // getEnv returns undefined if missing — use ?? to provide a default
    const appName = getEnv(ctx, 'APP_NAME')     ?? 'World'
    const timeout = parseInt(getEnv(ctx, 'TIMEOUT_MS') ?? '5000')

    return c.json({ message: \`Hello, \${appName}!\` })

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,filename:`src/app/api/hello.ts`})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Usage Pattern`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Always pass `,(0,_.jsx)(`code`,{children:`c`}),` explicitly. Cast it once at the top of the handler, then use `,(0,_.jsx)(`code`,{children:`ctx`}),` throughout.`]}),(0,_.jsx)(v,{code:`app.post('/example', async (c) => {
  try {
    const ctx = c as any

    // Required vars — handler throws immediately if missing
    const dbUrl  = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    // Optional vars — fall back to sensible defaults
    const model      = getEnv(ctx, 'AI_MODEL')    ?? 'gpt-4o'
    const region     = getEnv(ctx, 'AWS_REGION')  ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug      = getEnv(ctx, 'DEBUG_MODE')  === 'true'

    // ... rest of handler

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})`}),(0,_.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The pattern in three steps:`}),(0,_.jsx)(v,{code:`const ctx = c as any              // cast once, at the top of the handler
requireEnv(ctx, 'KEY')            // for vars the handler cannot run without
getEnv(ctx, 'KEY') ?? 'default'   // for optional vars with sensible defaults`})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Prefixes`}),(0,_.jsxs)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3 flex items-center gap-2`,children:[(0,_.jsx)(m,{className:`w-4 h-4 text-cyan-400`}),`BINI_ — Client-side vars`]}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,_.jsx)(`code`,{children:`BINI_`}),` variables are exposed to `,(0,_.jsx)(`code`,{children:`import.meta.env`}),`. Use them for public client-side config.`]}),(0,_.jsx)(v,{code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com`,filename:`.env`}),(0,_.jsx)(`p`,{className:`text-slate-300 mb-2`,children:`Accessible in any component:`}),(0,_.jsx)(v,{code:`const apiUrl = import.meta.env.BINI_PUBLIC_API_URL`}),(0,_.jsxs)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3 flex items-center gap-2`,children:[(0,_.jsx)(m,{className:`w-4 h-4 text-purple-400`}),`VITE_ — Public client vars`]}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,_.jsx)(`code`,{children:`VITE_`}),` is Vite's built-in prefix. Any var starting with `,(0,_.jsx)(`code`,{children:`VITE_`}),` is bundled into your client-side JavaScript and is publicly visible.`]}),(0,_.jsx)(v,{code:`# .env
VITE_ANALYTICS_ID=UA-XXXX
VITE_API_URL=https://api.example.com`,filename:`.env`}),(0,_.jsx)(v,{code:`// Accessible anywhere, including the browser
import.meta.env.VITE_ANALYTICS_ID`}),(0,_.jsxs)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3 flex items-center gap-2`,children:[(0,_.jsx)(p,{className:`w-4 h-4 text-rose-400`}),`No prefix — Secrets (server only)`]}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Variables without a prefix are NOT exposed to the browser. Read them via `,(0,_.jsx)(`code`,{children:`getEnv(ctx, key)`}),` in API routes only.`]}),(0,_.jsx)(v,{code:`# .env
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...
SMTP_PASS=super_secret`,filename:`.env`}),(0,_.jsx)(v,{code:`// In API routes — auto-imported
const ctx = c as any
const dbUrl = requireEnv(ctx, 'DATABASE_URL')
const smtpPass = requireEnv(ctx, 'SMTP_PASS')`}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-8 mb-3`,children:`Prefix Summary`}),(0,_.jsx)(y,{headers:[`Prefix`,`Exposed to browser`,`Use for`],rows:[[`BINI_`,`Yes (via import.meta.env)`,`Public client config`],[`VITE_`,`Yes (via import.meta.env)`,`Public client config (Vite standard)`],[`No prefix`,`No`,`Secrets — server only, read via getEnv(ctx, key)`]]}),(0,_.jsxs)(b,{type:`warning`,children:[(0,_.jsx)(`strong`,{children:`Critical:`}),` Never put secrets in `,(0,_.jsx)(`code`,{children:`BINI_*`}),` or `,(0,_.jsx)(`code`,{children:`VITE_*`}),` variables — both are exposed to the browser. Use un-prefixed variables for secrets and read them with `,(0,_.jsx)(`code`,{children:`getEnv(ctx, key)`}),` inside API route handlers only.`]})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Platform Support`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,_.jsx)(`code`,{children:`getEnv`}),` and `,(0,_.jsx)(`code`,{children:`requireEnv`}),` delegate to Hono's `,(0,_.jsx)(`code`,{children:`env(c)`}),` adapter, which reads from the correct source on every supported platform automatically. Your code never changes regardless of where it deploys.`]}),(0,_.jsx)(y,{headers:[`Platform`,`Runtime`,`How Hono reads it`],rows:[[`Node.js`,`Node`,`process.env ✅`],[`Bun`,`Bun`,`process.env ✅`],[`Vercel Edge`,`V8 isolate`,`process.env ✅`],[`Netlify Edge`,`Deno`,`Deno.env.get() ✅`],[`Cloudflare Workers`,`V8 isolate`,`CF bindings via c.env ✅`],[`Deno Deploy`,`Deno`,`Deno.env.get() ✅`]]})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`How It Works`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,_.jsx)(`code`,{children:`biniEnv()`}),` plugin tells Vite which env prefixes to expose to `,(0,_.jsx)(`code`,{children:`import.meta.env`}),`, and prints the ß Bini.js banner with detected `,(0,_.jsx)(`code`,{children:`.env`}),` files on server start.`]}),(0,_.jsx)(v,{code:`// what biniEnv() does internally
config() {
  return { envPrefix: ['BINI_', 'VITE_', ...yourExtras] }
}`}),(0,_.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`On server start you will see:`}),(0,_.jsx)(v,{code:`  ß Bini.js (dev)
  ➜  Environments: .env.local, .env
  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.7:3000/`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Vite handles everything else natively: loading `,(0,_.jsx)(`code`,{children:`.env`}),`, `,(0,_.jsx)(`code`,{children:`.env.local`}),`, `,(0,_.jsx)(`code`,{children:`.env.[mode]`}),` files during dev, watching and restarting on change, injecting prefixed vars into `,(0,_.jsx)(`code`,{children:`import.meta.env`}),` at build time, and HMR when env files change. bini-env does not reimplement any of that.`]}),(0,_.jsxs)(`p`,{className:`text-slate-300 mt-2`,children:[(0,_.jsx)(`strong`,{children:`Zero dotenv:`}),` `,(0,_.jsx)(`code`,{children:`dotenv`}),` is never used at runtime. In production, vars are set in your hosting platform's environment config. `,(0,_.jsx)(`code`,{children:`getEnv`}),` and `,(0,_.jsx)(`code`,{children:`requireEnv`}),` are direct calls to Hono's adapter on every invocation — request-scoped and correct.`]})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`API Reference`}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`getEnv(c, key)`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-2`,children:[`Returns `,(0,_.jsx)(`code`,{children:`string | undefined`}),`. Reads from the Hono request context.`]}),(0,_.jsx)(v,{code:`app.get('/config', async (c) => {
  const ctx = c as any

  const region   = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
  const logLevel = getEnv(ctx, 'LOG_LEVEL')  ?? 'info'
  const debug    = getEnv(ctx, 'DEBUG_MODE') === 'true'

  return c.json({ region, logLevel, debug })
})`}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`requireEnv(c, key)`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-2`,children:[`Returns `,(0,_.jsx)(`code`,{children:`string`}),`. Throws immediately if the variable is missing or empty. Logs a descriptive error to the terminal on failure.`]}),(0,_.jsx)(v,{code:`app.post('/send-email', async (c) => {
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
})`}),(0,_.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`On failure, the terminal will show:`}),(0,_.jsx)(v,{code:`[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`biniEnv(options?)`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Vite plugin. Registers `,(0,_.jsx)(`code`,{children:`BINI_`}),` and `,(0,_.jsx)(`code`,{children:`VITE_`}),` as env prefixes and optionally adds more.`]}),(0,_.jsx)(v,{code:`biniEnv()
// or with extra prefixes
biniEnv({ envPrefix: ['MY_PUBLIC_'] })`}),(0,_.jsx)(y,{headers:[`Option`,`Type`,`Default`,`Description`],rows:[[`envPrefix`,`string | string[]`,`[]`,`Extra prefixes to expose to import.meta.env, in addition to BINI_ and VITE_`]]}),(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`HonoContext`}),(0,_.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Exported type (`,(0,_.jsx)(`code`,{children:`Context`}),` from Hono). Use it to type helper functions that group env reads, so you only cast `,(0,_.jsx)(`code`,{children:`c as any`}),` once per entry point.`]}),(0,_.jsx)(v,{code:`import type { HonoContext } from 'bini-env'

function readDbConfig(c: HonoContext) {
  const ctx = c as any
  return {
    url:      requireEnv(ctx, 'DATABASE_URL'),
    poolSize: parseInt(getEnv(ctx, 'DB_POOL_SIZE') ?? '10'),
    ssl:      getEnv(ctx, 'DB_SSL') !== 'false',
  }
}`})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Performance`}),(0,_.jsx)(y,{headers:[`Metric`,`Dev`,`Prod`],rows:[[`File reads`,`0`,`0`],[`Runtime cost`,`~0ms`,`0`],[`Bundle impact`,`Minimal`,`Tree-shaken`]]}),(0,_.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`No dotenv. No disk reads. No caching layer. `,(0,_.jsx)(`code`,{children:`getEnv`}),` is a direct call to Hono's adapter on every invocation — request-scoped and correct.`]})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Troubleshooting`}),(0,_.jsx)(y,{headers:[`Problem`,`Solution`],rows:[[`"Env var is undefined in production"`,`Vars set in .env files are only loaded by Vite during local development. In production, set your variables in your hosting platform's environment dashboard (Vercel, Netlify, Cloudflare, etc.).`],[`"Works in dev, undefined in prod"`,`Same as above. Local dev works because Vite loads .env files automatically. Production requires platform-level configuration.`],[`"Cloudflare secret not found"`,`Secrets set via wrangler secret put are only available via c.env inside a handler — which is exactly what getEnv(ctx, key) reads. Ensure you are passing c to the function.`],[`"TypeScript error: Context not assignable"`,`Hono 4.12+ added a symbol to HonoRequest that can break structural assignability in strict TypeScript projects. Cast once per handler: const ctx = c as any`],[`"Types not found"`,`Add to your tsconfig.json or entry file: /// <reference types="vite/client" />`]]})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,_.jsx)(v,{code:`# .env
# Client-side (PUBLIC) — accessible via import.meta.env
BINI_PUBLIC_API_URL=https://api.example.com
VITE_APP_NAME=My App

# Server-side (PRIVATE) — accessible via getEnv(ctx, key) in API routes
DATABASE_URL=postgres://localhost:5432/mydb
SMTP_PASS=your_smtp_password
JWT_SECRET=your_jwt_secret`,filename:`.env`}),(0,_.jsx)(v,{code:`// src/app/page.tsx (Client Component)
export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.VITE_APP_NAME
  
  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
    </div>
  )
}`,filename:`src/app/page.tsx`}),(0,_.jsx)(v,{code:`// src/app/api/config.ts (API Route)
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any

  // requireEnv throws if missing
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const jwtSecret = requireEnv(ctx, 'JWT_SECRET')

  // getEnv returns undefined if missing — use ?? for defaults
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

  return c.json({
    debug,
    dbConnected: !!dbUrl,
    jwtConfigured: !!jwtSecret,
    // Never expose the actual secrets in responses!
  })
})

export default app`,filename:`src/app/api/config.ts`})]}),(0,_.jsxs)(o.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},children:[(0,_.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Best Practices`}),(0,_.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`Never commit .env files`}),` — Add to .gitignore.`]})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`Use .env.example`}),` — Document required variables for your team.`]})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`Cast c once per handler`}),` — `,(0,_.jsx)(`code`,{className:`text-cyan-400`,children:`const ctx = c as any`}),` at the top, then use `,(0,_.jsx)(`code`,{className:`text-cyan-400`,children:`ctx`}),` throughout.`]})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`Use requireEnv for critical values`}),` — Fail fast on missing config.`]})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`Use VITE_ or BINI_ for client vars`}),` — Both are accessible via `,(0,_.jsx)(`code`,{className:`text-cyan-400`,children:`import.meta.env`}),`.`]})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`No prefix for secrets`}),` — Read via `,(0,_.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(ctx, key)`}),` in API routes only.`]})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,_.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{className:`text-white`,children:`Never expose secrets in responses`}),` — Use environment variables for configuration, not for returning to the client.`]})]})]})]}),(0,_.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,_.jsxs)(n,{to:`/docs/static-export`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,_.jsx)(s,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,_.jsx)(`div`,{className:`text-sm font-medium`,children:`Static Export`})]})]}),(0,_.jsxs)(n,{to:`/docs/deploying`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,_.jsx)(`div`,{className:`text-sm font-medium`,children:`Deploying`})]}),(0,_.jsx)(c,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{x as default};