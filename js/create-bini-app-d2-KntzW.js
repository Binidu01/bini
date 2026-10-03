import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, h as Table, l as H3, m as Section, n as C, p as PromptOutput, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual } from "./DocVisuals-BzN7mWOU.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/create-bini-app.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "quick-start",
		label: "Quick Start"
	},
	{
		id: "why-bini",
		label: "Why Bini.js"
	},
	{
		id: "features",
		label: "Features"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "cli-flags",
		label: "CLI flags"
	},
	{
		id: "project-structure",
		label: "Project Structure"
	},
	{
		id: "scripts",
		label: "Scripts"
	}
];
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/create-bini-app/page.tsx";
function FeatureList({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mb-2",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["- ", item] }, item))
		})]
	});
}
function CreateBiniAppPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "create-bini-app",
		badge: "Official",
		description: "Build full-stack React apps for web, desktop, and mobile - from one codebase. Scaffolds a complete Vite + React + Hono project.",
		url: "https://bini.dev/plugins/create-bini-app",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins",
			title: "Plugins"
		},
		next: {
			to: "/plugins/bini-deploy",
			title: "bini-deploy"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "create-bini-app" }), " is the official scaffolder for Bini.js. It creates a production-ready project with file-based routing, API routes, environment handling, native app wiring, and deployment CLI - all configured correctly from the first commit."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "One codebase, every target." }), " The same routes, API handlers, and components compile to web, desktop binary, or mobile app. Real Tauri apps, not wrapped web views."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "quick-start",
				title: "Quick Start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The fastest way to scaffold a new Bini.js app:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npx create-bini-app@latest my-app\n$ cd my-app\n$ npm install\n$ npm run dev`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm create bini-app@latest my-app\n$ cd my-app\n$ pnpm install\n$ pnpm dev`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn create bini-app@latest my-app\n$ cd my-app\n$ yarn\n$ yarn dev`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bun create bini-app@latest my-app\n$ cd my-app\n$ bun install\n$ bun dev`
						}
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "On installation, you'll see the following prompts:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
						{
							kind: "input",
							label: "Project name?",
							value: "my-app"
						},
						{ kind: "blank" },
						{
							kind: "question-block",
							text: "Use TypeScript?",
							options: [{
								text: "Yes",
								selected: true
							}, { text: "No" }],
							hint: "↑↓ navigate • ⏎ select"
						},
						{ kind: "blank" },
						{
							kind: "question-block",
							text: "Styling solution?",
							options: [
								{
									text: "Tailwind CSS",
									selected: true
								},
								{ text: "CSS Modules" },
								{ text: "None" }
							],
							hint: "↑↓ navigate • ⏎ select"
						},
						{ kind: "blank" },
						{
							kind: "question-block",
							text: "Which platform would you like to target?",
							options: [
								{
									text: "Web Application",
									selected: true
								},
								{ text: "Windows Desktop" },
								{ text: "Linux Desktop" },
								{ text: "macOS Desktop" },
								{ text: "Android" },
								{ text: "iOS" }
							],
							hint: "↑↓ navigate • ⏎ select"
						}
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "why-bini",
				title: "Why Bini.js",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Most React starters give you a bundler and call it a day. Bini.js gives you a framework: file-based routing, a backend, environment handling, a native app story, and a deployment CLI, wired together from day one." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-black dark:text-neutral-100",
							children: "One codebase, every target."
						}),
						" ",
						"Same routes and API handlers compile to web, desktop, or mobile."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-black dark:text-neutral-100",
							children: "Convention over configuration."
						}),
						" ",
						"Drop a file in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/" }),
						", get a route. Drop in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						", get an endpoint."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-black dark:text-neutral-100",
							children: "Fast by default."
						}),
						" ",
						"Vite + Rolldown, Oxlint + Oxfmt - all Rust-based, pre-configured."
					] })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "features",
				title: "Features",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, {
							title: "Framework",
							items: [
								"File-based routing with nested layouts",
								"MDX and Markdown pages out of the box",
								"Folder-scoped loading.tsx / error.tsx / not-found.tsx",
								"Automatic code splitting",
								"Auto-imports for React and router hooks"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, {
							title: "Backend",
							items: [
								"API routes powered by Hono",
								"One handler, every runtime",
								"Env loading with startup banners",
								"Works on Node, Bun, Deno, Edge"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, {
							title: "Native",
							items: [
								"Tauri desktop + mobile builds",
								"Auto plugin wiring from web APIs",
								"Code signing and bundle IDs at scaffold",
								"Windows, macOS, Linux, Android, iOS"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, {
							title: "DX and Deploy",
							items: [
								"Animated dev overlay with Shiki",
								"TS/JS + Tailwind / CSS Modules",
								"bini-deploy CLI for hosting",
								"bini-ssg pre-renders every route"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "requirements",
				title: "Requirements",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Node.js ",
						">=",
						" 20.19.0 (required by Vite 8)"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Operating systems: macOS, Windows, and Linux" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "cli-flags",
				title: "CLI flags",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Skip prompts by passing flags directly:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Flag", "Description"],
						rows: [
							["--typescript / --javascript", "Language"],
							["--tailwind / --css-modules / --none", "Styling"],
							["--platform <target>", "web · windows · macos · linux · android · ios"],
							["--app-name <name>", "Display name for desktop / mobile"],
							["--sign / --nosign", "Code-signing setup"],
							["--npm / --pnpm / --yarn / --bun", "Force a specific package manager"],
							["--install / --no-install", "Install dependencies"],
							["--force", "Overwrite existing directory"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
						{
							id: "npm",
							label: "npm",
							command: `$ npx create-bini-app@latest my-app --typescript --tailwind --platform macos\n$ npx create-bini-app@latest my-app --platform android --app-name "My App" --nosign`
						},
						{
							id: "pnpm",
							label: "pnpm",
							command: `$ pnpm create bini-app@latest my-app --typescript --tailwind --platform macos\n$ pnpm create bini-app@latest my-app --platform android --app-name "My App" --nosign`
						},
						{
							id: "yarn",
							label: "yarn",
							command: `$ yarn create bini-app@latest my-app --typescript --tailwind --platform macos\n$ yarn create bini-app@latest my-app --platform android --app-name "My App" --nosign`
						},
						{
							id: "bun",
							label: "bun",
							command: `$ bun create bini-app@latest my-app --typescript --tailwind --platform macos\n$ bun create bini-app@latest my-app --platform android --app-name "My App" --nosign`
						}
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "project-structure",
				title: "Project Structure",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 280,
					rows: [
						{ n: "my-app" },
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
							d: 3
						},
						{
							n: "hello.ts",
							d: 4,
							fn: true
						},
						{
							n: "layout.tsx",
							d: 3
						},
						{
							n: "page.tsx",
							d: 3
						},
						{
							n: "not-found.tsx",
							d: 3
						},
						{
							n: "loading.tsx",
							d: 3
						},
						{
							n: "error.tsx",
							d: 3
						},
						{
							n: "globals.css",
							d: 3
						},
						{
							n: "main.tsx",
							d: 2
						},
						{
							n: "App.tsx",
							d: 2
						},
						{
							n: "public",
							d: 1
						},
						{
							n: "favicon.ico",
							d: 2
						},
						{
							n: "logo.png",
							d: 2
						},
						{
							n: "vite.config.ts",
							d: 1
						},
						{
							n: "package.json",
							d: 1
						}
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "scripts",
				title: "Scripts",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Command", "Description"],
					rows: [
						["dev", "Start Vite dev server with HMR"],
						["build", "Type-check, then bundle and pre-render every route"],
						["preview", "Preview the production build"],
						["deploy", "Run bini-deploy - hosting config + push to GitHub"],
						["start", "Web only - serve via bini-server"],
						["tauri:dev / tauri:build", "Desktop - run or build binary"],
						["android / ios", "Mobile - run on device/emulator"]
					]
				})
			})
		]
	});
}
//#endregion
export { CreateBiniAppPage as default };
