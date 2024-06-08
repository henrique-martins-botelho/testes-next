"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatehome"]("home",{},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3af1e8bc895fd024"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ !function() {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = function(name, initScope) {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = function(msg) {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var uniqueName = "home";
/******/ 		var register = function(name, version, factory, eager) {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = function(id) {
/******/ 			var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("next/dynamic", "14.2.3", function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_dynamic_js-_707f1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dynamic.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dynamic.js"); }; }); });
/******/ 				register("next/head", "14.2.3", function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_head_js-_592f1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js"); }; }); });
/******/ 				register("next/image", "14.2.3", function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_image_js-_2e2e0").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js"); }; }); });
/******/ 				register("next/link", "14.2.3", function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_link_js-_f0821").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"); }; }); });
/******/ 				register("next/router", "14.2.3", function() { return __webpack_require__.e("__federation_expose_next__router").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js"); }; }); });
/******/ 				register("next/script", "14.2.3", function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_script_js-_a9100").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js"); }; }); });
/******/ 				register("react-dom/client", "18.2.0", function() { return __webpack_require__.e("node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_client_js-_6cd00").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"); }; }); });
/******/ 				register("react-dom", "18.2.0", function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"); }; }); });
/******/ 				register("react/jsx-dev-runtime", "18.2.0", function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-dev-runtime_js-_92801").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js"); }; }); });
/******/ 				register("react/jsx-runtime", "18.2.0", function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-runtime_js-_d7b61").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"); }; }); });
/******/ 				register("react", "18.2.0", function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"); }; }); });
/******/ 				register("styled-jsx/style", "5.1.1", function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_style_js-_4fcb1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js"); }; }); });
/******/ 				register("styled-jsx", "5.1.1", function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_index_js-_c94c1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js"); }; }); });
/******/ 				initExternal("webpack/container/reference/checkout");
/******/ 				initExternal("webpack/container/reference/remoteWithButton");
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ !function() {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"next/dynamic": [{	version: "14.2.3",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_dynamic_js-_707f1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dynamic.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dynamic.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/head": [{	version: "14.2.3",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_head_js-_592f1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/image": [{	version: "14.2.3",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_image_js-_2e2e0").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/link": [{	version: "14.2.3",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_link_js-_f0821").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/router": [{	version: "14.2.3",
/******/ 			get: function() { return __webpack_require__.e("__federation_expose_next__router").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/script": [{	version: "14.2.3",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_script_js-_a9100").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom/client": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_client_js-_6cd00").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-dev-runtime": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-dev-runtime_js-_92801").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-runtime": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-runtime_js-_d7b61").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"styled-jsx/style": [{	version: "5.1.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_style_js-_4fcb1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],	"styled-jsx": [{	version: "5.1.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_index_js-_c94c1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = function(name, initScope) {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ !function() {
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		"webpack/sharing/consume/default/next/head/next/head?703f": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_head_js-_592f2").then(function() { return function() { return __webpack_require__(/*! next/head */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^12 || ^13 || ^14",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/head",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/router/next/router": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_router_js").then(function() { return function() { return __webpack_require__(/*! next/router */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": false,
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/router",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/link/next/link?0e2e": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_link_js-_f0822").then(function() { return function() { return __webpack_require__(/*! next/link */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^12 || ^13 || ^14",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/link",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/script/next/script": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_script_js-_a9101").then(function() { return function() { return __webpack_require__(/*! next/script */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^12 || ^13 || ^14",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/script",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/image/next/image": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_image_js-_2e2e1").then(function() { return function() { return __webpack_require__(/*! next/image */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^12 || ^13 || ^14",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/image",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/dynamic/next/dynamic?e0eb": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_dynamic_js-_707f2").then(function() { return function() { return __webpack_require__(/*! next/dynamic */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dynamic.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^12 || ^13 || ^14",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/dynamic",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-runtime_js-_d7b60").then(function() { return function() { return __webpack_require__(/*! react/jsx-runtime */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^18.2.0",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "react/jsx-runtime",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/react/react": {
/******/ 			getter: function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! react */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": false,
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "react",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/styled-jsx/styled-jsx": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_index_js-_c94c0").then(function() { return function() { return __webpack_require__(/*! styled-jsx */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^5.1.1",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "styled-jsx",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/styled-jsx/style/styled-jsx/style": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_style_js-_4fcb0").then(function() { return function() { return __webpack_require__(/*! styled-jsx/style */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^5.1.1",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "styled-jsx/style",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?c94c": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-runtime_js-_d7b60").then(function() { return function() { return __webpack_require__(/*! react/jsx-runtime */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^17 || ^18",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "react/jsx-runtime",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/react-dom/react-dom": {
/******/ 			getter: function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! react-dom */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": false,
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "react-dom",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-dev-runtime_js-_92800").then(function() { return function() { return __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "18.2.0",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "react/jsx-dev-runtime",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/link/next/link?858d": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_link_js-_f0820").then(function() { return function() { return __webpack_require__(/*! next/link */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^14.1.4",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/link",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/head/next/head?3bc3": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_head_js-_592f0").then(function() { return function() { return __webpack_require__(/*! next/head */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/head.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^14.1.4",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/head",
/******/ 		},
/******/ 		"webpack/sharing/consume/default/next/dynamic/next/dynamic?422e": {
/******/ 			getter: function() { return __webpack_require__.e("node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_dynamic_js-_707f0").then(function() { return function() { return __webpack_require__(/*! next/dynamic */ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dynamic.js"); }; }); },
/******/ 			shareInfo: {
/******/ 				shareConfig: {
/******/ 				  "fixedDependencies": false,
/******/ 				  "requiredVersion": "^14.1.4",
/******/ 				  "strictVersion": false,
/******/ 				  "singleton": true,
/******/ 				  "eager": false
/******/ 				},
/******/ 				scope: ["default"],
/******/ 			},
/******/ 			shareKey: "next/dynamic",
/******/ 		}
/******/ 	};
/******/ 	// no consumes in initial chunks
/******/ 	var chunkMapping = {
/******/ 		"__federation_expose_noop": [
/******/ 			"webpack/sharing/consume/default/next/head/next/head?703f",
/******/ 			"webpack/sharing/consume/default/next/router/next/router",
/******/ 			"webpack/sharing/consume/default/next/link/next/link?0e2e",
/******/ 			"webpack/sharing/consume/default/next/script/next/script",
/******/ 			"webpack/sharing/consume/default/next/image/next/image",
/******/ 			"webpack/sharing/consume/default/next/dynamic/next/dynamic?e0eb",
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react/react",
/******/ 			"webpack/sharing/consume/default/styled-jsx/styled-jsx",
/******/ 			"webpack/sharing/consume/default/styled-jsx/style/styled-jsx/style",
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?c94c"
/******/ 		],
/******/ 		"__federation_expose_react_dom": [
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"__federation_expose_next__router": [
/******/ 			"webpack/sharing/consume/default/react/react",
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 		],
/******/ 		"__federation_expose_nav": [
/******/ 			"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime",
/******/ 			"webpack/sharing/consume/default/styled-jsx/style/styled-jsx/style",
/******/ 			"webpack/sharing/consume/default/react/react",
/******/ 			"webpack/sharing/consume/default/next/link/next/link?858d"
/******/ 		],
/******/ 		"__federation_expose_home": [
/******/ 			"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime",
/******/ 			"webpack/sharing/consume/default/styled-jsx/style/styled-jsx/style",
/******/ 			"webpack/sharing/consume/default/react/react",
/******/ 			"webpack/sharing/consume/default/next/head/next/head?3bc3",
/******/ 			"webpack/sharing/consume/default/next/dynamic/next/dynamic?422e"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_dynamic_js-_707f1": [
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_head_js-_592f1": [
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_image_js-_2e2e0": [
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom",
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_link_js-_f0821": [
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_script_js-_a9100": [
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom",
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1",
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_client_js-_6cd00": [
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 		],
/******/ 		"node_modules_pnpm_react_18_2_0_node_modules_react_jsx-dev-runtime_js-_92801": [
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_react_18_2_0_node_modules_react_jsx-runtime_js-_d7b61": [
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_style_js-_4fcb1": [
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_index_js-_c94c1": [
/******/ 			"webpack/sharing/consume/default/react/react"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_router_js": [
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_script_js-_a9101": [
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_image_js-_2e2e1": [
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_link_js-_f0820": [
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_dynamic_js-_707f0": [
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1"
/******/ 		],
/******/ 		"node_modules_pnpm_next_14_2_3_react-dom_18_2_0_react_18_2_0_node_modules_next_head_js-_592f0": [
/******/ 			"webpack/sharing/consume/default/react/jsx-runtime/react/jsx-runtime?71b1"
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = function(chunkId, promises) {
/******/ 		__webpack_require__.federation.bundlerRuntime.consumes({
/******/ 		chunkMapping: chunkMapping,
/******/ 		installedModules: installedModules,
/******/ 		chunkId: chunkId,
/******/ 		moduleToHandlerMapping: moduleToHandlerMapping,
/******/ 		promises: promises,
/******/ 		webpackRequire:__webpack_require__
/******/ 		});
/******/ 	}
/******/ }();
/******/ 
/******/ }
);