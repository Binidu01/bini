import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";var l=t(e(),1),u=n();function d({code:e,filename:t}){let[n,r]=l.useState(!1);return(0,u.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,u.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,u.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,u.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,u.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,u.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,u.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,u.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function f({headers:e,rows:t}){return(0,u.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,u.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,u.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,u.jsx)(`tr`,{children:e.map((e,t)=>(0,u.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,u.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,u.jsx)(`tr`,{children:e.map((e,t)=>(0,u.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function p(){return(0,u.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,u.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,u.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,u.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,u.jsx)(a,{}),(0,u.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,u.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,u.jsx)(c,{children:(0,u.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,u.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Dynamic Routes`}),(0,u.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to create dynamic routes with parameters, catch-all segments, and optional catch-all segments.`})]}),(0,u.jsx)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,u.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Dynamic routes allow you to create pages that match a pattern rather than a static path. This is essential for pages like blog posts, product pages, and user profiles.`})}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a dynamic segment by wrapping a folder or file name in square brackets: `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[name]`}),`.`]}),(0,u.jsx)(d,{code:`src/app/
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
                            → /users/mary`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Access the parameter value using `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),`:`]}),(0,u.jsx)(d,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return <h1>Post: {slug}</h1>
}`,filename:`app/blog/[slug]/page.tsx`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Multiple Parameters`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`You can have multiple dynamic segments in a single route:`}),(0,u.jsx)(d,{code:`src/app/
└── blog/
    └── [category]/
        └── [slug]/
            └── page.tsx   → /blog/tech/hello-world
                            → /blog/lifestyle/travel-tips`}),(0,u.jsx)(d,{code:`// src/app/blog/[category]/[slug]/page.tsx
export default function BlogPost() {
  const { category, slug } = useParams()
  
  return (
    <div>
      <p>Category: {category}</p>
      <h1>Post: {slug}</h1>
    </div>
  )
}`,filename:`app/blog/[category]/[slug]/page.tsx`}),(0,u.jsx)(f,{headers:[`URL`,`params`],rows:[[`/blog/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`],[`/blog/lifestyle/travel`,`{ category: "lifestyle", slug: "travel" }`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Segments`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[...name]`}),` to match any number of segments. The parameter becomes an array.`]}),(0,u.jsx)(d,{code:`src/app/
└── docs/
    └── [...slug]/
        └── page.tsx       → /docs/getting-started
                            → /docs/api/reference
                            → /docs/guides/routing/basics`}),(0,u.jsx)(d,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array, e.g., ['api', 'reference']
  
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,u.jsx)(f,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all Segments`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[[...name]]`}),` to make the catch-all optional. The route matches even without any segments.`]}),(0,u.jsx)(d,{code:`src/app/
└── shop/
    └── [[...slug]]/
        └── page.tsx       → /shop
                            → /shop/clothing
                            → /shop/clothing/shirts`}),(0,u.jsx)(d,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  
  if (!slug) {
    return <h1>Shop Home</h1>
  }
  
  return <h1>Category: {slug.join(' / ')}</h1>
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,u.jsx)(f,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments in Layouts`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Layouts can also access dynamic parameters using `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),`:`]}),(0,u.jsx)(d,{code:`// src/app/blog/[slug]/layout.tsx
export default function BlogLayout() {
  const { slug } = useParams()
  
  return (
    <div>
      <header>Post: {slug}</header>
      <main><Outlet /></main>
    </div>
  )
}`,filename:`app/blog/[slug]/layout.tsx`}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This is useful for displaying contextual information in headers, sidebars, or breadcrumbs.`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Flat File Dynamic Routes`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Dynamic routes can also be created as flat files without folders:`}),(0,u.jsx)(d,{code:`src/app/
├── blog/
│   └── [slug].tsx        → /blog/hello-world
├── products/
│   └── [id].tsx          → /products/123
└── users/
    └── [userId].tsx      → /users/john`}),(0,u.jsx)(d,{code:`// src/app/blog/[slug].tsx
export default function BlogPost() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`,filename:`app/blog/[slug].tsx`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,u.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,u.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Static routes`}),` — exact matches (e.g., `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/featured`}),`)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Dynamic single segments`}),` — `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Catch-all segments`}),` — `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Optional catch-all segments`}),` — `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`})]})]})}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Example with overlapping routes:`}),(0,u.jsx)(d,{code:`src/app/blog/
├── featured/
│   └── page.tsx           → /blog/featured (static - highest priority)
├── [slug]/
│   └── page.tsx           → /blog/anything-else (dynamic)
└── [...slug]/
    └── page.tsx           → /blog/a/b/c (catch-all)`}),(0,u.jsx)(f,{headers:[`URL`,`Matched Route`],rows:[[`/blog/featured`,`featured/page.tsx (static)`],[`/blog/hello-world`,`[slug]/page.tsx (dynamic)`],[`/blog/a/b/c`,`[...slug]/page.tsx (catch-all)`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here's a comprehensive example showing all dynamic route patterns:`}),(0,u.jsx)(d,{code:`src/app/
├── blog/
│   ├── featured/
│   │   └── page.tsx           → /blog/featured (static)
│   ├── [slug]/
│   │   ├── layout.tsx         ← Layout for single post
│   │   └── page.tsx           → /blog/:slug (dynamic)
│   ├── [category]/
│   │   └── [slug]/
│   │       └── page.tsx       → /blog/:category/:slug (multiple dynamic)
│   └── [...slug]/
│       └── page.tsx           → /blog/a/b/c (catch-all)
├── docs/
│   └── [[...slug]]/
│       ├── layout.tsx         ← Layout for docs
│       └── page.tsx           → /docs (optional catch-all)
│                               → /docs/getting-started
└── products/
    ├── page.tsx               → /products
    ├── [id].tsx               → /products/:id (flat file)
    └── categories/
        └── [name]/
            └── page.tsx       → /products/categories/:name`})]}),(0,u.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,u.jsxs)(r,{to:`/docs/file-based-routing`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,u.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,u.jsx)(`div`,{className:`text-sm font-medium`,children:`File-Based Routing`})]})]}),(0,u.jsxs)(r,{to:`/docs/notfound`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,u.jsx)(`div`,{className:`text-sm font-medium`,children:`404 Page`})]}),(0,u.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{p as default};