import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,u as l,v as u}from"./DocBlocks-CgTYcQET.js";import{l as d}from"./DocVisuals-B7hV1VEN.js";var f=e(),p=[{id:`file-structure`,label:`File Structure`},{id:`single-parameter`,label:`Single Dynamic Parameter`},{id:`multiple-parameters`,label:`Multiple Dynamic Parameters`},{id:`catch-all-routes`,label:`Catch-all Routes`},{id:`optional-catch-all`,label:`Optional Catch-all`},{id:`nested-dynamic`,label:`Nested Dynamic Routes`},{id:`query-parameters`,label:`Query Parameters`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}];function m({ext:e}){return(0,f.jsx)(d,{fileWidth:300,rows:[{n:`app`},{n:`api`,d:1},{n:`posts`,d:2},{n:`[id].${e}`,d:3,fn:!0,dot:!0,url:`/api/posts/:id`},{n:`users`,d:2},{n:`[userId]`,d:3},{n:`settings.${e}`,d:4,fn:!0,dot:!0,url:`/api/users/:userId/settings`},{n:`files`,d:2},{n:`[...path].${e}`,d:3,fn:!0,dot:!0,url:`/api/files/*`},{n:`[...catch].${e}`,d:2,fn:!0,dot:!0,url:`/api/*`}]})}function h({ext:e}){return(0,f.jsx)(d,{fileWidth:280,rows:[{n:`app`},{n:`api`,d:1},{n:`posts`,d:2},{n:`featured.${e}`,d:3,fn:!0,url:`/api/posts/featured`},{n:`[id].${e}`,d:3,fn:!0,dot:!0,url:`/api/posts/:id`},{n:`[...slug].${e}`,d:3,fn:!0,url:`/api/posts/*`}]})}function g(){let e=u()===`js`?`js`:`ts`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i,{id:`file-structure`,title:`File Structure`,children:[(0,f.jsx)(a,{children:`Dynamic API routes match patterns instead of exact paths. Wrap a segment in square brackets in the file or folder name - the file path determines the route.`}),(0,f.jsxs)(c,{children:[(0,f.jsx)(`strong`,{children:`File-based routing:`}),` Like every Bini.js API route, dynamic routes follow file-based routing. The filename becomes the route segment, and Hono routes inside the file are written `,(0,f.jsx)(`strong`,{children:`without`}),` the `,(0,f.jsx)(o,{children:`/api`}),` prefix.`]}),(0,f.jsx)(m,{ext:e}),(0,f.jsx)(r,{headers:[`Pattern`,`Meaning`,`Example Matches`],rows:[[`[id]`,`Single dynamic segment`,`/api/posts/123, /api/posts/abc`],[`[category]/[slug]`,`Multiple dynamic segments`,`/api/posts/tech/hello-world`],[`[...path]`,`Catch-all (required, 1+ segments)`,`/api/files/a, /api/files/a/b/c`],[`[[...slug]]`,`Catch-all (optional, 0+ segments)`,`/api/docs, /api/docs/a/b`]]})]}),(0,f.jsxs)(i,{id:`single-parameter`,title:`Single Dynamic Parameter`,children:[(0,f.jsxs)(a,{children:[`Use `,(0,f.jsx)(o,{children:`[name]`}),` in the filename to capture a single dynamic segment.`]}),(0,f.jsx)(l,{className:`mb-3`,children:`With Hono`}),(0,f.jsx)(s,{filename:`src/app/api/posts/[id].${e}`,tsCode:`// src/app/api/posts/[id].ts -> /api/posts/:id
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

export default app`,jsCode:`// src/app/api/posts/[id].js -> /api/posts/:id
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

export default app`}),(0,f.jsx)(l,{className:`mb-3 mt-8`,children:`With a Plain Function`}),(0,f.jsxs)(a,{children:[`Plain handlers receive path params on the second argument, as `,(0,f.jsx)(o,{children:`{ params }`}),`:`]}),(0,f.jsx)(s,{filename:`src/app/api/posts/[id].${e}`,tsCode:`// src/app/api/posts/[id].ts -> /api/posts/:id
export default function handler(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (request.method === 'GET') {
    return Response.json({ id: params.id, title: \`Post \${params.id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,jsCode:`// src/app/api/posts/[id].js -> /api/posts/:id
export default function handler(request, { params }) {
  if (request.method === 'GET') {
    return Response.json({ id: params.id, title: \`Post \${params.id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`})]}),(0,f.jsxs)(i,{id:`multiple-parameters`,title:`Multiple Dynamic Parameters`,children:[(0,f.jsx)(a,{children:`Combine multiple dynamic segments in a single route:`}),(0,f.jsx)(s,{filename:`src/app/api/posts/[category]/[slug].${e}`,tsCode:`// src/app/api/posts/[category]/[slug].ts -> /api/posts/:category/:slug
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:category/:slug', (c) => {
  const category = c.req.param('category')
  const slug = c.req.param('slug')
  return c.json({ category, slug })
})

export default app`,jsCode:`// src/app/api/posts/[category]/[slug].js -> /api/posts/:category/:slug
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:category/:slug', (c) => {
  const category = c.req.param('category')
  const slug = c.req.param('slug')
  return c.json({ category, slug })
})

export default app`}),(0,f.jsx)(r,{headers:[`URL`,`params`],rows:[[`/api/posts/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`],[`/api/posts/lifestyle/tips`,`{ category: "lifestyle", slug: "tips" }`]]})]}),(0,f.jsxs)(i,{id:`catch-all-routes`,title:`Catch-all Routes`,children:[(0,f.jsxs)(a,{children:[`Use `,(0,f.jsx)(o,{children:`[...name]`}),` in the filename to match one or more path segments. In Hono, the catch-all is written as `,(0,f.jsx)(o,{children:`:name*`}),`.`]}),(0,f.jsx)(s,{filename:`src/app/api/files/[...path].${e}`,tsCode:`// src/app/api/files/[...path].ts -> /api/files/*
import { Hono } from 'hono'

const app = new Hono()

app.all('/files/:path*', (c) => {
  const path = c.req.param('path') || ''
  return c.json({ path, segments: path.split('/').filter(Boolean) })
})

export default app`,jsCode:`// src/app/api/files/[...path].js -> /api/files/*
import { Hono } from 'hono'

const app = new Hono()

app.all('/files/:path*', (c) => {
  const path = c.req.param('path') || ''
  return c.json({ path, segments: path.split('/').filter(Boolean) })
})

export default app`}),(0,f.jsx)(r,{headers:[`URL`,`path value`],rows:[[`/api/files/images`,`images`],[`/api/files/images/2024`,`images/2024`],[`/api/files/docs/api/reference`,`docs/api/reference`]]}),(0,f.jsx)(l,{className:`mb-3 mt-8`,children:`Global Catch-all`}),(0,f.jsxs)(a,{children:[`A top-level `,(0,f.jsx)(o,{children:`[...catch]`}),` file under `,(0,f.jsx)(o,{children:`src/app/api/`}),` handles any request that no other API route matches:`]}),(0,f.jsx)(s,{filename:`src/app/api/[...catch].${e}`,tsCode:`// src/app/api/[...catch].ts -> /api/*
import { Hono } from 'hono'

const app = new Hono()

app.all('*', (c) => {
  return c.json({ error: 'Not Found', path: c.req.path }, 404)
})

export default app`,jsCode:`// src/app/api/[...catch].js -> /api/*
import { Hono } from 'hono'

const app = new Hono()

app.all('*', (c) => {
  return c.json({ error: 'Not Found', path: c.req.path }, 404)
})

export default app`})]}),(0,f.jsxs)(i,{id:`optional-catch-all`,title:`Optional Catch-all`,children:[(0,f.jsxs)(a,{children:[`Use `,(0,f.jsx)(o,{children:`[[...name]]`}),` to make the catch-all optional, so the base path also matches. In Hono, this is written as `,(0,f.jsx)(o,{children:`:name*?`}),`.`]}),(0,f.jsx)(s,{filename:`src/app/api/docs/[[...slug]].${e}`,tsCode:`// src/app/api/docs/[[...slug]].ts -> /api/docs or /api/docs/a/b
import { Hono } from 'hono'

const app = new Hono()

app.get('/docs/:slug*?', (c) => {
  const slug = c.req.param('slug')

  if (!slug) {
    return c.json({ message: 'Documentation home' })
  }

  return c.json({ path: slug.split('/').filter(Boolean) })
})

export default app`,jsCode:`// src/app/api/docs/[[...slug]].js -> /api/docs or /api/docs/a/b
import { Hono } from 'hono'

const app = new Hono()

app.get('/docs/:slug*?', (c) => {
  const slug = c.req.param('slug')

  if (!slug) {
    return c.json({ message: 'Documentation home' })
  }

  return c.json({ path: slug.split('/').filter(Boolean) })
})

export default app`}),(0,f.jsx)(r,{headers:[`URL`,`slug value`],rows:[[`/api/docs`,`undefined (base path)`],[`/api/docs/getting-started`,`getting-started`],[`/api/docs/api/reference`,`api/reference`]]})]}),(0,f.jsxs)(i,{id:`nested-dynamic`,title:`Nested Dynamic Routes`,children:[(0,f.jsx)(a,{children:`Combine static and dynamic segments for deeper routing:`}),(0,f.jsx)(s,{filename:`src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].${e}`,tsCode:`// src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].ts
// -> /api/orgs/:orgId/repos/:repoId/issues/:issueId
import { Hono } from 'hono'

const app = new Hono()

app.get('/orgs/:orgId/repos/:repoId/issues/:issueId', (c) => {
  const { orgId, repoId, issueId } = c.req.param()
  return c.json({ orgId, repoId, issueId })
})

export default app`,jsCode:`// src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].js
// -> /api/orgs/:orgId/repos/:repoId/issues/:issueId
import { Hono } from 'hono'

const app = new Hono()

app.get('/orgs/:orgId/repos/:repoId/issues/:issueId', (c) => {
  const { orgId, repoId, issueId } = c.req.param()
  return c.json({ orgId, repoId, issueId })
})

export default app`})]}),(0,f.jsxs)(i,{id:`query-parameters`,title:`Query Parameters`,children:[(0,f.jsx)(a,{children:`Combine dynamic path parameters with query strings:`}),(0,f.jsx)(s,{filename:`src/app/api/posts/[id]/comments.${e}`,tsCode:`// src/app/api/posts/[id]/comments.ts -> /api/posts/:id/comments
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:id/comments', (c) => {
  const postId = c.req.param('id')
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '10')

  return c.json({ postId, page, limit })
})

export default app`,jsCode:`// src/app/api/posts/[id]/comments.js -> /api/posts/:id/comments
import { Hono } from 'hono'

const app = new Hono()

app.get('/posts/:id/comments', (c) => {
  const postId = c.req.param('id')
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '10')

  return c.json({ postId, page, limit })
})

export default app`})]}),(0,f.jsxs)(i,{id:`route-priority`,title:`Route Priority`,children:[(0,f.jsx)(a,{children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,f.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,f.jsxs)(`ol`,{className:`list-decimal space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Static routes`}),` - exact matches`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Dynamic single segments`}),` -`,` `,(0,f.jsx)(o,{children:`[id]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Catch-all segments`}),` -`,` `,(0,f.jsx)(o,{children:`[...slug]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Optional catch-all`}),` -`,` `,(0,f.jsx)(o,{children:`[[...slug]]`})]})]})}),(0,f.jsx)(h,{ext:e}),(0,f.jsx)(c,{children:`Routes are sorted by priority and then by path length (shortest first). Static routes always win over dynamic ones.`})]}),(0,f.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,f.jsx)(a,{children:`A full-featured store API using dynamic and catch-all routing:`}),(0,f.jsx)(s,{filename:`src/app/api/store/[[...path]].${e}`,tsCode:`// src/app/api/store/[[...path]].ts -> /api/store or /api/store/*
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
  const product = { ...products.get(id), ...(await c.req.json()) }
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

export default app`,jsCode:`// src/app/api/store/[[...path]].js -> /api/store or /api/store/*
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
  const product = { ...products.get(id), ...(await c.req.json()) }
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

export default app`})]}),(0,f.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,f.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes Overview`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Files under app/api/ map to /api/*.`})]}),(0,f.jsxs)(t,{to:`/docs/api-plain`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Plain Function Handlers`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Simple Request → Response endpoints.`})]}),(0,f.jsxs)(t,{to:`/docs/api-hono`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Hono Integration`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Routing, middleware, and validation with Hono.`})]}),(0,f.jsxs)(t,{to:`/docs/catch-all-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Catch-All Routes`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Handle unmatched paths and segments.`})]})]})]})}function _(){return(0,f.jsx)(n,{title:`Dynamic API Routes`,description:`Create dynamic API endpoints with path parameters, catch-all routes, and optional segments.`,url:`https://bini.js.org/docs/api-dynamic`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-dynamic.tsx`,toc:p,prev:{to:`/docs/api-hono`,title:`Hono Integration`},next:{to:`/docs/environment-variables`,title:`Environment Variables`},children:(0,f.jsx)(g,{})})}export{_ as default};