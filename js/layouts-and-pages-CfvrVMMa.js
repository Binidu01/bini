import{y as e}from"./index-X2FbCJzf.js";import{_ as t,f as n,i as r,l as i,m as a,n as o,o as s,r as c}from"./DocBlocks-BIKMlDXj.js";import{l}from"./DocVisuals-IeNNYK-c.js";var u=e(),d=[{id:`creating-a-page`,label:`Creating a page`},{id:`creating-a-layout`,label:`Creating a layout`},{id:`creating-a-nested-route`,label:`Creating a nested route`},{id:`nesting-layouts`,label:`Nesting layouts`},{id:`creating-a-dynamic-segment`,label:`Creating a dynamic segment`},{id:`rendering-with-search-params`,label:`Rendering with search params`},{id:`linking-between-pages`,label:`Linking between pages`}],f=`mb-5 list-disc space-y-1 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,p=`font-semibold text-black dark:text-white`;function m({filename:e,tsCode:n,jsCode:i}){let a=t();return(0,u.jsx)(r,{filename:e,code:a===`js`?i:n})}function h(){let e=t()===`js`?`jsx`:`tsx`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`creating-a-page`,title:`Creating a page`,children:[(0,u.jsxs)(n,{children:[`A `,(0,u.jsx)(`strong`,{className:p,children:`page`}),` is UI that is rendered on a specific route. To create a page, add a `,(0,u.jsx)(o,{children:`page`}),` file inside the `,(0,u.jsx)(o,{children:`app`}),` directory and default export a React component. For example, to create an index page (`,(0,u.jsx)(o,{children:`/`}),`):`]}),(0,u.jsx)(l,{rows:[{n:`app`},{n:`page.${e}`,d:1,dot:!0,url:`/`}]}),(0,u.jsx)(m,{filename:`app/page.${e}`,tsCode:`export default function Page() {
  return <h1>Hello, World!</h1>
}`,jsCode:`export default function Page() {
  return <h1>Hello, World!</h1>
}`})]}),(0,u.jsxs)(a,{id:`creating-a-layout`,title:`Creating a layout`,children:[(0,u.jsxs)(n,{children:[`A layout is UI that is `,(0,u.jsx)(`strong`,{className:p,children:`shared`}),` between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.`]}),(0,u.jsxs)(n,{children:[`You can define a layout by default exporting a React component from a `,(0,u.jsx)(o,{children:`layout`}),` file. The component should accept a `,(0,u.jsx)(o,{children:`children`}),` prop which can be a page or another layout. The layout in `,(0,u.jsx)(o,{children:`app/layout.${e}`}),` is called the root layout. It is defined at the root of the `,(0,u.jsx)(o,{children:`app`}),` directory and wraps all routes.`]}),(0,u.jsx)(l,{rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`}]}),(0,u.jsx)(m,{filename:`app/layout.${e}`,tsCode:`export default function DashboardLayout({
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
}`,jsCode:`export default function DashboardLayout({ children }) {
  return (
    <>
      <nav>Sidebar</nav>
      <main>{children}</main>
    </>
  )
}`})]}),(0,u.jsxs)(a,{id:`creating-a-nested-route`,title:`Creating a nested route`,children:[(0,u.jsxs)(n,{children:[`A nested route is a route composed of multiple URL segments. For example, the`,` `,(0,u.jsx)(o,{children:`/blog/[slug]`}),` route is composed of three segments:`]}),(0,u.jsxs)(`ul`,{className:f,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(o,{children:`/`}),` (Root Segment)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(o,{children:`blog`}),` (Segment)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(o,{children:`[slug]`}),` (Leaf Segment)`]})]}),(0,u.jsxs)(`ul`,{className:f,children:[(0,u.jsx)(`li`,{children:`Folders are used to define the route segments that map to URL segments.`}),(0,u.jsxs)(`li`,{children:[`Files (like `,(0,u.jsx)(o,{children:`page`}),` and `,(0,u.jsx)(o,{children:`layout`}),`) are used to create UI that is shown for a segment.`]})]}),(0,u.jsxs)(n,{children:[`To create nested routes, you can nest folders inside each other. For example, to add a route for `,(0,u.jsx)(o,{children:`/blog`}),`, create a folder called `,(0,u.jsx)(o,{children:`blog`}),` in the `,(0,u.jsx)(o,{children:`app`}),` directory:`]}),(0,u.jsx)(l,{rows:[{n:`app`},{n:`blog`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/blog`}]}),(0,u.jsx)(m,{filename:`app/blog/page.${e}`,tsCode:`export default function Page() {
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
}`}),(0,u.jsxs)(n,{children:[`You can continue nesting folders to create nested routes. For example, to create a route for a specific blog post, create a new `,(0,u.jsx)(o,{children:`[slug]`}),` folder inside `,(0,u.jsx)(o,{children:`blog`}),` and add a page file:`]}),(0,u.jsx)(l,{rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/:slug`}]}),(0,u.jsx)(m,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`,jsCode:`export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}`})]}),(0,u.jsxs)(a,{id:`nesting-layouts`,title:`Nesting layouts`,children:[(0,u.jsxs)(n,{children:[`By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their `,(0,u.jsx)(o,{children:`children`}),` prop. You can nest layouts by adding `,(0,u.jsx)(o,{children:`layout`}),` `,`inside specific route segments (folders).`]}),(0,u.jsx)(l,{rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`layout.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`}]}),(0,u.jsx)(m,{filename:`app/blog/layout.${e}`,tsCode:`export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}`,jsCode:`export default function BlogLayout({ children }) {
  return <section>{children}</section>
}`}),(0,u.jsxs)(n,{children:[`If you were to combine the two layouts above, the root layout (`,(0,u.jsx)(o,{children:`app/layout.${e}`}),`) would wrap the blog layout (`,(0,u.jsx)(o,{children:`app/blog/layout.${e}`}),`), which would wrap the blog (`,(0,u.jsx)(o,{children:`app/blog/page.${e}`}),`) and blog post page (`,(0,u.jsx)(o,{children:`app/blog/[slug]/page.${e}`}),`).`]})]}),(0,u.jsxs)(a,{id:`creating-a-dynamic-segment`,title:`Creating a dynamic segment`,children:[(0,u.jsx)(n,{children:`Dynamic segments allow you to create routes that are generated from data. For example, instead of manually creating a route for each individual blog post, you can create a dynamic segment to generate the routes based on blog post data.`}),(0,u.jsxs)(n,{children:[`To create a dynamic segment, wrap the segment (folder) name in square brackets:`,` `,(0,u.jsx)(o,{children:`[segmentName]`}),`. For example, in the `,(0,u.jsx)(o,{children:`app/blog/[slug]/page.${e}`}),` route, the`,` `,(0,u.jsx)(o,{children:`[slug]`}),` is the dynamic segment.`]}),(0,u.jsx)(l,{rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/hello-world`}]}),(0,u.jsx)(m,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function BlogPostPage() {
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
}`}),(0,u.jsxs)(c,{children:[`Uses the `,(0,u.jsx)(o,{children:`useParams()`}),` hook (auto-imported). Supports `,(0,u.jsx)(o,{children:`[slug]`}),`,`,` `,(0,u.jsx)(o,{children:`[...slug]`}),` catch-all, and `,(0,u.jsx)(o,{children:`[[...slug]]`}),` optional catch-all.`]})]}),(0,u.jsxs)(a,{id:`rendering-with-search-params`,title:`Rendering with search params`,children:[(0,u.jsxs)(n,{children:[`You can access search parameters using the `,(0,u.jsx)(o,{children:`useSearchParams`}),` hook. It's auto-imported in all pages.`]}),(0,u.jsx)(m,{filename:`app/page.${e}`,tsCode:`export default function Page() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  return <div>Filter: {filter}</div>
}`,jsCode:`export default function Page() {
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  return <div>Filter: {filter}</div>
}`}),(0,u.jsx)(i,{className:`mb-3 mt-8`,children:`What to use and when`}),(0,u.jsxs)(`ul`,{className:f,children:[(0,u.jsxs)(`li`,{children:[`Use `,(0,u.jsx)(o,{children:`useSearchParams`}),` when you need search params to load data (pagination, filtering from API).`]}),(0,u.jsxs)(`li`,{children:[`Use `,(0,u.jsx)(o,{children:`useSearchParams`}),` with client filtering (filtering a list already loaded).`]}),(0,u.jsxs)(`li`,{children:[`As an optimization, you can use `,(0,u.jsx)(o,{children:`new URLSearchParams(window.location.search)`}),` in callbacks to read without re-renders.`]})]})]}),(0,u.jsxs)(a,{id:`linking-between-pages`,title:`Linking between pages`,children:[(0,u.jsxs)(n,{children:[`You can use the `,(0,u.jsx)(o,{children:`<Link>`}),` component to navigate between routes.`,` `,(0,u.jsx)(o,{children:`<Link>`}),` is a built-in component that extends the HTML `,(0,u.jsx)(o,{children:`<a>`}),` tag to provide client-side navigation without full page reloads.`]}),(0,u.jsxs)(n,{children:[`For example, to generate a list of blog posts, import `,(0,u.jsx)(o,{children:`<Link>`}),` (auto-imported) and pass a `,(0,u.jsx)(o,{children:`to`}),` prop:`]}),(0,u.jsx)(m,{filename:`app/blog/page.${e}`,tsCode:`type Post = { slug: string; title: string }

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
}`}),(0,u.jsxs)(n,{children:[`While `,(0,u.jsx)(o,{children:`<Link>`}),` is ideal for declarative navigation in your JSX, sometimes you need to navigate programmatically. Bini.js provides the `,(0,u.jsx)(o,{children:`useNavigate`}),` hook for this.`]}),(0,u.jsxs)(n,{children:[`Unlike `,(0,u.jsx)(o,{children:`<Link>`}),`, which renders an anchor tag, `,(0,u.jsx)(o,{children:`useNavigate`}),` returns a function you can call inside event handlers, effects, or after async operations. It performs a client-side navigation without a full page reload, preserving layout state and scroll position just like `,(0,u.jsx)(o,{children:`<Link>`}),`. This is perfect for post-form redirects, authentication flows, or conditional navigation where you need logic before navigating.`]}),(0,u.jsx)(m,{filename:`app/login/page.${e}`,tsCode:`export default function LoginPage() {
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
}`})]})]})}function g(){return(0,u.jsx)(s,{title:`Layouts and Pages`,description:`Uses file-system based routing, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.`,url:`https://bini.js.org/docs/layouts-and-pages`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/layouts-and-pages.tsx`,toc:d,prev:{to:`/docs/project-structure`,title:`Project Structure`},next:{to:`/docs/linking-and-navigating`,title:`Linking and Navigating`},children:(0,u.jsx)(h,{})})}export{g as default};