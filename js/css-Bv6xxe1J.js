import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, a as DocLink, f as P, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, s as ICON } from "./DocVisuals-BzN7mWOU.js";
import { t as Globe } from "./globe-DZx7kE3i.js";
//#region src/app/docs/css.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "plain-css",
		label: "Plain CSS in Bini.js"
	},
	{
		id: "global-css",
		label: "Global CSS"
	},
	{
		id: "route-css",
		label: "CSS for Specific Routes"
	},
	{
		id: "component-css",
		label: "Component CSS"
	},
	{
		id: "external-stylesheets",
		label: "External Stylesheets"
	},
	{
		id: "css-ordering",
		label: "CSS Ordering"
	},
	{
		id: "css-variables",
		label: "CSS Variables"
	},
	{
		id: "sass-support",
		label: "Sass/SCSS"
	},
	{
		id: "css-in-js",
		label: "CSS-in-JS Alternative"
	}
];
/** A stack of URLs that do (or do not) receive a stylesheet. */
function ScopeVisual({ title, ok, urls }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-72",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[13px] font-semibold text-neutral-900 dark:text-neutral-100",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `shrink-0 rounded-[5px] border-[1.5px] px-1.5 py-px font-mono text-[10px] font-medium ${ok ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/80 dark:text-emerald-300" : "border-red-500 bg-red-500/10 text-red-600 dark:border-red-500/80 dark:text-red-300"}`,
				children: ok ? "Loaded" : "Not loaded"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: urls.map((url, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex h-8 items-center gap-1.5 border-x border-b border-neutral-200 bg-white px-2.5 text-xs text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 ${i === 0 ? "rounded-t-lg border-t" : ""} ${i === urls.length - 1 ? "rounded-b-lg" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
				className: ICON,
				strokeWidth: 1.5
			}), url]
		}, url)) })]
	}) });
}
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "plain-css",
			title: "Plain CSS in Bini.js",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Bini.js supports plain ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".css" }),
						" files natively via Vite. No config needed - just import a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".css" }),
						" file and it works. This page covers plain CSS only."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npx create-bini-app@latest my-app --none`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm dlx create-bini-app@latest my-app --none`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn dlx create-bini-app@latest my-app --none`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bunx create-bini-app@latest my-app --none`
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Or use the interactive prompt and select ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "None" }),
						" under the styling question:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
					{
						kind: "question",
						text: "Select a styling solution:"
					},
					{
						kind: "option",
						text: "Tailwind CSS"
					},
					{
						kind: "option",
						text: "CSS Modules"
					},
					{
						kind: "option",
						text: "None",
						selected: true
					},
					{ kind: "blank" },
					{
						kind: "hint",
						text: "↑↓ navigate • ⏎ select"
					}
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "global-css",
			title: "Global CSS",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "For base styles, resets, and utilities that should apply everywhere, import a global stylesheet in your root layout:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/globals.css",
					code: `/* src/app/globals.css - base reset and variables */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #ffffff;
  --text: #0a0a0a;
  --border: #e5e5e5;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/layout.${e}`,
					tsCode: `// src/app/layout.tsx - root layout
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,
					jsCode: `// src/app/layout.jsx - root layout
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Keep global CSS minimal - only resets, CSS variables, and truly global utilities. Route and component specific styles should be imported closer to where they are used." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "route-css",
			title: "CSS for Specific Routes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Import CSS only for the routes that need it. This keeps bundles small and avoids loading unused styles. Each route can have its own stylesheet:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/(marketing)/page.css",
					code: `/* src/app/(marketing)/page.css - only loaded for marketing route */
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/(marketing)/page.${e}`,
					tsCode: `// src/app/(marketing)/page.tsx
import './page.css'

export default function MarketingPage() {
  return (
    <div className="hero">
      <h1>Welcome to Bini.js</h1>
      <p>Build fast, ship faster</p>
    </div>
  )
}`,
					jsCode: `// src/app/(marketing)/page.jsx
import './page.css'

export default function MarketingPage() {
  return (
    <div className="hero">
      <h1>Welcome to Bini.js</h1>
      <p>Build fast, ship faster</p>
    </div>
  )
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/dashboard/page.css",
					code: `/* src/app/dashboard/page.css - only for dashboard */
.dashboard-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
}

.sidebar {
  border-right: 1px solid var(--border);
  padding-right: 1.5rem;
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/dashboard/layout.${e}`,
					tsCode: `// src/app/dashboard/layout.tsx - layout level CSS for dashboard
import './page.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="dashboard-grid">{children}</div>
}`,
					jsCode: `// src/app/dashboard/layout.jsx - layout level CSS for dashboard
import './page.css'

export default function DashboardLayout({ children }) {
  return <div className="dashboard-grid">{children}</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Route-level CSS is code-split automatically by Vite. A user visiting ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
					" will not download ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dashboard/page.css" }),
					". Import CSS as close as possible to the route that uses it."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-8",
					children: "Blog Layout Example - Scoped CSS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"If your blogs layout has a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog.css" }),
						", that CSS only applies to routes inside the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog" }),
						" folder. Other routes do not get it:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/blog/blog.css",
					code: `/* src/app/blog/blog.css - only for /blog/* */
.blog-wrapper {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem;
  line-height: 1.7;
}

.blog-wrapper h1 {
  font-size: 2rem;
  font-weight: 700;
}

.blog-wrapper article {
  color: var(--text);
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/blog/layout.${e}`,
					tsCode: `// src/app/blog/layout.tsx - import here, scoped to /blog only
import './blog.css'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="blog-wrapper">{children}</div>
}`,
					jsCode: `// src/app/blog/layout.jsx - import here, scoped to /blog only
import './blog.css'

export default function BlogLayout({ children }) {
  return <div className="blog-wrapper">{children}</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeVisual, {
					title: "Gets blog.css",
					ok: true,
					urls: [
						"/blog",
						"/blog/my-post",
						"/blog/category/tech"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeVisual, {
					title: "Does NOT get blog.css",
					ok: false,
					urls: [
						"/",
						"/dashboard",
						"/about",
						"/docs"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "How it works:" }),
					" Vite code-splits by route. When you visit ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/" }),
					", Vite loads only ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "globals.css" }),
					" + ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/(marketing)/page.css" }),
					". When you visit",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog" }),
					", the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `blog/layout.${e}` }),
					" chain is loaded, so ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog.css" }),
					" is included. If you import ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "blog.css" }),
					" in the root ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `src/app/layout.${e}` }),
					" ",
					"instead, every route would get it - avoid that for scoped styles."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "component-css",
			title: "Component CSS",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"For reusable components, keep a plain ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".css" }),
						" file next to the component. This still works without CSS Modules - just use clear naming to avoid conflicts:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/components/Button.css",
					code: `/* src/app/components/Button.css */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.btn-primary {
  background: black;
  color: white;
}

.btn-primary:hover {
  background: #222;
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/components/Button.${e}`,
					tsCode: `// src/app/components/Button.tsx
import './Button.css'

export function Button({ variant = 'primary', children, ...props }: any) {
  return <button className={\`btn btn-\${variant}\`} {...props}>{children}</button>
}`,
					jsCode: `// src/app/components/Button.jsx
import './Button.css'

export function Button({ variant = 'primary', children, ...props }) {
  return <button className={\`btn btn-\${variant}\`} {...props}>{children}</button>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"If you need scoped styles to avoid conflicts, use",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocLink, {
						to: "/docs/css-modules",
						children: "CSS Modules"
					}),
					" (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".module.css" }),
					") instead. For plain CSS, use BEM or prefixed class names like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "btn-" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "card-" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "external-stylesheets",
			title: "External Stylesheets",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Import CSS from npm packages only in routes that need them:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/docs/page.${e}`,
					tsCode: `// src/app/docs/page.tsx - only docs needs syntax highlighting
import 'prismjs/themes/prism.css'

export default function DocsPage() {
  return <article>...</article>
}`,
					jsCode: `// src/app/docs/page.jsx - only docs needs syntax highlighting
import 'prismjs/themes/prism.css'

export default function DocsPage() {
  return <article>...</article>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/blog/page.${e}`,
					tsCode: `// src/app/blog/page.tsx - only blog needs markdown styles
import './markdown.css'

export default function BlogPage() {
  return <div className="markdown-body">...</div>
}`,
					jsCode: `// src/app/blog/page.jsx - only blog needs markdown styles
import './markdown.css'

export default function BlogPage() {
  return <div className="markdown-body">...</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Do not import external CSS globally if only one route needs it. Import it in the specific route or layout to keep other routes lean." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "css-ordering",
			title: "CSS Ordering",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "CSS is applied in the order you import it. Keep a consistent order:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/layout.${e}`,
					tsCode: `// layout.tsx - order matters
import './globals.css'      // 1. Base reset and variables first
import './theme.css'        // 2. Theme and utilities
// Route or component CSS comes after, imported inside page.tsx or component.tsx`,
					jsCode: `// layout.jsx - order matters
import './globals.css'      // 1. Base reset and variables first
import './theme.css'        // 2. Theme and utilities
// Route or component CSS comes after, imported inside page.jsx or component.jsx`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/dashboard/page.${e}`,
					tsCode: `// src/app/dashboard/page.tsx
import './page.css'  // 3. Route-specific CSS - loaded only for this route

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`,
					jsCode: `// src/app/dashboard/page.jsx
import './page.css'  // 3. Route-specific CSS - loaded only for this route

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Global to specific: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "globals.css" }),
					" first, then layout CSS, then route CSS, then component CSS. This avoids specificity surprises."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "css-variables",
			title: "CSS Variables",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "Use CSS variables for theming - define them once in global CSS, use everywhere:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: "src/app/globals.css",
				code: `/* src/app/globals.css */
:root {
  --bg: #ffffff;
  --text: #0a0a0a;
  --border: #e5e5e5;
  --radius: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000000;
    --text: #fafafa;
    --border: #262626;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "sass-support",
			title: "Sass/SCSS",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Vite supports Sass out of the box. Install and use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".scss" }),
						" only where needed:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install -D sass`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add -D sass`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add -D sass`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add -d sass`
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src/app/dashboard/page.scss",
					code: `/* src/app/dashboard/page.scss - only for dashboard */
.dashboard {
  display: grid;
  gap: 1rem;

  .card {
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);

    &:hover {
      border-color: black;
    }
  }
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/dashboard/page.${e}`,
					tsCode: `import './page.scss'  // only dashboard loads this

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`,
					jsCode: `import './page.scss'  // only dashboard loads this

export default function DashboardPage() {
  return <div className="dashboard">...</div>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "css-in-js",
			title: "CSS-in-JS Alternative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"If you prefer CSS-in-JS, use plain CSS setup (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--none" }),
						") and install your library. Only load it in routes that need it:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: [
					{
						id: "npm",
						label: "npm",
						command: `$ npm install styled-components`
					},
					{
						id: "pnpm",
						label: "pnpm",
						command: `$ pnpm add styled-components`
					},
					{
						id: "yarn",
						label: "yarn",
						command: `$ yarn add styled-components`
					},
					{
						id: "bun",
						label: "bun",
						command: `$ bun add styled-components`
					}
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/components/StyledButton.${e}`,
					tsCode: `// src/app/components/StyledButton.tsx
import styled from 'styled-components'

const Button = styled.button\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
\`

export function StyledButton({ children }: any) {
  return <Button>{children}</Button>
}`,
					jsCode: `// src/app/components/StyledButton.jsx
import styled from 'styled-components'

const Button = styled.button\`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
\`

export function StyledButton({ children }) {
  return <Button>{children}</Button>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "For most projects, plain CSS with route-level imports is simpler and faster. Use CSS-in-JS only when you need dynamic theming based on props." })
			]
		})
	] });
}
function CSSPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Plain CSS",
		description: "Use plain CSS in Bini.js - import only what you need, where you need it. No framework required.",
		url: "https://bini.js.org/docs/css",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/css.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/env-api",
			title: "Using in API Routes"
		},
		next: {
			to: "/docs/tailwind",
			title: "Tailwind CSS"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { CSSPage as default };
