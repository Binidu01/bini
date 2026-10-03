import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/file-based-routing.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "basic-file-routing",
		label: "Basic File Routing"
	},
	{
		id: "flat-vs-folder",
		label: "Flat Files vs Folders"
	},
	{
		id: "index-files",
		label: "Index Files"
	},
	{
		id: "file-extensions",
		label: "File Extensions & Priority"
	},
	{
		id: "reserved-names",
		label: "Reserved Names"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
var STRONG = "font-semibold text-black dark:text-white";
var LABEL = "mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500";
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Bini.js supports ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "file-based routing"
					}),
					" - a file directly inside ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/" }),
					" becomes a route. No folder needed. For example",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `about.${e}` }),
					" creates ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/about" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"This is different from folder-based routing where you need ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `about/page.${e}` }),
					". File-based is faster for single pages."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File Path",
						"URL",
						"Creates URL?"
					],
					rows: [
						[
							`app/about.${e}`,
							"/about",
							"Yes - flat file creates URL"
						],
						[
							`app/contact.${e}`,
							"/contact",
							"Yes - flat file creates URL"
						],
						[
							`app/blog.${e}`,
							"/blog",
							"Yes - flat file creates URL"
						],
						[
							`app/page.${e}`,
							"/",
							"Yes - root file creates URL"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "basic-file-routing",
			title: "Basic File Routing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"A file in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app" }),
					" directly maps to a URL. The file must export a default React component."
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
							n: `about.${e}`,
							d: 1,
							url: "/about"
						},
						{
							n: `contact.${e}`,
							d: 1,
							url: "/contact"
						},
						{
							n: `pricing.${e}`,
							d: 1,
							url: "/pricing"
						},
						{
							n: `blog.${e}`,
							d: 1,
							url: "/blog"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/about.${e}`,
					tsCode: `export default function AboutPage() {
  return <h1>About Us</h1>
}`,
					jsCode: `export default function AboutPage() {
  return <h1>About Us</h1>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/contact.${e}`,
					tsCode: `export default function ContactPage() {
  return <h1>Contact Us</h1>
}`,
					jsCode: `export default function ContactPage() {
  return <h1>Contact Us</h1>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"File-based routing creates a URL directly from the file name. No folder with",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" needed."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "flat-vs-folder",
			title: "Flat Files vs Folders",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Both achieve the same URL, but file-based is shorter for simple pages." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Approach",
						"File Path",
						"URL",
						"Creates URL?"
					],
					rows: [
						[
							"File-based",
							`app/about.${e}`,
							"/about",
							"Yes - file creates URL"
						],
						[
							"Folder-based",
							`app/about/page.${e}`,
							"/about",
							"Yes - folder + page creates URL"
						],
						[
							"File-based",
							`app/dashboard.${e}`,
							"/dashboard",
							"Yes - file creates URL"
						],
						[
							"Folder-based",
							`app/dashboard/page.${e}`,
							"/dashboard",
							"Yes - folder + page creates URL"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: LABEL,
					children: "File-based"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 220,
					rows: [
						{ n: "app" },
						{
							n: `about.${e}`,
							d: 1,
							dot: true,
							url: "/about"
						},
						{
							n: `contact.${e}`,
							d: 1,
							url: "/contact"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `${LABEL} mt-6`,
					children: "Folder-based"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 220,
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Use file-based for simple single pages. Use folder-based when you need co-located layouts, loading, or private folders like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "_components" }),
					" inside the route."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "index-files",
			title: "Index Files",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `index.${e}` }), " inside a folder maps to that folder's URL. This is file-based routing inside a folder."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "dashboard",
							d: 1
						},
						{
							n: `index.${e}`,
							d: 2,
							dot: true,
							url: "/dashboard"
						},
						{
							n: "settings",
							d: 2
						},
						{
							n: `index.${e}`,
							d: 3,
							url: "/dashboard/settings"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `index.${e}`,
							d: 2,
							url: "/blog"
						},
						{
							n: "authors",
							d: 2
						},
						{
							n: `index.${e}`,
							d: 3,
							url: "/blog/authors"
						},
						{
							n: `page.${e}`,
							d: 1,
							url: "/"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File Path",
						"URL",
						"Creates URL?"
					],
					rows: [
						[
							`app/dashboard/index.${e}`,
							"/dashboard",
							"Yes - index creates URL"
						],
						[
							`app/blog/index.${e}`,
							"/blog",
							"Yes - index creates URL"
						],
						[
							`app/blog/authors/index.${e}`,
							"/blog/authors",
							"Yes - nested index creates URL"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `index.${e}` }),
					" is equivalent to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" inside that folder - both create the same URL. Choose one pattern and stick to it."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "file-extensions",
			title: "File Extensions & Priority",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Supported extensions for file-based routes and their priority when the same name exists." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs",
					children: ".tsx > .jsx > .ts > .js > .mdx > .md"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 240,
					rows: [
						{ n: "app" },
						{
							n: "about.tsx",
							d: 1,
							dot: true,
							url: "/about"
						},
						{
							n: "about.jsx",
							d: 1,
							url: "(ignored)",
							ok: false
						},
						{
							n: "about.mdx",
							d: 1,
							url: "(ignored)",
							ok: false
						},
						{
							n: "blog.tsx",
							d: 1,
							url: "/blog"
						},
						{
							n: "contact.md",
							d: 1,
							url: "/contact"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Extension",
						"Creates URL?",
						"Description"
					],
					rows: [
						[
							".tsx",
							"Yes",
							"Highest priority - creates URL"
						],
						[
							".jsx",
							"Yes",
							"Second priority - creates URL if no .tsx"
						],
						[
							".ts",
							"Yes",
							"Third priority"
						],
						[
							".js",
							"Yes",
							"Fourth priority"
						],
						[
							".mdx",
							"Yes",
							"MDX page - creates URL"
						],
						[
							".md",
							"Yes",
							"Markdown page - creates URL"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "reserved-names",
			title: "Reserved Names",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "These file names are never treated as flat file routes - they are special files for structure, not routes." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File Name",
						"Creates URL?",
						"Reason"
					],
					rows: [
						[
							`page.${e}`,
							"Yes - but via folder",
							"Special - defines folder route"
						],
						[
							`layout.${e}`,
							"No",
							"Special file - layout, not route"
						],
						[
							`loading.${e}`,
							"No",
							"Special file - loading UI"
						],
						[
							`error.${e}`,
							"No",
							"Special file - error UI"
						],
						[
							`not-found.${e}`,
							"No",
							"Special file - 404 UI"
						],
						[
							`template.${e}`,
							"No",
							"Special file - template"
						],
						[
							`default.${e}`,
							"No",
							"Special file - parallel route fallback"
						],
						[
							`global-error.${e}`,
							"No",
							"Special file - global error"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 260,
					rows: [
						{ n: "app" },
						{
							n: `about.${e}`,
							d: 1,
							dot: true,
							url: "/about"
						},
						{
							n: `contact.${e}`,
							d: 1,
							url: "/contact"
						},
						{
							n: `layout.${e}`,
							d: 1,
							url: "-",
							ok: false
						},
						{
							n: `loading.${e}`,
							d: 1,
							url: "-",
							ok: false
						},
						{
							n: `page.${e}`,
							d: 1,
							url: "/"
						},
						{
							n: `dashboard.${e}`,
							d: 1,
							url: "/dashboard"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Only regular file names like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `about.${e}` }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `contact.${e}` }),
					" create URLs. Reserved names like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `layout.${e}` }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					" do not create URLs - they are special files."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "File-based routing only - flat files that create URLs without folders." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: `page.${e}`,
							d: 1,
							dot: true,
							url: "/"
						},
						{
							n: `about.${e}`,
							d: 1,
							url: "/about"
						},
						{
							n: `contact.${e}`,
							d: 1,
							url: "/contact"
						},
						{
							n: `pricing.${e}`,
							d: 1,
							url: "/pricing"
						},
						{
							n: `blog.${e}`,
							d: 1,
							url: "/blog"
						},
						{
							n: `dashboard.${e}`,
							d: 1,
							url: "/dashboard"
						},
						{
							n: `faq.${e}`,
							d: 1,
							url: "/faq"
						},
						{
							n: "dashboard",
							d: 1
						},
						{
							n: `index.${e}`,
							d: 2,
							url: "/dashboard"
						},
						{
							n: `settings.${e}`,
							d: 2,
							url: "/dashboard/settings"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `index.${e}`,
							d: 2,
							url: "/blog"
						},
						{
							n: `layout.${e}`,
							d: 1,
							url: "-",
							ok: false
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File Path",
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
							`app/about.${e}`,
							"/about",
							"Yes - file based creates URL"
						],
						[
							`app/contact.${e}`,
							"/contact",
							"Yes - file based creates URL"
						],
						[
							`app/blog.${e}`,
							"/blog",
							"Yes - file based creates URL"
						],
						[
							`app/dashboard/index.${e}`,
							"/dashboard",
							"Yes - index file creates URL"
						],
						[
							`app/dashboard/settings.${e}`,
							"/dashboard/settings",
							"Yes - nested file creates URL"
						],
						[
							`app/layout.${e}`,
							"-",
							"No - reserved name, no URL"
						],
						[
							`app/_components/Header.${e}`,
							"-",
							"No - private folder, no URL"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"File-based routing: flat files like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `about.${e}` }),
					" create URLs directly. Folder +",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `page.${e}` }),
					" also creates URLs but is folder-based. Reserved names like",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `layout.${e}` }),
					" never create URLs. Each valid file creates a URL."
				] })
			]
		})
	] });
}
function FileBasedRoutingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "File-Based Routing",
		description: "Flat files in src/app directly create URL routes without needing a folder.",
		url: "https://bini.js.org/docs/file-based-routing",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/file-based-routing.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/folder-based-routing",
			title: "Folder-Based Routing"
		},
		next: {
			to: "/docs/dynamic-routes",
			title: "Dynamic Routes"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { FileBasedRoutingPage as default };
