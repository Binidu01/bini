import{y as e}from"./index-BylXCjGx.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-B-dO9H-m.js";import{l}from"./DocVisuals-BvcYqvgs.js";var u=e(),d=[{id:`what-is-mdx`,label:`What is MDX?`},{id:`mdx-pages`,label:`MDX Pages`},{id:`markdown-pages`,label:`Markdown Pages`},{id:`metadata-in-mdx`,label:`Metadata in MDX`},{id:`imports-in-mdx`,label:`Imports in MDX`},{id:`extension-priority`,label:`Extension Priority`},{id:`styling-mdx`,label:`Styling MDX Content`},{id:`complete-example`,label:`Complete Example`}];function f(){let e=t()===`js`?`jsx`:`tsx`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`what-is-mdx`,title:`What is MDX?`,children:[(0,u.jsxs)(n,{children:[`MDX extends Markdown to allow JSX components directly in Markdown files. Bini.js supports`,` `,(0,u.jsx)(o,{children:`.mdx`}),` and `,(0,u.jsx)(o,{children:`.md`}),` out of the box. `,(0,u.jsx)(o,{children:`@mdx-js/rollup`}),` is bundled internally - no separate install or Vite config required.`]}),(0,u.jsx)(r,{headers:[`Feature`,`Description`,`Creates URL?`],rows:[[`.mdx files`,`Markdown + JSX components`,`Yes - content route creates URL`],[`.md files`,`Plain markdown through MDX pipeline`,`Yes - content route creates URL`],[`No config`,`@mdx-js/rollup bundled`,`No - build setup`]]})]}),(0,u.jsxs)(a,{id:`mdx-pages`,title:`MDX Pages`,children:[(0,u.jsxs)(n,{children:[`Create an MDX page by adding `,(0,u.jsx)(o,{children:`.mdx`}),` anywhere in `,(0,u.jsx)(o,{children:`src/app/`}),`. The file compiles to a React component and creates a URL based on the folder/file name.`]}),(0,u.jsx)(l,{fileWidth:260,rows:[{n:`app`},{n:`about.mdx`,d:1,dot:!0,url:`/about`},{n:`blog`,d:1},{n:`page.mdx`,d:2,dot:!0,url:`/blog`},{n:`[slug].mdx`,d:2,dot:!0,url:`/blog/:slug`},{n:`contact.mdx`,d:1,dot:!0,url:`/contact`}]}),(0,u.jsx)(i,{filename:`app/about.mdx`,code:`export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company',
}

# About Us

Welcome to our company! This is a regular **Markdown** page with JSX support.

<Button variant="primary">Get Started</Button>

## Our Mission

We build amazing products with Bini.js.`})]}),(0,u.jsxs)(a,{id:`markdown-pages`,title:`Markdown Pages`,children:[(0,u.jsxs)(n,{children:[`Plain `,(0,u.jsx)(o,{children:`.md`}),` files go through the same MDX pipeline - they also support JSX and imports. There is no plain-markdown-only mode. Creates a URL like MDX.`]}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`docs`,d:1},{n:`getting-started.md`,d:2,dot:!0,url:`/docs/getting-started`},{n:`privacy.md`,d:1,dot:!0,url:`/privacy`},{n:`terms.md`,d:1,dot:!0,url:`/terms`}]}),(0,u.jsx)(i,{filename:`app/terms.md`,code:`# Terms of Service

## 1. Acceptance of Terms

By using our service, you agree to these terms.

## 2. User Responsibilities

Users are responsible for their content and activity.

## 3. Termination

We reserve the right to terminate accounts that violate these terms.

---

*Last updated: January 2024*`}),(0,u.jsxs)(c,{children:[`Both `,(0,u.jsx)(o,{children:`.mdx`}),` and `,(0,u.jsx)(o,{children:`.md`}),` are compiled through the same MDX pipeline with full JSX, import, and export support. Each creates a URL.`]})]}),(0,u.jsxs)(a,{id:`metadata-in-mdx`,title:`Metadata in MDX`,children:[(0,u.jsxs)(n,{children:[`Export `,(0,u.jsx)(o,{children:`metadata`}),` from any MDX page to set titles, descriptions, and Open Graph tags. Works the same as `,(0,u.jsx)(o,{children:`page.${e}`}),`.`]}),(0,u.jsx)(i,{filename:`app/blog/post.mdx`,code:`export const metadata = {
  title: 'Blog Post',
  description: 'A comprehensive guide to Bini.js',
  openGraph: {
    title: 'Blog Post',
    description: 'A comprehensive guide to Bini.js',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post',
    creator: '@bini_js',
  },
}

# Blog Post

This is a blog post written in MDX with full metadata support.`}),(0,u.jsxs)(n,{children:[`Root layout metadata is injected into `,(0,u.jsx)(o,{children:`index.html`}),` at build time. Nested layout titles update `,(0,u.jsx)(o,{children:`document.title`}),` at runtime.`]})]}),(0,u.jsxs)(a,{id:`imports-in-mdx`,title:`Imports in MDX`,children:[(0,u.jsxs)(n,{children:[`Import components, utilities, and hooks directly in MDX. Auto-imports like`,` `,(0,u.jsx)(o,{children:`useState`}),`, `,(0,u.jsx)(o,{children:`Link`}),`, and `,(0,u.jsx)(o,{children:`getEnv`}),` apply to MDX the same as pages.`]}),(0,u.jsx)(i,{filename:`app/interactive.mdx`,code:`import { Button } from '@/components/Button'
import { BlogLayout } from '@/components/BlogLayout'
import { useTheme } from '@/hooks/useTheme'

export const metadata = {
  title: 'Interactive Page',
}

# Interactive Page

<BlogLayout>
  <p>This page uses imported components!</p>
  <Button variant="primary">Click Me</Button>
</BlogLayout>`})]}),(0,u.jsxs)(a,{id:`extension-priority`,title:`Extension Priority`,children:[(0,u.jsx)(n,{children:`When multiple files share the same base name in a folder, priority order determines which creates the URL.`}),(0,u.jsx)(c,{children:(0,u.jsx)(`div`,{className:`font-mono text-sm`,children:`.tsx > .jsx > .ts > .js > .mdx > .md`})}),(0,u.jsx)(l,{fileWidth:260,rows:[{n:`app`},{n:`about`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/about`},{n:`page.mdx`,d:2},{n:`blog`,d:1},{n:`page.mdx`,d:2,dot:!0,url:`/blog`},{n:`page.md`,d:2},{n:`contact.md`,d:1,dot:!0,url:`/contact`}]}),(0,u.jsx)(r,{headers:[`Folder`,`Used File`,`Creates URL?`,`Ignored`],rows:[[`app/about`,`page.${e}`,`Yes - higher priority`,`page.mdx`],[`app/blog`,`page.mdx`,`Yes - higher than .md`,`page.md`],[`app/contact`,`contact.md`,`Yes - only file`,`-`]]})]}),(0,u.jsxs)(a,{id:`styling-mdx`,title:`Styling MDX Content`,children:[(0,u.jsx)(n,{children:`CSS Modules, plain CSS imports, and Tailwind utility classes work directly in MDX files.`}),(0,u.jsx)(i,{filename:`app/about.mdx`,code:`import styles from './About.module.css'
import { Button } from '@/components/Button'

# About Us

<div className={styles.container}>
  <p className="text-slate-600 dark:text-slate-300">
    This uses Tailwind classes and CSS Modules!
  </p>
  <Button>Learn More</Button>
</div>`}),(0,u.jsxs)(c,{children:[`Tailwind Preflight strips default heading/bold styling. Wrap plain markdown in a`,` `,(0,u.jsx)(o,{children:`prose`}),` class from `,(0,u.jsx)(o,{children:`@tailwindcss/typography`}),` if you want default typography styles.`]})]}),(0,u.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsx)(n,{children:`Comprehensive MDX/Markdown usage - each content file creates a URL.`}),(0,u.jsx)(l,{fileWidth:280,rows:[{n:`app`},{n:`layout.${e}`,d:1},{n:`page.${e}`,d:1,url:`/`},{n:`about.mdx`,d:1,dot:!0,url:`/about`},{n:`blog`,d:1},{n:`layout.${e}`,d:2},{n:`page.mdx`,d:2,dot:!0,url:`/blog`},{n:`loading.${e}`,d:2},{n:`[slug].mdx`,d:2,dot:!0,url:`/blog/:slug`},{n:`_components`,d:2},{n:`PostCard.${e}`,d:3},{n:`docs`,d:1},{n:`[[...slug]]`,d:2},{n:`page.md`,d:3,dot:!0,url:`/docs/*`},{n:`contact.mdx`,d:1,dot:!0,url:`/contact`}]}),(0,u.jsx)(i,{filename:`app/about.mdx`,code:`export const metadata = {
  title: 'About',
  description: 'Learn about our company',
}

import { TeamMember } from '@/components/TeamMember'

# About Our Company

We build amazing things with Bini.js.

<div className="grid grid-cols-2 gap-4">
  <TeamMember name="John" role="Developer" />
  <TeamMember name="Jane" role="Designer" />
</div>

## Our Values

- **Quality** - We ship polished code
- **Speed** - We move fast
- **Community** - We support our users`}),(0,u.jsx)(r,{headers:[`File Path`,`URL`,`Creates URL?`],rows:[[`app/page.${e}`,`/`,`Yes`],[`app/about.mdx`,`/about`,`Yes - MDX creates URL`],[`app/blog/page.mdx`,`/blog`,`Yes - MDX creates URL`],[`app/blog/[slug].mdx`,`/blog/:slug`,`Yes - dynamic MDX creates URL`],[`app/docs/[[...slug]]/page.md`,`/docs/*`,`Yes - MD catch-all creates URL`],[`app/_components/Header.${e}`,`-`,`No - private`],[`app/docs/_components/Sidebar.${e}`,`-`,`No - private`]]})]})]})}function p(){return(0,u.jsx)(s,{title:`MDX and Markdown`,description:`MDX and Markdown content routes with JSX support, bundled @mdx-js/rollup - no config needed.`,url:`https://bini.js.org/docs/mdx-markdown`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/mdx-markdown.tsx`,toc:d,prev:{to:`/docs/catch-all-routes`,title:`Catch-All Routes`},next:{to:`/docs/load`,title:`Loading UI`},children:(0,u.jsx)(f,{})})}export{p as default};