import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, c as LINE, i as FolderVisual, l as RouteVisual, n as CARD, p as File, s as ICON, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
import { t as Globe } from "./globe-DZx7kE3i.js";
//#region src/app/docs/static-export.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "how-it-works",
		label: "How It Works"
	},
	{
		id: "render-function",
		label: "Your render() Function"
	},
	{
		id: "build-command",
		label: "Build Command"
	},
	{
		id: "output-structure",
		label: "Output Structure"
	},
	{
		id: "shell-pages",
		label: "Crawling & Shell Fallback"
	},
	{
		id: "404-handling",
		label: "404 Handling"
	},
	{
		id: "static-hosts",
		label: "Works on Any Static Host"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
var BUILD_TABS = [
	{
		id: "npm",
		label: "npm",
		command: "$ npm run build"
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: "$ pnpm build"
	},
	{
		id: "yarn",
		label: "yarn",
		command: "$ yarn build"
	},
	{
		id: "bun",
		label: "bun",
		command: "$ bun run build"
	}
];
var Ok = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-emerald-600 dark:text-emerald-400",
	children
});
var CRAWLED = [{
	href: "/blog/my-first-post",
	out: "dist/blog/my-first-post/index.html"
}, {
	href: "/blog/hello-world",
	out: "dist/blog/hello-world/index.html"
}];
/** A rendered page's links on the left, the pages bini-ssg discovers from them on the right. */
function CrawlVisual() {
	const head = `flex h-9 items-center gap-2 border-b bg-neutral-50 px-3 text-[11px] font-medium text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400 ${LINE}`;
	const row = `flex h-12 items-center border-b px-3 last:border-0 ${LINE}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${CARD} w-72 shrink-0`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: head,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(File, {
						className: ICON,
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "dist/blog/index.html" })]
				}), CRAWLED.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: row,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-[12px] text-neutral-700 dark:text-neutral-300",
						children: `<a href="${c.href}">`
					})
				}, c.href))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-px",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-9" }), CRAWLED.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				}, c.href))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${CARD} w-80 shrink-0`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: head,
					children: "Discovered and pre-rendered"
				}), CRAWLED.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${row} flex-col items-start justify-center gap-0.5`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 text-[12px] text-neutral-800 dark:text-neutral-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
							className: ICON,
							strokeWidth: 1.5
						}), c.href]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-[11px] text-neutral-500",
						children: c.out
					})]
				}, c.href))]
			})
		]
	}) });
}
function Content() {
	const x = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" pre-renders every route - static ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "and" }),
						" dynamic - to static HTML as part of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						". It starts from your static routes, then",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-black dark:text-white",
							children: "crawls every rendered page for internal links"
						}),
						" ",
						"and pre-renders those too. A blog post at ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/my-first-post" }),
						" linked from",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog" }),
						" is fully pre-rendered - no extra config, no ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getStaticPaths" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-6",
					children: "There is no separate export command or export mode. The output is real server-rendered markup, not a client-only shell, ready for GitHub Pages, S3, Firebase, Surge, and any other static host."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Web target only." }),
					" Static export applies to the Node.js/web target. Desktop and mobile builds (Windows, macOS, Linux, Android, iOS) do not use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
					" - they package the same routes into a native binary instead."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "how-it-works",
			title: "How It Works",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" is a Vite build plugin that runs during ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
						". It:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 300,
					rows: [
						{ n: "src" },
						{
							n: "app",
							d: 1
						},
						{
							n: `page.${x}`,
							d: 2,
							url: "/"
						},
						{
							n: "blog",
							d: 2
						},
						{
							n: `page.${x}`,
							d: 3,
							url: "/blog"
						},
						{
							n: "[slug]",
							d: 3
						},
						{
							n: `page.${x}`,
							d: 4,
							dot: true,
							url: "/blog/:slug"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Static routes (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog" }),
						") come straight from the route list. Dynamic routes like the highlighted ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						" are discovered by crawling."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-black dark:text-white",
								children: "Reads your route list"
							}),
							" ",
							"from ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-router" }),
							"'s ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "generateRouteManifest()" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "font-medium text-black dark:text-white",
								children: [
									"Calls your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
									" function"
								]
							}),
							" ",
							"for every static route"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-black dark:text-white",
								children: "Crawls"
							}),
							" each rendered HTML for internal ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<a href>" }),
							" links and discovers dynamic routes (e.g.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/my-first-post" }),
							" linked from ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog" }),
							")"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-black dark:text-white",
								children: "Pre-renders"
							}),
							" every discovered dynamic route with your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
							" - full HTML, not a shell"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-black dark:text-white",
								children: "Falls back to shell pages"
							}),
							" ",
							"only for dynamic routes that were never linked (still valid - hydrated on client)"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "font-medium text-black dark:text-white",
								children: ["Writes one ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.html" })]
							}),
							" ",
							"per route into your output directory"
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Zero config crawling." }),
					" If a page links to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/getting-started" }),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/hello-world" }),
					", or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/users/123" }),
					", bini-ssg finds it and pre-renders it. You don't need ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getStaticPaths" }),
					" or a manifest."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "render-function",
			title: "Your render() Function",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" function is exported from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `src/main.${x}` }),
						" and called by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" for every static route:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/main.${x}`,
					tsCode: `import { createRoot } from 'react-dom/client'
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
					jsCode: `import { createRoot } from 'react-dom/client'
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4",
					children: [
						"This function uses React 19's ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "renderToPipeableStream" }),
						" under the hood with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "StaticRouter" }),
						" from React Router, producing real server-rendered HTML."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Already scaffolded:" }),
					" The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
					" function is already in your project. You only need to modify it if you need custom server rendering logic."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "build-command",
			title: "Build Command",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Command", "When to use"],
					rows: [[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }, "build"), "Pre-renders every route to static HTML - GitHub Pages, S3, Firebase, Surge, and any static host"], [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run start" }, "start"), "Serves the production build with API routes - Node.js hosts (Railway, Render, Fly.io, VPS)"]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						" type-checks (TypeScript projects) and then runs ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
						". The",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" plugin drives pre-rendering as part of that same build."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "output-structure",
			title: "Output Structure",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Each route becomes its own folder with an ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.html" }),
						". Highlighted files were found by crawling and pre-rendered; the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...slug]" }),
						" folders are shell fallbacks for dynamic routes that were never linked."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 320,
					rows: [
						{ n: "dist" },
						{
							n: "index.html",
							d: 1,
							url: "/"
						},
						{
							n: "about",
							d: 1
						},
						{
							n: "index.html",
							d: 2,
							url: "/about"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: "index.html",
							d: 2,
							url: "/blog"
						},
						{
							n: "my-first-post",
							d: 2
						},
						{
							n: "index.html",
							d: 3,
							dot: true,
							url: "/blog/my-first-post"
						},
						{
							n: "hello-world",
							d: 2
						},
						{
							n: "index.html",
							d: 3,
							dot: true,
							url: "/blog/hello-world"
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
							n: "getting-started",
							d: 2
						},
						{
							n: "index.html",
							d: 3,
							dot: true,
							url: "/docs/getting-started"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Dynamic routes that are ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "linked somewhere" }),
					" in your app are pre-rendered as real HTML. Only routes that were never discovered during crawling get the shell fallback."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "shell-pages",
			title: "Crawling & Shell Fallback",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"After pre-rendering static routes, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" parses each HTML file for internal links and crawls them:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrawlVisual, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"This repeats recursively - if ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/my-first-post" }),
						" links to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/users/123" }),
						", that page is also pre-rendered. Crawling respects your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "base" }),
						" path and skips external links, hashes, and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/api/*" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Only dynamic routes that were",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-medium text-black dark:text-white",
							children: "never discovered"
						}),
						" ",
						"during crawling get a shell page with a marker script:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					lang: "text",
					code: `<script>window.__BINI_SHELL__=true;<\/script>`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4",
					children: [
						"Your client entry checks this flag to decide between ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "createRoot" }),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hydrateRoot" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/main.${x}`,
					tsCode: `const root = document.getElementById('root')!

if (window.__BINI_SHELL__) {
  createRoot(root).render(<App />)
} else {
  hydrateRoot(root, <App />)
}`,
					jsCode: `const root = document.getElementById('root')

if (window.__BINI_SHELL__) {
  createRoot(root).render(<App />)
} else {
  hydrateRoot(root, <App />)
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Best of both worlds." }), " Linked dynamic routes are fully pre-rendered for SEO and instant loads. Unlinked ones still work via the shell fallback - no 404, hydrated on client. To guarantee pre-rendering, just make sure a page links to it."] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "404-handling",
			title: "404 Handling",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"You can enable ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "404.html" }),
						" generation with the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "fallback" }),
						" option:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [
						{ n: "src" },
						{
							n: "app",
							d: 1
						},
						{
							n: `not-found.${x}`,
							d: 2,
							dot: true
						},
						{ n: "dist" },
						{
							n: "404.html",
							d: 1,
							dot: true
						},
						{
							n: "index.html",
							d: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					code: `// vite.config.ts
import { defineConfig } from 'vite'
import { biniSSG } from 'bini-ssg'

export default defineConfig({
  plugins: [
    // ...other plugins
    biniSSG({
      fallback: true,  // Render '/404' as 404.html
    }),
  ],
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Situation", "What gets written to 404.html"],
					rows: [[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `src/app/not-found.${x}` }, "nf"), "Your custom not-found page is pre-rendered to HTML"], ["No custom not-found file", "Built-in 404 page is used"]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Default:" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "fallback" }),
					" is ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "false" }),
					". Enable it to generate",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "404.html" }),
					" for static hosts that support it."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "static-hosts",
			title: "Works on Any Fully Static Host",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Host",
					"Static routes",
					"Dynamic routes"
				],
				rows: [
					[
						"GitHub Pages",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ pre-rendered" }, "a1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ crawled + pre-rendered, shell fallback" }, "a2")
					],
					[
						"AWS S3 + CloudFront",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ pre-rendered" }, "b1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ crawled + pre-rendered, shell fallback" }, "b2")
					],
					[
						"Firebase Hosting",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ pre-rendered" }, "c1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ crawled + pre-rendered, shell fallback" }, "c2")
					],
					[
						"Surge.sh",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ pre-rendered" }, "d1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ok, { children: "✓ crawled + pre-rendered, shell fallback" }, "d2")
					]
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "A full setup for deploying to GitHub Pages with true SSG:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'
import { biniEnv } from 'bini-env'
import { biniSSG } from 'bini-ssg'

export default defineConfig({
  base: '/my-app/',  // GitHub Pages subpath
  plugins: [
    react(),
    biniEnv(),
    ...biniroute(),
    biniSSG({
      fallback: true,        // Generate 404.html
    }),
  ],
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4",
					children: [
						"Run ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						", then push the contents of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						" to your GitHub Pages branch (or upload them through the GitHub Pages UI)."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS })
			]
		})
	] });
}
function StaticExportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Static Export",
		description: "Pre-render your Bini.js app to static HTML with bini-ssg, ready for any static host.",
		url: "https://bini.js.org/docs/static-export",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/static-export.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/production-server",
			title: "Production Server"
		},
		next: {
			to: "/docs/hosting",
			title: "Hosting Providers"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { StaticExportPage as default };
