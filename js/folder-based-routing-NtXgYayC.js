import{a as e,i as t,n,t as r}from"./index-DC1finTj.js";import{_ as i,n as a,v as o}from"./Layout-BchPlYGG.js";import{t as s}from"./arrow-left-DDUfnCyW.js";import{t as c}from"./arrow-right-DxPakO1S.js";import{n as l,t as u}from"./hash-Bxn4F-cQ.js";import{t as d}from"./check-om3OMnnn.js";import{t as f}from"./DocSidebar-DEaPZPK8.js";import{t as p}from"./circle-alert-CePs5H73.js";import{t as m}from"./copy-CbmfP7V7.js";import{t as h}from"./file-Blys-4lA.js";import{t as g}from"./sparkles-CEdtmQ5b.js";import{n as _,t as v}from"./TableOfContents-Dq9a3AEA.js";var y=i(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),b=i(`folder-tree`,[[`path`,{d:`M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z`,key:`hod4my`}],[`path`,{d:`M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z`,key:`w4yl2u`}],[`path`,{d:`M3 5a2 2 0 0 0 2 2h3`,key:`f2jnh7`}],[`path`,{d:`M3 3v13a2 2 0 0 0 2 2h3`,key:`k8epm1`}]]),x=e(t(),1),S=r(),C=[{id:`overview`,label:`Overview`},{id:`basic-folder-routing`,label:`Basic Folder Routing`},{id:`nested-routes`,label:`Nested Routes`},{id:`dynamic-segments`,label:`Dynamic Segments`},{id:`catch-all-segments`,label:`Catch-all Segments`},{id:`optional-catch-all`,label:`Optional Catch-all Segments`},{id:`route-groups`,label:`Route Groups`},{id:`private-folders`,label:`Private Folders`},{id:`nearest-wins-folders`,label:`Nearest Wins with Folders`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}],w=`Folder-Based Routing`,T=`https://bini.js.org/docs/folder-based-routing`,E=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/folder-based-routing.tsx`;function D({code:e,filename:t,highlight:n}){let[r,i]=(0,x.useState)(!1);return(0,S.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,S.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,S.jsxs)(`span`,{className:`text-sm text-slate-300 font-mono flex items-center gap-2`,children:[(0,S.jsx)(h,{className:`w-3.5 h-3.5 text-cyan-400`}),t]})}),(0,S.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:r?(0,S.jsx)(d,{className:`w-3.5 h-3.5 text-green-400`}):(0,S.jsx)(m,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,S.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,S.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,S.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function O({tree:e}){return(0,S.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 rounded-lg p-4 mb-6 font-mono text-sm`,children:(0,S.jsx)(`div`,{className:`text-slate-200 whitespace-pre`,children:e})})}function k({headers:e,rows:t}){return(0,S.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,S.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,S.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,S.jsx)(`tr`,{children:e.map((e,t)=>(0,S.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,S.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,S.jsx)(`tr`,{children:e.map((e,t)=>(0,S.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function A({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,icon:g,color:`text-cyan-400`},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,icon:p,color:`text-amber-400`},success:{bg:`bg-emerald-500/10`,border:`border-emerald-500/30`,icon:d,color:`text-emerald-400`},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,icon:g,color:`text-purple-400`}}[e],r=n.icon;return(0,S.jsxs)(`div`,{className:`flex items-start gap-3 p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,S.jsx)(r,{className:`w-5 h-5 ${n.color} shrink-0 mt-0.5`}),(0,S.jsx)(`div`,{className:`text-sm text-slate-200 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function j({icon:e,title:t,description:n}){return(0,S.jsxs)(`div`,{className:`p-4 rounded-xl border border-slate-700 bg-[#0a0a0a] hover:border-slate-600 transition-colors`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,S.jsx)(e,{className:`w-4 h-4 text-cyan-400`}),(0,S.jsx)(`span`,{className:`text-white font-medium text-sm`,children:t})]}),(0,S.jsx)(`p`,{className:`text-slate-400 text-xs`,children:n})]})}function M(){return(0,S.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,S.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`text-white font-medium`,children:`Static routes`}),(0,S.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[`exact matches — e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/about`})]})]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`text-white font-medium`,children:`Dynamic single segments`}),(0,S.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`}),` — e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/:slug`})]})]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`text-white font-medium`,children:`Catch-all segments`}),(0,S.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`}),` — e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/docs/*`})]})]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`span`,{className:`text-white font-medium`,children:`Optional catch-all segments`}),(0,S.jsxs)(`span`,{className:`text-slate-400 text-xs block ml-6`,children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`}),` — e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/shop/*`}),` (optional)`]})]})]})})}function N(){return(0,S.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,S.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,S.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,S.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,S.jsx)(a,{}),(0,S.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,S.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,S.jsx)(f,{children:(0,S.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,S.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,S.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:w}),(0,S.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how folders define URL segments and create nested routes automatically in Bini.js.`})]}),(0,S.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,S.jsx)(_,{pageUrl:T,pageTitle:w})})]}),(0,S.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,S.jsx)(_,{pageUrl:T,pageTitle:w})}),(0,S.jsxs)(o.section,{id:`overview`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Overview`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js uses a `,(0,S.jsx)(`strong`,{className:`text-white`,children:`folder-based routing system`}),` where the folder structure inside `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` directly maps to URL paths. This makes routing intuitive and eliminates the need for manual route configuration.`]}),(0,S.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mb-6`,children:[(0,S.jsx)(j,{icon:b,title:`Intuitive Structure`,description:`Folders map directly to URL segments`}),(0,S.jsx)(j,{icon:u,title:`Dynamic Segments`,description:`Create dynamic routes with [param] syntax`}),(0,S.jsx)(j,{icon:l,title:`Catch-all Routes`,description:`Match multiple segments with [...] syntax`}),(0,S.jsx)(j,{icon:y,title:`Private Folders`,description:`Exclude folders with _ prefix`})]})]}),(0,S.jsxs)(o.section,{id:`basic-folder-routing`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Folder Routing`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Each folder inside `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` becomes a URL segment. Add a `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` file inside to make the route publicly accessible.`]}),(0,S.jsx)(O,{tree:`src/app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   └── page.tsx      → /blog
└── contact/
    └── page.tsx      → /contact`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates four routes: `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/blog`}),`, and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/contact`}),`.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Support`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Bini.js also supports flat files at the root level. These work the same way as folder-based routes:`}),(0,S.jsx)(O,{tree:`src/app/
├── page.tsx          → /
├── about.tsx         → /about
├── blog.tsx          → /blog
└── contact.tsx       → /contact`}),(0,S.jsxs)(A,{type:`tip`,children:[(0,S.jsx)(`strong`,{children:`Both patterns work:`}),` You can mix folder-based and flat file routing. Choose whichever makes your project organization clearer.`]})]}),(0,S.jsxs)(o.section,{id:`nested-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Routes`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Nest folders inside each other to create nested URL segments. Each level adds another segment to the URL path.`}),(0,S.jsx)(O,{tree:`src/app/
├── blog/
│   ├── page.tsx           → /blog
│   ├── authors/
│   │   └── page.tsx       → /blog/authors
│   └── categories/
│       ├── page.tsx       → /blog/categories
│       └── [name]/
│           └── page.tsx   → /blog/categories/tech`}),(0,S.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The folder structure directly mirrors the URL structure. Deep nesting is fully supported up to 100 levels deep.`}),(0,S.jsxs)(A,{type:`info`,children:[(0,S.jsx)(`strong`,{children:`Layout inheritance:`}),` Nested routes automatically inherit layouts from parent folders. Each folder can have its own `,(0,S.jsx)(`code`,{children:`layout.tsx`}),` that wraps all routes in that folder.`]})]}),(0,S.jsxs)(o.section,{id:`dynamic-segments`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use square brackets `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[param]`}),` to create dynamic route segments that match any value. Access the value with `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),` (auto-imported).`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Dynamic Folder Example`}),(0,S.jsx)(O,{tree:`src/app/
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
        ├── page.tsx       → /users/john
        └── settings/
            └── page.tsx   → /users/john/settings`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Using Dynamic Params`}),(0,S.jsx)(D,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams() // Auto-imported
  
  return (
    <article>
      <h1 className="text-3xl font-bold text-white">Post: {slug}</h1>
    </article>
  )
}`,filename:`app/blog/[slug]/page.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Dynamic Routes`}),(0,S.jsx)(O,{tree:`src/app/
├── blog/
│   └── [slug].tsx         → /blog/:slug
├── user/
│   └── [id].tsx           → /user/:id
└── product/
    └── [sku].tsx          → /product/:sku`}),(0,S.jsxs)(A,{type:`warning`,children:[(0,S.jsx)(`strong`,{children:`Param naming:`}),` Parameter names must match `,(0,S.jsx)(`code`,{children:`/^[a-zA-Z_][a-zA-Z0-9_]*$/`}),` and are validated at scan time.`]})]}),(0,S.jsxs)(o.section,{id:`catch-all-segments`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Segments`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[...segment]`}),` to match multiple URL segments. The parameter becomes an array of values.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Catch-all Example`}),(0,S.jsx)(O,{tree:`src/app/
├── docs/
│   └── [...slug]/
│       └── page.tsx       → /docs/getting-started
│                           → /docs/api/reference
│                           → /docs/guides/routing/basics`}),(0,S.jsx)(D,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array: ['api', 'reference']
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Documentation</h1>
      <p className="text-slate-400">Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,S.jsx)(k,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`]]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Catch-all`}),(0,S.jsx)(O,{tree:`src/app/
├── docs/
│   └── [...slug].tsx      → /docs/* (catch-all)
└── api/
    └── [...path].ts        → /api/* (catch-all API route)`})]}),(0,S.jsxs)(o.section,{id:`optional-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all Segments`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[[...segment]]`}),` to make the catch-all optional. The route will also match the parent path.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Optional Catch-all Example`}),(0,S.jsx)(O,{tree:`src/app/
├── shop/
│   └── [[...slug]]/
│       └── page.tsx       → /shop
│                           → /shop/clothing
│                           → /shop/clothing/shirts`}),(0,S.jsx)(D,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  // slug is undefined for /shop
  // slug is ['clothing'] for /shop/clothing
  
  if (!slug) {
    return <h1 className="text-2xl font-bold text-white">Shop Home</h1>
  }
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">
        Category: {slug.join(' / ')}
      </h1>
    </div>
  )
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,S.jsx)(k,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`]]})]}),(0,S.jsxs)(o.section,{id:`route-groups`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Groups`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use parentheses `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`(group)`}),` to organize routes without affecting the URL. Perfect for grouping related pages or applying shared layouts.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Group Example`}),(0,S.jsx)(O,{tree:`src/app/
├── (marketing)/
│   ├── page.tsx           → /
│   ├── about/
│   │   └── page.tsx       → /about
│   └── pricing/
│       └── page.tsx       → /pricing
├── (shop)/
│   ├── page.tsx           → /
│   ├── products/
│   │   └── page.tsx       → /products
│   └── cart/
│       └── page.tsx       → /cart
└── (admin)/
    ├── layout.tsx         ← Layout only for admin routes
    ├── page.tsx           → /
    └── dashboard/
        └── page.tsx       → /dashboard`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Notice how `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`(marketing)`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`(shop)`}),`, and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`(admin)`}),` don't appear in the URLs. They're purely for organization.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Groups with Layouts`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Route groups are especially useful for applying different layouts to different sections:`}),(0,S.jsx)(O,{tree:`src/app/
├── (marketing)/
│   ├── layout.tsx         ← Marketing layout (different header/footer)
│   └── page.tsx           → /
├── (dashboard)/
│   ├── layout.tsx         ← Dashboard layout (sidebar + header)
│   └── settings/
│       └── page.tsx       → /settings
└── layout.tsx             ← Root layout (applies to all)`}),(0,S.jsxs)(A,{type:`tip`,children:[(0,S.jsx)(`strong`,{children:`Layout inheritance:`}),` Route groups are great for organizing layouts. Each group can have its own `,(0,S.jsx)(`code`,{children:`layout.tsx`}),` that only applies to routes in that group.`]})]}),(0,S.jsxs)(o.section,{id:`private-folders`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Private Folders`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Prefix a folder with an underscore `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`_folder`}),` to exclude it from routing. Perfect for components, utilities, and other non-route files.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Private Folder Example`}),(0,S.jsx)(O,{tree:`src/app/
├── _components/           ← Not routable
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── _lib/                  ← Not routable
│   ├── api.ts
│   └── utils.ts
├── _hooks/                ← Not routable
│   └── useAuth.ts
├── blog/
│   ├── _components/       ← Not routable
│   │   └── PostCard.tsx
│   └── page.tsx           → /blog
└── page.tsx               → /`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Private folders can be placed anywhere in the `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`app`}),` directory and are completely ignored by the router.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Ignored Patterns`}),(0,S.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,S.jsxs)(`li`,{children:[`Folders starting with `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`_`}),` (underscore)`]}),(0,S.jsxs)(`li`,{children:[`Folders starting with `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.`}),` (dot)`]}),(0,S.jsxs)(`li`,{children:[`Files starting with `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`_`}),` or `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.`})]}),(0,S.jsxs)(`li`,{children:[`The `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`api/`}),` directory (reserved for API routes)`]})]})]}),(0,S.jsxs)(o.section,{id:`nearest-wins-folders`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.47},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nearest Wins with Folders`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),`, and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` follow the folder hierarchy using `,(0,S.jsx)(`strong`,{className:`text-white`,children:`"nearest wins"`}),` resolution. A file in a subfolder only affects that subfolder and shadows (without deleting) the same file in any ancestor folder.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Folder Hierarchy and Boundaries`}),(0,S.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,S.jsxs)(`li`,{children:[`Each folder can define its own `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),`, and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`})]}),(0,S.jsx)(`li`,{children:`A file in a subfolder only affects routes inside that subfolder`}),(0,S.jsx)(`li`,{children:`It shadows the same file in ancestor folders for routes in that subfolder`}),(0,S.jsx)(`li`,{children:`Routes without a closer match fall through to the nearest ancestor`}),(0,S.jsx)(`li`,{children:`If no file exists anywhere in the hierarchy, the built-in default is used`})]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Example Structure`}),(0,S.jsx)(O,{tree:`src/app/
├── layout.tsx
├── page.tsx
├── loading.tsx              ← Default loading for all routes
├── not-found.tsx            ← Default 404 for all routes
├── error.tsx                ← Default error for all routes
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx          ← Only affects /dashboard/*
│   ├── error.tsx            ← Only affects /dashboard/*
│   └── settings/
│       └── page.tsx         ← Uses dashboard/loading.tsx and dashboard/error.tsx
└── blog/
    ├── page.tsx
    ├── loading.tsx          ← Only affects /blog/*
    └── [slug]/
        └── page.tsx         ← Uses blog/loading.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Resolution Flow`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When a route needs a boundary file, the router checks:`}),(0,S.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300 mb-4`,children:[(0,S.jsx)(`li`,{children:`The route's own folder first`}),(0,S.jsx)(`li`,{children:`Each parent folder (going up the hierarchy)`}),(0,S.jsx)(`li`,{children:`The built-in default if no file is found`})]}),(0,S.jsxs)(A,{type:`info`,children:[(0,S.jsx)(`strong`,{children:`Nearest Wins:`}),` A file in a subfolder shadows ancestor files for routes in that subfolder, but doesn't delete them for other routes. This is the same mental model as layouts.`]})]}),(0,S.jsxs)(o.section,{id:`route-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,S.jsx)(M,{}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Priority Example`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Consider this folder structure:`}),(0,S.jsx)(O,{tree:`src/app/
├── blog/
│   ├── page.tsx           → /blog
│   ├── [slug]/
│   │   └── page.tsx       → /blog/:slug
│   └── [...slug]/
│       └── page.tsx       → /blog/* (catch-all)`}),(0,S.jsx)(k,{headers:[`URL`,`Matched Route`],rows:[[`/blog`,`/blog (static)`],[`/blog/hello-world`,`/blog/:slug (dynamic)`],[`/blog/hello/world`,`/blog/* (catch-all)`]]}),(0,S.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This ensures predictable routing behavior and prevents conflicts between different route types.`})]}),(0,S.jsxs)(o.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here is a comprehensive folder structure showing all routing patterns:`}),(0,S.jsx)(O,{tree:`src/app/
├── (marketing)/               ← Route group (not in URL)
│   ├── layout.tsx             ← Layout for marketing pages
│   ├── page.tsx               → /
│   ├── about/
│   │   └── page.tsx           → /about
│   └── _components/           ← Private folder
│       └── Hero.tsx
├── blog/
│   ├── layout.tsx             ← Layout for blog section
│   ├── page.tsx               → /blog
│   ├── loading.tsx            ← Blog loading UI (nearest wins)
│   ├── [slug]/                ← Dynamic segment
│   │   └── page.tsx           → /blog/:slug
│   ├── authors/
│   │   └── page.tsx           → /blog/authors
│   └── categories/
│       └── [...slug]/         ← Catch-all
│           └── page.tsx       → /blog/categories/tech/news
├── docs/
│   └── [[...slug]]/           ← Optional catch-all
│       └── page.tsx           → /docs
│                               → /docs/getting-started
├── api/                       ← API routes
│   ├── hello.ts               → /api/hello
│   └── users/
│       └── [id].ts            → /api/users/:id
├── layout.tsx                 ← Root layout
├── page.tsx                   → /
├── loading.tsx                ← Global loading UI
├── error.tsx                  ← Global error UI
└── not-found.tsx              ← Custom 404 page`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Mapping`}),(0,S.jsx)(k,{headers:[`Folder Path`,`URL`,`Type`],rows:[[`app/page.tsx`,`/`,`Static`],[`app/about/page.tsx`,`/about`,`Static`],[`app/blog/page.tsx`,`/blog`,`Static`],[`app/blog/[slug]/page.tsx`,`/blog/:slug`,`Dynamic`],[`app/blog/authors/page.tsx`,`/blog/authors`,`Static`],[`app/blog/categories/[...slug]/page.tsx`,`/blog/categories/*`,`Catch-all`],[`app/docs/[[...slug]]/page.tsx`,`/docs/*`,`Optional Catch-all`],[`app/api/hello.ts`,`/api/hello`,`API`],[`app/api/users/[id].ts`,`/api/users/:id`,`API Dynamic`]]})]}),(0,S.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,S.jsxs)(n,{to:`/docs/getting-started`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,S.jsx)(s,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,S.jsx)(`div`,{className:`text-sm font-medium`,children:`Getting Started`})]})]}),(0,S.jsxs)(n,{to:`/docs/file-based-routing`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,S.jsx)(`div`,{className:`text-sm font-medium`,children:`File-Based Routing`})]}),(0,S.jsx)(c,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,S.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,S.jsx)(v,{items:C,editUrl:E})})]})})})})]})}export{N as default};