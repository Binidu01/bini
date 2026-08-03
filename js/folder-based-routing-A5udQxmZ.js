import{c as e,i as t,n,t as r}from"./index-BJ21JKIc.js";import{n as i,v as a}from"./Layout-FK96wMry.js";import{t as o}from"./arrow-left-BHif1YL5.js";import{t as s}from"./arrow-right-BG3O81G6.js";import{n as c,r as l,t as u}from"./TableOfContents-DuPQnoEA.js";var d=e(t(),1),f=r(),p=[{id:`basic-folder-routing`,label:`Basic Folder Routing`},{id:`nested-routes`,label:`Nested Routes`},{id:`dynamic-segments`,label:`Dynamic Segments`},{id:`catch-all-segments`,label:`Catch-all Segments`},{id:`optional-catch-all`,label:`Optional Catch-all Segments`},{id:`route-groups`,label:`Route Groups`},{id:`private-folders`,label:`Private Folders`},{id:`nearest-wins-folders`,label:`Nearest Wins with Folders`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}],m=`Folder-Based Routing`,h=`https://bini.js.org/docs/folder-based-routing`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/folder-based-routing.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how folders define URL segments and create nested routes automatically in Bini.js.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsx)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,f.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Bini.js uses a `,(0,f.jsx)(`strong`,{className:`text-white`,children:`folder-based routing system`}),` where the folder structure inside `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` directly maps to URL paths. This makes routing intuitive and eliminates the need for manual route configuration.`]})}),(0,f.jsxs)(a.section,{id:`basic-folder-routing`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Folder Routing`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Each folder inside `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` becomes a URL segment. Add a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` file inside to make the route publicly accessible.`]}),(0,f.jsx)(_,{code:`src/app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   └── page.tsx      → /blog
└── contact/
    └── page.tsx      → /contact`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates four routes: `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/blog`}),`, and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/contact`}),`.`]})]}),(0,f.jsxs)(a.section,{id:`nested-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Routes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Nest folders inside each other to create nested URL segments. Each level adds another segment to the URL path.`}),(0,f.jsx)(_,{code:`src/app/
├── blog/
│   ├── page.tsx           → /blog
│   ├── authors/
│   │   └── page.tsx       → /blog/authors
│   └── categories/
│       ├── page.tsx       → /blog/categories
│       └── [name]/
│           └── page.tsx   → /blog/categories/tech`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The folder structure directly mirrors the URL structure. Deep nesting is fully supported.`})]}),(0,f.jsxs)(a.section,{id:`dynamic-segments`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Segments`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use square brackets to create dynamic route segments that match any value. Access the value with `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useParams()`}),`.`]}),(0,f.jsx)(_,{code:`src/app/
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
            └── page.tsx   → /users/john/settings`}),(0,f.jsx)(_,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return <h1>Post: {slug}</h1>
}`,filename:`app/blog/[slug]/page.tsx`})]}),(0,f.jsxs)(a.section,{id:`catch-all-segments`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-all Segments`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...segment]`}),` to match multiple URL segments. The parameter becomes an array of values.`]}),(0,f.jsx)(_,{code:`src/app/
├── docs/
│   └── [...slug]/
│       └── page.tsx       → /docs/getting-started
│                           → /docs/api/reference
│                           → /docs/guides/routing/basics`}),(0,f.jsx)(_,{code:`// src/app/docs/[...slug]/page.tsx
export default function DocsPage() {
  const { slug } = useParams()
  // slug is an array: ['api', 'reference']
  
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
    </div>
  )
}`,filename:`app/docs/[...slug]/page.tsx`}),(0,f.jsx)(v,{headers:[`URL`,`slug value`],rows:[[`/docs/getting-started`,`['getting-started']`],[`/docs/api/reference`,`['api', 'reference']`],[`/docs/guides/routing/basics`,`['guides', 'routing', 'basics']`]]})]}),(0,f.jsxs)(a.section,{id:`optional-catch-all`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Optional Catch-all Segments`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[[...segment]]`}),` to make the catch-all optional. The route will also match the parent path.`]}),(0,f.jsx)(_,{code:`src/app/
├── shop/
│   └── [[...slug]]/
│       └── page.tsx       → /shop
│                           → /shop/clothing
│                           → /shop/clothing/shirts`}),(0,f.jsx)(_,{code:`// src/app/shop/[[...slug]]/page.tsx
export default function ShopPage() {
  const { slug } = useParams()
  // slug is undefined for /shop
  // slug is ['clothing'] for /shop/clothing
  
  if (!slug) {
    return <h1>Shop Home</h1>
  }
  
  return <h1>Category: {slug.join(' / ')}</h1>
}`,filename:`app/shop/[[...slug]]/page.tsx`}),(0,f.jsx)(v,{headers:[`URL`,`slug value`],rows:[[`/shop`,`undefined`],[`/shop/clothing`,`['clothing']`],[`/shop/clothing/shirts`,`['clothing', 'shirts']`]]})]}),(0,f.jsxs)(a.section,{id:`route-groups`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Groups`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use parentheses `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`(group)`}),` to organize routes without affecting the URL. Perfect for grouping related pages or applying shared layouts.`]}),(0,f.jsx)(_,{code:`src/app/
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
        └── page.tsx       → /dashboard`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Notice how `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`(marketing)`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`(shop)`}),`, and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`(admin)`}),` don't appear in the URLs. They're purely for organization.`]})]}),(0,f.jsxs)(a.section,{id:`private-folders`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Private Folders`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Prefix a folder with an underscore `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`_folder`}),` to exclude it from routing. Perfect for components, utilities, and other non-route files.`]}),(0,f.jsx)(_,{code:`src/app/
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
└── page.tsx               → /`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Private folders can be placed anywhere in the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`app`}),` directory and are completely ignored by the router.`]})]}),(0,f.jsxs)(a.section,{id:`nearest-wins-folders`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.47},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nearest Wins with Folders`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),`, and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` follow the folder hierarchy using `,(0,f.jsx)(`strong`,{className:`text-white`,children:`"nearest wins"`}),` resolution. A file in a subfolder only affects that subfolder and shadows (without deleting) the same file in any ancestor folder.`]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Folder Hierarchy and Boundaries`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[`Each folder can define its own `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),`, and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`})]}),(0,f.jsx)(`li`,{children:`A file in a subfolder only affects routes inside that subfolder`}),(0,f.jsx)(`li`,{children:`It shadows the same file in ancestor folders for routes in that subfolder`}),(0,f.jsx)(`li`,{children:`Routes without a closer match fall through to the nearest ancestor`}),(0,f.jsx)(`li`,{children:`If no file exists anywhere in the hierarchy, the built-in default is used`})]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Example Structure`}),(0,f.jsx)(_,{code:`src/app/
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
        └── page.tsx         ← Uses blog/loading.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Resolution Flow`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When a route needs a boundary file, the router checks:`}),(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300 mb-4`,children:[(0,f.jsx)(`li`,{children:`The route's own folder first`}),(0,f.jsx)(`li`,{children:`Each parent folder (going up the hierarchy)`}),(0,f.jsx)(`li`,{children:`The built-in default if no file is found`})]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Built-in Defaults`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Loading:`}),` A built-in dark-mode-aware spinner`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Error:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`null`}),` in development (Vite overlay takes over), a generic "Something went wrong" UI with a "Try again" button in production`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Not Found:`}),` A built-in 404 page`]})]})]}),(0,f.jsxs)(a.section,{id:`route-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Route Priority`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple routes could match a URL, Bini.js resolves them in this order:`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Static routes`}),` — exact matches`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Dynamic single segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[slug]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Catch-all segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[...slug]`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Optional catch-all segments`}),` — `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`[[...slug]]`})]})]})}),(0,f.jsx)(`p`,{className:`text-slate-300`,children:`This ensures predictable routing behavior and prevents conflicts between different route types.`})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here is a comprehensive folder structure showing all routing patterns:`}),(0,f.jsx)(_,{code:`src/app/
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
└── not-found.tsx              ← Custom 404 page`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/linking-and-navigating`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Linking and Navigating`})]})]}),(0,f.jsxs)(n,{to:`/docs/file-based-routing`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`File-Based Routing`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};