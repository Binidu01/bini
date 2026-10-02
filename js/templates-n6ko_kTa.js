import{y as e}from"./index-kkU3f4ap.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-9fQggHSQ.js";import{l}from"./DocVisuals-C-Aoi6oH.js";var u=e(),d=[{id:`overview`,label:`Overview`},{id:`what-is-template`,label:`What is template.tsx?`},{id:`template-vs-layout`,label:`template.tsx vs layout.tsx`},{id:`creating-template`,label:`Creating a Template`},{id:`use-cases`,label:`Use Cases`},{id:`file-naming-note`,label:`File Naming - templates.tsx`},{id:`complete-example`,label:`Complete Example`}];function f({ext:e}){return(0,u.jsx)(l,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`template.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`about`,d:1},{n:`page.${e}`,d:2,url:`/about`}]})}function p({ext:e}){return(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`template.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`about`,d:1},{n:`layout.${e}`,d:2},{n:`template.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/about`}]})}function m({ext:e}){return(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`template.${e}`,d:1,dot:!0},{n:`loading.${e}`,d:1},{n:`error.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`template.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/dashboard`},{n:`settings`,d:2},{n:`page.${e}`,d:3,url:`/dashboard/settings`}]})}function h(){let e=t()===`js`?`jsx`:`tsx`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,u.jsxs)(n,{children:[(0,u.jsx)(o,{children:`template.${e}`}),` sits between the layout chain and the page. Like`,` `,(0,u.jsx)(o,{children:`layout.${e}`}),`, it is a special file and does not create a URL. Unlike a layout, it is resolved per page scope and is a good place for effects that should run when navigating between pages.`]}),(0,u.jsx)(f,{ext:e}),(0,u.jsx)(r,{headers:[`File`,`Creates URL?`,`Role`],rows:[[`layout.${e}`,`No - special file`,`Wraps segment + children, receives params`],[`template.${e}`,`No - special file`,`Wraps page inside layout chain, receives children`],[`page.${e}`,`Yes`,`Route content`]]}),(0,u.jsxs)(c,{children:[`Templates only apply to routes inside the folder that declares them and its descendants. They receive `,(0,u.jsx)(o,{children:`children`}),`, not `,(0,u.jsx)(o,{children:`params`}),`.`]})]}),(0,u.jsxs)(a,{id:`what-is-template`,title:`What is template.tsx?`,children:[(0,u.jsxs)(n,{children:[`A `,(0,u.jsx)(o,{children:`template.${e}`}),` file wraps each page in its scope. The nearest template with a default export is used (nearest-wins, same as loading and error).`]}),(0,u.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,u.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5 text-[15px] text-neutral-600 dark:text-neutral-400`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`Between layout and page:`}),` `,`renders inside the layout chain, around the page`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`children only:`}),` `,`templates receive `,(0,u.jsx)(o,{children:`children`}),`, not route `,(0,u.jsx)(o,{children:`params`})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`Folder-scoped:`}),` `,`applies to that folder and descendants only`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`span`,{className:`font-semibold text-black dark:text-white`,children:`No URL:`}),` special file - does not create a route`]})]})})]}),(0,u.jsxs)(a,{id:`template-vs-layout`,title:`template.tsx vs layout.tsx`,children:[(0,u.jsx)(r,{headers:[`Feature`,`layout.${e}`,`template.${e}`],rows:[[`Creates URL?`,`No`,`No`],[`Wraps`,`Segment + all children`,`Page inside layout chain`],[`Props`,`Outlet / params`,`children`],[`Typical use`,`Nav, sidebar, shared chrome`,`Page-level effects, transitions`],[`Location`,`Any folder`,`Any folder`]]}),(0,u.jsx)(p,{ext:e})]}),(0,u.jsxs)(a,{id:`creating-template`,title:`Creating a Template`,children:[(0,u.jsxs)(n,{children:[`Create `,(0,u.jsx)(o,{children:`template.${e}`}),` in any folder. It must have a default export and receives `,(0,u.jsx)(o,{children:`children`}),`.`]}),(0,u.jsx)(i,{filename:`app/template.${e}`,tsCode:`export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}`,jsCode:`export default function Template({ children }) {
  return <div>{children}</div>
}`}),(0,u.jsx)(i,{filename:`app/template.${e}`,tsCode:`export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Useful for analytics or focus management
    console.log('Template active')
  }, [])

  return <div>{children}</div>
}`,jsCode:`export default function Template({ children }) {
  useEffect(() => {
    // Useful for analytics or focus management
    console.log('Template active')
  }, [])

  return <div>{children}</div>
}`}),(0,u.jsx)(i,{filename:`app/dashboard/template.${e}`,tsCode:`export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="animate-in fade-in">
      {children}
    </div>
  )
}`,jsCode:`export default function DashboardTemplate({ children }) {
  return (
    <div className="animate-in fade-in">
      {children}
    </div>
  )
}`}),(0,u.jsxs)(c,{children:[`Templates that contain an `,(0,u.jsx)(o,{children:`html`}),` tag are ignored. Prefer simple wrappers around`,` `,(0,u.jsx)(o,{children:`children`}),`.`]})]}),(0,u.jsxs)(a,{id:`use-cases`,title:`Use Cases`,children:[(0,u.jsx)(n,{children:`Prefer a template when you need page-scoped behavior without changing the persistent layout chrome.`}),(0,u.jsx)(r,{headers:[`Use Case`,`Why template?`],rows:[[`Page transitions`,`Wrap the page for enter/exit animation classes`],[`Analytics / logging`,`Run effects around each page view`],[`Focus management`,`Move focus when the page content changes`],[`Reset local UI state`,`Keep layout state, re-init page-level UI`]]})]}),(0,u.jsxs)(a,{id:`file-naming-note`,title:`File Naming - templates.tsx`,children:[(0,u.jsxs)(n,{children:[`On this docs site, the page file is named `,(0,u.jsx)(o,{children:`templates.tsx`}),` (plural) so it is not treated as the special `,(0,u.jsx)(o,{children:`template.${e}`}),` convention. The real special file in apps remains `,(0,u.jsx)(o,{children:`template.${e}`}),`.`]}),(0,u.jsx)(r,{headers:[`Real special file`,`Docs page file`,`Why?`],rows:[[`app/template.${e}`,`app/docs/templates.tsx`,`Avoid special-file handling for the docs route`],[`app/default.${e}`,`app/docs/defaults.tsx`,`Same idea for slot defaults`]]})]}),(0,u.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsx)(n,{children:`Templates next to layouts, loading, and error - special files do not create URLs.`}),(0,u.jsx)(m,{ext:e}),(0,u.jsx)(r,{headers:[`File`,`Creates URL?`,`Purpose`],rows:[[`app/layout.${e}`,`No`,`Root layout`],[`app/template.${e}`,`No`,`Root template`],[`app/page.${e}`,`Yes - /`,`Home page`],[`app/dashboard/template.${e}`,`No`,`Dashboard page wrapper`],[`app/dashboard/page.${e}`,`Yes - /dashboard`,`Dashboard page`]]}),(0,u.jsxs)(c,{children:[`Use `,(0,u.jsx)(o,{children:`layout.${e}`}),` for shared chrome. Use `,(0,u.jsx)(o,{children:`template.${e}`}),` for page-level wrapping inside that chrome.`]})]})]})}function g(){return(0,u.jsx)(s,{title:`Template`,description:`template.tsx wraps pages inside the layout chain - special file, no URL, nearest-wins.`,url:`https://bini.js.org/docs/templates`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/templates.tsx`,toc:d,prev:{to:`/docs/error-boundaries`,title:`Error Boundaries`},next:{to:`/docs/defaults`,title:`Default`},children:(0,u.jsx)(h,{})})}export{g as default};