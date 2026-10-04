import{y as e}from"./index-DgTvH8vE.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-Jip0RoZ4.js";import{l}from"./DocVisuals-DxgP9QZL.js";var u=e(),d=[{id:`overview`,label:`Overview`},{id:`what-are-catch-all-routes`,label:`What are Catch-All Routes?`},{id:`basic-usage`,label:`Basic Usage`},{id:`accessing-parameters`,label:`Accessing Parameters`},{id:`nested-catch-all`,label:`Nested Catch-All Routes`},{id:`optional-catch-all`,label:`Optional Catch-All Routes`},{id:`file-based-catch-all`,label:`File-Based Catch-All Routes`},{id:`route-priority`,label:`Route Priority`},{id:`use-cases`,label:`Use Cases`},{id:`complete-example`,label:`Complete Example`}];function f({title:e,text:t,example:n}){return(0,u.jsxs)(`div`,{className:`rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-black`,children:[(0,u.jsx)(`div`,{className:`mb-1 text-sm font-medium text-black dark:text-white`,children:e}),(0,u.jsx)(`div`,{className:`mb-2 text-xs text-neutral-500`,children:t}),(0,u.jsx)(o,{children:n})]})}function p({label:e,children:t}){return(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:e}),` `,t]})}function m(){let e=t()===`js`?`jsx`:`tsx`,s=(0,u.jsx)(l,{fileWidth:260,rows:[{n:`app`},{n:`docs`,d:1},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/docs/*`}]});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,u.jsxs)(n,{children:[`Catch-all routes match multiple URL segments in one route using `,(0,u.jsx)(o,{children:`[...name]`}),`. The param becomes an array. The optional version `,(0,u.jsx)(o,{children:`[[...name]]`}),` also matches the parent path. Each creates a URL.`]}),s,(0,u.jsx)(r,{headers:[`Pattern`,`Example URL`,`Creates URL?`],rows:[[`[...slug]`,`/docs/api/reference`,`Yes - catch-all creates URL`],[`[[...slug]]`,`/shop and /shop/clothing`,`Yes - optional catch-all creates URL`]]}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{children:`useParams()`}),` is auto-imported - no import needed to access catch-all params as an array.`]})]}),(0,u.jsxs)(a,{id:`what-are-catch-all-routes`,title:`What are Catch-All Routes?`,children:[(0,u.jsxs)(n,{children:[`Catch-all routes match any number of segments after the parent path using`,` `,(0,u.jsx)(o,{children:`[...name]`}),`. The param is an array of matched segments. Lower priority than static and single dynamic routes.`]}),(0,u.jsx)(c,{children:(0,u.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,u.jsx)(p,{label:`Matches multiple segments:`,children:`any number after the parent path`}),(0,u.jsx)(p,{label:`Array parameter:`,children:`param becomes an array of segments`}),(0,u.jsxs)(p,{label:`Lower priority:`,children:[`static and `,(0,u.jsx)(o,{children:`[slug]`}),` are matched first`]}),(0,u.jsxs)(p,{label:`Optional version:`,children:[(0,u.jsx)(o,{children:`[[...name]]`}),` for optional catch-all`]})]})}),s,(0,u.jsxs)(n,{children:[(0,u.jsx)(o,{children:`/docs/getting-started`}),` matches with `,(0,u.jsx)(o,{children:`slug = ['getting-started']`}),`,`,` `,(0,u.jsx)(o,{children:`/docs/guides/routing/basics`}),` with `,(0,u.jsx)(o,{children:`slug = ['guides', 'routing', 'basics']`}),`.`]})]}),(0,u.jsxs)(a,{id:`basic-usage`,title:`Basic Usage`,children:[(0,u.jsxs)(n,{children:[`Create a catch-all by naming a folder or file `,(0,u.jsx)(o,{children:`[...name]`}),`. Requires at least one segment. Creates a URL for any depth.`]}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`},{n:`products`,d:1},{n:`[...path]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/products/*`}]}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{children:`[...slug]`}),` requires at least one segment. Use `,(0,u.jsx)(o,{children:`[[...slug]]`}),` for an optional catch-all that also matches the parent.`]})]}),(0,u.jsxs)(a,{id:`accessing-parameters`,title:`Accessing Parameters`,children:[(0,u.jsxs)(n,{children:[`Use `,(0,u.jsx)(o,{children:`useParams()`}),` (auto-imported). The param is an array.`]}),(0,u.jsx)(i,{filename:`app/docs/[...slug]/page.${e}`,tsCode:`export default function DocsPage() {
  const { slug } = useParams()
  // slug is array of URL segments

  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Depth: {slug?.length || 0}</p>
    </div>
  )
}`,jsCode:`export default function DocsPage() {
  const { slug } = useParams()
  // slug is array of URL segments

  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Depth: {slug?.length || 0}</p>
    </div>
  )
}`}),(0,u.jsx)(r,{headers:[`URL`,`slug value`,`Creates URL?`],rows:[[`/docs/getting-started`,`['getting-started']`,`Yes`],[`/docs/api/reference`,`['api', 'reference']`,`Yes`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`,`Yes`],[`/docs/advanced/custom/hooks`,`['advanced', 'custom', 'hooks']`,`Yes`]]}),(0,u.jsx)(i,{filename:`app/blog/[...slug]/page.${e}`,tsCode:`export default function BlogArchive() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const path = slug?.join('/')
    fetchPosts(path).then(setPosts)
  }, [slug])

  return (
    <div>
      <h1>Archive: {slug?.join(' / ') || 'Home'}</h1>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}`,jsCode:`export default function BlogArchive() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const path = slug?.join('/')
    fetchPosts(path).then(setPosts)
  }, [slug])

  return (
    <div>
      <h1>Archive: {slug?.join(' / ') || 'Home'}</h1>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}`})]}),(0,u.jsxs)(a,{id:`nested-catch-all`,title:`Nested Catch-All Routes`,children:[(0,u.jsx)(n,{children:`Combine catch-all with static and dynamic segments. Each combination creates a URL.`}),(0,u.jsx)(l,{fileWidth:300,rows:[{n:`app`},{n:`products`,d:1},{n:`[category]`,d:2},{n:`[...slug]`,d:3},{n:`page.${e}`,d:4,dot:!0,url:`/products/:cat/*`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`}]}),(0,u.jsx)(i,{filename:`app/products/[category]/[...slug]/page.${e}`,tsCode:`export default function ProductPage() {
  const { category, slug } = useParams()

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Segments: {slug?.length || 0}</p>
    </div>
  )
}`,jsCode:`export default function ProductPage() {
  const { category, slug } = useParams()

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {slug?.join(' / ')}</p>
      <p>Segments: {slug?.length || 0}</p>
    </div>
  )
}`})]}),(0,u.jsxs)(a,{id:`optional-catch-all`,title:`Optional Catch-All Routes`,children:[(0,u.jsxs)(n,{children:[(0,u.jsx)(o,{children:`[[...name]]`}),` makes the catch-all optional - it matches the parent and nested paths. Creates a URL for both.`]}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`shop`,d:1},{n:`[[...slug]]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/shop, /shop/*`},{n:`docs`,d:1},{n:`[[...slug]]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/docs, /docs/*`}]}),(0,u.jsx)(i,{filename:`app/shop/[[...slug]]/page.${e}`,tsCode:`export default function ShopPage() {
  const { slug } = useParams()

  if (!slug || slug.length === 0) {
    return <h1>Shop Home</h1>
  }

  return (
    <div>
      <h1>Category: {slug.join(' / ')}</h1>
      <p>Depth: {slug.length}</p>
    </div>
  )
}`,jsCode:`export default function ShopPage() {
  const { slug } = useParams()

  if (!slug || slug.length === 0) {
    return <h1>Shop Home</h1>
  }

  return (
    <div>
      <h1>Category: {slug.join(' / ')}</h1>
      <p>Depth: {slug.length}</p>
    </div>
  )
}`}),(0,u.jsx)(r,{headers:[`URL`,`slug value`,`Creates URL?`],rows:[[`/shop`,`undefined`,`Yes - parent creates URL`],[`/shop/clothing`,`['clothing']`,`Yes`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`,`Yes`],[`/docs`,`undefined`,`Yes - parent creates URL`],[`/docs/getting-started`,`['getting-started']`,`Yes`]]}),(0,u.jsxs)(c,{children:[`Optional catch-all is ideal for docs where `,(0,u.jsx)(o,{children:`/docs`}),` shows a landing page and`,` `,(0,u.jsx)(o,{children:`/docs/getting-started`}),` shows content.`]})]}),(0,u.jsxs)(a,{id:`file-based-catch-all`,title:`File-Based Catch-All Routes`,children:[(0,u.jsx)(n,{children:`Catch-all as flat files without folders. Creates a URL directly and reduces nesting.`}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`docs`,d:1},{n:`[...slug].${e}`,d:2,dot:!0,url:`/docs/*`},{n:`shop`,d:1},{n:`[[...slug]].${e}`,d:2,dot:!0,url:`/shop, /shop/*`},{n:`blog`,d:1},{n:`[...slug].${e}`,d:2,dot:!0,url:`/blog/*`}]}),(0,u.jsx)(i,{filename:`app/blog/[...slug].${e}`,tsCode:`export default function BlogArchive() {
  const { slug } = useParams()
  return <h1>Archive: {slug?.join(' / ')}</h1>
}`,jsCode:`export default function BlogArchive() {
  const { slug } = useParams()
  return <h1>Archive: {slug?.join(' / ')}</h1>
}`})]}),(0,u.jsxs)(a,{id:`route-priority`,title:`Route Priority`,children:[(0,u.jsx)(n,{children:`Catch-all has lower priority than static and single dynamic routes. All create URLs, but static wins.`}),(0,u.jsx)(c,{children:(0,u.jsxs)(`ol`,{className:`list-decimal space-y-2 pl-5`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Static routes`}),` - `,(0,u.jsx)(o,{children:`/blog/featured`}),` - creates URL, highest priority`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Dynamic single`}),` - `,(0,u.jsx)(o,{children:`[slug]`}),` → `,(0,u.jsx)(o,{children:`/blog/:slug`}),` - creates URL`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Catch-all`}),` - `,(0,u.jsx)(o,{children:`[...slug]`}),` → `,(0,u.jsx)(o,{children:`/blog/*`}),` - creates URL`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Optional catch-all`}),` - `,(0,u.jsx)(o,{children:`[[...slug]]`}),` → `,(0,u.jsx)(o,{children:`/docs/*`}),` - creates URL, lowest`]})]})}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`}]}),(0,u.jsx)(r,{headers:[`URL`,`Matched Route`,`Creates URL?`],rows:[[`/blog/featured`,`featured/page.${e} - static`,`Yes`],[`/blog/hello-world`,`[slug]/page.${e} - dynamic`,`Yes`],[`/blog/2024/01/hello-world`,`[...slug]/page.${e} - catch-all`,`Yes`]]})]}),(0,u.jsxs)(a,{id:`use-cases`,title:`Use Cases`,children:[(0,u.jsx)(n,{children:`Catch-all routes are ideal for multi-segment structures. All create URLs.`}),(0,u.jsxs)(`div`,{className:`mb-6 grid gap-3 sm:grid-cols-2`,children:[(0,u.jsx)(f,{title:`Documentation`,text:`Multi-level docs with variable depth`,example:`/docs/guides/routing/basics`}),(0,u.jsx)(f,{title:`E-commerce Categories`,text:`Nested categories`,example:`/products/electronics/phones/iphone`}),(0,u.jsx)(f,{title:`Blog Archives`,text:`Date-based archives`,example:`/blog/2024/01/hello-world`}),(0,u.jsx)(f,{title:`Multi-language Sites`,text:`Language prefixes with variable paths`,example:`/en/docs/getting-started`})]}),(0,u.jsx)(r,{headers:[`Use Case`,`Example URL`,`Creates URL?`],rows:[[`CMS Content`,`/wiki/guides/routing`,`Yes`],[`API Versioning`,`/api/v1/users/123`,`Yes`],[`File Browser`,`/files/docs/guides`,`Yes`],[`Wiki Pages`,`/wiki/guides/routing/basics`,`Yes`]]})]}),(0,u.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsxs)(n,{children:[`Catch-all only - `,(0,u.jsx)(o,{children:`[...param]`}),` and `,(0,u.jsx)(o,{children:`[[...param]]`}),` patterns that create URLs.`]}),(0,u.jsx)(l,{fileWidth:300,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`[...slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/*`},{n:`docs`,d:1},{n:`[[...slug]]`,d:2},{n:`layout.${e}`,d:3},{n:`page.${e}`,d:3,dot:!0,url:`/docs, /docs/*`},{n:`products`,d:1},{n:`[category]`,d:2},{n:`[...slug]`,d:3},{n:`page.${e}`,d:4,dot:!0,url:`/products/:cat/*`},{n:`shop`,d:1},{n:`[[...slug]]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/shop, /shop/*`},{n:`api`,d:1},{n:`v1`,d:2},{n:`[...path].${e}`,d:3,dot:!0,url:`/api/v1/*`}]}),(0,u.jsx)(r,{headers:[`Pattern`,`Example URL`,`Creates URL?`],rows:[[`/blog/featured`,`/blog/featured`,`Yes - static creates URL`],[`/blog/:slug`,`/blog/hello-world`,`Yes - dynamic creates URL`],[`/blog/*`,`/blog/2024/01/hello-world`,`Yes - catch-all creates URL`],[`/docs/* (optional)`,`/docs`,`Yes - optional catch-all creates URL`],[`/products/:category/*`,`/products/electronics/phones/iphone`,`Yes - nested catch-all creates URL`],[`/shop/* (optional)`,`/shop/clothing/shirts`,`Yes - optional catch-all creates URL`],[`/api/v1/*`,`/api/v1/users/123`,`Yes - flat file catch-all creates URL`]]})]})]})}function h(){return(0,u.jsx)(s,{title:`Catch-All Routes`,description:`Match multiple URL segments with [...name] and optional [[...name]] - params as arrays.`,url:`https://bini.js.org/docs/catch-all-routes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/catch-all-routes.tsx`,toc:d,prev:{to:`/docs/parallel-routes`,title:`Parallel Routes`},next:{to:`/docs/mdx-markdown`,title:`MDX & Markdown`},children:(0,u.jsx)(m,{})})}export{h as default};