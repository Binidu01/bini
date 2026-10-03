import { E as createLucideIcon } from "./Layout-BFQT2L9M.js";
import { y as require_jsx_runtime } from "./index-ow2PL0w7.js";
import { _ as useDocLang, f as P, h as Table, i as CodeBlock, m as Section, n as C, o as DocPage, r as Callout } from "./DocBlocks-yIQx8cRX.js";
import { c as LINE, d as LayoutPanelTop, f as Folder, h as Atom, m as CircleAlert, n as CARD, p as File, u as Loader } from "./DocVisuals-BzN7mWOU.js";
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/lock.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData = {
	name: "lock",
	size: 24,
	node: [["rect", {
		width: "18",
		height: "11",
		x: "3",
		y: "11",
		rx: "2",
		ry: "2",
		key: "1w4ew1"
	}], ["path", {
		d: "M7 11V7a5 5 0 0 1 10 0v4",
		key: "fwvmzm"
	}]]
};
__iconData.node;
var Lock = createLucideIcon(__iconData);
//#endregion
//#region src/app/docs/parallel-routes.tsx
var import_jsx_runtime = require_jsx_runtime();
var TOC_ITEMS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "convention-slots",
		label: "Convention: slots"
	},
	{
		id: "default-tsx",
		label: "default.tsx fallback"
	},
	{
		id: "behavior",
		label: "Behavior in Bini"
	},
	{
		id: "tab-groups",
		label: "Tab groups inside slots"
	},
	{
		id: "loading-error",
		label: "Loading and error boundaries"
	},
	{
		id: "complete-example",
		label: "Complete example"
	}
];
var tag = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-sky-700 dark:text-sky-300",
	children: s
});
var prop = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-violet-700 dark:text-violet-300",
	children: s
});
var dim = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-neutral-400 dark:text-neutral-500",
	children: s
});
var str = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	className: "text-orange-700 dark:text-[#CE9178]",
	children: [
		"\"",
		s,
		"\""
	]
});
var BADGE_BG = {
	A: "bg-blue-500",
	B: "bg-purple-500",
	C: "bg-cyan-500"
};
var SELECTED_BORDER = {
	A: "border-blue-500 bg-blue-500/10",
	B: "border-purple-500 bg-purple-500/10",
	C: "border-cyan-500 bg-cyan-500/10"
};
function SlotBadge({ letter, size = "sm" }) {
	const cls = size === "md" ? "h-5 w-5 text-[10px]" : "h-4 w-4 text-[9px]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white shadow-sm ${BADGE_BG[letter]} ${cls}`,
		"aria-label": `Slot ${letter}`,
		children: letter
	});
}
function GridWrapper({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative my-6 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-[#0a0a0a]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-size-[20px_20px] bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bini-code-scroll relative overflow-x-auto p-4 sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full min-w-0",
				children
			})
		})]
	});
}
var ROW_ICON = "h-3.5 w-3.5 shrink-0 text-neutral-400 dark:text-neutral-500";
function FRow({ name, depth = 0, selected, badge, blueDot }) {
	const base = name.replace(/\.[^.]+$/, "");
	const icon = !name.includes(".") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
		className: ROW_ICON,
		strokeWidth: 1.5
	}) : base === "layout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutPanelTop, {
		className: ROW_ICON,
		strokeWidth: 1.5
	}) : base === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {
		className: ROW_ICON,
		strokeWidth: 1.5
	}) : base === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
		className: ROW_ICON,
		strokeWidth: 1.5
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(File, {
		className: ROW_ICON,
		strokeWidth: 1.5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex h-9 items-center gap-2 border-b border-neutral-200 pr-3 last:border-0 dark:border-neutral-800 ${selected ? `mx-1 my-0.5 rounded-lg border ${SELECTED_BORDER[badge ?? "A"]}` : ""}`,
		style: { paddingLeft: 12 + depth * 14 },
		children: [
			badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, { letter: badge }),
			icon,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `min-w-0 flex-1 truncate font-mono text-[12px] ${selected || blueDot ? "font-medium text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400"}`,
				title: name,
				children: name
			}),
			blueDot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 h-2 w-2 shrink-0 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" })
		]
	});
}
function FileTreeCard({ rows, width = 260 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width,
			maxWidth: "100%"
		},
		className: "w-full shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-[#1a1a1a] sm:w-auto",
		children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FRow, { ...r }, i))
	});
}
function CenteredTree({ rows, width }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileTreeCard, {
			width,
			rows
		})
	}) });
}
function BrowserChrome({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-md overflow-visible rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-[#1a1a1a] sm:max-w-105",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-9 items-center border-b border-neutral-200 bg-neutral-50 px-3 dark:border-neutral-700 dark:bg-[#141414]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 dark:border-neutral-600 dark:bg-[#222]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3 shrink-0 text-neutral-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] text-neutral-500",
						children: "example.com"
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-visible p-3",
			children
		})]
	});
}
/** Same card style as HierarchyVisual in DocVisuals */
function SlotHierarchyPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-full max-w-md ${CARD} sm:max-w-none sm:w-82.5`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex items-center gap-2 border-b px-3 py-2 font-sans text-[11px] text-neutral-600 dark:text-neutral-400 ${LINE}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
				className: "h-3.5 w-3.5 text-sky-500",
				strokeWidth: 1.5
			}), " Component hierarchy"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto p-3 font-mono text-[11px] leading-5 text-neutral-700 dark:text-neutral-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [
				dim("<"),
				tag("Layout"),
				dim(">"),
				"\n",
				"  ",
				dim("{"),
				prop("children"),
				dim("}"),
				"\n",
				"  ",
				dim("<"),
				tag("SlotBoundary"),
				" ",
				prop("slot"),
				"=",
				str("team"),
				dim(" />"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
					letter: "A",
					size: "md"
				}),
				"\n",
				"  ",
				dim("<"),
				tag("SlotBoundary"),
				" ",
				prop("slot"),
				"=",
				str("analytics"),
				dim(" />"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
					letter: "B",
					size: "md"
				}),
				"\n",
				dim("</"),
				tag("Layout"),
				dim(">")
			] })
		})]
	});
}
function VisualOverview({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:items-start lg:gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center lg:justify-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileTreeCard, {
				width: 240,
				rows: [
					{ name: "app" },
					{
						name: "@team",
						depth: 1
					},
					{
						name: `page.${ext}`,
						depth: 2,
						selected: true,
						badge: "A"
					},
					{
						name: "@analytics",
						depth: 1
					},
					{
						name: `page.${ext}`,
						depth: 2,
						selected: true,
						badge: "B"
					},
					{
						name: `layout.${ext}`,
						depth: 1
					},
					{
						name: `page.${ext}`,
						depth: 1
					}
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col items-center gap-4 lg:max-w-md lg:items-stretch lg:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden w-12 shrink-0 space-y-2 pt-1 sm:block sm:w-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full rounded bg-neutral-200 dark:bg-neutral-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[85%] rounded bg-neutral-200 dark:bg-neutral-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[70%] rounded bg-neutral-200 dark:bg-neutral-700" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1 rounded-lg border-2 border-blue-500 bg-blue-50/80 p-2 dark:bg-blue-500/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1.5 top-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
								letter: "A",
								size: "md"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-2",
							children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-7 shrink-0 rounded bg-blue-100 dark:bg-slate-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 space-y-1 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full rounded bg-blue-100 dark:bg-slate-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-[55%] rounded bg-blue-100 dark:bg-slate-700" })]
								})]
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1 rounded-lg border-2 border-purple-500 bg-purple-50/80 p-2 dark:bg-purple-500/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1.5 top-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
									letter: "B",
									size: "md"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex h-12 items-end justify-center gap-1 rounded bg-purple-100/80 p-1 dark:bg-purple-950/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-2.5 rounded-sm bg-purple-300 dark:bg-purple-500/40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-2.5 rounded-sm bg-purple-400 dark:bg-purple-500/55" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-2.5 rounded-sm bg-purple-300 dark:bg-purple-500/40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-9 w-2.5 rounded-sm bg-purple-500 dark:bg-purple-500/70" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-1.5 w-full rounded bg-purple-100 dark:bg-purple-950/50" })
						]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotHierarchyPanel, {})]
		})]
	}) });
}
function VisualLoading({ ext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:items-start lg:gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center lg:justify-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileTreeCard, {
				width: 240,
				rows: [
					{ name: "..." },
					{
						name: "@team",
						depth: 1
					},
					{
						name: `page.${ext}`,
						depth: 2
					},
					{
						name: `error.${ext}`,
						depth: 2
					},
					{
						name: `loading.${ext}`,
						depth: 2,
						selected: true,
						badge: "A"
					},
					{
						name: "@analytics",
						depth: 1
					},
					{
						name: `page.${ext}`,
						depth: 2
					},
					{
						name: `error.${ext}`,
						depth: 2,
						selected: true,
						badge: "B"
					},
					{
						name: `loading.${ext}`,
						depth: 2,
						selected: true,
						badge: "C"
					},
					{
						name: `layout.${ext}`,
						depth: 1
					}
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col items-center gap-3 lg:max-w-md lg:self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden w-10 shrink-0 space-y-1.5 pt-0.5 sm:block sm:w-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-5 rounded-full bg-neutral-200 dark:bg-neutral-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full rounded bg-neutral-200 dark:bg-neutral-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-[80%] rounded bg-neutral-200 dark:bg-neutral-700" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex min-h-18 min-w-0 flex-1 flex-col items-center justify-center rounded-lg border-2 border-blue-500 bg-blue-50 px-2 py-3 dark:bg-blue-950/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1.5 top-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
									letter: "A",
									size: "md"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 font-mono text-[11px] text-neutral-700 dark:text-white",
								children: "Loading..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex min-h-18 min-w-0 flex-1 flex-col items-center justify-center rounded-lg border-2 border-cyan-500 bg-cyan-50 px-2 py-3 dark:bg-cyan-950/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1.5 top-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
									letter: "C",
									size: "md"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 font-mono text-[11px] text-neutral-700 dark:text-white",
								children: "Loading..."
							})]
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-neutral-400 dark:text-neutral-600",
					"aria-hidden": true,
					children: "↓"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden w-10 shrink-0 space-y-1.5 pt-0.5 sm:block sm:w-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-5 rounded-full bg-neutral-200 dark:bg-neutral-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full rounded bg-neutral-200 dark:bg-neutral-700" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 space-y-2 opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 shrink-0 rounded bg-neutral-200 dark:bg-neutral-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 flex-1 self-center rounded bg-neutral-200 dark:bg-neutral-700" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 shrink-0 rounded bg-neutral-200 dark:bg-neutral-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 flex-1 self-center rounded bg-neutral-200 dark:bg-neutral-700" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-20 min-w-18 shrink-0 flex-col items-center justify-center rounded-lg border-2 border-red-500 bg-red-50 px-2 dark:bg-red-950/40 sm:min-w-22",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1.5 top-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBadge, {
									letter: "B",
									size: "md"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 font-mono text-[11px] text-neutral-700 dark:text-white",
								children: "Error..."
							})]
						})
					]
				}) })
			]
		})]
	}) });
}
function Content() {
	const e = useDocLang() === "js" ? "jsx" : "tsx";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "overview",
			title: "Overview",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Parallel routes let you render multiple pages in the same view at once. Folders prefixed with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@" }),
					" define ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold text-black dark:text-white",
						children: "slots"
					}),
					" - named subtrees that resolve independently of the main route tree and do not add a segment to the URL. Each slot is scanned like a normal route and tagged with its slot name."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualOverview, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Slots are generated as independent blocks via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "SlotBoundary" }),
					". The main route and each slot match the current pathname on their own. Slot names must match",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/^[a-zA-Z][a-zA-Z0-9_-]*$/" }),
					". This feature is experimental - check the generated",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/App.tsx" }),
					" to see how slots are wired."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Folder",
						"Creates URL?",
						"How it renders"
					],
					rows: [
						[
							"@team",
							"No - slot only",
							"Independent SlotBoundary block"
						],
						[
							`@team/page.${e}`,
							"Yes - via parent /",
							"Renders when parent matches (e.g. /)"
						],
						[
							`@analytics/page.${e}`,
							"Yes - via parent /",
							"Renders at the same time as the main page"
						]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "convention-slots",
			title: "Convention: slots",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"slots use the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@folder" }),
					" convention. The tree below defines two slots:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@team" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CenteredTree, {
					width: 280,
					rows: [
						{ name: "app" },
						{
							name: "@analytics",
							depth: 1,
							blueDot: true
						},
						{
							name: `page.${e}`,
							depth: 2
						},
						{
							name: "@team",
							depth: 1,
							blueDot: true
						},
						{
							name: `page.${e}`,
							depth: 2
						},
						{
							name: `layout.${e}`,
							depth: 1
						},
						{
							name: `page.${e}`,
							depth: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Routes inside a slot support the same patterns as the main tree: dynamic segments",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[id]" }),
					", catch-alls ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "[...slug]" }),
					", nested layouts, and templates. Each route is tagged with its slot name. Files prefixed with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "_" }),
					" or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "." }),
					" are ignored."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/@analytics/page.${e}`,
					tsCode: `// Slot content for / - does not add /@analytics to the URL
export default function AnalyticsSlot() {
  return <div>Analytics for /</div>
}`,
					jsCode: `export default function AnalyticsSlot() {
  return <div>Analytics for /</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/@team/page.${e}`,
					tsCode: `export default function TeamSlot() {
  return <div>Team for /</div>
}`,
					jsCode: `export default function TeamSlot() {
  return <div>Team for /</div>
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "default-tsx",
			title: `default.${e} fallback`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"When no route inside a slot matches the current URL, the nearest ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
					" ",
					"is rendered (nearest-wins: a subfolder shadows an ancestor). If none exists in the chain, a built-in \"No Content\" fallback is used."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CenteredTree, {
					width: 300,
					rows: [
						{ name: "app" },
						{
							name: "@team",
							depth: 1
						},
						{
							name: "settings",
							depth: 2
						},
						{
							name: `page.${e}`,
							depth: 3
						},
						{
							name: "@analytics",
							depth: 1
						},
						{
							name: `default.${e}`,
							depth: 2,
							blueDot: true
						},
						{
							name: `page.${e}`,
							depth: 2
						},
						{
							name: `default.${e}`,
							depth: 1,
							blueDot: true
						},
						{
							name: `layout.${e}`,
							depth: 1
						},
						{
							name: `page.${e}`,
							depth: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Example: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `@team/settings/page.${e}` }),
					" exists, but ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics" }),
					" has no",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/settings" }),
					" route. Navigating to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "/settings" }),
					" renders the @team settings page plus ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `@analytics/default.${e}` }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/@analytics/default.${e}`,
					tsCode: `export default function Default() {
  return <div>Select analytics view</div>
}`,
					jsCode: `export default function Default() {
  return <div>Select analytics view</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `default.${e}` }),
					" only applies inside ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@slot" }),
					" folders. Resolution is nearest-wins, same as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					", and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `not-found.${e}` }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "behavior",
			title: "Behavior in Bini",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Bini.js is a pure SPA with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "BrowserRouter" }),
					". Matching order: static first, then dynamic ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: ":param" }),
					", then required catch-alls ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "*" }),
					", then optional catch-alls",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "**" }),
					". Within each category, shorter paths win. Slots resolve independently through the same ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "matchRoute()" }),
					" path used for API routes."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Current URL",
						"@team",
						"@analytics",
						"Renders"
					],
					rows: [
						[
							"/",
							`page.${e}`,
							`page.${e}`,
							"Main page + both slots"
						],
						[
							"/settings",
							`settings/page.${e}`,
							`default.${e}`,
							"@team settings + @analytics default"
						],
						[
							"/unknown",
							"no match",
							"no match",
							`Both slots -> default.${e} or No Content`
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"Open generated ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/App.tsx" }),
					" to see how slots are wired with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "SlotBoundary" }),
					". Manifest entries include a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "slotName" }),
					" field for tooling such as",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "generateRouteManifest()" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "tab-groups",
			title: "Tab groups inside slots",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Add a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `layout.${e}` }),
					" inside a slot so that slot can navigate on its own (for example, tabs). Layouts render child routes with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "<Outlet />" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CenteredTree, {
					width: 280,
					rows: [
						{ name: "app" },
						{
							name: "@analytics",
							depth: 1
						},
						{
							name: "page-views",
							depth: 2
						},
						{
							name: `page.${e}`,
							depth: 3
						},
						{
							name: "visitors",
							depth: 2
						},
						{
							name: `page.${e}`,
							depth: 3
						},
						{
							name: `layout.${e}`,
							depth: 2,
							blueDot: true
						},
						{
							name: "...",
							depth: 1
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "@analytics" }),
					" has two subpages: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "page-views" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "visitors" }),
					". A layout inside the slot shares the tab bar across them."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/@analytics/layout.${e}`,
					tsCode: `import { Link, Outlet } from 'react-router-dom'

export default function AnalyticsLayout() {
  return (
    <>
      <nav className="flex gap-4 border-b">
        <Link to="/page-views">Page Views</Link>
        <Link to="/visitors">Visitors</Link>
      </nav>
      <Outlet />
    </>
  )
}`,
					jsCode: `import { Link, Outlet } from 'react-router-dom'

export default function AnalyticsLayout() {
  return (
    <>
      <nav className="flex gap-4 border-b">
        <Link to="/page-views">Page Views</Link>
        <Link to="/visitors">Visitors</Link>
      </nav>
      <Outlet />
    </>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "loading-error",
			title: "Loading and error boundaries",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Each slot can define its own ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `loading.${e}` }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: `error.${e}` }),
					". They use nearest-wins and are code-split with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "React.lazy" }),
					". In the diagram:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold text-black dark:text-white",
						children: "A"
					}),
					" = loading for @team, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold text-black dark:text-white",
						children: "B"
					}),
					" = error for @analytics,",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold text-black dark:text-white",
						children: "C"
					}),
					" = loading for @analytics."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualLoading, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "The loading file is the Suspense fallback. Error boundaries reset when the pathname changes. The built-in fallback renders nothing in development and a generic retry UI in production." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/@analytics/loading.${e}`,
					tsCode: `export default function Loading() {
  return <div>Loading analytics...</div>
}`,
					jsCode: `export default function Loading() {
  return <div>Loading analytics...</div>
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					filename: `app/@team/error.${e}`,
					tsCode: `export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Team failed</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}`,
					jsCode: `export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Team failed</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "complete-example",
			title: "Complete example",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
					"Structure supported by bini-router for parallel routes: slots, default fallback, nested layouts inside slots, and loading/error boundaries. Slots render through independent",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "SlotBoundary" }),
					" blocks - they are not passed as props into the layout."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualOverview, { ext: e }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Path",
						"URL",
						"Support"
					],
					rows: [
						[
							`app/page.${e}`,
							"/",
							"Main tree"
						],
						[
							`app/@analytics/page.${e}`,
							"/",
							"Slot via SlotBoundary"
						],
						[
							`app/@team/page.${e}`,
							"/",
							"Slot via SlotBoundary"
						],
						[
							`app/@analytics/default.${e}`,
							"-",
							"Fallback, nearest-wins"
						],
						[
							`app/@analytics/page-views/page.${e}`,
							"/page-views",
							"Slot sub-route"
						],
						[
							`app/@analytics/layout.${e}`,
							"-",
							"Nested layout with Outlet"
						],
						[
							`app/_components/Header.${e}`,
							"-",
							"Ignored (_ prefix)"
						]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, { children: [
					"For conditional UI inside a slot, gate rendering in the slot page itself. Confirm the generated composition in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { children: "src/App.tsx" }),
					"."
				] })
			]
		})
	] });
}
function ParallelRoutesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Parallel Routes",
		badge: "Experimental",
		description: "Parallel routes with @ slots - independent route trees that render at the same time via SlotBoundary.",
		url: "https://bini.js.org/docs/parallel-routes",
		editUrl: "https://github.com/Binidu01/bini-official/edit/main/src/app/docs/parallel-routes.tsx",
		toc: TOC_ITEMS,
		prev: {
			to: "/docs/dynamic-routes",
			title: "Dynamic Routes"
		},
		next: {
			to: "/docs/catch-all-routes",
			title: "Catch-All Routes"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {})
	});
}
//#endregion
export { ParallelRoutesPage as default };
