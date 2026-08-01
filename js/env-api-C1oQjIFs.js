import{c as e,i as t,n,t as r}from"./index-DBGHh9uN.js";import{n as i,v as a}from"./Layout-DyBCtrrd.js";import{t as o}from"./arrow-left-jWXc6dTx.js";import{t as s}from"./arrow-right-DcmUZjEP.js";import{n as c,r as l,t as u}from"./TableOfContents-B7Sgj72V.js";var d=e(t(),1),f=r(),p=[{id:`overview`,label:`Overview`},{id:`basic-usage`,label:`Basic Usage`},{id:`required-vs-optional`,label:`Required vs Optional`},{id:`complete-example`,label:`Complete Example`},{id:`error-handling`,label:`Error Handling`}],m=`Using Environment Variables in API Routes`,h=`https://bini.js.org/docs/env-api`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/env-api.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to read environment variables in your API routes using getEnv and requireEnv.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{id:`overview`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Overview`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`In API routes, environment variables are read using `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv(ctx, key)`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv(ctx, key)`}),`. Both are auto-imported in API routes and read from the Hono request context via `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`hono/adapter`}),`.`]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Always pass c explicitly.`}),` Cast it once at the top of the handler as `,(0,f.jsx)(`code`,{children:`const ctx = c as any`}),`, then use `,(0,f.jsx)(`code`,{children:`ctx`}),` throughout. No `,(0,f.jsx)(`code`,{children:`process.env`}),` fallbacks — every read is request-scoped.`]})]}),(0,f.jsxs)(a.section,{id:`basic-usage`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,f.jsx)(_,{code:`// src/app/api/hello.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'

const app = new Hono()

app.get('/hello', (c) => {
  try {
    const ctx = c as any

    // requireEnv throws if the var is missing — fail fast on required config
    const apiKey  = requireEnv(ctx, 'MY_API_KEY')

    // getEnv returns undefined if missing — use ?? to provide a default
    const appName = getEnv(ctx, 'APP_NAME')     ?? 'World'
    const timeout = parseInt(getEnv(ctx, 'TIMEOUT_MS') ?? '5000')

    return c.json({ message: \`Hello, \${appName}!\` })

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})

export default app`,filename:`src/app/api/hello.ts`})]}),(0,f.jsxs)(a.section,{id:`required-vs-optional`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Required vs Optional`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv`}),` for variables your app cannot run without. Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv`}),` with `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`??`}),` for optional configuration.`]}),(0,f.jsx)(_,{code:`app.post('/example', async (c) => {
  try {
    const ctx = c as any

    // Required vars — handler throws immediately if missing
    const dbUrl  = requireEnv(ctx, 'DATABASE_URL')
    const apiKey = requireEnv(ctx, 'STRIPE_SECRET_KEY')

    // Optional vars — fall back to sensible defaults
    const model      = getEnv(ctx, 'AI_MODEL')    ?? 'gpt-4o'
    const region     = getEnv(ctx, 'AWS_REGION')  ?? 'us-east-1'
    const maxRetries = parseInt(getEnv(ctx, 'MAX_RETRIES') ?? '3')
    const debug      = getEnv(ctx, 'DEBUG_MODE')  === 'true'

    return c.json({ model, region, maxRetries, debug })

  } catch (error: any) {
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ error: error.message }, 500)
    }
    return c.json({ error: 'Something went wrong.' }, 500)
  }
})`}),(0,f.jsx)(v,{headers:[`Function`,`Use for`,`Behavior`],rows:[[`requireEnv(ctx, key)`,`Required config — app cannot run without`,`Throws if missing or empty`],[`getEnv(ctx, key) ?? default`,`Optional config — fallback to default`,`Returns undefined if missing`]]})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`A full API endpoint that uses environment variables for configuration:`}),(0,f.jsx)(_,{code:`// src/app/api/email.ts
import { Hono } from 'hono'
import { getEnv, requireEnv } from 'bini-env'
import nodemailer from 'nodemailer'

const app = new Hono()

app.post('/email/send', async (c) => {
  try {
    const ctx = c as any

    // Required — the app cannot send email without these
    const smtpHost = requireEnv(ctx, 'SMTP_HOST')
    const smtpUser = requireEnv(ctx, 'SMTP_USER')
    const smtpPass = requireEnv(ctx, 'SMTP_PASS')
    const fromEmail = requireEnv(ctx, 'FROM_EMAIL')

    // Optional — with sensible defaults
    const smtpPort = parseInt(getEnv(ctx, 'SMTP_PORT') ?? '587')
    const secure = getEnv(ctx, 'SMTP_SECURE') === 'true'
    const debug = getEnv(ctx, 'DEBUG_MODE') === 'true'

    // Optional — use ?? for fallbacks
    const appName = getEnv(ctx, 'APP_NAME') ?? 'Bini.js App'

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: secure,
      auth: { user: smtpUser, pass: smtpPass },
      debug: debug,
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

export default app`,filename:`src/app/api/email.ts`})]}),(0,f.jsxs)(a.section,{id:`error-handling`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Error Handling`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Always handle errors from `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`requireEnv`}),` gracefully:`]}),(0,f.jsx)(_,{code:`app.get('/config', async (c) => {
  try {
    const ctx = c as any

    const apiKey = requireEnv(ctx, 'API_KEY')
    const secret = requireEnv(ctx, 'SECRET_TOKEN')

    return c.json({ configured: true })

  } catch (error: any) {
    // requireEnv throws an error with a descriptive message
    if (error.message?.includes('[bini-env] Missing required')) {
      return c.json({ 
        error: 'Configuration error', 
        details: error.message 
      }, 500)
    }
    
    // Other errors
    return c.json({ error: 'Something went wrong' }, 500)
  }
})`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`On failure, the terminal shows:`}),(0,f.jsx)(_,{code:`[bini-env] error  Missing required environment variable: "API_KEY"
  -> Set it in your platform's env config or hosting dashboard.`})]}),(0,f.jsxs)(a.section,{id:`production-notes`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Production Notes`}),(0,f.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Set vars in production`}),` — `,(0,f.jsx)(`code`,{children:`.env`}),` files are only loaded during development. In production, set variables in your hosting platform's dashboard.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`No platform-specific code`}),` — `,(0,f.jsx)(`code`,{children:`getEnv`}),` and `,(0,f.jsx)(`code`,{children:`requireEnv`}),` work on Node.js, Bun, Deno, Vercel Edge, Netlify Edge, and Cloudflare Workers.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Never expose secrets`}),` — Never return secret values in API responses. Only return configuration status.`]})]}),(0,f.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,f.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Use BINI_ for client vars`}),` — Use `,(0,f.jsx)(`code`,{children:`BINI_`}),` prefix for client-side public config. No prefix for server-only secrets.`]})]})]}),(0,f.jsx)(y,{children:`The same API code runs unchanged across all platforms. bini-env reads from the correct source on every platform automatically.`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/env-prefixes`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Prefixes & Client Exposure`})]})]}),(0,f.jsxs)(n,{to:`/docs/css`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`CSS Overview`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};