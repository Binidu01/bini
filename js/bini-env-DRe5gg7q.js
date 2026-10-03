import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-env.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "installation",
		label: "Installation"
	},
	{
		id: "quick-start",
		label: "Quick Start"
	},
	{
		id: "prefixes",
		label: "Prefixes"
	},
	{
		id: "how-it-works",
		label: "How It Works"
	},
	{
		id: "platform-support",
		label: "Platform Support"
	},
	{
		id: "api-reference",
		label: "API Reference"
	},
	{
		id: "security",
		label: "Security"
	},
	{
		id: "compatibility",
		label: "Compatibility"
	}
];
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-env/page.tsx";
var H3_CLS = "mb-3 mt-8 text-base font-semibold text-neutral-900 dark:text-neutral-200";
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var DEV_BANNER_TEXT = `  Bini.js (dev)
  Environments: .env.local, .env
  Local:   http://localhost:3000/
  Network: http://192.168.1.7:3000/`;
var WARN_BANNER_TEXT = `10:45:55 (warning) [bini-env] Failed to inject .env into process.env: <reason>`;
var REQUIRE_ENV_ERROR_TEXT = `[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`;
/** Colored dev server banner, matching the real terminal output. */
function DevBanner() {
	const label = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
		className: "font-bold text-neutral-900 dark:text-white",
		children: s
	});
	const url = (host) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
		code: DEV_BANNER_TEXT,
		children: [
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold text-cyan-700 dark:text-cyan-400",
				children: "Bini.js"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "(dev)"
			}),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "Environments:"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-600 dark:text-neutral-400",
				children: ".env.local, .env"
			}),
			"\n  ",
			label("Local:"),
			"   ",
			url("localhost"),
			"\n  ",
			label("Network:"),
			" ",
			url("192.168.1.7")
		]
	});
}
/** Colored warning banner. */
function WarnBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
		code: WARN_BANNER_TEXT,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "10:45:55"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-amber-600 dark:text-amber-400",
				children: "(warning)"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-rose-600 dark:text-rose-400",
				children: "[bini-env]"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-neutral-700 dark:text-neutral-300",
				children: [
					"Failed to inject ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-cyan-700 dark:text-cyan-400",
						children: ".env"
					}),
					" into",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-cyan-700 dark:text-cyan-400",
						children: "process.env"
					}),
					":",
					" "
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "<reason>"
			})
		]
	});
}
/** Colored requireEnv error output. */
function RequireEnvError() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
		code: REQUIRE_ENV_ERROR_TEXT,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-rose-600 dark:text-rose-400",
				children: "[bini-env]"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-rose-600 dark:text-rose-400",
				children: "error"
			}),
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-neutral-700 dark:text-neutral-300",
				children: ["Missing required environment variable:", " "]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-amber-600 dark:text-amber-400",
				children: "\"SMTP_HOST\""
			}),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "-> Set it in your platform's env config or hosting dashboard."
			})
		]
	});
}
function BiniEnvPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "bini-env",
		badge: "Official",
		description: "Environment variable system + Vite plugin for Bini.js. Hono-native, universal runtime, zero-config dev secrets.",
		url: "https://bini.dev/plugins/bini-env",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins/bini-router",
			title: "bini-router"
		},
		next: {
			to: "/plugins/bini-native",
			title: "bini-native"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }), " reads environment variables from the Hono request context, so they always resolve from the correct runtime binding - Node.js, Bun, Deno, Vercel Edge, Netlify Edge, or Cloudflare Workers - without any per-platform code."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"In dev, it also mirrors non-prefixed ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
					" values into ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
					" so Node-hosted Hono routes can read server-side secrets with no manual setup."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "installation",
				title: "Installation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install bini-env hono`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add bini-env hono`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add bini-env hono`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add bini-env hono`
					}
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono" }), " is a required peer dependency."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "quick-start",
				title: "Quick Start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "1. Register the plugin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "vite.config.ts",
						lang: "js",
						code: `import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [biniEnv()],
})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniEnv()" }), " takes no options."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "2. Read env vars in a Hono handler"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/hello.ts",
						lang: "js",
						code: `import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/hello', async (c) => {
  try {
    const ctx = c as any

    // Throws if missing — use for required config
    const apiKey = requireEnv(ctx, 'MY_API_KEY')

    // Returns undefined if missing — use for optional config
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Non-prefixed keys like ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "MY_API_KEY" }),
						" are read from your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" file in dev. In production, set them in your hosting platform's environment config."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "prefixes",
				title: "Prefixes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Two prefixes are exposed to the browser: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						". Everything else stays server-side."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Prefix",
							"Browser",
							"Server-side",
							"Use for"
						],
						rows: [
							[
								"No prefix",
								"Never",
								"Yes",
								"Secrets - API keys, DB URLs, tokens"
							],
							[
								"BINI_",
								"Always",
								"Yes",
								"Public config"
							],
							[
								"VITE_",
								"Always",
								"Yes",
								"Public config"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `# Server-side only
DATABASE_URL=postgres://...
STRIPE_SECRET_KEY=sk_live_...

# Exposed to the browser
BINI_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXX`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The prefix list is fixed - there's no config surface that can widen what's exposed. Use no prefix for anything secret." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "how-it-works",
				title: "How It Works",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Dev and preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"On ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite dev" }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite preview" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniEnv()" }),
						" loads your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env*" }),
						" files with Vite's own ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "loadEnv" }),
						" and mirrors every non-prefixed value into",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
						". That's what makes server-side secrets readable inside Hono routes without a manual loop."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Runs only in dev / preview - never on ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Reads from Vite's ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "envDir" }),
							", then ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "root" }),
							", then the working directory."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Never overrides a value already set in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.env" }),
							" (OS / shell / CI wins)."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Skips empty values, so ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
							" still fails loudly on placeholders."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Respects ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "envDir: false" }),
							" by skipping the mirror entirely."
						] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "On success it's silent. On failure it warns - but the dev server still boots:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarnBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The startup banner is unchanged:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"If you already have a manual ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "loadEnv" }),
						" loop in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite.config.ts" }),
						", delete it - this plugin replaces it:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "vite.config.ts",
						lang: "js",
						code: `export default defineConfig({
  plugins: [biniEnv()],
})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Reading env vars"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" read from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "env(c)" }),
						" via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono/adapter" }),
						". Every read is request-scoped and resolved by Hono for the current platform. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dotenv" }),
						" ",
						"is never used."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "platform-support",
				title: "Platform Support",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Platform",
						"Runtime",
						"Source",
						"How Hono reads it"
					],
					rows: [
						[
							"Node.js",
							"Node",
							"System env / dev mirror",
							"process.env"
						],
						[
							"Bun",
							"Bun",
							"System env / dev mirror",
							"process.env"
						],
						[
							"Vercel Edge",
							"V8 isolate",
							"Project settings",
							"process.env"
						],
						[
							"Netlify Edge",
							"Deno",
							"Site settings",
							"Deno.env.get()"
						],
						[
							"Cloudflare Workers",
							"V8 isolate",
							"wrangler.toml / dashboard",
							"c.env"
						],
						[
							"Deno Deploy",
							"Deno",
							"Project settings",
							"Deno.env.get()"
						]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Cloudflare:" }),
					" secrets set via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler secret put" }),
					" are only available via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c.env" }),
					" inside a handler. Pass ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c" }),
					" to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
					" /",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
					" and they resolve correctly."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "api-reference",
				title: "API Reference",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "getEnv(c, key)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Returns ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "string | undefined" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/config.ts",
						lang: "js",
						code: `const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
const debug  = getEnv(ctx, 'DEBUG_MODE') === 'true'`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "requireEnv(c, key)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Returns ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "string" }),
						". Throws if the variable is missing or empty, and logs the failure to the terminal:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireEnvError, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "biniEnv()"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Vite plugin. Takes no options." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "biniLogger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Vite-style logger for your own plugins or server code." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/lib/logger.ts",
						lang: "js",
						code: `import { biniLogger } from 'bini-env'

biniLogger.info('Server ready')
biniLogger.warn('Missing optional var')
biniLogger.error('Something broke', error)`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "HonoContext"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Exported type (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Context" }),
						" from Hono). Use it to type helpers that group env reads."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/lib/db-config.ts",
						lang: "js",
						code: `import type { HonoContext } from 'bini-env'

function readDbConfig(c: HonoContext) {
  const ctx = c as any
  return {
    url: requireEnv(ctx, 'DATABASE_URL'),
    poolSize: parseInt(getEnv(ctx, 'DB_POOL_SIZE') ?? '10'),
  }
}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "security",
				title: "Security",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Never prefix secrets."
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_" }),
						" ",
						"are always exposed to the browser."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Use no prefix for secrets."
						}),
						" Available server-side via",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Don't leave secret placeholders empty."
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "API_KEY=" }),
						" is skipped, so ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" throws instead of silently returning an empty string."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Let OS / CI win in dev."
						}),
						" Override locally with a shell var instead of editing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						":",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
								filename: "Terminal",
								lang: "shell",
								code: `$ DATABASE_URL=postgres://staging... pnpm dev`
							})
						})
					] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "compatibility",
				title: "Compatibility",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Tool", "Version"],
					rows: [
						["Vite", "8.x"],
						["Hono", "4.x"],
						["TypeScript", "5.x"],
						["Node.js", "≥ 20.19"]
					]
				})
			})
		]
	});
}
//#endregion
export { BiniEnvPage as default };
