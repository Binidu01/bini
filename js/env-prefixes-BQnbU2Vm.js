import{a as e,i as t,n,t as r}from"./index-1E-q3Iys.js";import{n as i,v as a}from"./Layout-ChwvkThl.js";import{t as o}from"./arrow-left-DMGrZrSk.js";import{t as s}from"./arrow-right-DY1by02V.js";import{t as c}from"./DocSidebar-C0oLvw6m.js";import{n as l,t as u}from"./TableOfContents-DONePU3w.js";var d=e(t(),1),f=r(),p=[{id:`what-are-prefixes`,label:`What are Prefixes?`},{id:`bini-prefix`,label:`BINI_ Prefix`},{id:`vite-prefix`,label:`VITE_ Prefix`},{id:`no-prefix`,label:`No Prefix (Secrets)`},{id:`custom-prefixes`,label:`Custom Prefixes`},{id:`client-access`,label:`Client-Side Access`},{id:`server-access`,label:`Server-Side Access`},{id:`getenv-vs-requireenv`,label:`getEnv vs requireEnv`}],m=`Prefixes & Client Exposure`,h=`https://bini.js.org/docs/env-prefixes`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/env-prefixes.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how environment variable prefixes work and which variables are exposed to the client.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{id:`what-are-prefixes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`What are Prefixes?`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Environment variable prefixes determine which variables are exposed to the browser and which are kept server-side. The prefix tells Vite and Bini.js how to handle each variable.`}),(0,f.jsxs)(y,{children:[`Both `,(0,f.jsx)(`code`,{children:`BINI_`}),` and `,(0,f.jsx)(`code`,{children:`VITE_`}),` prefixes are exposed to the browser by default. Variables without a prefix are never exposed to the client.`]})]}),(0,f.jsxs)(a.section,{id:`bini-prefix`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`BINI_ Prefix`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`BINI_`}),` is the default prefix for client-side environment variables in Bini.js. These variables are exposed to the browser via `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`import.meta.env`}),`.`]}),(0,f.jsx)(_,{code:`# .env
BINI_PUBLIC_API_URL=https://api.example.com
BINI_APP_NAME=My App
BINI_ANALYTICS_ID=UA-XXXX`,filename:`.env`}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function HomePage() {
  const apiUrl = import.meta.env.BINI_PUBLIC_API_URL
  const appName = import.meta.env.BINI_APP_NAME
  const analyticsId = import.meta.env.BINI_ANALYTICS_ID
  
  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
    </div>
  )
}`,filename:`src/app/page.tsx`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Important:`}),` `,(0,f.jsx)(`code`,{children:`BINI_*`}),` variables are bundled into your client-side JavaScript. Never put secrets in `,(0,f.jsx)(`code`,{children:`BINI_*`}),` variables.`]})]}),(0,f.jsxs)(a.section,{id:`vite-prefix`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`VITE_ Prefix`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`VITE_`}),` is Vite's standard prefix for client-side environment variables. Any variable starting with `,(0,f.jsx)(`code`,{children:`VITE_`}),` is exposed to the browser.`]}),(0,f.jsx)(_,{code:`# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
VITE_GA_ID=UA-XXXXX`,filename:`.env`}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL
  const title = import.meta.env.VITE_APP_TITLE
  const gaId = import.meta.env.VITE_GA_ID
  
  return <h1>{title}</h1>
}`,filename:`src/app/page.tsx`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Note:`}),` `,(0,f.jsx)(`code`,{children:`VITE_*`}),` and `,(0,f.jsx)(`code`,{children:`BINI_*`}),` work exactly the same way. Both are exposed to the browser. Choose whichever you prefer.`]})]}),(0,f.jsxs)(a.section,{id:`no-prefix`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`No Prefix (Secrets)`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Variables without a prefix are `,(0,f.jsx)(`strong`,{className:`text-white`,children:`never`}),` exposed to the browser. They are only accessible server-side via `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(ctx, key)`}),` in API routes.`]}),(0,f.jsx)(_,{code:`# .env
DATABASE_URL=postgres://localhost:5432/mydb
STRIPE_SECRET_KEY=sk_live_...
SMTP_PASS=super_secret
JWT_SECRET=your_jwt_secret`,filename:`.env`}),(0,f.jsx)(_,{code:`// src/app/api/config.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

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
    jwtConfigured: !!jwtSecret 
  })
})

export default app`,filename:`src/app/api/config.ts`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Critical:`}),` Variables without a prefix are the only way to keep secrets secure. Never use `,(0,f.jsx)(`code`,{children:`BINI_*`}),` or `,(0,f.jsx)(`code`,{children:`VITE_*`}),` for sensitive data.`]})]}),(0,f.jsxs)(a.section,{id:`custom-prefixes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Custom Prefixes`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`You can add custom prefixes to expose additional variables to the client:`}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [
    biniEnv({
      envPrefix: ['PUBLIC_', 'MY_APP_']
    })
  ]
})`,filename:`vite.config.ts`}),(0,f.jsx)(_,{code:`# .env
PUBLIC_API_URL=https://api.example.com
PUBLIC_APP_NAME=My App
MY_APP_VERSION=1.0.0
BINI_ANALYTICS_ID=UA-XXXX`,filename:`.env`}),(0,f.jsx)(_,{code:`// All of these are accessible in the browser
import.meta.env.PUBLIC_API_URL
import.meta.env.PUBLIC_APP_NAME
import.meta.env.MY_APP_VERSION
import.meta.env.BINI_ANALYTICS_ID`}),(0,f.jsx)(v,{headers:[`Prefix`,`Exposed to browser`],rows:[[`BINI_`,`Yes (default)`],[`VITE_`,`Yes (default)`],[`PUBLIC_`,`Yes (custom)`],[`MY_APP_`,`Yes (custom)`],[`No prefix`,`No`]]}),(0,f.jsx)(y,{children:`Adding custom prefixes is useful when you want to use a different naming convention for your public environment variables.`})]}),(0,f.jsxs)(a.section,{id:`client-access`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Client-Side Access`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Client-side variables are accessed via `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`import.meta.env`}),` in any component:`]}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function Page() {
  // Access client-side variables
  const apiUrl = import.meta.env.BINI_API_URL
  const appName = import.meta.env.VITE_APP_NAME
  
  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
    </div>
  )
}

// In MDX files
# Welcome to {import.meta.env.VITE_APP_NAME}
`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`code`,{children:`import.meta.env`}),` is available in all client-side code including pages, components, and MDX files.`]})]}),(0,f.jsxs)(a.section,{id:`server-access`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Server-Side Access`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Server-side variables are accessed via `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(ctx, key)`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv(ctx, key)`}),` in API routes:`]}),(0,f.jsx)(_,{code:`// src/app/api/email.ts
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

export default app`,filename:`src/app/api/email.ts`}),(0,f.jsx)(v,{headers:[`Access Method`,`Where`,`Variables`],rows:[[`import.meta.env`,`Client components`,`BINI_, VITE_, custom prefixes`],[`getEnv(ctx, key)`,`API routes`,`All variables (including no prefix)`],[`requireEnv(ctx, key)`,`API routes`,`All variables (throws if missing)`]]})]}),(0,f.jsxs)(a.section,{id:`getenv-vs-requireenv`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.42},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`getEnv vs requireEnv`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Both `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv`}),` read environment variables from the Hono request context, but they behave differently:`]}),(0,f.jsx)(v,{headers:[`Feature`,`getEnv(ctx, key)`,`requireEnv(ctx, key)`],rows:[[`Returns`,`string | undefined`,`string`],[`On missing`,`Returns undefined`,`Throws error immediately`],[`Use case`,`Optional configuration with defaults`,`Required configuration`],[`Default pattern`,`getEnv(ctx, 'KEY') ?? 'default'`,`requireEnv(ctx, 'KEY')`],[`Error handling`,`Manual check for undefined`,`Try/catch or let it bubble`],[`When to use`,`Feature flags, optional settings`,`Database URLs, API keys, credentials`]]}),(0,f.jsx)(_,{code:`// getEnv — for optional values
const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'
const region = getEnv(ctx, 'AWS_REGION') ?? 'us-east-1'
const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')

// requireEnv — for required values
const dbUrl = requireEnv(ctx, 'DATABASE_URL')
const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')
const smtpPass = requireEnv(ctx, 'SMTP_PASS')`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Best practice:`}),` Use `,(0,f.jsx)(`code`,{children:`requireEnv`}),` for critical configuration that your app cannot function without. Use `,(0,f.jsx)(`code`,{children:`getEnv`}),` with `,(0,f.jsx)(`code`,{children:`??`}),` defaults for optional configuration.`]}),(0,f.jsxs)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mt-4`,children:[(0,f.jsxs)(`p`,{className:`text-slate-300 text-sm`,children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`On terminal failure:`}),` `,(0,f.jsx)(`code`,{children:`requireEnv`}),` logs a descriptive error to the terminal:`]}),(0,f.jsx)(_,{code:`[bini-env] error  Missing required environment variable: "SMTP_HOST"
  -> Set it in your platform's env config or hosting dashboard.`})]})]}),(0,f.jsxs)(a.section,{id:`security-best-practices`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Security Best Practices`}),(0,f.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Never prefix secrets`}),` — Use no prefix for database URLs, API keys, and tokens.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use BINI_ or VITE_ for public config`}),` — Use these for non-sensitive configuration like API URLs.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use requireEnv for critical values`}),` — Fail fast when required configuration is missing.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use getEnv with defaults for optional values`}),` — Keep your app flexible with sensible defaults.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Never expose secrets in responses`}),` — Don't return secret values from API routes.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use .env.example`}),` — Document required variables without committing actual values.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Keep .env in .gitignore`}),` — Never commit environment files with secrets.`]})]})]})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/environment-variables`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Environment Variables`})]})]}),(0,f.jsxs)(n,{to:`/docs/env-api`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Using in API Routes`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};