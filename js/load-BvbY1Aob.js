import{c as e,i as t,n,t as r}from"./index-o0ACruOi.js";import{n as i,v as a}from"./Layout-p4XN-U2c.js";import{t as o}from"./arrow-left-DMhJpFV9.js";import{t as s}from"./arrow-right-rWw98Xh-.js";import{n as c,r as l,t as u}from"./TableOfContents-C-1sKNja.js";var d=e(t(),1),f=r(),p=[{id:`how-it-works`,label:`How it Works`},{id:`global-loading`,label:`Global Loading UI`},{id:`nested-loading`,label:`Nested Loading UI`},{id:`skeleton-examples`,label:`Skeleton Examples`},{id:`loading-with-layout`,label:`Loading with Layout`},{id:`custom-spinners`,label:`Custom Spinners`},{id:`built-in-fallback`,label:`Built-in Fallback`}],m=`Loading UI`,h=`https://bini.js.org/docs/load`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/load.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to create custom loading states with loading.tsx for a better user experience.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsx)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,f.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Bini.js provides a built-in loading spinner, but you can create custom `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` files to show your own loading UI while page content loads.`]})}),(0,f.jsxs)(a.section,{id:`how-it-works`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`How it Works`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` file automatically wraps the page in a Suspense boundary. The loading UI is shown immediately on navigation while the page content streams in.`]}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300`,children:[(0,f.jsx)(`li`,{children:`User clicks a link or navigates to a route`}),(0,f.jsx)(`li`,{children:`Loading UI appears instantly`}),(0,f.jsx)(`li`,{children:`Page content loads in the background`}),(0,f.jsx)(`li`,{children:`Once ready, the loading UI is replaced with the actual page`})]})})]}),(0,f.jsxs)(a.section,{id:`global-loading`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Global Loading UI`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` file in the root of your `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`app`}),` directory to show a loading state for all routes.`]}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx
├── page.tsx
└── loading.tsx           ← Global loading UI`}),(0,f.jsx)(_,{code:`// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500" />
    </div>
  )
}`,filename:`app/loading.tsx`})]}),(0,f.jsxs)(a.section,{id:`nested-loading`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Loading UI`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`You can create route-specific loading states by placing `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` in subdirectories. The closest loading file to the page being navigated to will be used.`]}),(0,f.jsx)(_,{code:`src/app/
├── loading.tsx               ← Global loading (fallback)
├── page.tsx
├── blog/
│   ├── loading.tsx           ← Blog-specific loading
│   ├── page.tsx
│   └── [slug]/
│       ├── loading.tsx       ← Post-specific loading
│       └── page.tsx
└── dashboard/
    ├── loading.tsx           ← Dashboard-specific loading
    └── page.tsx`}),(0,f.jsx)(v,{headers:[`Navigation`,`Loading UI Used`],rows:[[`/ → /about`,`app/loading.tsx`],[`/ → /blog`,`app/blog/loading.tsx`],[`/ → /blog/hello-world`,`app/blog/[slug]/loading.tsx`],[`/ → /dashboard`,`app/dashboard/loading.tsx`]]})]}),(0,f.jsxs)(a.section,{id:`skeleton-examples`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Skeleton Examples`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Skeletons provide a better user experience than spinners by showing the approximate layout of the content.`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Blog Post Skeleton`}),(0,f.jsx)(_,{code:`// src/app/blog/[slug]/loading.tsx
export default function BlogPostLoading() {
  return (
    <article className="max-w-3xl mx-auto py-8 animate-pulse">
      {/* Title skeleton */}
      <div className="h-10 bg-slate-800 rounded w-3/4 mb-4" />
      
      {/* Meta skeleton */}
      <div className="flex gap-4 mb-8">
        <div className="h-4 bg-slate-800 rounded w-24" />
        <div className="h-4 bg-slate-800 rounded w-32" />
      </div>
      
      {/* Content skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-slate-800 rounded w-full" />
        <div className="h-4 bg-slate-800 rounded w-full" />
        <div className="h-4 bg-slate-800 rounded w-5/6" />
        <div className="h-4 bg-slate-800 rounded w-full" />
        <div className="h-4 bg-slate-800 rounded w-4/5" />
      </div>
    </article>
  )
}`,filename:`app/blog/[slug]/loading.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Dashboard Skeleton`}),(0,f.jsx)(_,{code:`// src/app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="flex gap-6 p-6 animate-pulse">
      {/* Sidebar skeleton */}
      <div className="w-64 space-y-3">
        <div className="h-8 bg-slate-800 rounded" />
        <div className="h-4 bg-slate-800 rounded w-3/4" />
        <div className="h-4 bg-slate-800 rounded w-2/3" />
        <div className="h-4 bg-slate-800 rounded w-4/5" />
      </div>
      
      {/* Main content skeleton */}
      <div className="flex-1 space-y-4">
        <div className="h-8 bg-slate-800 rounded w-1/3" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-slate-800 rounded" />
          <div className="h-24 bg-slate-800 rounded" />
          <div className="h-24 bg-slate-800 rounded" />
        </div>
        <div className="h-64 bg-slate-800 rounded" />
      </div>
    </div>
  )
}`,filename:`app/dashboard/loading.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Card Grid Skeleton`}),(0,f.jsx)(_,{code:`// src/app/products/loading.tsx
export default function ProductsLoading() {
  return (
    <div className="container mx-auto p-6">
      <div className="h-8 bg-slate-800 rounded w-48 mb-6 animate-pulse" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-slate-800 rounded-lg mb-3" />
            <div className="h-4 bg-slate-800 rounded w-3/4 mb-2" />
            <div className="h-4 bg-slate-800 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}`,filename:`app/products/loading.tsx`})]}),(0,f.jsxs)(a.section,{id:`loading-with-layout`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Loading with Layout`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Loading UI is shown inside the layout hierarchy. Layouts remain visible and interactive while the page loads.`}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx                 ← Root layout (always visible)
├── loading.tsx                ← Global loading (shown inside layout)
└── blog/
    ├── layout.tsx             ← Blog layout (always visible)
    ├── loading.tsx            ← Blog loading (shown inside blog layout)
    └── page.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This means headers, sidebars, and navigation remain usable while the main content loads.`}),(0,f.jsx)(_,{code:`// src/app/blog/layout.tsx
export default function BlogLayout() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
        <nav>{/* Navigation links */}</nav>
      </header>
      <main>
        <Outlet />  {/* This will be either loading.tsx or page.tsx */}
      </main>
    </div>
  )
}`,filename:`app/blog/layout.tsx`})]}),(0,f.jsxs)(a.section,{id:`custom-spinners`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Custom Spinners`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Create branded spinners that match your design system:`}),(0,f.jsx)(_,{code:`// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
        <svg className="animate-spin h-10 w-10 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-slate-400 text-sm mt-3 text-center">Loading...</p>
      </div>
    </div>
  )
}`,filename:`app/loading.tsx`}),(0,f.jsx)(_,{code:`// Alternative: Minimal spinner
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.15s]" />
        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.3s]" />
      </div>
    </div>
  )
}`})]}),(0,f.jsxs)(a.section,{id:`built-in-fallback`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Built-in Fallback`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`If you don't create a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`loading.tsx`}),` file, Bini.js uses a built-in spinner:`]}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-6 list-disc list-inside`,children:[(0,f.jsx)(`li`,{children:`Dark mode aware — adapts to your theme`}),(0,f.jsx)(`li`,{children:`Centered on the screen`}),(0,f.jsx)(`li`,{children:`Clean, minimal design`}),(0,f.jsx)(`li`,{children:`Automatically used when no custom loading UI exists`})]}),(0,f.jsx)(`p`,{className:`text-slate-300`,children:`The built-in spinner is a good starting point, but creating custom loading UI is recommended for production applications.`})]}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Best Practices`}),(0,f.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use skeletons for content-heavy pages`}),` — They provide better UX than spinners.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Create nested loading states`}),` — Different sections can have different loading UIs.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Keep loading UI lightweight`}),` — Fast to render and minimal DOM impact.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use animations sparingly`}),` — Too much animation can be distracting.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Match your brand`}),` — Use your brand colors and design language.`]})]})]})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/mdx-markdown`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`MDX & Markdown Pages`})]})]}),(0,f.jsxs)(n,{to:`/docs/error-boundaries`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Error Boundaries`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};