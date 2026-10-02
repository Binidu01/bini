import{y as e}from"./index-BylXCjGx.js";import{_ as t,d as n,f as r,g as i,h as a,i as o,m as s,n as c,o as l,r as u}from"./DocBlocks-B-dO9H-m.js";import{a as d,c as f,l as p,n as m,t as h}from"./DocVisuals-BvcYqvgs.js";var g=e(),_=[{id:`overview`,label:`Overview`},{id:`basic-usage`,label:`Basic Usage`},{id:`required-vs-optional`,label:`Required vs Optional`},{id:`complete-example`,label:`Complete Example`},{id:`error-handling`,label:`Error Handling`},{id:`production-notes`,label:`Production Notes`}],v=`font-semibold text-black dark:text-white`;function y({title:e,accent:t=!1,children:n}){return(0,g.jsxs)(`div`,{className:`w-52 shrink-0 ${m} ${t?`ring-1 ring-blue-500/40`:``}`,children:[(0,g.jsx)(`div`,{className:`border-b px-3 py-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 ${f}`,children:e}),(0,g.jsx)(`div`,{className:`p-3 font-mono text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300`,children:n})]})}function b(){return(0,g.jsx)(d,{children:(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsxs)(y,{title:`.env or hosting dashboard`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`text-sky-600 dark:text-sky-400`,children:`MY_API_KEY`}),`=sk_live_…`]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`text-sky-600 dark:text-sky-400`,children:`APP_NAME`}),`=Bini`]})]}),(0,g.jsx)(h,{}),(0,g.jsxs)(y,{title:`via hono/adapter`,accent:!0,children:[(0,g.jsx)(`div`,{className:`text-blue-600 dark:text-blue-300`,children:`getEnv(ctx, key)`}),(0,g.jsx)(`div`,{className:`text-blue-600 dark:text-blue-300`,children:`requireEnv(ctx, key)`})]}),(0,g.jsx)(h,{}),(0,g.jsxs)(y,{title:`API handler`,children:[(0,g.jsx)(`div`,{children:`const key = requireEnv(`}),(0,g.jsx)(`div`,{className:`pl-3`,children:`ctx, 'MY_API_KEY'`}),(0,g.jsx)(`div`,{children:`)`})]})]})})}function x({ext:e}){return(0,g.jsx)(p,{fileWidth:280,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,dot:!0,url:`/api/hello`},{n:`email.${e}`,d:2,fn:!0,url:`/api/email`},{n:`config.${e}`,d:2,fn:!0,url:`/api/config`}]})}function S(){let e=t()===`js`?`js`:`ts`;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(s,{id:`overview`,title:`Overview`,children:[(0,g.jsxs)(r,{children:[`In API routes, environment variables are read with `,(0,g.jsx)(c,{children:`getEnv(c, key)`}),` and`,` `,(0,g.jsx)(c,{children:`requireEnv(c, key)`}),`. Both read from the Hono request context via`,` `,(0,g.jsx)(c,{children:`hono/adapter`}),` - that is what makes them work on every runtime.`]}),(0,g.jsx)(b,{}),(0,g.jsxs)(u,{children:[(0,g.jsx)(`strong`,{children:`Auto-imported:`}),` `,(0,g.jsx)(c,{children:`getEnv`}),` and `,(0,g.jsx)(c,{children:`requireEnv`}),` are auto-imported in API routes - you do not need to write the import from `,(0,g.jsx)(c,{children:`bini-env`}),` manually.`]}),(0,g.jsxs)(u,{children:[(0,g.jsx)(`strong`,{children:`Always pass c explicitly.`}),` In TypeScript, cast it once at the top of the handler as `,(0,g.jsx)(c,{children:`const ctx = c as any`}),`, then use `,(0,g.jsx)(c,{children:`ctx`}),` throughout. No`,` `,(0,g.jsx)(c,{children:`process.env`}),` fallbacks - every read is request-scoped.`]})]}),(0,g.jsxs)(s,{id:`basic-usage`,title:`Basic Usage`,children:[(0,g.jsx)(x,{ext:e}),(0,g.jsx)(o,{filename:`src/app/api/hello.${e}`,tsCode:`// src/app/api/hello.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  try {
    const ctx = c as any

    // requireEnv throws if the var is missing - fail fast on required config
    const apiKey = requireEnv(ctx, 'MY_API_KEY')

    // getEnv returns undefined if missing - use ?? to provide a default
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'
    const timeout = parseInt(getEnv(ctx, 'TIMEOUT_MS') ?? '5000')

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

const app = new Hono()

app.get('/hello', (c) => {
  try {
    const ctx = c

    // requireEnv throws if the var is missing - fail fast on required config
    const apiKey = requireEnv(ctx, 'MY_API_KEY')

    // getEnv returns undefined if missing - use ?? to provide a default
    const appName = getEnv(ctx, 'APP_NAME') ?? 'World'
    const timeout = parseInt(getEnv(ctx, 'TIMEOUT_MS') ?? '5000')

    return c.json({ message: \`Hello, \${appName}!\` })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`})]}),(0,g.jsxs)(s,{id:`required-vs-optional`,title:`Required vs Optional`,children:[(0,g.jsxs)(r,{children:[`Use `,(0,g.jsx)(c,{children:`requireEnv`}),` for variables your app cannot run without. Use `,(0,g.jsx)(c,{children:`getEnv`}),` with`,` `,(0,g.jsx)(c,{children:`??`}),` for optional configuration.`]}),(0,g.jsx)(o,{filename:`src/app/api/example.${e}`,tsCode:`app.post('/example', async (c) => {
  try {
    const ctx = c as any

    // Required vars - handler throws immediately if missing
    const dbUrl = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    // Optional vars - fall back to sensible defaults
    const model = getEnv(ctx, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})`,jsCode:`app.post('/example', async (c) => {
  try {
    const ctx = c

    // Required vars - handler throws immediately if missing
    const dbUrl = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    // Optional vars - fall back to sensible defaults
    const model = getEnv(ctx, 'AI_MODEL') ?? 'gpt-4o'
    const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

    return c.json({ model, region, maxRetries, debug })
  } catch (error) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})`}),(0,g.jsx)(a,{headers:[`Function`,`Use for`,`Behavior`],rows:[[`requireEnv(ctx, key)`,`Required config - app cannot run without`,`Throws if missing or empty`],[`getEnv(ctx, key) ?? default`,`Optional config - fallback to default`,`Returns undefined if missing`]]})]}),(0,g.jsxs)(s,{id:`complete-example`,title:`Complete Example`,children:[(0,g.jsx)(r,{children:`A full API endpoint that uses environment variables for configuration:`}),(0,g.jsx)(o,{filename:`src/app/api/email.${e}`,tsCode:`// src/app/api/email.ts
import { Hono } from 'hono'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const ctx = c as any

    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpUser = requireEnv(ctx, 'SMTP_USER')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')
    const secure = getEnv(ctx, 'SMTP_SECURE') === 'true'
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
    const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js App'

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
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const ctx = c

    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpUser = requireEnv(ctx, 'SMTP_USER')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')
    const secure = getEnv(ctx, 'SMTP_SECURE') === 'true'
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
    const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js App'

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

export default app`})]}),(0,g.jsxs)(s,{id:`error-handling`,title:`Error Handling`,children:[(0,g.jsxs)(r,{children:[`Always handle errors from `,(0,g.jsx)(c,{children:`requireEnv`}),` gracefully:`]}),(0,g.jsx)(o,{filename:`src/app/api/config.${e}`,tsCode:`app.get('/config', async (c) => {
  try {
    const ctx = c as any

    const apiKey = requireEnv(ctx, 'API_KEY')
    const secret = requireEnv(ctx, 'SECRET_TOKEN')

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
})`,jsCode:`app.get('/config', async (c) => {
  try {
    const ctx = c

    const apiKey = requireEnv(ctx, 'API_KEY')
    const secret = requireEnv(ctx, 'SECRET_TOKEN')

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
})`}),(0,g.jsx)(r,{children:`On failure, the terminal shows:`}),(0,g.jsxs)(n,{code:`[bini-env] error  Missing required environment variable: "API_KEY"
  -> Set it in your platform's env config or hosting dashboard.`,children:[(0,g.jsx)(`span`,{className:`font-bold text-red-600 dark:text-red-400`,children:`[bini-env] error`}),`  Missing required environment variable: `,(0,g.jsx)(`span`,{className:`text-amber-600 dark:text-yellow-300`,children:`"API_KEY"`}),`
`,(0,g.jsx)(`span`,{className:`text-neutral-400 dark:text-neutral-500`,children:`  -> Set it in your platform's env config or hosting dashboard.`})]})]}),(0,g.jsxs)(s,{id:`production-notes`,title:`Production Notes`,children:[(0,g.jsxs)(i,{children:[(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:v,children:`Set vars in production`}),` - `,(0,g.jsx)(c,{children:`.env`}),` files are only loaded during development. In production, set variables in your hosting platform's dashboard.`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:v,children:`No platform-specific code`}),` - `,(0,g.jsx)(c,{children:`getEnv`}),` and`,` `,(0,g.jsx)(c,{children:`requireEnv`}),` work on Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:v,children:`Never expose secrets`}),` - Never return secret values in API responses. Only return configuration status.`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`strong`,{className:v,children:`Use BINI_ for client vars`}),` - Use the `,(0,g.jsx)(c,{children:`BINI_`}),` `,`prefix for client-side public config. No prefix for server-only secrets.`]})]}),(0,g.jsx)(u,{children:`The same API code runs unchanged across all platforms. bini-env reads from the correct source on every platform automatically.`})]})]})}function C(){return(0,g.jsx)(l,{title:`Using Environment Variables in API Routes`,description:`Read environment variables in API routes with getEnv and requireEnv.`,url:`https://bini.js.org/docs/env-api`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/env-api.tsx`,toc:_,prev:{to:`/docs/env-prefixes`,title:`Prefixes & Client Exposure`},next:{to:`/docs/css`,title:`CSS Overview`},children:(0,g.jsx)(S,{})})}export{C as default};