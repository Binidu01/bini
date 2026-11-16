import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-CgTYcQET.js";import{l as u}from"./DocVisuals-B7hV1VEN.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`creating-loader`,label:`Creating a Loader`},{id:`accessing-data`,label:`Accessing Loader Data`},{id:`dynamic-params`,label:`Dynamic Params in Loaders`},{id:`error-handling`,label:`Error Handling`},{id:`client-only`,label:`Client-only Routes`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`A loader is a function exported from a page that fetches data before the page renders. React Router runs it, resolves the result, and hands it to the page via`,` `,(0,d.jsx)(o,{children:`useLoaderData()`}),`.`]}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`users`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/users`}]}),(0,d.jsx)(r,{headers:[`Export`,`Type`,`When it runs`],rows:[[`loader`,`function (async or sync)`,`Before the route renders`],[`action`,`function (async or sync)`,`On form submission or POST/PUT/DELETE`],[`shouldRevalidate`,`function`,`Before a revalidation`],[`handle`,`object`,`Static route metadata for useMatches()`]]}),(0,d.jsxs)(c,{children:[`Data exports are detected statically at build time. A page with a loader is marked`,` `,(0,d.jsx)(o,{children:`clientOnly`}),` and gets a shell page during static generation instead of server-rendered HTML.`]})]}),(0,d.jsxs)(i,{id:`creating-loader`,title:`Creating a Loader`,children:[(0,d.jsxs)(a,{children:[`Export a function called `,(0,d.jsx)(o,{children:`loader`}),` from your page. It can be sync or async. Return any serializable value.`]}),(0,d.jsx)(s,{filename:`src/app/users/page.${e}`,tsCode:`export async function loader() {
  const res = await fetch('/api/users')
  return res.json()
}

export default function Users() {
  const users = useLoaderData()
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}`,jsCode:`export async function loader() {
  const res = await fetch('/api/users')
  return res.json()
}

export default function Users() {
  const users = useLoaderData()
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}`})]}),(0,d.jsxs)(i,{id:`accessing-data`,title:`Accessing Loader Data`,children:[(0,d.jsxs)(a,{children:[`Call `,(0,d.jsx)(o,{children:`useLoaderData()`}),` inside the page component to access the resolved value.`]}),(0,d.jsx)(r,{headers:[`Hook`,`What it returns`],rows:[[`useLoaderData()`,`The route's loader return value`],[`useRouteLoaderData(id)`,`Another route's loader value by route id`],[`useNavigation()`,`The current navigation state (idle, loading, submitting)`]]}),(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{children:`useLoaderData()`}),` is auto-imported from `,(0,d.jsx)(o,{children:`react-router-dom`}),` inside files under`,` `,(0,d.jsx)(o,{children:`src/app/`}),`. In MDX files you must import it explicitly.`]})]}),(0,d.jsxs)(i,{id:`dynamic-params`,title:`Dynamic Params in Loaders`,children:[(0,d.jsxs)(a,{children:[`The `,(0,d.jsx)(o,{children:`loader`}),` function receives an object containing the request and the route params. You can read dynamic segments directly inside the loader before fetching data.`]}),(0,d.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export async function loader({ params }: { params: { slug: string } }) {
  const res = await fetch(\`/api/posts/\${params.slug}\`)
  if (!res.ok) throw new Error('Post not found')
  return res.json()
}

export default function BlogPost() {
  const post = useLoaderData()
  return <h1>{post.title}</h1>
}`,jsCode:`export async function loader({ params }) {
  const res = await fetch(\`/api/posts/\${params.slug}\`)
  if (!res.ok) throw new Error('Post not found')
  return res.json()
}

export default function BlogPost() {
  const post = useLoaderData()
  return <h1>{post.title}</h1>
}`}),(0,d.jsxs)(c,{children:[`For catch-all routes like `,(0,d.jsx)(o,{children:`[...slug]`}),`, the value is exposed under`,` `,(0,d.jsx)(o,{children:`params['*']`}),`, not the name written in the folder.`]})]}),(0,d.jsxs)(i,{id:`error-handling`,title:`Error Handling`,children:[(0,d.jsxs)(a,{children:[`A thrown error inside a loader is caught by the nearest `,(0,d.jsx)(o,{children:`error.${e}`}),` boundary in the segment chain. Use the same error UI you would use for render errors.`]}),(0,d.jsx)(s,{filename:`src/app/users/page.${e}`,tsCode:`export async function loader() {
  const res = await fetch('/api/users')
  if (!res.ok) {
    throw new Error('Failed to load users')
  }
  return res.json()
}`,jsCode:`export async function loader() {
  const res = await fetch('/api/users')
  if (!res.ok) {
    throw new Error('Failed to load users')
  }
  return res.json()
}`})]}),(0,d.jsxs)(i,{id:`client-only`,title:`Client-only Routes`,children:[(0,d.jsxs)(a,{children:[`Routes with data exports are marked `,(0,d.jsx)(o,{children:`clientOnly`}),`. During `,(0,d.jsx)(o,{children:`vite build`}),`, the build tool writes a shell page for them instead of a server-rendered page, because React Router does not run lazy loaders during static rendering.`]}),(0,d.jsx)(r,{headers:[`Route type`,`SSG output`,`What renders on first visit`],rows:[[`Static, no loader`,`Full pre-rendered HTML`,`Instant paint from HTML`],[`Static, with loader`,`Shell page (empty #root)`,`Loading UI, then client render`],[`Dynamic, with loader`,`Shell page (empty #root)`,`Loading UI, then client render`]]}),(0,d.jsxs)(c,{children:[`To get real HTML for a route with a loader, list its URLs in `,(0,d.jsx)(o,{children:`staticParams`}),`. Those URLs are rendered even when the route is client-only.`]})]}),(0,d.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`users`,d:1},{n:`layout.${e}`,d:2},{n:`page.${e}`,d:2,dot:!0,url:`/users`},{n:`error.${e}`,d:2},{n:`[id]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/users/:id`}]}),(0,d.jsx)(s,{filename:`src/app/users/[id]/page.${e}`,tsCode:`export async function loader({ params }: { params: { id: string } }) {
  const res = await fetch(\`/api/users/\${params.id}\`)
  if (!res.ok) throw new Error('User not found')
  return res.json()
}

export default function UserDetail() {
  const user = useLoaderData()
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}`,jsCode:`export async function loader({ params }) {
  const res = await fetch(\`/api/users/\${params.id}\`)
  if (!res.ok) throw new Error('User not found')
  return res.json()
}

export default function UserDetail() {
  const user = useLoaderData()
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}`})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/actions`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Actions`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Handle form submissions and mutations.`})]}),(0,d.jsxs)(t,{to:`/docs/accessing-route-data`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Accessing Route Data`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Access loader data and navigation state.`})]}),(0,d.jsxs)(t,{to:`/docs/error-boundaries`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Error Boundaries`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Catch render errors and show a fallback UI.`})]}),(0,d.jsxs)(t,{to:`/docs/load`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loading UI`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Show a fallback while pages and layouts load.`})]}),(0,d.jsxs)(t,{to:`/docs/dynamic-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match URL segments with dynamic parameters and catch-alls.`})]}),(0,d.jsxs)(t,{to:`/docs/static-export`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Static Export`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`How every route is pre-rendered to HTML at build time.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Loaders`,badge:`Experimental`,description:`Fetch data before a route renders with loader exports and useLoaderData().`,url:`https://bini.js.org/docs/loaders`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/loaders.tsx`,toc:f,prev:{to:`/docs/notfound`,title:`Not Found (404)`},next:{to:`/docs/actions`,title:`Actions`},children:(0,d.jsx)(p,{})})}export{m as default};