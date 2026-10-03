import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/templates.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "what-is-template",
		label: "What is template.tsx?"
	},
	{
		id: "template-vs-layout",
		label: "template.tsx vs layout.tsx"
	},
	{
		id: "creating-template",
		label: "Creating a Template"
	},
	{
		id: "use-cases",
		label: "Use Cases"
	},
	{
		id: "file-naming-note",
		label: "File Naming - templates.tsx"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
function VisualOverview({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 260,
		rows: [
			{ n: "app" },
			{
				n: `layout.${ext}`,
				d: 1
			},
			{
				n: `template.${ext}`,
				d: 1,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 1,
				url: "/"
			},
			{
				n: "about",
				d: 1
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/about"
			}
		]
	});
}
function VisualVsLayout({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 280,
		rows: [
			{ n: "app" },
			{
				n: `layout.${ext}`,
				d: 1
			},
			{
				n: `template.${ext}`,
				d: 1,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 1,
				url: "/"
			},
			{
				n: "about",
				d: 1
			},
			{
				n: `layout.${ext}`,
				d: 2
			},
			{
				n: `template.${ext}`,
				d: 2,
				dot: true
			},
			{
				n: `page.${ext}`,
				d: 2,
				url: "/about"
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
				n: `template.${ext}`,
				d: 1,
				dot: true
			},
			{
				n: `loading.${ext}`,
				d: 1
			},
			{
				n: `error.${ext}`,
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
				n: `template.${ext}`,
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
				n: `page.${ext}`,
				d: 3,
				url: "/dashboard/settings"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `template.${e}` }),
					" sits between the layout chain and the page. Like",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `layout.${e}` }),
					", it is a special file and does not create a URL. Unlike a layout, it is resolved per page scope and is a good place for effects that should run when navigating between pages."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualOverview, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Creates URL?",
						"Role"
					],
					rows: [
						[
							`layout.${e}`,
							"No - special file",
							"Wraps segment + children, receives params"
						],
						[
							`template.${e}`,
							"No - special file",
							"Wraps page inside layout chain, receives children"
						],
						[
							`page.${e}`,
							"Yes",
							"Route content"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Templates only apply to routes inside the folder that declares them and its descendants. They receive ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
					", not ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "params" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-is-template",
			title: "What is template.tsx?",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"A ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `template.${e}` }),
				" file wraps each page in its scope. The nearest template with a default export is used (nearest-wins, same as loading and error)."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-black dark:text-white",
								children: "Between layout and page:"
							}),
							" ",
							"renders inside the layout chain, around the page"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-black dark:text-white",
								children: "children only:"
							}),
							" ",
							"templates receive ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
							", not route ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "params" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-black dark:text-white",
								children: "Folder-scoped:"
							}),
							" ",
							"applies to that folder and descendants only"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-black dark:text-white",
							children: "No URL:"
						}), " special file - does not create a route"] })
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "template-vs-layout",
			title: "template.tsx vs layout.tsx",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Feature",
					`layout.${e}`,
					`template.${e}`
				],
				rows: [
					[
						"Creates URL?",
						"No",
						"No"
					],
					[
						"Wraps",
						"Segment + all children",
						"Page inside layout chain"
					],
					[
						"Props",
						"Outlet / params",
						"children"
					],
					[
						"Typical use",
						"Nav, sidebar, shared chrome",
						"Page-level effects, transitions"
					],
					[
						"Location",
						"Any folder",
						"Any folder"
					]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualVsLayout, { ext: e })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-template",
			title: "Creating a Template",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Create ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `template.${e}` }),
					" in any folder. It must have a default export and receives ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/template.${e}`,
					tsCode: `export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}`,
					jsCode: `export default function Template({ children }) {
  return <div>{children}</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/template.${e}`,
					tsCode: `export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Useful for analytics or focus management
    console.log('Template active')
  }, [])

  return <div>{children}</div>
}`,
					jsCode: `export default function Template({ children }) {
  useEffect(() => {
    // Useful for analytics or focus management
    console.log('Template active')
  }, [])

  return <div>{children}</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/dashboard/template.${e}`,
					tsCode: `export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="animate-in fade-in">
      {children}
    </div>
  )
}`,
					jsCode: `export default function DashboardTemplate({ children }) {
  return (
    <div className="animate-in fade-in">
      {children}
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Templates that contain an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "html" }),
					" tag are ignored. Prefer simple wrappers around",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "use-cases",
			title: "Use Cases",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Prefer a template when you need page-scoped behavior without changing the persistent layout chrome." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: ["Use Case", "Why template?"],
				rows: [
					["Page transitions", "Wrap the page for enter/exit animation classes"],
					["Analytics / logging", "Run effects around each page view"],
					["Focus management", "Move focus when the page content changes"],
					["Reset local UI state", "Keep layout state, re-init page-level UI"]
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "file-naming-note",
			title: "File Naming - templates.tsx",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"On this docs site, the page file is named ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "templates.tsx" }),
				" (plural) so it is not treated as the special ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `template.${e}` }),
				" convention. The real special file in apps remains ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `template.${e}` }),
				"."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Real special file",
					"Docs page file",
					"Why?"
				],
				rows: [[
					`app/template.${e}`,
					"app/docs/templates.tsx",
					"Avoid special-file handling for the docs route"
				], [
					`app/default.${e}`,
					"app/docs/defaults.tsx",
					"Same idea for slot defaults"
				]]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Templates next to layouts, loading, and error - special files do not create URLs." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualComplete, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Creates URL?",
						"Purpose"
					],
					rows: [
						[
							`app/layout.${e}`,
							"No",
							"Root layout"
						],
						[
							`app/template.${e}`,
							"No",
							"Root template"
						],
						[
							`app/page.${e}`,
							"Yes - /",
							"Home page"
						],
						[
							`app/dashboard/template.${e}`,
							"No",
							"Dashboard page wrapper"
						],
						[
							`app/dashboard/page.${e}`,
							"Yes - /dashboard",
							"Dashboard page"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `layout.${e}` }),
					" for shared chrome. Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `template.${e}` }),
					" for page-level wrapping inside that chrome."
				] })
			]
		})
	] });
}
function TemplatePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Template",
		description: "template.tsx wraps pages inside the layout chain - special file, no URL, nearest-wins.",
		url: "https://bini.js.org/docs/templates",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/templates.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/error-boundaries",
			title: "Error Boundaries"
		},
		next: {
			to: "/docs/defaults",
			title: "Default"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { TemplatePage as default };
