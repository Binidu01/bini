import { _ as siReact } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, c as LINE, h as Atom, l as RouteVisual, n as CARD } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/error-boundaries.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "what-are-error-boundaries",
		label: "What are Error Boundaries?"
	},
	{
		id: "creating-error-boundary",
		label: "Creating an Error Boundary"
	},
	{
		id: "error-props",
		label: "Error Props"
	},
	{
		id: "nested-error-boundaries",
		label: "Nested Error Boundaries"
	},
	{
		id: "nearest-wins",
		label: "Nearest Wins Resolution"
	},
	{
		id: "error-with-layout",
		label: "Error with Layout"
	},
	{
		id: "built-in-fallback",
		label: "Built-in Fallback"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
function AppShell({ main }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-65 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-[#1a1a1a]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-neutral-200 px-3 py-2.5 dark:border-neutral-700",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 flex-1 rounded bg-neutral-300 dark:bg-neutral-600" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-14 shrink-0 flex-col gap-2 border-r border-neutral-200 p-2.5 dark:border-neutral-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-neutral-300 dark:bg-neutral-600" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2/3 rounded bg-neutral-300 dark:bg-neutral-600" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-1/2 rounded bg-neutral-300 dark:bg-neutral-600" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 p-2.5",
				children: main
			})]
		})]
	});
}
var tag = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-sky-700 dark:text-sky-300",
	children: s
});
var prop = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-violet-700 dark:text-violet-300",
	children: s
});
var dim = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-neutral-400 dark:text-neutral-500",
	children: s
});
function VisualHowItWorks({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `w-80 max-w-full ${CARD} shadow-sm`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center gap-1.5 border-b px-3 py-1.5 ${LINE}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							role: "img",
							viewBox: "0 0 24 24",
							width: 14,
							height: 14,
							fill: "currentColor",
							className: "shrink-0 text-[#61DAFB]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: siReact.path })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[11px] text-neutral-500",
							children: ["error.", ext]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-x-auto p-3 font-mono text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-purple-600 dark:text-[#C586C0]",
								children: "export default function "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-700 dark:text-[#DCDCAA]",
								children: "Error"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "({ "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-600 dark:text-[#9CDCFE]",
								children: "error"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: ", "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-orange-600 dark:text-[#CE9178]",
								children: "reset"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "}) {"
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-purple-600 dark:text-[#C586C0]",
								children: "  return "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "("
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "    <>"
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-500 dark:text-neutral-400",
								children: "      An error occurred: "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-600 dark:text-[#9CDCFE]",
								children: "{error.message}"
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal-600 dark:text-[#4EC9B0]",
								children: "      <button "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sky-600 dark:text-[#9CDCFE]",
								children: "onClick"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "="
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-orange-600 dark:text-[#CE9178]",
								children: "{() => reset()}"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal-600 dark:text-[#4EC9B0]",
								children: ">"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-600 dark:text-[#6A9955]",
								children: "Retry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal-600 dark:text-[#4EC9B0]",
								children: "</button>"
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "    </>"
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "  );"
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "}"
							})
						] })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `w-80 max-w-full ${CARD}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center gap-2 border-b px-3 py-2 font-sans text-[11px] text-neutral-600 dark:text-neutral-400 ${LINE}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
							className: "h-3.5 w-3.5 text-sky-500",
							strokeWidth: 1.5
						}), " Component hierarchy"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-x-auto p-3 font-mono text-[11px] leading-5 text-neutral-700 dark:text-neutral-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [
							dim("<"),
							tag("Layout"),
							dim(">"),
							"\n",
							"  ",
							dim("<"),
							tag("ErrorBoundary"),
							" ",
							prop("fallback"),
							"=",
							"{",
							dim("<"),
							tag("Error"),
							" ",
							dim("/>"),
							"}",
							dim(">"),
							"\n",
							"    ",
							dim("<"),
							tag("Page"),
							" ",
							dim("/>"),
							"\n",
							"  ",
							dim("</"),
							tag("ErrorBoundary"),
							dim(">"),
							"\n",
							dim("</"),
							tag("Layout"),
							dim(">")
						] })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "40",
				height: "16",
				viewBox: "0 0 40 16",
				className: "hidden shrink-0 text-blue-500 lg:block",
				fill: "none",
				stroke: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 8h36M32 4l4 4-4 4",
					strokeWidth: "1.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "16",
				height: "40",
				viewBox: "0 0 16 40",
				className: "block shrink-0 text-blue-500 lg:hidden",
				fill: "none",
				stroke: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 0v36M4 32l4 4 4-4",
					strokeWidth: "1.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { main: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-30 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-red-600 dark:text-red-300",
					children: "Error..."
				})
			}) })
		]
	}) });
}
function VisualCreating({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 260,
		rows: [
			{ n: "app" },
			{
				n: `layout.${ext}`,
				d: 1
			},
			{
				n: `page.${ext}`,
				d: 1,
				url: "/"
			},
			{
				n: "dashboard",
				d: 1
			},
			{
				n: `layout.${ext}`,
				d: 2
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/dashboard"
			},
			{
				n: `error.${ext}`,
				d: 2,
				dot: true
			}
		]
	});
}
function VisualNested({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 280,
		rows: [
			{ n: "app" },
			{
				n: `error.${ext}`,
				d: 1,
				dot: true
			},
			{
				n: `layout.${ext}`,
				d: 1
			},
			{
				n: `page.${ext}`,
				d: 1,
				url: "/"
			},
			{
				n: "blog",
				d: 1
			},
			{
				n: `error.${ext}`,
				d: 2,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/blog"
			},
			{
				n: "[slug]",
				d: 2
			},
			{
				n: `page.${ext}`,
				d: 3,
				url: "/blog/:slug"
			},
			{
				n: "dashboard",
				d: 1
			},
			{
				n: `error.${ext}`,
				d: 2,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/dashboard"
			},
			{
				n: "settings",
				d: 2
			},
			{
				n: `error.${ext}`,
				d: 3,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 3,
				url: "/dashboard/settings"
			}
		]
	});
}
function VisualWithLayout({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 280,
		rows: [
			{ n: "app" },
			{
				n: `layout.${ext}`,
				d: 1
			},
			{
				n: `error.${ext}`,
				d: 1,
				dot: true
			},
			{
				n: "blog",
				d: 1
			},
			{
				n: `layout.${ext}`,
				d: 2
			},
			{
				n: `error.${ext}`,
				d: 2,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/blog"
			}
		]
	});
}
function VisualComplete({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 280,
		rows: [
			{ n: "app" },
			{
				n: `layout.${ext}`,
				d: 1
			},
			{
				n: `error.${ext}`,
				d: 1,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 1,
				url: "/"
			},
			{
				n: "blog",
				d: 1
			},
			{
				n: `layout.${ext}`,
				d: 2
			},
			{
				n: `error.${ext}`,
				d: 2,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/blog"
			},
			{
				n: "dashboard",
				d: 1
			},
			{
				n: `layout.${ext}`,
				d: 2
			},
			{
				n: `error.${ext}`,
				d: 2,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/dashboard"
			}
		]
	});
}
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Every layout and page is wrapped in an error boundary that resets on navigation. Add",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" in a folder for custom fallback UI. It is a special file - it does not create a URL. Nearest-wins applies."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualHowItWorks, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Creates URL?",
						"Purpose"
					],
					rows: [
						[
							`app/error.${e}`,
							"No - special file",
							"Fallback for routes without a closer error file"
						],
						[
							`app/dashboard/error.${e}`,
							"No - special file",
							"Dashboard segment only"
						],
						[
							`app/blog/[slug]/error.${e}`,
							"No - special file",
							"Blog post segment only"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Layouts stay mounted. The error UI replaces the page (or segment) inside the boundary - not the whole app shell." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-are-error-boundaries",
			title: "What are Error Boundaries?",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Error boundaries catch JavaScript errors in the child tree, log them, and show fallback UI instead of a crashed tree. In Bini.js you use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "They catch errors during rendering and in the tree below them. Boundaries also reset automatically when the pathname changes." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" does not create a URL - same idea as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					". Closest file to the error wins."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-error-boundary",
			title: "Creating an Error Boundary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Create ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" in any folder for that route and its children."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualCreating, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/dashboard/error.${e}`,
					tsCode: `export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
          Something went wrong
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-black px-4 py-2 font-medium text-white dark:bg-white dark:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  )
}`,
					jsCode: `export default function DashboardError({ error, reset }) {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
          Something went wrong
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-black px-4 py-2 font-medium text-white dark:bg-white dark:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "error-props",
			title: "Error Props",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }), " receives two props."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Prop",
						"Type",
						"Description"
					],
					rows: [[
						"error",
						"Error",
						"Thrown Error object with message and stack"
					], [
						"reset",
						"() => void",
						"Clears error state and re-renders children"
					]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/dashboard/error.${e}`,
					tsCode: `export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.error('Dashboard error:', error)

  return (
    <div>
      <h2>Something went wrong!</h2>
      <details className="mt-4 rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <summary className="cursor-pointer">Error details</summary>
        <pre className="mt-2 whitespace-pre-wrap text-xs">{error.stack}</pre>
      </details>
      <button
        onClick={reset}
        className="mt-4 rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        Try again
      </button>
    </div>
  )
}`,
					jsCode: `export default function DashboardError({ error, reset }) {
  console.error('Dashboard error:', error)

  return (
    <div>
      <h2>Something went wrong!</h2>
      <details className="mt-4 rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <summary className="cursor-pointer">Error details</summary>
        <pre className="mt-2 whitespace-pre-wrap text-xs">{error.stack}</pre>
      </details>
      <button
        onClick={reset}
        className="mt-4 rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        Try again
      </button>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nested-error-boundaries",
			title: "Nested Error Boundaries",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Place ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" in subdirectories. Each only catches errors in its subtree."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualNested, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Route", "Error Boundary Used"],
					rows: [
						["/blog/hello-world", `app/blog/error.${e}`],
						["/dashboard", `app/dashboard/error.${e}`],
						["/dashboard/settings", `app/dashboard/settings/error.${e}`],
						["/about", `app/error.${e} (global fallback)`]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nearest-wins",
			title: "Nearest Wins Resolution",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"The closest ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
				" to the route where the error occurred is used."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Check the route's own folder for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If not found, walk up parent folders" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If still not found, use the built-in fallback" })
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "error-with-layout",
			title: "Error with Layout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Error UI is shown inside the layout hierarchy. Headers, sidebars, and nav stay visible when a child route errors." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualWithLayout, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Error UI replaces only the page (or segment) - not the surrounding layout." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "built-in-fallback",
			title: "Built-in Fallback",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"If no ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" exists in scope, Bini.js uses a built-in fallback."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-black dark:text-white",
									children: "Development:"
								}),
								" ",
								"Renders nothing so Vite / ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-overlay" }),
								" can show the error"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-black dark:text-white",
								children: "Production:"
							}), " Generic \"Something went wrong\" UI with a retry button"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-black dark:text-white",
									children: "Logging:"
								}),
								" Runtime errors dispatch a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "__bini_error__" }),
								" CustomEvent on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "window" }),
								" for external overlays"
							] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Custom error UIs are recommended for production. Boundaries also reset when the pathname changes." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Special files do not create URLs. Pages do." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualComplete, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Creates URL?",
						"Role"
					],
					rows: [
						[
							`error.${e}`,
							"No",
							"Segment error boundary"
						],
						[
							`layout.${e}`,
							"No",
							"Wraps segment + children"
						],
						[
							`page.${e}`,
							"Yes",
							"Route content"
						],
						[
							`loading.${e}`,
							"No",
							"Suspense fallback"
						]
					]
				})
			]
		})
	] });
}
function ErrorBoundariesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Error Boundaries",
		description: "Handle errors with error.tsx - catches errors in the child tree and shows fallback UI. Layouts stay visible.",
		url: "https://bini.js.org/docs/error-boundaries",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/error-boundaries.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/load",
			title: "Loading UI"
		},
		next: {
			to: "/docs/templates",
			title: "Templates"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { ErrorBoundariesPage as default };
