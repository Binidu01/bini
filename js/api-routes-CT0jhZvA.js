import{a as e,i as t,n,t as r}from"./index-BRu3C3lb.js";import{n as i,v as a}from"./Layout-B9n9CsLO.js";import{t as o}from"./arrow-left-L0hbJ7yr.js";import{t as s}from"./arrow-right-CElS-BBZ.js";import{t as c}from"./DocSidebar-B-RtJtz0.js";import{n as l,t as u}from"./TableOfContents-BdTAqMst.js";var d=e(t(),1),f=r(),p=[{id:`file-structure`,label:`File Structure`},{id:`plain-function-handler`,label:`Plain Function Handler`},{id:`hono-integration`,label:`Hono Integration`},{id:`hono-middleware`,label:`Hono Middleware`},{id:`dynamic-api-routes`,label:`Dynamic API Routes`},{id:`catch-all-api-routes`,label:`Catch-all API Routes`},{id:`environment-variables`,label:`Environment Variables`},{id:`request-response`,label:`Request & Response`},{id:`cors`,label:`CORS`},{id:`deployment`,label:`Deployment`}],m=`API Routes Overview`,h=`https://bini.js.org/docs/api-routes`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/api-routes.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to create backend API endpoints in Bini.js using plain functions or Hono.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,f.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Bini.js allows you to create API endpoints directly in your project. Place files in `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/api/`}),` and they automatically become API routes at `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/api/*`}),`. The filename maps directly to the route — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`hello.ts`}),` becomes `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`users.ts`}),` becomes `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/api/users`}),`.`]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Important:`}),` Every API route file `,(0,f.jsx)(`strong`,{children:`must`}),` have a `,(0,f.jsx)(`code`,{children:`default`}),` export. Bini.js uses the default export to handle requests. Named exports will `,(0,f.jsx)(`strong`,{children:`not`}),` work.`]})]}),(0,f.jsxs)(a.section,{id:`file-structure`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Structure`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The filename (without extension) becomes the last segment of the URL path under `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/api/`}),`:`]}),(0,f.jsx)(_,{code:`src/app/
├── api/
│   ├── hello.ts           → /api/hello
│   ├── users.ts           → /api/users
│   ├── posts/
│   │   ├── index.ts       → /api/posts
│   │   └── [id].ts        → /api/posts/:id
│   └── [...catch].ts      → /api/* (catch-all)
├── layout.tsx
└── page.tsx`}),(0,f.jsxs)(y,{children:[`There is no root `,(0,f.jsx)(`code`,{children:`/api`}),` route. Every API file maps to a named path — use `,(0,f.jsx)(`code`,{children:`posts/index.ts`}),` if you need a route at `,(0,f.jsx)(`code`,{children:`/api/posts`}),`.`]})]}),(0,f.jsxs)(a.section,{id:`plain-function-handler`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Plain Function Handler`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`The simplest way to create an API route is to default export a handler function that checks the HTTP method:`}),(0,f.jsx)(_,{code:`// src/app/api/hello.ts → /api/hello
export default function handler(request: Request) {
  if (request.method === 'GET') {
    return Response.json({ message: 'Hello World' })
  }
  if (request.method === 'POST') {
    return Response.json({ message: 'Created' }, { status: 201 })
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,filename:`src/app/api/hello.ts`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`The handler receives the native `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`Request`}),` object. Check `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`request.method`}),` to handle different HTTP verbs.`]}),(0,f.jsx)(y,{children:`For APIs with multiple endpoints or complex logic, Hono is recommended over plain functions.`})]}),(0,f.jsxs)(a.section,{id:`hono-integration`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Hono Integration`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`For more complex APIs, use Hono. Create a Hono app and default export it. Write routes `,(0,f.jsx)(`strong`,{className:`text-white`,children:`without`}),` the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/api`}),` prefix — bini-router strips it before your handler sees the request.`]}),(0,f.jsx)(_,{code:`// src/app/api/users.ts → /api/users
import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => {
  return c.json({ users: ['alice', 'bob', 'charlie'] })
})

app.post('/users', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, { status: 201 })
})

app.get('/users/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, name: \`User \${id}\` })
})

export default app`,filename:`src/app/api/users.ts`}),(0,f.jsx)(y,{children:`Hono is the recommended approach for complex APIs. It provides routing, middleware, validation, and better TypeScript support.`})]}),(0,f.jsxs)(a.section,{id:`hono-middleware`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Hono Middleware`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides built-in middleware for common tasks:`}),(0,f.jsx)(_,{code:`// src/app/api/secure.ts → /api/secure
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', cors())
app.use('*', logger())

app.get('/secure', (c) => c.json({ message: 'Public endpoint' }))

export default app`,filename:`src/app/api/secure.ts`}),(0,f.jsx)(v,{headers:[`Middleware`,`Purpose`],rows:[[`cors`,`Cross-Origin Resource Sharing`],[`logger`,`Request logging`],[`jwt`,`JWT authentication`],[`prettyJSON`,`Pretty JSON responses`],[`timeout`,`Request timeout`]]})]}),(0,f.jsxs)(a.section,{id:`dynamic-api-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic API Routes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use square brackets for dynamic segments, just like page routes:`}),(0,f.jsx)(_,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, title: \`Post \${id}\` })
})

export default app`,filename:`src/app/api/posts/[id].ts`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`For plain function handlers with dynamic routes, parameters are passed via the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`x-bini-params`}),` header:`]}),(0,f.jsx)(_,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
export default function handler(request: Request) {
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id
  
  return Response.json({ id, title: \`Post \${id}\` })
}`,filename:`src/app/api/posts/[id].ts`})]}),(0,f.jsxs)(a.section,{id:`catch-all-api-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all API Routes`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...catch]`}),` to handle all unmatched API routes:`]}),(0,f.jsx)(_,{code:`// src/app/api/[...catch].ts → /api/*
export default function handler(request: Request) {
  const url = new URL(request.url)
  return Response.json({
    error: 'Not Found',
    path: url.pathname,
    method: request.method,
  }, { status: 404 })
}`,filename:`src/app/api/[...catch].ts`})]}),(0,f.jsxs)(a.section,{id:`environment-variables`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Variables`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`API routes use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(c, key)`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv(c, key)`}),` from `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`bini-env`}),`. Both read directly from the Hono request context — they work across every runtime without code changes.`]}),(0,f.jsxs)(y,{children:[`Always pass `,(0,f.jsx)(`code`,{children:`c`}),` explicitly. Cast it once at the top as `,(0,f.jsx)(`code`,{children:`const ctx = c as any`}),`, then use `,(0,f.jsx)(`code`,{children:`ctx`}),` throughout.`]}),(0,f.jsx)(_,{code:`// src/app/api/email.ts → /api/email
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email', async (c) => {
  const ctx = c as any
  
  const smtpHost = requireEnv(ctx, 'SMTP_HOST')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')
  const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')
  
  return c.json({ success: true })
})

export default app`,filename:`src/app/api/email.ts`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`The pattern in three steps:`}),(0,f.jsx)(_,{code:`const ctx = c as any              // cast once
requireEnv(ctx, 'KEY')            // throws if missing
getEnv(ctx, 'KEY') ?? 'default'   // optional with default`})]}),(0,f.jsxs)(a.section,{id:`request-response`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Request & Response`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`API routes use standard Web APIs for requests and responses:`}),(0,f.jsx)(_,{code:`export default async function handler(request: Request) {
  const json = await request.json()
  const auth = request.headers.get('Authorization')
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')
  
  return Response.json({ data: json, page })
}`})]}),(0,f.jsxs)(a.section,{id:`cors`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CORS`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`CORS is enabled by default for all API routes:`}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    biniroute({
      cors: true,  // Default: true
    }),
  ],
})`,filename:`vite.config.ts`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`With Hono, configure CORS per route:`}),(0,f.jsx)(_,{code:`import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('*', cors({ origin: 'https://myapp.com' }))
export default app`})]}),(0,f.jsxs)(a.section,{id:`deployment`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Deployment`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`API routes work across all deployment platforms. To deploy, run:`}),(0,f.jsx)(_,{code:`npm run deploy`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`This will prompt you to select your hosting platform:`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Node.js`}),` — Runs via bini-server`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Netlify`}),` — Edge Functions (Deno)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Vercel`}),` — Edge Runtime`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Cloudflare`}),` — Workers`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Deno`}),` — Deno Deploy`]})]}),(0,f.jsxs)(y,{children:[`Run `,(0,f.jsx)(`code`,{children:`npm run deploy`}),` and select your platform. bini-deploy will generate the appropriate entry files and configuration for your chosen platform.`]})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/icons`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Icons & Favicons`})]})]}),(0,f.jsxs)(n,{to:`/docs/api-plain`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Plain Function Handlers`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};