import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/layouts-and-pages.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "creating-a-page",
		label: "Creating a page"
	},
	{
		id: "creating-a-layout",
		label: "Creating a layout"
	},
	{
		id: "creating-a-nested-route",
		label: "Creating a nested route"
	},
	{
		id: "nesting-layouts",
		label: "Nesting layouts"
	},
	{
		id: "creating-a-dynamic-segment",
		label: "Creating a dynamic segment"
	},
	{
		id: "rendering-with-search-params",
		label: "Rendering with search params"
	},
	{
		id: "linking-between-pages",
		label: "Linking between pages"
	}
];
var LIST = "mb-5 list-disc space-y-1 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400";
var STRONG = "font-semibold text-black dark:text-white";
/** CodeBlock takes a single `code` string, so pick the TS or JS variant here. */
function Code({ filename, tsCode, jsCode }) {
	const lang = useDocLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
		filename,
		code: lang === "js" ? jsCode : tsCode
	});
}
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-a-page",
			title: "Creating a page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"A ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "page"
					}),
					" is UI that is rendered on a specific route. To create a page, add a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "page" }),
					" file inside the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app" }),
					" directory and default export a React component. For example, to create an index page (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
					"):"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [{ n: "app" }, {
					n: `page.${e}`,
					d: 1,
					dot: true,
					url: "/"
				}] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/page.${e}`,
					tsCode: `export default function Page() {
  return <h1>Hello, World!</h1>
}`,
					jsCode: `export default function Page() {
  return <h1>Hello, World!</h1>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-a-layout",
			title: "Creating a layout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"A layout is UI that is ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "shared"
					}),
					" between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"You can define a layout by default exporting a React component from a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "layout" }),
					" file. The component should accept a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
					" prop which can be a page or another layout. The layout in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `app/layout.${e}` }),
					" is called the root layout. It is defined at the root of the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app" }),
					" directory and wraps all routes."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
					{ n: "app" },
					{
						n: `layout.${e}`,
						d: 1,
						dot: true
					},
					{
						n: `page.${e}`,
						d: 1,
						url: "/"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/layout.${e}`,
					tsCode: `export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Layout UI */}
      <nav>Sidebar</nav>
      <main>{children}</main>
    </>
  )
}`,
					jsCode: `export default function DashboardLayout({ children }) {
  return (
    <>
      <nav>Sidebar</nav>
      <main>{children}</main>
    </>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-a-nested-route",
			title: "Creating a nested route",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"A nested route is a route composed of multiple URL segments. For example, the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/[slug]" }),
					" route is composed of three segments:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: LIST,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }), " (Root Segment)"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog" }), " (Segment)"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }), " (Leaf Segment)"] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: LIST,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Folders are used to define the route segments that map to URL segments." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Files (like ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "page" }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "layout" }),
						") are used to create UI that is shown for a segment."
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"To create nested routes, you can nest folders inside each other. For example, to add a route for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog" }),
					", create a folder called ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog" }),
					" in the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app" }),
					" directory:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
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
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/blog/page.${e}`,
					tsCode: `export default function Page() {
  const posts = [
    { id: 1, title: 'Hello' },
    { id: 2, title: 'Getting Started' },
  ]
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`,
					jsCode: `export default function Page() {
  const posts = [
    { id: 1, title: 'Hello' },
    { id: 2, title: 'Getting Started' },
  ]
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"You can continue nesting folders to create nested routes. For example, to create a route for a specific blog post, create a new ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
					" folder inside ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog" }),
					" and add a page file:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
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
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/blog/[slug]/page.${e}`,
					tsCode: `export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`,
					jsCode: `export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nesting-layouts",
			title: "Nesting layouts",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "children" }),
					" prop. You can nest layouts by adding ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "layout" }),
					" ",
					"inside specific route segments (folders)."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
					{ n: "app" },
					{
						n: `layout.${e}`,
						d: 1,
						dot: true
					},
					{
						n: `page.${e}`,
						d: 1,
						url: "/"
					},
					{
						n: "blog",
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
						url: "/blog"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/blog/layout.${e}`,
					tsCode: `export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}`,
					jsCode: `export default function BlogLayout({ children }) {
  return <section>{children}</section>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"If you were to combine the two layouts above, the root layout (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `app/layout.${e}` }),
					") would wrap the blog layout (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `app/blog/layout.${e}` }),
					"), which would wrap the blog (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `app/blog/page.${e}` }),
					") and blog post page (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `app/blog/[slug]/page.${e}` }),
					")."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "creating-a-dynamic-segment",
			title: "Creating a dynamic segment",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Dynamic segments allow you to create routes that are generated from data. For example, instead of manually creating a route for each individual blog post, you can create a dynamic segment to generate the routes based on blog post data." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"To create a dynamic segment, wrap the segment (folder) name in square brackets:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[segmentName]" }),
					". For example, in the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `app/blog/[slug]/page.${e}` }),
					" route, the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
					" is the dynamic segment."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
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
						url: "/blog/hello-world"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/blog/[slug]/page.${e}`,
					tsCode: `export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`,
					jsCode: `export default function BlogPostPage() {
  const { slug } = useParams()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Uses the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams()" }),
					" hook (auto-imported). Supports ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...slug]" }),
					" catch-all, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[[...slug]]" }),
					" optional catch-all."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "rendering-with-search-params",
			title: "Rendering with search params",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"You can access search parameters using the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useSearchParams" }),
					" hook. It's auto-imported in all pages."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/page.${e}`,
					tsCode: `export default function Page() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  return <div>Filter: {filter}</div>
}`,
					jsCode: `export default function Page() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  return <div>Filter: {filter}</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-8",
					children: "What to use and when"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: LIST,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Use ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useSearchParams" }),
							" when you need search params to load data (pagination, filtering from API)."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Use ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useSearchParams" }),
							" with client filtering (filtering a list already loaded)."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"As an optimization, you can use ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "new URLSearchParams(window.location.search)" }),
							" in callbacks to read without re-renders."
						] })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "linking-between-pages",
			title: "Linking between pages",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"You can use the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" component to navigate between routes.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" is a built-in component that extends the HTML ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<a>" }),
					" tag to provide client-side navigation without full page reloads."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"For example, to generate a list of blog posts, import ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" (auto-imported) and pass a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "to" }),
					" prop:"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/blog/page.${e}`,
					tsCode: `type Post = { slug: string; title: string }

export default function BlogList() {
  const posts: Post[] = [
    { slug: 'hello-world', title: 'Hello, World' },
    { slug: 'getting-started', title: 'Getting Started' },
  ]
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={\`/blog/\${post.slug}\`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}`,
					jsCode: `export default function BlogList() {
  const posts = [
    { slug: 'hello-world', title: 'Hello, World' },
    { slug: 'getting-started', title: 'Getting Started' },
  ]
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={\`/blog/\${post.slug}\`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"While ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" is ideal for declarative navigation in your JSX, sometimes you need to navigate programmatically. Bini.js provides the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useNavigate" }),
					" hook for this."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Unlike ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					", which renders an anchor tag, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useNavigate" }),
					" returns a function you can call inside event handlers, effects, or after async operations. It performs a client-side navigation without a full page reload, preserving layout state and scroll position just like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					". This is perfect for post-form redirects, authentication flows, or conditional navigation where you need logic before navigating."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					filename: `app/login/page.${e}`,
					tsCode: `export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = async () => {
    await login()
    // Redirect after successful login
    navigate('/dashboard')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const result = await submitForm(formData)

    if (result.success) {
      navigate(\`/blog/\${result.slug}\`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  )
}`,
					jsCode: `export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = async () => {
    await login()
    // Redirect after successful login
    navigate('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const result = await submitForm(formData)

    if (result.success) {
      navigate(\`/blog/\${result.slug}\`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  )
}`
				})
			]
		})
	] });
}
function LayoutsAndPagesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Layouts and Pages",
		description: "Uses file-system based routing, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.",
		url: "https://bini.js.org/docs/layouts-and-pages",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/layouts-and-pages.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/project-structure",
			title: "Project Structure"
		},
		next: {
			to: "/docs/linking-and-navigating",
			title: "Linking and Navigating"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { LayoutsAndPagesPage as default };
