import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, p as PromptOutput, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual } from "./DocVisuals-BzN7mWOU.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-deploy.tsx
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
		id: "quick-start",
		label: "Quick Start"
	},
	{
		id: "usage",
		label: "Usage"
	},
	{
		id: "hosting",
		label: "Hosting Providers"
	},
	{
		id: "api-routes",
		label: "API Routes"
	},
	{
		id: "hono-support",
		label: "Hono Support"
	},
	{
		id: "how-it-works",
		label: "How it Works"
	},
	{
		id: "git-behavior",
		label: "Git Behavior"
	},
	{
		id: "requirements",
		label: "Requirements"
	}
];
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-deploy/page.tsx";
function FeatureCard({ title, children }) {
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
function BiniDeployPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "bini-deploy",
		badge: "Official",
		description: "Zero-config deployment for Bini.js projects - web, desktop, and mobile, all from one CLI.",
		url: "https://bini.dev/plugins/bini-deploy",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins/create-bini-app",
			title: "create-bini-app"
		},
		next: {
			to: "/plugins/bini-router",
			title: "bini-router"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }), " scans your project, generates the right hosting configuration for your target platform, and pushes it straight to GitHub. No YAML spelunking, no platform-specific docs to read first."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "One command from zero to deployed. Handles git identity, GitHub auth, branch naming, and cleanup automatically." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "features",
				title: "Features",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Web Hosting",
							children: "Netlify, Vercel, Cloudflare Workers, Deno Deploy. Picks adapter, writes config, wires API routes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureCard, {
							title: "File-based API",
							children: [
								"Drop files in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
								", bini-deploy scans and mounts each as route with dynamic segments."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Automatic CORS",
							children: "API routes get permissive CORS headers out of the box on every non-Node adapter."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native Support",
							children: "Windows, macOS, Linux, iOS, Android via Tauri with tailored next-step instructions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Git Built-in",
							children: "Init repo if needed, sets up identity and auth if missing, commits and pushes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Smart Diagnostics",
							children: "Push failures diagnosed - bad credentials, repo not found, or diverged history with accurate recovery."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "installation",
				title: "Installation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install --save-dev bini-deploy`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add -D bini-deploy`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add -D bini-deploy`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add -D bini-deploy`
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "quick-start",
				title: "Quick Start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Interactive mode - just run it and answer the prompts:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npx bini-deploy`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm dlx bini-deploy`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn dlx bini-deploy`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bunx bini-deploy`
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-4",
						children: "bini-deploy will guide you through two prompts:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
						{
							kind: "question",
							text: "Select your target platform:"
						},
						{
							kind: "option",
							text: "Web",
							selected: true
						},
						{
							kind: "option",
							text: "Windows"
						},
						{
							kind: "option",
							text: "macOS"
						},
						{
							kind: "option",
							text: "iOS"
						},
						{
							kind: "option",
							text: "Linux"
						},
						{
							kind: "option",
							text: "Android"
						},
						{ kind: "blank" },
						{
							kind: "hint",
							text: "↑↓ navigate • ⏎ select"
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
						{
							kind: "question",
							text: "Select hosting provider:"
						},
						{
							kind: "option",
							text: "Node.js (default - bini-server)",
							selected: true
						},
						{
							kind: "option",
							text: "Netlify"
						},
						{
							kind: "option",
							text: "Vercel"
						},
						{
							kind: "option",
							text: "Cloudflare Workers"
						},
						{
							kind: "option",
							text: "Deno Deploy"
						},
						{ kind: "blank" },
						{
							kind: "hint",
							text: "↑↓ navigate • ⏎ select"
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Non-interactive mode - for scripts and CI:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm dlx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn dlx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bunx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes`
						}
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "usage",
				title: "Usage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npx bini-deploy [options]`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm dlx bini-deploy [options]`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn dlx bini-deploy [options]`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bunx bini-deploy [options]`
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Flag", "Description"],
						rows: [
							["--platform <type>", "web, windows, macos, ios, linux, android"],
							["--hosting <name>", "node (default), netlify, vercel, cloudflare, deno (web only)"],
							["--repo <url>", "GitHub repo URL, e.g. https://github.com/you/app"],
							["--generate-entry <host>", "Generate production entry file only"],
							["--yes, -y", "Skip prompts and use flags"],
							["--help, -h", "Show usage information"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-3 font-medium text-black dark:text-white",
						children: "Examples:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes\n$ npx bini-deploy --platform windows --repo https://github.com/you/your-app -y\n$ npx bini-deploy --generate-entry netlify\n$ npx bini-deploy`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm dlx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes\n$ pnpm dlx bini-deploy --platform windows --repo https://github.com/you/your-app -y`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn dlx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bunx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes`
						}
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "hosting",
				title: "Supported Hosting Providers",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Provider",
						"Runtime",
						"Config Generated"
					],
					rows: [
						[
							"Node.js (default)",
							"Node (bini-server)",
							"None - bini-server handles build/serve"
						],
						[
							"Netlify",
							"Edge Functions (Deno)",
							"netlify.toml + netlify/edge-functions/api.ts"
						],
						[
							"Vercel",
							"Node.js Runtime",
							"vercel.json + api/index.ts"
						],
						[
							"Cloudflare Workers",
							"Workers",
							"wrangler.toml + worker.ts"
						],
						[
							"Deno Deploy",
							"Deno",
							"server/index.ts"
						]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Node is default because Bini.js ships with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
					", a zero-dependency production server. Choosing it skips config generation entirely."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "api-routes",
				title: "API Routes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Any file in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						" becomes an API route. Nested folders map to URL segments, bracket segments become dynamic params, and spread segments become wildcards:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
						width: 280,
						rows: [
							{
								n: "api",
								d: 0
							},
							{
								n: "index.ts",
								d: 1,
								fn: true
							},
							{
								n: "users",
								d: 1
							},
							{
								n: "index.ts",
								d: 2,
								fn: true
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/users/[id].ts",
						lang: "js",
						code: `export default async function handler(req) {
  const id = new URL(req.url).pathname.split('/').pop();
  return { id, name: 'Ada Lovelace' };
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"If your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "package.json" }),
						" has ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "\"type\": \"module\"" }),
						", every relative import must include its file extension explicitly - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "./utils.js" }),
						" not ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "./utils" }),
						" - or deployed function will crash with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ERR_MODULE_NOT_FOUND" }),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "hono-support",
				title: "Hono Support",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"If your route file imports from ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono" }),
					", bini-deploy detects it and mounts it as a full Hono app:"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/api/hello/route.ts",
					lang: "js",
					code: `import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello from Hono!' }));
app.post('/', async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

export default app;`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "how-it-works",
				title: "How it Works",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-black dark:text-white",
								children: "Scan"
							}),
							" - scans your",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
							" directory for route files"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "Generate"
						}), " - creates platform-specific entry file and configuration"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "Clean"
						}), " - removes leftover files from previously selected platform"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "Push"
						}), " - commits and pushes everything to GitHub"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "Deploy"
						}), " - hosting platform automatically deploys from GitHub"] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "git-behavior",
				title: "Git Behavior",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-6 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "Existing remote"
						}), " - uses it without modification"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "New projects"
						}), " - adds provided URL as origin"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "Always main"
						}), " - automatically handles branch naming, never pushes to master"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-black dark:text-white",
								children: "Git identity"
							}),
							" - prompts for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "user.name/user.email" }),
							" once if not set, local only"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-black dark:text-white",
							children: "GitHub auth"
						}), " - prompts for username + PAT if push rejected, saves via credential store"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-black dark:text-white",
								children: "Remote-ahead recovery"
							}),
							" ",
							"- fetches and merges remote history automatically with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--allow-unrelated-histories -X ours" })
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "requirements",
				title: "Requirements",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Node.js ",
						">=",
						" 18"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Vite ",
						">=",
						" 6"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A GitHub repository (created ahead of time)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "git available on PATH" })
				] })
			})
		]
	});
}
//#endregion
export { BiniDeployPage as default };
