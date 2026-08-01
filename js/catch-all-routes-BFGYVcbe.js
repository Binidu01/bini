import{c as e,i as t,n,t as r}from"./index-BtLteBkV.js";import{n as i,v as a}from"./Layout-_ilOhwvC.js";import{t as o}from"./arrow-left-CJFMrFVu.js";import{t as s}from"./arrow-right-DqgpFkUE.js";import{n as c,r as l,t as u}from"./TableOfContents-C9sO1CuQ.js";var d=e(t(),1),f=r(),p=[{id:`what-are-catch-all-routes`,label:`What are Catch-All Routes?`},{id:`basic-usage`,label:`Basic Usage`},{id:`accessing-parameters`,label:`Accessing Parameters`},{id:`nested-catch-all`,label:`Nested Catch-All Routes`},{id:`optional-catch-all`,label:`Optional Catch-All Routes`},{id:`file-based-catch-all`,label:`File-Based Catch-All Routes`},{id:`route-priority`,label:`Route Priority`},{id:`use-cases`,label:`Use Cases`},{id:`complete-example`,label:`Complete Example`}],m=`Catch-All Routes`,h=`https://bini.js.org/docs/catch-all-routes`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/catch-all-routes.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to use catch-all routes to match multiple URL segments in Bini.js.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{id:`what-are-catch-all-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`What are Catch-All Routes?`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Catch-all routes allow you to match multiple URL segments in a single route. They are defined using the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` syntax, where the parameter becomes an array of the matched segments.`]}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`This is useful for creating flexible routing patterns like documentation pages, nested categories, or any URL structure with variable depth.`}),(0,f.jsx)(_,{code:`src/app/
└── docs/
    └── [...slug]/
        └── page.tsx       → /docs/getting-started
                            → /docs/api/reference
                            → /docs/guides/routing/basics`})]}),(0,f.jsxs)(a.section,{id:`basic-usage`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a catch-all route by naming a folder or file with square brackets and three dots: `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),`.`]}),(0,f.jsx)(_,{code:`src/app/
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
        └── page.tsx       → /users/1/2/3`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The route will match any URL that starts with the parent path and has at least one segment.`})]}),(0,f.jsxs)(a.section,{id:`accessing-parameters`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Accessing Parameters`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),` (auto-imported) to access the catch-all parameter as an array:`]}),(0,f.jsx)(_,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array of the URL segments
  
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,f.jsx)(v,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`]]})]}),(0,f.jsxs)(a.section,{id:`nested-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Catch-All Routes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes can be combined with other dynamic and static segments:`}),(0,f.jsx)(_,{code:`src/app/
├── blog/
│   ├── featured/
│   │   └── page.tsx       → /blog/featured (static - highest priority)
│   └── [...slug]/
│       └── page.tsx       → /blog/a/b/c (catch-all)
├── products/
│   └── [category]/
│       └── [...slug]/
│           └── page.tsx   → /products/electronics/phones/iphone
│                           → /products/clothing/men/shirts`}),(0,f.jsx)(_,{code:`// src/app/products/[category]/[...slug]/page.tsx
export default function ProductPage() {
  const { category, slug } = useParams()
  
  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/products/[category]/[...slug]/page.tsx`})]}),(0,f.jsxs)(a.section,{id:`optional-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-All Routes`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` to make the catch-all optional. The route will match both the parent path and any nested paths.`]}),(0,f.jsx)(_,{code:`src/app/
├── shop/
│   └── [[...slug]]/
│       └── page.tsx       → /shop
│                           → /shop/clothing
│                           → /shop/clothing/shirts
└── docs/
    └── [[...path]]/
        └── page.tsx       → /docs
                            → /docs/getting-started
                            → /docs/api/reference`}),(0,f.jsx)(_,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  
  if (!slug) {
    return <h1>Shop Home</h1>
  }
  
  return <h1>Category: {slug.join(' / ')}</h1>
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,f.jsx)(v,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`]]})]}),(0,f.jsxs)(a.section,{id:`file-based-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File-Based Catch-All Routes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes can also be defined as flat files without folders:`}),(0,f.jsx)(_,{code:`src/app/
├── docs/
│   └── [...slug].tsx      → /docs/getting-started
│                           → /docs/api/reference
├── products/
│   └── [...path].tsx      → /products/electronics/phones
│                           → /products/clothing/men
└── blog/
    └── [...slug].tsx      → /blog/2024/01/hello-world`}),(0,f.jsx)(_,{code:`// src/app/blog/[...slug].tsx
export default function BlogArchive() {
  const { slug } = useParams()
  
  return (
    <div>
      <h1>Blog Archive</h1>
      <p>Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/blog/[...slug].tsx`})]}),(0,f.jsxs)(a.section,{id:`route-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes have lower priority than static routes and dynamic single segments. The router resolves matches in this order:`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Static routes`}),` — exact matches`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Dynamic single segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Catch-all segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Optional catch-all segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`})]})]})}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Example with overlapping routes:`}),(0,f.jsx)(_,{code:`src/app/blog/
├── featured/
│   └── page.tsx           → /blog/featured (static - highest priority)
├── [slug]/
│   └── page.tsx           → /blog/hello-world (dynamic)
└── [...slug]/
    └── page.tsx           → /blog/2024/01/hello-world (catch-all)`}),(0,f.jsx)(v,{headers:[`URL`,`Matched Route`],rows:[[`/blog/featured`,`featured/page.tsx (static)`],[`/blog/hello-world`,`[slug]/page.tsx (dynamic)`],[`/blog/2024/01/hello-world`,`[...slug]/page.tsx (catch-all)`]]})]}),(0,f.jsxs)(a.section,{id:`use-cases`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Use Cases`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Catch-all routes are ideal for:`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Documentation pages`}),` — Multi-level documentation with variable depth`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`E-commerce categories`}),` — Nested category structures like `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/products/electronics/phones/iphone`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Blog archives`}),` — Date-based archives like `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/2024/01/hello-world`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`CMS content`}),` — Content pages with flexible URL structures`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Multi-language sites`}),` — Language prefixes with variable paths like `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/en/docs/getting-started`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`API versioning`}),` — API routes with version segments like `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/api/v1/users/123`})]})]})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here is a comprehensive example showing all catch-all route patterns:`}),(0,f.jsx)(_,{code:`src/app/
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
└── api/
    └── v1/
        └── [...path].ts       → /api/v1/users/123 (flat file catch-all)`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/dynamic-routes`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic Routes`})]})]}),(0,f.jsxs)(n,{to:`/docs/mdx-markdown`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`MDX and Markdown`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};