import{a as e,i as t,n,t as r}from"./index-DC1finTj.js";import{n as i,v as a}from"./Layout-BchPlYGG.js";import{t as o}from"./arrow-left-DDUfnCyW.js";import{t as s}from"./arrow-right-DxPakO1S.js";import{t as c}from"./DocSidebar-DEaPZPK8.js";import{n as l,t as u}from"./TableOfContents-Dq9a3AEA.js";var d=e(t(),1),f=r(),p=[{id:`what-is-mdx`,label:`What is MDX?`},{id:`mdx-pages`,label:`MDX Pages`},{id:`markdown-pages`,label:`Markdown Pages`},{id:`metadata-in-mdx`,label:`Metadata in MDX`},{id:`imports-in-mdx`,label:`Imports in MDX`},{id:`extension-priority`,label:`Extension Priority`},{id:`styling-mdx`,label:`Styling MDX Content`},{id:`mdx-configuration`,label:`MDX Configuration`},{id:`complete-example`,label:`Complete Example`}],m=`MDX and Markdown`,h=`https://bini.js.org/docs/mdx-markdown`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/mdx-markdown.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to use MDX and Markdown for content routes in Bini.js.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsxs)(a.section,{id:`what-is-mdx`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`What is MDX?`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`MDX is an extension to Markdown that allows you to write JSX components directly in your Markdown files. Bini.js supports `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` files as content routes out of the box.`]}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`@mdx-js/rollup`}),` is bundled internally, so no separate installation or Vite configuration is required. This makes it easy to create rich, interactive content pages.`]})]}),(0,f.jsxs)(a.section,{id:`mdx-pages`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`MDX Pages`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create an MDX page by adding a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` file anywhere in `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`src/app/`}),`. The file is compiled to a React component and rendered as a page.`]}),(0,f.jsx)(_,{code:`src/app/
├── about.mdx              → /about
├── blog/
│   ├── page.mdx           → /blog
│   └── [slug].mdx         → /blog/:slug
└── contact.mdx            → /contact`}),(0,f.jsx)(_,{code:`---
---

# About Us

Welcome to our company! This is a regular **Markdown** page with JSX support.

<Button variant="primary">Get Started</Button>

## Our Mission

We build amazing products with Bini.js.`,filename:`app/about.mdx`})]}),(0,f.jsxs)(a.section,{id:`markdown-pages`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Markdown Pages`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Bini.js also supports plain `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` files. They go through the same MDX pipeline, which means they also support JSX and imports.`]}),(0,f.jsx)(_,{code:`src/app/
├── docs/
│   └── getting-started.md  → /docs/getting-started
├── privacy.md              → /privacy
└── terms.md                → /terms`}),(0,f.jsx)(_,{code:`# Terms of Service

## 1. Acceptance of Terms

By using our service, you agree to these terms.

## 2. User Responsibilities

Users are responsible for their content and activity.

## 3. Termination

We reserve the right to terminate accounts that violate these terms.

---

*Last updated: January 2024*`,filename:`app/terms.md`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Both `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.mdx`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`.md`}),` are compiled through the same MDX pipeline with full JSX, import, and export support. There is no plain-markdown-only mode.`]})]}),(0,f.jsxs)(a.section,{id:`metadata-in-mdx`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Metadata in MDX`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Export `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`metadata`}),` from any MDX page to set page titles, descriptions, and Open Graph tags.`]}),(0,f.jsx)(_,{code:`---
---

# Blog Post

This is a blog post written in MDX with full metadata support.`,filename:`app/blog/post.mdx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Root layout metadata is injected into `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`index.html`}),` at build time. Nested layout titles update `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`document.title`}),` at runtime.`]})]}),(0,f.jsxs)(a.section,{id:`imports-in-mdx`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Imports in MDX`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`You can import components, utilities, and other files directly in MDX:`}),(0,f.jsx)(_,{code:`import { Button } from '@/components/Button'
import { BlogLayout } from '@/components/BlogLayout'
import { useTheme } from '@/hooks/useTheme'

# Interactive Page

<BlogLayout>
  <p>This page uses imported components!</p>
  <Button variant="primary">Click Me</Button>
</BlogLayout>`,filename:`app/interactive.mdx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`Auto-imports (`,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useState`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`Link`}),`, `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`getEnv`}),`, etc.) apply to MDX files the same as any other page.`]})]}),(0,f.jsxs)(a.section,{id:`extension-priority`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Extension Priority`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`When multiple files share the same base name in a folder, Bini.js uses this priority order:`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mb-4`,children:(0,f.jsx)(`code`,{className:`text-cyan-400 text-sm`,children:`.tsx > .jsx > .ts > .js > .mdx > .md`})}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`For example, if both `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.mdx`}),` exist in the same folder:`]}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-4 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.tsx`}),` will be used (higher priority)`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`page.mdx`}),` is ignored`]})]}),(0,f.jsx)(_,{code:`src/app/
├── about/
│   ├── page.tsx          ← Used (higher priority)
│   └── page.mdx          ← Ignored
├── blog/
│   ├── page.mdx          ← Used (higher priority than .md)
│   └── page.md           ← Ignored
└── contact.md            → /contact`})]}),(0,f.jsxs)(a.section,{id:`styling-mdx`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Styling MDX Content`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`CSS Modules, plain CSS imports, and Tailwind utility classes work directly in MDX files:`}),(0,f.jsx)(_,{code:`import styles from './About.module.css'
import { Button } from '@/components/Button'

# About Us

<div className={styles.container}>
  <p className="text-slate-600 dark:text-slate-300">
    This uses Tailwind classes and CSS Modules!
  </p>
  <Button>Learn More</Button>
</div>`,filename:`app/about.mdx`}),(0,f.jsx)(`div`,{className:`bg-slate-900/50 border border-slate-800 rounded-lg p-4 mt-4`,children:(0,f.jsxs)(`p`,{className:`text-slate-300 text-sm`,children:[(0,f.jsx)(`strong`,{className:`text-white`,children:`Note:`}),` Tailwind's Preflight reset strips default styling from headings and bold text. Wrap plain-markdown regions in a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`prose`}),` class from `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`@tailwindcss/typography`}),` if you want them to look styled by default.`]})})]}),(0,f.jsxs)(a.section,{id:`mdx-configuration`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`MDX Configuration`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`You can pass options directly to the bundled `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`@mdx-js/rollup`}),` plugin via the `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`biniroute()`}),` configuration:`]}),(0,f.jsx)(_,{code:`// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'

export default defineConfig({
  plugins: [
    react(),
    ...biniroute({
      mdx: {
        remarkPlugins: [/* add remark plugins here */],
        rehypePlugins: [/* add rehype plugins here */],
      },
    }),
  ],
})`,filename:`vite.config.ts`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This is useful for adding syntax highlighting, custom markdown transformations, or other content processing.`})]}),(0,f.jsxs)(a.section,{id:`complete-example`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Complete Example`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Here is a comprehensive example showing MDX and Markdown usage:`}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx                 ← Root layout
├── page.tsx                   → /
├── about.mdx                  → /about
├── blog/
│   ├── layout.tsx             ← Blog layout
│   ├── page.mdx               → /blog
│   ├── loading.tsx            ← Blog loading UI
│   ├── [slug].mdx             → /blog/:slug
│   └── _components/           ← Private folder
│       └── PostCard.tsx
├── docs/
│   ├── [[...slug]]/
│   │   └── page.md            → /docs (optional catch-all)
│   │                           → /docs/getting-started
│   └── _components/
│       └── Sidebar.tsx
└── contact.mdx                → /contact

# Example MDX with Imports and Metadata

// app/about.mdx
---
---

import { TeamMember } from '@/components/TeamMember'
import { useTheme } from '@/hooks/useTheme'

# About Our Company

We build amazing things with Bini.js.

<div className="grid grid-cols-2 gap-4">
  <TeamMember name="John" role="Developer" />
  <TeamMember name="Jane" role="Designer" />
</div>

## Our Values

- **Quality** — We ship polished code
- **Speed** — We move fast
- **Community** — We support our users`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/catch-all-routes`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Catch-All Routes`})]})]}),(0,f.jsxs)(n,{to:`/docs/load`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Loading UI`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{v as default};