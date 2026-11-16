import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-CgTYcQET.js";import{l as u}from"./DocVisuals-B7hV1VEN.js";var d=e(),f=[{id:`file-based-routing`,label:`File-Based API Routing`},{id:`basic-hono-app`,label:`Basic Hono App`},{id:`routing-with-hono`,label:`Routing with Hono`},{id:`middleware`,label:`Middleware`},{id:`request-handling`,label:`Request Handling`},{id:`validation`,label:`Validation`},{id:`environment-variables`,label:`Environment Variables`},{id:`error-handling`,label:`Error Handling`},{id:`when-to-use-hono`,label:`When to Use Hono`}];function p({ext:e}){return(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,dot:!0,url:`/api/hello`},{n:`users.${e}`,d:2,fn:!0,dot:!0,url:`/api/users`},{n:`posts`,d:2},{n:`[id].${e}`,d:3,fn:!0,dot:!0,url:`/api/posts/:id`},{n:`[...catch].${e}`,d:2,fn:!0,dot:!0,url:`/api/*`}]})}function m(){let e=l()===`js`?`js`:`ts`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`file-based-routing`,title:`File-Based API Routing`,children:[(0,d.jsxs)(a,{children:[`Hono is a fast, lightweight web framework that works everywhere. Bini.js integrates Hono with `,(0,d.jsx)(`strong`,{children:`file-based API routing`}),` - your file structure defines your API routes, and Hono routes are written `,(0,d.jsx)(`strong`,{children:`without the /api prefix`}),`.`]}),(0,d.jsxs)(c,{children:[`Hono is the `,(0,d.jsx)(`strong`,{children:`recommended`}),` approach for complex APIs in Bini.js. It provides routing, middleware, validation, and strong TypeScript support - all with zero-config file-based routing.`]}),(0,d.jsxs)(a,{children:[`Your API route is determined by the `,(0,d.jsx)(o,{children:`file path`}),` inside `,(0,d.jsx)(o,{children:`src/app/api/`}),`. The file name becomes the route segment:`]}),(0,d.jsx)(p,{ext:e}),(0,d.jsx)(r,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.${e}`,`/api/hello`],[`src/app/api/users.${e}`,`/api/users`],[`src/app/api/posts/index.${e}`,`/api/posts`],[`src/app/api/posts/[id].${e}`,`/api/posts/:id`],[`src/app/api/[...catch].${e}`,`/api/*`]]}),(0,d.jsxs)(c,{children:[`There are `,(0,d.jsx)(`strong`,{children:`no root / API routes`}),`. Every API file maps to a named route based on its filename. Write your Hono routes `,(0,d.jsx)(`strong`,{children:`without`}),` the `,(0,d.jsx)(o,{children:`/api`}),` prefix - the framework strips it in dev/preview and mounts the app under `,(0,d.jsx)(o,{children:`/api`}),` in production.`]})]}),(0,d.jsxs)(i,{id:`basic-hono-app`,title:`Basic Hono App`,children:[(0,d.jsxs)(a,{children:[`Create a Hono app in `,(0,d.jsx)(o,{children:`src/app/api/`}),` and default export it. Because the API layer strips `,(0,d.jsx)(o,{children:`/api`}),`, the route you define for `,(0,d.jsx)(o,{children:`/api/hello`}),` is `,(0,d.jsx)(o,{children:`/hello`}),`.`]}),(0,d.jsx)(s,{filename:`src/app/api/hello.${e}`,tsCode:`import { Hono } from 'hono'

const app = new Hono()

app.all('/hello', (c) => {
  return c.json({
    message: 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method: c.req.method,
  })
})

export default app`,jsCode:`import { Hono } from 'hono'

const app = new Hono()

app.all('/hello', (c) => {
  return c.json({
    message: 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method: c.req.method,
  })
})

export default app`})]}),(0,d.jsxs)(i,{id:`routing-with-hono`,title:`Routing with Hono`,children:[(0,d.jsxs)(a,{children:[`Hono provides a powerful routing system with path parameters, query parameters, and more. Routes are written with the `,(0,d.jsx)(o,{children:`/api`}),` prefix stripped.`]}),(0,d.jsx)(s,{filename:`src/app/api/users.${e}`,tsCode:`import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => c.json({ users: ['alice', 'bob'] }))
app.get('/users/:id', (c) => c.json({ id: c.req.param('id') }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))
app.put('/users/:id', async (c) =>
  c.json({ id: c.req.param('id'), ...(await c.req.json()) })
)
app.delete('/users/:id', (c) =>
  c.json({ message: \`Deleted \${c.req.param('id')}\` })
)

export default app`,jsCode:`import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => c.json({ users: ['alice', 'bob'] }))
app.get('/users/:id', (c) => c.json({ id: c.req.param('id') }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))
app.put('/users/:id', async (c) =>
  c.json({ id: c.req.param('id'), ...(await c.req.json()) })
)
app.delete('/users/:id', (c) =>
  c.json({ message: \`Deleted \${c.req.param('id')}\` })
)

export default app`}),(0,d.jsx)(r,{headers:[`Method`,`Route Pattern`,`Full URL`],rows:[[`GET`,`/users`,`/api/users`],[`GET`,`/users/:id`,`/api/users/123`],[`POST`,`/users`,`/api/users`],[`PUT`,`/users/:id`,`/api/users/123`],[`DELETE`,`/users/:id`,`/api/users/123`]]})]}),(0,d.jsxs)(i,{id:`middleware`,title:`Middleware`,children:[(0,d.jsx)(a,{children:`Hono has built-in middleware for common tasks. Import from the subpath:`}),(0,d.jsx)(s,{filename:`src/app/api/secure.${e}`,tsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { timeout } from 'hono/timeout'

const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.use('*', timeout(5000))

app.get('/secure', (c) => c.json({ message: 'Public' }))

export default app`,jsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { timeout } from 'hono/timeout'

const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.use('*', timeout(5000))

app.get('/secure', (c) => c.json({ message: 'Public' }))

export default app`}),(0,d.jsx)(r,{headers:[`Middleware`,`Import`,`Purpose`],rows:[[`cors`,`hono/cors`,`Cross-Origin Resource Sharing`],[`logger`,`hono/logger`,`Request logging`],[`timeout`,`hono/timeout`,`Request timeout`],[`secure-headers`,`hono/secure-headers`,`CSP and security headers`],[`pretty-json`,`hono/pretty-json`,`Pretty JSON responses`]]})]}),(0,d.jsxs)(i,{id:`request-handling`,title:`Request Handling`,children:[(0,d.jsx)(a,{children:`Hono provides convenient methods for accessing request data:`}),(0,d.jsx)(s,{filename:`src/app/api/echo.${e}`,tsCode:`import { Hono } from 'hono'

const app = new Hono()

app.all('/echo', async (c) => {
  const params = c.req.param()
  const query = c.req.query()
  const page = c.req.query('page')
  const userAgent = c.req.header('User-Agent')
  const body = await c.req.json().catch(() => null)

  return c.json({
    method: c.req.method,
    path: c.req.path,
    params,
    query: { page, ...query },
    headers: { userAgent },
    body,
  })
})

export default app`,jsCode:`import { Hono } from 'hono'

const app = new Hono()

app.all('/echo', async (c) => {
  const params = c.req.param()
  const query = c.req.query()
  const page = c.req.query('page')
  const userAgent = c.req.header('User-Agent')
  const body = await c.req.json().catch(() => null)

  return c.json({
    method: c.req.method,
    path: c.req.path,
    params,
    query: { page, ...query },
    headers: { userAgent },
    body,
  })
})

export default app`})]}),(0,d.jsxs)(i,{id:`validation`,title:`Validation`,children:[(0,d.jsx)(a,{children:`Validate incoming requests with Zod:`}),(0,d.jsx)(s,{filename:`src/app/api/posts.${e}`,tsCode:`import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const app = new Hono()

const postSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
})

app.post('/posts', zValidator('json', postSchema), async (c) => {
  const body = c.req.valid('json')
  return c.json({ post: { id: Date.now(), ...body } }, 201)
})

export default app`,jsCode:`import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const app = new Hono()

const postSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
})

app.post('/posts', zValidator('json', postSchema), async (c) => {
  const body = c.req.valid('json')
  return c.json({ post: { id: Date.now(), ...body } }, 201)
})

export default app`}),(0,d.jsxs)(c,{children:[`Install `,(0,d.jsx)(o,{children:`zod`}),` and `,(0,d.jsx)(o,{children:`@hono/zod-validator`}),` for request validation with TypeScript inference.`]})]}),(0,d.jsxs)(i,{id:`environment-variables`,title:`Environment Variables`,children:[(0,d.jsxs)(a,{children:[`Hono passes environment variables through the `,(0,d.jsx)(o,{children:`c.env`}),` object. Access them directly in your handlers:`]}),(0,d.jsx)(s,{filename:`src/app/api/config.${e}`,tsCode:`import { Hono } from 'hono'

const app = new Hono()

app.get('/config', (c) => {
  const apiKey = c.env.MY_API_KEY
  const appName = c.env.APP_NAME ?? 'Bini.js'

  if (!apiKey) {
    return c.json({ error: 'Missing MY_API_KEY' }, 500)
  }

  return c.json({ appName, hasApiKey: !!apiKey })
})

export default app`,jsCode:`import { Hono } from 'hono'

const app = new Hono()

app.get('/config', (c) => {
  const apiKey = c.env.MY_API_KEY
  const appName = c.env.APP_NAME ?? 'Bini.js'

  if (!apiKey) {
    return c.json({ error: 'Missing MY_API_KEY' }, 500)
  }

  return c.json({ appName, hasApiKey: !!apiKey })
})

export default app`}),(0,d.jsxs)(c,{children:[`On Cloudflare, secrets set via `,(0,d.jsx)(o,{children:`wrangler secret put`}),` are read from `,(0,d.jsx)(o,{children:`c.env`}),`. On Node, `,(0,d.jsx)(o,{children:`c.env`}),` is backed by `,(0,d.jsx)(o,{children:`process.env`}),`.`]})]}),(0,d.jsxs)(i,{id:`error-handling`,title:`Error Handling`,children:[(0,d.jsx)(a,{children:`Handle errors gracefully with Hono's error handling:`}),(0,d.jsx)(s,{filename:`src/app/api/robust.${e}`,tsCode:`import { Hono } from 'hono'

const app = new Hono()

app.onError((err, c) => {
  const isDev = c.env.NODE_ENV === 'development'
  return c.json(
    {
      error: 'Internal Server Error',
      ...(isDev && { details: err.message }),
    },
    500
  )
})

app.notFound((c) => c.json({ error: 'Not Found' }, 404))

app.get('/robust/users/:id', (c) => {
  const id = c.req.param('id')
  if (id === 'admin') {
    return c.json({ error: 'Access denied' }, 403)
  }
  return c.json({ id, name: 'John' })
})

export default app`,jsCode:`import { Hono } from 'hono'

const app = new Hono()

app.onError((err, c) => {
  const isDev = c.env.NODE_ENV === 'development'
  return c.json(
    {
      error: 'Internal Server Error',
      ...(isDev && { details: err.message }),
    },
    500
  )
})

app.notFound((c) => c.json({ error: 'Not Found' }, 404))

app.get('/robust/users/:id', (c) => {
  const id = c.req.param('id')
  if (id === 'admin') {
    return c.json({ error: 'Access denied' }, 403)
  }
  return c.json({ id, name: 'John' })
})

export default app`})]}),(0,d.jsxs)(i,{id:`when-to-use-hono`,title:`When to Use Hono`,children:[(0,d.jsx)(r,{headers:[`Scenario`,`Recommendation`],rows:[[`Multiple endpoints in one file`,`Hono - Recommended`],[`Need middleware (CORS, auth, logging)`,`Hono - Recommended`],[`Complex routing patterns`,`Hono - Recommended`],[`Production APIs with many routes`,`Hono - Recommended`],[`Single endpoint with simple logic`,`Plain handler`],[`Quick prototypes`,`Plain handler`]]}),(0,d.jsx)(c,{children:`Use Hono for middleware and complex routing. Use a plain handler for a single endpoint. See the Plain Function Handlers page for per-method exports.`})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes Overview`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Files under app/api/ map to /api/*.`})]}),(0,d.jsxs)(t,{to:`/docs/api-plain`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Plain Function Handlers`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Backend endpoints with plain Request/Response handlers.`})]}),(0,d.jsxs)(t,{to:`/docs/api-dynamic`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic API Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Path parameters and catch-all segments.`})]}),(0,d.jsxs)(t,{to:`/docs/environment-variables`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Environment Variables`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Read secrets with c.env in your API routes.`})]}),(0,d.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno.`})]}),(0,d.jsxs)(t,{to:`/docs/loaders`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loaders`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fetch data before a route renders.`})]})]})]})}function h(){return(0,d.jsx)(n,{title:`Hono Integration`,description:`Build powerful APIs with Hono in Bini.js - file-based routing, middleware, and type safety.`,url:`https://bini.js.org/docs/api-hono`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-hono.tsx`,toc:f,prev:{to:`/docs/api-plain`,title:`Plain Function Handlers`},next:{to:`/docs/api-dynamic`,title:`Dynamic API Routes`},children:(0,d.jsx)(m,{})})}export{h as default};