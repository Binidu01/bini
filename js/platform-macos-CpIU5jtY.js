import { u as siGithub } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, i as FolderVisual, n as CARD, r as FeatureCard, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/platform-macos.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "macos-overview",
		label: "macOS Overview"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "native-macos",
		label: "macOS"
	},
	{
		id: "windows",
		label: "Windows"
	},
	{
		id: "linux",
		label: "Linux"
	},
	{
		id: "development",
		label: "Development"
	},
	{
		id: "building",
		label: "Building"
	},
	{
		id: "code-signing",
		label: "Code Signing"
	}
];
var OL = "mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400";
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var INTERACTIVE_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest`
	}
];
var NATIVE_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest my-app --platform macos
$ cd my-app
$ npm install
$ npm run tauri:dev
$ npm run tauri:build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform macos
$ cd my-app
$ pnpm install
$ pnpm tauri:dev
$ pnpm tauri:build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform macos
$ cd my-app
$ yarn install
$ yarn tauri:dev
$ yarn tauri:build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform macos
$ cd my-app
$ bun install
$ bun run tauri:dev
$ bun run tauri:build`
	}
];
var CREATE_AND_INSTALL_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest my-app --platform macos
$ cd my-app
$ npm install`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform macos
$ cd my-app
$ pnpm install`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform macos
$ cd my-app
$ yarn install`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform macos
$ cd my-app
$ bun install`
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
var DEV_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run tauri:dev`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm tauri:dev`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn tauri:dev`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run tauri:dev`
	}
];
var BUILD_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run tauri:build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm tauri:build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn tauri:build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run tauri:build`
	}
];
var TAURI_ACTION_WORKFLOW = `# .github/workflows/build-macos.yml
name: Build macOS App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-macos:
    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: aarch64-apple-darwin,x86_64-apple-darwin

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`;
var SIGNED_WORKFLOW = `# .github/workflows/build-macos.yml
name: Build macOS App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-macos:
    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: aarch64-apple-darwin,x86_64-apple-darwin

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          APPLE_ID: \${{ secrets.APPLE_ID }}
          APPLE_PASSWORD: \${{ secrets.APPLE_PASSWORD }}
          APPLE_TEAM_ID: \${{ secrets.APPLE_TEAM_ID }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`;
var BOX = `${CARD} flex h-12 shrink-0 items-center justify-center px-3 text-center text-[12px] leading-tight text-neutral-800 dark:text-neutral-200`;
/** How a macOS build is produced from Windows or Linux. */
function CrossBuildFlowVisual({ os }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBg, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `${BOX} w-28`,
				children: [
					"Your ",
					os,
					" machine"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} w-24`,
				children: "npm run deploy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} w-40`,
				children: "GitHub Actions (macos-latest)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} w-32`,
				children: "macos-build artifact"
			})
		]
	}) });
}
function ScaffoldBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Create the Project"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Create a new Bini.js project targeting macOS and install its dependencies:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: CREATE_AND_INSTALL_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Or use the interactive prompt and select ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macOS Desktop" }),
				":"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: INTERACTIVE_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptOutput, { lines: [
			{
				kind: "question",
				text: "Select target platform:"
			},
			{
				kind: "option",
				text: "Web Application"
			},
			{
				kind: "option",
				text: "Windows Desktop"
			},
			{
				kind: "option",
				text: "Linux Desktop"
			},
			{
				kind: "option",
				text: "macOS Desktop",
				selected: true
			},
			{
				kind: "option",
				text: "Android"
			},
			{
				kind: "option",
				text: "iOS"
			},
			{ kind: "blank" },
			{
				kind: "hint",
				text: "↑↓ navigate • ⏎ select"
			}
		] })
	] });
}
function WorkflowBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Add the Build Workflow"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"The scaffold does not ship with a GitHub Actions workflow. You need to add one manually. Create the file ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".github/workflows/build-macos.yml" }),
				" inside your project with the following content:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
			width: 300,
			rows: [
				{ n: ".github" },
				{
					n: "workflows",
					d: 1
				},
				{
					n: "build-macos.yml",
					d: 2,
					dot: true
				},
				{ n: "src-tauri" },
				{ n: "package.json" }
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			filename: ".github/workflows/build-macos.yml",
			lang: "yaml",
			code: TAURI_ACTION_WORKFLOW
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Push to GitHub"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Run ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
				" and choose ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macOS" }),
				". This initializes the repo, commits, and pushes everything to GitHub in one step:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Once pushed, the workflow runs on a real macOS runner and builds the app bundle."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Download the App"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadSteps, {})
	] });
}
function MacosSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "native-macos",
		title: "macOS",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On macOS you can scaffold, develop, and build the app entirely on your own machine - no CI required."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Node.js",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium text-neutral-900 dark:text-neutral-100",
						children: "20.19.0"
					}),
					" ",
					"or higher"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Xcode Command Line Tools - run ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "xcode-select --install" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Full Xcode (for building and notarization) -",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://apps.apple.com/app/xcode/id497799835",
						children: "Download"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Rust via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
					href: "https://rustup.rs/",
					children: "rustup"
				})] })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 2: Create the project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaffoldBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 3: Develop and build"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Run ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tauri:dev" }),
					" to open your app in a native window, then ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tauri:build" }),
					" to produce the app bundle:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: NATIVE_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--sign" }),
				" during scaffold to set up Developer ID signing."
			] })
		]
	});
}
function WindowsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "windows",
		title: "Windows",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"A native macOS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".app" }),
					" cannot be produced on Windows - Tauri relies on macOS-only toolchains (Xcode, code signing, notarization). The Tauri team's own recommendation is to build macOS apps on a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos-latest" }),
					" runner in CI."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossBuildFlowVisual, { os: "Windows" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Install Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher and Git for Windows -",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://git-scm.com/download/win",
						children: "Download"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 2: Create the project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaffoldBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Why not build locally?" }),
				" Tauri's macOS build needs Xcode and Apple's signing toolchain, which do not exist on Windows. Cross-compiling from Windows to macOS is not supported. GitHub Actions on ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos-latest" }),
				" is the supported path."
			] })
		]
	});
}
function LinuxSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "linux",
		title: "Linux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"A native macOS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".app" }),
					" cannot be produced on Linux - Tauri relies on macOS-only toolchains (Xcode, code signing, notarization). The Tauri team's own recommendation is to build macOS apps on a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos-latest" }),
					" runner in CI."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossBuildFlowVisual, { os: "Linux" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Install Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher and Git with your package manager, for example",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "sudo apt install git" }),
					" on Debian and Ubuntu."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 2: Create the project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaffoldBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Why not build locally?" }),
				" Tauri's macOS build needs Xcode and Apple's signing toolchain, which do not exist on Linux. Cross-compiling from Linux to macOS is not supported. GitHub Actions on ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos-latest" }),
				" is the supported path."
			] })
		]
	});
}
function DownloadSteps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
		className: OL,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Open your repository on GitHub and go to the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "Actions"
				}),
				" ",
				"tab."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Open the latest ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Build macOS App" }),
				" run."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Under ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "Artifacts"
				}),
				", download ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos-build" }),
				". Or, if a release was created, download the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".dmg" }),
				" from the Releases page."
			] })
		]
	});
}
function Content() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "macos-overview",
			title: "macOS Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Bini.js allows you to build native macOS desktop applications using Tauri v2. Your React app is wrapped in a WKWebView binary, providing a native experience with full system access."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native Binary",
							text: "macOS app bundle (.app) with Developer ID signing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Code Signing",
							text: "Developer ID and notarization support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native APIs",
							text: "Full access to macOS APIs via Tauri"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "macOS desktop apps are built using Tauri's WKWebView backend. Your app runs in a native window with full system access." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "requirements",
			title: "Requirements",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Building macOS desktop apps requires different tools depending on your operating system. See the section for your OS below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On macOS:"
				}), " Node.js, Xcode Command Line Tools, Full Xcode, and Rust - everything runs locally."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On Windows or Linux:"
				}), " Node.js, Git, a GitHub account, and the ability to push a repo. The macOS build itself runs on GitHub Actions."] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"You cannot produce a native macOS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".app" }),
					" directly from Windows or Linux. Tauri v2 has no supported local cross-compilation path for macOS. The recommended way is GitHub Actions on a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos-latest" }),
					" runner, described in each section below."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacosSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinuxSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "development",
			title: "Development",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Running ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tauri:dev" }),
						" opens your app in a native macOS window. This requires a Mac with the requirements installed (see the macOS section):"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "This launches your app in a native macOS window with:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hot reload for frontend changes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Native window with menu bar integration" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Access to macOS APIs" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Devtools for debugging" })
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "building",
			title: "Building",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Build a distributable macOS application. On macOS this runs locally; on Windows and Linux it runs in GitHub Actions (see those sections):"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The build outputs land in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src-tauri/target/release/bundle/" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Output Files"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderVisual, {
					width: 320,
					rows: [
						{ n: "src-tauri" },
						{
							n: "target",
							d: 1
						},
						{
							n: "release",
							d: 2
						},
						{
							n: "bundle",
							d: 3
						},
						{
							n: "macos",
							d: 4
						},
						{
							n: "my-app.app",
							d: 5,
							dot: true
						},
						{
							n: "dmg",
							d: 4
						},
						{
							n: "my-app_0.1.0_aarch64.dmg",
							d: 5
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "macos/my-app.app" }), " - The app bundle"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "dmg/*.dmg" }), " - Disk image for distribution (recommended)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "my-app.pkg" }), " - Installer package (if configured)"] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The build output is a native macOS application that runs without any additional dependencies." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "code-signing",
			title: "Code Signing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Bini.js supports Developer ID signing and notarization for macOS binaries. Configure signing in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src-tauri/tauri.conf.json" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src-tauri/tauri.conf.json",
					lang: "json",
					code: `{
  "bundle": {
    "macOS": {
      "signingIdentity": "Developer ID Application: Your Name (TEAM_ID)",
      "entitlements": "entitlements.plist"
    }
  }
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"For GitHub Actions, store your Apple ID, app-specific password, and team ID as secrets and reference them in the workflow. The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tauri-action" }),
						" step reads them from environment variables:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
							icon: siGithub,
							size: 18,
							className: "shrink-0 text-black dark:text-white"
						}), "GitHub Actions workflow with signing"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: ".github/workflows/build-macos.yml",
					lang: "yaml",
					code: SIGNED_WORKFLOW
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "For production distribution, Developer ID signing and notarization are required to avoid Gatekeeper warnings." })
			]
		})
	] });
}
function PlatformMacosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "macOS",
		description: "Build native macOS desktop applications with Bini.js.",
		url: "https://bini.js.org/docs/platform-macos",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-macos.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/platform-windows",
			title: "Windows"
		},
		next: {
			to: "/docs/platform-linux",
			title: "Linux"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { PlatformMacosPage as default };
