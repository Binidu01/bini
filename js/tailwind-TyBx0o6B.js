import{y as e}from"./index-UfrPBTC9.js";import{_ as t,f as n,h as r,i,l as a,m as o,n as s,o as c,p as l,r as u,u as d}from"./DocBlocks-7vLhiDQN.js";import{a as f,i as p}from"./DocVisuals-Ce2L0xWH.js";var m=e(),h=[{id:`setup`,label:`Setup`},{id:`global-css`,label:`Global CSS`},{id:`basic-usage`,label:`Basic Usage`},{id:`v4-features`,label:`Tailwind CSS v4 Features`},{id:`theming`,label:`Theming with CSS Variables`},{id:`responsive`,label:`Responsive Design`},{id:`dark-mode`,label:`Dark Mode`},{id:`custom-utilities`,label:`Custom Utilities`},{id:`common-patterns`,label:`Common Patterns`}],g=[[`--color-primary`,`#06b6d4`],[`--color-primary-dark`,`#0891b2`]];function _(){return(0,m.jsx)(f,{children:(0,m.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:g.map(([e,t])=>(0,m.jsxs)(`div`,{className:`flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900`,children:[(0,m.jsx)(`span`,{className:`h-8 w-8 shrink-0 rounded-md border border-black/10`,style:{background:t}}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`span`,{className:`block font-mono text-[12px] text-neutral-900 dark:text-neutral-100`,children:e}),(0,m.jsx)(`span`,{className:`block font-mono text-[11px] text-neutral-500`,children:t})]})]},e))})})}var v=[[`sm`,640],[`md`,768],[`lg`,1024],[`xl`,1280],[`2xl`,1536]];function y(){return(0,m.jsx)(f,{children:(0,m.jsx)(`div`,{className:`w-80 space-y-2`,children:v.map(([e,t])=>(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(`span`,{className:`w-8 shrink-0 font-mono text-[11px] text-neutral-800 dark:text-neutral-200`,children:e}),(0,m.jsx)(`div`,{className:`h-6 flex-1 overflow-hidden rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900`,children:(0,m.jsx)(`div`,{className:`h-full bg-neutral-200 dark:bg-neutral-700`,style:{width:`${t/1536*100}%`}})}),(0,m.jsxs)(`span`,{className:`w-14 shrink-0 text-right font-mono text-[11px] text-neutral-500`,children:[t,`px`]})]},e))})})}function b(){return(0,m.jsx)(f,{children:(0,m.jsxs)(`div`,{className:`flex flex-wrap items-stretch justify-center gap-3`,children:[(0,m.jsxs)(`div`,{className:`w-56 rounded-lg border border-neutral-200 bg-white p-4`,children:[(0,m.jsx)(`div`,{className:`mb-2 font-mono text-[10px] text-neutral-400`,children:`light`}),(0,m.jsx)(`div`,{className:`text-sm font-semibold text-slate-900`,children:`Theme Aware Component`}),(0,m.jsx)(`div`,{className:`mt-1 text-xs text-slate-600`,children:`This adapts to light and dark mode`})]}),(0,m.jsxs)(`div`,{className:`w-56 rounded-lg border border-neutral-800 bg-slate-900 p-4`,children:[(0,m.jsx)(`div`,{className:`mb-2 font-mono text-[10px] text-neutral-500`,children:`dark:`}),(0,m.jsx)(`div`,{className:`text-sm font-semibold text-white`,children:`Theme Aware Component`}),(0,m.jsx)(`div`,{className:`mt-1 text-xs text-slate-400`,children:`This adapts to light and dark mode`})]})]})})}function x(){let e=t(),c=e===`js`?`jsx`:`tsx`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`mb-12`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`Tailwind CSS v4 is the default styling option in Bini.js. It is pre-configured using the official Vite plugin - no PostCSS configuration needed.`}),(0,m.jsxs)(u,{children:[(0,m.jsx)(`strong`,{children:`Zero Configuration:`}),` Bini.js uses the `,(0,m.jsx)(s,{children:`@tailwindcss/vite`}),` plugin. Everything works out of the box - no `,(0,m.jsx)(s,{children:`postcss.config.js`}),` or`,` `,(0,m.jsx)(s,{children:`tailwind.config.js`}),` required.`]})]}),(0,m.jsxs)(o,{id:`setup`,title:`Setup`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`When you create a new Bini.js project with Tailwind, everything is configured automatically. Use the `,(0,m.jsx)(s,{children:`--tailwind`}),` flag:`]}),(0,m.jsx)(d,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --tailwind`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --tailwind`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --tailwind`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --tailwind`}]}),(0,m.jsxs)(n,{className:`mb-4`,children:[`Or use the interactive prompt and select `,(0,m.jsx)(s,{children:`Tailwind CSS`}),` under the styling question:`]}),(0,m.jsx)(l,{lines:[{kind:`question`,text:`Select a styling solution:`},{kind:`option`,text:`Tailwind CSS`,selected:!0},{kind:`option`,text:`CSS Modules`},{kind:`option`,text:`None`},{kind:`blank`},{kind:`hint`,text:`↑↓ navigate • ⏎ select`}]}),(0,m.jsx)(n,{className:`mb-4`,children:`Tailwind is the default, so you can also just run:`}),(0,m.jsx)(d,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app`}]}),(0,m.jsx)(n,{className:`mb-4`,children:`With TypeScript + Tailwind:`}),(0,m.jsx)(d,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --tailwind --typescript`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --tailwind --typescript`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --tailwind --typescript`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --tailwind --typescript`}]}),(0,m.jsx)(n,{className:`mb-4`,children:`Everything below is configured automatically:`}),(0,m.jsx)(p,{width:260,rows:[{n:`vite.config.${e===`js`?`js`:`ts`}`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`globals.css`,d:2,dot:!0},{n:`layout.${c}`,d:2},{n:`page.${c}`,d:2}]}),(0,m.jsx)(i,{filename:`vite.config.ts`,code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Automatically added
    biniroute(),
  ],
})`}),(0,m.jsx)(i,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
@import 'tailwindcss';`}),(0,m.jsx)(i,{filename:`src/app/layout.${c}`,tsCode:`// src/app/layout.tsx
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,jsCode:`// src/app/layout.jsx
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`})]}),(0,m.jsxs)(o,{id:`global-css`,title:`Global CSS`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Everything Tailwind related lives in one file, `,(0,m.jsx)(s,{children:`globals.css`}),`. It is imported once in the root layout, so the theme, base styles and custom utilities apply to every route:`]}),(0,m.jsx)(p,{width:280,rows:[{n:`src`},{n:`app`,d:1},{n:`globals.css`,d:2,dot:!0},{n:`layout.${c}`,d:2},{n:`page.${c}`,d:2},{n:`components`,d:2},{n:`Card.${c}`,d:3}]}),(0,m.jsx)(i,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
@import 'tailwindcss';

/* Theme tokens - each one becomes a utility (bg-primary, rounded-card, ...) */
@theme {
  --color-primary: #06b6d4;
  --color-primary-dark: #0891b2;
  --font-sans: 'Inter', system-ui, sans-serif;
  --radius-card: 1rem;
}

/* Base styles applied to every page */
@layer base {
  body {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
}

/* Custom utilities */
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
}`}),(0,m.jsx)(i,{filename:`src/app/layout.${c}`,tsCode:`// src/app/layout.tsx
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,jsCode:`// src/app/layout.jsx
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}),(0,m.jsxs)(u,{children:[`Keep `,(0,m.jsx)(s,{children:`@import 'tailwindcss'`}),` at the top of the file. The sections below show each part of this file in more detail.`]})]}),(0,m.jsxs)(o,{id:`basic-usage`,title:`Basic Usage`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`Use Tailwind's utility classes directly in your components:`}),(0,m.jsx)(i,{filename:`src/app/page.${c}`,code:`export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
        Welcome to Bini.js
      </h1>
      <p className="mt-4 text-lg text-slate-400">
        Styled with Tailwind CSS v4
      </p>
      <button className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black transition-colors hover:bg-cyan-400">
        Get Started
      </button>
    </div>
  )
}`})]}),(0,m.jsx)(o,{id:`v4-features`,title:`Tailwind CSS v4 Features`,children:(0,m.jsx)(r,{headers:[`Feature`,`Description`],rows:[[`Vite Plugin`,`Native Vite integration - no PostCSS config needed`],[`CSS-first config`,`Configure via CSS variables instead of JS`],[`Lightning CSS`,`Faster builds with Lightning CSS`],[`Simplified setup`,`Just @import "tailwindcss" - that is it`]]})}),(0,m.jsxs)(o,{id:`theming`,title:`Theming with CSS Variables`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Tailwind v4 uses CSS variables for theming. Every token you declare in `,(0,m.jsx)(s,{children:`@theme`}),` `,`becomes a utility:`]}),(0,m.jsx)(_,{}),(0,m.jsx)(i,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
@import 'tailwindcss';

@theme {
  --color-primary: #06b6d4;
  --color-primary-dark: #0891b2;
  --font-sans: 'Inter', system-ui, sans-serif;
  --radius-card: 1rem;
}`}),(0,m.jsx)(i,{filename:`src/app/components/Card.${c}`,tsCode:`// src/app/components/Card.tsx
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-(--radius-card) bg-primary p-6">
      {children}
    </div>
  )
}`,jsCode:`// src/app/components/Card.jsx
export function Card({ children }) {
  return (
    <div className="rounded-(--radius-card) bg-primary p-6">
      {children}
    </div>
  )
}`})]}),(0,m.jsxs)(o,{id:`responsive`,title:`Responsive Design`,children:[(0,m.jsx)(n,{className:`mb-4`,children:`Use Tailwind's responsive prefixes to adapt your layout:`}),(0,m.jsx)(y,{}),(0,m.jsx)(i,{filename:`src/app/page.${c}`,code:`export default function ResponsivePage() {
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
}`}),(0,m.jsx)(r,{headers:[`Breakpoint`,`Min Width`],rows:[[`sm`,`640px`],[`md`,`768px`],[`lg`,`1024px`],[`xl`,`1280px`],[`2xl`,`1536px`]]})]}),(0,m.jsxs)(o,{id:`dark-mode`,title:`Dark Mode`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Use the `,(0,m.jsx)(s,{children:`dark:`}),` variant for dark mode:`]}),(0,m.jsx)(b,{}),(0,m.jsx)(i,{filename:`src/app/components/ThemeToggle.${c}`,code:`export function ThemeToggle() {
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
}`})]}),(0,m.jsxs)(o,{id:`custom-utilities`,title:`Custom Utilities`,children:[(0,m.jsxs)(n,{className:`mb-4`,children:[`Create custom utilities using `,(0,m.jsx)(s,{children:`@utility`}),`:`]}),(0,m.jsx)(i,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
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
}`}),(0,m.jsx)(i,{filename:`src/app/components/FeatureCard.${c}`,code:`export function FeatureCard() {
  return (
    <div className="card-hover rounded-lg bg-slate-900 p-6">
      <h3 className="text-gradient from-cyan-400 to-blue-500 text-xl font-bold">
        Custom Utility
      </h3>
    </div>
  )
}`})]}),(0,m.jsxs)(o,{id:`common-patterns`,title:`Common Patterns`,children:[(0,m.jsx)(a,{children:`Container`}),(0,m.jsx)(i,{filename:`src/app/components/Container.${c}`,tsCode:`// src/app/components/Container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  )
}`,jsCode:`// src/app/components/Container.jsx
export function Container({ children }) {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  )
}`}),(0,m.jsx)(a,{className:`mt-8 mb-3`,children:`Flex Center`}),(0,m.jsx)(i,{filename:`src/app/components/FlexCenter.${c}`,tsCode:`// src/app/components/FlexCenter.tsx
export function FlexCenter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      {children}
    </div>
  )
}`,jsCode:`// src/app/components/FlexCenter.jsx
export function FlexCenter({ children }) {
  return (
    <div className="flex items-center justify-center">
      {children}
    </div>
  )
}`}),(0,m.jsx)(a,{className:`mt-8 mb-3`,children:`Grid Layout`}),(0,m.jsx)(i,{filename:`src/app/components/GridLayout.${c}`,tsCode:`// src/app/components/GridLayout.tsx
export function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}`,jsCode:`// src/app/components/GridLayout.jsx
export function GridLayout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}`}),(0,m.jsx)(a,{className:`mt-8 mb-3`,children:`Button Styles`}),(0,m.jsx)(i,{filename:`src/app/components/Buttons.${c}`,code:`export function Buttons() {
  return (
    <div className="flex gap-3">
      {/* Primary */}
      <button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black hover:bg-cyan-400">
        Primary
      </button>

      {/* Secondary */}
      <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-900">
        Secondary
      </button>
    </div>
  )
}`})]})]})}function S(){return(0,m.jsx)(c,{title:`Tailwind CSS`,description:`Learn how to use Tailwind CSS v4 in your Bini.js application with zero configuration.`,url:`https://bini.js.org/docs/tailwind`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/tailwind.tsx`,toc:h,prev:{to:`/docs/css`,title:`CSS Overview`},next:{to:`/docs/css-modules`,title:`CSS Modules`},children:(0,m.jsx)(x,{})})}export{S as default};