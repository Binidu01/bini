import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual, l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/environment-variables.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "quick-start",
		label: "Quick Start"
	},
	{
		id: "usage-pattern",
		label: "Usage Pattern"
	},
	{
		id: "environment-prefixes",
		label: "Environment Prefixes"
	},
	{
		id: "platform-support",
		label: "Platform Support"
	},
	{
		id: "how-it-works",
		label: "How It Works"
	},
	{
		id: "api-reference",
		label: "API Reference"
	},
	{
		id: "security",
		label: "Security Best Practices"
	},
	{
		id: "performance",
		label: "Performance"
	},
	{
		id: "troubleshooting",
		label: "Troubleshooting"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
var BANNER_TEXT = `  ß Bini.js (dev)
  ->  Environments: .env.local, .env
  ->  Local:   http://localhost:3000/
  ->  Network: http://192.168.1.7:3000/`;
var ERROR_TEXT = `[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`;
var Arrow = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-green-600 dark:text-green-400",
	children: "➜"
});
var Label = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
	className: "font-bold text-neutral-900 dark:text-white",
	children
});
var Url = ({ host }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	className: "text-cyan-700 dark:text-cyan-400",
	children: [
		"http://",
		host,
		":",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-bold",
			children: "3000"
		}),
		"/"
	]
});
function ServerBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
		code: BANNER_TEXT,
		children: [
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold text-cyan-700 dark:text-cyan-400",
				children: "ß Bini.js"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "(dev)"
			}),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Environments:" }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-600 dark:text-neutral-400",
				children: ".env.local, .env"
			}),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Local:" }),
			"   ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Url, { host: "localhost" }),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Network:" }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Url, { host: "192.168.1.7" })
		]
	});
}
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }),
					" is ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "installed and configured by default" }),
					" in every Bini.js project. It reads env vars from the Hono request context, so variables are always resolved from the correct runtime binding - no platform-specific code needed."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hono-native:" }),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(c, key)" }),
				" / ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv(c, key)" }),
				" read directly from the Hono request context. Zero dotenv - no ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
				" parsing at runtime; vars come from the host platform. Vite handles ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
				" loading during development."
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "quick-start",
			title: "Quick Start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }),
						" plugin is already registered when you scaffold a new Bini.js project - nothing to configure in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `vite.config.${t}` }),
						". Just start using ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" in your API routes."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{
							n: ".env",
							dot: true
						},
						{ n: `vite.config.${t}` },
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
							n: `hello.${t}`,
							d: 3,
							fn: true,
							dot: true,
							url: "/api/hello"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `vite.config.${t}`,
					tsCode: `// vite.config.ts - already configured on scaffold
// biniEnv() is included by default - no setup needed
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()],
})`,
					jsCode: `// vite.config.js - already configured on scaffold
// biniEnv() is included by default - no setup needed
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()],
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "Read env vars in your Hono handlers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/hello.${t}`,
					tsCode: `// src/app/api/hello.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const ctx = c as any

    const apiKey = requireEnv(ctx, 'MY_API_KEY')
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,
					jsCode: `// src/app/api/hello.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const apiKey = requireEnv(c, 'MY_API_KEY')
    const appName = getEnv(c, 'APP_NAME') ?? 'World'

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Plugin is already registered on scaffold - no manual ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "loadEnv" }),
					" loop in",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `vite.config.${t}` }),
					" needed. Your secret just needs to exist in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
					" with no prefix, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" will find it during dev and preview."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "usage-pattern",
			title: "Usage Pattern",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Always pass ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c" }),
						" explicitly. Cast it once at the top of the handler, then use",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ctx" }),
						" throughout."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/example.${t}`,
					tsCode: `// src/app/api/example.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/example', async (c) => {
  try {
    const ctx = c as any

    const dbUrl = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    const model = getEnv(ctx, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,
					jsCode: `// src/app/api/example.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/example', async (c) => {
  try {
    const dbUrl = requireEnv(c, 'DATABASE_URL')
    const apiKey = requireEnv(c, 'STRIPE_SECRET_KEY')

    const model = getEnv(c, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(c, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(c, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mt-4 mb-4",
					children: "The pattern in three steps:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/pattern.${t}`,
					tsCode: `// src/app/api/pattern.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/pattern', (c) => {
  const ctx = c as any                          // 1. cast once, at the top
  const secret = requireEnv(ctx, 'KEY')         // 2. throws if missing
  const mode = getEnv(ctx, 'MODE') ?? 'default' // 3. optional with default

  return c.json({ ok: !!secret, mode })
})

export default app`,
					jsCode: `// src/app/api/pattern.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/pattern', (c) => {
  const secret = requireEnv(c, 'KEY')           // 1. throws if missing
  const mode = getEnv(c, 'MODE') ?? 'default'   // 2. optional with default

  return c.json({ ok: !!secret, mode })
})

export default app`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "environment-prefixes",
			title: "Environment Prefixes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Vite loads ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" files from your project root. The prefix of each variable decides where it ends up."
					]
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "BINI_ - Client-side vars" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
						" variables are exposed to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "import.meta.env" }),
						". Use them for public client-side config."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
BINI_PUBLIC_API_URL=https://api.example.com`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/page.${x}`,
					code: `export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL

  return <p>API: {apiUrl}</p>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "VITE_ - Public client vars"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" is Vite's built-in prefix. Any var starting with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" is bundled into your client-side JavaScript."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
VITE_ANALYTICS_ID=UA-XXXX`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/page.${x}`,
					code: `export default function HomePage() {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID

  return <p>Analytics: {analyticsId}</p>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "No prefix - Secrets (server only)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Variables without a prefix are NOT exposed to the browser. During dev/preview they are mirrored into ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
						" automatically, and read via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(ctx, key)" }),
						" in API routes."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/secrets.${t}`,
					tsCode: `// src/app/api/secrets.ts
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/secrets', (c) => {
  const ctx = c as any
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')

  return c.json({ dbConnected: !!dbUrl })
})

export default app`,
					jsCode: `// src/app/api/secrets.js
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/secrets', (c) => {
  const dbUrl = requireEnv(c, 'DATABASE_URL')

  return c.json({ dbConnected: !!dbUrl })
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "Prefix Summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Prefix",
						"Exposed to browser",
						"Mirrored to process.env",
						"Use for"
					],
					rows: [
						[
							"BINI_",
							"Yes",
							"No",
							"Public client config"
						],
						[
							"VITE_",
							"Yes",
							"No",
							"Public client config"
						],
						[
							"No prefix",
							"No",
							"Yes (dev/preview)",
							"Secrets - server only"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Critical:" }),
					" Never put secrets in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
					" or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }),
					" variables - both are exposed to the browser. Use un-prefixed variables for secrets and read them with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(ctx, key)" }),
					" inside API route handlers only."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "platform-support",
			title: "Platform Support",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" delegate to Hono's ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "env(c)" }),
						" adapter, which reads from the correct source on every supported platform automatically. Your code never changes regardless of where it deploys."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Platform",
						"Runtime",
						"How Hono reads it"
					],
					rows: [
						[
							"Node.js",
							"Node",
							"process.env"
						],
						[
							"Bun",
							"Bun",
							"process.env"
						],
						[
							"Vercel Edge",
							"V8 isolate",
							"process.env"
						],
						[
							"Netlify Edge",
							"Deno",
							"Deno.env.get()"
						],
						[
							"Cloudflare Workers",
							"V8 isolate",
							"CF bindings via c.env"
						],
						[
							"Deno Deploy",
							"Deno",
							"Deno.env.get()"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Cloudflare note:" }),
					" Secrets set via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler secret put" }),
					" are only available inside the fetch handler via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c.env" }),
					". ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(ctx, key)" }),
					" reads them correctly as long as you pass ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "how-it-works",
			title: "How It Works",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniEnv()" }),
						" plugin does two things:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-4 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Tells Vite to expose ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" prefixed vars to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "import.meta.env" })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Mirrors non-prefixed ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" values into ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
						" during ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite dev" }),
						" ",
						"/ ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite preview" })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `bini-env/index.${t}`,
					code: `// simplified view of the plugin
export function biniEnv() {
  return {
    name: 'bini-env',
    config(userConfig, { command }) {
      if (command === 'serve') {
        const envDir = userConfig.envDir ?? userConfig.root ?? process.cwd()
        // mirrors non-prefixed, non-empty .env values into process.env
        // silent on success, warns on failure - no opt-out
      }
      return { envPrefix: ['BINI_', 'VITE_'] }
    },
  }
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4 mb-4",
					children: [
						"The prefix list is fixed - there is no option to add more prefixes. Only ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" are ever exposed to the browser."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mt-4 mb-4",
					children: "On server start you will see:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4 mb-4",
					children: [
						"Vite handles everything natively: loading ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" files, watching, restarting, injecting prefixed vars, and HMR. bini-env does not reimplement any of that."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-2 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Zero dotenv:" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dotenv" }),
						" is never used at runtime. In production, vars are set in your hosting platform's environment config."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Precedence:" }),
					" A value already present in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
					" (set by your OS, shell, or CI) always wins. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
					" file values only fill in variables that are not already set."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "api-reference",
			title: "API Reference",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "getEnv(c, key)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [
						"Returns ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "string | undefined" }),
						". Reads from the Hono request context."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/config.${t}`,
					tsCode: `// src/app/api/config.ts
import { Hono } from 'hono'
import { getEnv } from 'bini-env'

const app = new Hono()

app.get('/config', async (c) => {
  const ctx = c as any

  const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
  const logLevel = getEnv(ctx, 'LOG_LEVEL') ?? 'info'
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

  return c.json({ region, logLevel, debug })
})

export default app`,
					jsCode: `// src/app/api/config.js
import { Hono } from 'hono'
import { getEnv } from 'bini-env'

const app = new Hono()

app.get('/config', async (c) => {
  const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
  const logLevel = getEnv(c, 'LOG_LEVEL') ?? 'info'
  const debug = getEnv(c, 'DEBUG_MODE') === 'true'

  return c.json({ region, logLevel, debug })
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "requireEnv(c, key)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [
						"Returns ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "string" }),
						". Throws immediately if the variable is missing or empty."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/send-email.${t}`,
					tsCode: `// src/app/api/send-email.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/send-email', async (c) => {
  try {
    const ctx = c as any

    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')

    // ... send email

    return c.json({ sent: true })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`,
					jsCode: `// src/app/api/send-email.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/send-email', async (c) => {
  try {
    const smtpHost = requireEnv(c, 'SMTP_HOST')
    const smtpPass = requireEnv(c, 'SMTP_PASS')
    const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587')

    // ... send email

    return c.json({ sent: true })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mt-4 mb-4",
					children: "On failure, the terminal will show:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorTerminal, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "biniEnv()"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [
						"Vite plugin. Takes no options. It is already registered in the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite.config" }),
						" shown in Quick Start."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-2 mb-4",
					children: [
						"There is nothing to configure - no prefix list to extend, no flag to disable the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
						" mirror. The prefix list is fixed to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "['BINI_', 'VITE_']" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "biniLogger"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "Vite-style terminal logger. Use it in your own Bini.js plugins or server-side code."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/health.${t}`,
					tsCode: `// src/app/api/health.ts
import { Hono } from 'hono'
import { getEnv, biniLogger } from 'bini-env'

const app = new Hono()

app.get('/health', (c) => {
  const ctx = c as any

  try {
    const region = getEnv(ctx, 'AWS_REGION')

    biniLogger.info('Server ready')
    if (!region) biniLogger.warn('Missing optional var')

    return c.json({ ok: true })
  } catch (error) {
    biniLogger.error('Something broke', error)
    return c.json({ ok: false }, 500)
  }
})

export default app`,
					jsCode: `// src/app/api/health.js
import { Hono } from 'hono'
import { getEnv, biniLogger } from 'bini-env'

const app = new Hono()

app.get('/health', (c) => {
  try {
    const region = getEnv(c, 'AWS_REGION')

    biniLogger.info('Server ready')
    if (!region) biniLogger.warn('Missing optional var')

    return c.json({ ok: true })
  } catch (error) {
    biniLogger.error('Something broke', error)
    return c.json({ ok: false }, 500)
  }
})

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "HonoContext"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [
						"Exported type (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Context" }),
						" from Hono). Use it to type helper functions that group env reads."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/db.${t}`,
					tsCode: `// src/app/api/db.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'
import type { HonoContext } from 'bini-env'

function readDbConfig(c: HonoContext) {
  const ctx = c as any
  return {
    url: requireEnv(ctx, 'DATABASE_URL'),
    poolSize: parseInt(getEnv(ctx, 'DB_POOL_SIZE') ?? '10'),
    ssl: getEnv(ctx, 'DB_SSL') !== 'false',
  }
}

const app = new Hono()

app.get('/db', (c) => {
  const db = readDbConfig(c)
  return c.json({ poolSize: db.poolSize, ssl: db.ssl })
})

export default app`,
					jsCode: `// src/app/api/db.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

function readDbConfig(c) {
  return {
    url: requireEnv(c, 'DATABASE_URL'),
    poolSize: parseInt(getEnv(c, 'DB_POOL_SIZE') ?? '10'),
    ssl: getEnv(c, 'DB_SSL') !== 'false',
  }
}

const app = new Hono()

app.get('/db', (c) => {
  const db = readDbConfig(c)
  return c.json({ poolSize: db.poolSize, ssl: db.ssl })
})

export default app`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "security",
			title: "Security Best Practices",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Rule 1: Never Prefix Secrets" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env

# BAD - This will be exposed to the browser!
BINI_DATABASE_URL=postgres://...

# GOOD - Not exposed, mirrored into process.env for server-side use
DATABASE_URL=postgres://...`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "Rule 2: Use BINI_ or VITE_ for Public Data"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env

# GOOD - Public data
BINI_API_URL=https://api.example.com
VITE_GA_ID=UA-XXXXX`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "Rule 3: Do not Leave Secret Placeholders Empty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-0",
					children: [
						"An empty value (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "API_KEY=" }),
						") is skipped by the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
						" mirror, so",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" will correctly throw instead of silently succeeding with an empty string."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "performance",
			title: "Performance",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Metric",
					"Dev",
					"Prod"
				],
				rows: [
					[
						"File reads",
						"1 (loadEnv, cached by Vite)",
						"0"
					],
					[
						"Runtime cost",
						"~0ms (mirror runs once at server start)",
						"0"
					],
					[
						"Bundle impact",
						"Minimal",
						"Tree-shaken"
					]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mt-4 mb-0",
				children: [
					"No dotenv. No per-request disk reads. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" is a direct call to Hono's adapter on every invocation - request-scoped and correct."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "troubleshooting",
			title: "Troubleshooting",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: ["Problem", "Solution"],
				rows: [
					["Env var undefined in production", "Set variables in your hosting platform env dashboard (Vercel, Netlify, Cloudflare, etc.)."],
					["Works in dev, undefined in prod", "Local dev works because biniEnv() mirrors non-prefixed vars into process.env automatically. Production requires platform-level configuration."],
					["My .env value is not taking effect in dev", "Check your shell and CI environment first - the mirror never overrides a variable that is already set. Also check the value is not empty (KEY=)."],
					["requireEnv still throws even though my key is in .env", "If the value is KEY= with nothing after the =, it is treated as unset and skipped by design. Give it a real value."],
					["bini-env is not reading my .env from the right folder", "biniEnv() reads from your Vite envDir if set, otherwise root, otherwise the working directory. Double check envDir/root in vite.config.ts."],
					["Cloudflare secret not found", "Secrets set via wrangler secret put are only available via c.env. Ensure you are passing c to the function."],
					["TypeScript error: Context not assignable to HonoContext", "Cast once per handler: const ctx = c as any"],
					["Types not found", "Add /// <reference types=\"vite/client\" /> to your tsconfig.json or entry file."]
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
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
							url: "/"
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
BINI_PUBLIC_API_URL=https://api.example.com
VITE_APP_NAME=My App
DATABASE_URL=postgres://localhost:5432/mydb
JWT_SECRET=your_jwt_secret`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/page.${x}`,
					code: `// src/app/page.tsx
export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.VITE_APP_NAME
  return <h1>{appName}</h1>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/config.${t}`,
					tsCode: `// src/app/api/config.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const jwtSecret = requireEnv(ctx, 'JWT_SECRET')
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

  return c.json({ debug, dbConnected: !!dbUrl })
})

export default app`,
					jsCode: `// src/app/api/config.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const dbUrl = requireEnv(c, 'DATABASE_URL')
  const jwtSecret = requireEnv(c, 'JWT_SECRET')
  const debug = getEnv(c, 'DEBUG_MODE') === 'true'

  return c.json({ debug, dbConnected: !!dbUrl })
})

export default app`
				})
			]
		})
	] });
}
function EnvironmentVariablesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Environment Variables",
		description: "Hono-native environment variable system for Bini.js - works across Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.",
		url: "https://bini.js.org/docs/environment-variables",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/environment-variables.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/api-cors",
			title: "CORS"
		},
		next: {
			to: "/docs/env-prefixes",
			title: "Prefixes & Client Exposure"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { EnvironmentVariablesPage as default };
