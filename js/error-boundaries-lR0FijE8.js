import{_ as e}from"./Layout-CpG4T2zb.js";import{y as t}from"./index-DgTvH8vE.js";import{_ as n,f as r,h as i,i as a,m as o,n as s,o as c,r as l}from"./DocBlocks-Jip0RoZ4.js";import{a as u,c as d,h as f,l as p,n as m}from"./DocVisuals-DxgP9QZL.js";var h=t(),g=[{id:`overview`,label:`Overview`},{id:`what-are-error-boundaries`,label:`What are Error Boundaries?`},{id:`creating-error-boundary`,label:`Creating an Error Boundary`},{id:`error-props`,label:`Error Props`},{id:`nested-error-boundaries`,label:`Nested Error Boundaries`},{id:`nearest-wins`,label:`Nearest Wins Resolution`},{id:`error-with-layout`,label:`Error with Layout`},{id:`built-in-fallback`,label:`Built-in Fallback`},{id:`complete-example`,label:`Complete Example`}];function _({main:e}){return(0,h.jsxs)(`div`,{className:`w-65 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-[#1a1a1a]`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-neutral-200 px-3 py-2.5 dark:border-neutral-700`,children:[(0,h.jsx)(`div`,{className:`h-6 w-6 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600`}),(0,h.jsx)(`div`,{className:`h-2.5 flex-1 rounded bg-neutral-300 dark:bg-neutral-600`})]}),(0,h.jsxs)(`div`,{className:`flex min-h-40`,children:[(0,h.jsxs)(`div`,{className:`flex w-14 shrink-0 flex-col gap-2 border-r border-neutral-200 p-2.5 dark:border-neutral-700`,children:[(0,h.jsx)(`div`,{className:`h-2 rounded bg-neutral-300 dark:bg-neutral-600`}),(0,h.jsx)(`div`,{className:`h-2 w-3/4 rounded bg-neutral-300 dark:bg-neutral-600`}),(0,h.jsx)(`div`,{className:`h-2 w-2/3 rounded bg-neutral-300 dark:bg-neutral-600`}),(0,h.jsx)(`div`,{className:`h-2 w-1/2 rounded bg-neutral-300 dark:bg-neutral-600`})]}),(0,h.jsx)(`div`,{className:`min-w-0 flex-1 p-2.5`,children:e})]})]})}var v=e=>(0,h.jsx)(`span`,{className:`text-sky-700 dark:text-sky-300`,children:e}),y=e=>(0,h.jsx)(`span`,{className:`text-violet-700 dark:text-violet-300`,children:e}),b=e=>(0,h.jsx)(`span`,{className:`text-neutral-400 dark:text-neutral-500`,children:e});function x({ext:t}){return(0,h.jsx)(u,{children:(0,h.jsxs)(`div`,{className:`flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsxs)(`div`,{className:`w-80 max-w-full ${m} shadow-sm`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-1.5 border-b px-3 py-1.5 ${d}`,children:[(0,h.jsx)(`svg`,{role:`img`,viewBox:`0 0 24 24`,width:14,height:14,fill:`currentColor`,className:`shrink-0 text-[#61DAFB]`,children:(0,h.jsx)(`path`,{d:e.path})}),(0,h.jsxs)(`span`,{className:`font-mono text-[11px] text-neutral-500`,children:[`error.`,t]})]}),(0,h.jsx)(`pre`,{className:`overflow-x-auto p-3 font-mono text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300`,children:(0,h.jsxs)(`code`,{children:[(0,h.jsx)(`span`,{className:`text-purple-600 dark:text-[#C586C0]`,children:`export default function `}),(0,h.jsx)(`span`,{className:`text-amber-700 dark:text-[#DCDCAA]`,children:`Error`}),(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`({ `}),(0,h.jsx)(`span`,{className:`text-sky-600 dark:text-[#9CDCFE]`,children:`error`}),(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`, `}),(0,h.jsx)(`span`,{className:`text-orange-600 dark:text-[#CE9178]`,children:`reset`}),(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`}) {`}),`
`,(0,h.jsx)(`span`,{className:`text-purple-600 dark:text-[#C586C0]`,children:`  return `}),(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`(`}),`
`,(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`    <>`}),`
`,(0,h.jsx)(`span`,{className:`text-neutral-500 dark:text-neutral-400`,children:`      An error occurred: `}),(0,h.jsx)(`span`,{className:`text-sky-600 dark:text-[#9CDCFE]`,children:`{error.message}`}),`
`,(0,h.jsx)(`span`,{className:`text-teal-600 dark:text-[#4EC9B0]`,children:`      <button `}),(0,h.jsx)(`span`,{className:`text-sky-600 dark:text-[#9CDCFE]`,children:`onClick`}),(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`=`}),(0,h.jsx)(`span`,{className:`text-orange-600 dark:text-[#CE9178]`,children:`{() => reset()}`}),(0,h.jsx)(`span`,{className:`text-teal-600 dark:text-[#4EC9B0]`,children:`>`}),(0,h.jsx)(`span`,{className:`text-emerald-600 dark:text-[#6A9955]`,children:`Retry`}),(0,h.jsx)(`span`,{className:`text-teal-600 dark:text-[#4EC9B0]`,children:`</button>`}),`
`,(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`    </>`}),`
`,(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`  );`}),`
`,(0,h.jsx)(`span`,{className:`text-neutral-700 dark:text-neutral-300`,children:`}`})]})})]}),(0,h.jsxs)(`div`,{className:`w-80 max-w-full ${m}`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 border-b px-3 py-2 font-sans text-[11px] text-neutral-600 dark:text-neutral-400 ${d}`,children:[(0,h.jsx)(f,{className:`h-3.5 w-3.5 text-sky-500`,strokeWidth:1.5}),` Component hierarchy`]}),(0,h.jsx)(`pre`,{className:`overflow-x-auto p-3 font-mono text-[11px] leading-5 text-neutral-700 dark:text-neutral-300`,children:(0,h.jsxs)(`code`,{children:[b(`<`),v(`Layout`),b(`>`),`
`,`  `,b(`<`),v(`ErrorBoundary`),` `,y(`fallback`),`=`,`{`,b(`<`),v(`Error`),` `,b(`/>`),`}`,b(`>`),`
`,`    `,b(`<`),v(`Page`),` `,b(`/>`),`
`,`  `,b(`</`),v(`ErrorBoundary`),b(`>`),`
`,b(`</`),v(`Layout`),b(`>`)]})})]})]}),(0,h.jsx)(`svg`,{width:`40`,height:`16`,viewBox:`0 0 40 16`,className:`hidden shrink-0 text-blue-500 lg:block`,fill:`none`,stroke:`currentColor`,"aria-hidden":!0,children:(0,h.jsx)(`path`,{d:`M0 8h36M32 4l4 4-4 4`,strokeWidth:`1.5`})}),(0,h.jsx)(`svg`,{width:`16`,height:`40`,viewBox:`0 0 16 40`,className:`block shrink-0 text-blue-500 lg:hidden`,fill:`none`,stroke:`currentColor`,"aria-hidden":!0,children:(0,h.jsx)(`path`,{d:`M8 0v36M4 32l4 4 4-4`,strokeWidth:`1.5`})}),(0,h.jsx)(_,{main:(0,h.jsx)(`div`,{className:`flex h-full min-h-30 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500/10`,children:(0,h.jsx)(`span`,{className:`text-sm font-medium text-red-600 dark:text-red-300`,children:`Error...`})})})]})})}function S({ext:e}){return(0,h.jsx)(p,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`page.${e}`,d:2,url:`/dashboard`},{n:`error.${e}`,d:2,dot:!0}]})}function C({ext:e}){return(0,h.jsx)(p,{fileWidth:280,rows:[{n:`app`},{n:`error.${e}`,d:1,dot:!0},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`error.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`},{n:`dashboard`,d:1},{n:`error.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/dashboard`},{n:`settings`,d:2},{n:`error.${e}`,d:3,dot:!0},{n:`page.${e}`,d:3,url:`/dashboard/settings`}]})}function w({ext:e}){return(0,h.jsx)(p,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`error.${e}`,d:1,dot:!0},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`error.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`}]})}function T({ext:e}){return(0,h.jsx)(p,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`error.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`error.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`error.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/dashboard`}]})}function E(){let e=n()===`js`?`jsx`:`tsx`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(o,{id:`overview`,title:`Overview`,children:[(0,h.jsxs)(r,{children:[`Every layout and page is wrapped in an error boundary that resets on navigation. Add`,` `,(0,h.jsx)(s,{children:`error.${e}`}),` in a folder for custom fallback UI. It is a special file - it does not create a URL. Nearest-wins applies.`]}),(0,h.jsx)(x,{ext:e}),(0,h.jsx)(i,{headers:[`File`,`Creates URL?`,`Purpose`],rows:[[`app/error.${e}`,`No - special file`,`Fallback for routes without a closer error file`],[`app/dashboard/error.${e}`,`No - special file`,`Dashboard segment only`],[`app/blog/[slug]/error.${e}`,`No - special file`,`Blog post segment only`]]}),(0,h.jsx)(l,{children:`Layouts stay mounted. The error UI replaces the page (or segment) inside the boundary - not the whole app shell.`})]}),(0,h.jsxs)(o,{id:`what-are-error-boundaries`,title:`What are Error Boundaries?`,children:[(0,h.jsxs)(r,{children:[`Error boundaries catch JavaScript errors in the child tree, log them, and show fallback UI instead of a crashed tree. In Bini.js you use `,(0,h.jsx)(s,{children:`error.${e}`}),`.`]}),(0,h.jsx)(r,{children:`They catch errors during rendering and in the tree below them. Boundaries also reset automatically when the pathname changes.`}),(0,h.jsxs)(l,{children:[(0,h.jsx)(s,{children:`error.${e}`}),` does not create a URL - same idea as `,(0,h.jsx)(s,{children:`loading.${e}`}),`. Closest file to the error wins.`]})]}),(0,h.jsxs)(o,{id:`creating-error-boundary`,title:`Creating an Error Boundary`,children:[(0,h.jsxs)(r,{children:[`Create `,(0,h.jsx)(s,{children:`error.${e}`}),` in any folder for that route and its children.`]}),(0,h.jsx)(S,{ext:e}),(0,h.jsx)(a,{filename:`app/dashboard/error.${e}`,tsCode:`export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
          Something went wrong
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-black px-4 py-2 font-medium text-white dark:bg-white dark:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  )
}`,jsCode:`export default function DashboardError({ error, reset }) {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
          Something went wrong
        </h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-black px-4 py-2 font-medium text-white dark:bg-white dark:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  )
}`})]}),(0,h.jsxs)(o,{id:`error-props`,title:`Error Props`,children:[(0,h.jsxs)(r,{children:[(0,h.jsx)(s,{children:`error.${e}`}),` receives two props.`]}),(0,h.jsx)(i,{headers:[`Prop`,`Type`,`Description`],rows:[[`error`,`Error`,`Thrown Error object with message and stack`],[`reset`,`() => void`,`Clears error state and re-renders children`]]}),(0,h.jsx)(a,{filename:`app/dashboard/error.${e}`,tsCode:`export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.error('Dashboard error:', error)

  return (
    <div>
      <h2>Something went wrong!</h2>
      <details className="mt-4 rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <summary className="cursor-pointer">Error details</summary>
        <pre className="mt-2 whitespace-pre-wrap text-xs">{error.stack}</pre>
      </details>
      <button
        onClick={reset}
        className="mt-4 rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        Try again
      </button>
    </div>
  )
}`,jsCode:`export default function DashboardError({ error, reset }) {
  console.error('Dashboard error:', error)

  return (
    <div>
      <h2>Something went wrong!</h2>
      <details className="mt-4 rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <summary className="cursor-pointer">Error details</summary>
        <pre className="mt-2 whitespace-pre-wrap text-xs">{error.stack}</pre>
      </details>
      <button
        onClick={reset}
        className="mt-4 rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        Try again
      </button>
    </div>
  )
}`})]}),(0,h.jsxs)(o,{id:`nested-error-boundaries`,title:`Nested Error Boundaries`,children:[(0,h.jsxs)(r,{children:[`Place `,(0,h.jsx)(s,{children:`error.${e}`}),` in subdirectories. Each only catches errors in its subtree.`]}),(0,h.jsx)(C,{ext:e}),(0,h.jsx)(i,{headers:[`Route`,`Error Boundary Used`],rows:[[`/blog/hello-world`,`app/blog/error.${e}`],[`/dashboard`,`app/dashboard/error.${e}`],[`/dashboard/settings`,`app/dashboard/settings/error.${e}`],[`/about`,`app/error.${e} (global fallback)`]]})]}),(0,h.jsxs)(o,{id:`nearest-wins`,title:`Nearest Wins Resolution`,children:[(0,h.jsxs)(r,{children:[`The closest `,(0,h.jsx)(s,{children:`error.${e}`}),` to the route where the error occurred is used.`]}),(0,h.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,h.jsxs)(`ol`,{className:`list-decimal space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,children:[(0,h.jsxs)(`li`,{children:[`Check the route's own folder for `,(0,h.jsx)(s,{children:`error.${e}`})]}),(0,h.jsx)(`li`,{children:`If not found, walk up parent folders`}),(0,h.jsx)(`li`,{children:`If still not found, use the built-in fallback`})]})})]}),(0,h.jsxs)(o,{id:`error-with-layout`,title:`Error with Layout`,children:[(0,h.jsx)(r,{children:`Error UI is shown inside the layout hierarchy. Headers, sidebars, and nav stay visible when a child route errors.`}),(0,h.jsx)(w,{ext:e}),(0,h.jsx)(l,{children:`Error UI replaces only the page (or segment) - not the surrounding layout.`})]}),(0,h.jsxs)(o,{id:`built-in-fallback`,title:`Built-in Fallback`,children:[(0,h.jsxs)(r,{children:[`If no `,(0,h.jsx)(s,{children:`error.${e}`}),` exists in scope, Bini.js uses a built-in fallback.`]}),(0,h.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,h.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,children:[(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`Development:`}),` `,`Renders nothing so Vite / `,(0,h.jsx)(s,{children:`bini-overlay`}),` can show the error`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`Production:`}),` Generic "Something went wrong" UI with a retry button`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`Logging:`}),` Runtime errors dispatch a `,(0,h.jsx)(s,{children:`__bini_error__`}),` CustomEvent on `,(0,h.jsx)(s,{children:`window`}),` for external overlays`]})]})}),(0,h.jsx)(l,{children:`Custom error UIs are recommended for production. Boundaries also reset when the pathname changes.`})]}),(0,h.jsxs)(o,{id:`complete-example`,title:`Complete Example`,children:[(0,h.jsx)(r,{children:`Special files do not create URLs. Pages do.`}),(0,h.jsx)(T,{ext:e}),(0,h.jsx)(i,{headers:[`File`,`Creates URL?`,`Role`],rows:[[`error.${e}`,`No`,`Segment error boundary`],[`layout.${e}`,`No`,`Wraps segment + children`],[`page.${e}`,`Yes`,`Route content`],[`loading.${e}`,`No`,`Suspense fallback`]]})]})]})}function D(){return(0,h.jsx)(c,{title:`Error Boundaries`,description:`Handle errors with error.tsx - catches errors in the child tree and shows fallback UI. Layouts stay visible.`,url:`https://bini.js.org/docs/error-boundaries`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/error-boundaries.tsx`,toc:g,prev:{to:`/docs/load`,title:`Loading UI`},next:{to:`/docs/templates`,title:`Templates`},children:(0,h.jsx)(E,{})})}export{D as default};