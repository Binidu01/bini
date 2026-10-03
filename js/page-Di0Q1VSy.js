import { c as siDiscord, u as siGithub, v as siReddit } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { a as DocLink, f as P, g as UL, l as H3, m as Section, n as C, o as DocPage, s as ExtLink } from "./DocBlocks-yIQx8cRX.js";
//#region src/app/docs/page.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "what-is-bini-js",
		label: "What is Bini.js?"
	},
	{
		id: "native-apps",
		label: "Native Apps from a Single Codebase"
	},
	{
		id: "how-to-use-the-docs",
		label: "How to use the docs"
	},
	{
		id: "bini-js-router",
		label: "Bini.js Router"
	},
	{
		id: "pre-requisite-knowledge",
		label: "Pre-requisite knowledge"
	}
];
var DESKTOP = [
	["Windows", "Native WebView2 binary with Authenticode signing"],
	["macOS", "Native WKWebView app with Developer ID notarization"],
	["Linux", "Native WebKitGTK binary as a GPG-signed AppImage"]
];
var MOBILE = [["Android", "Native APK/AAB via Tauri's Android backend"], ["iOS", "Native app via Tauri's iOS backend, running in WKWebView"]];
var FEATURES = [
	["Real Native", "Not wrapped - compiled to native binaries with full system access"],
	["Auto Plugin Wiring", "bini-native detects web APIs you call and wires Rust plugins automatically"],
	["One Codebase", "Same routes, API handlers, and components compile to every target"]
];
var DOC_SECTIONS = [
	["Getting Started:", "Installation, project structure, layouts and pages, and linking and navigating between routes"],
	["Defining Routes:", "Folder-based and file-based routing, dynamic routes, parallel routes, catch-all routes, and MDX & Markdown pages"],
	["Special Files:", "Loading UI, error boundaries, templates, default fallbacks, and not-found (404) pages"],
	["Metadata:", "Metadata and SEO, Open Graph and Twitter cards, icons and favicons"],
	["API Routes:", "Build backend endpoints with plain function handlers or Hono, including dynamic API routes and CORS"],
	["Environment Variables:", "How they work, prefixes and client exposure, and using them in API routes"],
	["Styling:", "Style your app with plain CSS, Tailwind CSS, or CSS Modules"],
	["Platforms:", "Build for web, Windows, macOS, Linux, Android, and iOS"],
	["Deployment:", "Deployment overview, the production server, static export, and hosting providers"]
];
var CARD = "rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950";
function Bold({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-medium text-neutral-900 dark:text-neutral-200",
		children
	});
}
function PlatformCard({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${CARD} p-5`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",
			children: items.map(([name, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 text-neutral-400 dark:text-neutral-600",
					children: "-"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { children: name }),
					" - ",
					text
				] })]
			}, name))
		})]
	});
}
function BrandIcon({ icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icon.path })
	});
}
function LinkedInIcon({ size = 18, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-block shrink-0 bg-current ${className}`,
		style: {
			width: size,
			height: size,
			maskImage: "url(/linkedin.svg)",
			maskSize: "contain",
			maskRepeat: "no-repeat",
			maskPosition: "center",
			WebkitMaskImage: "url(/linkedin.svg)",
			WebkitMaskSize: "contain",
			WebkitMaskRepeat: "no-repeat",
			WebkitMaskPosition: "center"
		},
		"aria-hidden": "true"
	});
}
var SOCIALS = [
	{
		name: "GitHub",
		href: "https://github.com/Binidu01/bini-cli/discussions",
		hover: "hover:text-black dark:hover:text-white",
		iconHover: "group-hover:text-black dark:group-hover:text-white",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, { icon: siGithub })
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/showcase/bini-js/?viewAsMember=true",
		hover: "hover:text-[#0A66C2] dark:hover:text-[#0A66C2]",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, {
			size: 18,
			className: "transition-colors"
		})
	},
	{
		name: "Reddit",
		href: "https://www.reddit.com/r/binijs/",
		hover: "hover:text-[#FF4500] dark:hover:text-[#FF4500]",
		iconHover: "group-hover:text-[#FF4500]",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, { icon: siReddit })
	},
	{
		name: "Discord",
		href: "https://discord.gg/BVRMCxHQpw",
		hover: "hover:text-[#5865F2] dark:hover:text-[#5865F2]",
		iconHover: "group-hover:text-[#5865F2]",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, { icon: siDiscord })
	}
];
function DocsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DocPage, {
		title: "Getting Started",
		description: "Welcome to the Bini.js documentation.",
		url: "https://bini.js.org/docs",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/page.tsx",
		toc: TOC_ITEMS,
		next: {
			to: "/docs/installation",
			title: "Installation"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "what-is-bini-js",
				title: "What is Bini.js?",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-4",
						children: "Bini.js is a React framework for building full-stack applications that run natively across web, desktop, and mobile - all from a single codebase. You use React components to build user interfaces, and Bini.js handles the complexity of multi-platform deployment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-4",
						children: "It automatically configures lower-level tools while providing a seamless path to native apps. You can focus on building your product and shipping quickly, without worrying about the underlying platform differences."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "",
						children: "Whether you're building a web app, a desktop application for Windows, macOS, or Linux, or a mobile app for Android and iOS - Bini.js gives you the tools to do it all from one project."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "native-apps",
				title: "Native Apps from a Single Codebase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-6",
						children: "Bini.js goes beyond the browser. With Tauri integration, your React app becomes a real native application on every major platform - not a wrapped web view."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformCard, {
							title: "Desktop Apps",
							items: DESKTOP
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformCard, {
							title: "Mobile Apps",
							items: MOBILE
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: FEATURES.map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `${CARD} p-4`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-200",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-neutral-500 dark:text-neutral-500",
								children: text
							})]
						}, title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "how-to-use-the-docs",
				title: "How to use the docs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "The docs are organized into nine sections:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UL, {
					className: "space-y-2",
					children: DOC_SECTIONS.map(([label, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { children: label }),
						" ",
						text
					] }, label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "bini-js-router",
				title: "Bini.js Router",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-4",
						children: "Bini.js has a file-system based router built on folder and file conventions:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
						className: "mb-4 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { children: "Folder-based routing:" }), " Folders define URL segments, and nesting folders creates nested routes automatically."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { children: "File-based routing:" }),
							" Special files like ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "page.tsx" }),
							" and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "layout.tsx" }),
							" define the UI for a route."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
						className: "",
						children: [
							"You can start learning the router from the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocLink, {
								to: "/docs/folder-based-routing",
								children: "Routing documentation"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "pre-requisite-knowledge",
				title: "Pre-requisite knowledge",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						className: "mb-4",
						children: "Our documentation assumes some familiarity with web development. Before getting started, it'll help if you're comfortable with:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
						className: "mb-4 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HTML" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "CSS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "JavaScript" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "React" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
						className: "",
						children: [
							"If you're new to React or need a refresher, we recommend starting with the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
								href: "https://react.dev/learn",
								children: "React documentation"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "join-our-community",
				className: "mb-12 scroll-mt-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${CARD} p-6`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-xl font-semibold tracking-tight text-black dark:text-neutral-100",
							children: "Join our Community"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
							className: "mb-6",
							children: "If you have questions about anything related to Bini.js, you're always welcome to ask our community on:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center justify-between gap-4",
							children: SOCIALS.map(({ name, href, hover, iconHover, icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: `group inline-flex items-center gap-2 text-[15px] font-medium text-neutral-700 transition-colors dark:text-neutral-200 ${hover}`,
								children: [iconHover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `transition-colors ${iconHover}`,
									children: icon
								}) : icon, name]
							}, name))
						})
					]
				})
			})
		]
	});
}
//#endregion
export { DocsPage as default };
