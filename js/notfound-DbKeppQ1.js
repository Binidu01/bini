import{c as e,i as t,n,t as r}from"./index-YahnzLIm.js";import{n as i,v as a}from"./Layout-Chw9F_6F.js";import{t as o}from"./arrow-left-D9r5B5M9.js";import{t as s}from"./arrow-right-5DyrDv1W.js";import{n as c,r as l,t as u}from"./TableOfContents-RbSlxYH4.js";var d=e(t(),1),f=r(),p=[{id:`global-404`,label:`Global 404 Page`},{id:`nested-404`,label:`Nested 404 Pages`},{id:`programmatic-404`,label:`Programmatic 404`},{id:`404-with-layout`,label:`404 with Layout`},{id:`styling-404`,label:`Styling 404 Pages`},{id:`static-export-404`,label:`Static Export & 404`}],m=`404 Page`,h=`https://bini.js.org/docs/notfound`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/notfound.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how to create custom 404 pages for unmatched routes in Bini.js.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(c,{pageUrl:h,pageTitle:m})}),(0,f.jsx)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,f.jsxs)(`p`,{className:`text-slate-300 mb-6`,children:[`Bini.js provides a built-in 404 page, but you can create custom `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` files to display your own UI when a route is not found.`]})}),(0,f.jsxs)(a.section,{id:`global-404`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Global 404 Page`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Create a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` file in the root of your `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`app`}),` directory to handle all unmatched routes globally.`]}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx
├── page.tsx
└── not-found.tsx         ← Global 404 page`}),(0,f.jsx)(_,{code:`// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
      <p className="text-slate-400 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-cyan-400 hover:underline">
        Return Home
      </Link>
    </div>
  )
}`,filename:`app/not-found.tsx`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mt-4`,children:[`This page will be shown for any unmatched route, such as `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/non-existent`}),` or `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`/blog/invalid-post`}),`.`]})]}),(0,f.jsxs)(a.section,{id:`nested-404`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Nested 404 Pages`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`You can create route-specific 404 pages by placing `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`not-found.tsx`}),` in subdirectories. The closest 404 page to the matched route will be used.`]}),(0,f.jsx)(_,{code:`src/app/
├── not-found.tsx             ← Global 404 (fallback)
├── blog/
│   ├── not-found.tsx         ← Blog-specific 404
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── admin/
    ├── not-found.tsx         ← Admin-specific 404
    └── page.tsx`}),(0,f.jsx)(_,{code:`// src/app/blog/not-found.tsx
export default function BlogNotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-3xl font-bold text-white mb-3">Post Not Found</h1>
      <p className="text-slate-400 mb-6">The blog post you're looking for doesn't exist.</p>
      <Link to="/blog" className="text-cyan-400 hover:underline">
        View all posts
      </Link>
    </div>
  )
}`,filename:`app/blog/not-found.tsx`}),(0,f.jsx)(v,{headers:[`URL`,`404 Page Used`],rows:[[`/blog/non-existent`,`app/blog/not-found.tsx`],[`/admin/invalid`,`app/admin/not-found.tsx`],[`/completely/wrong`,`app/not-found.tsx (global)`]]})]}),(0,f.jsxs)(a.section,{id:`programmatic-404`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Programmatic 404`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`You can manually trigger a 404 page from within your components when data is not found.`}),(0,f.jsx)(_,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  // Fetch post data
  const post = getPost(slug)
  
  // If post doesn't exist, show 404
  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-3">Post Not Found</h1>
        <p className="text-slate-400 mb-6">The post "{slug}" doesn't exist.</p>
        <Link to="/blog" className="text-cyan-400 hover:underline">
          View all posts
        </Link>
      </div>
    )
  }
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}`,filename:`app/blog/[slug]/page.tsx`})]}),(0,f.jsxs)(a.section,{id:`404-with-layout`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`404 with Layout`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`404 pages are automatically wrapped with the layout chain of the route they belong to.`}),(0,f.jsx)(_,{code:`src/app/
├── layout.tsx                 ← Root layout (wraps everything)
├── not-found.tsx              ← Global 404 (wrapped by root layout)
└── blog/
    ├── layout.tsx             ← Blog layout
    ├── not-found.tsx          ← Blog 404 (wrapped by root + blog layouts)
    └── page.tsx`}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This means your 404 pages automatically inherit headers, footers, and other shared UI from layouts.`}),(0,f.jsx)(_,{code:`// src/app/blog/layout.tsx
export default function BlogLayout() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Blog</h1>
      </header>
      <main><Outlet /></main>
    </div>
  )
}

// The blog/not-found.tsx will automatically have the "Blog" header!`,filename:`app/blog/layout.tsx`})]}),(0,f.jsxs)(a.section,{id:`styling-404`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Styling 404 Pages`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`You can create rich, styled 404 pages with images, animations, and interactive elements:`}),(0,f.jsx)(_,{code:`// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {/* Animated 404 */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-bold text-slate-800">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🔍</span>
        </div>
      </div>
      
      {/* Message */}
      <h2 className="text-3xl font-bold text-white mb-3">Page Not Found</h2>
      <p className="text-slate-400 max-w-md mb-8">
        The page you're looking for might have been removed, renamed, or doesn't exist.
      </p>
      
      {/* Actions */}
      <div className="flex gap-4">
        <Link 
          to="/" 
          className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors"
        >
          Go Home
        </Link>
        <button 
          onClick={() => window.history.back()} 
          className="px-6 py-3 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors"
        >
          Go Back
        </button>
      </div>
      
      {/* Search suggestion */}
      <p className="text-slate-500 text-sm mt-8">
        Looking for something specific? Try using the navigation menu above.
      </p>
    </div>
  )
}`,filename:`app/not-found.tsx`})]}),(0,f.jsxs)(a.section,{id:`static-export-404`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Static Export & 404`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`When using `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`npm run export`}),` for static hosting, Bini.js generates a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`404.html`}),` file:`]}),(0,f.jsx)(v,{headers:[`Situation`,`Generated 404.html`],rows:[[`not-found.tsx exists`,`Copy of index.html with your custom 404 page`],[`No not-found.tsx`,`Redirect script that preserves the URL and redirects to /`]]}),(0,f.jsx)(`p`,{className:`text-slate-300 mt-4`,children:`This ensures your SPA works correctly on static hosts like GitHub Pages, Netlify, and Vercel.`})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/error-boundaries`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Error Boundaries`})]})]}),(0,f.jsxs)(n,{to:`/docs/metadata`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Metadata`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};