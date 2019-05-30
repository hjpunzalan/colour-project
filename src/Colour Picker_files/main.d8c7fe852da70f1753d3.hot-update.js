webpackHotUpdate("main",{

/***/ "./src/PaletteList/PaletteList.js":
/*!****************************************!*\
  !*** ./src/PaletteList/PaletteList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MiniPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniPalette */ "./src/PaletteList/MiniPalette.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _PaletteListStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaletteListStyles */ "./src/PaletteList/PaletteListStyles.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/PaletteList/PaletteList.js";







class PaletteList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  goToPalette(id) {
    this.props.history.push("/colour-project/palette/".concat(id));
  }

  render() {
    const _this$props = this.props,
          palettes = _this$props.palettes,
          classes = _this$props.classes,
          deletePalette = _this$props.deletePalette;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: classes.nav,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Color Picker"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "\u2014 with React")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/colour-project/palette/new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Create Palette")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["TransitionGroup"], {
      className: classes.palettes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, palettes.map(p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
      key: p.id,
      classNames: "fade",
      timeout: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MiniPalette__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
      deletePalette: deletePalette,
      id: p.id,
      key: p.id
    }, p, {
      handleClick: () => this.goToPalette(p.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_PaletteListStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(PaletteList));

/***/ })

})
//# sourceMappingURL=main.d8c7fe852da70f1753d3.hot-update.js.map