import{a as e,i as t,n,t as r}from"./index-BYH3LOEz.js";import{n as i,v as a}from"./Layout-q4xBN58K.js";import{t as o}from"./arrow-left-DpvFfGEc.js";import{t as s}from"./arrow-right-AiAWWGRh.js";import{t as c}from"./DocSidebar-BLYiT5s9.js";import{n as l,t as u}from"./TableOfContents-BPLzpc3i.js";var d=e(t(),1),f=r(),p=[{id:`what-are-error-boundaries`,label:`What are Error Boundaries?`},{id:`creating-error-boundary`,label:`Creating an Error Boundary`},{id:`error-props`,label:`Error Props`},{id:`nested-error-boundaries`,label:`Nested Error Boundaries`},{id:`nearest-wins`,label:`Nearest Wins Resolution`},{id:`error-with-layout`,label:`Error with Layout`},{id:`built-in-fallback`,label:`Built-in Fallback`}],m=`Error Boundaries`,h=`https://bini.js.org/docs/error-boundaries`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/error-boundaries.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to handle errors gracefully with error boundaries in Bini.js.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{id:`what-are-error-boundaries`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`What are Error Boundaries?`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. In Bini.js, you can create error boundaries using the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` file.`]}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.`})]}),(0,f.jsxs)(a.section,{id:`creating-error-boundary`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Creating an Error Boundary`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create an `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` file in any folder to define an error boundary for that route and its children.`]}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx
├── page.tsx
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    └── error.tsx           ← Error boundary for /dashboard/*`}),(0,f.jsx)(_,{code:`// src/app/dashboard/error.tsx
export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
        <p className="text-red-400 mb-4">{error.message}</p>
        <button 
          onClick={reset}
          className="px-4 py-2 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}`,filename:`app/dashboard/error.tsx`})]}),(0,f.jsxs)(a.section,{id:`error-props`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error Props`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` component receives two props:`]}),(0,f.jsx)(v,{headers:[`Prop`,`Type`,`Description`],rows:[[`error`,`Error`,`The thrown Error object with message and stack trace`],[`reset`,`() => void`,`A function that clears the error state and re-renders children`]]}),(0,f.jsx)(_,{code:`// src/app/dashboard/error.tsx
export default function DashboardError({ 
  error, 
  reset 
}: { 
  error: Error; 
  reset: () => void 
}) {
  // Log the error to your error reporting service
  console.error('Dashboard error:', error)
  
  return (
    <div>
      <h2>Something went wrong!</h2>
      <details className="mt-4 p-4 bg-slate-800 rounded">
        <summary className="cursor-pointer text-slate-300">Error details</summary>
        <pre className="mt-2 text-xs text-red-400 whitespace-pre-wrap">
          {error.stack}
        </pre>
      </details>
      <button 
        onClick={reset}
        className="mt-4 px-4 py-2 bg-cyan-500 text-black rounded"
      >
        Try again
      </button>
    </div>
  )
}`,filename:`app/dashboard/error.tsx`})]}),(0,f.jsxs)(a.section,{id:`nested-error-boundaries`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested Error Boundaries`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`You can create nested error boundaries by placing `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` in subdirectories. Each error boundary only catches errors in its subtree.`]}),(0,f.jsx)(_,{code:`src/app/
├── error.tsx                 ← Global error boundary (fallback)
├── layout.tsx
├── page.tsx
├── blog/
│   ├── error.tsx             ← Blog error boundary
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── dashboard/
    ├── error.tsx             ← Dashboard error boundary
    ├── page.tsx
    └── settings/
        ├── error.tsx         ← Settings error boundary
        └── page.tsx`}),(0,f.jsx)(v,{headers:[`Route`,`Error Boundary Used`],rows:[[`/blog/hello-world`,`app/blog/error.tsx`],[`/dashboard`,`app/dashboard/error.tsx`],[`/dashboard/settings`,`app/dashboard/settings/error.tsx`],[`/about`,`app/error.tsx (global)`]]})]}),(0,f.jsxs)(a.section,{id:`nearest-wins`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nearest Wins Resolution`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Error boundaries use `,(0,f.jsx)(`strong`,{className:`text-white`,children:`"nearest wins"`}),` resolution. The closest `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` to the route where the error occurred is used.`]}),(0,f.jsx)(_,{code:`src/app/
├── error.tsx                 ← Fallback for any error not caught below
├── layout.tsx
├── page.tsx
├── blog/
│   ├── error.tsx             ← Catches errors in /blog/*
│   ├── page.tsx
│   └── [slug]/
│       ├── error.tsx         ← Catches errors in /blog/:slug
│       └── page.tsx
└── dashboard/
    ├── error.tsx             ← Catches errors in /dashboard/*
    └── page.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`When an error occurs:`}),(0,f.jsxs)(`ol`,{className:`list-decimal list-inside space-y-2 text-slate-300 mb-4`,children:[(0,f.jsxs)(`li`,{children:[`Check the route's own folder for `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`})]}),(0,f.jsx)(`li`,{children:`If not found, check each parent folder (going up)`}),(0,f.jsx)(`li`,{children:`If still not found, use the built-in fallback`})]})]}),(0,f.jsxs)(a.section,{id:`error-with-layout`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error with Layout`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Error boundaries are rendered inside the layout hierarchy. Layouts remain visible when an error occurs in a child route.`}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx                 ← Root layout (always visible)
├── error.tsx                  ← Global error (shown inside root layout)
└── blog/
    ├── layout.tsx             ← Blog layout (always visible)
    ├── error.tsx              ← Blog error (shown inside blog layout)
    └── page.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This allows you to keep navigation, headers, and sidebars visible even when an error occurs in the main content area.`})]}),(0,f.jsxs)(a.section,{id:`built-in-fallback`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Built-in Fallback`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`If no `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`error.tsx`}),` exists in the hierarchy, Bini.js uses a built-in fallback:`]}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-6 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Development:`}),` Renders `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`null`}),` so `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`bini-overlay`}),` takes over with an animated error badge and full error panel`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Production:`}),` Shows a generic "Something went wrong" UI with a "Try again" button`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Error logging:`}),` Errors are dispatched as a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`__bini_error__`}),` CustomEvent on window for external dev overlays`]})]}),(0,f.jsx)(`p`,{className:`text-slate-300`,children:`Creating custom error boundaries is recommended for production applications to provide a better user experience.`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/load`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Loading UI`})]})]}),(0,f.jsxs)(n,{to:`/docs/notfound`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Not Found (404)`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};