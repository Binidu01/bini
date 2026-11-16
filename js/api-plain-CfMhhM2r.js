import{a as e,n as t}from"./index-D2AXdX0y.js";import{c as n,g as r,h as i,m as a,n as o,o as s,r as c,v as l}from"./DocBlocks-CgTYcQET.js";import{l as u}from"./DocVisuals-B7hV1VEN.js";var d=e(),f=[{id:`overview`,label:`Overview`},{id:`basic-handler`,label:`Basic Handler`},{id:`route-mapping`,label:`Route Mapping`},{id:`request-context`,label:`Request Context`},{id:`handling-methods`,label:`Handling HTTP Methods`},{id:`per-method-exports`,label:`Per-Method Exports`},{id:`reading-request`,label:`Reading Request Data`},{id:`sending-responses`,label:`Sending Responses`},{id:`dynamic-routes`,label:`Dynamic Routes`},{id:`catch-all`,label:`Catch-all Routes`},{id:`environment-variables`,label:`Environment Variables`},{id:`error-handling`,label:`Error Handling`},{id:`when-to-use`,label:`When to Use Plain Handlers`}];function p(){let e=l()===`js`?`js`:`ts`;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{id:`overview`,title:`Overview`,children:[(0,d.jsxs)(a,{children:[`Plain function handlers are the simplest way to create API routes. Export a function from a file in `,(0,d.jsx)(o,{children:`src/app/api/`}),` and it becomes an endpoint at `,(0,d.jsx)(o,{children:`/api/*`}),`. Ideal for single endpoints that do not need Hono middleware or nested routing.`]}),(0,d.jsxs)(c,{children:[(0,d.jsx)(`strong`,{children:`File-based routing:`}),` `,(0,d.jsx)(o,{children:`src/app/api/hello.ts`}),` is served at`,` `,(0,d.jsx)(o,{children:`/api/hello`}),`. There is no bare `,(0,d.jsx)(o,{children:`/api`}),` root route.`]})]}),(0,d.jsxs)(i,{id:`basic-handler`,title:`Basic Handler`,children:[(0,d.jsxs)(a,{children:[`Export a default function that receives a `,(0,d.jsx)(o,{children:`Request`}),` and a context object. The file path sets the route - the function name does not matter.`]}),(0,d.jsx)(s,{filename:`src/app/api/hello.${e}`,tsCode:`export default function handler(request: Request) {
  return Response.json({ message: 'hello', method: request.method })
}`,jsCode:`export default function handler(request) {
  return Response.json({ message: 'hello', method: request.method })
}`}),(0,d.jsxs)(a,{children:[`This creates `,(0,d.jsx)(o,{children:`/api/hello`}),` and responds to all HTTP methods unless you branch on`,` `,(0,d.jsx)(o,{children:`request.method`}),`.`]})]}),(0,d.jsxs)(i,{id:`route-mapping`,title:`Route Mapping`,children:[(0,d.jsx)(a,{children:`File structure maps directly to API paths:`}),(0,d.jsx)(u,{fileWidth:260,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,url:`/api/hello`,dot:!0},{n:`users.${e}`,d:2,fn:!0,url:`/api/users`},{n:`posts`,d:2},{n:`index.${e}`,d:3,fn:!0,url:`/api/posts`},{n:`[id].${e}`,d:3,fn:!0,url:`/api/posts/:id`},{n:`[...catch].${e}`,d:2,fn:!0,url:`/api/*`}]}),(0,d.jsx)(r,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.${e}`,`/api/hello`],[`src/app/api/users.${e}`,`/api/users`],[`src/app/api/posts/index.${e}`,`/api/posts`],[`src/app/api/posts/[id].${e}`,`/api/posts/:id`],[`src/app/api/[...catch].${e}`,`/api/*`]]})]}),(0,d.jsxs)(i,{id:`request-context`,title:`Request Context`,children:[(0,d.jsx)(a,{children:`Every handler receives a second argument with the route context. Use it for path params, query parameters, and runtime env bindings.`}),(0,d.jsx)(r,{headers:[`Field`,`Type`,`Description`],rows:[[`params`,`object`,`Dynamic route params (e.g. { id: "123" })`],[`searchParams`,`URLSearchParams`,`Query string parameters`],[`env`,`any`,`Runtime env bindings (or process.env on Node)`],[`waitUntil?`,`function`,`Extends the request lifetime for background work`]]})]}),(0,d.jsxs)(i,{id:`handling-methods`,title:`Handling HTTP Methods`,children:[(0,d.jsxs)(a,{children:[`Branch on `,(0,d.jsx)(o,{children:`request.method`}),` for different verbs, or export per-method handlers (`,(0,d.jsx)(o,{children:`GET`}),`, `,(0,d.jsx)(o,{children:`POST`}),`, etc.) instead of a default function.`]}),(0,d.jsx)(s,{filename:`src/app/api/posts.${e}`,tsCode:`export default function handler(request: Request) {
  if (request.method === 'GET') {
    return Response.json({ posts: [] })
  }
  if (request.method === 'POST') {
    return Response.json({ message: 'Post created' }, { status: 201 })
  }
  if (request.method === 'PUT') {
    return Response.json({ message: 'Post updated' })
  }
  if (request.method === 'DELETE') {
    return Response.json({ message: 'Post deleted' })
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,jsCode:`export default function handler(request) {
  if (request.method === 'GET') {
    return Response.json({ posts: [] })
  }
  if (request.method === 'POST') {
    return Response.json({ message: 'Post created' }, { status: 201 })
  }
  if (request.method === 'PUT') {
    return Response.json({ message: 'Post updated' })
  }
  if (request.method === 'DELETE') {
    return Response.json({ message: 'Post deleted' })
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`}),(0,d.jsx)(r,{headers:[`Method`,`Typical Use`],rows:[[`GET`,`Retrieve data`],[`POST`,`Create new data`],[`PUT`,`Replace existing data`],[`PATCH`,`Partially update data`],[`DELETE`,`Remove data`]]})]}),(0,d.jsxs)(i,{id:`per-method-exports`,title:`Per-Method Exports`,children:[(0,d.jsxs)(a,{children:[`Instead of one default function that branches on `,(0,d.jsx)(o,{children:`request.method`}),`, export a separate function for each HTTP verb. Each one is a plain function that receives the same`,` `,(0,d.jsx)(o,{children:`Request`}),` and context object, and returns a `,(0,d.jsx)(o,{children:`Response`}),`.`]}),(0,d.jsx)(s,{filename:`src/app/api/posts.${e}`,tsCode:`export function GET(request: Request) {
  return Response.json({ posts: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  return Response.json({ message: 'Post created', body }, { status: 201 })
}

export function DELETE(request: Request) {
  return Response.json({ message: 'Post deleted' })
}`,jsCode:`export function GET(request) {
  return Response.json({ posts: [] })
}

export async function POST(request) {
  const body = await request.json()
  return Response.json({ message: 'Post created', body }, { status: 201 })
}

export function DELETE(request) {
  return Response.json({ message: 'Post deleted' })
}`}),(0,d.jsx)(a,{children:`The context object is passed as the second argument, exactly like a default function:`}),(0,d.jsx)(s,{filename:`src/app/api/posts/[id].${e}`,tsCode:`export function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json({ id: params.id })
}`,jsCode:`export function GET(request, { params }) {
  return Response.json({ id: params.id })
}`}),(0,d.jsx)(r,{headers:[`Behavior`,`Details`],rows:[[`Supported exports`,`GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS`],[`Unhandled methods`,`Return 405 with an Allow header`],[`HEAD fallback`,`Falls back to GET when no HEAD export exists`],[`Precedence`,`Method exports take precedence over a default export`]]})]}),(0,d.jsxs)(i,{id:`reading-request`,title:`Reading Request Data`,children:[(0,d.jsx)(a,{children:`Body, headers, and query params:`}),(0,d.jsx)(s,{filename:`src/app/api/echo.${e}`,tsCode:`export default async function handler(request: Request) {
  const body = await request.json().catch(() => null)
  const userAgent = request.headers.get('User-Agent')
  const url = new URL(request.url)
  const page = url.searchParams.get('page')

  return Response.json({
    method: request.method,
    body,
    headers: { userAgent },
    query: { page },
  })
}`,jsCode:`export default async function handler(request) {
  const body = await request.json().catch(() => null)
  const userAgent = request.headers.get('User-Agent')
  const url = new URL(request.url)
  const page = url.searchParams.get('page')

  return Response.json({
    method: request.method,
    body,
    headers: { userAgent },
    query: { page },
  })
}`})]}),(0,d.jsxs)(i,{id:`sending-responses`,title:`Sending Responses`,children:[(0,d.jsx)(a,{children:`Common response patterns:`}),(0,d.jsx)(s,{filename:`src/app/api/responses.${e}`,tsCode:`export default function handler(request: Request) {
  // JSON
  return Response.json({ message: 'Hello JSON' })

  // Plain text
  // return new Response('Hello Text', {
  //   headers: { 'Content-Type': 'text/plain' },
  // })

  // Custom status
  // return Response.json({ message: 'Created' }, { status: 201 })

  // Redirect
  // return Response.redirect('https://example.com', 302)
}`,jsCode:`export default function handler(request) {
  // JSON
  return Response.json({ message: 'Hello JSON' })

  // Plain text
  // return new Response('Hello Text', {
  //   headers: { 'Content-Type': 'text/plain' },
  // })

  // Custom status
  // return Response.json({ message: 'Created' }, { status: 201 })

  // Redirect
  // return Response.redirect('https://example.com', 302)
}`})]}),(0,d.jsxs)(i,{id:`dynamic-routes`,title:`Dynamic Routes`,children:[(0,d.jsxs)(a,{children:[`Path params are available in the context object, not a header. Use`,` `,(0,d.jsx)(o,{children:`{ params }`}),` as the second argument:`]}),(0,d.jsx)(s,{filename:`src/app/api/posts/[id].${e}`,tsCode:`export default function handler(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (request.method === 'GET') {
    return Response.json({ id: params.id, title: \`Post \${params.id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,jsCode:`export default function handler(request, { params }) {
  if (request.method === 'GET') {
    return Response.json({ id: params.id, title: \`Post \${params.id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`})]}),(0,d.jsxs)(i,{id:`catch-all`,title:`Catch-all Routes`,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(o,{children:`[...catch]`}),` handles unmatched `,(0,d.jsx)(o,{children:`/api/*`}),` paths. Catch-all values are available under `,(0,d.jsx)(o,{children:`params['*']`}),` and under the folder name.`]}),(0,d.jsx)(s,{filename:`src/app/api/[...catch].${e}`,tsCode:`export default function handler(
  request: Request,
  { params }: { params: { '*': string } }
) {
  console.warn('Unmatched API route', {
    method: request.method,
    path: params['*'],
  })

  return Response.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
    },
    { status: 404, headers: { 'Cache-Control': 'no-store' } }
  )
}`,jsCode:`export default function handler(request, { params }) {
  console.warn('Unmatched API route', {
    method: request.method,
    path: params['*'],
  })

  return Response.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
    },
    { status: 404, headers: { 'Cache-Control': 'no-store' } }
  )
}`})]}),(0,d.jsxs)(i,{id:`environment-variables`,title:`Environment Variables`,children:[(0,d.jsxs)(a,{children:[`Access environment variables directly from the `,(0,d.jsx)(o,{children:`env`}),` object in the request context. This ensures your code works across all deployment platforms.`]}),(0,d.jsx)(s,{filename:`src/app/api/config.${e}`,tsCode:`export default function handler(
  request: Request,
  { env }: { env: Record<string, string | undefined> }
) {
  const apiKey = env.MY_API_KEY
  const debug = env.DEBUG_MODE ?? 'false'
  const appName = env.APP_NAME ?? 'Bini.js'

  if (!apiKey) {
    return Response.json({ error: 'Missing MY_API_KEY' }, { status: 500 })
  }

  return Response.json({ appName, debug: debug === 'true', hasKey: !!apiKey })
}`,jsCode:`export default function handler(request, { env }) {
  const apiKey = env.MY_API_KEY
  const debug = env.DEBUG_MODE ?? 'false'
  const appName = env.APP_NAME ?? 'Bini.js'

  if (!apiKey) {
    return Response.json({ error: 'Missing MY_API_KEY' }, { status: 500 })
  }

  return Response.json({ appName, debug: debug === 'true', hasKey: !!apiKey })
}`}),(0,d.jsxs)(c,{children:[`On Node, `,(0,d.jsx)(o,{children:`env`}),` is backed by `,(0,d.jsx)(o,{children:`process.env`}),`. On edge platforms, it reads the runtime bindings.`]})]}),(0,d.jsxs)(i,{id:`error-handling`,title:`Error Handling`,children:[(0,d.jsx)(a,{children:`Validate input and catch unexpected failures:`}),(0,d.jsx)(s,{filename:`src/app/api/safe.${e}`,tsCode:`export default async function handler(
  request: Request,
  { env }: { env: Record<string, string | undefined> }
) {
  try {
    const body = await request.json()

    if (!body.email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch (error: any) {
    const isDev = env.NODE_ENV === 'development'
    return Response.json(
      {
        error: 'Internal Server Error',
        ...(isDev && { details: error.message }),
      },
      { status: 500 }
    )
  }
}`,jsCode:`export default async function handler(request, { env }) {
  try {
    const body = await request.json()

    if (!body.email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch (error) {
    const isDev = env.NODE_ENV === 'development'
    return Response.json(
      {
        error: 'Internal Server Error',
        ...(isDev && { details: error.message }),
      },
      { status: 500 }
    )
  }
}`})]}),(0,d.jsxs)(i,{id:`when-to-use`,title:`When to Use Plain Handlers`,children:[(0,d.jsx)(r,{headers:[`Scenario`,`Recommendation`],rows:[[`Single endpoint with simple logic`,`Plain handler`],[`Quick prototypes`,`Plain handler`],[`Simple CRUD`,`Plain handler`],[`Method-based dispatch without branching`,`Plain handler (per-method exports)`],[`Multiple endpoints in one file`,`Use Hono`],[`Need middleware`,`Use Hono`],[`Complex routing`,`Use Hono`],[`Large production API surface`,`Use Hono`]]}),(0,d.jsx)(c,{children:`Start with plain handlers. Switch to Hono when you need middleware, nested routes, or larger organization.`})]}),(0,d.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,d.jsxs)(t,{to:`/docs/api-routes`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`API Routes Overview`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Files under app/api/ map to /api/*.`})]}),(0,d.jsxs)(t,{to:`/docs/api-hono`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Hono Integration`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Build API routes with the Hono framework.`})]}),(0,d.jsxs)(t,{to:`/docs/api-dynamic`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Dynamic API Routes`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Path parameters and catch-all segments.`})]}),(0,d.jsxs)(t,{to:`/docs/environment-variables`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Environment Variables`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Read secrets in your API routes.`})]}),(0,d.jsxs)(t,{to:`/docs/deploying`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Deployment`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Deploy to Node, Vercel, Netlify, Cloudflare, or Deno.`})]}),(0,d.jsxs)(t,{to:`/docs/loaders`,className:`group block rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700`,children:[(0,d.jsx)(`h4`,{className:`mb-1 font-medium text-neutral-900 dark:text-neutral-100`,children:`Loaders`}),(0,d.jsx)(`p`,{className:`text-sm text-neutral-500 dark:text-neutral-400`,children:`Fetch data before a route renders.`})]})]})]})}function m(){return(0,d.jsx)(n,{title:`Plain Function Handlers`,description:`Simple API endpoints with a default-exported Request → Response function.`,url:`https://bini.js.org/docs/api-plain`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-plain.tsx`,toc:f,prev:{to:`/docs/api-routes`,title:`API Routes Overview`},next:{to:`/docs/api-hono`,title:`Hono Integration`},children:(0,d.jsx)(p,{})})}export{m as default};