import{y as e}from"./index-UfrPBTC9.js";import{_ as t,f as n,g as r,h as i,i as a,l as o,m as s,n as c,o as l,r as u}from"./DocBlocks-7vLhiDQN.js";import{l as d}from"./DocVisuals-Ce2L0xWH.js";var f=e(),p=[{id:`link-component`,label:`Link component`},{id:`navlink-component`,label:`NavLink component`},{id:`usenavigate-hook`,label:`useNavigate hook`},{id:`useparams-hook`,label:`useParams hook`},{id:`uselocation-hook`,label:`useLocation hook`},{id:`usesearchparams-hook`,label:`useSearchParams hook`},{id:`programmatic-navigation`,label:`Programmatic navigation`},{id:`navigation-query-params`,label:`Navigation with query parameters`},{id:`best-practices`,label:`Best practices`}];function m(){let e=t()===`js`?`jsx`:`tsx`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s,{id:`link-component`,title:`Link component`,children:[(0,f.jsxs)(n,{children:[`The `,(0,f.jsx)(c,{children:`<Link>`}),` component is the primary way to navigate between routes. It extends the HTML `,(0,f.jsx)(c,{children:`<a>`}),` tag to provide client-side navigation, and it is auto-imported in all pages and layouts.`]}),(0,f.jsx)(d,{rows:[{n:`app`},{n:`page.${e}`,d:1,dot:!0,url:`/`},{n:`about`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/about`},{n:`blog`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/blog`}]}),(0,f.jsx)(a,{filename:`app/page.${e}`,tsCode:`export default function Home() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}`,jsCode:`export default function Home() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}`}),(0,f.jsx)(o,{className:`mb-3 mt-6`,children:`Link props`}),(0,f.jsx)(i,{headers:[`Prop`,`Type`,`Description`],rows:[[`to`,`string`,`The destination route path`],[`replace`,`boolean`,`Replace the current entry in history instead of adding`],[`state`,`any`,`State to persist to the location`],[`className`,`string`,`CSS class for styling`],[`children`,`ReactNode`,`The content inside the link`]]})]}),(0,f.jsxs)(s,{id:`navlink-component`,title:`NavLink component`,children:[(0,f.jsxs)(n,{children:[(0,f.jsx)(c,{children:`<NavLink>`}),` is a special version of `,(0,f.jsx)(c,{children:`<Link>`}),` that knows whether it matches the current route. Use it for navigation menus that need active-state styling.`]}),(0,f.jsx)(d,{rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`page.${e}`,d:2,url:`/blog`}]}),(0,f.jsx)(a,{filename:`app/components/Navigation.${e}`,tsCode:`export default function Navigation() {
  const cls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-cyan-400' : 'text-white'

  return (
    <nav>
      <NavLink to="/" className={cls} end>Home</NavLink>
      <NavLink to="/about" className={cls}>About</NavLink>
      <NavLink to="/blog" className={cls}>Blog</NavLink>
    </nav>
  )
}`,jsCode:`export default function Navigation() {
  const cls = ({ isActive }) => (isActive ? 'text-cyan-400' : 'text-white')

  return (
    <nav>
      <NavLink to="/" className={cls} end>Home</NavLink>
      <NavLink to="/about" className={cls}>About</NavLink>
      <NavLink to="/blog" className={cls}>Blog</NavLink>
    </nav>
  )
}`}),(0,f.jsxs)(u,{children:[(0,f.jsx)(`strong`,{children:`Good to know:`}),` Add `,(0,f.jsx)(c,{children:`end`}),` to the `,(0,f.jsx)(c,{children:`/`}),` link, otherwise it matches every route and always looks active.`]}),(0,f.jsx)(o,{className:`mb-3 mt-6`,children:`NavLink props`}),(0,f.jsx)(i,{headers:[`Prop`,`Type`,`Description`],rows:[[`to`,`string`,`The destination route path`],[`className`,`function | string`,`Function receives { isActive, isPending } or a string`],[`style`,`function | object`,`Function receives { isActive, isPending } or a style object`],[`children`,`ReactNode | function`,`Content or render function`],[`end`,`boolean`,`Only match the exact path, not child routes`],[`caseSensitive`,`boolean`,`Match case-sensitively`]]})]}),(0,f.jsxs)(s,{id:`usenavigate-hook`,title:`useNavigate hook`,children:[(0,f.jsxs)(n,{children:[`The `,(0,f.jsx)(c,{children:`useNavigate`}),` hook returns a function that lets you navigate programmatically. It is auto-imported in all pages.`]}),(0,f.jsx)(d,{rows:[{n:`app`},{n:`login`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/login`},{n:`dashboard`,d:1},{n:`page.${e}`,d:2,url:`/dashboard`}]}),(0,f.jsx)(a,{filename:`app/login/page.${e}`,tsCode:`export default function LoginPage() {
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
}`,jsCode:`export default function LoginPage() {
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
}`}),(0,f.jsx)(o,{className:`mb-3 mt-6`,children:`Navigate options`}),(0,f.jsx)(i,{headers:[`Option`,`Type`,`Description`],rows:[[`replace`,`boolean`,`Replace the current entry in history`],[`state`,`any`,`State to persist to the location`]]}),(0,f.jsx)(a,{code:`// Navigate with options
navigate('/profile', { replace: true, state: { from: 'login' } })

// Go back
navigate(-1)

// Go forward
navigate(1)`})]}),(0,f.jsxs)(s,{id:`useparams-hook`,title:`useParams hook`,children:[(0,f.jsxs)(n,{children:[`The `,(0,f.jsx)(c,{children:`useParams`}),` hook returns an object of key/value pairs of the dynamic route parameters from the current URL. Wrap a folder name in square brackets, like`,` `,(0,f.jsx)(c,{children:`[slug]`}),`, to create a dynamic segment.`]}),(0,f.jsx)(d,{rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/:slug`}]}),(0,f.jsx)(a,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`,jsCode:`export default function BlogPost() {
  const { slug } = useParams()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`})]}),(0,f.jsxs)(s,{id:`uselocation-hook`,title:`useLocation hook`,children:[(0,f.jsxs)(n,{children:[`The `,(0,f.jsx)(c,{children:`useLocation`}),` hook returns the current location object, including`,` `,(0,f.jsx)(c,{children:`pathname`}),`, `,(0,f.jsx)(c,{children:`search`}),`, `,(0,f.jsx)(c,{children:`hash`}),`, and any `,(0,f.jsx)(c,{children:`state`}),` passed during navigation. This is useful for things like breadcrumbs.`]}),(0,f.jsx)(a,{filename:`app/components/Breadcrumbs.${e}`,tsCode:`export default function Breadcrumbs() {
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
}`,jsCode:`export default function Breadcrumbs() {
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
}`}),(0,f.jsx)(o,{className:`mb-3 mt-6`,children:`Location properties`}),(0,f.jsx)(i,{headers:[`Property`,`Type`,`Description`],rows:[[`pathname`,`string`,`The path of the current URL`],[`search`,`string`,`The query string, including the leading ?`],[`hash`,`string`,`The URL hash, including the leading #`],[`state`,`any`,`State passed via Link or navigate`],[`key`,`string`,`A unique key for this location entry`]]})]}),(0,f.jsxs)(s,{id:`usesearchparams-hook`,title:`useSearchParams hook`,children:[(0,f.jsxs)(n,{children:[`The `,(0,f.jsx)(c,{children:`useSearchParams`}),` hook reads and updates the query string. It works like`,` `,(0,f.jsx)(c,{children:`useState`}),`: you get the current params and a function to change them.`]}),(0,f.jsx)(a,{filename:`app/shop/page.${e}`,tsCode:`export default function ShopPage() {
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
}`,jsCode:`export default function ShopPage() {
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
}`})]}),(0,f.jsxs)(s,{id:`programmatic-navigation`,title:`Programmatic navigation`,children:[(0,f.jsxs)(n,{children:[`While `,(0,f.jsx)(c,{children:`<Link>`}),` is ideal for declarative navigation in your JSX, sometimes you need logic before navigating. `,(0,f.jsx)(c,{children:`useNavigate`}),` returns a function you can call inside event handlers, effects, or after async operations. It performs the same client-side navigation as `,(0,f.jsx)(c,{children:`<Link>`}),`, preserving layout state and skipping a full page reload.`]}),(0,f.jsxs)(n,{children:[`This is a good fit for post-form redirects, authentication flows, and conditional navigation. Pass `,(0,f.jsx)(c,{children:`replace: true`}),` when the user shouldn't be able to go back to the previous page, such as after logging in.`]}),(0,f.jsx)(a,{filename:`app/login/page.${e}`,tsCode:`export default function LoginPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleLogin = async () => {
    const result = await login()
    if (!result.success) return

    // Send the user back to where they came from
    navigate(state?.from ?? '/dashboard', { replace: true })
  }

  return <button onClick={handleLogin}>Login</button>
}`,jsCode:`export default function LoginPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleLogin = async () => {
    const result = await login()
    if (!result.success) return

    // Send the user back to where they came from
    navigate(state?.from ?? '/dashboard', { replace: true })
  }

  return <button onClick={handleLogin}>Login</button>
}`})]}),(0,f.jsxs)(s,{id:`navigation-query-params`,title:`Navigation with query parameters`,children:[(0,f.jsxs)(n,{children:[`You can include a query string directly in the `,(0,f.jsx)(c,{children:`to`}),` prop of `,(0,f.jsx)(c,{children:`<Link>`}),` or in the path you pass to `,(0,f.jsx)(c,{children:`navigate`}),`. The destination page reads the values with`,` `,(0,f.jsx)(c,{children:`useSearchParams`}),`.`]}),(0,f.jsx)(a,{filename:`app/components/Filters.${e}`,tsCode:`export default function Filters() {
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
}`,jsCode:`export default function Filters() {
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
}`})]}),(0,f.jsx)(s,{id:`best-practices`,title:`Best practices`,children:(0,f.jsxs)(r,{children:[(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(c,{children:`<Link>`}),` for standard navigation links.`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(c,{children:`<NavLink>`}),` for navigation menus that need active-state styling.`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(c,{children:`useNavigate`}),` for programmatic navigation, such as redirects after a form or login.`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(c,{children:`useParams`}),` to access dynamic route parameters.`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(c,{children:`useSearchParams`}),` for managing query strings and filters.`]})]})})]})}function h(){return(0,f.jsx)(l,{title:`Linking and Navigating`,description:`Bini.js provides built-in navigation components and hooks for fast, client-side transitions between routes without full page reloads. This page covers how to use Link, NavLink, and the navigation hooks.`,url:`https://bini.js.org/docs/linking-and-navigating`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/linking-and-navigating.tsx`,toc:p,prev:{to:`/docs/layouts-and-pages`,title:`Layouts and Pages`},next:{to:`/docs/folder-based-routing`,title:`Folder-Based Routing`},children:(0,f.jsx)(m,{})})}export{h as default};