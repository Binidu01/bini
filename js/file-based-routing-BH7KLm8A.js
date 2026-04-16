import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";var l=t(e(),1),u=n();function d({code:e,filename:t}){let[n,r]=l.useState(!1);return(0,u.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,u.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,u.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,u.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,u.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,u.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,u.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,u.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function f({headers:e,rows:t}){return(0,u.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,u.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,u.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,u.jsx)(`tr`,{children:e.map((e,t)=>(0,u.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,u.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,u.jsx)(`tr`,{children:e.map((e,t)=>(0,u.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function p(){return(0,u.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,u.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,u.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,u.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,u.jsx)(a,{}),(0,u.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,u.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,u.jsx)(c,{children:(0,u.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,u.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`File-Based Routing`}),(0,u.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how special files like page.tsx, layout.tsx, and loading.tsx define route behavior in Bini.js.`})]}),(0,u.jsx)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,u.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Bini.js uses special file conventions to define route behavior. Each file has a specific purpose and is automatically recognized by the router.`})}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Special Files`}),(0,u.jsx)(f,{headers:[`File`,`Purpose`],rows:[[`page.tsx`,`Defines a public route — required to make a route accessible`],[`layout.tsx`,`Shared UI that wraps pages and nested layouts`],[`loading.tsx`,`Loading UI shown while page content streams`],[`not-found.tsx`,`Custom 404 page for unmatched routes`],[`hello.ts`,`API endpoint (in src/app/api/)`]]}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Files must be placed in the correct location within `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` to work properly.`]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`page.tsx`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` file defines a public route. Without it, the folder is not accessible via URL.`]}),(0,u.jsx)(d,{code:`// src/app/page.tsx
export default function HomePage() {
  return <h1>Welcome to Bini.js!</h1>
}

// src/app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>
}

// src/app/blog/page.tsx
export default function BlogPage() {
  return <h1>Blog</h1>
}`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Each `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` must have a `,(0,u.jsx)(`strong`,{className:`text-white`,children:`default export`}),` of a React component.`]}),(0,u.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Page with Dynamic Params`}),(0,u.jsx)(d,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return (
    <article>
      <h1>Post: {slug}</h1>
    </article>
  )
}`,filename:`app/blog/[slug]/page.tsx`}),(0,u.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Pages`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Pages can also be defined as flat files without a folder:`}),(0,u.jsx)(d,{code:`src/app/
├── page.tsx              → /
├── about.tsx             → /about
├── contact.tsx           → /contact
└── blog/
    └── [slug].tsx        → /blog/:slug`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates routes at `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),` and `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`/contact`}),` without needing separate folders.`]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`layout.tsx`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Layouts wrap pages and other layouts, providing shared UI that persists across navigation.`}),(0,u.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Root Layout`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The root layout at `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/layout.tsx`}),` is `,(0,u.jsx)(`strong`,{className:`text-white`,children:`required`}),`. It wraps all pages in your application.`]}),(0,u.jsx)(d,{code:`// src/app/layout.tsx
export default function RootLayout() {
  return <Outlet />
}`,filename:`app/layout.tsx`}),(0,u.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Nested Layout`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create layouts for specific sections by adding `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),` in subdirectories.`]}),(0,u.jsx)(d,{code:`// src/app/dashboard/layout.tsx
export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main><Outlet /></main>
    </div>
  )
}`,filename:`app/dashboard/layout.tsx`}),(0,u.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Layout Nesting`}),(0,u.jsx)(d,{code:`src/app/
├── layout.tsx            ← Wraps everything
├── page.tsx              ← /
└── dashboard/
    ├── layout.tsx        ← Wraps /dashboard/*
    ├── page.tsx          ← /dashboard
    └── settings/
        └── page.tsx      ← /dashboard/settings`}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The root layout wraps the dashboard layout, which wraps the settings page.`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`loading.tsx`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` file provides a loading UI while page content is being loaded. It wraps the page in a Suspense boundary.`]}),(0,u.jsx)(d,{code:`// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-cyan-500" />
    </div>
  )
}`,filename:`app/loading.tsx`}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`You can also create route-specific loading UI:`}),(0,u.jsx)(d,{code:`// src/app/dashboard/loading.tsx
export default function DashboardLoading() {
  return <DashboardSkeleton />
}`,filename:`app/dashboard/loading.tsx`}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The loading UI is shown immediately on navigation while the page content streams in.`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`not-found.tsx`}),(0,u.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` file defines a custom 404 page for unmatched routes.`]}),(0,u.jsx)(d,{code:`// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
      <p className="text-slate-400 mb-4">Page not found</p>
      <Link to="/" className="text-cyan-400 hover:underline">
        Return Home
      </Link>
    </div>
  )
}`,filename:`app/not-found.tsx`}),(0,u.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`You can also trigger the 404 page programmatically:`}),(0,u.jsx)(d,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  
  if (!post) {
    return <NotFound />
  }
  
  return <article>{post.content}</article>
}`})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Combinations`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Special files can be combined in the same folder to create rich route behavior:`}),(0,u.jsx)(d,{code:`src/app/dashboard/
├── layout.tsx            ← Shared layout for all dashboard pages
├── loading.tsx           ← Loading UI for dashboard
├── page.tsx              ← Dashboard home
├── settings/
│   ├── page.tsx          ← Settings page (inherits layout and loading)
│   └── loading.tsx       ← Override loading UI just for settings
└── profile/
    ├── layout.tsx        ← Additional nested layout for profile
    └── page.tsx          ← Profile page`}),(0,u.jsx)(f,{headers:[`Route`,`Files Used`],rows:[[`/dashboard`,`layout.tsx + loading.tsx + page.tsx`],[`/dashboard/settings`,`layout.tsx + loading.tsx (from settings) + page.tsx`],[`/dashboard/profile`,`layout.tsx + profile/layout.tsx + loading.tsx (from dashboard) + page.tsx`]]})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Priority`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple files could apply to a route, they are resolved in this order (from outermost to innermost):`}),(0,u.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,u.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,u.jsxs)(`li`,{children:[`Root `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`})]}),(0,u.jsxs)(`li`,{children:[`Nested `,(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),` files (from root to leaf)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` (closest to the page)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` (if triggered)`]}),(0,u.jsx)(`li`,{children:(0,u.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`})})]})})]}),(0,u.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,u.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,u.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here's a comprehensive file structure showing all special files:`}),(0,u.jsx)(d,{code:`src/app/
├── layout.tsx                 ← Root layout (required)
├── page.tsx                   → /
├── loading.tsx                ← Global loading UI
├── not-found.tsx              ← Global 404 page
├── about.tsx                  → /about (flat file page)
├── blog/
│   ├── layout.tsx             ← Blog layout
│   ├── page.tsx               → /blog
│   ├── loading.tsx            ← Blog loading UI
│   ├── [slug]/                ← Dynamic route
│   │   └── page.tsx           → /blog/:slug
│   └── _components/           ← Private folder (not routable)
│       └── PostCard.tsx
├── dashboard/
│   ├── layout.tsx             ← Dashboard layout
│   ├── page.tsx               → /dashboard
│   ├── loading.tsx            ← Dashboard loading UI
│   ├── settings/
│   │   └── page.tsx           → /dashboard/settings
│   └── profile/
│       ├── layout.tsx         ← Nested profile layout
│       └── page.tsx           → /dashboard/profile
└── api/                       ← API routes
    ├── hello.ts               → /api/hello
    └── users/
        └── [id].ts            → /api/users/:id`})]}),(0,u.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,u.jsxs)(r,{to:`/docs/folder-based-routing`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,u.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,u.jsx)(`div`,{className:`text-sm font-medium`,children:`Folder-Based Routing`})]})]}),(0,u.jsxs)(r,{to:`/docs/dynamic-routes`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,u.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic Routes`})]}),(0,u.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{p as default};