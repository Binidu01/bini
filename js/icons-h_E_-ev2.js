import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { i as FolderVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/icons.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "icon-types",
		label: "Icon Types"
	},
	{
		id: "favicons",
		label: "Favicons"
	},
	{
		id: "apple-touch",
		label: "Apple Touch Icons"
	},
	{
		id: "svg-vs-ico",
		label: "SVG vs ICO"
	},
	{
		id: "manifest",
		label: "Manifest & Icons"
	},
	{
		id: "default-images",
		label: "Default Images"
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
				"Icons cover browser tabs, bookmarks, iOS home screen, and Android / PWA install. Define them with ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "metadata.icons" }),
				". ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-ssg" }),
				" injects route-specific icons with the correct ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "type" }),
				" and ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "sizes" }),
				"."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Favicons:" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "icon" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "shortcut" }),
						" - SVG and ICO with sizes"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Apple Touch:" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "apple" }),
						" - 180×180 for iOS home screen"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Manifest:" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "manifest" }),
						" field + ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/site.webmanifest" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Defaults:" }),
						" drop files in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/" }),
						" - no extra config required"
					] })
				]
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "icon-types",
			title: "Icon Types",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Field",
						"Injected as",
						"Description"
					],
					rows: [
						[
							"icon",
							"link rel=icon",
							"Standard favicon with type and sizes"
						],
						[
							"shortcut",
							"link rel=shortcut icon",
							"Legacy shortcut icon"
						],
						[
							"apple",
							"link rel=apple-touch-icon",
							"iOS home screen - 180×180 recommended"
						],
						[
							"other",
							"link",
							"Other link tags e.g. mask-icon"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-4",
					children: "Icon object fields"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Field",
						"Type",
						"Description"
					],
					rows: [
						[
							"url",
							"string",
							"URL to icon file"
						],
						[
							"type",
							"string",
							"MIME type e.g. image/svg+xml"
						],
						[
							"sizes",
							"string",
							"Size e.g. 32x32, 180x180"
						],
						[
							"rel",
							"string",
							"Optional rel override"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "favicons",
			title: "Favicons",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Prefer SVG for modern browsers, with PNG and ICO as fallbacks." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/layout.${e}`,
					tsCode: `export const metadata = {
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
}`,
					jsCode: `export const metadata = {
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
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"File",
						"Size",
						"Purpose"
					],
					rows: [
						[
							"favicon.svg",
							"any",
							"Modern browsers - scalable"
						],
						[
							"favicon.ico",
							"32×32",
							"Legacy fallback"
						],
						[
							"favicon-32x32.png",
							"32×32",
							"Standard tab icon"
						],
						[
							"favicon-16x16.png",
							"16×16",
							"Small tab icon"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "apple-touch",
			title: "Apple Touch Icons",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Used when a user adds your site to the iOS home screen. iOS applies rounded corners unless you supply a precomposed asset." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/layout.${e}`,
					tsCode: `export const metadata = {
  icons: {
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}`,
					jsCode: `export const metadata = {
  icons: {
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Use a 180×180 PNG. Placing ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "apple-touch-icon.png" }),
					" in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/" }),
					" also works for automatic detection."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "svg-vs-ico",
			title: "SVG vs ICO",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SVG:" }),
						" vector, scalable, can use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "prefers-color-scheme" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ICO:" }), " multi-size bitmap container for legacy browsers"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "PNG:" }), " widely supported middle ground"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Best practice:" }), " SVG + 32×32 PNG + ICO + 180×180 Apple"] })
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/layout.${e}`,
				tsCode: `export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
}`,
				jsCode: `export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
}`
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "manifest",
			title: "Manifest & Icons",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The web app manifest supplies icons for Android home screen, splash, and PWA install." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/layout.${e}`,
					tsCode: `export const metadata = {
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
}`,
					jsCode: `export const metadata = {
  manifest: '/site.webmanifest',
  themeColor: '#0a0a0a',
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "public/site.webmanifest",
					code: `{
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
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "default-images",
			title: "Default Images",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Put assets in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/" }),
					". Replace the defaults with your own files."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [
						{ n: "public" },
						{
							n: "favicon.ico",
							d: 1
						},
						{
							n: "favicon.svg",
							d: 1,
							dot: true
						},
						{
							n: "favicon-16x16.png",
							d: 1
						},
						{
							n: "favicon-32x32.png",
							d: 1
						},
						{
							n: "apple-touch-icon.png",
							d: 1,
							dot: true
						},
						{
							n: "android-chrome-192x192.png",
							d: 1
						},
						{
							n: "android-chrome-512x512.png",
							d: 1
						},
						{
							n: "og-image.png",
							d: 1
						},
						{
							n: "site.webmanifest",
							d: 1,
							dot: true
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"For native packaging, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "logo.png" }),
					" in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "public/" }),
					" is often used as the source icon for platform icon generation."
				] })
			]
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
					" injects icons into pre-rendered HTML. Matching",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "rel" }),
					" tags are updated in place."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Source", "Injected as"],
					rows: [
						["metadata.icons.icon", "link rel=icon"],
						["metadata.icons.apple", "link rel=apple-touch-icon"],
						["metadata.icons.shortcut", "link rel=shortcut icon"],
						["metadata.manifest", "link rel=manifest"],
						["public/ defaults", "Preserved from dist/index.html"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Injection is best-effort and does not fail the build. Nested layouts can set different icons per segment." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "complete-example",
			title: "Complete Example",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
				filename: `app/layout.${e}`,
				tsCode: `export const metadata = {
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
}`,
				jsCode: `export const metadata = {
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
}`
			})
		})
	] });
}
function IconsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Icons & Favicons",
		description: "Favicons, Apple touch icons, and web manifest icons - defined in metadata.icons and injected by bini-ssg.",
		url: "https://bini.js.org/docs/icons",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/icons.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/og-twitter",
			title: "Open Graph & Twitter"
		},
		next: {
			to: "/docs/api-routes",
			title: "API Routes Overview"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { IconsPage as default };
