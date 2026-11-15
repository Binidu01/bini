import{a as e,n as t}from"./index-DphG0dNL.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,u as l,v as u}from"./DocBlocks-L2h6_38O.js";import{i as d}from"./DocVisuals-BICpfG8q.js";var f=e(),p=[{id:`overview`,label:`Overview`},{id:`document-head`,label:`Using document.head`},{id:`icon-types`,label:`Icon Types`},{id:`favicons`,label:`Favicons`},{id:`apple-touch`,label:`Apple Touch Icons`},{id:`manifest`,label:`Manifest & Icons`},{id:`default-images`,label:`Default Images`},{id:`complete-example`,label:`Complete Example`}];function m(){let e=u()===`js`?`jsx`:`tsx`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,f.jsxs)(a,{children:[`Icons cover browser tabs, bookmarks, the iOS home screen, and Android / PWA install. Bini.js uses raw `,(0,f.jsx)(o,{children:`<link>`}),` tags inside `,(0,f.jsx)(o,{children:`document.head`}),` for all icon definitions.`]}),(0,f.jsx)(c,{children:(0,f.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`Favicons:`}),` `,(0,f.jsx)(o,{children:`<link rel="icon">`}),` - SVG and ICO with sizes`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`Apple Touch:`}),` `,(0,f.jsx)(o,{children:`<link rel="apple-touch-icon">`}),` - 180×180 for iOS home screen`]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`Manifest:`}),` `,(0,f.jsx)(o,{children:`<link rel="manifest">`}),` +`,` `,(0,f.jsx)(o,{children:`public/site.webmanifest`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`strong`,{children:`Defaults:`}),` drop files in `,(0,f.jsx)(o,{children:`public/`}),` - no extra config required`]})]})})]}),(0,f.jsxs)(i,{id:`document-head`,title:`Using document.head`,children:[(0,f.jsxs)(a,{children:[`In the root layout, place icon tags directly inside `,(0,f.jsx)(o,{children:`document.head`}),`. This is the pattern used by every Bini.js project. It applies in both development and production.`]}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </>
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}`,jsCode:`export const document = {
  head: (
    <>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </>
  ),
}

export default function RootLayout({ children }) {
  return <>{children}</>
}`}),(0,f.jsxs)(c,{children:[`Tags in `,(0,f.jsx)(o,{children:`document.head`}),` override any tags injected with the same `,(0,f.jsx)(o,{children:`rel`}),`.`]})]}),(0,f.jsxs)(i,{id:`icon-types`,title:`Icon Types`,children:[(0,f.jsx)(r,{headers:[`Tag`,`Purpose`,`Description`],rows:[[`link rel="icon"`,`Favicon`,`Standard favicon with type and sizes`],[`link rel="shortcut icon"`,`Legacy favicon`,`Legacy shortcut icon`],[`link rel="apple-touch-icon"`,`iOS home screen`,`180×180 recommended`],[`link rel="mask-icon"`,`Pinned tab`,`Safari pinned tab icon`]]}),(0,f.jsx)(l,{className:`mt-6 mb-4`,children:`Link tag attributes`}),(0,f.jsx)(r,{headers:[`Attribute`,`Type`,`Description`],rows:[[`href`,`string`,`URL to icon file`],[`type`,`string`,`MIME type e.g. image/svg+xml`],[`sizes`,`string`,`Size e.g. 32x32, 180x180`],[`rel`,`string`,`Relationship, e.g. icon or apple-touch-icon`]]})]}),(0,f.jsxs)(i,{id:`favicons`,title:`Favicons`,children:[(0,f.jsx)(a,{children:`Prefer SVG for modern browsers, with PNG and ICO as fallbacks.`}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </>
  ),
}`}),(0,f.jsx)(r,{headers:[`File`,`Size`,`Purpose`],rows:[[`favicon.svg`,`any`,`Modern browsers - scalable`],[`favicon.ico`,`32×32`,`Legacy fallback`],[`favicon-32x32.png`,`32×32`,`Standard tab icon`],[`favicon-16x16.png`,`16×16`,`Small tab icon`]]})]}),(0,f.jsxs)(i,{id:`apple-touch`,title:`Apple Touch Icons`,children:[(0,f.jsx)(a,{children:`Used when a user adds your site to the iOS home screen. iOS applies rounded corners unless you supply a precomposed asset.`}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
    </>
  ),
}`}),(0,f.jsxs)(c,{children:[`Use a 180×180 PNG. Placing `,(0,f.jsx)(o,{children:`apple-touch-icon.png`}),` in `,(0,f.jsx)(o,{children:`public/`}),` also works for automatic detection.`]})]}),(0,f.jsxs)(i,{id:`manifest`,title:`Manifest & Icons`,children:[(0,f.jsx)(a,{children:`The web app manifest supplies icons for Android home screen, splash, and PWA install.`}),(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#0a0a0a" />
    </>
  ),
}`,jsCode:`export const document = {
  head: (
    <>
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#0a0a0a" />
    </>
  ),
}`}),(0,f.jsx)(s,{filename:`public/site.webmanifest`,code:`{
  "name": "My Bini.js App",
  "short_name": "Bini",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#0a0a0a",
  "background_color": "#ffffff",
  "display": "standalone"
}`})]}),(0,f.jsxs)(i,{id:`default-images`,title:`Default Images`,children:[(0,f.jsxs)(a,{children:[`Put assets in `,(0,f.jsx)(o,{children:`public/`}),`. Replace the defaults with your own files.`]}),(0,f.jsx)(d,{width:300,rows:[{n:`public`},{n:`favicon.ico`,d:1},{n:`favicon.svg`,d:1,dot:!0},{n:`favicon-16x16.png`,d:1},{n:`favicon-32x32.png`,d:1},{n:`apple-touch-icon.png`,d:1,dot:!0},{n:`android-chrome-192x192.png`,d:1},{n:`android-chrome-512x512.png`,d:1},{n:`og-image.png`,d:1},{n:`site.webmanifest`,d:1,dot:!0}]}),(0,f.jsxs)(c,{children:[`For native packaging, `,(0,f.jsx)(o,{children:`logo.png`}),` in `,(0,f.jsx)(o,{children:`public/`}),` is often used as the source icon for platform icon generation.`]})]}),(0,f.jsx)(i,{id:`complete-example`,title:`Complete Example`,children:(0,f.jsx)(s,{filename:`src/app/layout.${e}`,tsCode:`export const document = {
  head: (
    <>
      <title>My Bini.js App</title>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#0a0a0a" />
    </>
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}`,jsCode:`export const document = {
  head: (
    <>
      <title>My Bini.js App</title>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#0a0a0a" />
    </>
  ),
}

export default function RootLayout({ children }) {
  return <>{children}</>
}`})}),(0,f.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,f.jsxs)(t,{to:`/docs/og-twitter`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Open Graph & Twitter`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Control social preview cards.`})]}),(0,f.jsxs)(t,{to:`/docs/metadata`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Metadata`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Export document.head for site-wide head tags and page-level SEO.`})]}),(0,f.jsxs)(t,{to:`/docs/layouts-and-pages`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Layouts and Pages`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Create your first pages and wrap them in shared layouts.`})]}),(0,f.jsxs)(t,{to:`/docs/dynamic-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic Routes`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Match URL segments with dynamic parameters and catch-alls.`})]}),(0,f.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno, or build native apps in CI.`})]}),(0,f.jsxs)(t,{to:`/docs/installation`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,f.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Installation`}),(0,f.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Review CLI flags and system requirements.`})]})]})]})}function h(){return(0,f.jsx)(n,{title:`Icons & Favicons`,description:`Favicons, Apple touch icons, and web manifest icons - defined in document.head.`,url:`https://bini.js.org/docs/icons`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/icons.tsx`,toc:p,prev:{to:`/docs/og-twitter`,title:`Open Graph & Twitter`},next:{to:`/docs/api-routes`,title:`API Routes Overview`},children:(0,f.jsx)(m,{})})}export{h as default};