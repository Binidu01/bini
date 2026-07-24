import{c as e,i as t,n,t as r}from"./index-Bx83dxZQ.js";import{n as i,v as a}from"./Layout-6e12aAZV.js";import{t as o}from"./arrow-left-BAAoUNau.js";import{t as s}from"./arrow-right-DZxneu7S.js";import{t as c}from"./DocSidebar-BVEtJ2mr.js";import{t as l}from"./circle-check-big-BU0tpULK.js";import{t as u}from"./circle-x-DkHrnzwS.js";import{t as d}from"./info-BH-fxTuK.js";import{t as f}from"./lightbulb-Dr4BihXF.js";import{t as p}from"./triangle-alert-DGYU_KpJ.js";var m=e(t(),1),h=r();function g({code:e,filename:t}){let[n,r]=m.useState(!1);return(0,h.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,h.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,h.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,h.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,h.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,h.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function _({headers:e,rows:t}){return(0,h.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,h.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,h.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,h.jsx)(`tr`,{children:e.map((e,t)=>(0,h.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,h.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,h.jsx)(`tr`,{children:e.map((e,t)=>(0,h.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function v({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:d},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:p},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:f}}[e],r=n.icon;return(0,h.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,h.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,h.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,h.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function y(){return(0,h.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,h.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,h.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,h.jsx)(i,{}),(0,h.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,h.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,h.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,h.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Hono Integration`}),(0,h.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to build powerful APIs with Hono in Bini.js — file-based routing, middleware, and type safety.`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,h.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Hono is a fast, lightweight web framework that works everywhere. Bini.js integrates Hono seamlessly with `,(0,h.jsx)(`strong`,{children:`file-based API routing`}),` — your file structure defines your API routes.`]}),(0,h.jsxs)(v,{type:`info`,children:[`Hono is the `,(0,h.jsx)(`strong`,{children:`recommended`}),` approach for complex APIs in Bini.js. It provides routing, middleware, validation, and excellent TypeScript support — all with zero-config file-based routing.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File-Based API Routing`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Your API route is determined by the `,(0,h.jsx)(`strong`,{children:`file path`}),` inside `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/api/`}),`. The file name becomes the route segment:`]}),(0,h.jsx)(_,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.ts`,`/api/hello`],[`src/app/api/user.ts`,`/api/user`],[`src/app/api/posts.ts`,`/api/posts`],[`src/app/api/posts/[id].ts`,`/api/posts/:id`],[`src/app/api/[...catch].ts`,`/api/* (catch-all)`]]}),(0,h.jsxs)(v,{type:`info`,children:[`There are `,(0,h.jsx)(`strong`,{children:`no root / API routes`}),`. Every API file maps to a named route based on its filename. A file at `,(0,h.jsx)(`code`,{children:`src/app/api/hello.ts`}),` is served at `,(0,h.jsx)(`code`,{children:`/api/hello`}),`. Write your Hono routes `,(0,h.jsx)(`strong`,{children:`without`}),` the `,(0,h.jsx)(`code`,{children:`/api`}),` prefix — bini-router strips it in dev/preview and mounts the app under `,(0,h.jsx)(`code`,{children:`/api`}),` in production.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Hono App`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a Hono app in `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/api/`}),` and default export it:`]}),(0,h.jsx)(g,{code:`// src/app/api/hello.ts → /api/hello
import { Hono } from 'hono'

const app = new Hono()

app.all('/hello', (c) => {
  return c.json({
    message  : 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method   : c.req.method,
  })
})

export default app`,filename:`src/app/api/hello.ts → /api/hello`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This handler is reachable at `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),` in every environment — `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`vite dev`}),`, `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`vite preview`}),`, and all production platforms — without any changes.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Routing with Hono`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides a powerful routing system with path parameters, query parameters, and more:`}),(0,h.jsx)(g,{code:`// src/app/api/users.ts → /api/users
import { Hono } from 'hono'

const app = new Hono()

// GET /api/users — list all users
app.get('/users', (c) => {
  return c.json({ users: ['alice', 'bob', 'charlie'] })
})

// GET /api/users/:id — get a specific user
app.get('/users/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, name: \`User \${id}\` })
})

// POST /api/users — create a new user
app.post('/users', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, { status: 201 })
})

// PUT /api/users/:id — update a user
app.put('/users/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  return c.json({ id, ...body })
})

// DELETE /api/users/:id — delete a user
app.delete('/users/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ message: \`Deleted user \${id}\` })
})

export default app`,filename:`src/app/api/users.ts → /api/users`}),(0,h.jsx)(_,{headers:[`Method`,`Route Pattern`,`Full URL`],rows:[[`GET`,`/users`,`/api/users`],[`GET`,`/users/:id`,`/api/users/123`],[`POST`,`/users`,`/api/users`],[`PUT`,`/users/:id`,`/api/users/123`],[`DELETE`,`/users/:id`,`/api/users/123`]]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic API Routes`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`[param]`}),` in filenames for dynamic segments, or `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`[...catch]`}),` for catch-all routes:`]}),(0,h.jsx)(g,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:id', (c) => {
  return c.json({ id: c.req.param('id') })
})

export default app`,filename:`src/app/api/posts/[id].ts → /api/posts/:id`}),(0,h.jsx)(g,{code:`// src/app/api/[...catch].ts → /api/* (catch-all)
import { Hono } from 'hono'

const app = new Hono()

app.all('*', (c) => {
  return c.json({ 
    message: 'Catch-all route',
    path: c.req.path 
  })
})

export default app`,filename:`src/app/api/[...catch].ts → /api/*`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Middleware`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono has built-in middleware for common tasks. Apply them globally or to specific routes:`}),(0,h.jsx)(g,{code:`// src/app/api/secure.ts → /api/secure
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { jwt } from 'hono/jwt'
import { prettyJSON } from 'hono/pretty-json'
import { timeout } from 'hono/timeout'

const app = new Hono()

// Global middleware (applies to all routes in this file)
app.use('*', cors())
app.use('*', logger())
app.use('*', prettyJSON())
app.use('*', timeout(5000)) // 5 second timeout

// Route-specific middleware
app.use('/secure/admin/*', jwt({
  secret: 'your-jwt-secret'
}))

// Public routes
app.get('/secure', (c) => c.json({ message: 'Public endpoint' }))

// Protected routes (require JWT)
app.get('/secure/admin/dashboard', (c) => {
  return c.json({ message: 'Admin dashboard' })
})

app.get('/secure/admin/users', (c) => {
  return c.json({ users: [] })
})

export default app`,filename:`src/app/api/secure.ts → /api/secure`}),(0,h.jsx)(_,{headers:[`Middleware`,`Purpose`],rows:[[`cors`,`Cross-Origin Resource Sharing`],[`logger`,`Request logging with timing`],[`jwt`,`JWT authentication`],[`prettyJSON`,`Pretty-print JSON responses`],[`timeout`,`Request timeout handling`],[`cache`,`Response caching`],[`compress`,`Response compression`],[`etag`,`ETag support for caching`],[`csrf`,`CSRF protection`],[`basicAuth`,`HTTP Basic authentication`],[`bearerAuth`,`Bearer token authentication`]]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Request Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides convenient methods for accessing request data:`}),(0,h.jsx)(g,{code:`// src/app/api/echo.ts → /api/echo
import { Hono } from 'hono'

const app = new Hono()

app.all('/echo', async (c) => {
  // Path parameters
  const params = c.req.param()
  
  // Query parameters
  const query = c.req.query()
  const page = c.req.query('page')
  
  // Headers
  const userAgent = c.req.header('User-Agent')
  const auth = c.req.header('Authorization')
  
  // Parse body (JSON, form, text)
  const body = await c.req.parseBody()
  const json = await c.req.json().catch(() => null)
  
  // Request info
  const method = c.req.method
  const url = c.req.url
  const path = c.req.path
  
  // Cookies
  const sessionId = c.req.cookie('sessionId')
  
  return c.json({
    method,
    url,
    path,
    params,
    query: { page, ...query },
    headers: { userAgent, auth },
    body: json || body,
    cookies: { sessionId },
  })
})

export default app`,filename:`src/app/api/echo.ts → /api/echo`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Response Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides flexible response methods:`}),(0,h.jsx)(g,{code:`// src/app/api/responses.ts → /api/responses
import { Hono } from 'hono'

const app = new Hono()

// JSON response
app.get('/responses/json', (c) => {
  return c.json({ message: 'Hello JSON' })
})

// JSON with status
app.post('/responses/created', (c) => {
  return c.json({ message: 'Resource created' }, 201)
})

// Text response
app.get('/responses/text', (c) => {
  return c.text('Hello Text')
})

// HTML response
app.get('/responses/html', (c) => {
  return c.html('<h1>Hello HTML</h1>')
})

// Redirect
app.get('/responses/redirect', (c) => {
  return c.redirect('https://example.com', 302)
})

// Custom response
app.get('/responses/custom', (c) => {
  return new Response('Custom response', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'X-Custom-Header': 'value',
    },
  })
})

// Set cookies
app.get('/responses/set-cookie', (c) => {
  c.cookie('sessionId', 'abc123', {
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  })
  return c.json({ message: 'Cookie set' })
})

// Set headers
app.get('/responses/headers', (c) => {
  c.header('Cache-Control', 'max-age=3600')
  c.header('X-Custom', 'value')
  return c.json({ message: 'Headers set' })
})

// Error response
app.get('/responses/error', (c) => {
  return c.json({ error: 'Something went wrong' }, 500)
})

export default app`,filename:`src/app/api/responses.ts → /api/responses`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Validation`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Validate incoming requests with Zod or other validation libraries:`}),(0,h.jsx)(g,{code:`// src/app/api/posts.ts → /api/posts
import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

// Validation schema
const postSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
  published: z.boolean().optional().default(false),
})

// Route with validation
app.post('/posts', zValidator('json', postSchema), async (c) => {
  const body = c.req.valid('json')
  
  // body is fully typed and validated
  return c.json({ 
    message: 'Post created',
    post: {
      id: Date.now(),
      ...body,
    }
  }, 201)
})

// Validation with custom error handling
app.post('/posts/custom', zValidator('json', postSchema, (result, c) => {
  if (!result.success) {
    return c.json({
      error: 'Validation failed',
      issues: result.error.issues,
    }, 400)
  }
}), async (c) => {
  const body = c.req.valid('json')
  return c.json({ post: body }, 201)
})

export default app`,filename:`src/app/api/posts.ts → /api/posts`}),(0,h.jsxs)(v,{type:`tip`,children:[`Install `,(0,h.jsx)(`code`,{children:`zod`}),` and `,(0,h.jsx)(`code`,{children:`@hono/zod-validator`}),` for powerful request validation with TypeScript inference.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Variables`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv()`}),` and `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv()`}),` from `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`bini-env`}),` — both are auto-imported in API routes:`]}),(0,h.jsx)(g,{code:`// src/app/api/config.ts → /api/config
import { Hono } from 'hono'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any

  // requireEnv throws if the var is missing — fail fast on required config
  const apiKey  = requireEnv(ctx, 'MY_API_KEY')

  // getEnv returns undefined if missing — use ?? to provide a default
  const appName = getEnv(ctx, 'APP_NAME')     ?? 'Bini.js'
  const debug   = getEnv(ctx, 'DEBUG_MODE')  === 'true'

  // Never expose secrets in responses
  return c.json({
    appName,
    debug,
    hasApiKey: !!apiKey,
  })
})

export default app`,filename:`src/app/api/config.ts → /api/config`}),(0,h.jsxs)(v,{type:`info`,children:[(0,h.jsx)(`strong`,{children:`Usage pattern:`}),` Cast `,(0,h.jsx)(`code`,{children:`c`}),` once at the top of your handler with `,(0,h.jsx)(`code`,{children:`const ctx = c as any`}),`. Then use `,(0,h.jsx)(`code`,{children:`requireEnv(ctx, 'KEY')`}),` for required vars and `,(0,h.jsx)(`code`,{children:`getEnv(ctx, 'KEY') ?? 'default'`}),` for optional ones.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Handle errors gracefully with Hono's error handling:`}),(0,h.jsx)(g,{code:`// src/app/api/robust.ts → /api/robust
import { Hono } from 'hono'

const app = new Hono()

// Custom error class
class ApiError extends Error {
  constructor(
    message: string,
    public status: number = 500,
    public code?: string
  ) {
    super(message)
  }
}

// Global error handler
app.onError((err, c) => {
  console.error('API Error:', err)
  
  if (err instanceof ApiError) {
    return c.json({
      error: err.message,
      code: err.code,
    }, err.status)
  }
  
  // Don't leak error details in production
  const isDev = getEnv(c as any, 'NODE_ENV') === 'development'
  
  return c.json({
    error: 'Internal Server Error',
    ...(isDev && { details: err.message }),
  }, 500)
})

// 404 handler
app.notFound((c) => {
  return c.json({
    error: 'Not Found',
    path: c.req.path,
  }, 404)
})

// Example route that throws an error
app.get('/robust/users/:id', async (c) => {
  const id = c.req.param('id')
  
  if (id === 'admin') {
    throw new ApiError('Access denied', 403, 'FORBIDDEN')
  }
  
  const user = await findUser(id)
  
  if (!user) {
    throw new ApiError('User not found', 404, 'NOT_FOUND')
  }
  
  return c.json(user)
})

async function findUser(id: string) {
  // Simulate database lookup
  return id === '123' ? { id, name: 'John' } : null
}

export default app`,filename:`src/app/api/robust.ts → /api/robust`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Routes with route()`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Organize complex APIs with nested sub-routers using Hono's `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`route()`}),` method:`]}),(0,h.jsx)(g,{code:`// src/app/api/index.ts → /api
import { Hono } from 'hono'

const app = new Hono()

// Mount sub-routers
const users = new Hono()
  .get('/users', (c) => c.json({ users: [] }))
  .get('/users/:id', (c) => c.json({ id: c.req.param('id') }))
  .post('/users', async (c) => c.json({ created: await c.req.json() }, 201))

const posts = new Hono()
  .get('/posts', (c) => c.json({ posts: [] }))
  .get('/posts/:id', (c) => c.json({ id: c.req.param('id') }))
  .post('/posts', async (c) => c.json({ created: await c.req.json() }, 201))

// Mount all sub-routers
app.route('/', users)
app.route('/', posts)

export default app`,filename:`src/app/api/index.ts → /api`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`When to Use Hono`}),(0,h.jsx)(_,{headers:[`Scenario`,`Recommendation`],rows:[[`Multiple endpoints in one file`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Need middleware (CORS, auth, logging)`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Complex routing patterns`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Production APIs with many routes`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Single endpoint with simple logic`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Plain handler`]})],[`Quick prototypes`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Plain handler`]})]]})]}),(0,h.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.75},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,h.jsxs)(n,{to:`/docs/api-plain`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,h.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,h.jsx)(`div`,{className:`text-sm font-medium`,children:`Plain Function Handlers`})]})]}),(0,h.jsxs)(n,{to:`/docs/api-dynamic`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,h.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic API Routes`})]}),(0,h.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{y as default};