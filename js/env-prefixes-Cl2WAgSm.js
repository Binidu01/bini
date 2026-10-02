import{y as e}from"./index-kkU3f4ap.js";import{_ as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,n as l,o as u,r as d}from"./DocBlocks-9fQggHSQ.js";import{i as f,l as p}from"./DocVisuals-C-Aoi6oH.js";var m=e(),h=[{id:`what-are-prefixes`,label:`What are Prefixes?`},{id:`bini-prefix`,label:`BINI_ Prefix`},{id:`vite-prefix`,label:`VITE_ Prefix`},{id:`no-prefix`,label:`No Prefix (Secrets)`},{id:`client-access`,label:`Client-Side Access`},{id:`server-access`,label:`Server-Side Access`},{id:`getenv-vs-requireenv`,label:`getEnv vs requireEnv`},{id:`security-best-practices`,label:`Security Best Practices`}],g=`[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`;function _(){return(0,m.jsxs)(n,{code:g,children:[(0,m.jsx)(`span`,{className:`text-cyan-700 dark:text-cyan-400`,children:`[bini-env]`}),` `,(0,m.jsx)(`span`,{className:`font-semibold text-red-600 dark:text-red-400`,children:`error`}),`  Missing required environment variable: `,(0,m.jsx)(`span`,{className:`text-yellow-700 dark:text-yellow-400`,children:`"SMTP_HOST"`}),`
  `,(0,m.jsx)(`span`,{className:`text-green-600 dark:text-green-400`,children:`->`}),` `,(0,m.jsx)(`span`,{className:`text-neutral-500 dark:text-neutral-400`,children:`Set it in your platform's env config or hosting dashboard.`})]})}function v(){let e=t(),n=e===`js`?`js`:`ts`,u=e===`js`?`jsx`:`tsx`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{id:`what-are-prefixes`,title:`What are Prefixes?`,children:[(0,m.jsx)(r,{className:`mb-4`,children:`Environment variable prefixes determine which variables are exposed to the browser and which are kept server-side. The prefix tells Vite and Bini.js how to handle each variable.`}),(0,m.jsx)(f,{width:260,rows:[{n:`.env`,dot:!0},{n:`.env.local`},{n:`.env.development`},{n:`.env.production`}]}),(0,m.jsx)(a,{headers:[`Prefix`,`Exposed to browser`,`Read with`,`Use for`],rows:[[`BINI_`,`Yes`,`import.meta.env`,`Public client config`],[`VITE_`,`Yes`,`import.meta.env`,`Public client config`],[`No prefix`,`No`,`getEnv / requireEnv`,`Secrets - server only`]]}),(0,m.jsxs)(d,{children:[`Both `,(0,m.jsx)(l,{children:`BINI_`}),` and `,(0,m.jsx)(l,{children:`VITE_`}),` prefixes are exposed to the browser by default. Variables without a prefix are never exposed to the client.`]}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Fixed prefixes:`}),` The prefix list in `,(0,m.jsx)(l,{children:`bini-env`}),` v2 is fixed to`,` `,(0,m.jsx)(l,{children:`['BINI_', 'VITE_']`}),`. There is no option to add custom prefixes.`]})]}),(0,m.jsxs)(c,{id:`bini-prefix`,title:`BINI_ Prefix`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`BINI_`}),` is the default prefix for client-side environment variables in Bini.js. These variables are exposed to the browser via `,(0,m.jsx)(l,{children:`import.meta.env`}),`.`]}),(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`page.${u}`,d:2,dot:!0,url:`/`}]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com
BINI_APP_NAME=My App
BINI_ANALYTICS_ID=UA-XXXX`}),(0,m.jsx)(o,{filename:`src/app/page.${u}`,code:`export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.BINI_APP_NAME
  const analyticsId = import.meta.env.BINI_ANALYTICS_ID

  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
      <p>Analytics: {analyticsId}</p>
    </div>
  )
}`}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Important:`}),` `,(0,m.jsx)(l,{children:`BINI_*`}),` variables are bundled into your client-side JavaScript. Never put secrets in `,(0,m.jsx)(l,{children:`BINI_*`}),` variables.`]})]}),(0,m.jsxs)(c,{id:`vite-prefix`,title:`VITE_ Prefix`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[(0,m.jsx)(l,{children:`VITE_`}),` is Vite's standard prefix for client-side environment variables. Any variable starting with `,(0,m.jsx)(l,{children:`VITE_`}),` is exposed to the browser.`]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
VITE_GA_ID=UA-XXXXX`}),(0,m.jsx)(o,{filename:`src/app/page.${u}`,code:`export default function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL
  const title = import.meta.env.VITE_APP_TITLE
  const gaId = import.meta.env.VITE_GA_ID

  return (
    <div>
      <h1>{title}</h1>
      <p>API: {apiUrl}</p>
      <p>Analytics: {gaId}</p>
    </div>
  )
}`}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Note:`}),` `,(0,m.jsx)(l,{children:`VITE_*`}),` and `,(0,m.jsx)(l,{children:`BINI_*`}),` work the same way. Both are exposed to the browser. Choose whichever you prefer.`]})]}),(0,m.jsxs)(c,{id:`no-prefix`,title:`No Prefix (Secrets)`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`Variables without a prefix are `,(0,m.jsx)(`strong`,{children:`never`}),` exposed to the browser. They are only accessible server-side via `,(0,m.jsx)(l,{children:`getEnv(ctx, key)`}),` in API routes.`]}),(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`api`,d:2},{n:`config.${n}`,d:3,fn:!0,dot:!0,url:`/api/config`}]}),(0,m.jsx)(o,{filename:`.env`,lang:`text`,code:`# .env
DATABASE_URL=postgres://localhost:5432/mydb
STRIPE_SECRET_KEY=sk_live_...
SMTP_PASS=super_secret
JWT_SECRET=your_jwt_secret`}),(0,m.jsx)(o,{filename:`src/app/api/config.${n}`,tsCode:`// src/app/api/config.ts
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  const ctx = c as any

  // These are only accessible server-side
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const jwtSecret = requireEnv(ctx, 'JWT_SECRET')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')

  // Never expose secrets in responses
  return c.json({
    dbConnected: !!dbUrl,
    jwtConfigured: !!jwtSecret,
    smtpConfigured: !!smtpPass,
  })
})

export default app`,jsCode:`// src/app/api/config.js
import { Hono } from 'hono'
import { requireEnv } from 'bini-env'

const app = new Hono()

app.get('/config', (c) => {
  // These are only accessible server-side
  const dbUrl = requireEnv(c, 'DATABASE_URL')
  const jwtSecret = requireEnv(c, 'JWT_SECRET')
  const smtpPass = requireEnv(c, 'SMTP_PASS')

  // Never expose secrets in responses
  return c.json({
    dbConnected: !!dbUrl,
    jwtConfigured: !!jwtSecret,
    smtpConfigured: !!smtpPass,
  })
})

export default app`}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Critical:`}),` Variables without a prefix are the only way to keep secrets secure. Never use `,(0,m.jsx)(l,{children:`BINI_*`}),` or `,(0,m.jsx)(l,{children:`VITE_*`}),` for sensitive data.`]})]}),(0,m.jsxs)(c,{id:`client-access`,title:`Client-Side Access`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`Client-side variables are accessed via `,(0,m.jsx)(l,{children:`import.meta.env`}),` in any component:`]}),(0,m.jsx)(o,{filename:`src/app/page.${u}`,code:`export default function Page() {
  // Access client-side variables
  const apiUrl = import.meta.env.BINI_API_URL
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
    </div>
  )
}`}),(0,m.jsx)(r,{className:`mt-4 mb-4`,children:`The same works in MDX files:`}),(0,m.jsx)(o,{filename:`src/app/about/page.mdx`,code:`export const metadata = {
  title: import.meta.env.VITE_APP_NAME,
}

# Welcome to {import.meta.env.VITE_APP_NAME}`}),(0,m.jsxs)(d,{children:[(0,m.jsx)(l,{children:`import.meta.env`}),` is available in all client-side code including pages, components, and MDX files.`]})]}),(0,m.jsxs)(c,{id:`server-access`,title:`Server-Side Access`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`Server-side variables are accessed via `,(0,m.jsx)(l,{children:`getEnv(ctx, key)`}),` and`,` `,(0,m.jsx)(l,{children:`requireEnv(ctx, key)`}),` in API routes:`]}),(0,m.jsx)(p,{fileWidth:260,rows:[{n:`.env`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`api`,d:2},{n:`email.${n}`,d:3,fn:!0,dot:!0,url:`/api/email/send`}]}),(0,m.jsx)(o,{filename:`src/app/api/email.${n}`,tsCode:`// src/app/api/email.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email/send', async (c) => {
  const ctx = c as any

  // Server-side secrets (no prefix)
  const smtpHost = requireEnv(ctx, 'SMTP_HOST')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')
  const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

  // Optional config with defaults
  const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')

  // Client-side config (BINI_)
  const publicUrl = getEnv(ctx, 'BINI_API_URL')

  return c.json({
    success: true,
    publicUrl, // This is safe to return
    // smtpPass is NEVER returned to the client
  })
})

export default app`,jsCode:`// src/app/api/email.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.post('/email/send', async (c) => {
  // Server-side secrets (no prefix)
  const smtpHost = requireEnv(c, 'SMTP_HOST')
  const smtpPass = requireEnv(c, 'SMTP_PASS')
  const fromEmail = requireEnv(c, 'FROM_EMAIL')

  // Optional config with defaults
  const smtpPort = parseInt(getEnv(c, 'SMTP_PORT') ?? '587')

  // Client-side config (BINI_)
  const publicUrl = getEnv(c, 'BINI_API_URL')

  return c.json({
    success: true,
    publicUrl, // This is safe to return
    // smtpPass is NEVER returned to the client
  })
})

export default app`}),(0,m.jsx)(a,{headers:[`Access Method`,`Where`,`Variables`],rows:[[`import.meta.env`,`Client components`,`BINI_, VITE_`],[`getEnv(ctx, key)`,`API routes`,`All variables (including no prefix)`],[`requireEnv(ctx, key)`,`API routes`,`All variables (throws if missing)`]]})]}),(0,m.jsxs)(c,{id:`getenv-vs-requireenv`,title:`getEnv vs requireEnv`,children:[(0,m.jsxs)(r,{className:`mb-4`,children:[`Both `,(0,m.jsx)(l,{children:`getEnv`}),` and `,(0,m.jsx)(l,{children:`requireEnv`}),` read environment variables from the Hono request context, but they behave differently:`]}),(0,m.jsx)(a,{headers:[`Feature`,`getEnv(ctx, key)`,`requireEnv(ctx, key)`],rows:[[`Returns`,`string | undefined`,`string`],[`On missing`,`Returns undefined`,`Throws error immediately`],[`Use case`,`Optional configuration with defaults`,`Required configuration`],[`Default pattern`,`getEnv(ctx, 'KEY') ?? 'default'`,`requireEnv(ctx, 'KEY')`],[`Error handling`,`Manual check for undefined`,`Try/catch or let it bubble`],[`When to use`,`Feature flags, optional settings`,`Database URLs, API keys, credentials`]]}),(0,m.jsx)(o,{filename:`src/app/api/compare.${n}`,tsCode:`// src/app/api/compare.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/compare', (c) => {
  const ctx = c as any

  // getEnv - for optional values
  const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
  const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
  const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')

  // requireEnv - for required values
  const dbUrl = requireEnv(ctx, 'DATABASE_URL')
  const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')
  const smtpPass = requireEnv(ctx, 'SMTP_PASS')

  return c.json({ debug, region, maxRetries, ready: !!(dbUrl && apiKey && smtpPass) })
})

export default app`,jsCode:`// src/app/api/compare.js
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/compare', (c) => {
  // getEnv - for optional values
  const debug = getEnv(c, 'DEBUG_MODE') === 'true'
  const region = getEnv(c, 'AWS_REGION') ?? 'us-east-1'
  const maxRetries = parseInt(getEnv(c, 'MAX_RETRIES') ?? '3')

  // requireEnv - for required values
  const dbUrl = requireEnv(c, 'DATABASE_URL')
  const apiKey = requireEnv(c, 'STRIPE_SECRET_KEY')
  const smtpPass = requireEnv(c, 'SMTP_PASS')

  return c.json({ debug, region, maxRetries, ready: !!(dbUrl && apiKey && smtpPass) })
})

export default app`}),(0,m.jsxs)(d,{children:[(0,m.jsx)(`strong`,{children:`Best practice:`}),` Use `,(0,m.jsx)(l,{children:`requireEnv`}),` for critical configuration that your app cannot function without. Use `,(0,m.jsx)(l,{children:`getEnv`}),` with `,(0,m.jsx)(l,{children:`??`}),` defaults for optional configuration.`]}),(0,m.jsxs)(r,{className:`mt-4 mb-4`,children:[`On failure, `,(0,m.jsx)(l,{children:`requireEnv`}),` logs a descriptive error to the terminal:`]}),(0,m.jsx)(_,{})]}),(0,m.jsxs)(c,{id:`security-best-practices`,title:`Security Best Practices`,children:[(0,m.jsxs)(i,{children:[(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Never prefix secrets`}),` - Use no prefix for database URLs, API keys, and tokens.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Use BINI_ or VITE_ for public config`}),` - Use these for non-sensitive configuration like API URLs.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Use requireEnv for critical values`}),` - Fail fast when required configuration is missing.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Use getEnv with defaults for optional values`}),` - Keep your app flexible with sensible defaults.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Never expose secrets in responses`}),` - Do not return secret values from API routes.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Use .env.example`}),` - Document required variables without committing actual values.`]}),(0,m.jsxs)(`li`,{children:[(0,m.jsx)(`strong`,{children:`Keep .env in .gitignore`}),` - Never commit environment files with secrets.`]})]}),(0,m.jsx)(s,{children:`.env.example`}),(0,m.jsx)(o,{filename:`.env.example`,lang:`text`,code:`# .env.example - commit this file, never your real .env

# Public (exposed to the browser)
BINI_PUBLIC_API_URL=
VITE_APP_NAME=

# Secrets (server only)
DATABASE_URL=
JWT_SECRET=`}),(0,m.jsx)(s,{className:`mt-8 mb-3`,children:`.gitignore`}),(0,m.jsx)(o,{filename:`.gitignore`,lang:`text`,code:`# .gitignore
.env
.env.local
.env.*.local`})]})]})}function y(){return(0,m.jsx)(u,{title:`Prefixes & Client Exposure`,description:`Learn how environment variable prefixes work and which variables are exposed to the client.`,url:`https://bini.js.org/docs/env-prefixes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/env-prefixes.tsx`,toc:h,prev:{to:`/docs/environment-variables`,title:`Environment Variables`},next:{to:`/docs/env-api`,title:`Using in API Routes`},children:(0,m.jsx)(v,{})})}export{y as default};