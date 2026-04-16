import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";import{t as l}from"./info-DwoDvoEv.js";import{t as u}from"./lightbulb-0h-vsbXQ.js";import{t as d}from"./triangle-alert-Dv6BP5n_.js";var f=t(e(),1),p=n();function m({code:e,filename:t}){let[n,r]=f.useState(!1);return(0,p.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,p.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,p.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,p.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,p.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,p.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function h({headers:e,rows:t}){return(0,p.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,p.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,p.jsx)(`tr`,{children:e.map((e,t)=>(0,p.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,p.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,p.jsx)(`tr`,{children:e.map((e,t)=>(0,p.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function g({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:l},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:d},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:u}}[e],r=n.icon;return(0,p.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,p.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,p.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,p.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function _(){return(0,p.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,p.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,p.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,p.jsx)(a,{}),(0,p.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,p.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,p.jsx)(c,{children:(0,p.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,p.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,p.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Dynamic API Routes`}),(0,p.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to create dynamic API endpoints with path parameters, catch-all routes, and optional segments.`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,p.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Dynamic API routes allow you to create endpoints that match patterns rather than exact paths. Use square brackets to define dynamic segments.`}),(0,p.jsxs)(g,{type:`warning`,children:[(0,p.jsx)(`strong`,{children:`Important:`}),` Every API route file `,(0,p.jsx)(`strong`,{children:`must`}),` have a `,(0,p.jsx)(`code`,{children:`default`}),` export.`]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Structure`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Dynamic segments are created using square brackets in file or folder names:`}),(0,p.jsx)(m,{code:`src/app/api/
├── posts/
│   ├── [id].ts           → /api/posts/:id
│   └── [category]/
│       └── [slug].ts     → /api/posts/:category/:slug
├── users/
│   └── [userId]/
│       └── settings.ts   → /api/users/:userId/settings
└── files/
    └── [...path].ts      → /api/files/a/b/c (catch-all)`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Single Dynamic Parameter`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[name]`}),` for a single dynamic segment:`]}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With Hono`}),(0,p.jsx)(m,{code:`// src/app/api/posts/[id].ts
import { Hono } from 'hono'

const app = new Hono()

// GET /api/posts/:id
app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ id, title: \`Post \${id}\` })
})

// PUT /api/posts/:id
app.put('/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  return c.json({ id, ...body })
})

// DELETE /api/posts/:id
app.delete('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ message: \`Deleted post \${id}\` })
})

export default app`,filename:`app/api/posts/[id].ts`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With Plain Function`}),(0,p.jsx)(m,{code:`// src/app/api/posts/[id].ts
export default async function handler(request: Request) {
  // Dynamic params are passed via x-bini-params header
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id
  
  if (request.method === 'GET') {
    const post = await getPost(id)
    return post 
      ? Response.json(post)
      : Response.json({ error: 'Not found' }, { status: 404 })
  }
  
  if (request.method === 'PUT') {
    const body = await request.json()
    const updated = await updatePost(id, body)
    return Response.json(updated)
  }
  
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}

async function getPost(id: string) {
  return { id, title: \`Post \${id}\` }
}

async function updatePost(id: string, data: any) {
  return { id, ...data }
}`,filename:`app/api/posts/[id].ts`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Multiple Dynamic Parameters`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine multiple dynamic segments in a single route:`}),(0,p.jsx)(m,{code:`// src/app/api/posts/[category]/[slug].ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/:category/:slug', (c) => {
  const category = c.req.param('category')
  const slug = c.req.param('slug')
  
  return c.json({
    category,
    slug,
    title: \`\${category}: \${slug}\`
  })
})

app.put('/:category/:slug', async (c) => {
  const category = c.req.param('category')
  const slug = c.req.param('slug')
  const body = await c.req.json()
  
  return c.json({
    category,
    slug,
    ...body
  })
})

export default app`,filename:`app/api/posts/[category]/[slug].ts`}),(0,p.jsx)(h,{headers:[`URL`,`params`],rows:[[`/api/posts/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`],[`/api/posts/lifestyle/tips`,`{ category: "lifestyle", slug: "tips" }`]]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Routes`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` to match any number of segments:`]}),(0,p.jsx)(m,{code:`// src/app/api/files/[...path].ts
import { Hono } from 'hono'

const app = new Hono()

app.all('/:path*', (c) => {
  const path = c.req.param('path') || ''
  const segments = path.split('/').filter(Boolean)
  
  return c.json({
    method: c.req.method,
    path: path || '/',
    segments,
    message: \`Request for: \${path || 'root'}\`
  })
})

export default app`,filename:`app/api/files/[...path].ts`}),(0,p.jsx)(h,{headers:[`URL`,`path value`],rows:[[`/api/files`,``],[`/api/files/images`,`images`],[`/api/files/images/2024`,`images/2024`],[`/api/files/docs/api/reference`,`docs/api/reference`]]}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Plain Function Catch-all`}),(0,p.jsx)(m,{code:`// src/app/api/[...catch].ts
export default function handler(request: Request) {
  const url = new URL(request.url)
  const path = url.pathname.replace('/api/', '')
  
  return Response.json({
    error: 'Not Found',
    path: path || '/',
    method: request.method,
  }, { status: 404 })
}`,filename:`app/api/[...catch].ts`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` to make the catch-all optional:`]}),(0,p.jsx)(m,{code:`// src/app/api/docs/[[...slug]].ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/:slug*?', (c) => {
  const slug = c.req.param('slug')
  
  if (!slug) {
    return c.json({
      message: 'Documentation home',
      sections: ['getting-started', 'api-reference', 'guides']
    })
  }
  
  const segments = slug.split('/').filter(Boolean)
  
  return c.json({
    message: 'Documentation page',
    path: segments,
    content: \`Docs for: \${segments.join(' > ')}\`
  })
})

export default app`,filename:`app/api/docs/[[...slug]].ts`}),(0,p.jsx)(h,{headers:[`URL`,`slug value`],rows:[[`/api/docs`,`undefined`],[`/api/docs/getting-started`,`getting-started`],[`/api/docs/api/reference`,`api/reference`]]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Dynamic Routes`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine static and dynamic segments for complex routing:`}),(0,p.jsx)(m,{code:`// src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/:orgId/:repoId/:issueId', (c) => {
  const { orgId, repoId, issueId } = c.req.param()
  
  return c.json({
    org: orgId,
    repo: repoId,
    issue: issueId,
    url: \`https://github.com/\${orgId}/\${repoId}/issues/\${issueId}\`
  })
})

app.patch('/:orgId/:repoId/:issueId', async (c) => {
  const { orgId, repoId, issueId } = c.req.param()
  const body = await c.req.json()
  
  return c.json({
    org: orgId,
    repo: repoId,
    issue: issueId,
    updated: body
  })
})

export default app`,filename:`app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].ts`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Query Parameters with Dynamic Routes`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine dynamic path parameters with query parameters:`}),(0,p.jsx)(m,{code:`// src/app/api/posts/[id]/comments.ts
import { Hono } from 'hono'

const app = new Hono()

// GET /api/posts/:id/comments?page=1&limit=10
app.get('/:id', (c) => {
  const postId = c.req.param('id')
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '10')
  const sort = c.req.query('sort') || 'newest'
  
  return c.json({
    postId,
    comments: [],
    pagination: { page, limit, sort }
  })
})

// POST /api/posts/:id/comments
app.post('/:id', async (c) => {
  const postId = c.req.param('id')
  const body = await c.req.json()
  
  return c.json({
    postId,
    comment: {
      id: Date.now(),
      ...body
    }
  }, 201)
})

export default app`,filename:`app/api/posts/[id]/comments.ts`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,p.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,p.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Static routes`}),` — exact matches`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Dynamic single segments`}),` — `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[id]`})]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Catch-all segments`}),` — `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`})]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Optional catch-all`}),` — `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`})]})]})}),(0,p.jsx)(m,{code:`src/app/api/posts/
├── featured.ts           → /api/posts/featured (static - highest)
├── [id].ts               → /api/posts/123 (dynamic)
└── [...slug].ts          → /api/posts/a/b/c (catch-all)`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full-featured API with multiple dynamic patterns:`}),(0,p.jsx)(m,{code:`// src/app/api/store/[[...path]].ts
import { Hono } from 'hono'

const app = new Hono()

// Products database (mock)
const products = new Map()

// GET /api/store - List all products
// GET /api/store/products - Also list all products
app.get('/', (c) => c.json({ products: Array.from(products.values()) }))
app.get('/products', (c) => c.json({ products: Array.from(products.values()) }))

// GET /api/store/products/:id - Get a product
app.get('/products/:id', (c) => {
  const id = c.req.param('id')
  const product = products.get(id)
  
  return product 
    ? c.json(product)
    : c.json({ error: 'Product not found' }, 404)
})

// POST /api/store/products - Create a product
app.post('/products', async (c) => {
  const body = await c.req.json()
  const id = Date.now().toString()
  const product = { id, ...body }
  products.set(id, product)
  
  return c.json(product, 201)
})

// PUT /api/store/products/:id - Update a product
app.put('/products/:id', async (c) => {
  const id = c.req.param('id')
  if (!products.has(id)) {
    return c.json({ error: 'Product not found' }, 404)
  }
  
  const body = await c.req.json()
  const product = { ...products.get(id), ...body }
  products.set(id, product)
  
  return c.json(product)
})

// DELETE /api/store/products/:id - Delete a product
app.delete('/products/:id', (c) => {
  const id = c.req.param('id')
  const deleted = products.delete(id)
  
  return deleted
    ? c.json({ message: 'Product deleted' })
    : c.json({ error: 'Product not found' }, 404)
})

// Catch-all for unmatched routes
app.all('*', (c) => {
  return c.json({ 
    error: 'Not Found',
    path: c.req.path 
  }, 404)
})

export default app`,filename:`app/api/store/[[...path]].ts`})]}),(0,p.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,p.jsxs)(r,{to:`/docs/api-hono`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`Hono Integration`})]})]}),(0,p.jsxs)(r,{to:`/docs/css`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`CSS Overview`})]}),(0,p.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{_ as default};