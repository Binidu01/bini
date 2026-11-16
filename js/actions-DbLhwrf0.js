import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-CgTYcQET.js";import{l as u}from"./DocVisuals-B7hV1VEN.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`creating-action`,label:`Creating an Action`},{id:`accessing-action-data`,label:`Accessing Action Data`},{id:`handling-errors`,label:`Handling Errors`},{id:`progressive-enhancement`,label:`Progressive Enhancement`},{id:`client-only`,label:`Client-only Routes`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=l()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`An action is a function exported from a page that handles data mutations, typically from a `,(0,d.jsx)(o,{children:`<Form>`}),` submission. React Router runs the action, returns the result, and makes it available to the page via `,(0,d.jsx)(o,{children:`useActionData()`}),`.`]}),(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`contact`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/contact`}]}),(0,d.jsx)(r,{headers:[`Export`,`Type`,`When it runs`],rows:[[`action`,`function (async or sync)`,`On form submission or POST/PUT/DELETE`],[`loader`,`function (async or sync)`,`Before the route renders (GET)`],[`shouldRevalidate`,`function`,`Before a revalidation`]]}),(0,d.jsxs)(c,{children:[`Actions run on the client in Bini.js (pure SPA). During `,(0,d.jsx)(o,{children:`vite build`}),`, routes with an action are marked `,(0,d.jsx)(o,{children:`clientOnly`}),` and get a shell page instead of pre-rendered HTML.`]})]}),(0,d.jsxs)(i,{id:`creating-action`,title:`Creating an Action`,children:[(0,d.jsxs)(a,{children:[`Export a function called `,(0,d.jsx)(o,{children:`action`}),` from your page. It receives the request context (including the submitted `,(0,d.jsx)(o,{children:`FormData`}),`). Return any serializable value.`]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const message = formData.get('message')

  // Process the submission
  return { ok: true, email }
}

export default function Contact() {
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
    </Form>
  )
}`,jsCode:`export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const message = formData.get('message')

  // Process the submission
  return { ok: true, email }
}

export default function Contact() {
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
    </Form>
  )
}`})]}),(0,d.jsxs)(i,{id:`accessing-action-data`,title:`Accessing Action Data`,children:[(0,d.jsxs)(a,{children:[`Call `,(0,d.jsx)(o,{children:`useActionData()`}),` inside the page component to read the action's return value. It is `,(0,d.jsx)(o,{children:`undefined`}),` until the action runs for the first time.`]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`export default function Contact() {
  const result = useActionData()

  return (
    <Form method="post">
      {/* ...inputs... */}
      {result?.ok && <p>Thanks, {result.email}!</p>}
      <button type="submit">Send</button>
    </Form>
  )
}`,jsCode:`export default function Contact() {
  const result = useActionData()

  return (
    <Form method="post">
      {/* ...inputs... */}
      {result?.ok && <p>Thanks, {result.email}!</p>}
      <button type="submit">Send</button>
    </Form>
  )
}`}),(0,d.jsx)(r,{headers:[`Hook`,`What it returns`],rows:[[`useActionData()`,`The route's action return value, or undefined`],[`useNavigation()`,`The current submission state (idle, submitting, loading)`],[`useSubmit()`,`Programmatically submit a form`]]})]}),(0,d.jsxs)(i,{id:`handling-errors`,title:`Handling Errors`,children:[(0,d.jsxs)(a,{children:[`A thrown error inside an action is caught by the nearest `,(0,d.jsx)(o,{children:`error.${e}`}),` boundary, the same way loader and render errors are.`]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const email = formData.get('email')

  if (!email) {
    throw new Error('Email is required')
  }

  // Process the submission
  return { ok: true }
}`,jsCode:`export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')

  if (!email) {
    throw new Error('Email is required')
  }

  // Process the submission
  return { ok: true }
}`})]}),(0,d.jsxs)(i,{id:`progressive-enhancement`,title:`Progressive Enhancement`,children:[(0,d.jsxs)(a,{children:[`Actions work with native HTML forms even when JavaScript is disabled (or before hydration finishes), as long as you use React Router's `,(0,d.jsx)(o,{children:`<Form>`}),` component instead of a plain `,(0,d.jsx)(o,{children:`<form>`}),`.`]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`import { Form } from 'react-router-dom'

export default function Contact() {
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <button type="submit">Send</button>
    </Form>
  )
}`,jsCode:`import { Form } from 'react-router-dom'

export default function Contact() {
  return (
    <Form method="post">
      <input name="email" type="email" required />
      <button type="submit">Send</button>
    </Form>
  )
}`}),(0,d.jsxs)(c,{children:[`Plain `,(0,d.jsx)(o,{children:`<form>`}),` tags do not trigger actions on client-side navigation. Use`,` `,(0,d.jsx)(o,{children:`<Form>`}),` from `,(0,d.jsx)(o,{children:`react-router-dom`}),` for any form that submits to an action.`]})]}),(0,d.jsxs)(i,{id:`client-only`,title:`Client-only Routes`,children:[(0,d.jsxs)(a,{children:[`Routes with an action are marked `,(0,d.jsx)(o,{children:`clientOnly`}),`, the same as routes with a loader. During `,(0,d.jsx)(o,{children:`vite build`}),`, the build tool writes a shell page for them because React Router does not run actions or loaders during static rendering.`]}),(0,d.jsx)(r,{headers:[`Route type`,`SSG output`,`What renders on first visit`],rows:[[`No action`,`Full pre-rendered HTML`,`Instant paint from HTML`],[`With action`,`Shell page (empty #root)`,`Client renders, then the form works`]]})]}),(0,d.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(u,{fileWidth:280,rows:[{n:`app`},{n:`contact`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/contact`},{n:`error.${e}`,d:2}]}),(0,d.jsx)(s,{filename:`src/app/contact/page.${e}`,tsCode:`import { Form, useActionData, useNavigation } from 'react-router-dom'

export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const message = formData.get('message')

  if (!email || !message) {
    throw new Error('All fields are required')
  }

  await sendMessage({ email, message })
  return { ok: true }
}

export default function Contact() {
  const result = useActionData()
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <Form method="post">
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send'}
      </button>
      {result?.ok && <p>Thanks!</p>}
    </Form>
  )
}`,jsCode:`import { Form, useActionData, useNavigation } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const message = formData.get('message')

  if (!email || !message) {
    throw new Error('All fields are required')
  }

  await sendMessage({ email, message })
  return { ok: true }
}

export default function Contact() {
  const result = useActionData()
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <Form method="post">
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send'}
      </button>
      {result?.ok && <p>Thanks!</p>}
    </Form>
  )
}`})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/loaders`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loaders`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fetch data before a route renders.`})]}),(0,d.jsxs)(t,{to:`/docs/accessing-route-data`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Accessing Route Data`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Access loader data and navigation state.`})]}),(0,d.jsxs)(t,{to:`/docs/error-boundaries`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Error Boundaries`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Catch render errors and show a fallback UI.`})]}),(0,d.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Add backend endpoints with plain functions or a full Hono app.`})]}),(0,d.jsxs)(t,{to:`/docs/load`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loading UI`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Show a fallback while pages and layouts load.`})]}),(0,d.jsxs)(t,{to:`/docs/static-export`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Static Export`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`How every route is pre-rendered to HTML at build time.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Actions`,badge:`Experimental`,description:`Handle form submissions and data mutations with action exports and useActionData().`,url:`https://bini.js.org/docs/actions`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/actions.tsx`,toc:f,prev:{to:`/docs/loaders`,title:`Loaders`},next:{to:`/docs/accessing-route-data`,title:`Accessing Route Data`},children:(0,d.jsx)(p,{})})}export{m as default};