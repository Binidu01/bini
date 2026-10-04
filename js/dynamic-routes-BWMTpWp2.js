import{y as e}from"./index-BUk1TYmX.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-DS9oaqDK.js";import{l}from"./DocVisuals-Buf8XWmF.js";var u=e(),d=[{id:`overview`,label:`Overview`},{id:`dynamic-segments`,label:`Dynamic Segments`},{id:`multiple-parameters`,label:`Multiple Parameters`},{id:`dynamic-layouts`,label:`Dynamic Segments in Layouts`},{id:`flat-file-dynamic`,label:`Flat File Dynamic Routes`},{id:`route-priority`,label:`Route Priority`},{id:`complete-example`,label:`Complete Example`}];function f(){let e=t()===`js`?`jsx`:`tsx`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{id:`overview`,title:`Overview`,children:[(0,u.jsxs)(n,{children:[`Dynamic routes use `,(0,u.jsx)(o,{children:`[param]`}),` syntax to match variable segments. Each folder or file named `,(0,u.jsx)(o,{children:`[param]`}),` creates a URL that accepts any value for that segment and provides it via `,(0,u.jsx)(o,{children:`useParams()`}),`.`]}),(0,u.jsx)(r,{headers:[`Pattern`,`Example URL`,`Creates URL?`],rows:[[`[slug]`,`/blog/hello-world`,`Yes - dynamic creates URL`],[`[id]`,`/users/123`,`Yes - dynamic creates URL`],[`[category]/[slug]`,`/blog/tech/hello-world`,`Yes - multiple dynamic creates URL`]]}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{children:`useParams()`}),` is auto-imported - no import needed. Param names must match`,` `,(0,u.jsx)(o,{children:`/^[a-zA-Z_][a-zA-Z0-9_]*$/`}),`.`]})]}),(0,u.jsxs)(a,{id:`dynamic-segments`,title:`Dynamic Segments`,children:[(0,u.jsxs)(n,{children:[`Wrap folder or file name in brackets `,(0,u.jsx)(o,{children:`[name]`}),`. Creates URL for any value.`]}),(0,u.jsx)(l,{badges:!0,fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`page.${e}`,d:3,dot:!0,url:`/blog/:slug`},{n:`products`,d:1},{n:`[id]`,d:2},{n:`page.${e}`,d:3,url:`/products/:id`},{n:`users`,d:1},{n:`[userId]`,d:2},{n:`page.${e}`,d:3,url:`/users/:userId`}]}),(0,u.jsx)(i,{filename:`app/blog/[slug]/page.${e}`,tsCode:`export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return <h1>Post: {slug}</h1>
}`,jsCode:`export default function BlogPost() {
  const { slug } = useParams()

  return <h1>Post: {slug}</h1>
}`}),(0,u.jsx)(i,{filename:`app/users/[id]/page.${e}`,tsCode:`export default function UserProfile() {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<{ name: string } | null>(null)

  useEffect(() => {
    fetchUser(id!).then(setUser)
  }, [id])

  if (!user) return null

  return <h1>{user.name}</h1>
}`,jsCode:`export default function UserProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser(id).then(setUser)
  }, [id])

  if (!user) return null

  return <h1>{user.name}</h1>
}`})]}),(0,u.jsxs)(a,{id:`multiple-parameters`,title:`Multiple Parameters`,children:[(0,u.jsxs)(n,{children:[`Multiple dynamic segments in one route. Each creates a URL part and becomes a property in`,` `,(0,u.jsx)(o,{children:`useParams()`}),`.`]}),(0,u.jsx)(l,{badges:!0,fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[category]`,d:2},{n:`[slug]`,d:3},{n:`page.${e}`,d:4,dot:!0,url:`/blog/:category/:slug`}]}),(0,u.jsx)(i,{filename:`app/blog/[category]/[slug]/page.${e}`,tsCode:`export default function BlogPost() {
  const { category, slug } = useParams<{
    category: string
    slug: string
  }>()

  return (
    <div>
      <p>Category: {category}</p>
      <h1>Post: {slug}</h1>
    </div>
  )
}`,jsCode:`export default function BlogPost() {
  const { category, slug } = useParams()

  return (
    <div>
      <p>Category: {category}</p>
      <h1>Post: {slug}</h1>
    </div>
  )
}`}),(0,u.jsx)(r,{headers:[`URL`,`params`,`Creates URL?`],rows:[[`/blog/tech/hello-world`,`{ category: "tech", slug: "hello-world" }`,`Yes`],[`/blog/lifestyle/travel`,`{ category: "lifestyle", slug: "travel" }`,`Yes`]]})]}),(0,u.jsxs)(a,{id:`dynamic-layouts`,title:`Dynamic Segments in Layouts`,children:[(0,u.jsxs)(n,{children:[`Layouts can access dynamic params via `,(0,u.jsx)(o,{children:`useParams()`}),`. The layout itself does not create a URL.`]}),(0,u.jsx)(l,{badges:!0,fileWidth:280,rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug]`,d:2},{n:`layout.${e}`,d:3,dot:!0,url:`-`,ok:!1},{n:`page.${e}`,d:3,url:`/blog/:slug`}]}),(0,u.jsx)(i,{filename:`app/blog/[slug]/layout.${e}`,tsCode:`export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <header>
        <h2>Post: {slug}</h2>
        <Link to="/blog">Back to blog</Link>
      </header>
      <main>{children}</main>
    </div>
  )
}`,jsCode:`export default function BlogLayout({ children }) {
  const { slug } = useParams()

  return (
    <div>
      <header>
        <h2>Post: {slug}</h2>
        <Link to="/blog">Back to blog</Link>
      </header>
      <main>{children}</main>
    </div>
  )
}`})]}),(0,u.jsxs)(a,{id:`flat-file-dynamic`,title:`Flat File Dynamic Routes`,children:[(0,u.jsx)(n,{children:`Dynamic routes as flat files without folders. Each file creates a URL directly.`}),(0,u.jsx)(l,{badges:!0,fileWidth:260,rows:[{n:`app`},{n:`blog`,d:1},{n:`[slug].${e}`,d:2,dot:!0,url:`/blog/:slug`},{n:`products`,d:1},{n:`[id].${e}`,d:2,url:`/products/:id`},{n:`users`,d:1},{n:`[userId].${e}`,d:2,url:`/users/:userId`}]}),(0,u.jsx)(i,{filename:`app/blog/[slug].${e}`,tsCode:`export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return <h1>Post: {slug}</h1>
}`,jsCode:`export default function BlogPost() {
  const { slug } = useParams()
  return <h1>Post: {slug}</h1>
}`})]}),(0,u.jsxs)(a,{id:`route-priority`,title:`Route Priority`,children:[(0,u.jsx)(n,{children:`Dynamic routes have lower priority than static routes. Static wins if both exist.`}),(0,u.jsx)(c,{children:(0,u.jsxs)(`ol`,{className:`list-decimal space-y-2 pl-5`,children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Static routes`}),` - `,(0,u.jsx)(o,{children:`/blog/featured`}),` - creates URL, highest priority`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Dynamic segments`}),` - `,(0,u.jsx)(o,{children:`[slug]`}),` → `,(0,u.jsx)(o,{children:`/blog/:slug`}),` - creates URL`]})]})}),(0,u.jsx)(l,{badges:!0,fileWidth:260,rows:[{n:`blog`},{n:`featured`,d:1},{n:`page.${e}`,d:2,dot:!0,url:`/blog/featured`},{n:`[slug]`,d:1},{n:`page.${e}`,d:2,url:`/blog/:slug`}]}),(0,u.jsx)(r,{headers:[`URL`,`Matched Route`,`Creates URL?`],rows:[[`/blog/featured`,`featured/page.${e} - static`,`Yes`],[`/blog/hello-world`,`[slug]/page.${e} - dynamic`,`Yes`]]})]}),(0,u.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsxs)(n,{children:[`Dynamic routes only - `,(0,u.jsx)(o,{children:`[param]`}),` patterns that create URLs.`]}),(0,u.jsx)(l,{badges:!0,fileWidth:300,rows:[{n:`app`},{n:`blog`,d:1},{n:`featured`,d:2},{n:`page.${e}`,d:3,url:`/blog/featured`},{n:`[slug]`,d:2},{n:`layout.${e}`,d:3,url:`-`,ok:!1},{n:`page.${e}`,d:3,dot:!0,url:`/blog/:slug`},{n:`[category]`,d:2},{n:`[slug]`,d:3},{n:`page.${e}`,d:4,url:`/blog/:category/:slug`},{n:`products`,d:1},{n:`page.${e}`,d:2,url:`/products`},{n:`[id].${e}`,d:2,url:`/products/:id`},{n:`users`,d:1},{n:`[userId]`,d:2},{n:`page.${e}`,d:3,url:`/users/:userId`},{n:`settings`,d:3},{n:`page.${e}`,d:4,url:`/users/:userId/settings`}]}),(0,u.jsx)(r,{headers:[`Pattern`,`Example URL`,`Creates URL?`],rows:[[`/blog/featured`,`/blog/featured`,`Yes - static`],[`/blog/:slug`,`/blog/hello-world`,`Yes - dynamic creates URL`],[`/blog/:category/:slug`,`/blog/tech/hello-world`,`Yes - multiple dynamic creates URL`],[`/products/:id`,`/products/123`,`Yes - flat file dynamic creates URL`],[`/users/:userId/settings`,`/users/john/settings`,`Yes - nested dynamic creates URL`]]})]})]})}function p(){return(0,u.jsx)(s,{title:`Dynamic Routes`,description:`Dynamic segments [param] for parameterized URLs like /blog/:slug and /users/:id.`,url:`https://bini.js.org/docs/dynamic-routes`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/dynamic-routes.tsx`,toc:d,prev:{to:`/docs/file-based-routing`,title:`File-Based Routing`},next:{to:`/docs/parallel-routes`,title:`Parallel Routes`},children:(0,u.jsx)(f,{})})}export{p as default};