import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { f as P, g as UL, h as Table, i as CodeBlock, l as H3, m as Section, n as C, o as DocPage, p as PromptOutput, r as Callout, s as ExtLink, u as MultiTerminal } from "./DocBlocks-yIQx8cRX.js";
import { r as FeatureCard } from "./DocVisuals-BzN7mWOU.js";
//#region src/app/docs/platform-android.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "android-overview",
		label: "Android Overview"
	},
	{
		id: "requirements",
		label: "Requirements"
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
var JAVA_URL = "https://adoptium.net/temurin/releases/?version=17";
var ANDROID_STUDIO_URL = "https://developer.android.com/studio";
var RUSTUP_URL = "https://rustup.rs/";
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
		command: `$ npx create-bini-app@latest my-app --platform android
$ cd my-app
$ npm install`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform android
$ cd my-app
$ pnpm install`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform android
$ cd my-app
$ yarn install`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform android
$ cd my-app
$ bun install`
	}
];
var DEV_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run android`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm android`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn android`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run android`
	}
];
var BUILD_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npm run android:build`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm android:build`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn android:build`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bun run android:build`
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
var SIGN_TABS = [
	{
		id: "npm",
		label: "npm",
		command: `$ npx create-bini-app@latest my-app --platform android --sign`
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: `$ pnpm dlx create-bini-app@latest my-app --platform android --sign`
	},
	{
		id: "yarn",
		label: "yarn",
		command: `$ yarn dlx create-bini-app@latest my-app --platform android --sign`
	},
	{
		id: "bun",
		label: "bun",
		command: `$ bunx create-bini-app@latest my-app --platform android --sign`
	}
];
var RUST_TARGET_TABS = [{
	id: "rustup",
	label: "rustup",
	command: `$ rustup target add aarch64-linux-android
$ rustup target add armv7-linux-androideabi
$ rustup target add i686-linux-android
$ rustup target add x86_64-linux-android`
}];
function ScaffoldBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
			className: "mt-6 mb-3",
			children: "Create the Project"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
			className: "mb-4",
			children: "Create a new Bini.js project targeting Android and install its dependencies:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: CREATE_AND_INSTALL_TABS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
			className: "mb-4",
			children: [
				"Or use the interactive prompt and select ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "Android" }),
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
				text: "Android",
				selected: true
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
function WindowsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "windows",
		title: "Windows",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "Android apps can be built natively on Windows - Tauri's Android toolchain runs locally on all three desktop OSes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Java JDK 17 - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: JAVA_URL,
						children: "Download (Eclipse Temurin)"
					}),
					", then set",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "JAVA_HOME" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Android Studio - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: ANDROID_STUDIO_URL,
						children: "Download"
					}),
					". Install the SDK, Build Tools, and NDK."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Set ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ANDROID_HOME" }),
					" to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "%USERPROFILE%\\AppData\\Local\\Android\\Sdk" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Rust via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: RUSTUP_URL,
						children: "rustup"
					}),
					", then add the Android targets (see Requirements)"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android" }),
					" to launch on an emulator or connected device, then ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android:build" }),
					" ",
					"to produce a release APK/AAB:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }), " Install USB drivers for your device if deploying to a physical phone."] })
		]
	});
}
function MacosSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "macos",
		title: "macOS",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "Android apps can be built natively on macOS - Tauri's Android toolchain runs locally on all three desktop OSes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Java JDK 17 - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: JAVA_URL,
						children: "Download (Eclipse Temurin)"
					}),
					", then set",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "JAVA_HOME" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Android Studio - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: ANDROID_STUDIO_URL,
						children: "Download"
					}),
					". Install the SDK, Build Tools, and NDK."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Set ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ANDROID_HOME" }),
					" to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "~/Library/Android/sdk" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Rust via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: RUSTUP_URL,
						children: "rustup"
					}),
					", then add the Android targets (see Requirements)"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android" }),
					" to launch on an emulator or connected device, then ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android:build" }),
					" ",
					"to produce a release APK/AAB:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Add the Android SDK platform-tools directory to your ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "PATH" }),
				" so",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "adb" }),
				" is available from the terminal."
			] })
		]
	});
}
function LinuxSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "linux",
		title: "Linux",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
				className: "mb-4",
				children: "Android apps can be built natively on Linux - Tauri's Android toolchain runs locally on all three desktop OSes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
				className: "mt-6 mb-3",
				children: "Step 1: Install the tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Node.js ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "20.19.0" }),
					" or higher"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Java JDK 17 - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: JAVA_URL,
						children: "Download (Eclipse Temurin)"
					}),
					", then set",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "JAVA_HOME" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Android Studio - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: ANDROID_STUDIO_URL,
						children: "Download"
					}),
					". Install the SDK, Build Tools, and NDK."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Set ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ANDROID_HOME" }),
					" to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "~/Android/Sdk" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Rust via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
						href: RUSTUP_URL,
						children: "rustup"
					}),
					", then add the Android targets (see Requirements)"
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android" }),
					" to launch on an emulator or connected device, then ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "android:build" }),
					" ",
					"to produce a release APK/AAB:"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tip:" }),
				" Install the udev rules for your device - otherwise ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "adb" }),
				" may not detect connected phones."
			] })
		]
	});
}
function Content() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "android-overview",
			title: "Android Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Bini.js builds native Android applications on top of Tauri v2. Your React app runs inside a native Android WebView with full access to system APIs, permissions, and platform features."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Native APK / AAB",
							text: "APK for direct install, AAB for Play Store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Code Signing",
							text: "Keystore signing wired in at scaffold time"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							title: "Auto Plugin Wiring",
							text: "bini-native wires Android permissions"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Android builds use Tauri's Android backend. Your app runs in a native WebView with full system access." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "requirements",
			title: "Requirements",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Building Android apps requires the same toolchain on every desktop OS. See the section for your OS below for exact setup steps."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Dependency", "Version / Notes"],
					rows: [
						["Node.js", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "20.19.0 or higher" })],
						["Java JDK", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"17 - ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
								href: JAVA_URL,
								children: "Download (Eclipse Temurin)"
							}),
							", then set",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "JAVA_HOME" })
						] })],
						["Android Studio", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"SDK, Build Tools, and NDK -",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtLink, {
								href: ANDROID_STUDIO_URL,
								children: "Download"
							}),
							", then set",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ANDROID_HOME" })
						] })],
						["Rust targets", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "aarch64-linux-android" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "armv7-linux-androideabi" }),
							",",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "i686-linux-android" }),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "x86_64-linux-android" })
						] })]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Add the required Rust targets with rustup:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: RUST_TARGET_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "ANDROID_HOME" }),
					" points to your SDK path - ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "~/Library/Android/sdk" }),
					" on macOS,",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "~/Android/Sdk" }),
					" on Linux, or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "%USERPROFILE%\\AppData\\Local\\Android\\Sdk" }),
					" on Windows."
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "Run your Android app on an emulator or a connected device. This works the same on every desktop OS:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: DEV_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
					className: "mb-4",
					children: "This launches your app with:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UL, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hot reload for frontend changes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Native Android integration" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Auto-wired native APIs via ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "bini-native" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Devtools for debugging" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, {
					className: "mt-6 mb-3",
					children: "Setting Up an Emulator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: OL,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open Android Studio" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Go to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: STRONG,
							children: "AVD Manager"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Create a virtual device" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Start the emulator" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Run ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run android" })] })
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
					children: "Build a release APK or AAB for distribution:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: BUILD_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"The build outputs land in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src-tauri/gen/android/app/build/outputs/" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: ["Output", "Purpose"],
					rows: [[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app-release.apk" }, "apk"), "Direct installation on a device (sideloading, internal testing)."], [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "app-release.aab" }, "aab"), "Android App Bundle for publishing to the Google Play Store."]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "The output is a native Android app that runs on Android 5.0 (API 21) and above." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "code-signing",
			title: "Code Signing",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Configure keystore signing at scaffold time or later. Create a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "keystore.properties" }),
						" ",
						"file inside ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src-tauri/gen/android/" }),
						":"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: "keystore.properties",
					code: `storeFile=my-keystore.keystore
storePassword=your-keystore-password
keyAlias=my-key-alias
keyPassword=your-key-password`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, {
					className: "mb-4",
					children: [
						"Or pass ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "--sign" }),
						" at scaffold time to set signing up automatically:"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiTerminal, { tabs: SIGN_TABS }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "For Google Play Store distribution, your app must be signed with a keystore. Keep the keystore secure and never commit it to version control." })
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
						"build a signed APK or submit to the Play Store:"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Build your release APK/AAB with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run android:build" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Run ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "npm run deploy" }),
							" to push source to GitHub"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Upload the APK/AAB to the Google Play Console manually" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "Store submission is manual. After building your APK/AAB, upload it to the Google Play Console for distribution." })
			]
		})
	] });
}
function PlatformAndroidPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Android",
		description: "Build native Android mobile applications with Bini.js.",
		url: "https://bini.js.org/docs/platform-android",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/platform-android.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/platform-linux",
			title: "Linux"
		},
		next: {
			to: "/docs/platform-ios",
			title: "iOS"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { PlatformAndroidPage as default };
