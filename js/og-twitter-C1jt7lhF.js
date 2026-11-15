import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,u as l,v as u}from"./DocBlocks-L2h6_38O.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`open-graph-overview`,label:`Open Graph Overview`},{id:`open-graph-fields`,label:`Open Graph Fields`},{id:`twitter-cards-overview`,label:`Twitter Cards Overview`},{id:`twitter-card-fields`,label:`Twitter Card Fields`},{id:`bini-ssg-injection`,label:`How It Works`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=u()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`Open Graph and Twitter Card tags control how pages look when shared on Facebook, LinkedIn, Slack, and X. Add them to the `,(0,d.jsx)(o,{children:`document`}),` export's `,(0,d.jsx)(o,{children:`head`}),` node tree on the root layout or on any page. The tags are serialized into the static HTML at build time and appear in both development and production.`]}),(0,d.jsx)(c,{children:(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Open Graph:`}),` title, description, url, type, images, site name, locale`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Twitter Cards:`}),` card type, title, description, creator, images`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Default image:`}),` place `,(0,d.jsx)(o,{children:`public/og-image.png`}),` (1200×630 recommended) and reference it from `,(0,d.jsx)(o,{children:`document.head`})]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Both environments:`}),` tags declared in `,(0,d.jsx)(o,{children:`document.head`}),` render in dev and are also injected into pre-rendered HTML by `,(0,d.jsx)(o,{children:`bini-ssg`}),` at build time`]})]})})]}),(0,d.jsxs)(i,{id:`open-graph-overview`,title:`Open Graph Overview`,children:[(0,d.jsx)(a,{children:`Open Graph tags control previews on Facebook, LinkedIn, and Slack.`}),(0,d.jsx)(s,{filename:`src/app/about/page.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>About Us</title>
      <meta name="description" content="Learn more about our company and team" />

      <meta property="og:title" content="About Us - My Bini.js App" />
      <meta property="og:description" content="Learn more about our company and team" />
      <meta property="og:url" content="https://myapp.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Bini.js App" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="About Us" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <title>About Us</title>
      <meta name="description" content="Learn more about our company and team" />

      <meta property="og:title" content="About Us - My Bini.js App" />
      <meta property="og:description" content="Learn more about our company and team" />
      <meta property="og:url" content="https://myapp.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Bini.js App" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="About Us" />
    </>
  ),
}`}),(0,d.jsxs)(c,{children:[(0,d.jsx)(o,{children:`document.head`}),` is a full JSX node tree. It is serialized into the static HTML. Attribute values and children must be static — dynamic values are dropped with a`,` `,(0,d.jsx)(o,{children:`BINI_R004`}),` warning.`]}),(0,d.jsxs)(c,{children:[`Put a default image at `,(0,d.jsx)(o,{children:`public/og-image.png`}),` and reference it from`,` `,(0,d.jsx)(o,{children:`document.head`}),`. Replace it with your own 1200×630 asset.`]})]}),(0,d.jsxs)(i,{id:`open-graph-fields`,title:`Open Graph Fields`,children:[(0,d.jsx)(r,{headers:[`Tag`,`Example`,`Purpose`],rows:[[`og:title`,`<meta property="og:title" content="..." />`,`Card title`],[`og:description`,`<meta property="og:description" content="..." />`,`Card description`],[`og:url`,`<meta property="og:url" content="https://..." />`,`Canonical URL`],[`og:type`,`<meta property="og:type" content="website" />`,`Content type`],[`og:image`,`<meta property="og:image" content="/og-image.png" />`,`Preview image URL`],[`og:image:width`,`<meta property="og:image:width" content="1200" />`,`1200 recommended`],[`og:image:height`,`<meta property="og:image:height" content="630" />`,`630 recommended`],[`og:image:alt`,`<meta property="og:image:alt" content="..." />`,`Alt text`],[`og:site_name`,`<meta property="og:site_name" content="My App" />`,`Site name`],[`og:locale`,`<meta property="og:locale" content="en_US" />`,`Locale`]]}),(0,d.jsx)(l,{className:`mt-6 mb-4`,children:`Image attributes`}),(0,d.jsx)(r,{headers:[`Attribute`,`Recommended`,`Notes`],rows:[[`og:image`,`—`,`Image URL`],[`og:image:width`,`1200`,`Pixel width`],[`og:image:height`,`630`,`Pixel height`],[`og:image:alt`,`—`,`Alt text`]]})]}),(0,d.jsxs)(i,{id:`twitter-cards-overview`,title:`Twitter Cards Overview`,children:[(0,d.jsxs)(a,{children:[`Twitter (X) cards control how links appear in the feed. The most common types are`,` `,(0,d.jsx)(o,{children:`summary`}),` and `,(0,d.jsx)(o,{children:`summary_large_image`}),`. Add the meta tags to `,(0,d.jsx)(o,{children:`document.head`}),` `,`in the page or root layout.`]}),(0,d.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>Blog Post</title>
      <meta name="description" content="A comprehensive guide to Bini.js" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog Post - My Bini.js App" />
      <meta name="twitter:description" content="A comprehensive guide to Bini.js" />
      <meta name="twitter:creator" content="@bini_js" />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <title>Blog Post</title>
      <meta name="description" content="A comprehensive guide to Bini.js" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog Post - My Bini.js App" />
      <meta name="twitter:description" content="A comprehensive guide to Bini.js" />
      <meta name="twitter:creator" content="@bini_js" />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  ),
}`})]}),(0,d.jsxs)(i,{id:`twitter-card-fields`,title:`Twitter Card Fields`,children:[(0,d.jsx)(r,{headers:[`Tag`,`Example`,`Purpose`],rows:[[`twitter:card`,`<meta name="twitter:card" content="summary_large_image" />`,`Card type`],[`twitter:title`,`<meta name="twitter:title" content="..." />`,`Card title`],[`twitter:description`,`<meta name="twitter:description" content="..." />`,`Card description`],[`twitter:creator`,`<meta name="twitter:creator" content="@handle" />`,`Author handle`],[`twitter:image`,`<meta name="twitter:image" content="/og-image.png" />`,`Preview image`]]}),(0,d.jsxs)(c,{children:[(0,d.jsx)(`p`,{className:`mb-2 font-semibold text-neutral-900 dark:text-neutral-100`,children:`Card types`}),(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(o,{children:`summary`}),` - small image`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(o,{children:`summary_large_image`}),` - large image (recommended)`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(o,{children:`app`}),` - mobile app card`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(o,{children:`player`}),` - video / audio`]})]})]})]}),(0,d.jsxs)(i,{id:`bini-ssg-injection`,title:`How It Works`,children:[(0,d.jsxs)(a,{children:[`The `,(0,d.jsx)(o,{children:`document`}),` export is statically extracted by bini-router and stripped from the client bundle. In development, the dev server inlines the head node tree into the rendered page. During `,(0,d.jsx)(o,{children:`vite build`}),`, `,(0,d.jsx)(o,{children:`bini-ssg`}),` serializes the head tags into each pre-rendered HTML file.`]}),(0,d.jsx)(r,{headers:[`Tag`,`Applied in dev`,`Applied at build`],rows:[[`document.head (title, meta, link, script)`,`Yes`,`Yes`],[`document.html / document.body attributes`,`Yes`,`Yes`]]}),(0,d.jsx)(c,{children:(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Nearest wins:`}),` the nearest `,(0,d.jsx)(o,{children:`document`}),` export (page first, then the closest layout) is used. Documents are not merged.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Static only:`}),` attribute values and children must be static. Dynamic values are dropped with a `,(0,d.jsx)(o,{children:`BINI_R004`}),` warning.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`JSON-LD:`}),` `,(0,d.jsx)(o,{children:`dangerouslySetInnerHTML={{ __html: <static value> }}`}),` is supported for JSON-LD scripts.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Dynamic routes:`}),` head tags declared in a page's `,(0,d.jsx)(o,{children:`document`}),` are applied per route pattern (for example `,(0,d.jsx)(o,{children:`/blog/:slug`}),`), not per concrete URL. To vary tags per URL, render `,(0,d.jsx)(o,{children:`<title>`}),` / `,(0,d.jsx)(o,{children:`<meta>`}),` from the page component (the dev server hoists them into `,(0,d.jsx)(o,{children:`<head>`}),` when no`,` `,(0,d.jsx)(o,{children:`document.head`}),` exists).`]})]})})]}),(0,d.jsxs)(i,{id:`complete-example`,title:`Complete Example`,children:[(0,d.jsx)(a,{children:`Combined Open Graph and Twitter metadata for a blog post.`}),(0,d.jsx)(s,{filename:`src/app/blog/[slug]/page.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>Getting Started with Bini.js</title>
      <meta
        name="description"
        content="Learn how to build native cross-platform apps with Bini.js"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Getting Started with Bini.js" />
      <meta
        property="og:description"
        content="Learn how to build native cross-platform apps with Bini.js"
      />
      <meta property="og:url" content="https://myapp.com/blog/getting-started" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="My Bini.js App" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://myapp.com/images/blog/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Getting Started with Bini.js" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Getting Started with Bini.js" />
      <meta
        name="twitter:description"
        content="Learn how to build native cross-platform apps with Bini.js"
      />
      <meta name="twitter:creator" content="@bini_js" />
      <meta name="twitter:image" content="https://myapp.com/images/blog/og.png" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <title>Getting Started with Bini.js</title>
      <meta
        name="description"
        content="Learn how to build native cross-platform apps with Bini.js"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Getting Started with Bini.js" />
      <meta
        property="og:description"
        content="Learn how to build native cross-platform apps with Bini.js"
      />
      <meta property="og:url" content="https://myapp.com/blog/getting-started" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="My Bini.js App" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://myapp.com/images/blog/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Getting Started with Bini.js" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Getting Started with Bini.js" />
      <meta
        name="twitter:description"
        content="Learn how to build native cross-platform apps with Bini.js"
      />
      <meta name="twitter:creator" content="@bini_js" />
      <meta name="twitter:image" content="https://myapp.com/images/blog/og.png" />
    </>
  ),
}`}),(0,d.jsxs)(c,{children:[`Use images at least 1200×630 for consistent previews across platforms. For dynamic routes such as `,(0,d.jsx)(o,{children:`/blog/:slug`}),`, the injected tags use the route pattern. To vary tags per URL, render `,(0,d.jsx)(o,{children:`<title>`}),` / `,(0,d.jsx)(o,{children:`<meta>`}),` from the page component instead.`]})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/metadata`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Metadata`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Export document.head for site-wide head tags and page-level SEO.`})]}),(0,d.jsxs)(t,{to:`/docs/icons`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Icons & Favicons`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Set icons and web manifests.`})]}),(0,d.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,d.jsxs)(t,{to:`/docs/dynamic-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match URL segments with dynamic parameters and catch-alls.`})]}),(0,d.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno, or build native apps in CI.`})]}),(0,d.jsxs)(t,{to:`/docs/installation`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Installation`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Review CLI flags and system requirements.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Open Graph & Twitter Cards`,description:`Open Graph and Twitter Card tags via document.head - serialized into static HTML at build time.`,url:`https://bini.js.org/docs/og-twitter`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/og-twitter.tsx`,toc:f,prev:{to:`/docs/metadata`,title:`Metadata`},next:{to:`/docs/icons`,title:`Icons & Favicons`},children:(0,d.jsx)(p,{})})}export{m as default};