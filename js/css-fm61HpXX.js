import{c as e,i as t,n,t as r}from"./index-o0ACruOi.js";import{n as i,v as a}from"./Layout-p4XN-U2c.js";import{t as o}from"./arrow-left-DMhJpFV9.js";import{t as s}from"./arrow-right-rWw98Xh-.js";import{n as c,r as l,t as u}from"./TableOfContents-C-1sKNja.js";var d=e(t(),1),f=r(),p=[{id:`styling-options`,label:`Styling Options`},{id:`tailwind-css`,label:`Tailwind CSS v4`},{id:`css-modules`,label:`CSS Modules`},{id:`global-css`,label:`Global CSS`},{id:`none-option`,label:`None Option`},{id:`external-stylesheets`,label:`External Stylesheets`},{id:`css-ordering`,label:`CSS Ordering`},{id:`sass-support`,label:`Sass/SCSS Support`},{id:`css-in-js`,label:`CSS-in-JS`},{id:`css-variables`,label:`CSS Variables for Theming`}],m=`CSS`,h=`https://bini.js.org/docs/css`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/css.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn about the different ways to add CSS to your Bini.js application.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsx)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,f.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Bini.js provides several ways to style your application. You can use Tailwind CSS v4 (default), CSS Modules, or plain CSS — choose what works best for your project.`})}),(0,f.jsxs)(a.section,{id:`styling-options`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Styling Options`}),(0,f.jsx)(v,{headers:[`Option`,`Description`,`Best For`],rows:[[`Tailwind CSS v4`,`Utility-first CSS framework with Vite plugin (default)`,`Rapid development, consistent design`],[`CSS Modules`,`Locally scoped CSS by default`,`Component-specific styles, avoiding conflicts`],[`Global CSS`,`Traditional stylesheet applied globally`,`Base styles, resets, utilities`],[`None`,`No styling — bring your own`,`Custom setups, CSS-in-JS libraries`]]})]}),(0,f.jsxs)(a.section,{id:`tailwind-css`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Tailwind CSS v4`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Tailwind CSS v4 is pre-configured using the official Vite plugin. No PostCSS configuration needed — it just works.`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Zero Configuration:`}),` Bini.js uses the `,(0,f.jsx)(`code`,{children:`@tailwindcss/vite`}),` plugin. Everything is configured automatically — no `,(0,f.jsx)(`code`,{children:`postcss.config.js`}),` or `,(0,f.jsx)(`code`,{children:`tailwind.config.js`}),` required.`]}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-cyan-400">
        Welcome to Bini.js!
      </h1>
      <p className="mt-4 text-lg text-slate-400">
        Styled with Tailwind CSS v4
      </p>
      <button className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 text-black hover:bg-cyan-400">
        Get Started
      </button>
    </div>
  )
}`,filename:`app/page.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The global CSS file simply imports Tailwind:`}),(0,f.jsx)(_,{code:`/* src/app/globals.css */
@import 'tailwindcss';`,filename:`app/globals.css`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`The Vite config includes the Tailwind plugin automatically:`}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Automatically added when Tailwind is selected
    biniroute(),
  ],
})`,filename:`vite.config.ts`})]}),(0,f.jsxs)(a.section,{id:`css-modules`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CSS Modules`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`CSS Modules scope styles locally to avoid naming conflicts. Files must end with `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.module.css`}),`:`]}),(0,f.jsx)(_,{code:`/* src/app/components/Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.primary {
  background: #06b6d4;
  color: black;
}

.primary:hover {
  background: #0891b2;
}`,filename:`Button.module.css`}),(0,f.jsx)(_,{code:`// src/app/components/Button.tsx
import styles from './Button.module.css'

export function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  )
}`,filename:`Button.tsx`}),(0,f.jsx)(y,{children:`CSS Modules are processed by Vite automatically — no configuration needed.`})]}),(0,f.jsxs)(a.section,{id:`global-css`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Global CSS`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Import CSS files directly to apply styles globally:`}),(0,f.jsx)(_,{code:`/* src/app/globals.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: black;
  color: white;
}`,filename:`app/globals.css`}),(0,f.jsx)(_,{code:`// src/app/layout.tsx
import './globals.css'

export default function RootLayout() {
  return <Outlet />
}`,filename:`app/layout.tsx`})]}),(0,f.jsxs)(a.section,{id:`none-option`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`None Option`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Choose `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`--none`}),` during project creation for a clean slate:`]}),(0,f.jsx)(_,{code:`npx create-bini-app@latest my-app --none`}),(0,f.jsxs)(y,{children:[`Even with `,(0,f.jsx)(`code`,{children:`--none`}),`, Vite still handles `,(0,f.jsx)(`code`,{children:`.css`}),` imports natively. You can add any CSS file and it will work.`]})]}),(0,f.jsxs)(a.section,{id:`external-stylesheets`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`External Stylesheets`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Import styles from npm packages or external URLs:`}),(0,f.jsx)(_,{code:`// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

export default function RootLayout() {
  return <Outlet />
}`,filename:`app/layout.tsx`})]}),(0,f.jsxs)(a.section,{id:`css-ordering`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CSS Ordering`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`CSS is applied in the order you import it:`}),(0,f.jsx)(_,{code:`import './globals.css'        // Base styles first
import './utilities.css'      // Utilities second
import styles from './Component.module.css'  // Component styles last`}),(0,f.jsx)(y,{children:`Keep CSS imports in a consistent order to avoid specificity issues. Global styles → utilities → component styles.`})]}),(0,f.jsxs)(a.section,{id:`sass-support`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Sass/SCSS Support`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Vite has built-in support for Sass:`}),(0,f.jsx)(_,{code:`npm install -D sass`}),(0,f.jsx)(_,{code:`/* src/app/components/Card.module.scss */
.card {
  background: #0a0a0a;
  border: 1px solid #1e293b;
  padding: 1.5rem;
  border-radius: 0.75rem;
  
  &:hover {
    border-color: #06b6d4;
  }
}`,filename:`Card.module.scss`}),(0,f.jsx)(y,{children:`Vite handles Sass compilation automatically. No additional configuration needed.`})]}),(0,f.jsxs)(a.section,{id:`css-in-js`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CSS-in-JS`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use CSS-in-JS libraries with the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`--none`}),` option:`]}),(0,f.jsx)(_,{code:`npm install styled-components`}),(0,f.jsx)(_,{code:`// src/app/components/StyledButton.tsx
import styled from 'styled-components'

const Button = styled.button\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #06b6d4;
  color: black;
  cursor: pointer;
  
  &:hover {
    background: #0891b2;
  }
\`

export function StyledButton({ children }) {
  return <Button>{children}</Button>
}`,filename:`StyledButton.tsx`})]}),(0,f.jsxs)(a.section,{id:`css-variables`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`CSS Variables for Theming`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Define CSS variables for consistent theming:`}),(0,f.jsx)(_,{code:`/* src/app/globals.css */
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --accent: #06b6d4;
  --border: #1e293b;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
    --border: #e2e8f0;
  }
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
}`,filename:`app/globals.css`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/env-api`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Using in API Routes`})]})]}),(0,f.jsxs)(n,{to:`/docs/tailwind`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Tailwind CSS`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};