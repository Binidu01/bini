import{c as e,i as t,n,t as r}from"./index-DBGHh9uN.js";import{n as i,v as a}from"./Layout-DyBCtrrd.js";import{t as o}from"./arrow-left-jWXc6dTx.js";import{t as s}from"./arrow-right-DcmUZjEP.js";import{n as c,r as l,t as u}from"./TableOfContents-B7Sgj72V.js";var d=e(t(),1),f=r(),p=[{id:`special-files`,label:`Special Files`},{id:`page-file`,label:`page.tsx`},{id:`mdx-pages`,label:`MDX & Markdown Pages`},{id:`layout-file`,label:`layout.tsx`},{id:`loading-file`,label:`loading.tsx`},{id:`error-file`,label:`error.tsx`},{id:`not-found-file`,label:`not-found.tsx`},{id:`nearest-wins`,label:`Nearest Wins Resolution`},{id:`file-combinations`,label:`File Combinations`},{id:`file-priority`,label:`File Priority`},{id:`complete-example`,label:`Complete Example`}],m=`File-Based Routing`,h=`https://bini.js.org/docs/file-based-routing`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/file-based-routing.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how special files like page.tsx, layout.tsx, loading.tsx, error.tsx, and MDX pages define route behavior in Bini.js.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsx)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,f.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Bini.js uses special file conventions to define route behavior. Each file has a specific purpose and is automatically recognized by the router.`})}),(0,f.jsxs)(a.section,{id:`special-files`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Special Files`}),(0,f.jsx)(v,{headers:[`File`,`Purpose`],rows:[[`page.tsx / page.jsx`,`Defines a public route — required to make a route accessible`],[`page.mdx / page.md`,`MDX/Markdown content route — full JSX/import/export support`],[`layout.tsx / layout.jsx`,`Shared UI that wraps pages and nested layouts`],[`loading.tsx / loading.jsx`,`Loading UI shown while page content streams`],[`error.tsx / error.jsx`,`Error UI when something breaks in a route or its children`],[`not-found.tsx / not-found.jsx`,`Custom 404 page for unmatched routes`],[`hello.ts / hello.js`,`API endpoint (in src/app/api/)`]]}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Files must be placed in the correct location within `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` to work properly.`]})]}),(0,f.jsxs)(a.section,{id:`page-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`page.tsx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` file defines a public route. Without it, the folder is not accessible via URL.`]}),(0,f.jsx)(_,{code:`// src/app/page.tsx
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
}`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Each `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` must have a `,(0,f.jsx)(`strong`,{className:`text-white`,children:`default export`}),` of a React component.`]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Page with Dynamic Params`}),(0,f.jsx)(_,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return (
    <article>
      <h1>Post: {slug}</h1>
    </article>
  )
}`,filename:`app/blog/[slug]/page.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Pages`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Pages can also be defined as flat files without a folder:`}),(0,f.jsx)(_,{code:`src/app/
├── page.tsx              → /
├── about.tsx             → /about
├── contact.tsx           → /contact
└── blog/
    └── [slug].tsx        → /blog/:slug`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates routes at `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/contact`}),` without needing separate folders.`]})]}),(0,f.jsxs)(a.section,{id:`mdx-pages`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.22},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`MDX & Markdown Pages`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js supports `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` files as content routes out of the box — no setup required. `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`@mdx-js/rollup`}),` is bundled internally.`]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`MDX Page Example`}),(0,f.jsx)(_,{code:`---
---

# About us

This is regular **markdown**, rendered as JSX under the hood. You can also
drop in real components:

<button className="rounded bg-cyan-500 px-4 py-2 text-white">
  Click me
</button>

## Features

- File-based routing
- MDX & Markdown support
- Nested layouts`,filename:`app/about.mdx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`MDX with Imports`}),(0,f.jsx)(_,{code:`import { Button } from '@/components/Button'

# My Blog Post

<Button>Click me</Button>`,filename:`app/blog/[slug].mdx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File MDX Routes`}),(0,f.jsx)(_,{code:`src/app/
├── about.mdx            → /about
├── blog/
│   ├── page.tsx         → /blog
│   └── [slug].mdx       → /blog/:slug
└── contact.md           → /contact`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Both `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` are compiled through the same MDX pipeline (full JSX/import/export support in both). Auto-imports (`,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useState`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`Link`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv`}),`, etc.) apply to MDX files the same as any other page.`]}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mt-4`,children:(0,f.jsxs)(`p`,{className:`text-slate-300 text-sm`,children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Note:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` must stay `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.tsx`}),`/`,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.jsx`}),` — they define app structure rather than content.`]})}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Extension Priority`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`When multiple files share the same base name (e.g., both `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.mdx`}),` exist in the same folder):`]}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-4`,children:(0,f.jsx)(`code`,{className:`text-cyan-400 text-sm`,children:`.tsx > .jsx > .ts > .js > .mdx > .md`})}),(0,f.jsx)(`p`,{className:`text-slate-300`,children:`The higher-priority file wins; the lower-priority one is simply ignored for that route.`})]}),(0,f.jsxs)(a.section,{id:`layout-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`layout.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Layouts wrap pages and other layouts, providing shared UI that persists across navigation.`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Root Layout`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The root layout at `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/layout.tsx`}),` is `,(0,f.jsx)(`strong`,{className:`text-white`,children:`required`}),`. It wraps all pages in your application.`]}),(0,f.jsx)(_,{code:`// src/app/layout.tsx
export default function RootLayout() {
  return <Outlet />
}`,filename:`app/layout.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Nested Layout`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create layouts for specific sections by adding `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),` in subdirectories.`]}),(0,f.jsx)(_,{code:`// src/app/dashboard/layout.tsx
export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main><Outlet /></main>
    </div>
  )
}`,filename:`app/dashboard/layout.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Layout Nesting`}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx            ← Wraps everything
├── page.tsx              ← /
└── dashboard/
    ├── layout.tsx        ← Wraps /dashboard/*
    ├── page.tsx          ← /dashboard
    └── settings/
        └── page.tsx      ← /dashboard/settings`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The root layout wraps the dashboard layout, which wraps the settings page.`})]}),(0,f.jsxs)(a.section,{id:`loading-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`loading.tsx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` file provides a loading UI while page content is being loaded. It wraps the page in a Suspense boundary.`]}),(0,f.jsx)(_,{code:`// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-cyan-500" />
    </div>
  )
}`,filename:`app/loading.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`You can also create route-specific loading UI:`}),(0,f.jsx)(_,{code:`// src/app/dashboard/loading.tsx
export default function DashboardLoading() {
  return <DashboardSkeleton />
}`,filename:`app/dashboard/loading.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The loading UI is shown immediately on navigation while the page content streams in.`})]}),(0,f.jsxs)(a.section,{id:`error-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.32},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`error.tsx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` file catches errors thrown anywhere in a route or its children. It wraps the route and its children in an Error Boundary.`]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Basic Error Component`}),(0,f.jsx)(_,{code:`// src/app/dashboard/error.tsx
export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6">
      <h2>Something went wrong!</h2>
      <p className="text-red-400">{error.message}</p>
      <button 
        onClick={reset}
        className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  )
}`,filename:`app/dashboard/error.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Error Props`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Your `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` component receives two props:`]}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error`}),` — The thrown Error object with message and stack trace`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`reset`}),` — A function that clears the error state and re-renders children`]})]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Folder-Scoped Errors`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Place `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` in any folder to catch errors only for that route and its children:`]}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx
├── page.tsx
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── error.tsx          ← Only catches errors in /dashboard/*
│   └── settings/
│       └── page.tsx       ← Also wrapped by dashboard/error.tsx
└── blog/
    ├── page.tsx
    └── error.tsx           ← Only catches errors in /blog/*`})]}),(0,f.jsxs)(a.section,{id:`not-found-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`not-found.tsx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` file defines a custom 404 page for unmatched routes.`]}),(0,f.jsx)(_,{code:`// src/app/not-found.tsx
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
}`,filename:`app/not-found.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`You can also trigger the 404 page programmatically:`}),(0,f.jsx)(_,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  
  if (!post) {
    return <NotFound />
  }
  
  return <article>{post.content}</article>
}`})]}),(0,f.jsxs)(a.section,{id:`nearest-wins`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.38},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nearest Wins Resolution`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),`, and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` all use `,(0,f.jsx)(`strong`,{className:`text-white`,children:`"nearest wins"`}),` resolution — a file in a subfolder only affects that subfolder and shadows (without deleting) the same file in any ancestor folder.`]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`How It Works`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsx)(`li`,{children:`A file in a subfolder only affects routes inside that subfolder`}),(0,f.jsx)(`li`,{children:`It shadows (but doesn't delete) the same file in ancestor folders`}),(0,f.jsx)(`li`,{children:`Routes without a closer match fall through to the nearest ancestor`}),(0,f.jsx)(`li`,{children:`Built-in defaults apply if nothing exists anywhere`})]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Example Structure`}),(0,f.jsx)(_,{code:`src/app/
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
        └── page.tsx         ← Uses blog/loading.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Resolution Flow`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When a route needs a boundary file (loading, error, or not-found):`}),(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300 mb-4`,children:[(0,f.jsx)(`li`,{children:`Check the route's own folder first`}),(0,f.jsx)(`li`,{children:`If not found, check each parent folder (going up)`}),(0,f.jsx)(`li`,{children:`If still not found, use the built-in default`})]}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Built-in Defaults`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Loading:`}),` Built-in dark-mode-aware spinner`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Error:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`null`}),` in dev (Vite overlay takes over), generic "Something went wrong" in production`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Not Found:`}),` Built-in 404 page`]})]})]}),(0,f.jsxs)(a.section,{id:`file-combinations`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Combinations`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Special files can be combined in the same folder to create rich route behavior:`}),(0,f.jsx)(_,{code:`src/app/dashboard/
├── layout.tsx            ← Shared layout for all dashboard pages
├── loading.tsx           ← Loading UI for dashboard
├── error.tsx             ← Error UI for dashboard
├── page.tsx              ← Dashboard home
├── settings/
│   ├── page.tsx          ← Settings page (inherits layout, loading, error)
│   └── loading.tsx       ← Override loading UI just for settings
└── profile/
    ├── layout.tsx        ← Additional nested layout for profile
    └── page.tsx          ← Profile page`}),(0,f.jsx)(v,{headers:[`Route`,`Files Used`],rows:[[`/dashboard`,`layout.tsx + loading.tsx + error.tsx + page.tsx`],[`/dashboard/settings`,`layout.tsx + loading.tsx (from settings) + error.tsx (from dashboard) + page.tsx`],[`/dashboard/profile`,`layout.tsx + profile/layout.tsx + loading.tsx + error.tsx + page.tsx`]]})]}),(0,f.jsxs)(a.section,{id:`file-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Priority`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple files could apply to a route, they are resolved in this order (from outermost to innermost):`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,f.jsxs)(`li`,{children:[`Root `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`})]}),(0,f.jsxs)(`li`,{children:[`Nested `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),` files (from root to leaf)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` (closest to the page)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` (closest to the page)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` (if triggered)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` or `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.mdx`})]})]})})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here's a comprehensive file structure showing all special files:`}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx                 ← Root layout (required)
├── page.tsx                   → /
├── loading.tsx                ← Global loading UI
├── error.tsx                  ← Global error UI
├── not-found.tsx              ← Global 404 page
├── about.mdx                  → /about (MDX page)
├── contact.md                 → /contact (Markdown page)
├── blog/
│   ├── layout.tsx             ← Blog layout
│   ├── page.tsx               → /blog
│   ├── loading.tsx            ← Blog loading UI
│   ├── error.tsx              ← Blog error UI
│   ├── [slug]/
│   │   └── page.tsx           → /blog/:slug
│   └── _components/           ← Private folder (not routable)
│       └── PostCard.tsx
├── dashboard/
│   ├── layout.tsx             ← Dashboard layout
│   ├── page.tsx               → /dashboard
│   ├── loading.tsx            ← Dashboard loading UI
│   ├── error.tsx              ← Dashboard error UI
│   ├── settings/
│   │   └── page.tsx           → /dashboard/settings
│   └── profile/
│       ├── layout.tsx         ← Nested profile layout
│       └── page.tsx           → /dashboard/profile
└── api/                       ← API routes
    ├── hello.ts               → /api/hello
    └── users/
        └── [id].ts            → /api/users/:id`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/folder-based-routing`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Folder-Based Routing`})]})]}),(0,f.jsxs)(n,{to:`/docs/dynamic-routes`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic Routes`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};