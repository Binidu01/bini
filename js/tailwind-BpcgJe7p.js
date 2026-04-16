import{n as e,s as t,t as n}from"./jsx-runtime-CYyajZpr.js";import{n as r}from"./chunk-OE4NN4TA-ZGuMkXT6.js";import{_ as i,n as a}from"./Layout-CMA5STUh.js";import{t as o}from"./arrow-left-CmlvgbGL.js";import{t as s}from"./arrow-right-Bkb2N5om.js";import{t as c}from"./DocSidebar-D95aINV0.js";import{t as l}from"./info-DwoDvoEv.js";import{t as u}from"./lightbulb-0h-vsbXQ.js";import{t as d}from"./triangle-alert-Dv6BP5n_.js";var f=t(e(),1),p=n();function m({code:e,filename:t}){let[n,r]=f.useState(!1);return(0,p.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,p.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,p.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,p.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,p.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,p.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,p.jsx)(`pre`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} p-4 overflow-x-auto`,children:(0,p.jsx)(`code`,{className:`text-sm font-mono text-slate-200`,children:e})})]})}function h({headers:e,rows:t}){return(0,p.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,p.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,p.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,p.jsx)(`tr`,{children:e.map((e,t)=>(0,p.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,p.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,p.jsx)(`tr`,{children:e.map((e,t)=>(0,p.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function g({type:e,children:t}){let n={info:{bg:`bg-cyan-500/10`,border:`border-cyan-500/30`,color:`text-cyan-400`,icon:l},warning:{bg:`bg-amber-500/10`,border:`border-amber-500/30`,color:`text-amber-400`,icon:d},tip:{bg:`bg-purple-500/10`,border:`border-purple-500/30`,color:`text-purple-400`,icon:u}}[e],r=n.icon;return(0,p.jsxs)(`div`,{className:`p-4 rounded-lg ${n.bg} border ${n.border} my-6`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,p.jsx)(r,{className:`w-4 h-4 ${n.color}`}),(0,p.jsx)(`p`,{className:`text-sm font-medium ${n.color}`,children:e===`info`?`Note`:e===`warning`?`Warning`:`Tip`})]}),(0,p.jsx)(`div`,{className:`text-sm text-slate-300 [&>strong]:text-white [&>code]:text-cyan-400 [&>code]:bg-slate-800 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded`,children:t})]})}function _(){return(0,p.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,p.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,p.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,p.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,p.jsx)(a,{}),(0,p.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,p.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,p.jsx)(c,{children:(0,p.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,p.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,p.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:`Tailwind CSS`}),(0,p.jsx)(`p`,{className:`text-slate-400 text-sm mb-8`,children:`Learn how to use Tailwind CSS v4 in your Bini.js application with zero configuration.`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,p.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Tailwind CSS v4 is the default styling option in Bini.js. It's pre-configured using the official Vite plugin — no PostCSS configuration needed.`}),(0,p.jsxs)(g,{type:`info`,children:[(0,p.jsx)(`strong`,{children:`Zero Configuration:`}),` Bini.js uses the `,(0,p.jsx)(`code`,{children:`@tailwindcss/vite`}),` plugin. Everything works out of the box — no `,(0,p.jsx)(`code`,{children:`postcss.config.js`}),` or `,(0,p.jsx)(`code`,{children:`tailwind.config.js`}),` required.`]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Setup`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When you create a new Bini.js project with Tailwind, everything is configured automatically:`}),(0,p.jsx)(m,{code:`// vite.config.ts
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
})`,filename:`vite.config.ts`}),(0,p.jsx)(m,{code:`/* src/app/globals.css */
@import 'tailwindcss';`,filename:`app/globals.css`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Basic Usage`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use Tailwind's utility classes directly in your components:`}),(0,p.jsx)(m,{code:`// src/app/page.tsx
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
}`,filename:`app/page.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Tailwind CSS v4 Features`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Tailwind v4 introduces several improvements over v3:`}),(0,p.jsx)(h,{headers:[`Feature`,`Description`],rows:[[`Vite Plugin`,`Native Vite integration — no PostCSS config needed`],[`CSS-first config`,`Configure via CSS variables instead of JS`],[`Lightning CSS`,`Faster builds with Lightning CSS`],[`Simplified setup`,`Just @import "tailwindcss" — that's it`],[`Modern syntax`,`Uses modern CSS features like @layer, @theme`]]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Theming with CSS Variables`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Tailwind v4 uses CSS variables for theming. Customize colors, fonts, and more:`}),(0,p.jsx)(m,{code:`/* src/app/globals.css */
@import 'tailwindcss';

@theme {
  --color-primary: #06b6d4;
  --color-primary-dark: #0891b2;
  --color-secondary: #8b5cf6;
  --color-accent: #f59e0b;
  
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --spacing-container: 1200px;
  --radius-card: 1rem;
}

@layer base {
  body {
    @apply bg-black text-white antialiased;
  }
}`,filename:`app/globals.css`}),(0,p.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`Use your custom theme values:`}),(0,p.jsx)(m,{code:`// src/app/components/Card.tsx
export function Card({ children }) {
  return (
    <div className="rounded-(--radius-card) bg-linear-to-r from-primary to-primary-dark p-6">
      {children}
    </div>
  )
}`,filename:`Card.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Responsive Design`}),(0,p.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Use Tailwind's responsive prefixes to adapt your layout:`}),(0,p.jsx)(m,{code:`// src/app/page.tsx
export default function ResponsivePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg bg-slate-900 p-4">
            <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
              Card {i + 1}
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Responsive card content
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}`,filename:`app/page.tsx`}),(0,p.jsx)(h,{headers:[`Breakpoint`,`Min Width`],rows:[[`sm`,`640px`],[`md`,`768px`],[`lg`,`1024px`],[`xl`,`1280px`],[`2xl`,`1536px`]]})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Dark Mode`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Tailwind v4 supports dark mode out of the box using the `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`dark:`}),` variant:`]}),(0,p.jsx)(m,{code:`// src/app/components/ThemeToggle.tsx
export function ThemeToggle() {
  return (
    <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
      <h2 className="text-slate-900 dark:text-white">
        Theme Aware Component
      </h2>
      <p className="text-slate-600 dark:text-slate-400">
        This text adapts to light and dark mode
      </p>
      <button className="mt-4 rounded-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500">
        Toggle Theme
      </button>
    </div>
  )
}`,filename:`ThemeToggle.tsx`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Custom Utilities`}),(0,p.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create custom utilities using `,(0,p.jsx)(`code`,{className:`text-cyan-400`,children:`@utility`}),`:`]}),(0,p.jsx)(m,{code:`/* src/app/globals.css */
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
}`,filename:`app/globals.css`}),(0,p.jsx)(m,{code:`// Using custom utilities
export function FeatureCard() {
  return (
    <div className="card-hover rounded-lg bg-slate-900 p-6">
      <h3 className="text-gradient from-cyan-400 to-blue-500 text-xl font-bold">
        Custom Utility
      </h3>
    </div>
  )
}`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Common Patterns`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Container`}),(0,p.jsx)(m,{code:`<div className="container mx-auto px-4">
  {/* Content */}
</div>`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Flex Center`}),(0,p.jsx)(m,{code:`<div className="flex items-center justify-center">
  {/* Centered content */}
</div>`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Grid Layout`}),(0,p.jsx)(m,{code:`<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</div>`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Sticky Header`}),(0,p.jsx)(m,{code:`<header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
  {/* Header content */}
</header>`}),(0,p.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Button Styles`}),(0,p.jsx)(m,{code:`// Primary button
<button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400 transition-colors">
  Primary
</button>

// Secondary button
<button className="rounded-lg border border-slate-700 px-4 py-2 font-medium text-white hover:bg-slate-900 transition-colors">
  Secondary
</button>

// Ghost button
<button className="rounded-lg px-4 py-2 font-medium text-slate-400 hover:text-white transition-colors">
  Ghost
</button>`})]}),(0,p.jsxs)(i.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:[(0,p.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Best Practices`}),(0,p.jsxs)(`ul`,{className:`space-y-3 text-slate-300 mb-6`,children:[(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use semantic class ordering`}),` — Layout → Sizing → Spacing → Typography → Visuals.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Extract repeated patterns`}),` — Use components for repeated UI patterns.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use CSS variables for theming`}),` — Makes dark mode and customization easy.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Leverage @utility`}),` — Create custom utilities for project-specific patterns.`]})]}),(0,p.jsxs)(`li`,{className:`flex items-start gap-2`,children:[(0,p.jsx)(`span`,{className:`text-cyan-400 mt-1`,children:`•`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{className:`text-white`,children:`Use arbitrary values sparingly`}),` — Prefer theme values over `,(0,p.jsx)(`code`,{children:`w-[327px]`}),`.`]})]})]})]}),(0,p.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,p.jsxs)(r,{to:`/docs/css`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`CSS Overview`})]})]}),(0,p.jsxs)(r,{to:`/docs/css-modules`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,p.jsx)(`div`,{className:`text-sm font-medium`,children:`CSS Modules`})]}),(0,p.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]})})})})]})}export{_ as default};