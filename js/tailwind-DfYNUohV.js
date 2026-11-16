import{a as e,n as t}from"./index-D2AXdX0y.js";import{a as n,c as r,f as i,g as a,h as o,i as s,m as c,n as l,o as u,r as d,u as f,v as p}from"./DocBlocks-CgTYcQET.js";import{a as m,i as h}from"./DocVisuals-B7hV1VEN.js";var g=e(),_=[{id:`setup`,label:`Setup`},{id:`global-css`,label:`Global CSS`},{id:`basic-usage`,label:`Basic Usage`},{id:`v4-features`,label:`Tailwind CSS v4 Features`},{id:`theming`,label:`Theming with CSS Variables`},{id:`responsive`,label:`Responsive Design`},{id:`dark-mode`,label:`Dark Mode`},{id:`custom-utilities`,label:`Custom Utilities`},{id:`common-patterns`,label:`Common Patterns`}],v=[[`--color-primary`,`#06b6d4`],[`--color-primary-dark`,`#0891b2`]];function y(){return(0,g.jsx)(m,{children:(0,g.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-3`,children:v.map(([e,t])=>(0,g.jsxs)(`div`,{className:`flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900`,children:[(0,g.jsx)(`span`,{className:`h-8 w-8 shrink-0 rounded-md border border-black/10`,style:{background:t}}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`span`,{className:`block font-mono text-[12px] text-neutral-900 dark:text-neutral-100`,children:e}),(0,g.jsx)(`span`,{className:`block font-mono text-[11px] text-neutral-500`,children:t})]})]},e))})})}var b=[[`sm`,640],[`md`,768],[`lg`,1024],[`xl`,1280],[`2xl`,1536]];function x(){return(0,g.jsx)(m,{children:(0,g.jsx)(`div`,{className:`w-80 space-y-2`,children:b.map(([e,t])=>(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(`span`,{className:`w-8 shrink-0 font-mono text-[11px] text-neutral-800 dark:text-neutral-200`,children:e}),(0,g.jsx)(`div`,{className:`h-6 flex-1 overflow-hidden rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900`,children:(0,g.jsx)(`div`,{className:`h-full bg-neutral-200 dark:bg-neutral-700`,style:{width:`${t/1536*100}%`}})}),(0,g.jsxs)(`span`,{className:`w-14 shrink-0 text-right font-mono text-[11px] text-neutral-500`,children:[t,`px`]})]},e))})})}function S(){return(0,g.jsx)(m,{children:(0,g.jsxs)(`div`,{className:`flex flex-wrap items-stretch justify-center gap-3`,children:[(0,g.jsxs)(`div`,{className:`w-56 rounded-lg border border-neutral-200 bg-white p-4`,children:[(0,g.jsx)(`div`,{className:`mb-2 font-mono text-[10px] text-neutral-400`,children:`light`}),(0,g.jsx)(`div`,{className:`text-sm font-semibold text-slate-900`,children:`Theme Aware Component`}),(0,g.jsx)(`div`,{className:`mt-1 text-xs text-slate-600`,children:`This adapts to light and dark mode`})]}),(0,g.jsxs)(`div`,{className:`w-56 rounded-lg border border-neutral-800 bg-slate-900 p-4`,children:[(0,g.jsx)(`div`,{className:`mb-2 font-mono text-[10px] text-neutral-500`,children:`dark:`}),(0,g.jsx)(`div`,{className:`text-sm font-semibold text-white`,children:`Theme Aware Component`}),(0,g.jsx)(`div`,{className:`mt-1 text-xs text-slate-400`,children:`This adapts to light and dark mode`})]})]})})}function C(){let e=p(),r=e===`js`?`jsx`:`tsx`;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`mb-12`,children:[(0,g.jsx)(c,{className:`mb-4`,children:`Tailwind CSS v4 is the default styling option in Bini.js. It is already set up with the official Vite plugin, so there is no PostCSS configuration to manage.`}),(0,g.jsxs)(d,{children:[(0,g.jsx)(`strong`,{children:`Zero config:`}),` Bini.js uses the `,(0,g.jsx)(l,{children:`@tailwindcss/vite`}),` plugin. There is no `,(0,g.jsx)(l,{children:`postcss.config.js`}),` and no `,(0,g.jsx)(l,{children:`tailwind.config.js`}),` to write.`]})]}),(0,g.jsxs)(o,{id:`setup`,title:`Setup`,children:[(0,g.jsxs)(c,{className:`mb-4`,children:[`When you create a new Bini.js project with Tailwind, everything is configured for you. Use the `,(0,g.jsx)(l,{children:`--tailwind`}),` flag:`]}),(0,g.jsx)(i,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --tailwind`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --tailwind`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --tailwind`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --tailwind`}]}),(0,g.jsxs)(c,{className:`mb-4`,children:[`Or run the interactive prompt and choose `,(0,g.jsx)(l,{children:`Tailwind CSS`}),` for styling:`]}),(0,g.jsx)(n,{copyText:`? Styling solution? Tailwind CSS`,children:(0,g.jsxs)(s,{type:`select`,title:`Styling solution?`,active:!0,isFirst:!0,isLast:!0,children:[(0,g.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,g.jsx)(`span`,{className:`text-green-500 dark:text-green-400`,children:`●`}),` `,(0,g.jsx)(`span`,{className:`text-neutral-900 dark:text-neutral-100`,children:`Tailwind CSS`})]}),(0,g.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,g.jsx)(`span`,{className:`text-neutral-500`,children:`○`}),` `,(0,g.jsx)(`span`,{className:`text-neutral-500`,children:`CSS Modules`})]}),(0,g.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,g.jsx)(`span`,{className:`text-neutral-500`,children:`○`}),` `,(0,g.jsx)(`span`,{className:`text-neutral-500`,children:`None`})]}),(0,g.jsx)(`div`,{className:`mt-2 text-[11px] text-neutral-500`,children:`↑/↓ to navigate • Enter: confirm`})]})}),(0,g.jsx)(c,{className:`mb-4`,children:`Tailwind is the default, so you can also just run:`}),(0,g.jsx)(i,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app`}]}),(0,g.jsx)(c,{className:`mb-4`,children:`With TypeScript + Tailwind:`}),(0,g.jsx)(i,{tabs:[{id:`npm`,label:`npm`,command:`$ npx create-bini-app@latest my-app --tailwind --typescript`},{id:`pnpm`,label:`pnpm`,command:`$ pnpm dlx create-bini-app@latest my-app --tailwind --typescript`},{id:`yarn`,label:`yarn`,command:`$ yarn dlx create-bini-app@latest my-app --tailwind --typescript`},{id:`bun`,label:`bun`,command:`$ bunx create-bini-app@latest my-app --tailwind --typescript`}]}),(0,g.jsx)(c,{className:`mb-4`,children:`All of the following is set up for you:`}),(0,g.jsx)(h,{width:260,rows:[{n:`vite.config.${e===`js`?`js`:`ts`}`,dot:!0},{n:`src`},{n:`app`,d:1},{n:`globals.css`,d:2,dot:!0},{n:`layout.${r}`,d:2},{n:`page.${r}`,d:2}]}),(0,g.jsx)(u,{filename:`vite.config.ts`,code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Added automatically
    biniroute(),
  ],
})`}),(0,g.jsx)(u,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
@import 'tailwindcss';`}),(0,g.jsx)(u,{filename:`src/app/layout.${r}`,tsCode:`// src/app/layout.tsx
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
}`})]}),(0,g.jsxs)(o,{id:`global-css`,title:`Global CSS`,children:[(0,g.jsxs)(c,{className:`mb-4`,children:[`Everything Tailwind related lives in one file, `,(0,g.jsx)(l,{children:`globals.css`}),`. It is imported once in the root layout, so the theme, base styles, and custom utilities apply to every route:`]}),(0,g.jsx)(h,{width:280,rows:[{n:`src`},{n:`app`,d:1},{n:`globals.css`,d:2,dot:!0},{n:`layout.${r}`,d:2},{n:`page.${r}`,d:2},{n:`components`,d:2},{n:`Card.${r}`,d:3}]}),(0,g.jsx)(u,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
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
}`}),(0,g.jsx)(u,{filename:`src/app/layout.${r}`,tsCode:`// src/app/layout.tsx
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
}`}),(0,g.jsxs)(d,{children:[`Keep `,(0,g.jsx)(l,{children:`@import 'tailwindcss'`}),` at the top of the file. The sections below show each part of this file in more detail.`]})]}),(0,g.jsxs)(o,{id:`basic-usage`,title:`Basic Usage`,children:[(0,g.jsx)(c,{className:`mb-4`,children:`Use Tailwind's utility classes directly in your components:`}),(0,g.jsx)(u,{filename:`src/app/page.${r}`,code:`export default function HomePage() {
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
}`})]}),(0,g.jsx)(o,{id:`v4-features`,title:`Tailwind CSS v4 Features`,children:(0,g.jsx)(a,{headers:[`Feature`,`Description`],rows:[[`Vite Plugin`,`Native Vite integration - no PostCSS config needed`],[`CSS-first config`,`Configure via CSS variables instead of JS`],[`Faster builds`,`Uses Lightning CSS for faster builds`],[`Simpler setup`,`Just @import "tailwindcss" - that is it`]]})}),(0,g.jsxs)(o,{id:`theming`,title:`Theming with CSS Variables`,children:[(0,g.jsxs)(c,{className:`mb-4`,children:[`Tailwind v4 uses CSS variables for theming. Every token you declare in `,(0,g.jsx)(l,{children:`@theme`}),` `,`becomes a utility:`]}),(0,g.jsx)(y,{}),(0,g.jsx)(u,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
@import 'tailwindcss';

@theme {
  --color-primary: #06b6d4;
  --color-primary-dark: #0891b2;
  --font-sans: 'Inter', system-ui, sans-serif;
  --radius-card: 1rem;
}`}),(0,g.jsx)(u,{filename:`src/app/components/Card.${r}`,tsCode:`// src/app/components/Card.tsx
import type { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
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
}`})]}),(0,g.jsxs)(o,{id:`responsive`,title:`Responsive Design`,children:[(0,g.jsxs)(c,{className:`mb-4`,children:[`Add a breakpoint prefix such as `,(0,g.jsx)(l,{children:`sm:`}),` or `,(0,g.jsx)(l,{children:`lg:`}),` to make a class apply from that screen width and up:`]}),(0,g.jsx)(x,{}),(0,g.jsx)(u,{filename:`src/app/page.${r}`,code:`export default function ResponsivePage() {
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
}`}),(0,g.jsx)(a,{headers:[`Breakpoint`,`Min Width`],rows:[[`sm`,`640px`],[`md`,`768px`],[`lg`,`1024px`],[`xl`,`1280px`],[`2xl`,`1536px`]]})]}),(0,g.jsxs)(o,{id:`dark-mode`,title:`Dark Mode`,children:[(0,g.jsxs)(c,{className:`mb-4`,children:[`Use the `,(0,g.jsx)(l,{children:`dark:`}),` variant to apply a class only in dark mode:`]}),(0,g.jsx)(S,{}),(0,g.jsx)(u,{filename:`src/app/components/ThemeToggle.${r}`,code:`export function ThemeToggle() {
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
}`})]}),(0,g.jsxs)(o,{id:`custom-utilities`,title:`Custom Utilities`,children:[(0,g.jsxs)(c,{className:`mb-4`,children:[`Create your own utility classes with `,(0,g.jsx)(l,{children:`@utility`}),`:`]}),(0,g.jsx)(u,{filename:`src/app/globals.css`,code:`/* src/app/globals.css */
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
}`}),(0,g.jsx)(u,{filename:`src/app/components/FeatureCard.${r}`,code:`export function FeatureCard() {
  return (
    <div className="card-hover rounded-lg bg-slate-900 p-6">
      <h3 className="text-gradient from-cyan-400 to-blue-500 text-xl font-bold">
        Custom Utility
      </h3>
    </div>
  )
}`})]}),(0,g.jsxs)(o,{id:`common-patterns`,title:`Common Patterns`,children:[(0,g.jsx)(f,{children:`Container`}),(0,g.jsx)(u,{filename:`src/app/components/Container.${r}`,tsCode:`// src/app/components/Container.tsx
import type { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
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
}`}),(0,g.jsx)(f,{className:`mt-8 mb-3`,children:`Flex Center`}),(0,g.jsx)(u,{filename:`src/app/components/FlexCenter.${r}`,tsCode:`// src/app/components/FlexCenter.tsx
import type { ReactNode } from 'react'

export function FlexCenter({ children }: { children: ReactNode }) {
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
}`}),(0,g.jsx)(f,{className:`mt-8 mb-3`,children:`Grid Layout`}),(0,g.jsx)(u,{filename:`src/app/components/GridLayout.${r}`,tsCode:`// src/app/components/GridLayout.tsx
import type { ReactNode } from 'react'

export function GridLayout({ children }: { children: ReactNode }) {
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
}`}),(0,g.jsx)(f,{className:`mt-8 mb-3`,children:`Button Styles`}),(0,g.jsx)(u,{filename:`src/app/components/Buttons.${r}`,code:`export function Buttons() {
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
}`})]}),(0,g.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,g.jsxs)(t,{to:`/docs/css`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,g.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`CSS Overview`}),(0,g.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Plain CSS in Bini.js.`})]}),(0,g.jsxs)(t,{to:`/docs/css-modules`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,g.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`CSS Modules`}),(0,g.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Scoped class names with .module.css.`})]}),(0,g.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,g.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,g.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Where to import globals.css in the app directory.`})]}),(0,g.jsxs)(t,{to:`/docs/project-structure`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,g.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Project Structure`}),(0,g.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Where everything lives in a Bini.js app.`})]})]})]})}function w(){return(0,g.jsx)(r,{title:`Tailwind CSS`,description:`Learn how to use Tailwind CSS v4 in your Bini.js application with zero configuration.`,url:`https://bini.js.org/docs/tailwind`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/tailwind.tsx`,toc:_,prev:{to:`/docs/css`,title:`CSS Overview`},next:{to:`/docs/css-modules`,title:`CSS Modules`},children:(0,g.jsx)(C,{})})}export{w as default};