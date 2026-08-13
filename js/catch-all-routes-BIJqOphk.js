import{a as e,i as t,n,t as r}from"./index-1E-q3Iys.js";import{n as i,v as a}from"./Layout-ChwvkThl.js";import{t as o}from"./arrow-left-DMGrZrSk.js";import{t as s}from"./arrow-right-DY1by02V.js";import{t as c}from"./check-rBJGxEuW.js";import{t as l}from"./DocSidebar-C0oLvw6m.js";import{t as u}from"./copy-CHvyM9AS.js";import{t as d}from"./file-C54iZV-J.js";import{t as f}from"./info-zC1a86uY.js";import{n as p,t as m}from"./TableOfContents-DONePU3w.js";var h=e(t(),1),g=r(),_=[{id:`overview`,label:`Overview`},{id:`what-are-catch-all-routes`,label:`What are Catch-All Routes?`},{id:`basic-usage`,label:`Basic Usage`},{id:`accessing-parameters`,label:`Accessing Parameters`},{id:`nested-catch-all`,label:`Nested Catch-All Routes`},{id:`optional-catch-all`,label:`Optional Catch-All Routes`},{id:`file-based-catch-all`,label:`File-Based Catch-All Routes`},{id:`route-priority`,label:`Route Priority`},{id:`use-cases`,label:`Use Cases`},{id:`complete-example`,label:`Complete Example`}],v=`Catch-All Routes`,y=`https://bini.js.org/docs/catch-all-routes`,b=`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/catch-all-routes.tsx`;function x({code:e,filename:t}){let[n,r]=(0,h.useState)(!1);return(0,g.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,g.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,g.jsxs)(`span`,{className:`text-sm text-slate-300 font-mono flex items-center gap-2`,children:[(0,g.jsx)(d,{className:`w-3.5 h-3.5 text-cyan-400`}),t]})}),(0,g.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,g.jsx)(c,{className:`w-3.5 h-3.5 text-green-400`}):(0,g.jsx)(u,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,g.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,g.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,g.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function S({tree:e}){return(0,g.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 rounded-lg p-4 mb-6 font-mono text-sm`,children:(0,g.jsx)(`div`,{className:`text-slate-200 whitespace-pre`,children:e})})}function C({headers:e,rows:t}){return(0,g.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,g.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,g.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,g.jsx)(`tr`,{children:e.map((e,t)=>(0,g.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,g.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,g.jsx)(`tr`,{children:e.map((e,t)=>(0,g.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function w({children:e}){return(0,g.jsxs)(`div`,{className:`flex items-start gap-3 p-4 rounded-lg border border-slate-700 bg-slate-900/50 my-6`,children:[(0,g.jsx)(f,{className:`w-5 h-5 text-cyan-400 shrink-0 mt-0.5`}),(0,g.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})]})}function T({title:e,description:t}){return(0,g.jsxs)(`div`,{className:`p-4 rounded-xl border border-slate-700 bg-[#0a0a0a] hover:border-slate-600 transition-colors`,children:[(0,g.jsx)(`div`,{className:`mb-2`,children:(0,g.jsx)(`span`,{className:`text-white font-medium text-sm`,children:e})}),(0,g.jsx)(`p`,{className:`text-slate-400 text-xs`,children:t})]})}function E(){return(0,g.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,g.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`text-white font-medium`,children:`Static routes`}),(0,g.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[`exact matches — e.g., `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/featured`})]})]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`text-white font-medium`,children:`Dynamic single segments`}),(0,g.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`}),` — e.g., `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/:slug`})]})]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`text-white font-medium`,children:`Catch-all segments`}),(0,g.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`}),` — e.g., `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/*`})]})]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`text-white font-medium`,children:`Optional catch-all segments`}),(0,g.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`}),` — e.g., `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/docs/*`}),` (optional)`]})]})]})})}function D({title:e,description:t,example:n}){return(0,g.jsxs)(`div`,{className:`p-4 rounded-xl border border-slate-700 bg-[#0a0a0a] hover:border-slate-600 transition-colors`,children:[(0,g.jsx)(`div`,{className:`mb-2`,children:(0,g.jsx)(`span`,{className:`text-white font-medium text-sm`,children:e})}),(0,g.jsx)(`p`,{className:`text-slate-400 text-xs mb-2`,children:t}),(0,g.jsx)(`code`,{className:`text-cyan-400 text-xs bg-slate-900/50 px-2 py-1 rounded`,children:n})]})}function O(){return(0,g.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,g.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,g.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,g.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,g.jsx)(i,{}),(0,g.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,g.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,g.jsx)(l,{children:(0,g.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,g.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,g.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:v}),(0,g.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to use catch-all routes to match multiple URL segments in Bini.js. Perfect for documentation, nested categories, and flexible URL structures.`})]}),(0,g.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,g.jsx)(p,{pageUrl:y,pageTitle:v})})]}),(0,g.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,g.jsx)(p,{pageUrl:y,pageTitle:v})}),(0,g.jsxs)(a.section,{id:`overview`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Overview`}),(0,g.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Catch-all routes allow you to match multiple URL segments in a single route. They are defined using the `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` syntax, where the parameter becomes an array of the matched segments.`]}),(0,g.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mb-6`,children:[(0,g.jsx)(T,{title:`Variable Depth`,description:`Match any number of URL segments`}),(0,g.jsx)(T,{title:`Array Parameters`,description:`Access segments as an array`}),(0,g.jsx)(T,{title:`Flexible Structure`,description:`Perfect for documentation and nested categories`}),(0,g.jsx)(T,{title:`Multi-language`,description:`Handle language prefixes with variable paths`})]}),(0,g.jsxs)(w,{children:[(0,g.jsx)(`strong`,{children:`Auto-import:`}),` `,(0,g.jsx)(`code`,{children:`useParams()`}),` is auto-imported in all pages — no import statement needed to access catch-all parameters.`]})]}),(0,g.jsxs)(a.section,{id:`what-are-catch-all-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`What are Catch-All Routes?`}),(0,g.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Catch-all routes are a powerful feature that allows you to match any number of URL segments after a specific path. They are defined using the `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` syntax in folder or file names.`]}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Key Characteristics`}),(0,g.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`Matches multiple segments:`}),` Any number of URL segments after the parent path`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`Array parameter:`}),` The parameter becomes an array of all matched segments`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`Lower priority:`}),` Static and dynamic routes are matched first`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`Optional version:`}),` Use `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` for optional catch-all`]})]}),(0,g.jsx)(S,{tree:`src/app/
└── docs/
    └── [...slug]/
        └── page.tsx       → /docs/getting-started
                            → /docs/api/reference
                            → /docs/guides/routing/basics`}),(0,g.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`In this example, `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/docs/getting-started`}),` matches with `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`slug = ['getting-started']`}),`, while `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/docs/guides/routing/basics`}),` matches with `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`slug = ['guides', 'routing', 'basics']`}),`.`]})]}),(0,g.jsxs)(a.section,{id:`basic-usage`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,g.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a catch-all route by naming a folder or file with square brackets and three dots: `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),`.`]}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Catch-All Examples`}),(0,g.jsx)(S,{tree:`src/app/
├── blog/
│   └── [...slug]/
│       └── page.tsx       → /blog/a/b/c
│                           → /blog/2024/01/hello-world
├── products/
│   └── [...path]/
│       └── page.tsx       → /products/electronics/phones
│                           → /products/clothing/men/shirts
└── users/
    └── [...ids]/
        └── page.tsx       → /users/1/2/3`}),(0,g.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The route will match any URL that starts with the parent path and has at least one segment. This is different from optional catch-all routes, which match even with zero segments.`}),(0,g.jsxs)(w,{children:[(0,g.jsx)(`strong`,{children:`At least one segment required:`}),` A regular catch-all route `,(0,g.jsx)(`code`,{children:`[...slug]`}),` requires at least one segment. Use `,(0,g.jsx)(`code`,{children:`[[...slug]]`}),` for optional catch-all that matches the parent path too.`]})]}),(0,g.jsxs)(a.section,{id:`accessing-parameters`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Accessing Parameters`}),(0,g.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),` (auto-imported) to access the catch-all parameter as an array. The parameter name becomes a property on the params object.`]}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Basic Access`}),(0,g.jsx)(x,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array of the URL segments
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Documentation</h1>
      <p className="text-slate-400">Path: {slug?.join(' / ')}</p>
      <p className="text-slate-400">Depth: {slug?.length || 0}</p>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,g.jsx)(C,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`],[`/docs/advanced/custom/hooks`,`['advanced', 'custom', 'hooks']`]]}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With Data Fetching`}),(0,g.jsx)(x,{code:`// src/app/blog/[...slug]/page.tsx
export default function BlogArchive() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    // Fetch posts based on the path segments
    const path = slug?.join('/')
    fetchPosts(path).then(setPosts)
  }, [slug])
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">
        Archive: {slug?.join(' / ') || 'Home'}
      </h1>
      <div className="space-y-2">
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-slate-900/50 rounded">
            <h2 className="text-white font-medium">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}`,filename:`app/blog/[...slug]/page.tsx`})]}),(0,g.jsxs)(a.section,{id:`nested-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Catch-All Routes`}),(0,g.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes can be combined with other dynamic and static segments to create complex routing patterns.`}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Combining with Dynamic Segments`}),(0,g.jsx)(S,{tree:`src/app/
├── blog/
│   ├── featured/
│   │   └── page.tsx       → /blog/featured (static - highest priority)
│   └── [...slug]/
│       └── page.tsx       → /blog/a/b/c (catch-all)
├── products/
│   └── [category]/
│       └── [...slug]/
│           └── page.tsx   → /products/electronics/phones/iphone
│                           → /products/clothing/men/shirts
└── users/
    └── [userId]/
        └── [...posts]/
            └── page.tsx   → /users/john/posts/1`}),(0,g.jsx)(x,{code:`// src/app/products/[category]/[...slug]/page.tsx
export default function ProductPage() {
  const { category, slug } = useParams()
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Category: {category}</h1>
      <p className="text-slate-400">Path: {slug?.join(' / ')}</p>
      <p className="text-slate-400">Segments: {slug?.length || 0}</p>
    </div>
  )
}`,filename:`app/products/[category]/[...slug]/page.tsx`})]}),(0,g.jsxs)(a.section,{id:`optional-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-All Routes`}),(0,g.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` to make the catch-all optional. The route will match both the parent path and any nested paths.`]}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Optional Catch-All Example`}),(0,g.jsx)(S,{tree:`src/app/
├── shop/
│   └── [[...slug]]/
│       └── page.tsx       → /shop
│                           → /shop/clothing
│                           → /shop/clothing/shirts
└── docs/
    └── [[...path]]/
        └── page.tsx       → /docs
                            → /docs/getting-started
                            → /docs/api/reference`}),(0,g.jsx)(x,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  
  if (!slug || slug.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-white">Shop Home</h1>
        <p className="text-slate-400">Browse all categories</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">
        Category: {slug.join(' / ')}
      </h1>
      <p className="text-slate-400">Depth: {slug.length}</p>
    </div>
  )
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,g.jsx)(C,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined (or empty array)`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`]]}),(0,g.jsxs)(w,{children:[(0,g.jsx)(`strong`,{children:`Use case:`}),` Optional catch-all routes are perfect for documentation pages where the root path (`,(0,g.jsx)(`code`,{children:`/docs`}),`) should show a landing page, and nested paths (`,(0,g.jsx)(`code`,{children:`/docs/getting-started`}),`) show specific content.`]})]}),(0,g.jsxs)(a.section,{id:`file-based-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File-Based Catch-All Routes`}),(0,g.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes can also be defined as flat files without folders. This reduces folder nesting for simpler use cases.`}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Examples`}),(0,g.jsx)(S,{tree:`src/app/
├── docs/
│   └── [...slug].tsx      → /docs/getting-started
│                           → /docs/api/reference
├── products/
│   └── [...path].tsx      → /products/electronics/phones
│                           → /products/clothing/men
└── blog/
    └── [...slug].tsx      → /blog/2024/01/hello-world`}),(0,g.jsx)(x,{code:`// src/app/blog/[...slug].tsx
export default function BlogArchive() {
  const { slug } = useParams()
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Blog Archive</h1>
      <p className="text-slate-400">Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/blog/[...slug].tsx`})]}),(0,g.jsxs)(a.section,{id:`route-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,g.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes have lower priority than static routes and dynamic single segments. The router resolves matches in this order:`}),(0,g.jsx)(E,{}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Priority Example`}),(0,g.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Consider this folder structure with overlapping routes:`}),(0,g.jsx)(S,{tree:`src/app/blog/
├── featured/
│   └── page.tsx           → /blog/featured (static - highest priority)
├── [slug]/
│   └── page.tsx           → /blog/hello-world (dynamic)
└── [...slug]/
    └── page.tsx           → /blog/2024/01/hello-world (catch-all)`}),(0,g.jsx)(C,{headers:[`URL`,`Matched Route`,`Priority`],rows:[[`/blog/featured`,`featured/page.tsx`,`Static`],[`/blog/hello-world`,`[slug]/page.tsx`,`Dynamic`],[`/blog/2024/01/hello-world`,`[...slug]/page.tsx`,`Catch-all`]]}),(0,g.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This priority system ensures predictable routing behavior and prevents conflicts between different route types.`})]}),(0,g.jsxs)(a.section,{id:`use-cases`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Use Cases`}),(0,g.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes are ideal for:`}),(0,g.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mb-6`,children:[(0,g.jsx)(D,{title:`Documentation`,description:`Multi-level documentation with variable depth`,example:`/docs/guides/routing/basics`}),(0,g.jsx)(D,{title:`E-commerce Categories`,description:`Nested category structures`,example:`/products/electronics/phones/iphone`}),(0,g.jsx)(D,{title:`Blog Archives`,description:`Date-based archives`,example:`/blog/2024/01/hello-world`}),(0,g.jsx)(D,{title:`Multi-language Sites`,description:`Language prefixes with variable paths`,example:`/en/docs/getting-started`})]}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Additional Use Cases`}),(0,g.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`CMS Content:`}),` Content pages with flexible URL structures`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`API Versioning:`}),` API routes with version segments like `,(0,g.jsx)(`code`,{className:`text-cyan-400`,children:`/api/v1/users/123`})]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`File Browser:`}),` Directory browsing with arbitrary depth`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`Wiki Pages:`}),` Multi-level wiki documentation`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:`text-white`,children:`Path-Based Navigation:`}),` Any URL structure where depth varies`]})]})]}),(0,g.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,g.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,g.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here is a comprehensive example showing all catch-all route patterns in a real-world application:`}),(0,g.jsx)(S,{tree:`src/app/
├── blog/
│   ├── featured/
│   │   └── page.tsx           → /blog/featured (static)
│   ├── [slug]/
│   │   └── page.tsx           → /blog/:slug (dynamic)
│   └── [...slug]/
│       └── page.tsx           → /blog/2024/01/hello-world (catch-all)
├── docs/
│   └── [[...slug]]/
│       ├── layout.tsx         ← Layout for docs
│       └── page.tsx           → /docs (optional catch-all)
│                               → /docs/getting-started
├── products/
│   └── [category]/
│       └── [...slug]/
│           └── page.tsx       → /products/electronics/phones/iphone
├── shop/
│   └── [[...slug]]/
│       └── page.tsx           → /shop (optional catch-all)
│                               → /shop/clothing
│                               → /shop/clothing/shirts
├── wiki/
│   └── [[...path]]/
│       └── page.tsx           → /wiki (optional catch-all)
│                               → /wiki/guides/routing
└── api/
    └── v1/
        └── [...path].ts       → /api/v1/users/123 (flat file catch-all)`}),(0,g.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Mapping`}),(0,g.jsx)(C,{headers:[`Pattern`,`Example URL`,`Type`],rows:[[`/blog/featured`,`/blog/featured`,`Static`],[`/blog/:slug`,`/blog/hello-world`,`Dynamic Single`],[`/blog/*`,`/blog/2024/01/hello-world`,`Catch-all`],[`/docs/* (optional)`,`/docs`,`Optional Catch-all`],[`/docs/* (optional)`,`/docs/getting-started`,`Optional Catch-all`],[`/products/:category/*`,`/products/electronics/phones/iphone`,`Nested Catch-all`],[`/shop/* (optional)`,`/shop/clothing/shirts`,`Optional Catch-all`],[`/api/v1/*`,`/api/v1/users/123`,`Flat File Catch-all`]]})]}),(0,g.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,g.jsxs)(n,{to:`/docs/dynamic-routes`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,g.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,g.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic Routes`})]})]}),(0,g.jsxs)(n,{to:`/docs/mdx-markdown`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,g.jsx)(`div`,{className:`text-sm font-medium`,children:`MDX and Markdown`})]}),(0,g.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,g.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,g.jsx)(m,{items:_,editUrl:b})})]})})})})]})}export{O as default};