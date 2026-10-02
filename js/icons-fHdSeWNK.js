import{y as e}from"./index-kkU3f4ap.js";import{_ as t,f as n,h as r,i,l as a,m as o,n as s,o as c,r as l}from"./DocBlocks-9fQggHSQ.js";import{i as u}from"./DocVisuals-C-Aoi6oH.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`icon-types`,label:`Icon Types`},{id:`favicons`,label:`Favicons`},{id:`apple-touch`,label:`Apple Touch Icons`},{id:`svg-vs-ico`,label:`SVG vs ICO`},{id:`manifest`,label:`Manifest & Icons`},{id:`default-images`,label:`Default Images`},{id:`bini-ssg-injection`,label:`bini-ssg Injection`},{id:`complete-example`,label:`Complete Example`}];function p(){let e=t()===`js`?`jsx`:`tsx`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(n,{children:[`Icons cover browser tabs, bookmarks, iOS home screen, and Android / PWA install. Define them with `,(0,d.jsx)(s,{children:`metadata.icons`}),`. `,(0,d.jsx)(s,{children:`bini-ssg`}),` injects route-specific icons with the correct `,(0,d.jsx)(s,{children:`type`}),` and `,(0,d.jsx)(s,{children:`sizes`}),`.`]}),(0,d.jsx)(l,{children:(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Favicons:`}),` `,(0,d.jsx)(s,{children:`icon`}),`, `,(0,d.jsx)(s,{children:`shortcut`}),` - SVG and ICO with sizes`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Apple Touch:`}),` `,(0,d.jsx)(s,{children:`apple`}),` - 180×180 for iOS home screen`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Manifest:`}),` `,(0,d.jsx)(s,{children:`manifest`}),` field + `,(0,d.jsx)(s,{children:`public/site.webmanifest`})]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Defaults:`}),` drop files in `,(0,d.jsx)(s,{children:`public/`}),` - no extra config required`]})]})})]}),(0,d.jsxs)(o,{id:`icon-types`,title:`Icon Types`,children:[(0,d.jsx)(r,{headers:[`Field`,`Injected as`,`Description`],rows:[[`icon`,`link rel=icon`,`Standard favicon with type and sizes`],[`shortcut`,`link rel=shortcut icon`,`Legacy shortcut icon`],[`apple`,`link rel=apple-touch-icon`,`iOS home screen - 180×180 recommended`],[`other`,`link`,`Other link tags e.g. mask-icon`]]}),(0,d.jsx)(a,{className:`mt-6 mb-4`,children:`Icon object fields`}),(0,d.jsx)(r,{headers:[`Field`,`Type`,`Description`],rows:[[`url`,`string`,`URL to icon file`],[`type`,`string`,`MIME type e.g. image/svg+xml`],[`sizes`,`string`,`Size e.g. 32x32, 180x180`],[`rel`,`string`,`Optional rel override`]]})]}),(0,d.jsxs)(o,{id:`favicons`,title:`Favicons`,children:[(0,d.jsx)(n,{children:`Prefer SVG for modern browsers, with PNG and ICO as fallbacks.`}),(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  title: 'My App',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}`,jsCode:`export const metadata = {
  title: 'My App',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}`}),(0,d.jsx)(r,{headers:[`File`,`Size`,`Purpose`],rows:[[`favicon.svg`,`any`,`Modern browsers - scalable`],[`favicon.ico`,`32×32`,`Legacy fallback`],[`favicon-32x32.png`,`32×32`,`Standard tab icon`],[`favicon-16x16.png`,`16×16`,`Small tab icon`]]})]}),(0,d.jsxs)(o,{id:`apple-touch`,title:`Apple Touch Icons`,children:[(0,d.jsx)(n,{children:`Used when a user adds your site to the iOS home screen. iOS applies rounded corners unless you supply a precomposed asset.`}),(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  icons: {
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}`,jsCode:`export const metadata = {
  icons: {
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}`}),(0,d.jsxs)(l,{children:[`Use a 180×180 PNG. Placing `,(0,d.jsx)(s,{children:`apple-touch-icon.png`}),` in `,(0,d.jsx)(s,{children:`public/`}),` also works for automatic detection.`]})]}),(0,d.jsxs)(o,{id:`svg-vs-ico`,title:`SVG vs ICO`,children:[(0,d.jsx)(l,{children:(0,d.jsxs)(`ul`,{className:`list-disc space-y-2 pl-5`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`SVG:`}),` vector, scalable, can use `,(0,d.jsx)(s,{children:`prefers-color-scheme`})]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`ICO:`}),` multi-size bitmap container for legacy browsers`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`PNG:`}),` widely supported middle ground`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{children:`Best practice:`}),` SVG + 32×32 PNG + ICO + 180×180 Apple`]})]})}),(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
}`,jsCode:`export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
}`})]}),(0,d.jsxs)(o,{id:`manifest`,title:`Manifest & Icons`,children:[(0,d.jsx)(n,{children:`The web app manifest supplies icons for Android home screen, splash, and PWA install.`}),(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
}`,jsCode:`export const metadata = {
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
}`}),(0,d.jsx)(i,{filename:`public/site.webmanifest`,code:`{
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
}`})]}),(0,d.jsxs)(o,{id:`default-images`,title:`Default Images`,children:[(0,d.jsxs)(n,{children:[`Put assets in `,(0,d.jsx)(s,{children:`public/`}),`. Replace the defaults with your own files.`]}),(0,d.jsx)(u,{width:300,rows:[{n:`public`},{n:`favicon.ico`,d:1},{n:`favicon.svg`,d:1,dot:!0},{n:`favicon-16x16.png`,d:1},{n:`favicon-32x32.png`,d:1},{n:`apple-touch-icon.png`,d:1,dot:!0},{n:`android-chrome-192x192.png`,d:1},{n:`android-chrome-512x512.png`,d:1},{n:`og-image.png`,d:1},{n:`site.webmanifest`,d:1,dot:!0}]}),(0,d.jsxs)(l,{children:[`For native packaging, `,(0,d.jsx)(s,{children:`logo.png`}),` in `,(0,d.jsx)(s,{children:`public/`}),` is often used as the source icon for platform icon generation.`]})]}),(0,d.jsxs)(o,{id:`bini-ssg-injection`,title:`bini-ssg Injection`,children:[(0,d.jsxs)(n,{children:[`During `,(0,d.jsx)(s,{children:`vite build`}),`, `,(0,d.jsx)(s,{children:`bini-ssg`}),` injects icons into pre-rendered HTML. Matching`,` `,(0,d.jsx)(s,{children:`rel`}),` tags are updated in place.`]}),(0,d.jsx)(r,{headers:[`Source`,`Injected as`],rows:[[`metadata.icons.icon`,`link rel=icon`],[`metadata.icons.apple`,`link rel=apple-touch-icon`],[`metadata.icons.shortcut`,`link rel=shortcut icon`],[`metadata.manifest`,`link rel=manifest`],[`public/ defaults`,`Preserved from dist/index.html`]]}),(0,d.jsx)(l,{children:`Injection is best-effort and does not fail the build. Nested layouts can set different icons per segment.`})]}),(0,d.jsx)(o,{id:`complete-example`,title:`Complete Example`,children:(0,d.jsx)(i,{filename:`app/layout.${e}`,tsCode:`export const metadata = {
  title: 'My Bini.js App',
  description: 'Built with Bini.js',
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    images: ['/og-image.png'],
  },
  twitter: {
    images: ['/og-image.png'],
  },
}`,jsCode:`export const metadata = {
  title: 'My Bini.js App',
  description: 'Built with Bini.js',
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    images: ['/og-image.png'],
  },
  twitter: {
    images: ['/og-image.png'],
  },
}`})})]})}function m(){return(0,d.jsx)(c,{title:`Icons & Favicons`,description:`Favicons, Apple touch icons, and web manifest icons - defined in metadata.icons and injected by bini-ssg.`,url:`https://bini.js.org/docs/icons`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/icons.tsx`,toc:f,prev:{to:`/docs/og-twitter`,title:`Open Graph & Twitter`},next:{to:`/docs/api-routes`,title:`API Routes Overview`},children:(0,d.jsx)(p,{})})}export{m as default};