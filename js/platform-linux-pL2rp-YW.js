import { u as siGithub } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, i as FolderVisual, n as CARD, r as FeatureCard, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/platform-linux.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "linux-overview",
		label: "Linux Overview"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "native-linux",
		label: "Linux"
	},
	{
		id: "windows",
		label: "Windows"
	},
	{
		id: "macos",
		label: "macOS"
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
		command: `$ npx create-bini-app@latest my-app --platform linux
$ cd my-app
$ npm install
$ npm run tauri:dev
$ npm run tauri:build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ pnpm install
$ pnpm tauri:dev
$ pnpm tauri:build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ yarn install
$ yarn tauri:dev
$ yarn tauri:build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform linux
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
		command: `$ npx create-bini-app@latest my-app --platform linux
$ cd my-app
$ npm install`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ pnpm install`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform linux
$ cd my-app
$ yarn install`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform linux
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
var DEPS_TABS = [
	{
		id: "debian",
		label: "Debian/Ubuntu",
		command: `$ sudo apt update
$ sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev`
	},
	{
		id: "fedora",
		label: "Fedora",
		command: `$ sudo dnf install webkit2gtk4.1-devel openssl-devel curl wget file libappindicator-gtk3-devel librsvg2-devel`
	},
	{
		id: "arch",
		label: "Arch",
		command: `$ sudo pacman -S webkit2gtk-4.1 base-devel curl wget file openssl appmenu-gtk-module libappindicator-gtk3 librsvg`
	}
];
var TAURI_ACTION_WORKFLOW = `# .github/workflows/build-linux.yml
name: Build Linux App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-linux:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install system dependencies
        run: |
          sudo apt update
          sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable

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
var SIGNED_WORKFLOW = `# .github/workflows/build-linux.yml
name: Build Linux App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-linux:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install system dependencies
        run: |
          sudo apt update
          sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable

      - name: Install dependencies
        run: npm install

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          TAURI_SIGNING_PRIVATE_KEY: \${{ secrets.TAURI_SIGNING_PRIVATE_KEY }}
          TAURI_SIGNING_PRIVATE_KEY_PASSWORD: \${{ secrets.TAURI_SIGNING_PRIVATE_KEY_PASSWORD }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`;
var BOX = `${CARD} flex h-12 shrink-0 items-center justify-center px-3 text-center text-[12px] leading-tight text-neutral-800 dark:text-neutral-200`;
/** How a Linux build is produced from Windows or macOS. */
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
				children: "GitHub Actions (ubuntu-latest)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${BOX} w-32`,
				children: "linux-build artifact"
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
			children: "Create a new Bini.js project targeting Linux and install its dependencies:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: CREATE_AND_INSTALL_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Or use the interactive prompt and select ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Linux Desktop" }),
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
				text: "Linux Desktop",
				selected: true
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".github/workflows/build-linux.yml" }),
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
					n: "build-linux.yml",
					d: 2,
					dot: true
				},
				{ n: "src-tauri" },
				{ n: "package.json" }
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			filename: ".github/workflows/build-linux.yml",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Linux" }),
				". This initializes the repo, commits, and pushes everything to GitHub in one step:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Once pushed, the workflow runs on a real Ubuntu runner and builds the AppImage."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Download the App"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadSteps, {})
	] });
}
function LinuxSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "native-linux",
		title: "Linux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On Linux you can scaffold, develop, and build the app entirely on your own machine - no CI required."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
				className: "mb-4",
				children: [
					"Install Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher, Rust via",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://rustup.rs/",
						children: "rustup"
					}),
					", and the WebKitGTK development libraries. Pick your distribution:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPS_TABS }),
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
					" to produce the AppImage:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: NATIVE_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--sign" }),
				" during scaffold to set up signing keys."
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
					"A native Linux ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".AppImage" }),
					" can be produced on Windows, but only through CI - Tauri relies on Linux-only toolchains (WebKitGTK, GTK 3, AppImage tooling). The Tauri team's own recommendation is to build Linux apps on an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ubuntu-latest" }),
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
				" Tauri's Linux build needs WebKitGTK, GTK 3, and AppImage tooling, which do not exist on Windows. Cross-compiling from Windows to Linux is not supported. GitHub Actions on ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ubuntu-latest" }),
				" is the supported path."
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
					"A native Linux ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".AppImage" }),
					" cannot be produced on macOS - Tauri relies on Linux-only toolchains (WebKitGTK, GTK 3, AppImage tooling). The Tauri team's own recommendation is to build Linux apps on an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ubuntu-latest" }),
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
				" Tauri's Linux build needs WebKitGTK, GTK 3, and AppImage tooling, which do not exist on macOS. Cross-compiling from macOS to Linux is experimental and unreliable. GitHub Actions on ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ubuntu-latest" }),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Build Linux App" }),
				" run."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Under ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "Artifacts"
				}),
				", download ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "linux-build" }),
				". Or, if a release was created, download the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".AppImage" }),
				" from the Releases page."
			] })
		]
	});
}
function Content() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "linux-overview",
			title: "Linux Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Bini.js allows you to build native Linux desktop applications using Tauri v2. Your React app is wrapped in a WebKitGTK binary, providing a native experience with full system access."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native Binary",
							text: "Linux AppImage with optional signing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Package Formats",
							text: "AppImage, .deb, and .rpm bundle support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native APIs",
							text: "Full access to Linux APIs via Tauri"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Linux desktop apps are built using Tauri's WebKitGTK backend. Your app runs in a native window with full system access." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "requirements",
			title: "Requirements",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Building Linux desktop apps requires different tools depending on your operating system. See the section for your OS below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On Linux:"
				}), " Node.js, Rust, and the WebKitGTK / GTK 3 development libraries from your package manager - everything runs locally."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On Windows or macOS:"
				}), " Node.js, Git, a GitHub account, and the ability to push a repo. The Linux build itself runs on GitHub Actions."] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"You cannot produce a native Linux ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".AppImage" }),
					" directly from Windows or macOS. Tauri v2 has no supported local cross-compilation path for Linux. The recommended way is GitHub Actions on an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ubuntu-latest" }),
					" runner, described in each section below."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinuxSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacosSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "development",
			title: "Development",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Running ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "tauri:dev" }),
						" opens your app in a native Linux window. This requires a Linux machine with the requirements installed (see the Linux section):"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "This launches your app in a native Linux window with:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hot reload for frontend changes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Native window with system tray support" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Access to Linux APIs" }),
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
					children: "Build a distributable Linux application. On Linux this runs locally; on Windows and macOS it runs in GitHub Actions (see those sections):"
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
					width: 340,
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
							n: "appimage",
							d: 4
						},
						{
							n: "my-app_0.1.0_amd64.AppImage",
							d: 5,
							dot: true
						},
						{
							n: "deb",
							d: 4
						},
						{
							n: "my-app_0.1.0_amd64.deb",
							d: 5
						},
						{
							n: "rpm",
							d: 4
						},
						{
							n: "my-app-0.1.0-1.x86_64.rpm",
							d: 5
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "appimage/*.AppImage" }), " - Portable executable (recommended for distribution)"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "deb/*.deb" }), " - Debian/Ubuntu package"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "rpm/*.rpm" }), " - Fedora/RHEL package"] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The build output is a native Linux binary that runs without any additional dependencies." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "code-signing",
			title: "Code Signing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Bini.js supports signed AppImage and binary distribution via the Tauri updater signing key. Generate a signing key with the Tauri CLI:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "Terminal",
					lang: "shell",
					code: `$ npm run tauri signer generate -- -w ~/.tauri/my-app.key`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Store the private key contents and its password as GitHub secrets, and reference them in the workflow. The ",
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
					filename: ".github/workflows/build-linux.yml",
					lang: "yaml",
					code: SIGNED_WORKFLOW
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "For production distribution, sign your AppImage and publish a checksum alongside it so users can verify integrity." })
			]
		})
	] });
}
function PlatformLinuxPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Linux",
		description: "Build native Linux desktop applications with Bini.js.",
		url: "https://bini.js.org/docs/platform-linux",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-linux.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/platform-macos",
			title: "macOS"
		},
		next: {
			to: "/docs/platform-android",
			title: "Android"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { PlatformLinuxPage as default };
