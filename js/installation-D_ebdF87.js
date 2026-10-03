import { C as require_react, w as __toESM, y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
//#region src/app/docs/installation.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "quick-start",
		label: "Quick start"
	},
	{
		id: "cli-flags",
		label: "CLI flags"
	},
	{
		id: "system-requirements",
		label: "System requirements"
	},
	{
		id: "supported-browsers",
		label: "Supported browsers"
	},
	{
		id: "native-platform-support",
		label: "Native platform support"
	},
	{
		id: "run-dev-server",
		label: "Run the development server"
	},
	{
		id: "setup-typescript",
		label: "Set up TypeScript"
	},
	{
		id: "setup-linting",
		label: "Set up linting"
	},
	{
		id: "setup-absolute-imports",
		label: "Set up absolute imports"
	}
];
var PMS = [
	"npm",
	"pnpm",
	"yarn",
	"bun"
];
var CREATE = {
	npm: "npx create-bini-app@latest",
	pnpm: "pnpm create bini-app@latest",
	yarn: "yarn create bini-app@latest",
	bun: "bun create bini-app@latest"
};
var run = (pm, script, bunRun = true) => pm === "npm" ? `npm run ${script}` : pm === "bun" && bunRun ? `bun run ${script}` : `${pm} ${script}`;
var tabs = (cmd) => PMS.map((pm) => ({
	id: pm,
	label: pm,
	command: cmd(pm)
}));
var PLATFORM_EXAMPLES = [
	"my-app --platform macos",
	"my-app --platform android --app-name \"My App\" --nosign",
	"my-app --platform windows"
];
var DEV_TARGETS = [
	{
		title: "Web",
		script: "dev",
		bunRun: false,
		note: "Starts the Vite dev server and opens your browser automatically."
	},
	{
		title: "Windows",
		script: "tauri:dev",
		note: "Launches the app in a native Windows window with full HMR."
	},
	{
		title: "macOS",
		script: "tauri:dev",
		note: "Launches the app in a native macOS window with full HMR."
	},
	{
		title: "Linux",
		script: "tauri:dev",
		note: "Launches the app in a native Linux window with full HMR."
	},
	{
		title: "Android",
		script: "android",
		note: "Runs the app on a connected Android device or emulator."
	},
	{
		title: "iOS",
		script: "ios",
		note: "Runs the app on a connected iOS device or simulator."
	}
];
var PACKAGE_JSON = `{
  "scripts": {
    "lint": "oxlint",
    "format": "oxfmt",
    "check": "npm run lint && npm run format"
  }
}`;
var IMPORT_EXAMPLE = `// Before
import { Button } from '../../../components/button'

// After
import { Button } from '@/components/button'`;
var TSCONFIG = `{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;
var VITE_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { biniroute } from 'bini-router'
import { biniOverlay } from 'bini-overlay'
import { biniEnv } from 'bini-env'
import { biniSSG } from 'bini-ssg'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    biniroute(),
    biniOverlay(),
    biniEnv(),
    biniSSG(),
  ],
  resolve: {
    alias: { '@': '/src' },
  },
})`;
function InstallationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DocPage, {
		title: "Installation",
		description: "Create a new Bini.js application and run it locally.",
		url: "https://bini.js.org/docs/installation",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/installation.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs",
			title: "Getting Started"
		},
		next: {
			to: "/docs/project-structure",
			title: "Project Structure"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "quick-start",
				title: "Quick start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"The quickest way to create a new Bini.js app is using ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "create-bini-app" }),
						", which sets up everything automatically."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: tabs((pm) => [
						`$ ${CREATE[pm]} my-app`,
						"$ cd my-app",
						`$ ${run(pm, "dev", false)}`
					].join("\n")) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "On installation, you'll see the following prompts:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
						{
							kind: "input",
							label: "Project name?",
							value: "my-bini-app"
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
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"After the prompts, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "create-bini-app" }),
						" creates a folder with your project name, installs the required dependencies, and enables TypeScript, Tailwind CSS, Oxlint, the App Router, and the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@/*" }),
						" import alias by default."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "cli-flags",
				title: "CLI flags",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Skip prompts by passing flags directly:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Flag", "Description"],
					rows: [
						["--typescript", "Use TypeScript (default)"],
						["--javascript", "Use JavaScript"],
						["--tailwind", "Use Tailwind CSS (default)"],
						["--css-modules", "Use CSS Modules"],
						["--none", "No styling"],
						["--platform <target>", "web · windows · macos · linux · android · ios"],
						["--app-name <name>", "Display name for desktop / mobile apps"],
						["--sign / --nosign", "Code-signing setup"],
						["--npm / --pnpm / --yarn / --bun", "Force a specific package manager"],
						["--install / --no-install", "Install dependencies"],
						["--force", "Overwrite existing directory"],
						["--version, -v", "Print CLI version"],
						["--help, -h", "Show help"]
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "system-requirements",
				title: "System requirements",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Before you begin, make sure your development environment meets the following requirements:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Minimum Node.js version: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://nodejs.org/",
						children: "20.19.0"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Operating systems: macOS, Windows, and Linux." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For desktop builds: Windows (C++ Build Tools), macOS (Xcode CLT), Linux (WebKitGTK)." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For mobile builds: Android (JDK 17, Android Studio), iOS (Xcode, CocoaPods)." })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "supported-browsers",
				title: "Supported browsers",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Bini.js supports modern browsers with zero configuration." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Chrome 111+" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Edge 111+" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Firefox 111+" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Safari 16.4+" })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "native-platform-support",
				title: "Native platform support",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Bini.js builds for multiple platforms from a single codebase. Use the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform" }),
						" ",
						"flag to target a specific platform:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: tabs((pm) => PLATFORM_EXAMPLES.map((line) => `$ ${CREATE[pm]} ${line}`).join("\n")) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Every platform gets the full framework - routing, layouts, API routes, SSG, the overlay, and the rest. The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform" }),
						" flag only decides what the build targets."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Platform", "Builds"],
						rows: [
							["web", "Web app"],
							["windows · macos · linux", "Native desktop binaries"],
							["android · ios", "Native mobile apps"]
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "run-dev-server",
				title: "Run the development server",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-6",
					children: "Each platform has its own dev command. Run the one that matches the platform you scaffolded."
				}), DEV_TARGETS.map(({ title, script, bunRun, note }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: tabs((pm) => `$ ${run(pm, script, bunRun)}`) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: i < DEV_TARGETS.length - 1 ? "mb-6" : "",
						children: note
					})
				] }, title))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "setup-typescript",
				title: "Set up TypeScript",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "",
					children: [
						"Bini.js now supports TypeScript 7, the native compiler, ~10× faster. Just pick",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "TypeScript" }),
						" in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "create-bini-app" }),
						" or use the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--typescript" }),
						" flag, and the CLI sets everything up for you."
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "setup-linting",
				title: "Set up linting",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Bini.js uses Oxlint for linting and Oxfmt for formatting - pre-configured and ready to use." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "package.json",
						lang: "json",
						code: PACKAGE_JSON
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "These scripts refer to the different stages of developing an application:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run lint" }), " - runs Oxlint."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run format" }), " - runs Oxfmt."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run check" }), " - runs both lint and format."] })
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "setup-absolute-imports",
				title: "Set up absolute imports and module path aliases",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Bini.js has built-in support for path aliases using the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "\"paths\"" }),
						" option in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tsconfig.json" }),
						". These options let you alias project directories to absolute paths, making imports easier to read and refactor:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: IMPORT_EXAMPLE }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Path aliases are configured by default:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "tsconfig.json",
						lang: "json",
						code: TSCONFIG
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Vite resolves the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@" }),
						" alias to the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src" }),
						" directory through the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "resolve.alias" }),
						" entry in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite.config.ts" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "vite.config.ts",
						code: VITE_CONFIG
					})
				]
			})
		]
	});
}
//#endregion
export { InstallationPage as default };
