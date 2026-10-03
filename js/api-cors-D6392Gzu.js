import{y as e}from"./index-eA3lPtwc.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-B2Cf0_q3.js";var l=e(),u=[{id:`what-is-cors`,label:`What is CORS?`},{id:`default-config`,label:`Default Configuration`},{id:`disabling-cors`,label:`Disabling CORS`},{id:`cors-with-hono`,label:`CORS with Hono`},{id:`custom-cors`,label:`Custom CORS Configuration`},{id:`production-deployment`,label:`Production Deployment`}];function d(){let e=t(),s=e===`js`?`js`:`ts`;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a,{id:`what-is-cors`,title:`What is CORS?`,children:[(0,l.jsx)(n,{children:`Cross-Origin Resource Sharing (CORS) is a browser security feature that restricts web pages from making requests to a different origin than the one that served the page. CORS headers let servers specify which origins may access their resources.`}),(0,l.jsx)(n,{children:`Bini.js includes built-in CORS support for API routes, so you can expose APIs to other origins without extra setup.`})]}),(0,l.jsxs)(a,{id:`default-config`,title:`Default Configuration`,children:[(0,l.jsx)(n,{children:`CORS is enabled by default for all API routes in dev and preview. The default configuration includes:`}),(0,l.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,l.jsxs)(`ul`,{className:`space-y-2 text-[14px] text-neutral-600 dark:text-neutral-400`,children:[(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Access-Control-Allow-Origin:`}),` `,(0,l.jsx)(o,{children:`*`}),` (all origins)`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Access-Control-Allow-Methods:`}),` `,(0,l.jsx)(o,{children:`GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD`})]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Access-Control-Allow-Headers:`}),` `,(0,l.jsx)(o,{children:`Content-Type, Authorization, X-Request-ID`})]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Access-Control-Max-Age:`}),` `,(0,l.jsx)(o,{children:`86400`}),` (24 hours for preflight requests)`]})]})}),(0,l.jsx)(c,{children:`This default works for most development and production scenarios. Customize it to restrict origins or allow specific headers when needed.`})]}),(0,l.jsxs)(a,{id:`disabling-cors`,title:`Disabling CORS`,children:[(0,l.jsxs)(n,{children:[`Disable CORS by setting `,(0,l.jsx)(o,{children:`cors: false`}),` in your `,(0,l.jsx)(o,{children:`biniroute()`}),` configuration:`]}),(0,l.jsx)(i,{filename:`vite.config.${e===`js`?`js`:`ts`}`,tsCode:`// vite.config.ts
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
})`,jsCode:`// vite.config.js
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
})`}),(0,l.jsx)(c,{children:`Disabling CORS is useful for internal APIs or when CORS is handled at the infrastructure level (reverse proxy or CDN).`})]}),(0,l.jsxs)(a,{id:`cors-with-hono`,title:`CORS with Hono`,children:[(0,l.jsxs)(n,{children:[`With Hono you can configure CORS per route or globally using Hono's `,(0,l.jsx)(o,{children:`cors`}),` `,`middleware:`]}),(0,l.jsx)(i,{filename:`src/app/api/users.${s}`,tsCode:`// src/app/api/users.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Global CORS for all routes in this file
app.use(
  '*',
  cors({
    origin: 'https://myapp.com',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  })
)

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))

export default app`,jsCode:`// src/app/api/users.js
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Global CORS for all routes in this file
app.use(
  '*',
  cors({
    origin: 'https://myapp.com',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  })
)

app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', async (c) => c.json({ created: await c.req.json() }, 201))

export default app`}),(0,l.jsx)(i,{filename:`src/app/api/public.${s}`,tsCode:`// src/app/api/public.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Route-specific CORS
app.use(
  '/public/*',
  cors({
    origin: '*', // Public API allows all origins
  })
)

app.get('/public/data', (c) => c.json({ data: 'Public data' }))

// Protected route with strict CORS
app.use(
  '/private/*',
  cors({
    origin: 'https://admin.myapp.com',
    allowMethods: ['GET'],
    credentials: true,
  })
)

app.get('/private/admin', (c) => c.json({ data: 'Admin only' }))

export default app`,jsCode:`// src/app/api/public.js
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Route-specific CORS
app.use(
  '/public/*',
  cors({
    origin: '*', // Public API allows all origins
  })
)

app.get('/public/data', (c) => c.json({ data: 'Public data' }))

// Protected route with strict CORS
app.use(
  '/private/*',
  cors({
    origin: 'https://admin.myapp.com',
    allowMethods: ['GET'],
    credentials: true,
  })
)

app.get('/private/admin', (c) => c.json({ data: 'Admin only' }))

export default app`}),(0,l.jsx)(r,{headers:[`Option`,`Type`,`Description`],rows:[[`origin`,`string | string[] | "*"`,`Allowed origins (default: "*")`],[`allowMethods`,`string[]`,`Allowed HTTP methods`],[`allowHeaders`,`string[]`,`Allowed request headers`],[`maxAge`,`number`,`Preflight cache duration in seconds`],[`credentials`,`boolean`,`Allow credentials (cookies, auth)`],[`exposeHeaders`,`string[]`,`Headers exposed to the browser`]]})]}),(0,l.jsxs)(a,{id:`custom-cors`,title:`Custom CORS Configuration`,children:[(0,l.jsx)(n,{children:`For more control, implement custom CORS handling in your API routes:`}),(0,l.jsx)(i,{filename:`src/app/api/custom.${s}`,tsCode:`// src/app/api/custom.ts
import { Hono } from 'hono'

const app = new Hono()

// Custom CORS middleware
app.use('*', async (c, next) => {
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

export default app`,jsCode:`// src/app/api/custom.js
import { Hono } from 'hono'

const app = new Hono()

// Custom CORS middleware
app.use('*', async (c, next) => {
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

export default app`}),(0,l.jsx)(c,{children:`Custom CORS handling gives full control over headers and supports advanced cases like dynamic origin validation.`})]}),(0,l.jsxs)(a,{id:`production-deployment`,title:`Production Deployment`,children:[(0,l.jsx)(n,{children:`The same CORS configuration applies in production. Platform notes:`}),(0,l.jsx)(`div`,{className:`mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950`,children:(0,l.jsxs)(`ul`,{className:`space-y-2 text-[14px] text-neutral-600 dark:text-neutral-400`,children:[(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`bini-server (Node.js):`}),` Uses the CORS config from your `,(0,l.jsx)(o,{children:`vite.config`})]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Netlify Edge Functions:`}),` Uses the CORS headers set in your Hono app`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Vercel Edge:`}),` Uses the CORS headers set in your Hono app`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`strong`,{className:`text-black dark:text-white`,children:`Cloudflare Workers:`}),` Uses the CORS headers set in your Hono app`]})]})}),(0,l.jsxs)(c,{children:[`In production, prefer specific origins over `,(0,l.jsx)(o,{children:`*`}),`. Never combine wildcard CORS with credentials.`]})]})]})}function f(){return(0,l.jsx)(s,{title:`CORS`,description:`Configure Cross-Origin Resource Sharing (CORS) for your API routes.`,url:`https://bini.js.org/docs/api-cors`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-cors.tsx`,toc:u,prev:{to:`/docs/api-dynamic`,title:`Dynamic API Routes`},next:{to:`/docs/environment-variables`,title:`Environment Variables`},children:(0,l.jsx)(d,{})})}export{f as default};