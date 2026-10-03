import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/dynamic-routes.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "dynamic-segments",
		label: "Dynamic Segments"
	},
	{
		id: "multiple-parameters",
		label: "Multiple Parameters"
	},
	{
		id: "dynamic-layouts",
		label: "Dynamic Segments in Layouts"
	},
	{
		id: "flat-file-dynamic",
		label: "Flat File Dynamic Routes"
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
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Dynamic routes use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[param]" }),
					" syntax to match variable segments. Each folder or file named ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[param]" }),
					" creates a URL that accepts any value for that segment and provides it via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Pattern",
						"Example URL",
						"Creates URL?"
					],
					rows: [
						[
							"[slug]",
							"/blog/hello-world",
							"Yes - dynamic creates URL"
						],
						[
							"[id]",
							"/users/123",
							"Yes - dynamic creates URL"
						],
						[
							"[category]/[slug]",
							"/blog/tech/hello-world",
							"Yes - multiple dynamic creates URL"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }),
					" is auto-imported - no import needed. Param names must match",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/^[a-zA-Z_][a-zA-Z0-9_]*$/" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "dynamic-segments",
			title: "Dynamic Segments",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Wrap folder or file name in brackets ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[name]" }),
					". Creates URL for any value."
				] }),
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
							n: "[slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/blog/:slug"
						},
						{
							n: "products",
							d: 1
						},
						{
							n: "[id]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/products/:id"
						},
						{
							n: "users",
							d: 1
						},
						{
							n: "[userId]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/users/:userId"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug]/page.${e}`,
					tsCode: `export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return <h1>Post: {slug}</h1>
}`,
					jsCode: `export default function BlogPost() {
  const { slug } = useParams()

  return <h1>Post: {slug}</h1>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/users/[id]/page.${e}`,
					tsCode: `export default function UserProfile() {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<{ name: string } | null>(null)

  useEffect(() => {
    fetchUser(id!).then(setUser)
  }, [id])

  if (!user) return null

  return <h1>{user.name}</h1>
}`,
					jsCode: `export default function UserProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser(id).then(setUser)
  }, [id])

  if (!user) return null

  return <h1>{user.name}</h1>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "multiple-parameters",
			title: "Multiple Parameters",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Multiple dynamic segments in one route. Each creates a URL part and becomes a property in",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }),
					"."
				] }),
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
							n: "[category]",
							d: 2
						},
						{
							n: "[slug]",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							dot: true,
							url: "/blog/:category/:slug"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[category]/[slug]/page.${e}`,
					tsCode: `export default function BlogPost() {
  const { category, slug } = useParams<{
    category: string
    slug: string
  }>()

  return (
    <div>
      <p>Category: {category}</p>
      <h1>Post: {slug}</h1>
    </div>
  )
}`,
					jsCode: `export default function BlogPost() {
  const { category, slug } = useParams()

  return (
    <div>
      <p>Category: {category}</p>
      <h1>Post: {slug}</h1>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"URL",
						"params",
						"Creates URL?"
					],
					rows: [[
						"/blog/tech/hello-world",
						"{ category: \"tech\", slug: \"hello-world\" }",
						"Yes"
					], [
						"/blog/lifestyle/travel",
						"{ category: \"lifestyle\", slug: \"travel\" }",
						"Yes"
					]]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "dynamic-layouts",
			title: "Dynamic Segments in Layouts",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Layouts can access dynamic params via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }),
					". The layout itself does not create a URL."
				] }),
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
							n: "[slug]",
							d: 2
						},
						{
							n: `layout.${e}`,
							d: 3,
							dot: true,
							url: "-",
							ok: false
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/:slug"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug]/layout.${e}`,
					tsCode: `export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <header>
        <h2>Post: {slug}</h2>
        <Link to="/blog">Back to blog</Link>
      </header>
      <main>{children}</main>
    </div>
  )
}`,
					jsCode: `export default function BlogLayout({ children }) {
  const { slug } = useParams()

  return (
    <div>
      <header>
        <h2>Post: {slug}</h2>
        <Link to="/blog">Back to blog</Link>
      </header>
      <main>{children}</main>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "flat-file-dynamic",
			title: "Flat File Dynamic Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Dynamic routes as flat files without folders. Each file creates a URL directly." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 260,
					rows: [
						{ n: "app" },
						{
							n: "blog",
							d: 1
						},
						{
							n: `[slug].${e}`,
							d: 2,
							dot: true,
							url: "/blog/:slug"
						},
						{
							n: "products",
							d: 1
						},
						{
							n: `[id].${e}`,
							d: 2,
							url: "/products/:id"
						},
						{
							n: "users",
							d: 1
						},
						{
							n: `[userId].${e}`,
							d: 2,
							url: "/users/:userId"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug].${e}`,
					tsCode: `export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return <h1>Post: {slug}</h1>
}`,
					jsCode: `export default function BlogPost() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "route-priority",
			title: "Route Priority",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Dynamic routes have lower priority than static routes. Static wins if both exist." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Static routes" }),
						" - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/featured" }),
						" - creates URL, highest priority"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dynamic segments" }),
						" - ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
						" → ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						" - creates URL"
					] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
					fileWidth: 260,
					rows: [
						{ n: "blog" },
						{
							n: "featured",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							dot: true,
							url: "/blog/featured"
						},
						{
							n: "[slug]",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/blog/:slug"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"URL",
						"Matched Route",
						"Creates URL?"
					],
					rows: [[
						"/blog/featured",
						`featured/page.${e} - static`,
						"Yes"
					], [
						"/blog/hello-world",
						`[slug]/page.${e} - dynamic`,
						"Yes"
					]]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Dynamic routes only - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[param]" }),
					" patterns that create URLs."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					badges: true,
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
							n: `layout.${e}`,
							d: 3,
							url: "-",
							ok: false
						},
						{
							n: `page.${e}`,
							d: 3,
							dot: true,
							url: "/blog/:slug"
						},
						{
							n: "[category]",
							d: 2
						},
						{
							n: "[slug]",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							url: "/blog/:category/:slug"
						},
						{
							n: "products",
							d: 1
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/products"
						},
						{
							n: `[id].${e}`,
							d: 2,
							url: "/products/:id"
						},
						{
							n: "users",
							d: 1
						},
						{
							n: "[userId]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/users/:userId"
						},
						{
							n: "settings",
							d: 3
						},
						{
							n: `page.${e}`,
							d: 4,
							url: "/users/:userId/settings"
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
							"Yes - static"
						],
						[
							"/blog/:slug",
							"/blog/hello-world",
							"Yes - dynamic creates URL"
						],
						[
							"/blog/:category/:slug",
							"/blog/tech/hello-world",
							"Yes - multiple dynamic creates URL"
						],
						[
							"/products/:id",
							"/products/123",
							"Yes - flat file dynamic creates URL"
						],
						[
							"/users/:userId/settings",
							"/users/john/settings",
							"Yes - nested dynamic creates URL"
						]
					]
				})
			]
		})
	] });
}
function DynamicRoutesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Dynamic Routes",
		description: "Dynamic segments [param] for parameterized URLs like /blog/:slug and /users/:id.",
		url: "https://bini.js.org/docs/dynamic-routes",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/dynamic-routes.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/file-based-routing",
			title: "File-Based Routing"
		},
		next: {
			to: "/docs/parallel-routes",
			title: "Parallel Routes"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { DynamicRoutesPage as default };
