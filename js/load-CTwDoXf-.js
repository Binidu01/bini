import { _ as siReact } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, c as LINE, h as Atom, l as RouteVisual, n as CARD } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/load.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "how-it-works",
		label: "How it Works"
	},
	{
		id: "global-loading",
		label: "Global Loading UI"
	},
	{
		id: "nested-loading",
		label: "Nested Loading UI"
	},
	{
		id: "skeleton-examples",
		label: "Skeleton Examples"
	},
	{
		id: "loading-with-layout",
		label: "Loading with Layout"
	},
	{
		id: "custom-spinners",
		label: "Custom Spinners"
	},
	{
		id: "built-in-fallback",
		label: "Built-in Fallback"
	}
];
function AppShell({ main, highlightMain }) {
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
				className: `min-w-0 flex-1 p-2.5 ${highlightMain ? "m-1 rounded-lg border border-dashed border-blue-500 bg-blue-500/10" : ""}`,
				children: main
			})]
		})]
	});
}
function SkeletonRows() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2.5",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-7 shrink-0 rounded bg-neutral-300 dark:bg-neutral-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full rounded bg-neutral-300 dark:bg-neutral-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-2/3 rounded bg-neutral-300 dark:bg-neutral-600" })]
			})]
		}, i))
	});
}
function LoadedRows() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2.5",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-7 w-7 shrink-0 items-center justify-center rounded bg-blue-500/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "12",
					height: "12",
					viewBox: "0 0 24 24",
					fill: "none",
					className: "text-blue-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "5",
						width: "18",
						height: "14",
						rx: "2",
						stroke: "currentColor",
						strokeWidth: "1.5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M3 15l5-5 4 4 3-3 6 6",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeLinejoin: "round"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full rounded bg-blue-400/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-2/3 rounded bg-blue-400/40" })]
			})]
		}, i))
	});
}
function VisualPartialLoading() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
					main: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonRows, {}),
					highlightMain: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "max-w-65 text-center text-[11px] text-neutral-500",
					children: "Partial content with loading state"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "32",
				height: "12",
				viewBox: "0 0 32 12",
				className: "hidden shrink-0 text-blue-500 sm:block",
				fill: "none",
				stroke: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 6h28M24 2l4 4-4 4",
					strokeWidth: "1.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "12",
				height: "32",
				viewBox: "0 0 12 32",
				className: "block shrink-0 text-blue-500 sm:hidden",
				fill: "none",
				stroke: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 0v28M2 24l4 4 4-4",
					strokeWidth: "1.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-50 overflow-hidden rounded-xl border-2 border-blue-500 bg-white p-3 shadow-sm dark:bg-[#152033]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadedRows, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-center text-[11px] text-neutral-500",
					children: "Loaded content"
				})]
			})
		]
	}) });
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
		className: "flex flex-col items-center gap-6 lg:flex-row lg:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `w-70 ${CARD} shadow-sm`,
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
							children: ["loading.", ext]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-3 font-mono text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-purple-600 dark:text-[#C586C0]",
								children: "export default function "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-700 dark:text-[#DCDCAA]",
								children: "Loading"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: ["() ", "{"]
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-purple-600 dark:text-[#C586C0]",
								children: "  return "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-orange-700 dark:text-[#CE9178]",
								children: "\"Loading...\""
							}),
							"\n",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neutral-700 dark:text-neutral-300",
								children: "}"
							})
						] })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `w-70 ${CARD}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center gap-2 border-b px-3 py-2 font-sans text-[11px] text-neutral-600 dark:text-neutral-400 ${LINE}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
							className: "h-3.5 w-3.5 text-sky-500",
							strokeWidth: 1.5
						}), " Component hierarchy"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-3 font-mono text-[11px] leading-5 text-neutral-700 dark:text-neutral-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [
							dim("<"),
							tag("Layout"),
							dim(">"),
							"\n",
							"  ",
							dim("<"),
							tag("Suspense"),
							" ",
							prop("fallback"),
							"=",
							"{",
							dim("<"),
							tag("Loading"),
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
							tag("Suspense"),
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
				className: "shrink-0 text-blue-500 max-lg:rotate-90",
				fill: "none",
				stroke: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 8h36M32 4l4 4-4 4",
					strokeWidth: "1.5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { main: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full min-h-30 items-center justify-center rounded-lg border-2 border-blue-500 bg-blue-500/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-blue-600 dark:text-blue-300",
					children: "Loading..."
				})
			}) })
		]
	}) });
}
function VisualGlobal({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 240,
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
				n: `loading.${ext}`,
				d: 1,
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
				n: `loading.${ext}`,
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
				n: `loading.${ext}`,
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
				n: `loading.${ext}`,
				d: 3,
				dot: true
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
				n: `loading.${ext}`,
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
				n: `loading.${ext}`,
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
				n: `loading.${ext}`,
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
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Create a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					" file to show a custom fallback while a page loads. It is used as the Suspense fallback for that segment. Parent layouts stay mounted - only the page slot shows the loading UI."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualPartialLoading, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Creates URL?",
						"Purpose"
					],
					rows: [
						[
							`app/loading.${e}`,
							"No - special file",
							"Global loading fallback"
						],
						[
							`app/blog/loading.${e}`,
							"No - special file",
							"Blog-specific loading"
						],
						[
							`app/dashboard/loading.${e}`,
							"No - special file",
							"Dashboard-specific loading"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }), " does not create a URL. Nearest-wins - the closest file to the navigated page is used. Layouts remain interactive while content loads."] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "how-it-works",
			title: "How it Works",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }), " wraps the page in a Suspense boundary. On navigation the fallback shows immediately while the page chunk loads."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualHowItWorks, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "User navigates to a route" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Loading UI appears in the page slot (layouts stay visible)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Page content loads in the background via React.lazy" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Loading UI is replaced with the actual page" })
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "global-loading",
			title: "Global Loading UI",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Place ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					" at the root of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app" }),
					" for a default fallback for all routes that do not define their own."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualGlobal, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/loading.${e}`,
					tsCode: `export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-black dark:border-white" />
    </div>
  )
}`,
					jsCode: `export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-black dark:border-white" />
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nested-loading",
			title: "Nested Loading UI",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Route-specific loading by placing ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					" in subdirectories. Closest file to the page wins."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualNested, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Navigation", "Loading UI Used"],
					rows: [
						["/ → /about", `app/loading.${e} - global`],
						["/ → /blog", `app/blog/loading.${e}`],
						["/ → /blog/hello-world", `app/blog/[slug]/loading.${e}`],
						["/ → /dashboard", `app/dashboard/loading.${e}`]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "skeleton-examples",
			title: "Skeleton Examples",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Skeletons show approximate layout and usually feel better than a spinner alone." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-8",
					children: "Blog Post Skeleton"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug]/loading.${e}`,
					tsCode: `export default function BlogPostLoading() {
  return (
    <article className="mx-auto max-w-3xl animate-pulse py-8">
      <div className="mb-4 h-10 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="mb-8 flex gap-4">
        <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </article>
  )
}`,
					jsCode: `export default function BlogPostLoading() {
  return (
    <article className="mx-auto max-w-3xl animate-pulse py-8">
      <div className="mb-4 h-10 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="mb-8 flex gap-4">
        <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </article>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-8",
					children: "Dashboard Skeleton"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/dashboard/loading.${e}`,
					tsCode: `export default function DashboardLoading() {
  return (
    <div className="flex gap-6 p-6 animate-pulse">
      <div className="w-64 space-y-3">
        <div className="h-8 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-2/3 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="flex-1 space-y-4">
        <div className="h-8 w-1/3 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-24 rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <div className="h-64 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  )
}`,
					jsCode: `export default function DashboardLoading() {
  return (
    <div className="flex gap-6 p-6 animate-pulse">
      <div className="w-64 space-y-3">
        <div className="h-8 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-2/3 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="flex-1 space-y-4">
        <div className="h-8 w-1/3 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-24 rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <div className="h-64 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-8",
					children: "Card Grid Skeleton"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/products/loading.${e}`,
					tsCode: `export default function ProductsLoading() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="mb-3 h-48 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            <div className="mb-2 h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  )
}`,
					jsCode: `export default function ProductsLoading() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="mb-3 h-48 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
            <div className="mb-2 h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        ))}
      </div>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "loading-with-layout",
			title: "Loading with Layout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Loading UI is shown inside the layout hierarchy. Headers, sidebars, and nav stay visible and interactive while only the page content shows the fallback." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualWithLayout, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/layout.${e}`,
					tsCode: `export default function BlogLayout() {
  return (
    <div>
      <header className="mb-8">
        <h1>Blog</h1>
        <nav>{/* Navigation stays visible */}</nav>
      </header>
      <main>
        <Outlet />  {/* loading.tsx or page.tsx */}
      </main>
    </div>
  )
}`,
					jsCode: `export default function BlogLayout() {
  return (
    <div>
      <header className="mb-8">
        <h1>Blog</h1>
        <nav>{/* Navigation stays visible */}</nav>
      </header>
      <main>
        <Outlet />  {/* loading.tsx or page.tsx */}
      </main>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Loading UI replaces only the page (or segment) inside Suspense - not the surrounding layout." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "custom-spinners",
			title: "Custom Spinners",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Build branded spinners that match your design system." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/loading.${e}`,
					tsCode: `export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm dark:bg-black/50">
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-2xl dark:border-neutral-800 dark:bg-black">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-neutral-300 border-t-black dark:border-neutral-700 dark:border-t-white" />
        <p className="mt-3 text-center text-sm text-neutral-500">Loading...</p>
      </div>
    </div>
  )
}`,
					jsCode: `export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm dark:bg-black/50">
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-2xl dark:border-neutral-800 dark:bg-black">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-neutral-300 border-t-black dark:border-neutral-700 dark:border-t-white" />
        <p className="mt-3 text-center text-sm text-neutral-500">Loading...</p>
      </div>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/loading.${e}`,
					tsCode: `export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-black dark:bg-white" />
        <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:0.15s] dark:bg-white" />
        <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:0.3s] dark:bg-white" />
      </div>
    </div>
  )
}`,
					jsCode: `export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-black dark:bg-white" />
        <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:0.15s] dark:bg-white" />
        <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:0.3s] dark:bg-white" />
      </div>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "built-in-fallback",
			title: "Built-in Fallback",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"If no ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					" exists, Bini.js uses a built-in spinner. It follows the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dark" }),
					" class and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "prefers-color-scheme" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dark mode aware - adapts to theme" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Centered on screen" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Minimal design" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Used automatically when no custom loading UI is defined" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Prefer custom skeletons for content-heavy pages. Keep loading UIs lightweight so they render quickly." })
			]
		})
	] });
}
function LoadingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Loading UI",
		description: "Custom loading states with loading.tsx - Suspense boundary that shows instantly on navigation. Layouts stay visible.",
		url: "https://bini.js.org/docs/load",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/load.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/mdx-markdown",
			title: "MDX & Markdown"
		},
		next: {
			to: "/docs/error-boundaries",
			title: "Error Boundaries"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { LoadingPage as default };
