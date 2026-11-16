import{t as e}from"./globe-B-IKwDa2.js";import{a as t,n}from"./index-D2AXdX0y.js";import{a as r,c as i,f as a,h as o,i as s,m as c,n as l,o as u,r as d,s as f,u as p,v as m}from"./DocBlocks-CgTYcQET.js";import{a as h,s as g}from"./DocVisuals-B7hV1VEN.js";var _=t(),v=[{id:`plain-css`,label:`Plain CSS in Bini.js`},{id:`global-css`,label:`Global CSS`},{id:`route-css`,label:`CSS for Specific Routes`},{id:`component-css`,label:`Component CSS`},{id:`external-stylesheets`,label:`External Stylesheets`},{id:`css-ordering`,label:`CSS Ordering`},{id:`css-variables`,label:`CSS Variables`},{id:`sass-support`,label:`Sass/SCSS`},{id:`css-in-js`,label:`CSS-in-JS Alternative`}];function y({title:t,ok:n,urls:r}){return(0,_.jsx)(h,{children:(0,_.jsxs)(`div`,{className:`w-72`,children:[(0,_.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,_.jsx)(`span`,{className:`text-[13px] font-semibold text-neutral-900 dark:text-neutral-100`,children:t}),(0,_.jsx)(`span`,{className:`shrink-0 rounded-[5px] border-[1.5px] px-1.5 py-px font-mono text-[10px] font-medium ${n?`border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/80 dark:text-emerald-300`:`border-red-500 bg-red-500/10 text-red-600 dark:border-red-500/80 dark:text-red-300`}`,children:n?`Loaded`:`Not loaded`})]}),(0,_.jsx)(`div`,{children:r.map((t,n)=>(0,_.jsxs)(`div`,{className:`flex h-8 items-center gap-1.5 border-x border-b border-neutral-200 bg-white px-2.5 text-xs text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 ${n===0?`rounded-t-lg border-t`:``} ${n===r.length-1?`rounded-b-lg`:``}`,children:[(0,_.jsx)(e,{className:g,strokeWidth:1.5}),t]},t))})]})})}function b(){let e=m()===`js`?`jsx`:`tsx`;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(o,{id:`plain-css`,title:`Plain CSS in Bini.js`,children:[(0,_.jsxs)(c,{className:`mb-4`,children:[`Bini.js works with plain `,(0,_.jsx)(l,{children:`.css`}),` files out of the box. Import a `,(0,_.jsx)(l,{children:`.css`}),` file and it loads. This page covers plain CSS only.`]}),(0,_.jsx)(a,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --none`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --none`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --none`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --none`}]}),(0,_.jsxs)(c,{className:`mb-4`,children:[`Or run the interactive prompt and choose `,(0,_.jsx)(l,{children:`None`}),` for styling:`]}),(0,_.jsx)(r,{copyText:`? Styling solution? None`,children:(0,_.jsxs)(s,{type:`select`,title:`Styling solution?`,active:!0,isFirst:!0,isLast:!0,children:[(0,_.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,_.jsx)(`span`,{className:`text-neutral-500`,children:`○`}),` `,(0,_.jsx)(`span`,{className:`text-neutral-500`,children:`Tailwind CSS`})]}),(0,_.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,_.jsx)(`span`,{className:`text-neutral-500`,children:`○`}),` `,(0,_.jsx)(`span`,{className:`text-neutral-500`,children:`CSS Modules`})]}),(0,_.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,_.jsx)(`span`,{className:`text-green-500 dark:text-green-400`,children:`●`}),` `,(0,_.jsx)(`span`,{className:`text-neutral-900 dark:text-neutral-100`,children:`None`})]}),(0,_.jsx)(`div`,{className:`mt-2 text-[11px] text-neutral-500`,children:`↑/↓ to navigate • Enter: confirm`})]})})]}),(0,_.jsxs)(o,{id:`global-css`,title:`Global CSS`,children:[(0,_.jsx)(c,{className:`mb-4`,children:`Put base styles, resets, and variables in a global stylesheet. Import it once in your root layout:`}),(0,_.jsx)(u,{filename:`src/app/globals.css`,code:`/* src/app/globals.css - base reset and variables */
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
}`}),(0,_.jsx)(u,{filename:`src/app/layout.${e}`,tsCode:`// src/app/layout.tsx - root layout
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
}`}),(0,_.jsx)(d,{children:`Keep global CSS small: resets, variables, and styles that every page needs. Import styles for a specific route or component next to the file that uses them.`})]}),(0,_.jsxs)(o,{id:`route-css`,title:`CSS for Specific Routes`,children:[(0,_.jsx)(c,{className:`mb-4`,children:`Import CSS in the route that needs it. That way, pages that do not use the styles never load them. Each route can have its own stylesheet:`}),(0,_.jsx)(u,{filename:`src/app/(marketing)/page.css`,code:`/* src/app/(marketing)/page.css - only loaded for marketing route */
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
}`}),(0,_.jsx)(u,{filename:`src/app/(marketing)/page.${e}`,tsCode:`// src/app/(marketing)/page.tsx
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
}`}),(0,_.jsx)(u,{filename:`src/app/dashboard/page.css`,code:`/* src/app/dashboard/page.css - only for dashboard */
.dashboard-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
}

.sidebar {
  border-right: 1px solid var(--border);
  padding-right: 1.5rem;
}`}),(0,_.jsx)(u,{filename:`src/app/dashboard/layout.${e}`,tsCode:`// src/app/dashboard/layout.tsx - layout level CSS for dashboard
import './page.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="dashboard-grid">{children}</div>
}`,jsCode:`// src/app/dashboard/layout.jsx - layout level CSS for dashboard
import './page.css'

export default function DashboardLayout({ children }) {
  return <div className="dashboard-grid">{children}</div>
}`}),(0,_.jsxs)(d,{children:[`Each route's CSS is only downloaded when that route is visited. A visitor on `,(0,_.jsx)(l,{children:`/`}),` `,`will not download `,(0,_.jsx)(l,{children:`dashboard/page.css`}),`. Import CSS in the page or layout that uses it.`]}),(0,_.jsx)(p,{className:`mb-3 mt-8`,children:`Blog Layout Example - Scoped CSS`}),(0,_.jsxs)(c,{className:`mb-4`,children:[`When a layout imports a stylesheet, that CSS applies only to routes inside the layout's folder. Here, `,(0,_.jsx)(l,{children:`blog.css`}),` is imported in the blog layout:`]}),(0,_.jsx)(u,{filename:`src/app/blog/blog.css`,code:`/* src/app/blog/blog.css - only for /blog/* */
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
}`}),(0,_.jsx)(u,{filename:`src/app/blog/layout.${e}`,tsCode:`// src/app/blog/layout.tsx - import here, scoped to /blog only
import './blog.css'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="blog-wrapper">{children}</div>
}`,jsCode:`// src/app/blog/layout.jsx - import here, scoped to /blog only
import './blog.css'

export default function BlogLayout({ children }) {
  return <div className="blog-wrapper">{children}</div>
}`}),(0,_.jsx)(y,{title:`Gets blog.css`,ok:!0,urls:[`/blog`,`/blog/my-post`,`/blog/category/tech`]}),(0,_.jsx)(y,{title:`Does NOT get blog.css`,ok:!1,urls:[`/`,`/dashboard`,`/about`,`/docs`]}),(0,_.jsxs)(d,{children:[`With `,(0,_.jsx)(l,{children:`blog.css`}),` imported in `,(0,_.jsx)(l,{children:`src/app/blog/layout.${e}`}),`, only pages under`,` `,(0,_.jsx)(l,{children:`/blog`}),` load it. If you import it in the root layout instead, every page loads it.`]})]}),(0,_.jsxs)(o,{id:`component-css`,title:`Component CSS`,children:[(0,_.jsxs)(c,{className:`mb-4`,children:[`Keep a plain `,(0,_.jsx)(l,{children:`.css`}),` file next to a reusable component. You do not need CSS Modules for this. Just use clear class names so styles do not clash:`]}),(0,_.jsx)(u,{filename:`src/app/components/Button.css`,code:`/* src/app/components/Button.css */
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
}`}),(0,_.jsx)(u,{filename:`src/app/components/Button.${e}`,tsCode:`// src/app/components/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return <button className={\`btn btn-\${variant}\`} {...props}>{children}</button>
}`,jsCode:`// src/app/components/Button.jsx
import './Button.css'

export function Button({ variant = 'primary', children, ...props }) {
  return <button className={\`btn btn-\${variant}\`} {...props}>{children}</button>
}`}),(0,_.jsxs)(d,{children:[`If you want class names that cannot clash with other files, use`,` `,(0,_.jsx)(f,{to:`/docs/css-modules`,children:`CSS Modules`}),` (`,(0,_.jsx)(l,{children:`.module.css`}),`). With plain CSS, prefix your class names: `,(0,_.jsx)(l,{children:`btn-`}),`, `,(0,_.jsx)(l,{children:`card-`}),`, and so on.`]})]}),(0,_.jsxs)(o,{id:`external-stylesheets`,title:`External Stylesheets`,children:[(0,_.jsx)(c,{className:`mb-4`,children:`When you import CSS from an npm package, put the import in the route that uses it:`}),(0,_.jsx)(u,{filename:`src/app/docs/page.${e}`,tsCode:`// src/app/docs/page.tsx - only docs needs syntax highlighting
import 'prismjs/themes/prism.css'

export default function DocsPage() {
  return <article>...</article>
}`,jsCode:`// src/app/docs/page.jsx - only docs needs syntax highlighting
import 'prismjs/themes/prism.css'

export default function DocsPage() {
  return <article>...</article>
}`}),(0,_.jsx)(u,{filename:`src/app/blog/page.${e}`,tsCode:`// src/app/blog/page.tsx - only blog needs markdown styles
import './markdown.css'

export default function BlogPage() {
  return <div className="markdown-body">...</div>
}`,jsCode:`// src/app/blog/page.jsx - only blog needs markdown styles
import './markdown.css'

export default function BlogPage() {
  return <div className="markdown-body">...</div>
}`}),(0,_.jsx)(d,{children:`Do not import external CSS in the root layout if only one route needs it. Import it in that route or its layout so other pages stay lean.`})]}),(0,_.jsxs)(o,{id:`css-ordering`,title:`CSS Ordering`,children:[(0,_.jsx)(c,{className:`mb-4`,children:`CSS applies in the order you import it. Keep a consistent order so later rules override earlier ones the way you expect:`}),(0,_.jsx)(u,{filename:`src/app/layout.${e}`,tsCode:`// layout.tsx - order matters
import './globals.css'      // 1. Base reset and variables first
import './theme.css'        // 2. Theme and utilities
// Route or component CSS comes after, imported inside page.tsx or component.tsx`,jsCode:`// layout.jsx - order matters
import './globals.css'      // 1. Base reset and variables first
import './theme.css'        // 2. Theme and utilities
// Route or component CSS comes after, imported inside page.jsx or component.jsx`}),(0,_.jsx)(u,{filename:`src/app/dashboard/page.${e}`,tsCode:`// src/app/dashboard/page.tsx
import './page.css'  // 3. Route-specific CSS - loaded only for this route

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`,jsCode:`// src/app/dashboard/page.jsx
import './page.css'  // 3. Route-specific CSS - loaded only for this route

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`}),(0,_.jsx)(d,{children:`Import global CSS first, then layout CSS, then route CSS, then component CSS. That keeps overrides predictable.`})]}),(0,_.jsxs)(o,{id:`css-variables`,title:`CSS Variables`,children:[(0,_.jsxs)(c,{className:`mb-4`,children:[`CSS variables let you define a value once and reuse it everywhere. Define them in global CSS with `,(0,_.jsx)(l,{children:`:root`}),`, then read them with `,(0,_.jsx)(l,{children:`var(--name)`}),` in any rule:`]}),(0,_.jsx)(u,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
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
}`}),(0,_.jsx)(u,{filename:`src/app/components/Card.css`,code:`/* Use the variables in component CSS */
.card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
}`})]}),(0,_.jsxs)(o,{id:`sass-support`,title:`Sass/SCSS`,children:[(0,_.jsxs)(c,{className:`mb-4`,children:[`Vite supports Sass once you install the `,(0,_.jsx)(l,{children:`sass`}),` package. Import a `,(0,_.jsx)(l,{children:`.scss`}),` file the same way you import a `,(0,_.jsx)(l,{children:`.css`}),` file:`]}),(0,_.jsx)(a,{tabs:[{id:`npm`,label:`npm`,command:`$ npm install -D sass`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm add -D sass`},{id:`yarn`,label:`yarn`,command:`$ yarn add -D sass`},{id:`bun`,label:`bun`,command:`$ bun add -d sass`}]}),(0,_.jsx)(u,{filename:`src/app/dashboard/page.scss`,code:`/* src/app/dashboard/page.scss - only for dashboard */
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
}`}),(0,_.jsx)(u,{filename:`src/app/dashboard/page.${e}`,tsCode:`// src/app/dashboard/page.tsx
import './page.scss'  // only dashboard loads this

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`,jsCode:`// src/app/dashboard/page.jsx
import './page.scss'  // only dashboard loads this

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`})]}),(0,_.jsxs)(o,{id:`css-in-js`,title:`CSS-in-JS Alternative`,children:[(0,_.jsx)(c,{className:`mb-4`,children:`If you prefer CSS-in-JS, install the library and use it in the components that need it:`}),(0,_.jsx)(a,{tabs:[{id:`npm`,label:`npm`,command:`$ npm install styled-components`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm add styled-components`},{id:`yarn`,label:`yarn`,command:`$ yarn add styled-components`},{id:`bun`,label:`bun`,command:`$ bun add styled-components`}]}),(0,_.jsx)(u,{filename:`src/app/components/StyledButton.${e}`,tsCode:`// src/app/components/StyledButton.tsx
import type { ReactNode } from 'react'
import styled from 'styled-components'

const Button = styled.button\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
\`

export function StyledButton({ children }: { children: ReactNode }) {
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
}`}),(0,_.jsx)(d,{children:`For most projects, plain CSS imported per route is simpler and faster. Reach for CSS-in-JS when you need styles that change based on component props.`})]}),(0,_.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,_.jsxs)(n,{to:`/docs/css-modules`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,_.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`CSS Modules`}),(0,_.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Scoped class names with .module.css.`})]}),(0,_.jsxs)(n,{to:`/docs/tailwind`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,_.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Tailwind CSS`}),(0,_.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Utility-first styling with Tailwind.`})]}),(0,_.jsxs)(n,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,_.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,_.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Where to import CSS in the app directory.`})]}),(0,_.jsxs)(n,{to:`/docs/env-api`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,_.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Using in API Routes`}),(0,_.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Read env vars from Hono handlers.`})]})]})]})}function x(){return(0,_.jsx)(i,{title:`Plain CSS`,description:`Use plain CSS in Bini.js - import only what you need, where you need it.`,url:`https://bini.js.org/docs/css`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/css.tsx`,toc:v,prev:{to:`/docs/env-api`,title:`Using in API Routes`},next:{to:`/docs/tailwind`,title:`Tailwind CSS`},children:(0,_.jsx)(b,{})})}export{x as default};