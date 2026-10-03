import{y as e}from"./index-eA3lPtwc.js";import{_ as t,f as n,h as r,i,l as a,m as o,n as s,o as c,r as l}from"./DocBlocks-B2Cf0_q3.js";import{l as u}from"./DocVisuals-BJRQ2yKE.js";var d=e(),f=[{id:`file-structure`,label:`File Structure`},{id:`single-parameter`,label:`Single Dynamic Parameter`},{id:`multiple-parameters`,label:`Multiple Dynamic Parameters`},{id:`catch-all-routes`,label:`Catch-all Routes`},{id:`optional-catch-all`,label:`Optional Catch-all`},{id:`nested-dynamic`,label:`Nested Dynamic Routes`},{id:`query-parameters`,label:`Query Parameters`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}];function p({ext:e}){return(0,d.jsx)(u,{fileWidth:300,rows:[{n:`app`},{n:`api`,d:1},{n:`posts`,d:2},{n:`[id].${e}`,d:3,fn:!0,dot:!0,url:`/api/posts/:id`},{n:`users`,d:2},{n:`[userId]`,d:3},{n:`settings.${e}`,d:4,fn:!0,dot:!0,url:`/api/users/:userId/settings`},{n:`files`,d:2},{n:`[...path].${e}`,d:3,fn:!0,dot:!0,url:`/api/files/*`},{n:`[...catch].${e}`,d:2,fn:!0,dot:!0,url:`/api/*`}]})}function m({ext:e}){return(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`api`,d:1},{n:`posts`,d:2},{n:`featured.${e}`,d:3,fn:!0,url:`/api/posts/featured`},{n:`[id].${e}`,d:3,fn:!0,dot:!0,url:`/api/posts/:id`},{n:`[...slug].${e}`,d:3,fn:!0,url:`/api/posts/*`}]})}function h(){let e=t()===`js`?`js`:`ts`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{id:`file-structure`,title:`File Structure`,children:[(0,d.jsx)(n,{children:`Dynamic API routes match patterns instead of exact paths. Use square brackets in file or folder names - the file path determines the route.`}),(0,d.jsxs)(l,{children:[(0,d.jsx)(`strong`,{children:`File-based routing:`}),` Like all Bini.js API routes, dynamic routes follow file-based routing. There are no root `,(0,d.jsx)(s,{children:`/`}),` API routes - the filename becomes the route segment. Write your Hono routes `,(0,d.jsx)(`strong`,{children:`without`}),` the `,(0,d.jsx)(s,{children:`/api`}),` prefix.`]}),(0,d.jsx)(p,{ext:e}),(0,d.jsx)(r,{headers:[`Pattern`,`File/Folder Name`,`Matches`],rows:[[`[id]`,`Single dynamic segment`,`/api/posts/123, /api/posts/abc`],[`[category]/[slug]`,`Multiple dynamic segments`,`/api/posts/tech/hello-world`],[`[...path]`,`Catch-all (required)`,`/api/files/a, /api/files/a/b/c`],[`[[...slug]]`,`Catch-all (optional)`,`/api/docs, /api/docs/a/b`]]})]}),(0,d.jsxs)(o,{id:`single-parameter`,title:`Single Dynamic Parameter`,children:[(0,d.jsxs)(n,{children:[`Use `,(0,d.jsx)(s,{children:`[name]`}),` in the filename for a single dynamic segment:`]}),(0,d.jsx)(a,{className:`mb-3`,children:`With Hono`}),(0,d.jsx)(i,{filename:`src/app/api/posts/[id].${e}`,tsCode:`// src/app/api/posts/[id].ts -> /api/posts/:id
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

export default app`}),(0,d.jsx)(a,{className:`mb-3 mt-8`,children:`With Plain Function`}),(0,d.jsx)(i,{filename:`src/app/api/posts/[id].${e}`,tsCode:`// src/app/api/posts/[id].ts -> /api/posts/:id
export default async function handler(request: Request) {
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id

  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,jsCode:`// src/app/api/posts/[id].js -> /api/posts/:id
export default async function handler(request) {
  const paramsHeader = request.headers.get('x-bini-params')
  const params = paramsHeader ? JSON.parse(paramsHeader) : {}
  const id = params.id

  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`})]}),(0,d.jsxs)(o,{id:`multiple-parameters`,title:`Multiple Dynamic Parameters`,children:[(0,d.jsx)(n,{children:`Combine multiple dynamic segments in a single route:`}),(0,d.jsx)(i,{filename:`src/app/api/posts/[category]/[slug].${e}`,tsCode:`// src/app/api/posts/[category]/[slug].ts -> /api/posts/:category/:slug
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

export default app`}),(0,d.jsx)(r,{headers:[`URL`,`params`],rows:[[`/api/posts/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`],[`/api/posts/lifestyle/tips`,`{ category: "lifestyle", slug: "tips" }`]]})]}),(0,d.jsxs)(o,{id:`catch-all-routes`,title:`Catch-all Routes`,children:[(0,d.jsxs)(n,{children:[`Use `,(0,d.jsx)(s,{children:`[...name]`}),` in the filename to match any number of segments:`]}),(0,d.jsx)(i,{filename:`src/app/api/files/[...path].${e}`,tsCode:`// src/app/api/files/[...path].ts -> /api/files/*
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

export default app`}),(0,d.jsx)(r,{headers:[`URL`,`path value`],rows:[[`/api/files`,``],[`/api/files/images`,`images`],[`/api/files/images/2024`,`images/2024`],[`/api/files/docs/api/reference`,`docs/api/reference`]]}),(0,d.jsx)(a,{className:`mb-3 mt-8`,children:`Global Catch-all`}),(0,d.jsx)(i,{filename:`src/app/api/[...catch].${e}`,tsCode:`// src/app/api/[...catch].ts -> /api/*
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

export default app`})]}),(0,d.jsxs)(o,{id:`optional-catch-all`,title:`Optional Catch-all`,children:[(0,d.jsxs)(n,{children:[`Use `,(0,d.jsx)(s,{children:`[[...name]]`}),` to make the catch-all optional:`]}),(0,d.jsx)(i,{filename:`src/app/api/docs/[[...slug]].${e}`,tsCode:`// src/app/api/docs/[[...slug]].ts -> /api/docs or /api/docs/a/b
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

export default app`}),(0,d.jsx)(r,{headers:[`URL`,`slug value`],rows:[[`/api/docs`,`undefined (home page)`],[`/api/docs/getting-started`,`getting-started`],[`/api/docs/api/reference`,`api/reference`]]})]}),(0,d.jsxs)(o,{id:`nested-dynamic`,title:`Nested Dynamic Routes`,children:[(0,d.jsx)(n,{children:`Combine static and dynamic segments for complex routing:`}),(0,d.jsx)(i,{filename:`src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].${e}`,tsCode:`// src/app/api/orgs/[orgId]/repos/[repoId]/issues/[issueId].ts
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

export default app`})]}),(0,d.jsxs)(o,{id:`query-parameters`,title:`Query Parameters`,children:[(0,d.jsx)(n,{children:`Combine dynamic path parameters with query parameters:`}),(0,d.jsx)(i,{filename:`src/app/api/posts/[id]/comments.${e}`,tsCode:`// src/app/api/posts/[id]/comments.ts -> /api/posts/:id/comments
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

export default app`})]}),(0,d.jsxs)(o,{id:`route-priority`,title:`Route Priority`,children:[(0,d.jsx)(n,{children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,d.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,d.jsxs)(`ol`,{className:`list-decimal space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Static routes`}),` - exact matches`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Dynamic single segments`}),` -`,` `,(0,d.jsx)(s,{children:`[id]`})]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Catch-all segments`}),` -`,` `,(0,d.jsx)(s,{children:`[...slug]`})]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Optional catch-all`}),` -`,` `,(0,d.jsx)(s,{children:`[[...slug]]`})]})]})}),(0,d.jsx)(m,{ext:e}),(0,d.jsx)(l,{children:`Routes are sorted by priority and then by path length (shortest first). Static routes always win over dynamic ones.`})]}),(0,d.jsxs)(o,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(n,{children:`A full-featured store API with dynamic routing:`}),(0,d.jsx)(i,{filename:`src/app/api/store/[[...path]].${e}`,tsCode:`// src/app/api/store/[[...path]].ts -> /api/store or /api/store/*
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

export default app`})]})]})}function g(){return(0,d.jsx)(c,{title:`Dynamic API Routes`,description:`Create dynamic API endpoints with path parameters, catch-all routes, and optional segments.`,url:`https://bini.js.org/docs/api-dynamic`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-dynamic.tsx`,toc:f,prev:{to:`/docs/api-hono`,title:`Hono Integration`},next:{to:`/docs/api-cors`,title:`CORS`},children:(0,d.jsx)(h,{})})}export{g as default};