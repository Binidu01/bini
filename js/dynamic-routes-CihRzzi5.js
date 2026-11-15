import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,u as l,v as u,y as d}from"./DocBlocks-L2h6_38O.js";import{l as f}from"./DocVisuals-BICpfG8q.js";var p=e(),m=[{id:`overview`,label:`Overview`},{id:`dynamic-segments`,label:`Dynamic Segments`},{id:`multiple-parameters`,label:`Multiple Parameters`},{id:`dynamic-layouts`,label:`Dynamic Segments in Layouts`},{id:`flat-file-dynamic`,label:`Flat File Dynamic Routes`},{id:`route-priority`,label:`Route Priority`},{id:`static-generation`,label:`Static Generation`},{id:`complete-example`,label:`Complete Example`}],h=(e,t,n=!0)=>e===`npm`?`npm run ${t}`:e===`bun`&&n?`bun run ${t}`:`${e} ${t}`;function g(){let e=u(),n=d(),m=e===`js`?`jsx`:`tsx`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,p.jsxs)(a,{children:[`A dynamic segment matches any value for a URL part. Wrap a folder or file name in square brackets, like `,(0,p.jsx)(o,{children:`[slug]`}),`, to create one. Read the value with`,` `,(0,p.jsx)(o,{children:`useParams()`}),`, which is auto-imported.`]}),(0,p.jsx)(r,{headers:[`Pattern`,`Example URL`,`Matches`],rows:[[`[slug]`,`/blog/hello-world`,`slug = "hello-world"`],[`[id]`,`/users/123`,`id = "123"`],[`[category]/[slug]`,`/blog/tech/hello-world`,`category = "tech", slug = "hello-world"`]]})]}),(0,p.jsxs)(i,{id:`dynamic-segments`,title:`Dynamic Segments`,children:[(0,p.jsx)(a,{children:`Wrap a folder or file name in brackets to make a dynamic segment. The same pattern works for any folder in the tree.`}),(0,p.jsx)(f,{badges:!0,fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${m}`,d:3,dot:!0,url:`/blog/:slug`},{n:`users`,d:1},{n:`[id]`,d:2},{n:`page.${m}`,d:3,url:`/users/:id`}]}),(0,p.jsx)(s,{filename:`src/app/blog/[slug]/page.${m}`,tsCode:`export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return <h1>Post: {slug}</h1>
}`,jsCode:`export default function BlogPost() {
  const { slug } = useParams()

  return <h1>Post: {slug}</h1>
}`})]}),(0,p.jsxs)(i,{id:`multiple-parameters`,title:`Multiple Parameters`,children:[(0,p.jsxs)(a,{children:[`You can nest dynamic folders. Each one becomes a property on the object returned by`,` `,(0,p.jsx)(o,{children:`useParams()`}),`.`]}),(0,p.jsx)(f,{badges:!0,fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[category]`,d:2},{n:`[slug]`,d:3},{n:`page.${m}`,d:4,dot:!0,url:`/blog/:category/:slug`}]}),(0,p.jsx)(s,{filename:`src/app/blog/[category]/[slug]/page.${m}`,tsCode:`export default function BlogPost() {
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
}`,jsCode:`export default function BlogPost() {
  const { category, slug } = useParams()

  return (
    <div>
      <p>Category: {category}</p>
      <h1>Post: {slug}</h1>
    </div>
  )
}`})]}),(0,p.jsxs)(i,{id:`dynamic-layouts`,title:`Dynamic Segments in Layouts`,children:[(0,p.jsxs)(a,{children:[`Layouts can read dynamic params too, using `,(0,p.jsx)(o,{children:`useParams()`}),`. The layout itself does not create a URL.`]}),(0,p.jsx)(f,{badges:!0,fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`layout.${m}`,d:3,url:`-`,ok:!1},{n:`page.${m}`,d:3,dot:!0,url:`/blog/:slug`}]}),(0,p.jsx)(s,{filename:`src/app/blog/[slug]/layout.${m}`,tsCode:`import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <header>
        <h2>Post: {slug}</h2>
        <Link to="/blog">Back to blog</Link>
      </header>
      <main><Outlet /></main>
    </div>
  )
}`,jsCode:`import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  const { slug } = useParams()

  return (
    <div>
      <header>
        <h2>Post: {slug}</h2>
        <Link to="/blog">Back to blog</Link>
      </header>
      <main><Outlet /></main>
    </div>
  )
}`})]}),(0,p.jsxs)(i,{id:`flat-file-dynamic`,title:`Flat File Dynamic Routes`,children:[(0,p.jsx)(a,{children:`A dynamic segment can also be a flat file, without a folder. Each file creates a URL directly.`}),(0,p.jsx)(f,{badges:!0,fileWidth:260,rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug].${m}`,d:2,dot:!0,url:`/blog/:slug`},{n:`users`,d:1},{n:`[id].${m}`,d:2,url:`/users/:id`}]}),(0,p.jsx)(s,{filename:`src/app/blog/[slug].${m}`,tsCode:`export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return <h1>Post: {slug}</h1>
}`,jsCode:`export default function BlogPost() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`})]}),(0,p.jsxs)(i,{id:`route-priority`,title:`Route Priority`,children:[(0,p.jsx)(a,{children:`When both a static route and a dynamic route match the same URL, the static route wins. Dynamic routes match only when no static route does.`}),(0,p.jsx)(f,{badges:!0,fileWidth:260,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${m}`,d:3,dot:!0,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`page.${m}`,d:3,url:`/blog/:slug`}]}),(0,p.jsx)(r,{headers:[`URL`,`Matched route`],rows:[[`/blog/featured`,`Static - featured`],[`/blog/hello-world`,`Dynamic - [slug]`]]})]}),(0,p.jsxs)(i,{id:`static-generation`,title:`Static Generation`,children:[(0,p.jsxs)(a,{children:[`During `,(0,p.jsx)(o,{children:h(n,`build`)}),`, static routes are pre-rendered to real HTML. Dynamic routes are handled in one of three ways.`]}),(0,p.jsx)(l,{className:`mt-6 mb-3`,children:`1. Shell page`}),(0,p.jsxs)(a,{children:[`By default, a dynamic route that is not pre-rendered gets a shell page at its parent path. For `,(0,p.jsx)(o,{children:`/blog/:slug`}),`, that is `,(0,p.jsx)(o,{children:`/blog/`}),`. The shell relies on the client to render the page on visit. This is the fallback for every dynamic URL that is not pre-rendered.`]}),(0,p.jsx)(l,{className:`mt-6 mb-3`,children:`2. staticParams`}),(0,p.jsxs)(a,{children:[`Export `,(0,p.jsx)(o,{children:`staticParams`}),` from the dynamic page to pre-render specific URLs. The function can be sync or async, and returns an array of objects.`]}),(0,p.jsx)(s,{filename:`src/app/blog/[slug]/page.${m}`,tsCode:`export async function staticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return <h1>Post: {slug}</h1>
}`,jsCode:`export async function staticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`}),(0,p.jsxs)(a,{children:[`The returned objects are substituted into the route pattern. For `,(0,p.jsx)(o,{children:`/blog/[slug]`}),`,`,` `,(0,p.jsx)(o,{children:`{ slug: 'hello-world' }`}),` becomes `,(0,p.jsx)(o,{children:`/blog/hello-world`}),`, which is written to`,` `,(0,p.jsx)(o,{children:`dist/blog/hello-world/index.html`}),`.`]}),(0,p.jsx)(l,{className:`mt-6 mb-3`,children:`3. Link crawling`}),(0,p.jsxs)(a,{children:[`Every page that is pre-rendered has its HTML scanned for internal `,(0,p.jsx)(o,{children:`<a href>`}),` `,`links. Each new internal link is followed and rendered, with no depth limit. So if a rendered page links to `,(0,p.jsx)(o,{children:`/blog/hello-world`}),`, that URL is pre-rendered automatically without any configuration.`]}),(0,p.jsxs)(c,{children:[`Use `,(0,p.jsx)(o,{children:`staticParams`}),` for URLs that nothing links to: a sitemap, an admin dashboard, or a dynamic route with data exports (which is client-only by default). For everything else, link crawling covers it.`]})]}),(0,p.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,p.jsx)(a,{children:`A project mixing static routes, dynamic routes, and a dynamic layout.`}),(0,p.jsx)(f,{badges:!0,fileWidth:300,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${m}`,d:3,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`layout.${m}`,d:3,url:`-`,ok:!1},{n:`page.${m}`,d:3,dot:!0,url:`/blog/:slug`},{n:`users`,d:1},{n:`[id]`,d:2},{n:`page.${m}`,d:3,url:`/users/:id`},{n:`settings`,d:3},{n:`page.${m}`,d:4,url:`/users/:id/settings`}]}),(0,p.jsx)(r,{headers:[`URL`,`Matched route`],rows:[[`/blog/featured`,`Static - featured`],[`/blog/hello-world`,`Dynamic - [slug]`],[`/users/123`,`Dynamic - [id]`],[`/users/123/settings`,`Nested dynamic - [id]/settings`]]})]}),(0,p.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,p.jsxs)(t,{to:`/docs/folder-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Folder-Based Routing`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes with folders and page files inside them.`})]}),(0,p.jsxs)(t,{to:`/docs/file-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`File-Based Routing`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes with flat files instead of folders.`})]}),(0,p.jsxs)(t,{to:`/docs/catch-all-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Catch-All Routes`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match any number of trailing URL segments.`})]}),(0,p.jsxs)(t,{to:`/docs/static-export`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Static Export`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`How every route is pre-rendered to HTML at build time.`})]}),(0,p.jsxs)(t,{to:`/docs/linking-and-navigating`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Linking and Navigating`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Navigate between routes with Link, useNavigate, and prefetching.`})]}),(0,p.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]})]})]})}function _(){return(0,p.jsx)(n,{title:`Dynamic Routes`,description:`Dynamic segments [param] for parameterized URLs like /blog/:slug and /users/:id.`,url:`https://bini.js.org/docs/dynamic-routes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/dynamic-routes.tsx`,toc:m,prev:{to:`/docs/file-based-routing`,title:`File-Based Routing`},next:{to:`/docs/parallel-routes`,title:`Parallel Routes`},children:(0,p.jsx)(g,{})})}export{_ as default};