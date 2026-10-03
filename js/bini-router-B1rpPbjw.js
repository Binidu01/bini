import{y as e}from"./index-CIF88j6o.js";import{f as t,h as n,i as r,m as i,n as a,r as o,u as s}from"./DocBlocks-rQGAhDUT.js";import{i as c}from"./DocVisuals-DLW3KHGy.js";import{t as l}from"./PluginPage-CUWVibqz.js";var u=e(),d=[{id:`overview`,label:`Overview`},{id:`features`,label:`Features`},{id:`install`,label:`Install`},{id:`setup`,label:`Setup`},{id:`file-structure`,label:`File Structure`},{id:`routing`,label:`Routing`},{id:`route-groups`,label:`Route Groups`},{id:`parallel-routes`,label:`Parallel Routes`},{id:`intercepting-routes`,label:`Intercepting Routes`},{id:`layouts`,label:`Layouts`},{id:`templates`,label:`Templates`},{id:`boundaries`,label:`Boundaries`},{id:`mdx`,label:`MDX and Markdown`},{id:`metadata`,label:`Metadata`},{id:`document-export`,label:`Document Export`},{id:`auto-imports`,label:`Auto-imports`},{id:`env`,label:`Environment Variables`},{id:`api-routes`,label:`API Routes`},{id:`config`,label:`Configuration`}],f=`https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-router/page.tsx`;function p({title:e,children:t}){return(0,u.jsxs)(`div`,{className:`rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950`,children:[(0,u.jsx)(`h3`,{className:`mb-2 text-sm font-semibold text-black dark:text-white`,children:e}),(0,u.jsx)(`p`,{className:`text-sm leading-relaxed text-neutral-600 dark:text-neutral-400`,children:t})]})}function m(){return(0,u.jsxs)(l,{title:`bini-router`,badge:`Official`,description:`File-based routing, nested layouts, templates, route groups, parallel routes @slot, intercepting routes (.), folder-scoped loading/error/404/default boundaries, MDX pages, and Web-standard Request → Response API routes for Vite.`,url:`https://bini.dev/plugins/bini-router`,editUrl:f,toc:d,prev:{to:`/plugins/bini-deploy`,title:`bini-deploy`},next:{to:`/plugins/bini-env`,title:`bini-env`},children:[(0,u.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,u.jsxs)(t,{children:[(0,u.jsx)(a,{children:`bini-router`}),` is the core of Bini.js. Similar to Next.js App Router, but pure SPA with no server. Scans `,(0,u.jsx)(a,{children:`src/app/`}),` on every file change and regenerates React Router tree instantly with HMR. Now with parallel routes `,(0,u.jsx)(a,{children:`@sidebar`}),`, intercepting routes`,` `,(0,u.jsx)(a,{children:`(.) (..) (...)`}),`, and typed `,(0,u.jsx)(a,{children:`document`}),` export with no HTML injection surface.`]}),(0,u.jsxs)(o,{children:[`Zero config. Production deployment handled by companion `,(0,u.jsx)(a,{children:`bini-deploy`}),`. This package focuses on routing, layouts, and local API serving.`]})]}),(0,u.jsx)(i,{id:`features`,title:`Features`,children:(0,u.jsxs)(`div`,{className:`mb-6 grid gap-4 sm:grid-cols-2`,children:[(0,u.jsxs)(p,{title:`File-based Routing`,children:[(0,u.jsx)(a,{children:`page.tsx`}),` in folders + flat files like `,(0,u.jsx)(a,{children:`about.tsx`}),` → URLs. `,(0,u.jsx)(a,{children:`index.*`}),` → parent.`]}),(0,u.jsxs)(p,{title:`Parallel Routes`,children:[(0,u.jsx)(a,{children:`@sidebar`}),`, `,(0,u.jsx)(a,{children:`@modal`}),` slots resolve independently with `,(0,u.jsx)(a,{children:`default.tsx`}),` `,`fallback.`]}),(0,u.jsxs)(p,{title:`Intercepting Routes`,children:[(0,u.jsx)(a,{children:`(.)name`}),`, `,(0,u.jsx)(a,{children:`(..)name`}),`, `,(0,u.jsx)(a,{children:`(...)name`}),` for modal flows like photo-in-feed.`]}),(0,u.jsxs)(p,{title:`Dynamic & Catch-all`,children:[(0,u.jsx)(a,{children:`[id]`}),`, `,(0,u.jsx)(a,{children:`[...slug]`}),`, `,(0,u.jsx)(a,{children:`[[...slug]]`}),` for folders and flat files. Required vs optional tracked separately.`]}),(0,u.jsx)(p,{title:`Security & Bounded`,children:`Segment validation, traversal guards, host-header validation, 10MB source limit, 500-entry capped preview cache.`}),(0,u.jsxs)(p,{title:`Document Export`,children:[`Typed tree, not raw HTML strings - no injection surface. `,(0,u.jsx)(a,{children:`html`}),`, `,(0,u.jsx)(a,{children:`body`}),`,`,` `,(0,u.jsx)(a,{children:`head`}),` merged safely.`]})]})}),(0,u.jsxs)(i,{id:`install`,title:`Install`,children:[(0,u.jsx)(s,{tabs:[{id:`npm`,label:`npm`,command:`$ npm install bini-router bini-env`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm add bini-router bini-env`},{id:`yarn`,label:`yarn`,command:`$ yarn add bini-router bini-env`},{id:`bun`,label:`bun`,command:`$ bun add bini-router bini-env`}]}),(0,u.jsx)(n,{headers:[`Dependency`,`Version`],rows:[[`Vite`,`8 or later`],[`React`,`18 or later`],[`react-router-dom`,`Required - BrowserRouter, Routes, Route, Outlet, useLocation, useParams`]]})]}),(0,u.jsxs)(i,{id:`setup`,title:`Setup`,children:[(0,u.jsx)(r,{filename:`vite.config.ts`,lang:`js`,code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'
import { biniEnv } from 'bini-env'

export default defineConfig({
  plugins: [react(), biniEnv(), biniroute()],
})`}),(0,u.jsx)(r,{filename:`src/main.tsx`,lang:`js`,code:`import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(<App />)`})]}),(0,u.jsx)(i,{id:`file-structure`,title:`File Structure`,children:(0,u.jsx)(c,{width:380,rows:[{n:`src`},{n:`main.tsx`,d:1,dot:!0},{n:`App.tsx`,d:1,dot:!0},{n:`app`,d:1},{n:`layout.tsx`,d:2,fn:!0},{n:`template.tsx`,d:2,fn:!0},{n:`page.tsx`,d:2,fn:!0},{n:`loading.tsx`,d:2},{n:`not-found.tsx`,d:2},{n:`error.tsx`,d:2},{n:`global-error.tsx`,d:2},{n:`about.mdx`,d:2},{n:`(marketing)`,d:2},{n:`layout.tsx`,d:3,fn:!0},{n:`pricing`,d:3},{n:`page.tsx`,d:4,fn:!0},{n:`@sidebar`,d:2},{n:`default.tsx`,d:3,fn:!0},{n:`page.tsx`,d:3,fn:!0},{n:`dashboard`,d:3},{n:`page.tsx`,d:4,fn:!0},{n:`photo`,d:2},{n:`[id]`,d:3},{n:`page.tsx`,d:4,fn:!0},{n:`(.)view`,d:4},{n:`page.tsx`,d:5,fn:!0},{n:`blog`,d:2},{n:`index.tsx`,d:3,fn:!0},{n:`[slug].tsx`,d:3,fn:!0},{n:`api`,d:2},{n:`users.ts`,d:3,fn:!0},{n:`posts`,d:3},{n:`[id].ts`,d:4,fn:!0},{n:`[...catch].ts`,d:3,fn:!0}]})}),(0,u.jsxs)(i,{id:`routing`,title:`Routing`,children:[(0,u.jsx)(r,{filename:`src/app/dashboard/page.tsx`,lang:`js`,code:`export default function Dashboard() {
  const [count, setCount] = useState(0)
  return <h1>Dashboard</h1>
}`}),(0,u.jsx)(r,{filename:`src/app/blog/[slug]/page.tsx`,lang:`js`,code:`export default function Post() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`}),(0,u.jsx)(r,{filename:`src/app/docs/[...path]/page.tsx`,lang:`js`,code:`export default function Docs() {
  // Matches /docs/anything/nested/here
  return <h1>Docs</h1>
}`}),(0,u.jsxs)(o,{children:[`Priority: static → dynamic `,(0,u.jsx)(a,{children:`:param`}),` → required `,(0,u.jsx)(a,{children:`*`}),` → optional `,(0,u.jsx)(a,{children:`**`}),` last. Extension:`,` `,(0,u.jsxs)(a,{children:[`.tsx `,`>`,` .jsx `,`>`,` .ts `,`>`,` .js `,`>`,` .mdx `,`>`,` .md`]})]})]}),(0,u.jsxs)(i,{id:`route-groups`,title:`Route Groups`,children:[(0,u.jsx)(c,{width:320,rows:[{n:`app`},{n:`(marketing)`,d:1},{n:`layout.tsx`,d:2,fn:!0},{n:`about`,d:2},{n:`page.tsx`,d:3,fn:!0},{n:`(app)`,d:1},{n:`layout.tsx`,d:2,fn:!0},{n:`settings`,d:2},{n:`page.tsx`,d:3,fn:!0}]}),(0,u.jsxs)(t,{children:[`Group names `,(0,u.jsx)(a,{children:`/^[a-zA-Z0-9_-]+$/`}),`. Folders using interception syntax `,(0,u.jsx)(a,{children:`(.) (..) (...)`}),` `,`are NOT treated as groups.`]})]}),(0,u.jsxs)(i,{id:`parallel-routes`,title:`Parallel Routes`,children:[(0,u.jsxs)(t,{children:[`Folder prefixed with `,(0,u.jsx)(a,{children:`@`}),` defines slot: named subtree resolved independently and does not add URL segment. Slot name `,(0,u.jsx)(a,{children:`/^[a-zA-Z][a-zA-Z0-9_-]*$/`}),`.`]}),(0,u.jsx)(c,{width:320,rows:[{n:`app`},{n:`layout.tsx`,d:1,fn:!0},{n:`page.tsx`,d:1,fn:!0},{n:`@sidebar`,d:1},{n:`default.tsx`,d:2,fn:!0},{n:`page.tsx`,d:2,fn:!0},{n:`settings`,d:2},{n:`page.tsx`,d:3,fn:!0}]}),(0,u.jsx)(n,{headers:[`Concept`,`Behavior`],rows:[[`Slot scanning`,`Dynamic, catch-alls, nested layouts, templates all work - tagged with slotName`],[`Fallback`,`Nearest default.tsx (nearest-wins). No default → built-in No Content`],[`Rendering`,`Own SlotBoundary block, not injected as named prop into layouts (Next.js difference)`],[`Status`,`Experimental - verify against your layout, composition evolving`]]}),(0,u.jsx)(r,{filename:`src/app/@sidebar/default.tsx`,lang:`js`,code:`export default function SidebarDefault() {
  return <p>Nothing to show here for this page.</p>
}`})]}),(0,u.jsxs)(i,{id:`intercepting-routes`,title:`Intercepting Routes`,children:[(0,u.jsxs)(t,{children:[`Folder prefixed with `,(0,u.jsx)(a,{children:`(.) (..) (...)`}),` intercepts navigation to nearby route - same as Next.js for photo-in-modal.`]}),(0,u.jsx)(n,{headers:[`Prefix`,`Intercepts`],rows:[[`(.)name`,`Sibling of current segment (same level)`],[`(..)name`,`One level up`],[`(...)name`,`Root of app`]]}),(0,u.jsx)(c,{width:340,rows:[{n:`app`},{n:`feed`,d:1},{n:`page.tsx`,d:2,fn:!0},{n:`photo`,d:2},{n:`[id]`,d:3},{n:`page.tsx`,d:4,fn:!0},{n:`photo`,d:1},{n:`[id]`,d:2},{n:`page.tsx`,d:3,fn:!0},{n:`(.)view`,d:3},{n:`page.tsx`,d:4,fn:!0}]}),(0,u.jsx)(o,{children:`Intercepting folder itself does not add URL segment; segment after it does. Only default export inside treated as route. Conflicts compared only at same intercept level.`})]}),(0,u.jsxs)(i,{id:`layouts`,title:`Layouts`,children:[(0,u.jsx)(r,{filename:`src/app/layout.tsx`,lang:`js`,code:`export const metadata = {
  title: 'My App',
  description: 'Built with bini-router',
}

export default function RootLayout() {
  return <Outlet />
}`}),(0,u.jsx)(r,{filename:`src/app/dashboard/layout.tsx`,lang:`js`,code:`export const metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({ params }) {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main><Outlet /></main>
    </div>
  )
}`}),(0,u.jsxs)(o,{children:[`Layouts containing `,(0,u.jsx)(a,{children:`<html>`}),` treated as shell and excluded. Circular chains detected. Eagerly bundled except root slot/boundary dependents.`]})]}),(0,u.jsxs)(i,{id:`templates`,title:`Templates`,children:[(0,u.jsx)(r,{filename:`src/app/dashboard/template.tsx`,lang:`js`,code:`export default function DashboardTemplate({ children }) {
  return <section className="page-transition">{children}</section>
}`}),(0,u.jsxs)(t,{children:[`Templates render inside layout chain, directly around page. Receive `,(0,u.jsx)(a,{children:`children`}),` not`,` `,(0,u.jsx)(a,{children:`params`}),`. Nearest-wins.`]})]}),(0,u.jsxs)(i,{id:`boundaries`,title:`Loading, Not Found, Error, Default Boundaries`,children:[(0,u.jsxs)(t,{children:[`Nearest-wins. Subfolder shadows ancestor. `,(0,u.jsx)(a,{children:`default.tsx`}),` only inside `,(0,u.jsx)(a,{children:`@slot`}),`.`]}),(0,u.jsx)(r,{filename:`src/app/dashboard/loading.tsx`,lang:`js`,code:`export default function DashboardLoading() {
  return <p>Loading dashboard...</p>
}`}),(0,u.jsx)(r,{filename:`src/app/blog/not-found.tsx`,lang:`js`,code:`export default function NotFound() {
  return (
    <div>
      <h1>Post not found</h1>
      <Link to="/blog">Back to blog</Link>
    </div>
  )
}`}),(0,u.jsx)(r,{filename:`src/app/dashboard/error.tsx`,lang:`js`,code:`export default function DashboardError({ error, reset }) {
  return (
    <div>
      <h2>Something broke</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}`}),(0,u.jsx)(r,{filename:`src/app/@sidebar/default.tsx`,lang:`js`,code:`export default function SidebarDefault() {
  return <p>Nothing to show here.</p>
}`})]}),(0,u.jsxs)(i,{id:`mdx`,title:`MDX and Markdown`,children:[(0,u.jsx)(r,{filename:`about.mdx`,lang:`js`,code:`# About us

This is **markdown**, rendered as JSX.

<button className="rounded bg-cyan-500 px-4 py-2 text-white">
  Click me
</button>`}),(0,u.jsx)(r,{filename:`vite.config.ts`,lang:`js`,code:`biniroute({
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})`})]}),(0,u.jsxs)(i,{id:`metadata`,title:`Metadata`,children:[(0,u.jsx)(r,{filename:`src/app/layout.tsx`,lang:`js`,code:`export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
  description: 'Built with bini-router',
  openGraph: {
    title: 'Dashboard',
    images: [{ url: '/og.png' }],
  },
}`}),(0,u.jsxs)(o,{children:[`Root metadata injected into `,(0,u.jsx)(a,{children:`index.html`}),` at build. Others update`,` `,(0,u.jsx)(a,{children:`document.title`}),` via TitleSetter. Stripped from client bundle. Title template:`,` `,(0,u.jsx)(a,{children:`Dashboard`}),` → `,(0,u.jsx)(a,{children:`Dashboard | My App`}),`.`]})]}),(0,u.jsxs)(i,{id:`document-export`,title:`Document Export`,children:[(0,u.jsxs)(t,{children:[`Root layout can export `,(0,u.jsx)(a,{children:`document`}),` object to customize HTML shell. Enabled by default, disable with `,(0,u.jsx)(a,{children:`document: false`}),`. Head fragment parsed into typed tree (element/text/raw nodes) - no HTML injection surface even for handwritten JSX.`]}),(0,u.jsx)(r,{filename:`src/app/layout.tsx`,lang:`js`,code:`export const document = {
  html: { lang: 'en', class: 'dark' },
  body: { class: 'antialiased' },
  head: (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <script async src="https://example.com/analytics.js"><\/script>
    </>
  ),
}

export default function RootLayout() {
  return <Outlet />
}`}),(0,u.jsx)(n,{headers:[`Key`,`Behavior`],rows:[[`html`,`Attributes merged onto <html>`],[`body`,`Attributes merged onto <body>`],[`head`,`JSX → static typed structure, appended before </head>`]]})]}),(0,u.jsxs)(i,{id:`auto-imports`,title:`Auto-imports`,children:[(0,u.jsx)(n,{headers:[`From`,`Symbols`],rows:[[`react`,`useState, useEffect, useRef, useMemo, useCallback, useContext, createContext, useReducer, useId, useTransition, useDeferredValue`],[`react-router-dom`,`Link, NavLink, useNavigate, useParams, useLocation, useSearchParams, Outlet`],[`bini-env`,`getEnv, requireEnv`]]}),(0,u.jsx)(r,{filename:`src/app/profile/page.tsx`,lang:`js`,code:`export default function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  return <div><Link to="/">Home</Link><h1>Profile {id}</h1></div>
}`})]}),(0,u.jsxs)(i,{id:`env`,title:`Environment Variables`,children:[(0,u.jsx)(r,{filename:`.env`,lang:`text`,code:`BINI_FIREBASE_API_KEY=your_key
SMTP_USER=user@smtp.example.com
SMTP_PASS=your_password`}),(0,u.jsx)(r,{filename:`src/app/api/email.ts`,lang:`js`,code:`const SMTP_USER = requireEnv('SMTP_USER')  // throws if missing
const DEBUG = getEnv('DEBUG_MODE')         // undefined if missing`})]}),(0,u.jsxs)(i,{id:`api-routes`,title:`API Routes`,children:[(0,u.jsx)(n,{headers:[`File`,`Route`],rows:[[`api/users.ts`,`/api/users`],[`api/posts/index.ts`,`/api/posts`],[`api/posts/[id].ts`,`/api/posts/:id`],[`api/[...catch].ts`,`/api/*`],[`api/(internal)/health.ts`,`/api/health`]]}),(0,u.jsx)(r,{filename:`src/app/api/hello.ts`,lang:`js`,code:`export default function handler(req) {
  return Response.json({ message: 'hello', method: req.method })
}`}),(0,u.jsx)(r,{filename:`src/app/api/posts/[id].ts (params)`,lang:`js`,code:`export default function handler(req) {
  const params = JSON.parse(req.headers.get('x-bini-params') ?? '{}')
  return Response.json({ id: params.id })
}`}),(0,u.jsx)(r,{filename:`src/app/api/hello.ts (Hono)`,lang:`js`,code:`import { Hono } from 'hono'
const app = new Hono()
app.all('/hello', (c) => c.json({ message: 'Hello!', method: c.req.method }))
export default app`}),(0,u.jsxs)(o,{children:[`Write routes without `,(0,u.jsx)(a,{children:`/api`}),` prefix - stripped before handler. Body capped 1MB (413),`,` `,(0,u.jsx)(a,{children:`bodySizeLimit`}),` to adjust. CORS disabled by default - `,(0,u.jsx)(a,{children:`cors: true`}),`. Host header validated, capped cache 500 entries.`]})]}),(0,u.jsxs)(i,{id:`config`,title:`Configuration Reference`,children:[(0,u.jsx)(r,{filename:`vite.config.ts`,lang:`js`,code:`biniroute({
  appDir: 'src/app',
  apiDir: 'src/app/api',
  autoImportDir: 'src',
  cors: false,
  strictMode: true,
  bodySizeLimit: 1024 * 1024,
  document: true,
  mdx: {},
})`}),(0,u.jsx)(n,{headers:[`Option`,`Type`,`Default`,`Description`],rows:[[`appDir`,`string`,`src/app`,`Dir containing file-based routes`],[`apiDir`,`string`,`src/app/api`,`Dir containing API routes`],[`autoImportDir`,`string`,`src`,`Dir where auto-imports injected`],[`cors`,`boolean | object`,`false`,`CORS handling for dev/preview API`],[`strictMode`,`boolean`,`true`,`Fail on route conflicts`],[`bodySizeLimit`,`number`,`1048576`,`Max API body size bytes`],[`document`,`boolean`,`true`,`Process document export - typed tree, no HTML injection`],[`base`,`string`,`/`,`Vite base option - router respects vite base, no separate basePath option`],[`mdx`,`object`,`{}`,`Options passed to @mdx-js/rollup`]]})]})]})}export{m as default};