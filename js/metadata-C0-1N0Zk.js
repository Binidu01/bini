import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-L2h6_38O.js";import{i as u,l as d}from"./DocVisuals-BICpfG8q.js";var f=e(),p=[{id:`overview`,label:`Overview`},{id:`document-head`,label:`Using document.head`},{id:`open-graph`,label:`Open Graph`},{id:`twitter-cards`,label:`Twitter Cards`},{id:`icons`,label:`Icons`},{id:`default-images`,label:`Default Images`},{id:`nested`,label:`Nested Layouts`},{id:`how-it-works`,label:`How It Works`},{id:`complete-example`,label:`Complete Example`}];function m(){let e=l()===`js`?`jsx`:`tsx`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,f.jsxs)(a,{children:[`Bini.js uses the `,(0,f.jsx)(o,{children:`document`}),` export for document-level configuration. Export a`,` `,(0,f.jsx)(o,{children:`document`}),` object containing a `,(0,f.jsx)(o,{children:`head`}),` node tree to configure your site's title, meta tags, scripts, and JSON-LD.`]}),(0,f.jsx)(r,{headers:[`Export`,`Best for`,`Where to use`],rows:[[`document`,`Raw head tags, scripts, JSON-LD`,`Root layout (layout.tsx)`]]}),(0,f.jsxs)(c,{children:[`The `,(0,f.jsx)(o,{children:`document`}),` export is statically extracted at build time and removed from the client bundle. It is applied during static rendering and injected into the static HTML.`]})]}),(0,f.jsxs)(i,{id:`document-head`,title:`Using document.head`,children:[(0,f.jsxs)(a,{children:[`In the root layout, export a `,(0,f.jsx)(o,{children:`document`}),` object with a `,(0,f.jsx)(o,{children:`head`}),` node tree. All standard head tags, JSON-LD scripts, and initialization scripts go here. This is the pattern used by every Bini.js project.`]}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My App',
}

export const document = {
  head: (
    <>
      <title>My App</title>
      <meta name="description" content="Built with Bini.js" />
      <meta name="theme-color" content="#00CFFF" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <meta property="og:title" content="My App" />
      <meta property="og:description" content="Built with Bini.js" />
      <meta property="og:image" content="/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_handle" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}`,jsCode:`const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My App',
}

export const document = {
  head: (
    <>
      <title>My App</title>
      <meta name="description" content="Built with Bini.js" />
      <meta name="theme-color" content="#00CFFF" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <meta property="og:title" content="My App" />
      <meta property="og:description" content="Built with Bini.js" />
      <meta property="og:image" content="/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_handle" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  ),
}

export default function RootLayout({ children }) {
  return <>{children}</>
}`}),(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{children:`document.head`}),` is a full JSX node tree. It is serialized into the static HTML. Attributes and children must be static, otherwise they are dropped.`]})]}),(0,f.jsxs)(i,{id:`open-graph`,title:`Open Graph`,children:[(0,f.jsx)(a,{children:`Open Graph tags control previews on Facebook, LinkedIn, and Slack.`}),(0,f.jsx)(s,{filename:`src/app/about/page.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>About Us</title>
      <meta property="og:title" content="About Us - My App" />
      <meta property="og:description" content="Learn more about our company" />
      <meta property="og:url" content="https://myapp.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My App" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <title>About Us</title>
      <meta property="og:title" content="About Us - My App" />
      <meta property="og:description" content="Learn more about our company" />
      <meta property="og:url" content="https://myapp.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My App" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  ),
}`})]}),(0,f.jsxs)(i,{id:`twitter-cards`,title:`Twitter Cards`,children:[(0,f.jsx)(a,{children:`Twitter (X) card fields control how links appear in the feed.`}),(0,f.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>Blog Post</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog Post" />
      <meta name="twitter:description" content="A comprehensive guide to Bini.js" />
      <meta name="twitter:creator" content="@your_handle" />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <title>Blog Post</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog Post" />
      <meta name="twitter:description" content="A comprehensive guide to Bini.js" />
      <meta name="twitter:creator" content="@your_handle" />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  ),
}`})]}),(0,f.jsxs)(i,{id:`icons`,title:`Icons`,children:[(0,f.jsxs)(a,{children:[`Add icon links directly to `,(0,f.jsx)(o,{children:`document.head`}),`.`]}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </>
  ),
}`})]}),(0,f.jsxs)(i,{id:`default-images`,title:`Default Images`,children:[(0,f.jsxs)(a,{children:[`Put static assets in `,(0,f.jsx)(o,{children:`public/`}),`. Reference them by absolute path in `,(0,f.jsx)(o,{children:`document.head`}),`.`]}),(0,f.jsx)(u,{width:240,rows:[{n:`public`},{n:`favicon.ico`,d:1},{n:`apple-touch-icon.png`,d:1},{n:`og-image.png`,d:1,dot:!0},{n:`logo.png`,d:1},{n:`site.webmanifest`,d:1}]}),(0,f.jsxs)(c,{children:[`Recommended Open Graph size is 1200×630. No extra config - files in `,(0,f.jsx)(o,{children:`public/`}),` are served as-is.`]})]}),(0,f.jsxs)(i,{id:`nested`,title:`Nested Layouts`,children:[(0,f.jsxs)(a,{children:[`For page-specific head tags, you can export `,(0,f.jsx)(o,{children:`document`}),` from inner layouts. The nearest document export wins (page first, then the closest layout). Documents are not merged.`]}),(0,f.jsx)(d,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`layout.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`,dot:!0}]}),(0,f.jsx)(s,{filename:`src/app/blog/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>Blog | My App</title>
      <meta name="description" content="Read the latest articles" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <title>Blog | My App</title>
      <meta name="description" content="Read the latest articles" />
    </>
  ),
}`})]}),(0,f.jsxs)(i,{id:`how-it-works`,title:`How It Works`,children:[(0,f.jsxs)(a,{children:[`During `,(0,f.jsx)(o,{children:`vite build`}),`, the `,(0,f.jsx)(o,{children:`document`}),` export is serialized into the static HTML.`]}),(0,f.jsx)(c,{children:(0,f.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`document.head:`}),` full node tree serialized into the page's head.`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`Nested layouts:`}),` the nearest document export is used, not merged.`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`Dynamic routes:`}),` head tags are applied per manifest entry, not per concrete URL. Render dynamic tags from your page component if needed.`]})]})})]}),(0,f.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,f.jsxs)(a,{children:[`The root layout uses `,(0,f.jsx)(o,{children:`document.head`}),` for the site-wide head. Inner pages can override it with a their own `,(0,f.jsx)(o,{children:`document`}),` export.`]}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My App',
}

export const document = {
  head: (
    <>
      <title>My App</title>
      <meta name="description" content="Built with Bini.js" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}`,jsCode:`const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My App',
}

export const document = {
  head: (
    <>
      <title>My App</title>
      <meta name="description" content="Built with Bini.js" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  ),
}

export default function RootLayout({ children }) {
  return <>{children}</>
}`}),(0,f.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>Blog Post</title>
      <meta name="description" content="A comprehensive guide" />
      <meta property="og:title" content="Blog Post" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_handle" />
    </>
  ),
}

export default function BlogPost() {
  return <h1>Blog Post</h1>
}`,jsCode:`export const document = {
  head: (
    <>
      <title>Blog Post</title>
      <meta name="description" content="A comprehensive guide" />
      <meta property="og:title" content="Blog Post" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_handle" />
    </>
  ),
}

export default function BlogPost() {
  return <h1>Blog Post</h1>
}`})]}),(0,f.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,f.jsxs)(t,{to:`/docs/og-twitter`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Open Graph & Twitter`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Control social preview cards.`})]}),(0,f.jsxs)(t,{to:`/docs/icons`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Icons & Favicons`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Set icons and web manifests.`})]}),(0,f.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,f.jsxs)(t,{to:`/docs/dynamic-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic Routes`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match URL segments with dynamic parameters and catch-alls.`})]}),(0,f.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno, or build native apps in CI.`})]}),(0,f.jsxs)(t,{to:`/docs/installation`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Installation`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Review CLI flags and system requirements.`})]})]})]})}function h(){return(0,f.jsx)(n,{title:`Metadata`,description:`Export document.head for site-wide head tags and page-level SEO.`,url:`https://bini.js.org/docs/metadata`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/metadata.tsx`,toc:p,prev:{to:`/docs/accessing-route-data`,title:`Accessing Route Data`},next:{to:`/docs/og-twitter`,title:`Open Graph & Twitter`},children:(0,f.jsx)(m,{})})}export{h as default};