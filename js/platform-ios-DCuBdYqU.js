import { u as siGithub } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, t as BrandIcon, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { a as GridBg, i as FolderVisual, n as CARD, r as FeatureCard, t as Arrow } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/platform-ios.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "ios-overview",
		label: "iOS Overview"
	},
	{
		id: "requirements",
		label: "Requirements"
	},
	{
		id: "macos",
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
	},
	{
		id: "deployment",
		label: "Deployment"
	}
];
var OL = "mb-6 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400";
var STRONG = "font-medium text-neutral-900 dark:text-neutral-100";
var XCODE_URL = "https://apps.apple.com/app/xcode/id497799835";
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
var CREATE_AND_INSTALL_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest my-app --platform ios
$ cd my-app
$ npm install
$ pod install --project-directory=src-tauri/gen/ios`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform ios
$ cd my-app
$ pnpm install
$ pod install --project-directory=src-tauri/gen/ios`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform ios
$ cd my-app
$ yarn install
$ pod install --project-directory=src-tauri/gen/ios`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform ios
$ cd my-app
$ bun install
$ pod install --project-directory=src-tauri/gen/ios`
	}
];
var DEV_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run ios`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm ios`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn ios`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run ios`
	}
];
var BUILD_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run ios:build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm ios:build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn ios:build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run ios:build`
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
var RUST_TARGET_TABS = [{
	id: "rustup",
	label: "rustup",
	command: `$ rustup target add aarch64-apple-ios
$ rustup target add x86_64-apple-ios
$ rustup target add aarch64-apple-ios-sim`
}];
var TAURI_ACTION_WORKFLOW = `# .github/workflows/build-ios.yml
name: Build iOS App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-ios:
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
          targets: aarch64-apple-ios,x86_64-apple-ios,aarch64-apple-ios-sim

      - name: Install CocoaPods
        run: sudo gem install cocoapods

      - name: Install dependencies
        run: npm install

      - name: Install pods
        run: pod install --project-directory=src-tauri/gen/ios

      - name: Build Tauri app
        uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__
          releaseName: 'App v__VERSION__'
          releaseDraft: true`;
var SIGNED_WORKFLOW = `# .github/workflows/build-ios.yml
name: Build iOS App

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-ios:
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
          targets: aarch64-apple-ios,x86_64-apple-ios,aarch64-apple-ios-sim

      - name: Install CocoaPods
        run: sudo gem install cocoapods

      - name: Install dependencies
        run: npm install

      - name: Install pods
        run: pod install --project-directory=src-tauri/gen/ios

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
/** How an iOS build is produced from Windows or Linux. */
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
				children: "ios-build artifact"
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
			children: "Create a new Bini.js project targeting iOS, install its dependencies, and install its pods:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: CREATE_AND_INSTALL_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Or use the interactive prompt and select ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "iOS" }),
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
				text: "macOS Desktop"
			},
			{
				kind: "option",
				text: "Android"
			},
			{
				kind: "option",
				text: "iOS",
				selected: true
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".github/workflows/build-ios.yml" }),
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
					n: "build-ios.yml",
					d: 2,
					dot: true
				},
				{ n: "src-tauri" },
				{ n: "package.json" }
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			filename: ".github/workflows/build-ios.yml",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "iOS" }),
				". This initializes the repo, commits, and pushes everything to GitHub in one step:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Once pushed, the workflow runs on a real macOS runner and builds the iOS app bundle."
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
		id: "macos",
		title: "macOS",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "On macOS you can scaffold, develop, and build the iOS app entirely on your own machine - no CI required."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "macOS 11 (Big Sur) or higher" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Xcode - ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
					href: XCODE_URL,
					children: "Download from the Mac App Store"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Xcode Command Line Tools - run ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "xcode-select --install" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["CocoaPods - run ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "sudo gem install cocoapods" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Rust via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: "https://rustup.rs/",
						children: "rustup"
					}),
					", then add the iOS targets (see Requirements)"
				] })
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ios" }),
					" to launch on the simulator or a connected device, then ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ios:build" }),
					" to produce the app bundle:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }), " Xcode handles signing automatically with your Apple ID for development builds."] })
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
					"A native iOS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".app" }),
					" cannot be produced on Windows - Tauri relies on Xcode, Apple's signing toolchain, and CocoaPods, none of which run on Windows. The Tauri team's own recommendation is to build iOS apps on a ",
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
				" Tauri's iOS build needs Xcode and Apple's signing toolchain, which do not exist on Windows. GitHub Actions on ",
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
					"A native iOS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".app" }),
					" cannot be produced on Linux - Tauri relies on Xcode, Apple's signing toolchain, and CocoaPods, none of which run on Linux. The Tauri team's own recommendation is to build iOS apps on a ",
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
				" Tauri's iOS build needs Xcode and Apple's signing toolchain, which do not exist on Linux. GitHub Actions on ",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Build iOS App" }),
				" run."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Under ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "Artifacts"
				}),
				", download ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ios-build" }),
				". Or, if a release was created, download the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".ipa" }),
				" from the Releases page."
			] })
		]
	});
}
function Content() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "ios-overview",
			title: "iOS Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Bini.js allows you to build native iOS mobile applications using Tauri v2. Your React app runs inside a WKWebView with full access to native iOS APIs and features."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native iOS App",
							text: "Real native WKWebView, not a wrapper"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Code Signing",
							text: "Xcode-managed automatic signing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Auto Plugin Wiring",
							text: "bini-native wires iOS permissions"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "iOS apps are built using Tauri's iOS backend. Your app runs in a native WKWebView with full system access." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "requirements",
			title: "Requirements",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Building iOS apps requires different tools depending on your operating system. See the section for your OS below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On macOS:"
				}), " Xcode, Xcode Command Line Tools, CocoaPods, Node.js, and Rust with iOS targets - everything runs locally."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: STRONG,
					children: "On Windows or Linux:"
				}), " Node.js, Git, a GitHub account, and the ability to push a repo. The iOS build itself runs on GitHub Actions."] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Add the required Rust targets with rustup:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: RUST_TARGET_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"You cannot produce a native iOS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ".app" }),
					" directly from Windows or Linux. Tauri v2 has no supported local cross-compilation path for iOS. The recommended way is GitHub Actions on a ",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ios" }),
						" opens your app on the iOS Simulator or a connected device. This requires a Mac with Xcode installed (see the macOS section):"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "This launches your app with:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hot reload for frontend changes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Native iOS integration" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Auto-wired native APIs via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-native" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Safari Web Inspector for debugging" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Setting Up a Simulator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: OL,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open Xcode" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Go to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Settings"
							}),
							" →",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: STRONG,
								children: "Platforms"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Download a simulator for your target iOS version" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Run ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run ios" })] })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "building",
			title: "Building",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Build a distributable iOS app. On macOS this runs locally; on Windows and Linux it runs in GitHub Actions (see those sections):"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The build outputs land in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src-tauri/gen/ios/" }),
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
							n: "gen",
							d: 1
						},
						{
							n: "ios",
							d: 2
						},
						{
							n: "build",
							d: 3
						},
						{
							n: "my-app.app",
							d: 4,
							dot: true
						},
						{
							n: "my-app.ipa",
							d: 4
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "my-app.app" }), " - iOS app bundle (for simulator/testing)"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "my-app.ipa" }), " - iOS App Store package (for distribution)"] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The build output is a native iOS app that runs on iOS 13.0 and above." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "code-signing",
			title: "Code Signing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "iOS code signing is managed by Xcode. For local development, Xcode uses automatic signing with your Apple ID - just open the project in Xcode and configure your team:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "Terminal",
					lang: "shell",
					code: `$ open src-tauri/gen/ios/MyApp.xcodeproj`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"In Xcode, select the project → ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Signing & Capabilities"
						}),
						" ",
						"→ choose your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "Team"
						}),
						". Xcode handles the rest."
					]
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
					filename: ".github/workflows/build-ios.yml",
					lang: "yaml",
					code: SIGNED_WORKFLOW
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "For App Store distribution, you need an Apple Developer account and provisioning profiles. Development builds use Xcode's automatic signing." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "deployment",
			title: "Deployment",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
						" pushes your project source to GitHub - it does ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "not" }),
						" ",
						"build a signed IPA or submit to App Store Connect:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEPLOY_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Deployment Flow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: OL,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Build your app with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run ios:build" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Run ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
							" to push source to GitHub"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Upload the IPA to App Store Connect manually" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Store submission is manual. After building your app, upload it to App Store Connect for TestFlight or App Store distribution." })
			]
		})
	] });
}
function PlatformIosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "iOS",
		description: "Build native iOS mobile applications with Bini.js.",
		url: "https://bini.js.org/docs/platform-ios",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-ios.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/platform-android",
			title: "Android"
		},
		next: {
			to: "/docs/deploying",
			title: "Deployment"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { PlatformIosPage as default };
