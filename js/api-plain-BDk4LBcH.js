import{c as e,i as t,n,t as r}from"./index-BD2CsTLR.js";import{n as i,v as a}from"./Layout-CFDEU8Wp.js";import{t as o}from"./arrow-left-C-2QbI0i.js";import{t as s}from"./arrow-right-SeG65d5a.js";import{t as c}from"./DocSidebar-CfshoOIO.js";import{t as l}from"./circle-check-big-DuPbQx1A.js";import{t as u}from"./circle-x-snFNlxlP.js";import{t as d}from"./info-CSWWVHXn.js";import{t as f}from"./lightbulb-CO9wAbC7.js";import{t as p}from"./triangle-alert-dNkcq3Dd.js";var m=e(t(),1),h=r();function g({code:e,filename:t}){let[n,r]=m.useState(!1);return(0,h.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,h.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,h.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,h.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,h.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,h.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,h.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,h.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function _({headers:e,rows:t}){return(0,h.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,h.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,h.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,h.jsx)(`tr`,{children:e.map((e,t)=>(0,h.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,h.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,h.jsx)(`tr`,{children:e.map((e,t)=>(0,h.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function v({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:d},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:p},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:f}}[e],r=n.icon;return(0,h.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,h.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,h.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,h.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function y(){return(0,h.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,h.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,h.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,h.jsx)(i,{}),(0,h.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,h.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,h.jsx)(c,{children:(0,h.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,h.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,h.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Plain Function Handlers`}),(0,h.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to create simple API endpoints using plain JavaScript functions in Bini.js.`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,h.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Plain function handlers are the simplest way to create API routes in Bini.js. They're perfect for simple endpoints that don't need complex routing or middleware.`}),(0,h.jsxs)(v,{type:`info`,children:[(0,h.jsx)(`strong`,{children:`File-based routing:`}),` Your file path determines the API route. A file at `,(0,h.jsx)(`code`,{children:`src/app/api/hello.ts`}),` is served at `,(0,h.jsx)(`code`,{children:`/api/hello`}),`. There are no root `,(0,h.jsx)(`code`,{children:`/`}),` API routes — every file maps to a named route based on its filename.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Handler`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Export a default function that receives the `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`Request`}),` object. The function name doesn't matter — only the file path determines the route:`]}),(0,h.jsx)(g,{code:`// src/app/api/hello.ts → /api/hello
export default function handler(req: Request) {
  return Response.json({ message: 'hello', method: req.method })
}`,filename:`src/app/api/hello.ts → /api/hello`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates an endpoint at `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),` that responds to all HTTP methods. The handler works the same way in `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`vite dev`}),`, `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`vite preview`}),`, and all production platforms.`]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.18},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Mapping`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Your file structure directly maps to API routes:`}),(0,h.jsx)(_,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.ts`,`/api/hello`],[`src/app/api/user.ts`,`/api/user`],[`src/app/api/posts.ts`,`/api/posts`],[`src/app/api/posts/[id].ts`,`/api/posts/:id`],[`src/app/api/posts/index.ts`,`/api/posts`],[`src/app/api/[...catch].ts`,`/api/* (catch-all)`]]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Handling Different HTTP Methods`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Check `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`request.method`}),` to handle different HTTP verbs:`]}),(0,h.jsx)(g,{code:`// src/app/api/posts.ts → /api/posts
export default function handler(request: Request) {
  // Handle GET — list all posts
  if (request.method === 'GET') {
    return Response.json({ posts: [] })
  }
  
  // Handle POST — create a new post
  if (request.method === 'POST') {
    return Response.json({ message: 'Post created' }, { status: 201 })
  }
  
  // Handle PUT — update a post
  if (request.method === 'PUT') {
    return Response.json({ message: 'Post updated' })
  }
  
  // Handle DELETE — delete a post
  if (request.method === 'DELETE') {
    return Response.json({ message: 'Post deleted' })
  }
  
  // Method not allowed
  return Response.json(
    { error: 'Method not allowed' }, 
    { status: 405 }
  )
}`,filename:`src/app/api/posts.ts → /api/posts`}),(0,h.jsx)(_,{headers:[`Method`,`Typical Use`],rows:[[`GET`,`Retrieve data`],[`POST`,`Create new data`],[`PUT`,`Replace existing data`],[`PATCH`,`Partially update data`],[`DELETE`,`Remove data`]]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Reading Request Data`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Access different parts of the incoming request:`}),(0,h.jsx)(g,{code:`// src/app/api/echo.ts → /api/echo
export default async function handler(request: Request) {
  // Parse JSON body
  const body = await request.json().catch(() => null)
  
  // Parse form data
  const formData = await request.formData().catch(() => null)
  
  // Read headers
  const userAgent = request.headers.get('User-Agent')
  const auth = request.headers.get('Authorization')
  
  // Read query parameters
  const url = new URL(request.url)
  const page = url.searchParams.get('page')
  const limit = url.searchParams.get('limit')
  
  // Read cookies
  const cookies = request.headers.get('Cookie')
  
  return Response.json({
    method: request.method,
    url: request.url,
    body,
    formData: formData ? Object.fromEntries(formData) : null,
    headers: { userAgent, auth },
    query: { page, limit },
    cookies,
  })
}`,filename:`src/app/api/echo.ts → /api/echo`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Sending Responses`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Return different types of responses:`}),(0,h.jsx)(g,{code:`// src/app/api/responses.ts → /api/responses
export default function handler(request: Request) {
  const type = new URL(request.url).searchParams.get('type')
  
  // JSON response (most common)
  if (type === 'json') {
    return Response.json({ message: 'Hello JSON' })
  }
  
  // Plain text response
  if (type === 'text') {
    return new Response('Hello Text', {
      headers: { 'Content-Type': 'text/plain' }
    })
  }
  
  // HTML response
  if (type === 'html') {
    return new Response('<h1>Hello HTML</h1>', {
      headers: { 'Content-Type': 'text/html' }
    })
  }
  
  // Response with custom status
  if (type === 'created') {
    return Response.json(
      { message: 'Resource created' }, 
      { status: 201 }
    )
  }
  
  // Response with headers
  if (type === 'cached') {
    return Response.json(
      { data: 'cached response' },
      { 
        headers: {
          'Cache-Control': 'max-age=3600',
          'X-Custom-Header': 'value',
        }
      }
    )
  }
  
  // Redirect response
  if (type === 'redirect') {
    return Response.redirect('https://example.com', 302)
  }
  
  // Error response
  return Response.json(
    { error: 'Invalid type parameter' }, 
    { status: 400 }
  )
}`,filename:`src/app/api/responses.ts → /api/responses`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Routes with Plain Handlers`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`For dynamic routes (files with `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`[param]`}),` in the name), route parameters are passed via the `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`x-bini-params`}),` request header as a JSON string:`]}),(0,h.jsx)(g,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
export default async function handler(request: Request) {
  // Dynamic params are passed in the x-bini-params header
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id
  
  if (request.method === 'GET') {
    const post = await getPostById(id)
    
    if (!post) {
      return Response.json(
        { error: 'Post not found' }, 
        { status: 404 }
      )
    }
    
    return Response.json(post)
  }
  
  if (request.method === 'PUT') {
    const body = await request.json()
    const updated = await updatePost(id, body)
    return Response.json(updated)
  }
  
  if (request.method === 'DELETE') {
    await deletePost(id)
    return Response.json({ message: 'Post deleted' })
  }
  
  return Response.json(
    { error: 'Method not allowed' }, 
    { status: 405 }
  )
}

// Mock functions
async function getPostById(id: string) {
  return { id, title: \`Post \${id}\`, content: '...' }
}

async function updatePost(id: string, data: any) {
  return { id, ...data }
}

async function deletePost(id: string) {
  return true
}`,filename:`src/app/api/posts/[id].ts → /api/posts/:id`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Routes`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Handle all unmatched API routes with a catch-all handler using `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`[...catch]`}),` in the filename:`]}),(0,h.jsx)(g,{code:`// src/app/api/[...catch].ts → /api/* (catch-all)
export default function handler(request: Request) {
  const url = new URL(request.url)
  
  return Response.json({
    error: 'Not Found',
    path: url.pathname,
    method: request.method,
    timestamp: new Date().toISOString(),
  }, { status: 404 })
}`,filename:`src/app/api/[...catch].ts → /api/*`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Variables`}),(0,h.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv()`}),` and `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv()`}),` from `,(0,h.jsx)(`code`,{className:`text-cyan-400`,children:`bini-env`}),` — both are auto-imported in API routes. They read from the Hono request context and work uniformly across all platforms:`]}),(0,h.jsx)(g,{code:`// src/app/api/config.ts → /api/config
import { getEnv, requireEnv } from 'bini-env'

export default function handler(request: Request) {
  // requireEnv throws if the var is missing
  const apiKey = requireEnv('MY_API_KEY')
  
  // getEnv returns undefined if missing — use ?? for defaults
  const debug = getEnv('DEBUG_MODE') ?? 'false'
  const appName = getEnv('APP_NAME') ?? 'Bini.js'
  
  return Response.json({
    appName,
    debug: debug === 'true',
    hasApiKey: !!apiKey,
  })
}`,filename:`src/app/api/config.ts → /api/config`}),(0,h.jsxs)(v,{type:`info`,children:[(0,h.jsx)(`strong`,{children:`Works everywhere:`}),` `,(0,h.jsx)(`code`,{children:`getEnv`}),` and `,(0,h.jsx)(`code`,{children:`requireEnv`}),` read from the Hono request context, which resolves from the correct source on every platform automatically — Node.js, Bun, Deno, Vercel Edge, Netlify Edge, or Cloudflare Workers. No platform-specific code needed. No `,(0,h.jsx)(`code`,{children:`.env`}),` parsing at runtime.`]}),(0,h.jsx)(_,{headers:[`Function`,`Returns`,`Behavior`],rows:[[`getEnv(key)`,`string | undefined`,`Returns undefined if missing — use ?? for defaults`],[`requireEnv(key)`,`string`,`Throws immediately if missing or empty — fail fast on required config`]]})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error Handling`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Properly handle errors in your API routes:`}),(0,h.jsx)(g,{code:`// src/app/api/safe.ts → /api/safe
import { getEnv } from 'bini-env'

export default async function handler(request: Request) {
  try {
    // Parse and validate input
    const body = await request.json()
    
    if (!body.email || !body.name) {
      return Response.json(
        { error: 'Missing required fields: email, name' }, 
        { status: 400 }
      )
    }
    
    // Process the request
    const result = await processRequest(body)
    
    return Response.json({ success: true, data: result })
    
  } catch (error: any) {
    console.error('API Error:', error)
    
    // Don't leak error details in production
    const isDev = getEnv('NODE_ENV') === 'development'
    
    return Response.json(
      { 
        error: 'Internal Server Error',
        ...(isDev && { details: error.message })
      }, 
      { status: 500 }
    )
  }
}

async function processRequest(data: any) {
  // Your business logic here
  return { id: Date.now(), ...data }
}`,filename:`src/app/api/safe.ts → /api/safe`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`When to Use Plain Handlers`}),(0,h.jsx)(_,{headers:[`Scenario`,`Recommendation`],rows:[[`Single endpoint with simple logic`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Plain handler`]})],[`Quick prototypes`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Plain handler`]})],[`Simple CRUD operations`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5 text-emerald-400`}),` Plain handler`]})],[`Multiple endpoints in one file`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})],[`Need middleware (CORS, auth, logging)`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})],[`Complex routing patterns`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})],[`Production APIs with many routes`,(0,h.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,h.jsx)(u,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})]]}),(0,h.jsx)(v,{type:`tip`,children:`Start with plain handlers for simple endpoints. Switch to Hono when you need middleware, complex routing, or better organization.`})]}),(0,h.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,h.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full-featured plain function handler with validation, error handling, and multiple methods:`}),(0,h.jsx)(g,{code:`// src/app/api/todos.ts → /api/todos
import { getEnv } from 'bini-env'

interface Todo {
  id: string
  title: string
  completed: boolean
}

// In-memory storage (use a real database in production)
const todos: Todo[] = []

export default async function handler(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  
  try {
    // GET /api/todos — list all todos
    if (request.method === 'GET' && !id) {
      return Response.json(todos)
    }
    
    // GET /api/todos?id=123 — get single todo
    if (request.method === 'GET' && id) {
      const todo = todos.find(t => t.id === id)
      if (!todo) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      return Response.json(todo)
    }
    
    // POST /api/todos — create a new todo
    if (request.method === 'POST') {
      const body = await request.json()
      
      // Validation
      if (!body.title || typeof body.title !== 'string') {
        return Response.json(
          { error: 'Title is required and must be a string' }, 
          { status: 400 }
        )
      }
      
      const todo: Todo = {
        id: Date.now().toString(),
        title: body.title,
        completed: body.completed ?? false,
      }
      
      todos.push(todo)
      return Response.json(todo, { status: 201 })
    }
    
    // PUT /api/todos?id=123 — update a todo
    if (request.method === 'PUT' && id) {
      const body = await request.json()
      const index = todos.findIndex(t => t.id === id)
      
      if (index === -1) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      
      todos[index] = { ...todos[index], ...body }
      return Response.json(todos[index])
    }
    
    // DELETE /api/todos?id=123 — delete a todo
    if (request.method === 'DELETE' && id) {
      const index = todos.findIndex(t => t.id === id)
      
      if (index === -1) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      
      todos.splice(index, 1)
      return Response.json({ message: 'Todo deleted' })
    }
    
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
    
  } catch (error: any) {
    const isDev = getEnv('NODE_ENV') === 'development'
    console.error('Todos API Error:', error)
    return Response.json(
      { 
        error: 'Internal Server Error',
        ...(isDev && { details: error.message })
      }, 
      { status: 500 }
    )
  }
}`,filename:`src/app/api/todos.ts → /api/todos`})]}),(0,h.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,h.jsxs)(n,{to:`/docs/api-routes`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,h.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,h.jsx)(`div`,{className:`text-sm font-medium`,children:`API Routes Overview`})]})]}),(0,h.jsxs)(n,{to:`/docs/api-hono`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,h.jsx)(`div`,{className:`text-sm font-medium`,children:`Hono Integration`})]}),(0,h.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{y as default};