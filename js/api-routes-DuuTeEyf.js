import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,f as r,g as i,h as a,m as o,n as s,o as c,r as l,u,v as d,y as f}from"./DocBlocks-CgTYcQET.js";import{l as p}from"./DocVisuals-B7hV1VEN.js";var m=e(),h=[{id:`overview`,label:`Overview`},{id:`file-structure`,label:`File Structure`},{id:`handler-styles`,label:`Handler Styles`},{id:`request-context`,label:`Request Context`},{id:`dynamic-routes`,label:`Dynamic Routes`},{id:`environment-variables`,label:`Environment Variables`},{id:`cors`,label:`CORS`},{id:`deployment`,label:`Deployment`}],g=[`npm`,`pnpm`,`yarn`,`bun`],_=(e,t,n=!0)=>e===`npm`?`npm run ${t}`:e===`bun`&&n?`bun run ${t}`:`${e} ${t}`,v=e=>g.map(t=>({id:t,label:t,command:e(t)}));function y(){let e=d();f();let n=e===`js`?`js`:`ts`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,m.jsxs)(o,{children:[`Place `,(0,m.jsx)(s,{children:`.ts`}),` or `,(0,m.jsx)(s,{children:`.js`}),` files in `,(0,m.jsx)(s,{children:`src/app/api/`}),` and they become routes at`,` `,(0,m.jsx)(s,{children:`/api/*`}),`. Every handler receives a standard Web `,(0,m.jsx)(s,{children:`Request`}),` and a context object.`]}),(0,m.jsx)(i,{headers:[`File`,`Route`],rows:[[`src/app/api/hello.${n}`,`/api/hello`],[`src/app/api/users.${n}`,`/api/users`],[`src/app/api/posts/index.${n}`,`/api/posts`],[`src/app/api/posts/[id].${n}`,`/api/posts/:id`],[`src/app/api/[...catch].${n}`,`/api/*`]]}),(0,m.jsx)(l,{children:`Static routes match before dynamic ones, and dynamic ones before catch-alls.`})]}),(0,m.jsxs)(a,{id:`file-structure`,title:`File Structure`,children:[(0,m.jsxs)(o,{children:[`The filename becomes the last path segment under `,(0,m.jsx)(s,{children:`/api/`}),`. Use`,` `,(0,m.jsx)(s,{children:`index.ts`}),` inside a folder for the parent path. API files are marked with the`,` `,(0,m.jsx)(s,{children:`ƒ`}),` icon.`]}),(0,m.jsx)(p,{fileWidth:260,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${n}`,d:2,fn:!0,url:`/api/hello`,dot:!0},{n:`users.${n}`,d:2,fn:!0,url:`/api/users`},{n:`posts`,d:2},{n:`index.${n}`,d:3,fn:!0,url:`/api/posts`},{n:`[id].${n}`,d:3,fn:!0,url:`/api/posts/:id`},{n:`[...catch].${n}`,d:2,fn:!0,url:`/api/*`}]}),(0,m.jsxs)(l,{children:[`Files and folders starting with `,(0,m.jsx)(s,{children:`_`}),` or `,(0,m.jsx)(s,{children:`.`}),` are ignored.`]})]}),(0,m.jsxs)(a,{id:`handler-styles`,title:`Handler Styles`,children:[(0,m.jsxs)(o,{children:[`Three handler styles are supported. All receive a Web `,(0,m.jsx)(s,{children:`Request`}),` and return a `,(0,m.jsx)(s,{children:`Response`}),`.`]}),(0,m.jsx)(u,{className:`mt-6 mb-3`,children:`1. Plain function`}),(0,m.jsx)(c,{filename:`src/app/api/hello.${n}`,tsCode:`export default function handler(request: Request) {
  return Response.json({ message: 'Hello' })
}`,jsCode:`export default function handler(request) {
  return Response.json({ message: 'Hello' })
}`}),(0,m.jsx)(u,{className:`mt-6 mb-3`,children:`2. Per-method exports`}),(0,m.jsxs)(o,{children:[`Export `,(0,m.jsx)(s,{children:`GET`}),`, `,(0,m.jsx)(s,{children:`POST`}),`, `,(0,m.jsx)(s,{children:`PUT`}),`, `,(0,m.jsx)(s,{children:`PATCH`}),`, `,(0,m.jsx)(s,{children:`DELETE`}),`, `,(0,m.jsx)(s,{children:`HEAD`}),`, or`,` `,(0,m.jsx)(s,{children:`OPTIONS`}),`. Other methods receive 405 with an `,(0,m.jsx)(s,{children:`Allow`}),` header, and `,(0,m.jsx)(s,{children:`HEAD`}),` `,`falls back to `,(0,m.jsx)(s,{children:`GET`}),`.`]}),(0,m.jsx)(c,{filename:`src/app/api/users.${n}`,tsCode:`export function GET(request: Request, { params }: { params: Record<string, string> }) {
  return Response.json({ users: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  return Response.json({ created: body }, { status: 201 })
}`,jsCode:`export function GET(request, { params }) {
  return Response.json({ users: [] })
}

export async function POST(request) {
  const body = await request.json()
  return Response.json({ created: body }, { status: 201 })
}`}),(0,m.jsx)(u,{className:`mt-6 mb-3`,children:`3. Hono app`}),(0,m.jsxs)(o,{children:[`A default export with a `,(0,m.jsx)(s,{children:`.fetch()`}),` method - such as a Hono instance - is mounted under `,(0,m.jsx)(s,{children:`/api`}),`. Write Hono routes `,(0,m.jsx)(`strong`,{children:`without`}),` the `,(0,m.jsx)(s,{children:`/api`}),` prefix.`]}),(0,m.jsx)(c,{filename:`src/app/api/users.${n}`,tsCode:`import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, 201)
})

export default app`,jsCode:`import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, 201)
})

export default app`}),(0,m.jsx)(l,{children:`If a file exports both method handlers and a default export, method handlers take precedence for the methods they define.`})]}),(0,m.jsxs)(a,{id:`request-context`,title:`Request Context`,children:[(0,m.jsx)(o,{children:`Every handler receives a context object with these fields.`}),(0,m.jsx)(i,{headers:[`Field`,`Type`,`Description`],rows:[[`params`,`object`,`Dynamic route params (e.g. { id: "123" })`],[`searchParams`,`URLSearchParams`,`Query string parameters`],[`env`,`any`,`Runtime env bindings (or process.env on Node)`],[`waitUntil?`,`function`,`Extends the request lifetime for background work`]]}),(0,m.jsx)(c,{filename:`src/app/api/users/[id].${n}`,tsCode:`export function GET(
  request: Request,
  { params, searchParams }: { params: { id: string }; searchParams: URLSearchParams }
) {
  const format = searchParams.get('format') ?? 'json'
  return Response.json({ id: params.id, format })
}`,jsCode:`export function GET(request, { params, searchParams }) {
  const format = searchParams.get('format') ?? 'json'
  return Response.json({ id: params.id, format })
}`})]}),(0,m.jsxs)(a,{id:`dynamic-routes`,title:`Dynamic Routes`,children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(s,{children:`[id]`}),` folders or files create dynamic segments. `,(0,m.jsx)(s,{children:`[...catch]`}),` matches the remaining segments. Catch-all values are available under `,(0,m.jsx)(s,{children:`params['*']`}),` and under the folder name.`]}),(0,m.jsx)(c,{filename:`src/app/api/posts/[...slug].${n}`,tsCode:`export function GET(
  request: Request,
  { params }: { params: { '*': string; slug?: string } }
) {
  const path = params['*']
  return Response.json({ path, segments: path.split('/') })
}`,jsCode:`export function GET(request, { params }) {
  const path = params['*']
  return Response.json({ path, segments: path.split('/') })
}`})]}),(0,m.jsxs)(a,{id:`environment-variables`,title:`Environment Variables`,children:[(0,m.jsxs)(o,{children:[`Access environment variables directly from the `,(0,m.jsx)(s,{children:`env`}),` object in the request context. This ensures your code works across all deployment platforms.`]}),(0,m.jsx)(c,{filename:`src/app/api/email.${n}`,tsCode:`export function POST(request: Request, { env }: { env: Record<string, string | undefined> }) {
  const smtpHost = env.SMTP_HOST
  const smtpPort = parseInt(env.SMTP_PORT ?? '587', 10)
  
  if (!smtpHost) {
    return Response.json({ error: 'Missing SMTP_HOST' }, { status: 500 })
  }

  return Response.json({ host: smtpHost, port: smtpPort })
}`,jsCode:`export function POST(request, { env }) {
  const smtpHost = env.SMTP_HOST
  const smtpPort = parseInt(env.SMTP_PORT ?? '587', 10)
  
  if (!smtpHost) {
    return Response.json({ error: 'Missing SMTP_HOST' }, { status: 500 })
  }

  return Response.json({ host: smtpHost, port: smtpPort })
}`}),(0,m.jsxs)(l,{children:[`On Node, `,(0,m.jsx)(s,{children:`env`}),` is backed by `,(0,m.jsx)(s,{children:`process.env`}),`. On edge platforms, it reads the runtime bindings.`]})]}),(0,m.jsxs)(a,{id:`cors`,title:`CORS`,children:[(0,m.jsx)(o,{children:`CORS is off by default. Enable it at the router level with an explicit origin allowlist, or handle it per-route with Hono middleware.`}),(0,m.jsx)(c,{filename:`vite.config.${n}`,tsCode:`import { defineConfig } from 'vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    biniroute({
      cors: {
        origin: ['https://myapp.com', 'https://app.myapp.com'],
        methods: ['GET', 'POST'],
        headers: ['Authorization', 'Content-Type'],
      },
    }),
  ],
})`,jsCode:`import { defineConfig } from 'vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    biniroute({
      cors: {
        origin: ['https://myapp.com', 'https://app.myapp.com'],
        methods: ['GET', 'POST'],
        headers: ['Authorization', 'Content-Type'],
      },
    }),
  ],
})`}),(0,m.jsxs)(l,{children:[`Use an explicit `,(0,m.jsx)(s,{children:`origin`}),` list in production. Setting `,(0,m.jsx)(s,{children:`cors: true`}),` allows any origin.`]})]}),(0,m.jsxs)(a,{id:`deployment`,title:`Deployment`,children:[(0,m.jsx)(o,{children:`API routes work across platforms. The deploy tool generates the platform entry files for non-Node hosts.`}),(0,m.jsx)(r,{tabs:v(e=>`$ ${_(e,`deploy`)}`)}),(0,m.jsx)(i,{headers:[`Platform`,`Entry`],rows:[[`Node.js`,`The production server reads dist/api/index.mjs directly`],[`Netlify`,`netlify/functions/api.mjs`],[`Vercel`,`api/index.ts`],[`Cloudflare`,`worker.ts`],[`Deno`,`server/index.ts`]]})]}),(0,m.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,m.jsxs)(t,{to:`/docs/api-plain`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Plain Function Handlers`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Backend endpoints with plain Request/Response handlers.`})]}),(0,m.jsxs)(t,{to:`/docs/api-hono`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Hono Integration`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Build API routes with the Hono framework.`})]}),(0,m.jsxs)(t,{to:`/docs/api-dynamic`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic API Routes`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Path parameters and catch-all segments.`})]}),(0,m.jsxs)(t,{to:`/docs/environment-variables`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Environment Variables`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Read secrets in your API routes.`})]}),(0,m.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno.`})]}),(0,m.jsxs)(t,{to:`/docs/loaders`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,m.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loaders`}),(0,m.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fetch data before a route renders.`})]})]})]})}function b(){return(0,m.jsx)(n,{title:`API Routes Overview`,description:`Backend endpoints with plain Request handlers or Hono. Files under app/api/ map to /api/*.`,url:`https://bini.js.org/docs/api-routes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-routes.tsx`,toc:h,prev:{to:`/docs/icons`,title:`Icons & Favicons`},next:{to:`/docs/api-plain`,title:`Plain Function Handlers`},children:(0,m.jsx)(y,{})})}export{b as default};