import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, h as Table, i as CodeBlock, m as Section, n as C, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { t as PluginPage } from "./PluginPage-wgU-uPj4.js";
//#region src/app/plugins/bini-overlay.tsx
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
		id: "options",
		label: "Options"
	},
	{
		id: "badge",
		label: "The Badge"
	},
	{
		id: "error-panel",
		label: "The Error Panel"
	},
	{
		id: "reporting-errors",
		label: "Reporting Errors"
	},
	{
		id: "dev-endpoints",
		label: "Dev Server Endpoints"
	},
	{
		id: "security",
		label: "Security"
	},
	{
		id: "architecture",
		label: "Architecture"
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
var EDIT_URL = "https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-overlay/page.tsx";
var H3_CLS = "mb-3 mt-8 text-base font-semibold text-neutral-900 dark:text-neutral-200";
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
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
function BiniOverlayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginPage, {
		title: "bini-overlay",
		badge: "Official",
		description: "Development overlay for Bini.js: an animated status badge, route inspector, and full-screen error panel with source-mapped stack traces.",
		url: "https://bini.dev/plugins/bini-overlay",
		editUrl: EDIT_URL,
		toc: TOC_ITEMS,
		prev: {
			to: "/plugins/bini-server",
			title: "bini-server"
		},
		next: {
			to: "/plugins/bini-ssg",
			title: "bini-ssg"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "overview",
				title: "Overview",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-overlay" }),
						" is a Vite plugin bundle that replaces Vite's default",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite-error-overlay" }),
						" with a polished development experience:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A floating badge that animates during HMR updates, shows the current route type, and opens a preferences menu." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A red issue pill that replaces the badge when something breaks." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A full-screen error panel with a syntax-highlighted code frame, source-mapped call stack, and one-click \"open in editor\"." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Everything is registered with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "apply: 'serve'" }),
						". Nothing is injected into production builds."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "features",
				title: "Features",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Status badge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Animated logo",
								children: "SVG stroke-drawing animation on page load and every HMR update."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Shadow DOM",
								children: "Renders inside a shadow root, so it never collides with your app's CSS."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Issue pill",
								children: [
									"Morphs into a red ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "1 Issue" }),
									" / ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "N Issues" }),
									" pill when errors are present."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Live route type",
								children: "Static, Dynamic, or Not Found - updates on client-side navigation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Route Info inspector",
								children: "Opens a matched-route tree, including layouts and the page file."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Persistent preferences",
								children: "Theme, corner position, size, and a recordable visibility shortcut."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Error panel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Captures everything",
								children: "Runtime errors, unhandled rejections, Vite build/transform errors, and errors reported by your error boundaries."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Labelled by type",
								children: "Runtime Error, Parse Error, Build Error, Type Error, Unhandled Rejection."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Shiki code frame",
								children: "Five lines of context read from disk, highlighted with Shiki (dark-plus)."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Source-mapped stack",
								children: "Frames resolve back to your original source when a source map is available."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureBlurb, {
								title: "Open in editor",
								children: [
									"Click any frame to jump to the exact line in ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "code" }),
									", ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cursor" }),
									", ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "zed" }),
									", and friends."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Smart dedupe",
								children: "Duplicate errors merge, compile errors sort first, cascade errors hide while a real error exists."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Auto-clears on fix",
								children: "No manual refresh - HMR delivers a fix and the panel closes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureBlurb, {
								title: "Graceful fallback",
								children: "Plain unhighlighted text if Shiki can't load."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "installation",
				title: "Installation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install bini-overlay --save-dev`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add bini-overlay -D`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add bini-overlay -D`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add -D bini-overlay`
					}
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { children: [
						"vite ",
						">=",
						" 8"
					] }),
					" is a required peer dependency. To enable route type detection and the Route Info inspector, also install the optional peer dependency",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { children: [
						"bini-router ",
						">=",
						" 2.0.0"
					] }),
					" - Bini.js projects already include it."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "quick-start",
				title: "Quick Start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					lang: "js",
					code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniOverlay } from 'bini-overlay'

export default defineConfig({
  plugins: [react(), biniOverlay()],
})`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "options",
				title: "Options",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "bini-overlay options",
						lang: "js",
						code: `interface BiniOverlayOptions {
  /**
   * App directory scanned for routes. Used to resolve the current page's
   * route type and to power the Route Info inspector.
   * Must match the \`appDir\` you pass to \`biniroute()\` if customised.
   * @default 'src/app'
   */
  appDir?: string

  /**
   * Hide the loading badge and its menu while keeping the error overlay.
   * @default false
   */
  disableBadge?: boolean

  /**
   * Editor binary used by "open in editor". When omitted, the first of
   * \`code\`, \`cursor\`, \`zed\`, \`subl\`, \`webstorm\` found on PATH is used.
   */
  editor?: string
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Example:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "vite.config.ts",
						lang: "js",
						code: `biniOverlay({
  appDir: 'src/app',
  editor: 'cursor',
})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"The Vite base config is picked up automatically for route matching, so no separate base-path option is needed. Code-frame highlighting always uses Shiki's",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dark-plus" }),
						" theme and is not configurable."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "badge",
				title: "The Badge",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "By default the badge sits in the bottom-left corner." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"State",
							"Appearance",
							"Behaviour"
						],
						rows: [
							[
								"Loading",
								"Logo draws itself with a stroke animation",
								"Runs on page load and on each HMR update"
							],
							[
								"Idle",
								"Filled gradient logo",
								"Default state when there are no errors"
							],
							[
								"Error",
								"Red pill showing 1 Issue / N Issues",
								"Click the count to open the error panel, or the logo to open the menu"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Menu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Click the badge to open the menu." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Item", "Description"],
						rows: [
							["Issues", "Shown only when errors exist. Reopens the error panel."],
							["Route", "Current route type: Static, Dynamic, or Not Found."],
							["Bundler", "Displays the active bundler (Rolldown)."],
							["Route Info", "Opens the route inspector (see below)."],
							["Preferences", "Opens the preferences popover."]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Route Info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Shows the matched route path as a tree, including the layout files and page file that render it. Dynamic (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ":param" }),
						") and catch-all (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "*" }),
						") segments are tagged with a chip. Unmatched URLs show a \"renders your 404 page\" message. Requires",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { children: [
							"bini-router ",
							">=",
							" 2.0.0"
						] }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Preferences"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Setting",
							"Options",
							"Default"
						],
						rows: [
							[
								"Theme",
								"System, Light, Dark",
								"System"
							],
							[
								"Position",
								"Bottom Left, Bottom Right, Top Left, Top Right",
								"Bottom Left"
							],
							[
								"Size",
								"Small, Medium, Large",
								"Medium"
							],
							[
								"Hide for this session",
								"Hides the badge until the tab is closed",
								"Off"
							],
							[
								"Shortcut",
								"Record any key combination to toggle visibility",
								"Alt+B"
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Preferences are stored in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "localStorage" }),
						" under ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-overlay:prefs" }),
						". The session-hide flag lives in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "sessionStorage" }),
						" and is cleared when the tab closes."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "error-panel",
				title: "The Error Panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "When an error occurs, the panel opens automatically." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Section", "Description"],
						rows: [
							["Header", "Error type, file:line chip, copy button, and close button"],
							["Message", "Cleaned error message, with the originating plugin shown for build errors"],
							["Code Frame", "Five lines of context read from disk, with the failing line marked by >>> and a red row highlight"],
							["Call Stack", "Application frames first, framework frames collapsed behind a \"N framework frames hidden\" toggle"],
							["Component Stack", "React component hierarchy, when provided by an error boundary"],
							["Navigation", "Prev/Next arrows and counter when multiple errors are queued"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Code frame example"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "src/components/Greeting.tsx",
						lang: "js",
						code: `    10: function Greeting() {
>>> 11:   const name = user.name
    12:   return <h1>Hello, {name}!</h1>
    13: }`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Error lifecycle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "Lifecycle",
						lang: "text",
						code: `1. Error occurs   -> badge becomes a red pill and the panel opens
2. Multiple errors -> navigate with prev/next; duplicates are merged
3. You fix it      -> HMR update arrives, resolved errors are cleared
4. All clear       -> panel closes and the badge returns to idle`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "HMR events"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Event", "Behaviour"],
						rows: [
							["vite:error", "Adds the error, shows the pill, opens the panel"],
							["vite:beforeUpdate", "Removes errors belonging to the updated modules and starts the loading animation"],
							["vite:afterUpdate", "Clears remaining errors, closes the panel, and returns the badge to idle"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Unrecoverable errors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "If the app has crashed so completely that nothing is rendered, or an error carries a component stack, the close button is hidden. The panel stays up until a successful HMR update recovers the page, so you never end up staring at a blank screen." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "reporting-errors",
				title: "Reporting Errors From Your App",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Errors thrown at runtime and unhandled rejections are captured automatically. To route errors from a React error boundary into the overlay, dispatch a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "__bini_error__" }),
						" ",
						"event:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "ErrorBoundary.tsx",
						lang: "js",
						code: `componentDidCatch(error: Error, info: React.ErrorInfo) {
  window.dispatchEvent(
    new CustomEvent('__bini_error__', {
      detail: {
        name: error.name,
        message: error.message,
        stack: error.stack,
        componentStack: info.componentStack,
        type: 'runtime',
      },
    }),
  )
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"The overlay dispatches a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "__bini_clear_errors__" }),
						" event on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "window" }),
						" after every successful HMR update, so a boundary can listen for it to reset itself:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						filename: "ErrorBoundary.tsx",
						lang: "js",
						code: `useEffect(() => {
  const reset = () => setHasError(false)
  window.addEventListener('__bini_clear_errors__', reset)
  return () => window.removeEventListener('__bini_clear_errors__', reset)
}, [])`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "detail fields"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Field",
							"Type",
							"Description"
						],
						rows: [
							[
								"message",
								"string",
								"Error message"
							],
							[
								"name",
								"string",
								"Error name (default Runtime Error)"
							],
							[
								"stack",
								"string",
								"Stack trace, source-mapped when possible"
							],
							[
								"componentStack",
								"string",
								"Optional React component stack"
							],
							[
								"file / line",
								"string / number",
								"Optional; inferred from the stack when omitted"
							],
							[
								"type",
								"string",
								"Defaults to runtime"
							]
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "dev-endpoints",
				title: "Dev Server Endpoints",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"The plugins register the following middleware on the Vite dev server. They exist only during ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite dev" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Endpoint",
							"Query",
							"Purpose"
						],
						rows: [
							[
								"/__bini_code_context",
								"file, line",
								"Returns the surrounding lines for a code frame. Files are cached by modification time (up to 64 entries)."
							],
							[
								"/__bini_sourcemap",
								"file, line, column",
								"Maps a transformed position back to the original source via the module graph."
							],
							[
								"/__bini_open_editor",
								"file, line",
								"Opens a file at a line in your editor."
							],
							[
								"/__bini_route_match",
								"path",
								"Returns static, dynamic, or not_found for a URL."
							],
							[
								"/__bini_route_info",
								"path",
								"Returns matched segments, layouts, and page file for the Route Info inspector."
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"The route manifest is built lazily from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "appDir" }),
						" and invalidated automatically when files under it are added, changed, or removed."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
						"Supported editors: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "code" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cursor" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "zed" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "subl" }),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "webstorm" }),
						". Pass the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "editor" }),
						" option to force a specific binary."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "security",
				title: "Security",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The overlay exposes file-reading and process-launching endpoints, so they are locked down:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Same-origin only."
						}),
						" Requests are checked via",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Sec-Fetch-Site" }),
						", falling back to an ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Origin" }),
						"/",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Host" }),
						" comparison. Cross-origin requests receive 403."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Project-root confinement."
					}), " Code-context and open-in-editor paths are resolved and rejected if they escape the current working directory."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Dev server only."
						}),
						" Every plugin uses",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "apply: 'serve'" }),
						"; none run in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
						"."
					] })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "architecture",
				title: "Architecture",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniOverlay()" }), " returns seven cooperating plugins:"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Plugin", "Role"],
					rows: [
						["bini-overlay:code-context", "Serves code frames from disk"],
						["bini-overlay:sourcemap", "Resolves source-mapped stack positions"],
						["bini-overlay:open-editor", "Launches your editor at a file and line"],
						["bini-overlay:routes", "Route matching and route info via bini-router"],
						["bini-overlay:vite-intercept", "Neutralises Vite's built-in vite-error-overlay element"],
						["bini-overlay:error", "Client-side error capture and the error panel"],
						["bini-overlay:loading", "Badge, menu, route info, and preferences"]
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "requirements",
				title: "Requirements",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200",
						children: "Version"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: ["Tool", "Version"],
						rows: [["Node.js", ">= 18.0.0"], ["Vite", ">= 8.0.0 (Rolldown-based)"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: H3_CLS,
						children: "Dependencies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"Package",
							"Type",
							"Purpose"
						],
						rows: [
							[
								"vite (>= 8.0.0)",
								"Peer, required",
								"Host build tool and dev server. Vite 7 and earlier are not supported."
							],
							[
								"bini-router (>= 2.0.0)",
								"Peer, optional",
								"Route type and Route Info in the badge menu. Without it, everything else still works."
							],
							[
								"@jridgewell/trace-mapping",
								"Dependency",
								"Resolves source-mapped stack frames (installed automatically)."
							]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Network access:" }),
						" syntax highlighting loads Shiki from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "esm.sh" }),
						", and the badge UI loads Inter and JetBrains Mono from Google Fonts. Offline, the overlay still works with plain text and system fonts."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "troubleshooting",
				title: "Troubleshooting",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "The overlay doesn't appear"
						}),
						" - confirm",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniOverlay()" }),
						" is in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "plugins" }),
						" and that you're running ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite dev" }),
						", not a production build."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Code frames have no colours"
						}),
						" - Shiki failed to load from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "esm.sh" }),
						". Check network access; the overlay falls back to plain text."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Route type / Route Info shows Not Found everywhere"
						}),
						" ",
						"- ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-router" }),
						" isn't installed, or ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "appDir" }),
						" doesn't match the value passed to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "biniroute()" }),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Stack frames point at transformed code"
					}), " - no source map is available for that file. Enable source maps in your Vite config."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Clicking a stack frame does nothing"
						}),
						" - no supported editor was found on PATH. Pass the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "editor" }),
						" option to force a binary."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "403 Forbidden from /__bini_* endpoints"
					}), " - the request came from a different origin. Open the app in a browser at the dev server's hostname rather than through a proxy."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "The badge is missing"
					}), " - it may be hidden for the session. Check the preferences, or clear the session-hide flag by closing the tab."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "The overlay stays open after a fix"
					}), " - wait for the HMR update to land. If it doesn't, the error may not belong to a module Vite can invalidate; reload the page."] })
				] })
			})
		]
	});
}
//#endregion
export { BiniOverlayPage as default };
