import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual, r as FeatureCard } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/platform-web.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "web-overview",
		label: "Web Overview"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "windows",
		label: "Windows"
	},
	{
		id: "macos",
		label: "macOS"
	},
	{
		id: "linux",
		label: "Linux"
	},
	{
		id: "development-server",
		label: "Development Server"
	},
	{
		id: "production-server",
		label: "Production Server"
	},
	{
		id: "prerendering",
		label: "Pre-rendering"
	},
	{
		id: "deployment",
		label: "Deployment"
	}
];
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var CREATE_AND_INSTALL_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest my-app --platform web
$ cd my-app
$ npm install`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform web
$ cd my-app
$ pnpm install`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform web
$ cd my-app
$ yarn install`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform web
$ cd my-app
$ bun install`
	}
];
var INTERACTIVE_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest`
	}
];
var DEV_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run dev`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dev`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dev`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run dev`
	}
];
var BUILD_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run build`
	}
];
var BUILD_START_TABS = [
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
];
var DEPLOY_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run deploy`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm deploy`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn deploy`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run deploy`
	}
];
var NODE_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run build && npm start`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm build && pnpm start`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn build && yarn start`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run build && bun run start`
	}
];
function ScaffoldBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Create the Project"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Create a new Bini.js project targeting Web and install its dependencies:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: CREATE_AND_INSTALL_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Or use the interactive prompt and select ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Web Application" }),
				":"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: INTERACTIVE_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
			{
				kind: "question",
				text: "Select target platform:"
			},
			{
				kind: "option",
				text: "Web Application",
				selected: true
			},
			{
				kind: "option",
				text: "Windows Desktop"
			},
			{
				kind: "option",
				text: "Linux Desktop"
			},
			{
				kind: "option",
				text: "macOS Desktop"
			},
			{
				kind: "option",
				text: "Android"
			},
			{
				kind: "option",
				text: "iOS"
			},
			{ kind: "blank" },
			{
				kind: "hint",
				text: "↑↓ navigate • ⏎ select"
			}
		] })
	] });
}
function WindowsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "windows",
		title: "Windows",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On Windows you can scaffold, develop, and build the app entirely on your own machine - no CI required. Web apps are pure JavaScript/TypeScript, so no native toolchain is needed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Node.js ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "20.19.0"
				}),
				" or higher"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Git for Windows - ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "winget install --id Git.Git" }),
				" or download from ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "git-scm.com" })
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 2: Create the project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaffoldBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 3: Develop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Run ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dev" }),
					" to start the Vite dev server with HMR:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Web is the default platform - ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform web" }),
				" is optional."
			] })
		]
	});
}
function MacosSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "macos",
		title: "macOS",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On macOS you can scaffold, develop, and build the app entirely on your own machine - no CI required. Web apps are pure JavaScript/TypeScript, so no native toolchain is needed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Node.js ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "20.19.0"
				}),
				" or higher"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Git - comes with Xcode Command Line Tools. Run ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "xcode-select --install" }),
				" if you do not have it yet."
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 2: Create the project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaffoldBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 3: Develop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Run ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dev" }),
					" to start the Vite dev server with HMR:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Web is the default platform - ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform web" }),
				" is optional."
			] })
		]
	});
}
function LinuxSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "linux",
		title: "Linux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On Linux you can scaffold, develop, and build the app entirely on your own machine - no CI required. Web apps are pure JavaScript/TypeScript, so no native toolchain is needed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Node.js ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "20.19.0"
				}),
				" or higher"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Git with your package manager, for example ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "sudo apt install git" }),
				" on Debian and Ubuntu."
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 2: Create the project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaffoldBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 3: Develop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Run ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dev" }),
					" to start the Vite dev server with HMR:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Web is the default platform - ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform web" }),
				" is optional."
			] })
		]
	});
}
function Content() {
	const lang = useDocLang();
	const t = lang === "js" ? "js" : "ts";
	const e = lang === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "web-overview",
			title: "Web Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Web is the default platform target in Bini.js. It is a standard Vite + React SPA with file-based routing, pre-rendering support, and a Hono API layer. Your application runs in the browser and can be deployed to any hosting platform."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "SPA",
							text: "Single-page application with client-side routing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "API Layer",
							text: "Hono-powered API routes in src/app/api/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Pre-rendering",
							text: "Static HTML with bini-ssg"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Web is the default platform on every OS - no ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform" }),
					" flag required."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "requirements",
			title: "Requirements",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Web apps are pure JavaScript/TypeScript, so no native toolchain is needed. The only prerequisites are Node.js and Git - they work the same on every OS."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "20.19.0"
					}),
					" or higher"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Git - comes with Xcode Command Line Tools on macOS, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "sudo apt install git" }),
					" on Linux, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "winget install --id Git.Git" }),
					" on Windows"
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "You do not need Rust, Xcode, MSVC, or any platform-specific SDK to build a web app. Those are only required when targeting native desktop or mobile platforms." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacosSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinuxSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "development-server",
			title: "Development Server",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Start the development server with HMR (Hot Module Replacement). This command is the same on every OS:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "The dev server provides:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fast refresh with HMR" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "File-based routing with live updates" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["API routes served at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Environment variables from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
						" files"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Error overlay with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-overlay" })] })
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "production-server",
			title: "Production Server",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Build and serve your application in production mode:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_START_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }), " is a zero-dependency production server that includes:"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Static file serving with ETag/304 caching" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["API routes from ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "SPA fallback for client-side routing" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Graceful shutdown" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Configurable timeouts and body limits" })
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "prerendering",
			title: "Pre-rendering",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Every route is pre-rendered to static HTML during ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						". There is no separate export command or export mode - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" drives pre-rendering as part of the same build."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "How It Works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						" type-checks (TypeScript projects) and then runs ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
						". The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" plugin drives pre-rendering as part of that same build:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Static routes"
						}),
						" (e.g., ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" }),
						") are rendered to real server-rendered HTML"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Dynamic routes"
						}),
						" (e.g., ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						") get a shell page with hydration"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "React 19"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "renderToPipeableStream" }),
						" is used for server rendering"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "StaticRouter"
					}), " from React Router provides the routing context"] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Your render() Function"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" function is exported from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `src/main.${e}` }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/main.${e}`,
					tsCode: `// src/main.tsx
import { createRoot } from 'react-dom/client'
import App from './App'

// Client mount
createRoot(document.getElementById('root')!).render(<App />)

// SSG render (called by bini-ssg, Node-only)
export async function render(url: string): Promise<string> {
  const { renderToString } = await import('react-dom/server')
  const { StaticRouter } = await import('react-router-dom/server')
  const { AppRoutes } = await import('./App')

  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
}`,
					jsCode: `// src/main.jsx
import { createRoot } from 'react-dom/client'
import App from './App'

// Client mount
createRoot(document.getElementById('root')).render(<App />)

// SSG render (called by bini-ssg, Node-only)
export async function render(url) {
  const { renderToString } = await import('react-dom/server')
  const { StaticRouter } = await import('react-router-dom/server')
  const { AppRoutes } = await import('./App')

  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Build Command"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The output is real server-rendered markup, not a client-only shell. The client then hydrates it with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hydrateRoot" }),
						" on load."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Output Structure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Each route gets its own ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.html" }),
						" in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 300,
					rows: [
						{ n: "dist" },
						{
							n: "index.html",
							d: 1,
							dot: true,
							url: "/"
						},
						{
							n: "about",
							d: 1
						},
						{
							n: "index.html",
							d: 2,
							dot: true,
							url: "/about"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: "[slug]",
							d: 2
						},
						{
							n: "index.html",
							d: 3,
							url: "/blog/:slug"
						},
						{
							n: "docs",
							d: 1
						},
						{
							n: "[...slug]",
							d: 2
						},
						{
							n: "index.html",
							d: 3,
							url: "/docs/*"
						},
						{
							n: "js",
							d: 1
						},
						{
							n: "index-[hash].js",
							d: 2
						},
						{
							n: "css",
							d: 1
						},
						{
							n: "index-[hash].css",
							d: 2
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Highlighted files are fully pre-rendered pages for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/*" }),
						" are shell pages"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "js/" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "css/" }),
						" hold your compiled JavaScript and CSS files"
					] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Hydration and Shell Pages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"For dynamic routes, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" injects a marker script:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "dist/blog/[slug]/index.html",
					lang: "text",
					code: `<!-- injected by bini-ssg -->
<script>window.__BINI_SHELL__=true;<\/script>`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Your client entry checks this flag:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/main.${e}`,
					tsCode: `// src/main.tsx
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'

declare global {
  interface Window {
    __BINI_SHELL__?: boolean
  }
}

const root = document.getElementById('root')!

if (window.__BINI_SHELL__) {
  createRoot(root).render(<App />)
} else {
  hydrateRoot(root, <App />)
}`,
					jsCode: `// src/main.jsx
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')

if (window.__BINI_SHELL__) {
  createRoot(root).render(<App />)
} else {
  hydrateRoot(root, <App />)
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deployment",
			title: "Deployment",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }),
						" is bundled into every scaffold and exposed as ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
						". For web, it prompts for a hosting target and generates the appropriate configuration."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Deploy Command"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Generated Files"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The target you choose determines what ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }),
						" creates:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Platform",
						"Runtime",
						"File Generated"
					],
					rows: [
						[
							"Node.js",
							"Node.js",
							"- (bini-server reads src/app/api/ directly)"
						],
						[
							"Netlify",
							"Edge Functions (Deno)",
							"netlify/edge-functions/api.ts + netlify.toml"
						],
						[
							"Vercel",
							"Edge Runtime",
							"api/index.ts + vercel.json"
						],
						[
							"Cloudflare",
							"Workers",
							"worker.ts + wrangler.toml"
						],
						[
							"Deno",
							"Deno",
							"server/index.ts"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Deployment Options"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "SPA + API Server:"
						}),
						" Build with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						", deploy with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm start" }),
						" (requires Node.js)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Pre-rendered Static:"
						}),
						" Build with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						", deploy the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						" folder to any static hosting"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Edge/Serverless:"
						}),
						" Use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
						" to generate platform-specific entry files"
					] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Node.js Deployment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "For Node.js hosts (Railway, Render, Fly.io, a VPS):"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: NODE_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
						" reads handlers directly from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						", so deploy the whole project - not just ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						". Use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "pm2" }),
						" on a bare VPS."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "GitHub Pages / Subpaths"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Set ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "base: '/my-repo/'" }),
						" in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `vite.config.${t}` }),
						", then ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						" ",
						"for a fully pre-rendered, subpath-aware ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'

export default defineConfig({
  base: '/my-repo/',  // GitHub Pages subpath
  plugins: [react(), biniroute()],
})`
				})
			]
		})
	] });
}
function PlatformWebPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Web",
		description: "Build web applications with Bini.js - the default platform target.",
		url: "https://bini.js.org/docs/platform-web",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-web.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/css-modules",
			title: "CSS Modules"
		},
		next: {
			to: "/docs/platform-windows",
			title: "Windows"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { PlatformWebPage as default };
