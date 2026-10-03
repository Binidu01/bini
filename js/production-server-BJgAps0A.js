import { h as siNodedotjs } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, i as FolderVisual, l as RouteVisual, n as CARD, r as FeatureCard, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/production-server.tsx
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
	}
];
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var OL = "mb-6 list-decimal space-y-1 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400";
var Yes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-emerald-600 dark:text-emerald-400",
	children: "Yes"
});
var No = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-neutral-500",
	children: "No"
});
var BOX = `${CARD} flex items-center px-3 text-[12px] text-neutral-800 dark:text-neutral-200`;
/** How a request is routed. */
function RequestFlowVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} h-10 w-24 shrink-0 justify-center`,
				children: "Request"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} h-10 w-32 shrink-0 justify-center font-semibold`,
				children: "bini-server"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `${BOX} h-10 w-64 shrink-0`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 text-neutral-500",
						children: "dist/"
					}), "static files + SPA fallback"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `${BOX} h-10 w-64 shrink-0`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 text-neutral-500",
						children: "src/app/api/"
					}), "/api/* routes"]
				})]
			})
		]
	}) });
}
var BANNER_TEXT = `  ß Bini.js (production)
  ->  Environments: .env, .env.local
  ->  Local:   http://localhost:3000/
  ->  Network: http://192.168.1.5:3000/
  press h + enter to show help`;
/** Colored startup banner, matching the real terminal output. */
function ServerBanner() {
	const arrow = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-green-600 dark:text-green-400",
		children: "➜"
	});
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
				children: "ß Bini.js"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "(production)"
			}),
			"\n  ",
			arrow,
			"  ",
			label("Environments:"),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-600 dark:text-neutral-400",
				children: ".env, .env.local"
			}),
			"\n  ",
			arrow,
			"  ",
			label("Local:"),
			"   ",
			url("localhost"),
			"\n  ",
			arrow,
			"  ",
			label("Network:"),
			" ",
			url("192.168.1.5"),
			"\n  ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-neutral-500",
				children: [
					"➜ press ",
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
function Content() {
	const lang = useDocLang();
	const t = lang === "js" ? "js" : "ts";
	const e = lang === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
						" is the default production server for the Node.js hosting target. It streams your built ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						" folder, serves ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" }),
						" routes directly from",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						", and adds everything ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite preview" }),
						" intentionally leaves out - ETag caching, timeouts, graceful shutdown, and configurable body limits."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestFlowVisual, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-6",
					children: [
						"It has ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "zero runtime dependencies"
						}),
						" - only Node.js built-in modules - and works identically on Windows, macOS, and Linux."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Requirements:" }),
					" Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "≥ 20.19.0" }),
					", a built ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
					" folder, and API handlers under ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
					" (if your app uses any)."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "features",
			title: "Features",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Core"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Static file serving",
							text: "Streams dist/ with correct MIME types, ETag, and cache headers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "API routes",
							text: "Serves /api/* from src/app/api/ - Hono apps and plain functions both work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "SPA fallback",
							text: "Unknown routes automatically serve dist/index.html."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "ETag support",
							text: "304 Not Modified responses for unchanged static files."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Lazy route loading",
							text: "API routes are scanned on first request for fast cold starts."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Security & Performance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "CORS",
							text: "Enabled by default, configurable via CORS_ENABLED (BINI_*, VITE_*, or no prefix)."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Body limits",
							text: "Configurable request body size limit, defaults to 10MB."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Timeouts",
							text: "Configurable body-read and handler timeouts, default 30s each."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Path traversal protection",
							text: "Guards against .. and // in request URLs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Module cache",
							text: "Caches imported handlers with mtime invalidation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Port auto-increment",
							text: "Starts at 3000, auto-increments if the port is busy."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Developer Experience"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Auto env loading",
							text: ".env files are detected and listed in the startup banner."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Interactive shortcuts",
							text: "Press h for help, o to open the browser, q to quit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Cross-platform",
							text: "Works identically on Windows, macOS, and Linux."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Graceful shutdown",
							text: "Handles SIGTERM + SIGINT with a timeout fallback."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Zero dependencies",
							text: "Only Node.js built-in modules - nothing to audit or update."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Flexible config",
							text: "Every setting supports BINI_*, VITE_*, or no-prefix env vars."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "installation",
			title: "Installation",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Every Bini.js web scaffold already includes ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
					". To add it to an existing project:"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
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
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "usage",
			title: "Usage",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "2. Build and start"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm run build
$ npm start`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm build
$ pnpm start`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn build
$ yarn start`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun run build
$ bun run start`
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "3. Terminal output"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerBanner, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "keyboard-shortcuts",
			title: "Keyboard Shortcuts",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "While the server is running, type a key and press enter:"
				}),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Auto-detected .env files"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "At startup, bini-server automatically detects and loads, in priority order:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [
						{
							n: ".env.local",
							dot: true
						},
						{ n: ".env.production.local" },
						{ n: ".env.production" },
						{ n: ".env" }
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-4 space-y-2",
					children: [
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
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-6",
					children: "All detected files are listed in the startup banner."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Naming conventions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Every setting supports three naming conventions, in priority order:"
				}),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Examples"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
PORT=8080
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
				width: 300,
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
						n: `users.${t}`,
						d: 4,
						fn: true
					},
					{
						n: "posts",
						d: 4
					},
					{
						n: `index.${t}`,
						d: 5,
						fn: true
					},
					{
						n: `[id].${t}`,
						d: 5,
						fn: true
					},
					{
						n: `layout.${e}`,
						d: 3
					},
					{
						n: `main.${e}`,
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
						n: `vite.config.${t}`,
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Supported formats"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "A Hono app (recommended):"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/users.${t}`,
					code: `import { Hono } from 'hono'

const app = new Hono()

app.get('/users', (c) => c.json({ users: [] }))

export default app`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Or a plain function:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/hello.${t}`,
					tsCode: `// src/app/api/hello.ts
export default (req: Request) => {
  return Response.json({ message: 'Hello' })
}`,
					jsCode: `// src/app/api/hello.js
export default (req) => {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Dynamic routes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 280,
					rows: [
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
							n: "users",
							d: 3
						},
						{
							n: `[id].${t}`,
							d: 4,
							fn: true,
							dot: true,
							url: "/api/users/:id"
						},
						{
							n: "posts",
							d: 3
						},
						{
							n: `[...slug].${t}`,
							d: 4,
							fn: true,
							dot: true,
							url: "/api/posts/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Route parameters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"For plain function handlers, route params are passed as JSON via the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "x-bini-params" }),
						" request header:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/users/[id].${t}`,
					tsCode: `// src/app/api/users/[id].ts
export default (req: Request) => {
  const params = JSON.parse(req.headers.get('x-bini-params') || '{}')
  // params.id -> '123'
  return Response.json({ id: params.id })
}`,
					jsCode: `// src/app/api/users/[id].js
export default (req) => {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "CORS is enabled by default with these headers:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "Response headers",
					lang: "text",
					code: `Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD
Access-Control-Allow-Headers: Content-Type,Authorization,X-Request-ID`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [
						"Disable it with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "CORS_ENABLED=false" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_CORS_ENABLED=false" }),
						", or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_CORS_ENABLED=false" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
CORS_ENABLED=false`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "static-file-serving",
			title: "Static File Serving",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Supported MIME types"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HTML, CSS, JavaScript, JSON" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Images - PNG, JPEG, GIF, SVG, WebP, AVIF, ICO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fonts - WOFF, WOFF2, TTF, EOT" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Documents - TXT, XML" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Web manifests" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Cache headers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["File Type", "Cache Policy"],
					rows: [["/assets/*", "public, max-age=31536000, immutable"], ["All other files", "no-cache"]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "ETag support"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "ETags are generated automatically from file size + mtimeMs:"
				}),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Configuration examples"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Development"
					}), " (all security disabled)"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
CORS_ENABLED=true
BODY_TIMEOUT_SECS=0
HANDLER_TIMEOUT_SECS=0
BODY_SIZE_LIMIT=0
NODE_ENV=development`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Production"
					}), " (secure defaults)"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
CORS_ENABLED=true
BODY_TIMEOUT_SECS=30
HANDLER_TIMEOUT_SECS=30
BODY_SIZE_LIMIT=10485760
NODE_ENV=production`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Internal API"
					}), " (no CORS)"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
CORS_ENABLED=false
BODY_SIZE_LIMIT=5242880  # 5MB`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "File upload service"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
CORS_ENABLED=true
BODY_SIZE_LIMIT=1073741824  # 1GB
BODY_TIMEOUT_SECS=300  # 5 minutes`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deployment",
			title: "Deployment",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
				icon: siNodedotjs,
				size: 20,
				className: "shrink-0 text-black dark:text-white"
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ship your src/ folder." }),
					" bini-server runs API handlers directly from",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
					" - they are not compiled into ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
					". Make sure your host has access to both ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-4",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Docker"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "Dockerfile",
					lang: "text",
					code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Fly.io"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "fly.toml",
					lang: "text",
					code: `[processes]
  app = "npm start"`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "api-reference",
			title: "API Reference",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-2",
					children: "Environment variable priority"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: OL,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BINI_*" }), " (highest)"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "VITE_*" }), " (medium)"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No prefix (lowest)" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Supported HTTP methods"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-0",
					children: [
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
					]
				})
			]
		})
	] });
}
function ProductionServerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Production Server",
		description: "A zero-dependency, secure-by-default production server for your Bini.js app, powered by bini-server.",
		url: "https://bini.js.org/docs/production-server",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/production-server.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/deploying",
			title: "Deploying"
		},
		next: {
			to: "/docs/static-export",
			title: "Static Export"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { ProductionServerPage as default };
