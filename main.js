/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Bubble Bash.otf */ \"./src/assets/fonts/Bubble Bash.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Cooper-Medium.ttf */ \"./src/assets/fonts/Cooper-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/ZingRustDemo-Base.otf */ \"./src/assets/fonts/ZingRustDemo-Base.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    background-color: #FEF2E4;\n    font-family: 'Zing';\n}\n\n@font-face {\n    font-family: 'Bubble';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: 'Cooper';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n@font-face {\n    font-family: 'Zing';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\nheader {\n    height: 20%;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n\n#header-logo img {\n    height: 20vh;\n}\n\nheader button {\n    height: 10vh;\n    text-decoration: none;\n    all: unset;\n    cursor: pointer;\n    font-family: 'Bubble';\n    font-size: 2rem;\n    color: #7da87b;\n}\n\nbutton:hover {\n    transform: scale(1.1);\n}\n\n#content {\n    opacity: 0;\n    transform: translateY(20px);\n    animation: fadeInUp 0.6s ease-out forwards;\n}\n\n@keyframes fadeInUp {\n    to {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\n#landing-page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 75vh;\n    width: 100vw;\n}\n\n#about-header, #about-content{\n    font-family: 'Zing';\n}\n\n.coming-soon-container {\n    height: 75vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Zing';\n}\n\n#about-page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n\n#about-left {\n    width: 50vw;\n    font-size: 1.25rem;\n}\n\n#about-img-container {\n    height: 80vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#about-img-container img {\n    aspect-ratio: 1 / 1;\n    max-height: 80%;\n    border: 10px solid black;\n    border-radius : 30px;\n}\n\n#grid-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100vw;\n    padding: 2rem;\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 525px);\n    gap: 2rem;\n    width: 100%;\n    justify-content: center;\n}\n\n.menu-item {\n    border: 2px solid black;\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 1rem;\n}\n\n.menu-item img {\n    aspect-ratio: 1 / 1;\n    height: 200px;\n    border-radius: 10px;\n    display: block;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_images_hayesPeople_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/hayesPeople.png */ \"./src/assets/images/hayesPeople.png\");\n\n\nfunction loadAbout(container) {\n    const aboutPage = document.createElement('div');\n    aboutPage.id = 'about-page';\n    container.appendChild(aboutPage);\n\n    const aboutLeft = document.createElement('div');\n    aboutLeft.id = 'about-left';\n    aboutPage.appendChild(aboutLeft);\n\n    const aboutTextHeader = document.createElement('h1');\n    aboutTextHeader.id = 'about-header'\n    aboutTextHeader.textContent = 'About Us'\n    aboutLeft.appendChild(aboutTextHeader);\n\n    const aboutTextContent = document.createElement('p');\n    aboutTextContent.id = 'about-content';\n    aboutTextContent.innerHTML = `\n    <p>Welcome to Hayes, where good burgers, good vibes, and good people come together.</p>\n\n    <p>Tucked into a cozy corner of the neighborhood, Hayes is a small shop with big flavor. We’re not here to reinvent the wheel, we’re here to make sure it’s grilled to perfection, stacked high, and served with a side of nostalgia.</p>\n    <br>\n    <p>We built Hayes for the community. For the regulars who know their order by heart. For the kids riding up on bikes. For anyone craving a burger that’s just done right. No gimmicks, no shortcuts. Just honest ingredients, scratch-made sauces, and that golden sear that hits different every time.</p>\n    <br>\n    <p>At Hayes, we keep it simple:<br>\n    Burgers. Fries. Sodas.<br>\n    Classic American staples, made with care and loaded with flavor.</p>\n    <br>\n    <p>Whether you're grabbing a bite after work, bringing the crew for lunch, or just want a spot that feels like home—Hayes is your place. We’re proud to be part of this community, one burger at a time.</p>\n    `\n    aboutLeft.appendChild(aboutTextContent);\n\n    const aboutRight = document.createElement('div');\n    aboutRight.id = 'about-right';\n    aboutPage.appendChild(aboutRight);\n\n    const aboutImgContainer = document.createElement('div');\n    aboutImgContainer.id = 'about-img-container';\n    aboutPage.appendChild(aboutImgContainer);\n\n    const aboutImg = new Image();\n    aboutImg.src = _assets_images_hayesPeople_png__WEBPACK_IMPORTED_MODULE_0__;\n    aboutImgContainer.appendChild(aboutImg);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/assets/fonts/Bubble Bash.otf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Bubble Bash.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"17e3ea63bd01d9c21908.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/Bubble_Bash.otf?\n}");

/***/ }),

/***/ "./src/assets/fonts/Cooper-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Cooper-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"460c8aa42855c4747a2e.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/Cooper-Medium.ttf?\n}");

/***/ }),

/***/ "./src/assets/fonts/ZingRustDemo-Base.otf":
/*!************************************************!*\
  !*** ./src/assets/fonts/ZingRustDemo-Base.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7c6dd80d820400a6ab1d.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/ZingRustDemo-Base.otf?\n}");

/***/ }),

/***/ "./src/assets/images/hayesBurger.png":
/*!*******************************************!*\
  !*** ./src/assets/images/hayesBurger.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9c6300ac524dc93361dc.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/hayesBurger.png?\n}");

/***/ }),

/***/ "./src/assets/images/hayesLogo.png":
/*!*****************************************!*\
  !*** ./src/assets/images/hayesLogo.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"fab059bb4055fd457aba.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/hayesLogo.png?\n}");

/***/ }),

/***/ "./src/assets/images/hayesPeople.png":
/*!*******************************************!*\
  !*** ./src/assets/images/hayesPeople.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b7a484116071c5958bd2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/hayesPeople.png?\n}");

/***/ }),

/***/ "./src/assets/images/menuItems/curlyFries.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/menuItems/curlyFries.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"338769c71f5dbc71cad9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/menuItems/curlyFries.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/menuItems/doubleBurger.png":
/*!******************************************************!*\
  !*** ./src/assets/images/menuItems/doubleBurger.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0a673f7157347f011054.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/menuItems/doubleBurger.png?\n}");

/***/ }),

/***/ "./src/assets/images/menuItems/fries.png":
/*!***********************************************!*\
  !*** ./src/assets/images/menuItems/fries.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0d3d347ae6295aa78497.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/menuItems/fries.png?\n}");

/***/ }),

/***/ "./src/assets/images/menuItems/singleBurger.png":
/*!******************************************************!*\
  !*** ./src/assets/images/menuItems/singleBurger.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"6f232a69d9312f422bb7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/menuItems/singleBurger.png?\n}");

/***/ }),

/***/ "./src/assets/images/menuItems/tripleBurger.png":
/*!******************************************************!*\
  !*** ./src/assets/images/menuItems/tripleBurger.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4fb9e2fb5d31194a8485.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/menuItems/tripleBurger.png?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_images_hayesLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/hayesLogo.png */ \"./src/assets/images/hayesLogo.png\");\n/* harmony import */ var _assets_images_hayesBurger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/hayesBurger.png */ \"./src/assets/images/hayesBurger.png\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n/* harmony import */ var _merch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./merch */ \"./src/merch.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\n\n\nconst header = document.querySelector('header');\nconst navBtns = document.querySelectorAll('.nav-button');\nconst menuBtn = document.querySelector('#menu');\nconst mainContent = document.querySelector('#content');\n\nconst headerLogo = document.createElement('div');\nheaderLogo.id = 'header-logo';\nconst logoLink = document.createElement('a');\nlogoLink.href = '#';\nconst logoImg = new Image();\nlogoImg.src = _assets_images_hayesLogo_png__WEBPACK_IMPORTED_MODULE_1__;\nlogoLink.appendChild(logoImg);\nheaderLogo.appendChild(logoLink);\nheader.insertBefore(headerLogo, menuBtn);\n\nconst loadHome = () => {\n    mainContent.innerHTML = '';\n\n    const landingPage = document.createElement('div');\n    landingPage.id = 'landing-page';\n    mainContent.appendChild(landingPage);\n\n    const landingImg = document.createElement('div');\n    landingImg.id = 'landing-img';\n    const burgerImg = new Image();\n    burgerImg.id = 'burger-image';\n    burgerImg.src = _assets_images_hayesBurger_png__WEBPACK_IMPORTED_MODULE_2__;\n    landingImg.appendChild(burgerImg);\n    landingPage.appendChild(landingImg);\n}\n\nloadHome();\n\nheaderLogo.addEventListener('click', () => {\n    loadHome();\n});\n\n\nnavBtns.forEach(button => {\n    button.addEventListener('click', () => {\n        mainContent.innerHTML = '';\n        const page = button.id.toLowerCase();\n\n        switch (page) {\n            case 'about':\n                (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(mainContent);\n                break;\n            case 'order':\n                (0,_order__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(mainContent);\n                break;\n            case 'merch':\n                (0,_merch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(mainContent);\n                break;\n            case 'menu':\n                (0,_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mainContent);\n                break;\n        }\n    });\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_menuItems_singleBurger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/menuItems/singleBurger.png */ \"./src/assets/images/menuItems/singleBurger.png\");\n/* harmony import */ var _assets_images_menuItems_doubleBurger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/menuItems/doubleBurger.png */ \"./src/assets/images/menuItems/doubleBurger.png\");\n/* harmony import */ var _assets_images_menuItems_tripleBurger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/menuItems/tripleBurger.png */ \"./src/assets/images/menuItems/tripleBurger.png\");\n/* harmony import */ var _assets_images_menuItems_fries_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/menuItems/fries.png */ \"./src/assets/images/menuItems/fries.png\");\n/* harmony import */ var _assets_images_menuItems_curlyFries_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/menuItems/curlyFries.jpg */ \"./src/assets/images/menuItems/curlyFries.jpg\");\n\n\n\n\n\n\nconst burgerItems = [\n    {name: 'Single Burger', image: _assets_images_menuItems_singleBurger_png__WEBPACK_IMPORTED_MODULE_0__, price: '$5.99'},\n    {name: 'Double Burger', image: _assets_images_menuItems_doubleBurger_png__WEBPACK_IMPORTED_MODULE_1__, price: '$7.99'},\n    {name: 'Triple Burger', image: _assets_images_menuItems_tripleBurger_png__WEBPACK_IMPORTED_MODULE_2__, price: '$9.99'}\n];\n\nconst sideItems = [\n    {name: 'Fries', image: _assets_images_menuItems_fries_png__WEBPACK_IMPORTED_MODULE_3__, price: '$3.50'},\n    {name: 'Curly Fries', image: _assets_images_menuItems_curlyFries_jpg__WEBPACK_IMPORTED_MODULE_4__, price: '$4.50'}\n];\n\nfunction loadMenu(container) {\n    const gridContainer = document.createElement('div');\n    gridContainer.id = 'grid-container';\n    container.appendChild(gridContainer);\n\n    const burgerGrid = document.createElement('div');\n    burgerGrid.classList.add('menu-grid');\n    const burgerGridHeader = document.createElement('h1');\n    burgerGridHeader.textContent = 'Burgers'\n    gridContainer.appendChild(burgerGridHeader);\n\n    burgerItems.forEach(item => {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item')\n\n        const menuItemImg = document.createElement('div');\n        menuItemImg.classList.add('menu-item-img');\n\n        const img = new Image();\n        img.src = item.image;\n\n        menuItemImg.appendChild(img);\n\n        const menuItemContent = document.createElement('div');\n        menuItemContent.classList.add('menu-item-content');\n\n        const itemName = document.createElement('h2');\n        itemName.textContent = item.name;\n        menuItemContent.appendChild(itemName);\n        const itemPrice = document.createElement('p');\n        itemPrice.textContent = item.price;\n        menuItemContent.appendChild(itemPrice)\n\n        menuItem.appendChild(menuItemImg);\n        menuItem.appendChild(menuItemContent);\n\n        burgerGrid.appendChild(menuItem);\n    })\n\n    gridContainer.appendChild(burgerGrid);\n\n    const sideGrid = document.createElement('div');\n    sideGrid.classList.add('menu-grid');\n    const sideGridHeader = document.createElement('h1');\n    sideGridHeader.textContent = 'Sides'\n    gridContainer.appendChild(sideGridHeader);\n\n    sideItems.forEach(item => {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item')\n\n        const menuItemImg = document.createElement('div');\n        menuItemImg.classList.add('menu-item-img');\n\n        const img = new Image();\n        img.src = item.image;\n\n        menuItemImg.appendChild(img);\n\n        const menuItemContent = document.createElement('div');\n        menuItemContent.classList.add('menu-item-content');\n\n        const itemName = document.createElement('h2');\n        itemName.textContent = item.name;\n        menuItemContent.appendChild(itemName);\n        const itemPrice = document.createElement('p');\n        itemPrice.textContent = item.price;\n        menuItemContent.appendChild(itemPrice)\n\n        menuItem.appendChild(menuItemImg);\n        menuItem.appendChild(menuItemContent);\n\n        sideGrid.appendChild(menuItem);\n    })\n\n    gridContainer.appendChild(sideGrid);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/merch.js":
/*!**********************!*\
  !*** ./src/merch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMerch)\n/* harmony export */ });\nfunction loadMerch(container) {\n    const comingSoonContainer = document.createElement('div');\n    comingSoonContainer.classList.add('coming-soon-container');\n    container.appendChild(comingSoonContainer);\n\n    const comingSoonText = document.createElement('h1');\n    comingSoonText.classList.add('coming-soon-text');\n    comingSoonText.textContent = 'Coming Soon!';\n    comingSoonContainer.appendChild(comingSoonText);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/merch.js?\n}");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadOrder)\n/* harmony export */ });\nfunction loadOrder(container) {\n    const comingSoonContainer = document.createElement('div');\n    comingSoonContainer.classList.add('coming-soon-container');\n    container.appendChild(comingSoonContainer);\n\n    const comingSoonText = document.createElement('h1');\n    comingSoonText.classList.add('coming-soon-text');\n    comingSoonText.textContent = 'Coming Soon!';\n    comingSoonContainer.appendChild(comingSoonText);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/order.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;