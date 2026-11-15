import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-L2h6_38O.js";import{l as u}from"./DocVisuals-BICpfG8q.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`global-404`,label:`Global 404 Page`},{id:`nested-404`,label:`Nested 404 Pages`},{id:`programmatic-404`,label:`Programmatic 404`},{id:`404-with-layout`,label:`404 with Layout`},{id:`styling-404`,label:`Styling 404 Pages`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`Bini.js ships a built-in 404. Add `,(0,d.jsx)(o,{children:`not-found.${e}`}),` in any folder for custom UI when no route matches. It is a special file - it does not create a URL. Nearest-wins applies.`]}),(0,d.jsx)(r,{headers:[`File`,`Purpose`],rows:[[`src/app/page.${e}`,`Home page`],[`src/app/not-found.${e}`,`Global 404 fallback`],[`src/app/blog/not-found.${e}`,`Blog-specific 404`]]})]}),(0,d.jsxs)(i,{id:`global-404`,title:`Global 404 Page`,children:[(0,d.jsxs)(a,{children:[`Create `,(0,d.jsx)(o,{children:`not-found.${e}`}),` at the root of `,(0,d.jsx)(o,{children:`app/`}),` to handle all unmatched routes.`]}),(0,d.jsx)(u,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`not-found.${e}`,d:1,dot:!0}]}),(0,d.jsx)(s,{filename:`src/app/not-found.${e}`,tsCode:`import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/">Return Home</Link>
    </div>
  )
}`,jsCode:`import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/">Return Home</Link>
    </div>
  )
}`}),(0,d.jsxs)(c,{children:[`Shown for unmatched paths like `,(0,d.jsx)(o,{children:`/non-existent`}),` or `,(0,d.jsx)(o,{children:`/blog/invalid-post`}),` when no closer `,(0,d.jsx)(o,{children:`not-found`}),` exists.`]})]}),(0,d.jsxs)(i,{id:`nested-404`,title:`Nested 404 Pages`,children:[(0,d.jsxs)(a,{children:[`Place `,(0,d.jsx)(o,{children:`not-found.${e}`}),` in subdirectories for segment-specific 404 UI. The closest file to the unmatched path wins.`]}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`not-found.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`admin`,d:1},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/admin`}]}),(0,d.jsx)(s,{filename:`src/app/blog/not-found.${e}`,tsCode:`import { Link } from 'react-router-dom'

export default function BlogNotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-3xl font-bold">Post Not Found</h1>
      <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/blog">View all posts</Link>
    </div>
  )
}`,jsCode:`import { Link } from 'react-router-dom'

export default function BlogNotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-3xl font-bold">Post Not Found</h1>
      <p className="mb-6">The blog post you're looking for doesn't exist.</p>
      <Link to="/blog">View all posts</Link>
    </div>
  )
}`}),(0,d.jsx)(r,{headers:[`URL`,`404 Page Used`],rows:[[`/blog/non-existent`,`src/app/blog/not-found.${e}`],[`/admin/invalid`,`src/app/admin/not-found.${e}`],[`/completely/wrong`,`src/app/not-found.${e} (global)`]]})]}),(0,d.jsxs)(i,{id:`programmatic-404`,title:`Programmatic 404`,children:[(0,d.jsx)(a,{children:`When a route matches but data is missing, return your own not-found UI from the page component.`}),(0,d.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`import { useParams, Link } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1>Post Not Found</h1>
        <p>The post &quot;{slug}&quot; doesn&apos;t exist.</p>
        <Link to="/blog">View all posts</Link>
      </div>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}`,jsCode:`import { useParams, Link } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1>Post Not Found</h1>
        <p>The post "{slug}" doesn't exist.</p>
        <Link to="/blog">View all posts</Link>
      </div>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}`})]}),(0,d.jsxs)(i,{id:`404-with-layout`,title:`404 with Layout`,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{children:`not-found.${e}`}),` is rendered inside the layout chain of the segment it belongs to. Headers and sidebars stay visible.`]}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`not-found.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`}]}),(0,d.jsx)(s,{filename:`src/app/blog/layout.${e}`,tsCode:`import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
      </header>
      <main><Outlet /></main>
    </div>
  )
}`,jsCode:`import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
      </header>
      <main><Outlet /></main>
    </div>
  )
}`}),(0,d.jsxs)(c,{children:[(0,d.jsx)(o,{children:`blog/not-found`}),` still shows the Blog header from `,(0,d.jsx)(o,{children:`blog/layout`}),`.`]})]}),(0,d.jsxs)(i,{id:`styling-404`,title:`Styling 404 Pages`,children:[(0,d.jsx)(a,{children:`Build any UI you want - copy, links, and actions are all client-side.`}),(0,d.jsx)(s,{filename:`src/app/not-found.${e}`,tsCode:`import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-3 text-3xl font-bold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-neutral-500">
        The page you&apos;re looking for might have been removed or doesn&apos;t exist.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
        >
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="rounded-lg border px-6 py-3"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}`,jsCode:`import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-3 text-3xl font-bold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-neutral-500">
        The page you're looking for might have been removed or doesn't exist.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
        >
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="rounded-lg border px-6 py-3"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}`})]}),(0,d.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`not-found.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/dashboard`},{n:`settings`,d:2},{n:`page.${e}`,d:3,url:`/dashboard/settings`}]}),(0,d.jsx)(r,{headers:[`File`,`Purpose`],rows:[[`src/app/page.${e}`,`Home page`],[`src/app/not-found.${e}`,`Global 404`],[`src/app/blog/not-found.${e}`,`Blog 404`],[`src/app/dashboard/not-found.${e}`,`Dashboard 404`]]})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/defaults`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Default`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fallback for a parallel route slot with no match.`})]}),(0,d.jsxs)(t,{to:`/docs/metadata`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Metadata & SEO`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Control titles, descriptions, and social previews per route.`})]}),(0,d.jsxs)(t,{to:`/docs/error-boundaries`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Error Boundaries`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Catch render errors and show a fallback UI.`})]}),(0,d.jsxs)(t,{to:`/docs/templates`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Template`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Wrap each page individually inside the layout chain.`})]}),(0,d.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,d.jsxs)(t,{to:`/docs/folder-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Folder-Based Routing`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes with folders and page files inside them.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Not Found (404)`,description:`Custom 404 UI with not-found.tsx - special file, no URL, nearest-wins.`,url:`https://bini.js.org/docs/notfound`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/notfound.tsx`,toc:f,prev:{to:`/docs/defaults`,title:`Default`},next:{to:`/docs/loaders`,title:`Loaders`},children:(0,d.jsx)(p,{})})}export{m as default};