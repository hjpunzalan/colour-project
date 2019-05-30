(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pacifico&display=swap);", ""]);

// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\nhtml {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 100%;\n}", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _Palette_Palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Palette/Palette */ "./src/Palette/Palette.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SeedColors_seedColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SeedColors/seedColors */ "./src/SeedColors/seedColors.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SeedColors_colorHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeedColors/colorHelpers */ "./src/SeedColors/colorHelpers.js");
/* harmony import */ var _PaletteList_PaletteList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaletteList/PaletteList */ "./src/PaletteList/PaletteList.js");
/* harmony import */ var _Palette_SingleColorPalette_SingleColorPalette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Palette/SingleColorPalette/SingleColorPalette */ "./src/Palette/SingleColorPalette/SingleColorPalette.js");
/* harmony import */ var _NewPalette_NewPaletteForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewPalette/NewPaletteForm */ "./src/NewPalette/NewPaletteForm.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/App.js";








class App extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    this.savePalette = newPalette => {
      this.setState({
        palettes: [...this.state.palettes, newPalette]
      }, this.syncLocalStorage);
    };

    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || _SeedColors_seedColors__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  deletePalette(id) {
    const deletedPalette = this.state.palettes.filter(p => p.id !== id);
    this.setState({
      palettes: deletedPalette
    }, this.syncLocalStorage);
  }

  findPalette(id) {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }

  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/colour-project",
      render: routeProps => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PaletteList_PaletteList__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
        deletePalette: this.deletePalette,
        palettes: this.state.palettes
      }, routeProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/colour-project/palette/new",
      render: routeProps => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NewPalette_NewPaletteForm__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, routeProps, {
        savePalette: this.savePalette,
        palettes: this.state.palettes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/colour-project/palette/:id",
      render: routeProps => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Palette_Palette__WEBPACK_IMPORTED_MODULE_0__["default"], {
        palette: Object(_SeedColors_colorHelpers__WEBPACK_IMPORTED_MODULE_4__["default"])(this.findPalette(routeProps.match.params.id)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/colour-project/palette/:paletteId/:colorId",
      render: routeProps => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Palette_SingleColorPalette_SingleColorPalette__WEBPACK_IMPORTED_MODULE_6__["default"], {
        colorId: routeProps.match.params.colorId,
        palette: Object(_SeedColors_colorHelpers__WEBPACK_IMPORTED_MODULE_4__["default"])(this.findPalette(routeProps.match.params.paletteId)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/colour-project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })) // {/* <div>
    // 	<Palette palette={generatePalette(seedColors[4])} />
    // </div> */}
    ;
  }

}

/***/ }),

/***/ "./src/NewPalette/DraggableColorBox/DraggableColorBox.js":
/*!***************************************************************!*\
  !*** ./src/NewPalette/DraggableColorBox/DraggableColorBox.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sizes */ "./src/sizes.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.umd.js");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/DraggableColorBox/DraggableColorBox.js";





const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-6px',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.)'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('md')]: {
      width: '50%',
      height: '10%'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs')]: {
      padding: '0'
    }
  },
  deleteIcon: {
    color: '#2B2B2B',
    transition: 'all .2s'
  }
};
const DraggableColorBox = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_4__["SortableElement"])(props => {
  const classes = props.classes,
        color = props.color,
        name = props.name,
        deleteBox = props.deleteBox;

  function handleClick() {
    deleteBox(name);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: color
    },
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.boxContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.deleteIcon,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(DraggableColorBox));

/***/ }),

/***/ "./src/NewPalette/DraggableColorBox/DraggableColorList.js":
/*!****************************************************************!*\
  !*** ./src/NewPalette/DraggableColorBox/DraggableColorList.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DraggableColorBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraggableColorBox */ "./src/NewPalette/DraggableColorBox/DraggableColorBox.js");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.umd.js");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/DraggableColorBox/DraggableColorList.js";



const DraggableColorList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableContainer"])(({
  colors,
  deleteBox
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, colors.map((color, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DraggableColorBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    index: i,
    key: color.name,
    color: color.color,
    name: color.name,
    deleteBox: deleteBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (DraggableColorList);

/***/ }),

/***/ "./src/NewPalette/Drawer/ColorForm/ColorPickerForm.js":
/*!************************************************************!*\
  !*** ./src/NewPalette/Drawer/ColorForm/ColorPickerForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPickerForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/Drawer/ColorForm/ColorPickerForm.js";




function ColorPickerForm(props) {
  const updateCurrentColor = props.updateCurrentColor,
        addNewColor = props.addNewColor,
        handleNewColorName = props.handleNewColorName,
        currentColor = props.currentColor,
        colors = props.colors,
        newColorName = props.newColorName,
        paletteIsFull = props.paletteIsFull,
        classes = props.classes;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3__["ValidatorForm"].addValidationRule('isColorNameUnique', value => {
      return colors.every(color => color.name.toLowerCase() !== value.toLowerCase());
    });
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3__["ValidatorForm"].addValidationRule('isColorUnique', value => {
      return colors.every(c => c.color !== currentColor);
    });
  }, [colors, currentColor]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.pickerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    className: classes.picker,
    color: currentColor,
    onChangeComplete: newColor => updateCurrentColor(newColor),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3__["ValidatorForm"], {
    className: classes.formContainer,
    onSubmit: addNewColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_3__["TextValidator"], {
    className: classes.colorNameInput,
    variant: "filled",
    placeholder: "Color Name",
    value: newColorName,
    onChange: handleNewColorName,
    validators: ['required', 'isColorNameUnique', 'isColorUnique'],
    errorMessages: ['Please enter a color name', 'Color name must be unique', 'Color was already used'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.addColor,
    variant: "contained",
    color: "primary",
    style: {
      backgroundColor: paletteIsFull ? 'grey' : currentColor
    },
    type: "submit",
    defaultProps: true,
    disabled: paletteIsFull,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, paletteIsFull ? 'Palette Full' : 'Add Color')));
}

/***/ }),

/***/ "./src/NewPalette/Drawer/DrawerForm.js":
/*!*********************************************!*\
  !*** ./src/NewPalette/Drawer/DrawerForm.js ***!
  \*********************************************/
/*! exports provided: DrawerForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerForm", function() { return DrawerForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Drawer_ColorForm_ColorPickerForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Drawer/ColorForm/ColorPickerForm */ "./src/NewPalette/Drawer/ColorForm/ColorPickerForm.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/Drawer/DrawerForm.js";








class DrawerForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const _this$props = this.props,
          classes = _this$props.classes,
          open = _this$props.open,
          handleDrawerClose = _this$props.handleDrawerClose,
          clearColors = _this$props.clearColors,
          addRandomColor = _this$props.addRandomColor,
          paletteIsFull = _this$props.paletteIsFull,
          updateCurrentColor = _this$props.updateCurrentColor,
          addNewColor = _this$props.addNewColor,
          handleNewColorName = _this$props.handleNewColorName,
          colors = _this$props.colors,
          newColorName = _this$props.newColorName,
          currentColor = _this$props.currentColor;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: classes.drawer,
      variant: "persistent",
      anchor: "left",
      open: open,
      classes: {
        paper: classes.drawerPaper
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.drawerHeader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: handleDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "h4",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Design Your Palette"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.buttons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.button,
      variant: "contained",
      color: "secondary",
      onClick: clearColors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Clear Palette"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.button,
      variant: "contained",
      color: "primary",
      onClick: addRandomColor,
      disabled: paletteIsFull,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Random Colour")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Drawer_ColorForm_ColorPickerForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      updateCurrentColor: updateCurrentColor,
      addNewColor: addNewColor,
      handleNewColorName: handleNewColorName,
      colors: colors,
      newColorName: newColorName,
      currentColor: currentColor,
      paletteIsFull: paletteIsFull,
      classes: classes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (DrawerForm);

/***/ }),

/***/ "./src/NewPalette/Nav/MetaForm/PaletteMetaForm.js":
/*!********************************************************!*\
  !*** ./src/NewPalette/Nav/MetaForm/PaletteMetaForm.js ***!
  \********************************************************/
/*! exports provided: PaletteMetaForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaletteMetaForm", function() { return PaletteMetaForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emoji-mart/css/emoji-mart.css */ "./node_modules/emoji-mart/css/emoji-mart.css");
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emoji-mart */ "./node_modules/emoji-mart/dist-es/index.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/Nav/MetaForm/PaletteMetaForm.js";

 // import TextField from '@material-ui/core/TextField';









class PaletteMetaForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["ValidatorForm"].addValidationRule('isPaletteUnique', value => {
      return this.props.palettes.every(p => p.paletteName.toLowerCase() !== value.toLowerCase());
    });
  }

  render() {
    const _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          newPaletteName = _this$props.newPaletteName,
          handleNewPaletteName = _this$props.handleNewPaletteName,
          isFormOpen = _this$props.isFormOpen,
          formClose = _this$props.formClose,
          formEmoji = _this$props.formEmoji;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      open: isFormOpen === 'emoji',
      onClose: formClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "form-dialog-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Choose a Palette Emoji"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emoji_mart__WEBPACK_IMPORTED_MODULE_9__["Picker"], {
      title: "Pick a palette emoji",
      emoji: "point_up",
      onSelect: handleSubmit,
      set: "emojione",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      open: isFormOpen === 'form',
      onClose: formClose,
      "aria-labelledby": "form-dialog-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "form-dialog-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Choose a Palette Name", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      role: "img",
      "aria-label": "emoji palette name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "\uD83C\uDFA8")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["ValidatorForm"], {
      onSubmit: formEmoji,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Please enter a name for the new palette. Make sure that the name is unique and not left blank."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
      value: newPaletteName,
      label: "Palette Name",
      onChange: handleNewPaletteName,
      fullWidth: true,
      margin: "normal",
      validators: ['required', 'isPaletteUnique'],
      errorMessages: ['Palette name must be entered', 'Palette Name must be unique'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: formClose,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "contained",
      color: "primary",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Save New Palette")))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PaletteMetaForm);

/***/ }),

/***/ "./src/NewPalette/Nav/PaletteFormNav.js":
/*!**********************************************!*\
  !*** ./src/NewPalette/Nav/PaletteFormNav.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LibraryAdd */ "./node_modules/@material-ui/icons/LibraryAdd.js");
/* harmony import */ var _material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _MetaForm_PaletteMetaForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MetaForm/PaletteMetaForm */ "./src/NewPalette/Nav/MetaForm/PaletteMetaForm.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/Nav/PaletteFormNav.js";












function PaletteFormNav(props) {
  const handleDrawerOpen = props.handleDrawerOpen,
        handleSubmit = props.handleSubmit,
        handleNewPaletteName = props.handleNewPaletteName,
        open = props.open,
        newPaletteName = props.newPaletteName,
        classes = props.classes,
        isFormOpen = props.isFormOpen,
        formOpen = props.formOpen,
        formClose = props.formClose,
        formEmoji = props.formEmoji;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "default",
    position: "fixed",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.appBar, {
      [classes.appBarShift]: open
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disableGutters: !open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    "aria-label": "Open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.menuButton, open && classes.hide),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LibraryAdd__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.navTitle,
    variant: "h6",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Create a Palette")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navBtns,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MetaForm_PaletteMetaForm__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({
    handleSubmit: handleSubmit,
    newPaletteName: newPaletteName,
    handleNewPaletteName: handleNewPaletteName,
    isFormOpen: isFormOpen,
    formClose: formClose,
    formEmoji: formEmoji,
    classes: classes
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Go Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    onClick: formOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "SAVE"))));
}

/* harmony default export */ __webpack_exports__["default"] = (PaletteFormNav);

/***/ }),

/***/ "./src/NewPalette/NewPaletteForm.js":
/*!******************************************!*\
  !*** ./src/NewPalette/NewPaletteForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav_PaletteFormNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav/PaletteFormNav */ "./src/NewPalette/Nav/PaletteFormNav.js");
/* harmony import */ var _NewPaletteFormStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewPaletteFormStyles */ "./src/NewPalette/NewPaletteFormStyles.js");
/* harmony import */ var _DraggableColorBox_DraggableColorList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DraggableColorBox/DraggableColorList */ "./src/NewPalette/DraggableColorBox/DraggableColorList.js");
/* harmony import */ var _Drawer_DrawerForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Drawer/DrawerForm */ "./src/NewPalette/Drawer/DrawerForm.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _SeedColors_seedColors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SeedColors/seedColors */ "./src/SeedColors/seedColors.js");

var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/NewPalette/NewPaletteForm.js";









NewPaletteForm.defaultProps = {
  maxColors: _constants_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_COLORS"]
};

function NewPaletteForm(props) {
  const classes = Object(_NewPaletteFormStyles__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('teal'),
        _useState4 = Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        currentColor = _useState4[0],
        setCurrentColor = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.palettes.length === 0 ? [{
    name: 'red',
    color: '#F44336'
  }, {
    name: 'pink',
    color: '#E91E63'
  }, {
    name: 'purple',
    color: '#9C27B0'
  }] : props.palettes[0].colors),
        _useState6 = Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        colors = _useState6[0],
        setColor = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState8 = Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        newColorName = _useState8[0],
        setNewColorName = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState10 = Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        newPaletteName = _useState10[0],
        setNewPaletteName = _useState10[1];

  const paletteIsFull = colors.length >= props.maxColors;

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState12 = Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
        isFormOpen = _useState12[0],
        setIsFormOpen = _useState12[1];

  function formOpen() {
    setIsFormOpen('form');
  }

  function formEmoji() {
    setIsFormOpen('emoji');
  }

  function formClose() {
    setIsFormOpen(false);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function updateCurrentColor(newColor) {
    setCurrentColor(newColor.hex);
  }

  function addNewColor() {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    setColor([...colors, newColor]);
    setNewColorName('');
  }

  function handleNewColorName(e) {
    setNewColorName(e.target.value);
  }

  function deleteBox(colorName) {
    setColor(colors.filter(color => color.name !== colorName));
  }

  function onSortEnd({
    oldIndex,
    newIndex
  }) {
    setColor(array_move__WEBPACK_IMPORTED_MODULE_3___default()(colors, oldIndex, newIndex));
  }

  function clearColors() {
    setColor([]);
  }

  function addRandomColor() {
    // pick random color from existing palettes
    const allColors = _SeedColors_seedColors__WEBPACK_IMPORTED_MODULE_9__["default"].map(palette => palette.colors).flat();
    const randomIndex = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[randomIndex];

    if (colors.every(color => color.name !== randomColor.name && color.color !== randomColor.color)) {
      setColor([...colors, randomColor]);
    } else {
      addRandomColor();
    }
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleSubmit(emoji) {
    let name = newPaletteName;
    const newPalette = {
      paletteName: name,
      id: name.replace(/\s+/g, '-').toLowerCase(),
      emoji: emoji.native,
      colors: colors
    };
    props.savePalette(newPalette);
    props.history.push('/');
  }

  function handleNewPaletteName(e) {
    setNewPaletteName(e.target.value);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Nav_PaletteFormNav__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    handleDrawerOpen: handleDrawerOpen,
    handleSubmit: handleSubmit,
    handleNewPaletteName: handleNewPaletteName,
    open: open,
    newPaletteName: newPaletteName,
    classes: classes,
    isFormOpen: isFormOpen,
    formOpen: formOpen,
    formClose: formClose,
    formEmoji: formEmoji
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Drawer_DrawerForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleDrawerClose: handleDrawerClose,
    clearColors: clearColors,
    addRandomColor: addRandomColor,
    paletteIsFull: paletteIsFull,
    updateCurrentColor: updateCurrentColor,
    addNewColor: addNewColor,
    handleNewColorName: handleNewColorName,
    colors: colors,
    newColorName: newColorName,
    currentColor: currentColor,
    open: open,
    classes: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.content, {
      [classes.contentShift]: open
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.drawerHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DraggableColorBox_DraggableColorList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    axis: "xy",
    colors: colors,
    deleteBox: deleteBox,
    onSortEnd: onSortEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NewPaletteForm);

/***/ }),

/***/ "./src/NewPalette/NewPaletteFormStyles.js":
/*!************************************************!*\
  !*** ./src/NewPalette/NewPaletteFormStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sizes */ "./src/sizes.js");




const drawerWidth = _constants_constants__WEBPACK_IMPORTED_MODULE_2__["DRAWER_WIDTH"];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appBarShift: {
    width: "calc(100% - ".concat(drawerWidth, "px)"),
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    margin: theme.spacing(2),
    [_sizes__WEBPACK_IMPORTED_MODULE_3__["default"].down('xs')]: {
      margin: theme.spacing(0)
    }
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  drawerHeader: Object(_Users_Jonathan_Desktop_react_exercises_colour_project_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alignSelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px'
  }, theme.mixins.toolbar, {
    justifyContent: 'flex-end'
  }),
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px) ',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  navBtns: {
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& button': {
      margin: '0 0.5rem',
      [_sizes__WEBPACK_IMPORTED_MODULE_3__["default"].down('xs')]: {
        padding: '.3rem',
        fontSize: '.6rem',
        margin: '.2rem'
      }
    },
    '& a': {
      textDecoration: 'none'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_3__["default"].down('xs')]: {
      marginRight: '.5rem'
    }
  },
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    width: '100%',
    marginBottom: '1rem'
  },
  button: {
    width: '50%'
  },
  picker: {
    width: '80% !important',
    marginTop: '2rem'
  },
  pickerContainer: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addColor: {
    width: '80%',
    padding: '1rem',
    margin: '2rem 0',
    fontSize: '1.2rem'
  },
  colorNameInput: {
    width: '80%',
    height: '20px',
    margin: '1rem 0 2rem 0'
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navTitle: {
    [_sizes__WEBPACK_IMPORTED_MODULE_3__["default"].down('xs')]: {
      fontSize: '.8rem'
    },
    '@media only screen and (max-width: 450px)': {
      fontSize: '.8rem'
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./src/Palette/ColorBox/ColorBox.js":
/*!******************************************!*\
  !*** ./src/Palette/ColorBox/ColorBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _ColorBoxStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorBoxStyles */ "./src/Palette/ColorBox/ColorBoxStyles.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/Palette/ColorBox/ColorBox.js";






class ColorBox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({
      copied: true
    }, () => {
      setTimeout(() => this.setState({
        copied: false
      }), 1500);
    });
  }

  render() {
    const _this$props = this.props,
          name = _this$props.name,
          background = _this$props.background,
          moreUrl = _this$props.moreUrl,
          showingFullPalette = _this$props.showingFullPalette,
          classes = _this$props.classes;
    const copied = this.state.copied;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
      text: background,
      onCopy: this.changeCopyState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        background
      },
      className: classes.ColorBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        background
      },
      className: "".concat(classes.copyOverlay, " ").concat(copied && classes.showOverlay),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(classes.copyMsg, " ").concat(copied && classes.showMsg),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "copied!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classes.copyText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, background)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.boxContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.colorName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classes.copyButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Copy")), showingFullPalette && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: moreUrl,
      onClick: e => e.stopPropagation(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.seeMore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "More"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(_ColorBoxStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(ColorBox));

/***/ }),

/***/ "./src/Palette/ColorBox/ColorBoxStyles.js":
/*!************************************************!*\
  !*** ./src/Palette/ColorBox/ColorBoxStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sizes */ "./src/sizes.js");


const styles = {
  ColorBox: {
    width: '20%',
    height: props => props.showingFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
    cursor: 'pointer',
    '&:hover button': {
      opacity: '1'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('lg')]: {
      width: '25%',
      height: props => props.showingFullPalette ? '20' : '33.3333%'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('md')]: {
      width: '50%',
      height: props => props.showingFullPalette ? '10%' : '20%'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs')]: {
      width: '100%',
      height: props => props.showingFullPalette ? '5%' : '10%'
    }
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, .3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    color: props => chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(props.background).luminance() <= 0.2 ? 'white' : '#2B2B2B',
    textDecoration: 'none',
    opacity: '0'
  },
  seeMore: {
    color: props => chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(props.background).luminance() >= 0.65 ? '#2B2B2B' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transform: 'scale(.1)',
    transition: 'transform 0.6s ease-in-out'
  },
  copyMsg: {
    position: 'fixed',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    [_sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs')]: {
      fontSize: '2.5rem'
    },
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, .2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  showMsg: {
    transition: 'all .4s ease-in-out .3s',
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '20'
  },
  copyText: {
    color: props => chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(props.background).luminance() >= 0.6 ? '#2B2B2B' : 'white'
  },
  colorName: {
    color: props => chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(props.background).luminance() <= 0.2 ? 'white' : '#2B2B2B'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/Palette/Footer/PaletteFooter.js":
/*!*********************************************!*\
  !*** ./src/Palette/Footer/PaletteFooter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaletteFooterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaletteFooterStyles */ "./src/Palette/Footer/PaletteFooterStyles.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/Palette/Footer/PaletteFooter.js";





function PaletteFooter(props) {
  const paletteName = props.paletteName,
        emoji = props.emoji,
        classes = props.classes,
        id = props.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/colour-project/palette/".concat(id),
    className: classes.PaletteFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, paletteName, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.emoji,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, emoji)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_PaletteFooterStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(PaletteFooter));

/***/ }),

/***/ "./src/Palette/Footer/PaletteFooterStyles.js":
/*!***************************************************!*\
  !*** ./src/Palette/Footer/PaletteFooterStyles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  PaletteFooter: {
    backgroundColor: '#fff',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#000'
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/Palette/Nav/Navbar.js":
/*!***********************************!*\
  !*** ./src/Palette/Nav/Navbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _NavbarStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavbarStyles */ "./src/Palette/Nav/NavbarStyles.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/Palette/Nav/Navbar.js";












class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({
      format: e.target.value,
      open: true
    });
    this.props.handleChange(e.target.value);
  }

  closeSnackBar() {
    this.setState({
      open: false
    });
  }

  render() {
    const _this$props = this.props,
          changeLevel = _this$props.changeLevel,
          level = _this$props.level,
          showSlider = _this$props.showSlider,
          classes = _this$props.classes;
    const format = this.state.format;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: classes.Navbar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Colour Picker")), showSlider && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sliderContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Level: ", level), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.slider,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      defaultValue: level,
      min: 100,
      max: 900,
      step: 100,
      onAfterChange: changeLevel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.selectContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: format,
      onChange: this.handleFormatChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: "hex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "HEX - #ffffff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: "rgb",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "RGB - rgb(255,255,255)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: "rgba",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "RGBA - rgb(255,255,255,1.0)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      open: this.state.open,
      autoHideDuration: 3000,
      message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "message-id",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Format Changed to ", format.toUpperCase()),
      ContentProps: {
        'aria-describedby': 'message-id'
      },
      action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
        onClick: this.closeSnackBar,
        color: "inherit",
        key: "close",
        "aria-label": "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))],
      onClose: this.closeSnackBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(_NavbarStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(Navbar));

/***/ }),

/***/ "./src/Palette/Nav/NavbarStyles.js":
/*!*****************************************!*\
  !*** ./src/Palette/Nav/NavbarStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sizes */ "./src/sizes.js");

const styles = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '7vh',
    width: '100%'
  },
  logo: {
    marginRight: '40px',
    padding: '0 13px',
    fontSize: '30px',
    fontFamily: 'Pacifico, cursive',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('sm')]: {
      fontSize: '20px',
      margin: '0'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      display: 'none'
    }
  },
  sliderContainer: {
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      display: 'flex',
      fontSize: '.7rem',
      padding: '0 .5rem'
    }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      width: '7rem'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-2px'
    }
  },
  selectContainer: {
    marginLeft: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/Palette/Palette.js":
/*!********************************!*\
  !*** ./src/Palette/Palette.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaletteStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaletteStyles */ "./src/Palette/PaletteStyles.js");
/* harmony import */ var _Nav_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav/Navbar */ "./src/Palette/Nav/Navbar.js");
/* harmony import */ var _Footer_PaletteFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer/PaletteFooter */ "./src/Palette/Footer/PaletteFooter.js");
/* harmony import */ var _ColorBox_ColorBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorBox/ColorBox */ "./src/Palette/ColorBox/ColorBox.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/Palette/Palette.js";







class Pallete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({
      level
    });
  }

  changeFormat(val) {
    this.setState({
      format: val
    });
  }

  render() {
    const _this$props$palette = this.props.palette,
          colors = _this$props$palette.colors,
          paletteName = _this$props$palette.paletteName,
          emoji = _this$props$palette.emoji,
          id = _this$props$palette.id;
    const classes = this.props.classes;
    const _this$state = this.state,
          level = _this$state.level,
          format = _this$state.format;
    const colorBoxes = colors[level].map(box => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorBox_ColorBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: box.id,
      background: box[format],
      name: box.name,
      moreUrl: "/colour-project/palette/".concat(id, "/").concat(box.id),
      showingFullPalette: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.Palette,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleChange: this.changeFormat,
      level: level,
      changeLevel: this.changeLevel,
      showSlider: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.PaletteColors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, colorBoxes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_PaletteFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      paletteName: paletteName,
      emoji: emoji,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(_PaletteStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(Pallete));

/***/ }),

/***/ "./src/Palette/PaletteStyles.js":
/*!**************************************!*\
  !*** ./src/Palette/PaletteStyles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sizes */ "./src/sizes.js");

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  PaletteColors: {
    height: '88%'
  },
  goBack: {
    backgroundColor: 'black',
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
    cursor: 'pointer',
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('lg')]: {
      width: '75%',
      height: '33.3333%'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('md')]: {
      width: '50%',
      height: '20%'
    },
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      width: '100%',
      height: '10%'
    }
  },
  backButton: {
    width: '100px',
    height: ' 30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, .3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    color: 'white',
    textDecoration: 'none'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/Palette/SingleColorPalette/SingleColorPalette.js":
/*!**************************************************************!*\
  !*** ./src/Palette/SingleColorPalette/SingleColorPalette.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ColorBox_ColorBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ColorBox/ColorBox */ "./src/Palette/ColorBox/ColorBox.js");
/* harmony import */ var _Nav_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Nav/Navbar */ "./src/Palette/Nav/Navbar.js");
/* harmony import */ var _Footer_PaletteFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/PaletteFooter */ "./src/Palette/Footer/PaletteFooter.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _PaletteStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PaletteStyles */ "./src/Palette/PaletteStyles.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/Palette/SingleColorPalette/SingleColorPalette.js";








class SingleColorPalette extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // might change color format so we need state
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
    this.state = {
      format: 'hex'
    };
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({
      format: val
    });
  }

  render() {
    const format = this.state.format;
    const _this$props$palette = this.props.palette,
          paletteName = _this$props$palette.paletteName,
          emoji = _this$props$palette.emoji,
          id = _this$props$palette.id;
    const classes = this.props.classes;

    const colorBoxes = this._shades.map(color => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorBox_ColorBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      showingFullPalette: false,
      key: color.hex,
      name: color.name,
      background: color[format],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.Palette,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleChange: this.changeFormat,
      showSlider: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.PaletteColors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, colorBoxes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.goBack,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/colour-project/palette/".concat(id),
      className: classes.backButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Go Back"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_PaletteFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      paletteName: paletteName,
      emoji: emoji,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(_PaletteStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(SingleColorPalette));

/***/ }),

/***/ "./src/PaletteList/MiniPalette.js":
/*!****************************************!*\
  !*** ./src/PaletteList/MiniPalette.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _MiniPaletteStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniPaletteStyles */ "./src/PaletteList/MiniPaletteStyles.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/PaletteList/MiniPalette.js";





const MiniPalette = props => {
  const classes = props.classes,
        paletteName = props.paletteName,
        emoji = props.emoji,
        colors = props.colors,
        deletePalette = props.deletePalette,
        id = props.id;
  const miniColorBoxes = colors.map(color => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.miniColor,
    style: {
      backgroundColor: color.color
    },
    key: color.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));

  function handleDelete(e) {
    e.stopPropagation();
    deletePalette(id);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    onClick: props.handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.delete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.deleteIcon,
    onClick: handleDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.colors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, miniColorBoxes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, paletteName, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.emoji,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, emoji)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_MiniPaletteStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(MiniPalette));

/***/ }),

/***/ "./src/PaletteList/MiniPaletteStyles.js":
/*!**********************************************!*\
  !*** ./src/PaletteList/MiniPaletteStyles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid  black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    gridTemplateRows: 'repeat(4,1fr)',
    height: '10rem',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: '#000',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    width: '100%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '0'
  },
  delete: {},
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '10px',
    zIndex: '10',
    opacity: '0',
    transition: 'all 0.3s'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

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

/***/ }),

/***/ "./src/PaletteList/PaletteListStyles.js":
/*!**********************************************!*\
  !*** ./src/PaletteList/PaletteListStyles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sizes */ "./src/sizes.js");
/* harmony import */ var _bg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bg.svg */ "./src/bg.svg");
/* harmony import */ var _bg_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bg_svg__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  root: {
    backgroundColor: '#3915bb',
    backgroundImage: "url(".concat(_bg_svg__WEBPACK_IMPORTED_MODULE_1___default.a, ")"),
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll' // /* background by SVGBackgrounds.com */

  },
  container: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      width: '90%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    margin: '1rem 0',
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      flexDirection: 'column'
    },
    '& h1': {
      fontSize: '1rem'
    },
    '& a': {
      color: 'white',
      [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
        fontSize: '1rem',
        textDecoration: 'none',
        backgroundColor: '#e01b5c',
        padding: '.5rem',
        borderRadius: '2px'
      }
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridColumnGap: '5%',
    gridRowGap: '2%'
  },
  logo: {
    fontFamily: 'Pacifico, cursive',
    fontWeight: '200',
    fontSize: '2rem',
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      fontSize: '3rem',
      display: 'initial'
    }
  },
  label: {
    [_sizes__WEBPACK_IMPORTED_MODULE_0__["default"].down('xs')]: {
      display: 'none'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/SeedColors/colorHelpers.js":
/*!****************************************!*\
  !*** ./src/SeedColors/colorHelpers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: "".concat(color.name, " ").concat(levels[i]),
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(scale[i]).css(),
        rgba: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
      });
    }
  }

  return newPalette;
}

function getRange(hexColor) {
  const end = '#fff'; // generates 3 colour value range

  return [chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(hexColor).darken(1.4).hex(), hexColor, end];
}

function generateScale(hexColor, numberOfColors) {
  return chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

/* harmony default export */ __webpack_exports__["default"] = (generatePalette);

/***/ }),

/***/ "./src/SeedColors/seedColors.js":
/*!**************************************!*\
  !*** ./src/SeedColors/seedColors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  paletteName: 'Material UI Colors',
  id: 'material-ui-colors',
  emoji: '🎨',
  colors: [{
    name: 'red',
    color: '#F44336'
  }, {
    name: 'pink',
    color: '#E91E63'
  }, {
    name: 'purple',
    color: '#9C27B0'
  }, {
    name: 'deeppurple',
    color: '#673AB7'
  }, {
    name: 'indigo',
    color: '#3F51B5'
  }, {
    name: 'blue',
    color: '#2196F3'
  }, {
    name: 'lightblue',
    color: '#03A9F4'
  }, {
    name: 'cyan',
    color: '#00BCD4'
  }, {
    name: 'teal',
    color: '#009688'
  }, {
    name: 'green',
    color: '#4CAF50'
  }, {
    name: 'lightgreen',
    color: '#8BC34A'
  }, {
    name: 'lime',
    color: '#CDDC39'
  }, {
    name: 'yellow',
    color: '#FFEB3B'
  }, {
    name: 'amber',
    color: '#FFC107'
  }, {
    name: 'orange',
    color: '#FF9800'
  }, {
    name: 'deeporange',
    color: '#FF5722'
  }, {
    name: 'brown',
    color: '#795548'
  }, {
    name: 'grey',
    color: '#9E9E9E'
  }, {
    name: 'bluegrey',
    color: '#607D8B'
  }]
}, {
  paletteName: 'Flat UI Colors v1',
  id: 'flat-ui-colors-v1',
  emoji: '🤙',
  colors: [{
    name: 'Turquoise',
    color: '#1abc9c'
  }, {
    name: 'Emerald',
    color: '#2ecc71'
  }, {
    name: 'PeterRiver',
    color: '#3498db'
  }, {
    name: 'Amethyst',
    color: '#9b59b6'
  }, {
    name: 'WetAsphalt',
    color: '#34495e'
  }, {
    name: 'GreenSea',
    color: '#16a085'
  }, {
    name: 'Nephritis',
    color: '#27ae60'
  }, {
    name: 'BelizeHole',
    color: '#2980b9'
  }, {
    name: 'Wisteria',
    color: '#8e44ad'
  }, {
    name: 'MidnightBlue',
    color: '#2c3e50'
  }, {
    name: 'SunFlower',
    color: '#f1c40f'
  }, {
    name: 'Carrot',
    color: '#e67e22'
  }, {
    name: 'Alizarin',
    color: '#e74c3c'
  }, {
    name: 'Clouds',
    color: '#ecf0f1'
  }, {
    name: 'Concrete',
    color: '#95a5a6'
  }, {
    name: 'Orange',
    color: '#f39c12'
  }, {
    name: 'Pumpkin',
    color: '#d35400'
  }, {
    name: 'Pomegranate',
    color: '#c0392b'
  }, {
    name: 'Silver',
    color: '#bdc3c7'
  }, {
    name: 'Asbestos',
    color: '#7f8c8d'
  }]
}, {
  paletteName: 'Flat UI Colors Dutch',
  id: 'flat-ui-colors-dutch',
  emoji: '👱‍',
  colors: [{
    name: 'Sunflower',
    color: '#FFC312'
  }, {
    name: 'Energos',
    color: '#C4E538'
  }, {
    name: 'BlueMartina',
    color: '#12CBC4'
  }, {
    name: 'LavenderRose',
    color: '#FDA7DF'
  }, {
    name: 'BaraRose',
    color: '#ED4C67'
  }, {
    name: 'RadiantYellow',
    color: '#F79F1F'
  }, {
    name: 'AndroidGreen',
    color: '#A3CB38'
  }, {
    name: 'MediterraneanSea',
    color: '#1289A7'
  }, {
    name: 'LavenderTea',
    color: '#D980FA'
  }, {
    name: 'VerryBerry',
    color: '#B53471'
  }, {
    name: 'PuffinsBill',
    color: '#EE5A24'
  }, {
    name: 'PixelatedGrass',
    color: '#009432'
  }, {
    name: 'MerchantMarineBlue',
    color: '#0652DD'
  }, {
    name: 'ForgottenPurple',
    color: '#9980FA'
  }, {
    name: 'HollyHock',
    color: '#833471'
  }, {
    name: 'RedPigment',
    color: '#EA2027'
  }, {
    name: 'TurkishAqua',
    color: '#006266'
  }, {
    name: '20000LeaguesUnderTheSea',
    color: '#1B1464'
  }, {
    name: 'CircumorbitalRing',
    color: '#5758BB'
  }, {
    name: 'MagentaPurple',
    color: '#6F1E51'
  }]
}, {
  paletteName: 'Flat UI Colors American',
  id: 'flat-ui-colors-american',
  emoji: '🏃‍',
  colors: [{
    name: 'LightGreenishBlue',
    color: '#55efc4'
  }, {
    name: 'FadedPoster',
    color: '#81ecec'
  }, {
    name: 'GreenDarnerTail',
    color: '#74b9ff'
  }, {
    name: 'ShyMoment',
    color: '#a29bfe'
  }, {
    name: 'CityLights',
    color: '#dfe6e9'
  }, {
    name: 'MintLeaf',
    color: '#00b894'
  }, {
    name: 'RobinsEggBlue',
    color: '#00cec9'
  }, {
    name: 'ElectronBlue',
    color: '#0984e3'
  }, {
    name: 'ExodusFruit',
    color: '#6c5ce7'
  }, {
    name: 'SoothingBreeze',
    color: '#b2bec3'
  }, {
    name: 'SourLemon',
    color: '#ffeaa7'
  }, {
    name: 'FirstDate',
    color: '#fab1a0'
  }, {
    name: 'PinkGlamour',
    color: '#ff7675'
  }, {
    name: 'Pico8Pink',
    color: '#fd79a8'
  }, {
    name: 'AmericanRiver',
    color: '#636e72'
  }, {
    name: 'BrightYarrow',
    color: '#fdcb6e'
  }, {
    name: 'OrangeVille',
    color: '#e17055'
  }, {
    name: 'Chi-Gong',
    color: '#d63031'
  }, {
    name: 'PrunusAvium',
    color: '#e84393'
  }, {
    name: 'DraculaOrchid',
    color: '#2d3436'
  }]
}, {
  paletteName: 'Flat UI Colors Aussie',
  id: 'flat-ui-colors-aussie',
  emoji: '🐨',
  colors: [{
    name: 'Beekeeper',
    color: '#f6e58d'
  }, {
    name: 'SpicedNectarine',
    color: '#ffbe76'
  }, {
    name: 'PinkGlamour',
    color: '#ff7979'
  }, {
    name: 'JuneBud',
    color: '#badc58'
  }, {
    name: 'CoastalBreeze',
    color: '#dff9fb'
  }, {
    name: 'Turbo',
    color: '#f9ca24'
  }, {
    name: 'QuinceJelly',
    color: '#f0932b'
  }, {
    name: 'CarminePink',
    color: '#eb4d4b'
  }, {
    name: 'PureApple',
    color: '#6ab04c'
  }, {
    name: 'HintOfIcePack',
    color: '#c7ecee'
  }, {
    name: 'MiddleBlue',
    color: '#7ed6df'
  }, {
    name: 'Heliotrope',
    color: '#e056fd'
  }, {
    name: 'ExodusFruit',
    color: '#686de0'
  }, {
    name: 'DeepKoamaru',
    color: '#30336b'
  }, {
    name: 'SoaringEagle',
    color: '#95afc0'
  }, {
    name: 'GreenlandGreen',
    color: '#22a6b3'
  }, {
    name: 'SteelPink',
    color: '#be2edd'
  }, {
    name: 'Blurple',
    color: '#4834d4'
  }, {
    name: 'DeepCove',
    color: '#130f40'
  }, {
    name: 'WizardGrey',
    color: '#535c68'
  }]
}, {
  paletteName: 'Flat UI Colors British',
  id: 'flat-ui-colors-british',
  emoji: '🤯',
  colors: [{
    name: 'ProtossPylon',
    color: '#00a8ff'
  }, {
    name: 'Periwinkle',
    color: '#9c88ff'
  }, {
    name: 'Rise-N-Shine',
    color: '#fbc531'
  }, {
    name: 'DownloadProgress',
    color: '#4cd137'
  }, {
    name: 'Seabrook',
    color: '#487eb0'
  }, {
    name: 'VanaDylBlue',
    color: '#0097e6'
  }, {
    name: 'MattPurple',
    color: '#8c7ae6'
  }, {
    name: 'NanohanachaGold',
    color: '#e1b12c'
  }, {
    name: 'SkirretGreen',
    color: '#44bd32'
  }, {
    name: 'Naval',
    color: '#40739e'
  }, {
    name: 'NasturcianFlower',
    color: '#e84118'
  }, {
    name: 'LynxWhite',
    color: '#f5f6fa'
  }, {
    name: 'BlueberrySoda',
    color: '#7f8fa6'
  }, {
    name: 'MazarineBlue',
    color: '#273c75'
  }, {
    name: 'BlueNights',
    color: '#353b48'
  }, {
    name: 'HarleyOrange',
    color: '#c23616'
  }, {
    name: 'HintOfPensive',
    color: '#dcdde1'
  }, {
    name: 'ChainGangGrey',
    color: '#718093'
  }, {
    name: 'PicoVoid',
    color: '#192a56'
  }, {
    name: 'ElectroMagnetic',
    color: '#2f3640'
  }]
}, {
  paletteName: 'Flat UI Colors Spanish',
  id: 'flat-ui-colors-spanish',
  emoji: '🤔',
  colors: [{
    name: 'JacksonsPurple',
    color: '#40407a'
  }, {
    name: 'C64Purple',
    color: '#706fd3'
  }, {
    name: 'SwanWhite',
    color: '#f7f1e3'
  }, {
    name: 'SummerSky',
    color: '#34ace0'
  }, {
    name: 'CelestialGreen',
    color: '#33d9b2'
  }, {
    name: 'LuckyPoint',
    color: '#2c2c54'
  }, {
    name: 'Liberty',
    color: '#474787'
  }, {
    name: 'HotStone',
    color: '#aaa69d'
  }, {
    name: 'DevilBlue',
    color: '#227093'
  }, {
    name: 'PalmSpringsSplash',
    color: '#218c74'
  }, {
    name: 'FlourescentRed',
    color: '#ff5252'
  }, {
    name: 'SyntheticPumpkin',
    color: '#ff793f'
  }, {
    name: 'CrocodileTooth',
    color: '#d1ccc0'
  }, {
    name: 'MandarinSorbet',
    color: '#ffb142'
  }, {
    name: 'SpicedButterNut',
    color: '#ffda79'
  }, {
    name: 'EyeOfNewt',
    color: '#b33939'
  }, {
    name: 'ChileanFire',
    color: '#cd6133'
  }, {
    name: 'GreyPorcelain',
    color: '#84817a'
  }, {
    name: 'AlamedaOchre',
    color: '#cc8e35'
  }, {
    name: 'Desert',
    color: '#ccae62'
  }]
}, {
  paletteName: 'Flat UI Colors Indian',
  id: 'flat-ui-colors-indian',
  emoji: '👳🏾‍',
  colors: [{
    name: 'OrchidOrange',
    color: '#FEA47F'
  }, {
    name: 'SpiroDiscoBall',
    color: '#25CCF7'
  }, {
    name: 'HoneyGlow',
    color: '#EAB543'
  }, {
    name: 'SweetGarden',
    color: '#55E6C1'
  }, {
    name: 'FallingStar',
    color: '#CAD3C8'
  }, {
    name: 'RichGardenia',
    color: '#F97F51'
  }, {
    name: 'ClearChill',
    color: '#1B9CFC'
  }, {
    name: 'WhitePepper',
    color: '#F8EFBA'
  }, {
    name: 'Keppel',
    color: '#58B19F'
  }, {
    name: 'ShipsOfficer',
    color: '#2C3A47'
  }, {
    name: 'FieryFuchsia',
    color: '#B33771'
  }, {
    name: 'BlueBell',
    color: '#3B3B98'
  }, {
    name: 'GeorgiaPeach',
    color: '#FD7272'
  }, {
    name: 'OasisStream',
    color: '#9AECDB'
  }, {
    name: 'BrightUbe',
    color: '#D6A2E8'
  }, {
    name: 'MagentaPurple',
    color: '#6D214F'
  }, {
    name: 'EndingNavyBlue',
    color: '#182C61'
  }, {
    name: 'SasquatchSocks',
    color: '#FC427B'
  }, {
    name: 'PineGlade',
    color: '#BDC581'
  }, {
    name: 'HighlighterLavender',
    color: '#82589F'
  }]
}, {
  paletteName: 'Flat UI Colors French',
  id: 'flat-ui-colors-french',
  emoji: '🛎',
  colors: [{
    name: 'FlatFlesh',
    color: '#fad390'
  }, {
    name: 'MelonMelody',
    color: '#f8c291'
  }, {
    name: 'Livid',
    color: '#6a89cc'
  }, {
    name: 'Spray',
    color: '#82ccdd'
  }, {
    name: 'ParadiseGreen',
    color: '#b8e994'
  }, {
    name: 'SquashBlossom',
    color: '#f6b93b'
  }, {
    name: 'MandarinRed',
    color: '#e55039'
  }, {
    name: 'AzraqBlue',
    color: '#4a69bd'
  }, {
    name: 'Dupain',
    color: '#60a3bc'
  }, {
    name: 'AuroraGreen',
    color: '#78e08f'
  }, {
    name: 'IcelandPoppy',
    color: '#fa983a'
  }, {
    name: 'TomatoRed',
    color: '#eb2f06'
  }, {
    name: 'YueGuangBlue',
    color: '#1e3799'
  }, {
    name: 'GoodSamaritan',
    color: '#3c6382'
  }, {
    name: 'Waterfall',
    color: '#38ada9'
  }, {
    name: 'CarrotOrange',
    color: '#e58e26'
  }, {
    name: 'JalapenoRed',
    color: '#b71540'
  }, {
    name: 'DarkSapphire',
    color: '#0c2461'
  }, {
    name: 'ForestBlues',
    color: '#0a3d62'
  }, {
    name: 'ReefEncounter',
    color: '#079992'
  }]
}]);

/***/ }),

/***/ "./src/bg.svg":
/*!********************!*\
  !*** ./src/bg.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg.b595ad80.svg";

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/*! exports provided: DRAWER_WIDTH, MAX_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAWER_WIDTH", function() { return DRAWER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLORS", function() { return MAX_COLORS; });
const mq = window.matchMedia('(min-width: 500px)');
const DRAWER_WIDTH = mq.matches ? 400 : 200;
const MAX_COLORS = 20;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/Jonathan/Desktop/react-exercises/colour-project/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["register"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/sizes.js":
/*!**********************!*\
  !*** ./src/sizes.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  up() {},

  down(size) {
    const sizes = {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px'
    };
    return "@media only screen and (max-width: ".concat(sizes[size], ")");
  }

});

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Jonathan/Desktop/react-exercises/colour-project/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Jonathan/Desktop/react-exercises/colour-project/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map