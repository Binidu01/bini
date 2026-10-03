import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual, l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/folder-based-routing.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "basic-folder-routing",
		label: "Basic Folder Routing"
	},
	{
		id: "nested-routes",
		label: "Nested Routes"
	},
	{
		id: "route-groups",
		label: "Route Groups"
	},
	{
		id: "private-folders",
		label: "Private Folders (Private Routes)"
	},
	{
		id: "nearest-wins-folders",
		label: "Nearest Wins with Folders"
	},
	{
		id: "route-priority",
		label: "Route Priority"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
var STRONG = "font-semibold text-black dark:text-white";
function Content() {
	const lang = useDocLang();
	const e = lang === "js" ? "jsx" : "tsx";
	const s = lang === "js" ? "js" : "ts";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Bini.js uses ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "folder-based routing"
					}),
					" - every folder inside ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/" }),
					" becomes a URL segment. Add ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" inside that folder to make the route accessible."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Folder names must be valid URL segments and the structure directly maps to the URL path." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Folder Pattern",
						"URL",
						"Type"
					],
					rows: [
						[
							`app/about/page.${e}`,
							"/about",
							"Static folder - creates URL"
						],
						[
							`app/blog/page.${e}`,
							"/blog",
							"Static folder - creates URL"
						],
						[
							`app/dashboard/settings/page.${e}`,
							"/dashboard/settings",
							"Nested folder - creates URL"
						],
						[
							`app/(marketing)/about/page.${e}`,
							"/about",
							"Route group - folder ignored, no extra segment"
						],
						[
							`app/_components/Header.${e}`,
							"-",
							"Private folder _ - no URL"
						],
						[
							`app/.internal/page.${e}`,
							"-",
							"Private folder . - no URL"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "basic-folder-routing",
			title: "Basic Folder Routing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Every folder becomes a segment. Add ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" to expose it.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `index.${e}` }),
					" also maps to its parent."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 260,
					rows: [
						{ n: "app" },
						{
							n: `page.${e}`,
							d: 1,
							dot: true,
							url: "/"
						},
						{
							n: "about",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/about"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/blog"
						},
						{
							n: "dashboard",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/dashboard"
						},
						{
							n: "settings",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/dashboard/settings"
						},
						{
							n: "contact",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/contact"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/about/page.${e}`,
					tsCode: `export default function AboutPage() {
  return <h1>About</h1>
}`,
					jsCode: `export default function AboutPage() {
  return <h1>About</h1>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Every folder with a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" creates a URL. This keeps layouts, loading, and error boundaries co-located per folder."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nested-routes",
			title: "Nested Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Nest folders to create nested URL segments. Each nested folder adds a segment and creates a URL." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "blog",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							dot: true,
							url: "/blog"
						},
						{
							n: "authors",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/authors"
						},
						{
							n: "categories",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/categories"
						},
						{
							n: "dashboard",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/dashboard"
						},
						{
							n: "settings",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/dashboard/settings"
						},
						{
							n: "profile",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							url: "/dashboard/settings/profile"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/authors/page.${e}`,
					tsCode: `export default function AuthorsPage() {
  return (
    <ul>
      <li>Alice</li>
      <li>Bob</li>
    </ul>
  )
}`,
					jsCode: `export default function AuthorsPage() {
  return (
    <ul>
      <li>Alice</li>
      <li>Bob</li>
    </ul>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Nested folders create nested URLs. Each level adds a segment. Layouts from parent folders wrap child routes." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "route-groups",
			title: "Route Groups",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(group)" }), " organizes folders without affecting URL. The group folder does not create a URL segment."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 260,
					rows: [
						{ n: "app" },
						{
							n: "(marketing)",
							d: 1
						},
						{
							n: `layout.${e}`,
							d: 2,
							dot: true
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/"
						},
						{
							n: "about",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/about"
						},
						{
							n: "pricing",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/pricing"
						},
						{
							n: "(app)",
							d: 1
						},
						{
							n: `layout.${e}`,
							d: 2,
							dot: true
						},
						{
							n: "dashboard",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/dashboard"
						},
						{
							n: `layout.${e}`,
							d: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/(marketing)/layout.${e}`,
					tsCode: `export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>Marketing Nav</nav>
      <main>{children}</main>
    </div>
  )
}`,
					jsCode: `export default function MarketingLayout({ children }) {
  return (
    <div>
      <nav>Marketing Nav</nav>
      <main>{children}</main>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"URLs are ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/pricing" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/dashboard" }),
					" - the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(marketing)" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(app)" }),
					" folders don't create URL segments."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Route groups are folders wrapped in parentheses. They organize code without creating URLs. Perfect for applying different layouts to different sections." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "private-folders",
			title: "Private Folders (Private Routes)",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Private folders are folder-based private routes"
					}),
					" - prefix a folder with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "_" }),
					" or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "." }),
					" to exclude it from routing. They do not create URLs."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "_components",
							d: 1
						},
						{
							n: `Header.${e}`,
							d: 2,
							dot: true,
							url: "/_components/Header",
							ok: false
						},
						{
							n: "_lib",
							d: 1
						},
						{
							n: `utils.${s}`,
							d: 2,
							url: "/_lib/utils",
							ok: false
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/blog"
						},
						{
							n: "_components",
							d: 2
						},
						{
							n: `PostCard.${e}`,
							d: 3,
							url: "/blog/_components/PostCard",
							ok: false
						},
						{
							n: "dashboard",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/dashboard"
						},
						{
							n: "_components",
							d: 2
						},
						{
							n: `Sidebar.${e}`,
							d: 3,
							url: "/dashboard/_components/Sidebar",
							ok: false
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Folder Pattern",
						"Creates URL?",
						"Description"
					],
					rows: [
						[
							"_components",
							"No",
							"Private folder - _ prefix - no URL"
						],
						[
							"_lib, _hooks",
							"No",
							"Private folders - no URL"
						],
						[
							".hidden, .internal",
							"No",
							"Dot prefix - private - no URL"
						],
						[
							"blog/_components",
							"No",
							"Private inside route - no URL"
						],
						[
							"(group)",
							"No extra segment",
							"Route group - folder ignored"
						],
						[
							"blog, about",
							"Yes",
							`Public folder with page.${e} - creates URL`
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Private folders (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "_" }),
					" or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "." }),
					") do not create URLs. Use them to keep components, utils, and hooks next to the route that uses them. Static and nested folders with",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" do create URLs."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nearest-wins-folders",
			title: "Nearest Wins with Folders",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `not-found.${e}` }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" use",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "nearest-wins"
					}),
					" resolution for folder hierarchy. A file in a subfolder only affects that subfolder."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [
						{ n: "app" },
						{
							n: `layout.${e}`,
							d: 1
						},
						{
							n: `page.${e}`,
							d: 1,
							dot: true
						},
						{
							n: `loading.${e}`,
							d: 1
						},
						{
							n: `not-found.${e}`,
							d: 1
						},
						{
							n: `error.${e}`,
							d: 1
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
							d: 2
						},
						{
							n: `loading.${e}`,
							d: 2,
							dot: true
						},
						{
							n: `error.${e}`,
							d: 2,
							dot: true
						},
						{
							n: "settings",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2
						},
						{
							n: `loading.${e}`,
							d: 2,
							dot: true
						},
						{
							n: "authors",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Resolution: route's own folder → parent folders → built-in default." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/dashboard/loading.${e}`,
					tsCode: `export default function DashboardLoading() {
  return <p>Loading dashboard…</p>
}`,
					jsCode: `export default function DashboardLoading() {
  return <p>Loading dashboard…</p>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "route-priority",
			title: "Route Priority",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "In folder-based routing, static folders define exact routes and create URLs. Shorter paths are matched first." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Static folders" }),
							" - exact matches like ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `about/page.${e}` }),
							" →",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" }),
							" - creates URL"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Nested folders" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `blog/authors/page.${e}` }),
							" →",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/authors" }),
							" - creates URL"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Route groups" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `(marketing)/about/page.${e}` }),
							" → ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" }),
							" ",
							"- no extra segment"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Private folders" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "_components" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".internal" }),
							" - no URL"
						] })
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "about",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							dot: true,
							url: "/about"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/blog"
						},
						{
							n: "authors",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/authors"
						},
						{
							n: "(marketing)",
							d: 1
						},
						{
							n: "pricing",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/pricing"
						},
						{
							n: "_components",
							d: 1
						},
						{
							n: `Header.${e}`,
							d: 2,
							url: "/_components/Header",
							ok: false
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Static and nested folders create URLs. Route groups and private folders do not create URLs or extra segments." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Complete folder-based routing example showing which folders create URLs and which don't." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 300,
					rows: [
						{ n: "app" },
						{
							n: "(marketing)",
							d: 1
						},
						{
							n: `layout.${e}`,
							d: 2
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/"
						},
						{
							n: "about",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/about"
						},
						{
							n: "_components",
							d: 2
						},
						{
							n: `Hero.${e}`,
							d: 3,
							url: "/_components/Hero",
							ok: false
						},
						{
							n: "_components",
							d: 1
						},
						{
							n: `Button.${e}`,
							d: 2,
							url: "/_components/Button",
							ok: false
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `layout.${e}`,
							d: 2
						},
						{
							n: `page.${e}`,
							d: 2,
							dot: true,
							url: "/blog"
						},
						{
							n: `loading.${e}`,
							d: 2
						},
						{
							n: "authors",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/authors"
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
							n: "settings",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/dashboard/settings"
						},
						{
							n: "profile",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							url: "/dashboard/settings/profile"
						},
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
							n: `loading.${e}`,
							d: 1
						},
						{
							n: `error.${e}`,
							d: 1
						},
						{
							n: `not-found.${e}`,
							d: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Folder Path",
						"URL",
						"Creates URL?"
					],
					rows: [
						[
							`app/page.${e}`,
							"/",
							"Yes - creates URL"
						],
						[
							`app/about/page.${e}`,
							"/about",
							"Yes - static folder creates URL"
						],
						[
							`app/blog/page.${e}`,
							"/blog",
							"Yes - static folder creates URL"
						],
						[
							`app/blog/authors/page.${e}`,
							"/blog/authors",
							"Yes - nested folder creates URL"
						],
						[
							`app/dashboard/settings/profile/page.${e}`,
							"/dashboard/settings/profile",
							"Yes - deeply nested creates URL"
						],
						[
							`app/(marketing)/about/page.${e}`,
							"/about",
							"Yes, but group folder ignored"
						],
						[
							`app/_components/Header.${e}`,
							"-",
							"No - private folder, no URL"
						],
						[
							`app/.internal/config.${s}`,
							"-",
							"No - private folder, no URL"
						],
						[
							`app/blog/_components/PostCard.${e}`,
							"-",
							"No - private inside route, no URL"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Static folders and nested folders with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" create URLs. Private folders (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "_" }),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "." }),
					") and route groups ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "(group)" }),
					" do not create extra URL segments. Private folders are for organizing code without creating URLs."
				] })
			]
		})
	] });
}
function FolderBasedRoutingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Folder-Based Routing",
		description: "Folders inside src/app define URL segments. Each folder becomes a part of the URL path.",
		url: "https://bini.js.org/docs/folder-based-routing",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/folder-based-routing.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/linking-and-navigating",
			title: "Linking and Navigating"
		},
		next: {
			to: "/docs/file-based-routing",
			title: "File-Based Routing"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { FolderBasedRoutingPage as default };
