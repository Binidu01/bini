import{c as e,i as t,n,t as r}from"./index-DBGHh9uN.js";import{n as i,v as a}from"./Layout-DyBCtrrd.js";import{t as o}from"./arrow-left-jWXc6dTx.js";import{t as s}from"./arrow-right-DcmUZjEP.js";import{n as c,r as l,t as u}from"./TableOfContents-B7Sgj72V.js";import{t as d}from"./circle-check-big-CF433HHL.js";import{t as f}from"./circle-x-CHRfQSnX.js";var p=e(t(),1),m=r(),h=[{id:`basic-handler`,label:`Basic Handler`},{id:`route-mapping`,label:`Route Mapping`},{id:`handling-methods`,label:`Handling HTTP Methods`},{id:`reading-request`,label:`Reading Request Data`},{id:`sending-responses`,label:`Sending Responses`},{id:`dynamic-routes`,label:`Dynamic Routes`},{id:`catch-all`,label:`Catch-all Routes`},{id:`environment-variables`,label:`Environment Variables`},{id:`error-handling`,label:`Error Handling`},{id:`when-to-use`,label:`When to Use Plain Handlers`},{id:`complete-example`,label:`Complete Example`}],g=`Plain Function Handlers`,_=`https://bini.js.org/docs/api-plain`,v=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/api-plain.tsx`;function y({code:e,filename:t}){let[n,r]=p.useState(!1);return(0,m.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,m.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,m.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,m.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,m.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,m.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,m.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,m.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,m.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,m.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,m.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function b({headers:e,rows:t}){return(0,m.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,m.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,m.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,m.jsx)(`tr`,{children:e.map((e,t)=>(0,m.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,m.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,m.jsx)(`tr`,{children:e.map((e,t)=>(0,m.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function x({children:e}){return(0,m.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,m.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function S(){return(0,m.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,m.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,m.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,m.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,m.jsx)(i,{}),(0,m.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,m.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,m.jsx)(l,{children:(0,m.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,m.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,m.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:g}),(0,m.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to create simple API endpoints using plain JavaScript functions in Bini.js.`})]}),(0,m.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,m.jsx)(c,{pageUrl:_,pageTitle:g})})]}),(0,m.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,m.jsx)(c,{pageUrl:_,pageTitle:g})}),(0,m.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,m.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Plain function handlers are the simplest way to create API routes in Bini.js. They're perfect for simple endpoints that don't need complex routing or middleware.`}),(0,m.jsxs)(x,{children:[(0,m.jsx)(`strong`,{children:`File-based routing:`}),` Your file path determines the API route. A file at `,(0,m.jsx)(`code`,{children:`src/app/api/hello.ts`}),` is served at `,(0,m.jsx)(`code`,{children:`/api/hello`}),`. There are no root `,(0,m.jsx)(`code`,{children:`/`}),` API routes — every file maps to a named route based on its filename.`]})]}),(0,m.jsxs)(a.section,{id:`basic-handler`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Handler`}),(0,m.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Export a default function that receives the `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`Request`}),` object. The function name doesn't matter — only the file path determines the route:`]}),(0,m.jsx)(y,{code:`// src/app/api/hello.ts → /api/hello
export default function handler(req: Request) {
  return Response.json({ message: 'hello', method: req.method })
}`,filename:`src/app/api/hello.ts`}),(0,m.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates an endpoint at `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`/api/hello`}),` that responds to all HTTP methods.`]})]}),(0,m.jsxs)(a.section,{id:`route-mapping`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.18},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Mapping`}),(0,m.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Your file structure directly maps to API routes:`}),(0,m.jsx)(b,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.ts`,`/api/hello`],[`src/app/api/user.ts`,`/api/user`],[`src/app/api/posts.ts`,`/api/posts`],[`src/app/api/posts/[id].ts`,`/api/posts/:id`],[`src/app/api/posts/index.ts`,`/api/posts`],[`src/app/api/[...catch].ts`,`/api/*`]]})]}),(0,m.jsxs)(a.section,{id:`handling-methods`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Handling HTTP Methods`}),(0,m.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Check `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`request.method`}),` to handle different HTTP verbs:`]}),(0,m.jsx)(y,{code:`// src/app/api/posts.ts → /api/posts
export default function handler(request: Request) {
  if (request.method === 'GET') {
    return Response.json({ posts: [] })
  }
  if (request.method === 'POST') {
    return Response.json({ message: 'Post created' }, { status: 201 })
  }
  if (request.method === 'PUT') {
    return Response.json({ message: 'Post updated' })
  }
  if (request.method === 'DELETE') {
    return Response.json({ message: 'Post deleted' })
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,filename:`src/app/api/posts.ts`}),(0,m.jsx)(b,{headers:[`Method`,`Typical Use`],rows:[[`GET`,`Retrieve data`],[`POST`,`Create new data`],[`PUT`,`Replace existing data`],[`PATCH`,`Partially update data`],[`DELETE`,`Remove data`]]})]}),(0,m.jsxs)(a.section,{id:`reading-request`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Reading Request Data`}),(0,m.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Access different parts of the incoming request:`}),(0,m.jsx)(y,{code:`// src/app/api/echo.ts → /api/echo
export default async function handler(request: Request) {
  const body = await request.json().catch(() => null)
  const userAgent = request.headers.get('User-Agent')
  const url = new URL(request.url)
  const page = url.searchParams.get('page')
  
  return Response.json({
    method: request.method,
    body,
    headers: { userAgent },
    query: { page },
  })
}`,filename:`src/app/api/echo.ts`})]}),(0,m.jsxs)(a.section,{id:`sending-responses`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Sending Responses`}),(0,m.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Return different types of responses:`}),(0,m.jsx)(y,{code:`// src/app/api/responses.ts → /api/responses
export default function handler(request: Request) {
  // JSON response
  return Response.json({ message: 'Hello JSON' })
  
  // Plain text response
  return new Response('Hello Text', {
    headers: { 'Content-Type': 'text/plain' }
  })
  
  // Response with custom status
  return Response.json(
    { message: 'Created' }, 
    { status: 201 }
  )
  
  // Redirect response
  return Response.redirect('https://example.com', 302)
}`,filename:`src/app/api/responses.ts`})]}),(0,m.jsxs)(a.section,{id:`dynamic-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Routes`}),(0,m.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`For dynamic routes, parameters are passed via the `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`x-bini-params`}),` header:`]}),(0,m.jsx)(y,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
export default async function handler(request: Request) {
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id
  
  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }
  
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,filename:`src/app/api/posts/[id].ts`})]}),(0,m.jsxs)(a.section,{id:`catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Routes`}),(0,m.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Handle all unmatched API routes with `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`[...catch]`}),`:`]}),(0,m.jsx)(y,{code:`// src/app/api/[...catch].ts → /api/*
export default function handler(request: Request) {
  const url = new URL(request.url)
  return Response.json({
    error: 'Not Found',
    path: url.pathname,
    method: request.method,
  }, { status: 404 })
}`,filename:`src/app/api/[...catch].ts`})]}),(0,m.jsxs)(a.section,{id:`environment-variables`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Environment Variables`}),(0,m.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv()`}),` and `,(0,m.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv()`}),` — both are auto-imported in API routes:`]}),(0,m.jsx)(y,{code:`// src/app/api/config.ts → /api/config
import { getEnv, requireEnv } from 'bini-env'

export default function handler(request: Request) {
  const apiKey = requireEnv('MY_API_KEY')
  const debug = getEnv('DEBUG_MODE') ?? 'false'
  const appName = getEnv('APP_NAME') ?? 'Bini.js'
  
  return Response.json({ appName, debug: debug === 'true' })
}`,filename:`src/app/api/config.ts`}),(0,m.jsxs)(x,{children:[(0,m.jsx)(`code`,{children:`getEnv`}),` and `,(0,m.jsx)(`code`,{children:`requireEnv`}),` read from the Hono request context, resolving from the correct source on every platform automatically — Node.js, Bun, Deno, Vercel Edge, Netlify Edge, or Cloudflare Workers.`]}),(0,m.jsx)(b,{headers:[`Function`,`Returns`,`Behavior`],rows:[[`getEnv(key)`,`string | undefined`,`Returns undefined if missing — use ?? for defaults`],[`requireEnv(key)`,`string`,`Throws immediately if missing or empty`]]})]}),(0,m.jsxs)(a.section,{id:`error-handling`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error Handling`}),(0,m.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Properly handle errors in your API routes:`}),(0,m.jsx)(y,{code:`// src/app/api/safe.ts → /api/safe
import { getEnv } from 'bini-env'

export default async function handler(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.email) {
      return Response.json(
        { error: 'Email is required' }, 
        { status: 400 }
      )
    }
    
    return Response.json({ success: true })
    
  } catch (error: any) {
    const isDev = getEnv('NODE_ENV') === 'development'
    return Response.json(
      { 
        error: 'Internal Server Error',
        ...(isDev && { details: error.message })
      }, 
      { status: 500 }
    )
  }
}`,filename:`src/app/api/safe.ts`})]}),(0,m.jsxs)(a.section,{id:`when-to-use`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`When to Use Plain Handlers`}),(0,m.jsx)(b,{headers:[`Scenario`,`Recommendation`],rows:[[`Single endpoint with simple logic`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(d,{className:`w-3.5 h-3.5 text-emerald-400`}),` Plain handler`]})],[`Quick prototypes`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(d,{className:`w-3.5 h-3.5 text-emerald-400`}),` Plain handler`]})],[`Simple CRUD operations`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(d,{className:`w-3.5 h-3.5 text-emerald-400`}),` Plain handler`]})],[`Multiple endpoints in one file`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(f,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})],[`Need middleware`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(f,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})],[`Complex routing patterns`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(f,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})],[`Production APIs with many routes`,(0,m.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,m.jsx)(f,{className:`w-3.5 h-3.5 text-rose-400`}),` Use Hono`]})]]}),(0,m.jsx)(x,{children:`Start with plain handlers for simple endpoints. Switch to Hono when you need middleware, complex routing, or better organization.`})]}),(0,m.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`scroll-mt-24`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,m.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full-featured plain function handler with validation, error handling, and multiple methods:`}),(0,m.jsx)(y,{code:`// src/app/api/todos.ts → /api/todos
import { getEnv } from 'bini-env'

const todos: any[] = []

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
      
      if (!body.title) {
        return Response.json(
          { error: 'Title is required' }, 
          { status: 400 }
        )
      }
      
      const todo = { id: Date.now().toString(), title: body.title, completed: false }
      todos.push(todo)
      return Response.json(todo, { status: 201 })
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
    return Response.json(
      { 
        error: 'Internal Server Error',
        ...(isDev && { details: error.message })
      }, 
      { status: 500 }
    )
  }
}`,filename:`src/app/api/todos.ts`})]}),(0,m.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,m.jsxs)(n,{to:`/docs/api-routes`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,m.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,m.jsx)(`div`,{className:`text-sm font-medium`,children:`API Routes Overview`})]})]}),(0,m.jsxs)(n,{to:`/docs/api-hono`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,m.jsx)(`div`,{className:`text-sm font-medium`,children:`Hono Integration`})]}),(0,m.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,m.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,m.jsx)(u,{items:h,editUrl:v})})]})})})})]})}export{S as default};