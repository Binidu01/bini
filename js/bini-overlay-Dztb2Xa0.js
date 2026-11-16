import{_ as e,f as t,g as n,h as r,m as i,n as a,o,u as s}from"./DocBlocks-CgTYcQET.js";import{t as c}from"./PluginPage-CqK3SEL0.js";import{a as l}from"./index-D2AXdX0y.js";var u=l(),d=[{id:`overview`,label:`Overview`},{id:`requirements`,label:`Requirements`},{id:`install`,label:`Install`},{id:`quick-start`,label:`Quick Start`},{id:`options`,label:`Options`},{id:`badge`,label:`The Badge`},{id:`error-panel`,label:`The Error Panel`},{id:`reporting-errors`,label:`Reporting Errors`}],f=`https://github.com/Binidu01/bini-official/edit/main/src/app/plugins/bini-overlay/page.tsx`,p=[`npm`,`pnpm`,`yarn`,`bun`],m={npm:`npm install bini-overlay --save-dev`,pnpm:`pnpm add bini-overlay -D`,yarn:`yarn add bini-overlay -D`,bun:`bun add -D bini-overlay`},h=e=>p.map(t=>({id:t,label:t,command:e(t)}));function g(){return(0,u.jsxs)(c,{title:`bini-overlay`,badge:`Official`,description:`Development overlay for Bini.js: an animated status badge, route inspector, and full-screen error panel.`,url:`https://www.npmjs.com/package/bini-overlay`,editUrl:f,toc:d,prev:{to:`/plugins/bini-server`,title:`bini-server`},next:{to:`/plugins/bini-ssg`,title:`bini-ssg`},children:[(0,u.jsx)(r,{id:`overview`,title:`Overview`,children:(0,u.jsxs)(i,{children:[(0,u.jsx)(a,{children:`bini-overlay`}),` gives your Bini.js project a polished development experience by replacing Vite's default error screen. It adds a floating status badge, a route inspector, and a full-screen error panel with syntax-highlighted code frames.`]})}),(0,u.jsx)(r,{id:`requirements`,title:`Requirements`,children:(0,u.jsxs)(e,{children:[(0,u.jsxs)(`li`,{children:[`Node.js `,(0,u.jsxs)(a,{children:[`>=`,` 18.0.0`]})]}),(0,u.jsxs)(`li`,{children:[`Vite `,(0,u.jsxs)(a,{children:[`>=`,` 8.0.0`]})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(a,{children:`bini-router`}),` `,(0,u.jsxs)(a,{children:[`>=`,` 2.0.0`]})]})]})}),(0,u.jsx)(r,{id:`install`,title:`Install`,children:(0,u.jsx)(t,{tabs:h(e=>`$ ${m[e]}`)})}),(0,u.jsxs)(r,{id:`quick-start`,title:`Quick Start`,children:[(0,u.jsxs)(i,{children:[`Register the plugin in your Bini.js config. `,(0,u.jsx)(a,{children:`biniOverlay()`}),` returns an array of plugins, which Vite automatically flattens, so add it to your plugins array as-is.`]}),(0,u.jsx)(o,{filename:`vite.config.ts`,code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniOverlay } from 'bini-overlay'

export default defineConfig({
  plugins: [
    react(),
    biniOverlay(),
  ],
})`})]}),(0,u.jsxs)(r,{id:`options`,title:`Options`,children:[(0,u.jsxs)(i,{children:[`To hide the floating badge, set `,(0,u.jsx)(a,{children:`disableBadge`}),` to `,(0,u.jsx)(a,{children:`true`}),`:`]}),(0,u.jsx)(o,{filename:`vite.config.ts`,code:`import { defineConfig } from 'vite'
import { biniOverlay } from 'bini-overlay'

export default defineConfig({
  plugins: [
    biniOverlay({ disableBadge: true }),
  ],
})`})]}),(0,u.jsxs)(r,{id:`badge`,title:`The Badge`,children:[(0,u.jsx)(i,{children:`The badge is injected into the page so it never collides with your app's CSS. By default, it sits in the bottom-left corner.`}),(0,u.jsx)(n,{headers:[`State`,`Appearance`,`Behaviour`],rows:[[`Loading`,`Logo draws itself with an animation`,`Plays on page load and on each HMR update`],[`Idle`,`Filled gradient logo`,`Default state when there are no errors`],[`Error`,`Red pill showing 1 Issue / N Issues`,`Click the count to open the error panel`]]}),(0,u.jsx)(s,{children:`Menu & Preferences`}),(0,u.jsx)(i,{children:`Clicking the badge opens a menu showing the current route type (Static, Dynamic, or Not Found) and a link to the Route Info inspector.`}),(0,u.jsxs)(i,{children:[`The Preferences popover lets you change the Theme (System, Light, Dark), Position (4 corners), Size (Small, Medium, Large), and record a custom keyboard Shortcut (default`,` `,(0,u.jsx)(a,{children:`Alt+B`}),`) to toggle the badge's visibility.`]})]}),(0,u.jsxs)(r,{id:`error-panel`,title:`The Error Panel`,children:[(0,u.jsx)(i,{children:`When an error occurs, a full-screen panel opens automatically. It catches runtime errors, unhandled rejections, build errors, and errors reported by your error boundaries.`}),(0,u.jsx)(s,{children:`Code Frames & Stacks`}),(0,u.jsx)(i,{children:`The panel displays five lines of code around the error, with the failing line clearly marked. Call stacks are mapped back to your original source code.`}),(0,u.jsx)(i,{children:`Application frames are clickable and will open your editor at the exact line. Framework frames are collapsed by default to keep the panel clean.`})]}),(0,u.jsxs)(r,{id:`reporting-errors`,title:`Reporting Errors`,children:[(0,u.jsxs)(i,{children:[`Uncaught errors and unhandled rejections are captured automatically. To route errors from a React error boundary into the overlay, dispatch a `,(0,u.jsx)(a,{children:`__bini_error__`}),` event:`]}),(0,u.jsx)(o,{filename:`ErrorBoundary.tsx`,code:`componentDidCatch(error: Error, info: React.ErrorInfo) {
  window.dispatchEvent(
    new CustomEvent('__bini_error__', {
      detail: {
        name: error.name,
        message: error.message,
        stack: error.stack,
        componentStack: info.componentStack,
        type: 'runtime',
      },
    }),
  )
}`}),(0,u.jsxs)(i,{children:[`The overlay also dispatches a `,(0,u.jsx)(a,{children:`__bini_clear_errors__`}),` event on `,(0,u.jsx)(a,{children:`window`}),` after every successful HMR update, so your boundary can listen for it to reset itself:`]}),(0,u.jsx)(o,{filename:`ErrorBoundary.tsx`,code:`useEffect(() => {
  const reset = () => setHasError(false)
  window.addEventListener('__bini_clear_errors__', reset)
  return () => window.removeEventListener('__bini_clear_errors__', reset)
}, [])`})]})]})}export{g as default};