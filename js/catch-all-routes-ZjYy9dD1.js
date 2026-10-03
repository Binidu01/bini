import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/catch-all-routes.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "what-are-catch-all-routes",
		label: "What are Catch-All Routes?"
	},
	{
		id: "basic-usage",
		label: "Basic Usage"
	},
	{
		id: "accessing-parameters",
		label: "Accessing Parameters"
	},
	{
		id: "nested-catch-all",
		label: "Nested Catch-All Routes"
	},
	{
		id: "optional-catch-all",
		label: "Optional Catch-All Routes"
	},
	{
		id: "file-based-catch-all",
		label: "File-Based Catch-All Routes"
	},
	{
		id: "route-priority",
		label: "Route Priority"
	},
	{
		id: "use-cases",
		label: "Use Cases"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
function UseCase({ title, text, example }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-sm font-medium text-black dark:text-white",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 text-xs text-neutral-500",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: example })
		]
	});
}
function Point({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: label }),
		" ",
		children
	] });
}
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	const overview = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
		fileWidth: 260,
		rows: [
			{ n: "app" },
			{
				n: "docs",
				d: 1
			},
			{
				n: "[...slug]",
				d: 2
			},
			{
				n: `page.${e}`,
				d: 3,
				dot: true,
				url: "/docs/*"
			}
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Catch-all routes match multiple URL segments in one route using ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...name]" }),
					". The param becomes an array. The optional version ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...name]]" }),
					" also matches the parent path. Each creates a URL."
				] }),
				overview,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Pattern",
						"Example URL",
						"Creates URL?"
					],
					rows: [[
						"[...slug]",
						"/docs/api/reference",
						"Yes - catch-all creates URL"
					], [
						"[[...slug]]",
						"/shop and /shop/clothing",
						"Yes - optional catch-all creates URL"
					]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }), " is auto-imported - no import needed to access catch-all params as an array."] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-are-catch-all-routes",
			title: "What are Catch-All Routes?",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Catch-all routes match any number of segments after the parent path using",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...name]" }),
					". The param is an array of matched segments. Lower priority than static and single dynamic routes."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
							label: "Matches multiple segments:",
							children: "any number after the parent path"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
							label: "Array parameter:",
							children: "param becomes an array of segments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Point, {
							label: "Lower priority:",
							children: [
								"static and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
								" are matched first"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Point, {
							label: "Optional version:",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...name]]" }), " for optional catch-all"]
						})
					]
				}) }),
				overview,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/getting-started" }),
					" matches with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "slug = ['getting-started']" }),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/guides/routing/basics" }),
					" with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "slug = ['guides', 'routing', 'basics']" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "basic-usage",
			title: "Basic Usage",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Create a catch-all by naming a folder or file ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...name]" }),
					". Requires at least one segment. Creates a URL for any depth."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "blog",
							d: 1
						},
						{
							n: "[...slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/blog/*"
						},
						{
							n: "products",
							d: 1
						},
						{
							n: "[...path]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/products/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...slug]" }),
					" requires at least one segment. Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...slug]]" }),
					" for an optional catch-all that also matches the parent."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "accessing-parameters",
			title: "Accessing Parameters",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }),
					" (auto-imported). The param is an array."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/docs/[...slug]/page.${e}`,
					tsCode: `export default function DocsPage() {
  const { slug } = useParams()
  // slug is array of URL segments

  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Depth: {slug?.length || 0}</p>
    </div>
  )
}`,
					jsCode: `export default function DocsPage() {
  const { slug } = useParams()
  // slug is array of URL segments

  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Depth: {slug?.length || 0}</p>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"URL",
						"slug value",
						"Creates URL?"
					],
					rows: [
						[
							"/docs/getting-started",
							"['getting-started']",
							"Yes"
						],
						[
							"/docs/api/reference",
							"['api', 'reference']",
							"Yes"
						],
						[
							"/docs/guides/routing/basics",
							"['guides', 'routing', 'basics']",
							"Yes"
						],
						[
							"/docs/advanced/custom/hooks",
							"['advanced', 'custom', 'hooks']",
							"Yes"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[...slug]/page.${e}`,
					tsCode: `export default function BlogArchive() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const path = slug?.join('/')
    fetchPosts(path).then(setPosts)
  }, [slug])

  return (
    <div>
      <h1>Archive: {slug?.join(' / ') || 'Home'}</h1>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}`,
					jsCode: `export default function BlogArchive() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const path = slug?.join('/')
    fetchPosts(path).then(setPosts)
  }, [slug])

  return (
    <div>
      <h1>Archive: {slug?.join(' / ') || 'Home'}</h1>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nested-catch-all",
			title: "Nested Catch-All Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Combine catch-all with static and dynamic segments. Each combination creates a URL." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 300,
					rows: [
						{ n: "app" },
						{
							n: "products",
							d: 1
						},
						{
							n: "[category]",
							d: 2
						},
						{
							n: "[...slug]",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							dot: true,
							url: "/products/:cat/*"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: "featured",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/featured"
						},
						{
							n: "[...slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/blog/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/products/[category]/[...slug]/page.${e}`,
					tsCode: `export default function ProductPage() {
  const { category, slug } = useParams()

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Segments: {slug?.length || 0}</p>
    </div>
  )
}`,
					jsCode: `export default function ProductPage() {
  const { category, slug } = useParams()

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Segments: {slug?.length || 0}</p>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "optional-catch-all",
			title: "Optional Catch-All Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...name]]" }), " makes the catch-all optional - it matches the parent and nested paths. Creates a URL for both."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "shop",
							d: 1
						},
						{
							n: "[[...slug]]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/shop, /shop/*"
						},
						{
							n: "docs",
							d: 1
						},
						{
							n: "[[...slug]]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/docs, /docs/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/shop/[[...slug]]/page.${e}`,
					tsCode: `export default function ShopPage() {
  const { slug } = useParams()

  if (!slug || slug.length === 0) {
    return <h1>Shop Home</h1>
  }

  return (
    <div>
      <h1>Category: {slug.join(' / ')}</h1>
      <p>Depth: {slug.length}</p>
    </div>
  )
}`,
					jsCode: `export default function ShopPage() {
  const { slug } = useParams()

  if (!slug || slug.length === 0) {
    return <h1>Shop Home</h1>
  }

  return (
    <div>
      <h1>Category: {slug.join(' / ')}</h1>
      <p>Depth: {slug.length}</p>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"URL",
						"slug value",
						"Creates URL?"
					],
					rows: [
						[
							"/shop",
							"undefined",
							"Yes - parent creates URL"
						],
						[
							"/shop/clothing",
							"['clothing']",
							"Yes"
						],
						[
							"/shop/clothing/shirts",
							"['clothing', 'shirts']",
							"Yes"
						],
						[
							"/docs",
							"undefined",
							"Yes - parent creates URL"
						],
						[
							"/docs/getting-started",
							"['getting-started']",
							"Yes"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Optional catch-all is ideal for docs where ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs" }),
					" shows a landing page and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/getting-started" }),
					" shows content."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "file-based-catch-all",
			title: "File-Based Catch-All Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Catch-all as flat files without folders. Creates a URL directly and reduces nesting." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "docs",
							d: 1
						},
						{
							n: `[...slug].${e}`,
							d: 2,
							dot: true,
							url: "/docs/*"
						},
						{
							n: "shop",
							d: 1
						},
						{
							n: `[[...slug]].${e}`,
							d: 2,
							dot: true,
							url: "/shop, /shop/*"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `[...slug].${e}`,
							d: 2,
							dot: true,
							url: "/blog/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[...slug].${e}`,
					tsCode: `export default function BlogArchive() {
  const { slug } = useParams()
  return <h1>Archive: {slug?.join(' / ')}</h1>
}`,
					jsCode: `export default function BlogArchive() {
  const { slug } = useParams()
  return <h1>Archive: {slug?.join(' / ')}</h1>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "route-priority",
			title: "Route Priority",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Catch-all has lower priority than static and single dynamic routes. All create URLs, but static wins." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Static routes" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/featured" }),
							" - creates URL, highest priority"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dynamic single" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
							" → ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
							" - creates URL"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Catch-all" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...slug]" }),
							" → ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/*" }),
							" - creates URL"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Optional catch-all" }),
							" - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...slug]]" }),
							" → ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/docs/*" }),
							" - creates URL, lowest"
						] })
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 280,
					rows: [
						{ n: "app" },
						{
							n: "blog",
							d: 1
						},
						{
							n: "featured",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/featured"
						},
						{
							n: "[slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/:slug"
						},
						{
							n: "[...slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/blog/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"URL",
						"Matched Route",
						"Creates URL?"
					],
					rows: [
						[
							"/blog/featured",
							`featured/page.${e} - static`,
							"Yes"
						],
						[
							"/blog/hello-world",
							`[slug]/page.${e} - dynamic`,
							"Yes"
						],
						[
							"/blog/2024/01/hello-world",
							`[...slug]/page.${e} - catch-all`,
							"Yes"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "use-cases",
			title: "Use Cases",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Catch-all routes are ideal for multi-segment structures. All create URLs." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UseCase, {
							title: "Documentation",
							text: "Multi-level docs with variable depth",
							example: "/docs/guides/routing/basics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UseCase, {
							title: "E-commerce Categories",
							text: "Nested categories",
							example: "/products/electronics/phones/iphone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UseCase, {
							title: "Blog Archives",
							text: "Date-based archives",
							example: "/blog/2024/01/hello-world"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UseCase, {
							title: "Multi-language Sites",
							text: "Language prefixes with variable paths",
							example: "/en/docs/getting-started"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Use Case",
						"Example URL",
						"Creates URL?"
					],
					rows: [
						[
							"CMS Content",
							"/wiki/guides/routing",
							"Yes"
						],
						[
							"API Versioning",
							"/api/v1/users/123",
							"Yes"
						],
						[
							"File Browser",
							"/files/docs/guides",
							"Yes"
						],
						[
							"Wiki Pages",
							"/wiki/guides/routing/basics",
							"Yes"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Catch-all only - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...param]" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...param]]" }),
					" patterns that create URLs."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 300,
					rows: [
						{ n: "app" },
						{
							n: "blog",
							d: 1
						},
						{
							n: "featured",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/featured"
						},
						{
							n: "[slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/:slug"
						},
						{
							n: "[...slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/blog/*"
						},
						{
							n: "docs",
							d: 1
						},
						{
							n: "[[...slug]]",
							d: 2
						},
						{
							n: `layout.${e}`,
							d: 3
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/docs, /docs/*"
						},
						{
							n: "products",
							d: 1
						},
						{
							n: "[category]",
							d: 2
						},
						{
							n: "[...slug]",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							dot: true,
							url: "/products/:cat/*"
						},
						{
							n: "shop",
							d: 1
						},
						{
							n: "[[...slug]]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/shop, /shop/*"
						},
						{
							n: "api",
							d: 1
						},
						{
							n: "v1",
							d: 2
						},
						{
							n: `[...path].${e}`,
							d: 3,
							dot: true,
							url: "/api/v1/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Pattern",
						"Example URL",
						"Creates URL?"
					],
					rows: [
						[
							"/blog/featured",
							"/blog/featured",
							"Yes - static creates URL"
						],
						[
							"/blog/:slug",
							"/blog/hello-world",
							"Yes - dynamic creates URL"
						],
						[
							"/blog/*",
							"/blog/2024/01/hello-world",
							"Yes - catch-all creates URL"
						],
						[
							"/docs/* (optional)",
							"/docs",
							"Yes - optional catch-all creates URL"
						],
						[
							"/products/:category/*",
							"/products/electronics/phones/iphone",
							"Yes - nested catch-all creates URL"
						],
						[
							"/shop/* (optional)",
							"/shop/clothing/shirts",
							"Yes - optional catch-all creates URL"
						],
						[
							"/api/v1/*",
							"/api/v1/users/123",
							"Yes - flat file catch-all creates URL"
						]
					]
				})
			]
		})
	] });
}
function CatchAllRoutesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Catch-All Routes",
		description: "Match multiple URL segments with [...name] and optional [[...name]] - params as arrays.",
		url: "https://bini.js.org/docs/catch-all-routes",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/catch-all-routes.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/parallel-routes",
			title: "Parallel Routes"
		},
		next: {
			to: "/docs/mdx-markdown",
			title: "MDX & Markdown"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { CatchAllRoutesPage as default };
