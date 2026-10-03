import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
//#region src/app/docs/api-cors.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "what-is-cors",
		label: "What is CORS?"
	},
	{
		id: "default-config",
		label: "Default Configuration"
	},
	{
		id: "disabling-cors",
		label: "Disabling CORS"
	},
	{
		id: "cors-with-hono",
		label: "CORS with Hono"
	},
	{
		id: "custom-cors",
		label: "Custom CORS Configuration"
	},
	{
		id: "production-deployment",
		label: "Production Deployment"
	}
];
function Content() {
	const lang = useDocLang();
	const s = lang === "js" ? "js" : "ts";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-is-cors",
			title: "What is CORS?",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Cross-Origin Resource Sharing (CORS) is a browser security feature that restricts web pages from making requests to a different origin than the one that served the page. CORS headers let servers specify which origins may access their resources." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Bini.js includes built-in CORS support for API routes, so you can expose APIs to other origins without extra setup." })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "default-config",
			title: "Default Configuration",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "CORS is enabled by default for all API routes in dev and preview. The default configuration includes:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-[14px] text-neutral-600 dark:text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-black dark:text-white",
									children: "Access-Control-Allow-Origin:"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "*" }),
								" (all origins)"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-black dark:text-white",
									children: "Access-Control-Allow-Methods:"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-black dark:text-white",
									children: "Access-Control-Allow-Headers:"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Content-Type, Authorization, X-Request-ID" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-black dark:text-white",
									children: "Access-Control-Max-Age:"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "86400" }),
								" (24 hours for preflight requests)"
							] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "This default works for most development and production scenarios. Customize it to restrict origins or allow specific headers when needed." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "disabling-cors",
			title: "Disabling CORS",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Disable CORS by setting ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cors: false" }),
					" in your ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniroute()" }),
					" configuration:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `vite.config.${lang === "js" ? "js" : "ts"}`,
					tsCode: `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    biniroute({
      cors: false, // Disable CORS for all API routes
    }),
  ],
})`,
					jsCode: `// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    biniroute({
      cors: false, // Disable CORS for all API routes
    }),
  ],
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Disabling CORS is useful for internal APIs or when CORS is handled at the infrastructure level (reverse proxy or CDN)." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "cors-with-hono",
			title: "CORS with Hono",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"With Hono you can configure CORS per route or globally using Hono's ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cors" }),
					" ",
					"middleware:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/users.${s}`,
					tsCode: `// src/app/api/users.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Global CORS for all routes in this file
app.use(
  '*',
  cors({
    origin: 'https://myapp.com',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  })
)

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))

export default app`,
					jsCode: `// src/app/api/users.js
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Global CORS for all routes in this file
app.use(
  '*',
  cors({
    origin: 'https://myapp.com',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  })
)

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/public.${s}`,
					tsCode: `// src/app/api/public.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Route-specific CORS
app.use(
  '/public/*',
  cors({
    origin: '*', // Public API allows all origins
  })
)

app.get('/public/data', (c) => c.json({ data: 'Public data' }))

// Protected route with strict CORS
app.use(
  '/private/*',
  cors({
    origin: 'https://admin.myapp.com',
    allowMethods: ['GET'],
    credentials: true,
  })
)

app.get('/private/admin', (c) => c.json({ data: 'Admin only' }))

export default app`,
					jsCode: `// src/app/api/public.js
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Route-specific CORS
app.use(
  '/public/*',
  cors({
    origin: '*', // Public API allows all origins
  })
)

app.get('/public/data', (c) => c.json({ data: 'Public data' }))

// Protected route with strict CORS
app.use(
  '/private/*',
  cors({
    origin: 'https://admin.myapp.com',
    allowMethods: ['GET'],
    credentials: true,
  })
)

app.get('/private/admin', (c) => c.json({ data: 'Admin only' }))

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Option",
						"Type",
						"Description"
					],
					rows: [
						[
							"origin",
							"string | string[] | \"*\"",
							"Allowed origins (default: \"*\")"
						],
						[
							"allowMethods",
							"string[]",
							"Allowed HTTP methods"
						],
						[
							"allowHeaders",
							"string[]",
							"Allowed request headers"
						],
						[
							"maxAge",
							"number",
							"Preflight cache duration in seconds"
						],
						[
							"credentials",
							"boolean",
							"Allow credentials (cookies, auth)"
						],
						[
							"exposeHeaders",
							"string[]",
							"Headers exposed to the browser"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "custom-cors",
			title: "Custom CORS Configuration",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "For more control, implement custom CORS handling in your API routes:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/custom.${s}`,
					tsCode: `// src/app/api/custom.ts
import { Hono } from 'hono'

const app = new Hono()

// Custom CORS middleware
app.use('*', async (c, next) => {
  const origin = c.req.header('Origin')
  const allowedOrigins = ['https://myapp.com', 'https://staging.myapp.com']

  if (origin && allowedOrigins.includes(origin)) {
    c.header('Access-Control-Allow-Origin', origin)
    c.header('Access-Control-Allow-Credentials', 'true')
  }

  // Handle preflight requests
  if (c.req.method === 'OPTIONS') {
    c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    c.header('Access-Control-Max-Age', '86400')
    return c.text('', 204)
  }

  await next()
})

app.get('/custom/data', (c) => c.json({ data: 'Custom CORS' }))

export default app`,
					jsCode: `// src/app/api/custom.js
import { Hono } from 'hono'

const app = new Hono()

// Custom CORS middleware
app.use('*', async (c, next) => {
  const origin = c.req.header('Origin')
  const allowedOrigins = ['https://myapp.com', 'https://staging.myapp.com']

  if (origin && allowedOrigins.includes(origin)) {
    c.header('Access-Control-Allow-Origin', origin)
    c.header('Access-Control-Allow-Credentials', 'true')
  }

  // Handle preflight requests
  if (c.req.method === 'OPTIONS') {
    c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    c.header('Access-Control-Max-Age', '86400')
    return c.text('', 204)
  }

  await next()
})

app.get('/custom/data', (c) => c.json({ data: 'Custom CORS' }))

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Custom CORS handling gives full control over headers and supports advanced cases like dynamic origin validation." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "production-deployment",
			title: "Production Deployment",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The same CORS configuration applies in production. Platform notes:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-[14px] text-neutral-600 dark:text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-black dark:text-white",
									children: "bini-server (Node.js):"
								}),
								" Uses the CORS config from your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite.config" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-black dark:text-white",
								children: "Netlify Edge Functions:"
							}), " Uses the CORS headers set in your Hono app"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-black dark:text-white",
								children: "Vercel Edge:"
							}), " Uses the CORS headers set in your Hono app"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-black dark:text-white",
								children: "Cloudflare Workers:"
							}), " Uses the CORS headers set in your Hono app"] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"In production, prefer specific origins over ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "*" }),
					". Never combine wildcard CORS with credentials."
				] })
			]
		})
	] });
}
function ApiCorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "CORS",
		description: "Configure Cross-Origin Resource Sharing (CORS) for your API routes.",
		url: "https://bini.js.org/docs/api-cors",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-cors.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/api-dynamic",
			title: "Dynamic API Routes"
		},
		next: {
			to: "/docs/environment-variables",
			title: "Environment Variables"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { ApiCorsPage as default };
