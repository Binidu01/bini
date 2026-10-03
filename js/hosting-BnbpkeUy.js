import { S as siVercel, a as siCloudflare, h as siNodedotjs, m as siNetlify, s as siDeno } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, a as DocLink, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { l as RouteVisual } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/hosting.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "installation",
		label: "Installation"
	},
	{
		id: "supported-providers",
		label: "Supported Providers"
	},
	{
		id: "node",
		label: "Node.js"
	},
	{
		id: "netlify",
		label: "Netlify"
	},
	{
		id: "vercel",
		label: "Vercel"
	},
	{
		id: "cloudflare",
		label: "Cloudflare Workers"
	},
	{
		id: "deno-deploy",
		label: "Deno Deploy"
	},
	{
		id: "api-routes",
		label: "API Routes & Hono"
	},
	{
		id: "cors",
		label: "Automatic CORS"
	},
	{
		id: "git-behavior",
		label: "Git Push Behavior"
	},
	{
		id: "requirements",
		label: "Requirements"
	}
];
var STRONG = "font-medium text-black dark:text-white";
var OL = "mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400";
var ICON_COLOR = "text-black dark:text-white";
var INSTALL_TABS = [
	{
		id: "npm",
		label: "npm",
		command: "$ npm install --save-dev bini-deploy"
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: "$ pnpm add -D bini-deploy"
	},
	{
		id: "yarn",
		label: "yarn",
		command: "$ yarn add --dev bini-deploy"
	},
	{
		id: "bun",
		label: "bun",
		command: "$ bun add -d bini-deploy"
	}
];
var DEPLOY_TABS = [
	{
		id: "npm",
		label: "npm",
		command: "$ npm run deploy"
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: "$ pnpm deploy"
	},
	{
		id: "yarn",
		label: "yarn",
		command: "$ yarn deploy"
	},
	{
		id: "bun",
		label: "bun",
		command: "$ bun run deploy"
	}
];
var WRANGLER_TABS = [
	{
		id: "npm",
		label: "npm",
		command: "$ npx wrangler deploy"
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: "$ pnpm dlx wrangler deploy"
	},
	{
		id: "yarn",
		label: "yarn",
		command: "$ yarn dlx wrangler deploy"
	},
	{
		id: "bun",
		label: "bun",
		command: "$ bunx wrangler deploy"
	}
];
function Brand({ icon, size = 16 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
		icon,
		size,
		className: ICON_COLOR
	});
}
function ProviderName({ icon, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { icon }), name]
	});
}
/**
* The interactive hosting-provider prompt as bini-deploy shows it,
* with the provider for the current section highlighted.
*/
function PickHosting({ provider, isDefault = false }) {
	const providers = [
		{
			id: "node",
			label: "Node.js (default - bini-server)"
		},
		{
			id: "netlify",
			label: "Netlify"
		},
		{
			id: "vercel",
			label: "Vercel"
		},
		{
			id: "cloudflare",
			label: "Cloudflare Workers"
		},
		{
			id: "deno",
			label: "Deno Deploy"
		}
	];
	const selected = providers.find((p) => p.id === provider)?.label ?? providers[0].label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
		className: "mb-4",
		children: [
			"Pick ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: STRONG,
				children: "web"
			}),
			", then",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: STRONG,
				children: selected.split(" ")[0]
			}),
			isDefault ? " (the default)" : "",
			" when prompted:"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
		{
			kind: "question",
			text: "Select hosting provider:"
		},
		...providers.map((p) => ({
			kind: "option",
			text: p.label,
			selected: p.label === selected
		})),
		{ kind: "blank" },
		{
			kind: "hint",
			text: "↑↓ navigate • ⏎ select"
		}
	] })] });
}
function Content() {
	const t = useDocLang() === "js" ? "js" : "ts";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }), " scans your project, generates the right hosting configuration for your target provider, and pushes it straight to GitHub - no YAML spelunking, no platform-specific docs to read first."]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-0",
				children: [
					"It is bundled into every Bini.js scaffold and exposed as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
					". This page covers the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "web hosting providers"
					}),
					" it supports. For desktop and mobile targets, see",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocLink, {
						to: "/docs/deploying",
						children: "Deployment Overview"
					}),
					"."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "installation",
			title: "Installation",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "Already included in every Bini.js scaffold. To add it to an existing project:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: INSTALL_TABS })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "supported-providers",
			title: "Supported Providers",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Provider",
						"Runtime",
						"Config generated"
					],
					rows: [
						[
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderName, {
								icon: siNodedotjs,
								name: "Node.js"
							}, "node"),
							"Node",
							"None"
						],
						[
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderName, {
								icon: siNetlify,
								name: "Netlify"
							}, "netlify"),
							"Edge Functions (Deno)",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify.toml" }, "c1")
						],
						[
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderName, {
								icon: siVercel,
								name: "Vercel"
							}, "vercel"),
							"Node.js Runtime",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel.json" }, "c2")
						],
						[
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderName, {
								icon: siCloudflare,
								name: "Cloudflare Workers"
							}, "cf"),
							"Workers",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler.toml" }, "c3")
						],
						[
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderName, {
								icon: siDeno,
								name: "Deno Deploy"
							}, "deno"),
							"Deno",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `server/index.${t}` }, "c4")
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Node is the default" }),
					" because Bini.js ships with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
					", a zero-dependency production server. Choosing it skips config generation entirely - there is nothing to adapt, so bini-deploy just commits and pushes."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-6",
					children: "How it works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: OL,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Scan"
							}),
							" - scans ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
							" for route files"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Generate"
						}), " - creates the platform-specific entry file and config"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Clean"
						}), " - removes leftover entry files, config, and directories from any previously selected platform, including when switching to Node or a native platform"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Push"
						}), " - commits and pushes everything to your GitHub repository"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Deploy"
						}), " - your hosting provider deploys automatically from GitHub"] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3 mt-6",
					children: "Usage"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Every Bini.js scaffold already has this wired into ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "package.json" }),
						", so deploying is just:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"This runs ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }),
						" interactively - it prompts you to pick a platform (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "web" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "linux" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ios" }),
						") and, if you choose web, a hosting provider (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "node" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel" }),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cloudflare" }),
						", ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "deno" }),
						")."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "For scripts and CI, skip the prompts with flags:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "Terminal",
					lang: "shell",
					code: "$ npx bini-deploy --platform web --hosting vercel --repo https://github.com/you/your-app --yes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Flag", "Description"],
					rows: [
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--platform" }, "f1"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "web" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ios" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "linux" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android" })
						] })],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--hosting" }, "f2"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"web only - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "node" }),
							" (default), ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cloudflare" }),
							",",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "deno" })
						] })],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--repo" }, "f3"), "GitHub repository URL to push to"],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--generate-entry" }, "f4"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"generate only the production entry file - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel" }),
							",",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "cloudflare" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "deno" })
						] })],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--yes, -y" }, "f5"), "skip interactive prompts and use the flags provided"]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "node",
			title: "Node.js",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
				icon: siNodedotjs,
				size: 20
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The default hosting choice. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
						" reads your API handlers directly from",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						" at request time - no build step, no generated entry file."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickHosting, {
					provider: "node",
					isDefault: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-0",
					children: [
						"Works out of the box on Railway, Render, Fly.io, or a bare VPS with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "pm2" }),
						". See",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocLink, {
							to: "/docs/production-server",
							children: "Production Server"
						}),
						" for the full runtime reference."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "netlify",
			title: "Netlify",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
				icon: siNetlify,
				size: 20
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "API routes run as Netlify Edge Functions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickHosting, { provider: "netlify" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "Generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-6 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify.toml" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `netlify/edge-functions/api.${t}` }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "netlify.toml",
					lang: "text",
					code: `[build]
  command = "vite build"
  publish = "dist"

[[edge_functions]]
  path = "/api/*"
  function = "api"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Edge Functions run on ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Deno, not Node" }),
					" - packages depending on Node built-ins (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "fs" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "nodemailer" }),
					") will not work there."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "vercel",
			title: "Vercel",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
				icon: siVercel,
				size: 20
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "API routes run on Vercel's Node.js Runtime."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickHosting, { provider: "vercel" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "Generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-6 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel.json" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `api/index.${t}` }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Vercel reads ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `api/index.${t}` }),
					" before running your build - bini-deploy commits it for you, so it is already there when CI runs. It imports ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono" }),
					" as an npm package, so bini-deploy checks it is installed and tells you the exact install command if it is missing."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "cloudflare",
			title: "Cloudflare Workers",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
				icon: siCloudflare,
				size: 20
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "API routes run as a Cloudflare Worker."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickHosting, { provider: "cloudflare" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "Generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-6 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler.toml" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `worker.${t}` }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Or deploy manually with Wrangler once the entry file exists:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: WRANGLER_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Like Vercel, the worker entry imports ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono" }),
					" as an npm package - bini-deploy verifies it is installed before generating the entry file."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deno-deploy",
			title: "Deno Deploy",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
				icon: siDeno,
				size: 20
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "API routes run on Deno."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickHosting, { provider: "deno" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "Generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UL, {
					className: "mb-6 space-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `server/index.${t}` }) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-2",
					children: "In the Deno Deploy dashboard, set:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
					className: "mb-6 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Entrypoint:"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `server/index.${t}` })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Runtime:"
					}), " Dynamic App"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Deno Deploy also reads its entry file before building - same reasoning as Vercel above. Deno and Netlify both import ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono" }),
					" directly from a URL, so no local install check is needed for these two."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "api-routes",
			title: "API Routes & Hono",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Every provider mounts the same file-based routes from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/app/api/" }),
						", dynamic segments and catch-alls included:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteVisual, {
					fileWidth: 260,
					rows: [
						{ n: "api" },
						{
							n: `index.${t}`,
							d: 1,
							fn: true,
							url: "/api"
						},
						{
							n: "users",
							d: 1
						},
						{
							n: `index.${t}`,
							d: 2,
							fn: true,
							url: "/api/users"
						},
						{
							n: `[id].${t}`,
							d: 2,
							fn: true,
							dot: true,
							url: "/api/users/:id"
						},
						{
							n: "posts",
							d: 1
						},
						{
							n: `[...slug].${t}`,
							d: 2,
							fn: true,
							url: "/api/posts/*"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Each route exports a default handler that accepts a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Request" }),
						" and returns a",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Response" }),
						" (or a JSON-serializable value):"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/users/[id].${t}`,
					tsCode: `export default async function handler(req: Request) {
  const id = new URL(req.url).pathname.split('/').pop();
  return { id, name: 'Ada Lovelace' };
}`,
					jsCode: `export default async function handler(req) {
  const id = new URL(req.url).pathname.split('/').pop();
  return { id, name: 'Ada Lovelace' };
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Imports from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "hono" }),
						" are detected automatically and mounted as a full Hono app instead:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `src/app/api/hello/route.${t}`,
					tsCode: `import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello from Hono!' }));
app.post('/', async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

export default app;`,
					jsCode: `import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello from Hono!' }));
app.post('/', async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

export default app;`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ESM projects:" }),
					" since Bini.js projects ship with",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "\"type\": \"module\"" }),
					", Node's native ESM loader requires relative imports to include their file extension. bini-deploy's generated imports already include ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".js" }),
					", but if your route files import local helpers (e.g.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "./utils" }),
					"), include the extension there too (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "./utils.js" }),
					") or the deployed function will crash with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ERR_MODULE_NOT_FOUND" }),
					" even though the build succeeds."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "cors",
			title: "Automatic CORS",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-0",
				children: "API routes get permissive CORS headers out of the box on every non-Node hosting adapter - Netlify, Vercel, Cloudflare, and Deno - so your frontend can call them without extra setup."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "git-behavior",
			title: "Git Push Behavior",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
				className: "mb-6 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Existing remote"
					}), " - used without modification"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "New projects"
						}),
						" - the provided URL is added as",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "origin" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "No remote updates"
					}), " - once a remote is set, it is never changed"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Always main"
						}),
						" - always pushes to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "main" }),
						", automatically renaming ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "master" }),
						" if needed"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Remote-ahead recovery"
						}),
						" - if the remote has commits you do not have locally (e.g. GitHub auto-created a README), bini-deploy fetches and merges automatically with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--allow-unrelated-histories -X ours" }),
						", keeping your local version of any file that exists on both sides. A warning prints before the merge runs; a real conflict stops the process and prints manual recovery steps"
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				"This means you can run ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-deploy" }),
				" multiple times without accidentally pushing to the wrong repository."
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "requirements",
			title: "Requirements",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: ["Requirement", "Version"],
				rows: [
					["Node.js", ">= 18"],
					["Vite", ">= 6"],
					["git", "available on your PATH"],
					["GitHub repository", "created ahead of time, to push to"]
				]
			})
		})
	] });
}
function HostingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Hosting Providers",
		description: "Zero-config web deployment with bini-deploy - generates hosting config and pushes straight to GitHub.",
		url: "https://bini.js.org/docs/hosting",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/hosting.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/static-export",
			title: "Static Export"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { HostingPage as default };
