import { D as m, E as createLucideIcon, O as AnimatePresence, n as Header, t as Footer } from "./Layout-BFQT2L9M.js";
import { C as require_react, w as __toESM, y as require_jsx_runtime } from "./index-ow2PL0w7.js";
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/link-2.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData = {
	name: "link-2",
	size: 24,
	node: [
		["path", {
			d: "M9 17H7A5 5 0 0 1 7 7h2",
			key: "8i5ue5"
		}],
		["path", {
			d: "M15 7h2a5 5 0 1 1 0 10h-2",
			key: "1b9ql8"
		}],
		["line", {
			x1: "8",
			x2: "16",
			y1: "12",
			y2: "12",
			key: "1jonct"
		}]
	]
};
__iconData.node;
var Link2 = createLucideIcon(__iconData);
//#endregion
//#region src/app/showcase/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PROJECTS = [{
	id: "island-link",
	title: "Island Link",
	url: "https://island-link-rust.vercel.app/",
	repo: "Island-Link",
	category: "Composable Commerce"
}, {
	id: "travel-assistant",
	title: "Travel Assistant AI",
	url: "https://travel-assistant-lac.vercel.app/",
	repo: "Travel-Assistant",
	category: "AI"
}];
var PREVIEW_WIDTH = 1280;
var MOBILE_PREVIEW_WIDTH = 480;
var PREVIEW_ASPECT = 10 / 16;
var HOST_ID = "bini-showcase-frames";
function getHost() {
	let host = document.getElementById(HOST_ID);
	if (!host) {
		host = document.createElement("div");
		host.id = HOST_ID;
		host.setAttribute("aria-hidden", "true");
		host.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;overflow:visible;pointer-events:none;z-index:10;";
		document.body.appendChild(host);
	}
	return host;
}
function parkFrame(frame) {
	frame.style.visibility = "hidden";
	frame.style.transform = "translate(-9999px, 0)";
}
/** Returns the project's iframe, creating it (once) if it doesn't exist yet. */
function getFrame(p) {
	const host = getHost();
	let frame = host.querySelector(`iframe[data-id="${p.id}"]`);
	if (!frame) {
		frame = document.createElement("iframe");
		frame.dataset.id = p.id;
		frame.src = p.url;
		frame.tabIndex = -1;
		frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
		Object.assign(frame.style, {
			position: "absolute",
			left: "0",
			top: "0",
			width: `${PREVIEW_WIDTH}px`,
			height: `${PREVIEW_WIDTH * PREVIEW_ASPECT}px`,
			border: "0",
			background: "#fff",
			opacity: "0",
			transformOrigin: "top left",
			transition: "opacity 500ms",
			pointerEvents: "none"
		});
		parkFrame(frame);
		frame.addEventListener("load", () => {
			frame.dataset.loaded = "1";
		});
		host.appendChild(frame);
	}
	return frame;
}
/** Moves the iframe over its slot and scales it to fit. */
function placeFrame(frame, slot) {
	const r = slot.getBoundingClientRect();
	if (r.width === 0) return;
	const designWidth = window.innerWidth < 640 ? MOBILE_PREVIEW_WIDTH : PREVIEW_WIDTH;
	if (frame.dataset.designWidth !== String(designWidth)) {
		frame.dataset.designWidth = String(designWidth);
		frame.style.width = `${designWidth}px`;
		frame.style.height = `${designWidth * PREVIEW_ASPECT}px`;
	}
	const scale = r.width / designWidth;
	const radius = 12 / scale;
	frame.style.visibility = "visible";
	frame.style.opacity = frame.dataset.loaded ? "1" : "0";
	frame.style.borderRadius = `${radius}px ${radius}px 0 0`;
	frame.style.transform = `translate(${r.left + window.scrollX}px, ${r.top + window.scrollY}px) scale(${scale})`;
}
var preloadStarted = false;
/** Warms connections now, then creates the iframes once the browser is idle. */
function preloadShowcase() {
	if (typeof window === "undefined" || preloadStarted) return;
	preloadStarted = true;
	for (const p of PROJECTS) try {
		const origin = new URL(p.url).origin;
		for (const rel of ["dns-prefetch", "preconnect"]) {
			const link = document.createElement("link");
			link.rel = rel;
			link.href = origin;
			if (rel === "preconnect") link.crossOrigin = "";
			document.head.appendChild(link);
		}
	} catch {}
	const createAll = () => PROJECTS.forEach(getFrame);
	const schedule = () => {
		const w = window;
		if (w.requestIdleCallback) w.requestIdleCallback(createAll, { timeout: 4e3 });
		else setTimeout(createAll, 1500);
	};
	if (document.readyState === "complete") schedule();
	else window.addEventListener("load", schedule, { once: true });
}
preloadShowcase();
function LiveScreenshot({ project }) {
	const slotRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const slot = slotRef.current;
		if (!slot) return;
		const frame = getFrame(project);
		let raf = 0;
		const tick = () => {
			placeFrame(frame, slot);
			raf = requestAnimationFrame(tick);
		};
		tick();
		return () => {
			cancelAnimationFrame(raf);
			parkFrame(frame);
		};
	}, [project]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: slotRef,
		className: "relative aspect-16/10 w-full overflow-hidden bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-800",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-bold text-neutral-700 dark:text-neutral-300",
					children: project.title.charAt(0).toUpperCase()
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-neutral-700 dark:text-neutral-300",
				children: project.title
			})]
		})
	});
}
function CopyToast({ visible }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
		initial: {
			opacity: 0,
			y: -16,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -12,
			scale: .96
		},
		transition: {
			duration: .22,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "pointer-events-none fixed inset-x-0 top-20 z-100 flex justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-w-full items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 shadow-lg dark:border-neutral-800 dark:bg-neutral-900",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-4 w-4 shrink-0 text-neutral-700 dark:text-neutral-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-neutral-800 dark:text-neutral-200",
				children: "Command copied to clipboard"
			})]
		})
	}) });
}
function ShowcaseCard({ project, onCopy }) {
	const cloneCommand = `git clone https://github.com/Binidu01/${project.repo}.git`;
	const copyClone = () => {
		navigator.clipboard?.writeText(cloneCommand).catch(() => {});
		onCopy(cloneCommand);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: project.url,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "relative block overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveScreenshot, { project })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: project.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mb-1 inline-flex max-w-full items-center gap-1 text-base font-medium text-black transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: project.title
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-neutral-600 dark:text-neutral-400",
					children: project.category
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: copyClone,
					className: "inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-black dark:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-950",
					children: "Use template"
				})
			})
		]
	});
}
function ShowcasePage() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const [toastVisible, setToastVisible] = (0, import_react.useState)(false);
	const [toastTimer, setToastTimer] = (0, import_react.useState)(null);
	const categories = (0, import_react.useMemo)(() => {
		return ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
	}, []);
	const effectiveCategory = categories.includes(activeCategory) ? activeCategory : "All";
	const filtered = effectiveCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === effectiveCategory);
	const handleCopy = () => {
		setToastVisible(true);
		if (toastTimer) clearTimeout(toastTimer);
		const t = setTimeout(() => setToastVisible(false), 2200);
		setToastTimer(t);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white font-sans antialiased overflow-x-hidden dark:bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-white px-4 pt-20 pb-16 dark:bg-black sm:px-6 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 text-center sm:mb-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-balance text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] font-bold tracking-tight text-black md:whitespace-nowrap dark:text-white",
								children: "Meet beautiful websites built with Bini.js"
							})
						}),
						categories.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex flex-wrap items-center justify-center gap-1.5 sm:mb-10 sm:gap-2",
							children: categories.map((cat) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveCategory(cat),
									className: `rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-colors sm:py-1.5 ${effectiveCategory === cat ? "bg-black text-white dark:bg-white dark:text-black" : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"}`,
									children: cat
								}, cat);
							})
						}),
						filtered.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
							children: filtered.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowcaseCard, {
								project,
								onCopy: handleCopy
							}, project.id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "py-16 text-center text-sm text-neutral-500 sm:py-24",
							children: "No projects in this category yet."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyToast, { visible: toastVisible }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ShowcasePage as default };
