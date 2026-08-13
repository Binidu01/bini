import{a as e,i as t,n,t as r}from"./index-BRu3C3lb.js";import{n as i,v as a}from"./Layout-B9n9CsLO.js";import{t as o}from"./arrow-left-L0hbJ7yr.js";import{t as s}from"./arrow-right-CElS-BBZ.js";import{t as c}from"./DocSidebar-B-RtJtz0.js";import{n as l,t as u}from"./TableOfContents-BdTAqMst.js";var d=e(t(),1),f=r(),p=[{id:`link-component`,label:`Link Component`},{id:`navlink-component`,label:`NavLink Component`},{id:`usenavigate-hook`,label:`useNavigate Hook`},{id:`useparams-hook`,label:`useParams Hook`},{id:`uselocation-hook`,label:`useLocation Hook`},{id:`usesearchparams-hook`,label:`useSearchParams Hook`},{id:`programmatic-navigation`,label:`Programmatic Navigation`},{id:`navigation-query-params`,label:`Navigation with Query Parameters`}],m=`Linking and Navigating`,h=`https://bini.js.org/docs/linking-and-navigating`,g=`https://github.com/Binidu01/bini-offical/edit/main/src/app/docs/linking-and-navigating.tsx`;function _({code:e,filename:t}){let[n,r]=d.useState(!1);return(0,f.jsxs)(`div`,{className:`relative group mb-6`,children:[t&&(0,f.jsx)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-slate-900 border border-slate-800 border-b-0 rounded-t-lg`,children:(0,f.jsx)(`span`,{className:`text-sm text-slate-300 font-mono`,children:t})}),(0,f.jsx)(`button`,{onClick:()=>{let t=e.replace(/\$ /g,``);navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:`absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors z-10 opacity-0 group-hover:opacity-100`,style:{top:t?`3rem`:`0.5rem`},children:n?(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-green-400`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}):(0,f.jsx)(`svg`,{className:`w-3.5 h-3.5 text-slate-500`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,f.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})})}),(0,f.jsx)(`div`,{className:`bg-[#0a0a0a] border border-slate-700 ${t?`rounded-t-none`:`rounded-lg`} overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500`,children:(0,f.jsx)(`pre`,{className:`p-4 min-w-max`,children:(0,f.jsx)(`code`,{className:`text-sm font-mono text-slate-200 whitespace-pre`,children:e})})})]})}function v({headers:e,rows:t}){return(0,f.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-slate-700 my-6`,children:(0,f.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,f.jsx)(`thead`,{className:`bg-slate-900 border-b border-slate-800`,children:(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`th`,{className:`text-left py-3 px-4 font-medium text-white`,children:e},t))})}),(0,f.jsx)(`tbody`,{className:`divide-y divide-slate-800`,children:t.map((e,t)=>(0,f.jsx)(`tr`,{children:e.map((e,t)=>(0,f.jsx)(`td`,{className:`py-3 px-4 text-slate-300 text-xs`,children:e},t))},t))})]})})}function y(){return(0,f.jsxs)(`div`,{className:`min-h-screen bg-black font-sans antialiased overflow-x-hidden`,children:[(0,f.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black`}),(0,f.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-200 bg-linear-to-b from-cyan-500/5 via-sky-500/3 to-transparent rounded-full blur-3xl`})]}),(0,f.jsx)(i,{}),(0,f.jsx)(`div`,{className:`relative pt-16 lg:pt-20`,children:(0,f.jsx)(`div`,{className:`max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 overflow-x-hidden`,children:(0,f.jsx)(c,{children:(0,f.jsxs)(`div`,{className:`flex gap-10 xl:gap-14`,children:[(0,f.jsxs)(`div`,{className:`max-w-4xl min-w-0 flex-1`,children:[(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`flex items-start justify-between gap-4 mb-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-2`,children:m}),(0,f.jsx)(`p`,{className:`text-slate-400 text-sm`,children:`Learn how navigation works in Bini.js and how to use the Link component and useNavigate hook.`})]}),(0,f.jsx)(`div`,{className:`shrink-0 pt-2 hidden sm:block`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})})]}),(0,f.jsx)(`div`,{className:`sm:hidden mb-8`,children:(0,f.jsx)(l,{pageUrl:h,pageTitle:m})}),(0,f.jsx)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:(0,f.jsx)(`p`,{className:`text-slate-300 mb-6`,children:`Bini.js provides built-in navigation components and hooks that enable fast, client-side transitions between routes without full page reloads.`})}),(0,f.jsxs)(a.section,{id:`link-component`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Link Component`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`<Link>`}),` component is the primary way to navigate between routes. It's auto-imported in all pages and layouts, so you can use it without any import statements.`]}),(0,f.jsx)(_,{code:`// src/app/page.tsx
export default function Home() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}`,filename:`app/page.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Link Props`}),(0,f.jsx)(v,{headers:[`Prop`,`Type`,`Description`],rows:[[`to`,`string`,`The destination route path`],[`replace`,`boolean`,`Replace the current entry in history instead of adding`],[`state`,`any`,`State to persist to the location`],[`className`,`string`,`CSS class for styling`],[`children`,`ReactNode`,`The content inside the link`]]})]}),(0,f.jsxs)(a.section,{id:`navlink-component`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`NavLink Component`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`<NavLink>`}),` is a special version of `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`<Link>`}),` that adds styling attributes when it matches the current route. Perfect for navigation menus.`]}),(0,f.jsx)(_,{code:`// src/app/components/Navigation.tsx
export default function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}
      >
        About
      </NavLink>
      <NavLink 
        to="/blog" 
        className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}
        end  // Only match exactly /blog, not /blog/*
      >
        Blog
      </NavLink>
    </nav>
  )
}`,filename:`app/components/Navigation.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`NavLink Props`}),(0,f.jsx)(v,{headers:[`Prop`,`Type`,`Description`],rows:[[`to`,`string`,`The destination route path`],[`className`,`function | string`,`Function receives { isActive, isPending } or string`],[`style`,`function | object`,`Function receives { isActive, isPending } or style object`],[`children`,`ReactNode | function`,`Content or render function`],[`end`,`boolean`,`Only match the exact path, not child routes`],[`caseSensitive`,`boolean`,`Match case-sensitively`]]})]}),(0,f.jsxs)(a.section,{id:`usenavigate-hook`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`useNavigate Hook`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useNavigate`}),` hook returns a function that lets you navigate programmatically. It's auto-imported in all pages and layouts.`]}),(0,f.jsx)(_,{code:`// src/app/login/page.tsx
export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Perform login logic...
    const success = await loginUser()
    
    if (success) {
      // Navigate to dashboard after successful login
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Login</button>
    </form>
  )
}`,filename:`app/login/page.tsx`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Navigate Options`}),(0,f.jsx)(v,{headers:[`Option`,`Type`,`Description`],rows:[[`replace`,`boolean`,`Replace the current entry in history`],[`state`,`any`,`State to persist to the location`]]}),(0,f.jsx)(_,{code:`// Navigate with options
navigate('/profile', { replace: true, state: { from: 'login' } })

// Go back
navigate(-1)

// Go forward
navigate(1)`})]}),(0,f.jsxs)(a.section,{id:`useparams-hook`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`useParams Hook`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useParams`}),` hook returns an object of key/value pairs of the dynamic route parameters from the current URL.`]}),(0,f.jsx)(_,{code:`// src/app/blog/[slug]/page.tsx
export default function BlogPost() {
  const { slug } = useParams()
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}

// URL: /blog/hello-world
// useParams() returns { slug: 'hello-world' }`,filename:`app/blog/[slug]/page.tsx`}),(0,f.jsx)(_,{code:`// src/app/shop/[...slug]/page.tsx
export default function ShopCategory() {
  const { slug } = useParams()
  // slug is an array: ['clothing', 'shirts']
  
  return (
    <div>
      <h1>Category: {slug.join(' / ')}</h1>
    </div>
  )
}`,filename:`app/shop/[...slug]/page.tsx`})]}),(0,f.jsxs)(a.section,{id:`uselocation-hook`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`useLocation Hook`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useLocation`}),` hook returns the current location object. Useful for accessing the current pathname, search params, and state.`]}),(0,f.jsx)(_,{code:`// src/app/components/Breadcrumbs.tsx
export default function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)

  return (
    <nav>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = \`/\${pathnames.slice(0, index + 1).join('/')}\`
        const isLast = index === pathnames.length - 1

        return (
          <span key={name}>
            {' / '}
            {isLast ? (
              <span>{name}</span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}`,filename:`app/components/Breadcrumbs.tsx`})]}),(0,f.jsxs)(a.section,{id:`usesearchparams-hook`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`useSearchParams Hook`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`The `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useSearchParams`}),` hook reads and updates the query string. It returns a `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`URLSearchParams`}),` object and a setter function.`]}),(0,f.jsx)(_,{code:`// src/app/shop/page.tsx
export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'
  const sort = searchParams.get('sort') || 'newest'

  const handleCategoryChange = (newCategory) => {
    setSearchParams({ category: newCategory, sort })
  }

  const handleSortChange = (newSort) => {
    setSearchParams({ category, sort: newSort })
  }

  return (
    <div>
      <h1>Shop</h1>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
      
      <button onClick={() => handleCategoryChange('electronics')}>
        Electronics
      </button>
      <button onClick={() => handleCategoryChange('clothing')}>
        Clothing
      </button>
    </div>
  )
}`,filename:`app/shop/page.tsx`})]}),(0,f.jsxs)(a.section,{id:`programmatic-navigation`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Programmatic Navigation`}),(0,f.jsx)(`p`,{className:`text-slate-300 mb-4`,children:`Common patterns for programmatic navigation in Bini.js:`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`After Form Submission`}),(0,f.jsx)(_,{code:`const navigate = useNavigate()

const handleSubmit = async (data) => {
  await saveData(data)
  navigate('/success')
}`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`Conditional Navigation`}),(0,f.jsx)(_,{code:`const navigate = useNavigate()

useEffect(() => {
  if (!user) {
    navigate('/login')
  }
}, [user])`}),(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-white mt-6 mb-3`,children:`With State`}),(0,f.jsx)(_,{code:`// Passing state
navigate('/checkout', { state: { cartItems } })

// Receiving state
const location = useLocation()
const { cartItems } = location.state || {}`})]}),(0,f.jsxs)(a.section,{id:`navigation-query-params`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Navigation with Query Parameters`}),(0,f.jsxs)(`p`,{className:`text-slate-300 mb-4`,children:[`Combine `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`Link`}),` and `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useSearchParams`}),` for powerful filtering and pagination:`]}),(0,f.jsx)(_,{code:`// src/app/products/page.tsx
export default function ProductsPage() {
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1')
  const filter = searchParams.get('filter') || ''

  return (
    <div>
      <h1>Products</h1>
      
      {/* Filter links */}
      <div>
        <Link to="/products?filter=featured">Featured</Link>
        <Link to="/products?filter=new">New Arrivals</Link>
        <Link to="/products?filter=sale">On Sale</Link>
      </div>
      
      {/* Pagination */}
      <div>
        <Link to={\`/products?page=\${page - 1}&filter=\${filter}\`}>
          Previous
        </Link>
        <span>Page {page}</span>
        <Link to={\`/products?page=\${page + 1}&filter=\${filter}\`}>
          Next
        </Link>
      </div>
    </div>
  )
}`,filename:`app/products/page.tsx`})]}),(0,f.jsxs)(a.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:`scroll-mt-24`,children:[(0,f.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2`,children:`Best Practices`}),(0,f.jsxs)(`ul`,{className:`space-y-2 text-slate-300 mb-6 list-disc list-inside`,children:[(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`<Link>`}),` for standard navigation links`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`<NavLink>`}),` for navigation menus that need active state styling`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useNavigate`}),` for programmatic navigation (form submissions, redirects)`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useParams`}),` to access dynamic route parameters`]}),(0,f.jsxs)(`li`,{children:[`Use `,(0,f.jsx)(`code`,{className:`text-cyan-400`,children:`useSearchParams`}),` for managing query strings and filters`]}),(0,f.jsx)(`li`,{children:`All navigation hooks and components are auto-imported — no need to write import statements`})]})]}),(0,f.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:`flex items-center justify-between pt-8 mt-8 border-t border-slate-800`,children:[(0,f.jsxs)(n,{to:`/docs/layouts-and-pages`,className:`group flex items-center gap-2 text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsx)(o,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Previous`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Layouts and Pages`})]})]}),(0,f.jsxs)(n,{to:`/docs/folder-based-routing`,className:`group flex items-center gap-2 text-right text-slate-400 hover:text-white transition-colors`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Next`}),(0,f.jsx)(`div`,{className:`text-sm font-medium`,children:`Folder-Based Routing`})]}),(0,f.jsx)(s,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`})]})]})]}),(0,f.jsx)(`aside`,{className:`hidden xl:block w-56 shrink-0`,children:(0,f.jsx)(u,{items:p,editUrl:g})})]})})})})]})}export{y as default};