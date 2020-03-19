/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_management/actions/fetchPageData.js":
/*!**************************************************!*\
  !*** ./src/_management/actions/fetchPageData.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar fetchPageData = function fetchPageData(request) {\n  return fetch(\"https://partnership-site-api.sjp.co.uk/page/why-choose-us\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return data;\n  })[\"catch\"](function (_ref) {\n    var message = _ref.message;\n    throw Error(message);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchPageData);\n\n//# sourceURL=webpack:///./src/_management/actions/fetchPageData.js?");

/***/ }),

/***/ "./src/_management/actions/hydrateApplication.js":
/*!*******************************************************!*\
  !*** ./src/_management/actions/hydrateApplication.js ***!
  \*******************************************************/
/*! exports provided: hydrateApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrateApplication\", function() { return hydrateApplication; });\n/* harmony import */ var _fetchPageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchPageData */ \"./src/_management/actions/fetchPageData.js\");\n\nvar hydrateApplication = function hydrateApplication(request) {\n  return Object(_fetchPageData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(request);\n};\n\n//# sourceURL=webpack:///./src/_management/actions/hydrateApplication.js?");

/***/ }),

/***/ "./src/_router/router.jsx":
/*!********************************!*\
  !*** ./src/_router/router.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/_router/routes.js\");\n //*  - ROUTING\n\n\n\n\nvar Router = function Router() {\n  return Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/_router/router.jsx?");

/***/ }),

/***/ "./src/_router/routes.js":
/*!*******************************!*\
  !*** ./src/_router/routes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: \"*\",\n  component: _client_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}]);\n\n//# sourceURL=webpack:///./src/_router/routes.js?");

/***/ }),

/***/ "./src/client/App.jsx":
/*!****************************!*\
  !*** ./src/client/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_errors_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_errors/_boundary */ \"./src/client/components/_errors/_boundary.jsx\");\n/* harmony import */ var _components_global_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/global/head */ \"./src/client/components/global/head.jsx\");\n/* harmony import */ var _components_global_route_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/global/route-change */ \"./src/client/components/global/route-change.jsx\");\n //* - COMPONENTS -\n\n\n\n\n\nvar AppClient = function AppClient() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_global_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_global_route_change__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppClient);\n\n//# sourceURL=webpack:///./src/client/App.jsx?");

/***/ }),

/***/ "./src/client/components/_errors/_boundary.jsx":
/*!*****************************************************!*\
  !*** ./src/client/components/_errors/_boundary.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar ErrorBoundary = /*#__PURE__*/function (_Component) {\n  _inherits(ErrorBoundary, _Component);\n\n  function ErrorBoundary(props) {\n    var _this;\n\n    _classCallCheck(this, ErrorBoundary);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n\n  _createClass(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, info) {\n      console.error(error);\n      console.info(info);\n      this.setState({\n        hasError: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.hasError) {\n        return null;\n      }\n\n      return this.props.children;\n    }\n  }]);\n\n  return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\n\n//# sourceURL=webpack:///./src/client/components/_errors/_boundary.jsx?");

/***/ }),

/***/ "./src/client/components/global/head.jsx":
/*!***********************************************!*\
  !*** ./src/client/components/global/head.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Head = function Head(_ref) {\n  var _og;\n\n  var _ref$description = _ref.description,\n      description = _ref$description === void 0 ? \"\" : _ref$description,\n      _ref$locale = _ref.locale,\n      locale = _ref$locale === void 0 ? \"\" : _ref$locale,\n      _ref$uri = _ref.uri,\n      url = _ref$uri === void 0 ? \"\" : _ref$uri,\n      _ref$root = _ref.root,\n      root = _ref$root === void 0 ? \"\" : _ref$root,\n      _ref$lang = _ref.lang,\n      lang = _ref$lang === void 0 ? \"en\" : _ref$lang,\n      _ref$message = _ref.message,\n      message = _ref$message === void 0 ? \"\" : _ref$message,\n      _ref$canonical = _ref.canonical,\n      canonical = _ref$canonical === void 0 ? \"\" : _ref$canonical,\n      _ref$keywords = _ref.keywords,\n      keywords = _ref$keywords === void 0 ? \"\" : _ref$keywords,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"\".concat(message) : _ref$title,\n      _ref$ogInfo = _ref.ogInfo,\n      ogInfo = _ref$ogInfo === void 0 ? {} : _ref$ogInfo;\n\n  var og = _objectSpread({\n    url: url,\n    locale: locale\n  }, ogInfo);\n\n  canonical = root + canonical;\n  og = Object.entries(og);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n    lang: \"\".concat(lang ? lang : \"en\")\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"\".concat(title ? \"\".concat(title, \" | Omron\") : \"Omron\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: description ? description : \"Omron Customer Experience Platform\"\n  }), keywords && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"keywords\",\n    content: keywords\n  }), canonical && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"canonical\",\n    href: canonical\n  }), ((_og = og) === null || _og === void 0 ? void 0 : _og.length) > 0 && og.map(function (_ref2) {\n    var _ref3 = _slicedToArray(_ref2, 2),\n        key = _ref3[0],\n        value = _ref3[1];\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      key: key,\n      property: \"og:\".concat(key),\n      content: value\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n//# sourceURL=webpack:///./src/client/components/global/head.jsx?");

/***/ }),

/***/ "./src/client/components/global/route-change.jsx":
/*!*******************************************************!*\
  !*** ./src/client/components/global/route-change.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar RouteChange = /*#__PURE__*/function (_Component) {\n  _inherits(RouteChange, _Component);\n\n  function RouteChange() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, RouteChange);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteChange)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"routeChange\", Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"])());\n\n    return _this;\n  }\n\n  _createClass(RouteChange, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var _prevProps$metdata;\n\n      var _El = this.routeChange.current,\n          props = this.props,\n          metdata = this.props.metdata;\n      var page = metdata === null || metdata === void 0 ? void 0 : metdata.title;\n      var prevPage = prevProps === null || prevProps === void 0 ? void 0 : (_prevProps$metdata = prevProps.metdata) === null || _prevProps$metdata === void 0 ? void 0 : _prevProps$metdata.title;\n      if (!page || page === prevPage) return; //* FOCUS / SCROLLTOP\n\n      if (_El) setTimeout(function () {\n        return _El.focus();\n      }, 250);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var metdata = this.props.metdata;\n      var page = metdata === null || metdata === void 0 ? void 0 : metdata.title;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        tabIndex: \"-1\",\n        ref: this.routeChange,\n        role: \"status\",\n        \"aria-live\": \"polite\",\n        \"aria-atomic\": \"true\",\n        className: \"visually--hidden\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"You are currently viewing the \", page, \" page.\"));\n    }\n  }]);\n\n  return RouteChange;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RouteChange);\n\n//# sourceURL=webpack:///./src/client/components/global/route-change.jsx?");

/***/ }),

/***/ "./src/server/App.jsx":
/*!****************************!*\
  !*** ./src/server/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_router/router */ \"./src/_router/router.jsx\");\n\n //* COMPONENTS\n\n\n\nvar AppServer = function AppServer(_ref) {\n  var path = _ref.path,\n      context = _ref.context,\n      store = _ref.store;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppServer);\n\n//# sourceURL=webpack:///./src/server/App.jsx?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_static_gzip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-static-gzip */ \"express-static-gzip\");\n/* harmony import */ var express_static_gzip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_static_gzip__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rendering_render_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rendering/render-app */ \"./src/server/rendering/render-app.js\");\n\n\n\n\n\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = 3000;\nserver.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\nserver.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\nserver.use(\"/\", express_static_gzip__WEBPACK_IMPORTED_MODULE_3___default()(\"public\", {\n  index: false,\n  enableBrotli: true,\n  orderPreference: [\"br\", \"gz\"]\n}));\nserver.get(\"*\", function (req, res) {\n  if (!res || !res) return;\n  Object(_rendering_render_app__WEBPACK_IMPORTED_MODULE_4__[\"renderApp\"])(req, res);\n});\nserver.listen(port, function () {\n  return console.info(\"Coming to you live via http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/rendering/document/body.js":
/*!***********************************************!*\
  !*** ./src/server/rendering/document/body.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Body = function Body(markup) {\n  return \"\\n  <body>\\n    \".concat(noScriptNotice(), \"\\n    <main id=\\\"root\\\">\").concat(markup, \"</main>\\n    <div id=\\\"modal-root\\\"></div>\\n  </body>\\n\");\n};\n\nvar noScriptNotice = function noScriptNotice() {\n  return \"\\n  <noscript class=\\\"notification  notification--inline\\\">\\n    <div class=\\\"notification__inner\\\">\\n      <span class=\\\"icon\\\"><i class=\\\"fa-icon  fas  fa-exclamation-circle\\\"></i></span>\\n      <p class=\\\"notification__description\\\">\\n        Please <a href=\\\"https://www.enable-javascript.com/\\\"  target=\\\"_blank\\\" rel=\\\"noopener\\\">enable JavaScript</a> to activate all application features.\\n      </p>\\n    </div>\\n  </noscript>\\n\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\n//# sourceURL=webpack:///./src/server/rendering/document/body.js?");

/***/ }),

/***/ "./src/server/rendering/document/head.js":
/*!***********************************************!*\
  !*** ./src/server/rendering/document/head.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);\n//* DEPs.\n\n\nvar Head = function Head(helmet, data, environment) {\n  return \"<head>\\n  \".concat(Meta(helmet), \"\\n  \").concat(Preloads(), \"\\n  \").concat(Scripts(data, environment), \"\\n  \").concat(StyleSheets(), \"\\n  <link rel=\\\"shortcut icon\\\" href=\\\"/favicon.ico\\\" />\\n</head>\");\n};\n\nvar Meta = function Meta(helmet) {\n  return \"\\n  \".concat(helmet.title.toString(), \"\\n  \").concat(helmet.meta.toString(), \"\\n  <meta charset=\\\"utf-8\\\" />\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width\\\" />\\n  <meta name=\\\"theme-color\\\" content=\\\"\\\" />\\n\");\n};\n\nvar PreConnects = function PreConnects() {\n  return \"\";\n};\n\nvar Preloads = function Preloads() {\n  return \"\\n  <link rel=\\\"preload\\\" href=\\\"/vendor.chunk.js\\\" as=\\\"script\\\" importance=\\\"high\\\" />\\n  <link rel=\\\"preload\\\" href=\\\"/app.js\\\" as=\\\"script\\\" importance=\\\"high\\\" />\\n\";\n};\n\nvar Scripts = function Scripts(data, environment) {\n  return \" \\n  <script defer src=\\\"/vendor.chunk.js\\\"></script>\\n  <script defer src=\\\"/app.js\\\"></script>\\n  <script defer type=\\\"text/javascript\\\" src=\\\"https://maps.googleapis.com/maps/api/js?key=&libraries=places\\\"></script>\\n  <script id=\\\"initialData\\\">\\n    window.__GEP_COMPOSITION_DTA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(data), \";\\n  </script>\\n\");\n};\n\nvar StyleSheets = function StyleSheets() {\n  return \"\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n//# sourceURL=webpack:///./src/server/rendering/document/head.js?");

/***/ }),

/***/ "./src/server/rendering/document/index.js":
/*!************************************************!*\
  !*** ./src/server/rendering/document/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ \"./src/server/rendering/document/head.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ \"./src/server/rendering/document/body.js\");\n\n\n\nvar Document = function Document(helmet, markup, data) {\n  return \"<!DOCTYPE html>\\n    <html class=\\\"no-js\\\" \".concat(helmet.htmlAttributes.toString(), \">\\n      \").concat(Object(_head__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(helmet, data), \"\\n      \").concat(Object(_body__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(markup), \"\\n    <script>\\n      document.documentElement.classList.remove('no-js');\\n      document.documentElement.classList.add('js');\\n    </script>\\n  </html>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Document);\n\n//# sourceURL=webpack:///./src/server/rendering/document/index.js?");

/***/ }),

/***/ "./src/server/rendering/render-app.js":
/*!********************************************!*\
  !*** ./src/server/rendering/render-app.js ***!
  \********************************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderApp\", function() { return renderApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _management_actions_hydrateApplication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_management/actions/hydrateApplication */ \"./src/_management/actions/hydrateApplication.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ \"./src/server/App.jsx\");\n/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document */ \"./src/server/rendering/document/index.js\");\n\n\n\n //* - COMPONENTS\n\n\n\nvar renderApp = function renderApp(req, res) {\n  Object(_management_actions_hydrateApplication__WEBPACK_IMPORTED_MODULE_3__[\"hydrateApplication\"])(req).then(function (data) {\n    var context = {};\n    var markup = \"\";\n\n    try {\n      markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        path: req.path,\n        context: context,\n        store: data\n      }));\n    } catch (error) {\n      markup = \"\";\n    }\n\n    var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"].renderStatic();\n    var document = Object(_document__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(helmet, markup, data);\n    res.send(document);\n  })[\"catch\"](function (error) {\n    console.error(\"RENDER APP: \", error.message);\n  });\n};\n\n//# sourceURL=webpack:///./src/server/rendering/render-app.js?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-static-gzip":
/*!**************************************!*\
  !*** external "express-static-gzip" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-static-gzip\");\n\n//# sourceURL=webpack:///external_%22express-static-gzip%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });