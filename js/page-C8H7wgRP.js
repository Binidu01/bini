import { g as siNpm, u as siGithub, w as ExternalLink } from "./Layout-BFQT2L9M.js";
import { b as Link, y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, l as H3, m as Section, t as BrandIcon } from "./DocBlocks-yIQx8cRX.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/page.tsx
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
		id: "core-flow",
		label: "Core flow"
	},
	{
		id: "packages",
		label: "All Packages"
	}
];
function FeatureBlurb({ title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mb-1.5",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-400",
			children: desc
		})]
	});
}
function PluginLinkCard({ name, description, href, npmUrl, githubRepo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col rounded-lg border border-neutral-200 bg-white transition-colors hover:border-black dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: href,
			className: "group block flex-1 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 text-[15px] font-semibold text-black underline-offset-4 group-hover:underline dark:text-white",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-400",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-3 inline-flex items-center gap-1 text-xs font-medium text-neutral-500 group-hover:text-black dark:group-hover:text-white",
					children: ["View docs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4 border-t border-neutral-200 px-5 py-3 dark:border-neutral-800",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: npmUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
						icon: siNpm,
						size: 12,
						className: "shrink-0 text-current"
					}),
					"npm",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `https://github.com/Binidu01/${githubRepo}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
						icon: siGithub,
						size: 12,
						className: "shrink-0 text-current"
					}),
					"GitHub",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
				]
			})]
		})]
	});
}
function PluginsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "Plugins",
		badge: "Ecosystem",
		description: "The complete Bini.js ecosystem.",
		url: "https://bini.js.org/plugins",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/page.tsx",
		toc: TOC_ITEMS,
		next: {
			to: "/plugins/create-bini-app",
			title: "create-bini-app"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The complete Bini.js ecosystem. Everything you need to build full-stack React apps for web, desktop, and mobile from one codebase. Start with the overview below, then dive into each package in its own page." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Bini.js provides out-of-the-box support for common patterns. Many cases where a plugin would be needed in other frameworks are already covered by official packages." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "features",
				title: "Features",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
							title: "Zero Config",
							desc: "Every official plugin is pre-configured in create-bini-app. No extra setup needed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
							title: "Vite Native",
							desc: "Built as Vite plugins. Fast HMR, instant builds, and compatible with the Vite ecosystem."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
							title: "One Codebase",
							desc: "Same plugins compile to web, Windows, macOS, Linux, Android, and iOS."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "core-flow",
				title: "Core flow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Bini.js aims to provide out-of-the-box support for common web development patterns. Before searching for a plugin, check the docs - many cases where a plugin would be needed in other projects are already covered by the official Bini.js packages below." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-black dark:text-white",
							children: "Core flow:"
						}), " create-bini-app scaffolds, bini-router handles routing, bini-env manages env, bini-native wires native, bini-server and bini-ssg ship to production. bini-deploy pushes it live."]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "packages",
				title: "All Packages",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "create-bini-app",
							description: "Scaffold a full Vite + React + Hono project with routing, Tauri builds, and deploy script.",
							href: "/plugins/create-bini-app",
							npmUrl: "https://www.npmjs.com/package/create-bini-app",
							githubRepo: "bini-cli"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-deploy",
							description: "Zero-config deployment - web, desktop, and mobile from one CLI.",
							href: "/plugins/bini-deploy",
							npmUrl: "https://www.npmjs.com/package/bini-deploy",
							githubRepo: "bini-deploy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-router",
							description: "File-based routing, layouts, loading/error/404 boundaries, MDX pages, and Hono API routes.",
							href: "/plugins/bini-router",
							npmUrl: "https://www.npmjs.com/package/bini-router",
							githubRepo: "bini-router"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-env",
							description: "Hono-native env system. Works on Node, Bun, Deno, Edge, and Workers.",
							href: "/plugins/bini-env",
							npmUrl: "https://www.npmjs.com/package/bini-env",
							githubRepo: "bini-env"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-native",
							description: "Automatic Tauri wiring. Detects web APIs and wires Rust plugins and manifests.",
							href: "/plugins/bini-native",
							npmUrl: "https://www.npmjs.com/package/bini-native",
							githubRepo: "bini-native"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-server",
							description: "Secure production server with ETag caching, SPA fallback, and graceful shutdown.",
							href: "/plugins/bini-server",
							npmUrl: "https://www.npmjs.com/package/bini-server",
							githubRepo: "bini-server"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-overlay",
							description: "Error overlay and loading badge. Animates on HMR, shows stack trace on error.",
							href: "/plugins/bini-overlay",
							npmUrl: "https://www.npmjs.com/package/bini-overlay",
							githubRepo: "bini-overlay"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginLinkCard, {
							name: "bini-ssg",
							description: "Pre-renders every route to static HTML at build time. No export command needed.",
							href: "/plugins/bini-ssg",
							npmUrl: "https://www.npmjs.com/package/bini-ssg",
							githubRepo: "bini-ssg"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { PluginsPage as default };
