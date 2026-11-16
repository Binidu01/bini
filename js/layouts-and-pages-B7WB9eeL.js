import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,h as r,m as i,n as a,o,r as s,u as c,v as l}from"./DocBlocks-CgTYcQET.js";import{l as u}from"./DocVisuals-B7hV1VEN.js";var d=e(),f=[{id:`creating-a-page`,label:`Creating a page`},{id:`creating-a-layout`,label:`Creating a layout`},{id:`creating-a-nested-route`,label:`Creating a nested route`},{id:`nesting-layouts`,label:`Nesting layouts`},{id:`creating-a-dynamic-segment`,label:`Creating a dynamic segment`},{id:`rendering-with-search-params`,label:`Rendering with search params`},{id:`linking-between-pages`,label:`Linking between pages`}],p=`mb-5 list-disc space-y-1 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,m=`font-semibold text-black dark:text-white`;function h({filename:e,tsCode:t,jsCode:n}){let r=l();return(0,d.jsx)(o,{filename:e,code:r===`js`?n:t})}function g(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r,{id:`creating-a-page`,title:`Creating a page`,children:[(0,d.jsxs)(i,{children:[`A `,(0,d.jsx)(`strong`,{className:m,children:`page`}),` is UI that is rendered on a specific route. To create a page, add a `,(0,d.jsx)(a,{children:`page`}),` file inside the `,(0,d.jsx)(a,{children:`app`}),` directory and default export a React component. For example, to create an index page (`,(0,d.jsx)(a,{children:`/`}),`):`]}),(0,d.jsx)(u,{rows:[{n:`app`},{n:`page.${e}`,d:1,dot:!0,url:`/`}]}),(0,d.jsx)(h,{filename:`app/page.${e}`,tsCode:`export default function Page() {
  return <h1>Hello, World!</h1>
}`,jsCode:`export default function Page() {
  return <h1>Hello, World!</h1>
}`})]}),(0,d.jsxs)(r,{id:`creating-a-layout`,title:`Creating a layout`,children:[(0,d.jsxs)(i,{children:[`A layout is UI that is `,(0,d.jsx)(`strong`,{className:m,children:`shared`}),` between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.`]}),(0,d.jsxs)(i,{children:[`You can define a layout by default exporting a React component from a `,(0,d.jsx)(a,{children:`layout`}),` file. The component renders an `,(0,d.jsx)(a,{children:`<Outlet />`}),`, which is where the child page or nested layout is mounted. The layout in `,(0,d.jsx)(a,{children:`app/layout.${e}`}),` is called the root layout. It is defined at the root of the `,(0,d.jsx)(a,{children:`app`}),` directory and wraps all routes.`]}),(0,d.jsx)(u,{rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`}]}),(0,d.jsx)(h,{filename:`app/layout.${e}`,tsCode:`import { Outlet } from 'react-router-dom'

export const document = {
  html: { lang: 'en' },
  body: { class: 'antialiased' },
  head: (
    <>
      <title>My App</title>
      <meta name="description" content="Built with Bini.js" />
    </>
  ),
}

export default function RootLayout() {
  return (
    <>
      <nav>Sidebar</nav>
      <main><Outlet /></main>
    </>
  )
}`,jsCode:`import { Outlet } from 'react-router-dom'

export const document = {
  html: { lang: 'en' },
  body: { class: 'antialiased' },
  head: (
    <>
      <title>My App</title>
      <meta name="description" content="Built with Bini.js" />
    </>
  ),
}

export default function RootLayout() {
  return (
    <>
      <nav>Sidebar</nav>
      <main><Outlet /></main>
    </>
  )
}`}),(0,d.jsxs)(s,{children:[`Do not render `,(0,d.jsx)(a,{children:`<html>`}),` inside a layout. A layout that returns an`,` `,(0,d.jsx)(a,{children:`<html>`}),` element is excluded from the chain. To set attributes on`,` `,(0,d.jsx)(a,{children:`<html>`}),` or `,(0,d.jsx)(a,{children:`<body>`}),`, use the `,(0,d.jsx)(a,{children:`document`}),` export.`]})]}),(0,d.jsxs)(r,{id:`creating-a-nested-route`,title:`Creating a nested route`,children:[(0,d.jsxs)(i,{children:[`A nested route is a route composed of multiple URL segments. For example, the`,` `,(0,d.jsx)(a,{children:`/blog/[slug]`}),` route is composed of three segments:`]}),(0,d.jsxs)(`ul`,{className:p,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(a,{children:`/`}),` (Root Segment)`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(a,{children:`blog`}),` (Segment)`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(a,{children:`[slug]`}),` (Leaf Segment)`]})]}),(0,d.jsxs)(`ul`,{className:p,children:[(0,d.jsx)(`li`,{children:`Folders are used to define the route segments that map to URL segments.`}),(0,d.jsxs)(`li`,{children:[`Files (like `,(0,d.jsx)(a,{children:`page`}),` and `,(0,d.jsx)(a,{children:`layout`}),`) are used to create UI that is shown for a segment.`]})]}),(0,d.jsxs)(i,{children:[`To create nested routes, you can nest folders inside each other. For example, to add a route for `,(0,d.jsx)(a,{children:`/blog`}),`, create a folder called `,(0,d.jsx)(a,{children:`blog`}),` in the `,(0,d.jsx)(a,{children:`app`}),` directory:`]}),(0,d.jsx)(u,{rows:[{n:`app`},{n:`blog`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/blog`}]}),(0,d.jsx)(h,{filename:`app/blog/page.${e}`,tsCode:`export default function Page() {
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
}`,jsCode:`export default function Page() {
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
}`}),(0,d.jsxs)(i,{children:[`You can continue nesting folders to create nested routes. For example, to create a route for a specific blog post, create a new `,(0,d.jsx)(a,{children:`[slug]`}),` folder inside `,(0,d.jsx)(a,{children:`blog`}),` and add a page file:`]}),(0,d.jsx)(u,{rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/:slug`}]}),(0,d.jsx)(h,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`,jsCode:`export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`})]}),(0,d.jsxs)(r,{id:`nesting-layouts`,title:`Nesting layouts`,children:[(0,d.jsxs)(i,{children:[`By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts through their `,(0,d.jsx)(a,{children:`<Outlet />`}),`. You can nest layouts by adding`,` `,(0,d.jsx)(a,{children:`layout`}),` inside specific route segments (folders).`]}),(0,d.jsx)(u,{rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`layout.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`}]}),(0,d.jsx)(h,{filename:`app/blog/layout.${e}`,tsCode:`import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return <section><Outlet /></section>
}`,jsCode:`import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return <section><Outlet /></section>
}`}),(0,d.jsxs)(i,{children:[`If you were to combine the two layouts above, the root layout (`,(0,d.jsx)(a,{children:`app/layout.${e}`}),`) would wrap the blog layout (`,(0,d.jsx)(a,{children:`app/blog/layout.${e}`}),`), which would wrap the blog (`,(0,d.jsx)(a,{children:`app/blog/page.${e}`}),`) and blog post page (`,(0,d.jsx)(a,{children:`app/blog/[slug]/page.${e}`}),`).`]})]}),(0,d.jsxs)(r,{id:`creating-a-dynamic-segment`,title:`Creating a dynamic segment`,children:[(0,d.jsx)(i,{children:`Dynamic segments allow you to create routes that are generated from data. For example, instead of manually creating a route for each individual blog post, you can create a dynamic segment to generate the routes based on blog post data.`}),(0,d.jsxs)(i,{children:[`To create a dynamic segment, wrap the segment (folder) name in square brackets:`,` `,(0,d.jsx)(a,{children:`[segmentName]`}),`. For example, in the `,(0,d.jsx)(a,{children:`app/blog/[slug]/page.${e}`}),` route, the`,` `,(0,d.jsx)(a,{children:`[slug]`}),` is the dynamic segment.`]}),(0,d.jsx)(u,{rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/hello-world`}]}),(0,d.jsx)(h,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`,jsCode:`export default function BlogPostPage() {
  const { slug } = useParams()

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}`}),(0,d.jsxs)(s,{children:[`Uses `,(0,d.jsx)(a,{children:`useParams()`}),` (auto-imported). Supports `,(0,d.jsx)(a,{children:`[slug]`}),`, `,(0,d.jsx)(a,{children:`[...slug]`}),` `,`catch-all, and `,(0,d.jsx)(a,{children:`[[...slug]]`}),` optional catch-all.`]})]}),(0,d.jsxs)(r,{id:`rendering-with-search-params`,title:`Rendering with search params`,children:[(0,d.jsxs)(i,{children:[`You can access search parameters using the `,(0,d.jsx)(a,{children:`useSearchParams`}),` hook. It is auto-imported in all pages.`]}),(0,d.jsx)(h,{filename:`app/page.${e}`,tsCode:`export default function Page() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  return <div>Filter: {filter}</div>
}`,jsCode:`export default function Page() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  return <div>Filter: {filter}</div>
}`}),(0,d.jsx)(c,{className:`mb-3 mt-8`,children:`What to use and when`}),(0,d.jsxs)(`ul`,{className:p,children:[(0,d.jsxs)(`li`,{children:[`Use `,(0,d.jsx)(a,{children:`useSearchParams`}),` when you need search params to load data (pagination, filtering from API).`]}),(0,d.jsxs)(`li`,{children:[`Use `,(0,d.jsx)(a,{children:`useSearchParams`}),` with client filtering (filtering a list already loaded).`]}),(0,d.jsxs)(`li`,{children:[`As an optimization, you can use `,(0,d.jsx)(a,{children:`new URLSearchParams(window.location.search)`}),` in callbacks to read without re-renders.`]})]})]}),(0,d.jsxs)(r,{id:`linking-between-pages`,title:`Linking between pages`,children:[(0,d.jsxs)(i,{children:[`You can use the `,(0,d.jsx)(a,{children:`<Link>`}),` component to navigate between routes.`,` `,(0,d.jsx)(a,{children:`<Link>`}),` is a built-in component that extends the HTML `,(0,d.jsx)(a,{children:`<a>`}),` tag to provide client-side navigation without full page reloads.`]}),(0,d.jsxs)(i,{children:[`For example, to generate a list of blog posts, import `,(0,d.jsx)(a,{children:`<Link>`}),` (auto-imported) and pass a `,(0,d.jsx)(a,{children:`to`}),` prop:`]}),(0,d.jsx)(h,{filename:`app/blog/page.${e}`,tsCode:`type Post = { slug: string; title: string }

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
}`,jsCode:`export default function BlogList() {
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
}`}),(0,d.jsxs)(i,{children:[`While `,(0,d.jsx)(a,{children:`<Link>`}),` is ideal for declarative navigation in your JSX, sometimes you need to navigate programmatically. Bini.js provides the `,(0,d.jsx)(a,{children:`useNavigate`}),` hook for this.`]}),(0,d.jsxs)(i,{children:[`Unlike `,(0,d.jsx)(a,{children:`<Link>`}),`, which renders an anchor tag, `,(0,d.jsx)(a,{children:`useNavigate`}),` returns a function you can call inside event handlers, effects, or after async operations. It performs a client-side navigation without a full page reload, preserving layout state and scroll position just like `,(0,d.jsx)(a,{children:`<Link>`}),`. This is perfect for post-form redirects, authentication flows, or conditional navigation where you need logic before navigating.`]}),(0,d.jsx)(h,{filename:`app/login/page.${e}`,tsCode:`export default function LoginPage() {
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
}`,jsCode:`export default function LoginPage() {
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
}`})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/folder-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Routing`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes from the filesystem with folder-based and file-based conventions.`})]}),(0,d.jsxs)(t,{to:`/docs/linking-and-navigating`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Linking and Navigating`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Navigate between routes with Link, useNavigate, and prefetching.`})]}),(0,d.jsxs)(t,{to:`/docs/load`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loading UI`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Show a fallback while pages and layouts load.`})]}),(0,d.jsxs)(t,{to:`/docs/error-boundaries`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Error Boundaries`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Catch render errors and show a fallback UI.`})]}),(0,d.jsxs)(t,{to:`/docs/loaders`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loaders`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fetch data before a route renders.`})]}),(0,d.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Add backend endpoints with plain functions or a full Hono app.`})]})]})]})}function _(){return(0,d.jsx)(n,{title:`Layouts and Pages`,description:`Uses file-system based routing, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.`,url:`https://bini.js.org/docs/layouts-and-pages`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/layouts-and-pages.tsx`,toc:f,prev:{to:`/docs/project-structure`,title:`Project Structure`},next:{to:`/docs/linking-and-navigating`,title:`Linking and Navigating`},children:(0,d.jsx)(g,{})})}export{_ as default};