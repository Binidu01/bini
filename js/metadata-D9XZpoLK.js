import{y as e}from"./index-X2FbCJzf.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-BIKMlDXj.js";import{i as l,l as u}from"./DocVisuals-IeNNYK-c.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`what-is-metadata`,label:`What is Metadata?`},{id:`basic-metadata`,label:`Basic Metadata`},{id:`open-graph`,label:`Open Graph`},{id:`twitter-cards`,label:`Twitter Cards`},{id:`default-images`,label:`Default Images`},{id:`icons`,label:`Icons`},{id:`nested-metadata`,label:`Nested Metadata`},{id:`bini-ssg-injection`,label:`bini-ssg Injection`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=t()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(n,{children:[`Metadata describes your page to search engines, social platforms, and browsers. Export a`,` `,(0,d.jsx)(o,{children:`metadata`}),` object from any layout or page for titles, descriptions, Open Graph, Twitter cards, and icons.`]}),(0,d.jsxs)(n,{children:[(0,d.jsx)(o,{children:`bini-ssg`}),` reads route metadata via `,(0,d.jsx)(o,{children:`getMetadataForRoute`}),` and injects it into each pre-rendered page `,(0,d.jsx)(o,{children:`head`}),` during `,(0,d.jsx)(o,{children:`vite build`}),`.`]}),(0,d.jsx)(r,{headers:[`Feature`,`How bini-ssg uses it`],rows:[[`title, description, robots, canonical`,`Injected as title and meta tags`],[`icons`,`icon, shortcut, apple-touch-icon`],[`openGraph`,`og:title, og:type, og:description, og:url, og:image`],[`twitter`,`twitter:card, twitter:title, twitter:description, twitter:image`]]})]}),(0,d.jsxs)(a,{id:`what-is-metadata`,title:`What is Metadata?`,children:[(0,d.jsxs)(n,{children:[`Metadata controls how links look when shared on Twitter, Facebook, LinkedIn, and Slack. You author it in route and layout files. The router merges layout-level metadata before`,` `,(0,d.jsx)(o,{children:`bini-ssg`}),` sees it.`]}),(0,d.jsxs)(c,{children:[(0,d.jsx)(o,{children:`getMetadataForRoute`}),` returns the already-merged entry for a route. `,(0,d.jsx)(o,{children:`bini-ssg`}),` `,`does not invent metadata - it only injects what you export.`]})]}),(0,d.jsxs)(a,{id:`basic-metadata`,title:`Basic Metadata`,children:[(0,d.jsxs)(n,{children:[`Export `,(0,d.jsx)(o,{children:`metadata`}),` from the root layout or any nested layout or page.`]}),(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  title: 'My Bini.js App',
  description: 'Built with Bini.js - a native React framework',
  robots: 'index, follow',
  canonical: 'https://myapp.com',
  themeColor: '#0a0a0a',
  keywords: ['react', 'vite', 'framework', 'bini'],
}`,jsCode:`export const metadata = {
  title: 'My Bini.js App',
  description: 'Built with Bini.js - a native React framework',
  robots: 'index, follow',
  canonical: 'https://myapp.com',
  themeColor: '#0a0a0a',
  keywords: ['react', 'vite', 'framework', 'bini'],
}`}),(0,d.jsx)(r,{headers:[`Field`,`Description`],rows:[[`title`,`Document title`],[`description`,`Meta description`],[`robots`,`Crawler instructions`],[`canonical`,`Canonical URL`],[`themeColor`,`Browser UI color`],[`keywords`,`Optional keyword list`]]})]}),(0,d.jsxs)(a,{id:`open-graph`,title:`Open Graph`,children:[(0,d.jsx)(n,{children:`Open Graph tags control previews on Facebook, LinkedIn, and Slack.`}),(0,d.jsx)(i,{filename:`app/about/page.${e}`,tsCode:`export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company',
  openGraph: {
    title: 'About Us - My Bini.js App',
    description: 'Learn more about our company',
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
  description: 'Learn more about our company',
  openGraph: {
    title: 'About Us - My Bini.js App',
    description: 'Learn more about our company',
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
}`})]}),(0,d.jsxs)(a,{id:`twitter-cards`,title:`Twitter Cards`,children:[(0,d.jsx)(n,{children:`Twitter (X) card fields control how links appear in the feed.`}),(0,d.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export const metadata = {
  title: 'Blog Post',
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post - My Bini.js App',
    description: 'A comprehensive guide to Bini.js',
    creator: '@bini_js',
    images: ['/og-image.png'],
  },
  openGraph: {
    title: 'Blog Post',
    images: ['/og-image.png'],
  },
}`,jsCode:`export const metadata = {
  title: 'Blog Post',
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post - My Bini.js App',
    description: 'A comprehensive guide to Bini.js',
    creator: '@bini_js',
    images: ['/og-image.png'],
  },
  openGraph: {
    title: 'Blog Post',
    images: ['/og-image.png'],
  },
}`})]}),(0,d.jsxs)(a,{id:`default-images`,title:`Default Images`,children:[(0,d.jsxs)(n,{children:[`Put static assets in `,(0,d.jsx)(o,{children:`public/`}),`. Reference them by absolute path in metadata.`]}),(0,d.jsx)(l,{width:240,rows:[{n:`public`},{n:`favicon.ico`,d:1},{n:`apple-touch-icon.png`,d:1},{n:`og-image.png`,d:1,dot:!0},{n:`logo.png`,d:1},{n:`site.webmanifest`,d:1}]}),(0,d.jsxs)(c,{children:[`Recommended Open Graph size is 1200×630. No extra config - files in `,(0,d.jsx)(o,{children:`public/`}),` are served as-is.`]})]}),(0,d.jsx)(a,{id:`icons`,title:`Icons`,children:(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}`,jsCode:`export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}`})}),(0,d.jsxs)(a,{id:`nested-metadata`,title:`Nested Metadata`,children:[(0,d.jsx)(n,{children:`Layout and page metadata merge. Use a title template at the root so child pages can set a short title.`}),(0,d.jsx)(u,{fileWidth:260,rows:[{n:`app`},{n:`layout.${e}`,d:1,dot:!0},{n:`page.${e}`,d:1,url:`/`},{n:`blog`,d:1},{n:`layout.${e}`,d:2,dot:!0},{n:`page.${e}`,d:2,url:`/blog`},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,url:`/blog/:slug`,dot:!0}]}),(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
}`,jsCode:`export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
}`}),(0,d.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export const metadata = {
  title: 'Getting Started with Bini.js',
  // Result: "Getting Started with Bini.js | My App"
}`,jsCode:`export const metadata = {
  title: 'Getting Started with Bini.js',
  // Result: "Getting Started with Bini.js | My App"
}`})]}),(0,d.jsxs)(a,{id:`bini-ssg-injection`,title:`bini-ssg Injection`,children:[(0,d.jsxs)(n,{children:[`During `,(0,d.jsx)(o,{children:`vite build`}),`, `,(0,d.jsx)(o,{children:`bini-ssg`}),` merges metadata into static HTML.`]}),(0,d.jsx)(c,{children:(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`SEO fields:`}),` title, description, icons, Open Graph, Twitter - existing matching tags updated in place`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Head tree:`}),` element / text / raw nodes (raw for JSON-LD)`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Dynamic routes:`}),` metadata is keyed by the route pattern (e.g.`,` `,(0,d.jsx)(o,{children:`/blog/:slug`}),`), not each concrete URL`]})]})})]}),(0,d.jsx)(a,{id:`complete-example`,title:`Complete Example`,children:(0,d.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export const metadata = {
  title: 'How bini-ssg pre-renders routes',
  description:
    'A look at link crawling, shells, and metadata injection.',
  robots: 'index, follow',
  canonical: 'https://example.com/blog/how-bini-ssg-works',
  openGraph: {
    title: 'How bini-ssg pre-renders routes',
    type: 'article',
    images: ['https://example.com/og/how-bini-ssg-works.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@bini_js',
  },
}`,jsCode:`export const metadata = {
  title: 'How bini-ssg pre-renders routes',
  description:
    'A look at link crawling, shells, and metadata injection.',
  robots: 'index, follow',
  canonical: 'https://example.com/blog/how-bini-ssg-works',
  openGraph: {
    title: 'How bini-ssg pre-renders routes',
    type: 'article',
    images: ['https://example.com/og/how-bini-ssg-works.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@bini_js',
  },
}`})})]})}function m(){return(0,d.jsx)(s,{title:`Metadata`,description:`Export metadata from layouts and pages for SEO and social sharing. Consumed by bini-ssg at build time.`,url:`https://bini.js.org/docs/metadata`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/metadata.tsx`,toc:f,prev:{to:`/docs/notfound`,title:`Not Found (404)`},next:{to:`/docs/og-twitter`,title:`Open Graph & Twitter`},children:(0,d.jsx)(p,{})})}export{m as default};