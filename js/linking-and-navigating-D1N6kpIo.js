import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/linking-and-navigating.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "link-component",
		label: "Link component"
	},
	{
		id: "navlink-component",
		label: "NavLink component"
	},
	{
		id: "usenavigate-hook",
		label: "useNavigate hook"
	},
	{
		id: "useparams-hook",
		label: "useParams hook"
	},
	{
		id: "uselocation-hook",
		label: "useLocation hook"
	},
	{
		id: "usesearchparams-hook",
		label: "useSearchParams hook"
	},
	{
		id: "programmatic-navigation",
		label: "Programmatic navigation"
	},
	{
		id: "navigation-query-params",
		label: "Navigation with query parameters"
	},
	{
		id: "best-practices",
		label: "Best practices"
	}
];
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "link-component",
			title: "Link component",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" component is the primary way to navigate between routes. It extends the HTML ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<a>" }),
					" tag to provide client-side navigation, and it is auto-imported in all pages and layouts."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
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
						dot: true,
						url: "/blog"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/page.${e}`,
					tsCode: `export default function Home() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}`,
					jsCode: `export default function Home() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-6",
					children: "Link props"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Prop",
						"Type",
						"Description"
					],
					rows: [
						[
							"to",
							"string",
							"The destination route path"
						],
						[
							"replace",
							"boolean",
							"Replace the current entry in history instead of adding"
						],
						[
							"state",
							"any",
							"State to persist to the location"
						],
						[
							"className",
							"string",
							"CSS class for styling"
						],
						[
							"children",
							"ReactNode",
							"The content inside the link"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "navlink-component",
			title: "NavLink component",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<NavLink>" }),
					" is a special version of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" that knows whether it matches the current route. Use it for navigation menus that need active-state styling."
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
						n: `page.${e}`,
						d: 2,
						url: "/blog"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/components/Navigation.${e}`,
					tsCode: `export default function Navigation() {
  const cls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-cyan-400' : 'text-white'

  return (
    <nav>
      <NavLink to="/" className={cls} end>Home</NavLink>
      <NavLink to="/about" className={cls}>About</NavLink>
      <NavLink to="/blog" className={cls}>Blog</NavLink>
    </nav>
  )
}`,
					jsCode: `export default function Navigation() {
  const cls = ({ isActive }) => (isActive ? 'text-cyan-400' : 'text-white')

  return (
    <nav>
      <NavLink to="/" className={cls} end>Home</NavLink>
      <NavLink to="/about" className={cls}>About</NavLink>
      <NavLink to="/blog" className={cls}>Blog</NavLink>
    </nav>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Good to know:" }),
					" Add ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "end" }),
					" to the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
					" link, otherwise it matches every route and always looks active."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-6",
					children: "NavLink props"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Prop",
						"Type",
						"Description"
					],
					rows: [
						[
							"to",
							"string",
							"The destination route path"
						],
						[
							"className",
							"function | string",
							"Function receives { isActive, isPending } or a string"
						],
						[
							"style",
							"function | object",
							"Function receives { isActive, isPending } or a style object"
						],
						[
							"children",
							"ReactNode | function",
							"Content or render function"
						],
						[
							"end",
							"boolean",
							"Only match the exact path, not child routes"
						],
						[
							"caseSensitive",
							"boolean",
							"Match case-sensitively"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "usenavigate-hook",
			title: "useNavigate hook",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useNavigate" }),
					" hook returns a function that lets you navigate programmatically. It is auto-imported in all pages."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, { rows: [
					{ n: "app" },
					{
						n: "login",
						d: 1
					},
					{
						n: `page.${e}`,
						d: 2,
						dot: true,
						url: "/login"
					},
					{
						n: "dashboard",
						d: 1
					},
					{
						n: `page.${e}`,
						d: 2,
						url: "/dashboard"
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/login/page.${e}`,
					tsCode: `export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await loginUser()
    if (success) navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  )
}`,
					jsCode: `export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await loginUser()
    if (success) navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-6",
					children: "Navigate options"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Option",
						"Type",
						"Description"
					],
					rows: [[
						"replace",
						"boolean",
						"Replace the current entry in history"
					], [
						"state",
						"any",
						"State to persist to the location"
					]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: `// Navigate with options
navigate('/profile', { replace: true, state: { from: 'login' } })

// Go back
navigate(-1)

// Go forward
navigate(1)` })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "useparams-hook",
			title: "useParams hook",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams" }),
					" hook returns an object of key/value pairs of the dynamic route parameters from the current URL. Wrap a folder name in square brackets, like",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[slug]" }),
					", to create a dynamic segment."
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug]/page.${e}`,
					tsCode: `export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`,
					jsCode: `export default function BlogPost() {
  const { slug } = useParams()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "uselocation-hook",
			title: "useLocation hook",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useLocation" }),
					" hook returns the current location object, including",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "pathname" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "search" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hash" }),
					", and any ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "state" }),
					" passed during navigation. This is useful for things like breadcrumbs."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/components/Breadcrumbs.${e}`,
					tsCode: `export default function Breadcrumbs() {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  return (
    <nav>
      <Link to="/">Home</Link>
      {segments.map((name, index) => {
        const routeTo = \`/\${segments.slice(0, index + 1).join('/')}\`
        return (
          <Link key={routeTo} to={routeTo}>
            {name}
          </Link>
        )
      })}
    </nav>
  )
}`,
					jsCode: `export default function Breadcrumbs() {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  return (
    <nav>
      <Link to="/">Home</Link>
      {segments.map((name, index) => {
        const routeTo = \`/\${segments.slice(0, index + 1).join('/')}\`
        return (
          <Link key={routeTo} to={routeTo}>
            {name}
          </Link>
        )
      })}
    </nav>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-6",
					children: "Location properties"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Property",
						"Type",
						"Description"
					],
					rows: [
						[
							"pathname",
							"string",
							"The path of the current URL"
						],
						[
							"search",
							"string",
							"The query string, including the leading ?"
						],
						[
							"hash",
							"string",
							"The URL hash, including the leading #"
						],
						[
							"state",
							"any",
							"State passed via Link or navigate"
						],
						[
							"key",
							"string",
							"A unique key for this location entry"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "usesearchparams-hook",
			title: "useSearchParams hook",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"The ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useSearchParams" }),
				" hook reads and updates the query string. It works like",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useState" }),
				": you get the current params and a function to change them."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/shop/page.${e}`,
				tsCode: `export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  return (
    <div>
      <p>Category: {category}</p>
      <button onClick={() => setSearchParams({ category: 'shoes' })}>
        Show shoes
      </button>
    </div>
  )
}`,
				jsCode: `export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  return (
    <div>
      <p>Category: {category}</p>
      <button onClick={() => setSearchParams({ category: 'shoes' })}>
        Show shoes
      </button>
    </div>
  )
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "programmatic-navigation",
			title: "Programmatic navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"While ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" is ideal for declarative navigation in your JSX, sometimes you need logic before navigating. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useNavigate" }),
					" returns a function you can call inside event handlers, effects, or after async operations. It performs the same client-side navigation as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					", preserving layout state and skipping a full page reload."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"This is a good fit for post-form redirects, authentication flows, and conditional navigation. Pass ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "replace: true" }),
					" when the user shouldn't be able to go back to the previous page, such as after logging in."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/login/page.${e}`,
					tsCode: `export default function LoginPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleLogin = async () => {
    const result = await login()
    if (!result.success) return

    // Send the user back to where they came from
    navigate(state?.from ?? '/dashboard', { replace: true })
  }

  return <button onClick={handleLogin}>Login</button>
}`,
					jsCode: `export default function LoginPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleLogin = async () => {
    const result = await login()
    if (!result.success) return

    // Send the user back to where they came from
    navigate(state?.from ?? '/dashboard', { replace: true })
  }

  return <button onClick={handleLogin}>Login</button>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "navigation-query-params",
			title: "Navigation with query parameters",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"You can include a query string directly in the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "to" }),
				" prop of ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
				" or in the path you pass to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "navigate" }),
				". The destination page reads the values with",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useSearchParams" }),
				"."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/components/Filters.${e}`,
				tsCode: `export default function Filters() {
  const navigate = useNavigate()

  return (
    <div>
      <Link to="/shop?category=shoes">Shoes</Link>
      <Link to={{ pathname: '/shop', search: '?category=hats&sort=price' }}>
        Hats
      </Link>
      <button onClick={() => navigate('/shop?category=bags')}>Bags</button>
    </div>
  )
}`,
				jsCode: `export default function Filters() {
  const navigate = useNavigate()

  return (
    <div>
      <Link to="/shop?category=shoes">Shoes</Link>
      <Link to={{ pathname: '/shop', search: '?category=hats&sort=price' }}>
        Hats
      </Link>
      <button onClick={() => navigate('/shop?category=bags')}>Bags</button>
    </div>
  )
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "best-practices",
			title: "Best practices",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Link>" }),
					" for standard navigation links."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<NavLink>" }),
					" for navigation menus that need active-state styling."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useNavigate" }),
					" for programmatic navigation, such as redirects after a form or login."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useParams" }),
					" to access dynamic route parameters."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "useSearchParams" }),
					" for managing query strings and filters."
				] })
			] })
		})
	] });
}
function LinkingAndNavigatingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Linking and Navigating",
		description: "Bini.js provides built-in navigation components and hooks for fast, client-side transitions between routes without full page reloads. This page covers how to use Link, NavLink, and the navigation hooks.",
		url: "https://bini.js.org/docs/linking-and-navigating",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/linking-and-navigating.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/layouts-and-pages",
			title: "Layouts and Pages"
		},
		next: {
			to: "/docs/folder-based-routing",
			title: "Folder-Based Routing"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { LinkingAndNavigatingPage as default };
