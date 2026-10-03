import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, c as LINE, l as RouteVisual, n as CARD, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/env-api.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "basic-usage",
		label: "Basic Usage"
	},
	{
		id: "required-vs-optional",
		label: "Required vs Optional"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	},
	{
		id: "error-handling",
		label: "Error Handling"
	},
	{
		id: "production-notes",
		label: "Production Notes"
	}
];
var STRONG = "font-semibold text-black dark:text-white";
function Box({ title, accent = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-52 shrink-0 ${CARD} ${accent ? "ring-1 ring-blue-500/40" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `border-b px-3 py-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 ${LINE}`,
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-3 font-mono text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300",
			children
		})]
	});
}
/** .env -> getEnv / requireEnv -> API handler */
function VisualEnvFlow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
				title: ".env or hosting dashboard",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sky-600 dark:text-sky-400",
					children: "MY_API_KEY"
				}), "=sk_live_…"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sky-600 dark:text-sky-400",
					children: "APP_NAME"
				}), "=Bini"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
				title: "via hono/adapter",
				accent: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-blue-600 dark:text-blue-300",
					children: "getEnv(ctx, key)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-blue-600 dark:text-blue-300",
					children: "requireEnv(ctx, key)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
				title: "API handler",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "const key = requireEnv(" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pl-3",
						children: "ctx, 'MY_API_KEY'"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: ")" })
				]
			})
		]
	}) });
}
function VisualStructure({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 280,
		rows: [
			{ n: "app" },
			{
				n: "api",
				d: 1
			},
			{
				n: `hello.${ext}`,
				d: 2,
				fn: true,
				dot: true,
				url: "/api/hello"
			},
			{
				n: `email.${ext}`,
				d: 2,
				fn: true,
				url: "/api/email"
			},
			{
				n: `config.${ext}`,
				d: 2,
				fn: true,
				url: "/api/config"
			}
		]
	});
}
function Content() {
	const s = useDocLang() === "js" ? "js" : "ts";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"In API routes, environment variables are read with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv(c, key)" }),
					" and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv(c, key)" }),
					". Both read from the Hono request context via",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono/adapter" }),
					" - that is what makes them work on every runtime."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualEnvFlow, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Auto-imported:" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" are auto-imported in API routes - you do not need to write the import from ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }),
					" manually."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Always pass c explicitly." }),
					" In TypeScript, cast it once at the top of the handler as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "const ctx = c as any" }),
					", then use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ctx" }),
					" throughout. No",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
					" fallbacks - every read is request-scoped."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "basic-usage",
			title: "Basic Usage",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualStructure, { ext: s }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `src/app/api/hello.${s}`,
				tsCode: `// src/app/api/hello.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  try {
    const ctx = c as any

    // requireEnv throws if the var is missing - fail fast on required config
    const apiKey = requireEnv(ctx, 'MY_API_KEY')

    // getEnv returns undefined if missing - use ?? to provide a default
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'
    const timeout = parseInt(getEnv(ctx, 'TIMEOUT_MS') ?? '5000')

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

const app = new Hono()

app.get('/hello', (c) => {
  try {
    const ctx = c

    // requireEnv throws if the var is missing - fail fast on required config
    const apiKey = requireEnv(ctx, 'MY_API_KEY')

    // getEnv returns undefined if missing - use ?? to provide a default
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'
    const timeout = parseInt(getEnv(ctx, 'TIMEOUT_MS') ?? '5000')

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "required-vs-optional",
			title: "Required vs Optional",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" for variables your app cannot run without. Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" with",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "??" }),
					" for optional configuration."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/example.${s}`,
					tsCode: `app.post('/example', async (c) => {
  try {
    const ctx = c as any

    // Required vars - handler throws immediately if missing
    const dbUrl = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    // Optional vars - fall back to sensible defaults
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
})`,
					jsCode: `app.post('/example', async (c) => {
  try {
    const ctx = c

    // Required vars - handler throws immediately if missing
    const dbUrl = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    // Optional vars - fall back to sensible defaults
    const model = getEnv(ctx, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Function",
						"Use for",
						"Behavior"
					],
					rows: [[
						"requireEnv(ctx, key)",
						"Required config - app cannot run without",
						"Throws if missing or empty"
					], [
						"getEnv(ctx, key) ?? default",
						"Optional config - fallback to default",
						"Returns undefined if missing"
					]]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "A full API endpoint that uses environment variables for configuration:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `src/app/api/email.${s}`,
				tsCode: `// src/app/api/email.ts
import { Hono } from 'hono'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const ctx = c as any

    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpUser = requireEnv(ctx, 'SMTP_USER')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')
    const secure = getEnv(ctx, 'SMTP_SECURE') === 'true'
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
    const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js App'

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
      debug,
    })

    const { to, subject, text } = await c.req.json()

    if (!to || !subject || !text) {
      return c.json({ error: 'Missing required fields: to, subject, text' }, 400)
    }

    await transporter.sendMail({
      from: fromEmail,
      to,
      subject: \`[\${appName}] \${subject}\`,
      text,
    })

    return c.json({
      success: true,
      message: 'Email sent',
      from: fromEmail,
      app: appName,
    })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    console.error('Email error:', error)
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`,
				jsCode: `// src/app/api/email.js
import { Hono } from 'hono'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const ctx = c

    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpUser = requireEnv(ctx, 'SMTP_USER')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')
    const secure = getEnv(ctx, 'SMTP_SECURE') === 'true'
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
    const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js App'

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
      debug,
    })

    const { to, subject, text } = await c.req.json()

    if (!to || !subject || !text) {
      return c.json({ error: 'Missing required fields: to, subject, text' }, 400)
    }

    await transporter.sendMail({
      from: fromEmail,
      to,
      subject: \`[\${appName}] \${subject}\`,
      text,
    })

    return c.json({
      success: true,
      message: 'Email sent',
      from: fromEmail,
      app: appName,
    })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    console.error('Email error:', error)
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "error-handling",
			title: "Error Handling",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Always handle errors from ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" gracefully:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/config.${s}`,
					tsCode: `app.get('/config', async (c) => {
  try {
    const ctx = c as any

    const apiKey = requireEnv(ctx, 'API_KEY')
    const secret = requireEnv(ctx, 'SECRET_TOKEN')

    return c.json({ configured: true })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json(
        {
          error: 'Configuration error',
          details: error.message,
        },
        500
      )
    }

    return c.json({ error: 'Something went wrong' }, 500)
  }
})`,
					jsCode: `app.get('/config', async (c) => {
  try {
    const ctx = c

    const apiKey = requireEnv(ctx, 'API_KEY')
    const secret = requireEnv(ctx, 'SECRET_TOKEN')

    return c.json({ configured: true })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json(
        {
          error: 'Configuration error',
          details: error.message,
        },
        500
      )
    }

    return c.json({ error: 'Something went wrong' }, 500)
  }
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "On failure, the terminal shows:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
					code: `[bini-env] error  Missing required environment variable: "API_KEY"
  -> Set it in your platform's env config or hosting dashboard.`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-red-600 dark:text-red-400",
							children: "[bini-env] error"
						}),
						"  Missing required environment variable: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-amber-600 dark:text-yellow-300",
							children: "\"API_KEY\""
						}),
						"\n",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-neutral-400 dark:text-neutral-500",
							children: "  -> Set it in your platform's env config or hosting dashboard."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "production-notes",
			title: "Production Notes",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Set vars in production"
					}),
					" - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
					" files are only loaded during development. In production, set variables in your hosting platform's dashboard."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "No platform-specific code"
					}),
					" - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" work on Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "Never expose secrets"
				}), " - Never return secret values in API responses. Only return configuration status."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Use BINI_ for client vars"
					}),
					" - Use the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
					" ",
					"prefix for client-side public config. No prefix for server-only secrets."
				] })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The same API code runs unchanged across all platforms. bini-env reads from the correct source on every platform automatically." })]
		})
	] });
}
function EnvApiPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Using Environment Variables in API Routes",
		description: "Read environment variables in API routes with getEnv and requireEnv.",
		url: "https://bini.js.org/docs/env-api",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/env-api.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/env-prefixes",
			title: "Prefixes & Client Exposure"
		},
		next: {
			to: "/docs/css",
			title: "CSS Overview"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { EnvApiPage as default };
