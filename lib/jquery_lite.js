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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(elements) {\n    this.elements = elements;\n  }\n  \n  html(str) {\n    if (!str) {\n      return this.elements[0].innerHTML;\n    } \n    this.elements.forEach( (node) => {\n      node.innerHTML = str;\n    });\n  }\n  \n  empty() {\n    this.elements.forEach( (node) => {\n      node.innerHTML = \"\";\n    });  \n  }\n  \n  // accepts jQuery-lite-wrapped collection, HTML element, or a string\n  \n  append(arg) {\n    \n    if (typeof arg === 'string') {\n      this.elements.forEach( (node) => {\n        node.innerHTML += arg;\n      });\n    } else if(arg instanceof HTMLElement) {\n      this.elements.forEach( (node) => {\n        node.innerHTML += arg.innerHTML;\n      });\n    } else {\n      arg.elements.forEach((el) => {\n        this.elements.forEach( (node) => {\n          node.innerHTML += el.outerHTML;\n        });\n      });\n    }\n  }\n  \n  \n  //html \n  attr(attribute, value) {\n    if(!value) {\n      return this.elements[0].getAttribute(attribute);\n    } else {\n      this.elements.forEach( (node) => {\n        node.setAttribute(attribute, value);\n      });\n      \n    }\n  }\n  \n  addClass(name) {\n    this.elements.forEach( (node) => {\n      node.classList.add(name);\n    });\n  }\n  \n  removeClass(name) {\n    this.elements.forEach( (node) => {\n      node.classList.remove(name);\n    });\n  }\n  \n  \n  children() {\n    let result = [];\n    this.elements.forEach( (node) => {\n      result = result.concat(node.children);\n    });\n    return result;\n  }\n  \n  parent() {\n    let result = [];\n    this.elements.forEach( (node) => {\n      if (!result.includes(node.parentNode)) {\n        result = result.concat(node.parentNode);\n      }\n    });\n    return result;\n  }\n  \n  find(selector) {\n    return this.elements[0].querySelectorAll(selector);\n  }\n  \n  remove(args) {\n    this.empty();\n    \n    this.elements.forEach( (node) => {\n      while (node.firstChild) {\n        node.removeChild(node.firstChild);\n      } \n      node.parentNode.removeChild(node); \n    });\n    \n  }\n  \n  on(e, callback) {\n    this.elements.forEach( (node) => {\n      node.addEventListener(e,callback);\n      node[e] = callback;\n    });\n  }\n  \n  off(e) {\n    this.elements.forEach( (node) => {\n      node.removeEventListener(e, node[e]);\n    });\n  }\n  \n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__ (/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nfunction $l(selector, callback) {\n  if (callback) {\n    \n    \n  }\n  document.addEventListener(\"DOMContentLoaded\", function(event) {\n    if (callback) {\n      callback();\n    }\n  });\n  \n  \n  if (selector instanceof HTMLElement) {\n    const domNodeList = new DOMNodeCollection([selector]);\n    return domNodeList;\n  }\n  \n  let list = document.querySelectorAll(selector);\n  let listArray = Array.from(list);\n  return new DOMNodeCollection(listArray);\n  \n}\n\nwindow.$l = $l;  \n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });