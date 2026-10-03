import{y as e}from"./index-eA3lPtwc.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c,u as l}from"./DocBlocks-B2Cf0_q3.js";import{l as u}from"./DocVisuals-BJRQ2yKE.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`file-structure`,label:`File Structure`},{id:`plain-function-handler`,label:`Plain Function Handler`},{id:`hono-integration`,label:`Hono Integration`},{id:`hono-middleware`,label:`Hono Middleware`},{id:`dynamic-api-routes`,label:`Dynamic API Routes`},{id:`catch-all-api-routes`,label:`Catch-all API Routes`},{id:`environment-variables`,label:`Environment Variables`},{id:`request-response`,label:`Request & Response`},{id:`cors`,label:`CORS`},{id:`deployment`,label:`Deployment`}];function p(){let e=t()===`js`?`js`:`ts`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(n,{children:[`Place files in `,(0,d.jsx)(o,{children:`src/app/api/`}),` and they become routes at `,(0,d.jsx)(o,{children:`/api/*`}),`.`,` `,(0,d.jsx)(o,{children:`hello.ts`}),` maps to `,(0,d.jsx)(o,{children:`/api/hello`}),`, `,(0,d.jsx)(o,{children:`users.ts`}),` to `,(0,d.jsx)(o,{children:`/api/users`}),`.`]}),(0,d.jsxs)(c,{children:[`Every API file `,(0,d.jsx)(`strong`,{children:`must`}),` use a `,(0,d.jsx)(o,{children:`default`}),` export. Named exports are not used as handlers.`]})]}),(0,d.jsxs)(a,{id:`file-structure`,title:`File Structure`,children:[(0,d.jsxs)(n,{children:[`The filename (without extension) becomes the last path segment under `,(0,d.jsx)(o,{children:`/api/`}),`. API files use the `,(0,d.jsx)(o,{children:`ƒ`}),` icon.`]}),(0,d.jsx)(u,{fileWidth:260,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,url:`/api/hello`,dot:!0},{n:`users.${e}`,d:2,fn:!0,url:`/api/users`},{n:`posts`,d:2},{n:`index.${e}`,d:3,fn:!0,url:`/api/posts`},{n:`[id].${e}`,d:3,fn:!0,url:`/api/posts/:id`},{n:`[...catch].${e}`,d:2,fn:!0,url:`/api/*`}]}),(0,d.jsxs)(c,{children:[`There is no bare `,(0,d.jsx)(o,{children:`/api`}),` route. Use `,(0,d.jsx)(o,{children:`posts/index.ts`}),` for `,(0,d.jsx)(o,{children:`/api/posts`}),`.`]})]}),(0,d.jsxs)(a,{id:`plain-function-handler`,title:`Plain Function Handler`,children:[(0,d.jsxs)(n,{children:[`A default-exported async function receives the Web Standard `,(0,d.jsx)(o,{children:`Request`}),` and returns a`,` `,(0,d.jsx)(o,{children:`Response`}),`.`]}),(0,d.jsx)(i,{filename:`src/app/api/hello.${e}`,tsCode:`import { z } from 'zod'
import { requireEnv } from 'bini-env'

const BodySchema = z.object({
  name: z.string().min(1).max(100),
})

export default async function handler(request: Request) {
  if (request.method !== 'GET' && request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const auth = request.headers.get('Authorization')
  if (!auth || !auth.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const expectedToken = requireEnv(request as any, 'API_SECRET')
  if (auth !== \`Bearer \${expectedToken}\`) {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (request.method === 'GET') {
    return Response.json(
      { message: 'Hello World' },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  }

  const raw = await request.json().catch(() => null)
  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) {
    return Response.json(
      { error: 'Invalid body', issues: parsed.error.flatten() },
      { status: 400 }
    )
  }

  return Response.json({ created: parsed.data }, { status: 201 })
}`,jsCode:`import { z } from 'zod'
import { requireEnv } from 'bini-env'

const BodySchema = z.object({
  name: z.string().min(1).max(100),
})

export default async function handler(request) {
  if (request.method !== 'GET' && request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const auth = request.headers.get('Authorization')
  if (!auth || !auth.startsWith('Bearer ')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const expectedToken = requireEnv(request, 'API_SECRET')
  if (auth !== \`Bearer \${expectedToken}\`) {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (request.method === 'GET') {
    return Response.json(
      { message: 'Hello World' },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  }

  const raw = await request.json().catch(() => null)
  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) {
    return Response.json(
      { error: 'Invalid body', issues: parsed.error.flatten() },
      { status: 400 }
    )
  }

  return Response.json({ created: parsed.data }, { status: 201 })
}`}),(0,d.jsx)(c,{children:`Validate input, require auth, and prefer typed errors. For many endpoints, Hono is usually clearer.`})]}),(0,d.jsxs)(a,{id:`hono-integration`,title:`Hono Integration`,children:[(0,d.jsxs)(n,{children:[`Export a Hono app as the default export. Write routes without the `,(0,d.jsx)(o,{children:`/api`}),` prefix - the router mounts them under `,(0,d.jsx)(o,{children:`/api`}),`.`]}),(0,d.jsx)(i,{filename:`src/app/api/users.${e}`,tsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: ['https://myapp.com', 'https://app.myapp.com'],
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Authorization', 'Content-Type'],
  })
)

app.use('*', async (c, next) => {
  const auth = c.req.header('Authorization')
  const secret = requireEnv(c as any, 'API_SECRET')
  if (!auth || auth !== \`Bearer \${secret}\`) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  await next()
})

const CreateSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
})

app.get('/users', (c) => {
  return c.json(
    { users: [{ id: '1', name: 'alice' }] },
    200,
    { 'Cache-Control': 'no-store' }
  )
})

app.post('/users', zValidator('json', CreateSchema), async (c) => {
  const body = c.req.valid('json')
  return c.json({ created: body }, 201)
})

app.get('/users/:id', (c) => {
  const id = c.req.param('id')
  if (!/^\\d+$/.test(id)) {
    return c.json({ error: 'Invalid id' }, 400)
  }
  return c.json({ id, name: \`User \${id}\` })
})

export default app`,jsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: ['https://myapp.com', 'https://app.myapp.com'],
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Authorization', 'Content-Type'],
  })
)

app.use('*', async (c, next) => {
  const auth = c.req.header('Authorization')
  const secret = requireEnv(c, 'API_SECRET')
  if (!auth || auth !== \`Bearer \${secret}\`) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  await next()
})

const CreateSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
})

app.get('/users', (c) => {
  return c.json(
    { users: [{ id: '1', name: 'alice' }] },
    200,
    { 'Cache-Control': 'no-store' }
  )
})

app.post('/users', zValidator('json', CreateSchema), async (c) => {
  const body = c.req.valid('json')
  return c.json({ created: body }, 201)
})

app.get('/users/:id', (c) => {
  const id = c.req.param('id')
  if (!/^\\d+$/.test(id)) {
    return c.json({ error: 'Invalid id' }, 400)
  }
  return c.json({ id, name: \`User \${id}\` })
})

export default app`})]}),(0,d.jsxs)(a,{id:`hono-middleware`,title:`Hono Middleware`,children:[(0,d.jsx)(n,{children:`Prefer an explicit CORS allowlist, security headers, and rate limiting.`}),(0,d.jsx)(i,{filename:`src/app/api/secure.${e}`,tsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono()

app.use(
  '*',
  secureHeaders({
    contentSecurityPolicy: { defaultSrc: ["'self'"] },
  })
)

app.use(
  '*',
  cors({
    origin: ['https://myapp.com'],
    allowMethods: ['GET', 'POST'],
    credentials: true,
  })
)

app.get('/secure', (c) => {
  return c.json(
    { message: 'Authenticated endpoint' },
    200,
    { 'Cache-Control': 'no-store' }
  )
})

export default app`,jsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono()

app.use(
  '*',
  secureHeaders({
    contentSecurityPolicy: { defaultSrc: ["'self'"] },
  })
)

app.use(
  '*',
  cors({
    origin: ['https://myapp.com'],
    allowMethods: ['GET', 'POST'],
    credentials: true,
  })
)

app.get('/secure', (c) => {
  return c.json(
    { message: 'Authenticated endpoint' },
    200,
    { 'Cache-Control': 'no-store' }
  )
})

export default app`}),(0,d.jsx)(r,{headers:[`Middleware`,`Purpose`],rows:[[`cors (allowlist)`,`CORS - never open origin in production`],[`secureHeaders`,`CSP and related headers`],[`rate limiter`,`Throttle abusive clients`],[`auth / jwt`,`Verify Bearer tokens`]]})]}),(0,d.jsxs)(a,{id:`dynamic-api-routes`,title:`Dynamic API Routes`,children:[(0,d.jsxs)(n,{children:[`Use `,(0,d.jsx)(o,{children:`[id]`}),` folders or files for path params. Validate params before use.`]}),(0,d.jsx)(i,{filename:`src/app/api/posts/[id].${e}`,tsCode:`import { Hono } from 'hono'
import { z } from 'zod'

const app = new Hono()

app.get('/posts/:id', (c) => {
  const id = c.req.param('id')
  const parsed = z.string().regex(/^\\d+$/).safeParse(id)
  if (!parsed.success) {
    return c.json({ error: 'Invalid id format' }, 400)
  }
  return c.json(
    { id: parsed.data, title: \`Post \${parsed.data}\` },
    200,
    { 'Cache-Control': 'private, max-age=60' }
  )
})

export default app`,jsCode:`import { Hono } from 'hono'
import { z } from 'zod'

const app = new Hono()

app.get('/posts/:id', (c) => {
  const id = c.req.param('id')
  const parsed = z.string().regex(/^\\d+$/).safeParse(id)
  if (!parsed.success) {
    return c.json({ error: 'Invalid id format' }, 400)
  }
  return c.json(
    { id: parsed.data, title: \`Post \${parsed.data}\` },
    200,
    { 'Cache-Control': 'private, max-age=60' }
  )
})

export default app`})]}),(0,d.jsxs)(a,{id:`catch-all-api-routes`,title:`Catch-all API Routes`,children:[(0,d.jsxs)(n,{children:[(0,d.jsx)(o,{children:`[...catch]`}),` matches remaining unmatched `,(0,d.jsx)(o,{children:`/api/*`}),` paths. Prefer a generic 404 without leaking internal paths.`]}),(0,d.jsx)(i,{filename:`src/app/api/[...catch].${e}`,tsCode:`export default function handler(request: Request) {
  console.warn('Unmatched API route', { method: request.method })

  return Response.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
    },
    {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    }
  )
}`,jsCode:`export default function handler(request) {
  console.warn('Unmatched API route', { method: request.method })

  return Response.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
    },
    {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    }
  )
}`})]}),(0,d.jsxs)(a,{id:`environment-variables`,title:`Environment Variables`,children:[(0,d.jsxs)(n,{children:[`Use `,(0,d.jsx)(o,{children:`getEnv`}),` and `,(0,d.jsx)(o,{children:`requireEnv`}),` from `,(0,d.jsx)(o,{children:`bini-env`}),` so secrets work across runtimes.`]}),(0,d.jsx)(i,{filename:`src/app/api/email.${e}`,tsCode:`import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email', async (c) => {
  const ctx = c as any
  const smtpHost = requireEnv(ctx, 'SMTP_HOST')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')
  const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587', 10)

  return c.json({ success: true, host: smtpHost, port: smtpPort })
})

export default app`,jsCode:`import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email', async (c) => {
  const smtpHost = requireEnv(c, 'SMTP_HOST')
  const smtpPass = requireEnv(c, 'SMTP_PASS')
  const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587', 10)

  return c.json({ success: true, host: smtpHost, port: smtpPort })
})

export default app`}),(0,d.jsx)(i,{code:`const ctx = c as any
requireEnv(ctx, 'KEY')
getEnv(ctx, 'KEY') ?? 'default'`})]}),(0,d.jsxs)(a,{id:`request-response`,title:`Request & Response`,children:[(0,d.jsx)(n,{children:`Prefer safe JSON parsing and schema validation for query and body values.`}),(0,d.jsx)(i,{tsCode:`import { z } from 'zod'

const QuerySchema = z.object({
  page: z.coerce.number().int().min(1).max(100).default(1),
})

export default async function handler(request: Request) {
  const auth = request.headers.get('Authorization')
  if (!auth) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rawJson = await request.json().catch(() => null)
  if (!rawJson) {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { searchParams } = new URL(request.url)
  const queryParsed = QuerySchema.safeParse({
    page: searchParams.get('page') ?? '1',
  })

  if (!queryParsed.success) {
    return Response.json({ error: 'Invalid query' }, { status: 400 })
  }

  return Response.json(
    { data: rawJson, page: queryParsed.data.page },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}`,jsCode:`import { z } from 'zod'

const QuerySchema = z.object({
  page: z.coerce.number().int().min(1).max(100).default(1),
})

export default async function handler(request) {
  const auth = request.headers.get('Authorization')
  if (!auth) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rawJson = await request.json().catch(() => null)
  if (!rawJson) {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { searchParams } = new URL(request.url)
  const queryParsed = QuerySchema.safeParse({
    page: searchParams.get('page') ?? '1',
  })

  if (!queryParsed.success) {
    return Response.json({ error: 'Invalid query' }, { status: 400 })
  }

  return Response.json(
    { data: rawJson, page: queryParsed.data.page },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}`})]}),(0,d.jsxs)(a,{id:`cors`,title:`CORS`,children:[(0,d.jsxs)(n,{children:[`Use an explicit origin allowlist in production. Avoid open `,(0,d.jsx)(o,{children:`cors()`}),`.`]}),(0,d.jsx)(i,{filename:`vite.config.ts`,tsCode:`import { defineConfig } from 'vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    biniroute({
      cors: {
        origin: ['https://myapp.com', 'https://app.myapp.com'],
        methods: ['GET', 'POST'],
        credentials: true,
      },
    }),
  ],
})`,jsCode:`import { defineConfig } from 'vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    biniroute({
      cors: {
        origin: ['https://myapp.com', 'https://app.myapp.com'],
        methods: ['GET', 'POST'],
        credentials: true,
      },
    }),
  ],
})`}),(0,d.jsx)(i,{filename:`src/app/api/cors.${e}`,tsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: (origin) => {
      const allowed = ['https://myapp.com', 'https://app.myapp.com']
      return allowed.includes(origin ?? '') ? origin : null
    },
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
    maxAge: 86400,
  })
)

export default app`,jsCode:`import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: (origin) => {
      const allowed = ['https://myapp.com', 'https://app.myapp.com']
      return allowed.includes(origin ?? '') ? origin : null
    },
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
    maxAge: 86400,
  })
)

export default app`})]}),(0,d.jsxs)(a,{id:`deployment`,title:`Deployment`,children:[(0,d.jsxs)(n,{children:[`API routes work across platforms. `,(0,d.jsx)(o,{children:`bini-deploy`}),` generates the platform entry files.`]}),(0,d.jsx)(l,{tabs:[{id:`npm`,label:`npm`,command:`$ npm run deploy`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm deploy`},{id:`yarn`,label:`yarn`,command:`$ yarn deploy`},{id:`bun`,label:`bun`,command:`$ bun run deploy`}]}),(0,d.jsx)(c,{children:(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Node.js`}),` - bini-server`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Netlify`}),` - Edge Functions`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Vercel`}),` - Edge Runtime`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Cloudflare`}),` - Workers`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Deno`}),` - Deno Deploy`]})]})})]})]})}function m(){return(0,d.jsx)(s,{title:`API Routes Overview`,description:`Backend endpoints with plain Request handlers or Hono. Files under app/api/ map to /api/*.`,url:`https://bini.js.org/docs/api-routes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-routes.tsx`,toc:f,prev:{to:`/docs/icons`,title:`Icons & Favicons`},next:{to:`/docs/api-plain`,title:`Plain Function Handlers`},children:(0,d.jsx)(p,{})})}export{m as default};