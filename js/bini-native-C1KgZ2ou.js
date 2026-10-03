import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, n as CARD, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-native.tsx
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
		id: "platform-support",
		label: "Platform Support"
	},
	{
		id: "api-reference",
		label: "API Reference"
	},
	{
		id: "troubleshooting",
		label: "Troubleshooting"
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
var REQUIRE_ENV_ERROR_TEXT = `[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`;
var BOX = `${CARD} flex items-center px-3 text-[12px] text-neutral-800 dark:text-neutral-200`;
/** How a request resolves an env var. */
function EnvFlowVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} h-10 w-28 shrink-0 justify-center font-semibold`,
				children: "Hono handler"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `${BOX} h-10 w-32 shrink-0 justify-center`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 text-neutral-500",
					children: "getEnv(c,"
				}), "key)"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `${BOX} h-10 w-64 shrink-0`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 text-neutral-500",
						children: "dev"
					}), "mirrors .env → process.env"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `${BOX} h-10 w-64 shrink-0`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 text-neutral-500",
						children: "prod"
					}), "platform env binding"]
				})]
			})
		]
	}) });
}
/** Colored dev server banner. */
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-env" }), " reads environment variables from the Hono request context, so they always resolve from the correct runtime binding - Node.js, Bun, Deno, Vercel Edge, Netlify Edge, or Cloudflare Workers - without any per-platform code."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvFlowVisual, {})]
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "3. Your .env file"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "4. Dev banner"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevBanner, {})
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The prefix list is fixed - there's no config surface that can widen what's exposed. Use no prefix for anything secret." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "platform-support",
				title: "Platform Support",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						" delegate to Hono's ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "env(c)" }),
						" adapter, which reads from the correct source on every platform automatically."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Platform",
							"Runtime",
							"Source"
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
								"c.env"
							],
							[
								"Deno Deploy",
								"Deno",
								"Deno.env.get()"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
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
					] })
				]
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
						". Use for optional config."
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
						". Throws if the variable is missing or empty."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireEnvError, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "troubleshooting",
				title: "Troubleshooting",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Works in dev, undefined in prod"
						}),
						" - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" ",
						"files are only loaded by Vite during dev and preview. In production, set vars in your hosting platform's dashboard."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "My .env value isn't taking effect in dev"
						}),
						" ",
						"- either the value is already set in your shell / CI (which wins), or it's empty (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "KEY=" }),
						"), which is skipped by design."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "requireEnv throws even though the key is in .env"
						}),
						" ",
						"- an empty ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "KEY=" }),
						" is treated as unset. Give it a real value, or remove the line."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "bini-env reads .env from the wrong folder"
						}),
						" - it uses Vite's ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "envDir" }),
						", then ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "root" }),
						", then the working directory. Check",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "envDir" }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "root" }),
						" in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite.config.ts" }),
						" if your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" lives somewhere non-standard."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Cloudflare secret not found"
						}),
						" -",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler secret put" }),
						" secrets only live on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c.env" }),
						". Pass ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "c" }),
						" to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getEnv" }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "requireEnv" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "TypeScript: Context not assignable to HonoContext"
						}),
						" ",
						"- Hono 4.12+ added a symbol to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "HonoRequest" }),
						" that breaks strict assignability. Cast once per handler: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "const ctx = c as any" }),
						"."
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
