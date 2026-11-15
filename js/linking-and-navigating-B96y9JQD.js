import{a as e,n as t}from"./index-DphG0dNL.js";import{_ as n,c as r,g as i,h as a,m as o,n as s,o as c,r as l,u,v as d}from"./DocBlocks-L2h6_38O.js";import{l as f}from"./DocVisuals-BICpfG8q.js";var p=e(),m=[{id:`link-component`,label:`Link component`},{id:`navlink-component`,label:`NavLink component`},{id:`usenavigate-hook`,label:`useNavigate hook`},{id:`useparams-hook`,label:`useParams hook`},{id:`uselocation-hook`,label:`useLocation hook`},{id:`usesearchparams-hook`,label:`useSearchParams hook`},{id:`navigation-query-params`,label:`Navigation with query parameters`},{id:`best-practices`,label:`Best practices`}];function h(){let e=d()===`js`?`jsx`:`tsx`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a,{id:`link-component`,title:`Link component`,children:[(0,p.jsxs)(o,{children:[`The `,(0,p.jsx)(s,{children:`<Link>`}),` component is the primary way to navigate between routes. It extends the HTML `,(0,p.jsx)(s,{children:`<a>`}),` tag to provide client-side navigation, and it is auto-imported in all pages and layouts.`]}),(0,p.jsx)(f,{rows:[{n:`app`},{n:`page.${e}`,d:1,dot:!0,url:`/`},{n:`about`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/about`},{n:`blog`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/blog`}]}),(0,p.jsx)(c,{filename:`src/app/page.${e}`,tsCode:`export default function Home() {
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
}`}),(0,p.jsxs)(o,{children:[`Bini.js prefetches the destination route on hover and focus, so navigation feels instant. Add `,(0,p.jsx)(s,{children:`data-no-prefetch`}),` to a specific link to opt out.`]}),(0,p.jsx)(u,{className:`mb-3 mt-6`,children:`Link props`}),(0,p.jsx)(i,{headers:[`Prop`,`Type`,`Description`],rows:[[`to`,`string`,`The destination route path`],[`replace`,`boolean`,`Replace the current entry in history instead of adding`],[`state`,`any`,`State to persist to the location`],[`className`,`string`,`CSS class for styling`],[`children`,`ReactNode`,`The content inside the link`]]})]}),(0,p.jsxs)(a,{id:`navlink-component`,title:`NavLink component`,children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(s,{children:`<NavLink>`}),` is a special version of `,(0,p.jsx)(s,{children:`<Link>`}),` that knows whether it matches the current route. Use it for navigation menus that need active-state styling.`]}),(0,p.jsx)(f,{rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`page.${e}`,d:2,url:`/blog`}]}),(0,p.jsx)(c,{filename:`src/app/components/Navigation.${e}`,tsCode:`export default function Navigation() {
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
}`}),(0,p.jsxs)(l,{children:[(0,p.jsx)(`strong`,{children:`Good to know:`}),` Add `,(0,p.jsx)(s,{children:`end`}),` to the `,(0,p.jsx)(s,{children:`/`}),` link, otherwise it matches every route and always looks active.`]}),(0,p.jsx)(u,{className:`mb-3 mt-6`,children:`NavLink props`}),(0,p.jsx)(i,{headers:[`Prop`,`Type`,`Description`],rows:[[`to`,`string`,`The destination route path`],[`className`,`function | string`,`Function receives { isActive, isPending } or a string`],[`style`,`function | object`,`Function receives { isActive, isPending } or a style object`],[`children`,`ReactNode | function`,`Content or render function`],[`end`,`boolean`,`Only match the exact path, not child routes`],[`caseSensitive`,`boolean`,`Match case-sensitively`]]})]}),(0,p.jsxs)(a,{id:`usenavigate-hook`,title:`useNavigate hook`,children:[(0,p.jsxs)(o,{children:[`The `,(0,p.jsx)(s,{children:`useNavigate`}),` hook returns a function that lets you navigate programmatically. It is auto-imported in all pages.`]}),(0,p.jsx)(f,{rows:[{n:`app`},{n:`login`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/login`},{n:`dashboard`,d:1},{n:`page.${e}`,d:2,url:`/dashboard`}]}),(0,p.jsx)(c,{filename:`src/app/login/page.${e}`,tsCode:`export default function LoginPage() {
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
}`}),(0,p.jsx)(u,{className:`mb-3 mt-6`,children:`Navigate options`}),(0,p.jsx)(i,{headers:[`Option`,`Type`,`Description`],rows:[[`replace`,`boolean`,`Replace the current entry in history`],[`state`,`any`,`State to persist to the location`]]}),(0,p.jsx)(c,{code:`// Navigate with options
navigate('/profile', { replace: true, state: { from: 'login' } })

// Go back
navigate(-1)

// Go forward
navigate(1)`}),(0,p.jsxs)(o,{className:`mt-4`,children:[`Because `,(0,p.jsx)(s,{children:`navigate`}),` accepts a function, you can also use it for declarative navigation. Use it when you need to redirect the user after an async action (like a login) or when a form is submitted.`]})]}),(0,p.jsxs)(a,{id:`useparams-hook`,title:`useParams hook`,children:[(0,p.jsxs)(o,{children:[`The `,(0,p.jsx)(s,{children:`useParams`}),` hook returns an object of key/value pairs of the dynamic route parameters from the current URL. Wrap a folder name in square brackets, like`,` `,(0,p.jsx)(s,{children:`[slug]`}),`, to create a dynamic segment.`]}),(0,p.jsx)(f,{rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/:slug`}]}),(0,p.jsx)(c,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export default function BlogPost() {
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
}`}),(0,p.jsxs)(l,{children:[`For catch-all routes like `,(0,p.jsx)(s,{children:`[...slug]`}),`, the value is exposed under`,` `,(0,p.jsx)(s,{children:`params['*']`}),`, not the name written in the folder.`]})]}),(0,p.jsxs)(a,{id:`uselocation-hook`,title:`useLocation hook`,children:[(0,p.jsxs)(o,{children:[`The `,(0,p.jsx)(s,{children:`useLocation`}),` hook returns the current location object, including`,` `,(0,p.jsx)(s,{children:`pathname`}),`, `,(0,p.jsx)(s,{children:`search`}),`, `,(0,p.jsx)(s,{children:`hash`}),`, and any `,(0,p.jsx)(s,{children:`state`}),` passed during navigation. This is useful for things like breadcrumbs.`]}),(0,p.jsx)(c,{filename:`src/app/components/Breadcrumbs.${e}`,tsCode:`export default function Breadcrumbs() {
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
}`}),(0,p.jsx)(u,{className:`mb-3 mt-6`,children:`Location properties`}),(0,p.jsx)(i,{headers:[`Property`,`Type`,`Description`],rows:[[`pathname`,`string`,`The path of the current URL`],[`search`,`string`,`The query string, including the leading ?`],[`hash`,`string`,`The URL hash, including the leading #`],[`state`,`any`,`State passed via Link or navigate`],[`key`,`string`,`A unique key for this location entry`]]})]}),(0,p.jsxs)(a,{id:`usesearchparams-hook`,title:`useSearchParams hook`,children:[(0,p.jsxs)(o,{children:[`The `,(0,p.jsx)(s,{children:`useSearchParams`}),` hook reads and updates the query string. It works like`,` `,(0,p.jsx)(s,{children:`useState`}),`: you get the current params and a function to change them.`]}),(0,p.jsx)(c,{filename:`src/app/shop/page.${e}`,tsCode:`export default function ShopPage() {
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
}`})]}),(0,p.jsxs)(a,{id:`navigation-query-params`,title:`Navigation with query parameters`,children:[(0,p.jsxs)(o,{children:[`You can include a query string directly in the `,(0,p.jsx)(s,{children:`to`}),` prop of `,(0,p.jsx)(s,{children:`<Link>`}),` or in the path you pass to `,(0,p.jsx)(s,{children:`navigate`}),`. The destination page reads the values with`,` `,(0,p.jsx)(s,{children:`useSearchParams`}),`.`]}),(0,p.jsx)(c,{filename:`src/app/components/Filters.${e}`,tsCode:`export default function Filters() {
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
}`})]}),(0,p.jsx)(a,{id:`best-practices`,title:`Best practices`,children:(0,p.jsxs)(n,{children:[(0,p.jsxs)(`li`,{children:[`Use `,(0,p.jsx)(s,{children:`<Link>`}),` for standard navigation links.`]}),(0,p.jsxs)(`li`,{children:[`Use `,(0,p.jsx)(s,{children:`<NavLink>`}),` for navigation menus that need active-state styling.`]}),(0,p.jsxs)(`li`,{children:[`Use `,(0,p.jsx)(s,{children:`useNavigate`}),` for programmatic navigation, such as redirects after a form or login.`]}),(0,p.jsxs)(`li`,{children:[`Use `,(0,p.jsx)(s,{children:`useParams`}),` to access dynamic route parameters.`]}),(0,p.jsxs)(`li`,{children:[`Use `,(0,p.jsx)(s,{children:`useSearchParams`}),` for managing query strings and filters.`]})]})}),(0,p.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,p.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,p.jsxs)(t,{to:`/docs/folder-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Routing`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes from the filesystem with folder-based and file-based conventions.`})]}),(0,p.jsxs)(t,{to:`/docs/dynamic-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic Routes`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match URL segments with dynamic parameters and catch-alls.`})]}),(0,p.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Add backend endpoints with plain functions or a full Hono app.`})]}),(0,p.jsxs)(t,{to:`/docs/metadata`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Metadata & SEO`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Control titles, descriptions, and social previews per route.`})]}),(0,p.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno, or build native apps in CI.`})]})]})]})}function g(){return(0,p.jsx)(r,{title:`Linking and Navigating`,description:`Bini.js provides built-in navigation components and hooks for fast, client-side transitions between routes without full page reloads. This page covers how to use Link, NavLink, and the navigation hooks.`,url:`https://bini.js.org/docs/linking-and-navigating`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/linking-and-navigating.tsx`,toc:m,prev:{to:`/docs/layouts-and-pages`,title:`Layouts and Pages`},next:{to:`/docs/folder-based-routing`,title:`Folder-Based Routing`},children:(0,p.jsx)(h,{})})}export{g as default};