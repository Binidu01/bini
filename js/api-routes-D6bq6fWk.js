import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/api-routes.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "file-structure",
		label: "File Structure"
	},
	{
		id: "plain-function-handler",
		label: "Plain Function Handler"
	},
	{
		id: "hono-integration",
		label: "Hono Integration"
	},
	{
		id: "hono-middleware",
		label: "Hono Middleware"
	},
	{
		id: "dynamic-api-routes",
		label: "Dynamic API Routes"
	},
	{
		id: "catch-all-api-routes",
		label: "Catch-all API Routes"
	},
	{
		id: "environment-variables",
		label: "Environment Variables"
	},
	{
		id: "request-response",
		label: "Request & Response"
	},
	{
		id: "cors",
		label: "CORS"
	},
	{
		id: "deployment",
		label: "Deployment"
	}
];
function Content() {
	const e = useDocLang() === "js" ? "js" : "ts";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Place files in ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
				" and they become routes at ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" }),
				".",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hello.ts" }),
				" maps to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/hello" }),
				", ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "users.ts" }),
				" to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/users" }),
				"."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				"Every API file ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "must" }),
				" use a ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "default" }),
				" export. Named exports are not used as handlers."
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "file-structure",
			title: "File Structure",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"The filename (without extension) becomes the last path segment under ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/" }),
					". API files use the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ƒ" }),
					" icon."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{ n: "app" },
						{
							n: "api",
							d: 1
						},
						{
							n: `hello.${e}`,
							d: 2,
							fn: true,
							url: "/api/hello",
							dot: true
						},
						{
							n: `users.${e}`,
							d: 2,
							fn: true,
							url: "/api/users"
						},
						{
							n: "posts",
							d: 2
						},
						{
							n: `index.${e}`,
							d: 3,
							fn: true,
							url: "/api/posts"
						},
						{
							n: `[id].${e}`,
							d: 3,
							fn: true,
							url: "/api/posts/:id"
						},
						{
							n: `[...catch].${e}`,
							d: 2,
							fn: true,
							url: "/api/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"There is no bare ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api" }),
					" route. Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "posts/index.ts" }),
					" for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/posts" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "plain-function-handler",
			title: "Plain Function Handler",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"A default-exported async function receives the Web Standard ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Request" }),
					" and returns a",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Response" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/hello.${e}`,
					tsCode: `import { z } from 'zod'
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
}`,
					jsCode: `import { z } from 'zod'
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
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Validate input, require auth, and prefer typed errors. For many endpoints, Hono is usually clearer." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "hono-integration",
			title: "Hono Integration",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Export a Hono app as the default export. Write routes without the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api" }),
				" prefix - the router mounts them under ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api" }),
				"."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `src/app/api/users.${e}`,
				tsCode: `import { Hono } from 'hono'
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

export default app`,
				jsCode: `import { Hono } from 'hono'
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

export default app`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "hono-middleware",
			title: "Hono Middleware",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Prefer an explicit CORS allowlist, security headers, and rate limiting." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/secure.${e}`,
					tsCode: `import { Hono } from 'hono'
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

export default app`,
					jsCode: `import { Hono } from 'hono'
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

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Middleware", "Purpose"],
					rows: [
						["cors (allowlist)", "CORS - never open origin in production"],
						["secureHeaders", "CSP and related headers"],
						["rate limiter", "Throttle abusive clients"],
						["auth / jwt", "Verify Bearer tokens"]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "dynamic-api-routes",
			title: "Dynamic API Routes",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[id]" }),
				" folders or files for path params. Validate params before use."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `src/app/api/posts/[id].${e}`,
				tsCode: `import { Hono } from 'hono'
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

export default app`,
				jsCode: `import { Hono } from 'hono'
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

export default app`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "catch-all-api-routes",
			title: "Catch-all API Routes",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...catch]" }),
				" matches remaining unmatched ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" }),
				" paths. Prefer a generic 404 without leaking internal paths."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `src/app/api/[...catch].${e}`,
				tsCode: `export default function handler(request: Request) {
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
}`,
				jsCode: `export default function handler(request) {
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
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "environment-variables",
			title: "Environment Variables",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" from ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }),
					" so secrets work across runtimes."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/email.${e}`,
					tsCode: `import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email', async (c) => {
  const ctx = c as any
  const smtpHost = requireEnv(ctx, 'SMTP_HOST')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')
  const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587', 10)

  return c.json({ success: true, host: smtpHost, port: smtpPort })
})

export default app`,
					jsCode: `import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email', async (c) => {
  const smtpHost = requireEnv(c, 'SMTP_HOST')
  const smtpPass = requireEnv(c, 'SMTP_PASS')
  const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587', 10)

  return c.json({ success: true, host: smtpHost, port: smtpPort })
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: `const ctx = c as any
requireEnv(ctx, 'KEY')
getEnv(ctx, 'KEY') ?? 'default'` })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "request-response",
			title: "Request & Response",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Prefer safe JSON parsing and schema validation for query and body values." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				tsCode: `import { z } from 'zod'

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
}`,
				jsCode: `import { z } from 'zod'

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
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "cors",
			title: "CORS",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Use an explicit origin allowlist in production. Avoid open ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cors()" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					tsCode: `import { defineConfig } from 'vite'
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
})`,
					jsCode: `import { defineConfig } from 'vite'
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
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/cors.${e}`,
					tsCode: `import { Hono } from 'hono'
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

export default app`,
					jsCode: `import { Hono } from 'hono'
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

export default app`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deployment",
			title: "Deployment",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"API routes work across platforms. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }),
					" generates the platform entry files."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: "$ npm run deploy"
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: "$ pnpm deploy"
					},
					{
						id: "yarn",
						label: "yarn",
						command: "$ yarn deploy"
					},
					{
						id: "bun",
						label: "bun",
						command: "$ bun run deploy"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Node.js" }), " - bini-server"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Netlify" }), " - Edge Functions"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Vercel" }), " - Edge Runtime"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Cloudflare" }), " - Workers"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Deno" }), " - Deno Deploy"] })
					]
				}) })
			]
		})
	] });
}
function ApiRoutesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "API Routes Overview",
		description: "Backend endpoints with plain Request handlers or Hono. Files under app/api/ map to /api/*.",
		url: "https://bini.js.org/docs/api-routes",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-routes.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/icons",
			title: "Icons & Favicons"
		},
		next: {
			to: "/docs/api-plain",
			title: "Plain Function Handlers"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { ApiRoutesPage as default };
