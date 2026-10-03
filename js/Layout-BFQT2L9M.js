import { C as require_react, S as useNavigate, _ as isMotionValue, a as scrapeMotionValuesFromProps$1, b as Link, c as isForcedMotionValue, d as isVariantLabel, f as isAnimationControls, g as optimizedAppearDataAttribute, h as isHTMLElement, i as LazyContext, l as isControllingVariants, m as buildHTMLStyles, n as loadFeatures, o as isSVGTag, p as buildSVGAttrs, r as getInitializedFeatureDefinitions, s as scrapeMotionValuesFromProps, t as isSVGComponent, u as isVariantNode, v as resolveVariantFromProps, w as __toESM, y as require_jsx_runtime } from "./index-ow2PL0w7.js";
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/utils/use-constant.mjs
/**
* Creates a constant value over the lifecycle of a component.
*
* Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
* a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
* you can ensure that initialisers don't execute twice or more.
*/
function useConstant(init) {
	const ref = (0, import_react.useRef)(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
/**
* @public
*/
var PresenceContext = /* @__PURE__ */ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/.pnpm/motion-dom@13.4.1/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*/
function resolveMotionValue(value) {
	return isMotionValue(value) ? value.get() : value;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
/**
* @public
*/
var MotionConfigContext = (0, import_react.createContext)({
	transformPagePoint: (p) => p,
	isStatic: false,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
/**
* Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
*/
/**
* Set a given ref to a given value
* This utility takes care of different types of refs: callback refs and RefObject(s)
*/
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
/**
* A utility to compose multiple refs together
* Accepts callback refs and RefObject(s)
*/
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
/**
* A custom hook that composes multiple refs
* Accepts callback refs and RefObject(s)
*/
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
/**
* Measurement functionality has to be within a separate component
* to leverage snapshot lifecycle.
*/
var PopChildMeasure = class extends import_react.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
			const parent = element.offsetParent;
			const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
			const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
			const computedStyle = getComputedStyle(element);
			const size = this.props.sizeRef.current;
			size.height = parseFloat(computedStyle.height);
			size.width = parseFloat(computedStyle.width);
			size.top = element.offsetTop;
			size.left = element.offsetLeft;
			size.right = parentWidth - size.width - size.left;
			size.bottom = parentHeight - size.height - size.top;
			size.direction = computedStyle.direction;
		}
		return null;
	}
	/**
	* Required with getSnapshotBeforeUpdate to stop React complaining.
	*/
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
	const id = (0, import_react.useId)();
	const ref = (0, import_react.useRef)(null);
	const size = (0, import_react.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	});
	const { nonce } = (0, import_react.useContext)(MotionConfigContext);
	const composedRef = useComposedRefs(ref, pop !== false ? children.props?.ref ?? children?.ref : void 0);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	(0, import_react.useInsertionEffect)(() => {
		const { width, height, top, left, right, bottom, direction } = size.current;
		if (isPresent || pop === false || !ref.current || !width || !height) return;
		const isRTL = direction === "rtl";
		const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
		const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
		ref.current.dataset.motionPopId = id;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		const parent = root ?? document.head;
		parent.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
		return () => {
			ref.current?.removeAttribute("data-motion-pop-id");
			if (parent.contains(style)) parent.removeChild(style);
		};
	}, [isPresent]);
	return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
		isPresent,
		childRef: ref,
		sizeRef: size,
		pop,
		children: pop === false ? children : import_react.cloneElement(children, { ref: composedRef })
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id = (0, import_react.useId)();
	const isPresentRef = (0, import_react.useRef)(isPresent);
	const onExitCompleteRef = (0, import_react.useRef)(onExitComplete);
	useIsomorphicLayoutEffect(() => {
		isPresentRef.current = isPresent;
		onExitCompleteRef.current = onExitComplete;
	});
	let isReusedContext = true;
	let context = (0, import_react.useMemo)(() => {
		isReusedContext = false;
		return {
			id,
			initial,
			isPresent,
			custom,
			onExitComplete: (childId) => {
				presenceChildren.set(childId, true);
				for (const isComplete of presenceChildren.values()) if (!isComplete) return;
				onExitComplete && onExitComplete();
			},
			register: (childId) => {
				presenceChildren.set(childId, false);
				return () => {
					presenceChildren.delete(childId);
					!isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
				};
			}
		};
	}, [
		isPresent,
		presenceChildren,
		onExitComplete
	]);
	/**
	* If the presence of a child affects the layout of the components around it,
	* we want to make a new context value to ensure they get re-rendered
	* so they can detect that layout change.
	*/
	if (presenceAffectsLayout && isReusedContext) context = { ...context };
	(0, import_react.useMemo)(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent]);
	/**
	* If there's no `motion` components to fire exit animations, we want to remove this
	* component immediately.
	*/
	import_react.useEffect(() => {
		!isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent]);
	children = (0, import_jsx_runtime.jsx)(PopChild, {
		pop: mode === "popLayout",
		isPresent,
		anchorX,
		anchorY,
		root,
		children
	});
	return (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
		value: context,
		children
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed from the tree,
* but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = (0, import_react.useContext)(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent, onExitComplete, register } = context;
	const id = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		if (subscribe) return register(id);
	}, [subscribe]);
	const safeToRemove = (0, import_react.useCallback)(() => subscribe && onExitComplete && onExitComplete(id), [
		id,
		onExitComplete,
		subscribe
	]);
	return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
	const filtered = [];
	import_react.Children.forEach(children, (child) => {
		if ((0, import_react.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
/**
* `AnimatePresence` enables the animation of components that have been removed from the tree.
*
* When adding/removing more than a single child, every child **must** be given a unique `key` prop.
*
* Any `motion` components that have an `exit` property defined will animate out when removed from
* the tree.
*
* ```jsx
* import { motion, AnimatePresence } from 'framer-motion'
*
* export const Items = ({ items }) => (
*   <AnimatePresence>
*     {items.map(item => (
*       <motion.div
*         key={item.id}
*         initial={{ opacity: 0 }}
*         animate={{ opacity: 1 }}
*         exit={{ opacity: 0 }}
*       />
*     ))}
*   </AnimatePresence>
* )
* ```
*
* You can sequence exit animations throughout a tree using variants.
*
* If a child contains multiple `motion` components with `exit` props, it will only unmount the child
* once all `motion` components have finished animating out. Likewise, any components using
* `usePresence` all need to call `safeToRemove`.
*
* @public
*/
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
	const [isParentPresent, safeToRemove] = usePresence(propagate);
	/**
	* Filter any children that aren't ReactElements. We can only track components
	* between renders with a props.key.
	*/
	const presentChildren = (0, import_react.useMemo)(() => onlyElements(children), [children]);
	/**
	* Track the keys of the currently rendered children. This is used to
	* determine which children are exiting.
	*/
	const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
	/**
	* If `initial={false}` we only want to pass this to components in the first render.
	*/
	const isInitialRender = (0, import_react.useRef)(true);
	/**
	* A ref containing the currently present children. When all exit animations
	* are complete, we use this to re-render the component with the latest children
	* *committed* rather than the latest children *rendered*.
	*/
	const pendingPresentChildren = (0, import_react.useRef)(presentChildren);
	/**
	* Track which exiting children have finished animating out.
	*/
	const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
	/**
	* Track which components are currently processing exit to prevent duplicate processing.
	*/
	const exitingComponents = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	/**
	* Save children to render as React state. To ensure this component is concurrent-safe,
	* we check for exiting children via an effect.
	*/
	const [diffedChildren, setDiffedChildren] = (0, import_react.useState)(presentChildren);
	const [renderedChildren, setRenderedChildren] = (0, import_react.useState)(presentChildren);
	useIsomorphicLayoutEffect(() => {
		if (propagate && !isParentPresent && !renderedChildren.length) safeToRemove?.();
	}, [
		isParentPresent,
		propagate,
		renderedChildren.length,
		safeToRemove
	]);
	useIsomorphicLayoutEffect(() => {
		isInitialRender.current = false;
		pendingPresentChildren.current = presentChildren;
		/**
		* Update complete status of exiting children.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const key = getChildKey(renderedChildren[i]);
			if (!presentKeys.includes(key)) {
				if (exitComplete.get(key) !== true) exitComplete.set(key, false);
			} else {
				exitComplete.delete(key);
				exitingComponents.current.delete(key);
			}
		}
	}, [
		renderedChildren,
		presentKeys.length,
		presentKeys.join("-")
	]);
	const exitingChildren = [];
	if (presentChildren !== diffedChildren) {
		let nextChildren = [...presentChildren];
		/**
		* Loop through all the currently rendered components and decide which
		* are exiting.
		*
		* Exiting children are reinserted directly after the child they
		* previously followed. Splicing at their index within the previously
		* rendered children, as we used to, indexes into the wrong list: it
		* can interleave them with entering children and push present children
		* to new positions, remounting them (#3746).
		*/
		let insertionIndex = 0;
		for (const child of renderedChildren) {
			const presentIndex = presentKeys.indexOf(getChildKey(child));
			if (presentIndex === -1) {
				nextChildren.splice(insertionIndex++, 0, child);
				exitingChildren.push(child);
			} else insertionIndex = presentIndex + exitingChildren.length + 1;
		}
		/**
		* If we're in "wait" mode, and we have exiting children, we want to
		* only render these until they've all exited.
		*/
		if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
		setRenderedChildren(onlyElements(nextChildren));
		setDiffedChildren(presentChildren);
		/**
		* Early return to ensure once we've set state with the latest diffed
		* children, we can immediately re-render.
		*/
		return null;
	}
	/**
	* If we've been provided a forceRender function by the LayoutGroupContext,
	* we can use it to force a re-render amongst all surrounding components once
	* all components have finished animating out.
	*/
	const { forceRender } = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
		const key = getChildKey(child);
		const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
		const onExit = () => {
			if (exitingComponents.current.has(key)) return;
			if (exitComplete.has(key)) {
				exitingComponents.current.add(key);
				exitComplete.set(key, true);
			} else return;
			let isEveryExitComplete = true;
			exitComplete.forEach((isExitComplete) => {
				if (!isExitComplete) isEveryExitComplete = false;
			});
			if (isEveryExitComplete) {
				forceRender?.();
				setRenderedChildren(pendingPresentChildren.current);
				propagate && safeToRemove?.();
				onExitComplete && onExitComplete();
			}
		};
		return (0, import_jsx_runtime.jsx)(PresenceChild, {
			isPresent,
			initial: !isInitialRender.current || initial ? void 0 : false,
			custom,
			presenceAffectsLayout,
			mode,
			root,
			onExitComplete: isPresent ? void 0 : onExit,
			anchorX,
			anchorY,
			children: child
		}, key);
	}) });
};
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var MotionContext = /* @__PURE__ */ (0, import_react.createContext)({});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, (0, import_react.useContext)(MotionContext));
	return (0, import_react.useMemo)(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
	return (0, import_react.useMemo)(() => {
		const state = createHtmlRenderState();
		buildHTMLStyles(state, visualState, transformTemplate);
		return Object.assign({}, state.vars, state.style);
	}, [visualState]);
}
function useStyle(props, visualState) {
	const styleProp = props.style || {};
	const style = {};
	/**
	* Copy non-Motion Values straight into style
	*/
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState));
	return style;
}
function useHTMLProps(props, visualState) {
	const htmlProps = {};
	const style = useStyle(props, visualState);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component) {
	const visualProps = (0, import_react.useMemo)(() => {
		const state = createSvgRenderState();
		buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
* A list of all valid MotionProps.
*
* @privateRemarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = /* @__PURE__ */ new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"propagate",
	"ignoreStrict",
	"viewport"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
function shouldForward(key, isValidProp) {
	return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp?.(key) ?? !isValidMotionProp(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
	const filteredProps = {};
	for (const key in props) {
		/**
		* values is considered a valid prop by Emotion, so if it's present
		* this will be rendered out to the DOM unless explicitly filtered.
		*
		* We check the type as it could be used with the `feColorMatrix`
		* element, which we support.
		*/
		if (key === "values" && typeof props.values === "object") continue;
		if (isMotionValue(props[key])) continue;
		if (shouldForward(key, isValidProp) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
	const visualProps = (isSVG ?? isSVGComponent(Component) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component);
	const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps, isValidProp);
	const elementProps = Component !== import_react.Fragment ? {
		...filteredProps,
		...visualProps,
		ref
	} : {};
	/**
	* If component has been handed a motion value as its child,
	* memoise its initial value and render that. Subsequent updates
	* will be handled by the onChange handler
	*/
	const { children } = props;
	const renderedChildren = (0, import_react.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
	return (0, import_react.createElement)(Component, {
		...elementProps,
		children: renderedChildren
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
	return {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
		const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
		for (let i = 0; i < list.length; i++) {
			const resolved = resolveVariantFromProps(props, list[i]);
			if (resolved) {
				const { transitionEnd, transition, ...target } = resolved;
				for (const key in target) {
					let valueTarget = target[key];
					if (Array.isArray(valueTarget)) {
						/**
						* Take final keyframe if the initial animation is blocked because
						* we want to initialise at the end of that blocked animation.
						*/
						const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
						valueTarget = valueTarget[index];
					}
					if (valueTarget !== null) values[key] = valueTarget;
				}
				for (const key in transitionEnd) values[key] = transitionEnd[key];
			}
		}
	}
	return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
	const context = (0, import_react.useContext)(MotionContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const make = () => makeState(config, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createHtmlRenderState
});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createSvgRenderState
});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	/**
	* Store externalRef in a ref to avoid including it in the useCallback
	* dependency array. Including externalRef in dependencies causes issues
	* with libraries like Radix UI that create new callback refs on each render
	* when using asChild - this would cause the callback to be recreated,
	* triggering element remounts and breaking AnimatePresence exit animations.
	*/
	const externalRefContainer = (0, import_react.useRef)(externalRef);
	(0, import_react.useInsertionEffect)(() => {
		externalRefContainer.current = externalRef;
	});
	const refCleanup = (0, import_react.useRef)(null);
	return (0, import_react.useCallback)((instance) => {
		if (instance) visualState.onMount?.(instance);
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		const ref = externalRefContainer.current;
		if (typeof ref === "function") {
			if (instance) {
				const cleanup = ref(instance);
				if (typeof cleanup === "function") refCleanup.current = cleanup;
			} else if (refCleanup.current) {
				refCleanup.current();
				refCleanup.current = null;
			} else ref(instance);
		} else if (ref) ref.current = instance;
	}, [visualElement]);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
/**
* Internal, exported only for usage in Framer
*/
var SwitchLayoutGroupContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
	const { visualElement: parent } = (0, import_react.useContext)(MotionContext);
	const lazyContext = (0, import_react.useContext)(LazyContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const motionConfig = (0, import_react.useContext)(MotionConfigContext);
	const reducedMotionConfig = motionConfig.reducedMotion;
	const skipAnimations = motionConfig.skipAnimations;
	const visualElementRef = (0, import_react.useRef)(null);
	/**
	* Track whether the component has been through React's commit phase.
	* Used to detect when LazyMotion features load after the component has mounted.
	*/
	const hasMountedOnce = (0, import_react.useRef)(false);
	/**
	* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
	*/
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) {
		visualElementRef.current = createVisualElement(Component, {
			visualState,
			parent,
			props,
			presenceContext,
			blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
			reducedMotionConfig,
			skipAnimations,
			isSVG
		});
		/**
		* If the component has already mounted before features loaded (e.g. via
		* LazyMotion with async feature loading), we need to force the initial
		* animation to run. Otherwise state changes that occurred before features
		* loaded will be lost and the element will snap to its final state.
		*/
		if (hasMountedOnce.current && visualElementRef.current) visualElementRef.current.manuallyAnimateOnMount = true;
	}
	const visualElement = visualElementRef.current;
	/**
	* Load Motion gesture and animation features. These are rendered as renderless
	* components so each feature can optionally make use of React lifecycle methods.
	*/
	const initialLayoutGroupConfig = (0, import_react.useContext)(SwitchLayoutGroupContext);
	if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
	const isMounted = (0, import_react.useRef)(false);
	(0, import_react.useInsertionEffect)(() => {
		/**
		* Check the component has already mounted before calling
		* `update` unnecessarily. This ensures we skip the initial update.
		*/
		if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
	});
	/**
	* Cache this value as we want to know whether HandoffAppearAnimations
	* was present on initial render - it will be deleted after this.
	*/
	const optimisedAppearId = props[optimizedAppearDataAttribute];
	const wantsHandoff = (0, import_react.useRef)(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
	useIsomorphicLayoutEffect(() => {
		/**
		* Track that this component has mounted. This is used to detect when
		* LazyMotion features load after the component has already committed.
		*/
		hasMountedOnce.current = true;
		if (!visualElement) return;
		isMounted.current = true;
		window.MotionIsMounted = true;
		visualElement.updateFeatures();
		visualElement.scheduleRenderMicrotask();
		/**
		* Ideally this function would always run in a useEffect.
		*
		* However, if we have optimised appear animations to handoff from,
		* it needs to happen synchronously to ensure there's no flash of
		* incorrect styles in the event of a hydration error.
		*
		* So if we detect a situtation where optimised appear animations
		* are running, we use useLayoutEffect to trigger animations.
		*/
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	(0, import_react.useEffect)(() => {
		if (!visualElement) return;
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			queueMicrotask(() => {
				window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
			});
			wantsHandoff.current = false;
		}
		/**
		* Now we've finished triggering animations for this element we
		* can wipe the enteringChildren set for the next render.
		*/
		visualElement.enteringChildren = void 0;
	});
	return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
	const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
	visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
	visualElement.projection.setOptions({
		layoutId,
		layout,
		alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
		visualElement,
		/**
		* TODO: Update options in an effect. This could be tricky as it'll be too late
		* to update by the time layout animations run.
		* We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
		* ensuring it gets called if there's no potential layout animations.
		*
		*/
		animationType: typeof layout === "string" ? layout : "both",
		initialPromotionConfig,
		crossfade: layoutCrossfade,
		layoutScroll,
		layoutRoot,
		layoutAnchor
	});
}
function getClosestProjectingNode(visualElement) {
	if (!visualElement) return void 0;
	return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/motion/index.mjs
/**
* Create a `motion` component.
*
* This function accepts a Component argument, which can be either a string (ie "div"
* for `motion.div`), or an actual React component.
*
* Alongside this is a config option which provides a way of rendering the provided
* component "offline", or outside the React render cycle.
*/
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
	preloadedFeatures && loadFeatures(preloadedFeatures);
	/**
	* Determine whether to use SVG or HTML rendering based on:
	* 1. Explicit `type` option (highest priority)
	* 2. Auto-detection via `isSVGComponent`
	*/
	const isSVG = type ? type === "svg" : isSVGComponent(Component);
	const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
	function MotionDOMComponent(props, externalRef) {
		/**
		* If we need to measure the element we load this functionality in a
		* separate class component in order to gain access to getSnapshotBeforeUpdate.
		*/
		let MeasureLayout;
		const configAndProps = {
			...(0, import_react.useContext)(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic, isValidProp } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && typeof window !== "undefined") {
			useStrictMode(configAndProps, preloadedFeatures);
			const layoutProjection = getProjectionFunctionality(configAndProps);
			MeasureLayout = layoutProjection.MeasureLayout;
			/**
			* Create a VisualElement for this component. A VisualElement provides a common
			* interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
			* providing a way of rendering to these APIs outside of the React render loop
			* for more performant animations and interactions
			*/
			context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
		}
		/**
		* The mount order and hierarchy is specific to ensure our element ref
		* is hydrated by the time features fire their effects.
		*/
		return (0, import_jsx_runtime.jsxs)(MotionContext.Provider, {
			value: context,
			children: [MeasureLayout && context.visualElement ? (0, import_jsx_runtime.jsx)(MeasureLayout, {
				visualElement: context.visualElement,
				...configAndProps
			}) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)]
		});
	}
	MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
	const ForwardRefMotionComponent = (0, import_react.forwardRef)(MotionDOMComponent);
	ForwardRefMotionComponent[motionComponentSymbol] = Component;
	return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = (0, import_react.useContext)(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
	(0, import_react.useContext)(LazyContext).strict;
}
function getProjectionFunctionality(props) {
	const { drag, layout } = getInitializedFeatureDefinitions();
	if (!drag && !layout) return {};
	const combined = {
		...drag,
		...layout
	};
	return {
		MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : void 0,
		ProjectionNode: combined.ProjectionNode
	};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
	if (typeof Proxy === "undefined") return createMotionComponent;
	/**
	* A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
	* Rather than generating them anew every render.
	*/
	const componentCache = /* @__PURE__ */ new Map();
	const factory = (Component, options) => {
		return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
	};
	/**
	* Support for deprecated`motion(Component)` pattern
	*/
	const deprecatedFactoryFunction = (Component, options) => {
		return factory(Component, options);
	};
	return new Proxy(deprecatedFactoryFunction, { 
	/**
	* Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
	* The prop name is passed through as `key` and we can use that to generate a `motion`
	* DOM component with that name.
	*/
get: (_target, key) => {
		if (key === "create") return factory;
		/**
		* If this element doesn't exist in the component cache, create it and cache.
		*/
		if (!componentCache.has(key)) componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
		return componentCache.get(key);
	} });
}
//#endregion
//#region node_modules/.pnpm/framer-motion@13.4.1_react-_37ca743d2382087adf11024e47923477/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs
var m = /*@__PURE__*/ createMotionProxy();
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function toLucideIconData(iconName, iconNode, aliases = []) {
	if (iconNode == null) throw new Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: toKebabCase(iconName),
		size: 24,
		node: iconNode,
		...aliases.length > 0 ? { aliases } : {}
	};
}
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => {
	let out = "";
	let upperNext = false;
	for (const ch of string) {
		if (ch === "-" || ch === "_" || ch <= " ") {
			upperNext = out.length > 0;
			continue;
		}
		if (out.length === 0) out += ch.toLowerCase();
		else out += upperNext ? ch.toUpperCase() : ch;
		upperNext = false;
	}
	return out;
};
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function isDefined(value) {
	return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
	const attributeNames = params.attributeNames ?? {};
	const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
	const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
	const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
	const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
	const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
	const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
	const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
	const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
				attrs[getAttributeName(attrName)] = value;
				return attrs;
			}, {}),
			..."color" in params && params.color && { [getAttributeName("stroke")]: params.color },
			..."size" in params && isDefined(params.size) && {
				[getAttributeName("width")]: params.size,
				[getAttributeName("height")]: params.size
			},
			..."width" in params && isDefined(params.width) && { [getAttributeName("width")]: params.width },
			..."height" in params && isDefined(params.height) && { [getAttributeName("height")]: params.height },
			[getAttributeName("stroke-width")]: calculatedStrokeWidth,
			...className && { [getAttributeName("class")]: className },
			[getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
			...params.hasA11yProp === false ? { [getAttributeName("aria-hidden")]: "true" } : {},
			..."attributes" in params && params.attributes
		},
		icon.node.map((child) => {
			const [name, attrs, children] = child;
			const nextAttrs = params.nonScalingStroke ? {
				[getAttributeName("vector-effect")]: "non-scaling-stroke",
				...attrs
			} : attrs;
			return children ? [
				name,
				nextAttrs,
				children
			] : [name, nextAttrs];
		})
	];
}
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function buildLucideIconForReact(icon, params = {}) {
	return buildLucideIconNode(icon, {
		...params,
		attributeNames: {
			...params.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, width, height, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className = "", children, iconNode = [], icon = {
	node: iconNode,
	aliases: [],
	size: 24
}, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, nonScalingStroke: contextNonScalingStroke = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
	const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
		color: color ?? contextColor,
		width: width ?? size ?? contextSize,
		height: height ?? size ?? contextSize,
		strokeWidth: strokeWidth ?? contextStrokeWidth,
		absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
		nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
		className: mergeClasses(contextClass, className),
		hasA11yProp: hasAccessibleProp,
		attributes: rest
	});
	return (0, import_react.createElement)(name, {
		ref,
		...svgAttributes
	}, [...builtIconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
	const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		icon: iconData,
		className,
		...props
	}));
	if (iconData.name) Component.displayName = toPascalCase(iconData.name);
	return Component;
}
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$8 = {
	name: "chevron-right",
	size: 24,
	node: [["path", {
		d: "m9 18 6-6-6-6",
		key: "mthhwq"
	}]]
};
__iconData$8.node;
var ChevronRight = createLucideIcon(__iconData$8);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/external-link.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$7 = {
	name: "external-link",
	size: 24,
	node: [
		["path", {
			d: "M15 3h6v6",
			key: "1q9fwt"
		}],
		["path", {
			d: "M10 14 21 3",
			key: "gplh6r"
		}],
		["path", {
			d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
			key: "a6xqqp"
		}]
	]
};
__iconData$7.node;
var ExternalLink = createLucideIcon(__iconData$7);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/menu.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$6 = {
	name: "menu",
	size: 24,
	node: [
		["path", {
			d: "M4 5h16",
			key: "1tepv9"
		}],
		["path", {
			d: "M4 12h16",
			key: "1lakjw"
		}],
		["path", {
			d: "M4 19h16",
			key: "1djgab"
		}]
	]
};
__iconData$6.node;
var Menu = createLucideIcon(__iconData$6);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/monitor.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$5 = {
	name: "monitor",
	size: 24,
	node: [
		["rect", {
			width: "20",
			height: "14",
			x: "2",
			y: "3",
			rx: "2",
			key: "48i651"
		}],
		["line", {
			x1: "8",
			x2: "16",
			y1: "21",
			y2: "21",
			key: "1svkeh"
		}],
		["line", {
			x1: "12",
			x2: "12",
			y1: "17",
			y2: "21",
			key: "vw1qmm"
		}]
	]
};
__iconData$5.node;
var Monitor = createLucideIcon(__iconData$5);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/moon.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$4 = {
	name: "moon",
	size: 24,
	node: [["path", {
		d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
		key: "kfwtm"
	}]]
};
__iconData$4.node;
var Moon = createLucideIcon(__iconData$4);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/search.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$3 = {
	name: "search",
	size: 24,
	node: [["path", {
		d: "m21 21-4.34-4.34",
		key: "14j7rj"
	}], ["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}]]
};
__iconData$3.node;
var Search = createLucideIcon(__iconData$3);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/star.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$2 = {
	name: "star",
	size: 24,
	node: [["path", {
		d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
		key: "r04s7s"
	}]]
};
__iconData$2.node;
var Star = createLucideIcon(__iconData$2);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/sun.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData$1 = {
	name: "sun",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "4",
			key: "4exip2"
		}],
		["path", {
			d: "M12 2v2",
			key: "tus03m"
		}],
		["path", {
			d: "M12 20v2",
			key: "1lh1kg"
		}],
		["path", {
			d: "m4.93 4.93 1.41 1.41",
			key: "149t6j"
		}],
		["path", {
			d: "m17.66 17.66 1.41 1.41",
			key: "ptbguv"
		}],
		["path", {
			d: "M2 12h2",
			key: "1t8f8n"
		}],
		["path", {
			d: "M20 12h2",
			key: "1q8mjw"
		}],
		["path", {
			d: "m6.34 17.66-1.41 1.41",
			key: "1m8zz5"
		}],
		["path", {
			d: "m19.07 4.93-1.41 1.41",
			key: "1shlcs"
		}]
	]
};
__iconData$1.node;
var Sun = createLucideIcon(__iconData$1);
//#endregion
//#region node_modules/.pnpm/lucide-react@1.47.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/x.mjs
/**
* @license lucide-react v1.47.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var __iconData = {
	name: "x",
	size: 24,
	node: [["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}], ["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]]
};
__iconData.node;
var X = createLucideIcon(__iconData);
//#endregion
//#region node_modules/.pnpm/simple-icons@16.32.0/node_modules/simple-icons/index.mjs
var c = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>";
var t = "</title><path d=\"";
var a = "\"/></svg>";
var siDotenv = {
	title: ".ENV",
	slug: "dotenv",
	get svg() {
		return c + ".ENV" + t + this.path + a;
	},
	path: "M24 0v24H0V0h24ZM10.933 15.89H6.84v5.52h4.198v-.93H7.955v-1.503h2.77v-.93h-2.77v-1.224h2.978v-.934Zm2.146 0h-1.084v5.52h1.035v-3.6l2.226 3.6h1.118v-5.52h-1.036v3.686l-2.259-3.687Zm5.117 0h-1.208l1.973 5.52h1.19l1.976-5.52h-1.182l-1.352 4.085-1.397-4.086ZM5.4 19.68H3.72v1.68H5.4v-1.68Z",
	source: "https://github.com/motdotla/dotenv/blob/40e75440337d1de2345dc8326d6108331f583fd8/dotenv.svg",
	hex: "ECD53F"
};
var siAndroid = {
	title: "Android",
	slug: "android",
	get svg() {
		return c + "Android" + t + this.path + a;
	},
	path: "M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z",
	source: "https://partnermarketinghub.withgoogle.com/brands/android/visual-identity/visual-identity/logo-lock-ups",
	hex: "3DDC84",
	guidelines: "https://developer.android.com/distribute/marketing-tools/brand-guidelines#brand-android",
	license: {
		type: "CC-BY-3.0",
		url: "https://spdx.org/licenses/CC-BY-3.0"
	}
};
var siApple = {
	title: "Apple",
	slug: "apple",
	get svg() {
		return c + "Apple" + t + this.path + a;
	},
	path: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
	source: "https://www.apple.com",
	hex: "000000"
};
var siCloudflare = {
	title: "Cloudflare",
	slug: "cloudflare",
	get svg() {
		return c + "Cloudflare" + t + this.path + a;
	},
	path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
	source: "https://www.cloudflare.com/logo/",
	hex: "F38020",
	guidelines: "https://www.cloudflare.com/trademark/"
};
var siCss = {
	title: "CSS",
	slug: "css",
	get svg() {
		return c + "CSS" + t + this.path + a;
	},
	path: "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63",
	source: "https://github.com/CSS-Next/logo.css/blob/bacc20878227204b283c68a6b935f8279e06b0cd/css.svg",
	hex: "663399",
	guidelines: "https://github.com/CSS-Next/logo.css"
};
var siDeno = {
	title: "Deno",
	slug: "deno",
	get svg() {
		return c + "Deno" + t + this.path + a;
	},
	path: "M1.105 18.02A11.9 11.9 0 0 1 0 12.985q0-.698.078-1.376a12 12 0 0 1 .231-1.34A12 12 0 0 1 4.025 4.02a12 12 0 0 1 5.46-2.771 12 12 0 0 1 3.428-.23c1.452.112 2.825.477 4.077 1.05a12 12 0 0 1 2.78 1.774 12.02 12.02 0 0 1 4.053 7.078A12 12 0 0 1 24 12.985q0 .454-.036.914a12 12 0 0 1-.728 3.305 12 12 0 0 1-2.38 3.875c-1.33 1.357-3.02 1.962-4.43 1.936a4.4 4.4 0 0 1-2.724-1.024c-.99-.853-1.391-1.83-1.53-2.919a5 5 0 0 1 .128-1.518c.105-.38.37-1.116.76-1.437-.455-.197-1.04-.624-1.226-.829-.045-.05-.04-.13 0-.183a.155.155 0 0 1 .177-.053c.392.134.869.267 1.372.35.66.111 1.484.25 2.317.292 2.03.1 4.153-.813 4.812-2.627s.403-3.609-1.96-4.685-3.454-2.356-5.363-3.128c-1.247-.505-2.636-.205-4.06.582-3.838 2.121-7.277 8.822-5.69 15.032a.191.191 0 0 1-.315.19 12 12 0 0 1-1.25-1.634 12 12 0 0 1-.769-1.404M11.57 6.087c.649-.051 1.214.501 1.31 1.236.13.979-.228 1.99-1.41 2.013-1.01.02-1.315-.997-1.248-1.614.066-.616.574-1.575 1.35-1.635",
	source: "https://github.com/denoland/docs/blob/5dee713844c7447f80acd4093caa9d350d80bf36/static/img/logo.svg",
	hex: "000000",
	guidelines: "https://deno.com/brand",
	license: {
		type: "MIT",
		url: "https://spdx.org/licenses/MIT"
	}
};
var siDiscord = {
	title: "Discord",
	slug: "discord",
	get svg() {
		return c + "Discord" + t + this.path + a;
	},
	path: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
	source: "https://discord.com/branding",
	hex: "5865F2",
	guidelines: "https://discord.com/branding"
};
var siGithub = {
	title: "GitHub",
	slug: "github",
	get svg() {
		return c + "GitHub" + t + this.path + a;
	},
	path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
	source: "https://github.com/logos",
	hex: "181717",
	guidelines: "https://github.com/logos"
};
var siHtml5 = {
	title: "HTML5",
	slug: "html5",
	get svg() {
		return c + "HTML5" + t + this.path + a;
	},
	path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
	source: "https://www.w3.org/html/logo/",
	hex: "E34F26"
};
var siJavascript = {
	title: "JavaScript",
	slug: "javascript",
	get svg() {
		return c + "JavaScript" + t + this.path + a;
	},
	path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
	source: "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
	hex: "F7DF1E",
	license: {
		type: "MIT",
		url: "https://spdx.org/licenses/MIT"
	}
};
var siLinux = {
	title: "Linux",
	slug: "linux",
	get svg() {
		return c + "Linux" + t + this.path + a;
	},
	path: "M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z",
	source: "https://www.linuxfoundation.org/the-linux-mark/",
	hex: "FCC624"
};
var siNetlify = {
	title: "Netlify",
	slug: "netlify",
	get svg() {
		return c + "Netlify" + t + this.path + a;
	},
	path: "M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z",
	source: "https://www.netlify.com/press/",
	hex: "00C7B7",
	guidelines: "https://www.netlify.com/press/"
};
var siNodedotjs = {
	title: "Node.js",
	slug: "nodedotjs",
	get svg() {
		return c + "Node.js" + t + this.path + a;
	},
	path: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
	source: "https://nodejs.org/en/about/branding",
	hex: "5FA04E",
	guidelines: "https://nodejs.org/en/about/branding"
};
var siNpm = {
	title: "npm",
	slug: "npm",
	get svg() {
		return c + "npm" + t + this.path + a;
	},
	path: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
	source: "https://www.npmjs.com",
	hex: "CB3837",
	guidelines: "https://docs.npmjs.com/policies/logos-and-usage"
};
var siReact = {
	title: "React",
	slug: "react",
	get svg() {
		return c + "React" + t + this.path + a;
	},
	path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
	source: "https://github.com/facebook/create-react-app/blob/282c03f9525fdf8061ffa1ec50dce89296d916bd/test/fixtures/relative-paths/src/logo.svg",
	hex: "61DAFB"
};
var siReddit = {
	title: "Reddit",
	slug: "reddit",
	get svg() {
		return c + "Reddit" + t + this.path + a;
	},
	path: "M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z",
	source: "https://www.redditinc.com/brand",
	hex: "FF4500",
	guidelines: "https://www.redditinc.com/brand"
};
var siSass = {
	title: "Sass",
	slug: "sass",
	get svg() {
		return c + "Sass" + t + this.path + a;
	},
	path: "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z",
	source: "https://sass-lang.com/styleguide/brand",
	hex: "CC6699",
	guidelines: "https://sass-lang.com/styleguide/brand",
	license: {
		type: "CC-BY-NC-SA-3.0",
		url: "https://spdx.org/licenses/CC-BY-NC-SA-3.0"
	}
};
var siTauri = {
	title: "Tauri",
	slug: "tauri",
	get svg() {
		return c + "Tauri" + t + this.path + a;
	},
	path: "M13.912 0a8.72 8.72 0 0 0-8.308 6.139c1.05-.515 2.18-.845 3.342-.976 2.415-3.363 7.4-3.412 9.88-.097 2.48 3.315 1.025 8.084-2.883 9.45a6.131 6.131 0 0 1-.3 2.762 8.72 8.72 0 0 0 3.01-1.225A8.72 8.72 0 0 0 13.913 0zm.082 6.451a2.284 2.284 0 1 0-.15 4.566 2.284 2.284 0 0 0 .15-4.566zm-5.629.27a8.72 8.72 0 0 0-3.031 1.235 8.72 8.72 0 1 0 13.06 9.9131 10.173 10.174 0 0 1-3.343.965 6.125 6.125 0 1 1-7.028-9.343 6.114 6.115 0 0 1 .342-2.772zm1.713 6.27a2.284 2.284 0 0 0-2.284 2.283 2.284 2.284 0 0 0 2.284 2.284 2.284 2.284 0 0 0 2.284-2.284 2.284 2.284 0 0 0-2.284-2.284z",
	source: "https://github.com/tauri-apps/tauri-docs/blob/b1cdfa9d7c6d0b17dae60a90266ddced40a7b384/static/img/tauri.svg",
	hex: "24C8D8",
	guidelines: "https://github.com/tauri-apps/tauri-docs/blob/b1cdfa9d7c6d0b17dae60a90266ddced40a7b384/static/img/Brand_Guidelines.pdf",
	license: {
		type: "CC-BY-NC-ND-4.0",
		url: "https://spdx.org/licenses/CC-BY-NC-ND-4.0"
	}
};
var siTypescript = {
	title: "TypeScript",
	slug: "typescript",
	get svg() {
		return c + "TypeScript" + t + this.path + a;
	},
	path: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
	source: "https://www.typescriptlang.org/branding",
	hex: "3178C6",
	guidelines: "https://www.typescriptlang.org/branding"
};
var siVercel = {
	title: "Vercel",
	slug: "vercel",
	get svg() {
		return c + "Vercel" + t + this.path + a;
	},
	path: "m12 1.608 12 20.784H0Z",
	source: "https://vercel.com/geist/brands",
	hex: "000000",
	guidelines: "https://vercel.com/geist/brands"
};
var siVite = {
	title: "Vite",
	slug: "vite",
	get svg() {
		return c + "Vite" + t + this.path + a;
	},
	path: "M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z",
	source: "https://github.com/voidzero-dev/community-design-resources/blob/55902097229cf01cf2a4ceb376f992f5cf306756/brand-assets/vite/vite-icon-color-bracketless.svg",
	hex: "9135FF"
};
//#endregion
//#region src/components/Layout.tsx
function SimpleIcon({ icon, className = "", size = 20 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		role: "img",
		"aria-label": icon.title,
		viewBox: "0 0 24 24",
		width: size,
		height: size,
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icon.path })
	});
}
function BiniLogo({ className = "", height = 24 }) {
	const width = Math.round(height * (140 / 49));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `block bg-black dark:bg-white ${className}`,
		style: {
			width,
			height,
			maskImage: "url(/bini.svg)",
			maskSize: "contain",
			maskRepeat: "no-repeat",
			maskPosition: "left center",
			WebkitMaskImage: "url(/bini.svg)",
			WebkitMaskSize: "contain",
			WebkitMaskRepeat: "no-repeat",
			WebkitMaskPosition: "left center"
		},
		role: "img",
		"aria-label": "Bini.js"
	});
}
function LinkedInIcon({ size = 14, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-block shrink-0 bg-current ${className}`,
		style: {
			width: size,
			height: size,
			maskImage: "url(/linkedin.svg)",
			maskSize: "contain",
			maskRepeat: "no-repeat",
			maskPosition: "center",
			WebkitMaskImage: "url(/linkedin.svg)",
			WebkitMaskSize: "contain",
			WebkitMaskRepeat: "no-repeat",
			WebkitMaskPosition: "center"
		},
		"aria-hidden": "true"
	});
}
var getStoredTheme = () => {
	if (typeof window === "undefined") return "system";
	try {
		const stored = localStorage.getItem("bini-theme");
		if (stored === "light" || stored === "dark" || stored === "system") return stored;
	} catch {}
	return "system";
};
var applyTheme = (theme) => {
	const root = document.documentElement;
	const shouldUseDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	root.classList.toggle("dark", shouldUseDark);
};
var searchSuggestions = [
	{
		label: "Introduction",
		path: "/docs",
		type: "docs",
		keywords: [
			"start",
			"begin",
			"intro",
			"guide",
			"overview"
		]
	},
	{
		label: "Installation",
		path: "/docs/installation",
		type: "docs",
		keywords: [
			"install",
			"setup",
			"npm",
			"create-bini-app"
		]
	},
	{
		label: "Project Structure",
		path: "/docs/project-structure",
		type: "docs",
		keywords: [
			"structure",
			"folders",
			"files",
			"organization"
		]
	},
	{
		label: "Layouts and Pages",
		path: "/docs/layouts-and-pages",
		type: "docs",
		keywords: [
			"layout",
			"pages",
			"nested",
			"structure"
		]
	},
	{
		label: "Linking and Navigating",
		path: "/docs/linking-and-navigating",
		type: "docs",
		keywords: [
			"link",
			"navigation",
			"router",
			"navigate"
		]
	},
	{
		label: "Folder-Based Routing",
		path: "/docs/folder-based-routing",
		type: "docs",
		keywords: [
			"folder",
			"directory",
			"structure",
			"routing"
		]
	},
	{
		label: "File-Based Routing",
		path: "/docs/file-based-routing",
		type: "docs",
		keywords: [
			"file",
			"pages",
			"routes",
			"flat"
		]
	},
	{
		label: "Dynamic Routes",
		path: "/docs/dynamic-routes",
		type: "docs",
		keywords: [
			"dynamic",
			"params",
			"slug",
			"id"
		]
	},
	{
		label: "Parallel Routes",
		path: "/docs/parallel-routes",
		type: "docs",
		keywords: [
			"parallel",
			"slot",
			"named",
			"routes"
		]
	},
	{
		label: "Catch-All Routes",
		path: "/docs/catch-all-routes",
		type: "docs",
		keywords: [
			"catch-all",
			"wildcard",
			"slug",
			"rest"
		]
	},
	{
		label: "MDX & Markdown Pages",
		path: "/docs/mdx-markdown",
		type: "docs",
		keywords: [
			"mdx",
			"markdown",
			"content",
			"md"
		]
	},
	{
		label: "Loading UI",
		path: "/docs/load",
		type: "docs",
		keywords: [
			"loading",
			"suspense",
			"fallback",
			"ui"
		]
	},
	{
		label: "Error Boundaries",
		path: "/docs/error-boundaries",
		type: "docs",
		keywords: [
			"error",
			"boundary",
			"crash",
			"reset"
		]
	},
	{
		label: "Template",
		path: "/docs/templates",
		type: "docs",
		keywords: [
			"template",
			"transition",
			"wrapper"
		]
	},
	{
		label: "Default",
		path: "/docs/defaults",
		type: "docs",
		keywords: [
			"default",
			"fallback",
			"slot",
			"parallel"
		]
	},
	{
		label: "Not Found",
		path: "/docs/notfound",
		type: "docs",
		keywords: [
			"404",
			"not found",
			"error page"
		]
	},
	{
		label: "Metadata & SEO",
		path: "/docs/metadata",
		type: "docs",
		keywords: [
			"metadata",
			"seo",
			"title",
			"description"
		]
	},
	{
		label: "Open Graph & Twitter",
		path: "/docs/og-twitter",
		type: "docs",
		keywords: [
			"og",
			"open graph",
			"twitter",
			"social",
			"card"
		]
	},
	{
		label: "Icons & Favicons",
		path: "/docs/icons",
		type: "docs",
		keywords: [
			"icons",
			"favicon",
			"apple touch",
			"manifest"
		]
	},
	{
		label: "API Routes Overview",
		path: "/docs/api-routes",
		type: "docs",
		keywords: [
			"api",
			"routes",
			"endpoints",
			"overview"
		]
	},
	{
		label: "Plain Function Handlers",
		path: "/docs/api-plain",
		type: "docs",
		keywords: [
			"handlers",
			"functions",
			"plain",
			"request"
		]
	},
	{
		label: "Hono Integration",
		path: "/docs/api-hono",
		type: "docs",
		keywords: [
			"hono",
			"integration",
			"middleware",
			"framework"
		]
	},
	{
		label: "Dynamic API Routes",
		path: "/docs/api-dynamic",
		type: "docs",
		keywords: [
			"dynamic",
			"api",
			"params",
			"rest"
		]
	},
	{
		label: "CORS",
		path: "/docs/api-cors",
		type: "docs",
		keywords: [
			"cors",
			"cross-origin",
			"preflight",
			"headers"
		]
	},
	{
		label: "Environment Variables",
		path: "/docs/environment-variables",
		type: "docs",
		keywords: [
			".env",
			"environment",
			"variables",
			"secrets"
		]
	},
	{
		label: "Prefixes & Client Exposure",
		path: "/docs/env-prefixes",
		type: "docs",
		keywords: [
			"bini_",
			"vite_",
			"prefix",
			"client"
		]
	},
	{
		label: "Using in API Routes",
		path: "/docs/env-api",
		type: "docs",
		keywords: [
			"getenv",
			"requireenv",
			"hono context"
		]
	},
	{
		label: "CSS Overview",
		path: "/docs/css",
		type: "docs",
		keywords: [
			"css",
			"styling",
			"overview",
			"styles"
		]
	},
	{
		label: "Tailwind CSS",
		path: "/docs/tailwind",
		type: "docs",
		keywords: [
			"tailwind",
			"css",
			"utility",
			"classes"
		]
	},
	{
		label: "CSS Modules",
		path: "/docs/css-modules",
		type: "docs",
		keywords: [
			"modules",
			"css",
			"scoped",
			"styles"
		]
	},
	{
		label: "Web Platform",
		path: "/docs/platform-web",
		type: "docs",
		keywords: [
			"web",
			"platform",
			"spa",
			"browser"
		]
	},
	{
		label: "Windows Platform",
		path: "/docs/platform-windows",
		type: "docs",
		keywords: [
			"windows",
			"desktop",
			"tauri",
			"webview2"
		]
	},
	{
		label: "macOS Platform",
		path: "/docs/platform-macos",
		type: "docs",
		keywords: [
			"macos",
			"mac",
			"desktop",
			"tauri",
			"wkwebview"
		]
	},
	{
		label: "Linux Platform",
		path: "/docs/platform-linux",
		type: "docs",
		keywords: [
			"linux",
			"desktop",
			"tauri",
			"appimage",
			"webkitgtk"
		]
	},
	{
		label: "Android Platform",
		path: "/docs/platform-android",
		type: "docs",
		keywords: [
			"android",
			"mobile",
			"apk",
			"tauri"
		]
	},
	{
		label: "iOS Platform",
		path: "/docs/platform-ios",
		type: "docs",
		keywords: [
			"ios",
			"mobile",
			"xcode",
			"tauri",
			"wkwebview"
		]
	},
	{
		label: "Deployment Overview",
		path: "/docs/deploying",
		type: "docs",
		keywords: [
			"deploy",
			"deployment",
			"production",
			"hosting"
		]
	},
	{
		label: "Production Server",
		path: "/docs/production-server",
		type: "docs",
		keywords: [
			"bini-server",
			"production",
			"node",
			"etag"
		]
	},
	{
		label: "Static Export",
		path: "/docs/static-export",
		type: "docs",
		keywords: [
			"static",
			"export",
			"spa",
			"build",
			"bini-ssg"
		]
	},
	{
		label: "Hosting Providers",
		path: "/docs/hosting",
		type: "docs",
		keywords: [
			"bini-deploy",
			"netlify",
			"vercel",
			"cloudflare",
			"deno"
		]
	},
	{
		label: "Plugins Overview",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"plugins",
			"ecosystem",
			"packages"
		]
	},
	{
		label: "create-bini-app",
		path: "/plugins/create-bini-app",
		type: "plugin",
		keywords: [
			"create",
			"bini",
			"app",
			"scaffold",
			"cli"
		]
	},
	{
		label: "bini-deploy",
		path: "/plugins/bini-deploy",
		type: "plugin",
		keywords: [
			"deploy",
			"hosting",
			"cli",
			"github"
		]
	},
	{
		label: "bini-router",
		path: "/plugins/bini-router",
		type: "plugin",
		keywords: [
			"router",
			"routing",
			"file-based",
			"api",
			"hono",
			"vite",
			"mdx"
		]
	},
	{
		label: "bini-env",
		path: "/plugins/bini-env",
		type: "plugin",
		keywords: [
			"env",
			"environment",
			"variables",
			"secrets",
			"getenv",
			"requireenv",
			"hono"
		]
	},
	{
		label: "bini-native",
		path: "/plugins/bini-native",
		type: "plugin",
		keywords: [
			"native",
			"tauri",
			"plugin",
			"wiring",
			"rust",
			"cargo",
			"android",
			"ios",
			"desktop",
			"mobile"
		]
	},
	{
		label: "bini-server",
		path: "/plugins/bini-server",
		type: "plugin",
		keywords: [
			"server",
			"production",
			"static",
			"etag",
			"spa"
		]
	},
	{
		label: "bini-overlay",
		path: "/plugins/bini-overlay",
		type: "plugin",
		keywords: [
			"overlay",
			"error",
			"loading",
			"development",
			"badge"
		]
	},
	{
		label: "bini-ssg",
		path: "/plugins/bini-ssg",
		type: "plugin",
		keywords: [
			"ssg",
			"static",
			"pre-render",
			"build",
			"shell pages",
			"hydration"
		]
	},
	{
		label: "@vitejs/plugin-react",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"react",
			"fast refresh",
			"vite"
		]
	},
	{
		label: "@tailwindcss/vite",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"tailwind",
			"css",
			"vite",
			"styling"
		]
	},
	{
		label: "vite-plugin-pwa",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"pwa",
			"service worker",
			"offline",
			"manifest"
		]
	},
	{
		label: "vite-plugin-svgr",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"svg",
			"react components",
			"transform",
			"import"
		]
	},
	{
		label: "vite-plugin-compression",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"compression",
			"gzip",
			"brotli",
			"bundle"
		]
	},
	{
		label: "rollup-plugin-visualizer",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"visualizer",
			"bundle",
			"analysis",
			"size"
		]
	},
	{
		label: "hono/cors",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"cors",
			"cross-origin",
			"middleware",
			"hono"
		]
	},
	{
		label: "hono/jwt",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"jwt",
			"authentication",
			"token",
			"auth",
			"hono"
		]
	},
	{
		label: "hono/logger",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"logger",
			"logging",
			"requests",
			"hono"
		]
	},
	{
		label: "@hono/zod-validator",
		path: "/plugins",
		type: "plugin",
		keywords: [
			"zod",
			"validation",
			"validator",
			"schema",
			"hono"
		]
	},
	{
		label: "Showcase",
		path: "/showcase",
		type: "page",
		keywords: [
			"showcase",
			"sites",
			"apps",
			"built with",
			"examples",
			"projects"
		]
	},
	{
		label: "Home",
		path: "/",
		type: "page",
		keywords: ["home", "landing"]
	},
	{
		label: "GitHub Repository",
		href: "https://github.com/Binidu01/bini-cli",
		type: "github",
		keywords: [
			"repo",
			"source",
			"code"
		]
	},
	{
		label: "Issues",
		href: "https://github.com/Binidu01/bini-cli/issues",
		type: "github",
		keywords: [
			"bugs",
			"problems",
			"report"
		]
	},
	{
		label: "Discussions",
		href: "https://github.com/Binidu01/bini-cli/discussions",
		type: "github",
		keywords: [
			"community",
			"forum",
			"questions"
		]
	},
	{
		label: "Contributing",
		href: "https://github.com/Binidu01/bini-cli/blob/main/CONTRIBUTING.md",
		type: "github",
		keywords: [
			"contribute",
			"development",
			"guidelines"
		]
	},
	{
		label: "Releases",
		href: "https://github.com/Binidu01/bini-cli/releases",
		type: "github",
		keywords: [
			"releases",
			"changelog",
			"versions"
		]
	},
	{
		label: "npm Package",
		href: "https://www.npmjs.com/package/create-bini-app",
		type: "package",
		keywords: [
			"npm",
			"package",
			"install"
		]
	}
];
var Header = () => {
	const navigate = useNavigate();
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const [shortcutHint, setShortcutHint] = (0, import_react.useState)("Ctrl K");
	const searchInputRef = (0, import_react.useRef)(null);
	const searchModalRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const platform = navigator.platform || navigator.userAgent || "";
		if (/Mac|iPhone|iPad|iPod/i.test(platform)) setShortcutHint("⌘ K");
	}, []);
	const filteredSuggestions = (() => {
		if (!searchQuery) return searchSuggestions.slice(0, 8);
		const query = searchQuery.toLowerCase();
		return searchSuggestions.filter((s) => s.label.toLowerCase().includes(query) || s.type.toLowerCase().includes(query) || s.keywords?.some((k) => k.toLowerCase().includes(query))).slice(0, 8);
	})();
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setSearchOpen(true);
			}
			if (e.key === "Escape" && searchOpen) setSearchOpen(false);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [searchOpen]);
	(0, import_react.useEffect)(() => {
		if (searchOpen && searchInputRef.current) {
			searchInputRef.current.focus();
			setSearchQuery("");
			setSelectedIndex(0);
		}
	}, [searchOpen]);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (searchModalRef.current && !searchModalRef.current.contains(e.target)) setSearchOpen(false);
		};
		if (searchOpen) document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [searchOpen]);
	(0, import_react.useEffect)(() => {
		setSelectedIndex(0);
	}, [searchQuery]);
	const openSuggestion = (suggestion) => {
		if (suggestion.href) window.open(suggestion.href, "_blank", "noopener,noreferrer");
		else if (suggestion.path) navigate(suggestion.path);
		setSearchOpen(false);
		setSearchQuery("");
	};
	const handleSearchKeyDown = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setSelectedIndex((prev) => prev < filteredSuggestions.length - 1 ? prev + 1 : prev);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setSelectedIndex((prev) => prev > 0 ? prev - 1 : prev);
		} else if (e.key === "Enter" && filteredSuggestions[selectedIndex]) {
			e.preventDefault();
			openSuggestion(filteredSuggestions[selectedIndex]);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed left-0 right-0 top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl dark:border-neutral-800 dark:bg-black/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center justify-between lg:h-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "group flex items-center gap-2",
							"aria-label": "Bini.js",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiniLogo, {
								height: 24,
								className: "transition-transform group-hover:scale-105 lg:h-7"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							children: [
								{
									label: "Docs",
									path: "/docs"
								},
								{
									label: "Plugins",
									path: "/plugins"
								},
								{
									label: "Showcase",
									path: "/showcase"
								},
								{
									label: "Releases",
									href: "https://github.com/Binidu01/bini-cli/releases",
									external: true
								}
							].map((item) => item.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: item.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white",
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									size: 12,
									className: "opacity-50"
								})]
							}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.path,
								className: "rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white",
								children: item.label
							}, item.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSearchOpen(true),
						"aria-label": "Search documentation",
						className: "hidden w-64 items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-500 dark:hover:bg-neutral-900 dark:hover:text-neutral-400 md:flex md:w-80 lg:w-96",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								size: 15,
								className: "shrink-0 text-neutral-500"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "Search documentation..."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "shrink-0 rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 text-[11px] font-semibold text-neutral-600 dark:border-neutral-700 dark:bg-black dark:text-neutral-300",
							children: shortcutHint
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.npmjs.com/package/create-bini-app",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hidden items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-[#CB3837]/30 hover:bg-neutral-100 hover:text-[#CB3837] dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-[#CB3837]/30 dark:hover:bg-neutral-900 dark:hover:text-[#CB3837] sm:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
									icon: siNpm,
									size: 16
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "npm" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/Binidu01/bini-cli",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hidden items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white sm:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 16,
									className: "text-yellow-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Star us on GitHub" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSearchOpen(true),
								className: "rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white sm:hidden",
								"aria-label": "Search",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/Binidu01/bini-cli",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white sm:hidden",
								"aria-label": "GitHub",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
									icon: siGithub,
									size: 18
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.npmjs.com/package/create-bini-app",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-[#CB3837] dark:text-neutral-400 dark:hover:text-[#CB3837] sm:hidden",
								"aria-label": "npm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
									icon: siNpm,
									size: 18
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMobileMenuOpen(!mobileMenuOpen),
								className: "rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white lg:hidden",
								"aria-label": "Toggle menu",
								"aria-expanded": mobileMenuOpen,
								children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
							})
						]
					})
				]
			})
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setSearchOpen(true);
							setMobileMenuOpen(false);
						},
						className: "mb-2 flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-500 dark:hover:bg-neutral-900 dark:hover:text-neutral-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 15 }), "Search documentation..."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "shrink-0 rounded-md border border-neutral-200 bg-white px-1.5 py-0.5 text-[11px] font-semibold text-neutral-600 dark:border-neutral-700 dark:bg-black dark:text-neutral-300",
							children: shortcutHint
						})]
					}),
					[
						{
							label: "Docs",
							path: "/docs"
						},
						{
							label: "Plugins",
							path: "/plugins"
						},
						{
							label: "Showcase",
							path: "/showcase"
						},
						{
							label: "Releases",
							href: "https://github.com/Binidu01/bini-cli/releases",
							external: true
						}
					].map((item) => item.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							size: 16,
							className: "text-neutral-500"
						})]
					}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.path,
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							size: 16,
							className: "text-neutral-500"
						})]
					}, item.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/Binidu01/bini-cli",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setMobileMenuOpen(false),
						className: "mt-2 flex items-center justify-between rounded-lg border-t border-neutral-200 px-3 py-2.5 pt-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 16,
								className: "text-yellow-500"
							}), "Star us on GitHub"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
							icon: siGithub,
							size: 16
						})]
					})
				]
			})
		})]
	}), searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-60 overflow-hidden bg-black/40 backdrop-blur-sm dark:bg-black/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 overflow-y-auto overflow-x-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-full items-start justify-center p-4 pt-[12vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: searchModalRef,
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Search documentation",
					className: "w-full max-w-2xl transform overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-[#0a0a0a]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center border-b border-neutral-200 dark:border-neutral-800",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									size: 18,
									className: "absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "site-search",
									name: "search",
									ref: searchInputRef,
									type: "text",
									autoComplete: "off",
									"aria-label": "Search documentation",
									placeholder: "What are you searching for?",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									onKeyDown: handleSearchKeyDown,
									className: "h-14 w-full bg-transparent pl-12 pr-20 text-base text-black placeholder-neutral-400 focus:outline-none dark:text-white dark:placeholder-neutral-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[11px] text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400",
										children: "Esc"
									})
								})
							]
						}),
						filteredSuggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-96 overflow-y-auto overflow-x-hidden px-2 py-2",
							children: filteredSuggestions.map((suggestion, index) => {
								const isActive = index === selectedIndex;
								const isExternal = !!suggestion.href;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => openSuggestion(suggestion),
									onMouseEnter: () => setSelectedIndex(index),
									className: `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${isActive ? "bg-neutral-100 dark:bg-neutral-900" : "hover:bg-neutral-50 dark:hover:bg-neutral-900/60"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `flex h-6 w-6 shrink-0 items-center justify-center rounded border ${isActive ? "border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200" : "border-neutral-200 bg-neutral-50 text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500"}`,
											children: isExternal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												width: "12",
												height: "12",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "14 2 14 8 20 8" })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `min-w-0 flex-1 truncate text-sm ${isActive ? "font-medium text-black dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`,
											children: suggestion.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${isActive ? "bg-cyan-500/20 text-cyan-700 dark:bg-cyan-500/25 dark:text-cyan-300" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"}`,
											children: suggestion.type
										}),
										isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
											size: 14,
											className: "shrink-0 text-neutral-400"
										})
									]
								}, `${suggestion.label}-${index}`);
							})
						}),
						filteredSuggestions.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-12 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-neutral-600 dark:text-neutral-400",
								children: [
									"No results found for \"",
									searchQuery,
									"\""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-neutral-500 dark:text-neutral-500",
								children: "Try a different search term"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-2 text-[11px] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
											className: "rounded border border-neutral-200 bg-white px-1 py-0.5 font-mono text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300",
											children: "↑↓"
										}), "navigate"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
											className: "rounded border border-neutral-200 bg-white px-1 py-0.5 font-mono text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300",
											children: "↵"
										}), "open"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
											className: "rounded border border-neutral-200 bg-white px-1 py-0.5 font-mono text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300",
											children: "esc"
										}), "close"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [filteredSuggestions.length, " results"] })]
						})
					]
				})
			})
		})
	})] });
};
var Footer = () => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const [theme, setTheme] = (0, import_react.useState)("system");
	(0, import_react.useEffect)(() => {
		setTheme(getStoredTheme());
	}, []);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemThemeChange = () => {
			if (getStoredTheme() === "system") applyTheme("system");
		};
		mediaQuery.addEventListener("change", handleSystemThemeChange);
		return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
	}, []);
	const handleThemeChange = (nextTheme) => {
		setTheme(nextTheme);
		try {
			localStorage.setItem("bini-theme", nextTheme);
		} catch {}
		applyTheme(nextTheme);
	};
	const themeOptions = [
		{
			value: "light",
			label: "Light",
			icon: Sun
		},
		{
			value: "system",
			label: "System",
			icon: Monitor
		},
		{
			value: "dark",
			label: "Dark",
			icon: Moon
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative overflow-x-hidden border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiniLogo, { height: 24 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",
							children: "A native React framework for building cross-platform applications from a single codebase."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/Binidu01/bini-cli",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white",
									"aria-label": "GitHub",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
										icon: siGithub,
										size: 18
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.npmjs.com/package/create-bini-app",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-[#CB3837] dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-[#CB3837]",
									"aria-label": "npm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
										icon: siNpm,
										size: 18
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.linkedin.com/showcase/bini-js/?viewAsMember=true",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-[#0A66C2] dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-[#0A66C2]",
									"aria-label": "LinkedIn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.reddit.com/r/binijs/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-[#FF4500] dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-[#FF4500]",
									"aria-label": "Reddit",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
										icon: siReddit,
										size: 18
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://discord.gg/BVRMCxHQpw",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-[#5865F2] dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-[#5865F2]",
									"aria-label": "Discord",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleIcon, {
										icon: siDiscord,
										size: 18
									})
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-4 text-sm font-semibold text-black dark:text-white",
						children: "Resources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							{
								label: "Documentation",
								path: "/docs"
							},
							{
								label: "Plugins",
								path: "/plugins"
							},
							{
								label: "Showcase",
								path: "/showcase"
							},
							{
								label: "Releases",
								href: "https://github.com/Binidu01/bini-cli/releases",
								external: true
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 12,
								className: "opacity-50"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.path,
							className: "text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white",
							children: item.label
						}) }, item.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-4 text-sm font-semibold text-black dark:text-white",
						children: "Community"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							{
								label: "GitHub Discussions",
								href: "https://github.com/Binidu01/bini-cli/discussions"
							},
							{
								label: "Reddit",
								href: "https://www.reddit.com/r/binijs/"
							},
							{
								label: "Discord",
								href: "https://discord.gg/BVRMCxHQpw"
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/showcase/bini-js/?viewAsMember=true"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 12,
								className: "opacity-50"
							})]
						}) }, item.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-4 text-sm font-semibold text-black dark:text-white",
						children: "More"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							{
								label: "npm",
								href: "https://www.npmjs.com/package/create-bini-app"
							},
							{
								label: "GitHub",
								href: "https://github.com/Binidu01/bini-cli"
							},
							{
								label: "Issues",
								href: "https://github.com/Binidu01/bini-cli/issues"
							},
							{
								label: "License",
								href: "https://github.com/Binidu01/bini-cli/blob/main/LICENSE"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 12,
								className: "opacity-50"
							})]
						}) }, item.label))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 border-t border-neutral-200 pt-8 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-neutral-600 dark:text-neutral-400",
					children: [
						"©",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							suppressHydrationWarning: true,
							children: currentYear
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://binicooperations.dpdns.org/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300",
							children: "Bini Cooperation"
						}),
						"."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex w-fit self-center rounded-full border border-neutral-200 bg-neutral-100/80 p-1 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 sm:self-auto",
					role: "group",
					"aria-label": "Theme preference",
					children: themeOptions.map(({ value, label, icon: Icon }) => {
						const isActive = theme === value;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleThemeChange(value),
							"aria-label": `${label} theme`,
							"aria-pressed": isActive,
							title: label,
							className: `
                    flex h-8 w-8 items-center justify-center rounded-full
                    transition-all duration-200
                    ${isActive ? "bg-white text-black shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-white dark:ring-neutral-700" : "text-neutral-500 hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-500 dark:hover:bg-neutral-800/70 dark:hover:text-neutral-200"}
                  `,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 15,
								strokeWidth: 1.8
							})
						}, value);
					})
				})]
			})]
		})
	});
};
//#endregion
export { siVite as C, m as D, createLucideIcon as E, AnimatePresence as O, siVercel as S, ChevronRight as T, siReact as _, siCloudflare as a, siTauri as b, siDiscord as c, siHtml5 as d, siJavascript as f, siNpm as g, siNodedotjs as h, siApple as i, siDotenv as l, siNetlify as m, Header as n, siCss as o, siLinux as p, siAndroid as r, siDeno as s, Footer as t, siGithub as u, siReddit as v, ExternalLink as w, siTypescript as x, siSass as y };
