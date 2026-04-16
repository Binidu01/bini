import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";var l=t(e(),1),u=n();function d({code:e,filename:t}){let[n,r]=l.useState(!1);return(0,u.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,u.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,u.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,u.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,u.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,u.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,u.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,u.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function f({headers:e,rows:t}){return(0,u.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,u.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,u.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,u.jsx)(`tr`,{children:e.map((e,t)=>(0,u.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,u.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,u.jsx)(`tr`,{children:e.map((e,t)=>(0,u.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function p(){return(0,u.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,u.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,u.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,u.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,u.jsx)(a,{}),(0,u.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,u.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,u.jsx)(c,{children:(0,u.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,u.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Folder-Based Routing`}),(0,u.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how folders define URL segments and create nested routes automatically in Bini.js.`})]}),(0,u.jsx)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,u.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Bini.js uses a `,(0,u.jsx)(`strong`,{className:`text-white`,children:`folder-based routing system`}),` where the folder structure inside `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` directly maps to URL paths. This makes routing intuitive and eliminates the need for manual route configuration.`]})}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Folder Routing`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Each folder inside `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` becomes a URL segment. Add a `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` file inside to make the route publicly accessible.`]}),(0,u.jsx)(d,{code:`src/app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   └── page.tsx      → /blog
└── contact/
    └── page.tsx      → /contact`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates four routes: `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/`}),`, `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),`, `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/blog`}),`, and `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/contact`}),`.`]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Routes`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Nest folders inside each other to create nested URL segments. Each level adds another segment to the URL path.`}),(0,u.jsx)(d,{code:`src/app/
├── blog/
│   ├── page.tsx           → /blog
│   ├── authors/
│   │   └── page.tsx       → /blog/authors
│   └── categories/
│       ├── page.tsx       → /blog/categories
│       └── [name]/
│           └── page.tsx   → /blog/categories/tech`}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The folder structure directly mirrors the URL structure. Deep nesting is fully supported.`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use square brackets to create dynamic route segments that match any value. Access the value with `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),`.`]}),(0,u.jsx)(d,{code:`src/app/
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
            └── page.tsx   → /users/john/settings`}),(0,u.jsx)(d,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return <h1>Post: {slug}</h1>
}`,filename:`app/blog/[slug]/page.tsx`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Segments`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[...segment]`}),` to match multiple URL segments. The parameter becomes an array of values.`]}),(0,u.jsx)(d,{code:`src/app/
├── docs/
│   └── [...slug]/
│       └── page.tsx       → /docs/getting-started
│                           → /docs/api/reference
│                           → /docs/guides/routing/basics`}),(0,u.jsx)(d,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array: ['api', 'reference']
  
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,u.jsx)(f,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all Segments`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[[...segment]]`}),` to make the catch-all optional. The route will also match the parent path.`]}),(0,u.jsx)(d,{code:`src/app/
├── shop/
│   └── [[...slug]]/
│       └── page.tsx       → /shop
│                           → /shop/clothing
│                           → /shop/clothing/shirts`}),(0,u.jsx)(d,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  // slug is undefined for /shop
  // slug is ['clothing'] for /shop/clothing
  
  if (!slug) {
    return <h1>Shop Home</h1>
  }
  
  return <h1>Category: {slug.join(' / ')}</h1>
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,u.jsx)(f,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Groups`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use parentheses `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`(group)`}),` to organize routes without affecting the URL. Perfect for grouping related pages or applying shared layouts.`]}),(0,u.jsx)(d,{code:`src/app/
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
        └── page.tsx       → /dashboard`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Notice how `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`(marketing)`}),`, `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`(shop)`}),`, and `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`(admin)`}),` don't appear in the URLs. They're purely for organization.`]}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`Route groups are especially useful for:`}),(0,u.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,u.jsx)(`li`,{children:`Organizing routes by feature or team`}),(0,u.jsx)(`li`,{children:`Applying different layouts to sections of your app`}),(0,u.jsx)(`li`,{children:`Creating multiple root layouts`}),(0,u.jsx)(`li`,{children:`Keeping the URL structure clean while maintaining organized code`})]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Private Folders`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Prefix a folder with an underscore `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`_folder`}),` to exclude it from routing. Perfect for components, utilities, and other non-route files.`]}),(0,u.jsx)(d,{code:`src/app/
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
└── page.tsx               → /`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Private folders can be placed anywhere in the `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`app`}),` directory and are completely ignored by the router.`]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,u.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,u.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Static routes`}),` — exact matches (e.g., `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/authors`}),`)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Dynamic single segments`}),` — `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Catch-all segments`}),` — `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{className:`text-white`,children:`Optional catch-all segments`}),` — `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`})]})]})}),(0,u.jsx)(`p`,{className:`text-slate-300`,children:`This ensures predictable routing behavior and prevents conflicts between different route types.`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here's a comprehensive folder structure showing all routing patterns:`}),(0,u.jsx)(d,{code:`src/app/
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
└── not-found.tsx              ← Custom 404 page`})]}),(0,u.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,u.jsxs)(r,{to:`/docs/linking-and-navigating`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,u.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,u.jsx)(`div`,{className:`text-sm font-medium`,children:`Linking and Navigating`})]})]}),(0,u.jsxs)(r,{to:`/docs/file-based-routing`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,u.jsx)(`div`,{className:`text-sm font-medium`,children:`File-Based Routing`})]}),(0,u.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{p as default};