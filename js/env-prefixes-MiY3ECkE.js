import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual, l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/env-prefixes.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "what-are-prefixes",
		label: "What are Prefixes?"
	},
	{
		id: "bini-prefix",
		label: "BINI_ Prefix"
	},
	{
		id: "vite-prefix",
		label: "VITE_ Prefix"
	},
	{
		id: "no-prefix",
		label: "No Prefix (Secrets)"
	},
	{
		id: "client-access",
		label: "Client-Side Access"
	},
	{
		id: "server-access",
		label: "Server-Side Access"
	},
	{
		id: "getenv-vs-requireenv",
		label: "getEnv vs requireEnv"
	},
	{
		id: "security-best-practices",
		label: "Security Best Practices"
	}
];
var ERROR_TEXT = `[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`;
function ErrorTerminal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
		code: ERROR_TEXT,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-cyan-700 dark:text-cyan-400",
				children: "[bini-env]"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-red-600 dark:text-red-400",
				children: "error"
			}),
			"  Missing required environment variable: ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-yellow-700 dark:text-yellow-400",
				children: "\"SMTP_HOST\""
			}),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-green-600 dark:text-green-400",
				children: "->"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500 dark:text-neutral-400",
				children: "Set it in your platform's env config or hosting dashboard."
			})
		]
	});
}
function Content() {
	const lang = useDocLang();
	const t = lang === "js" ? "js" : "ts";
	const x = lang === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-are-prefixes",
			title: "What are Prefixes?",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Environment variable prefixes determine which variables are exposed to the browser and which are kept server-side. The prefix tells Vite and Bini.js how to handle each variable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 260,
					rows: [
						{
							n: ".env",
							dot: true
						},
						{ n: ".env.local" },
						{ n: ".env.development" },
						{ n: ".env.production" }
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Prefix",
						"Exposed to browser",
						"Read with",
						"Use for"
					],
					rows: [
						[
							"BINI_",
							"Yes",
							"import.meta.env",
							"Public client config"
						],
						[
							"VITE_",
							"Yes",
							"import.meta.env",
							"Public client config"
						],
						[
							"No prefix",
							"No",
							"getEnv / requireEnv",
							"Secrets - server only"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Both ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
					" prefixes are exposed to the browser by default. Variables without a prefix are never exposed to the client."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fixed prefixes:" }),
					" The prefix list in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }),
					" v2 is fixed to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "['BINI_', 'VITE_']" }),
					". There is no option to add custom prefixes."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "bini-prefix",
			title: "BINI_ Prefix",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
						" is the default prefix for client-side environment variables in Bini.js. These variables are exposed to the browser via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "import.meta.env" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{
							n: ".env",
							dot: true
						},
						{ n: "src" },
						{
							n: "app",
							d: 1
						},
						{
							n: `page.${x}`,
							d: 2,
							dot: true,
							url: "/"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
BINI_PUBLIC_API_URL=https://api.example.com
BINI_APP_NAME=My App
BINI_ANALYTICS_ID=UA-XXXX`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/page.${x}`,
					code: `export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.BINI_APP_NAME
  const analyticsId = import.meta.env.BINI_ANALYTICS_ID

  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
      <p>Analytics: {analyticsId}</p>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Important:" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
					" variables are bundled into your client-side JavaScript. Never put secrets in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
					" variables."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "vite-prefix",
			title: "VITE_ Prefix",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" is Vite's standard prefix for client-side environment variables. Any variable starting with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" is exposed to the browser."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
VITE_GA_ID=UA-XXXXX`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/page.${x}`,
					code: `export default function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL
  const title = import.meta.env.VITE_APP_TITLE
  const gaId = import.meta.env.VITE_GA_ID

  return (
    <div>
      <h1>{title}</h1>
      <p>API: {apiUrl}</p>
      <p>Analytics: {gaId}</p>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Note:" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
					" work the same way. Both are exposed to the browser. Choose whichever you prefer."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "no-prefix",
			title: "No Prefix (Secrets)",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Variables without a prefix are ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "never" }),
						" exposed to the browser. They are only accessible server-side via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(ctx, key)" }),
						" in API routes."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{
							n: ".env",
							dot: true
						},
						{ n: "src" },
						{
							n: "app",
							d: 1
						},
						{
							n: "api",
							d: 2
						},
						{
							n: `config.${t}`,
							d: 3,
							fn: true,
							dot: true,
							url: "/api/config"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
DATABASE_URL=postgres://localhost:5432/mydb
STRIPE_SECRET_KEY=sk_live_...
SMTP_PASS=super_secret
JWT_SECRET=your_jwt_secret`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/config.${t}`,
					tsCode: `// src/app/api/config.ts
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any

  // These are only accessible server-side
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const jwtSecret = requireEnv(ctx, 'JWT_SECRET')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')

  // Never expose secrets in responses
  return c.json({
    dbConnected: !!dbUrl,
    jwtConfigured: !!jwtSecret,
    smtpConfigured: !!smtpPass,
  })
})

export default app`,
					jsCode: `// src/app/api/config.js
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  // These are only accessible server-side
  const dbUrl = requireEnv(c, 'DATABASE_URL')
  const jwtSecret = requireEnv(c, 'JWT_SECRET')
  const smtpPass = requireEnv(c, 'SMTP_PASS')

  // Never expose secrets in responses
  return c.json({
    dbConnected: !!dbUrl,
    jwtConfigured: !!jwtSecret,
    smtpConfigured: !!smtpPass,
  })
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Critical:" }),
					" Variables without a prefix are the only way to keep secrets secure. Never use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
					" or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }),
					" for sensitive data."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "client-access",
			title: "Client-Side Access",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Client-side variables are accessed via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "import.meta.env" }),
						" in any component:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/page.${x}`,
					code: `export default function Page() {
  // Access client-side variables
  const apiUrl = import.meta.env.BINI_API_URL
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mt-4 mb-4",
					children: "The same works in MDX files:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/about/page.mdx",
					code: `export const metadata = {
  title: import.meta.env.VITE_APP_NAME,
}

# Welcome to {import.meta.env.VITE_APP_NAME}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "import.meta.env" }), " is available in all client-side code including pages, components, and MDX files."] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "server-access",
			title: "Server-Side Access",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Server-side variables are accessed via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(ctx, key)" }),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv(ctx, key)" }),
						" in API routes:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{
							n: ".env",
							dot: true
						},
						{ n: "src" },
						{
							n: "app",
							d: 1
						},
						{
							n: "api",
							d: 2
						},
						{
							n: `email.${t}`,
							d: 3,
							fn: true,
							dot: true,
							url: "/api/email/send"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/email.${t}`,
					tsCode: `// src/app/api/email.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email/send', async (c) => {
  const ctx = c as any

  // Server-side secrets (no prefix)
  const smtpHost = requireEnv(ctx, 'SMTP_HOST')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')
  const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

  // Optional config with defaults
  const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')

  // Client-side config (BINI_)
  const publicUrl = getEnv(ctx, 'BINI_API_URL')

  return c.json({
    success: true,
    publicUrl, // This is safe to return
    // smtpPass is NEVER returned to the client
  })
})

export default app`,
					jsCode: `// src/app/api/email.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email/send', async (c) => {
  // Server-side secrets (no prefix)
  const smtpHost = requireEnv(c, 'SMTP_HOST')
  const smtpPass = requireEnv(c, 'SMTP_PASS')
  const fromEmail = requireEnv(c, 'FROM_EMAIL')

  // Optional config with defaults
  const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587')

  // Client-side config (BINI_)
  const publicUrl = getEnv(c, 'BINI_API_URL')

  return c.json({
    success: true,
    publicUrl, // This is safe to return
    // smtpPass is NEVER returned to the client
  })
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Access Method",
						"Where",
						"Variables"
					],
					rows: [
						[
							"import.meta.env",
							"Client components",
							"BINI_, VITE_"
						],
						[
							"getEnv(ctx, key)",
							"API routes",
							"All variables (including no prefix)"
						],
						[
							"requireEnv(ctx, key)",
							"API routes",
							"All variables (throws if missing)"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "getenv-vs-requireenv",
			title: "getEnv vs requireEnv",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Both ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" read environment variables from the Hono request context, but they behave differently:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Feature",
						"getEnv(ctx, key)",
						"requireEnv(ctx, key)"
					],
					rows: [
						[
							"Returns",
							"string | undefined",
							"string"
						],
						[
							"On missing",
							"Returns undefined",
							"Throws error immediately"
						],
						[
							"Use case",
							"Optional configuration with defaults",
							"Required configuration"
						],
						[
							"Default pattern",
							"getEnv(ctx, 'KEY') ?? 'default'",
							"requireEnv(ctx, 'KEY')"
						],
						[
							"Error handling",
							"Manual check for undefined",
							"Try/catch or let it bubble"
						],
						[
							"When to use",
							"Feature flags, optional settings",
							"Database URLs, API keys, credentials"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/compare.${t}`,
					tsCode: `// src/app/api/compare.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/compare', (c) => {
  const ctx = c as any

  // getEnv - for optional values
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
  const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
  const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')

  // requireEnv - for required values
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')

  return c.json({ debug, region, maxRetries, ready: !!(dbUrl && apiKey && smtpPass) })
})

export default app`,
					jsCode: `// src/app/api/compare.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/compare', (c) => {
  // getEnv - for optional values
  const debug = getEnv(c, 'DEBUG_MODE') === 'true'
  const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
  const maxRetries = parseInt(getEnv(c, 'MAX_RETRIES') ?? '3')

  // requireEnv - for required values
  const dbUrl = requireEnv(c, 'DATABASE_URL')
  const apiKey = requireEnv(c, 'STRIPE_SECRET_KEY')
  const smtpPass = requireEnv(c, 'SMTP_PASS')

  return c.json({ debug, region, maxRetries, ready: !!(dbUrl && apiKey && smtpPass) })
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Best practice:" }),
					" Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" for critical configuration that your app cannot function without. Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "??" }),
					" defaults for optional configuration."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4 mb-4",
					children: [
						"On failure, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" logs a descriptive error to the terminal:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorTerminal, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "security-best-practices",
			title: "Security Best Practices",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Never prefix secrets" }), " - Use no prefix for database URLs, API keys, and tokens."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Use BINI_ or VITE_ for public config" }), " - Use these for non-sensitive configuration like API URLs."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Use requireEnv for critical values" }), " - Fail fast when required configuration is missing."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Use getEnv with defaults for optional values" }), " - Keep your app flexible with sensible defaults."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Never expose secrets in responses" }), " - Do not return secret values from API routes."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Use .env.example" }), " - Document required variables without committing actual values."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Keep .env in .gitignore" }), " - Never commit environment files with secrets."] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: ".env.example" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env.example",
					lang: "text",
					code: `# .env.example - commit this file, never your real .env

# Public (exposed to the browser)
BINI_PUBLIC_API_URL=
VITE_APP_NAME=

# Secrets (server only)
DATABASE_URL=
JWT_SECRET=`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: ".gitignore"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".gitignore",
					lang: "text",
					code: `# .gitignore
.env
.env.local
.env.*.local`
				})
			]
		})
	] });
}
function EnvPrefixesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Prefixes & Client Exposure",
		description: "Learn how environment variable prefixes work and which variables are exposed to the client.",
		url: "https://bini.js.org/docs/env-prefixes",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/env-prefixes.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/environment-variables",
			title: "Environment Variables"
		},
		next: {
			to: "/docs/env-api",
			title: "Using in API Routes"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { EnvPrefixesPage as default };
