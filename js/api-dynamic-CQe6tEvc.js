import{a as e,i as t,n,t as r}from"./index-DC1finTj.js";import{n as i,v as a}from"./Layout-BchPlYGG.js";import{t as o}from"./arrow-left-DDUfnCyW.js";import{t as s}from"./arrow-right-DxPakO1S.js";import{t as c}from"./DocSidebar-DEaPZPK8.js";import{n as l,t as u}from"./TableOfContents-Dq9a3AEA.js";var d=e(t(),1),f=r(),p=[{id:`file-structure`,label:`File Structure`},{id:`single-parameter`,label:`Single Dynamic Parameter`},{id:`multiple-parameters`,label:`Multiple Dynamic Parameters`},{id:`catch-all-routes`,label:`Catch-all Routes`},{id:`optional-catch-all`,label:`Optional Catch-all`},{id:`nested-dynamic`,label:`Nested Dynamic Routes`},{id:`query-parameters`,label:`Query Parameters`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}],m=`Dynamic API Routes`,h=`https://bini.js.org/docs/api-dynamic`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/api-dynamic.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to create dynamic API endpoints with path parameters, catch-all routes, and optional segments.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,f.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Dynamic API routes allow you to create endpoints that match patterns rather than exact paths. Use square brackets in your file names to define dynamic segments — the file path determines the route.`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`File-based routing:`}),` Like all Bini.js API routes, dynamic routes follow file-based routing. There are no root `,(0,f.jsx)(`code`,{children:`/`}),` API routes — the filename becomes the route segment. Write your Hono routes `,(0,f.jsx)(`strong`,{children:`without`}),` the `,(0,f.jsx)(`code`,{children:`/api`}),` prefix.`]})]}),(0,f.jsxs)(a.section,{id:`file-structure`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Structure`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Dynamic segments are created using square brackets in file or folder names:`}),(0,f.jsx)(_,{code:`src/app/api/
├── posts/
│   └── [id].ts              → /api/posts/:id
├── users/
│   └── [userId]/
│       └── settings.ts      → /api/users/:userId/settings
├── files/
│   └── [...path].ts         → /api/files/a/b/c (catch-all)
└── [...catch].ts            → /api/* (global catch-all)`}),(0,f.jsx)(v,{headers:[`Pattern`,`File/Folder Name`,`Matches`],rows:[[`[id]`,`Single dynamic segment`,`/api/posts/123, /api/posts/abc`],[`[category]/[slug]`,`Multiple dynamic segments`,`/api/posts/tech/hello-world`],[`[...path]`,`Catch-all (required)`,`/api/files/a, /api/files/a/b/c`],[`[[...slug]]`,`Catch-all (optional)`,`/api/docs, /api/docs/a/b`]]})]}),(0,f.jsxs)(a.section,{id:`single-parameter`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Single Dynamic Parameter`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[name]`}),` in the filename for a single dynamic segment:`]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With Hono`}),(0,f.jsx)(_,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
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

export default app`,filename:`src/app/api/posts/[id].ts`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With Plain Function`}),(0,f.jsx)(_,{code:`// src/app/api/posts/[id].ts → /api/posts/:id
export default async function handler(request: Request) {
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id
  
  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }
  
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,filename:`src/app/api/posts/[id].ts`})]}),(0,f.jsxs)(a.section,{id:`multiple-parameters`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Multiple Dynamic Parameters`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine multiple dynamic segments in a single route:`}),(0,f.jsx)(_,{code:`// src/app/api/posts/[category]/[slug].ts → /api/posts/:category/:slug
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:category/:slug', (c) => {
  const category = c.req.param('category')
  const slug = c.req.param('slug')
  return c.json({ category, slug })
})

export default app`,filename:`src/app/api/posts/[category]/[slug].ts`}),(0,f.jsx)(v,{headers:[`URL`,`params`],rows:[[`/api/posts/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`],[`/api/posts/lifestyle/tips`,`{ category: "lifestyle", slug: "tips" }`]]})]}),(0,f.jsxs)(a.section,{id:`catch-all-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Routes`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` in the filename to match any number of segments:`]}),(0,f.jsx)(_,{code:`// src/app/api/files/[...path].ts → /api/files/*
import { Hono } from 'hono'

const app = new Hono()

app.all('/files/:path*', (c) => {
  const path = c.req.param('path') || ''
  return c.json({ path, segments: path.split('/').filter(Boolean) })
})

export default app`,filename:`src/app/api/files/[...path].ts`}),(0,f.jsx)(v,{headers:[`URL`,`path value`],rows:[[`/api/files`,``],[`/api/files/images`,`images`],[`/api/files/images/2024`,`images/2024`],[`/api/files/docs/api/reference`,`docs/api/reference`]]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Global Catch-all`}),(0,f.jsx)(_,{code:`// src/app/api/[...catch].ts → /api/*
import { Hono } from 'hono'

const app = new Hono()

app.all('*', (c) => {
  return c.json({ error: 'Not Found', path: c.req.path }, 404)
})

export default app`,filename:`src/app/api/[...catch].ts`})]}),(0,f.jsxs)(a.section,{id:`optional-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` to make the catch-all optional:`]}),(0,f.jsx)(_,{code:`// src/app/api/docs/[[...slug]].ts → /api/docs or /api/docs/a/b
import { Hono } from 'hono'

const app = new Hono()

app.get('/docs/:slug*?', (c) => {
  const slug = c.req.param('slug')
  
  if (!slug) {
    return c.json({ message: 'Documentation home' })
  }
  
  return c.json({ path: slug.split('/').filter(Boolean) })
})

export default app`,filename:`src/app/api/docs/[[...slug]].ts`}),(0,f.jsx)(v,{headers:[`URL`,`slug value`],rows:[[`/api/docs`,`undefined (home page)`],[`/api/docs/getting-started`,`getting-started`],[`/api/docs/api/reference`,`api/reference`]]})]}),(0,f.jsxs)(a.section,{id:`nested-dynamic`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Dynamic Routes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine static and dynamic segments for complex routing:`}),(0,f.jsx)(_,{code:`// src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].ts
// → /api/orgs/:orgId/repos/:repoId/issues/:issueId
import { Hono } from 'hono'

const app = new Hono()

app.get('/orgs/:orgId/repos/:repoId/issues/:issueId', (c) => {
  const { orgId, repoId, issueId } = c.req.param()
  return c.json({ orgId, repoId, issueId })
})

export default app`,filename:`src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].ts`})]}),(0,f.jsxs)(a.section,{id:`query-parameters`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Query Parameters`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Combine dynamic path parameters with query parameters:`}),(0,f.jsx)(_,{code:`// src/app/api/posts/[id]/comments.ts → /api/posts/:id/comments
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:id/comments', (c) => {
  const postId = c.req.param('id')
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '10')
  
  return c.json({ postId, page, limit })
})

export default app`,filename:`src/app/api/posts/[id]/comments.ts`})]}),(0,f.jsxs)(a.section,{id:`route-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Static routes`}),` — exact matches`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Dynamic single segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[id]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Catch-all segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Optional catch-all`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`})]})]})}),(0,f.jsx)(_,{code:`src/app/api/posts/
├── featured.ts           → /api/posts/featured (static — matched first)
├── [id].ts               → /api/posts/123 (dynamic — matched second)
└── [...slug].ts          → /api/posts/a/b/c (catch-all — matched last)`}),(0,f.jsx)(y,{children:`Routes are sorted by priority and then by path length (shortest first). Static routes always win over dynamic ones.`})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full-featured store API with dynamic routing:`}),(0,f.jsx)(_,{code:`// src/app/api/store/[[...path]].ts → /api/store or /api/store/*
import { Hono } from 'hono'

const app = new Hono()
const products = new Map()

app.get('/store', (c) => c.json({ products: Array.from(products.values()) }))
app.get('/store/products', (c) => c.json({ products: Array.from(products.values()) }))
app.get('/store/products/:id', (c) => {
  const product = products.get(c.req.param('id'))
  return product ? c.json(product) : c.json({ error: 'Not found' }, 404)
})

app.post('/store/products', async (c) => {
  const body = await c.req.json()
  const id = Date.now().toString()
  const product = { id, ...body }
  products.set(id, product)
  return c.json(product, 201)
})

app.put('/store/products/:id', async (c) => {
  const id = c.req.param('id')
  if (!products.has(id)) return c.json({ error: 'Not found' }, 404)
  const product = { ...products.get(id), ...await c.req.json() }
  products.set(id, product)
  return c.json(product)
})

app.delete('/store/products/:id', (c) => {
  const id = c.req.param('id')
  return products.delete(id)
    ? c.json({ message: 'Deleted' })
    : c.json({ error: 'Not found' }, 404)
})

app.all('/store/*', (c) => c.json({ error: 'Not Found' }, 404))

export default app`,filename:`src/app/api/store/[[...path]].ts`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/api-hono`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Hono Integration`})]})]}),(0,f.jsxs)(n,{to:`/docs/api-cors`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`CORS`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};