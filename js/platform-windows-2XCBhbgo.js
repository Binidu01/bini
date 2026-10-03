import { u as siGithub } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, i as FolderVisual, n as CARD, r as FeatureCard, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/platform-windows.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "windows-overview",
		label: "Windows Overview"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "native-windows",
		label: "Windows"
	},
	{
		id: "macos",
		label: "macOS"
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
		command: `$ npx create-bini-app@latest my-app --platform windows
$ cd my-app
$ npm install
$ npm run tauri:dev
$ npm run tauri:build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ pnpm install
$ pnpm tauri:dev
$ pnpm tauri:build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ yarn install
$ yarn tauri:dev
$ yarn tauri:build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform windows
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
		command: `$ npx create-bini-app@latest my-app --platform windows
$ cd my-app
$ npm install`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ pnpm install`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform windows
$ cd my-app
$ yarn install`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform windows
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
var TAURI_ACTION_WORKFLOW = `# .github/workflows/build-windows.yml
name: Build Windows App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-windows:
    runs-on: windows-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: x86_64-pc-windows-msvc

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
var SIGNED_WORKFLOW = `# .github/workflows/build-windows.yml
name: Build Windows App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-windows:
    runs-on: windows-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
        with:
          targets: x86_64-pc-windows-msvc

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
var BOX = `${CARD} flex h-12 shrink-0 items-center justify-center px-3 text-center text-[12px] leading-tight text-neutral-800 dark:text-neutral-200`;
/** How a Windows build is produced from macOS or Linux. */
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
				children: "GitHub Actions (windows-latest)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} w-32`,
				children: "windows-build artifact"
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
			children: "Create a new Bini.js project targeting Windows and install its dependencies:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: CREATE_AND_INSTALL_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Or use the interactive prompt and select ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Windows Desktop" }),
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
				text: "Windows Desktop",
				selected: true
			},
			{
				kind: "option",
				text: "Linux Desktop"
			},
			{
				kind: "option",
				text: "macOS Desktop"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".github/workflows/build-windows.yml" }),
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
					n: "build-windows.yml",
					d: 2,
					dot: true
				},
				{ n: "src-tauri" },
				{ n: "package.json" }
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			filename: ".github/workflows/build-windows.yml",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Windows" }),
				". This initializes the repo, commits, and pushes everything to GitHub in one step:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Once pushed, the workflow runs on a real Windows runner and builds the installer."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Download the Installer"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadSteps, {})
	] });
}
function WindowsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "native-windows",
		title: "Windows",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On Windows you can scaffold, develop, and build the app entirely on your own machine - no CI required."
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Microsoft C++ Build Tools -",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://visualstudio.microsoft.com/visual-cpp-build-tools/",
						children: "Download"
					}),
					" ",
					"(install the \"Desktop development with C++\" workload)"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Microsoft Edge WebView2 Runtime -",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://developer.microsoft.com/en-us/microsoft-edge/webview2/",
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
					" to produce the executable and installer:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: NATIVE_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--sign" }),
				" during scaffold to set up Authenticode signing."
			] })
		]
	});
}
function MacosSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "macos",
		title: "macOS",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"A native Windows ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".exe" }),
					" cannot be produced on macOS - Tauri relies on Windows-only toolchains (MSVC, WebView2, WiX/NSIS). The Tauri team's own recommendation is to build Windows apps on a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows-latest" }),
					" runner in CI."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossBuildFlowVisual, { os: "macOS" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Install Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher and Git. Git comes with the Xcode command line tools - run ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "xcode-select --install" }),
					" if you do not have it yet."
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
				" Tauri's Windows build needs MSVC and WebView2, which do not exist on macOS. Cross-compiling from macOS to Windows is technically possible but experimental and unreliable. GitHub Actions on ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows-latest" }),
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
					"A native Windows ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".exe" }),
					" cannot be produced on Linux - Tauri relies on Windows-only toolchains (MSVC, WebView2, WiX/NSIS). The Tauri team's own recommendation is to build Windows apps on a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows-latest" }),
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
				" Tauri's Windows build needs MSVC and WebView2, which do not exist on Linux. Cross-compiling from Linux to Windows is technically possible but experimental and unreliable. GitHub Actions on ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows-latest" }),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Build Windows App" }),
				" run."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Under ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "Artifacts"
				}),
				", download ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows-build" }),
				". Or, if a release was created, download the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".exe" }),
				" / ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".msi" }),
				" from the Releases page."
			] })
		]
	});
}
function Content() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "windows-overview",
			title: "Windows Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Bini.js allows you to build native Windows desktop applications using Tauri v2. Your React app is wrapped in a WebView2 binary, providing a native experience with full system access."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native Binary",
							text: "Windows executable (.exe) with Authenticode signing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Code Signing",
							text: "Authenticode signing support for trusted distribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native APIs",
							text: "Full access to Windows APIs via Tauri"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Windows desktop apps are built using Tauri's WebView2 backend. Your app runs in a native window with full system access." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "requirements",
			title: "Requirements",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Building Windows desktop apps requires different tools depending on your operating system. See the section for your OS below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On Windows:"
				}), " Node.js, Microsoft C++ Build Tools, the WebView2 Runtime, and Rust - everything runs locally."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On macOS or Linux:"
				}), " Node.js, Git, a GitHub account, and the ability to push a repo. The Windows build itself runs on GitHub Actions."] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"You cannot produce a native Windows ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".exe" }),
					" directly from macOS or Linux. Tauri v2 has no supported local cross-compilation path for Windows. The recommended way is GitHub Actions on a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "windows-latest" }),
					" runner, described in each section below."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacosSection, {}),
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
						" opens your app in a native Windows window. This requires a Windows machine with the requirements installed (see the Windows section):"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "This launches your app in a native Windows window with:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hot reload for frontend changes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Native window with system tray support" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Access to Windows APIs" }),
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
					children: "Build a distributable Windows executable. On Windows this runs locally; on macOS and Linux it runs in GitHub Actions (see those sections):"
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
							n: "nsis",
							d: 4
						},
						{
							n: "my-app_0.1.0_x64-setup.exe",
							d: 5,
							dot: true
						},
						{
							n: "msi",
							d: 4
						},
						{
							n: "my-app_0.1.0_x64_en-US.msi",
							d: 5
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "nsis/*.exe" }), " - NSIS installer (recommended for distribution)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "msi/*.msi" }), " - WiX MSI installer"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "release/my-app.exe" }), " - The raw executable (before bundling)"] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The build output is a native Windows binary that runs without any additional dependencies." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "code-signing",
			title: "Code Signing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Bini.js supports Authenticode code signing for Windows binaries. Configure signing in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src-tauri/tauri.conf.json" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "src-tauri/tauri.conf.json",
					lang: "json",
					code: `{
  "bundle": {
    "windows": {
      "certificateThumbprint": "YOUR_CERT_THUMBPRINT",
      "digestAlgorithm": "sha256",
      "timestampUrl": "http://timestamp.digicert.com"
    }
  }
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"For GitHub Actions, store the certificate and password as secrets and reference them in the workflow. The ",
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
					filename: ".github/workflows/build-windows.yml",
					lang: "yaml",
					code: SIGNED_WORKFLOW
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "For production distribution, Authenticode signing is recommended to establish trust with Windows users." })
			]
		})
	] });
}
function PlatformWindowsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Windows",
		description: "Build native Windows desktop applications with Bini.js.",
		url: "https://bini.js.org/docs/platform-windows",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-windows.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/platform-web",
			title: "Web"
		},
		next: {
			to: "/docs/platform-macos",
			title: "macOS"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { PlatformWindowsPage as default };
