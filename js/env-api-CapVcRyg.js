import{a as e,n as t}from"./index-D2AXdX0y.js";import{_ as n,c as r,g as i,h as a,m as o,n as s,o as c,p as l,r as u,v as d}from"./DocBlocks-CgTYcQET.js";import{l as f}from"./DocVisuals-B7hV1VEN.js";var p=e(),m=[{id:`overview`,label:`Overview`},{id:`basic-usage`,label:`Basic Usage`},{id:`required-vs-optional`,label:`Required vs Optional`},{id:`complete-example`,label:`Complete Example`},{id:`error-handling`,label:`Error Handling`},{id:`production-notes`,label:`Production Notes`}],h=`font-semibold text-black dark:text-white`;function g({ext:e}){return(0,p.jsx)(f,{fileWidth:280,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,dot:!0,url:`/api/hello`},{n:`email.${e}`,d:2,fn:!0,url:`/api/email`},{n:`config.${e}`,d:2,fn:!0,url:`/api/config`}]})}function _(){let e=d()===`js`?`js`:`ts`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,p.jsxs)(o,{children:[`In API routes, environment variables are read with `,(0,p.jsx)(s,{children:`getEnv(c, key)`}),` and`,` `,(0,p.jsx)(s,{children:`requireEnv(c, key)`}),`. Both read from the Hono request context, so the same code works on every runtime: Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`]}),(0,p.jsxs)(u,{children:[(0,p.jsx)(`strong`,{children:`Always pass c explicitly.`}),` No casts are needed - `,(0,p.jsx)(s,{children:`getEnv`}),` and`,` `,(0,p.jsx)(s,{children:`requireEnv`}),` accept the Hono context type natively. Every read is request-scoped, so there is no `,(0,p.jsx)(s,{children:`process.env`}),` fallback to worry about.`]})]}),(0,p.jsxs)(a,{id:`basic-usage`,title:`Basic Usage`,children:[(0,p.jsx)(g,{ext:e}),(0,p.jsx)(c,{filename:`src/app/api/hello.${e}`,tsCode:`// src/app/api/hello.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/hello', (c) => {
  try {
    // requireEnv throws if the var is missing - fail fast on required config
    const apiKey = requireEnv(c, 'MY_API_KEY')

    // getEnv returns undefined if missing - use ?? to provide a default
    const appName = getEnv(c, 'APP_NAME') ?? 'World'
    const timeout = parseInt(getEnv(c, 'TIMEOUT_MS') ?? '5000')

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/hello.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/hello', (c) => {
  try {
    // requireEnv throws if the var is missing - fail fast on required config
    const apiKey = requireEnv(c, 'MY_API_KEY')

    // getEnv returns undefined if missing - use ?? to provide a default
    const appName = getEnv(c, 'APP_NAME') ?? 'World'
    const timeout = parseInt(getEnv(c, 'TIMEOUT_MS') ?? '5000')

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`})]}),(0,p.jsxs)(a,{id:`required-vs-optional`,title:`Required vs Optional`,children:[(0,p.jsxs)(o,{children:[`Use `,(0,p.jsx)(s,{children:`requireEnv`}),` for variables your app cannot run without. Use `,(0,p.jsx)(s,{children:`getEnv`}),` with`,` `,(0,p.jsx)(s,{children:`??`}),` for optional configuration.`]}),(0,p.jsx)(c,{filename:`src/app/api/example.${e}`,tsCode:`// src/app/api/example.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/example', async (c) => {
  try {
    // Required vars - handler throws immediately if missing
    const dbUrl = requireEnv(c, 'DATABASE_URL')
    const apiKey = requireEnv(c, 'STRIPE_SECRET_KEY')

    // Optional vars - fall back to sensible defaults
    const model = getEnv(c, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(c, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(c, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/example.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/example', async (c) => {
  try {
    // Required vars - handler throws immediately if missing
    const dbUrl = requireEnv(c, 'DATABASE_URL')
    const apiKey = requireEnv(c, 'STRIPE_SECRET_KEY')

    // Optional vars - fall back to sensible defaults
    const model = getEnv(c, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(c, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(c, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`}),(0,p.jsx)(i,{headers:[`Function`,`Use for`,`Behavior`],rows:[[`requireEnv(c, key)`,`Required config - app cannot run without`,`Throws if missing or empty`],[`getEnv(c, key) ?? default`,`Optional config - fallback to default`,`Returns undefined if missing`]]})]}),(0,p.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,p.jsx)(o,{children:`A full API endpoint that uses environment variables for configuration:`}),(0,p.jsx)(c,{filename:`src/app/api/email.${e}`,tsCode:`// src/app/api/email.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const smtpHost = requireEnv(c, 'SMTP_HOST')
    const smtpUser = requireEnv(c, 'SMTP_USER')
    const smtpPass = requireEnv(c, 'SMTP_PASS')
    const fromEmail = requireEnv(c, 'FROM_EMAIL')

    const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587')
    const secure = getEnv(c, 'SMTP_SECURE') === 'true'
    const debug = getEnv(c, 'DEBUG_MODE') === 'true'
    const appName = getEnv(c, 'APP_NAME') ?? 'Bini.js App'

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
      debug,
    })

    const { to, subject, text } = await c.req.json()

    if (!to || !subject || !text) {
      return c.json({ error: 'Missing required fields: to, subject, text' }, 400)
    }

    await transporter.sendMail({
      from: fromEmail,
      to,
      subject: \`[\${appName}] \${subject}\`,
      text,
    })

    return c.json({
      success: true,
      message: 'Email sent',
      from: fromEmail,
      app: appName,
    })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    console.error('Email error:', error)
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/email.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const smtpHost = requireEnv(c, 'SMTP_HOST')
    const smtpUser = requireEnv(c, 'SMTP_USER')
    const smtpPass = requireEnv(c, 'SMTP_PASS')
    const fromEmail = requireEnv(c, 'FROM_EMAIL')

    const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587')
    const secure = getEnv(c, 'SMTP_SECURE') === 'true'
    const debug = getEnv(c, 'DEBUG_MODE') === 'true'
    const appName = getEnv(c, 'APP_NAME') ?? 'Bini.js App'

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
      debug,
    })

    const { to, subject, text } = await c.req.json()

    if (!to || !subject || !text) {
      return c.json({ error: 'Missing required fields: to, subject, text' }, 400)
    }

    await transporter.sendMail({
      from: fromEmail,
      to,
      subject: \`[\${appName}] \${subject}\`,
      text,
    })

    return c.json({
      success: true,
      message: 'Email sent',
      from: fromEmail,
      app: appName,
    })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    console.error('Email error:', error)
    return c.json({ error: 'Failed to send email.' }, 500)
  }
})

export default app`})]}),(0,p.jsxs)(a,{id:`error-handling`,title:`Error Handling`,children:[(0,p.jsxs)(o,{children:[`Always handle errors from `,(0,p.jsx)(s,{children:`requireEnv`}),` gracefully:`]}),(0,p.jsx)(c,{filename:`src/app/api/config.${e}`,tsCode:`// src/app/api/config.ts
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', async (c) => {
  try {
    const apiKey = requireEnv(c, 'API_KEY')
    const secret = requireEnv(c, 'SECRET_TOKEN')

    return c.json({ configured: true })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json(
        {
          error: 'Configuration error',
          details: error.message,
        },
        500
      )
    }

    return c.json({ error: 'Something went wrong' }, 500)
  }
})

export default app`,jsCode:`// src/app/api/config.js
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', async (c) => {
  try {
    const apiKey = requireEnv(c, 'API_KEY')
    const secret = requireEnv(c, 'SECRET_TOKEN')

    return c.json({ configured: true })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json(
        {
          error: 'Configuration error',
          details: error.message,
        },
        500
      )
    }

    return c.json({ error: 'Something went wrong' }, 500)
  }
})

export default app`}),(0,p.jsx)(o,{children:`On failure, the terminal shows:`}),(0,p.jsxs)(l,{code:`[bini-env] error  Missing required environment variable: "API_KEY"
  -> Set it in your platform's env config or hosting dashboard.`,children:[(0,p.jsx)(`span`,{className:`font-bold text-red-600 dark:text-red-400`,children:`[bini-env] error`}),`  Missing required environment variable: `,(0,p.jsx)(`span`,{className:`text-amber-600 dark:text-yellow-300`,children:`"API_KEY"`}),`
`,(0,p.jsx)(`span`,{className:`text-neutral-400 dark:text-neutral-500`,children:`  -> Set it in your platform's env config or hosting dashboard.`})]})]}),(0,p.jsxs)(a,{id:`production-notes`,title:`Production Notes`,children:[(0,p.jsxs)(n,{children:[(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:h,children:`Set vars in production`}),` - `,(0,p.jsx)(s,{children:`.env`}),` files are only loaded during development. In production, set variables in your hosting platform's dashboard.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:h,children:`No platform-specific code`}),` - `,(0,p.jsx)(s,{children:`getEnv`}),` and`,` `,(0,p.jsx)(s,{children:`requireEnv`}),` work on Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:h,children:`Never expose secrets`}),` - Never return secret values in API responses. Only return configuration status.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{className:h,children:`Use BINI_ for client vars`}),` - Use the `,(0,p.jsx)(s,{children:`BINI_`}),` `,`prefix for client-side public config. No prefix for server-only secrets.`]})]}),(0,p.jsx)(u,{children:`The same API code runs unchanged across all platforms. The environment functions read from the correct source on every platform automatically.`})]}),(0,p.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,p.jsxs)(t,{to:`/docs/environment-variables`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Environment Variables`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Overview of getEnv and requireEnv.`})]}),(0,p.jsxs)(t,{to:`/docs/env-prefixes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Prefixes & Client Exposure`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`What gets bundled and what stays server-side.`})]}),(0,p.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes Overview`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Files under app/api/ map to /api/*.`})]}),(0,p.jsxs)(t,{to:`/docs/api-hono`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,p.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Hono Integration`}),(0,p.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Routing, middleware, and validation with Hono.`})]})]})]})}function v(){return(0,p.jsx)(r,{title:`Using Environment Variables in API Routes`,description:`Read environment variables in API routes with getEnv and requireEnv.`,url:`https://bini.js.org/docs/env-api`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/env-api.tsx`,toc:m,prev:{to:`/docs/env-prefixes`,title:`Prefixes & Client Exposure`},next:{to:`/docs/css`,title:`CSS Overview`},children:(0,p.jsx)(_,{})})}export{v as default};