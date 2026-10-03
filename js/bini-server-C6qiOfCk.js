import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual } from "./DocVisuals-BzN7mWOU.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-server.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "features",
		label: "Features"
	},
	{
		id: "installation",
		label: "Installation"
	},
	{
		id: "usage",
		label: "Usage"
	},
	{
		id: "keyboard-shortcuts",
		label: "Keyboard Shortcuts"
	},
	{
		id: "environment-variables",
		label: "Environment Variables"
	},
	{
		id: "project-structure",
		label: "Project Structure"
	},
	{
		id: "api-routes",
		label: "API Routes"
	},
	{
		id: "cors",
		label: "CORS"
	},
	{
		id: "static-file-serving",
		label: "Static File Serving"
	},
	{
		id: "vs-vite-preview",
		label: "vs vite preview"
	},
	{
		id: "security",
		label: "Security"
	},
	{
		id: "deployment",
		label: "Deployment"
	},
	{
		id: "api-reference",
		label: "API Reference"
	},
	{
		id: "requirements",
		label: "Requirements"
	}
];
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-server/page.tsx";
var H3_CLS = "mb-3 mt-8 text-base font-semibold text-neutral-900 dark:text-neutral-200";
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var BANNER_TEXT = `  Bini.js (production)
  Environments: .env, .env.local
  Local:   http://localhost:3000/
  Network: http://192.168.1.5:3000/
  press h + enter to show help`;
var Yes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-emerald-600 dark:text-emerald-400",
	children: "Yes"
});
var No = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-neutral-500",
	children: "No"
});
/** Colored production server banner. */
function ServerBanner() {
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
		code: BANNER_TEXT,
		children: [
			"  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold text-cyan-700 dark:text-cyan-400",
				children: "Bini.js"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "(production)"
			}),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "Environments:"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-600 dark:text-neutral-400",
				children: ".env, .env.local"
			}),
			"\n  ",
			label("Local:"),
			"   ",
			url("localhost"),
			"\n  ",
			label("Network:"),
			" ",
			url("192.168.1.5"),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-neutral-500",
				children: [
					"press ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-bold text-neutral-700 dark:text-neutral-300",
						children: "h + enter"
					}),
					" ",
					"to show help"
				]
			})
		]
	});
}
function FeatureBlurb({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-2 text-sm font-semibold text-black dark:text-white",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",
			children
		})]
	});
}
function BiniServerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "bini-server",
		badge: "Official",
		description: "Zero-dependency, secure-by-default, production-grade server for your static sites and API routes.",
		url: "https://bini.dev/plugins/bini-server",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins/bini-native",
			title: "bini-native"
		},
		next: {
			to: "/plugins/bini-overlay",
			title: "bini-overlay"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
					" is the production server for bini-router apps. It streams your built",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
					" folder, serves ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" }),
					" routes directly from ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
					", and adds everything ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite preview" }),
					" intentionally leaves out - ETag caching, timeouts, graceful shutdown, and configurable body limits."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"It has ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "zero runtime dependencies"
					}),
					" - only Node.js built-in modules - and works identically on Windows, macOS, and Linux."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "features",
				title: "Features",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Core"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Static file serving",
								children: [
									"Streams ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
									" with correct MIME types, ETag, and cache headers."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "API routes",
								children: [
									"Serves ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" }),
									" from ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
									" - Hono apps and plain functions both work."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "SPA fallback",
								children: [
									"Unknown routes automatically serve ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/index.html" }),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "ETag support",
								children: "304 Not Modified responses for unchanged static files."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Lazy route loading",
								children: "API routes are scanned on first request for fast cold starts."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Security & Performance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "CORS",
								children: [
									"Enabled by default, configurable via ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "CORS_ENABLED" }),
									" (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
									", ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }),
									", or no prefix)."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Body limits",
								children: "Configurable request body size limit, defaults to 10MB."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Timeouts",
								children: "Configurable body-read and handler timeouts, default 30s each."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Path traversal protection",
								children: [
									"Guards against ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".." }),
									" and ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "//" }),
									" in request URLs."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Module cache",
								children: "Caches imported handlers with mtime invalidation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Port auto-increment",
								children: "Starts at 3000, auto-increments if the port is busy."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Developer Experience"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Auto env loading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }), " files are detected and listed in the startup banner."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Interactive shortcuts",
								children: [
									"Press ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "h" }),
									" for help, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "o" }),
									" to open the browser, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "q" }),
									" to quit."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Cross-platform",
								children: "Works identically on Windows, macOS, and Linux."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Graceful shutdown",
								children: [
									"Handles ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "SIGTERM" }),
									" + ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "SIGINT" }),
									" with a timeout fallback."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Zero dependencies",
								children: "Only Node.js built-in modules - nothing to audit or update."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Flexible config",
								children: [
									"Every setting supports ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }),
									", ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }),
									", or no-prefix env vars."
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "installation",
				title: "Installation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install bini-server`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add bini-server`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add bini-server`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add bini-server`
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "usage",
				title: "Usage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "1. Add scripts to package.json"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "package.json",
						lang: "json",
						code: `{
  "scripts": {
    "build": "vite build",
    "start": "bini-server"
  }
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "2. Build and start"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npm run build\n$ npm start`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm build\n$ pnpm start`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn build\n$ yarn start`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bun run build\n$ bun run start`
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "3. Terminal output"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerBanner, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "keyboard-shortcuts",
				title: "Keyboard Shortcuts",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "While the server is running, type a key and press enter:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Key", "Action"],
						rows: [
							["h", "Show available shortcuts"],
							["o", "Open your app in the default browser"],
							["q", "Quit the server"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Keyboard shortcuts are automatically disabled in non-interactive environments, like Render or CI/CD." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "environment-variables",
				title: "Environment Variables",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Auto-detected .env files"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "At startup, bini-server detects and loads, in priority order:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env.local" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env.[NODE_ENV].local" }),
							" (e.g. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env.production.local" }),
							")"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env.[NODE_ENV]" }),
							" (e.g. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env.production" }),
							")"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }) })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "All detected files are listed in the startup banner." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Naming conventions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Every setting supports three naming conventions, in priority order:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Convention",
							"Example",
							"Priority"
						],
						rows: [
							[
								"BINI_*",
								"BINI_PORT=3000",
								"Highest"
							],
							[
								"VITE_*",
								"VITE_PORT=3000",
								"Medium"
							],
							[
								"No prefix",
								"PORT=3000",
								"Lowest"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Server configuration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Variable",
							"Default",
							"Description"
						],
						rows: [
							[
								"PORT",
								"3000",
								"HTTP port to listen on"
							],
							[
								"CORS_ENABLED",
								"true",
								"Enable/disable CORS on API routes"
							],
							[
								"API_DIR",
								"src/app/api",
								"Path to API handlers directory"
							],
							[
								"DIST_DIR",
								"dist",
								"Path to static files directory"
							],
							[
								"BODY_TIMEOUT_SECS",
								"30",
								"Max seconds to read the request body"
							],
							[
								"HANDLER_TIMEOUT_SECS",
								"30",
								"Max seconds for a handler to respond"
							],
							[
								"BODY_SIZE_LIMIT",
								"10485760",
								"Max request body size in bytes (10MB)"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Examples"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `PORT=8080
CORS_ENABLED=false
API_DIR=src/api
BODY_SIZE_LIMIT=5242880  # 5MB`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "Terminal",
						lang: "shell",
						code: `$ PORT=3001 BINI_CORS_ENABLED=false bini-server

# Or with the VITE prefix
$ VITE_PORT=3000 VITE_CORS_ENABLED=false bini-server`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "project-structure",
				title: "Project Structure",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 320,
					rows: [
						{ n: "my-app" },
						{
							n: "dist",
							d: 1,
							dot: true
						},
						{
							n: "index.html",
							d: 2
						},
						{
							n: "assets",
							d: 2
						},
						{
							n: "src",
							d: 1
						},
						{
							n: "app",
							d: 2
						},
						{
							n: "api",
							d: 3,
							dot: true
						},
						{
							n: "users.ts",
							d: 4,
							fn: true
						},
						{
							n: "posts",
							d: 4
						},
						{
							n: "index.ts",
							d: 5,
							fn: true
						},
						{
							n: "[id].ts",
							d: 5,
							fn: true
						},
						{
							n: "layout.tsx",
							d: 3
						},
						{
							n: "main.tsx",
							d: 2
						},
						{
							n: ".env",
							d: 1
						},
						{
							n: "package.json",
							d: 1
						},
						{
							n: "vite.config.ts",
							d: 1
						}
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }), " - built static files (required)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }), " - API handlers (optional)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }), " - environment variables"] })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "api-routes",
				title: "API Routes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Supported formats"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "A Hono app (recommended):" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/users.ts",
						lang: "js",
						code: `import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => c.json({ users: [] }))

export default app`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Or a plain function:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/hello.ts",
						lang: "js",
						code: `export default (req: Request) => {
  return Response.json({ message: 'Hello' })
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Only ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".ts" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".js" }),
						" files are supported for API routes - the same convention used by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-router" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Dynamic routes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
						width: 280,
						rows: [
							{
								n: "api",
								d: 0
							},
							{
								n: "users",
								d: 1
							},
							{
								n: "[id].ts",
								d: 2,
								fn: true
							},
							{
								n: "posts",
								d: 1
							},
							{
								n: "[...slug].ts",
								d: 2,
								fn: true
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Route parameters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"For plain function handlers, route params are passed as JSON via the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "x-bini-params" }),
						" request header:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/users/[id].ts",
						lang: "js",
						code: `export default (req: Request) => {
  const params = JSON.parse(req.headers.get('x-bini-params') || '{}')
  // params.id -> '123'
  return Response.json({ id: params.id })
}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "cors",
				title: "CORS",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "CORS is enabled by default with these headers:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "Response headers",
						lang: "text",
						code: `Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD
Access-Control-Allow-Headers: Content-Type,Authorization,X-Request-ID`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Disable with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "CORS_ENABLED=false" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_CORS_ENABLED=false" }),
						", or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_CORS_ENABLED=false" }),
						":"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `CORS_ENABLED=false`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "static-file-serving",
				title: "Static File Serving",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Supported MIME types"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HTML, CSS, JavaScript, JSON" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Images - PNG, JPEG, GIF, SVG, WebP, AVIF, ICO" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fonts - WOFF, WOFF2, TTF, EOT" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Documents - TXT, XML" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Web manifests" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Cache headers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["File Type", "Cache Policy"],
						rows: [["/assets/*", "public, max-age=31536000, immutable (1 year)"], ["All other files", "no-cache"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "ETag support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "ETags are generated automatically from file size + mtimeMs:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Sends an ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ETag" }),
							" header on the first request"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Handles ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "If-None-Match" }),
							" for 304 Not Modified responses"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Uses an MD5 hash (16 chars) for efficient caching" })
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "vs-vite-preview",
				title: "vs vite preview",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Feature",
						"vite preview",
						"bini-server"
					],
					rows: [
						[
							"Serves dist/",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"API routes",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"SPA fallback",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"Auto env loading",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"ETag / 304 support",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"Body timeout",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							"30s"
						],
						[
							"Body size limit",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							"10MB"
						],
						[
							"Handler timeout",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							"30s"
						],
						[
							"Graceful shutdown",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"Module cache",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"Configurable dirs",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"CORS control",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"Zero dependencies",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(No, {}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "b")
						],
						[
							"Production use",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-600 dark:text-amber-400",
								children: "Not recommended"
							}, "a"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-600 dark:text-emerald-400",
								children: "Production-ready"
							}, "b")
						]
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "security",
				title: "Security",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Feature",
							"Default",
							"Configurable"
						],
						rows: [
							[
								"CORS",
								"Enabled",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "CORS_ENABLED" })] })
							],
							[
								"Body size limit",
								"10MB",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BODY_SIZE_LIMIT" })] })
							],
							[
								"Request timeout",
								"30s",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BODY_TIMEOUT_SECS" })] })
							],
							[
								"Handler timeout",
								"30s",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "HANDLER_TIMEOUT_SECS" })] })
							],
							[
								"Path traversal",
								"Blocked",
								"guard in place"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Testing your server"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "Terminal",
						lang: "shell",
						code: `# Check static files
$ curl http://localhost:3000/

# Check API routes
$ curl http://localhost:3000/api/hello

# Check ETag
$ curl -I http://localhost:3000/styles.css

# Test 304 Not Modified
$ curl -I http://localhost:3000/styles.css \\
  -H "If-None-Match: [etag_from_previous_request]"

# Test CORS
$ curl -X OPTIONS http://localhost:3000/api/hello \\
  -H "Origin: http://example.com"`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Configuration examples"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Development"
					}), " (all security disabled)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `CORS_ENABLED=true
BODY_TIMEOUT_SECS=0
HANDLER_TIMEOUT_SECS=0
BODY_SIZE_LIMIT=0
NODE_ENV=development`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Production"
					}), " (secure defaults)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `CORS_ENABLED=true
BODY_TIMEOUT_SECS=30
HANDLER_TIMEOUT_SECS=30
BODY_SIZE_LIMIT=10485760
NODE_ENV=production`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Internal API"
					}), " (no CORS)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `CORS_ENABLED=false
BODY_SIZE_LIMIT=5242880  # 5MB`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "File upload service"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: ".env",
						lang: "env",
						code: `CORS_ENABLED=true
BODY_SIZE_LIMIT=1073741824  # 1GB
BODY_TIMEOUT_SECS=300  # 5 minutes`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "deployment",
				title: "Deployment",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ship your src/ folder." }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
						" runs API handlers directly from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						" - they are not compiled into ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						". Make sure your host has access to both ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Where it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "VPS / pm2"
						}), " - deploy the full project directory"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Railway / Render / Fly.io"
						}), " - automatic, since these clone your repository"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Docker"
							}),
							" - copy both ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/" }),
							" ",
							"into the image"
						] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "VPS / dedicated server"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npm run build
$ npm start
$ npm install -g pm2
$ pm2 start "npm start" --name my-app
$ pm2 save
$ pm2 startup`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm build
$ pnpm start
$ pnpm add -g pm2
$ pm2 start "pnpm start" --name my-app
$ pm2 save
$ pm2 startup`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn build
$ yarn start
$ yarn global add pm2
$ pm2 start "yarn start" --name my-app
$ pm2 save
$ pm2 startup`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bun run build
$ bun run start
$ bun add -g pm2
$ pm2 start "bun run start" --name my-app
$ pm2 save
$ pm2 startup`
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Platform as a Service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Platform",
							"Start Command",
							"Notes"
						],
						rows: [
							[
								"Railway",
								"npm start",
								"PORT injected automatically"
							],
							[
								"Render",
								"npm start",
								"PORT injected automatically"
							],
							[
								"Fly.io",
								"npm start",
								"See fly.toml example below"
							],
							[
								"Heroku",
								"npm start",
								"PORT injected automatically"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Docker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "Dockerfile",
						lang: "dockerfile",
						code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Fly.io"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "fly.toml",
						lang: "toml",
						code: `[processes]
  app = "npm start"`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "api-reference",
				title: "API Reference",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Environment variable priority"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mb-6 list-decimal space-y-1 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }), " (highest)"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }), " (medium)"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No prefix (lowest)" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "HTTP status codes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Code", "Description"],
						rows: [
							["200", "Success"],
							["204", "OPTIONS preflight success"],
							["304", "Not Modified (ETag match)"],
							["400", "Bad request URL"],
							["404", "Route not found"],
							["408", "Request timeout"],
							["413", "Payload too large"],
							["500", "Internal server error"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Supported HTTP methods"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "GET" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "POST" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "PUT" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "PATCH" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "DELETE" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "OPTIONS" }),
						" (CORS preflight), and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "HEAD" }),
						" (with ETag support)."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "requirements",
				title: "Requirements",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Node.js ≥ 20.19.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["A bini-router project with a built ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"API handlers in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						" (if using API routes)"
					] })
				] })
			})
		]
	});
}
//#endregion
export { BiniServerPage as default };
