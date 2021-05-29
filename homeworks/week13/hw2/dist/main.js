/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/* eslint-disable */

var commentPlugin;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"addComments\": () => (/* binding */ addComments)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n// eslint-disable-next-line import/no-unresolved\n// eslint-disable-next-line camelcase\n\n\n\nfunction getComments(apiUrl, siteKey, cursorID, cb) {\n  let url = `${apiUrl}/api_comments.php?site_key=${siteKey}`;\n  if (cursorID) {\n    url += `&cursor_id=${cursorID}`;\n  }\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({\n    url,\n  }).done((data) => {\n    cb(data);\n  });\n}\nfunction addComments(apiUrl, siteKey, data, cb) {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({\n    type: 'POST',\n    url: `${apiUrl}/api_add_comments.php`,\n    data,\n    // eslint-disable-next-line no-shadow\n  }).done((data) => {\n    cb(data);\n  });\n}\n\n\n//# sourceURL=webpack://commentPlugin/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ \"./src/templates.js\");\n/* eslint-disable camelcase */\n/* eslint-disable prefer-template */\n/* eslint-disable prefer-destructuring */\n/* eslint-disable-next-line prefer-const */\n/* eslint-disable prefer-const */\n\n\n\n\n\n\n// 初始化\nfunction init(options) {\n  let siteKey = '';\n  let apiUrl = '';\n  let containerElement = null;\n  let cursorID = null;\n  let isEnd = false;\n  let commentDOM = null;\n  let loadMoreClassName;\n  let commentsClassName;\n  let commentsSelector;\n  let formClassName;\n  let formSelector;\n\n  siteKey = options.siteKey;\n  apiUrl = options.apiUrl;\n  containerElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(options.containerSelector);\n  loadMoreClassName = `${siteKey}-load-more-btn`;\n  commentsClassName = `${siteKey}-comment-list`;\n  commentsSelector = `.${commentsClassName}`;\n  formClassName = `${siteKey}-add-comment-form`;\n  formSelector = `.${formClassName}`;\n  containerElement.append((0,_templates__WEBPACK_IMPORTED_MODULE_3__.getFrom)(formClassName, commentsClassName));\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(formSelector).submit((e) => {\n    e.preventDefault();\n    const nicknameDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${formSelector} input[name=nickname]`);\n    const contentDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${formSelector} textarea[name=content]`);\n    const newCommentData = {\n      site_key: siteKey,\n      nickname: nicknameDOM.val(),\n      content: contentDOM.val(),\n    };\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.addComments)(apiUrl, siteKey, newCommentData, (data) => {\n      if (!data.ok) {\n        // eslint-disable-next-line no-alert\n        alert(data.message);\n        return;\n      }\n      nicknameDOM.val('');\n      contentDOM.val('');\n      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.appendCommentToDOM)(commentDOM, newCommentData, true);\n    });\n  });\n  // 印出拿到的資料\n  function getNewComments() {\n    // eslint-disable-next-line no-shadow\n    const commentDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()(commentsSelector);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.${loadMoreClassName}`).hide();\n    if (isEnd) {\n      return;\n    }\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.getComments)(apiUrl, siteKey, cursorID, (data) => {\n      if (!data.ok) {\n        // eslint-disable-next-line no-alert\n        alert(data.message);\n        return;\n      }\n      const comments = data.discussions;\n      // eslint-disable-next-line no-restricted-syntax\n      for (let comment of comments) {\n        // eslint-disable-next-line no-shadow\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.appendCommentToDOM)(commentDOM, comment);\n      }\n      const length = comments.length;\n      if (length === 0) {\n        isEnd = true;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.${loadMoreClassName}`).hide();\n      } else {\n        cursorID = comments[length - 1].id;\n        const loadMoreButtonHTML = (0,_templates__WEBPACK_IMPORTED_MODULE_3__.getLoadMoreButton)(loadMoreClassName);\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(commentsSelector).append(loadMoreButtonHTML);\n      }\n    });\n  }\n  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.appendStyle)(_templates__WEBPACK_IMPORTED_MODULE_3__.cssTemplate);\n  commentDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()(commentsSelector);\n  getNewComments();\n  commentDOM.on('click', `.${loadMoreClassName}`, () => {\n    getNewComments();\n  });\n}\n\n\n//# sourceURL=webpack://commentPlugin/./src/index.js?");

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssTemplate\": () => (/* binding */ cssTemplate),\n/* harmony export */   \"getFrom\": () => (/* binding */ getFrom),\n/* harmony export */   \"getLoadMoreButton\": () => (/* binding */ getLoadMoreButton)\n/* harmony export */ });\nconst cssTemplate = `\n  * {\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n  h1 {\n    letter-spacing: 1.5rem;\n  }\n  .input-content, .comments {\n    border-radius: 5px;\n    box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);\n  }\n  input[type=\"text\"], textarea {\n    outline: none;\n    box-shadow:none !important;\n    border:1px solid #ccc !important;\n  }\n`;\n\nfunction getFrom(className, commentsClassName) {\n  return `\n  <div class=\"container input-content mt-5 p-4\">\n    <form class=\"${className}\">\n      <div class=\"form-group\">\n        <label\">Nickname</label>\n        <input type=\"text\" class=\"form-control shadow-none\" name=\"nickname\">\n      </div>\n      <div class=\"form-group\">\n        <label\">Contents</label>\n        <textarea class=\"form-control shadow-none\" name=\"content\"\" rows=\"4\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-info form-btn\">Submit</button>\n    </form>\n  </div>\n  <div class=\"container comments mt-5 mb-5 p-4\">\n    <div class=\"${commentsClassName}\">\n    </div>\n  </div>\n  `;\n}\n\nfunction getLoadMoreButton(className) {\n  return `<button type=\"submit\" class=\"btn btn-info ${className}\">Load More...</button>`;\n}\n\n\n//# sourceURL=webpack://commentPlugin/./src/templates.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"escape\": () => (/* binding */ escape),\n/* harmony export */   \"appendStyle\": () => (/* binding */ appendStyle),\n/* harmony export */   \"appendCommentToDOM\": () => (/* binding */ appendCommentToDOM)\n/* harmony export */ });\n/* eslint-disable no-useless-escape */\n\n// XSS\nfunction escape(toOutput) {\n  return toOutput.replace(/\\&/g, '&amp;')\n    .replace(/\\</g, '&lt;')\n    .replace(/\\>/g, '&gt;')\n    .replace(/\\\"/g, '&quot;')\n    .replace(/\\'/g, '&#x27')\n    .replace(/\\//g, '&#x2F');\n}\n\nfunction appendStyle(cssTemplate) {\n  // add style tag\n  const styleElement = document.createElement('style');\n  styleElement.type = 'text/css';\n  styleElement.appendChild(document.createTextNode(cssTemplate));\n  document.head.appendChild(styleElement);\n}\n\n// 動態新增資料->HTML\nfunction appendCommentToDOM(container, comment, isPrepend) {\n  const html = `\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">${escape(comment.nickname)}</h5>\n        <hr>\n        <p class=\"card-text\">${escape(comment.content)}</p>\n      </div>\n    </div>\n  `;\n  if (isPrepend) {\n    // 加入結尾\n    container.prepend(html);\n  } else {\n    // 加入開頭\n    container.append(html);\n  }\n}\n\n\n//# sourceURL=webpack://commentPlugin/./src/utils.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	commentPlugin = __webpack_exports__;
/******/ 	
/******/ })()
;