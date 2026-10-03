import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, h as Table, i as CodeBlock, m as Section, n as C, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual } from "./DocVisuals-BzN7mWOU.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-router.tsx
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
		id: "install",
		label: "Install"
	},
	{
		id: "setup",
		label: "Setup"
	},
	{
		id: "file-structure",
		label: "File Structure"
	},
	{
		id: "routing",
		label: "Routing"
	},
	{
		id: "route-groups",
		label: "Route Groups"
	},
	{
		id: "parallel-routes",
		label: "Parallel Routes"
	},
	{
		id: "intercepting-routes",
		label: "Intercepting Routes"
	},
	{
		id: "layouts",
		label: "Layouts"
	},
	{
		id: "templates",
		label: "Templates"
	},
	{
		id: "boundaries",
		label: "Boundaries"
	},
	{
		id: "mdx",
		label: "MDX and Markdown"
	},
	{
		id: "metadata",
		label: "Metadata"
	},
	{
		id: "document-export",
		label: "Document Export"
	},
	{
		id: "auto-imports",
		label: "Auto-imports"
	},
	{
		id: "env",
		label: "Environment Variables"
	},
	{
		id: "api-routes",
		label: "API Routes"
	},
	{
		id: "config",
		label: "Configuration"
	}
];
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-router/page.tsx";
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
function BiniRouterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "bini-router",
		badge: "Official",
		description: "File-based routing, nested layouts, templates, route groups, parallel routes @slot, intercepting routes (.), folder-scoped loading/error/404/default boundaries, MDX pages, and Web-standard Request → Response API routes for Vite.",
		url: "https://bini.dev/plugins/bini-router",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins/bini-deploy",
			title: "bini-deploy"
		},
		next: {
			to: "/plugins/bini-env",
			title: "bini-env"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-router" }),
					" is the core of Bini.js. Similar to Next.js App Router, but pure SPA with no server. Scans ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/" }),
					" on every file change and regenerates React Router tree instantly with HMR. Now with parallel routes ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@sidebar" }),
					", intercepting routes",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(.) (..) (...)" }),
					", and typed ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "document" }),
					" export with no HTML injection surface."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Zero config. Production deployment handled by companion ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }),
					". This package focuses on routing, layouts, and local API serving."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "features",
				title: "Features",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
							title: "File-based Routing",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "page.tsx" }),
								" in folders + flat files like ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "about.tsx" }),
								" → URLs. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.*" }),
								" → parent."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
							title: "Parallel Routes",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@sidebar" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@modal" }),
								" slots resolve independently with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "default.tsx" }),
								" ",
								"fallback."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
							title: "Intercepting Routes",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(.)name" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(..)name" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(...)name" }),
								" for modal flows like photo-in-feed."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
							title: "Dynamic & Catch-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[id]" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...slug]" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...slug]]" }),
								" for folders and flat files. Required vs optional tracked separately."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
							title: "Security & Bounded",
							children: "Segment validation, traversal guards, host-header validation, 10MB source limit, 500-entry capped preview cache."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
							title: "Document Export",
							children: [
								"Typed tree, not raw HTML strings - no injection surface. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "html" }),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "body" }),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "head" }),
								" merged safely."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "install",
				title: "Install",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: "$ npm install bini-router bini-env"
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: "$ pnpm add bini-router bini-env"
					},
					{
						id: "yarn",
						label: "yarn",
						command: "$ yarn add bini-router bini-env"
					},
					{
						id: "bun",
						label: "bun",
						command: "$ bun add bini-router bini-env"
					}
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Dependency", "Version"],
					rows: [
						["Vite", "8 or later"],
						["React", "18 or later"],
						["react-router-dom", "Required - BrowserRouter, Routes, Route, Outlet, useLocation, useParams"]
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "setup",
				title: "Setup",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					lang: "js",
					code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [react(), biniEnv(), biniroute()],
})`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/main.tsx",
					lang: "js",
					code: `import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(<App />)`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "file-structure",
				title: "File Structure",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 380,
					rows: [
						{ n: "src" },
						{
							n: "main.tsx",
							d: 1,
							dot: true
						},
						{
							n: "App.tsx",
							d: 1,
							dot: true
						},
						{
							n: "app",
							d: 1
						},
						{
							n: "layout.tsx",
							d: 2,
							fn: true
						},
						{
							n: "template.tsx",
							d: 2,
							fn: true
						},
						{
							n: "page.tsx",
							d: 2,
							fn: true
						},
						{
							n: "loading.tsx",
							d: 2
						},
						{
							n: "not-found.tsx",
							d: 2
						},
						{
							n: "error.tsx",
							d: 2
						},
						{
							n: "global-error.tsx",
							d: 2
						},
						{
							n: "about.mdx",
							d: 2
						},
						{
							n: "(marketing)",
							d: 2
						},
						{
							n: "layout.tsx",
							d: 3,
							fn: true
						},
						{
							n: "pricing",
							d: 3
						},
						{
							n: "page.tsx",
							d: 4,
							fn: true
						},
						{
							n: "@sidebar",
							d: 2
						},
						{
							n: "default.tsx",
							d: 3,
							fn: true
						},
						{
							n: "page.tsx",
							d: 3,
							fn: true
						},
						{
							n: "dashboard",
							d: 3
						},
						{
							n: "page.tsx",
							d: 4,
							fn: true
						},
						{
							n: "photo",
							d: 2
						},
						{
							n: "[id]",
							d: 3
						},
						{
							n: "page.tsx",
							d: 4,
							fn: true
						},
						{
							n: "(.)view",
							d: 4
						},
						{
							n: "page.tsx",
							d: 5,
							fn: true
						},
						{
							n: "blog",
							d: 2
						},
						{
							n: "index.tsx",
							d: 3,
							fn: true
						},
						{
							n: "[slug].tsx",
							d: 3,
							fn: true
						},
						{
							n: "api",
							d: 2
						},
						{
							n: "users.ts",
							d: 3,
							fn: true
						},
						{
							n: "posts",
							d: 3
						},
						{
							n: "[id].ts",
							d: 4,
							fn: true
						},
						{
							n: "[...catch].ts",
							d: 3,
							fn: true
						}
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "routing",
				title: "Routing",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/dashboard/page.tsx",
						lang: "js",
						code: `export default function Dashboard() {
  const [count, setCount] = useState(0)
  return <h1>Dashboard</h1>
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/blog/[slug]/page.tsx",
						lang: "js",
						code: `export default function Post() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/docs/[...path]/page.tsx",
						lang: "js",
						code: `export default function Docs() {
  // Matches /docs/anything/nested/here
  return <h1>Docs</h1>
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Priority: static → dynamic ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ":param" }),
						" → required ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "*" }),
						" → optional ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "**" }),
						" last. Extension:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { children: [
							".tsx ",
							">",
							" .jsx ",
							">",
							" .ts ",
							">",
							" .js ",
							">",
							" .mdx ",
							">",
							" .md"
						] })
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "route-groups",
				title: "Route Groups",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 320,
					rows: [
						{ n: "app" },
						{
							n: "(marketing)",
							d: 1
						},
						{
							n: "layout.tsx",
							d: 2,
							fn: true
						},
						{
							n: "about",
							d: 2
						},
						{
							n: "page.tsx",
							d: 3,
							fn: true
						},
						{
							n: "(app)",
							d: 1
						},
						{
							n: "layout.tsx",
							d: 2,
							fn: true
						},
						{
							n: "settings",
							d: 2
						},
						{
							n: "page.tsx",
							d: 3,
							fn: true
						}
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Group names ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/^[a-zA-Z0-9_-]+$/" }),
					". Folders using interception syntax ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(.) (..) (...)" }),
					" ",
					"are NOT treated as groups."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "parallel-routes",
				title: "Parallel Routes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Folder prefixed with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@" }),
						" defines slot: named subtree resolved independently and does not add URL segment. Slot name ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/^[a-zA-Z][a-zA-Z0-9_-]*$/" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
						width: 320,
						rows: [
							{ n: "app" },
							{
								n: "layout.tsx",
								d: 1,
								fn: true
							},
							{
								n: "page.tsx",
								d: 1,
								fn: true
							},
							{
								n: "@sidebar",
								d: 1
							},
							{
								n: "default.tsx",
								d: 2,
								fn: true
							},
							{
								n: "page.tsx",
								d: 2,
								fn: true
							},
							{
								n: "settings",
								d: 2
							},
							{
								n: "page.tsx",
								d: 3,
								fn: true
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Concept", "Behavior"],
						rows: [
							["Slot scanning", "Dynamic, catch-alls, nested layouts, templates all work - tagged with slotName"],
							["Fallback", "Nearest default.tsx (nearest-wins). No default → built-in No Content"],
							["Rendering", "Own SlotBoundary block, not injected as named prop into layouts (Next.js difference)"],
							["Status", "Experimental - verify against your layout, composition evolving"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/@sidebar/default.tsx",
						lang: "js",
						code: `export default function SidebarDefault() {
  return <p>Nothing to show here for this page.</p>
}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "intercepting-routes",
				title: "Intercepting Routes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Folder prefixed with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(.) (..) (...)" }),
						" intercepts navigation to nearby route - same as Next.js for photo-in-modal."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Prefix", "Intercepts"],
						rows: [
							["(.)name", "Sibling of current segment (same level)"],
							["(..)name", "One level up"],
							["(...)name", "Root of app"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
						width: 340,
						rows: [
							{ n: "app" },
							{
								n: "feed",
								d: 1
							},
							{
								n: "page.tsx",
								d: 2,
								fn: true
							},
							{
								n: "photo",
								d: 2
							},
							{
								n: "[id]",
								d: 3
							},
							{
								n: "page.tsx",
								d: 4,
								fn: true
							},
							{
								n: "photo",
								d: 1
							},
							{
								n: "[id]",
								d: 2
							},
							{
								n: "page.tsx",
								d: 3,
								fn: true
							},
							{
								n: "(.)view",
								d: 3
							},
							{
								n: "page.tsx",
								d: 4,
								fn: true
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Intercepting folder itself does not add URL segment; segment after it does. Only default export inside treated as route. Conflicts compared only at same intercept level." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "layouts",
				title: "Layouts",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/layout.tsx",
						lang: "js",
						code: `export const metadata = {
  title: 'My App',
  description: 'Built with bini-router',
}

export default function RootLayout() {
  return <Outlet />
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/dashboard/layout.tsx",
						lang: "js",
						code: `export const metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({ params }) {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main><Outlet /></main>
    </div>
  )
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Layouts containing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<html>" }),
						" treated as shell and excluded. Circular chains detected. Eagerly bundled except root slot/boundary dependents."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "templates",
				title: "Templates",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/dashboard/template.tsx",
					lang: "js",
					code: `export default function DashboardTemplate({ children }) {
  return <section className="page-transition">{children}</section>
}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Templates render inside layout chain, directly around page. Receive ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
					" not",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "params" }),
					". Nearest-wins."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "boundaries",
				title: "Loading, Not Found, Error, Default Boundaries",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Nearest-wins. Subfolder shadows ancestor. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "default.tsx" }),
						" only inside ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/dashboard/loading.tsx",
						lang: "js",
						code: `export default function DashboardLoading() {
  return <p>Loading dashboard...</p>
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/blog/not-found.tsx",
						lang: "js",
						code: `export default function NotFound() {
  return (
    <div>
      <h1>Post not found</h1>
      <Link to="/blog">Back to blog</Link>
    </div>
  )
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/dashboard/error.tsx",
						lang: "js",
						code: `export default function DashboardError({ error, reset }) {
  return (
    <div>
      <h2>Something broke</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/@sidebar/default.tsx",
						lang: "js",
						code: `export default function SidebarDefault() {
  return <p>Nothing to show here.</p>
}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "mdx",
				title: "MDX and Markdown",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "about.mdx",
					lang: "js",
					code: `# About us

This is **markdown**, rendered as JSX.

<button className="rounded bg-cyan-500 px-4 py-2 text-white">
  Click me
</button>`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					lang: "js",
					code: `biniroute({
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "metadata",
				title: "Metadata",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/layout.tsx",
					lang: "js",
					code: `export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
  description: 'Built with bini-router',
  openGraph: {
    title: 'Dashboard',
    images: [{ url: '/og.png' }],
  },
}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Root metadata injected into ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.html" }),
					" at build. Others update",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "document.title" }),
					" via TitleSetter. Stripped from client bundle. Title template:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Dashboard" }),
					" → ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Dashboard | My App" }),
					"."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "document-export",
				title: "Document Export",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Root layout can export ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "document" }),
						" object to customize HTML shell. Enabled by default, disable with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "document: false" }),
						". Head fragment parsed into typed tree (element/text/raw nodes) - no HTML injection surface even for handwritten JSX."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/layout.tsx",
						lang: "js",
						code: `export const document = {
  html: { lang: 'en', class: 'dark' },
  body: { class: 'antialiased' },
  head: (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <script async src="https://example.com/analytics.js"><\/script>
    </>
  ),
}

export default function RootLayout() {
  return <Outlet />
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Key", "Behavior"],
						rows: [
							["html", "Attributes merged onto <html>"],
							["body", "Attributes merged onto <body>"],
							["head", "JSX → static typed structure, appended before </head>"]
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "auto-imports",
				title: "Auto-imports",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["From", "Symbols"],
					rows: [
						["react", "useState, useEffect, useRef, useMemo, useCallback, useContext, createContext, useReducer, useId, useTransition, useDeferredValue"],
						["react-router-dom", "Link, NavLink, useNavigate, useParams, useLocation, useSearchParams, Outlet"],
						["bini-env", "getEnv, requireEnv"]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/profile/page.tsx",
					lang: "js",
					code: `export default function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  return <div><Link to="/">Home</Link><h1>Profile {id}</h1></div>
}`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "env",
				title: "Environment Variables",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `BINI_FIREBASE_API_KEY=your_key
SMTP_USER=user@smtp.example.com
SMTP_PASS=your_password`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/api/email.ts",
					lang: "js",
					code: `const SMTP_USER = requireEnv('SMTP_USER')  // throws if missing
const DEBUG = getEnv('DEBUG_MODE')         // undefined if missing`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "api-routes",
				title: "API Routes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["File", "Route"],
						rows: [
							["api/users.ts", "/api/users"],
							["api/posts/index.ts", "/api/posts"],
							["api/posts/[id].ts", "/api/posts/:id"],
							["api/[...catch].ts", "/api/*"],
							["api/(internal)/health.ts", "/api/health"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/hello.ts",
						lang: "js",
						code: `export default function handler(req) {
  return Response.json({ message: 'hello', method: req.method })
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/posts/[id].ts (params)",
						lang: "js",
						code: `export default function handler(req) {
  const params = JSON.parse(req.headers.get('x-bini-params') ?? '{}')
  return Response.json({ id: params.id })
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/api/hello.ts (Hono)",
						lang: "js",
						code: `import { Hono } from 'hono'
const app = new Hono()
app.all('/hello', (c) => c.json({ message: 'Hello!', method: c.req.method }))
export default app`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Write routes without ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api" }),
						" prefix - stripped before handler. Body capped 1MB (413),",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bodySizeLimit" }),
						" to adjust. CORS disabled by default - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cors: true" }),
						". Host header validated, capped cache 500 entries."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "config",
				title: "Configuration Reference",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					lang: "js",
					code: `biniroute({
  appDir: 'src/app',
  apiDir: 'src/app/api',
  autoImportDir: 'src',
  cors: false,
  strictMode: true,
  bodySizeLimit: 1024 * 1024,
  document: true,
  mdx: {},
})`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Option",
						"Type",
						"Default",
						"Description"
					],
					rows: [
						[
							"appDir",
							"string",
							"src/app",
							"Dir containing file-based routes"
						],
						[
							"apiDir",
							"string",
							"src/app/api",
							"Dir containing API routes"
						],
						[
							"autoImportDir",
							"string",
							"src",
							"Dir where auto-imports injected"
						],
						[
							"cors",
							"boolean | object",
							"false",
							"CORS handling for dev/preview API"
						],
						[
							"strictMode",
							"boolean",
							"true",
							"Fail on route conflicts"
						],
						[
							"bodySizeLimit",
							"number",
							"1048576",
							"Max API body size bytes"
						],
						[
							"document",
							"boolean",
							"true",
							"Process document export - typed tree, no HTML injection"
						],
						[
							"base",
							"string",
							"/",
							"Vite base option - router respects vite base, no separate basePath option"
						],
						[
							"mdx",
							"object",
							"{}",
							"Options passed to @mdx-js/rollup"
						]
					]
				})]
			})
		]
	});
}
//#endregion
export { BiniRouterPage as default };
