/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _defineProperty)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./src/components/searchQueryHandler.js":
/*!**********************************************!*\
  !*** ./src/components/searchQueryHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchQueryHandler)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_queryParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/queryParam */ \"./src/helpers/queryParam.js\");\n\n\n\n\n\n\nvar SearchQueryHandler = /*#__PURE__*/function () {\n  function SearchQueryHandler() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SearchQueryHandler);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$searchInput\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.main-navbar .search-form .search-input'));\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SearchQueryHandler, [{\n    key: \"run\",\n    value: function run() {\n      this.loadState();\n      this.listenEvent();\n    }\n  }, {\n    key: \"loadState\",\n    value: function loadState() {\n      var _parseCurrentParam = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_4__.parseCurrentParam)(),\n          appSearch = _parseCurrentParam.appSearch;\n\n      this.$searchInput.val(appSearch);\n    }\n  }, {\n    key: \"listenEvent\",\n    value: function listenEvent() {\n      this.$searchInput.keypress(function (event) {\n        var value = event.target.value;\n        var queryObj = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_4__.parseCurrentParam)();\n        queryObj.appSearch = value;\n        var queryStr = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_4__.stringifyQuery)(queryObj);\n        (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_4__.updateUrl)(queryStr);\n\n        if (event.which === 13) {\n          event.preventDefault();\n          console.log(window.location.href);\n          window.location.href = window.location.href;\n        }\n      });\n    }\n  }]);\n\n  return SearchQueryHandler;\n}();\n\n\n\n//# sourceURL=webpack://mvcwebapp/./src/components/searchQueryHandler.js?");

/***/ }),

/***/ "./src/helpers/handleCheckboxChange.js":
/*!*********************************************!*\
  !*** ./src/helpers/handleCheckboxChange.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleCheckboxChange\": () => (/* binding */ handleCheckboxChange)\n/* harmony export */ });\nfunction handleCheckboxChange($checkboxes, values) {\n  $checkboxes.change(function (event) {\n    if (event.target.checked) {\n      values.add(event.target.value);\n    } else {\n      values[\"delete\"](event.target.value);\n    }\n  });\n}\n\n//# sourceURL=webpack://mvcwebapp/./src/helpers/handleCheckboxChange.js?");

/***/ }),

/***/ "./src/helpers/handleNumberInputChange.js":
/*!************************************************!*\
  !*** ./src/helpers/handleNumberInputChange.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNumberInputChange\": () => (/* binding */ handleNumberInputChange)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction handleNumberInputChange($input, output) {\n  $input.change(function (event) {\n    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(output) === 'object') {\n      output.value = event.target.value;\n    } else {\n      output = event.target.value;\n    }\n  });\n}\n\n//# sourceURL=webpack://mvcwebapp/./src/helpers/handleNumberInputChange.js?");

/***/ }),

/***/ "./src/helpers/loadCheckboxState.js":
/*!******************************************!*\
  !*** ./src/helpers/loadCheckboxState.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCheckboxState\": () => (/* binding */ loadCheckboxState)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction loadCheckboxState($checkboxes, values) {\n  $checkboxes.each(function (index, checkbox) {\n    var $checkbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()(checkbox);\n    var value = $checkbox.val();\n\n    if (values && values.includes(value)) {\n      $checkbox.prop('checked', true).change();\n    } else {\n      $checkbox.prop('checked', false).change();\n    }\n  });\n}\n\n//# sourceURL=webpack://mvcwebapp/./src/helpers/loadCheckboxState.js?");

/***/ }),

/***/ "./src/helpers/loadInputState.js":
/*!***************************************!*\
  !*** ./src/helpers/loadInputState.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadInputState\": () => (/* binding */ loadInputState)\n/* harmony export */ });\nfunction loadInputState($input, value) {\n  $input.val(value).change();\n}\n\n//# sourceURL=webpack://mvcwebapp/./src/helpers/loadInputState.js?");

/***/ }),

/***/ "./src/helpers/queryParam.js":
/*!***********************************!*\
  !*** ./src/helpers/queryParam.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringifyQuery\": () => (/* binding */ stringifyQuery),\n/* harmony export */   \"updateUrl\": () => (/* binding */ updateUrl),\n/* harmony export */   \"parseCurrentParam\": () => (/* binding */ parseCurrentParam)\n/* harmony export */ });\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n\nfunction stringifyQuery(query) {\n  var queryStr = '?';\n  queryStr += query_string__WEBPACK_IMPORTED_MODULE_0__.stringify(query, {\n    arrayFormat: 'bracket'\n  });\n  return queryStr;\n}\nfunction updateUrl(queryStr) {\n  window.history.replaceState(null, null, queryStr);\n}\nfunction parseCurrentParam() {\n  if (!window) {\n    console.error('Window is undefined | null');\n    return;\n  }\n\n  return query_string__WEBPACK_IMPORTED_MODULE_0__.parse(window.location.search, {\n    arrayFormat: 'bracket'\n  });\n}\n\n//# sourceURL=webpack://mvcwebapp/./src/helpers/queryParam.js?");

/***/ }),

/***/ "./src/views/products.js":
/*!*******************************!*\
  !*** ./src/views/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_handleCheckboxChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/handleCheckboxChange */ \"./src/helpers/handleCheckboxChange.js\");\n/* harmony import */ var _helpers_handleNumberInputChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/handleNumberInputChange */ \"./src/helpers/handleNumberInputChange.js\");\n/* harmony import */ var _helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/queryParam */ \"./src/helpers/queryParam.js\");\n/* harmony import */ var _helpers_loadCheckboxState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/loadCheckboxState */ \"./src/helpers/loadCheckboxState.js\");\n/* harmony import */ var _helpers_loadInputState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/loadInputState */ \"./src/helpers/loadInputState.js\");\n/* harmony import */ var _components_searchQueryHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/searchQueryHandler */ \"./src/components/searchQueryHandler.js\");\n\n\n\n\n\n\n\n\n\n\nfunction run() {\n  var filterHandler = new SideFilterHandler();\n  filterHandler.run();\n  var productViewSwitch = new ProductViewSwitch();\n  productViewSwitch.run();\n  var searchQueryHandler = new _components_searchQueryHandler__WEBPACK_IMPORTED_MODULE_9__.default();\n  searchQueryHandler.run();\n}\n\nvar ProductViewSwitch = /*#__PURE__*/function () {\n  function ProductViewSwitch() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ProductViewSwitch);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$grid\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.product-view-switch .grid-filter'));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$list\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.product-view-switch .list-filter'));\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ProductViewSwitch, [{\n    key: \"run\",\n    value: function run() {\n      this.listenViewChange(this.$grid);\n      this.listenViewChange(this.$list);\n      this.loadState();\n    }\n  }, {\n    key: \"loadState\",\n    value: function loadState() {\n      var _parseCurrentParam = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.parseCurrentParam)(),\n          productViewType = _parseCurrentParam.productViewType;\n\n      if (productViewType === 'list') {\n        this.$list.addClass('active');\n        this.$grid.removeClass('active');\n      } else {\n        this.$grid.addClass('active');\n        this.$list.removeClass('active');\n      }\n    }\n  }, {\n    key: \"listenViewChange\",\n    value: function listenViewChange($element) {\n      $element.click(function () {\n        var value = $element.hasClass('list-filter') ? 'list' : 'grid';\n        var queryObj = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.parseCurrentParam)();\n        queryObj.productViewType = value;\n        var queryStr = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.stringifyQuery)(queryObj);\n        (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.updateUrl)(queryStr);\n        window.location.href = window.location.href;\n      });\n    }\n  }]);\n\n  return ProductViewSwitch;\n}(); // Side Filter\n\n\nvar SideFilterHandler = /*#__PURE__*/function () {\n  function SideFilterHandler() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SideFilterHandler);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"brandSet\", new Set());\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"categorySet\", new Set());\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"minValue\", {\n      value: undefined\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"maxValue\", {\n      value: undefined\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$form\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('#side-filters-form'));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$applyBtn\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.side-filters .js-btn-submit'));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$brandFilterCheckboxes\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.brand-filters input[type=checkbox]'));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$categoryFilterCheckboxes\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.category-filters input[type=checkbox]'));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$minInput\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.min-max-filters input#min-price'));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"$maxInput\", jquery__WEBPACK_IMPORTED_MODULE_3___default()('.min-max-filters input#max-price'));\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SideFilterHandler, [{\n    key: \"run\",\n    value: function run() {\n      this.listenToFilters();\n      this.updateTheFilters();\n      this.listenToSubmitBtn();\n    }\n  }, {\n    key: \"updateTheFilters\",\n    value: function updateTheFilters() {\n      // Get query param\n      var params = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.parseCurrentParam)();\n      var brands = params.brands,\n          categories = params.categories,\n          min = params.min,\n          max = params.max;\n      min = isNaN(Number(min)) ? undefined : Number(min);\n      max = isNaN(Number(max)) ? undefined : Number(max);\n      (0,_helpers_loadCheckboxState__WEBPACK_IMPORTED_MODULE_7__.loadCheckboxState)(this.$brandFilterCheckboxes, brands);\n      (0,_helpers_loadCheckboxState__WEBPACK_IMPORTED_MODULE_7__.loadCheckboxState)(this.$categoryFilterCheckboxes, categories);\n      (0,_helpers_loadInputState__WEBPACK_IMPORTED_MODULE_8__.loadInputState)(this.$minInput, min);\n      (0,_helpers_loadInputState__WEBPACK_IMPORTED_MODULE_8__.loadInputState)(this.$maxInput, max);\n    }\n  }, {\n    key: \"listenToSubmitBtn\",\n    value: function listenToSubmitBtn() {\n      var _this = this;\n\n      this.$applyBtn.click(function (event) {\n        event.preventDefault();\n        var queryObj = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.parseCurrentParam)();\n        queryObj.brands = Array.from(_this.brandSet);\n        queryObj.categories = Array.from(_this.categorySet);\n        queryObj.min = _this.minValue.value;\n        queryObj.max = _this.maxValue.value;\n        var queryStr = (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.stringifyQuery)(queryObj);\n        (0,_helpers_queryParam__WEBPACK_IMPORTED_MODULE_6__.updateUrl)(queryStr);\n        window.location.href = window.location.href;\n      });\n    }\n  }, {\n    key: \"listenToFilters\",\n    value: function listenToFilters() {\n      (0,_helpers_handleCheckboxChange__WEBPACK_IMPORTED_MODULE_4__.handleCheckboxChange)(this.$brandFilterCheckboxes, this.brandSet);\n      (0,_helpers_handleCheckboxChange__WEBPACK_IMPORTED_MODULE_4__.handleCheckboxChange)(this.$categoryFilterCheckboxes, this.categorySet);\n      (0,_helpers_handleNumberInputChange__WEBPACK_IMPORTED_MODULE_5__.handleNumberInputChange)(this.$minInput, this.minValue);\n      (0,_helpers_handleNumberInputChange__WEBPACK_IMPORTED_MODULE_5__.handleNumberInputChange)(this.$maxInput, this.maxValue);\n    }\n  }]);\n\n  return SideFilterHandler;\n}();\n\n//# sourceURL=webpack://mvcwebapp/./src/views/products.js?");

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\nvar token = '%[a-f0-9]{2}';\nvar singleMatcher = new RegExp(token, 'gi');\nvar multiMatcher = new RegExp('(' + token + ')+', 'gi');\n\nfunction decodeComponents(components, split) {\n\ttry {\n\t\t// Try to decode the entire string first\n\t\treturn decodeURIComponent(components.join(''));\n\t} catch (err) {\n\t\t// Do nothing\n\t}\n\n\tif (components.length === 1) {\n\t\treturn components;\n\t}\n\n\tsplit = split || 1;\n\n\t// Split the array in 2 parts\n\tvar left = components.slice(0, split);\n\tvar right = components.slice(split);\n\n\treturn Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));\n}\n\nfunction decode(input) {\n\ttry {\n\t\treturn decodeURIComponent(input);\n\t} catch (err) {\n\t\tvar tokens = input.match(singleMatcher);\n\n\t\tfor (var i = 1; i < tokens.length; i++) {\n\t\t\tinput = decodeComponents(tokens, i).join('');\n\n\t\t\ttokens = input.match(singleMatcher);\n\t\t}\n\n\t\treturn input;\n\t}\n}\n\nfunction customDecodeURIComponent(input) {\n\t// Keep track of all the replacements and prefill the map with the `BOM`\n\tvar replaceMap = {\n\t\t'%FE%FF': '\\uFFFD\\uFFFD',\n\t\t'%FF%FE': '\\uFFFD\\uFFFD'\n\t};\n\n\tvar match = multiMatcher.exec(input);\n\twhile (match) {\n\t\ttry {\n\t\t\t// Decode as big chunks as possible\n\t\t\treplaceMap[match[0]] = decodeURIComponent(match[0]);\n\t\t} catch (err) {\n\t\t\tvar result = decode(match[0]);\n\n\t\t\tif (result !== match[0]) {\n\t\t\t\treplaceMap[match[0]] = result;\n\t\t\t}\n\t\t}\n\n\t\tmatch = multiMatcher.exec(input);\n\t}\n\n\t// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else\n\treplaceMap['%C2'] = '\\uFFFD';\n\n\tvar entries = Object.keys(replaceMap);\n\n\tfor (var i = 0; i < entries.length; i++) {\n\t\t// Replace all decoded components\n\t\tvar key = entries[i];\n\t\tinput = input.replace(new RegExp(key, 'g'), replaceMap[key]);\n\t}\n\n\treturn input;\n}\n\nmodule.exports = function (encodedURI) {\n\tif (typeof encodedURI !== 'string') {\n\t\tthrow new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');\n\t}\n\n\ttry {\n\t\tencodedURI = encodedURI.replace(/\\+/g, ' ');\n\n\t\t// Try the built in decoder first\n\t\treturn decodeURIComponent(encodedURI);\n\t} catch (err) {\n\t\t// Fallback to a more advanced decoder\n\t\treturn customDecodeURIComponent(encodedURI);\n\t}\n};\n\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/decode-uri-component/index.js?");

/***/ }),

/***/ "./node_modules/filter-obj/index.js":
/*!******************************************!*\
  !*** ./node_modules/filter-obj/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (obj, predicate) {\n\tvar ret = {};\n\tvar keys = Object.keys(obj);\n\tvar isArr = Array.isArray(predicate);\n\n\tfor (var i = 0; i < keys.length; i++) {\n\t\tvar key = keys[i];\n\t\tvar val = obj[key];\n\n\t\tif (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {\n\t\t\tret[key] = val;\n\t\t}\n\t}\n\n\treturn ret;\n};\n\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/filter-obj/index.js?");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nconst strictUriEncode = __webpack_require__(/*! strict-uri-encode */ \"./node_modules/strict-uri-encode/index.js\");\nconst decodeComponent = __webpack_require__(/*! decode-uri-component */ \"./node_modules/decode-uri-component/index.js\");\nconst splitOnFirst = __webpack_require__(/*! split-on-first */ \"./node_modules/split-on-first/index.js\");\nconst filterObject = __webpack_require__(/*! filter-obj */ \"./node_modules/filter-obj/index.js\");\n\nconst isNullOrUndefined = value => value === null || value === undefined;\n\nconst encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');\n\nfunction encoderForArrayFormat(options) {\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn key => (result, value) => {\n\t\t\t\tconst index = result.length;\n\n\t\t\t\tif (\n\t\t\t\t\tvalue === undefined ||\n\t\t\t\t\t(options.skipNull && value === null) ||\n\t\t\t\t\t(options.skipEmptyString && value === '')\n\t\t\t\t) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, [encode(key, options), '[', index, ']'].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [\n\t\t\t\t\t...result,\n\t\t\t\t\t[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')\n\t\t\t\t];\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (\n\t\t\t\t\tvalue === undefined ||\n\t\t\t\t\t(options.skipNull && value === null) ||\n\t\t\t\t\t(options.skipEmptyString && value === '')\n\t\t\t\t) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, [encode(key, options), '[]'].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [...result, [encode(key, options), '[]=', encode(value, options)].join('')];\n\t\t\t};\n\n\t\tcase 'comma':\n\t\tcase 'separator':\n\t\tcase 'bracket-separator': {\n\t\t\tconst keyValueSep = options.arrayFormat === 'bracket-separator' ?\n\t\t\t\t'[]=' :\n\t\t\t\t'=';\n\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (\n\t\t\t\t\tvalue === undefined ||\n\t\t\t\t\t(options.skipNull && value === null) ||\n\t\t\t\t\t(options.skipEmptyString && value === '')\n\t\t\t\t) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\t// Translate null to an empty string so that it doesn't serialize as 'null'\n\t\t\t\tvalue = value === null ? '' : value;\n\n\t\t\t\tif (result.length === 0) {\n\t\t\t\t\treturn [[encode(key, options), keyValueSep, encode(value, options)].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [[result, encode(value, options)].join(options.arrayFormatSeparator)];\n\t\t\t};\n\t\t}\n\n\t\tdefault:\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (\n\t\t\t\t\tvalue === undefined ||\n\t\t\t\t\t(options.skipNull && value === null) ||\n\t\t\t\t\t(options.skipEmptyString && value === '')\n\t\t\t\t) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, encode(key, options)];\n\t\t\t\t}\n\n\t\t\t\treturn [...result, [encode(key, options), '=', encode(value, options)].join('')];\n\t\t\t};\n\t}\n}\n\nfunction parserForArrayFormat(options) {\n\tlet result;\n\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /\\[(\\d*)\\]$/.exec(key);\n\n\t\t\t\tkey = key.replace(/\\[\\d*\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = {};\n\t\t\t\t}\n\n\t\t\t\taccumulator[key][result[1]] = value;\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /(\\[\\])$/.exec(key);\n\t\t\t\tkey = key.replace(/\\[\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = [value];\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\n\t\tcase 'comma':\n\t\tcase 'separator':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tconst isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);\n\t\t\t\tconst isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));\n\t\t\t\tvalue = isEncodedArray ? decode(value, options) : value;\n\t\t\t\tconst newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);\n\t\t\t\taccumulator[key] = newValue;\n\t\t\t};\n\n\t\tcase 'bracket-separator':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tconst isArray = /(\\[\\])$/.test(key);\n\t\t\t\tkey = key.replace(/\\[\\]$/, '');\n\n\t\t\t\tif (!isArray) {\n\t\t\t\t\taccumulator[key] = value ? decode(value, options) : value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tconst arrayValue = value === null ?\n\t\t\t\t\t[] :\n\t\t\t\t\tvalue.split(options.arrayFormatSeparator).map(item => decode(item, options));\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = arrayValue;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], arrayValue);\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\t}\n}\n\nfunction validateArrayFormatSeparator(value) {\n\tif (typeof value !== 'string' || value.length !== 1) {\n\t\tthrow new TypeError('arrayFormatSeparator must be single character string');\n\t}\n}\n\nfunction encode(value, options) {\n\tif (options.encode) {\n\t\treturn options.strict ? strictUriEncode(value) : encodeURIComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction decode(value, options) {\n\tif (options.decode) {\n\t\treturn decodeComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction keysSorter(input) {\n\tif (Array.isArray(input)) {\n\t\treturn input.sort();\n\t}\n\n\tif (typeof input === 'object') {\n\t\treturn keysSorter(Object.keys(input))\n\t\t\t.sort((a, b) => Number(a) - Number(b))\n\t\t\t.map(key => input[key]);\n\t}\n\n\treturn input;\n}\n\nfunction removeHash(input) {\n\tconst hashStart = input.indexOf('#');\n\tif (hashStart !== -1) {\n\t\tinput = input.slice(0, hashStart);\n\t}\n\n\treturn input;\n}\n\nfunction getHash(url) {\n\tlet hash = '';\n\tconst hashStart = url.indexOf('#');\n\tif (hashStart !== -1) {\n\t\thash = url.slice(hashStart);\n\t}\n\n\treturn hash;\n}\n\nfunction extract(input) {\n\tinput = removeHash(input);\n\tconst queryStart = input.indexOf('?');\n\tif (queryStart === -1) {\n\t\treturn '';\n\t}\n\n\treturn input.slice(queryStart + 1);\n}\n\nfunction parseValue(value, options) {\n\tif (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {\n\t\tvalue = Number(value);\n\t} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {\n\t\tvalue = value.toLowerCase() === 'true';\n\t}\n\n\treturn value;\n}\n\nfunction parse(query, options) {\n\toptions = Object.assign({\n\t\tdecode: true,\n\t\tsort: true,\n\t\tarrayFormat: 'none',\n\t\tarrayFormatSeparator: ',',\n\t\tparseNumbers: false,\n\t\tparseBooleans: false\n\t}, options);\n\n\tvalidateArrayFormatSeparator(options.arrayFormatSeparator);\n\n\tconst formatter = parserForArrayFormat(options);\n\n\t// Create an object with no prototype\n\tconst ret = Object.create(null);\n\n\tif (typeof query !== 'string') {\n\t\treturn ret;\n\t}\n\n\tquery = query.trim().replace(/^[?#&]/, '');\n\n\tif (!query) {\n\t\treturn ret;\n\t}\n\n\tfor (const param of query.split('&')) {\n\t\tif (param === '') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tlet [key, value] = splitOnFirst(options.decode ? param.replace(/\\+/g, ' ') : param, '=');\n\n\t\t// Missing `=` should be `null`:\n\t\t// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\t\tvalue = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);\n\t\tformatter(decode(key, options), value, ret);\n\t}\n\n\tfor (const key of Object.keys(ret)) {\n\t\tconst value = ret[key];\n\t\tif (typeof value === 'object' && value !== null) {\n\t\t\tfor (const k of Object.keys(value)) {\n\t\t\t\tvalue[k] = parseValue(value[k], options);\n\t\t\t}\n\t\t} else {\n\t\t\tret[key] = parseValue(value, options);\n\t\t}\n\t}\n\n\tif (options.sort === false) {\n\t\treturn ret;\n\t}\n\n\treturn (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {\n\t\tconst value = ret[key];\n\t\tif (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {\n\t\t\t// Sort object keys, not values\n\t\t\tresult[key] = keysSorter(value);\n\t\t} else {\n\t\t\tresult[key] = value;\n\t\t}\n\n\t\treturn result;\n\t}, Object.create(null));\n}\n\nexports.extract = extract;\nexports.parse = parse;\n\nexports.stringify = (object, options) => {\n\tif (!object) {\n\t\treturn '';\n\t}\n\n\toptions = Object.assign({\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none',\n\t\tarrayFormatSeparator: ','\n\t}, options);\n\n\tvalidateArrayFormatSeparator(options.arrayFormatSeparator);\n\n\tconst shouldFilter = key => (\n\t\t(options.skipNull && isNullOrUndefined(object[key])) ||\n\t\t(options.skipEmptyString && object[key] === '')\n\t);\n\n\tconst formatter = encoderForArrayFormat(options);\n\n\tconst objectCopy = {};\n\n\tfor (const key of Object.keys(object)) {\n\t\tif (!shouldFilter(key)) {\n\t\t\tobjectCopy[key] = object[key];\n\t\t}\n\t}\n\n\tconst keys = Object.keys(objectCopy);\n\n\tif (options.sort !== false) {\n\t\tkeys.sort(options.sort);\n\t}\n\n\treturn keys.map(key => {\n\t\tconst value = object[key];\n\n\t\tif (value === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (value === null) {\n\t\t\treturn encode(key, options);\n\t\t}\n\n\t\tif (Array.isArray(value)) {\n\t\t\tif (value.length === 0 && options.arrayFormat === 'bracket-separator') {\n\t\t\t\treturn encode(key, options) + '[]';\n\t\t\t}\n\n\t\t\treturn value\n\t\t\t\t.reduce(formatter(key), [])\n\t\t\t\t.join('&');\n\t\t}\n\n\t\treturn encode(key, options) + '=' + encode(value, options);\n\t}).filter(x => x.length > 0).join('&');\n};\n\nexports.parseUrl = (url, options) => {\n\toptions = Object.assign({\n\t\tdecode: true\n\t}, options);\n\n\tconst [url_, hash] = splitOnFirst(url, '#');\n\n\treturn Object.assign(\n\t\t{\n\t\t\turl: url_.split('?')[0] || '',\n\t\t\tquery: parse(extract(url), options)\n\t\t},\n\t\toptions && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}\n\t);\n};\n\nexports.stringifyUrl = (object, options) => {\n\toptions = Object.assign({\n\t\tencode: true,\n\t\tstrict: true,\n\t\t[encodeFragmentIdentifier]: true\n\t}, options);\n\n\tconst url = removeHash(object.url).split('?')[0] || '';\n\tconst queryFromUrl = exports.extract(object.url);\n\tconst parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});\n\n\tconst query = Object.assign(parsedQueryFromUrl, object.query);\n\tlet queryString = exports.stringify(query, options);\n\tif (queryString) {\n\t\tqueryString = `?${queryString}`;\n\t}\n\n\tlet hash = getHash(object.url);\n\tif (object.fragmentIdentifier) {\n\t\thash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;\n\t}\n\n\treturn `${url}${queryString}${hash}`;\n};\n\nexports.pick = (input, filter, options) => {\n\toptions = Object.assign({\n\t\tparseFragmentIdentifier: true,\n\t\t[encodeFragmentIdentifier]: false\n\t}, options);\n\n\tconst {url, query, fragmentIdentifier} = exports.parseUrl(input, options);\n\treturn exports.stringifyUrl({\n\t\turl,\n\t\tquery: filterObject(query, filter),\n\t\tfragmentIdentifier\n\t}, options);\n};\n\nexports.exclude = (input, filter, options) => {\n\tconst exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);\n\n\treturn exports.pick(input, exclusionFilter, options);\n};\n\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/query-string/index.js?");

/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = (string, separator) => {\n\tif (!(typeof string === 'string' && typeof separator === 'string')) {\n\t\tthrow new TypeError('Expected the arguments to be of type `string`');\n\t}\n\n\tif (separator === '') {\n\t\treturn [string];\n\t}\n\n\tconst separatorIndex = string.indexOf(separator);\n\n\tif (separatorIndex === -1) {\n\t\treturn [string];\n\t}\n\n\treturn [\n\t\tstring.slice(0, separatorIndex),\n\t\tstring.slice(separatorIndex + separator.length)\n\t];\n};\n\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/split-on-first/index.js?");

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nmodule.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);\n\n\n//# sourceURL=webpack://mvcwebapp/./node_modules/strict-uri-encode/index.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/products.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});