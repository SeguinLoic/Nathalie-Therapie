(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,485,794];
exports.modules = {

/***/ 7701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./lib/ga/index.js
// log the pageview with their URL
const pageview = url => {
  window.gtag('config', "UA-59025910-2", {
    page_path: url
  });
}; // log specific events happening.

const ga_event = ({
  action,
  params
}) => {
  window.gtag('event', action, params);
};
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      pageview(url);
    }; //When the component is mounted, subscribe to router changes
    //and log those page views


    router.events.on('routeChangeComplete', handleRouteChange); // If the component is unmounted, unsubscribe
    // from the event with the `off` method

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps));
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7701));
module.exports = __webpack_exports__;

})();