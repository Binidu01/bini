import{y as e}from"./index-DgTvH8vE.js";import{_ as t,a as n,f as r,i,l as a,m as o,n as s,o as c,p as l,r as u,u as d}from"./DocBlocks-Jip0RoZ4.js";import{a as f,s as p}from"./DocVisuals-DxgP9QZL.js";import{t as m}from"./globe-Ce1ms3ue.js";var h=e(),g=[{id:`plain-css`,label:`Plain CSS in Bini.js`},{id:`global-css`,label:`Global CSS`},{id:`route-css`,label:`CSS for Specific Routes`},{id:`component-css`,label:`Component CSS`},{id:`external-stylesheets`,label:`External Stylesheets`},{id:`css-ordering`,label:`CSS Ordering`},{id:`css-variables`,label:`CSS Variables`},{id:`sass-support`,label:`Sass/SCSS`},{id:`css-in-js`,label:`CSS-in-JS Alternative`}];function _({title:e,ok:t,urls:n}){return(0,h.jsx)(f,{children:(0,h.jsxs)(`div`,{className:`w-72`,children:[(0,h.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,h.jsx)(`span`,{className:`text-[13px] font-semibold text-neutral-900 dark:text-neutral-100`,children:e}),(0,h.jsx)(`span`,{className:`shrink-0 rounded-[5px] border-[1.5px] px-1.5 py-px font-mono text-[10px] font-medium ${t?`border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/80 dark:text-emerald-300`:`border-red-500 bg-red-500/10 text-red-600 dark:border-red-500/80 dark:text-red-300`}`,children:t?`Loaded`:`Not loaded`})]}),(0,h.jsx)(`div`,{children:n.map((e,t)=>(0,h.jsxs)(`div`,{className:`flex h-8 items-center gap-1.5 border-x border-b border-neutral-200 bg-white px-2.5 text-xs text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 ${t===0?`rounded-t-lg border-t`:``} ${t===n.length-1?`rounded-b-lg`:``}`,children:[(0,h.jsx)(m,{className:p,strokeWidth:1.5}),e]},e))})]})})}function v(){let e=t()===`js`?`jsx`:`tsx`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(o,{id:`plain-css`,title:`Plain CSS in Bini.js`,children:[(0,h.jsxs)(r,{className:`mb-4`,children:[`Bini.js supports plain `,(0,h.jsx)(s,{children:`.css`}),` files natively via Vite. No config needed - just import a `,(0,h.jsx)(s,{children:`.css`}),` file and it works. This page covers plain CSS only.`]}),(0,h.jsx)(d,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --none`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --none`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --none`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --none`}]}),(0,h.jsxs)(r,{className:`mb-4`,children:[`Or use the interactive prompt and select `,(0,h.jsx)(s,{children:`None`}),` under the styling question:`]}),(0,h.jsx)(l,{lines:[{kind:`question`,text:`Select a styling solution:`},{kind:`option`,text:`Tailwind CSS`},{kind:`option`,text:`CSS Modules`},{kind:`option`,text:`None`,selected:!0},{kind:`blank`},{kind:`hint`,text:`↑↓ navigate • ⏎ select`}]})]}),(0,h.jsxs)(o,{id:`global-css`,title:`Global CSS`,children:[(0,h.jsx)(r,{className:`mb-4`,children:`For base styles, resets, and utilities that should apply everywhere, import a global stylesheet in your root layout:`}),(0,h.jsx)(i,{filename:`src/app/globals.css`,code:`/* src/app/globals.css - base reset and variables */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #ffffff;
  --text: #0a0a0a;
  --border: #e5e5e5;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}`}),(0,h.jsx)(i,{filename:`src/app/layout.${e}`,tsCode:`// src/app/layout.tsx - root layout
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,jsCode:`// src/app/layout.jsx - root layout
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}),(0,h.jsx)(u,{children:`Keep global CSS minimal - only resets, CSS variables, and truly global utilities. Route and component specific styles should be imported closer to where they are used.`})]}),(0,h.jsxs)(o,{id:`route-css`,title:`CSS for Specific Routes`,children:[(0,h.jsx)(r,{className:`mb-4`,children:`Import CSS only for the routes that need it. This keeps bundles small and avoids loading unused styles. Each route can have its own stylesheet:`}),(0,h.jsx)(i,{filename:`src/app/(marketing)/page.css`,code:`/* src/app/(marketing)/page.css - only loaded for marketing route */
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}`}),(0,h.jsx)(i,{filename:`src/app/(marketing)/page.${e}`,tsCode:`// src/app/(marketing)/page.tsx
import './page.css'

export default function MarketingPage() {
  return (
    <div className="hero">
      <h1>Welcome to Bini.js</h1>
      <p>Build fast, ship faster</p>
    </div>
  )
}`,jsCode:`// src/app/(marketing)/page.jsx
import './page.css'

export default function MarketingPage() {
  return (
    <div className="hero">
      <h1>Welcome to Bini.js</h1>
      <p>Build fast, ship faster</p>
    </div>
  )
}`}),(0,h.jsx)(i,{filename:`src/app/dashboard/page.css`,code:`/* src/app/dashboard/page.css - only for dashboard */
.dashboard-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
}

.sidebar {
  border-right: 1px solid var(--border);
  padding-right: 1.5rem;
}`}),(0,h.jsx)(i,{filename:`src/app/dashboard/layout.${e}`,tsCode:`// src/app/dashboard/layout.tsx - layout level CSS for dashboard
import './page.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="dashboard-grid">{children}</div>
}`,jsCode:`// src/app/dashboard/layout.jsx - layout level CSS for dashboard
import './page.css'

export default function DashboardLayout({ children }) {
  return <div className="dashboard-grid">{children}</div>
}`}),(0,h.jsxs)(u,{children:[`Route-level CSS is code-split automatically by Vite. A user visiting `,(0,h.jsx)(s,{children:`/`}),` will not download `,(0,h.jsx)(s,{children:`dashboard/page.css`}),`. Import CSS as close as possible to the route that uses it.`]}),(0,h.jsx)(a,{className:`mb-3 mt-8`,children:`Blog Layout Example - Scoped CSS`}),(0,h.jsxs)(r,{className:`mb-4`,children:[`If your blogs layout has a `,(0,h.jsx)(s,{children:`blog.css`}),`, that CSS only applies to routes inside the`,` `,(0,h.jsx)(s,{children:`blog`}),` folder. Other routes do not get it:`]}),(0,h.jsx)(i,{filename:`src/app/blog/blog.css`,code:`/* src/app/blog/blog.css - only for /blog/* */
.blog-wrapper {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem;
  line-height: 1.7;
}

.blog-wrapper h1 {
  font-size: 2rem;
  font-weight: 700;
}

.blog-wrapper article {
  color: var(--text);
}`}),(0,h.jsx)(i,{filename:`src/app/blog/layout.${e}`,tsCode:`// src/app/blog/layout.tsx - import here, scoped to /blog only
import './blog.css'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="blog-wrapper">{children}</div>
}`,jsCode:`// src/app/blog/layout.jsx - import here, scoped to /blog only
import './blog.css'

export default function BlogLayout({ children }) {
  return <div className="blog-wrapper">{children}</div>
}`}),(0,h.jsx)(_,{title:`Gets blog.css`,ok:!0,urls:[`/blog`,`/blog/my-post`,`/blog/category/tech`]}),(0,h.jsx)(_,{title:`Does NOT get blog.css`,ok:!1,urls:[`/`,`/dashboard`,`/about`,`/docs`]}),(0,h.jsxs)(u,{children:[(0,h.jsx)(`strong`,{children:`How it works:`}),` Vite code-splits by route. When you visit `,(0,h.jsx)(s,{children:`/`}),`, Vite loads only `,(0,h.jsx)(s,{children:`globals.css`}),` + `,(0,h.jsx)(s,{children:`/(marketing)/page.css`}),`. When you visit`,` `,(0,h.jsx)(s,{children:`/blog`}),`, the `,(0,h.jsx)(s,{children:`blog/layout.${e}`}),` chain is loaded, so `,(0,h.jsx)(s,{children:`blog.css`}),` is included. If you import `,(0,h.jsx)(s,{children:`blog.css`}),` in the root `,(0,h.jsx)(s,{children:`src/app/layout.${e}`}),` `,`instead, every route would get it - avoid that for scoped styles.`]})]}),(0,h.jsxs)(o,{id:`component-css`,title:`Component CSS`,children:[(0,h.jsxs)(r,{className:`mb-4`,children:[`For reusable components, keep a plain `,(0,h.jsx)(s,{children:`.css`}),` file next to the component. This still works without CSS Modules - just use clear naming to avoid conflicts:`]}),(0,h.jsx)(i,{filename:`src/app/components/Button.css`,code:`/* src/app/components/Button.css */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.btn-primary {
  background: black;
  color: white;
}

.btn-primary:hover {
  background: #222;
}`}),(0,h.jsx)(i,{filename:`src/app/components/Button.${e}`,tsCode:`// src/app/components/Button.tsx
import './Button.css'

export function Button({ variant = 'primary', children, ...props }: any) {
  return <button className={\`btn btn-\${variant}\`} {...props}>{children}</button>
}`,jsCode:`// src/app/components/Button.jsx
import './Button.css'

export function Button({ variant = 'primary', children, ...props }) {
  return <button className={\`btn btn-\${variant}\`} {...props}>{children}</button>
}`}),(0,h.jsxs)(u,{children:[`If you need scoped styles to avoid conflicts, use`,` `,(0,h.jsx)(n,{to:`/docs/css-modules`,children:`CSS Modules`}),` (`,(0,h.jsx)(s,{children:`.module.css`}),`) instead. For plain CSS, use BEM or prefixed class names like `,(0,h.jsx)(s,{children:`btn-`}),`, `,(0,h.jsx)(s,{children:`card-`}),`.`]})]}),(0,h.jsxs)(o,{id:`external-stylesheets`,title:`External Stylesheets`,children:[(0,h.jsx)(r,{className:`mb-4`,children:`Import CSS from npm packages only in routes that need them:`}),(0,h.jsx)(i,{filename:`src/app/docs/page.${e}`,tsCode:`// src/app/docs/page.tsx - only docs needs syntax highlighting
import 'prismjs/themes/prism.css'

export default function DocsPage() {
  return <article>...</article>
}`,jsCode:`// src/app/docs/page.jsx - only docs needs syntax highlighting
import 'prismjs/themes/prism.css'

export default function DocsPage() {
  return <article>...</article>
}`}),(0,h.jsx)(i,{filename:`src/app/blog/page.${e}`,tsCode:`// src/app/blog/page.tsx - only blog needs markdown styles
import './markdown.css'

export default function BlogPage() {
  return <div className="markdown-body">...</div>
}`,jsCode:`// src/app/blog/page.jsx - only blog needs markdown styles
import './markdown.css'

export default function BlogPage() {
  return <div className="markdown-body">...</div>
}`}),(0,h.jsx)(u,{children:`Do not import external CSS globally if only one route needs it. Import it in the specific route or layout to keep other routes lean.`})]}),(0,h.jsxs)(o,{id:`css-ordering`,title:`CSS Ordering`,children:[(0,h.jsx)(r,{className:`mb-4`,children:`CSS is applied in the order you import it. Keep a consistent order:`}),(0,h.jsx)(i,{filename:`src/app/layout.${e}`,tsCode:`// layout.tsx - order matters
import './globals.css'      // 1. Base reset and variables first
import './theme.css'        // 2. Theme and utilities
// Route or component CSS comes after, imported inside page.tsx or component.tsx`,jsCode:`// layout.jsx - order matters
import './globals.css'      // 1. Base reset and variables first
import './theme.css'        // 2. Theme and utilities
// Route or component CSS comes after, imported inside page.jsx or component.jsx`}),(0,h.jsx)(i,{filename:`src/app/dashboard/page.${e}`,tsCode:`// src/app/dashboard/page.tsx
import './page.css'  // 3. Route-specific CSS - loaded only for this route

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`,jsCode:`// src/app/dashboard/page.jsx
import './page.css'  // 3. Route-specific CSS - loaded only for this route

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`}),(0,h.jsxs)(u,{children:[`Global to specific: `,(0,h.jsx)(s,{children:`globals.css`}),` first, then layout CSS, then route CSS, then component CSS. This avoids specificity surprises.`]})]}),(0,h.jsxs)(o,{id:`css-variables`,title:`CSS Variables`,children:[(0,h.jsx)(r,{className:`mb-4`,children:`Use CSS variables for theming - define them once in global CSS, use everywhere:`}),(0,h.jsx)(i,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
:root {
  --bg: #ffffff;
  --text: #0a0a0a;
  --border: #e5e5e5;
  --radius: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000000;
    --text: #fafafa;
    --border: #262626;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}`})]}),(0,h.jsxs)(o,{id:`sass-support`,title:`Sass/SCSS`,children:[(0,h.jsxs)(r,{className:`mb-4`,children:[`Vite supports Sass out of the box. Install and use `,(0,h.jsx)(s,{children:`.scss`}),` only where needed:`]}),(0,h.jsx)(d,{tabs:[{id:`npm`,label:`npm`,command:`$ npm install -D sass`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm add -D sass`},{id:`yarn`,label:`yarn`,command:`$ yarn add -D sass`},{id:`bun`,label:`bun`,command:`$ bun add -d sass`}]}),(0,h.jsx)(i,{filename:`src/app/dashboard/page.scss`,code:`/* src/app/dashboard/page.scss - only for dashboard */
.dashboard {
  display: grid;
  gap: 1rem;

  .card {
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);

    &:hover {
      border-color: black;
    }
  }
}`}),(0,h.jsx)(i,{filename:`src/app/dashboard/page.${e}`,tsCode:`import './page.scss'  // only dashboard loads this

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`,jsCode:`import './page.scss'  // only dashboard loads this

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`})]}),(0,h.jsxs)(o,{id:`css-in-js`,title:`CSS-in-JS Alternative`,children:[(0,h.jsxs)(r,{className:`mb-4`,children:[`If you prefer CSS-in-JS, use plain CSS setup (`,(0,h.jsx)(s,{children:`--none`}),`) and install your library. Only load it in routes that need it:`]}),(0,h.jsx)(d,{tabs:[{id:`npm`,label:`npm`,command:`$ npm install styled-components`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm add styled-components`},{id:`yarn`,label:`yarn`,command:`$ yarn add styled-components`},{id:`bun`,label:`bun`,command:`$ bun add styled-components`}]}),(0,h.jsx)(i,{filename:`src/app/components/StyledButton.${e}`,tsCode:`// src/app/components/StyledButton.tsx
import styled from 'styled-components'

const Button = styled.button\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
\`

export function StyledButton({ children }: any) {
  return <Button>{children}</Button>
}`,jsCode:`// src/app/components/StyledButton.jsx
import styled from 'styled-components'

const Button = styled.button\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
\`

export function StyledButton({ children }) {
  return <Button>{children}</Button>
}`}),(0,h.jsx)(u,{children:`For most projects, plain CSS with route-level imports is simpler and faster. Use CSS-in-JS only when you need dynamic theming based on props.`})]})]})}function y(){return(0,h.jsx)(c,{title:`Plain CSS`,description:`Use plain CSS in Bini.js - import only what you need, where you need it. No framework required.`,url:`https://bini.js.org/docs/css`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/css.tsx`,toc:g,prev:{to:`/docs/env-api`,title:`Using in API Routes`},next:{to:`/docs/tailwind`,title:`Tailwind CSS`},children:(0,h.jsx)(v,{})})}export{y as default};