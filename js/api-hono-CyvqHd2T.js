import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";import{t as l}from"./circle-check-big-5MmUeNLW.js";import{t as u}from"./circle-x-lnM2Z0LA.js";import{t as d}from"./info-DwoDvoEv.js";import{t as f}from"./lightbulb-0h-vsbXQ.js";import{t as p}from"./triangle-alert-Dv6BP5n_.js";var m=t(e(),1),h=n();function g({code:e,filename:t}){let[n,r]=m.useState(!1);return(0,h.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,h.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,h.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,h.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,h.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,h.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function _({headers:e,rows:t}){return(0,h.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,h.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,h.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,h.jsx)(`tr`,{children:e.map((e,t)=>(0,h.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,h.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,h.jsx)(`tr`,{children:e.map((e,t)=>(0,h.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function v({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:d},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:p},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:f}}[e],r=n.icon;return(0,h.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,h.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,h.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,h.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function y(){return(0,h.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,h.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,h.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,h.jsx)(a,{}),(0,h.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,h.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,h.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,h.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Hono Integration`}),(0,h.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to build powerful APIs with Hono in Bini.js — routing, middleware, and type safety.`})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,h.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Hono is a fast, lightweight web framework that works everywhere. Bini.js integrates Hono seamlessly for building robust API routes with minimal boilerplate.`}),(0,h.jsxs)(v,{type:`info`,children:[`Hono is the `,(0,h.jsx)(`strong`,{children:`recommended`}),` approach for complex APIs in Bini.js. It provides routing, middleware, validation, and excellent TypeScript support.`]})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Hono App`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Create a Hono app and default export it:`}),(0,h.jsx)(g,{code:`// src/app/api/hello.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

app.post('/', async (c) => {
  const body = await c.req.json()
  return c.json({ received: body }, { status: 201 })
})

// MUST have a default export
export default app`,filename:`app/api/hello.ts`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates endpoints at `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),` that handle GET and POST requests.`]})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Routing with Hono`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides a powerful routing system with path parameters, query parameters, and more:`}),(0,h.jsx)(g,{code:`// src/app/api/users.ts
import { Hono } from 'hono'

const app = new Hono()

// GET /api/users - List all users
app.get('/', (c) => {
  return c.json({ users: ['alice', 'bob', 'charlie'] })
})

// GET /api/users/:id - Get a specific user
app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, name: \`User \${id}\` })
})

// POST /api/users - Create a new user
app.post('/', async (c) => {
  const body = await c.req.json()
  return c.json({ created: body }, { status: 201 })
})

// PUT /api/users/:id - Update a user
app.put('/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  return c.json({ id, ...body })
})

// DELETE /api/users/:id - Delete a user
app.delete('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ message: \`Deleted user \${id}\` })
})

export default app`,filename:`app/api/users.ts`}),(0,h.jsx)(_,{headers:[`Method`,`Route`,`Description`],rows:[[`GET`,`/`,`List all users`],[`GET`,`/:id`,`Get a specific user`],[`POST`,`/`,`Create a new user`],[`PUT`,`/:id`,`Update a user`],[`DELETE`,`/:id`,`Delete a user`]]})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Middleware`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono has built-in middleware for common tasks. Apply them globally or to specific routes:`}),(0,h.jsx)(g,{code:`// src/app/api/secure.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { jwt } from 'hono/jwt'
import { prettyJSON } from 'hono/pretty-json'
import { timeout } from 'hono/timeout'

const app = new Hono()

// Global middleware (applies to all routes)
app.use('*', cors())
app.use('*', logger())
app.use('*', prettyJSON())
app.use('*', timeout(5000)) // 5 second timeout

// Route-specific middleware
app.use('/admin/*', jwt({
  secret: process.env.JWT_SECRET!
}))

// Public routes
app.get('/', (c) => c.json({ message: 'Public endpoint' }))
app.get('/about', (c) => c.json({ message: 'About page' }))

// Protected routes (require JWT)
app.get('/admin/dashboard', (c) => {
  return c.json({ message: 'Admin dashboard' })
})

app.get('/admin/users', (c) => {
  return c.json({ users: [] })
})

export default app`,filename:`app/api/secure.ts`}),(0,h.jsx)(_,{headers:[`Middleware`,`Purpose`],rows:[[`cors`,`Cross-Origin Resource Sharing`],[`logger`,`Request logging with timing`],[`jwt`,`JWT authentication`],[`prettyJSON`,`Pretty-print JSON responses`],[`timeout`,`Request timeout handling`],[`cache`,`Response caching`],[`compress`,`Response compression`],[`etag`,`ETag support for caching`],[`csrf`,`CSRF protection`],[`basicAuth`,`HTTP Basic authentication`],[`bearerAuth`,`Bearer token authentication`]]})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Request Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides convenient methods for accessing request data:`}),(0,h.jsx)(g,{code:`// src/app/api/echo.ts
import { Hono } from 'hono'

const app = new Hono()

app.all('*', async (c) => {
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

export default app`,filename:`app/api/echo.ts`})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Response Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono provides flexible response methods:`}),(0,h.jsx)(g,{code:`// src/app/api/responses.ts
import { Hono } from 'hono'

const app = new Hono()

// JSON response
app.get('/json', (c) => {
  return c.json({ message: 'Hello JSON' })
})

// JSON with status
app.post('/created', (c) => {
  return c.json({ message: 'Resource created' }, 201)
})

// Text response
app.get('/text', (c) => {
  return c.text('Hello Text')
})

// HTML response
app.get('/html', (c) => {
  return c.html('<h1>Hello HTML</h1>')
})

// Redirect
app.get('/redirect', (c) => {
  return c.redirect('https://example.com', 302)
})

// Custom response
app.get('/custom', (c) => {
  return new Response('Custom response', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'X-Custom-Header': 'value',
    },
  })
})

// Set cookies
app.get('/set-cookie', (c) => {
  c.cookie('sessionId', 'abc123', {
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  })
  return c.json({ message: 'Cookie set' })
})

// Set headers
app.get('/headers', (c) => {
  c.header('Cache-Control', 'max-age=3600')
  c.header('X-Custom', 'value')
  return c.json({ message: 'Headers set' })
})

// Error response
app.get('/error', (c) => {
  return c.json({ error: 'Something went wrong' }, 500)
})

export default app`,filename:`app/api/responses.ts`})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Validation`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Validate incoming requests with Zod or other validation libraries:`}),(0,h.jsx)(g,{code:`// src/app/api/posts.ts
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
app.post('/', zValidator('json', postSchema), async (c) => {
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
app.post('/custom', zValidator('json', postSchema, (result, c) => {
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

export default app`,filename:`app/api/posts.ts`}),(0,h.jsxs)(v,{type:`tip`,children:[`Install `,(0,h.jsx)(`code`,{children:`zod`}),` and `,(0,h.jsx)(`code`,{children:`@hono/zod-validator`}),` for powerful request validation with TypeScript inference.`]})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Handle errors gracefully with Hono's error handling:`}),(0,h.jsx)(g,{code:`// src/app/api/robust.ts
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
  const isDev = process.env.NODE_ENV === 'development'
  
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
app.get('/users/:id', async (c) => {
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

export default app`,filename:`app/api/robust.ts`})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`RPC Client (Type Safety)`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Hono's RPC feature provides end-to-end type safety between client and server:`}),(0,h.jsx)(g,{code:`// src/app/api/rpc.ts
import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) => c.json({ message: 'Hello' }))
  .get('/users/:id', (c) => {
    const id = c.req.param('id')
    return c.json({ id, name: \`User \${id}\` })
  })
  .post('/users', async (c) => {
    const body = await c.req.json<{ name: string }>()
    return c.json({ created: body }, 201)
  })

// Export the type for client usage
export type AppType = typeof app

export default app`,filename:`app/api/rpc.ts`}),(0,h.jsx)(g,{code:`// Client-side usage (in your React components)
import { hc } from 'hono/client'
import type { AppType } from '@/app/api/rpc'

const client = hc<AppType>('/api')

// Fully typed API calls
const res = await client.users[':id'].$get({ param: { id: '123' } })
const data = await res.json() // { id: string, name: string }

const postRes = await client.users.$post({ json: { name: 'Alice' } })
const postData = await postRes.json() // { created: { name: string } }`,filename:`client.tsx`}),(0,h.jsxs)(v,{type:`tip`,children:[`Hono's RPC client (`,(0,h.jsx)(`code`,{children:`hc`}),`) provides full TypeScript autocompletion for your API routes, eliminating manual type definitions.`]})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Routes`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Organize complex APIs with nested routes using Hono's `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`route()`}),` method:`]}),(0,h.jsx)(g,{code:`// src/app/api/index.ts
import { Hono } from 'hono'

const app = new Hono()

// Mount sub-routers
const users = new Hono()
  .get('/', (c) => c.json({ users: [] }))
  .get('/:id', (c) => c.json({ id: c.req.param('id') }))
  .post('/', async (c) => c.json({ created: await c.req.json() }, 201))

const posts = new Hono()
  .get('/', (c) => c.json({ posts: [] }))
  .get('/:id', (c) => c.json({ id: c.req.param('id') }))
  .post('/', async (c) => c.json({ created: await c.req.json() }, 201))

const comments = new Hono()
  .get('/', (c) => c.json({ comments: [] }))
  .post('/', async (c) => c.json({ created: await c.req.json() }, 201))

// Mount all routes
app.route('/users', users)
app.route('/posts', posts)
app.route('/comments', comments)

export default app`,filename:`app/api/index.ts`})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Variables`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv()`}),` and `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv()`}),` (auto-imported) with Hono:`]}),(0,h.jsx)(g,{code:`// src/app/api/config.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Use environment variables
const JWT_SECRET = requireEnv('JWT_SECRET')
const API_KEY = requireEnv('API_KEY')
const DEBUG = getEnv('DEBUG') === 'true'

app.use('*', cors({
  origin: requireEnv('ALLOWED_ORIGIN'),
}))

app.get('/config', (c) => {
  return c.json({
    debug: DEBUG,
    hasApiKey: !!API_KEY,
    // Don't expose the actual secret!
    jwtConfigured: !!JWT_SECRET,
  })
})

export default app`,filename:`app/api/config.ts`}),(0,h.jsx)(v,{type:`warning`,children:`Never expose secrets in API responses. Use environment variables for configuration, not for returning to the client.`})]}),(0,h.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`When to Use Hono`}),(0,h.jsx)(_,{headers:[`Scenario`,`Recommendation`],rows:[[`Multiple endpoints in one file`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Need middleware (CORS, auth, logging)`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Complex routing patterns`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Type-safe RPC client`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Production APIs with many routes`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Hono`]})],[`Single endpoint with simple logic`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Plain handler`]})],[`Quick prototypes`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Plain handler`]})]]})]}),(0,h.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,h.jsxs)(r,{to:`/docs/api-plain`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,h.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,h.jsx)(`div`,{className:`text-sm font-medium`,children:`Plain Function Handlers`})]})]}),(0,h.jsxs)(r,{to:`/docs/api-dynamic`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,h.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic API Routes`})]}),(0,h.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{y as default};