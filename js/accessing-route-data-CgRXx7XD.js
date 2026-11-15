import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-L2h6_38O.js";import{l as u}from"./DocVisuals-BICpfG8q.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`useloaderdata`,label:`useLoaderData`},{id:`useactiondata`,label:`useActionData`},{id:`userouteloaderdata`,label:`useRouteLoaderData`},{id:`usematches`,label:`useMatches`},{id:`usenavigation`,label:`useNavigation`}];function p(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsx)(a,{children:`Once a loader or action runs, React Router stores the result on the matching route. You read it with a hook. Each hook is designed for a specific scope - the current route, another route by id, the whole matched chain, or the current navigation state.`}),(0,d.jsx)(r,{headers:[`Hook`,`Scope`,`Common use`],rows:[[`useLoaderData()`,`Current route`,`Page-level data from a loader`],[`useActionData()`,`Current route`,`Form submission result`],[`useRouteLoaderData(id)`,`A specific route by id`,`Parent loader data in a child`],[`useMatches()`,`Every matched route`,`Breadcrumbs, analytics`],[`useNavigation()`,`Global navigation state`,`Pending/loading states`]]}),(0,d.jsxs)(c,{children:[`All of these hooks are auto-imported from `,(0,d.jsx)(o,{children:`react-router-dom`}),` inside files under`,` `,(0,d.jsx)(o,{children:`src/app/`}),`. In `,(0,d.jsx)(o,{children:`.mdx`}),` and `,(0,d.jsx)(o,{children:`.md`}),` files you must import them explicitly.`]})]}),(0,d.jsxs)(i,{id:`useloaderdata`,title:`useLoaderData`,children:[(0,d.jsxs)(a,{children:[`Returns the resolved value of the current route's `,(0,d.jsx)(o,{children:`loader`}),`. Use this inside the page component that defines the loader.`]}),(0,d.jsx)(s,{filename:`src/app/users/page.${e}`,tsCode:`export async function loader() {
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
}`})]}),(0,d.jsxs)(i,{id:`useactiondata`,title:`useActionData`,children:[(0,d.jsxs)(a,{children:[`Returns the resolved value of the current route's `,(0,d.jsx)(o,{children:`action`}),`. It is `,(0,d.jsx)(o,{children:`undefined`}),` `,`until the action has run at least once.`]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`import { Form } from 'react-router-dom'

export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  return { ok: true, email }
}

export default function Contact() {
  const result = useActionData()
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <button type="submit">Send</button>
      {result?.ok && <p>Thanks, {result.email}!</p>}
    </Form>
  )
}`,jsCode:`import { Form } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  return { ok: true, email }
}

export default function Contact() {
  const result = useActionData()
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <button type="submit">Send</button>
      {result?.ok && <p>Thanks, {result.email}!</p>}
    </Form>
  )
}`})]}),(0,d.jsxs)(i,{id:`userouteloaderdata`,title:`useRouteLoaderData`,children:[(0,d.jsx)(a,{children:`Returns the loader value of a route by its route id. Use this in a child component that needs the loader data from a parent layout without re-fetching it.`}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`dashboard`,d:1},{n:`layout.${e}`,d:2},{n:`settings`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/dashboard/settings`}]}),(0,d.jsx)(s,{filename:`src/app/dashboard/settings/page.${e}`,tsCode:`export default function Settings() {
  // Route ids follow the file path inside src/app
  const data = useRouteLoaderData('dashboard')
  return <p>Welcome, {data?.user.name}</p>
}`,jsCode:`export default function Settings() {
  // Route ids follow the file path inside src/app
  const data = useRouteLoaderData('dashboard')
  return <p>Welcome, {data?.user.name}</p>
}`}),(0,d.jsxs)(c,{children:[`The route id is derived from the file path. A loader exported from`,` `,(0,d.jsx)(o,{children:`src/app/dashboard/layout.${e}`}),` is available under the id `,(0,d.jsx)(o,{children:`dashboard`}),`.`]})]}),(0,d.jsxs)(i,{id:`usematches`,title:`useMatches`,children:[(0,d.jsxs)(a,{children:[`Returns an array of every route in the current matched chain, each with its`,` `,(0,d.jsx)(o,{children:`handle`}),` and `,(0,d.jsx)(o,{children:`data`}),`. Use this for breadcrumbs, analytics, or any component that needs to know the full URL hierarchy.`]}),(0,d.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export const handle = { breadcrumb: 'Post' }

export async function loader() {
  const res = await fetch('/api/post')
  return res.json()
}

export default function Post() {
  const matches = useMatches()
  const crumbs = matches.filter((m) => m.handle?.breadcrumb)
  return (
    <nav>
      {crumbs.map((m) => (
        <span key={m.id}>{m.handle.breadcrumb}</span>
      ))}
    </nav>
  )
}`,jsCode:`export const handle = { breadcrumb: 'Post' }

export async function loader() {
  const res = await fetch('/api/post')
  return res.json()
}

export default function Post() {
  const matches = useMatches()
  const crumbs = matches.filter((m) => m.handle?.breadcrumb)
  return (
    <nav>
      {crumbs.map((m) => (
        <span key={m.id}>{m.handle.breadcrumb}</span>
      ))}
    </nav>
  )
}`})]}),(0,d.jsxs)(i,{id:`usenavigation`,title:`useNavigation`,children:[(0,d.jsx)(a,{children:`Returns the current global navigation state. Useful for disabling buttons during a submission or showing a top-level loading bar.`}),(0,d.jsx)(r,{headers:[`State`,`Meaning`],rows:[[`idle`,`No navigation is happening`],[`loading`,`A loader is running for the target route`],[`submitting`,`An action is running (form submission)`]]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`import { Form } from 'react-router-dom'

export default function Contact() {
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <Form method="post">
      <input name="email" type="email" required />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send'}
      </button>
    </Form>
  )
}`,jsCode:`import { Form } from 'react-router-dom'

export default function Contact() {
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <Form method="post">
      <input name="email" type="email" required />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send'}
      </button>
    </Form>
  )
}`})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/loaders`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loaders`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fetch data before a route renders.`})]}),(0,d.jsxs)(t,{to:`/docs/actions`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Actions`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Handle form submissions and mutations.`})]}),(0,d.jsxs)(t,{to:`/docs/error-boundaries`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Error Boundaries`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Catch render errors and show a fallback UI.`})]}),(0,d.jsxs)(t,{to:`/docs/load`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loading UI`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Show a fallback while pages and layouts load.`})]}),(0,d.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,d.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno, or build native apps in CI.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Accessing Route Data`,badge:`Experimental`,description:`Read loader, action, and navigation data with the React Router data hooks.`,url:`https://bini.js.org/docs/accessing-route-data`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/accessing-route-data.tsx`,toc:f,prev:{to:`/docs/actions`,title:`Actions`},next:{to:`/docs/metadata`,title:`Metadata`},children:(0,d.jsx)(p,{})})}export{m as default};