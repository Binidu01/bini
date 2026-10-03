import { S as siVercel, a as siCloudflare, h as siNodedotjs, m as siNetlify, s as siDeno, u as siGithub } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, i as FolderVisual, n as CARD, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/deploying.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "deployment-options",
		label: "Deployment Options"
	},
	{
		id: "using-bini-deploy",
		label: "One Command to Deploy Anywhere"
	},
	{
		id: "nodejs-server",
		label: "Node.js Server"
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
		id: "static-export",
		label: "Static Export"
	},
	{
		id: "platform-comparison",
		label: "Platform Comparison"
	},
	{
		id: "environment-variables",
		label: "Environment Variables"
	},
	{
		id: "best-practices",
		label: "Best Practices"
	}
];
var DEPLOY_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run deploy`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm deploy`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn deploy`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run deploy`
	}
];
var BUILD_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run build`
	}
];
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var OL = "mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400";
/** Platform name with its logo, for table cells. */
function Platform({ icon, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2 font-sans text-neutral-600 dark:text-neutral-400",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
			icon,
			size: 14,
			className: "shrink-0 text-black dark:text-white"
		}), name]
	});
}
/** Platform logo for section headings. */
var headingIcon = (icon) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
	icon,
	size: 20,
	className: "shrink-0 text-black dark:text-white"
});
var Yes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-emerald-600 dark:text-emerald-400",
	children: "✓"
});
var FLOW_STEPS = [
	["1", "Run npm run deploy"],
	["2", "Choose a target"],
	["3", "Config is generated"],
	["4", "Pushed to GitHub"]
];
/** What bini-deploy does, in order. */
function DeployFlowVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-3",
		children: FLOW_STEPS.map(([n, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${CARD} flex h-14 w-36 shrink-0 items-center gap-2.5 px-3`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200 font-mono text-[10px] font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",
					children: n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] leading-tight text-neutral-800 dark:text-neutral-200",
					children: label
				})]
			}), i < FLOW_STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
		}, n))
	}) });
}
/**
* The two-prompt flow used by bini-deploy, with the hosting provider matching
* the section it lives in highlighted.
*/
function HostingPrompt({ selected }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-8 mb-3",
			children: "Step 1 - Choose the target platform"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"bini-deploy asks which platform you want to deploy to. Choose ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Web" }),
				" for any hosting provider:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
			{
				kind: "question",
				text: "Select your target platform:"
			},
			{
				kind: "option",
				text: "Web",
				selected: true
			},
			{
				kind: "option",
				text: "Windows"
			},
			{
				kind: "option",
				text: "macOS"
			},
			{
				kind: "option",
				text: "iOS"
			},
			{
				kind: "option",
				text: "Linux"
			},
			{
				kind: "option",
				text: "Android"
			},
			{ kind: "blank" },
			{
				kind: "hint",
				text: "↑↓ navigate • ⏎ select"
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-8 mb-3",
			children: "Step 2 - Choose the hosting provider"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"If you picked ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Web" }),
				", bini-deploy then asks for the hosting provider. The highlighted choice below matches the section you're reading:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
			{
				kind: "question",
				text: "Select hosting provider:"
			},
			...[
				"Node.js (default - bini-server)",
				"Netlify",
				"Vercel",
				"Cloudflare Workers",
				"Deno Deploy"
			].map((p) => ({
				kind: "option",
				text: p,
				selected: p === selected
			})),
			{ kind: "blank" },
			{
				kind: "hint",
				text: "↑↓ navigate • ⏎ select"
			}
		] })
	] });
}
function Content() {
	const t = useDocLang() === "js" ? "js" : "ts";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Bini.js can be deployed to any platform that supports Node.js, or exported as static files for static hosting. For all hosting platforms",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "except static export"
					}),
					", use the unified",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
					" command."
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deployment-options",
			title: "Deployment Options",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Platform",
					"Command",
					"Notes"
				],
				rows: [
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siNodedotjs,
							name: "Node.js"
						}, "node"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c"),
						"Default - uses bini-server"
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siGithub,
							name: "Static Export"
						}, "static"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }, "c"),
						"GitHub Pages, S3, Firebase, Surge"
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siNetlify,
							name: "Netlify"
						}, "netlify"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c"),
						"Automated by bini-deploy"
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siVercel,
							name: "Vercel"
						}, "vercel"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c"),
						"Automated by bini-deploy"
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siCloudflare,
							name: "Cloudflare"
						}, "cf"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c"),
						"Automated by bini-deploy"
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siDeno,
							name: "Deno Deploy"
						}, "deno"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c"),
						"Automated by bini-deploy"
					]
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Unified command:" }),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
				" works for Node.js, Netlify, Vercel, Cloudflare, and Deno Deploy. Static export uses ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
				" which pre-renders all routes."
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "using-bini-deploy",
			title: "One Command to Deploy Anywhere",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "bini-deploy"
					}), " makes deployment effortless. Simply run:"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"When you run ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
						", bini-deploy will:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeployFlowVisual, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingPrompt, { selected: "Node.js (default - bini-server)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: OL,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Prompt you to choose your target platform:"
						}), " Web, Windows, macOS, Linux, Android, or iOS"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "If you choose Web, it prompts for hosting provider:"
							}),
							" ",
							"Node.js (default), Netlify, Vercel, Cloudflare, or Deno Deploy"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Automatically generates"
						}), " the platform-specific configuration files and entry points"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Commits and pushes"
						}), " everything to your GitHub repository"] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"This single command works for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "all hosting platforms"
						}),
						" ",
						"with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "zero configuration needed"
						}),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Node.js"
					}), " - Builds and starts the server"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Netlify"
						}),
						" - Automatically generates",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify.toml" }),
						" and edge function entry"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Vercel"
						}),
						" - Automatically generates",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel.json" }),
						" and serverless function entry"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Cloudflare"
						}),
						" - Automatically generates",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler.toml" }),
						" and worker entry"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Deno Deploy"
						}),
						" - Automatically generates",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "server/index.ts" }),
						" entry"
					] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Zero config required:" }),
					" bini-deploy automatically detects your project structure, picks the right adapter, and generates platform-specific configuration. No changes to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `vite.config.${t}` }),
					" needed. Learn more at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://github.com/Binidu01/bini-deploy",
						children: "bini-deploy"
					}),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "nodejs-server",
			title: "Node.js Server",
			icon: headingIcon(siNodedotjs),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The default deployment option. Bini.js uses ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-server" }),
						" - a zero-dependency production server."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Your app will be served at the port specified by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "PORT" }),
						" (default: 3000):"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".env",
					lang: "text",
					code: `# .env
PORT=3000`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingPrompt, { selected: "Node.js (default - bini-server)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "Platforms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Railway"
					}), " - Auto-detects Node.js, just connect your repo"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Render"
						}),
						" - Set build command to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
						" and start to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm start" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Fly.io"
					}), " - Use the Node.js builder"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "VPS"
						}),
						" - Use ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "pm2" }),
						" to keep the server running"
					] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "bini-server features:" }), " ETag support, 30s timeouts, 10MB body limit, graceful shutdown, and automatic port increment."] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "netlify",
			title: "Netlify",
			icon: headingIcon(siNetlify),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Deploying to Netlify is completely automated with bini-deploy. No configuration needed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "bini-deploy automatically generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [
						{
							n: "netlify.toml",
							dot: true
						},
						{ n: "netlify" },
						{
							n: "edge-functions",
							d: 1
						},
						{
							n: "api.ts",
							d: 2,
							dot: true
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify.toml" }), " - Build and edge function configuration"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "netlify/edge-functions/api.ts" }), " - API route handler for Edge Functions"] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingPrompt, { selected: "Netlify" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Important:" }),
					" Netlify Edge Functions run on Deno, not Node.js. Node-specific packages like ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "nodemailer" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "fs" }),
					", or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "path" }),
					" will not work. Use Web API alternatives."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "vercel",
			title: "Vercel",
			icon: headingIcon(siVercel),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Deploying to Vercel is completely automated with bini-deploy. No configuration needed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "bini-deploy automatically generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [
						{
							n: "vercel.json",
							dot: true
						},
						{ n: "api" },
						{
							n: "index.ts",
							d: 1,
							dot: true
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "vercel.json" }), " - Routing and build configuration"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "api/index.ts" }), " - Serverless function entry point"] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingPrompt, { selected: "Vercel" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "cloudflare",
			title: "Cloudflare Workers",
			icon: headingIcon(siCloudflare),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Deploying to Cloudflare Workers is completely automated with bini-deploy. No configuration needed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "bini-deploy automatically generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [{
						n: "wrangler.toml",
						dot: true
					}, {
						n: "worker.ts",
						dot: true
					}]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "wrangler.toml" }), " - Worker configuration"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "worker.ts" }), " - Worker entry point with API routes"] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingPrompt, { selected: "Cloudflare Workers" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deno-deploy",
			title: "Deno Deploy",
			icon: headingIcon(siDeno),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Deploying to Deno Deploy is completely automated with bini-deploy. No configuration needed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "bini-deploy automatically generates:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 300,
					rows: [{ n: "server" }, {
						n: "index.ts",
						d: 1,
						dot: true
					}]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UL, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "server/index.ts" }), " - Deno Deploy entry point"] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingPrompt, { selected: "Deno Deploy" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "static-export",
			title: "Static Export",
			icon: headingIcon(siGithub),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"For static hosting, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						" pre-renders every route to static HTML. This is the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "only"
						}),
						" deployment method that does not use",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The pre-rendered files will be in the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						" folder. Suitable for:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "GitHub Pages" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Amazon S3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Firebase Hosting" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cloudflare Pages (static mode)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Netlify (static mode)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Vercel (static mode)" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-8 mb-3",
					children: "GitHub Pages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Set the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "base" }),
						" option in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `vite.config.${t}` }),
						" if deploying to a subpath:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "vite.config.ts",
					code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { biniroute } from 'bini-router'

export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react(), biniroute()],
})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mt-4 mb-4",
					children: [
						"Then deploy the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dist/" }),
						" folder to GitHub Pages."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Pre-rendering:" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
					" pre-renders all static routes to HTML and creates shell pages for dynamic routes. The client hydrates on load. No separate export command needed."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "platform-comparison",
			title: "Platform Comparison",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Platform",
					"API Runtime",
					"Static",
					"Dynamic",
					"Command"
				],
				rows: [
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siNodedotjs,
							name: "Node.js"
						}, "node"),
						"Node.js",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "s"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "d"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c")
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siNetlify,
							name: "Netlify"
						}, "netlify"),
						"Deno (Edge)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "s"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "d"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c")
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siVercel,
							name: "Vercel"
						}, "vercel"),
						"Edge",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "s"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "d"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c")
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siCloudflare,
							name: "Cloudflare"
						}, "cf"),
						"Workers",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "s"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "d"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c")
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siDeno,
							name: "Deno Deploy"
						}, "deno"),
						"Deno",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "s"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "d"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }, "c")
					],
					[
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siGithub,
							name: "Static Export"
						}, "static"),
						"N/A",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yes, {}, "s"),
						"via shell pages",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }, "c")
					]
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "environment-variables",
			title: "Environment Variables in Production",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Set environment variables through your hosting platform's dashboard:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Platform", "How to Set"],
					rows: [
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siNodedotjs,
							name: "Node.js"
						}, "node"), "Use .env file or system environment variables"],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siNetlify,
							name: "Netlify"
						}, "netlify"), "Site settings → Environment variables"],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siVercel,
							name: "Vercel"
						}, "vercel"), "Project settings → Environment Variables"],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siCloudflare,
							name: "Cloudflare"
						}, "cf"), "wrangler.toml or dashboard"],
						[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platform, {
							icon: siDeno,
							name: "Deno Deploy"
						}, "deno"), "Project settings → Environment Variables"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Never commit ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".env" }),
					" files with secrets to your repository. Use platform environment variables for production."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "best-practices",
			title: "Best Practices",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, {
				className: "mb-6 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Test builds locally"
						}),
						" - Run ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run build" }),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run preview" }),
						" before deploying."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Use environment variables"
					}), " - Keep configuration separate from code."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Set up CI/CD"
					}), " - Automate deployments with GitHub Actions or similar."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Monitor your app"
					}), " - Use platform analytics to track performance."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: STRONG,
						children: "Use a custom domain"
					}), " - Configure SSL for secure connections."] })
				]
			})
		})
	] });
}
function DeployingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Deploying",
		description: "Learn how to deploy your Bini.js application to production.",
		url: "https://bini.js.org/docs/deploying",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/deploying.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/environment-variables",
			title: "Environment Variables"
		},
		next: {
			to: "/docs/production-server",
			title: "Production Server"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { DeployingPage as default };
