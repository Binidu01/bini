import{y as e}from"./index-5I-g09_O.js";import{_ as t,f as n,h as r,i,l as a,m as o,n as s,o as c,r as l}from"./DocBlocks-BhakSF7I.js";var u=e(),d=[{id:`overview`,label:`Overview`},{id:`open-graph-overview`,label:`Open Graph Overview`},{id:`open-graph-fields`,label:`Open Graph Fields`},{id:`twitter-cards-overview`,label:`Twitter Cards Overview`},{id:`twitter-card-fields`,label:`Twitter Card Fields`},{id:`bini-ssg-injection`,label:`bini-ssg Injection`},{id:`complete-example`,label:`Complete Example`}];function f(){let e=t()===`js`?`jsx`:`tsx`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o,{id:`overview`,title:`Overview`,children:[(0,u.jsxs)(n,{children:[`Open Graph and Twitter Cards control how pages look when shared on Facebook, LinkedIn, Slack, and X. Define them in the `,(0,u.jsx)(s,{children:`metadata`}),` export on layouts and pages.`]}),(0,u.jsx)(l,{children:(0,u.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Open Graph:`}),` title, description, url, type, images, siteName, locale`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Twitter Cards:`}),` card type, title, description, creator, images`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Default image:`}),` replace `,(0,u.jsx)(s,{children:`public/og-image.png`}),` (1200×630 recommended)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`bini-ssg:`}),` injects tags via `,(0,u.jsx)(s,{children:`getMetadataForRoute`}),` during`,` `,(0,u.jsx)(s,{children:`vite build`})]})]})})]}),(0,u.jsxs)(o,{id:`open-graph-overview`,title:`Open Graph Overview`,children:[(0,u.jsx)(n,{children:`Open Graph tags control previews on Facebook, LinkedIn, and Slack.`}),(0,u.jsx)(i,{filename:`app/about/page.${e}`,tsCode:`export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team',
  openGraph: {
    title: 'About Us - My Bini.js App',
    description: 'Learn more about our company and team',
    url: 'https://myapp.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Us',
      },
    ],
    siteName: 'My Bini.js App',
    locale: 'en_US',
  },
}`,jsCode:`export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team',
  openGraph: {
    title: 'About Us - My Bini.js App',
    description: 'Learn more about our company and team',
    url: 'https://myapp.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Us',
      },
    ],
    siteName: 'My Bini.js App',
    locale: 'en_US',
  },
}`}),(0,u.jsxs)(l,{children:[`Put a default image at `,(0,u.jsx)(s,{children:`public/og-image.png`}),` and reference it from metadata. Replace it with your own 1200×630 asset.`]})]}),(0,u.jsxs)(o,{id:`open-graph-fields`,title:`Open Graph Fields`,children:[(0,u.jsx)(r,{headers:[`Field`,`Type`,`Injected as`],rows:[[`title`,`string`,`og:title`],[`description`,`string`,`og:description`],[`url`,`string`,`og:url`],[`type`,`string`,`og:type`],[`images`,`array`,`og:image (+ width/height/alt)`],[`siteName`,`string`,`og:site_name`],[`locale`,`string`,`og:locale`]]}),(0,u.jsx)(a,{className:`mt-6 mb-4`,children:`Image object fields`}),(0,u.jsx)(r,{headers:[`Field`,`Type`,`Notes`],rows:[[`url`,`string`,`Image URL`],[`width`,`number`,`1200 recommended`],[`height`,`number`,`630 recommended`],[`alt`,`string`,`Alt text`]]})]}),(0,u.jsxs)(o,{id:`twitter-cards-overview`,title:`Twitter Cards Overview`,children:[(0,u.jsxs)(n,{children:[`Twitter (X) cards control how links appear in the feed. Common types: `,(0,u.jsx)(s,{children:`summary`}),` and`,` `,(0,u.jsx)(s,{children:`summary_large_image`}),`.`]}),(0,u.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export const metadata = {
  title: 'Blog Post',
  description: 'A comprehensive guide to Bini.js',
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post - My Bini.js App',
    description: 'A comprehensive guide to Bini.js',
    creator: '@bini_js',
    images: ['/og-image.png'],
  },
}`,jsCode:`export const metadata = {
  title: 'Blog Post',
  description: 'A comprehensive guide to Bini.js',
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post - My Bini.js App',
    description: 'A comprehensive guide to Bini.js',
    creator: '@bini_js',
    images: ['/og-image.png'],
  },
}`})]}),(0,u.jsxs)(o,{id:`twitter-card-fields`,title:`Twitter Card Fields`,children:[(0,u.jsx)(r,{headers:[`Field`,`Type`,`Injected as`],rows:[[`card`,`string`,`twitter:card`],[`title`,`string`,`twitter:title`],[`description`,`string`,`twitter:description`],[`creator`,`string`,`twitter:creator`],[`images`,`array`,`twitter:image`]]}),(0,u.jsxs)(l,{children:[(0,u.jsx)(`p`,{className:`mb-2 font-semibold text-neutral-900 dark:text-neutral-100`,children:`Card types`}),(0,u.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(s,{children:`summary`}),` - small image`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(s,{children:`summary_large_image`}),` - large image (recommended)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(s,{children:`app`}),` - mobile app card`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(s,{children:`player`}),` - video / audio`]})]})]})]}),(0,u.jsxs)(o,{id:`bini-ssg-injection`,title:`bini-ssg Injection`,children:[(0,u.jsxs)(n,{children:[`During `,(0,u.jsx)(s,{children:`vite build`}),`, `,(0,u.jsx)(s,{children:`bini-ssg`}),` injects OG and Twitter tags into pre-rendered HTML. Existing matching tags are updated in place.`]}),(0,u.jsx)(r,{headers:[`Metadata`,`Injected tags`],rows:[[`openGraph.title`,`og:title`],[`openGraph.description`,`og:description`],[`openGraph.url`,`og:url`],[`openGraph.type`,`og:type`],[`openGraph.images`,`og:image, og:image:width, og:image:height, og:image:alt`],[`twitter.card`,`twitter:card`],[`twitter.creator`,`twitter:creator`],[`twitter.images`,`twitter:image`]]}),(0,u.jsxs)(l,{children:[`Injection is best-effort and does not fail the build. For dynamic routes like`,` `,(0,u.jsx)(s,{children:`/blog/:slug`}),`, metadata is keyed by the route pattern unless you resolve per-URL values yourself.`]})]}),(0,u.jsxs)(o,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsx)(n,{children:`Combined Open Graph and Twitter metadata for a blog post.`}),(0,u.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export const metadata = {
  title: 'Getting Started with Bini.js',
  description:
    'Learn how to build native cross-platform apps with Bini.js',
  openGraph: {
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    url: 'https://myapp.com/blog/getting-started',
    type: 'article',
    images: [
      {
        url: 'https://myapp.com/images/blog/og.png',
        width: 1200,
        height: 630,
        alt: 'Getting Started with Bini.js',
      },
    ],
    siteName: 'My Bini.js App',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    creator: '@bini_js',
    images: ['https://myapp.com/images/blog/og.png'],
  },
}`,jsCode:`export const metadata = {
  title: 'Getting Started with Bini.js',
  description:
    'Learn how to build native cross-platform apps with Bini.js',
  openGraph: {
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    url: 'https://myapp.com/blog/getting-started',
    type: 'article',
    images: [
      {
        url: 'https://myapp.com/images/blog/og.png',
        width: 1200,
        height: 630,
        alt: 'Getting Started with Bini.js',
      },
    ],
    siteName: 'My Bini.js App',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    creator: '@bini_js',
    images: ['https://myapp.com/images/blog/og.png'],
  },
}`}),(0,u.jsx)(l,{children:`Use images at least 1200×630 for consistent previews across platforms.`})]})]})}function p(){return(0,u.jsx)(c,{title:`Open Graph & Twitter Cards`,description:`Open Graph and Twitter Cards for social previews - injected by bini-ssg at build time.`,url:`https://bini.js.org/docs/og-twitter`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/og-twitter.tsx`,toc:d,prev:{to:`/docs/metadata`,title:`Metadata`},next:{to:`/docs/icons`,title:`Icons & Favicons`},children:(0,u.jsx)(f,{})})}export{p as default};