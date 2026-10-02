import{y as e}from"./index-kkU3f4ap.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-9fQggHSQ.js";import{l}from"./DocVisuals-C-Aoi6oH.js";var u=e(),d=[{id:`overview`,label:`Overview`},{id:`global-404`,label:`Global 404 Page`},{id:`nested-404`,label:`Nested 404 Pages`},{id:`programmatic-404`,label:`Programmatic 404`},{id:`404-with-layout`,label:`404 with Layout`},{id:`styling-404`,label:`Styling 404 Pages`},{id:`complete-example`,label:`Complete Example`}];function f(){let e=t()===`js`?`jsx`:`tsx`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,u.jsxs)(n,{children:[`Bini.js ships a built-in 404. Add `,(0,u.jsx)(o,{children:`not-found.${e}`}),` in any folder for custom UI when no route matches. It is a special file - it does not create a URL. Nearest-wins applies.`]}),(0,u.jsx)(r,{headers:[`File`,`Creates URL?`,`Purpose`],rows:[[`app/page.${e}`,`Yes - /`,`Home page`],[`app/not-found.${e}`,`No - special file`,`Global 404 fallback`],[`app/blog/not-found.${e}`,`No - special file`,`Blog-specific 404`]]})]}),(0,u.jsxs)(a,{id:`global-404`,title:`Global 404 Page`,children:[(0,u.jsxs)(n,{children:[`Create `,(0,u.jsx)(o,{children:`not-found.${e}`}),` at the root of `,(0,u.jsx)(o,{children:`app/`}),` to handle all unmatched routes.`]}),(0,u.jsx)(l,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`not-found.${e}`,d:1,dot:!0}]}),(0,u.jsx)(i,{filename:`app/not-found.${e}`,tsCode:`export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/">Return Home</a>
    </div>
  )
}`,jsCode:`export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <a href="/">Return Home</a>
    </div>
  )
}`}),(0,u.jsxs)(c,{children:[`Shown for unmatched paths like `,(0,u.jsx)(o,{children:`/non-existent`}),` or `,(0,u.jsx)(o,{children:`/blog/invalid-post`}),` when no closer `,(0,u.jsx)(o,{children:`not-found`}),` exists.`]})]}),(0,u.jsxs)(a,{id:`nested-404`,title:`Nested 404 Pages`,children:[(0,u.jsxs)(n,{children:[`Place `,(0,u.jsx)(o,{children:`not-found.${e}`}),` in subdirectories for segment-specific 404 UI. The closest file to the unmatched path wins.`]}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`not-found.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`admin`,d:1},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/admin`}]}),(0,u.jsx)(i,{filename:`app/blog/not-found.${e}`,tsCode:`export default function BlogNotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-3xl font-bold">Post Not Found</h1>
      <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/blog">View all posts</a>
    </div>
  )
}`,jsCode:`export default function BlogNotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-3xl font-bold">Post Not Found</h1>
      <p className="mb-6">The blog post you're looking for doesn't exist.</p>
      <a href="/blog">View all posts</a>
    </div>
  )
}`}),(0,u.jsx)(r,{headers:[`URL`,`404 Page Used`],rows:[[`/blog/non-existent`,`app/blog/not-found.${e}`],[`/admin/invalid`,`app/admin/not-found.${e}`],[`/completely/wrong`,`app/not-found.${e} (global)`]]})]}),(0,u.jsxs)(a,{id:`programmatic-404`,title:`Programmatic 404`,children:[(0,u.jsx)(n,{children:`When a route matches but data is missing, return your own not-found UI from the page component.`}),(0,u.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPost(params.slug)

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1>Post Not Found</h1>
        <p>The post &quot;{params.slug}&quot; doesn&apos;t exist.</p>
        <a href="/blog">View all posts</a>
      </div>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}`,jsCode:`export default function BlogPost({ params }) {
  const post = getPost(params.slug)

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1>Post Not Found</h1>
        <p>The post "{params.slug}" doesn't exist.</p>
        <a href="/blog">View all posts</a>
      </div>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}`})]}),(0,u.jsxs)(a,{id:`404-with-layout`,title:`404 with Layout`,children:[(0,u.jsxs)(n,{children:[(0,u.jsx)(o,{children:`not-found.${e}`}),` is rendered inside the layout chain of the segment it belongs to. Headers and sidebars stay visible.`]}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`not-found.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`}]}),(0,u.jsx)(i,{filename:`app/blog/layout.${e}`,tsCode:`export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}`,jsCode:`export default function BlogLayout({ children }) {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}`}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{children:`blog/not-found`}),` still shows the Blog header from `,(0,u.jsx)(o,{children:`blog/layout`}),`.`]})]}),(0,u.jsxs)(a,{id:`styling-404`,title:`Styling 404 Pages`,children:[(0,u.jsx)(n,{children:`Build any UI you want - copy, links, and actions are all client-side.`}),(0,u.jsx)(i,{filename:`app/not-found.${e}`,tsCode:`export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-3 text-3xl font-bold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-neutral-500">
        The page you&apos;re looking for might have been removed or doesn&apos;t exist.
      </p>
      <div className="flex gap-4">
        <a
          href="/"
          className="rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
        >
          Go Home
        </a>
        <button
          onClick={() => window.history.back()}
          className="rounded-lg border px-6 py-3"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}`,jsCode:`export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-3 text-3xl font-bold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-neutral-500">
        The page you're looking for might have been removed or doesn't exist.
      </p>
      <div className="flex gap-4">
        <a
          href="/"
          className="rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
        >
          Go Home
        </a>
        <button
          onClick={() => window.history.back()}
          className="rounded-lg border px-6 py-3"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}`})]}),(0,u.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`not-found.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`not-found.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/dashboard`},{n:`settings`,d:2},{n:`page.${e}`,d:3,url:`/dashboard/settings`}]}),(0,u.jsx)(r,{headers:[`File`,`Creates URL?`,`Purpose`],rows:[[`app/page.${e}`,`Yes - /`,`Home page`],[`app/not-found.${e}`,`No`,`Global 404`],[`app/blog/not-found.${e}`,`No`,`Blog 404`],[`app/dashboard/not-found.${e}`,`No`,`Dashboard 404`]]})]})]})}function p(){return(0,u.jsx)(s,{title:`Not Found (404)`,description:`Custom 404 UI with not-found.tsx - special file, no URL, nearest-wins.`,url:`https://bini.js.org/docs/notfound`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/notfound.tsx`,toc:d,prev:{to:`/docs/defaults`,title:`Default`},next:{to:`/docs/metadata`,title:`Metadata`},children:(0,u.jsx)(f,{})})}export{p as default};