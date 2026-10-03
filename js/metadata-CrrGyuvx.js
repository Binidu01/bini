import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual, l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/metadata.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "what-is-metadata",
		label: "What is Metadata?"
	},
	{
		id: "basic-metadata",
		label: "Basic Metadata"
	},
	{
		id: "open-graph",
		label: "Open Graph"
	},
	{
		id: "twitter-cards",
		label: "Twitter Cards"
	},
	{
		id: "default-images",
		label: "Default Images"
	},
	{
		id: "icons",
		label: "Icons"
	},
	{
		id: "nested-metadata",
		label: "Nested Metadata"
	},
	{
		id: "bini-ssg-injection",
		label: "bini-ssg Injection"
	},
	{
		id: "complete-example",
		label: "Complete Example"
	}
];
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Metadata describes your page to search engines, social platforms, and browsers. Export a",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "metadata" }),
					" object from any layout or page for titles, descriptions, Open Graph, Twitter cards, and icons."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
					" reads route metadata via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getMetadataForRoute" }),
					" and injects it into each pre-rendered page ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "head" }),
					" during ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Feature", "How bini-ssg uses it"],
					rows: [
						["title, description, robots, canonical", "Injected as title and meta tags"],
						["icons", "icon, shortcut, apple-touch-icon"],
						["openGraph", "og:title, og:type, og:description, og:url, og:image"],
						["twitter", "twitter:card, twitter:title, twitter:description, twitter:image"]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "what-is-metadata",
			title: "What is Metadata?",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Metadata controls how links look when shared on Twitter, Facebook, LinkedIn, and Slack. You author it in route and layout files. The router merges layout-level metadata before",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
				" sees it."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getMetadataForRoute" }),
				" returns the already-merged entry for a route. ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
				" ",
				"does not invent metadata - it only injects what you export."
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "basic-metadata",
			title: "Basic Metadata",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Export ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "metadata" }),
					" from the root layout or any nested layout or page."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/layout.${e}`,
					tsCode: `export const metadata = {
  title: 'My Bini.js App',
  description: 'Built with Bini.js - a native React framework',
  robots: 'index, follow',
  canonical: 'https://myapp.com',
  themeColor: '#0a0a0a',
  keywords: ['react', 'vite', 'framework', 'bini'],
}`,
					jsCode: `export const metadata = {
  title: 'My Bini.js App',
  description: 'Built with Bini.js - a native React framework',
  robots: 'index, follow',
  canonical: 'https://myapp.com',
  themeColor: '#0a0a0a',
  keywords: ['react', 'vite', 'framework', 'bini'],
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Field", "Description"],
					rows: [
						["title", "Document title"],
						["description", "Meta description"],
						["robots", "Crawler instructions"],
						["canonical", "Canonical URL"],
						["themeColor", "Browser UI color"],
						["keywords", "Optional keyword list"]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "open-graph",
			title: "Open Graph",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Open Graph tags control previews on Facebook, LinkedIn, and Slack." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/about/page.${e}`,
				tsCode: `export const metadata = {
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
}`,
				jsCode: `export const metadata = {
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
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "twitter-cards",
			title: "Twitter Cards",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Twitter (X) card fields control how links appear in the feed." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/blog/[slug]/page.${e}`,
				tsCode: `export const metadata = {
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
}`,
				jsCode: `export const metadata = {
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
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "default-images",
			title: "Default Images",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Put static assets in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/" }),
					". Reference them by absolute path in metadata."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 240,
					rows: [
						{ n: "public" },
						{
							n: "favicon.ico",
							d: 1
						},
						{
							n: "apple-touch-icon.png",
							d: 1
						},
						{
							n: "og-image.png",
							d: 1,
							dot: true
						},
						{
							n: "logo.png",
							d: 1
						},
						{
							n: "site.webmanifest",
							d: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Recommended Open Graph size is 1200×630. No extra config - files in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/" }),
					" are served as-is."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "icons",
			title: "Icons",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/layout.${e}`,
				tsCode: `export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}`,
				jsCode: `export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}`
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nested-metadata",
			title: "Nested Metadata",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Layout and page metadata merge. Use a title template at the root so child pages can set a short title." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{ n: "app" },
						{
							n: `layout.${e}`,
							d: 1,
							dot: true
						},
						{
							n: `page.${e}`,
							d: 1,
							url: "/"
						},
						{
							n: "blog",
							d: 1
						},
						{
							n: `layout.${e}`,
							d: 2,
							dot: true
						},
						{
							n: `page.${e}`,
							d: 2,
							url: "/blog"
						},
						{
							n: "[slug]",
							d: 2
						},
						{
							n: `page.${e}`,
							d: 3,
							url: "/blog/:slug",
							dot: true
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/layout.${e}`,
					tsCode: `export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
}`,
					jsCode: `export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
  },
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug]/page.${e}`,
					tsCode: `export const metadata = {
  title: 'Getting Started with Bini.js',
  // Result: "Getting Started with Bini.js | My App"
}`,
					jsCode: `export const metadata = {
  title: 'Getting Started with Bini.js',
  // Result: "Getting Started with Bini.js | My App"
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "bini-ssg-injection",
			title: "bini-ssg Injection",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"During ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
				", ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
				" merges metadata into static HTML."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SEO fields:" }), " title, description, icons, Open Graph, Twitter - existing matching tags updated in place"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Head tree:" }), " element / text / raw nodes (raw for JSON-LD)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dynamic routes:" }),
						" metadata is keyed by the route pattern (e.g.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
						"), not each concrete URL"
					] })
				]
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/blog/[slug]/page.${e}`,
				tsCode: `export const metadata = {
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
}`,
				jsCode: `export const metadata = {
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
}`
			})
		})
	] });
}
function MetadataPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Metadata",
		description: "Export metadata from layouts and pages for SEO and social sharing. Consumed by bini-ssg at build time.",
		url: "https://bini.js.org/docs/metadata",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/metadata.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/notfound",
			title: "Not Found (404)"
		},
		next: {
			to: "/docs/og-twitter",
			title: "Open Graph & Twitter"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { MetadataPage as default };
