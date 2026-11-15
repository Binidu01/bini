import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-L2h6_38O.js";import{l as u}from"./DocVisuals-BICpfG8q.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`template-vs-layout`,label:`Templates vs Layouts`},{id:`creating-template`,label:`Creating a Template`},{id:`use-cases`,label:`Use Cases`},{id:`complete-example`,label:`Complete Example`}];function p({ext:e}){return(0,d.jsx)(u,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`template.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`about`,d:1},{n:`page.${e}`,d:2,url:`/about`}]})}function m({ext:e}){return(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`template.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`about`,d:1},{n:`layout.${e}`,d:2},{n:`template.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/about`}]})}function h({ext:e}){return(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`template.${e}`,d:1,dot:!0},{n:`loading.${e}`,d:1},{n:`error.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`template.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/dashboard`},{n:`settings`,d:2},{n:`page.${e}`,d:3,url:`/dashboard/settings`}]})}function g(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`A `,(0,d.jsx)(o,{children:`template.${e}`}),` file wraps each page inside the layout chain. Like`,` `,(0,d.jsx)(o,{children:`layout.${e}`}),`, it is a special file and does not create a URL. Unlike a layout, it is resolved per page scope and is a good place for effects that should run when navigating between pages.`]}),(0,d.jsx)(p,{ext:e}),(0,d.jsx)(r,{headers:[`File`,`Role`],rows:[[`layout.${e}`,`Wraps segment + children, receives params`],[`template.${e}`,`Wraps page inside layout chain, receives children`],[`page.${e}`,`Route content`]]}),(0,d.jsxs)(c,{children:[`A template only applies to routes inside the folder that declares it and its descendants. The nearest usable template wins, and templates receive `,(0,d.jsx)(o,{children:`children`}),` `,`only - not `,(0,d.jsx)(o,{children:`params`}),`.`]})]}),(0,d.jsxs)(i,{id:`template-vs-layout`,title:`Templates vs Layouts`,children:[(0,d.jsx)(a,{children:`Both are special files that wrap page content without creating a URL. They differ in what they receive and in how they behave on navigation.`}),(0,d.jsx)(r,{headers:[`Feature`,`layout.${e}`,`template.${e}`],rows:[[`Wraps`,`Segment + all children`,`Page inside layout chain`],[`Props`,`params + children (Outlet)`,`children only`],[`Typical use`,`Nav, sidebar, shared chrome`,`Page-level effects, transitions`],[`State persistence`,`Persists across navigation`,`Resets on every navigation`]]}),(0,d.jsx)(m,{ext:e}),(0,d.jsxs)(a,{children:[`In practice, put persistent chrome - navigation bars, sidebars, footers - in a`,` `,(0,d.jsx)(o,{children:`layout.${e}`}),`. Put anything that should re-run or reset when the route changes in a `,(0,d.jsx)(o,{children:`template.${e}`}),`.`]}),(0,d.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <nav>Persistent nav</nav>
      <Outlet />
    </div>
  )
}`,jsCode:`import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <nav>Persistent nav</nav>
      <Outlet />
    </div>
  )
}`}),(0,d.jsx)(s,{filename:`src/app/template.${e}`,tsCode:`import { useEffect } from 'react'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Runs once per page view
    console.log('Page mounted')
  }, [])

  return <>{children}</>
}`,jsCode:`import { useEffect } from 'react'

export default function RootTemplate({ children }) {
  useEffect(() => {
    // Runs once per page view
    console.log('Page mounted')
  }, [])

  return <>{children}</>
}`})]}),(0,d.jsxs)(i,{id:`creating-template`,title:`Creating a Template`,children:[(0,d.jsxs)(a,{children:[`Create `,(0,d.jsx)(o,{children:`template.${e}`}),` in any folder. It must have a default export and receives `,(0,d.jsx)(o,{children:`children`}),`.`]}),(0,d.jsx)(s,{filename:`src/app/template.${e}`,tsCode:`export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}`,jsCode:`export default function Template({ children }) {
  return <div>{children}</div>
}`}),(0,d.jsx)(a,{children:`Because templates are unmounted and remounted on navigation, they are useful for running effects once per page view:`}),(0,d.jsx)(s,{filename:`src/app/template.${e}`,tsCode:`import { useEffect } from 'react'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Useful for analytics or focus management
    console.log('Template active')
  }, [])

  return <div>{children}</div>
}`,jsCode:`import { useEffect } from 'react'

export default function Template({ children }) {
  useEffect(() => {
    // Useful for analytics or focus management
    console.log('Template active')
  }, [])

  return <div>{children}</div>
}`}),(0,d.jsxs)(c,{children:[`Templates that contain an `,(0,d.jsx)(o,{children:`html`}),` element are ignored, the same way layouts are. Prefer simple wrappers around `,(0,d.jsx)(o,{children:`children`}),`.`]})]}),(0,d.jsxs)(i,{id:`use-cases`,title:`Use Cases`,children:[(0,d.jsx)(a,{children:`Prefer a template when you need page-scoped behavior without changing the persistent layout chrome.`}),(0,d.jsx)(r,{headers:[`Use Case`,`Why template?`],rows:[[`Page transitions`,`Wrap the page for enter/exit animation classes`],[`Analytics / logging`,`Run effects on every page view`],[`Focus management`,`Move focus when the page content changes`],[`Reset local UI state`,`Keep layout state, but re-initialize page-level UI on navigation`]]})]}),(0,d.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(a,{children:`Templates next to layouts, loading, and error. Special files do not create URLs.`}),(0,d.jsx)(h,{ext:e}),(0,d.jsx)(r,{headers:[`File`,`Purpose`],rows:[[`src/app/layout.${e}`,`Root layout`],[`src/app/template.${e}`,`Root template`],[`src/app/page.${e}`,`Home page`],[`src/app/dashboard/template.${e}`,`Dashboard page wrapper`],[`src/app/dashboard/page.${e}`,`Dashboard page`]]}),(0,d.jsxs)(c,{children:[`Use `,(0,d.jsx)(o,{children:`layout.${e}`}),` for shared chrome. Use `,(0,d.jsx)(o,{children:`template.${e}`}),` for page-level wrapping inside that chrome.`]})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/error-boundaries`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Error Boundaries`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Catch render errors and show a fallback UI.`})]}),(0,d.jsxs)(t,{to:`/docs/defaults`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Default`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fallback for a parallel route slot with no match.`})]}),(0,d.jsxs)(t,{to:`/docs/load`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loading UI`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Show a fallback while pages and layouts load.`})]}),(0,d.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,d.jsxs)(t,{to:`/docs/folder-based-routing`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Folder-Based Routing`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Define routes with folders and page files inside them.`})]}),(0,d.jsxs)(t,{to:`/docs/static-export`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Static Export`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`How every route is pre-rendered to HTML at build time.`})]})]})]})}function _(){return(0,d.jsx)(n,{title:`Template`,badge:`Experimental`,description:`template.tsx wraps pages inside the layout chain - special file, no URL, nearest-wins.`,url:`https://bini.js.org/docs/templates`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/templates.tsx`,toc:f,prev:{to:`/docs/error-boundaries`,title:`Error Boundaries`},next:{to:`/docs/defaults`,title:`Default`},children:(0,d.jsx)(g,{})})}export{_ as default};