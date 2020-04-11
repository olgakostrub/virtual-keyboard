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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: keyboardConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyboardConfig\", function() { return keyboardConfig; });\nconst keyboardConfig = {\r\n  // first row\r\n  Backquote: {\r\n    en: '`',\r\n    ru: 'ё',\r\n  },\r\n  Digit1: {\r\n    en: '1',\r\n    ru: '1',\r\n    extraSymbol: {\r\n      en: '!',\r\n      ru: '!',\r\n    },\r\n  },\r\n  Digit2: {\r\n    en: '2',\r\n    ru: '2',\r\n    extraSymbol: {\r\n      en: '@',\r\n      ru: '\"',\r\n    },\r\n  },\r\n  Digit3: {\r\n    en: '3',\r\n    ru: '3',\r\n    extraSymbol: {\r\n      en: '#',\r\n      ru: '№',\r\n    },\r\n  },\r\n  Digit4: {\r\n    en: '4',\r\n    ru: '4',\r\n    extraSymbol: {\r\n      en: '$',\r\n      ru: ';',\r\n    },\r\n  },\r\n  Digit5: {\r\n    en: '5',\r\n    ru: '5',\r\n    extraSymbol: {\r\n      en: '%',\r\n      ru: '%',\r\n    },\r\n  },\r\n  Digit6: {\r\n    en: '6',\r\n    ru: '6',\r\n    extraSymbol: {\r\n      en: '^',\r\n      ru: ':',\r\n    },\r\n  },\r\n  Digit7: {\r\n    en: '7',\r\n    ru: '7',\r\n    extraSymbol: {\r\n      en: '&',\r\n      ru: '?',\r\n    },\r\n  },\r\n  Digit8: {\r\n    en: '8',\r\n    ru: '8',\r\n    extraSymbol: {\r\n      en: '*',\r\n      ru: '*',\r\n    },\r\n  },\r\n  Digit9: {\r\n    en: '9',\r\n    ru: '9',\r\n    extraSymbol: {\r\n      en: '(',\r\n      ru: '(',\r\n    },\r\n  },\r\n\r\n  Digit0: {\r\n    en: '0',\r\n    ru: '0',\r\n    extraSymbol: {\r\n      en: ')',\r\n      ru: ')',\r\n    },\r\n  },\r\n  Minus: {\r\n    en: '-',\r\n    ru: '-',\r\n    extraSymbol: {\r\n      en: '_',\r\n      ru: '_',\r\n    },\r\n  },\r\n  Equal: {\r\n    en: '=',\r\n    ru: '+',\r\n    extraSymbol: {\r\n      en: '+',\r\n      ru: '+',\r\n    },\r\n  },\r\n  Backspace: {\r\n    en: 'BackSp',\r\n    ru: 'BackSp',\r\n    'grid-column-start': '14',\r\n    'grid-column-end': 'span 2',\r\n    functional: true,\r\n  },\r\n  // second row\r\n  Tab: {\r\n    displayed: '  ',\r\n    en: 'Tab',\r\n    ru: 'Tab',\r\n    functional: true,\r\n  },\r\n  KeyQ: {\r\n    en: 'q',\r\n    ru: 'й',\r\n  },\r\n  KeyW: {\r\n    en: 'w',\r\n    ru: 'ц',\r\n  },\r\n  KeyE: {\r\n    en: 'e',\r\n    ru: 'у',\r\n  },\r\n  KeyR: {\r\n    en: 'r',\r\n    ru: 'к',\r\n  },\r\n  KeyT: {\r\n    en: 't',\r\n    ru: 'е',\r\n  },\r\n  KeyY: {\r\n    en: 'y',\r\n    ru: 'н',\r\n  },\r\n  KeyU: {\r\n    en: 'u',\r\n    ru: 'г',\r\n  },\r\n  KeyI: {\r\n    en: 'i',\r\n    ru: 'ш',\r\n  },\r\n  KeyO: {\r\n    en: 'o',\r\n    ru: 'щ',\r\n  },\r\n  KeyP: {\r\n    en: 'p',\r\n    ru: 'з',\r\n  },\r\n  BracketLeft: {\r\n    en: '[',\r\n    ru: 'х',\r\n    extraSymbol: {\r\n      en: '{',\r\n      ru: '',\r\n    },\r\n  },\r\n  BracketRight: {\r\n    en: ']',\r\n    ru: 'ъ',\r\n    extraSymbol: {\r\n      en: '}',\r\n      ru: '',\r\n    },\r\n  },\r\n  Backslash: {\r\n    en: '\\\\',\r\n    ru: '\\\\',\r\n    extraSymbol: {\r\n      en: '|',\r\n      ru: '/',\r\n    },\r\n  },\r\n  Delete: {\r\n    en: 'Del',\r\n    ru: 'Del',\r\n    functional: true,\r\n  },\r\n  // third row\r\n  CapsLock: {\r\n    en: 'CapsLock',\r\n    ru: 'CapsLock',\r\n    'grid-column-start': 1,\r\n    'grid-column-end': 'span 2',\r\n    functional: true,\r\n  },\r\n  KeyA: {\r\n    en: 'a',\r\n    ru: 'ф',\r\n  },\r\n  KeyS: {\r\n    en: 's',\r\n    ru: 'ы',\r\n  },\r\n  KeyD: {\r\n    en: 'd',\r\n    ru: 'в',\r\n  },\r\n  KeyF: {\r\n    en: 'f',\r\n    ru: 'а',\r\n  },\r\n  KeyG: {\r\n    en: 'g',\r\n    ru: 'п',\r\n  },\r\n  KeyH: {\r\n    en: 'h',\r\n    ru: 'р',\r\n  },\r\n  KeyJ: {\r\n    en: 'j',\r\n    ru: 'о',\r\n  },\r\n  KeyK: {\r\n    en: 'k',\r\n    ru: 'л',\r\n  },\r\n  KeyL: {\r\n    en: 'l',\r\n    ru: 'д',\r\n  },\r\n  Semicolon: {\r\n    en: ';',\r\n    ru: 'ж',\r\n    extraSymbol: {\r\n      en: ':',\r\n      ru: '',\r\n    },\r\n  },\r\n  Quote: {\r\n    en: \"'\",\r\n    ru: 'э',\r\n    extraSymbol: {\r\n      en: '\"',\r\n      ru: '',\r\n    },\r\n  },\r\n  Enter: {\r\n    en: 'Enter',\r\n    ru: 'Enter',\r\n    'grid-column-start': 14,\r\n    'grid-column-end': 'span 2',\r\n    functional: true,\r\n  },\r\n  // fourth row\r\n  ShiftLeft: {\r\n    en: 'Shift',\r\n    ru: 'Shift',\r\n    'grid-column-start': 1,\r\n    'grid-column-end': 'span 3',\r\n    functional: true,\r\n  },\r\n  KeyZ: {\r\n    en: 'z',\r\n    ru: 'я',\r\n  },\r\n  KeyС: {\r\n    en: 'с',\r\n    ru: 'c',\r\n  },\r\n  KeyV: {\r\n    en: 'v',\r\n    ru: 'м',\r\n  },\r\n  KeyB: {\r\n    en: 'b',\r\n    ru: 'и',\r\n  },\r\n  KeyN: {\r\n    en: 'n',\r\n    ru: 'т',\r\n  },\r\n  KeyM: {\r\n    en: 'm',\r\n    ru: 'ь',\r\n  },\r\n  Comma: {\r\n    en: ',',\r\n    ru: 'б',\r\n    extraSymbol: {\r\n      en: '<',\r\n      ru: '',\r\n    },\r\n  },\r\n  Period: {\r\n    en: '.',\r\n    ru: 'ю',\r\n    extraSymbol: {\r\n      en: '>',\r\n      ru: '',\r\n    },\r\n  },\r\n  Slash: {\r\n    en: '/',\r\n    ru: '.',\r\n    extraSymbol: {\r\n      en: '.',\r\n      ru: ',',\r\n    },\r\n  },\r\n  ArrowUp: {\r\n    en: '&#x25B2',\r\n    ru: '&#x25B2',\r\n    // functional: true,\r\n  },\r\n  ShiftRight: {\r\n    en: 'Shift',\r\n    ru: 'Shift',\r\n    'grid-column-start': 14,\r\n    'grid-column-end': 'span 2',\r\n    functional: true,\r\n  },\r\n\r\n  // fifth row\r\n  ControlLeft: {\r\n    en: 'Ctrl',\r\n    ru: 'Ctrl',\r\n    functional: true,\r\n  },\r\n  MetaLeft: {\r\n    en: 'Win',\r\n    ru: 'Win',\r\n    functional: true,\r\n  },\r\n  AltLeft: {\r\n    en: 'Alt',\r\n    ru: 'Alt',\r\n    functional: true,\r\n  },\r\n  Space: {\r\n    en: ' ',\r\n    ru: ' ',\r\n    'grid-column-start': 4,\r\n    'grid-column-end': 'span 7',\r\n  },\r\n  AltRight: {\r\n    en: 'Alt',\r\n    ru: 'Alt',\r\n    functional: true,\r\n  },\r\n  ArrowLeft: {\r\n    en: '&#x25C0',\r\n    ru: '&#x25C0',\r\n    // functional: true,\r\n  },\r\n  ArrowDown: {\r\n    en: '&#x25BC',\r\n    ru: '&#x25BC',\r\n    // functional: true,\r\n  },\r\n  ArrowRight: {\r\n    en: '&#x25B6',\r\n    ru: '&#x25B6',\r\n    // functional: true,\r\n  },\r\n  ControlRight: {\r\n    en: 'Ctrl',\r\n    ru: 'Ctrl',\r\n    functional: true,\r\n  },\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: BUTTON_ANIMATION_DURATION, DEFAULT_LANGUAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTON_ANIMATION_DURATION\", function() { return BUTTON_ANIMATION_DURATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_LANGUAGE\", function() { return DEFAULT_LANGUAGE; });\n/* eslint-disable */\r\n\r\nconst BUTTON_ANIMATION_DURATION = 500;\r\nconst DEFAULT_LANGUAGE = 'en';\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/constants.js?");

/***/ }),

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/*! exports provided: screenKeyClickHandler, keyboardKeyClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"screenKeyClickHandler\", function() { return screenKeyClickHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyboardKeyClickHandler\", function() { return keyboardKeyClickHandler; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\nconst triggerEvent = (el, eventName, bubbles) => {\r\n  const event = new Event(eventName, { bubbles });\r\n  el.dispatchEvent(event);\r\n};\r\n\r\nconst updateTextPosition = (textarea, startDelta, endDelta) => {\r\n  if (textarea.dataset.start) {\r\n    textarea.dataset.start = Number(textarea.dataset.start) + startDelta;\r\n    textarea.selectionStart = textarea.dataset.start;\r\n  }\r\n  if (textarea.dataset.end) {\r\n    if (endDelta === undefined) {\r\n      textarea.dataset.end = textarea.dataset.start;\r\n    } else {\r\n      textarea.dataset.end = Number(textarea.dataset.end) + endDelta;\r\n    }\r\n    textarea.selectionEnd = textarea.dataset.end;\r\n  }\r\n};\r\n\r\nconst saveTextPositionOnTextareaEvents = () => {\r\n  const textarea = document.querySelector('.user-input');\r\n  const saveCursorPosition = () => {\r\n    textarea.dataset.start = textarea.selectionStart;\r\n    textarea.dataset.end = textarea.selectionEnd;\r\n  };\r\n  textarea.addEventListener('blur', () => saveCursorPosition());\r\n  textarea.addEventListener('focus', () => saveCursorPosition());\r\n  textarea.addEventListener('click', () => saveCursorPosition());\r\n};\r\n\r\nconst addLetterToText = (textarea, letter) => {\r\n  const start = Number(textarea.dataset.start);\r\n  const end = Number(textarea.dataset.end);\r\n  const text = textarea.value;\r\n  if (start === end) {\r\n    textarea.value = text.substring(0, start) + letter + text.substring(start);\r\n    updateTextPosition(textarea, 1, 1);\r\n    return;\r\n  }\r\n\r\n  // insert into textarea instead of selection\r\n  textarea.value = text.substring(0, start) + letter + text.substring(end);\r\n  updateTextPosition(textarea, 0);\r\n};\r\n\r\nconst handleRegularKeys = (keyElement, textarea) => {\r\n  let addedLetter = keyElement.querySelector('.base').innerHTML;\r\n\r\n  // handle pressed Shift\r\n  const shiftKeys = document.querySelectorAll(\"div[class^='key Shift']\");\r\n  const shiftPressed = Array.from(shiftKeys).filter((el) =>\r\n    el.classList.contains('pressed')\r\n  ).length;\r\n  if (shiftPressed) {\r\n    const extraElement = keyElement.querySelector('.extra');\r\n    if (extraElement) addedLetter = extraElement.innerHTML;\r\n    addLetterToText(textarea, addedLetter);\r\n    return;\r\n  }\r\n\r\n  // handle CapsLock mode\r\n  const capsLockPressed = document\r\n    .querySelector('.keyboard')\r\n    .classList.contains('capslock-active');\r\n  if (capsLockPressed) {\r\n    addedLetter = addedLetter.toUpperCase();\r\n  }\r\n\r\n  addLetterToText(textarea, addedLetter);\r\n  return;\r\n};\r\n\r\nconst handleDeleteKeys = (code, textarea) => {\r\n  const start = Number(textarea.dataset.start);\r\n  const end = Number(textarea.dataset.end);\r\n  const text = textarea.value;\r\n  if (start !== end) {\r\n    textarea.value = text.substring(0, start) + text.substring(end);\r\n    updateTextPosition(textarea, 0);\r\n    return;\r\n  }\r\n  if (code === 'Delete' && end !== text.length) {\r\n    textarea.value = text.substring(0, start) + text.substring(start + 1);\r\n    updateTextPosition(textarea, 0, 0);\r\n    return;\r\n  }\r\n  if (code === 'Backspace' && start !== 0) {\r\n    textarea.value = text.substring(0, start - 1) + text.substring(start);\r\n    updateTextPosition(textarea, -1, -1);\r\n  }\r\n};\r\n\r\nconst handleKeyLogic = (keyElement) => {\r\n  const textarea = document.querySelector('.user-input');\r\n  let code = keyElement.className;\r\n  code = code.replace(/key|pressed|functional| /g, '');\r\n\r\n  const isFunctionalKey = _config__WEBPACK_IMPORTED_MODULE_1__[\"keyboardConfig\"][code].functional;\r\n  if (!isFunctionalKey) {\r\n    handleRegularKeys(keyElement, textarea);\r\n    return;\r\n  }\r\n\r\n  if (code === 'CapsLock') {\r\n    toggleCapsLockMode();\r\n    return;\r\n  }\r\n\r\n  if (code === 'Backspace' || code === 'Delete') {\r\n    handleDeleteKeys(code, textarea);\r\n    return;\r\n  }\r\n\r\n  if (code === 'Tab') {\r\n    addLetterToText(textarea, '\\t');\r\n  }\r\n\r\n  if (code === 'Enter') {\r\n    addLetterToText(textarea, '\\n');\r\n  }\r\n};\r\n\r\nconst screenKeyClickHandler = () => {\r\n  const keyboard = document.querySelector('.keyboard');\r\n\r\n  keyboard.addEventListener('mousedown', (evt) => {\r\n    const keyPressed = evt.target.closest('.key');\r\n    if (keyPressed) {\r\n      keyPressed.classList.add('pressed');\r\n    }\r\n  });\r\n\r\n  keyboard.addEventListener('mouseup', (evt) => {\r\n    const keyPressed = evt.target.closest('.key');\r\n    if (keyPressed) {\r\n      document.querySelector('.user-input').focus();\r\n      handleKeyLogic(keyPressed);\r\n      setTimeout(() => {\r\n        keyPressed.classList.remove('pressed');\r\n      }, _constants__WEBPACK_IMPORTED_MODULE_0__[\"BUTTON_ANIMATION_DURATION\"]);\r\n    }\r\n  });\r\n  // ensure that cursor position is preserved\r\n  saveTextPositionOnTextareaEvents();\r\n};\r\n\r\nconst keyboardKeyClickHandler = () => {\r\n  document.addEventListener('keydown', (evt) => {\r\n    const keyPressed = document.querySelector(`.${evt.code}`);\r\n    if (keyPressed) {\r\n      triggerEvent(keyPressed, 'mousedown', true);\r\n    }\r\n    evt.preventDefault();\r\n  });\r\n\r\n  document.addEventListener('keyup', (evt) => {\r\n    const keyPressed = document.querySelector(`.${evt.code}`);\r\n    if (keyPressed) {\r\n      triggerEvent(keyPressed, 'mouseup', true);\r\n      evt.preventDefault();\r\n    }\r\n  });\r\n\r\n  document.addEventListener('keypress', (evt) => {\r\n    evt.preventDefault();\r\n  });\r\n};\r\n\r\nconst toggleCapsLockMode = () => {\r\n  document.querySelector('.keyboard').classList.toggle('capslock-active');\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/handlers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeKeyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeKeyboard */ \"./src/js/makeKeyboard.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/js/handlers.js\");\n/* harmony import */ var _manageLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageLanguage */ \"./src/js/manageLanguage.js\");\n\r\n\r\n\r\n\r\nconst language = Object(_manageLanguage__WEBPACK_IMPORTED_MODULE_2__[\"setStartLanguage\"])();\r\nconst keyboard = Object(_makeKeyboard__WEBPACK_IMPORTED_MODULE_0__[\"makeKeyboard\"])(language);\r\ndocument.querySelector('body').prepend(keyboard);\r\n\r\nObject(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"screenKeyClickHandler\"])();\r\nObject(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"keyboardKeyClickHandler\"])();\r\nObject(_manageLanguage__WEBPACK_IMPORTED_MODULE_2__[\"changeLanguageHandler\"])();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/makeElements.js":
/*!********************************!*\
  !*** ./src/js/makeElements.js ***!
  \********************************/
/*! exports provided: createHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHTMLElement\", function() { return createHTMLElement; });\n/* eslint-disable */\r\n\r\nconst createHTMLElement = (elementConfig) => {\r\n  const { tagName, className, attrs } = elementConfig;\r\n  const newElement = document.createElement(`${tagName}`);\r\n  if (className) {\r\n    newElement.className = className;\r\n  }\r\n  if (attrs) {\r\n    Object.keys(attrs).forEach(\r\n      (attrKey) => (newElement[attrKey] = attrs[attrKey])\r\n    );\r\n  }\r\n  return newElement;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/makeElements.js?");

/***/ }),

/***/ "./src/js/makeKeyboard.js":
/*!********************************!*\
  !*** ./src/js/makeKeyboard.js ***!
  \********************************/
/*! exports provided: makeKeyboard, updateKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeKeyboard\", function() { return makeKeyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateKeyboard\", function() { return updateKeyboard; });\n/* harmony import */ var _makeElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElements */ \"./src/js/makeElements.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _manageLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageLanguage */ \"./src/js/manageLanguage.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\nconst makeKeyboard = (language = 'en') => {\r\n  const main = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({ tagName: 'main', className: 'main' });\r\n\r\n  const note = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({ tagName: 'p' });\r\n  note.innerHTML = 'Please note: The task was implemented on Windows.';\r\n  main.appendChild(note);\r\n\r\n  // info panel with current language\r\n  const info = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({ tagName: 'div', className: 'info' });\r\n  const languageWrapper = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n    tagName: 'div',\r\n    className: 'language-wrapper',\r\n  });\r\n  const languageLabel = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n    tagName: 'span',\r\n    className: 'language-label',\r\n  });\r\n  languageLabel.innerHTML = 'Current language: ';\r\n  const currentLanguage = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n    tagName: 'span',\r\n    className: 'language',\r\n  });\r\n  currentLanguage.innerHTML = language;\r\n  languageWrapper.appendChild(languageLabel);\r\n  languageWrapper.appendChild(currentLanguage);\r\n\r\n  const languageChange = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n    tagName: 'div',\r\n    className: 'language-change',\r\n  });\r\n  languageChange.innerHTML = 'You can change language by pressing Ctrl + Shift';\r\n\r\n  info.appendChild(languageWrapper);\r\n  info.appendChild(languageChange);\r\n  main.appendChild(info);\r\n\r\n  // textarea for text input\r\n  const textarea = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n    tagName: 'textarea',\r\n    className: 'user-input',\r\n    attrs: {\r\n      id: 'user-input',\r\n      cols: '30',\r\n      rows: '10',\r\n      autofocus: true,\r\n    },\r\n  });\r\n  main.appendChild(textarea);\r\n\r\n  // keyboard keys\r\n  const keyboardWrapper = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n    tagName: 'div',\r\n    className: 'keyboard-wrapper',\r\n  });\r\n  const keyboardKeys = makeKeyboardKeys(_config__WEBPACK_IMPORTED_MODULE_1__[\"keyboardConfig\"], language);\r\n  keyboardWrapper.appendChild(keyboardKeys);\r\n  main.appendChild(keyboardWrapper);\r\n  return main;\r\n};\r\n\r\nconst makeKeyboardKeys = (config, language) => {\r\n  const keyboard = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({ tagName: 'div', className: 'keyboard' });\r\n  const configKeys = Object.keys(config);\r\n  configKeys.forEach((configKey) => {\r\n    const configItem = config[configKey];\r\n    const keyWrapper = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n      tagName: 'div',\r\n      className: `key ${configKey}`,\r\n    });\r\n    const keyElement = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n      tagName: 'span',\r\n      className: 'base',\r\n    });\r\n    keyElement.innerHTML = configItem[language];\r\n    if (configItem.functional) {\r\n      keyWrapper.classList.add('functional');\r\n    }\r\n    if (configItem['grid-column-start']) {\r\n      keyWrapper.style.gridColumnStart = configItem['grid-column-start'];\r\n      keyWrapper.style.gridColumnEnd = configItem['grid-column-end'];\r\n    }\r\n    keyWrapper.appendChild(keyElement);\r\n    if (configItem.extraSymbol) {\r\n      const keyExtra = Object(_makeElements__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])({\r\n        tagName: 'span',\r\n        className: 'extra',\r\n      });\r\n      const extraSymbol = configItem.extraSymbol[language];\r\n      if (extraSymbol) keyExtra.innerHTML = extraSymbol;\r\n      keyWrapper.appendChild(keyExtra);\r\n    }\r\n    keyboard.appendChild(keyWrapper);\r\n  });\r\n  return keyboard;\r\n};\r\n\r\nconst updateKeyboard = (language = 'en') => {\r\n  const keyboard = document.querySelector('.keyboard');\r\n  const configKeys = Object.keys(_config__WEBPACK_IMPORTED_MODULE_1__[\"keyboardConfig\"]);\r\n  configKeys.forEach((configKey) => {\r\n    const configItem = _config__WEBPACK_IMPORTED_MODULE_1__[\"keyboardConfig\"][configKey];\r\n    const baseSpan = keyboard.querySelector(`.${configKey} .base`);\r\n    baseSpan.innerHTML = configItem[language];\r\n    if (configItem.extraSymbol) {\r\n      const extraSpan = keyboard.querySelector(`.${configKey} .extra`);\r\n      extraSpan.innerHTML = configItem.extraSymbol[language];\r\n    }\r\n  });\r\n  Object(_manageLanguage__WEBPACK_IMPORTED_MODULE_2__[\"updateLanguageLabel\"])();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/makeKeyboard.js?");

/***/ }),

/***/ "./src/js/manageLanguage.js":
/*!**********************************!*\
  !*** ./src/js/manageLanguage.js ***!
  \**********************************/
/*! exports provided: changeLanguageHandler, setStartLanguage, updateLanguageLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLanguageHandler\", function() { return changeLanguageHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setStartLanguage\", function() { return setStartLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLanguageLabel\", function() { return updateLanguageLabel; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _makeKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeKeyboard */ \"./src/js/makeKeyboard.js\");\n\r\n\r\n\r\nconst storage = window.localStorage;\r\nconst LANGUAGE_KEY = 'virtual-keyboard-language';\r\n\r\nconst getLanguage = () => storage.getItem(LANGUAGE_KEY);\r\nconst setLanguage = (language) => storage.setItem(LANGUAGE_KEY, language);\r\n\r\nconst setStartLanguage = () => {\r\n  let currentLanguage = getLanguage();\r\n  if (!currentLanguage) {\r\n    currentLanguage = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_LANGUAGE\"];\r\n    setLanguage(currentLanguage);\r\n  }\r\n  return currentLanguage;\r\n};\r\n\r\nconst changeLanguage = () => {\r\n  getLanguage() === 'en' ? setLanguage('ru') : setLanguage('en');\r\n  // refresh keyboard view\r\n  Object(_makeKeyboard__WEBPACK_IMPORTED_MODULE_1__[\"updateKeyboard\"])(getLanguage());\r\n};\r\n\r\nconst changeLanguageHandler = () => {\r\n  document.addEventListener('keydown', (evt) => {\r\n    if (evt.ctrlKey && evt.shiftKey) {\r\n      changeLanguage();\r\n    }\r\n  });\r\n};\r\n\r\nconst updateLanguageLabel = () => {\r\n    const language = document.querySelector('.language');\r\n    language.innerHTML = getLanguage();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/manageLanguage.js?");

/***/ })

/******/ });