import{a as e,i as t,n,t as r}from"./index-BRu3C3lb.js";import{n as i,v as a}from"./Layout-B9n9CsLO.js";import{t as o}from"./arrow-left-L0hbJ7yr.js";import{t as s}from"./arrow-right-CElS-BBZ.js";import{t as c}from"./DocSidebar-B-RtJtz0.js";import{n as l,t as u}from"./TableOfContents-BdTAqMst.js";var d=e(t(),1),f=r(),p=[{id:`setup`,label:`Setup`},{id:`basic-usage`,label:`Basic Usage`},{id:`v4-features`,label:`Tailwind CSS v4 Features`},{id:`theming`,label:`Theming with CSS Variables`},{id:`responsive`,label:`Responsive Design`},{id:`dark-mode`,label:`Dark Mode`},{id:`custom-utilities`,label:`Custom Utilities`},{id:`common-patterns`,label:`Common Patterns`}],m=`Tailwind CSS`,h=`https://bini.js.org/docs/tailwind`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/tailwind.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y({children:e}){return(0,f.jsx)(`div`,{className:`p-4 rounded-lg bg-slate-900/50 border border-slate-800 my-6`,children:(0,f.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:e})})}function b(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to use Tailwind CSS v4 in your Bini.js application with zero configuration.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,f.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Tailwind CSS v4 is the default styling option in Bini.js. It's pre-configured using the official Vite plugin — no PostCSS configuration needed.`}),(0,f.jsxs)(y,{children:[(0,f.jsx)(`strong`,{children:`Zero Configuration:`}),` Bini.js uses the `,(0,f.jsx)(`code`,{children:`@tailwindcss/vite`}),` plugin. Everything works out of the box — no `,(0,f.jsx)(`code`,{children:`postcss.config.js`}),` or `,(0,f.jsx)(`code`,{children:`tailwind.config.js`}),` required.`]})]}),(0,f.jsxs)(a.section,{id:`setup`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Setup`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When you create a new Bini.js project with Tailwind, everything is configured automatically:`}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Automatically added
    biniroute(),
  ],
})`,filename:`vite.config.ts`}),(0,f.jsx)(_,{code:`/* src/app/globals.css */
@import 'tailwindcss';`,filename:`app/globals.css`})]}),(0,f.jsxs)(a.section,{id:`basic-usage`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use Tailwind's utility classes directly in your components:`}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
        Welcome to Bini.js
      </h1>
      <p className="mt-4 text-lg text-slate-400">
        Styled with Tailwind CSS v4
      </p>
      <button className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400 transition-colors">
        Get Started
      </button>
    </div>
  )
}`,filename:`app/page.tsx`})]}),(0,f.jsxs)(a.section,{id:`v4-features`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Tailwind CSS v4 Features`}),(0,f.jsx)(v,{headers:[`Feature`,`Description`],rows:[[`Vite Plugin`,`Native Vite integration — no PostCSS config needed`],[`CSS-first config`,`Configure via CSS variables instead of JS`],[`Lightning CSS`,`Faster builds with Lightning CSS`],[`Simplified setup`,`Just @import "tailwindcss" — that's it`]]})]}),(0,f.jsxs)(a.section,{id:`theming`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Theming with CSS Variables`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Tailwind v4 uses CSS variables for theming:`}),(0,f.jsx)(_,{code:`/* src/app/globals.css */
@import 'tailwindcss';

@theme {
  --color-primary: #06b6d4;
  --color-primary-dark: #0891b2;
  --font-sans: 'Inter', system-ui, sans-serif;
  --radius-card: 1rem;
}`,filename:`app/globals.css`}),(0,f.jsx)(_,{code:`// src/app/components/Card.tsx
export function Card({ children }) {
  return (
    <div className="rounded-(--radius-card) bg-primary p-6">
      {children}
    </div>
  )
}`,filename:`Card.tsx`})]}),(0,f.jsxs)(a.section,{id:`responsive`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Responsive Design`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use Tailwind's responsive prefixes to adapt your layout:`}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function ResponsivePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-lg bg-slate-900 p-4">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Card {i + 1}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}`,filename:`app/page.tsx`}),(0,f.jsx)(v,{headers:[`Breakpoint`,`Min Width`],rows:[[`sm`,`640px`],[`md`,`768px`],[`lg`,`1024px`],[`xl`,`1280px`],[`2xl`,`1536px`]]})]}),(0,f.jsxs)(a.section,{id:`dark-mode`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dark Mode`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Use the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`dark:`}),` variant for dark mode:`]}),(0,f.jsx)(_,{code:`// src/app/components/ThemeToggle.tsx
export function ThemeToggle() {
  return (
    <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
      <h2 className="text-slate-900 dark:text-white">
        Theme Aware Component
      </h2>
      <p className="text-slate-600 dark:text-slate-400">
        This adapts to light and dark mode
      </p>
    </div>
  )
}`,filename:`ThemeToggle.tsx`})]}),(0,f.jsxs)(a.section,{id:`custom-utilities`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Custom Utilities`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create custom utilities using `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`@utility`}),`:`]}),(0,f.jsx)(_,{code:`/* src/app/globals.css */
@import 'tailwindcss';

@utility text-gradient {
  background: linear-gradient(to right, var(--tw-gradient-stops));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@utility card-hover {
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
}`,filename:`app/globals.css`}),(0,f.jsx)(_,{code:`// Using custom utilities
export function FeatureCard() {
  return (
    <div className="card-hover rounded-lg bg-slate-900 p-6">
      <h3 className="text-gradient from-cyan-400 to-blue-500 text-xl font-bold">
        Custom Utility
      </h3>
    </div>
  )
}`})]}),(0,f.jsxs)(a.section,{id:`common-patterns`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Common Patterns`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Container`}),(0,f.jsx)(_,{code:`<div className="container mx-auto px-4">
  {/* Content */}
</div>`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flex Center`}),(0,f.jsx)(_,{code:`<div className="flex items-center justify-center">
  {/* Centered content */}
</div>`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Grid Layout`}),(0,f.jsx)(_,{code:`<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</div>`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Button Styles`}),(0,f.jsx)(_,{code:`// Primary
<button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400">
  Primary
</button>

// Secondary
<button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-900">
  Secondary
</button>`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/css`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`CSS Overview`})]})]}),(0,f.jsxs)(n,{to:`/docs/css-modules`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`CSS Modules`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{b as default};