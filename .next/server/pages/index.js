"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction HomePage() {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchVerse = async ()=>{\n        setLoading(true); // Show loading state\n        try {\n            const response = await fetch(\"/api/getData\");\n            const result = await response.json();\n            setData(result);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setLoading(false); // Hide loading state\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Vers\\xedculo que voc\\xea precisa ler hoje!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchVerse,\n                disabled: loading,\n                children: loading ? \"Loading...\" : \"Show Verse\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Vers\\xedculo:\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 14\n                            }, this),\n                            \" \",\n                            data.reference\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Texto:\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                                lineNumber: 29,\n                                columnNumber: 14\n                            }, this),\n                            \" \",\n                            data.text\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0MsV0FBVztJQUNqQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNTSxhQUFhLFVBQVk7UUFDN0JELFdBQVcsSUFBSSxHQUFHLHFCQUFxQjtRQUN2QyxJQUFJO1lBQ0YsTUFBTUUsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLFNBQVMsTUFBTUYsU0FBU0csSUFBSTtZQUNsQ1AsUUFBUU07UUFDVixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEMsU0FBVTtZQUNSTixXQUFXLEtBQUssR0FBRyxxQkFBcUI7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTVjtnQkFBWVcsVUFBVWI7MEJBQ3BDQSxVQUFVLGVBQWUsWUFBWTs7Ozs7O1lBRXZDRixzQkFDQyw4REFBQ1c7O2tDQUNDLDhEQUFDSzs7MENBQUUsOERBQUNDOzBDQUFPOzs7Ozs7NEJBQW1COzRCQUFFakIsS0FBS2tCLFNBQVM7Ozs7Ozs7a0NBQzlDLDhEQUFDRjs7MENBQUUsOERBQUNDOzBDQUFPOzs7Ozs7NEJBQWU7NEJBQUVqQixLQUFLbUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoVmVyc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTsgLy8gU2hvdyBsb2FkaW5nIHN0YXRlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0RGF0YScpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0RGF0YShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIEhpZGUgbG9hZGluZyBzdGF0ZVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VmVyc8OtY3VsbyBxdWUgdm9jw6ogcHJlY2lzYSBsZXIgaG9qZSE8L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaFZlcnNlfSBkaXNhYmxlZD17bG9hZGluZ30+XG4gICAgICAgIHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgVmVyc2UnfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7ZGF0YSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+PHN0cm9uZz5WZXJzw61jdWxvOjwvc3Ryb25nPiB7ZGF0YS5yZWZlcmVuY2V9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+VGV4dG86PC9zdHJvbmc+IHtkYXRhLnRleHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lUGFnZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFZlcnNlIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiLCJzdHJvbmciLCJyZWZlcmVuY2UiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();