import{a as e,i as t,n,t as r}from"./index-1E-q3Iys.js";import{n as i,v as a}from"./Layout-ChwvkThl.js";import{t as o}from"./arrow-left-DMGrZrSk.js";import{t as s}from"./arrow-right-DY1by02V.js";import{t as c}from"./DocSidebar-C0oLvw6m.js";import{n as l,t as u}from"./TableOfContents-DONePU3w.js";var d=e(t(),1),f=r(),p=[{id:`what-is-cors`,label:`What is CORS?`},{id:`default-config`,label:`Default Configuration`},{id:`disabling-cors`,label:`Disabling CORS`},{id:`cors-with-hono`,label:`CORS with Hono`},{id:`custom-cors`,label:`Custom CORS Configuration`},{id:`production-deployment`,label:`Production Deployment`}],m=`CORS`,h=`https://bini.js.org/docs/api-cors`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/api-cors.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to configure Cross-Origin Resource Sharing (CORS) for your API routes.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{id:`what-is-cors`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`What is CORS?`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the web page. CORS headers allow servers to specify which origins are permitted to access their resources.`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Bini.js includes built-in CORS support for API routes, making it easy to build APIs that can be accessed from different origins.`})]}),(0,f.jsxs)(a.section,{id:`default-config`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Default Configuration`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`CORS is enabled by default for all API routes in dev and preview. The default configuration includes:`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Access-Control-Allow-Origin:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`*`}),` (all origins)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Access-Control-Allow-Methods:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Access-Control-Allow-Headers:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`Content-Type, Authorization, X-Request-ID`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Access-Control-Max-Age:`}),` `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`86400`}),` (24 hours for preflight requests)`]})]})}),(0,f.jsx)(y,{children:`This default configuration works for most development and production scenarios. You can customize it to restrict origins or configure specific headers.`})]}),(0,f.jsxs)(a.section,{id:`disabling-cors`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Disabling CORS`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Disable CORS by setting `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`cors: false`}),` in your `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`biniroute()`}),` configuration:`]}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    biniroute({
      cors: false, // Disable CORS for all API routes
    }),
  ],
})`,filename:`vite.config.ts`}),(0,f.jsx)(y,{children:`Disabling CORS is useful for internal APIs or when you're handling CORS at the infrastructure level (e.g., via a reverse proxy or CDN).`})]}),(0,f.jsxs)(a.section,{id:`cors-with-hono`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CORS with Hono`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`When using Hono for your API routes, you can configure CORS per route or globally using Hono's `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`cors`}),` middleware:`]}),(0,f.jsx)(_,{code:`// src/app/api/users.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Global CORS for all routes in this file
app.use('*', cors({
  origin: 'https://myapp.com',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
}))

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))

export default app`,filename:`src/app/api/users.ts`}),(0,f.jsx)(_,{code:`// src/app/api/public.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Route-specific CORS
app.use('/public/*', cors({
  origin: '*', // Public API allows all origins
}))

app.get('/public/data', (c) => c.json({ data: 'Public data' }))

// Protected route with strict CORS
app.use('/private/*', cors({
  origin: 'https://admin.myapp.com',
  allowMethods: ['GET'],
  credentials: true,
}))

app.get('/private/admin', (c) => c.json({ data: 'Admin only' }))

export default app`,filename:`src/app/api/public.ts`}),(0,f.jsx)(v,{headers:[`Option`,`Type`,`Description`],rows:[[`origin`,`string | string[] | "*"`,`Allowed origins (default: "*")`],[`allowMethods`,`string[]`,`Allowed HTTP methods`],[`allowHeaders`,`string[]`,`Allowed request headers`],[`maxAge`,`number`,`Preflight cache duration in seconds`],[`credentials`,`boolean`,`Allow credentials (cookies, auth)`],[`exposeHeaders`,`string[]`,`Headers exposed to the browser`]]})]}),(0,f.jsxs)(a.section,{id:`custom-cors`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Custom CORS Configuration`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`For more granular control, you can implement custom CORS handling in your API routes:`}),(0,f.jsx)(_,{code:`// src/app/api/custom.ts
import { Hono } from 'hono'

const app = new Hono()

// Custom CORS middleware
app.use('*', async (c, next) => {
  // Check if the request is from a known origin
  const origin = c.req.header('Origin')
  const allowedOrigins = ['https://myapp.com', 'https://staging.myapp.com']
  
  if (origin && allowedOrigins.includes(origin)) {
    c.header('Access-Control-Allow-Origin', origin)
    c.header('Access-Control-Allow-Credentials', 'true')
  }
  
  // Handle preflight requests
  if (c.req.method === 'OPTIONS') {
    c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    c.header('Access-Control-Max-Age', '86400')
    return c.text('', 204)
  }
  
  await next()
})

app.get('/custom/data', (c) => c.json({ data: 'Custom CORS' }))

export default app`,filename:`src/app/api/custom.ts`}),(0,f.jsx)(y,{children:`Custom CORS handling gives you full control over CORS headers and allows you to implement advanced scenarios like dynamic origin validation.`})]}),(0,f.jsxs)(a.section,{id:`production-deployment`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Production Deployment`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When deploying to production, the same CORS configuration applies. For platform-specific configuration:`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-6`,children:(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`bini-server (Node.js):`}),` Uses the same CORS configuration from your `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`vite.config.ts`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Netlify Edge Functions:`}),` Uses the CORS headers set in your Hono app`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Vercel Edge:`}),` Uses the CORS headers set in your Hono app`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Cloudflare Workers:`}),` Uses the CORS headers set in your Hono app`]})]})}),(0,f.jsxs)(y,{children:[`For production, consider restricting CORS to specific origins rather than using `,(0,f.jsx)(`code`,{children:`*`}),` to improve security.`]})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/api-dynamic`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Dynamic API Routes`})]})]}),(0,f.jsxs)(n,{to:`/docs/environment-variables`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Environment Variables`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};