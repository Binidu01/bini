import{a as e,i as t,n,t as r}from"./index-kU_jIY7Z.js";import{_ as i,n as a,v as o}from"./Layout-CVNB3Z_m.js";import{t as s}from"./arrow-left-xN2ZSVA6.js";import{t as c}from"./arrow-right-12cPHdLD.js";import{n as l,t as u}from"./hash-DOQtI4yZ.js";import{t as d}from"./check-CK3rC5gb.js";import{t as f}from"./DocSidebar-BRbcaUI2.js";import{t as p}from"./circle-alert-BLBwBdUl.js";import{t as m}from"./copy-Dl-LDBmR.js";import{t as h}from"./file-BzXR2ZWk.js";import{t as g}from"./info-C5MHP8ar.js";import{t as _}from"./sparkles-fZaEApKO.js";import{n as v,t as y}from"./TableOfContents-DkX_xG9U.js";var b={name:`brackets`,size:24,node:[[`path`,{d:`M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3`,key:`1kt8lf`}],[`path`,{d:`M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3`,key:`gduv9`}]]};b.node;var x=i(b),S=e(t(),1),C=r(),w=[{id:`overview`,label:`Overview`},{id:`dynamic-segments`,label:`Dynamic Segments`},{id:`multiple-parameters`,label:`Multiple Parameters`},{id:`catch-all-segments`,label:`Catch-all Segments`},{id:`optional-catch-all`,label:`Optional Catch-all Segments`},{id:`dynamic-layouts`,label:`Dynamic Segments in Layouts`},{id:`flat-file-dynamic`,label:`Flat File Dynamic Routes`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}],T=`Dynamic Routes`,E=`https://bini.js.org/docs/dynamic-routes`,D=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/dynamic-routes.tsx`;function O({code:e,filename:t,highlight:n}){let[r,i]=(0,S.useState)(!1);return(0,C.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,C.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,C.jsxs)(`span`,{className:`text-sm text-slate-300 font-mono flex items-center gap-2`,children:[(0,C.jsx)(h,{className:`w-3.5 h-3.5 text-cyan-400`}),t]})}),(0,C.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:r?(0,C.jsx)(d,{className:`w-3.5 h-3.5 text-green-400`}):(0,C.jsx)(m,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,C.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,C.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,C.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function k({tree:e}){return(0,C.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 rounded-lg p-4 mb-6 font-mono text-sm`,children:(0,C.jsx)(`div`,{className:`text-slate-200 whitespace-pre`,children:e})})}function A({headers:e,rows:t}){return(0,C.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,C.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,C.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,C.jsx)(`tr`,{children:e.map((e,t)=>(0,C.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,C.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,C.jsx)(`tr`,{children:e.map((e,t)=>(0,C.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function j({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,icon:g,color:`text-cyan-400`},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,icon:p,color:`text-amber-400`},success:{bg:`bg-emerald-500/10`,border:`border-emerald-500/30`,icon:d,color:`text-emerald-400`},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,icon:_,color:`text-purple-400`}}[e],r=n.icon;return(0,C.jsxs)(`div`,{className:`flex items-start gap-3 p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,C.jsx)(r,{className:`w-5 h-5 ${n.color} shrink-0 mt-0.5`}),(0,C.jsx)(`div`,{className:`text-sm text-slate-200 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function M({icon:e,title:t,description:n}){return(0,C.jsxs)(`div`,{className:`p-4 rounded-xl border border-slate-700 bg-[#0a0a0a] hover:border-slate-600 transition-colors`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,C.jsx)(e,{className:`w-4 h-4 text-cyan-400`}),(0,C.jsx)(`span`,{className:`text-white font-medium text-sm`,children:t})]}),(0,C.jsx)(`p`,{className:`text-slate-400 text-xs`,children:n})]})}function N(){return(0,C.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,C.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`span`,{className:`text-white font-medium`,children:`Static routes`}),(0,C.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[`exact matches — e.g., `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/featured`})]})]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`span`,{className:`text-white font-medium`,children:`Dynamic single segments`}),(0,C.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`}),` — e.g., `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/:slug`})]})]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`span`,{className:`text-white font-medium`,children:`Catch-all segments`}),(0,C.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`}),` — e.g., `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/*`})]})]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`span`,{className:`text-white font-medium`,children:`Optional catch-all segments`}),(0,C.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`}),` — e.g., `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`/docs/*`}),` (optional)`]})]})]})})}function P(){return(0,C.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,C.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,C.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,C.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,C.jsx)(a,{}),(0,C.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,C.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,C.jsx)(f,{children:(0,C.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,C.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,C.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:T}),(0,C.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to create dynamic routes with parameters, catch-all segments, and optional catch-all segments in Bini.js.`})]}),(0,C.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,C.jsx)(v,{pageUrl:E,pageTitle:T})})]}),(0,C.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,C.jsx)(v,{pageUrl:E,pageTitle:T})}),(0,C.jsxs)(o.section,{id:`overview`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Overview`}),(0,C.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Dynamic routes allow you to create pages that match a pattern rather than a static path. This is essential for pages like blog posts, product pages, user profiles, and documentation.`}),(0,C.jsxs)(`div`,{className:`grid sm:grid-cols-3 gap-3 mb-6`,children:[(0,C.jsx)(M,{icon:u,title:`Dynamic Segments`,description:`Single parameter routes with [param]`}),(0,C.jsx)(M,{icon:l,title:`Catch-all Routes`,description:`Match multiple segments with [...]`}),(0,C.jsx)(M,{icon:x,title:`Optional Catch-all`,description:`Optional multi-segment routes with [[...]]`})]}),(0,C.jsxs)(j,{type:`info`,children:[(0,C.jsx)(`strong`,{children:`Auto-import:`}),` `,(0,C.jsx)(`code`,{children:`useParams()`}),` is auto-imported in all pages and layouts — no import statement needed.`]})]}),(0,C.jsxs)(o.section,{id:`dynamic-segments`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments`}),(0,C.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a dynamic segment by wrapping a folder or file name in square brackets: `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`[name]`}),`. The parameter name must match `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`/^[a-zA-Z_][a-zA-Z0-9_]*$/`}),`.`]}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Dynamic Folder Example`}),(0,C.jsx)(k,{tree:`src/app/
├── blog/
│   └── [slug]/
│       └── page.tsx       → /blog/hello-world
│                           → /blog/getting-started
│                           → /blog/any-value
├── products/
│   └── [id]/
│       └── page.tsx       → /products/123
│                           → /products/abc-456
└── users/
    └── [userId]/
        └── page.tsx       → /users/john
                            → /users/mary`}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Accessing Parameters`}),(0,C.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Access the parameter value using `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),`, which is auto-imported:`]}),(0,C.jsx)(O,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return (
    <article>
      <h1 className="text-3xl font-bold text-white">Post: {slug}</h1>
    </article>
  )
}`,filename:`app/blog/[slug]/page.tsx`}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With Data Fetching`}),(0,C.jsx)(O,{code:`// src/app/user/[id]/page.tsx
export default function UserProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetchUser(id).then(setUser)
  }, [id])
  
  if (!user) return <Loading />
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{user.name}</h1>
      <p className="text-slate-400">{user.email}</p>
    </div>
  )
}`,filename:`app/user/[id]/page.tsx`})]}),(0,C.jsxs)(o.section,{id:`multiple-parameters`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Multiple Parameters`}),(0,C.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`You can have multiple dynamic segments in a single route. Each segment becomes a property in the `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),` object.`]}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Example with Multiple Params`}),(0,C.jsx)(k,{tree:`src/app/
└── blog/
    └── [category]/
        └── [slug]/
            └── page.tsx   → /blog/tech/hello-world
                            → /blog/lifestyle/travel-tips`}),(0,C.jsx)(O,{code:`// src/app/blog/[category]/[slug]/page.tsx
export default function BlogPost() {
  const { category, slug } = useParams()
  
  return (
    <div>
      <p className="text-cyan-400">Category: {category}</p>
      <h1 className="text-3xl font-bold text-white">Post: {slug}</h1>
    </div>
  )
}`,filename:`app/blog/[category]/[slug]/page.tsx`}),(0,C.jsx)(A,{headers:[`URL`,`params`],rows:[[`/blog/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`],[`/blog/lifestyle/travel`,`{ category: "lifestyle", slug: "travel" }`],[`/blog/design/ux-tips`,`{ category: "design", slug: "ux-tips" }`]]})]}),(0,C.jsxs)(o.section,{id:`catch-all-segments`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Segments`}),(0,C.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` to match any number of segments. The parameter becomes an array of the matched segments. This is perfect for documentation, file paths, or any multi-level navigation.`]}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Catch-all Example`}),(0,C.jsx)(k,{tree:`src/app/
└── docs/
    └── [...slug]/
        └── page.tsx       → /docs/getting-started
                            → /docs/api/reference
                            → /docs/guides/routing/basics`}),(0,C.jsx)(O,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array, e.g., ['api', 'reference']
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Documentation</h1>
      <p className="text-slate-400">Path: {slug?.join(' / ')}</p>
      
      <div className="mt-4 p-4 bg-slate-900/50 rounded-lg">
        <p className="text-slate-300 text-sm">
          {slug?.length || 0} segment(s) in the path
        </p>
      </div>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,C.jsx)(A,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`],[`/docs/advanced/custom/hooks`,`['advanced', 'custom', 'hooks']`]]}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Catch-all`}),(0,C.jsx)(k,{tree:`src/app/
├── docs/
│   └── [...slug].tsx      → /docs/* (catch-all)
└── api/
    └── [...path].ts        → /api/* (catch-all API route)`}),(0,C.jsxs)(j,{type:`warning`,children:[(0,C.jsx)(`strong`,{children:`Priority:`}),` Catch-all segments have lower priority than static routes and dynamic single segments. For example, `,(0,C.jsx)(`code`,{children:`/blog/featured`}),` will match a static route if it exists, falling back to the catch-all only if no more specific route matches.`]})]}),(0,C.jsxs)(o.section,{id:`optional-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all Segments`}),(0,C.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` to make the catch-all optional. The route matches even without any segments, making it perfect for multi-level navigation like documentation or shop categories.`]}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Optional Catch-all Example`}),(0,C.jsx)(k,{tree:`src/app/
└── shop/
    └── [[...slug]]/
        └── page.tsx       → /shop
                            → /shop/clothing
                            → /shop/clothing/shirts`}),(0,C.jsx)(O,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  
  if (!slug) {
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
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,C.jsx)(A,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`],[`/shop/electronics/phones/iphone`,`['electronics', 'phones', 'iphone']`]]})]}),(0,C.jsxs)(o.section,{id:`dynamic-layouts`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments in Layouts`}),(0,C.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Layouts can also access dynamic parameters using `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),`, which is auto-imported. This is useful for displaying contextual information in headers, sidebars, or breadcrumbs.`]}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Layout with Dynamic Params`}),(0,C.jsx)(O,{code:`// src/app/blog/[slug]/layout.tsx
export default function BlogLayout() {
  const { slug } = useParams()
  
  return (
    <div>
      <header className="border-b border-slate-800 p-4">
        <h2 className="text-xl font-bold text-white">
          Post: {slug}
        </h2>
        <nav className="text-sm text-slate-400">
          <Link to="/blog">← Back to blog</Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}`,filename:`app/blog/[slug]/layout.tsx`}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`File Structure`}),(0,C.jsx)(k,{tree:`src/app/
└── blog/
    └── [slug]/
        ├── layout.tsx        ← Layout with access to {slug}
        └── page.tsx          ← Main content`}),(0,C.jsxs)(j,{type:`tip`,children:[(0,C.jsx)(`strong`,{children:`Layout inheritance:`}),` The layout wraps the page and any nested routes, providing consistent UI across the dynamic route section.`]})]}),(0,C.jsxs)(o.section,{id:`flat-file-dynamic`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Flat File Dynamic Routes`}),(0,C.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Dynamic routes can also be created as flat files without folders. This is especially useful for simpler pages where a folder structure would be unnecessary overhead.`}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Examples`}),(0,C.jsx)(k,{tree:`src/app/
├── blog/
│   ├── [slug].tsx          → /blog/hello-world
│   └── [category]-[slug].tsx → /blog/tech-hello-world
├── products/
│   └── [id].tsx            → /products/123
├── users/
│   └── [userId].tsx        → /users/john
└── docs/
    └── [...slug].tsx       → /docs/* (catch-all)`}),(0,C.jsx)(O,{code:`// src/app/blog/[slug].tsx
export default function BlogPost() {
  const { slug } = useParams()
  return (
    <h1 className="text-3xl font-bold text-white">Post: {slug}</h1>
  )
}`,filename:`app/blog/[slug].tsx`}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`When to Use Flat Files`}),(0,C.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,C.jsx)(`li`,{children:`Simple pages that don't need nested layouts`}),(0,C.jsx)(`li`,{children:`API routes with dynamic parameters`}),(0,C.jsxs)(`li`,{children:[`Single-level dynamic pages (e.g., `,(0,C.jsx)(`code`,{className:`text-cyan-400`,children:`/post/:id`}),`)`]}),(0,C.jsx)(`li`,{children:`When you want to reduce folder nesting`})]})]}),(0,C.jsxs)(o.section,{id:`route-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,C.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,C.jsx)(N,{}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Priority Example`}),(0,C.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Consider this folder structure with overlapping routes:`}),(0,C.jsx)(k,{tree:`src/app/blog/
├── featured/
│   └── page.tsx           → /blog/featured (static - highest priority)
├── [slug]/
│   └── page.tsx           → /blog/anything-else (dynamic)
└── [...slug]/
    └── page.tsx           → /blog/a/b/c (catch-all)`}),(0,C.jsx)(A,{headers:[`URL`,`Matched Route`,`Priority`],rows:[[`/blog/featured`,`featured/page.tsx`,`Static`],[`/blog/hello-world`,`[slug]/page.tsx`,`Dynamic`],[`/blog/a/b/c`,`[...slug]/page.tsx`,`Catch-all`],[`/blog/latest/post`,`[slug]/page.tsx`,`Dynamic`]]}),(0,C.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This ensures predictable routing behavior and prevents conflicts between different route types.`})]}),(0,C.jsxs)(o.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,C.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,C.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here is a comprehensive example showing all dynamic route patterns in a real-world application:`}),(0,C.jsx)(k,{tree:`src/app/
├── blog/
│   ├── featured/
│   │   └── page.tsx           → /blog/featured (static)
│   ├── [slug]/
│   │   ├── layout.tsx         ← Layout for single post with {slug}
│   │   └── page.tsx           → /blog/:slug (dynamic)
│   ├── [category]/
│   │   └── [slug]/
│   │       └── page.tsx       → /blog/:category/:slug (multiple dynamic)
│   └── [...slug]/
│       └── page.tsx           → /blog/a/b/c (catch-all)
├── docs/
│   └── [[...slug]]/
│       ├── layout.tsx         ← Layout for docs with optional catch-all
│       └── page.tsx           → /docs (optional catch-all)
│                               → /docs/getting-started
├── products/
│   ├── page.tsx               → /products
│   ├── [id].tsx               → /products/:id (flat file)
│   └── categories/
│       └── [name]/
│           └── page.tsx       → /products/categories/:name
├── users/
│   └── [userId]/
│       ├── page.tsx           → /users/:userId
│       └── settings/
│           └── page.tsx       → /users/:userId/settings
└── api/
    ├── posts/
    │   └── [id].ts            → /api/posts/:id
    └── users/
        └── [...path].ts       → /api/users/* (catch-all API)`}),(0,C.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Mapping`}),(0,C.jsx)(A,{headers:[`Pattern`,`Example URL`,`Type`],rows:[[`/blog/featured`,`/blog/featured`,`Static`],[`/blog/:slug`,`/blog/hello-world`,`Dynamic Single`],[`/blog/:category/:slug`,`/blog/tech/hello-world`,`Multiple Dynamic`],[`/blog/*`,`/blog/a/b/c`,`Catch-all`],[`/docs/* (optional)`,`/docs`,`Optional Catch-all`],[`/docs/* (optional)`,`/docs/getting-started`,`Optional Catch-all`],[`/products/:id`,`/products/123`,`Flat File Dynamic`],[`/users/:userId/settings`,`/users/john/settings`,`Nested Dynamic`]]})]}),(0,C.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,C.jsxs)(n,{to:`/docs/file-based-routing`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,C.jsx)(s,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,C.jsx)(`div`,{className:`text-sm font-medium`,children:`File-Based Routing`})]})]}),(0,C.jsxs)(n,{to:`/docs/catch-all-routes`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,C.jsx)(`div`,{className:`text-sm font-medium`,children:`Catch-All Routes`})]}),(0,C.jsx)(c,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,C.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,C.jsx)(y,{items:w,editUrl:D})})]})})})})]})}export{P as default};