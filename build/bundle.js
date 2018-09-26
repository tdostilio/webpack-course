/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};
exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7cc6ba348b328c06840869a142d05013.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ }
/******/ ]);