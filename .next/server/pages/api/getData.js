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
exports.id = "pages/api/getData";
exports.ids = ["pages/api/getData"];
exports.modules = {

/***/ "(api)/./pages/api/getData.js":
/*!******************************!*\
  !*** ./pages/api/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/getData.js\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            // Fetch data from the Bible API\n            const response = await fetch(\"https://bible-api.com/john 3:16?translation=almeida\");\n            if (!response.ok) {\n                throw new Error(`Error fetching data: ${response.statusText}`);\n            }\n            // Parse the JSON data\n            const data = await response.json();\n            // Send the data as the response\n            res.status(200).json(data);\n        } catch (error) {\n            // Handle errors\n            console.error(error);\n            res.status(500).json({\n                error: \"Failed to fetch data from the Bible API\"\n            });\n        }\n    } else {\n        // Handle other HTTP methods\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsdUJBQXVCO0FBQ1IsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsSUFBSTtZQUNGLGdDQUFnQztZQUNoQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFSCxTQUFTSSxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLENBQUM7WUFFRCxzQkFBc0I7WUFDdEIsTUFBTUMsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO1lBRWhDLGdDQUFnQztZQUNoQ1IsSUFBSVMsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7UUFDdkIsRUFBRSxPQUFPRyxPQUFPO1lBQ2QsZ0JBQWdCO1lBQ2hCQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2RWLElBQUlTLE1BQU0sQ0FBQyxLQUFLRCxJQUFJLENBQUM7Z0JBQUVFLE9BQU87WUFBMEM7UUFDMUU7SUFDRixPQUFPO1FBQ0wsNEJBQTRCO1FBQzVCVixJQUFJWSxTQUFTLENBQUMsU0FBUztZQUFDO1NBQU07UUFDOUJaLElBQUlTLE1BQU0sQ0FBQyxLQUFLSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVkLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vcGFnZXMvYXBpL2dldERhdGEuanM/MTQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvZ2V0RGF0YS5qc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggZGF0YSBmcm9tIHRoZSBCaWJsZSBBUElcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iaWJsZS1hcGkuY29tL2pvaG4gMzoxNj90cmFuc2xhdGlvbj1hbG1laWRhJyk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGRhdGE6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gUGFyc2UgdGhlIEpTT04gZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBcbiAgICAgICAgLy8gU2VuZCB0aGUgZGF0YSBhcyB0aGUgcmVzcG9uc2VcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGRhdGEgZnJvbSB0aGUgQmlibGUgQVBJJyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGFuZGxlIG90aGVyIEhUVFAgbWV0aG9kc1xuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gICAgfVxuICB9XG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getData.js"));
module.exports = __webpack_exports__;

})();