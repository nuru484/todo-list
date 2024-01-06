/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  background-color: #ececec;
}

header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 2px solid #2abd67;
  background-color: #f2f3f5;
  padding: 20px;
  position: sticky;
  top: 0;
}

#logo-container {
  list-style: none;
}

#completed-tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: auto 0;
  height: 50px;
  border-radius: 8px;
  border: 3.15px solid black;
  font-family: Arial, Helvetica, sans-serif;
}

#app-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: #374958;
  gap: 8px;
}
#app-title p span {
  color: #2abd67;
}

nav {
  display: flex;
  flex-direction: column;
  background-color: #fefcfe;
  width: 20%;
  position: fixed;
  left: 0;
  height: 80vh;
  padding: 20px;
  overflow: hidden;
}

#home-heading,
#projects-heading {
  font-family: Arial, Helvetica, sans-serif;
  color: #374958;
  border-bottom: 2px solid #374958;
  padding: 5px;
  font-size: 1.2rem;
  overflow-y: hidden;
}

#inbox,
#today,
#important,
#this-week {
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 5px;
  margin: 15px 10px;
  padding: 5px 15px;
}

#add-project {
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 20px;
  margin: 5px 10px;
  padding: 5px 15px;
  width: 200px;
  text-align: left;
}

#project-name-input {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  align-items: center;
  padding: 0 5px;
  background-color: #f2f3f5;
}

#project-name-id {
  border-style: none;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
  border: 2px solid #374958;
}

#submit-project-name,
#cancel-project-name {
  border-style: none;
  padding: 5px;
  margin: 5px;
  width: 30%;
  font-size: 1rem;
  border-radius: 2px;
  color: white;
  background-color: #2abd67;
}

#cancel-project-name {
  background-color: rgb(190, 4, 4);
}

.project-container {
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 20px;
  margin: 5px 10px;
  padding: 5px 15px;
  justify-content: space-between;
}

#projects-container {
  height: 240px;
  overflow-y: scroll;
}

#active-container {
  background-color: #2abd67;
  height: 5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  margin-bottom: 20px;
}

#add-todo-button {
  background-color: white;
  padding: 8px 25px;
  border-radius: 2px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  gap: 15px;
}

#main-content {
  margin: 30px 25px 100px 340px;
  padding: 20px;
}

.todo-form-container {
  display: none;
}

.todo-form-show {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.7);
  width: 100vw;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

form {
  background-color: #f2f3f5;
  margin: auto auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

form input,
form textarea,
form select {
  margin: 10px;
  padding: 10px;
}

.todo-container {
  display: grid;
  justify-content: center;
  grid-template-columns: 80% 5% 5%;
  padding: 8px;
  margin: 20px;
  border: 2px solid #374958;
}

.todo-container.active {
  display: grid;
  grid-template-columns: 80% 5% 5%;
  grid-template-rows: 20px 1fr;
  padding: 10px;
  justify-content: center;
  border: 2px solid #374958;
}

.todo-detail-container {
  grid-column: 1/4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  border: 2px solid white;
  padding: 10px;
  margin-top: 10px;
  background-color: #ececec;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: rgb(133, 127, 127);
  height: 50px;
  width: 100vw;
  text-align: center;
  line-height: 2.5;
}
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-x: hidden;\n  background-color: #ececec;\n}\n\nheader {\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  width: 100vw;\n  border-bottom: 2px solid #2abd67;\n  background-color: #f2f3f5;\n  padding: 20px;\n  position: sticky;\n  top: 0;\n}\n\n#logo-container {\n  list-style: none;\n}\n\n#completed-tasks {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin: auto 0;\n  height: 50px;\n  border-radius: 8px;\n  border: 3.15px solid black;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#app-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.2rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  color: #374958;\n  gap: 8px;\n}\n#app-title p span {\n  color: #2abd67;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #fefcfe;\n  width: 20%;\n  position: fixed;\n  left: 0;\n  height: 80vh;\n  padding: 20px;\n  overflow: hidden;\n}\n\n#home-heading,\n#projects-heading {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #374958;\n  border-bottom: 2px solid #374958;\n  padding: 5px;\n  font-size: 1.2rem;\n  overflow-y: hidden;\n}\n\n#inbox,\n#today,\n#important,\n#this-week {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  gap: 5px;\n  margin: 15px 10px;\n  padding: 5px 15px;\n}\n\n#add-project {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  gap: 20px;\n  margin: 5px 10px;\n  padding: 5px 15px;\n  width: 200px;\n  text-align: left;\n}\n\n#project-name-input {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px auto;\n  align-items: center;\n  padding: 0 5px;\n  background-color: #f2f3f5;\n}\n\n#project-name-id {\n  border-style: none;\n  margin: 5px;\n  padding: 5px;\n  border-radius: 2px;\n  border: 2px solid #374958;\n}\n\n#submit-project-name,\n#cancel-project-name {\n  border-style: none;\n  padding: 5px;\n  margin: 5px;\n  width: 30%;\n  font-size: 1rem;\n  border-radius: 2px;\n  color: white;\n  background-color: #2abd67;\n}\n\n#cancel-project-name {\n  background-color: rgb(190, 4, 4);\n}\n\n.project-container {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  gap: 20px;\n  margin: 5px 10px;\n  padding: 5px 15px;\n  justify-content: space-between;\n}\n\n#projects-container {\n  height: 240px;\n  overflow-y: scroll;\n}\n\n#active-container {\n  background-color: #2abd67;\n  height: 5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 2rem;\n  color: white;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  margin-bottom: 20px;\n}\n\n#add-todo-button {\n  background-color: white;\n  padding: 8px 25px;\n  border-radius: 2px;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n#main-content {\n  margin: 30px 25px 100px 340px;\n  padding: 20px;\n}\n\n.todo-form-container {\n  display: none;\n}\n\n.todo-form-show {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(10, 10, 10, 0.7);\n  width: 100vw;\n  height: 100vh;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n}\n\nform {\n  background-color: #f2f3f5;\n  margin: auto auto;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n}\n\nform input,\nform textarea,\nform select {\n  margin: 10px;\n  padding: 10px;\n}\n\n.todo-container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 80% 5% 5%;\n  padding: 8px;\n  margin: 20px;\n  border: 2px solid #374958;\n}\n\n.todo-container.active {\n  display: grid;\n  grid-template-columns: 80% 5% 5%;\n  grid-template-rows: 20px 1fr;\n  padding: 10px;\n  justify-content: center;\n  border: 2px solid #374958;\n}\n\n.todo-detail-container {\n  grid-column: 1/4;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 10px;\n  border: 2px solid white;\n  padding: 10px;\n  margin-top: 10px;\n  background-color: #ececec;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background-color: rgb(133, 127, 127);\n  height: 50px;\n  width: 100vw;\n  text-align: center;\n  line-height: 2.5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   showForm: () => (/* binding */ showForm),
/* harmony export */   toggleForm: () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ "./src/js/validation.js");
// Imports the other modules of the project



// Create an in of the TodoList class in the todo.js module
const todoList = new _todo__WEBPACK_IMPORTED_MODULE_0__.TodoList();

// A function to grab the value of the properties of a todo
const todoProperty = () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("date");
  const priority = document.getElementById("priority");

  // Returns the value of title and all the properties
  return { title, description, dueDate, priority };
};

let currentProject = "Inbox";

// Creates a todo by calling the todoList.createTodoForInbox method to create todos for the inbox
const createTodo = (currentProject) => {
  const todoProperties = todoProperty();

  if (currentProject === "Inbox") {
    todoList.createTodo(
      todoProperties.title.value,
      todoProperties.description.value,
      todoProperties.dueDate.value,
      todoProperties.priority.value,
      currentProject
    );

    // Runs the todosFunction everytime a new todo is created
    todosFunction();
  } else {
    // Handle project-specific todos if needed
    todoList.createTodo(
      todoProperties.title.value,
      todoProperties.description.value,
      todoProperties.dueDate.value,
      todoProperties.priority.value,
      currentProject
    );

    projectTodos(currentProject);
  }
};

let isFormVisible = false;

// function to toggle the
const showForm = () => {
  isFormVisible = !isFormVisible;

  if (isFormVisible) {
    todoDetailsFormContainer.classList.add("todo-form-show");
    todoDetailsFormContainer.classList.remove("todo-form-container");
  } else {
    todoDetailsFormContainer.classList.remove("todo-form-show");
    todoDetailsFormContainer.classList.add("todo-form-container");
  }
};

//show only the add task-button when the add task button

const showAddTaskButton = () => {
  const addTaskButton = document.getElementById("submit");
  addTaskButton.style.display = "block";

  const updateTaskButton = document.getElementById("update-task");
  updateTaskButton.style.display = "none";
};

//show the only the when the update button is clicked

const showUpdateTaskButton = () => {
  const addTaskButton = document.getElementById("submit");
  addTaskButton.style.display = "none";

  const updateTaskButton = document.getElementById("update-task");
  updateTaskButton.style.display = "block";
};

//Brings up the form to add a  todo
const addTodoButton = document.getElementById("add-todo-button");
addTodoButton.addEventListener("click", (event) => {
  showAddTaskButton();
  showForm(event);
});

// Stops the propagation of the showform function within the form, so clicking on the form will not dissappear it
const form = document.getElementById("my-form");
form.addEventListener("click", (event) => {
  event.stopPropagation();
});

const toggleForm = () => {
  if (isFormVisible) {
    todoDetailsFormContainer.classList.remove("todo-form-show");
    todoDetailsFormContainer.classList.add("todo-form-container");
    isFormVisible = false;
  }
};
// Toggles the form visibility when you click on this container, which covers the whole screen, except only on parts of the form
const todoDetailsFormContainer = document.getElementById("my-form-container");
todoDetailsFormContainer.addEventListener("click", () => {
  toggleForm();
});

const todosFunction = () => {
  const activeContainer = document.getElementById("active-container");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const todoInToday = document.getElementById("todos-in-today");
  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";
  todosInInbox.innerHTML = "";
  todoInToday.innerHTML = "";
  projectsContainerElement.innerHTML = "";

  const inboxHeading = document.createElement("p");
  inboxHeading.id = "inbox-todos-heading";
  inboxHeading.textContent = "Inbox";
  activeContainer.append(inboxHeading);

  for (let i = 0; i < todoList.todos.length; i++) {
    const todo = todoList.todos[i];

    if (todo.project === "Inbox") {
      const todoContainer = document.createElement("div"); // Container for each todo
      todoContainer.classList.add("todo-container"); //  class for styling if needed

      const todoTitle = document.createElement("p");
      todoTitle.append(todo.title);
      todoTitle.addEventListener("click", (event) => {
        toggleTodoDetails(event, i);
      });

      const deleteTodo = document.createElement("img");
      deleteTodo.src = "../src/assets/delete.png";
      deleteTodo.style.width = "20px";
      deleteTodo.addEventListener("click", () => {
        todoList.todos.splice(i, 1);
        todoContainer.remove(); // Remove the todo container from the DOM
      });

      const updateTodo = document.createElement("img");
      updateTodo.src = "../src/assets/refresh.png";
      updateTodo.style.width = "25px";
      updateTodo.addEventListener("click", (event) => {
        showUpdateTaskButton();
        showForm(event);

        const todoPropertiesUpdate = todoProperty();

        document
          .getElementById("update-task")
          .addEventListener("click", (event) => {
            event.preventDefault();

            todo.updateProperties(
              todoPropertiesUpdate.title.value,
              todoPropertiesUpdate.description.value,
              todoPropertiesUpdate.dueDate.value,
              todoPropertiesUpdate.priority.value
            );
            toggleForm();
            form.reset();
          });
      });

      todoContainer.append(todoTitle, deleteTodo, updateTodo);
      todosInInbox.append(todoContainer);
    }
  }
  todosInInbox.append(addTodoButton);
};

// submit button when the add task button is clicked

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();

  if (!(0,_validation_js__WEBPACK_IMPORTED_MODULE_1__.validateForm)()) {
    return false;
  }
  createTodo(currentProject);
  form.reset();
  toggleForm();
});

// function to toggle todo details
const toggleTodoDetails = (event, index) => {
  const todoContainer = event.currentTarget.parentElement;
  // const todoContainer = document.getElementsByClassName("todo-container");

  // Find the existing detail container for the clicked todo
  const existingDetailContainer = document.getElementById(
    `todo-detail-${index}`
  );

  if (existingDetailContainer) {
    // If the container exists, remove it to hide the details
    todoContainer.classList.toggle("active");
    existingDetailContainer.remove();
  } else {
    // If the container doesn't exist, create and append it inside the todo container

    todoContainer.classList.toggle("active");

    const todoDetailContainer = document.createElement("div");
    todoDetailContainer.classList.add("todo-detail-container");
    todoDetailContainer.id = `todo-detail-${index}`; // Use an id to identify the container

    const todoTitle = document.createElement("p");
    todoTitle.append(`Title: ${todoList.todos[index].title}`);

    const todoDescription = document.createElement("p");
    todoDescription.append(`Description: ${todoList.todos[index].description}`);

    const todoDuedate = document.createElement("p");
    todoDuedate.append(`Duedate: ${todoList.todos[index].dueDate}`);

    const todoPriority = document.createElement("p");
    todoPriority.append(`Priority: ${todoList.todos[index].priority}`);

    todoDetailContainer.append(
      todoTitle,
      todoDescription,
      todoDuedate,
      todoPriority
    );

    // Append the details container inside the todo container
    todoContainer.append(todoDetailContainer);
  }
};

const todayTodos = () => {
  const activeContainer = document.getElementById("active-container");
  const todoInToday = document.getElementById("todos-in-today");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );

  // Clear existing content in activeContainer
  activeContainer.innerHTML = "";
  todoInToday.innerHTML = "";
  todosInInbox.innerHTML = "";
  projectsContainerElement.innerHTML = "";

  const todayHeading = document.createElement("p");
  todayHeading.id = "today-todos-heading";
  todayHeading.textContent = "Today";
  activeContainer.append(todayHeading);

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  todoList.todos.forEach((todo, index, array) => {
    const todoDueDate = new Date(todo.dueDate).toISOString().split("T")[0];

    if (todoDueDate === todayFormatted && todoList.todos.includes(todo)) {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");

      const todoTitle = document.createElement("p");
      todoTitle.append(todo.title);
      todoTitle.addEventListener("click", (event) => {
        toggleTodoDetails(event, index);
      });

      const deleteTodo = document.createElement("p");
      deleteTodo.textContent = "delete";
      deleteTodo.addEventListener("click", () => {
        array.splice(index, 1);
        todoContainer.remove();
        todayTodos();
      });

      const updateTodo = document.createElement("p");
      updateTodo.textContent = "update";
      updateTodo.addEventListener("click", (event) => {
        showUpdateTaskButton();
        showForm(event);

        const todoPropertiesUpdate = todoProperty();

        document
          .getElementById("update-task")
          .addEventListener("click", (event) => {
            event.preventDefault();

            todoList.todos[index].updateProperties(
              todoPropertiesUpdate.title.value,
              todoPropertiesUpdate.description.value,
              todoPropertiesUpdate.dueDate.value,
              todoPropertiesUpdate.priority.value
            );
            toggleForm();
            form.reset();
          });
      });

      todoContainer.append(todoTitle, deleteTodo, updateTodo);
      todoInToday.append(todoContainer);
    }
  });
};
// Calls the todayTodos function when the today tab is active
const todayTodoContainer = document.getElementById("today-container");
todayTodoContainer.addEventListener("click", () => {
  todayTodos();
});

// Calls the todosFunction when the inbox tab is active
const inboxTodoContainer = document.getElementById("inbox-container");
inboxTodoContainer.addEventListener("click", () => {
  currentProject = "Inbox";

  todosFunction();

  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );
  projectsContainerElement.innerHTML = "";
});

//Projects section of the app code starts here

// Displays the input fields for project name
const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", () => {
  // const projectName = prompt(`Enter the project name:`);

  const projectNameInput = document.getElementById("project-name-id");
  projectNameInput.style.display = "block";

  submitProjectName.style.display = "block";

  cancelProjectName.style.display = "block";
});

// Function to display a project name when the add button is clicked
const displayProjectName = () => {
  const projectsContainer = document.getElementById("projects-container");

  const projectNameInput = document.getElementById("project-name-id");
  const projectName = projectNameInput.value;

  if (projectName) {
    const newProjectContainer = document.createElement("div");
    newProjectContainer.classList.add("project-container");

    const newProjectName = document.createElement("p");
    newProjectName.textContent = projectName;

    // Add event listener to display todos when the project is clicked
    newProjectContainer.addEventListener("click", () => {
      currentProject = projectName;

      projectTodos(currentProject);
    });

    const deleteProject = document.createElement("img");
    deleteProject.src = "../src/assets/delete.png";
    deleteProject.style.width = "20px";

    deleteProject.addEventListener("click", (event) => {
      newProjectContainer.remove();

      for (let i = 0; i < todoList.todos.length; i++) {
        const todo = todoList.todos[i];
        if (todo.project === projectName) {
          todoList.todos.splice(i, 1);
        }
      }
      event.stopPropagation();
      todosFunction();
    });

    newProjectContainer.append(newProjectName, deleteProject);
    projectsContainer.append(newProjectContainer);

    // Reset the input and turn the display of it and the submit button off after adding
    projectNameInput.value = "";
    projectNameInput.style.display = "none";
    submitProjectName.style.display = "none";
    cancelProjectName.style.display = "none";
  }
};

//Event listener to the submit project name button that calls the display project name function
const submitProjectName = document.getElementById("submit-project-name");
submitProjectName.addEventListener("click", () => {
  displayProjectName();
});

const cancelProjectName = document.getElementById("cancel-project-name");
cancelProjectName.addEventListener("click", () => {
  const projectNameInput = document.getElementById("project-name-id");
  projectNameInput.value = "";
  projectNameInput.style.display = "none";
  submitProjectName.style.display = "none";
  cancelProjectName.style.display = "none";
});

// Function to add todos under a project
const projectTodos = (projectName) => {
  const activeContainer = document.getElementById("active-container");
  const todosInInbox = document.getElementById("todos-in-inbox");
  const todoInToday = document.getElementById("todos-in-today");
  const projectsContainerElement = document.getElementById(
    "project-todos-container"
  );

  // Clear existing content in activeContainer, todosInInbox, todoInToday, and todoInNewProject
  activeContainer.innerHTML = "";
  todosInInbox.innerHTML = "";
  todoInToday.innerHTML = "";
  projectsContainerElement.innerHTML = "";

  const projectHeading = document.createElement("p");
  projectHeading.id = "project-todos-heading";
  projectHeading.textContent = projectName;
  activeContainer.append(projectHeading);

  for (let i = 0; i < todoList.todos.length; i++) {
    const todo = todoList.todos[i];

    if (todo.project === projectName) {
      const todoContainer = document.createElement("div"); // Container for each todo
      todoContainer.classList.add("todo-container"); //  class for styling if needed

      const todoTitle = document.createElement("p");
      todoTitle.append(todo.title);
      todoTitle.addEventListener("click", (event) => {
        toggleTodoDetails(event, i);
      });

      const deleteTodo = document.createElement("p");
      deleteTodo.textContent = "delete";
      deleteTodo.addEventListener("click", () => {
        todoList.todos.splice(i, 1);
        todoContainer.remove(); // Remove the todo container from the DOM
      });

      const updateTodo = document.createElement("p");
      updateTodo.textContent = "update";
      updateTodo.addEventListener("click", (event) => {
        showUpdateTaskButton();
        showForm(event);

        const todoPropertiesUpdate = todoProperty();

        document
          .getElementById("update-task")
          .addEventListener("click", (event) => {
            event.preventDefault();

            todo.updateProperties(
              todoPropertiesUpdate.title.value,
              todoPropertiesUpdate.description.value,
              todoPropertiesUpdate.dueDate.value,
              todoPropertiesUpdate.priority.value
            );
            toggleForm();
            form.reset();
          });
      });

      todoContainer.append(todoTitle, deleteTodo, updateTodo);
      projectsContainerElement.append(todoContainer);
    }
  }
  projectsContainerElement.append(addTodoButton);
};


/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   TodoList: () => (/* binding */ TodoList)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  updateProperties(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  createTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority, project);
    this.todos.push(todo);
    return todo;
  }
}


/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
function validateForm() {
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dateInput = document.getElementById("date");
  const prioritySelect = document.getElementById("priority");

  // Check if title is empty
  if (titleInput.value === "") {
    alert("Please enter a title for your task.");
    titleInput.focus();
    return false;
  }

  // Check if description is empty
  if (descriptionInput.value === "") {
    alert("Please add a description for your task.");
    descriptionInput.focus();
    return false;
  }

  // Check if due date is selected
  if (dateInput.value === "") {
    alert("Please select a due date for your task.");
    dateInput.focus();
    return false;
  }

  // Check if priority is selected
  if (prioritySelect.value === "") {
    alert("Please choose a priority for your task.");
    prioritySelect.focus();
    return false;
  }

  // All validations passed, return true
  return true;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.js */ "./src/js/validation.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVks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LDhCQUE4Qjs7QUFFakU7QUFDQSxxQ0FBcUMsK0JBQStCOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwyQkFBMkI7QUFDN0M7O0FBRUE7QUFDQSwyREFBMkQ7QUFDM0QscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqZU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNSO0FBQ087QUFDZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuXG5oZWFkZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDB2dztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyYWJkNjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuI2xvZ28tY29udGFpbmVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuI2NvbXBsZXRlZC10YXNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMy4xNXB4IHNvbGlkIGJsYWNrO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI2FwcC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjMzc0OTU4O1xuICBnYXA6IDhweDtcbn1cbiNhcHAtdGl0bGUgcCBzcGFuIHtcbiAgY29sb3I6ICMyYWJkNjc7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZmU7XG4gIHdpZHRoOiAyMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jaG9tZS1oZWFkaW5nLFxuI3Byb2plY3RzLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzNzQ5NTg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzc0OTU4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbiNpbmJveCxcbiN0b2RheSxcbiNpbXBvcnRhbnQsXG4jdGhpcy13ZWVrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDE1cHggMTBweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbiNhZGQtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNwcm9qZWN0LW5hbWUtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG59XG5cbiNwcm9qZWN0LW5hbWUtaWQge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcbn1cblxuI3N1Ym1pdC1wcm9qZWN0LW5hbWUsXG4jY2FuY2VsLXByb2plY3QtbmFtZSB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2Nztcbn1cblxuI2NhbmNlbC1wcm9qZWN0LW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCA0LCA0KTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3Byb2plY3RzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuI2FjdGl2ZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xuICBoZWlnaHQ6IDVyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jYWRkLXRvZG8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG5cbiNtYWluLWNvbnRlbnQge1xuICBtYXJnaW46IDMwcHggMjVweCAxMDBweCAzNDBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRvZG8tZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1mb3JtLXNob3cge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjcpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZm9ybSBpbnB1dCxcbmZvcm0gdGV4dGFyZWEsXG5mb3JtIHNlbGVjdCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDUlIDUlO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcbn1cblxuLnRvZG8tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDUlIDUlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcbn1cblxuLnRvZG8tZGV0YWlsLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMTI3LCAxMjcpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxV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Z0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmFiZDY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4jbG9nby1jb250YWluZXIge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2NvbXBsZXRlZC10YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAzLjE1cHggc29saWQgYmxhY2s7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2FwcC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogIzM3NDk1ODtcXG4gIGdhcDogOHB4O1xcbn1cXG4jYXBwLXRpdGxlIHAgc3BhbiB7XFxuICBjb2xvcjogIzJhYmQ2NztcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNmZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNob21lLWhlYWRpbmcsXFxuI3Byb2plY3RzLWhlYWRpbmcge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzM3NDk1ODtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzc0OTU4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbiNpbmJveCxcXG4jdG9kYXksXFxuI2ltcG9ydGFudCxcXG4jdGhpcy13ZWVrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMTVweCAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHggMTBweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtaWQge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xcbn1cXG5cXG4jc3VibWl0LXByb2plY3QtbmFtZSxcXG4jY2FuY2VsLXByb2plY3QtbmFtZSB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbn1cXG5cXG4jY2FuY2VsLXByb2plY3QtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCA0LCA0KTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyNDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuI2FjdGl2ZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXG4gIGhlaWdodDogNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICBtYXJnaW46IDMwcHggMjVweCAxMDBweCAzNDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0tc2hvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC43KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICBtYXJnaW46IGF1dG8gYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSB0ZXh0YXJlYSxcXG5mb3JtIHNlbGVjdCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgNSUgNSU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSA1JSA1JTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAxZnI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xcbn1cXG5cXG4udG9kby1kZXRhaWwtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMjcsIDEyNyk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0cyB0aGUgb3RoZXIgbW9kdWxlcyBvZiB0aGUgcHJvamVjdFxuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiLi92YWxpZGF0aW9uLmpzXCI7XG5cbi8vIENyZWF0ZSBhbiBpbiBvZiB0aGUgVG9kb0xpc3QgY2xhc3MgaW4gdGhlIHRvZG8uanMgbW9kdWxlXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuXG4vLyBBIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIGEgdG9kb1xuY29uc3QgdG9kb1Byb3BlcnR5ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuXG4gIC8vIFJldHVybnMgdGhlIHZhbHVlIG9mIHRpdGxlIGFuZCBhbGwgdGhlIHByb3BlcnRpZXNcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xufTtcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJJbmJveFwiO1xuXG4vLyBDcmVhdGVzIGEgdG9kbyBieSBjYWxsaW5nIHRoZSB0b2RvTGlzdC5jcmVhdGVUb2RvRm9ySW5ib3ggbWV0aG9kIHRvIGNyZWF0ZSB0b2RvcyBmb3IgdGhlIGluYm94XG5jb25zdCBjcmVhdGVUb2RvID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRvZG9Qcm9wZXJ0aWVzID0gdG9kb1Byb3BlcnR5KCk7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBcIkluYm94XCIpIHtcbiAgICB0b2RvTGlzdC5jcmVhdGVUb2RvKFxuICAgICAgdG9kb1Byb3BlcnRpZXMudGl0bGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLmR1ZURhdGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0XG4gICAgKTtcblxuICAgIC8vIFJ1bnMgdGhlIHRvZG9zRnVuY3Rpb24gZXZlcnl0aW1lIGEgbmV3IHRvZG8gaXMgY3JlYXRlZFxuICAgIHRvZG9zRnVuY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgcHJvamVjdC1zcGVjaWZpYyB0b2RvcyBpZiBuZWVkZWRcbiAgICB0b2RvTGlzdC5jcmVhdGVUb2RvKFxuICAgICAgdG9kb1Byb3BlcnRpZXMudGl0bGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLmR1ZURhdGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0XG4gICAgKTtcblxuICAgIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cbn07XG5cbmxldCBpc0Zvcm1WaXNpYmxlID0gZmFsc2U7XG5cbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGVcbmV4cG9ydCBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgaXNGb3JtVmlzaWJsZSA9ICFpc0Zvcm1WaXNpYmxlO1xuXG4gIGlmIChpc0Zvcm1WaXNpYmxlKSB7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tc2hvd1wiKTtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLWZvcm0tc2hvd1wiKTtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gIH1cbn07XG5cbi8vc2hvdyBvbmx5IHRoZSBhZGQgdGFzay1idXR0b24gd2hlbiB0aGUgYWRkIHRhc2sgYnV0dG9uXG5cbmNvbnN0IHNob3dBZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG4gIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBjb25zdCB1cGRhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKTtcbiAgdXBkYXRlVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG4vL3Nob3cgdGhlIG9ubHkgdGhlIHdoZW4gdGhlIHVwZGF0ZSBidXR0b24gaXMgY2xpY2tlZFxuXG5jb25zdCBzaG93VXBkYXRlVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBjb25zdCB1cGRhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKTtcbiAgdXBkYXRlVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuLy9CcmluZ3MgdXAgdGhlIGZvcm0gdG8gYWRkIGEgIHRvZG9cbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ1dHRvblwiKTtcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBzaG93QWRkVGFza0J1dHRvbigpO1xuICBzaG93Rm9ybShldmVudCk7XG59KTtcblxuLy8gU3RvcHMgdGhlIHByb3BhZ2F0aW9uIG9mIHRoZSBzaG93Zm9ybSBmdW5jdGlvbiB3aXRoaW4gdGhlIGZvcm0sIHNvIGNsaWNraW5nIG9uIHRoZSBmb3JtIHdpbGwgbm90IGRpc3NhcHBlYXIgaXRcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1mb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICBpZiAoaXNGb3JtVmlzaWJsZSkge1xuICAgIHRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidG9kby1mb3JtLXNob3dcIik7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGlzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgfVxufTtcbi8vIFRvZ2dsZXMgdGhlIGZvcm0gdmlzaWJpbGl0eSB3aGVuIHlvdSBjbGljayBvbiB0aGlzIGNvbnRhaW5lciwgd2hpY2ggY292ZXJzIHRoZSB3aG9sZSBzY3JlZW4sIGV4Y2VwdCBvbmx5IG9uIHBhcnRzIG9mIHRoZSBmb3JtXG5jb25zdCB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LWZvcm0tY29udGFpbmVyXCIpO1xudG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRvZ2dsZUZvcm0oKTtcbn0pO1xuXG5jb25zdCB0b2Rvc0Z1bmN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBhY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHRvZG9zSW5JbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4taW5ib3hcIik7XG4gIGNvbnN0IHRvZG9JblRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi10b2RheVwiKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiBhY3RpdmVDb250YWluZXJcbiAgYWN0aXZlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9zSW5JbmJveC5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2RvSW5Ub2RheS5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5ib3hIZWFkaW5nLmlkID0gXCJpbmJveC10b2Rvcy1oZWFkaW5nXCI7XG4gIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgYWN0aXZlQ29udGFpbmVyLmFwcGVuZChpbmJveEhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3NbaV07XG5cbiAgICBpZiAodG9kby5wcm9qZWN0ID09PSBcIkluYm94XCIpIHtcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBDb250YWluZXIgZm9yIGVhY2ggdG9kb1xuICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7IC8vICBjbGFzcyBmb3Igc3R5bGluZyBpZiBuZWVkZWRcblxuICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0b2RvVGl0bGUuYXBwZW5kKHRvZG8udGl0bGUpO1xuICAgICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdG9nZ2xlVG9kb0RldGFpbHMoZXZlbnQsIGkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZGVsZXRlVG9kby5zcmMgPSBcIi4uL3NyYy9hc3NldHMvZGVsZXRlLnBuZ1wiO1xuICAgICAgZGVsZXRlVG9kby5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICAgICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgdG9kbyBjb250YWluZXIgZnJvbSB0aGUgRE9NXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdXBkYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICB1cGRhdGVUb2RvLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9yZWZyZXNoLnBuZ1wiO1xuICAgICAgdXBkYXRlVG9kby5zdHlsZS53aWR0aCA9IFwiMjVweFwiO1xuICAgICAgdXBkYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNob3dVcGRhdGVUYXNrQnV0dG9uKCk7XG4gICAgICAgIHNob3dGb3JtKGV2ZW50KTtcblxuICAgICAgICBjb25zdCB0b2RvUHJvcGVydGllc1VwZGF0ZSA9IHRvZG9Qcm9wZXJ0eSgpO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwidXBkYXRlLXRhc2tcIilcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdG9kby51cGRhdGVQcm9wZXJ0aWVzKFxuICAgICAgICAgICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS50aXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLmR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLnByaW9yaXR5LnZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9UaXRsZSwgZGVsZXRlVG9kbywgdXBkYXRlVG9kbyk7XG4gICAgICB0b2Rvc0luSW5ib3guYXBwZW5kKHRvZG9Db250YWluZXIpO1xuICAgIH1cbiAgfVxuICB0b2Rvc0luSW5ib3guYXBwZW5kKGFkZFRvZG9CdXR0b24pO1xufTtcblxuLy8gc3VibWl0IGJ1dHRvbiB3aGVuIHRoZSBhZGQgdGFzayBidXR0b24gaXMgY2xpY2tlZFxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjcmVhdGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgZm9ybS5yZXNldCgpO1xuICB0b2dnbGVGb3JtKCk7XG59KTtcblxuLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIHRvZG8gZGV0YWlsc1xuY29uc3QgdG9nZ2xlVG9kb0RldGFpbHMgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIC8vIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgLy8gRmluZCB0aGUgZXhpc3RpbmcgZGV0YWlsIGNvbnRhaW5lciBmb3IgdGhlIGNsaWNrZWQgdG9kb1xuICBjb25zdCBleGlzdGluZ0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGB0b2RvLWRldGFpbC0ke2luZGV4fWBcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdEZXRhaWxDb250YWluZXIpIHtcbiAgICAvLyBJZiB0aGUgY29udGFpbmVyIGV4aXN0cywgcmVtb3ZlIGl0IHRvIGhpZGUgdGhlIGRldGFpbHNcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgZXhpc3RpbmdEZXRhaWxDb250YWluZXIucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIGNvbnRhaW5lciBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgYW5kIGFwcGVuZCBpdCBpbnNpZGUgdGhlIHRvZG8gY29udGFpbmVyXG5cbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICBjb25zdCB0b2RvRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGV0YWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1jb250YWluZXJcIik7XG4gICAgdG9kb0RldGFpbENvbnRhaW5lci5pZCA9IGB0b2RvLWRldGFpbC0ke2luZGV4fWA7IC8vIFVzZSBhbiBpZCB0byBpZGVudGlmeSB0aGUgY29udGFpbmVyXG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvVGl0bGUuYXBwZW5kKGBUaXRsZTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0udGl0bGV9YCk7XG5cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKGBEZXNjcmlwdGlvbjogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0uZGVzY3JpcHRpb259YCk7XG5cbiAgICBjb25zdCB0b2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EdWVkYXRlLmFwcGVuZChgRHVlZGF0ZTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoYFByaW9yaXR5OiAke3RvZG9MaXN0LnRvZG9zW2luZGV4XS5wcmlvcml0eX1gKTtcblxuICAgIHRvZG9EZXRhaWxDb250YWluZXIuYXBwZW5kKFxuICAgICAgdG9kb1RpdGxlLFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb0R1ZWRhdGUsXG4gICAgICB0b2RvUHJpb3JpdHlcbiAgICApO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBkZXRhaWxzIGNvbnRhaW5lciBpbnNpZGUgdGhlIHRvZG8gY29udGFpbmVyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RldGFpbENvbnRhaW5lcik7XG4gIH1cbn07XG5cbmNvbnN0IHRvZGF5VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9kb0luVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLXRvZGF5XCIpO1xuICBjb25zdCB0b2Rvc0luSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLWluYm94XCIpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCJcbiAgKTtcblxuICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIGFjdGl2ZUNvbnRhaW5lclxuICBhY3RpdmVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb0luVG9kYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb3NJbkluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHRvZGF5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RheUhlYWRpbmcuaWQgPSBcInRvZGF5LXRvZG9zLWhlYWRpbmdcIjtcbiAgdG9kYXlIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICBhY3RpdmVDb250YWluZXIuYXBwZW5kKHRvZGF5SGVhZGluZyk7XG5cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheUZvcm1hdHRlZCA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gIHRvZG9MaXN0LnRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICAgIGlmICh0b2RvRHVlRGF0ZSA9PT0gdG9kYXlGb3JtYXR0ZWQgJiYgdG9kb0xpc3QudG9kb3MuaW5jbHVkZXModG9kbykpIHtcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdG9kb1RpdGxlLmFwcGVuZCh0b2RvLnRpdGxlKTtcbiAgICAgIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRvZ2dsZVRvZG9EZXRhaWxzKGV2ZW50LCBpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4gICAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHRvZGF5VG9kb3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGRhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB1cGRhdGVUb2RvLnRleHRDb250ZW50ID0gXCJ1cGRhdGVcIjtcbiAgICAgIHVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBzaG93VXBkYXRlVGFza0J1dHRvbigpO1xuICAgICAgICBzaG93Rm9ybShldmVudCk7XG5cbiAgICAgICAgY29uc3QgdG9kb1Byb3BlcnRpZXNVcGRhdGUgPSB0b2RvUHJvcGVydHkoKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZS10YXNrXCIpXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRvZG9MaXN0LnRvZG9zW2luZGV4XS51cGRhdGVQcm9wZXJ0aWVzKFxuICAgICAgICAgICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS50aXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLmR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLnByaW9yaXR5LnZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9UaXRsZSwgZGVsZXRlVG9kbywgdXBkYXRlVG9kbyk7XG4gICAgICB0b2RvSW5Ub2RheS5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcbn07XG4vLyBDYWxscyB0aGUgdG9kYXlUb2RvcyBmdW5jdGlvbiB3aGVuIHRoZSB0b2RheSB0YWIgaXMgYWN0aXZlXG5jb25zdCB0b2RheVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LWNvbnRhaW5lclwiKTtcbnRvZGF5VG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0b2RheVRvZG9zKCk7XG59KTtcblxuLy8gQ2FsbHMgdGhlIHRvZG9zRnVuY3Rpb24gd2hlbiB0aGUgaW5ib3ggdGFiIGlzIGFjdGl2ZVxuY29uc3QgaW5ib3hUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveC1jb250YWluZXJcIik7XG5pbmJveFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3VycmVudFByb2plY3QgPSBcIkluYm94XCI7XG5cbiAgdG9kb3NGdW5jdGlvbigpO1xuXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIlxuICApO1xuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbn0pO1xuXG4vL1Byb2plY3RzIHNlY3Rpb24gb2YgdGhlIGFwcCBjb2RlIHN0YXJ0cyBoZXJlXG5cbi8vIERpc3BsYXlzIHRoZSBpbnB1dCBmaWVsZHMgZm9yIHByb2plY3QgbmFtZVxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KGBFbnRlciB0aGUgcHJvamVjdCBuYW1lOmApO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pZFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIHN1Ym1pdFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgY2FuY2VsUHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IGEgcHJvamVjdCBuYW1lIHdoZW4gdGhlIGFkZCBidXR0b24gaXMgY2xpY2tlZFxuY29uc3QgZGlzcGxheVByb2plY3ROYW1lID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pZFwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXG4gIGlmIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuZXdQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGRpc3BsYXkgdG9kb3Mgd2hlbiB0aGUgcHJvamVjdCBpcyBjbGlja2VkXG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZTtcblxuICAgICAgcHJvamVjdFRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVByb2plY3Quc3JjID0gXCIuLi9zcmMvYXNzZXRzL2RlbGV0ZS5wbmdcIjtcbiAgICBkZWxldGVQcm9qZWN0LnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG5cbiAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIG5ld1Byb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LnRvZG9zW2ldO1xuICAgICAgICBpZiAodG9kby5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIHRvZG9MaXN0LnRvZG9zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0b2Rvc0Z1bmN0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdCk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKG5ld1Byb2plY3RDb250YWluZXIpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IGFuZCB0dXJuIHRoZSBkaXNwbGF5IG9mIGl0IGFuZCB0aGUgc3VibWl0IGJ1dHRvbiBvZmYgYWZ0ZXIgYWRkaW5nXG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgc3VibWl0UHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNhbmNlbFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufTtcblxuLy9FdmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IHByb2plY3QgbmFtZSBidXR0b24gdGhhdCBjYWxscyB0aGUgZGlzcGxheSBwcm9qZWN0IG5hbWUgZnVuY3Rpb25cbmNvbnN0IHN1Ym1pdFByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdC1uYW1lXCIpO1xuc3VibWl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheVByb2plY3ROYW1lKCk7XG59KTtcblxuY29uc3QgY2FuY2VsUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1wcm9qZWN0LW5hbWVcIik7XG5jYW5jZWxQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtaWRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0TmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc3VibWl0UHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjYW5jZWxQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIHRvZG9zIHVuZGVyIGEgcHJvamVjdFxuY29uc3QgcHJvamVjdFRvZG9zID0gKHByb2plY3ROYW1lKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9kb3NJbkluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi1pbmJveFwiKTtcbiAgY29uc3QgdG9kb0luVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLXRvZGF5XCIpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCJcbiAgKTtcblxuICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIGFjdGl2ZUNvbnRhaW5lciwgdG9kb3NJbkluYm94LCB0b2RvSW5Ub2RheSwgYW5kIHRvZG9Jbk5ld1Byb2plY3RcbiAgYWN0aXZlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9zSW5JbmJveC5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2RvSW5Ub2RheS5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0SGVhZGluZy5pZCA9IFwicHJvamVjdC10b2Rvcy1oZWFkaW5nXCI7XG4gIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIGFjdGl2ZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3NbaV07XG5cbiAgICBpZiAodG9kby5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIENvbnRhaW5lciBmb3IgZWFjaCB0b2RvXG4gICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTsgLy8gIGNsYXNzIGZvciBzdHlsaW5nIGlmIG5lZWRlZFxuXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRvZG9UaXRsZS5hcHBlbmQodG9kby50aXRsZSk7XG4gICAgICB0b2RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICB0b2dnbGVUb2RvRGV0YWlscyhldmVudCwgaSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4gICAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnRvZG9zLnNwbGljZShpLCAxKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSB0b2RvIGNvbnRhaW5lciBmcm9tIHRoZSBET01cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGRhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB1cGRhdGVUb2RvLnRleHRDb250ZW50ID0gXCJ1cGRhdGVcIjtcbiAgICAgIHVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBzaG93VXBkYXRlVGFza0J1dHRvbigpO1xuICAgICAgICBzaG93Rm9ybShldmVudCk7XG5cbiAgICAgICAgY29uc3QgdG9kb1Byb3BlcnRpZXNVcGRhdGUgPSB0b2RvUHJvcGVydHkoKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZS10YXNrXCIpXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRvZG8udXBkYXRlUHJvcGVydGllcyhcbiAgICAgICAgICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUudGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5kdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5wcmlvcml0eS52YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGUsIGRlbGV0ZVRvZG8sIHVwZGF0ZVRvZG8pO1xuICAgICAgcHJvamVjdHNDb250YWluZXJFbGVtZW50LmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9XG4gIH1cbiAgcHJvamVjdHNDb250YWluZXJFbGVtZW50LmFwcGVuZChhZGRUb2RvQnV0dG9uKTtcbn07XG4iLCJleHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICB1cGRhdGVQcm9wZXJ0aWVzKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbiAgLy8gQ2hlY2sgaWYgdGl0bGUgaXMgZW1wdHlcbiAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlIGZvciB5b3VyIHRhc2suXCIpO1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBpZiBkZXNjcmlwdGlvbiBpcyBlbXB0eVxuICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIHRhc2suXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBpZiBkdWUgZGF0ZSBpcyBzZWxlY3RlZFxuICBpZiAoZGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZHVlIGRhdGUgZm9yIHlvdXIgdGFzay5cIik7XG4gICAgZGF0ZUlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgcHJpb3JpdHkgaXMgc2VsZWN0ZWRcbiAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgY2hvb3NlIGEgcHJpb3JpdHkgZm9yIHlvdXIgdGFzay5cIik7XG4gICAgcHJpb3JpdHlTZWxlY3QuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBBbGwgdmFsaWRhdGlvbnMgcGFzc2VkLCByZXR1cm4gdHJ1ZVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgXCIuL3ZhbGlkYXRpb24uanNcIjtcbmltcG9ydCB7IFRvZG9MaXN0LCBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9