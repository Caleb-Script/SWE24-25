"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./components/formulare/LoginFormular.tsx":
/*!************************************************!*\
  !*** ./components/formulare/LoginFormular.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LoadingComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent */ \"(app-pages-browser)/./components/LoadingComponent.tsx\");\n/* harmony import */ var _ErrorBannerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorBannerComponent */ \"(app-pages-browser)/./components/ErrorBannerComponent.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth */ \"(app-pages-browser)/./api/auth.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const [loginDaten, setLoginDaten] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const [isInputValid, setIsInputValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Validate input whenever loginDaten changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsInputValid(loginDaten.username !== \"\" && loginDaten.password !== \"\");\n    }, [\n        loginDaten\n    ]);\n    // Handle login button click\n    const handleLogin = async ()=>{\n        setIsLoading(true);\n        setError(undefined);\n        try {\n            const { username, password } = loginDaten;\n            const token = await (0,_api_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(username, password);\n            localStorage.setItem(\"token\", token.access_token);\n            localStorage.setItem(\"refreshToken\", token.refresh_token);\n            localStorage.setItem(\"expires_in\", token.expires_in);\n            localStorage.setItem(\"token_timestamp\", Math.floor(Date.now() / 1000).toString());\n            localStorage.setItem(\"user\", username);\n            setTimeout(()=>{\n                router.push(\"/buecher\");\n                router.refresh();\n            }, 250);\n        } catch (err) {\n            setTimeout(()=>{\n                setError(err.message);\n            }, 1000);\n        } finally{\n            setTimeout(()=>{\n                setIsLoading(false);\n            }, 1000);\n        }\n    };\n    // Handle input changes\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setLoginDaten((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"p-3 w-50 bg-white border border-danger rounded shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"display-6 mb-3 text-dark\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-floating mb-3 text-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        className: \"form-control\",\n                        id: \"floatingInput\",\n                        placeholder: \"name@example.com\",\n                        name: \"username\",\n                        value: loginDaten.username,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"floatingInput\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-floating text-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"form-control\",\n                        id: \"floatingPassword\",\n                        placeholder: \"Password\",\n                        name: \"password\",\n                        value: loginDaten.password,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"floatingPassword\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingComponent__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, {\n                message: \"Sie werden angemeldet. Haben Sie Geduld.\"\n            }, void 0, false, {\n                fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorBannerComponent__WEBPACK_IMPORTED_MODULE_3__.ErrorBannerComponent, {\n                message: error\n            }, void 0, false, {\n                fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                lineNumber: 103,\n                columnNumber: 23\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"btn btn-danger mt-3\",\n                onClick: handleLogin,\n                disabled: !isInputValid || isLoading,\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gentlebookpro/Projekte/SWE/buch-web-SWE-SS24/SWE24-25/components/formulare/LoginFormular.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"oAFR/Qoeo8hUnzMDbG6dnGzEtko=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9ybXVsYXJlL0xvZ2luRm9ybXVsYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFFVztBQUNRO0FBQ25CO0FBQ0g7QUFFMUIsU0FBU007O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUNyRFEsVUFBVTtRQUNWQyxVQUFVO0lBQ2Q7SUFFQSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBVTtJQUMxRCxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFxQmdCO0lBQ3ZELE1BQU1DLFNBQVNkLDBEQUFTQTtJQUV4Qiw2Q0FBNkM7SUFDN0NKLGdEQUFTQSxDQUFDO1FBQ05ZLGdCQUNJTCxXQUFXRSxRQUFRLEtBQUssTUFBTUYsV0FBV0csUUFBUSxLQUFLO0lBRTlELEdBQUc7UUFBQ0g7S0FBVztJQUVmLDRCQUE0QjtJQUM1QixNQUFNWSxjQUFjO1FBQ2hCTCxhQUFhO1FBQ2JFLFNBQVNDO1FBRVQsSUFBSTtZQUNBLE1BQU0sRUFBRVIsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7WUFDL0IsTUFBTWEsUUFBUSxNQUFNZixrREFBT0EsQ0FBQ0ksVUFBVUM7WUFDdENXLGFBQWFDLE9BQU8sQ0FBQyxTQUFTRixNQUFNRyxZQUFZO1lBQ2hERixhQUFhQyxPQUFPLENBQUMsZ0JBQWdCRixNQUFNSSxhQUFhO1lBQ3hESCxhQUFhQyxPQUFPLENBQUMsY0FBY0YsTUFBTUssVUFBVTtZQUNuREosYUFBYUMsT0FBTyxDQUNoQixtQkFDQUksS0FBS0MsS0FBSyxDQUFDQyxLQUFLQyxHQUFHLEtBQUssTUFBTUMsUUFBUTtZQUUxQ1QsYUFBYUMsT0FBTyxDQUFDLFFBQVFiO1lBQzdCc0IsV0FBVztnQkFDQ2IsT0FBT2MsSUFBSSxDQUFDO2dCQUNaZCxPQUFPZSxPQUFPO1lBQ2xCLEdBQUc7UUFDZixFQUFFLE9BQU9DLEtBQUs7WUFDVkgsV0FBVztnQkFDUGYsU0FBUyxJQUFlbUIsT0FBTztZQUNuQyxHQUFHO1FBQ1AsU0FBVTtZQUNOSixXQUFXO2dCQUNQakIsYUFBYTtZQUNqQixHQUFHO1FBRVA7SUFDSjtJQUVBLHVCQUF1QjtJQUN2QixNQUFNc0IsZUFBZSxDQUFDQztRQUNsQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENoQyxjQUFjLENBQUNpQyxZQUFlO2dCQUMxQixHQUFHQSxTQUFTO2dCQUNaLENBQUNILEtBQUssRUFBRUM7WUFDWjtJQUNKO0lBRUEscUJBQ0ksOERBQUNHO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMkI7Ozs7OzswQkFDekMsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDWCw4REFBQ0c7d0JBQ0dDLE1BQUs7d0JBQ0xKLFdBQVU7d0JBQ1ZLLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pYLE1BQUs7d0JBQ0xDLE9BQU9oQyxXQUFXRSxRQUFRO3dCQUMxQnlDLFVBQVVkO3dCQUNWZSxRQUFROzs7Ozs7a0NBRVosOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ1I7Z0JBQUlGLFdBQVU7O2tDQUNYLDhEQUFDRzt3QkFDR0MsTUFBSzt3QkFDTEosV0FBVTt3QkFDVkssSUFBRzt3QkFDSEMsYUFBWTt3QkFDWlgsTUFBSzt3QkFDTEMsT0FBT2hDLFdBQVdHLFFBQVE7d0JBQzFCd0MsVUFBVWQ7d0JBQ1ZlLFFBQVE7Ozs7OztrQ0FFWiw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQW1COzs7Ozs7Ozs7Ozs7WUFFckN4QywyQkFDRyw4REFBQ1gsK0RBQWdCQTtnQkFDYmlDLFNBQVM7Ozs7OztZQUdoQnBCLHVCQUFTLDhEQUFDWix1RUFBb0JBO2dCQUFDZ0MsU0FBU3BCOzs7Ozs7MEJBQ3pDLDhEQUFDdUM7Z0JBQ0dQLE1BQUs7Z0JBQ0xKLFdBQVU7Z0JBQ1ZZLFNBQVNwQztnQkFDVHFDLFVBQVUsQ0FBQzdDLGdCQUFnQkU7MEJBQzlCOzs7Ozs7Ozs7Ozs7QUFLYjtHQXhHd0JQOztRQVNMRixzREFBU0E7OztLQVRKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm11bGFyZS9Mb2dpbkZvcm11bGFyLnRzeD80YWM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvZ2luRGF0ZW4gfSBmcm9tICcuLi8uLi9saWIvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vTG9hZGluZ0NvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4uL0Vycm9yQmFubmVyQ29tcG9uZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnLi4vLi4vYXBpL2F1dGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG4gICAgY29uc3QgW2xvZ2luRGF0ZW4sIHNldExvZ2luRGF0ZW5dID0gdXNlU3RhdGU8TG9naW5EYXRlbj4oe1xuICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IFtpc0lucHV0VmFsaWQsIHNldElzSW5wdXRWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIC8vIFZhbGlkYXRlIGlucHV0IHdoZW5ldmVyIGxvZ2luRGF0ZW4gY2hhbmdlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldElzSW5wdXRWYWxpZChcbiAgICAgICAgICAgIGxvZ2luRGF0ZW4udXNlcm5hbWUgIT09ICcnICYmIGxvZ2luRGF0ZW4ucGFzc3dvcmQgIT09ICcnLFxuICAgICAgICApO1xuICAgIH0sIFtsb2dpbkRhdGVuXSk7XG5cbiAgICAvLyBIYW5kbGUgbG9naW4gYnV0dG9uIGNsaWNrXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGxvZ2luRGF0ZW47XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldEF1dGgodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaFRva2VuJywgdG9rZW4ucmVmcmVzaF90b2tlbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc19pbicsIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgJ3Rva2VuX3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYnVlY2hlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKGVyciBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBpbnB1dCBjaGFuZ2VzXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRMb2dpbkRhdGVuKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInAtMyB3LTUwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZGFuZ2VyIHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS02IG1iLTMgdGV4dC1kYXJrXCI+TG9naW48L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTMgdGV4dC1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmxvYXRpbmdJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZUBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2dpbkRhdGVuLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbG9hdGluZ0lucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgdGV4dC1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmxvYXRpbmdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9naW5EYXRlbi5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmxvYXRpbmdQYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17J1NpZSB3ZXJkZW4gYW5nZW1lbGRldC4gSGFiZW4gU2llIEdlZHVsZC4nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvckJhbm5lckNvbXBvbmVudCBtZXNzYWdlPXtlcnJvcn0gLz59XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXQtM1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0lucHV0VmFsaWQgfHwgaXNMb2FkaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdDb21wb25lbnQiLCJFcnJvckJhbm5lckNvbXBvbmVudCIsInVzZVJvdXRlciIsImdldEF1dGgiLCJMb2dpbkZvcm0iLCJsb2dpbkRhdGVuIiwic2V0TG9naW5EYXRlbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJpc0lucHV0VmFsaWQiLCJzZXRJc0lucHV0VmFsaWQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwidW5kZWZpbmVkIiwicm91dGVyIiwiaGFuZGxlTG9naW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZXhwaXJlc19pbiIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInNldFRpbWVvdXQiLCJwdXNoIiwicmVmcmVzaCIsImVyciIsIm1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldlN0YXRlIiwiZm9ybSIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/formulare/LoginFormular.tsx\n"));

/***/ })

});