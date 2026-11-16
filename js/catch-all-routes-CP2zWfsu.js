import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-CgTYcQET.js";import{l as u}from"./DocVisuals-B7hV1VEN.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`basic-usage`,label:`Basic Usage`},{id:`accessing-parameters`,label:`Accessing Parameters`},{id:`nested-catch-all`,label:`Nested Catch-All Routes`},{id:`optional-catch-all`,label:`Optional Catch-All Routes`},{id:`file-based-catch-all`,label:`File-Based Catch-All Routes`},{id:`route-priority`,label:`Route Priority`},{id:`use-cases`,label:`Use Cases`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`A catch-all route matches multiple URL segments in one route using `,(0,d.jsx)(o,{children:`[...name]`}),`. The optional version `,(0,d.jsx)(o,{children:`[[...name]]`}),` also matches the parent path. Both create a URL for any depth.`]}),(0,d.jsx)(u,{fileWidth:260,rows:[{n:`app`},{n:`docs`,d:1},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/docs/*`}]}),(0,d.jsx)(r,{headers:[`Pattern`,`Example URL`,`Matches`],rows:[[`[...slug]`,`/docs/api/reference`,`One or more segments`],[`[[...slug]]`,`/docs and /docs/api`,`Zero or more segments`]]}),(0,d.jsxs)(c,{children:[`For page routes, catch-all values are exposed under `,(0,d.jsx)(o,{children:`params['*']`}),`, not the name written in the folder. This is a React Router convention that Bini.js follows.`]})]}),(0,d.jsxs)(i,{id:`basic-usage`,title:`Basic Usage`,children:[(0,d.jsxs)(a,{children:[`Create a catch-all by naming a folder or file `,(0,d.jsx)(o,{children:`[...name]`}),`. It matches any depth after the parent path, but requires at least one segment.`]}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`},{n:`products`,d:1},{n:`[...path]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/products/*`}]}),(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{children:`/blog/getting-started`}),` matches `,(0,d.jsx)(o,{children:`[...slug]`}),` with one segment, and`,` `,(0,d.jsx)(o,{children:`/blog/guides/routing/basics`}),` matches with three. The param name (`,(0,d.jsx)(o,{children:`slug`}),`, `,(0,d.jsx)(o,{children:`path`}),`) is what you read from `,(0,d.jsx)(o,{children:`params['*']`}),`.`]})]}),(0,d.jsxs)(i,{id:`accessing-parameters`,title:`Accessing Parameters`,children:[(0,d.jsxs)(a,{children:[`Read the catch-all with `,(0,d.jsx)(o,{children:`useParams()`}),`. For page routes, the value is under the`,` `,(0,d.jsx)(o,{children:`'*'`}),` key. It is a string of the matched segments, joined by `,(0,d.jsx)(o,{children:`/`}),`.`]}),(0,d.jsx)(s,{filename:`src/app/docs/[...slug]/page.${e}`,tsCode:`export default function DocsPage() {
  const params = useParams()
  // For a page route, the catch-all is under params['*']
  const path = params['*'] ?? ''

  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {path}</p>
    </div>
  )
}`,jsCode:`export default function DocsPage() {
  const params = useParams()
  // For a page route, the catch-all is under params['*']
  const path = params['*'] ?? ''

  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {path}</p>
    </div>
  )
}`}),(0,d.jsx)(r,{headers:[`URL`,`params['*']`],rows:[[`/docs/getting-started`,`'getting-started'`],[`/docs/api/reference`,`'api/reference'`],[`/docs/guides/routing/basics`,`'guides/routing/basics'`]]}),(0,d.jsxs)(c,{children:[`The catch-all is a `,(0,d.jsx)(`em`,{children:`string`}),` under `,(0,d.jsx)(o,{children:`'*'`}),`, not an array. Split on`,` `,(0,d.jsx)(o,{children:`/`}),` if you need individual segments: `,(0,d.jsx)(o,{children:`params['*']?.split('/')`}),`.`]})]}),(0,d.jsxs)(i,{id:`nested-catch-all`,title:`Nested Catch-All Routes`,children:[(0,d.jsx)(a,{children:`Combine a catch-all with static and dynamic segments. Each combination creates its own URL.`}),(0,d.jsx)(u,{fileWidth:300,rows:[{n:`app`},{n:`products`,d:1},{n:`[category]`,d:2},{n:`[...slug]`,d:3},{n:`page.${e}`,d:4,dot:!0,url:`/products/:cat/*`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`}]}),(0,d.jsx)(s,{filename:`src/app/products/[category]/[...slug]/page.${e}`,tsCode:`export default function ProductPage() {
  const { category } = useParams<{ category: string }>()
  const path = useParams()['*'] ?? ''

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {path}</p>
    </div>
  )
}`,jsCode:`export default function ProductPage() {
  const { category } = useParams()
  const path = useParams()['*'] ?? ''

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {path}</p>
    </div>
  )
}`})]}),(0,d.jsxs)(i,{id:`optional-catch-all`,title:`Optional Catch-All Routes`,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{children:`[[...name]]`}),` makes the catch-all optional. It matches the parent path (zero segments) and any nested path (one or more segments).`]}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`shop`,d:1},{n:`[[...slug]]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/shop, /shop/*`}]}),(0,d.jsx)(s,{filename:`src/app/shop/[[...slug]]/page.${e}`,tsCode:`export default function ShopPage() {
  const path = useParams()['*'] ?? ''

  if (!path) {
    return <h1>Shop Home</h1>
  }

  return (
    <div>
      <h1>Category: {path}</h1>
    </div>
  )
}`,jsCode:`export default function ShopPage() {
  const path = useParams()['*'] ?? ''

  if (!path) {
    return <h1>Shop Home</h1>
  }

  return (
    <div>
      <h1>Category: {path}</h1>
    </div>
  )
}`}),(0,d.jsx)(r,{headers:[`URL`,`params['*']`,`Note`],rows:[[`/shop`,`'' (empty)`,`Parent path also matches`],[`/shop/clothing`,`'clothing'`,``],[`/shop/clothing/shirts`,`'clothing/shirts'`,``]]})]}),(0,d.jsxs)(i,{id:`file-based-catch-all`,title:`File-Based Catch-All Routes`,children:[(0,d.jsx)(a,{children:`A catch-all can be a flat file instead of a folder. It creates the same URL with less nesting.`}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`docs`,d:1},{n:`[...slug].${e}`,d:2,dot:!0,url:`/docs/*`},{n:`blog`,d:1},{n:`[...slug].${e}`,d:2,dot:!0,url:`/blog/*`}]}),(0,d.jsx)(s,{filename:`src/app/blog/[...slug].${e}`,tsCode:`export default function BlogArchive() {
  const path = useParams()['*'] ?? ''
  return <h1>Archive: {path}</h1>
}`,jsCode:`export default function BlogArchive() {
  const path = useParams()['*'] ?? ''
  return <h1>Archive: {path}</h1>
}`})]}),(0,d.jsxs)(i,{id:`route-priority`,title:`Route Priority`,children:[(0,d.jsx)(a,{children:`When multiple routes could match a URL, the more specific one wins: static routes first, then dynamic, then catch-alls.`}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`}]}),(0,d.jsx)(r,{headers:[`URL`,`Matched route`],rows:[[`/blog/featured`,`Static - featured/page.${e}`],[`/blog/hello-world`,`Dynamic - [slug]/page.${e}`],[`/blog/2024/01/hello-world`,`Catch-all - [...slug]/page.${e}`]]})]}),(0,d.jsxs)(i,{id:`use-cases`,title:`Use Cases`,children:[(0,d.jsx)(a,{children:`Catch-all routes fit any multi-segment structure where the number of segments varies.`}),(0,d.jsx)(r,{headers:[`Use case`,`Example URL`,`Route`],rows:[[`Documentation`,`/docs/guides/routing/basics`,`[...slug]`],[`E-commerce categories`,`/products/electronics/phones/iphone`,`[category]/[...slug]`],[`Blog archives`,`/blog/2024/01/hello-world`,`[...slug]`],[`Multi-language sites`,`/en/docs/getting-started`,`[locale]/[...slug]`],[`File browser`,`/files/docs/guides`,`[...path]`],[`API versioning`,`/api/v1/users/123`,`v1/[...path]`]]})]}),(0,d.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(a,{children:`A project combining static, dynamic, and catch-all routes at every level.`}),(0,d.jsx)(u,{fileWidth:300,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`},{n:`docs`,d:1},{n:`[[...slug]]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/docs, /docs/*`},{n:`products`,d:1},{n:`[category]`,d:2},{n:`[...slug]`,d:3},{n:`page.${e}`,d:4,dot:!0,url:`/products/:cat/*`}]}),(0,d.jsx)(r,{headers:[`URL`,`Matched route`],rows:[[`/blog/featured`,`Static`],[`/blog/hello-world`,`Dynamic [slug]`],[`/blog/2024/01/hello-world`,`Catch-all [...slug]`],[`/docs`,`Optional catch-all [[...slug]] (empty)`],[`/docs/guides/routing`,`Optional catch-all [[...slug]]`],[`/products/electronics/phones/iphone`,`Nested dynamic + catch-all`]]})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/dynamic-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match URL segments with dynamic parameters and catch-alls.`})]}),(0,d.jsxs)(t,{to:`/docs/intercepting-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Intercepting Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Render alternative content when navigating from within the app.`})]}),(0,d.jsxs)(t,{to:`/docs/parallel-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Parallel Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Render multiple routes in the same layout with named slots.`})]}),(0,d.jsxs)(t,{to:`/docs/folder-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Folder-Based Routing`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes with folders and page files inside them.`})]}),(0,d.jsxs)(t,{to:`/docs/mdx-markdown`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`MDX & Markdown Pages`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Write routes as .mdx or .md files.`})]}),(0,d.jsxs)(t,{to:`/docs/static-export`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Static Export`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`How every route is pre-rendered to HTML at build time.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Catch-All Routes`,description:`Match multiple URL segments with [...name] and optional [[...name]].`,url:`https://bini.js.org/docs/catch-all-routes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/catch-all-routes.tsx`,toc:f,prev:{to:`/docs/intercepting-routes`,title:`Intercepting Routes`},next:{to:`/docs/mdx-markdown`,title:`MDX & Markdown`},children:(0,d.jsx)(p,{})})}export{m as default};