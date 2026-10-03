import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/defaults.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "what-is-default",
		label: "What is default.tsx?"
	},
	{
		id: "default-for-parallel",
		label: "default.tsx for Parallel Routes"
	},
	{
		id: "creating-default",
		label: "Creating a default.tsx"
	},
	{
		id: "default-vs-page",
		label: "default.tsx vs page.tsx"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Place ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
					" inside an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" }),
					" folder. When the current URL has no matching child route for that slot, the default is rendered instead. It does not create a URL."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 280,
					rows: [
						{ n: "dashboard" },
						{
							n: `layout.${e}`,
							d: 1
						},
						{
							n: `page.${e}`,
							d: 1,
							url: "/dashboard"
						},
						{
							n: "@analytics",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2
						},
						{
							n: `default.${e}`,
							d: 2,
							dot: true
						},
						{
							n: "@team",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2
						},
						{
							n: `default.${e}`,
							d: 2,
							dot: true
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Creates URL?",
						"When rendered"
					],
					rows: [
						[
							`@analytics/page.${e}`,
							"Via parent route",
							"When the slot has a matching child"
						],
						[
							`@analytics/default.${e}`,
							"No - special file",
							"When the slot has no match for the URL"
						],
						[
							`@team/default.${e}`,
							"No - special file",
							"Fallback for the team slot"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-is-default",
			title: "What is default.tsx?",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }), " is the soft fallback for a parallel route slot. If navigation leaves a slot without a matching page, the slot shows its default instead of going blank or 404ing the whole page."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Slot fallback:" }),
						" used when no child route matches inside ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "No URL:" }), " special file - does not create a route"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Parallel only:" }),
						" meaningful inside ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" }),
						" folders"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Not a 404:" }),
						" use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `not-found.${e}` }),
						" for missing routes"
					] })
				]
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "default-for-parallel",
			title: "default.tsx for Parallel Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Parallel slots like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@team" }),
					" render beside the main page inside the parent layout. When you navigate to a path the slot does not define, that slot shows its ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 300,
					rows: [
						{ n: "dashboard" },
						{
							n: `layout.${e}`,
							d: 1
						},
						{
							n: `page.${e}`,
							d: 1,
							url: "/dashboard"
						},
						{
							n: "@analytics",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2
						},
						{
							n: `default.${e}`,
							d: 2,
							dot: true
						},
						{
							n: "views",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/dashboard/views"
						},
						{
							n: "@team",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2
						},
						{
							n: `default.${e}`,
							d: 2,
							dot: true
						},
						{
							n: "settings",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/dashboard/settings"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/dashboard/@analytics/default.${e}`,
					tsCode: `export default function DefaultAnalytics() {
  return (
    <div className="p-4 text-sm text-neutral-500">
      Select an analytics view
    </div>
  )
}`,
					jsCode: `export default function DefaultAnalytics() {
  return (
    <div className="p-4 text-sm text-neutral-500">
      Select an analytics view
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Slot folder names (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics" }),
					") do not appear in the URL. Sub-routes under a slot (e.g. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "views/page" }),
					") do contribute path segments."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-default",
			title: "Creating a default.tsx",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Create ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
				" inside any ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" }),
				" folder. Export a default component - no special props required."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/dashboard/@team/default.${e}`,
				tsCode: `export default function DefaultTeam() {
  return (
    <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
      <h3 className="font-medium">Team</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Select a team view
      </p>
    </div>
  )
}`,
				jsCode: `export default function DefaultTeam() {
  return (
    <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
      <h3 className="font-medium">Team</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Select a team view
      </p>
    </div>
  )
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "default-vs-page",
			title: "default.tsx vs page.tsx",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Feature",
					`page.${e}`,
					`default.${e}`
				],
				rows: [
					[
						"Location",
						"Any folder",
						"Inside @slot"
					],
					[
						"Creates URL?",
						"Yes",
						"No - special file"
					],
					[
						"When rendered",
						"Route matches",
						"Slot has no matching child"
					],
					[
						"Use case",
						"Route UI",
						"Soft slot fallback"
					]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				"Example: navigate to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/dashboard/settings" }),
				". If ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics" }),
				" has no settings child, ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics/default" }),
				" renders while ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@team/settings/page" }),
				" (if present) still shows."
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 300,
					rows: [
						{ n: "app" },
						{
							n: `layout.${e}`,
							d: 1
						},
						{
							n: `page.${e}`,
							d: 1,
							url: "/"
						},
						{
							n: "dashboard",
							d: 1
						},
						{
							n: `layout.${e}`,
							d: 2
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/dashboard"
						},
						{
							n: "@analytics",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3
						},
						{
							n: `default.${e}`,
							d: 3,
							dot: true
						},
						{
							n: "views",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							url: "/dashboard/views"
						},
						{
							n: "@team",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3
						},
						{
							n: `default.${e}`,
							d: 3,
							dot: true
						},
						{
							n: "settings",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							url: "/dashboard/settings"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Path",
						"URL",
						"Creates URL?"
					],
					rows: [
						[
							`dashboard/page.${e}`,
							"/dashboard",
							"Yes"
						],
						[
							`dashboard/@analytics/page.${e}`,
							"/dashboard",
							"Via parent (no @ segment)"
						],
						[
							`dashboard/@analytics/default.${e}`,
							"-",
							"No - special file"
						],
						[
							`dashboard/@analytics/views/page.${e}`,
							"/dashboard/views",
							"Yes"
						],
						[
							`dashboard/@team/settings/page.${e}`,
							"/dashboard/settings",
							"Yes"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"This docs page is named ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "defaults.tsx" }),
					" so the site does not treat it as the special",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
					" convention. In apps, use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
					" inside",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" }),
					" folders."
				] })
			]
		})
	] });
}
function DefaultPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Default",
		badge: "Experimental",
		description: "default.tsx is the fallback for parallel route slots - special file, no URL.",
		url: "https://bini.js.org/docs/defaults",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/defaults.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/templates",
			title: "Template"
		},
		next: {
			to: "/docs/notfound",
			title: "Not Found (404)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { DefaultPage as default };
