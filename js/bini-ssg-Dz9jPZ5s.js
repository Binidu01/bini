import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { d as OutputBlock, f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual } from "./DocVisuals-BzN7mWOU.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-ssg.tsx
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
		id: "render",
		label: "Implementing render()"
	},
	{
		id: "crawling",
		label: "Crawling and Shells"
	},
	{
		id: "metadata",
		label: "Metadata and CSS"
	},
	{
		id: "options",
		label: "Options"
	},
	{
		id: "output",
		label: "Output"
	},
	{
		id: "hosting",
		label: "Hosting"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "troubleshooting",
		label: "Troubleshooting"
	}
];
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-ssg/page.tsx";
var H3_CLS = "mb-3 mt-8 text-base font-semibold text-neutral-900 dark:text-neutral-200";
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var SSG_OUTPUT_TEXT = `STEP Pre-rendering routes
  ok    /             -> dist/index.html
  ok    /about        -> dist/about/index.html
  ok    /blog         -> dist/blog/index.html
  ok    /blog/hello   -> dist/blog/hello/index.html

SUCCESS Pre-rendered 4 routes`;
function SsgOutput() {
	const ok = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-emerald-600 dark:text-emerald-400",
		children: "ok"
	});
	const path = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-neutral-800 dark:text-neutral-200",
		children: p
	});
	const out = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-neutral-500",
		children: p
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OutputBlock, {
		code: SSG_OUTPUT_TEXT,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-cyan-700 dark:text-cyan-400",
				children: "STEP"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-700 dark:text-neutral-300",
				children: "Pre-rendering routes"
			}),
			"\n",
			"  ",
			ok,
			"    ",
			path("/"),
			"             ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "->"
			}),
			" ",
			out("dist/index.html"),
			"\n",
			"  ",
			ok,
			"    ",
			path("/about"),
			"        ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "->"
			}),
			" ",
			out("dist/about/index.html"),
			"\n",
			"  ",
			ok,
			"    ",
			path("/blog"),
			"         ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "->"
			}),
			" ",
			out("dist/blog/index.html"),
			"\n",
			"  ",
			ok,
			"    ",
			path("/blog/hello"),
			"   ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-neutral-500",
				children: "->"
			}),
			" ",
			out("dist/blog/hello/index.html"),
			"\n",
			"\n",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-emerald-600 dark:text-emerald-400",
				children: "SUCCESS"
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-neutral-700 dark:text-neutral-300",
				children: [
					"Pre-rendered ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-bold text-neutral-900 dark:text-white",
						children: "4"
					}),
					" ",
					"routes"
				]
			})
		]
	});
}
function BiniSsgPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "bini-ssg",
		badge: "Official",
		description: "Static site generation for Bini.js - pre-renders your routes to HTML during vite build.",
		url: "https://bini.dev/plugins/bini-ssg",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins/bini-overlay",
			title: "bini-overlay"
		},
		next: {
			to: "/plugins/bini-deploy",
			title: "bini-deploy"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" pre-renders your routes to HTML during ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
						". Route discovery, link crawling, metadata injection, and shell fallbacks ship in a single Vite build plugin - no dev-server changes, no separate CLI."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Build-only."
							}),
							" Runs at ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "apply: 'build'" }),
							"; never touches ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite dev" }),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Automatic discovery."
						}), " Static routes come from bini-router's route manifest."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Link crawling."
							}),
							" Internal ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<a href>" }),
							" links in rendered HTML are followed up to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "crawlDepth" }),
							", so dynamic URLs get fully pre-rendered."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Shell fallback."
						}), " Unmatched dynamic patterns still get a client-rendered shell page."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Per-route metadata + CSS."
						}), " Title, description, Open Graph, Twitter, icons, and route-scoped stylesheets are injected into each page."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Resilient."
							}),
							" If ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
							" throws, that route falls back to a shell and the build continues."
						] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" does not supply a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" implementation. You export one from",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/main.*" }),
						" - see",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#render",
							className: "underline",
							children: "Implementing render()"
						}),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "installation",
				title: "Installation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install --save-dev bini-ssg tsx`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add -D bini-ssg tsx`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add -D bini-ssg tsx`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add -D bini-ssg tsx`
					}
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-router" }),
					" must already be installed and configured - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
					" imports it at build time to discover routes and read per-route metadata/CSS."
				] })]
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
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'
import { biniEnv } from 'bini-env'
import { biniSSG } from 'bini-ssg'

export default defineConfig({
  plugins: [react(), biniEnv(), ...biniroute(), biniSSG()],
})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "2. Export render() from your entry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"See",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#render",
							className: "underline",
							children: "Implementing render()"
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "3. Build"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
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
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SsgOutput, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "render",
				title: "Implementing render()",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" imports ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { children: ["src/main.", "{tsx,jsx,ts,js}"] }),
						" in Node and calls its",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render" }),
						" export once per route:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/main.tsx",
						lang: "js",
						code: `export function render(url: string): Promise<string> | string`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "url" }),
						" is the route being pre-rendered. The return value must be an HTML string - it gets inserted into ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<div id=\"root\">…</div>" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "A typical implementation with React Router's StaticRouter:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/main.tsx",
						lang: "js",
						code: `import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'

declare global {
  interface Window { __BINI_SHELL__?: boolean }
}

// Client mount (browser only)
if (typeof document !== 'undefined') {
  const container = document.getElementById('root')!

  if (window.__BINI_SHELL__ || !container.hasChildNodes()) {
    createRoot(container).render(<App />)   // shell or empty → client render
  } else {
    hydrateRoot(container, <App />)         // pre-rendered → hydrate
  }
}

// SSG render (Node only, called by bini-ssg)
export async function render(url: string): Promise<string> {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"Your entry runs in two environments - browser and Node via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tsx" }),
						". Guard anything that touches ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "window" }),
						"/",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "document" }),
						" at module scope."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Client entry and hydration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }), " writes two kinds of pages, and your client entry must treat them differently:"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Page type",
							"#root contents",
							"Client should"
						],
						rows: [[
							"Pre-rendered",
							"Full server-rendered HTML",
							"hydrateRoot(...)"
						], [
							"Shell",
							"Empty",
							"createRoot(...).render(...)"
						]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Shell pages get this marker injected into ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<head>" }),
						":"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "index.html",
						lang: "html",
						code: `<script>window.__BINI_SHELL__=true;<\/script>`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Without it, React would try to hydrate an empty ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "#root" }),
						" and throw hydration error #418."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Keep render() pure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Routes render sequentially in the same Node process by default. Module-scope state persists between routes, so the output of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" should be a pure function of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "url" }),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "crawling",
				title: "Crawling and Shells",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Every page's rendered HTML is scanned for internal ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<a href>" }),
						" links. New URLs are queued and rendered, up to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "crawlDepth" }),
						" levels from the seed routes. So a",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog" }),
						" page that links to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/hello-world" }),
						" gets that URL pre-rendered as a full page."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"External links, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "#anchors" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "mailto:" }),
						", and file references by extension are ignored. Set ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "crawlDepth: 0" }),
						" to disable crawling."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Shell fallback"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Any dynamic pattern that no crawled link matched still gets a shell page - your built",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.html" }),
						" with the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "__BINI_SHELL__" }),
						" marker. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" is not called for shells; the client app takes over on load."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
						width: 340,
						rows: [
							{ n: "blog" },
							{
								n: ":slug",
								d: 1
							},
							{
								n: "[slug]",
								d: 1,
								dot: true
							},
							{
								n: "index.html",
								d: 2
							},
							{ n: "docs" },
							{
								n: "[...slug]",
								d: 1,
								dot: true
							},
							{
								n: "index.html",
								d: 2
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"If at least one crawled URL matched a pattern (e.g. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/hello-world" }),
						" for",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						"), no shell is written for that pattern."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "What crawling can't see"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Links that only appear after client-side data fetching." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dynamic URLs that no rendered page links to. Link to them from a statically rendered page to get them pre-rendered." })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "metadata",
				title: "Metadata and CSS",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Once a page is rendered, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" asks bini-router for that route's metadata and CSS, and applies both before writing the file. Runs for crawled pages and shells alike. Best-effort - a failure here never fails the build."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }), " only consumes metadata; you author it in your route/layout files against bini-router's metadata API."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/app/blog/[slug]/route.tsx",
						lang: "js",
						code: `export const metadata = {
  title: 'How bini-ssg pre-renders routes',
  meta: {
    description: 'A look at link crawling, shells, and metadata injection.',
    robots: 'index, follow',
    canonical: 'https://example.com/blog/how-bini-ssg-works',
    openGraph: {
      title: 'How bini-ssg pre-renders routes',
      type: 'article',
      image: 'https://example.com/og.png',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How bini-ssg pre-renders routes',
    },
  },
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Injected tags include ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<title>" }),
						", description, robots, canonical, manifest, icons, Open Graph, and Twitter card. Existing tags with the same name/property/rel are updated in place."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"For dynamic routes, metadata is keyed by the route ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "pattern" }),
						", not by each resolved URL - every ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						" URL gets the same metadata. For per-post titles, resolve them inside ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" and write them into the HTML you return."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Route-scoped CSS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"CSS modules imported by a specific route are resolved to their hashed build output and injected as ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<link rel=\"stylesheet\">" }),
						" tags on that route's page, deduplicated across shared imports."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "options",
				title: "Options",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "vite.config.ts",
						lang: "js",
						code: `biniSSG({
  appDir      : 'src/app',
  outputDir   : undefined,
  includeRoot : true,
  fallback    : false,
  crawlDepth  : 3,
  concurrency : 1,
  failOnError : true,
  quiet       : false,
  minify      : true,
})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Option",
							"Default",
							"Description"
						],
						rows: [
							[
								"appDir",
								"'src/app'",
								"Routes directory passed to bini-router."
							],
							[
								"outputDir",
								"build.outDir",
								"Where pre-rendered HTML is written."
							],
							[
								"includeRoot",
								"true",
								"Seed / even if bini-router didn't report it."
							],
							[
								"fallback",
								"false",
								"Also render /404 and write <outDir>/404.html for static-404 hosts."
							],
							[
								"crawlDepth",
								"3",
								"Max link-following depth. 0 disables crawling."
							],
							[
								"concurrency",
								"1",
								"Routes rendered in parallel. Raise only if render() has no shared module state."
							],
							[
								"failOnError",
								"true",
								"Fail the build on discovery, module-load, or write errors."
							],
							[
								"quiet",
								"false",
								"Suppress all output."
							],
							[
								"minify",
								"true",
								"Minify each written page with a hydration-safe html-minifier-terser config."
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						"A ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" call that throws is not a build failure - that route falls back to a shell and the build continues."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "output",
				title: "Output",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
						width: 320,
						rows: [
							{
								n: "dist",
								dot: true
							},
							{
								n: "index.html",
								d: 1
							},
							{
								n: "about",
								d: 1
							},
							{
								n: "index.html",
								d: 2
							},
							{
								n: "blog",
								d: 1
							},
							{
								n: "index.html",
								d: 2
							},
							{
								n: "hello-world",
								d: 2
							},
							{
								n: "index.html",
								d: 3
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
								d: 3
							},
							{
								n: "assets",
								d: 1
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "index.html" }),
							" - pre-rendered ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "about/index.html" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog/index.html" }),
							" - static routes."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog/hello-world/index.html" }), " - crawled dynamic URL, fully pre-rendered."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "docs/[...slug]/index.html" }),
							" - shell, only when no crawled URL matched",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/*" }),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "assets/" }), " - normal Vite output, unchanged."] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Add ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "404.html" }),
						" at the root when ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "fallback: true" }),
						". Routes are deduplicated before rendering."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "hosting",
				title: "Hosting",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Static hosts serve ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "about/index.html" }),
						" for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" }),
						" automatically, so pre-rendered routes work with no config."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Shell pages live in literal ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[param]" }),
						" directories. Hosts won't map",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/some-post" }),
						" onto that path - add a rewrite or SPA-fallback rule for those patterns."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "fallback: true" }),
						" for hosts that look for a top-level ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "404.html" }),
						" (Netlify, GitHub Pages)."
					] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "requirements",
				title: "Requirements",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Dependency",
						"Version",
						"Notes"
					],
					rows: [
						[
							"Node.js",
							">= 18",
							"18.19+ / 20.6+ recommended"
						],
						[
							"Vite",
							"^8.0.0",
							"Peer"
						],
						[
							"bini-router",
							">= 2.0.0",
							"Required"
						],
						[
							"react, react-dom",
							">= 18",
							"Peer"
						],
						[
							"react-router-dom",
							">= 6",
							"Peer"
						],
						[
							"tsx",
							"^4.0.0",
							"Required - loads TS/JSX in Node"
						]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "node-html-parser" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "p-limit" }),
					", and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "html-minifier-terser" }),
					" are installed automatically."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "troubleshooting",
				title: "Troubleshooting",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Failed to load bini-router manifest"
						}),
						" - bini-router isn't installed, or ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "appDir" }),
						" points at the wrong directory."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "File … must export a render(url) function"
						}),
						" -",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/main.*" }),
						" loaded but has no ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render" }),
						" export."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Failed to load src/main.tsx"
						}),
						" - an import failed under Node. Confirm ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tsx" }),
						" is installed, and check module-scope code doesn't rely on browser globals or ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "import.meta.env" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Hydration error #418"
						}),
						" - the page is a shell, but the client called ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hydrateRoot" }),
						". Check ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "window.__BINI_SHELL__" }),
						" before choosing between ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "createRoot" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hydrateRoot" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "A route rendered as a shell unexpectedly"
						}),
						" -",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render()" }),
						" threw for that URL. Call ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "render('/that-route')" }),
						" directly to see the error."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "A dynamic URL wasn't pre-rendered"
					}), " - no rendered page links to it. Link to it from a static page, or accept the shell."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Metadata or route-scoped CSS missing"
					}), " - injection is best-effort; bini-router may have thrown while resolving it for that route."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Build stops early"
						}),
						" - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
						" calls",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "process.exit(0)" }),
						" after a successful run. Other plugins' ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "closeBundle" }),
						" hooks after it won't run."
					] })
				] })
			})
		]
	});
}
//#endregion
export { BiniSsgPage as default };
