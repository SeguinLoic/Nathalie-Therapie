exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 4404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Slider; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/buttons/primary/PrimaryButtons.module.css
var PrimaryButtons_module = __webpack_require__(1270);
var PrimaryButtons_module_default = /*#__PURE__*/__webpack_require__.n(PrimaryButtons_module);
;// CONCATENATED MODULE: ./components/buttons/primary/primary-button.js




function PrimaryButton({
  text,
  page
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `${page}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (PrimaryButtons_module_default()).primaryButton,
      children: text
    })
  });
}
// EXTERNAL MODULE: ./styles/Slider.module.css
var Slider_module = __webpack_require__(5593);
var Slider_module_default = /*#__PURE__*/__webpack_require__.n(Slider_module);
;// CONCATENATED MODULE: ./pages/sections/slider.js






function Slider() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${(Slider_module_default()).slider} bloc`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `col col40 ${(Slider_module_default()).coltext}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Slider_module_default()).titleSlider,
        children: "Envie de vous sentir l\xE9ger ?"
      }), /*#__PURE__*/jsx_runtime_.jsx(PrimaryButton, {
        text: "Contactez votre th\xE9rapeute",
        page: "/"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col col60",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Slider_module_default()).figures,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/man.svg",
          width: 600,
          height: 600,
          alt: "man",
          className: (Slider_module_default()).man
        }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/woman.svg",
          width: 600,
          height: 600,
          alt: "woman",
          className: (Slider_module_default()).woman
        })]
      })
    })]
  });
}

/***/ }),

/***/ 1270:
/***/ (function(module) {

// Exports
module.exports = {
	"primaryButton": "PrimaryButtons_primaryButton__1WuZd"
};


/***/ }),

/***/ 5593:
/***/ (function(module) {

// Exports
module.exports = {
	"coltext": "Slider_coltext__16Aka",
	"titleSlider": "Slider_titleSlider__1zQvk",
	"slider": "Slider_slider__1OawK",
	"figures": "Slider_figures__2RvR-",
	"man": "Slider_man__2zHFV",
	"woman": "Slider_woman__1Z8w-"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;