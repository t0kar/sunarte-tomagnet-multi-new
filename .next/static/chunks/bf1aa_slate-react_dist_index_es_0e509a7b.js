(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/bf1aa_slate-react_dist_index_es_0e509a7b.js", {

"[project]/node_modules/@portabletext/editor/node_modules/slate-react/dist/index.es.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultElement": (()=>DefaultElement),
    "DefaultLeaf": (()=>DefaultLeaf),
    "DefaultPlaceholder": (()=>DefaultPlaceholder),
    "Editable": (()=>Editable),
    "ReactEditor": (()=>ReactEditor),
    "Slate": (()=>Slate),
    "useComposing": (()=>useComposing),
    "useEditor": (()=>useEditor),
    "useFocused": (()=>useFocused),
    "useReadOnly": (()=>useReadOnly),
    "useSelected": (()=>useSelected),
    "useSlate": (()=>useSlate),
    "useSlateSelection": (()=>useSlateSelection),
    "useSlateSelector": (()=>useSlateSelector),
    "useSlateStatic": (()=>useSlateStatic),
    "useSlateWithV": (()=>useSlateWithV),
    "withReact": (()=>withReact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$direction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/direction/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slate/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slate-dom/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@juggle/resize-observer/lib/ResizeObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
/**
 * A React context for sharing the editor object.
 */ var EditorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */ var useSlateStatic = ()=>{
    var editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EditorContext);
    if (!editor) {
        throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
    }
    return editor;
};
// eslint-disable-next-line no-redeclare
var ReactEditor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMEditor"];
function ownKeys$5(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread$5(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
// https://github.com/facebook/draft-js/blob/main/src/component/handlers/composition/DraftEditorCompositionHandler.js#L41
// When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.
var RESOLVE_DELAY = 25;
// Time with no user interaction before the current user action is considered as done.
var FLUSH_DELAY = 200;
// Replace with `const debug = console.log` to debug
var debug = function debug() {};
// Type guard to check if a value is a DataTransfer
var isDataTransfer = (value)=>(value === null || value === void 0 ? void 0 : value.constructor.name) === 'DataTransfer';
function createAndroidInputManager(_ref) {
    var { editor, scheduleOnDOMSelectionChange, onDOMSelectionChange } = _ref;
    var flushing = false;
    var compositionEndTimeoutId = null;
    var flushTimeoutId = null;
    var actionTimeoutId = null;
    var idCounter = 0;
    var insertPositionHint = false;
    var applyPendingSelection = ()=>{
        var pendingSelection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_SELECTION"].get(editor);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_SELECTION"].delete(editor);
        if (pendingSelection) {
            var { selection } = editor;
            var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRange"])(editor, pendingSelection);
            if (normalized && (!selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(normalized, selection))) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, normalized);
            }
        }
    };
    var performAction = ()=>{
        var action = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_ACTION"].get(editor);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_ACTION"].delete(editor);
        if (!action) {
            return;
        }
        if (action.at) {
            var target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"].isPoint(action.at) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePoint"])(editor, action.at) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRange"])(editor, action.at);
            if (!target) {
                return;
            }
            var _targetRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].range(editor, target);
            if (!editor.selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(editor.selection, _targetRange)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, target);
            }
        }
        action.run();
    };
    var flush = ()=>{
        if (flushTimeoutId) {
            clearTimeout(flushTimeoutId);
            flushTimeoutId = null;
        }
        if (actionTimeoutId) {
            clearTimeout(actionTimeoutId);
            actionTimeoutId = null;
        }
        if (!hasPendingDiffs() && !hasPendingAction()) {
            applyPendingSelection();
            return;
        }
        if (!flushing) {
            flushing = true;
            setTimeout(()=>flushing = false);
        }
        if (hasPendingAction()) {
            flushing = 'action';
        }
        var selectionRef = editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].rangeRef(editor, editor.selection, {
            affinity: 'forward'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].set(editor, editor.marks);
        debug('flush', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_ACTION"].get(editor), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].get(editor));
        var scheduleSelectionChange = hasPendingDiffs();
        var diff;
        while(diff = (_EDITOR_TO_PENDING_DI = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].get(editor)) === null || _EDITOR_TO_PENDING_DI === void 0 ? void 0 : _EDITOR_TO_PENDING_DI[0]){
            var _EDITOR_TO_PENDING_DI, _EDITOR_TO_PENDING_DI2;
            var pendingMarks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].get(editor);
            if (pendingMarks !== undefined) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].delete(editor);
                editor.marks = pendingMarks;
            }
            if (pendingMarks && insertPositionHint === false) {
                insertPositionHint = null;
            }
            var range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetRange"])(diff);
            if (!editor.selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(editor.selection, range)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, range);
            }
            if (diff.diff.text) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, diff.diff.text);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor);
            }
            // Remove diff only after we have applied it to account for it when transforming
            // pending ranges.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].set(editor, (_EDITOR_TO_PENDING_DI2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2.filter((_ref2)=>{
                var { id } = _ref2;
                return id !== diff.id;
            }));
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyDiffState"])(editor, diff)) {
                scheduleSelectionChange = false;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_ACTION"].delete(editor);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].delete(editor);
                flushing = 'action';
                // Ensure we don't restore the pending user (dom) selection
                // since the document and dom state do not match.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_SELECTION"].delete(editor);
                scheduleOnDOMSelectionChange.cancel();
                onDOMSelectionChange.cancel();
                selectionRef === null || selectionRef === void 0 || selectionRef.unref();
            }
        }
        var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
        if (selection && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_SELECTION"].get(editor) && (!editor.selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(selection, editor.selection))) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, selection);
        }
        if (hasPendingAction()) {
            performAction();
            return;
        }
        // COMPAT: The selectionChange event is fired after the action is performed,
        // so we have to manually schedule it to ensure we don't 'throw away' the selection
        // while rendering if we have pending changes.
        if (scheduleSelectionChange) {
            scheduleOnDOMSelectionChange();
        }
        scheduleOnDOMSelectionChange.flush();
        onDOMSelectionChange.flush();
        applyPendingSelection();
        var userMarks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].get(editor);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].delete(editor);
        if (userMarks !== undefined) {
            editor.marks = userMarks;
            editor.onChange();
        }
    };
    var handleCompositionEnd = (_event)=>{
        if (compositionEndTimeoutId) {
            clearTimeout(compositionEndTimeoutId);
        }
        compositionEndTimeoutId = setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_COMPOSING"].set(editor, false);
            flush();
        }, RESOLVE_DELAY);
    };
    var handleCompositionStart = (_event)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_COMPOSING"].set(editor, true);
        if (compositionEndTimeoutId) {
            clearTimeout(compositionEndTimeoutId);
            compositionEndTimeoutId = null;
        }
    };
    var updatePlaceholderVisibility = function updatePlaceholderVisibility() {
        var forceHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var placeholderElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PLACEHOLDER_ELEMENT"].get(editor);
        if (!placeholderElement) {
            return;
        }
        if (hasPendingDiffs() || forceHide) {
            placeholderElement.style.display = 'none';
            return;
        }
        placeholderElement.style.removeProperty('display');
    };
    var storeDiff = (path, diff)=>{
        var _EDITOR_TO_PENDING_DI3;
        var pendingDiffs = (_EDITOR_TO_PENDING_DI3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].get(editor)) !== null && _EDITOR_TO_PENDING_DI3 !== void 0 ? _EDITOR_TO_PENDING_DI3 : [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].set(editor, pendingDiffs);
        var target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].leaf(editor, path);
        var idx = pendingDiffs.findIndex((change)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(change.path, path));
        if (idx < 0) {
            var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeStringDiff"])(target.text, diff);
            if (normalized) {
                pendingDiffs.push({
                    path,
                    diff,
                    id: idCounter++
                });
            }
            updatePlaceholderVisibility();
            return;
        }
        var merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeStringDiffs"])(target.text, pendingDiffs[idx].diff, diff);
        if (!merged) {
            pendingDiffs.splice(idx, 1);
            updatePlaceholderVisibility();
            return;
        }
        pendingDiffs[idx] = _objectSpread$5(_objectSpread$5({}, pendingDiffs[idx]), {}, {
            diff: merged
        });
    };
    var scheduleAction = function scheduleAction(run) {
        var { at } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        insertPositionHint = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_SELECTION"].delete(editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        if (hasPendingAction()) {
            flush();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_ACTION"].set(editor, {
            at,
            run
        });
        // COMPAT: When deleting before a non-contenteditable element chrome only fires a beforeinput,
        // (no input) and doesn't perform any dom mutations. Without a flush timeout we would never flush
        // in this case and thus never actually perform the action.
        actionTimeoutId = setTimeout(flush);
    };
    var handleDOMBeforeInput = (event)=>{
        var _targetRange2;
        if (flushTimeoutId) {
            clearTimeout(flushTimeoutId);
            flushTimeoutId = null;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_NODE_MAP_DIRTY"].get(editor)) {
            return;
        }
        var { inputType: type } = event;
        var targetRange = null;
        var data = event.dataTransfer || event.data || undefined;
        if (insertPositionHint !== false && type !== 'insertText' && type !== 'insertCompositionText') {
            insertPositionHint = false;
        }
        var [nativeTargetRange] = event.getTargetRanges();
        if (nativeTargetRange) {
            targetRange = ReactEditor.toSlateRange(editor, nativeTargetRange, {
                exactMatch: false,
                suppressThrow: true
            });
        }
        // COMPAT: SelectionChange event is fired after the action is performed, so we
        // have to manually get the selection here to ensure it's up-to-date.
        var window1 = ReactEditor.getWindow(editor);
        var domSelection = window1.getSelection();
        if (!targetRange && domSelection) {
            nativeTargetRange = domSelection;
            targetRange = ReactEditor.toSlateRange(editor, domSelection, {
                exactMatch: false,
                suppressThrow: true
            });
        }
        targetRange = (_targetRange2 = targetRange) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;
        if (!targetRange) {
            return;
        }
        // By default, the input manager tries to store text diffs so that we can
        // defer flushing them at a later point in time. We don't want to flush
        // for every input event as this can be expensive. However, there are some
        // scenarios where we cannot safely store the text diff and must instead
        // schedule an action to let Slate normalize the editor state.
        var canStoreDiff = true;
        if (type.startsWith('delete')) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(targetRange)) {
                var [_start, _end] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].edges(targetRange);
                var _leaf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].leaf(editor, _start.path);
                if (_leaf.text.length === _start.offset && _end.offset === 0) {
                    var next = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].next(editor, {
                        at: _start.path,
                        match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].isText
                    });
                    if (next && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(next[1], _end.path)) {
                        targetRange = {
                            anchor: _end,
                            focus: _end
                        };
                    }
                }
            }
            var direction = type.endsWith('Backward') ? 'backward' : 'forward';
            var [start, end] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].edges(targetRange);
            var [leaf, path] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].leaf(editor, start.path);
            var diff = {
                text: '',
                start: start.offset,
                end: end.offset
            };
            var pendingDiffs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].get(editor);
            var relevantPendingDiffs = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find((change)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(change.path, path));
            var diffs = relevantPendingDiffs ? [
                relevantPendingDiffs.diff,
                diff
            ] : [
                diff
            ];
            var text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyStringDiff"])(leaf.text, ...diffs);
            if (text.length === 0) {
                // Text leaf will be removed, so we need to schedule an
                // action to remove it so that Slate can normalize instead
                // of storing as a diff
                canStoreDiff = false;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(targetRange)) {
                if (canStoreDiff && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(targetRange.anchor.path, targetRange.focus.path)) {
                    var point = {
                        path: targetRange.anchor.path,
                        offset: start.offset
                    };
                    var range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].range(editor, point, point);
                    handleUserSelect(range);
                    return storeDiff(targetRange.anchor.path, {
                        text: '',
                        end: end.offset,
                        start: start.offset
                    });
                }
                return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                        direction
                    }), {
                    at: targetRange
                });
            }
        }
        switch(type){
            case 'deleteByComposition':
            case 'deleteByCut':
            case 'deleteByDrag':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor), {
                        at: targetRange
                    });
                }
            case 'deleteContent':
            case 'deleteContentForward':
                {
                    var { anchor } = targetRange;
                    if (canStoreDiff && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(targetRange)) {
                        var targetNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].leaf(editor, anchor.path);
                        if (anchor.offset < targetNode.text.length) {
                            return storeDiff(anchor.path, {
                                text: '',
                                start: anchor.offset,
                                end: anchor.offset + 1
                            });
                        }
                    }
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor), {
                        at: targetRange
                    });
                }
            case 'deleteContentBackward':
                {
                    var _nativeTargetRange;
                    var { anchor: _anchor } = targetRange;
                    // If we have a mismatch between the native and slate selection being collapsed
                    // we are most likely deleting a zero-width placeholder and thus should perform it
                    // as an action to ensure correct behavior (mostly happens with mark placeholders)
                    var nativeCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMSelection"])(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
                    if (canStoreDiff && nativeCollapsed && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(targetRange) && _anchor.offset > 0) {
                        return storeDiff(_anchor.path, {
                            text: '',
                            start: _anchor.offset - 1,
                            end: _anchor.offset
                        });
                    }
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor), {
                        at: targetRange
                    });
                }
            case 'deleteEntireSoftLine':
                {
                    return scheduleAction(()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                            unit: 'line'
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                            unit: 'line'
                        });
                    }, {
                        at: targetRange
                    });
                }
            case 'deleteHardLineBackward':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                            unit: 'block'
                        }), {
                        at: targetRange
                    });
                }
            case 'deleteSoftLineBackward':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                            unit: 'line'
                        }), {
                        at: targetRange
                    });
                }
            case 'deleteHardLineForward':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                            unit: 'block'
                        }), {
                        at: targetRange
                    });
                }
            case 'deleteSoftLineForward':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                            unit: 'line'
                        }), {
                        at: targetRange
                    });
                }
            case 'deleteWordBackward':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                            unit: 'word'
                        }), {
                        at: targetRange
                    });
                }
            case 'deleteWordForward':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                            unit: 'word'
                        }), {
                        at: targetRange
                    });
                }
            case 'insertLineBreak':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertSoftBreak(editor), {
                        at: targetRange
                    });
                }
            case 'insertParagraph':
                {
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertBreak(editor), {
                        at: targetRange
                    });
                }
            case 'insertCompositionText':
            case 'deleteCompositionText':
            case 'insertFromComposition':
            case 'insertFromDrop':
            case 'insertFromPaste':
            case 'insertFromYank':
            case 'insertReplacementText':
            case 'insertText':
                {
                    if (isDataTransfer(data)) {
                        return scheduleAction(()=>ReactEditor.insertData(editor, data), {
                            at: targetRange
                        });
                    }
                    var _text = data !== null && data !== void 0 ? data : '';
                    // COMPAT: If we are writing inside a placeholder, the ime inserts the text inside
                    // the placeholder itself and thus includes the zero-width space inside edit events.
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].get(editor)) {
                        _text = _text.replace('\uFEFF', '');
                    }
                    // Pastes from the Android clipboard will generate `insertText` events.
                    // If the copied text contains any newlines, Android will append an
                    // extra newline to the end of the copied text.
                    if (type === 'insertText' && /.*\n.*\n$/.test(_text)) {
                        _text = _text.slice(0, -1);
                    }
                    // If the text includes a newline, split it at newlines and paste each component
                    // string, with soft breaks in between each.
                    if (_text.includes('\n')) {
                        return scheduleAction(()=>{
                            var parts = _text.split('\n');
                            parts.forEach((line, i)=>{
                                if (line) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, line);
                                }
                                if (i !== parts.length - 1) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertSoftBreak(editor);
                                }
                            });
                        }, {
                            at: targetRange
                        });
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(targetRange.anchor.path, targetRange.focus.path)) {
                        var [_start2, _end2] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].edges(targetRange);
                        var _diff = {
                            start: _start2.offset,
                            end: _end2.offset,
                            text: _text
                        };
                        // COMPAT: Swiftkey has a weird bug where the target range of the 2nd word
                        // inserted after a mark placeholder is inserted with an anchor offset off by 1.
                        // So writing 'some text' will result in 'some ttext'. Luckily all 'normal' insert
                        // text events are fired with the correct target ranges, only the final 'insertComposition'
                        // isn't, so we can adjust the target range start offset if we are confident this is the
                        // swiftkey insert causing the issue.
                        if (_text && insertPositionHint && type === 'insertCompositionText') {
                            var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
                            var diffPosition = _diff.start + _diff.text.search(/\S|$/);
                            if (diffPosition === hintPosition + 1 && _diff.end === insertPositionHint.start + insertPositionHint.text.length) {
                                _diff.start -= 1;
                                insertPositionHint = null;
                                scheduleFlush();
                            } else {
                                insertPositionHint = false;
                            }
                        } else if (type === 'insertText') {
                            if (insertPositionHint === null) {
                                insertPositionHint = _diff;
                            } else if (insertPositionHint && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(targetRange) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
                                insertPositionHint = _objectSpread$5(_objectSpread$5({}, insertPositionHint), {}, {
                                    text: insertPositionHint.text + _text
                                });
                            } else {
                                insertPositionHint = false;
                            }
                        } else {
                            insertPositionHint = false;
                        }
                        if (canStoreDiff) {
                            storeDiff(_start2.path, _diff);
                            return;
                        }
                    }
                    return scheduleAction(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, _text), {
                        at: targetRange
                    });
                }
        }
    };
    var hasPendingAction = ()=>{
        return !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_ACTION"].get(editor);
    };
    var hasPendingDiffs = ()=>{
        var _EDITOR_TO_PENDING_DI4;
        return !!((_EDITOR_TO_PENDING_DI4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_DIFFS"].get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 && _EDITOR_TO_PENDING_DI4.length);
    };
    var hasPendingChanges = ()=>{
        return hasPendingAction() || hasPendingDiffs();
    };
    var isFlushing = ()=>{
        return flushing;
    };
    var handleUserSelect = (range)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_SELECTION"].set(editor, range);
        if (flushTimeoutId) {
            clearTimeout(flushTimeoutId);
            flushTimeoutId = null;
        }
        var { selection } = editor;
        if (!range) {
            return;
        }
        var pathChanged = !selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(selection.anchor.path, range.anchor.path);
        var parentPathChanged = !selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
        if (pathChanged && insertPositionHint || parentPathChanged) {
            insertPositionHint = false;
        }
        if (pathChanged || hasPendingDiffs()) {
            flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
        }
    };
    var handleInput = ()=>{
        if (hasPendingAction() || !hasPendingDiffs()) {
            flush();
        }
    };
    var handleKeyDown = (_)=>{
        // COMPAT: Swiftkey closes the keyboard when typing inside a empty node
        // directly next to a non-contenteditable element (= the placeholder).
        // The only event fired soon enough for us to allow hiding the placeholder
        // without swiftkey picking it up is the keydown event, so we have to hide it
        // here. See https://github.com/ianstormtaylor/slate/pull/4988#issuecomment-1201050535
        if (!hasPendingDiffs()) {
            updatePlaceholderVisibility(true);
            setTimeout(updatePlaceholderVisibility);
        }
    };
    var scheduleFlush = ()=>{
        if (!hasPendingAction()) {
            actionTimeoutId = setTimeout(flush);
        }
    };
    var handleDomMutations = (mutations)=>{
        if (hasPendingDiffs() || hasPendingAction()) {
            return;
        }
        if (mutations.some((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTrackedMutation"])(editor, mutation, mutations))) {
            var _EDITOR_TO_FORCE_REND;
            // Cause a re-render to restore the dom state if we encounter tracked mutations without
            // a corresponding pending action.
            (_EDITOR_TO_FORCE_REND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_FORCE_RENDER"].get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 || _EDITOR_TO_FORCE_REND();
        }
    };
    return {
        flush,
        scheduleFlush,
        hasPendingDiffs,
        hasPendingAction,
        hasPendingChanges,
        isFlushing,
        handleUserSelect,
        handleCompositionEnd,
        handleCompositionStart,
        handleDOMBeforeInput,
        handleKeyDown,
        handleDomMutations,
        handleInput
    };
}
function useIsMounted() {
    var isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMounted.useEffect": ()=>{
            isMountedRef.current = true;
            return ({
                "useIsMounted.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["useIsMounted.useEffect"];
        }
    }["useIsMounted.useEffect"], []);
    return isMountedRef.current;
}
/**
 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
 */ var useIsomorphicLayoutEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_USE_DOM"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function useMutationObserver(node, callback, options) {
    var [mutationObserver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMutationObserver.useState": ()=>new MutationObserver(callback)
    }["useMutationObserver.useState"]);
    useIsomorphicLayoutEffect({
        "useMutationObserver.useIsomorphicLayoutEffect": ()=>{
            // Discard mutations caused during render phase. This works due to react calling
            // useLayoutEffect synchronously after the render phase before the next tick.
            mutationObserver.takeRecords();
        }
    }["useMutationObserver.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMutationObserver.useEffect": ()=>{
            if (!node.current) {
                throw new Error('Failed to attach MutationObserver, `node` is undefined');
            }
            mutationObserver.observe(node.current, options);
            return ({
                "useMutationObserver.useEffect": ()=>mutationObserver.disconnect()
            })["useMutationObserver.useEffect"];
        }
    }["useMutationObserver.useEffect"], [
        mutationObserver,
        node,
        options
    ]);
}
var _excluded$2 = [
    "node"
];
function ownKeys$4(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread$4(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
var MUTATION_OBSERVER_CONFIG$1 = {
    subtree: true,
    childList: true,
    characterData: true
};
var useAndroidInputManager = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] ? ()=>null : (_ref)=>{
    var { node } = _ref, options = _objectWithoutProperties(_ref, _excluded$2);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"]) {
        return null;
    }
    var editor = useSlateStatic();
    var isMounted = useIsMounted();
    var [inputManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>createAndroidInputManager(_objectSpread$4({
            editor
        }, options)));
    useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG$1);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_SCHEDULE_FLUSH"].set(editor, inputManager.scheduleFlush);
    if (isMounted) {
        inputManager.flush();
    }
    return inputManager;
};
function ownKeys$3(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread$3(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
/**
 * Leaf content strings.
 */ var String$1 = (props)=>{
    var { isLast, leaf, parent, text } = props;
    var editor = useSlateStatic();
    var path = ReactEditor.findPath(editor, text);
    var parentPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].parent(path);
    var isMarkPlaceholder = Boolean(leaf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARK_PLACEHOLDER_SYMBOL"]]);
    // COMPAT: Render text inside void nodes with a zero-width space.
    // So the node can contain selection but the text is not visible.
    if (editor.isVoid(parent)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ZeroWidthString, {
            length: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].string(parent).length
        });
    }
    // COMPAT: If this is the last text node in an empty block, render a zero-
    // width space that will convert into a line break when copying and pasting
    // to support expected plain text.
    if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].string(editor, parentPath) === '') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ZeroWidthString, {
            isLineBreak: true,
            isMarkPlaceholder: isMarkPlaceholder
        });
    }
    // COMPAT: If the text is empty, it's because it's on the edge of an inline
    // node, so we render a zero-width space so that the selection can be
    // inserted next to it still.
    if (leaf.text === '') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ZeroWidthString, {
            isMarkPlaceholder: isMarkPlaceholder
        });
    }
    // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
    // so we need to add an extra trailing new lines to prevent that.
    if (isLast && leaf.text.slice(-1) === '\n') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TextString, {
            isTrailing: true,
            text: leaf.text
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TextString, {
        text: leaf.text
    });
};
/**
 * Leaf strings with text in them.
 */ var TextString = (props)=>{
    var { text, isTrailing = false } = props;
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var getTextContent = ()=>{
        return "".concat(text !== null && text !== void 0 ? text : '').concat(isTrailing ? '\n' : '');
    };
    var [initialText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTextContent);
    // This is the actual text rendering boundary where we interface with the DOM
    // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
    // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
    // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
    // exactly if and only if its current content does not match our current virtual DOM.
    // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
    // eg makes native spellcheck opt out from checking the text node.
    // useLayoutEffect: updating our span before browser paint
    useIsomorphicLayoutEffect({
        "TextString.useIsomorphicLayoutEffect": ()=>{
            // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
            var textWithTrailing = getTextContent();
            if (ref.current && ref.current.textContent !== textWithTrailing) {
                ref.current.textContent = textWithTrailing;
            }
        // intentionally not specifying dependencies, so that this effect runs on every render
        // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render
        }
    }["TextString.useIsomorphicLayoutEffect"]);
    // We intentionally render a memoized <span> that only receives the initial text content when the component is mounted.
    // We defer to the layout effect above to update the `textContent` of the span element when needed.
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MemoizedText$1, {
        ref: ref
    }, initialText);
};
var MemoizedText$1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-slate-string": true,
        ref: ref
    }, props.children);
}));
/**
 * Leaf strings without text, render as zero-width strings.
 */ var ZeroWidthString = (props)=>{
    var { length = 0, isLineBreak = false, isMarkPlaceholder = false } = props;
    var attributes = {
        'data-slate-zero-width': isLineBreak ? 'n' : 'z',
        'data-slate-length': length
    };
    if (isMarkPlaceholder) {
        attributes['data-slate-mark-placeholder'] = true;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", _objectSpread$3({}, attributes), !(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_IOS"]) || !isLineBreak ? '\uFEFF' : null, isLineBreak ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("br", null) : null);
};
function ownKeys$2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread$2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
// Delay the placeholder on Android to prevent the keyboard from closing.
// (https://github.com/ianstormtaylor/slate/pull/5368)
var PLACEHOLDER_DELAY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] ? 300 : 0;
function disconnectPlaceholderResizeObserver(placeholderResizeObserver, releaseObserver) {
    if (placeholderResizeObserver.current) {
        placeholderResizeObserver.current.disconnect();
        if (releaseObserver) {
            placeholderResizeObserver.current = null;
        }
    }
}
function clearTimeoutRef(timeoutRef) {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
    }
}
/**
 * Individual leaves in a text node with unique formatting.
 */ var Leaf = (props)=>{
    var { leaf, isLast, text, parent, renderPlaceholder, renderLeaf = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DefaultLeaf, _objectSpread$2({}, props)) } = props;
    var editor = useSlateStatic();
    var placeholderResizeObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var placeholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var [showPlaceholder, setShowPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var showPlaceholderTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var callbackPlaceholderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Leaf.useCallback[callbackPlaceholderRef]": (placeholderEl)=>{
            disconnectPlaceholderResizeObserver(placeholderResizeObserver, placeholderEl == null);
            if (placeholderEl == null) {
                var _leaf$onPlaceholderRe;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PLACEHOLDER_ELEMENT"].delete(editor);
                (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe === void 0 || _leaf$onPlaceholderRe.call(leaf, null);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PLACEHOLDER_ELEMENT"].set(editor, placeholderEl);
                if (!placeholderResizeObserver.current) {
                    // Create a new observer and observe the placeholder element.
                    var ResizeObserver$1 = window.ResizeObserver || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserver"];
                    placeholderResizeObserver.current = new ResizeObserver$1({
                        "Leaf.useCallback[callbackPlaceholderRef]": ()=>{
                            var _leaf$onPlaceholderRe2;
                            (_leaf$onPlaceholderRe2 = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe2 === void 0 || _leaf$onPlaceholderRe2.call(leaf, placeholderEl);
                        }
                    }["Leaf.useCallback[callbackPlaceholderRef]"]);
                }
                placeholderResizeObserver.current.observe(placeholderEl);
                placeholderRef.current = placeholderEl;
            }
        }
    }["Leaf.useCallback[callbackPlaceholderRef]"], [
        placeholderRef,
        leaf,
        editor
    ]);
    var children = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(String$1, {
        isLast: isLast,
        leaf: leaf,
        parent: parent,
        text: text
    });
    var leafIsPlaceholder = Boolean(leaf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_SYMBOL"]]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaf.useEffect": ()=>{
            if (leafIsPlaceholder) {
                if (!showPlaceholderTimeoutRef.current) {
                    // Delay the placeholder, so it will not render in a selection
                    showPlaceholderTimeoutRef.current = setTimeout({
                        "Leaf.useEffect": ()=>{
                            setShowPlaceholder(true);
                            showPlaceholderTimeoutRef.current = null;
                        }
                    }["Leaf.useEffect"], PLACEHOLDER_DELAY);
                }
            } else {
                clearTimeoutRef(showPlaceholderTimeoutRef);
                setShowPlaceholder(false);
            }
            return ({
                "Leaf.useEffect": ()=>clearTimeoutRef(showPlaceholderTimeoutRef)
            })["Leaf.useEffect"];
        }
    }["Leaf.useEffect"], [
        leafIsPlaceholder,
        setShowPlaceholder
    ]);
    if (leafIsPlaceholder && showPlaceholder) {
        var placeholderProps = {
            children: leaf.placeholder,
            attributes: {
                'data-slate-placeholder': true,
                style: {
                    position: 'absolute',
                    top: 0,
                    pointerEvents: 'none',
                    width: '100%',
                    maxWidth: '100%',
                    display: 'block',
                    opacity: '0.333',
                    userSelect: 'none',
                    textDecoration: 'none',
                    // Fixes https://github.com/udecode/plate/issues/2315
                    WebkitUserModify: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"] ? 'inherit' : undefined
                },
                contentEditable: false,
                ref: callbackPlaceholderRef
            }
        };
        children = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, renderPlaceholder(placeholderProps), children);
    }
    // COMPAT: Having the `data-` attributes on these leaf elements ensures that
    // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
    // contenteditable behaviors. (2019/05/08)
    var attributes = {
        'data-slate-leaf': true
    };
    return renderLeaf({
        attributes,
        children,
        leaf,
        text
    });
};
var MemoizedLeaf = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(Leaf, (prev, next)=>{
    return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].equals(next.leaf, prev.leaf) && next.leaf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_SYMBOL"]] === prev.leaf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_SYMBOL"]];
});
var DefaultLeaf = (props)=>{
    var { attributes, children } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", _objectSpread$2({}, attributes), children);
};
/**
 * Text.
 */ var Text = (props)=>{
    var { decorations, isLast, parent, renderPlaceholder, renderLeaf, text } = props;
    var editor = useSlateStatic();
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var leaves = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].decorations(text, decorations);
    var key = ReactEditor.findKey(editor, text);
    var children = [];
    for(var i = 0; i < leaves.length; i++){
        var leaf = leaves[i];
        children.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MemoizedLeaf, {
            isLast: isLast && i === leaves.length - 1,
            key: "".concat(key.id, "-").concat(i),
            renderPlaceholder: renderPlaceholder,
            leaf: leaf,
            text: text,
            parent: parent,
            renderLeaf: renderLeaf
        }));
    }
    // Update element-related weak maps with the DOM element ref.
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Text.useCallback[callbackRef]": (span)=>{
            var KEY_TO_ELEMENT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_KEY_TO_ELEMENT"].get(editor);
            if (span) {
                KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, span);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].set(text, span);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_TO_NODE"].set(span, text);
            } else {
                KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].delete(text);
                if (ref.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_TO_NODE"].delete(ref.current);
                }
            }
            ref.current = span;
        }
    }["Text.useCallback[callbackRef]"], [
        ref,
        editor,
        key,
        text
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-slate-node": "text",
        ref: callbackRef
    }, children);
};
var MemoizedText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(Text, (prev, next)=>{
    return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextDecorationsEqual"])(next.decorations, prev.decorations);
});
function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread$1(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
/**
 * Element.
 */ var Element = (props)=>{
    var { decorations, element, renderElement = (p)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DefaultElement, _objectSpread$1({}, p)), renderPlaceholder, renderLeaf, selection } = props;
    var editor = useSlateStatic();
    var readOnly = useReadOnly();
    var isInline = editor.isInline(element);
    var key = ReactEditor.findKey(editor, element);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Element.useCallback[ref]": (ref)=>{
            // Update element-related weak maps with the DOM element ref.
            var KEY_TO_ELEMENT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_KEY_TO_ELEMENT"].get(editor);
            if (ref) {
                KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, ref);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].set(element, ref);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_TO_NODE"].set(ref, element);
            } else {
                KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].delete(element);
            }
        }
    }["Element.useCallback[ref]"], [
        editor,
        key,
        element
    ]);
    var children = useChildren({
        decorations,
        node: element,
        renderElement,
        renderPlaceholder,
        renderLeaf,
        selection
    });
    // Attributes that the developer must mix into the element in their
    // custom node renderer component.
    var attributes = {
        'data-slate-node': 'element',
        ref
    };
    if (isInline) {
        attributes['data-slate-inline'] = true;
    }
    // If it's a block node with inline children, add the proper `dir` attribute
    // for text direction.
    if (!isInline && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].hasInlines(editor, element)) {
        var text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].string(element);
        var dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$direction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(text);
        if (dir === 'rtl') {
            attributes.dir = dir;
        }
    }
    // If it's a void node, wrap the children in extra void-specific elements.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, element)) {
        attributes['data-slate-void'] = true;
        if (!readOnly && isInline) {
            attributes.contentEditable = false;
        }
        var Tag = isInline ? 'span' : 'div';
        var [[_text]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].texts(element);
        children = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Tag, {
            "data-slate-spacer": true,
            style: {
                height: '0',
                color: 'transparent',
                outline: 'none',
                position: 'absolute'
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MemoizedText, {
            renderPlaceholder: renderPlaceholder,
            decorations: [],
            isLast: false,
            parent: element,
            text: _text
        }));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_INDEX"].set(_text, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_PARENT"].set(_text, element);
    }
    return renderElement({
        attributes,
        children,
        element
    });
};
var MemoizedElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(Element, (prev, next)=>{
    return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && prev.renderPlaceholder === next.renderPlaceholder && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementDecorationsEqual"])(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(prev.selection, next.selection));
});
/**
 * The default element renderer.
 */ var DefaultElement = (props)=>{
    var { attributes, children, element } = props;
    var editor = useSlateStatic();
    var Tag = editor.isInline(element) ? 'span' : 'div';
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Tag, _objectSpread$1(_objectSpread$1({}, attributes), {}, {
        style: {
            position: 'relative'
        }
    }), children);
};
/**
 * A React context for sharing the `decorate` prop of the editable.
 */ var DecorateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(()=>[]);
/**
 * Get the current `decorate` prop of the editable.
 */ var useDecorate = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DecorateContext);
};
/**
 * A React context for sharing the `selected` state of an element.
 */ var SelectedContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(false);
/**
 * Get the current `selected` state of an element.
 */ var useSelected = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SelectedContext);
};
/**
 * Children.
 */ var useChildren = (props)=>{
    var { decorations, node, renderElement, renderPlaceholder, renderLeaf, selection } = props;
    var decorate = useDecorate();
    var editor = useSlateStatic();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_NODE_MAP_DIRTY"].set(editor, false);
    var path = ReactEditor.findPath(editor, node);
    var children = [];
    var isLeafBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node) && !editor.isInline(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].hasInlines(editor, node);
    for(var i = 0; i < node.children.length; i++){
        var p = path.concat(i);
        var n = node.children[i];
        var key = ReactEditor.findKey(editor, n);
        var range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].range(editor, p);
        var sel = selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersection(range, selection);
        var ds = decorate([
            n,
            p
        ]);
        for (var dec of decorations){
            var d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersection(dec, range);
            if (d) {
                ds.push(d);
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(n)) {
            children.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SelectedContext.Provider, {
                key: "provider-".concat(key.id),
                value: !!sel
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MemoizedElement, {
                decorations: ds,
                element: n,
                key: key.id,
                renderElement: renderElement,
                renderPlaceholder: renderPlaceholder,
                renderLeaf: renderLeaf,
                selection: sel
            })));
        } else {
            children.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MemoizedText, {
                decorations: ds,
                key: key.id,
                isLast: isLeafBlock && i === node.children.length - 1,
                parent: node,
                renderPlaceholder: renderPlaceholder,
                renderLeaf: renderLeaf,
                text: n
            }));
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_INDEX"].set(n, i);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_PARENT"].set(n, node);
    }
    return children;
};
/**
 * A React context for sharing the `readOnly` state of the editor.
 */ var ReadOnlyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(false);
/**
 * Get the current `readOnly` state of the editor.
 */ var useReadOnly = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ReadOnlyContext);
};
var SlateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */ var useSlate = ()=>{
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SlateContext);
    if (!context) {
        throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
    }
    var { editor } = context;
    return editor;
};
var useSlateWithV = ()=>{
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SlateContext);
    if (!context) {
        throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
    }
    return context;
};
function useTrackUserInput() {
    var editor = useSlateStatic();
    var receivedUserInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var animationFrameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var onUserInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTrackUserInput.useCallback[onUserInput]": ()=>{
            if (receivedUserInput.current) {
                return;
            }
            receivedUserInput.current = true;
            var window1 = ReactEditor.getWindow(editor);
            window1.cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = window1.requestAnimationFrame({
                "useTrackUserInput.useCallback[onUserInput]": ()=>{
                    receivedUserInput.current = false;
                }
            }["useTrackUserInput.useCallback[onUserInput]"]);
        }
    }["useTrackUserInput.useCallback[onUserInput]"], [
        editor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTrackUserInput.useEffect": ()=>({
                "useTrackUserInput.useEffect": ()=>cancelAnimationFrame(animationFrameIdRef.current)
            })["useTrackUserInput.useEffect"]
    }["useTrackUserInput.useEffect"], []);
    return {
        receivedUserInput,
        onUserInput
    };
}
var createRestoreDomManager = (editor, receivedUserInput)=>{
    var bufferedMutations = [];
    var clear = ()=>{
        bufferedMutations = [];
    };
    var registerMutations = (mutations)=>{
        if (!receivedUserInput.current) {
            return;
        }
        var trackedMutations = mutations.filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTrackedMutation"])(editor, mutation, mutations));
        bufferedMutations.push(...trackedMutations);
    };
    function restoreDOM() {
        if (bufferedMutations.length > 0) {
            bufferedMutations.reverse().forEach((mutation)=>{
                if (mutation.type === 'characterData') {
                    // We don't want to restore the DOM for characterData mutations
                    // because this interrupts the composition.
                    return;
                }
                mutation.removedNodes.forEach((node)=>{
                    mutation.target.insertBefore(node, mutation.nextSibling);
                });
                mutation.addedNodes.forEach((node)=>{
                    mutation.target.removeChild(node);
                });
            });
            // Clear buffered mutations to ensure we don't undo them twice
            clear();
        }
    }
    return {
        registerMutations,
        restoreDOM,
        clear
    };
};
var MUTATION_OBSERVER_CONFIG = {
    subtree: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true
};
// We have to use a class component here since we rely on `getSnapshotBeforeUpdate` which has no FC equivalent
// to run code synchronously immediately before react commits the component update to the DOM.
class RestoreDOMComponent extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        _defineProperty(this, "context", null);
        _defineProperty(this, "manager", null);
        _defineProperty(this, "mutationObserver", null);
    }
    observe() {
        var _this$mutationObserve;
        var { node } = this.props;
        if (!node.current) {
            throw new Error('Failed to attach MutationObserver, `node` is undefined');
        }
        (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 || _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG);
    }
    componentDidMount() {
        var { receivedUserInput } = this.props;
        var editor = this.context;
        this.manager = createRestoreDomManager(editor, receivedUserInput);
        this.mutationObserver = new MutationObserver(this.manager.registerMutations);
        this.observe();
    }
    getSnapshotBeforeUpdate() {
        var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
        var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
        if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
            var _this$manager;
            (_this$manager = this.manager) === null || _this$manager === void 0 || _this$manager.registerMutations(pendingMutations);
        }
        (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 || _this$mutationObserve3.disconnect();
        (_this$manager2 = this.manager) === null || _this$manager2 === void 0 || _this$manager2.restoreDOM();
        return null;
    }
    componentDidUpdate() {
        var _this$manager3;
        (_this$manager3 = this.manager) === null || _this$manager3 === void 0 || _this$manager3.clear();
        this.observe();
    }
    componentWillUnmount() {
        var _this$mutationObserve4;
        (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 || _this$mutationObserve4.disconnect();
    }
    render() {
        return this.props.children;
    }
}
_defineProperty(RestoreDOMComponent, "contextType", EditorContext);
var RestoreDOM = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] ? RestoreDOMComponent : (_ref)=>{
    var { children } = _ref;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
};
/**
 * A React context for sharing the `composing` state of the editor.
 */ var ComposingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(false);
/**
 * Get the current `composing` state of the editor.
 */ var useComposing = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ComposingContext);
};
var _excluded$1 = [
    "autoFocus",
    "decorate",
    "onDOMBeforeInput",
    "placeholder",
    "readOnly",
    "renderElement",
    "renderLeaf",
    "renderPlaceholder",
    "scrollSelectionIntoView",
    "style",
    "as",
    "disableDefaultStyles"
], _excluded2 = [
    "text"
];
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
var Children = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, useChildren(props));
/**
 * Editable.
 */ var Editable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    var defaultRenderPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editable.useCallback[defaultRenderPlaceholder]": (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DefaultPlaceholder, _objectSpread({}, props))
    }["Editable.useCallback[defaultRenderPlaceholder]"], []);
    var { autoFocus, decorate = defaultDecorate, onDOMBeforeInput: propsOnDOMBeforeInput, placeholder, readOnly = false, renderElement, renderLeaf, renderPlaceholder = defaultRenderPlaceholder, scrollSelectionIntoView = defaultScrollSelectionIntoView, style: userStyle = {}, as: Component = 'div', disableDefaultStyles = false } = props, attributes = _objectWithoutProperties(props, _excluded$1);
    var editor = useSlate();
    // Rerender editor when composition status changed
    var [isComposing, setIsComposing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var deferredOperations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    var [placeholderHeight, setPlaceholderHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    var processing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var { onUserInput, receivedUserInput } = useTrackUserInput();
    var [, forceRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "Editable.useReducer": (s)=>s + 1
    }["Editable.useReducer"], 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_FORCE_RENDER"].set(editor, forceRender);
    // Update internal state on each render.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_READ_ONLY"].set(editor, readOnly);
    // Keep track of some state for the event handler logic.
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editable.useMemo[state]": ()=>({
                isDraggingInternally: false,
                isUpdatingSelection: false,
                latestElement: null,
                hasMarkPlaceholder: false
            })
    }["Editable.useMemo[state]"], []);
    // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
    // needs to be manually focused.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editable.useEffect": ()=>{
            if (ref.current && autoFocus) {
                ref.current.focus();
            }
        }
    }["Editable.useEffect"], [
        autoFocus
    ]);
    /**
   * The AndroidInputManager object has a cyclical dependency on onDOMSelectionChange
   *
   * It is defined as a reference to simplify hook dependencies and clarify that
   * it needs to be initialized.
   */ var androidInputManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Listen on the native `selectionchange` event to be able to update any time
    // the selection changes. This is required because React's `onSelect` is leaky
    // and non-standard so it doesn't fire until after a selection has been
    // released. This causes issues in situations where another change happens
    // while a selection is being dragged.
    var onDOMSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editable.useMemo[onDOMSelectionChange]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                "Editable.useMemo[onDOMSelectionChange]": ()=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_NODE_MAP_DIRTY"].get(editor)) {
                        onDOMSelectionChange();
                        return;
                    }
                    var el = ReactEditor.toDOMNode(editor, editor);
                    var root = el.getRootNode();
                    if (!processing.current && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"] && root instanceof ShadowRoot) {
                        processing.current = true;
                        var active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
                        if (active) {
                            document.execCommand('indent');
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor);
                        }
                        processing.current = false;
                        return;
                    }
                    var androidInputManager = androidInputManagerRef.current;
                    if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
                        var _root = ReactEditor.findDocumentOrShadowRoot(editor);
                        var { activeElement } = _root;
                        var _el = ReactEditor.toDOMNode(editor, editor);
                        var domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelection"])(_root);
                        if (activeElement === _el) {
                            state.latestElement = activeElement;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FOCUSED"].set(editor, true);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FOCUSED"].delete(editor);
                        }
                        if (!domSelection) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor);
                        }
                        var { anchorNode, focusNode } = domSelection;
                        var anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
                        var focusNodeInEditor = ReactEditor.hasTarget(editor, focusNode);
                        if (anchorNodeSelectable && focusNodeInEditor) {
                            var range = ReactEditor.toSlateRange(editor, domSelection, {
                                exactMatch: false,
                                suppressThrow: true
                            });
                            if (range) {
                                if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, range);
                                } else {
                                    androidInputManager === null || androidInputManager === void 0 || androidInputManager.handleUserSelect(range);
                                }
                            }
                        }
                        // Deselect the editor if the dom selection is not selectable in readonly mode
                        if (readOnly && (!anchorNodeSelectable || !focusNodeInEditor)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].deselect(editor);
                        }
                    }
                }
            }["Editable.useMemo[onDOMSelectionChange]"], 100)
    }["Editable.useMemo[onDOMSelectionChange]"], [
        editor,
        readOnly,
        state
    ]);
    var scheduleOnDOMSelectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Editable.useMemo[scheduleOnDOMSelectionChange]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(onDOMSelectionChange, 0)
    }["Editable.useMemo[scheduleOnDOMSelectionChange]"], [
        onDOMSelectionChange
    ]);
    androidInputManagerRef.current = useAndroidInputManager({
        node: ref,
        onDOMSelectionChange,
        scheduleOnDOMSelectionChange
    });
    useIsomorphicLayoutEffect({
        "Editable.useIsomorphicLayoutEffect": ()=>{
            var _androidInputManagerR, _androidInputManagerR2;
            // Update element-related weak maps with the DOM element ref.
            var window1;
            if (ref.current && (window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultView"])(ref.current))) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_WINDOW"].set(editor, window1);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_ELEMENT"].set(editor, ref.current);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].set(editor, ref.current);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_TO_NODE"].set(ref.current, editor);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].delete(editor);
            }
            // Make sure the DOM selection state is in sync.
            var { selection } = editor;
            var root = ReactEditor.findDocumentOrShadowRoot(editor);
            var domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelection"])(root);
            if (!domSelection || !ReactEditor.isFocused(editor) || (_androidInputManagerR = androidInputManagerRef.current) !== null && _androidInputManagerR !== void 0 && _androidInputManagerR.hasPendingAction()) {
                return;
            }
            var setDomSelection = {
                "Editable.useIsomorphicLayoutEffect.setDomSelection": (forceChange)=>{
                    var hasDomSelection = domSelection.type !== 'None';
                    // If the DOM selection is properly unset, we're done.
                    if (!selection && !hasDomSelection) {
                        return;
                    }
                    // Get anchorNode and focusNode
                    var focusNode = domSelection.focusNode;
                    var anchorNode;
                    // COMPAT: In firefox the normal selection way does not work
                    // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FIREFOX"] && domSelection.rangeCount > 1) {
                        var firstRange = domSelection.getRangeAt(0);
                        var lastRange = domSelection.getRangeAt(domSelection.rangeCount - 1);
                        // Right to left
                        if (firstRange.startContainer === focusNode) {
                            anchorNode = lastRange.endContainer;
                        } else {
                            // Left to right
                            anchorNode = firstRange.startContainer;
                        }
                    } else {
                        anchorNode = domSelection.anchorNode;
                    }
                    // verify that the dom selection is in the editor
                    var editorElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_ELEMENT"].get(editor);
                    var hasDomSelectionInEditor = false;
                    if (editorElement.contains(anchorNode) && editorElement.contains(focusNode)) {
                        hasDomSelectionInEditor = true;
                    }
                    // If the DOM selection is in the editor and the editor selection is already correct, we're done.
                    if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
                        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
                            exactMatch: true,
                            // domSelection is not necessarily a valid Slate range
                            // (e.g. when clicking on contentEditable:false element)
                            suppressThrow: true
                        });
                        if (slateRange && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(slateRange, selection)) {
                            var _anchorNode;
                            if (!state.hasMarkPlaceholder) {
                                return;
                            }
                            // Ensure selection is inside the mark placeholder
                            if ((_anchorNode = anchorNode) !== null && _anchorNode !== void 0 && (_anchorNode = _anchorNode.parentElement) !== null && _anchorNode !== void 0 && _anchorNode.hasAttribute('data-slate-mark-placeholder')) {
                                return;
                            }
                        }
                    }
                    // when <Editable/> is being controlled through external value
                    // then its children might just change - DOM responds to it on its own
                    // but Slate's value is not being updated through any operation
                    // and thus it doesn't transform selection on its own
                    if (selection && !ReactEditor.hasRange(editor, selection)) {
                        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
                            exactMatch: false,
                            suppressThrow: true
                        });
                        return;
                    }
                    // Otherwise the DOM selection is out of sync, so update it.
                    state.isUpdatingSelection = true;
                    var newDomRange = null;
                    try {
                        newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
                    } catch (e) {
                    // Ignore, dom and state might be out of sync
                    }
                    if (newDomRange) {
                        if (ReactEditor.isComposing(editor) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"]) {
                            domSelection.collapseToEnd();
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isBackward(selection)) {
                            domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
                        } else {
                            domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
                        }
                        scrollSelectionIntoView(editor, newDomRange);
                    } else {
                        domSelection.removeAllRanges();
                    }
                    return newDomRange;
                }
            }["Editable.useIsomorphicLayoutEffect.setDomSelection"];
            // In firefox if there is more then 1 range and we call setDomSelection we remove the ability to select more cells in a table
            if (domSelection.rangeCount <= 1) {
                setDomSelection();
            }
            var ensureSelection = ((_androidInputManagerR2 = androidInputManagerRef.current) === null || _androidInputManagerR2 === void 0 ? void 0 : _androidInputManagerR2.isFlushing()) === 'action';
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] || !ensureSelection) {
                setTimeout({
                    "Editable.useIsomorphicLayoutEffect": ()=>{
                        state.isUpdatingSelection = false;
                    }
                }["Editable.useIsomorphicLayoutEffect"]);
                return;
            }
            var timeoutId = null;
            var animationFrameId = requestAnimationFrame({
                "Editable.useIsomorphicLayoutEffect.animationFrameId": ()=>{
                    if (ensureSelection) {
                        var ensureDomSelection = {
                            "Editable.useIsomorphicLayoutEffect.animationFrameId.ensureDomSelection": (forceChange)=>{
                                try {
                                    var el = ReactEditor.toDOMNode(editor, editor);
                                    el.focus();
                                    setDomSelection(forceChange);
                                } catch (e) {
                                // Ignore, dom and state might be out of sync
                                }
                            }
                        }["Editable.useIsomorphicLayoutEffect.animationFrameId.ensureDomSelection"];
                        // Compat: Android IMEs try to force their selection by manually re-applying it even after we set it.
                        // This essentially would make setting the slate selection during an update meaningless, so we force it
                        // again here. We can't only do it in the setTimeout after the animation frame since that would cause a
                        // visible flicker.
                        ensureDomSelection();
                        timeoutId = setTimeout({
                            "Editable.useIsomorphicLayoutEffect.animationFrameId": ()=>{
                                // COMPAT: While setting the selection in an animation frame visually correctly sets the selection,
                                // it doesn't update GBoards spellchecker state. We have to manually trigger a selection change after
                                // the animation frame to ensure it displays the correct state.
                                ensureDomSelection(true);
                                state.isUpdatingSelection = false;
                            }
                        }["Editable.useIsomorphicLayoutEffect.animationFrameId"]);
                    }
                }
            }["Editable.useIsomorphicLayoutEffect.animationFrameId"]);
            return ({
                "Editable.useIsomorphicLayoutEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                }
            })["Editable.useIsomorphicLayoutEffect"];
        }
    }["Editable.useIsomorphicLayoutEffect"]);
    // Listen on the native `beforeinput` event to get real "Level 2" events. This
    // is required because React's `beforeinput` is fake and never really attaches
    // to the real event sadly. (2019/11/01)
    // https://github.com/facebook/react/issues/11211
    var onDOMBeforeInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editable.useCallback[onDOMBeforeInput]": (event)=>{
            var el = ReactEditor.toDOMNode(editor, editor);
            var root = el.getRootNode();
            if (processing !== null && processing !== void 0 && processing.current && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"] && root instanceof ShadowRoot) {
                var ranges = event.getTargetRanges();
                var range = ranges[0];
                var newRange = new window.Range();
                newRange.setStart(range.startContainer, range.startOffset);
                newRange.setEnd(range.endContainer, range.endOffset);
                // Translate the DOM Range into a Slate Range
                var slateRange = ReactEditor.toSlateRange(editor, newRange, {
                    exactMatch: false,
                    suppressThrow: false
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, slateRange);
                event.preventDefault();
                event.stopImmediatePropagation();
                return;
            }
            onUserInput();
            if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
                var _EDITOR_TO_USER_SELEC;
                // COMPAT: BeforeInput events aren't cancelable on android, so we have to handle them differently using the android input manager.
                if (androidInputManagerRef.current) {
                    return androidInputManagerRef.current.handleDOMBeforeInput(event);
                }
                // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
                // triggering a `beforeinput` expecting the change to be applied to the immediately before
                // set selection.
                scheduleOnDOMSelectionChange.flush();
                onDOMSelectionChange.flush();
                var { selection } = editor;
                var { inputType: type } = event;
                var data = event.dataTransfer || event.data || undefined;
                var isCompositionChange = type === 'insertCompositionText' || type === 'deleteCompositionText';
                // COMPAT: use composition change events as a hint to where we should insert
                // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038
                if (isCompositionChange && ReactEditor.isComposing(editor)) {
                    return;
                }
                var native = false;
                if (type === 'insertText' && selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(selection) && // Only use native character insertion for single characters a-z or space for now.
                // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
                // causes duplicate inserts.
                event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
                // When there is an inline element, e.g. a link, and you select
                // right after it (the start of the next node).
                selection.anchor.offset !== 0) {
                    native = true;
                    // Skip native if there are marks, as
                    // `insertText` will insert a node, not just text.
                    if (editor.marks) {
                        native = false;
                    }
                    // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint)
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_NODE_MAP_DIRTY"].get(editor)) {
                        var _node$parentElement, _window$getComputedSt;
                        // Chrome also has issues correctly editing the end of anchor elements: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
                        // Therefore we don't allow native events to insert text at the end of anchor nodes.
                        var { anchor } = selection;
                        var [node, offset] = ReactEditor.toDOMPoint(editor, anchor);
                        var anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest('a');
                        var _window = ReactEditor.getWindow(editor);
                        if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
                            var _lastText$textContent;
                            // Find the last text node inside the anchor.
                            var lastText = _window === null || _window === void 0 ? void 0 : _window.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
                            if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
                                native = false;
                            }
                        }
                        // Chrome has issues with the presence of tab characters inside elements with whiteSpace = 'pre'
                        // causing abnormal insert behavior: https://bugs.chromium.org/p/chromium/issues/detail?id=1219139
                        if (native && node.parentElement && (_window === null || _window === void 0 || (_window$getComputedSt = _window.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === 'pre') {
                            var block = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].above(editor, {
                                at: anchor.path,
                                match: {
                                    "Editable.useCallback[onDOMBeforeInput].block": (n)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(n) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isBlock(editor, n)
                                }["Editable.useCallback[onDOMBeforeInput].block"]
                            });
                            if (block && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].string(block[0]).includes('\t')) {
                                native = false;
                            }
                        }
                    }
                }
                // COMPAT: For the deleting forward/backward input types we don't want
                // to change the selection because it is the range that will be deleted,
                // and those commands determine that for themselves.
                // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint via ReactEditor.toSlateRange)
                if ((!type.startsWith('delete') || type.startsWith('deleteBy')) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_NODE_MAP_DIRTY"].get(editor)) {
                    var [targetRange] = event.getTargetRanges();
                    if (targetRange) {
                        var _range = ReactEditor.toSlateRange(editor, targetRange, {
                            exactMatch: false,
                            suppressThrow: false
                        });
                        if (!selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(selection, _range)) {
                            native = false;
                            var selectionRef = !isCompositionChange && editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].rangeRef(editor, editor.selection);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, _range);
                            if (selectionRef) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_SELECTION"].set(editor, selectionRef);
                            }
                        }
                    }
                }
                // Composition change types occur while a user is composing text and can't be
                // cancelled. Let them through and wait for the composition to end.
                if (isCompositionChange) {
                    return;
                }
                if (!native) {
                    event.preventDefault();
                }
                // COMPAT: If the selection is expanded, even if the command seems like
                // a delete forward/backward command it should delete the selection.
                if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection) && type.startsWith('delete')) {
                    var direction = type.endsWith('Backward') ? 'backward' : 'forward';
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                        direction
                    });
                    return;
                }
                switch(type){
                    case 'deleteByComposition':
                    case 'deleteByCut':
                    case 'deleteByDrag':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor);
                            break;
                        }
                    case 'deleteContent':
                    case 'deleteContentForward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor);
                            break;
                        }
                    case 'deleteContentBackward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor);
                            break;
                        }
                    case 'deleteEntireSoftLine':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                unit: 'line'
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                                unit: 'line'
                            });
                            break;
                        }
                    case 'deleteHardLineBackward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                unit: 'block'
                            });
                            break;
                        }
                    case 'deleteSoftLineBackward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                unit: 'line'
                            });
                            break;
                        }
                    case 'deleteHardLineForward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                                unit: 'block'
                            });
                            break;
                        }
                    case 'deleteSoftLineForward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                                unit: 'line'
                            });
                            break;
                        }
                    case 'deleteWordBackward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                unit: 'word'
                            });
                            break;
                        }
                    case 'deleteWordForward':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                                unit: 'word'
                            });
                            break;
                        }
                    case 'insertLineBreak':
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertSoftBreak(editor);
                        break;
                    case 'insertParagraph':
                        {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertBreak(editor);
                            break;
                        }
                    case 'insertFromComposition':
                    case 'insertFromDrop':
                    case 'insertFromPaste':
                    case 'insertFromYank':
                    case 'insertReplacementText':
                    case 'insertText':
                        {
                            if (type === 'insertFromComposition') {
                                // COMPAT: in Safari, `compositionend` is dispatched after the
                                // `beforeinput` for "insertFromComposition". But if we wait for it
                                // then we will abort because we're still composing and the selection
                                // won't be updated properly.
                                // https://www.w3.org/TR/input-events-2/
                                if (ReactEditor.isComposing(editor)) {
                                    setIsComposing(false);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_COMPOSING"].set(editor, false);
                                }
                            }
                            // use a weak comparison instead of 'instanceof' to allow
                            // programmatic access of paste events coming from external windows
                            // like cypress where cy.window does not work realibly
                            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
                                ReactEditor.insertData(editor, data);
                            } else if (typeof data === 'string') {
                                // Only insertText operations use the native functionality, for now.
                                // Potentially expand to single character deletes, as well.
                                if (native) {
                                    deferredOperations.current.push({
                                        "Editable.useCallback[onDOMBeforeInput]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, data)
                                    }["Editable.useCallback[onDOMBeforeInput]"]);
                                } else {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, data);
                                }
                            }
                            break;
                        }
                }
                // Restore the actual user section if nothing manually set it.
                var toRestore = (_EDITOR_TO_USER_SELEC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_SELECTION"].get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_SELECTION"].delete(editor);
                if (toRestore && (!editor.selection || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(editor.selection, toRestore))) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, toRestore);
                }
            }
        }
    }["Editable.useCallback[onDOMBeforeInput]"], [
        editor,
        onDOMSelectionChange,
        onUserInput,
        propsOnDOMBeforeInput,
        readOnly,
        scheduleOnDOMSelectionChange
    ]);
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editable.useCallback[callbackRef]": (node)=>{
            if (node == null) {
                onDOMSelectionChange.cancel();
                scheduleOnDOMSelectionChange.cancel();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_ELEMENT"].delete(editor);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NODE_TO_ELEMENT"].delete(editor);
                if (ref.current && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"]) {
                    // @ts-ignore The `beforeinput` event isn't recognized.
                    ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
                }
            } else {
                // Attach a native DOM event handler for `beforeinput` events, because React's
                // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
                // real `beforeinput` events sadly... (2019/11/04)
                // https://github.com/facebook/react/issues/11211
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"]) {
                    // @ts-ignore The `beforeinput` event isn't recognized.
                    node.addEventListener('beforeinput', onDOMBeforeInput);
                }
            }
            ref.current = node;
            if (typeof forwardedRef === 'function') {
                forwardedRef(node);
            } else if (forwardedRef) {
                forwardedRef.current = node;
            }
        }
    }["Editable.useCallback[callbackRef]"], [
        onDOMSelectionChange,
        scheduleOnDOMSelectionChange,
        editor,
        onDOMBeforeInput,
        forwardedRef
    ]);
    useIsomorphicLayoutEffect({
        "Editable.useIsomorphicLayoutEffect": ()=>{
            var window1 = ReactEditor.getWindow(editor);
            // COMPAT: In Chrome, `selectionchange` events can fire when <input> and
            // <textarea> elements are appended to the DOM, causing
            // `editor.selection` to be overwritten in some circumstances.
            // (2025/01/16) https://issues.chromium.org/issues/389368412
            var onSelectionChange = {
                "Editable.useIsomorphicLayoutEffect.onSelectionChange": (_ref)=>{
                    var { target } = _ref;
                    var targetElement = target instanceof HTMLElement ? target : null;
                    var targetTagName = targetElement === null || targetElement === void 0 ? void 0 : targetElement.tagName;
                    if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA') {
                        return;
                    }
                    scheduleOnDOMSelectionChange();
                }
            }["Editable.useIsomorphicLayoutEffect.onSelectionChange"];
            // Attach a native DOM event handler for `selectionchange`, because React's
            // built-in `onSelect` handler doesn't fire for all selection changes. It's
            // a leaky polyfill that only fires on keypresses or clicks. Instead, we
            // want to fire for any change to the selection inside the editor.
            // (2019/11/04) https://github.com/facebook/react/issues/5785
            window1.document.addEventListener('selectionchange', onSelectionChange);
            // Listen for dragend and drop globally. In Firefox, if a drop handler
            // initiates an operation that causes the originally dragged element to
            // unmount, that element will not emit a dragend event. (2024/06/21)
            var stoppedDragging = {
                "Editable.useIsomorphicLayoutEffect.stoppedDragging": ()=>{
                    state.isDraggingInternally = false;
                }
            }["Editable.useIsomorphicLayoutEffect.stoppedDragging"];
            window1.document.addEventListener('dragend', stoppedDragging);
            window1.document.addEventListener('drop', stoppedDragging);
            return ({
                "Editable.useIsomorphicLayoutEffect": ()=>{
                    window1.document.removeEventListener('selectionchange', onSelectionChange);
                    window1.document.removeEventListener('dragend', stoppedDragging);
                    window1.document.removeEventListener('drop', stoppedDragging);
                }
            })["Editable.useIsomorphicLayoutEffect"];
        }
    }["Editable.useIsomorphicLayoutEffect"], [
        scheduleOnDOMSelectionChange,
        state
    ]);
    var decorations = decorate([
        editor,
        []
    ]);
    var showPlaceholder = placeholder && editor.children.length === 1 && Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].texts(editor)).length === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].string(editor) === '' && !isComposing;
    var placeHolderResizeHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editable.useCallback[placeHolderResizeHandler]": (placeholderEl)=>{
            if (placeholderEl && showPlaceholder) {
                var _placeholderEl$getBou;
                setPlaceholderHeight((_placeholderEl$getBou = placeholderEl.getBoundingClientRect()) === null || _placeholderEl$getBou === void 0 ? void 0 : _placeholderEl$getBou.height);
            } else {
                setPlaceholderHeight(undefined);
            }
        }
    }["Editable.useCallback[placeHolderResizeHandler]"], [
        showPlaceholder
    ]);
    if (showPlaceholder) {
        var start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].start(editor, []);
        decorations.push({
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_SYMBOL"]]: true,
            placeholder,
            onPlaceholderResize: placeHolderResizeHandler,
            anchor: start,
            focus: start
        });
    }
    var { marks } = editor;
    state.hasMarkPlaceholder = false;
    if (editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection) && marks) {
        var { anchor } = editor.selection;
        var leaf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].leaf(editor, anchor.path);
        var rest = _objectWithoutProperties(leaf, _excluded2);
        // While marks isn't a 'complete' text, we can still use loose Text.equals
        // here which only compares marks anyway.
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].equals(leaf, marks, {
            loose: true
        })) {
            state.hasMarkPlaceholder = true;
            var unset = Object.fromEntries(Object.keys(rest).map((mark)=>[
                    mark,
                    null
                ]));
            decorations.push(_objectSpread(_objectSpread(_objectSpread({
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARK_PLACEHOLDER_SYMBOL"]]: true
            }, unset), marks), {}, {
                anchor,
                focus: anchor
            }));
        }
    }
    // Update EDITOR_TO_MARK_PLACEHOLDER_MARKS in setTimeout useEffect to ensure we don't set it
    // before we receive the composition end event.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editable.useEffect": ()=>{
            setTimeout({
                "Editable.useEffect": ()=>{
                    var { selection } = editor;
                    if (selection) {
                        var { anchor: _anchor } = selection;
                        var _text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].leaf(editor, _anchor.path);
                        // While marks isn't a 'complete' text, we can still use loose Text.equals
                        // here which only compares marks anyway.
                        if (marks && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].equals(_text, marks, {
                            loose: true
                        })) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].set(editor, marks);
                            return;
                        }
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].delete(editor);
                }
            }["Editable.useEffect"]);
        }
    }["Editable.useEffect"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ReadOnlyContext.Provider, {
        value: readOnly
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ComposingContext.Provider, {
        value: isComposing
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DecorateContext.Provider, {
        value: decorate
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RestoreDOM, {
        node: ref,
        receivedUserInput: receivedUserInput
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, _objectSpread(_objectSpread({
        role: readOnly ? undefined : 'textbox',
        "aria-multiline": readOnly ? undefined : true
    }, attributes), {}, {
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
        // have to use hacks to make these replacement-based features work.
        // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
        // mismatch warning app moves to browser. Pass-through consumer props when
        // not CAN_USE_DOM (SSR) and default to falsy value
        spellCheck: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"] || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_USE_DOM"] ? attributes.spellCheck : false,
        autoCorrect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"] || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_USE_DOM"] ? attributes.autoCorrect : 'false',
        autoCapitalize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"] || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_USE_DOM"] ? attributes.autoCapitalize : 'false',
        "data-slate-editor": true,
        "data-slate-node": "value",
        // explicitly set this
        contentEditable: !readOnly,
        // in some cases, a decoration needs access to the range / selection to decorate a text node,
        // then you will select the whole text node when you select part the of text
        // this magic zIndex="-1" will fix it
        zindex: -1,
        suppressContentEditableWarning: true,
        ref: callbackRef,
        style: _objectSpread(_objectSpread({}, disableDefaultStyles ? {} : _objectSpread({
            // Allow positioning relative to the editable element.
            position: 'relative',
            // Preserve adjacent whitespace and new lines.
            whiteSpace: 'pre-wrap',
            // Allow words to break if they are too long.
            wordWrap: 'break-word'
        }, placeholderHeight ? {
            minHeight: placeholderHeight
        } : {})), userStyle),
        onBeforeInput: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                // COMPAT: Certain browsers don't support the `beforeinput` event, so we
                // fall back to React's leaky polyfill instead just for it. It
                // only works for the `insertText` input type.
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"] && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
                    event.preventDefault();
                    if (!ReactEditor.isComposing(editor)) {
                        var _text2 = event.data;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, _text2);
                    }
                }
            }
        }["Editable.useCallback"], [
            attributes.onBeforeInput,
            editor,
            readOnly
        ]),
        onInput: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (isEventHandled(event, attributes.onInput)) {
                    return;
                }
                if (androidInputManagerRef.current) {
                    androidInputManagerRef.current.handleInput();
                    return;
                }
                // Flush native operations, as native events will have propogated
                // and we can correctly compare DOM text values in components
                // to stop rendering, so that browser functions like autocorrect
                // and spellcheck work as expected.
                for (var op of deferredOperations.current){
                    op();
                }
                deferredOperations.current = [];
                // COMPAT: Since `beforeinput` doesn't fully `preventDefault`,
                // there's a chance that content might be placed in the browser's undo stack.
                // This means undo can be triggered even when the div is not focused,
                // and it only triggers the input event for the node. (2024/10/09)
                if (!ReactEditor.isFocused(editor)) {
                    var native = event.nativeEvent;
                    var maybeHistoryEditor = editor;
                    if (native.inputType === 'historyUndo' && typeof maybeHistoryEditor.undo === 'function') {
                        maybeHistoryEditor.undo();
                        return;
                    }
                    if (native.inputType === 'historyRedo' && typeof maybeHistoryEditor.redo === 'function') {
                        maybeHistoryEditor.redo();
                        return;
                    }
                }
            }
        }["Editable.useCallback"], [
            attributes.onInput,
            editor
        ]),
        onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (readOnly || state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
                    return;
                }
                // COMPAT: If the current `activeElement` is still the previous
                // one, this is due to the window being blurred when the tab
                // itself becomes unfocused, so we want to abort early to allow to
                // editor to stay focused when the tab becomes focused again.
                var root = ReactEditor.findDocumentOrShadowRoot(editor);
                if (state.latestElement === root.activeElement) {
                    return;
                }
                var { relatedTarget } = event;
                var el = ReactEditor.toDOMNode(editor, editor);
                // COMPAT: The event should be ignored if the focus is returning
                // to the editor from an embedded editable element (eg. an <input>
                // element inside a void node).
                if (relatedTarget === el) {
                    return;
                }
                // COMPAT: The event should be ignored if the focus is moving from
                // the editor to inside a void node's spacer element.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMElement"])(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
                    return;
                }
                // COMPAT: The event should be ignored if the focus is moving to a
                // non- editable section of an element that isn't a void node (eg.
                // a list item of the check list example).
                if (relatedTarget != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMNode"])(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
                    var node = ReactEditor.toSlateNode(editor, relatedTarget);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node) && !editor.isVoid(node)) {
                        return;
                    }
                }
                // COMPAT: Safari doesn't always remove the selection even if the content-
                // editable element no longer has focus. Refer to:
                // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"]) {
                    var domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelection"])(root);
                    domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FOCUSED"].delete(editor);
            }
        }["Editable.useCallback"], [
            readOnly,
            state.isUpdatingSelection,
            state.latestElement,
            editor,
            attributes.onBlur
        ]),
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMNode"])(event.target)) {
                    var node = ReactEditor.toSlateNode(editor, event.target);
                    var path = ReactEditor.findPath(editor, node);
                    // At this time, the Slate document may be arbitrarily different,
                    // because onClick handlers can change the document before we get here.
                    // Therefore we must check that this path actually exists,
                    // and that it still refers to the same node.
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].hasPath(editor, path) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].get(editor, path) !== node) {
                        return;
                    }
                    if (event.detail === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRIPLE_CLICK"] && path.length >= 1) {
                        var blockPath = path;
                        if (!(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isBlock(editor, node))) {
                            var _block$;
                            var block = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].above(editor, {
                                match: {
                                    "Editable.useCallback.block": (n)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(n) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isBlock(editor, n)
                                }["Editable.useCallback.block"],
                                at: path
                            });
                            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
                        }
                        var range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].range(editor, blockPath);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, range);
                        return;
                    }
                    if (readOnly) {
                        return;
                    }
                    var _start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].start(editor, path);
                    var end = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].end(editor, path);
                    var startVoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].void(editor, {
                        at: _start
                    });
                    var endVoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].void(editor, {
                        at: end
                    });
                    if (startVoid && endVoid && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path"].equals(startVoid[1], endVoid[1])) {
                        var _range2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].range(editor, _start);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, _range2);
                    }
                }
            }
        }["Editable.useCallback"], [
            editor,
            attributes.onClick,
            readOnly
        ]),
        onCompositionEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (ReactEditor.hasSelectableTarget(editor, event.target)) {
                    var _androidInputManagerR3;
                    if (ReactEditor.isComposing(editor)) {
                        Promise.resolve().then({
                            "Editable.useCallback": ()=>{
                                setIsComposing(false);
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_COMPOSING"].set(editor, false);
                            }
                        }["Editable.useCallback"]);
                    }
                    (_androidInputManagerR3 = androidInputManagerRef.current) === null || _androidInputManagerR3 === void 0 || _androidInputManagerR3.handleCompositionEnd(event);
                    if (isEventHandled(event, attributes.onCompositionEnd) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"]) {
                        return;
                    }
                    // COMPAT: In Chrome, `beforeinput` events for compositions
                    // aren't correct and never fire the "insertFromComposition"
                    // type that we need. So instead, insert whenever a composition
                    // ends since it will already have been committed to the DOM.
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FIREFOX_LEGACY"] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_IOS"] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WECHATBROWSER"] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_UC_MOBILE"] && event.data) {
                        var placeholderMarks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].get(editor);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_PENDING_INSERTION_MARKS"].delete(editor);
                        // Ensure we insert text with the marks the user was actually seeing
                        if (placeholderMarks !== undefined) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].set(editor, editor.marks);
                            editor.marks = placeholderMarks;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertText(editor, event.data);
                        var userMarks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].get(editor);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_USER_MARKS"].delete(editor);
                        if (userMarks !== undefined) {
                            editor.marks = userMarks;
                        }
                    }
                }
            }
        }["Editable.useCallback"], [
            attributes.onCompositionEnd,
            editor
        ]),
        onCompositionUpdate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
                    if (!ReactEditor.isComposing(editor)) {
                        setIsComposing(true);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_COMPOSING"].set(editor, true);
                    }
                }
            }
        }["Editable.useCallback"], [
            attributes.onCompositionUpdate,
            editor
        ]),
        onCompositionStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (ReactEditor.hasSelectableTarget(editor, event.target)) {
                    var _androidInputManagerR4;
                    (_androidInputManagerR4 = androidInputManagerRef.current) === null || _androidInputManagerR4 === void 0 || _androidInputManagerR4.handleCompositionStart(event);
                    if (isEventHandled(event, attributes.onCompositionStart) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"]) {
                        return;
                    }
                    setIsComposing(true);
                    var { selection } = editor;
                    if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor);
                        return;
                    }
                }
            }
        }["Editable.useCallback"], [
            attributes.onCompositionStart,
            editor
        ]),
        onCopy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy) && !isDOMEventTargetInput(event)) {
                    event.preventDefault();
                    ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
                }
            }
        }["Editable.useCallback"], [
            attributes.onCopy,
            editor
        ]),
        onCut: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut) && !isDOMEventTargetInput(event)) {
                    event.preventDefault();
                    ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
                    var { selection } = editor;
                    if (selection) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor);
                        } else {
                            var node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].parent(editor, selection.anchor.path);
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, node)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].delete(editor);
                            }
                        }
                    }
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            editor,
            attributes.onCut
        ]),
        onDragOver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
                    // Only when the target is void, call `preventDefault` to signal
                    // that drops are allowed. Editable content is droppable by
                    // default, and calling `preventDefault` hides the cursor.
                    var node = ReactEditor.toSlateNode(editor, event.target);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, node)) {
                        event.preventDefault();
                    }
                }
            }
        }["Editable.useCallback"], [
            attributes.onDragOver,
            editor
        ]),
        onDragStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
                    var node = ReactEditor.toSlateNode(editor, event.target);
                    var path = ReactEditor.findPath(editor, node);
                    var voidMatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(node) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, node) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].void(editor, {
                        at: path,
                        voids: true
                    });
                    // If starting a drag on a void node, make sure it is selected
                    // so that it shows up in the selection's fragment.
                    if (voidMatch) {
                        var range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].range(editor, path);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, range);
                    }
                    state.isDraggingInternally = true;
                    ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            editor,
            attributes.onDragStart,
            state
        ]),
        onDrop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
                    event.preventDefault();
                    // Keep a reference to the dragged range before updating selection
                    var draggedRange = editor.selection;
                    // Find the range where the drop happened
                    var range = ReactEditor.findEventRange(editor, event);
                    var data = event.dataTransfer;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].select(editor, range);
                    if (state.isDraggingInternally) {
                        if (draggedRange && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(draggedRange, range) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].void(editor, {
                            at: range,
                            voids: true
                        })) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].delete(editor, {
                                at: draggedRange
                            });
                        }
                    }
                    ReactEditor.insertData(editor, data);
                    // When dragging from another source into the editor, it's possible
                    // that the current editor does not have focus.
                    if (!ReactEditor.isFocused(editor)) {
                        ReactEditor.focus(editor);
                    }
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            editor,
            attributes.onDrop,
            state
        ]),
        onDragEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
                    attributes.onDragEnd(event);
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            state,
            attributes,
            editor
        ]),
        onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && !state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
                    var el = ReactEditor.toDOMNode(editor, editor);
                    var root = ReactEditor.findDocumentOrShadowRoot(editor);
                    state.latestElement = root.activeElement;
                    // COMPAT: If the editor has nested editable elements, the focus
                    // can go to them. In Firefox, this must be prevented because it
                    // results in issues with keyboard navigation. (2017/03/30)
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FIREFOX"] && event.target !== el) {
                        el.focus();
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_FOCUSED"].set(editor, true);
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            state,
            editor,
            attributes.onFocus
        ]),
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target)) {
                    var _androidInputManagerR5;
                    (_androidInputManagerR5 = androidInputManagerRef.current) === null || _androidInputManagerR5 === void 0 || _androidInputManagerR5.handleKeyDown(event);
                    var { nativeEvent } = event;
                    // COMPAT: The composition end event isn't fired reliably in all browsers,
                    // so we sometimes might end up stuck in a composition state even though we
                    // aren't composing any more.
                    if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_COMPOSING"].set(editor, false);
                        setIsComposing(false);
                    }
                    if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
                        return;
                    }
                    var { selection } = editor;
                    var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
                    var isRTL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$direction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].string(element)) === 'rtl';
                    // COMPAT: Since we prevent the default behavior on
                    // `beforeinput` events, the browser doesn't think there's ever
                    // any history stack to undo or redo, so we have to manage these
                    // hotkeys ourselves. (2019/11/06)
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isRedo(nativeEvent)) {
                        event.preventDefault();
                        var maybeHistoryEditor = editor;
                        if (typeof maybeHistoryEditor.redo === 'function') {
                            maybeHistoryEditor.redo();
                        }
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isUndo(nativeEvent)) {
                        event.preventDefault();
                        var _maybeHistoryEditor = editor;
                        if (typeof _maybeHistoryEditor.undo === 'function') {
                            _maybeHistoryEditor.undo();
                        }
                        return;
                    }
                    // COMPAT: Certain browsers don't handle the selection updates
                    // properly. In Chrome, the selection isn't properly extended.
                    // And in Firefox, the selection isn't properly collapsed.
                    // (2017/10/17)
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isMoveLineBackward(nativeEvent)) {
                        event.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                            unit: 'line',
                            reverse: true
                        });
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isMoveLineForward(nativeEvent)) {
                        event.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                            unit: 'line'
                        });
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isExtendLineBackward(nativeEvent)) {
                        event.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                            unit: 'line',
                            edge: 'focus',
                            reverse: true
                        });
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isExtendLineForward(nativeEvent)) {
                        event.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                            unit: 'line',
                            edge: 'focus'
                        });
                        return;
                    }
                    // COMPAT: If a void node is selected, or a zero-width text node
                    // adjacent to an inline is selected, we need to handle these
                    // hotkeys manually because browsers won't be able to skip over
                    // the void node with the zero-width space not being an empty
                    // string.
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isMoveBackward(nativeEvent)) {
                        event.preventDefault();
                        if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(selection)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                                reverse: !isRTL
                            });
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].collapse(editor, {
                                edge: isRTL ? 'end' : 'start'
                            });
                        }
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isMoveForward(nativeEvent)) {
                        event.preventDefault();
                        if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(selection)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                                reverse: isRTL
                            });
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].collapse(editor, {
                                edge: isRTL ? 'start' : 'end'
                            });
                        }
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isMoveWordBackward(nativeEvent)) {
                        event.preventDefault();
                        if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].collapse(editor, {
                                edge: 'focus'
                            });
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                            unit: 'word',
                            reverse: !isRTL
                        });
                        return;
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isMoveWordForward(nativeEvent)) {
                        event.preventDefault();
                        if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].collapse(editor, {
                                edge: 'focus'
                            });
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transforms"].move(editor, {
                            unit: 'word',
                            reverse: isRTL
                        });
                        return;
                    }
                    // COMPAT: Certain browsers don't support the `beforeinput` event, so we
                    // fall back to guessing at the input intention for hotkeys.
                    // COMPAT: In iOS, some of these hotkeys are handled in the
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"]) {
                        // We don't have a core behavior for these, but they change the
                        // DOM if we don't prevent them, so we have to.
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isBold(nativeEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isItalic(nativeEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isTransposeCharacter(nativeEvent)) {
                            event.preventDefault();
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isSoftBreak(nativeEvent)) {
                            event.preventDefault();
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertSoftBreak(editor);
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isSplitBlock(nativeEvent)) {
                            event.preventDefault();
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].insertBreak(editor);
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteBackward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                                    direction: 'backward'
                                });
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor);
                            }
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteForward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                                    direction: 'forward'
                                });
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor);
                            }
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteLineBackward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                                    direction: 'backward'
                                });
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                    unit: 'line'
                                });
                            }
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteLineForward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                                    direction: 'forward'
                                });
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                                    unit: 'line'
                                });
                            }
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteWordBackward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                                    direction: 'backward'
                                });
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                    unit: 'word'
                                });
                            }
                            return;
                        }
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteWordForward(nativeEvent)) {
                            event.preventDefault();
                            if (selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isExpanded(selection)) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteFragment(editor, {
                                    direction: 'forward'
                                });
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteForward(editor, {
                                    unit: 'word'
                                });
                            }
                            return;
                        }
                    } else {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_CHROME"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"]) {
                            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
                            // an event when deleting backwards in a selected void inline node
                            if (selection && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteBackward(nativeEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"].isDeleteForward(nativeEvent)) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(selection)) {
                                var currentNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].parent(editor, selection.anchor.path);
                                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"].isElement(currentNode) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isVoid(editor, currentNode) && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isInline(editor, currentNode) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isBlock(editor, currentNode))) {
                                    event.preventDefault();
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].deleteBackward(editor, {
                                        unit: 'block'
                                    });
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            editor,
            attributes.onKeyDown
        ]),
        onPaste: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "Editable.useCallback": (event)=>{
                if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
                    // COMPAT: Certain browsers don't support the `beforeinput` event, so we
                    // fall back to React's `onPaste` here instead.
                    // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
                    // when "paste without formatting" is used, so fallback. (2020/02/20)
                    // COMPAT: Safari InputEvents generated by pasting won't include
                    // application/x-slate-fragment items, so use the
                    // ClipboardEvent here. (2023/03/15)
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HAS_BEFORE_INPUT_SUPPORT"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainTextOnlyPaste"])(event.nativeEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_WEBKIT"]) {
                        event.preventDefault();
                        ReactEditor.insertData(editor, event.clipboardData);
                    }
                }
            }
        }["Editable.useCallback"], [
            readOnly,
            editor,
            attributes.onPaste
        ])
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Children, {
        decorations: decorations,
        node: editor,
        renderElement: renderElement,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        selection: editor.selection
    }))))));
});
/**
 * The default placeholder element
 */ var DefaultPlaceholder = (_ref2)=>{
    var { attributes, children } = _ref2;
    return(/*#__PURE__*/ // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", _objectSpread({}, attributes), children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_ANDROID"] && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("br", null)));
};
/**
 * A default memoized decorate function.
 */ var defaultDecorate = ()=>[];
/**
 * A default implement to scroll dom range into view.
 */ var defaultScrollSelectionIntoView = (editor, domRange)=>{
    // This was affecting the selection of multiple blocks and dragging behavior,
    // so enabled only if the selection has been collapsed.
    if (domRange.getBoundingClientRect && (!editor.selection || editor.selection && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isCollapsed(editor.selection))) {
        var leafEl = domRange.startContainer.parentElement;
        leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(leafEl, {
            scrollMode: 'if-needed'
        });
        // @ts-expect-error an unorthodox delete D:
        delete leafEl.getBoundingClientRect;
    }
};
/**
 * Check if an event is overrided by a handler.
 */ var isEventHandled = (event, handler)=>{
    if (!handler) {
        return false;
    }
    // The custom event handler may return a boolean to specify whether the event
    // shall be treated as being handled or not.
    var shouldTreatEventAsHandled = handler(event);
    if (shouldTreatEventAsHandled != null) {
        return shouldTreatEventAsHandled;
    }
    return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if the event's target is an input element
 */ var isDOMEventTargetInput = (event)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMNode"])(event.target) && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement);
};
/**
 * Check if a DOM event is overrided by a handler.
 */ var isDOMEventHandled = (event, handler)=>{
    if (!handler) {
        return false;
    }
    // The custom event handler may return a boolean to specify whether the event
    // shall be treated as being handled or not.
    var shouldTreatEventAsHandled = handler(event);
    if (shouldTreatEventAsHandled != null) {
        return shouldTreatEventAsHandled;
    }
    return event.defaultPrevented;
};
/**
 * A React context for sharing the `focused` state of the editor.
 */ var FocusedContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(false);
/**
 * Get the current `focused` state of the editor.
 */ var useFocused = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FocusedContext);
};
function isError(error) {
    return error instanceof Error;
}
/**
 * A React context for sharing the editor selector context in a way to control rerenders
 */ var SlateSelectorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
var refEquality = (a, b)=>a === b;
/**
 * use redux style selectors to prevent rerendering on every keystroke.
 * Bear in mind rerendering can only prevented if the returned value is a value type or for reference types (e.g. objects and arrays) add a custom equality function.
 *
 * Example:
 * ```
 *  const isSelectionActive = useSlateSelector(editor => Boolean(editor.selection));
 * ```
 */ function useSlateSelector(selector) {
    var equalityFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : refEquality;
    var [, forceRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useSlateSelector.useReducer": (s)=>s + 1
    }["useSlateSelector.useReducer"], 0);
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SlateSelectorContext);
    if (!context) {
        throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
    }
    var { getSlate, addEventListener } = context;
    var latestSubscriptionCallbackError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var latestSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useSlateSelector.useRef[latestSelector]": ()=>null
    }["useSlateSelector.useRef[latestSelector]"]);
    var latestSelectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var selectedState;
    try {
        if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
            selectedState = selector(getSlate());
        } else {
            selectedState = latestSelectedState.current;
        }
    } catch (err) {
        if (latestSubscriptionCallbackError.current && isError(err)) {
            err.message += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\n");
        }
        throw err;
    }
    useIsomorphicLayoutEffect({
        "useSlateSelector.useIsomorphicLayoutEffect": ()=>{
            latestSelector.current = selector;
            latestSelectedState.current = selectedState;
            latestSubscriptionCallbackError.current = undefined;
        }
    }["useSlateSelector.useIsomorphicLayoutEffect"]);
    useIsomorphicLayoutEffect({
        "useSlateSelector.useIsomorphicLayoutEffect": ()=>{
            function checkForUpdates() {
                try {
                    var newSelectedState = latestSelector.current(getSlate());
                    if (equalityFn(newSelectedState, latestSelectedState.current)) {
                        return;
                    }
                    latestSelectedState.current = newSelectedState;
                } catch (err) {
                    // we ignore all errors here, since when the component
                    // is re-rendered, the selectors are called again, and
                    // will throw again, if neither props nor store state
                    // changed
                    if (err instanceof Error) {
                        latestSubscriptionCallbackError.current = err;
                    } else {
                        latestSubscriptionCallbackError.current = new Error(String(err));
                    }
                }
                forceRender();
            }
            var unsubscribe = addEventListener(checkForUpdates);
            checkForUpdates();
            return ({
                "useSlateSelector.useIsomorphicLayoutEffect": ()=>unsubscribe()
            })["useSlateSelector.useIsomorphicLayoutEffect"];
        }
    }["useSlateSelector.useIsomorphicLayoutEffect"], // don't rerender on equalityFn change since we want to be able to define it inline
    [
        addEventListener,
        getSlate
    ]);
    return selectedState;
}
/**
 * Create selector context with editor updating on every editor change
 */ function useSelectorContext(editor) {
    var eventListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]).current;
    var slateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        editor
    }).current;
    var onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSelectorContext.useCallback[onChange]": (editor)=>{
            slateRef.editor = editor;
            eventListeners.forEach({
                "useSelectorContext.useCallback[onChange]": (listener)=>listener(editor)
            }["useSelectorContext.useCallback[onChange]"]);
        }
    }["useSelectorContext.useCallback[onChange]"], [
        eventListeners,
        slateRef
    ]);
    var selectorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSelectorContext.useMemo[selectorContext]": ()=>{
            return {
                getSlate: ({
                    "useSelectorContext.useMemo[selectorContext]": ()=>slateRef.editor
                })["useSelectorContext.useMemo[selectorContext]"],
                addEventListener: ({
                    "useSelectorContext.useMemo[selectorContext]": (callback)=>{
                        eventListeners.push(callback);
                        return ({
                            "useSelectorContext.useMemo[selectorContext]": ()=>{
                                eventListeners.splice(eventListeners.indexOf(callback), 1);
                            }
                        })["useSelectorContext.useMemo[selectorContext]"];
                    }
                })["useSelectorContext.useMemo[selectorContext]"]
            };
        }
    }["useSelectorContext.useMemo[selectorContext]"], [
        eventListeners,
        slateRef
    ]);
    return {
        selectorContext,
        onChange
    };
}
var REACT_MAJOR_VERSION = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.split('.')[0], 10);
var _excluded = [
    "editor",
    "children",
    "onChange",
    "onSelectionChange",
    "onValueChange",
    "initialValue"
];
/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */ var Slate = (props)=>{
    var { editor, children, onChange, onSelectionChange, onValueChange, initialValue } = props, rest = _objectWithoutProperties(props, _excluded);
    var [context, setContext] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "Slate.useState": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].isNodeList(initialValue)) {
                throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrubber"].stringify(initialValue)));
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"].isEditor(editor)) {
                throw new Error("[Slate] editor is invalid! You passed: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrubber"].stringify(editor)));
            }
            editor.children = initialValue;
            Object.assign(editor, rest);
            return {
                v: 0,
                editor
            };
        }
    }["Slate.useState"]);
    var { selectorContext, onChange: handleSelectorChange } = useSelectorContext(editor);
    var onContextChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Slate.useCallback[onContextChange]": (options)=>{
            var _options$operation;
            if (onChange) {
                onChange(editor.children);
            }
            switch(options === null || options === void 0 || (_options$operation = options.operation) === null || _options$operation === void 0 ? void 0 : _options$operation.type){
                case 'set_selection':
                    onSelectionChange === null || onSelectionChange === void 0 || onSelectionChange(editor.selection);
                    break;
                default:
                    onValueChange === null || onValueChange === void 0 || onValueChange(editor.children);
            }
            setContext({
                "Slate.useCallback[onContextChange]": (prevContext)=>({
                        v: prevContext.v + 1,
                        editor
                    })
            }["Slate.useCallback[onContextChange]"]);
            handleSelectorChange(editor);
        }
    }["Slate.useCallback[onContextChange]"], [
        editor,
        handleSelectorChange,
        onChange,
        onSelectionChange,
        onValueChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slate.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_ON_CHANGE"].set(editor, onContextChange);
            return ({
                "Slate.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_TO_ON_CHANGE"].set(editor, {
                        "Slate.useEffect": ()=>{}
                    }["Slate.useEffect"]);
                }
            })["Slate.useEffect"];
        }
    }["Slate.useEffect"], [
        editor,
        onContextChange
    ]);
    var [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ReactEditor.isFocused(editor));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slate.useEffect": ()=>{
            setIsFocused(ReactEditor.isFocused(editor));
        }
    }["Slate.useEffect"], [
        editor
    ]);
    useIsomorphicLayoutEffect({
        "Slate.useIsomorphicLayoutEffect": ()=>{
            var fn = {
                "Slate.useIsomorphicLayoutEffect.fn": ()=>setIsFocused(ReactEditor.isFocused(editor))
            }["Slate.useIsomorphicLayoutEffect.fn"];
            if (REACT_MAJOR_VERSION >= 17) {
                // In React >= 17 onFocus and onBlur listen to the focusin and focusout events during the bubbling phase.
                // Therefore in order for <Editable />'s handlers to run first, which is necessary for ReactEditor.isFocused(editor)
                // to return the correct value, we have to listen to the focusin and focusout events without useCapture here.
                document.addEventListener('focusin', fn);
                document.addEventListener('focusout', fn);
                return ({
                    "Slate.useIsomorphicLayoutEffect": ()=>{
                        document.removeEventListener('focusin', fn);
                        document.removeEventListener('focusout', fn);
                    }
                })["Slate.useIsomorphicLayoutEffect"];
            } else {
                document.addEventListener('focus', fn, true);
                document.addEventListener('blur', fn, true);
                return ({
                    "Slate.useIsomorphicLayoutEffect": ()=>{
                        document.removeEventListener('focus', fn, true);
                        document.removeEventListener('blur', fn, true);
                    }
                })["Slate.useIsomorphicLayoutEffect"];
            }
        }
    }["Slate.useIsomorphicLayoutEffect"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SlateSelectorContext.Provider, {
        value: selectorContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SlateContext.Provider, {
        value: context
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(EditorContext.Provider, {
        value: context.editor
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FocusedContext.Provider, {
        value: isFocused
    }, children))));
};
/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */ var useEditor = ()=>{
    var editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EditorContext);
    if (!editor) {
        throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
    }
    return editor;
};
/**
 * Get the current slate selection.
 * Only triggers a rerender when the selection actually changes
 */ var useSlateSelection = ()=>{
    return useSlateSelector({
        "useSlateSelection.useSlateSelector": (editor)=>editor.selection
    }["useSlateSelection.useSlateSelector"], isSelectionEqual);
};
var isSelectionEqual = (a, b)=>{
    if (!a && !b) return true;
    if (!a || !b) return false;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equals(a, b);
};
/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */ var withReact = function withReact(editor) {
    var clipboardFormatKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x-slate-fragment';
    var e = editor;
    e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slate$2d$dom$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withDOM"])(e, clipboardFormatKey);
    var { onChange } = e;
    e.onChange = (options)=>{
        // COMPAT: React < 18 doesn't batch `setState` hook calls, which means
        // that the children and selection can get out of sync for one render
        // pass. So we have to use this unstable API to ensure it batches them.
        // (2019/12/03)
        // https://github.com/facebook/react/issues/14259#issuecomment-439702367
        var maybeBatchUpdates = REACT_MAJOR_VERSION < 18 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].unstable_batchedUpdates : (callback)=>callback();
        maybeBatchUpdates(()=>{
            onChange(options);
        });
    };
    return e;
};
;
 //# sourceMappingURL=index.es.js.map
}}),
}]);

//# sourceMappingURL=bf1aa_slate-react_dist_index_es_0e509a7b.js.map