import { T as ChevronRight } from "./Layout-BFQT2L9M.js";
import { C as require_react, b as Link, w as __toESM, x as useLocation, y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { o as DocPage, y as ChevronDown } from "./DocBlocks-yIQx8cRX.js";
//#region src/components/PluginSidebar.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PLUGIN_ITEMS = [
	{
		title: "overview",
		href: "/plugins"
	},
	{
		title: "create-bini-app",
		href: "/plugins/create-bini-app"
	},
	{
		title: "bini-deploy",
		href: "/plugins/bini-deploy"
	},
	{
		title: "bini-router",
		href: "/plugins/bini-router"
	},
	{
		title: "bini-env",
		href: "/plugins/bini-env"
	},
	{
		title: "bini-native",
		href: "/plugins/bini-native"
	},
	{
		title: "bini-server",
		href: "/plugins/bini-server"
	},
	{
		title: "bini-overlay",
		href: "/plugins/bini-overlay"
	},
	{
		title: "bini-ssg",
		href: "/plugins/bini-ssg"
	},
	{
		title: "vite plugins",
		href: "https://vite.dev/plugins/",
		external: true
	},
	{
		title: "hono plugins",
		href: "https://hono.dev/docs/",
		external: true
	}
];
var LINK_BASE = "block py-1.5 text-sm transition-colors";
var LINK_ACTIVE = "font-medium text-cyan-600 dark:text-cyan-400";
var LINK_IDLE = "text-neutral-600 hover:text-cyan-600 dark:text-neutral-400 dark:hover:text-cyan-400";
function PluginSidebarContent() {
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "py-1",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col",
			children: PLUGIN_ITEMS.map((item) => {
				if (item.external) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					target: "_blank",
					rel: "noopener noreferrer",
					className: `${LINK_BASE} ${LINK_IDLE}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "text-xs opacity-60",
							children: "↗"
						})]
					})
				}, item.href);
				const isActive = location.pathname === item.href;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.href,
					className: `${LINK_BASE} ${isActive ? LINK_ACTIVE : LINK_IDLE}`,
					children: item.title
				}, item.href);
			})
		})
	});
}
function PluginSidebar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-24 w-44 max-h-[calc(100vh-8rem)] overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full pl-6 pr-3 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginSidebarContent, {})
			})
		})
	});
}
function PluginLayout({ children }) {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		setMobileMenuOpen(false);
	}, [location.pathname]);
	(0, import_react.useEffect)(() => {
		const onResize = () => {
			if (window.innerWidth >= 1024) setMobileMenuOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	(0, import_react.useEffect)(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
			document.documentElement.classList.add("mobile-menu-open");
		} else {
			document.body.style.overflow = "";
			document.documentElement.classList.remove("mobile-menu-open");
		}
		requestAnimationFrame(() => {
			window.dispatchEvent(new Event("resize"));
		});
		return () => {
			document.body.style.overflow = "";
			document.documentElement.classList.remove("mobile-menu-open");
		};
	}, [mobileMenuOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4 xl:gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "w-44 shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginSidebar, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-w-0 flex-1 pb-8",
				children
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setMobileMenuOpen(!mobileMenuOpen),
				className: "flex items-center gap-2 text-lg font-semibold text-neutral-700 transition-colors hover:text-black dark:text-neutral-200 dark:hover:text-white",
				children: [mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menu" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 border-t border-neutral-200 dark:border-neutral-800" }),
			mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed left-0 right-0 bottom-0 top-14 z-40 bg-white px-6 py-6 dark:bg-black lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMobileMenuOpen(false),
						className: "mb-4 flex items-center gap-2 text-lg font-semibold text-neutral-700 transition-colors hover:text-black dark:text-neutral-200 dark:hover:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menu" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-4 border-t border-neutral-200 dark:border-neutral-800" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-[calc(100vh-8rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full w-full overflow-y-auto overscroll-contain pr-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginSidebarContent, {})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-8",
				children
			})
		]
	})] });
}
//#endregion
//#region src/components/PluginPage.tsx
function PluginPage({ title, badge, description, url, editUrl, toc, prev, next, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title,
		badge,
		description,
		url,
		editUrl,
		toc,
		prev,
		next,
		layout: PluginLayout,
		children
	});
}
//#endregion
export { PluginPage as t };
