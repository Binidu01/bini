import{a as e,i as t,n,t as r}from"./index-BYH3LOEz.js";import{_ as i,n as a,v as o}from"./Layout-q4xBN58K.js";import{t as s}from"./arrow-left-DpvFfGEc.js";import{t as c}from"./arrow-right-AiAWWGRh.js";import{t as l}from"./check-D3TR8B50.js";import{t as u}from"./DocSidebar-BLYiT5s9.js";import{t as d}from"./circle-alert-CIlTZoev.js";import{t as f}from"./copy-BDcJw9jI.js";import{t as p}from"./file-text-Db6EKn4S.js";import{t as m}from"./file-B1_4fEn7.js";import{t as h}from"./sparkles-CLXA3fia.js";import{n as g,t as _}from"./TableOfContents-BPLzpc3i.js";var v=i(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),y=i(`folder`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),b=i(`panels-top-left`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M9 21V9`,key:`1oto5p`}]]),x=e(t(),1),S=r(),C=[{id:`overview`,label:`Overview`},{id:`special-files`,label:`Special Files`},{id:`page-file`,label:`page.tsx / page.jsx`},{id:`mdx-pages`,label:`MDX & Markdown Pages`},{id:`layout-file`,label:`layout.tsx / layout.jsx`},{id:`loading-file`,label:`loading.tsx / loading.jsx`},{id:`error-file`,label:`error.tsx / error.jsx`},{id:`not-found-file`,label:`not-found.tsx / not-found.jsx`},{id:`nearest-wins`,label:`Nearest Wins Resolution`},{id:`file-combinations`,label:`File Combinations`},{id:`file-priority`,label:`File Priority`},{id:`dynamic-routes`,label:`Dynamic Routes`},{id:`catch-all-routes`,label:`Catch-All Routes`},{id:`api-routes`,label:`API Routes`},{id:`complete-example`,label:`Complete Example`}],w=`File-Based Routing`,T=`https://bini.js.org/docs/file-based-routing`,E=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/file-based-routing.tsx`;function D({code:e,filename:t,highlight:n}){let[r,i]=(0,x.useState)(!1);return(0,S.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,S.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,S.jsxs)(`span`,{className:`text-sm text-slate-300 font-mono flex items-center gap-2`,children:[(0,S.jsx)(m,{className:`w-3.5 h-3.5 text-cyan-400`}),t]})}),(0,S.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:r?(0,S.jsx)(l,{className:`w-3.5 h-3.5 text-green-400`}):(0,S.jsx)(f,{className:`w-3.5 h-3.5 text-slate-500`})}),(0,S.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,S.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,S.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function O({tree:e}){return(0,S.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 rounded-lg p-4 mb-6 font-mono text-sm`,children:(0,S.jsx)(`div`,{className:`text-slate-200 whitespace-pre`,children:e})})}function k({headers:e,rows:t}){return(0,S.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,S.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,S.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,S.jsx)(`tr`,{children:e.map((e,t)=>(0,S.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,S.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,S.jsx)(`tr`,{children:e.map((e,t)=>(0,S.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function A({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,icon:h,color:`text-cyan-400`},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,icon:d,color:`text-amber-400`},success:{bg:`bg-emerald-500/10`,border:`border-emerald-500/30`,icon:l,color:`text-emerald-400`},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,icon:h,color:`text-purple-400`}}[e],r=n.icon;return(0,S.jsxs)(`div`,{className:`flex items-start gap-3 p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,S.jsx)(r,{className:`w-5 h-5 ${n.color} shrink-0 mt-0.5`}),(0,S.jsx)(`div`,{className:`text-sm text-slate-200 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function j({icon:e,title:t,description:n}){return(0,S.jsxs)(`div`,{className:`p-4 rounded-xl border border-slate-700 bg-[#0a0a0a] hover:border-slate-600 transition-colors`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,S.jsx)(e,{className:`w-4 h-4 text-cyan-400`}),(0,S.jsx)(`span`,{className:`text-white font-medium text-sm`,children:t})]}),(0,S.jsx)(`p`,{className:`text-slate-400 text-xs`,children:n})]})}function M(){return(0,S.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,S.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,S.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,S.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,S.jsx)(a,{}),(0,S.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,S.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,S.jsx)(u,{children:(0,S.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,S.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,S.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:w}),(0,S.jsxs)(`p`,{className:`text-slate-400 text-sm`,children:[`Learn how special files like `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),`, and MDX pages define route behavior in Bini.js.`]})]}),(0,S.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,S.jsx)(g,{pageUrl:T,pageTitle:w})})]}),(0,S.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,S.jsx)(g,{pageUrl:T,pageTitle:w})}),(0,S.jsxs)(o.section,{id:`overview`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Overview`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js uses a file-based routing system where files in the `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` directory automatically become routes in your application. Each file has a specific purpose and is automatically recognized by the router.`]}),(0,S.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mb-6`,children:[(0,S.jsx)(j,{icon:y,title:`Zero Configuration`,description:`Routes are automatically generated from your file structure`}),(0,S.jsx)(j,{icon:v,title:`TypeScript & JavaScript`,description:`Full support for both .tsx and .jsx files`}),(0,S.jsx)(j,{icon:p,title:`MDX & Markdown`,description:`Content pages work out of the box with .mdx and .md`}),(0,S.jsx)(j,{icon:b,title:`Nested Layouts`,description:`Create shared UI that persists across navigation`})]})]}),(0,S.jsxs)(o.section,{id:`special-files`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Special Files`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js recognizes these special files in the `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` directory:`]}),(0,S.jsx)(k,{headers:[`File`,`Purpose`,`Required`],rows:[[`page.tsx / page.jsx`,`Defines a public route — required to make a route accessible`,`✅ Yes`],[`page.mdx / page.md`,`MDX/Markdown content route — full JSX/import/export support`,`❌ No`],[`layout.tsx / layout.jsx`,`Shared UI that wraps pages and nested layouts`,`✅ Yes (root)`],[`loading.tsx / loading.jsx`,`Loading UI shown while page content streams`,`❌ No`],[`error.tsx / error.jsx`,`Error UI when something breaks in a route or its children`,`❌ No`],[`not-found.tsx / not-found.jsx`,`Custom 404 page for unmatched routes`,`❌ No`]]}),(0,S.jsxs)(A,{type:`info`,children:[(0,S.jsx)(`strong`,{children:`Note:`}),` Files and directories prefixed with `,(0,S.jsx)(`code`,{children:`_`}),` or `,(0,S.jsx)(`code`,{children:`.`}),` are ignored by the router. The `,(0,S.jsx)(`code`,{children:`api/`}),` directory is excluded from page route scanning.`]})]}),(0,S.jsxs)(o.section,{id:`page-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`page.tsx / page.jsx`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` file defines a public route. Without it, the folder is not accessible via URL. Each `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` must have a `,(0,S.jsx)(`strong`,{className:`text-white`,children:`default export`}),` of a React component.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Basic Pages`}),(0,S.jsx)(D,{code:`// src/app/page.tsx
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
}`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Pages`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Pages can also be defined as flat files without a folder:`}),(0,S.jsx)(O,{tree:`src/app/
├── page.tsx              → /
├── about.tsx             → /about
├── contact.tsx           → /contact
└── blog/
    └── [slug].tsx        → /blog/:slug`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This creates routes at `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),` and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/contact`}),` without needing separate folders.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Auto-Imports`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js automatically injects imports into every page and layout file under `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),` (excluding `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/api/`}),`). You never need to write import statements for these:`]}),(0,S.jsxs)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-4 grid grid-cols-2 gap-2`,children:[(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useState`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useEffect`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useRef`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useMemo`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useCallback`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useContext`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`createContext`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useReducer`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useId`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useTransition`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useDeferredValue`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`Link`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`NavLink`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useNavigate`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useParams`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useLocation`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`useSearchParams`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`Outlet`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`getEnv`}),(0,S.jsx)(`div`,{className:`text-cyan-400 text-sm font-mono`,children:`requireEnv`})]}),(0,S.jsxs)(A,{type:`tip`,children:[(0,S.jsx)(`strong`,{children:`Auto-imports:`}),` If you already import from one of these packages manually, Bini.js detects it and skips injection — no duplicates ever.`]})]}),(0,S.jsxs)(o.section,{id:`mdx-pages`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.22},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`MDX & Markdown Pages`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js supports `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` files as content routes out of the box — no setup required. `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`@mdx-js/rollup`}),` is bundled internally.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`MDX Page Example`}),(0,S.jsx)(D,{code:`---
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
- Nested layouts`,filename:`app/about.mdx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`MDX with Imports`}),(0,S.jsx)(D,{code:`import { Button } from '@/components/Button'

# My Blog Post

<Button>Click me</Button>`,filename:`app/blog/[slug].mdx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File MDX Routes`}),(0,S.jsx)(O,{tree:`src/app/
├── about.mdx            → /about
├── blog/
│   ├── page.tsx         → /blog
│   └── [slug].mdx       → /blog/:slug
└── contact.md           → /contact`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Both `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` are compiled through the same MDX pipeline (full JSX/import/export support in both). Auto-imports apply to MDX files the same as any other page.`]}),(0,S.jsxs)(A,{type:`info`,children:[(0,S.jsx)(`strong`,{children:`Note:`}),` `,(0,S.jsx)(`code`,{children:`layout.tsx`}),`, `,(0,S.jsx)(`code`,{children:`not-found.tsx`}),`, `,(0,S.jsx)(`code`,{children:`loading.tsx`}),`, and `,(0,S.jsx)(`code`,{children:`error.tsx`}),` must stay `,(0,S.jsx)(`code`,{children:`.tsx`}),`/`,(0,S.jsx)(`code`,{children:`.jsx`}),` — they define app structure rather than content.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Extension Priority`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`When multiple files share the same base name (e.g., both `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.mdx`}),` exist in the same folder):`]}),(0,S.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-4`,children:(0,S.jsx)(`code`,{className:`text-cyan-400 text-sm`,children:`.tsx > .jsx > .ts > .js > .mdx > .md`})}),(0,S.jsx)(`p`,{className:`text-slate-300`,children:`The higher-priority file wins; the lower-priority one is simply ignored for that route.`})]}),(0,S.jsxs)(o.section,{id:`layout-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`layout.tsx / layout.jsx`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Layouts wrap pages and other layouts, providing shared UI that persists across navigation. All layouts are rendered as React Router `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`<Route element>`}),` wrappers using `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`<Outlet />`}),`.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Root Layout`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The root layout at `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/layout.tsx`}),` is `,(0,S.jsx)(`strong`,{className:`text-white`,children:`required`}),`. It wraps all pages in your application and can export metadata for the entire app.`]}),(0,S.jsx)(D,{code:`// src/app/layout.tsx
export default function RootLayout() {
  return <Outlet />
}`,filename:`app/layout.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Nested Layout`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create layouts for specific sections by adding `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),` in subdirectories.`]}),(0,S.jsx)(D,{code:`// src/app/dashboard/layout.tsx
export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main><Outlet /></main>
    </div>
  )
}`,filename:`app/dashboard/layout.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Layout Nesting`}),(0,S.jsx)(O,{tree:`src/app/
├── layout.tsx            ← Wraps everything
├── page.tsx              → /
└── dashboard/
    ├── layout.tsx        ← Wraps /dashboard/*
    ├── page.tsx          → /dashboard
    └── settings/
        └── page.tsx      → /dashboard/settings`}),(0,S.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The root layout wraps the dashboard layout, which wraps the settings page.`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Layout Metadata`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Export `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`metadata`}),` from any layout. Root layout metadata is injected into `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`index.html`}),` at build time. Nested layout titles update `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`document.title`}),` at runtime.`]}),(0,S.jsx)(D,{code:``,filename:`app/dashboard/layout.tsx`})]}),(0,S.jsxs)(o.section,{id:`loading-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`loading.tsx / loading.jsx`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` file provides a loading UI while page content is being loaded. It wraps the page in a Suspense boundary.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Global Loading`}),(0,S.jsx)(D,{code:`// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-cyan-500" />
    </div>
  )
}`,filename:`app/loading.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route-Specific Loading`}),(0,S.jsx)(D,{code:`// src/app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-slate-700 rounded w-1/4" />
        <div className="h-32 bg-slate-700 rounded" />
        <div className="h-32 bg-slate-700 rounded" />
      </div>
    </div>
  )
}`,filename:`app/dashboard/loading.tsx`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`The loading UI is shown immediately on navigation while the page content streams in. If no `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` exists, a built-in dark-mode-aware spinner is used automatically.`]})]}),(0,S.jsxs)(o.section,{id:`error-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.32},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`error.tsx / error.jsx`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` file catches errors thrown anywhere in a route or its children. It wraps the route and its children in an Error Boundary.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Error Component`}),(0,S.jsx)(D,{code:`// src/app/dashboard/error.tsx
export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-white mb-2">Something went wrong!</h2>
      <p className="text-red-400 mb-4">{error.message}</p>
      <button 
        onClick={reset}
        className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}`,filename:`app/dashboard/error.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Error Props`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Your `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` component receives two props:`]}),(0,S.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error`}),` — The thrown Error object with message and stack trace`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`reset`}),` — A function that clears the error state and re-renders children`]})]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Folder-Scoped Errors`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Place `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` in any folder to catch errors only for that route and its children:`]}),(0,S.jsx)(O,{tree:`src/app/
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
    └── error.tsx           ← Only catches errors in /blog/*`}),(0,S.jsxs)(A,{type:`info`,children:[(0,S.jsx)(`strong`,{children:`Dev vs Production:`}),` In development, errors are also dispatched as a `,(0,S.jsx)(`code`,{children:`__bini_error__`}),` CustomEvent on window. In production, generic "Something went wrong" UI is shown if no error.tsx exists.`]})]}),(0,S.jsxs)(o.section,{id:`not-found-file`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`not-found.tsx / not-found.jsx`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` file defines a custom 404 page for unmatched routes.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Custom 404 Page`}),(0,S.jsx)(D,{code:`// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-slate-400 mb-8">Page not found</p>
      <Link to="/" className="px-6 py-3 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors">
        Return Home
      </Link>
    </div>
  )
}`,filename:`app/not-found.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Programmatic 404`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`You can also trigger the 404 page programmatically:`}),(0,S.jsx)(D,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  
  if (!post) {
    return <NotFound />
  }
  
  return <article>{post.content}</article>
}`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Scoped Not Found`}),(0,S.jsx)(D,{code:`// src/app/blog/not-found.tsx
export default function BlogNotFound() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Post not found</h1>
      <p className="text-slate-400">The blog post you're looking for doesn't exist.</p>
      <Link to="/blog" className="text-cyan-400 hover:underline">
        ← Back to blog
      </Link>
    </div>
  )
}`,filename:`app/blog/not-found.tsx`})]}),(0,S.jsxs)(o.section,{id:`nearest-wins`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.38},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nearest Wins Resolution`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),`, `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),`, and `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` all use `,(0,S.jsx)(`strong`,{className:`text-white`,children:`"nearest wins"`}),` resolution — a file in a subfolder only affects that subfolder and shadows (without deleting) the same file in any ancestor folder.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`How It Works`}),(0,S.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,S.jsx)(`li`,{children:`A file in a subfolder only affects routes inside that subfolder`}),(0,S.jsx)(`li`,{children:`It shadows (but doesn't delete) the same file in ancestor folders`}),(0,S.jsx)(`li`,{children:`Routes without a closer match fall through to the nearest ancestor`}),(0,S.jsx)(`li`,{children:`Built-in defaults apply if nothing exists anywhere`})]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Example Structure`}),(0,S.jsx)(O,{tree:`src/app/
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
        └── page.tsx         ← Uses blog/loading.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Resolution Flow`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When a route needs a boundary file (loading, error, or not-found):`}),(0,S.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300 mb-4`,children:[(0,S.jsx)(`li`,{children:`Check the route's own folder first`}),(0,S.jsx)(`li`,{children:`If not found, check each parent folder (going up)`}),(0,S.jsx)(`li`,{children:`If still not found, use the built-in default`})]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Built-in Defaults`}),(0,S.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`strong`,{className:`text-white`,children:`Loading:`}),` Built-in dark-mode-aware spinner`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`strong`,{className:`text-white`,children:`Error:`}),` `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`null`}),` in dev (Vite overlay takes over), generic "Something went wrong" in production`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`strong`,{className:`text-white`,children:`Not Found:`}),` Built-in 404 page`]})]})]}),(0,S.jsxs)(o.section,{id:`file-combinations`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Combinations`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Special files can be combined in the same folder to create rich route behavior:`}),(0,S.jsx)(O,{tree:`src/app/dashboard/
├── layout.tsx            ← Shared layout for all dashboard pages
├── loading.tsx           ← Loading UI for dashboard
├── error.tsx             ← Error UI for dashboard
├── page.tsx              ← Dashboard home
├── settings/
│   ├── page.tsx          ← Settings page (inherits layout, loading, error)
│   └── loading.tsx       ← Override loading UI just for settings
└── profile/
    ├── layout.tsx        ← Additional nested layout for profile
    └── page.tsx          ← Profile page`}),(0,S.jsx)(k,{headers:[`Route`,`Files Used`],rows:[[`/dashboard`,`layout.tsx + loading.tsx + error.tsx + page.tsx`],[`/dashboard/settings`,`layout.tsx + loading.tsx (from settings) + error.tsx (from dashboard) + page.tsx`],[`/dashboard/profile`,`layout.tsx + profile/layout.tsx + loading.tsx + error.tsx + page.tsx`]]})]}),(0,S.jsxs)(o.section,{id:`file-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`File Priority`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple files could apply to a route, they are resolved in this order (from outermost to innermost):`}),(0,S.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,S.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,S.jsxs)(`li`,{children:[`Root `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`})]}),(0,S.jsxs)(`li`,{children:[`Nested `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`layout.tsx`}),` files (from root to leaf)`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` (closest to the page)`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` (closest to the page)`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` (if triggered)`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` or `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`page.mdx`})]})]})})]}),(0,S.jsxs)(o.section,{id:`dynamic-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.48},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dynamic Routes`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create dynamic routes using `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[param]`}),` syntax in folder or file names.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Dynamic Segment`}),(0,S.jsx)(D,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return (
    <article>
      <h1 className="text-3xl font-bold text-white">Post: {slug}</h1>
    </article>
  )
}`,filename:`app/blog/[slug]/page.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flat File Dynamic Routes`}),(0,S.jsx)(O,{tree:`src/app/
├── blog/
│   └── [slug].tsx        → /blog/:slug
├── user/
│   └── [id].tsx          → /user/:id
└── product/
    └── [sku].tsx         → /product/:sku`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Using Params`}),(0,S.jsx)(D,{code:`// src/app/user/[id]/page.tsx
export default function UserProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
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
}`,filename:`app/user/[id]/page.tsx`})]}),(0,S.jsxs)(o.section,{id:`catch-all-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Catch-All Routes`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`[...param]`}),` syntax to match multiple path segments.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Catch-All Example`}),(0,S.jsx)(D,{code:`// src/app/docs/[...path]/page.tsx
export default function DocsPage() {
  const { path } = useParams()
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Documentation</h1>
      <p className="text-slate-400">Path: {path}</p>
      <ul>
        <li>Matches /docs/guide</li>
        <li>Matches /docs/guide/setup</li>
        <li>Matches /docs/guide/setup/advanced</li>
      </ul>
    </div>
  )
}`,filename:`app/docs/[...path]/page.tsx`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Priority`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Routes are matched in this order:`}),(0,S.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300 mb-4`,children:[(0,S.jsxs)(`li`,{children:[`Static routes (e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/about`}),`)`]}),(0,S.jsxs)(`li`,{children:[`Dynamic routes (e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/:slug`}),`)`]}),(0,S.jsxs)(`li`,{children:[`Catch-all routes (e.g., `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`/docs/*`}),`)`]})]}),(0,S.jsx)(`p`,{className:`text-slate-300`,children:`Routes are sorted by priority and then by path length (shortest first).`})]}),(0,S.jsxs)(o.section,{id:`api-routes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.52},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`API Routes`}),(0,S.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Write your API files in `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/api/`}),`. Handlers can be either a `,(0,S.jsx)(`code`,{className:`text-cyan-400`,children:`.fetch(request)`}),`-style app or a plain function handler.`]}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Hono App (Recommended)`}),(0,S.jsx)(D,{code:`// src/app/api/hello.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Bini.js!',
    timestamp: new Date().toISOString(),
    method: c.req.method,
  })
})

export default app`,filename:`app/api/hello.ts`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Plain Function Handler`}),(0,S.jsx)(D,{code:`// src/app/api/users.ts
export default function handler(req: Request) {
  return Response.json({
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ],
    method: req.method,
  })
}`,filename:`app/api/users.ts`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Dynamic API Routes`}),(0,S.jsx)(D,{code:`// src/app/api/users/[id].ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/users/:id', (c) => {
  const { id } = c.req.param()
  return c.json({ id, name: \`User \${id}\` })
})

app.put('/users/:id', async (c) => {
  const { id } = c.req.param()
  const body = await c.req.json()
  return c.json({ id, updated: body })
})

export default app`,filename:`app/api/users/[id].ts`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`API Route Structure`}),(0,S.jsx)(O,{tree:`src/app/api/
├── hello.ts             → /api/hello
├── users/
│   ├── index.ts         → /api/users
│   └── [id].ts          → /api/users/:id
└── posts/
    ├── index.ts         → /api/posts
    └── [...slug].ts     → /api/posts/*`}),(0,S.jsxs)(A,{type:`tip`,children:[(0,S.jsx)(`strong`,{children:`Note:`}),` Write routes without the `,(0,S.jsx)(`code`,{children:`/api`}),` prefix — Bini.js strips it before your handler sees the request. Requires `,(0,S.jsx)(`code`,{children:`npm install hono`}),` if you choose the Hono style.`]})]}),(0,S.jsxs)(o.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,S.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,S.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here's a comprehensive file structure showing all special files:`}),(0,S.jsx)(O,{tree:`src/app/
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
├── api/                       ← API routes
│   ├── hello.ts               → /api/hello
│   └── users/
│       ├── index.ts           → /api/users
│       └── [id].ts            → /api/users/:id
└── docs/
    └── [...path]/
        └── page.tsx           → /docs/* (catch-all)`}),(0,S.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Route Mapping`}),(0,S.jsx)(k,{headers:[`File Path`,`URL`,`Type`],rows:[[`app/page.tsx`,`/`,`Static`],[`app/about.mdx`,`/about`,`MDX Page`],[`app/blog/page.tsx`,`/blog`,`Static`],[`app/blog/[slug]/page.tsx`,`/blog/:slug`,`Dynamic`],[`app/dashboard/page.tsx`,`/dashboard`,`Static`],[`app/dashboard/settings/page.tsx`,`/dashboard/settings`,`Static`],[`app/dashboard/profile/page.tsx`,`/dashboard/profile`,`Static`],[`app/docs/[...path]/page.tsx`,`/docs/*`,`Catch-all`],[`app/api/hello.ts`,`/api/hello`,`API`],[`app/api/users/[id].ts`,`/api/users/:id`,`API Dynamic`]]})]}),(0,S.jsxs)(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,S.jsxs)(n,{to:`/docs/getting-started`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,S.jsx)(s,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,S.jsx)(`div`,{className:`text-sm font-medium`,children:`Getting Started`})]})]}),(0,S.jsxs)(n,{to:`/docs/dynamic-routes`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,S.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic Routes`})]}),(0,S.jsx)(c,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,S.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,S.jsx)(_,{items:C,editUrl:E})})]})})})})]})}export{M as default};