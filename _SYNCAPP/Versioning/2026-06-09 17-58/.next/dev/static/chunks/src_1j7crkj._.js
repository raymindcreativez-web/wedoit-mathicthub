(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MathScoreForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MathScoreForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
;
function MathScoreForm(param) {
    var onScoreSubmit = param.onScoreSubmit;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        studentName: '',
        studentId: '',
        topic: '',
        score: '',
        maxScore: '100',
        date: new Date().toISOString().split('T')[0]
    }), 2), formData = _useState[0], setFormData = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loading = _useState1[0], setLoading = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), error = _useState2[0], setError = _useState2[1];
    var handleChange = function handleChange(e) {
        var _e_target = e.target, name = _e_target.name, value = _e_target.value;
        setFormData(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, name, value));
        });
    };
    var handleSubmit = function handleSubmit(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var scoreNum, maxScoreNum;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                e.preventDefault();
                setLoading(true);
                setError(null);
                // Validate score is a number and not greater than maxScore
                scoreNum = parseFloat(formData.score);
                maxScoreNum = parseFloat(formData.maxScore);
                if (isNaN(scoreNum) || scoreNum < 0 || isNaN(maxScoreNum) || maxScoreNum <= 0 || scoreNum > maxScoreNum) {
                    setError('Please enter a valid score between 0 and the maximum score');
                    setLoading(false);
                    return [
                        2
                    ];
                }
                try {
                    // Call the parent's submit handler
                    onScoreSubmit(formData);
                    // Reset form after successful submission
                    setFormData({
                        studentName: '',
                        studentId: '',
                        topic: '',
                        score: '',
                        maxScore: '100',
                        date: new Date().toISOString().split('T')[0]
                    });
                } catch (err) {
                    setError('Failed to save score. Please try again.');
                } finally{
                    setLoading(false);
                }
                return [
                    2
                ];
            });
        })();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-6 text-center",
                children: "Record Math Score"
            }, void 0, false, {
                fileName: "[project]/src/components/MathScoreForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/MathScoreForm.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "studentName",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Student Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "studentName",
                                name: "studentName",
                                value: formData.studentName,
                                onChange: handleChange,
                                required: true,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Enter student's full name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "studentId",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Student ID"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "studentId",
                                name: "studentId",
                                value: formData.studentId,
                                onChange: handleChange,
                                required: true,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Enter student ID"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "topic",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Topic / Skill"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "topic",
                                name: "topic",
                                value: formData.topic,
                                onChange: handleChange,
                                required: true,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "e.g., Fractions, Algebraic Expressions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "score",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Score Obtained"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MathScoreForm.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        id: "score",
                                        name: "score",
                                        value: formData.score,
                                        onChange: handleChange,
                                        required: true,
                                        min: "0",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        placeholder: "Points earned"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MathScoreForm.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "maxScore",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Maximum Score"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MathScoreForm.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        id: "maxScore",
                                        name: "maxScore",
                                        value: formData.maxScore,
                                        onChange: handleChange,
                                        required: true,
                                        min: "1",
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        placeholder: "Total points possible"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MathScoreForm.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "date",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Date of Assessment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                id: "date",
                                name: "date",
                                value: formData.date,
                                onChange: handleChange,
                                required: true,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MathScoreForm.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: loading ? 'Saving Score...' : 'Record Score'
                    }, void 0, false, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MathScoreForm.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            !loading && formData.score && formData.maxScore && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-3 bg-blue-50 rounded-md text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-900 mb-1",
                        children: "Percentage Score:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-blue-600",
                        children: [
                            (parseFloat(formData.score) / parseFloat(formData.maxScore) * 100).toFixed(1),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MathScoreForm.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MathScoreForm.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MathScoreForm.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(MathScoreForm, "hMY47GFDy9sRZ8HsSduYYnIjT+A=");
_c = MathScoreForm;
var _c;
__turbopack_context__.k.register(_c, "MathScoreForm");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/gemini.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "geminiModel",
    ()=>geminiModel,
    "generateContent",
    ()=>generateContent,
    "generateInterventionPlan",
    ()=>generateInterventionPlan,
    "generateLessonPlan",
    ()=>generateLessonPlan,
    "generateQuiz",
    ()=>generateQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
// Initialize Gemini AI
var genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GEMINI_API_KEY || '');
var geminiModel = genAI.getGenerativeModel({
    model: 'gemini-pro'
});
var generateContent = function generateContent(prompt) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var result, response, error;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        geminiModel.generateContent(prompt)
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        4,
                        result.response
                    ];
                case 2:
                    response = _state.sent();
                    return [
                        2,
                        response.text()
                    ];
                case 3:
                    error = _state.sent();
                    console.error('Error generating content with Gemini:', error);
                    throw new Error('Failed to generate content with Gemini AI');
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
};
var generateLessonPlan = function generateLessonPlan(topic, gradeLevel, duration) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var prompt, text;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    prompt = "\n    Create a detailed lesson plan for:\n    Topic: ".concat(topic, "\n    Grade Level: ").concat(gradeLevel, "\n    Duration: ").concat(duration, " minutes\n\n    Please include:\n    1. Learning objectives\n    2. Materials needed\n    3. Introduction/warm-up activity\n    4. Main instructional activities\n    5. Guided practice\n    6. Independent practice\n    7. Assessment/closure\n    8. Differentiation strategies\n    9. Homework/extension activities\n\n    Format the response as a JSON object with these sections.\n  ");
                    return [
                        4,
                        generateContent(prompt)
                    ];
                case 1:
                    text = _state.sent();
                    // Try to parse as JSON, if not possible, wrap in a basic structure
                    try {
                        return [
                            2,
                            JSON.parse(text)
                        ];
                    } catch (e) {
                        return [
                            2,
                            {
                                topic: topic,
                                gradeLevel: gradeLevel,
                                duration: duration,
                                generatedContent: text,
                                note: 'AI response was not valid JSON, raw content provided'
                            }
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    })();
};
var generateQuiz = function generateQuiz(topic, gradeLevel, numQuestions, difficulty) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var prompt, text;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    prompt = "\n    Generate a quiz for:\n    Topic: ".concat(topic, "\n    Grade Level: ").concat(gradeLevel, "\n    Number of Questions: ").concat(numQuestions, "\n    Difficulty: ").concat(difficulty, '\n\n    Please include:\n    1. Multiple choice questions (4 options each, with correct answer indicated)\n    2. Short answer questions (if appropriate for the topic and grade level)\n    3. Answer key with explanations\n\n    Format the response as a JSON object with the following structure:\n    {\n      "quizTitle": string,\n      "topic": string,\n      "gradeLevel": string,\n      "numQuestions": number,\n      "difficulty": string,\n      "questions": [\n        {\n          "id": number,\n          "type": "multiple-choice" | "short-answer",\n          "question": string,\n          "options": string[], // for multiple-choice\n          "correctAnswer": string | number, // for multiple-choice: index of correct option; for short-answer: the answer\n          "explanation": string\n        }\n      ]\n    }\n  ');
                    return [
                        4,
                        generateContent(prompt)
                    ];
                case 1:
                    text = _state.sent();
                    // Try to parse as JSON, if not possible, wrap in a basic structure
                    try {
                        return [
                            2,
                            JSON.parse(text)
                        ];
                    } catch (e) {
                        return [
                            2,
                            {
                                topic: topic,
                                gradeLevel: gradeLevel,
                                numQuestions: numQuestions,
                                difficulty: difficulty,
                                generatedContent: text,
                                note: 'AI response was not valid JSON, raw content provided'
                            }
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    })();
};
var generateInterventionPlan = function generateInterventionPlan(studentId, topic, currentMastery, learningStyle) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var prompt, text;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    prompt = "\n    Generate a personalized intervention plan for:\n    Student ID: ".concat(studentId, "\n    Topic: ").concat(topic, "\n    Current Mastery Level: ").concat(currentMastery, "% (out of 100)\n    Learning Style: ").concat(learningStyle, "\n\n    Please include:\n    1. Specific learning objectives based on the gap analysis\n    2. Recommended instructional strategies tailored to the learning style\n    3. Suggested activities and exercises\n    4. Timeline and milestones\n    5. Progress monitoring methods\n    6. Resources and materials needed\n    7. Parent/guardian involvement suggestions (if applicable)\n    8. Exit criteria for when the intervention is complete\n\n    Format the response as a JSON object with these sections.\n  ");
                    return [
                        4,
                        generateContent(prompt)
                    ];
                case 1:
                    text = _state.sent();
                    // Try to parse as JSON, if not possible, wrap in a basic structure
                    try {
                        return [
                            2,
                            JSON.parse(text)
                        ];
                    } catch (e) {
                        return [
                            2,
                            {
                                studentId: studentId,
                                topic: topic,
                                currentMastery: currentMastery,
                                learningStyle: learningStyle,
                                generatedContent: text,
                                note: 'AI response was not valid JSON, raw content provided'
                            }
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    })();
};
const __TURBOPACK__default__export__ = {
    generateContent: generateContent,
    generateLessonPlan: generateLessonPlan,
    generateQuiz: generateQuiz,
    generateInterventionPlan: generateInterventionPlan,
    geminiModel: geminiModel
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$68602d24$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-68602d24.js [app-client] (ecmascript) <export o as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
;
// Check if Firebase is configured
var isFirebaseConfigured = function isFirebaseConfigured() {
    return !!("TURBOPACK compile-time value", "AIzaSyAn5Y7WONuqdfYOt8vh8yLRYr4HX0oK-y0") && !!("TURBOPACK compile-time value", "mathicthub.firebaseapp.com") && !!("TURBOPACK compile-time value", "mathicthub") && !!("TURBOPACK compile-time value", "mathicthub.firebasestorage.app") && !!("TURBOPACK compile-time value", "665007267317") && !!("TURBOPACK compile-time value", "1:665007267317:web:0ab4e4ab9ed033c751d4bc");
};
// Firebase instance holders - initialized lazily on client side
var app = null;
var auth = null;
var db = null;
var initialized = false;
// Initialize Firebase - safe for both SSR and client-side
var initializeFirebase = function initializeFirebase() {
    // Prevent multiple initializations
    if (initialized) {
        return;
    }
    // Only initialize in browser environment
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Check if Firebase is configured
    if (!isFirebaseConfigured()) //TURBOPACK unreachable
    ;
    try {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: ("TURBOPACK compile-time value", "AIzaSyAn5Y7WONuqdfYOt8vh8yLRYr4HX0oK-y0"),
            authDomain: ("TURBOPACK compile-time value", "mathicthub.firebaseapp.com"),
            projectId: ("TURBOPACK compile-time value", "mathicthub"),
            storageBucket: ("TURBOPACK compile-time value", "mathicthub.firebasestorage.app"),
            messagingSenderId: ("TURBOPACK compile-time value", "665007267317"),
            appId: ("TURBOPACK compile-time value", "1:665007267317:web:0ab4e4ab9ed033c751d4bc")
        };
        // Initialize Firebase
        app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
        // Initialize services
        auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$68602d24$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__getAuth$3e$__["getAuth"])(app);
        db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
        initialized = true;
        console.log('Firebase initialized successfully');
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        // Fallback to mock services on error
        auth = null;
        db = null;
        initialized = true;
    }
};
// Initialize Firebase when module loads (will only run in browser due to next/dynamic behavior)
if ("TURBOPACK compile-time truthy", 1) {
    initializeFirebase();
}
;
const __TURBOPACK__default__export__ = app;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/math-tracker-flow/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MathTrackerFlowPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathScoreForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MathScoreForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gemini.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MathTrackerFlowPage() {
    var _this = this;
    _s();
    // Step states
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), 2), currentStep = _useState[0], setCurrentStep = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        classId: '',
        className: '',
        subject: ''
    }), 2), classData = _useState1[0], setClassData = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), scores = _useState2[0], setScores = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        classAverage: 0,
        passingRate: 0,
        masteryLevel: 0,
        leastMasteredCompetencies: [],
        studentsNeedingIntervention: []
    }), 2), analysis = _useState3[0], setAnalysis = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), interventionPlan = _useState4[0], setInterventionPlan = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loading = _useState5[0], setLoading = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), error = _useState6[0], setError = _useState6[1];
    // Mock classes data - in a real app this would come from Firestore
    var mockClasses = [
        {
            id: 'class1',
            name: 'Grade 7 - Section A',
            subject: 'Mathematics'
        },
        {
            id: 'class2',
            name: 'Grade 8 - Section B',
            subject: 'Mathematics'
        },
        {
            id: 'class3',
            name: 'Grade 9 - Section C',
            subject: 'Mathematics'
        }
    ];
    // Handle step navigation
    var goToStep = function goToStep(step) {
        setCurrentStep(step);
        setError(null);
    };
    var nextStep = function nextStep() {
        // Validate current step before proceeding
        if (currentStep === 1) {
            if (!classData.classId || !classData.subject) {
                setError('Please select a class and subject');
                return;
            }
        } else if (currentStep === 2) {
            if (scores.length === 0) {
                setError('Please add at least one student score');
                return;
            }
        } else if (currentStep === 3) {
            // Trigger analysis
            performAnalysis();
            return; // Don't increment step, analysis will handle it
        } else if (currentStep === 4) {
            // Generate intervention plan
            generatePlan();
            return;
        }
        setCurrentStep(function(prev) {
            return Math.min(prev + 1, 5);
        });
    };
    var prevStep = function prevStep() {
        setCurrentStep(function(prev) {
            return Math.max(prev - 1, 1);
        });
    };
    // Handle class selection
    var handleClassSelect = function handleClassSelect(e) {
        var _e_target_value_split = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e.target.value.split('|'), 3), classId = _e_target_value_split[0], className = _e_target_value_split[1], subject = _e_target_value_split[2];
        setClassData({
            classId: classId,
            className: className,
            subject: subject
        });
    };
    // Handle score submission
    var handleScoreSubmit = function handleScoreSubmit(formData) {
        // Convert string scores to numbers
        var scoreNum = parseFloat(formData.score);
        var maxScoreNum = parseFloat(formData.maxScore);
        // Generate a simple ID (in a real app, you'd use a proper ID generator)
        var scoreId = "score_".concat(Date.now());
        var newScore = {
            id: scoreId,
            studentId: formData.studentId,
            studentName: formData.studentName,
            topic: formData.topic,
            score: scoreNum,
            maxScore: maxScoreNum,
            date: formData.date,
            assessmentType: 'quiz',
            notes: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setScores(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                newScore
            ]);
        });
    // Reset form after submission (handled by child component)
    };
    // Perform analysis on scores
    var performAnalysis = function performAnalysis() {
        setLoading(true);
        setError(null);
        try {
            if (scores.length === 0) {
                setError('No scores to analyze');
                setLoading(false);
                return;
            }
            // Calculate class average
            var totalScore = scores.reduce(function(sum, score) {
                var percentage = score.score / score.maxScore * 100;
                return sum + percentage;
            }, 0);
            var classAverage = totalScore / scores.length;
            // Calculate passing rate (assuming 75% is passing)
            var passingCount = scores.filter(function(score) {
                var percentage = score.score / score.maxScore * 100;
                return percentage >= 75;
            }).length;
            var passingRate = passingCount / scores.length * 100;
            // Calculate overall mastery level (average of all scores)
            var masteryLevel = classAverage; // Same as class average for simplicity
            // Find least mastered competencies (topics with lowest average scores)
            var topicScores = {};
            scores.forEach(function(score) {
                if (!topicScores[score.topic]) {
                    topicScores[score.topic] = {
                        total: 0,
                        count: 0
                    };
                }
                var percentage = score.score / score.maxScore * 100;
                topicScores[score.topic].total += percentage;
                topicScores[score.topic].count += 1;
            });
            var topicAverages = Object.entries(topicScores).map(function(param) {
                var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), topic = _param[0], data = _param[1];
                return {
                    topic: topic,
                    average: data.total / data.count
                };
            });
            // Sort by average ascending (lowest first)
            topicAverages.sort(function(a, b) {
                return a.average - b.average;
            });
            var leastMasteredCompetencies = topicAverages.slice(0, 3).map(function(item) {
                return item.topic;
            });
            // Identify students needing intervention (scores below 70%)
            var studentsNeedingIntervention = scores.filter(function(score) {
                var percentage = score.score / score.maxScore * 100;
                return percentage < 70;
            }).map(function(score) {
                return {
                    studentId: score.studentId,
                    studentName: score.studentName,
                    topic: score.topic,
                    score: score.score,
                    maxScore: score.maxScore
                };
            });
            setAnalysis({
                classAverage: classAverage,
                passingRate: passingRate,
                masteryLevel: masteryLevel,
                leastMasteredCompetencies: leastMasteredCompetencies,
                studentsNeedingIntervention: studentsNeedingIntervention
            });
            setLoading(false);
            goToStep(4); // Move to intervention plan step
        } catch (err) {
            setError('Failed to perform analysis. Please try again.');
            setLoading(false);
        }
    };
    // Generate intervention plan using Gemini
    var generatePlan = function generatePlan() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var student, planData, newPlan, firestoreError, err;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setLoading(true);
                        setError(null);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            8,
                            ,
                            9
                        ]);
                        if (analysis.studentsNeedingIntervention.length === 0) {
                            setError('No students need intervention based on current scores');
                            setLoading(false);
                            return [
                                2
                            ];
                        }
                        // For demo, we'll create a plan for the first student needing intervention
                        student = analysis.studentsNeedingIntervention[0];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateInterventionPlan"])(student.studentId, student.topic, (student.score / student.maxScore * 100).toFixed(1), 'visual' // Default learning style
                            )
                        ];
                    case 2:
                        planData = _state.sent();
                        // Create intervention plan object
                        newPlan = {
                            id: "plan_".concat(Date.now()),
                            studentId: student.studentId,
                            studentName: student.studentName,
                            classId: classData.classId,
                            title: "Intervention Plan for ".concat(student.topic),
                            description: "Personalized intervention plan to improve mastery in ".concat(student.topic),
                            goal: "Achieve at least 75% mastery in ".concat(student.topic, " within 4 weeks"),
                            startDate: new Date().toISOString(),
                            endDate: new Date(Date.now() + 4 * 7 * 24 * 60 * 60 * 1000).toISOString(),
                            status: 'active',
                            priority: 'high',
                            interventionType: 'remediation',
                            subjects: [
                                'Mathematics'
                            ],
                            strategies: planData.strategies || [
                                'Differentiated instruction',
                                'Small group sessions',
                                'Visual aids and manipulatives',
                                'Regular formative assessments'
                            ],
                            resourcesNeeded: planData.resourcesNeeded || [
                                'Worksheets',
                                'Manipulatives',
                                'Educational videos',
                                'Practice problems'
                            ],
                            successCriteria: planData.successCriteria || [
                                'Score at least 75% on post-assessment',
                                'Complete 5 practice exercises with 80% accuracy',
                                'Demonstrate concept mastery in exit ticket'
                            ],
                            progressMetrics: [
                                {
                                    metric: "".concat(student.topic, " Mastery"),
                                    targetValue: 75,
                                    currentValue: student.score / student.maxScore * 100,
                                    unit: '%',
                                    lastUpdated: new Date().toISOString()
                                }
                            ],
                            assignedTo: 'teacher_1',
                            createdBy: 'teacher_1',
                            createdAt: new Date().toISOString(),
                            notes: planData.generatedContent || 'Initial intervention plan created based on assessment data',
                            parentInvolved: true,
                            reviewDate: new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000).toISOString() // 2 weeks from now
                        };
                        _state.label = 3;
                    case 3:
                        _state.trys.push([
                            3,
                            6,
                            ,
                            7
                        ]);
                        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]) return [
                            3,
                            5
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'interventionPlans', newPlan.id), newPlan)
                        ];
                    case 4:
                        _state.sent();
                        _state.label = 5;
                    case 5:
                        return [
                            3,
                            7
                        ];
                    case 6:
                        firestoreError = _state.sent();
                        console.warn('Firestore not configured or error saving plan:', firestoreError);
                        return [
                            3,
                            7
                        ];
                    case 7:
                        setInterventionPlan(newPlan);
                        setLoading(false);
                        goToStep(5); // Move to completed step
                        return [
                            3,
                            9
                        ];
                    case 8:
                        err = _state.sent();
                        setError('Failed to generate intervention plan. Please try again.');
                        setLoading(false);
                        return [
                            3,
                            9
                        ];
                    case 9:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    // Reset flow
    var resetFlow = function resetFlow() {
        setCurrentStep(1);
        setClassData({
            classId: '',
            className: '',
            subject: ''
        });
        setScores([]);
        setAnalysis({
            classAverage: 0,
            passingRate: 0,
            masteryLevel: 0,
            leastMasteredCompetencies: [],
            studentsNeedingIntervention: []
        });
        setInterventionPlan(null);
        setError(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900",
                            children: "Math Tracker Flow"
                        }, void 0, false, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "text-blue-600 hover:underline",
                            children: "← Back to Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gray-200 rounded-full h-2.5 mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-600 h-2.5 rounded-full",
                        style: {
                            width: "".concat((currentStep - 1) * 25, "%")
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md p-6",
                    children: [
                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "Step 1: Select Class and Subject"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Choose the class and subject you want to track for this math assessment session."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "classSelect",
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Select Class"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "classSelect",
                                                    value: "".concat(classData.classId, "|").concat(classData.className, "|").concat(classData.subject),
                                                    onChange: handleClassSelect,
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a class..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this),
                                                        mockClasses.map(function(cls) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "".concat(cls.id, "|").concat(cls.name, "|").concat(cls.subject),
                                                                children: [
                                                                    cls.name,
                                                                    " - ",
                                                                    cls.subject
                                                                ]
                                                            }, cls.id, true, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 23
                                                            }, _this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this),
                                        classData.classId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium mb-2",
                                                    children: "Selected Class:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: [
                                                        classData.className,
                                                        " - ",
                                                        classData.subject
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: nextStep,
                                        disabled: !classData.classId || loading,
                                        className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: loading ? 'Loading...' : 'Continue to Score Entry'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "Step 2: Enter Student Scores"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Upload CSV/Excel data or manually enter scores for each student in the selected class."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium mb-2",
                                            children: "Current Class:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: [
                                                classData.className,
                                                " - ",
                                                classData.subject
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-4",
                                                    children: "Manual Score Entry"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathScoreForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    onScoreSubmit: handleScoreSubmit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this),
                                        scores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-4",
                                                    children: [
                                                        "Entered Scores (",
                                                        scores.length,
                                                        " students)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "min-w-full divide-y divide-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-gray-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Student"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Topic"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Score"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 413,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Percentage"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 416,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "bg-white divide-y divide-gray-200",
                                                                children: scores.map(function(score, index) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm font-medium text-gray-900",
                                                                                    children: score.studentName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 428,
                                                                                    columnNumber: 33
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 427,
                                                                                columnNumber: 31
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-700",
                                                                                    children: score.topic
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 431,
                                                                                    columnNumber: 33
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 31
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-900",
                                                                                    children: [
                                                                                        score.score,
                                                                                        "/",
                                                                                        score.maxScore
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 434,
                                                                                    columnNumber: 33
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 433,
                                                                                columnNumber: 31
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-900",
                                                                                    children: [
                                                                                        (score.score / score.maxScore * 100).toFixed(1),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 437,
                                                                                    columnNumber: 33
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 436,
                                                                                columnNumber: 31
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: new Date(score.date).toLocaleDateString()
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 442,
                                                                                    columnNumber: 33
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 441,
                                                                                columnNumber: 31
                                                                            }, _this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 29
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium mb-4",
                                                    children: "Upload CSV/Excel File"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500",
                                                    children: "Drag & drop your file here, or click to select"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm text-gray-400",
                                                    children: "Supported formats: CSV, XLS, XLSX"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: prevStep,
                                            className: "w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400",
                                            children: "Previous Step"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: nextStep,
                                            disabled: scores.length === 0 || loading,
                                            className: "w-full sm:w-auto ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: loading ? 'Saving...' : 'Continue to Analysis'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this),
                        currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "Step 3: View Analysis Results"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Review the computed metrics including class average, passing rate, mastery level, and areas needing attention."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 17
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-gray-500",
                                            children: "Analyzing data..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-blue-800 mb-2",
                                                            children: "Class Average"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-blue-600",
                                                            children: [
                                                                analysis.classAverage.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-green-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-green-800 mb-2",
                                                            children: "Passing Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-green-600",
                                                            children: [
                                                                analysis.passingRate.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-purple-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-purple-800 mb-2",
                                                            children: "Mastery Level"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-purple-600",
                                                            children: [
                                                                analysis.masteryLevel.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-indigo-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-indigo-800 mb-2",
                                                            children: "Least Mastered"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-indigo-600",
                                                            children: analysis.leastMasteredCompetencies.join(', ') || 'None'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 19
                                        }, this),
                                        analysis.studentsNeedingIntervention.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-4",
                                                    children: "Students Needing Intervention"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-4",
                                                    children: [
                                                        analysis.studentsNeedingIntervention.length,
                                                        " student(s) scored below 70% and may benefit from targeted support."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "min-w-full divide-y divide-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-gray-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Student"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Topic"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 538,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Score"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 541,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                            children: "Percentage"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                            lineNumber: 544,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "bg-white divide-y divide-gray-200",
                                                                children: analysis.studentsNeedingIntervention.map(function(student, index) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm font-medium text-gray-900",
                                                                                    children: student.studentName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 553,
                                                                                    columnNumber: 35
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 552,
                                                                                columnNumber: 33
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowlow",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-700",
                                                                                    children: student.topic
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 556,
                                                                                    columnNumber: 35
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 555,
                                                                                columnNumber: 33
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-900",
                                                                                    children: [
                                                                                        student.score,
                                                                                        "/",
                                                                                        student.maxScore
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 559,
                                                                                    columnNumber: 35
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 558,
                                                                                columnNumber: 33
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-6 py-4 whitespace-nowrap",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-900",
                                                                                    children: [
                                                                                        (student.score / student.maxScore * 100).toFixed(1),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                    lineNumber: 562,
                                                                                    columnNumber: 35
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 561,
                                                                                columnNumber: 33
                                                                            }, _this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 31
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 21
                                        }, this),
                                        analysis.studentsNeedingIntervention.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-12 w-12 bg-green-100 rounded-full flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "h-6 w-6 text-green-600",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-600 font-medium",
                                                    children: "All students are performing above the intervention threshold!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prevStep,
                                                    className: "w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400",
                                                    children: "Previous Step"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextStep,
                                                    disabled: loading,
                                                    className: "w-full sm:w-auto ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                                    children: loading ? 'Generating...' : 'Generate Intervention Plan'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 485,
                            columnNumber: 13
                        }, this),
                        currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "Step 4: Intervention Plan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Review the AI-generated intervention plan designed to help students improve in identified areas."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 615,
                                    columnNumber: 17
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-gray-500",
                                            children: "Generating intervention plan..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 623,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 621,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: interventionPlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6 p-4 bg-blue-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium text-blue-800 mb-2",
                                                        children: [
                                                            "Intervention Plan for ",
                                                            interventionPlan.studentName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: [
                                                            "Topic: ",
                                                            interventionPlan.subjects.join(', '),
                                                            " | Priority: ",
                                                            interventionPlan.priority,
                                                            " | Status: ",
                                                            interventionPlan.status
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "Plan Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 642,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700",
                                                                children: interventionPlan.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 643,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 641,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "Learning Goal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700",
                                                                children: interventionPlan.goal
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "Strategies"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-disc list-inside space-y-2 text-gray-700",
                                                                children: interventionPlan.strategies.map(function(strategy, index) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: strategy
                                                                    }, index, false, {
                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                        lineNumber: 655,
                                                                        columnNumber: 31
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "Resources Needed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-disc list-inside space-y-2 text-gray-700",
                                                                children: interventionPlan.resourcesNeeded.map(function(resource, index) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: resource
                                                                    }, index, false, {
                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                        lineNumber: 664,
                                                                        columnNumber: 31
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "Success Criteria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "list-disc list-inside space-y-2 text-gray-700",
                                                                children: interventionPlan.successCriteria.map(function(criterion, index) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: criterion
                                                                    }, index, false, {
                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                        lineNumber: 673,
                                                                        columnNumber: 31
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "Progress Monitoring"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: interventionPlan.progressMetrics.map(function(metric, index) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-gray-50 p-3 rounded-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: metric.metric
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                        lineNumber: 684,
                                                                                        columnNumber: 35
                                                                                    }, _this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            metric.currentValue,
                                                                                            "/",
                                                                                            metric.targetValue,
                                                                                            " ",
                                                                                            metric.unit
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                        lineNumber: 685,
                                                                                        columnNumber: 35
                                                                                    }, _this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 683,
                                                                                columnNumber: 33
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: [
                                                                                    "Last updated: ",
                                                                                    new Date(metric.lastUpdated).toLocaleDateString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                                lineNumber: 687,
                                                                                columnNumber: 33
                                                                            }, _this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 31
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 25
                                                    }, this),
                                                    interventionPlan.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-4",
                                                                children: "AI-Generated Notes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700",
                                                                children: interventionPlan.notes
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: prevStep,
                                                        className: "w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400",
                                                        children: "Previous Step"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: nextStep,
                                                        className: "w-full sm:w-auto ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus-ring-offset-2",
                                                        children: "Mark as Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                lineNumber: 703,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500",
                                            children: "No intervention plan generated yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                        lineNumber: 719,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 608,
                            columnNumber: 13
                        }, this),
                        currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "Step 5: Flow Completed"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "The math tracker flow has been completed successfully. You can now export the reports or start a new tracking session."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-16 w-16 bg-green-100 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-10 w-10 text-green-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                lineNumber: 737,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900 mb-4",
                                            children: "Math Tracker Flow Completed!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 743,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-6",
                                            children: "You have successfully:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 744,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-left max-w-md mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-shrink-0 text-green-600 mr-3",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Selected class and subject"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-shrink-0 text-green-600 mr-3",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Recorded student scores"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-shrink-0 text-green-600 mr-3",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Analyzed class performance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 758,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-shrink-0 text-green-600 mr-3",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Generated intervention plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 747,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 735,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex justify-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetFlow,
                                            className: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2",
                                            children: "Start New Flow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 768,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            className: "px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400",
                                            children: "Return to Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                            lineNumber: 774,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                                    lineNumber: 767,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                            lineNumber: 729,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/math-tracker-flow/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/math-tracker-flow/page.tsx",
            lineNumber: 299,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/math-tracker-flow/page.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(MathTrackerFlowPage, "doa3+HazthQaa6POE3bfPJ79Df4=");
_c = MathTrackerFlowPage;
var _c;
__turbopack_context__.k.register(_c, "MathTrackerFlowPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1j7crkj._.js.map