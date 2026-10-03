import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
//#region src/app/docs/og-twitter.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "open-graph-overview",
		label: "Open Graph Overview"
	},
	{
		id: "open-graph-fields",
		label: "Open Graph Fields"
	},
	{
		id: "twitter-cards-overview",
		label: "Twitter Cards Overview"
	},
	{
		id: "twitter-card-fields",
		label: "Twitter Card Fields"
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Open Graph and Twitter Cards control how pages look when shared on Facebook, LinkedIn, Slack, and X. Define them in the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "metadata" }),
				" export on layouts and pages."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Open Graph:" }), " title, description, url, type, images, siteName, locale"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Twitter Cards:" }), " card type, title, description, creator, images"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Default image:" }),
						" replace ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/og-image.png" }),
						" (1200×630 recommended)"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "bini-ssg:" }),
						" injects tags via ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "getMetadataForRoute" }),
						" during",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" })
					] })
				]
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "open-graph-overview",
			title: "Open Graph Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Open Graph tags control previews on Facebook, LinkedIn, and Slack." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/about/page.${e}`,
					tsCode: `export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team',
  openGraph: {
    title: 'About Us - My Bini.js App',
    description: 'Learn more about our company and team',
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
  description: 'Learn more about our company and team',
  openGraph: {
    title: 'About Us - My Bini.js App',
    description: 'Learn more about our company and team',
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Put a default image at ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/og-image.png" }),
					" and reference it from metadata. Replace it with your own 1200×630 asset."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "open-graph-fields",
			title: "Open Graph Fields",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Field",
						"Type",
						"Injected as"
					],
					rows: [
						[
							"title",
							"string",
							"og:title"
						],
						[
							"description",
							"string",
							"og:description"
						],
						[
							"url",
							"string",
							"og:url"
						],
						[
							"type",
							"string",
							"og:type"
						],
						[
							"images",
							"array",
							"og:image (+ width/height/alt)"
						],
						[
							"siteName",
							"string",
							"og:site_name"
						],
						[
							"locale",
							"string",
							"og:locale"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-4",
					children: "Image object fields"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Field",
						"Type",
						"Notes"
					],
					rows: [
						[
							"url",
							"string",
							"Image URL"
						],
						[
							"width",
							"number",
							"1200 recommended"
						],
						[
							"height",
							"number",
							"630 recommended"
						],
						[
							"alt",
							"string",
							"Alt text"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "twitter-cards-overview",
			title: "Twitter Cards Overview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"Twitter (X) cards control how links appear in the feed. Common types: ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "summary" }),
				" and",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "summary_large_image" }),
				"."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/blog/[slug]/page.${e}`,
				tsCode: `export const metadata = {
  title: 'Blog Post',
  description: 'A comprehensive guide to Bini.js',
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post - My Bini.js App',
    description: 'A comprehensive guide to Bini.js',
    creator: '@bini_js',
    images: ['/og-image.png'],
  },
}`,
				jsCode: `export const metadata = {
  title: 'Blog Post',
  description: 'A comprehensive guide to Bini.js',
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Post - My Bini.js App',
    description: 'A comprehensive guide to Bini.js',
    creator: '@bini_js',
    images: ['/og-image.png'],
  },
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "twitter-card-fields",
			title: "Twitter Card Fields",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Field",
					"Type",
					"Injected as"
				],
				rows: [
					[
						"card",
						"string",
						"twitter:card"
					],
					[
						"title",
						"string",
						"twitter:title"
					],
					[
						"description",
						"string",
						"twitter:description"
					],
					[
						"creator",
						"string",
						"twitter:creator"
					],
					[
						"images",
						"array",
						"twitter:image"
					]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-semibold text-neutral-900 dark:text-neutral-100",
				children: "Card types"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "summary" }), " - small image"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "summary_large_image" }), " - large image (recommended)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app" }), " - mobile app card"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "player" }), " - video / audio"] })
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "bini-ssg-injection",
			title: "bini-ssg Injection",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"During ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vite build" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
					" injects OG and Twitter tags into pre-rendered HTML. Existing matching tags are updated in place."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Metadata", "Injected tags"],
					rows: [
						["openGraph.title", "og:title"],
						["openGraph.description", "og:description"],
						["openGraph.url", "og:url"],
						["openGraph.type", "og:type"],
						["openGraph.images", "og:image, og:image:width, og:image:height, og:image:alt"],
						["twitter.card", "twitter:card"],
						["twitter.creator", "twitter:creator"],
						["twitter.images", "twitter:image"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Injection is best-effort and does not fail the build. For dynamic routes like",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/blog/:slug" }),
					", metadata is keyed by the route pattern unless you resolve per-URL values yourself."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Combined Open Graph and Twitter metadata for a blog post." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/blog/[slug]/page.${e}`,
					tsCode: `export const metadata = {
  title: 'Getting Started with Bini.js',
  description:
    'Learn how to build native cross-platform apps with Bini.js',
  openGraph: {
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    url: 'https://myapp.com/blog/getting-started',
    type: 'article',
    images: [
      {
        url: 'https://myapp.com/images/blog/og.png',
        width: 1200,
        height: 630,
        alt: 'Getting Started with Bini.js',
      },
    ],
    siteName: 'My Bini.js App',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    creator: '@bini_js',
    images: ['https://myapp.com/images/blog/og.png'],
  },
}`,
					jsCode: `export const metadata = {
  title: 'Getting Started with Bini.js',
  description:
    'Learn how to build native cross-platform apps with Bini.js',
  openGraph: {
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    url: 'https://myapp.com/blog/getting-started',
    type: 'article',
    images: [
      {
        url: 'https://myapp.com/images/blog/og.png',
        width: 1200,
        height: 630,
        alt: 'Getting Started with Bini.js',
      },
    ],
    siteName: 'My Bini.js App',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Started with Bini.js',
    description:
      'Learn how to build native cross-platform apps with Bini.js',
    creator: '@bini_js',
    images: ['https://myapp.com/images/blog/og.png'],
  },
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Use images at least 1200×630 for consistent previews across platforms." })
			]
		})
	] });
}
function OgTwitterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Open Graph & Twitter Cards",
		description: "Open Graph and Twitter Cards for social previews - injected by bini-ssg at build time.",
		url: "https://bini.js.org/docs/og-twitter",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/og-twitter.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/metadata",
			title: "Metadata"
		},
		next: {
			to: "/docs/icons",
			title: "Icons & Favicons"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { OgTwitterPage as default };
