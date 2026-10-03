import{y as e}from"./index-eA3lPtwc.js";import{_ as t,f as n,h as r,i,m as a,n as o,o as s,r as c}from"./DocBlocks-B2Cf0_q3.js";import{l}from"./DocVisuals-BJRQ2yKE.js";var u=e(),d=[{id:`basic-handler`,label:`Basic Handler`},{id:`route-mapping`,label:`Route Mapping`},{id:`handling-methods`,label:`Handling HTTP Methods`},{id:`reading-request`,label:`Reading Request Data`},{id:`sending-responses`,label:`Sending Responses`},{id:`dynamic-routes`,label:`Dynamic Routes`},{id:`catch-all`,label:`Catch-all Routes`},{id:`environment-variables`,label:`Environment Variables`},{id:`error-handling`,label:`Error Handling`},{id:`when-to-use`,label:`When to Use Plain Handlers`},{id:`complete-example`,label:`Complete Example`}];function f(){let e=t()===`js`?`js`:`ts`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{className:`mb-12`,children:[(0,u.jsx)(n,{children:`Plain function handlers are the simplest way to create API routes. Ideal for single endpoints that do not need Hono middleware or nested routing.`}),(0,u.jsxs)(c,{children:[(0,u.jsx)(`strong`,{children:`File-based routing:`}),` `,(0,u.jsx)(o,{children:`src/app/api/hello.ts`}),` is served at`,` `,(0,u.jsx)(o,{children:`/api/hello`}),`. There is no bare `,(0,u.jsx)(o,{children:`/api`}),` root route.`]})]}),(0,u.jsxs)(a,{id:`basic-handler`,title:`Basic Handler`,children:[(0,u.jsxs)(n,{children:[`Export a default function that receives `,(0,u.jsx)(o,{children:`Request`}),`. The file path sets the route - the function name does not matter.`]}),(0,u.jsx)(i,{filename:`src/app/api/hello.${e}`,tsCode:`export default function handler(req: Request) {
  return Response.json({ message: 'hello', method: req.method })
}`,jsCode:`export default function handler(req) {
  return Response.json({ message: 'hello', method: req.method })
}`}),(0,u.jsxs)(n,{children:[`This creates `,(0,u.jsx)(o,{children:`/api/hello`}),` and responds to all HTTP methods unless you branch on`,` `,(0,u.jsx)(o,{children:`request.method`}),`.`]})]}),(0,u.jsxs)(a,{id:`route-mapping`,title:`Route Mapping`,children:[(0,u.jsx)(n,{children:`File structure maps directly to API paths:`}),(0,u.jsx)(l,{fileWidth:260,rows:[{n:`app`},{n:`api`,d:1},{n:`hello.${e}`,d:2,fn:!0,url:`/api/hello`,dot:!0},{n:`user.${e}`,d:2,fn:!0,url:`/api/user`},{n:`posts.${e}`,d:2,fn:!0,url:`/api/posts`},{n:`posts`,d:2},{n:`index.${e}`,d:3,fn:!0,url:`/api/posts`},{n:`[id].${e}`,d:3,fn:!0,url:`/api/posts/:id`},{n:`[...catch].${e}`,d:2,fn:!0,url:`/api/*`}]}),(0,u.jsx)(r,{headers:[`File Path`,`API Route`],rows:[[`src/app/api/hello.${e}`,`/api/hello`],[`src/app/api/user.${e}`,`/api/user`],[`src/app/api/posts.${e}`,`/api/posts`],[`src/app/api/posts/[id].${e}`,`/api/posts/:id`],[`src/app/api/posts/index.${e}`,`/api/posts`],[`src/app/api/[...catch].${e}`,`/api/*`]]})]}),(0,u.jsxs)(a,{id:`handling-methods`,title:`Handling HTTP Methods`,children:[(0,u.jsxs)(n,{children:[`Branch on `,(0,u.jsx)(o,{children:`request.method`}),` for different verbs:`]}),(0,u.jsx)(i,{filename:`src/app/api/posts.${e}`,tsCode:`export default function handler(request: Request) {
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
}`}),(0,u.jsx)(r,{headers:[`Method`,`Typical Use`],rows:[[`GET`,`Retrieve data`],[`POST`,`Create new data`],[`PUT`,`Replace existing data`],[`PATCH`,`Partially update data`],[`DELETE`,`Remove data`]]})]}),(0,u.jsxs)(a,{id:`reading-request`,title:`Reading Request Data`,children:[(0,u.jsx)(n,{children:`Body, headers, and query params:`}),(0,u.jsx)(i,{filename:`src/app/api/echo.${e}`,tsCode:`export default async function handler(request: Request) {
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
}`})]}),(0,u.jsxs)(a,{id:`sending-responses`,title:`Sending Responses`,children:[(0,u.jsx)(n,{children:`Common response patterns:`}),(0,u.jsx)(i,{filename:`src/app/api/responses.${e}`,tsCode:`export default function handler(request: Request) {
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
}`})]}),(0,u.jsxs)(a,{id:`dynamic-routes`,title:`Dynamic Routes`,children:[(0,u.jsxs)(n,{children:[`Path params are available via the `,(0,u.jsx)(o,{children:`x-bini-params`}),` header:`]}),(0,u.jsx)(i,{filename:`src/app/api/posts/[id].${e}`,tsCode:`export default async function handler(request: Request) {
  const paramsHeader = request.headers.get('x-bini-params')
  let params: Record<string, string> = {}
  try {
    params = paramsHeader ? JSON.parse(paramsHeader) : {}
  } catch {
    return Response.json({ error: 'Invalid params' }, { status: 400 })
  }

  const id = params.id
  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`,jsCode:`export default async function handler(request) {
  const paramsHeader = request.headers.get('x-bini-params')
  let params = {}
  try {
    params = paramsHeader ? JSON.parse(paramsHeader) : {}
  } catch {
    return Response.json({ error: 'Invalid params' }, { status: 400 })
  }

  const id = params.id
  if (request.method === 'GET') {
    return Response.json({ id, title: \`Post \${id}\` })
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}`})]}),(0,u.jsxs)(a,{id:`catch-all`,title:`Catch-all Routes`,children:[(0,u.jsxs)(n,{children:[(0,u.jsx)(o,{children:`[...catch]`}),` handles unmatched `,(0,u.jsx)(o,{children:`/api/*`}),` paths:`]}),(0,u.jsx)(i,{filename:`src/app/api/[...catch].${e}`,tsCode:`export default function handler(request: Request) {
  console.warn('Unmatched API route', { method: request.method })

  return Response.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
    },
    { status: 404, headers: { 'Cache-Control': 'no-store' } }
  )
}`,jsCode:`export default function handler(request) {
  console.warn('Unmatched API route', { method: request.method })

  return Response.json(
    {
      error: 'Not Found',
      message: 'The requested endpoint does not exist',
    },
    { status: 404, headers: { 'Cache-Control': 'no-store' } }
  )
}`})]}),(0,u.jsxs)(a,{id:`environment-variables`,title:`Environment Variables`,children:[(0,u.jsxs)(n,{children:[`Use `,(0,u.jsx)(o,{children:`getEnv`}),` and `,(0,u.jsx)(o,{children:`requireEnv`}),` from `,(0,u.jsx)(o,{children:`bini-env`}),`:`]}),(0,u.jsx)(i,{filename:`src/app/api/config.${e}`,tsCode:`import { getEnv, requireEnv } from 'bini-env'

export default function handler(request: Request) {
  const apiKey = requireEnv(request as any, 'MY_API_KEY')
  const debug = getEnv(request as any, 'DEBUG_MODE') ?? 'false'
  const appName = getEnv(request as any, 'APP_NAME') ?? 'Bini.js'

  return Response.json({ appName, debug: debug === 'true', hasKey: !!apiKey })
}`,jsCode:`import { getEnv, requireEnv } from 'bini-env'

export default function handler(request) {
  const apiKey = requireEnv(request, 'MY_API_KEY')
  const debug = getEnv(request, 'DEBUG_MODE') ?? 'false'
  const appName = getEnv(request, 'APP_NAME') ?? 'Bini.js'

  return Response.json({ appName, debug: debug === 'true', hasKey: !!apiKey })
}`}),(0,u.jsx)(r,{headers:[`Function`,`Returns`,`Behavior`],rows:[[`getEnv(ctx, key)`,`string | undefined`,`Undefined if missing - use ?? for defaults`],[`requireEnv(ctx, key)`,`string`,`Throws if missing or empty`]]})]}),(0,u.jsxs)(a,{id:`error-handling`,title:`Error Handling`,children:[(0,u.jsx)(n,{children:`Validate input and catch unexpected failures:`}),(0,u.jsx)(i,{filename:`src/app/api/safe.${e}`,tsCode:`import { getEnv } from 'bini-env'

export default async function handler(request: Request) {
  try {
    const body = await request.json()

    if (!body.email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch (error: any) {
    const isDev = getEnv(request as any, 'NODE_ENV') === 'development'
    return Response.json(
      {
        error: 'Internal Server Error',
        ...(isDev && { details: error.message }),
      },
      { status: 500 }
    )
  }
}`,jsCode:`import { getEnv } from 'bini-env'

export default async function handler(request) {
  try {
    const body = await request.json()

    if (!body.email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch (error) {
    const isDev = getEnv(request, 'NODE_ENV') === 'development'
    return Response.json(
      {
        error: 'Internal Server Error',
        ...(isDev && { details: error.message }),
      },
      { status: 500 }
    )
  }
}`})]}),(0,u.jsxs)(a,{id:`when-to-use`,title:`When to Use Plain Handlers`,children:[(0,u.jsx)(r,{headers:[`Scenario`,`Recommendation`],rows:[[`Single endpoint with simple logic`,`Plain handler`],[`Quick prototypes`,`Plain handler`],[`Simple CRUD`,`Plain handler`],[`Multiple endpoints in one file`,`Use Hono`],[`Need middleware`,`Use Hono`],[`Complex routing`,`Use Hono`],[`Large production API surface`,`Use Hono`]]}),(0,u.jsx)(c,{children:`Start with plain handlers. Switch to Hono when you need middleware, nested routes, or larger organization.`})]}),(0,u.jsxs)(a,{id:`complete-example`,title:`Complete Example`,children:[(0,u.jsx)(n,{children:`A small todos API with validation and method branching:`}),(0,u.jsx)(i,{filename:`src/app/api/todos.${e}`,tsCode:`import { getEnv } from 'bini-env'

const todos: { id: string; title: string; completed: boolean }[] = []

export default async function handler(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  try {
    if (request.method === 'GET' && !id) {
      return Response.json(todos)
    }

    if (request.method === 'GET' && id) {
      const todo = todos.find((t) => t.id === id)
      if (!todo) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      return Response.json(todo)
    }

    if (request.method === 'POST') {
      const body = await request.json()
      if (!body.title) {
        return Response.json({ error: 'Title is required' }, { status: 400 })
      }
      const todo = {
        id: Date.now().toString(),
        title: body.title,
        completed: false,
      }
      todos.push(todo)
      return Response.json(todo, { status: 201 })
    }

    if (request.method === 'DELETE' && id) {
      const index = todos.findIndex((t) => t.id === id)
      if (index === -1) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      todos.splice(index, 1)
      return Response.json({ message: 'Todo deleted' })
    }

    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  } catch (error: any) {
    const isDev = getEnv(request as any, 'NODE_ENV') === 'development'
    return Response.json(
      {
        error: 'Internal Server Error',
        ...(isDev && { details: error.message }),
      },
      { status: 500 }
    )
  }
}`,jsCode:`import { getEnv } from 'bini-env'

const todos = []

export default async function handler(request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  try {
    if (request.method === 'GET' && !id) {
      return Response.json(todos)
    }

    if (request.method === 'GET' && id) {
      const todo = todos.find((t) => t.id === id)
      if (!todo) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      return Response.json(todo)
    }

    if (request.method === 'POST') {
      const body = await request.json()
      if (!body.title) {
        return Response.json({ error: 'Title is required' }, { status: 400 })
      }
      const todo = {
        id: Date.now().toString(),
        title: body.title,
        completed: false,
      }
      todos.push(todo)
      return Response.json(todo, { status: 201 })
    }

    if (request.method === 'DELETE' && id) {
      const index = todos.findIndex((t) => t.id === id)
      if (index === -1) {
        return Response.json({ error: 'Todo not found' }, { status: 404 })
      }
      todos.splice(index, 1)
      return Response.json({ message: 'Todo deleted' })
    }

    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  } catch (error) {
    const isDev = getEnv(request, 'NODE_ENV') === 'development'
    return Response.json(
      {
        error: 'Internal Server Error',
        ...(isDev && { details: error.message }),
      },
      { status: 500 }
    )
  }
}`})]})]})}function p(){return(0,u.jsx)(s,{title:`Plain Function Handlers`,description:`Simple API endpoints with a default-exported Request → Response function.`,url:`https://bini.js.org/docs/api-plain`,editUrl:`https://github.com/Binidu01/bini-official/edit/main/src/app/docs/api-plain.tsx`,toc:d,prev:{to:`/docs/api-routes`,title:`API Routes Overview`},next:{to:`/docs/api-hono`,title:`Hono Integration`},children:(0,u.jsx)(f,{})})}export{p as default};