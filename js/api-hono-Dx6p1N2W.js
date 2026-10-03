import{y as e}from"./index-Dgi3RKfu.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-B_wXdtYg.js";import{l}from"./DocVisuals-Bw6ywo7S.js";var u=e(),d=[{id:`file-based-routing`,label:`File-Based API Routing`},{id:`basic-hono-app`,label:`Basic Hono App`},{id:`routing-with-hono`,label:`Routing with Hono`},{id:`dynamic-api-routes`,label:`Dynamic API Routes`},{id:`middleware`,label:`Middleware`},{id:`request-handling`,label:`Request Handling`},{id:`response-handling`,label:`Response Handling`},{id:`validation`,label:`Validation`},{id:`environment-variables`,label:`Environment Variables`},{id:`error-handling`,label:`Error Handling`},{id:`nested-routes`,label:`Nested Routes`},{id:`when-to-use-hono`,label:`When to Use Hono`}];function f({ext:e}){return(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,dot:!0,url:`/api/hello`},{n:`users.${e}`,d:2,fn:!0,dot:!0,url:`/api/users`},{n:`posts`,d:2},{n:`[id].${e}`,d:3,fn:!0,dot:!0,url:`/api/posts/:id`},{n:`[...catch].${e}`,d:2,fn:!0,dot:!0,url:`/api/*`}]})}function p(){let e=t()===`js`?`js`:`ts`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`file-based-routing`,title:`File-Based API Routing`,children:[(0,u.jsxs)(n,{children:[`Hono is a fast, lightweight web framework that works everywhere. Bini.js integrates Hono with `,(0,u.jsx)(`strong`,{children:`file-based API routing`}),` - your file structure defines your API routes.`]}),(0,u.jsxs)(c,{children:[`Hono is the `,(0,u.jsx)(`strong`,{children:`recommended`}),` approach for complex APIs in Bini.js. It provides routing, middleware, validation, and strong TypeScript support - all with zero-config file-based routing.`]}),(0,u.jsxs)(n,{children:[`Your API route is determined by the `,(0,u.jsx)(o,{children:`file path`}),` inside `,(0,u.jsx)(o,{children:`src/app/api/`}),`. The file name becomes the route segment:`]}),(0,u.jsx)(f,{ext:e}),(0,u.jsx)(r,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.${e}`,`/api/hello`],[`src/app/api/user.${e}`,`/api/user`],[`src/app/api/posts.${e}`,`/api/posts`],[`src/app/api/posts/[id].${e}`,`/api/posts/:id`],[`src/app/api/[...catch].${e}`,`/api/*`]]}),(0,u.jsxs)(c,{children:[`There are `,(0,u.jsx)(`strong`,{children:`no root / API routes`}),`. Every API file maps to a named route based on its filename. Write your Hono routes `,(0,u.jsx)(`strong`,{children:`without`}),` the `,(0,u.jsx)(o,{children:`/api`}),` prefix - bini-router strips it in dev/preview and mounts the app under `,(0,u.jsx)(o,{children:`/api`}),` in production.`]})]}),(0,u.jsxs)(a,{id:`basic-hono-app`,title:`Basic Hono App`,children:[(0,u.jsxs)(n,{children:[`Create a Hono app in `,(0,u.jsx)(o,{children:`src/app/api/`}),` and default export it:`]}),(0,u.jsx)(i,{filename:`src/app/api/hello.${e}`,tsCode:`// src/app/api/hello.ts -> /api/hello
import { Hono } from 'hono'

const app = new Hono()

app.all('/hello', (c) => {
  return c.json({
    message: 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method: c.req.method,
  })
})

export default app`,jsCode:`// src/app/api/hello.js -> /api/hello
import { Hono } from 'hono'

const app = new Hono()

app.all('/hello', (c) => {
  return c.json({
    message: 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method: c.req.method,
  })
})

export default app`})]}),(0,u.jsxs)(a,{id:`routing-with-hono`,title:`Routing with Hono`,children:[(0,u.jsx)(n,{children:`Hono provides a powerful routing system with path parameters, query parameters, and more:`}),(0,u.jsx)(i,{filename:`src/app/api/users.${e}`,tsCode:`// src/app/api/users.ts -> /api/users
import { Hono } from 'hono'

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

export default app`,jsCode:`// src/app/api/users.js -> /api/users
import { Hono } from 'hono'

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

export default app`}),(0,u.jsx)(r,{headers:[`Method`,`Route Pattern`,`Full URL`],rows:[[`GET`,`/users`,`/api/users`],[`GET`,`/users/:id`,`/api/users/123`],[`POST`,`/users`,`/api/users`],[`PUT`,`/users/:id`,`/api/users/123`],[`DELETE`,`/users/:id`,`/api/users/123`]]})]}),(0,u.jsxs)(a,{id:`dynamic-api-routes`,title:`Dynamic API Routes`,children:[(0,u.jsxs)(n,{children:[`Use `,(0,u.jsx)(o,{children:`[param]`}),` in filenames for dynamic segments:`]}),(0,u.jsx)(i,{filename:`src/app/api/posts/[id].${e}`,tsCode:`// src/app/api/posts/[id].ts -> /api/posts/:id
import { Hono } from 'hono'

const app = new Hono()
app.get('/posts/:id', (c) => c.json({ id: c.req.param('id') }))
export default app`,jsCode:`// src/app/api/posts/[id].js -> /api/posts/:id
import { Hono } from 'hono'

const app = new Hono()
app.get('/posts/:id', (c) => c.json({ id: c.req.param('id') }))
export default app`}),(0,u.jsx)(i,{filename:`src/app/api/[...catch].${e}`,tsCode:`// src/app/api/[...catch].ts -> /api/*
import { Hono } from 'hono'

const app = new Hono()
app.all('*', (c) => c.json({ path: c.req.path }))
export default app`,jsCode:`// src/app/api/[...catch].js -> /api/*
import { Hono } from 'hono'

const app = new Hono()
app.all('*', (c) => c.json({ path: c.req.path }))
export default app`})]}),(0,u.jsxs)(a,{id:`middleware`,title:`Middleware`,children:[(0,u.jsx)(n,{children:`Hono has built-in middleware for common tasks:`}),(0,u.jsx)(i,{filename:`src/app/api/secure.${e}`,tsCode:`// src/app/api/secure.ts -> /api/secure
import { Hono } from 'hono'
import { cors, logger, jwt, timeout } from 'hono/middleware'

const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.use('*', timeout(5000))

app.get('/secure', (c) => c.json({ message: 'Public' }))

export default app`,jsCode:`// src/app/api/secure.js -> /api/secure
import { Hono } from 'hono'
import { cors, logger, jwt, timeout } from 'hono/middleware'

const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.use('*', timeout(5000))

app.get('/secure', (c) => c.json({ message: 'Public' }))

export default app`}),(0,u.jsx)(r,{headers:[`Middleware`,`Purpose`],rows:[[`cors`,`Cross-Origin Resource Sharing`],[`logger`,`Request logging`],[`jwt`,`JWT authentication`],[`timeout`,`Request timeout`],[`prettyJSON`,`Pretty JSON responses`]]})]}),(0,u.jsxs)(a,{id:`request-handling`,title:`Request Handling`,children:[(0,u.jsx)(n,{children:`Hono provides convenient methods for accessing request data:`}),(0,u.jsx)(i,{filename:`src/app/api/echo.${e}`,tsCode:`// src/app/api/echo.ts -> /api/echo
import { Hono } from 'hono'

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

export default app`,jsCode:`// src/app/api/echo.js -> /api/echo
import { Hono } from 'hono'

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

export default app`})]}),(0,u.jsxs)(a,{id:`response-handling`,title:`Response Handling`,children:[(0,u.jsx)(n,{children:`Hono provides flexible response methods:`}),(0,u.jsx)(i,{filename:`src/app/api/responses.${e}`,tsCode:`// src/app/api/responses.ts -> /api/responses
import { Hono } from 'hono'

const app = new Hono()

app.get('/json', (c) => c.json({ message: 'Hello' }))
app.get('/text', (c) => c.text('Hello Text'))
app.get('/html', (c) => c.html('<h1>Hello</h1>'))
app.get('/redirect', (c) => c.redirect('https://example.com', 302))
app.post('/created', (c) => c.json({ message: 'Created' }, 201))
app.get('/error', (c) => c.json({ error: 'Error' }, 500))

export default app`,jsCode:`// src/app/api/responses.js -> /api/responses
import { Hono } from 'hono'

const app = new Hono()

app.get('/json', (c) => c.json({ message: 'Hello' }))
app.get('/text', (c) => c.text('Hello Text'))
app.get('/html', (c) => c.html('<h1>Hello</h1>'))
app.get('/redirect', (c) => c.redirect('https://example.com', 302))
app.post('/created', (c) => c.json({ message: 'Created' }, 201))
app.get('/error', (c) => c.json({ error: 'Error' }, 500))

export default app`})]}),(0,u.jsxs)(a,{id:`validation`,title:`Validation`,children:[(0,u.jsx)(n,{children:`Validate incoming requests with Zod:`}),(0,u.jsx)(i,{filename:`src/app/api/posts.${e}`,tsCode:`// src/app/api/posts.ts -> /api/posts
import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const postSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
})

app.post('/posts', zValidator('json', postSchema), async (c) => {
  const body = c.req.valid('json')
  return c.json({ post: { id: Date.now(), ...body } }, 201)
})

export default app`,jsCode:`// src/app/api/posts.js -> /api/posts
import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const postSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
})

app.post('/posts', zValidator('json', postSchema), async (c) => {
  const body = c.req.valid('json')
  return c.json({ post: { id: Date.now(), ...body } }, 201)
})

export default app`}),(0,u.jsxs)(c,{children:[`Install `,(0,u.jsx)(o,{children:`zod`}),` and `,(0,u.jsx)(o,{children:`@hono/zod-validator`}),` for request validation with TypeScript inference.`]})]}),(0,u.jsxs)(a,{id:`environment-variables`,title:`Environment Variables`,children:[(0,u.jsxs)(n,{children:[`Use `,(0,u.jsx)(o,{children:`getEnv()`}),` and `,(0,u.jsx)(o,{children:`requireEnv()`}),` from `,(0,u.jsx)(o,{children:`bini-env`}),`:`]}),(0,u.jsx)(i,{filename:`src/app/api/config.${e}`,tsCode:`// src/app/api/config.ts -> /api/config
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any
  const apiKey = requireEnv(ctx, 'MY_API_KEY')
  const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js'

  return c.json({ appName, hasApiKey: !!apiKey })
})

export default app`,jsCode:`// src/app/api/config.js -> /api/config
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c
  const apiKey = requireEnv(ctx, 'MY_API_KEY')
  const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js'

  return c.json({ appName, hasApiKey: !!apiKey })
})

export default app`}),(0,u.jsxs)(c,{children:[`Cast `,(0,u.jsx)(o,{children:`c`}),` once at the top of your handler with `,(0,u.jsx)(o,{children:`const ctx = c as any`}),`. Then use`,` `,(0,u.jsx)(o,{children:`requireEnv(ctx, 'KEY')`}),` for required vars and `,(0,u.jsx)(o,{children:`getEnv(ctx, 'KEY') ?? 'default'`}),` `,`for optional ones.`]})]}),(0,u.jsxs)(a,{id:`error-handling`,title:`Error Handling`,children:[(0,u.jsx)(n,{children:`Handle errors gracefully with Hono's error handling:`}),(0,u.jsx)(i,{filename:`src/app/api/robust.${e}`,tsCode:`// src/app/api/robust.ts -> /api/robust
import { Hono } from 'hono'
import { getEnv } from 'bini-env'

const app = new Hono()

app.onError((err, c) => {
  const isDev = getEnv(c as any, 'NODE_ENV') === 'development'
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

export default app`,jsCode:`// src/app/api/robust.js -> /api/robust
import { Hono } from 'hono'
import { getEnv } from 'bini-env'

const app = new Hono()

app.onError((err, c) => {
  const isDev = getEnv(c, 'NODE_ENV') === 'development'
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

export default app`})]}),(0,u.jsxs)(a,{id:`nested-routes`,title:`Nested Routes`,children:[(0,u.jsx)(n,{children:`Organize complex APIs with nested sub-routers:`}),(0,u.jsx)(i,{filename:`src/app/api/index.${e}`,tsCode:`// src/app/api/index.ts -> /api
import { Hono } from 'hono'

const app = new Hono()

const users = new Hono()
  .get('/users', (c) => c.json({ users: [] }))
  .get('/users/:id', (c) => c.json({ id: c.req.param('id') }))

const posts = new Hono()
  .get('/posts', (c) => c.json({ posts: [] }))
  .get('/posts/:id', (c) => c.json({ id: c.req.param('id') }))

app.route('/', users)
app.route('/', posts)

export default app`,jsCode:`// src/app/api/index.js -> /api
import { Hono } from 'hono'

const app = new Hono()

const users = new Hono()
  .get('/users', (c) => c.json({ users: [] }))
  .get('/users/:id', (c) => c.json({ id: c.req.param('id') }))

const posts = new Hono()
  .get('/posts', (c) => c.json({ posts: [] }))
  .get('/posts/:id', (c) => c.json({ id: c.req.param('id') }))

app.route('/', users)
app.route('/', posts)

export default app`})]}),(0,u.jsx)(a,{id:`when-to-use-hono`,title:`When to Use Hono`,children:(0,u.jsx)(r,{headers:[`Scenario`,`Recommendation`],rows:[[`Multiple endpoints in one file`,`Hono - Recommended`],[`Need middleware (CORS, auth, logging)`,`Hono - Recommended`],[`Complex routing patterns`,`Hono - Recommended`],[`Production APIs with many routes`,`Hono - Recommended`],[`Single endpoint with simple logic`,`Plain handler`],[`Quick prototypes`,`Plain handler`]]})})]})}function m(){return(0,u.jsx)(s,{title:`Hono Integration`,description:`Build powerful APIs with Hono in Bini.js - file-based routing, middleware, and type safety.`,url:`https://bini.js.org/docs/api-hono`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-hono.tsx`,toc:d,prev:{to:`/docs/api-plain`,title:`Plain Function Handlers`},next:{to:`/docs/api-dynamic`,title:`Dynamic API Routes`},children:(0,u.jsx)(p,{})})}export{m as default};