import{c as e,i as t,n,t as r}from"./index-D7FaEZaw.js";import{n as i,v as a}from"./Layout-LrmNWyF1.js";import{t as o}from"./arrow-left-8HD57GyO.js";import{t as s}from"./arrow-right-DIZirI2P.js";import{t as c}from"./DocSidebar-Rg6aSpzC.js";import{t as l}from"./info-DtQYJHWt.js";import{t as u}from"./lightbulb-DvRw9JHl.js";import{t as d}from"./triangle-alert-f4ARLmGm.js";var f=e(t(),1),p=r();function m({code:e,filename:t}){let[n,r]=f.useState(!1);return(0,p.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,p.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,p.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,p.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,p.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,p.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function h({headers:e,rows:t}){return(0,p.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,p.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,p.jsx)(`tr`,{children:e.map((e,t)=>(0,p.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,p.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,p.jsx)(`tr`,{children:e.map((e,t)=>(0,p.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function g({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:l},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:d},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:u}}[e],r=n.icon;return(0,p.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,p.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,p.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,p.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function _(){return(0,p.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,p.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,p.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,p.jsx)(i,{}),(0,p.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,p.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,p.jsx)(c,{children:(0,p.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,p.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,p.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`API Routes`}),(0,p.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to create backend API endpoints in Bini.js using plain functions or Hono.`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,p.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Bini.js allows you to create API endpoints directly in your project. Place files in `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/api/`}),` and they automatically become API routes at `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api/*`}),`. The filename maps directly to the route — `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`hello.ts`}),` becomes `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),`, `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`users.ts`}),` becomes `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api/users`}),`, and so on.`]}),(0,p.jsxs)(g,{type:`warning`,children:[(0,p.jsx)(`strong`,{children:`Important:`}),` Every API route file `,(0,p.jsx)(`strong`,{children:`must`}),` have a `,(0,p.jsx)(`code`,{children:`default`}),` export. Bini.js uses the default export to handle requests. Named exports will `,(0,p.jsx)(`strong`,{children:`not`}),` work.`]})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Structure`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The filename (without extension) becomes the last segment of the URL path under `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api/`}),`:`]}),(0,p.jsx)(m,{code:`src/app/
├── api/
│   ├── hello.ts           → /api/hello
│   ├── users.ts           → /api/users
│   ├── posts/
│   │   ├── index.ts       → /api/posts
│   │   └── [id].ts        → /api/posts/:id
│   └── [...catch].ts      → /api/* (catch-all)
├── layout.tsx
└── page.tsx`}),(0,p.jsxs)(g,{type:`info`,children:[`There is no root `,(0,p.jsx)(`code`,{children:`/api`}),` route. Every API file maps to a named path — use `,(0,p.jsx)(`code`,{children:`posts/index.ts`}),` if you need a route at `,(0,p.jsx)(`code`,{children:`/api/posts`}),`.`]})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Plain Function Handler`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`The simplest way to create an API route is to default export a handler function that checks the HTTP method:`}),(0,p.jsx)(m,{code:`// src/app/api/hello.ts → /api/hello
export default function handler(request: Request) {
  // Handle GET requests
  if (request.method === 'GET') {
    return Response.json({ message: 'Hello World' })
  }
  
  // Handle POST requests
  if (request.method === 'POST') {
    return Response.json({ message: 'Created' }, { status: 201 })
  }
  
  // Handle PUT requests
  if (request.method === 'PUT') {
    return Response.json({ message: 'Updated' })
  }
  
  // Handle DELETE requests
  if (request.method === 'DELETE') {
    return Response.json({ message: 'Deleted' })
  }
  
  // Method not allowed
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,filename:`src/app/api/hello.ts → /api/hello`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`The handler receives the native `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`Request`}),` object. Check `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`request.method`}),` to handle different HTTP verbs.`]}),(0,p.jsx)(g,{type:`tip`,children:`For APIs with multiple endpoints or complex logic, Hono is recommended over plain functions.`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Hono Integration (Recommended)`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`For more complex APIs, use Hono. Create a Hono app and default export it. Write routes `,(0,p.jsx)(`strong`,{className:`text-white`,children:`without`}),` the `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api`}),` prefix — bini-router strips it before your handler sees the request, and re-mounts it automatically in production.`]}),(0,p.jsx)(m,{code:`// src/app/api/users.ts → /api/users
import { Hono } from 'hono'

const app = new Hono()

// handles GET /api/users
app.get('/users', (c) => {
  return c.json({ users: ['alice', 'bob', 'charlie'] })
})

// handles POST /api/users
app.post('/users', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, { status: 201 })
})

// handles GET /api/users/:id
app.get('/users/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, name: \`User \${id}\` })
})

// handles PUT /api/users/:id
app.put('/users/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  return c.json({ id, ...body })
})

// handles DELETE /api/users/:id
app.delete('/users/:id', (c) => {
  return c.json({ message: \`Deleted user \${c.req.param('id')}\` })
})

export default app`,filename:`src/app/api/users.ts → /api/users`}),(0,p.jsx)(g,{type:`info`,children:`Hono is the recommended approach for complex APIs. It provides routing, middleware, validation, and better TypeScript support.`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Hono Middleware`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides built-in middleware for common tasks:`}),(0,p.jsx)(m,{code:`// src/app/api/secure.ts → /api/secure
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { timeout } from 'hono/timeout'

const app = new Hono()

// Global middleware (applies to all routes in this file)
app.use('*', cors())
app.use('*', logger())
app.use('*', prettyJSON())
app.use('*', timeout(5000))

// Public route
app.get('/secure', (c) => c.json({ message: 'Public endpoint' }))

// Additional routes
app.get('/secure/dashboard', (c) => {
  return c.json({ message: 'Dashboard' })
})

export default app`,filename:`src/app/api/secure.ts → /api/secure`}),(0,p.jsx)(h,{headers:[`Middleware`,`Purpose`],rows:[[`cors`,`Cross-Origin Resource Sharing`],[`logger`,`Request logging`],[`jwt`,`JWT authentication`],[`prettyJSON`,`Pretty JSON responses`],[`cache`,`Response caching`],[`compress`,`Response compression`],[`timeout`,`Request timeout`],[`etag`,`ETag support`]]})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic API Routes`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use square brackets for dynamic segments, just like page routes:`}),(0,p.jsx)(m,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, title: \`Post \${id}\` })
})

app.put('/posts/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  return c.json({ id, ...body })
})

app.delete('/posts/:id', (c) => {
  return c.json({ message: \`Deleted post \${c.req.param('id')}\` })
})

export default app`,filename:`src/app/api/posts/[id].ts → /api/posts/:id`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`For plain function handlers with dynamic routes, parameters are passed via the `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`x-bini-params`}),` header:`]}),(0,p.jsx)(m,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
export default function handler(request: Request) {
  // Dynamic params are passed in this header
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id
  
  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }
  
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,filename:`src/app/api/posts/[id].ts → /api/posts/:id`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all API Routes`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[...catch]`}),` to handle all unmatched API routes:`]}),(0,p.jsx)(m,{code:`// src/app/api/[...catch].ts → /api/* (catch-all)
export default function handler(request: Request) {
  const url = new URL(request.url)
  
  return Response.json({
    error: 'Not Found',
    path: url.pathname,
    method: request.method,
  }, { status: 404 })
}`,filename:`src/app/api/[...catch].ts → /api/*`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Variables`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`API routes use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(c, key)`}),` and `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv(c, key)`}),` from `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`bini-env`}),`. Both read directly from the Hono request context via `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`hono/adapter`}),` — this means they work correctly across every runtime (Node, Bun, Cloudflare Workers, Vercel Edge, Netlify Edge, Deno) without any code changes.`]}),(0,p.jsxs)(g,{type:`info`,children:[`Always pass `,(0,p.jsx)(`code`,{children:`c`}),` explicitly. Cast it once at the top of the handler as `,(0,p.jsx)(`code`,{children:`const ctx = c as any`}),`, then use `,(0,p.jsx)(`code`,{children:`ctx`}),` throughout. There are no `,(0,p.jsx)(`code`,{children:`process.env`}),` fallbacks — every read is request-scoped and resolved by Hono's adapter for the current platform.`]}),(0,p.jsx)(m,{code:`// src/app/api/email.ts → /api/email
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const ctx = c as any

    // requireEnv throws immediately if the var is missing — fail fast on required config
    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpUser = requireEnv(ctx, 'SMTP_USER')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

    // getEnv returns undefined if missing — use ?? for defaults
    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const { to, subject, text } = await c.req.json()
    await transporter.sendMail({ from: fromEmail, to, subject, text })

    return c.json({ success: true })

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`,filename:`src/app/api/email.ts → /api/email`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`The pattern in three steps:`}),(0,p.jsx)(m,{code:`const ctx = c as any              // cast once, at the top of the handler
requireEnv(ctx, 'KEY')            // for vars the handler cannot run without — throws if missing
getEnv(ctx, 'KEY') ?? 'default'   // for optional vars with sensible defaults`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`On failure, the terminal will show:`}),(0,p.jsx)(m,{code:`[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-8 mb-3`,children:`Choosing the right prefix`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`bini-env supports three categories of variables. The prefix determines where the variable is accessible:`}),(0,p.jsx)(h,{headers:[`Prefix`,`Exposed to browser`,`Use for`],rows:[[`BINI_`,`Yes (via import.meta.env)`,`Public client config`],[`VITE_`,`Yes (via import.meta.env)`,`Public client config (Vite standard)`],[`No prefix`,`No`,`Secrets — server only, read via getEnv(ctx, key)`]]}),(0,p.jsx)(m,{code:`# .env

# ✓ use BINI_ or VITE_ for anything the browser needs
BINI_PUBLIC_API_URL=https://api.example.com
VITE_APP_NAME=My App

# ✓ no prefix for secrets — read via getEnv(ctx, key) in API routes only
DATABASE_URL=postgres://...
SMTP_HOST=smtp.example.com
SMTP_USER=user@example.com
SMTP_PASS=your_password
FROM_EMAIL=App <noreply@example.com>`}),(0,p.jsxs)(g,{type:`warning`,children:[`Never put secrets in `,(0,p.jsx)(`code`,{children:`BINI_*`}),` or `,(0,p.jsx)(`code`,{children:`VITE_*`}),` variables — both are bundled into client JavaScript and publicly visible. Use un-prefixed variables for secrets and read them with `,(0,p.jsx)(`code`,{children:`getEnv(ctx, key)`}),` inside API route handlers only.`]}),(0,p.jsxs)(g,{type:`tip`,children:[(0,p.jsx)(`strong`,{children:`Production note:`}),` `,(0,p.jsx)(`code`,{children:`.env`}),` files are only loaded by Vite during local development. In production, set your variables in your hosting platform's environment dashboard (Vercel, Netlify, Cloudflare, etc.). `,(0,p.jsx)(`code`,{children:`getEnv`}),` and `,(0,p.jsx)(`code`,{children:`requireEnv`}),` read from the correct source on every platform automatically — your handler code never changes.`]})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Request & Response`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`API routes use standard Web APIs for requests and responses:`}),(0,p.jsx)(m,{code:`// Reading request data
export default async function handler(request: Request) {
  // Parse JSON body
  const json = await request.json()
  
  // Parse form data
  const formData = await request.formData()
  
  // Read headers
  const auth = request.headers.get('Authorization')
  
  // Read query parameters
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')
  
  // Return JSON response
  return Response.json({ data: json, page })
}

// Setting response headers
export default function handler() {
  return new Response('Hello', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=3600',
    },
  })
}`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CORS`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`CORS is enabled by default for all API routes. You can customize or disable it:`}),(0,p.jsx)(m,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    biniroute({
      cors: true,  // Default: true
    }),
  ],
})`,filename:`vite.config.ts`}),(0,p.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`With Hono, you can also configure CORS per route:`}),(0,p.jsx)(m,{code:`import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Global CORS
app.use('*', cors({
  origin: 'https://myapp.com',
  allowMethods: ['GET', 'POST'],
}))

// Specific CORS for a route
app.get('/public', cors(), (c) => c.text('Public endpoint'))

export default app`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Deployment`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`API routes work across all deployment platforms:`}),(0,p.jsx)(h,{headers:[`Platform`,`Runtime`,`Notes`],rows:[[`Node.js`,`Node.js`,`Runs via bini-server`],[`Netlify`,`Deno (Edge)`,`Uses Deno CDN imports`],[`Vercel`,`Edge`,`Edge runtime`],[`Cloudflare`,`Workers`,`Worker runtime`],[`Deno`,`Deno`,`Native Deno runtime`]]}),(0,p.jsx)(g,{type:`info`,children:`The same API code runs unchanged across all platforms. Bini.js automatically generates the appropriate entry files during build.`})]}),(0,p.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Best Practices`}),(0,p.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Always use default export`}),` — Every API file must have a default export.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Filename = route segment`}),` — `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`hello.ts`}),` maps to `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),`. There is no root `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`/api`}),` route.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use Hono for complex APIs`}),` — It provides better structure and middleware.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsxs)(`strong`,{className:`text-white`,children:[`Cast `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`c`}),` once per handler`]}),` — Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`const ctx = c as any`}),` at the top, then pass `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`ctx`}),` to `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv`}),` / `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv`}),`.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Validate input`}),` — Always validate request data before processing.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Handle errors gracefully`}),` — Return appropriate status codes and error messages.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Keep secrets secure`}),` — `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`BINI_*`}),` and `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`VITE_*`}),` variables are bundled into client JS. Use un-prefixed variables for sensitive data and read them only via `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(ctx, key)`}),` inside API route handlers.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use Web APIs`}),` — Stick to standard Request/Response for maximum compatibility.`]})]})]})]}),(0,p.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,p.jsxs)(n,{to:`/docs/loading`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`Loading UI`})]})]}),(0,p.jsxs)(n,{to:`/docs/api-plain`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`Plain Function Handlers`})]}),(0,p.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{_ as default};