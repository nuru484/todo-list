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
  background-color: #ececec;
  box-sizing: border-box;
}
#container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto auto auto;
}

header {
  grid-row: 1/2;
  grid-column: 1/3;
}

header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 2px solid #2abd67;
  background-color: #f2f3f5;
  padding: 20px;
  height: 15vh;
}

#logo-container {
  list-style: none;
  transition: transform 0.3s ease-in-out;
}

#logo-container:hover,
#completed-tasks:hover {
  cursor: pointer;
  transform: scale(1.05);
}

#completed-tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: auto 0;
  border-radius: 8px;
  border: 3.15px solid black;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  transition: transform 0.3s ease-in-out;
}

#app-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: #374958;
  gap: 8px;
}
#app-title p span {
  color: #2abd67;
}

#main-content {
  /* min-height: 50vh; */
  margin: 20px;
}

nav {
  display: flex;
  flex-direction: column;
  background-color: #fefcfe;
  padding: 20px;
  min-width: 300px;
}

#home-heading,
#projects-heading {
  font-family: Arial, Helvetica, sans-serif;
  color: #374958;
  border-bottom: 2px solid #374958;
  padding: 5px;
  font-size: 1.2rem;
}

#inbox,
#today,
#important,
#this-week,
#add-project {
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  gap: 5px;
  margin: 15px 10px;
  padding: 8px 15px;
}

#inbox:hover,
#today:hover,
#important:hover,
#this-week:hover,
#add-project:hover,
.project-container:hover {
  cursor: pointer;
  background-color: #2abd6770;
  border-radius: 2px;
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
  padding: 8px 15px;
  justify-content: space-between;
}

#projects-container {
  height: 30vh;
  overflow-y: scroll;
}

#todos-in-inbox {
  overflow-y: scroll;
  max-height: 60vh;
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
  padding: 10px 25px;
  border-radius: 2px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  gap: 15px;
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
  padding: 1.5rem;
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
  grid-template-columns: 5% 75% 5% 5%;
  padding: 8px;
  margin: 20px;
  border: 2px solid #374958;
}

.todo-container.active {
  display: grid;
  grid-template-columns: 5% 75% 5% 5%;
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
  grid-row: 3/4;
  grid-column: 1/3;
  background-color: rgb(133, 127, 127);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  max-height: 10vh;
}
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #ececec;\n  box-sizing: border-box;\n}\n#container {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: auto auto auto;\n}\n\nheader {\n  grid-row: 1/2;\n  grid-column: 1/3;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  border-bottom: 2px solid #2abd67;\n  background-color: #f2f3f5;\n  padding: 20px;\n  height: 15vh;\n}\n\n#logo-container {\n  list-style: none;\n  transition: transform 0.3s ease-in-out;\n}\n\n#logo-container:hover,\n#completed-tasks:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n#completed-tasks {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  margin: auto 0;\n  border-radius: 8px;\n  border: 3.15px solid black;\n  font-size: 0.8rem;\n  font-family: Arial, Helvetica, sans-serif;\n  transition: transform 0.3s ease-in-out;\n}\n\n#app-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  color: #374958;\n  gap: 8px;\n}\n#app-title p span {\n  color: #2abd67;\n}\n\n#main-content {\n  /* min-height: 50vh; */\n  margin: 20px;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #fefcfe;\n  padding: 20px;\n  min-width: 300px;\n}\n\n#home-heading,\n#projects-heading {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #374958;\n  border-bottom: 2px solid #374958;\n  padding: 5px;\n  font-size: 1.2rem;\n}\n\n#inbox,\n#today,\n#important,\n#this-week,\n#add-project {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n  gap: 5px;\n  margin: 15px 10px;\n  padding: 8px 15px;\n}\n\n#inbox:hover,\n#today:hover,\n#important:hover,\n#this-week:hover,\n#add-project:hover,\n.project-container:hover {\n  cursor: pointer;\n  background-color: #2abd6770;\n  border-radius: 2px;\n}\n\n#project-name-input {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px auto;\n  align-items: center;\n  padding: 0 5px;\n  background-color: #f2f3f5;\n}\n\n#project-name-id {\n  border-style: none;\n  margin: 5px;\n  padding: 5px;\n  border-radius: 2px;\n  border: 2px solid #374958;\n}\n\n#submit-project-name,\n#cancel-project-name {\n  border-style: none;\n  padding: 5px;\n  margin: 5px;\n  width: 30%;\n  font-size: 1rem;\n  border-radius: 2px;\n  color: white;\n  background-color: #2abd67;\n}\n\n#cancel-project-name {\n  background-color: rgb(190, 4, 4);\n}\n\n.project-container {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  gap: 20px;\n  margin: 5px 10px;\n  padding: 8px 15px;\n  justify-content: space-between;\n}\n\n#projects-container {\n  height: 30vh;\n  overflow-y: scroll;\n}\n\n#todos-in-inbox {\n  overflow-y: scroll;\n  max-height: 60vh;\n}\n\n#active-container {\n  background-color: #2abd67;\n  height: 5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 2rem;\n  color: white;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  margin-bottom: 20px;\n}\n\n#add-todo-button {\n  background-color: white;\n  padding: 10px 25px;\n  border-radius: 2px;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.todo-form-container {\n  display: none;\n}\n\n.todo-form-show {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(10, 10, 10, 0.7);\n  width: 100vw;\n  height: 100vh;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n}\n\nform {\n  background-color: #f2f3f5;\n  margin: auto auto;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n}\n\nform input,\nform textarea,\nform select {\n  margin: 10px;\n  padding: 10px;\n}\n\n.todo-container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 5% 75% 5% 5%;\n  padding: 8px;\n  margin: 20px;\n  border: 2px solid #374958;\n}\n\n.todo-container.active {\n  display: grid;\n  grid-template-columns: 5% 75% 5% 5%;\n  grid-template-rows: 20px 1fr;\n  padding: 10px;\n  justify-content: center;\n  border: 2px solid #374958;\n}\n\n.todo-detail-container {\n  grid-column: 1/4;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 10px;\n  border: 2px solid white;\n  padding: 10px;\n  margin-top: 10px;\n  background-color: #ececec;\n}\n\nfooter {\n  grid-row: 3/4;\n  grid-column: 1/3;\n  background-color: rgb(133, 127, 127);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n  max-height: 10vh;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js/defaultTodos.js":
/*!********************************!*\
  !*** ./src/js/defaultTodos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/js/todo.js");
// Imports the other modules of the project


// Create an instance of the TodoList class in the todo.js module
const todoList = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.TodoList();

// Define an array of default todos
const defaultTodos = [
  {
    title: "Default Todo 1",
    description: "This is the first default todo.",
    dueDate: new Date(),
    priority: "High",
    project: "Inbox",
  },
  {
    title: "Default Todo 2",
    description: "This is the second default todo.",
    dueDate: new Date(),
    priority: "Medium",
    project: "Inbox",
  },
  // Add more default todos as needed
];

// Function to initialize default todos
const initializeDefaultTodos = () => {
  // Check if there are already todos in local storage
  const storedTodosString = localStorage.getItem("todos");
  const storedTodos = JSON.parse(storedTodosString) || [];

  // If no todos are stored, create default todos
  if (storedTodos.length === 0) {
    defaultTodos.forEach((defaultTodo) => {
      todoList.createTodo(
        defaultTodo.title,
        defaultTodo.description,
        defaultTodo.dueDate,
        defaultTodo.priority,
        defaultTodo.project
      );
    });

    // Update local storage with the default todos
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todoList.todos);
  }
};

// Call the function to initialize default todos
initializeDefaultTodos();


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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/js/todo.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ "./src/js/validation.js");
/* harmony import */ var _assets_refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/refresh.png */ "./src/assets/refresh.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/delete.png */ "./src/assets/delete.png");
// Imports the other modules of the project





// Create an in of the TodoList class in the todo.js module
const todoList = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.TodoList();

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

// Creates a todo by calling the todoList.createTodo method to create todos
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

    todosFunction();

    // Runs the todosFunction everytime a new todo is created
  } else {
    // Handle project-specific todos if needed
    todoList.createTodo(
      todoProperties.title.value,
      todoProperties.description.value,
      todoProperties.dueDate.value,
      todoProperties.priority.value,
      currentProject
    );

    //Runs projectTodos for a particular project apart from inbox
    projectTodos(currentProject);
  }
};

const updateTodoFunction = (todo, currentProject) => {
  const todoPropertiesUpdate = todoProperty();

  if (currentProject === "inbox") {
    todo.updateProperties(
      todoPropertiesUpdate.title.value,
      todoPropertiesUpdate.description.value,
      todoPropertiesUpdate.dueDate.value,
      todoPropertiesUpdate.priority.value,
      todo.project
    );

    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todo);
    todosFunction();
  } else {
    todo.updateProperties(
      todoPropertiesUpdate.title.value,
      todoPropertiesUpdate.description.value,
      todoPropertiesUpdate.dueDate.value,
      todoPropertiesUpdate.priority.value,
      todo.project
    );

    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todo);
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

function updateTodoTitleStyle(todo, todoTitle) {
  if (todo.completed === true) {
    todoTitle.style.textDecoration = "line-through";
  } else {
    todoTitle.style.textDecoration = "none";
  }
}

// function to toggle todo details
const toggleTodoDetails = (event, index) => {
  const todoContainer = event.currentTarget.parentElement;

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

let selectedTodoIndex;

const todoElements = (todo, i) => {
  const todoContainer = document.createElement("div"); // Container for each todo
  todoContainer.classList.add("todo-container"); //  class for styling if needed
  todoContainer.dataset.index = i;

  const todoTitle = document.createElement("p");
  todoTitle.append(todo.title);
  todoTitle.addEventListener("click", (event) => {
    toggleTodoDetails(event, i);
  });

  const todoComplete = document.createElement("input");
  todoComplete.type = "checkbox";
  todoComplete.style.width = "15px";
  todoComplete.checked = todo.completed;

  updateTodoTitleStyle(todo, todoTitle);

  todoComplete.addEventListener("change", () => {
    todo.toggleCompleted(); // Toggle the completion state
    updateTodoTitleStyle(todo, todoTitle);
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todoList.todos);
  });

  const deleteTodo = document.createElement("img");
  deleteTodo.src = "./assets/delete.png";
  deleteTodo.style.width = "20px";
  deleteTodo.addEventListener("click", () => {
    todoList.todos.splice(i, 1);
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todoList.todos);
    todoContainer.remove(); // Remove the todo container from the DOM
  });

  const updateTodo = document.createElement("img");
  updateTodo.src = "./assets/refresh.png";
  updateTodo.style.width = "25px";
  updateTodo.addEventListener("click", () => {
    showUpdateTaskButton();
    showForm();

    selectedTodoIndex = event.currentTarget.parentElement.dataset.index;
  });

  todoContainer.append(todoComplete, todoTitle, deleteTodo, updateTodo);

  return todoContainer;
};

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
      const todoElementsFromFunc = todoElements(todo, i);
      todosInInbox.append(todoElementsFromFunc);
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

document.getElementById("update-task").addEventListener("click", (event) => {
  event.preventDefault();

  if (!(0,_validation_js__WEBPACK_IMPORTED_MODULE_1__.validateForm)()) {
    return false;
  }
  // Use the stored index to call updateTodoFunction
  if (selectedTodoIndex !== undefined) {
    const todo = todoList.todos[selectedTodoIndex];
    updateTodoFunction(todo, currentProject);
  }
  toggleForm();
});

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

  for (let i = 0; i < todoList.todos.length; i++) {
    const todo = todoList.todos[i];
    const todoDueDate = new Date(todo.dueDate).toISOString().split("T")[0];

    if (todoDueDate === todayFormatted && todoList.todos.includes(todo)) {
      const todoElementsFromFunc = todoElements(todo, i);
      todoInToday.append(todoElementsFromFunc);
    }
  }
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
  console.log(currentProject);
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

const displayProjectName = () => {
  const projectsContainer = document.getElementById("projects-container");

  const projectNameInput = document.getElementById("project-name-id");
  const projectName = projectNameInput.value;

  if (projectName) {
    // Retrieve existing projects from localStorage
    const storedProjectsString = localStorage.getItem("projects");
    const storedProjects = JSON.parse(storedProjectsString) || [];

    // Check if the project name already exists
    const projectExists = storedProjects.some(
      (project) => project === projectName
    );

    if (!projectExists) {
      // Add the new project to the stored projects
      storedProjects.push(projectName);

      // Update the projects in localStorage
      localStorage.setItem("projects", JSON.stringify(storedProjects));

      // Clear existing content in projectsContainer
      projectsContainer.innerHTML = "";

      storedProjects.forEach((currentValue, index, array) => {
        const newProjectContainer = document.createElement("div");
        newProjectContainer.classList.add("project-container");

        const newProjectName = document.createElement("p");
        newProjectName.textContent = currentValue;

        newProjectContainer.addEventListener("click", () => {
          currentProject = currentValue;
          projectTodos(currentProject);
          console.log(currentProject);
        });

        const deleteProject = document.createElement("img");
        deleteProject.src = "./assets/delete.png";
        deleteProject.style.width = "20px";

        deleteProject.addEventListener("click", (event) => {
          newProjectContainer.remove();

          // Remove the project from stored projects
          for (let i = 0; i < storedProjects.length; i++) {
            const project = storedProjects[i];
            storedProjects.splice(i, 1);
          }

          localStorage.setItem("projects", JSON.stringify(storedProjects));

          // Remove todos related to the deleted project
          for (let i = 0; i < todoList.todos.length; i++) {
            const todo = todoList.todos[i];
            if (todo.project === currentValue) {
              todoList.todos.splice(i, 1);
              (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todoList.todos);
            }
          }
          event.stopPropagation();
          todosFunction();
        });
        newProjectContainer.append(newProjectName, deleteProject);
        projectsContainer.append(newProjectContainer);
      });

      // Reset the input and turn the display of it and the submit button off after adding
      projectNameInput.value = "";
      projectNameInput.style.display = "none";
      submitProjectName.style.display = "none";
      cancelProjectName.style.display = "none";
    } else {
      alert("Project with the same name already exists!");
    }
  }
};

// Function to display projects from local storage on page load
const displayStoredProjects = () => {
  const projectsContainer = document.getElementById("projects-container");

  // Retrieve existing projects from localStorage
  const storedProjectsString = localStorage.getItem("projects");
  const storedProjects = JSON.parse(storedProjectsString) || [];

  storedProjects.forEach((currentValue, index, array) => {
    const newProjectContainer = document.createElement("div");
    newProjectContainer.classList.add("project-container");

    const newProjectName = document.createElement("p");
    newProjectName.textContent = currentValue;

    newProjectContainer.addEventListener("click", () => {
      currentProject = currentValue;
      projectTodos(currentValue);
      console.log(currentProject);
    });

    const deleteProject = document.createElement("img");
    deleteProject.src = "./assets/delete.png";
    deleteProject.style.width = "20px";

    deleteProject.addEventListener("click", (event) => {
      newProjectContainer.remove();

      // Remove the project from stored projects
      for (let i = 0; i < storedProjects.length; i++) {
        storedProjects.splice(i, 1);
      }

      localStorage.setItem("projects", JSON.stringify(storedProjects));

      // Remove todos related to the deleted project
      for (let i = 0; i < todoList.todos.length; i++) {
        const todo = todoList.todos[i];
        if (todo.project === currentValue) {
          todoList.todos.splice(i, 1);
          (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todoList.todos);
        }
      }
      event.stopPropagation();
      todosFunction();
    });

    newProjectContainer.append(newProjectName, deleteProject);
    projectsContainer.append(newProjectContainer);
  });
};

// Call the function to display stored projects on page load
displayStoredProjects();

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
      const todoElementsFromFunc = todoElements(todo, i);
      projectsContainerElement.append(todoElementsFromFunc);
    }
  }
  projectsContainerElement.append(addTodoButton);
};

// Calling the todos function to render existing todos on page load
todosFunction();


/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   TodoList: () => (/* binding */ TodoList),
/* harmony export */   setTodosInLocalStorage: () => (/* binding */ setTodosInLocalStorage)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }

  // method to toggle completion state
  updateProperties(
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newProject
  ) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.project = newProject;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  // Static method to create a Todo instance from an object
  static fromObject(todoObject) {
    const todo = new Todo(
      todoObject.title,
      todoObject.description,
      todoObject.dueDate,
      todoObject.priority,
      todoObject.project
    );

    todo.completed = todoObject.completed;

    return todo;
  }
}

// Function to set todos to local storage
const setTodosInLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Function to get todos from local storage
const getTodosFromLocalStorage = () => {
  const todoObjects = JSON.parse(localStorage.getItem("todos")) || [];
  const todos = [];

  for (let i = 0; i < todoObjects.length; i++) {
    todos.push(Todo.fromObject(todoObjects[i]));
  }

  return todos;
};

class TodoList {
  constructor() {
    this.todos = getTodosFromLocalStorage(); // Initialize with todos from local storage;
  }

  createTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority, project);
    this.todos.push(todo);
    setTodosInLocalStorage(this.todos); // Update local storage with the new todos
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


/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/delete.png";

/***/ }),

/***/ "./src/assets/refresh.png":
/*!********************************!*\
  !*** ./src/assets/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/refresh.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _defaultTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultTodos.js */ "./src/js/defaultTodos.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxVQUFV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QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCLDJCQUEyQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdFQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwyQkFBMkI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoaUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDUjtBQUNPO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZGVmYXVsdFRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyYWJkNjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTV2aDtcbn1cblxuI2xvZ28tY29udGFpbmVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNsb2dvLWNvbnRhaW5lcjpob3ZlcixcbiNjb21wbGV0ZWQtdGFza3M6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbiNjb21wbGV0ZWQtdGFza3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IGF1dG8gMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDMuMTVweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI2FwcC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzM3NDk1ODtcbiAgZ2FwOiA4cHg7XG59XG4jYXBwLXRpdGxlIHAgc3BhbiB7XG4gIGNvbG9yOiAjMmFiZDY3O1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgLyogbWluLWhlaWdodDogNTB2aDsgKi9cbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2ZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4jaG9tZS1oZWFkaW5nLFxuI3Byb2plY3RzLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzNzQ5NTg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzc0OTU4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jaW5ib3gsXG4jdG9kYXksXG4jaW1wb3J0YW50LFxuI3RoaXMtd2VlayxcbiNhZGQtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogMTVweCAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuI2luYm94OmhvdmVyLFxuI3RvZGF5OmhvdmVyLFxuI2ltcG9ydGFudDpob3ZlcixcbiN0aGlzLXdlZWs6aG92ZXIsXG4jYWRkLXByb2plY3Q6aG92ZXIsXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc3MDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4jcHJvamVjdC1uYW1lLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xufVxuXG4jcHJvamVjdC1uYW1lLWlkIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XG59XG5cbiNzdWJtaXQtcHJvamVjdC1uYW1lLFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XG59XG5cbiNjYW5jZWwtcHJvamVjdC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgNCwgNCk7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNwcm9qZWN0cy1jb250YWluZXIge1xuICBoZWlnaHQ6IDMwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuI3RvZG9zLWluLWluYm94IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiA2MHZoO1xufVxuXG4jYWN0aXZlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XG4gIGhlaWdodDogNXJlbTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNhZGQtdG9kby1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG5cbi50b2RvLWZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tZm9ybS1zaG93IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC43KTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxO1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZm9ybSBpbnB1dCxcbmZvcm0gdGV4dGFyZWEsXG5mb3JtIHNlbGVjdCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgNzUlIDUlIDUlO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcbn1cblxuLnRvZG8tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgNzUlIDUlIDUlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcbn1cblxuLnRvZG8tZGV0YWlsLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuXG5mb290ZXIge1xuICBncmlkLXJvdzogMy80O1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMjcsIDEyNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1heC1oZWlnaHQ6IDEwdmg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVB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OztFQUdFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJhYmQ2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4jbG9nby1jb250YWluZXIge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jbG9nby1jb250YWluZXI6aG92ZXIsXFxuI2NvbXBsZXRlZC10YXNrczpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jY29tcGxldGVkLXRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMy4xNXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jYXBwLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogIzM3NDk1ODtcXG4gIGdhcDogOHB4O1xcbn1cXG4jYXBwLXRpdGxlIHAgc3BhbiB7XFxuICBjb2xvcjogIzJhYmQ2NztcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAvKiBtaW4taGVpZ2h0OiA1MHZoOyAqL1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2ZlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbiNob21lLWhlYWRpbmcsXFxuI3Byb2plY3RzLWhlYWRpbmcge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzM3NDk1ODtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzc0OTU4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNpbmJveCxcXG4jdG9kYXksXFxuI2ltcG9ydGFudCxcXG4jdGhpcy13ZWVrLFxcbiNhZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMTVweCAxMHB4O1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbiNpbmJveDpob3ZlcixcXG4jdG9kYXk6aG92ZXIsXFxuI2ltcG9ydGFudDpob3ZlcixcXG4jdGhpcy13ZWVrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NzcwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1pZCB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XFxufVxcblxcbiNzdWJtaXQtcHJvamVjdC1uYW1lLFxcbiNjYW5jZWwtcHJvamVjdC1uYW1lIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdC1uYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDQsIDQpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDMwdmg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbiN0b2Rvcy1pbi1pbmJveCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBtYXgtaGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4jYWN0aXZlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWRkLXRvZG8tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnRvZG8tZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybS1zaG93IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjcpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcXG4gIG1hcmdpbjogYXV0byBhdXRvO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0LFxcbmZvcm0gdGV4dGFyZWEsXFxuZm9ybSBzZWxlY3Qge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgNzUlIDUlIDUlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSA3NSUgNSUgNSU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcXG59XFxuXFxuLnRvZG8tZGV0YWlsLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMjcsIDEyNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWF4LWhlaWdodDogMTB2aDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHMgdGhlIG90aGVyIG1vZHVsZXMgb2YgdGhlIHByb2plY3RcbmltcG9ydCB7IFRvZG9MaXN0LCBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFRvZG9MaXN0IGNsYXNzIGluIHRoZSB0b2RvLmpzIG1vZHVsZVxuY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcblxuLy8gRGVmaW5lIGFuIGFycmF5IG9mIGRlZmF1bHQgdG9kb3NcbmNvbnN0IGRlZmF1bHRUb2RvcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlZmF1bHQgVG9kbyAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgZmlyc3QgZGVmYXVsdCB0b2RvLlwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIHByb2plY3Q6IFwiSW5ib3hcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlZmF1bHQgVG9kbyAyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgc2Vjb25kIGRlZmF1bHQgdG9kby5cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgIHByb2plY3Q6IFwiSW5ib3hcIixcbiAgfSxcbiAgLy8gQWRkIG1vcmUgZGVmYXVsdCB0b2RvcyBhcyBuZWVkZWRcbl07XG5cbi8vIEZ1bmN0aW9uIHRvIGluaXRpYWxpemUgZGVmYXVsdCB0b2Rvc1xuY29uc3QgaW5pdGlhbGl6ZURlZmF1bHRUb2RvcyA9ICgpID0+IHtcbiAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFscmVhZHkgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBzdG9yZWRUb2Rvc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIik7XG4gIGNvbnN0IHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb2Rvc1N0cmluZykgfHwgW107XG5cbiAgLy8gSWYgbm8gdG9kb3MgYXJlIHN0b3JlZCwgY3JlYXRlIGRlZmF1bHQgdG9kb3NcbiAgaWYgKHN0b3JlZFRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlZmF1bHRUb2Rvcy5mb3JFYWNoKChkZWZhdWx0VG9kbykgPT4ge1xuICAgICAgdG9kb0xpc3QuY3JlYXRlVG9kbyhcbiAgICAgICAgZGVmYXVsdFRvZG8udGl0bGUsXG4gICAgICAgIGRlZmF1bHRUb2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICBkZWZhdWx0VG9kby5kdWVEYXRlLFxuICAgICAgICBkZWZhdWx0VG9kby5wcmlvcml0eSxcbiAgICAgICAgZGVmYXVsdFRvZG8ucHJvamVjdFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBsb2NhbCBzdG9yYWdlIHdpdGggdGhlIGRlZmF1bHQgdG9kb3NcbiAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRvZG9MaXN0LnRvZG9zKTtcbiAgfVxufTtcblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBkZWZhdWx0IHRvZG9zXG5pbml0aWFsaXplRGVmYXVsdFRvZG9zKCk7XG4iLCIvLyBJbXBvcnRzIHRoZSBvdGhlciBtb2R1bGVzIG9mIHRoZSBwcm9qZWN0XG5pbXBvcnQgeyBUb2RvTGlzdCwgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSwgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCB7IHZhbGlkYXRlRm9ybSB9IGZyb20gXCIuL3ZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9yZWZyZXNoLnBuZ1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2RlbGV0ZS5wbmdcIjtcblxuLy8gQ3JlYXRlIGFuIGluIG9mIHRoZSBUb2RvTGlzdCBjbGFzcyBpbiB0aGUgdG9kby5qcyBtb2R1bGVcbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cbi8vIEEgZnVuY3Rpb24gdG8gZ3JhYiB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnRpZXMgb2YgYSB0b2RvXG5jb25zdCB0b2RvUHJvcGVydHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbiAgLy8gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGl0bGUgYW5kIGFsbCB0aGUgcHJvcGVydGllc1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59O1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBcIkluYm94XCI7XG5cbi8vIENyZWF0ZXMgYSB0b2RvIGJ5IGNhbGxpbmcgdGhlIHRvZG9MaXN0LmNyZWF0ZVRvZG8gbWV0aG9kIHRvIGNyZWF0ZSB0b2Rvc1xuY29uc3QgY3JlYXRlVG9kbyA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICBjb25zdCB0b2RvUHJvcGVydGllcyA9IHRvZG9Qcm9wZXJ0eSgpO1xuXG4gIGlmIChjdXJyZW50UHJvamVjdCA9PT0gXCJJbmJveFwiKSB7XG4gICAgdG9kb0xpc3QuY3JlYXRlVG9kbyhcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLnRpdGxlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kdWVEYXRlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMucHJpb3JpdHkudmFsdWUsXG4gICAgICBjdXJyZW50UHJvamVjdFxuICAgICk7XG5cbiAgICB0b2Rvc0Z1bmN0aW9uKCk7XG5cbiAgICAvLyBSdW5zIHRoZSB0b2Rvc0Z1bmN0aW9uIGV2ZXJ5dGltZSBhIG5ldyB0b2RvIGlzIGNyZWF0ZWRcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgcHJvamVjdC1zcGVjaWZpYyB0b2RvcyBpZiBuZWVkZWRcbiAgICB0b2RvTGlzdC5jcmVhdGVUb2RvKFxuICAgICAgdG9kb1Byb3BlcnRpZXMudGl0bGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLmR1ZURhdGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0XG4gICAgKTtcblxuICAgIC8vUnVucyBwcm9qZWN0VG9kb3MgZm9yIGEgcGFydGljdWxhciBwcm9qZWN0IGFwYXJ0IGZyb20gaW5ib3hcbiAgICBwcm9qZWN0VG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVUb2RvRnVuY3Rpb24gPSAodG9kbywgY3VycmVudFByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb1Byb3BlcnRpZXNVcGRhdGUgPSB0b2RvUHJvcGVydHkoKTtcblxuICBpZiAoY3VycmVudFByb2plY3QgPT09IFwiaW5ib3hcIikge1xuICAgIHRvZG8udXBkYXRlUHJvcGVydGllcyhcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLnRpdGxlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5kdWVEYXRlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUucHJpb3JpdHkudmFsdWUsXG4gICAgICB0b2RvLnByb2plY3RcbiAgICApO1xuXG4gICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0b2RvKTtcbiAgICB0b2Rvc0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kby51cGRhdGVQcm9wZXJ0aWVzKFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUudGl0bGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLmR1ZURhdGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5wcmlvcml0eS52YWx1ZSxcbiAgICAgIHRvZG8ucHJvamVjdFxuICAgICk7XG5cbiAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRvZG8pO1xuICAgIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cbn07XG5cbmxldCBpc0Zvcm1WaXNpYmxlID0gZmFsc2U7XG5cbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGVcbmV4cG9ydCBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgaXNGb3JtVmlzaWJsZSA9ICFpc0Zvcm1WaXNpYmxlO1xuXG4gIGlmIChpc0Zvcm1WaXNpYmxlKSB7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tc2hvd1wiKTtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLWZvcm0tc2hvd1wiKTtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gIH1cbn07XG5cbi8vc2hvdyBvbmx5IHRoZSBhZGQgdGFzay1idXR0b24gd2hlbiB0aGUgYWRkIHRhc2sgYnV0dG9uXG5cbmNvbnN0IHNob3dBZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG4gIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBjb25zdCB1cGRhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKTtcbiAgdXBkYXRlVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG4vL3Nob3cgdGhlIG9ubHkgdGhlIHdoZW4gdGhlIHVwZGF0ZSBidXR0b24gaXMgY2xpY2tlZFxuXG5jb25zdCBzaG93VXBkYXRlVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBjb25zdCB1cGRhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKTtcbiAgdXBkYXRlVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuLy9CcmluZ3MgdXAgdGhlIGZvcm0gdG8gYWRkIGEgIHRvZG9cbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ1dHRvblwiKTtcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBzaG93QWRkVGFza0J1dHRvbigpO1xuICBzaG93Rm9ybShldmVudCk7XG59KTtcblxuLy8gU3RvcHMgdGhlIHByb3BhZ2F0aW9uIG9mIHRoZSBzaG93Zm9ybSBmdW5jdGlvbiB3aXRoaW4gdGhlIGZvcm0sIHNvIGNsaWNraW5nIG9uIHRoZSBmb3JtIHdpbGwgbm90IGRpc3NhcHBlYXIgaXRcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1mb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICBpZiAoaXNGb3JtVmlzaWJsZSkge1xuICAgIHRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidG9kby1mb3JtLXNob3dcIik7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGlzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgfVxufTtcbi8vIFRvZ2dsZXMgdGhlIGZvcm0gdmlzaWJpbGl0eSB3aGVuIHlvdSBjbGljayBvbiB0aGlzIGNvbnRhaW5lciwgd2hpY2ggY292ZXJzIHRoZSB3aG9sZSBzY3JlZW4sIGV4Y2VwdCBvbmx5IG9uIHBhcnRzIG9mIHRoZSBmb3JtXG5jb25zdCB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LWZvcm0tY29udGFpbmVyXCIpO1xudG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRvZ2dsZUZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVUb2RvVGl0bGVTdHlsZSh0b2RvLCB0b2RvVGl0bGUpIHtcbiAgaWYgKHRvZG8uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgdG9kb1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgfSBlbHNlIHtcbiAgICB0b2RvVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgdG9kbyBkZXRhaWxzXG5jb25zdCB0b2dnbGVUb2RvRGV0YWlscyA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcblxuICAvLyBGaW5kIHRoZSBleGlzdGluZyBkZXRhaWwgY29udGFpbmVyIGZvciB0aGUgY2xpY2tlZCB0b2RvXG4gIGNvbnN0IGV4aXN0aW5nRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYHRvZG8tZGV0YWlsLSR7aW5kZXh9YFxuICApO1xuXG4gIGlmIChleGlzdGluZ0RldGFpbENvbnRhaW5lcikge1xuICAgIC8vIElmIHRoZSBjb250YWluZXIgZXhpc3RzLCByZW1vdmUgaXQgdG8gaGlkZSB0aGUgZGV0YWlsc1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBleGlzdGluZ0RldGFpbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY29udGFpbmVyIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBhbmQgYXBwZW5kIGl0IGluc2lkZSB0aGUgdG9kbyBjb250YWluZXJcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICBjb25zdCB0b2RvRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGV0YWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1jb250YWluZXJcIik7XG4gICAgdG9kb0RldGFpbENvbnRhaW5lci5pZCA9IGB0b2RvLWRldGFpbC0ke2luZGV4fWA7IC8vIFVzZSBhbiBpZCB0byBpZGVudGlmeSB0aGUgY29udGFpbmVyXG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvVGl0bGUuYXBwZW5kKGBUaXRsZTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0udGl0bGV9YCk7XG5cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKGBEZXNjcmlwdGlvbjogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0uZGVzY3JpcHRpb259YCk7XG5cbiAgICBjb25zdCB0b2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EdWVkYXRlLmFwcGVuZChgRHVlZGF0ZTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoYFByaW9yaXR5OiAke3RvZG9MaXN0LnRvZG9zW2luZGV4XS5wcmlvcml0eX1gKTtcblxuICAgIHRvZG9EZXRhaWxDb250YWluZXIuYXBwZW5kKFxuICAgICAgdG9kb1RpdGxlLFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb0R1ZWRhdGUsXG4gICAgICB0b2RvUHJpb3JpdHlcbiAgICApO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBkZXRhaWxzIGNvbnRhaW5lciBpbnNpZGUgdGhlIHRvZG8gY29udGFpbmVyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RldGFpbENvbnRhaW5lcik7XG4gIH1cbn07XG5cbmxldCBzZWxlY3RlZFRvZG9JbmRleDtcblxuY29uc3QgdG9kb0VsZW1lbnRzID0gKHRvZG8sIGkpID0+IHtcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIENvbnRhaW5lciBmb3IgZWFjaCB0b2RvXG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpOyAvLyAgY2xhc3MgZm9yIHN0eWxpbmcgaWYgbmVlZGVkXG4gIHRvZG9Db250YWluZXIuZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9UaXRsZS5hcHBlbmQodG9kby50aXRsZSk7XG4gIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgdG9nZ2xlVG9kb0RldGFpbHMoZXZlbnQsIGkpO1xuICB9KTtcblxuICBjb25zdCB0b2RvQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9Db21wbGV0ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICB0b2RvQ29tcGxldGUuc3R5bGUud2lkdGggPSBcIjE1cHhcIjtcbiAgdG9kb0NvbXBsZXRlLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcblxuICB1cGRhdGVUb2RvVGl0bGVTdHlsZSh0b2RvLCB0b2RvVGl0bGUpO1xuXG4gIHRvZG9Db21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICB0b2RvLnRvZ2dsZUNvbXBsZXRlZCgpOyAvLyBUb2dnbGUgdGhlIGNvbXBsZXRpb24gc3RhdGVcbiAgICB1cGRhdGVUb2RvVGl0bGVTdHlsZSh0b2RvLCB0b2RvVGl0bGUpO1xuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlVG9kby5zcmMgPSBcIi4vYXNzZXRzL2RlbGV0ZS5wbmdcIjtcbiAgZGVsZXRlVG9kby5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKGksIDEpO1xuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgdG9kbyBjb250YWluZXIgZnJvbSB0aGUgRE9NXG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB1cGRhdGVUb2RvLnNyYyA9IFwiLi9hc3NldHMvcmVmcmVzaC5wbmdcIjtcbiAgdXBkYXRlVG9kby5zdHlsZS53aWR0aCA9IFwiMjVweFwiO1xuICB1cGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd1VwZGF0ZVRhc2tCdXR0b24oKTtcbiAgICBzaG93Rm9ybSgpO1xuXG4gICAgc2VsZWN0ZWRUb2RvSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgfSk7XG5cbiAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0NvbXBsZXRlLCB0b2RvVGl0bGUsIGRlbGV0ZVRvZG8sIHVwZGF0ZVRvZG8pO1xuXG4gIHJldHVybiB0b2RvQ29udGFpbmVyO1xufTtcblxuY29uc3QgdG9kb3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYWN0aXZlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtY29udGFpbmVyXCIpO1xuICBjb25zdCB0b2Rvc0luSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLWluYm94XCIpO1xuICBjb25zdCB0b2RvSW5Ub2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4tdG9kYXlcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIlxuICApO1xuXG4gIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgaW4gYWN0aXZlQ29udGFpbmVyXG4gIGFjdGl2ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2Rvc0luSW5ib3guaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb0luVG9kYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdHNDb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgaW5ib3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluYm94SGVhZGluZy5pZCA9IFwiaW5ib3gtdG9kb3MtaGVhZGluZ1wiO1xuICBpbmJveEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gIGFjdGl2ZUNvbnRhaW5lci5hcHBlbmQoaW5ib3hIZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LnRvZG9zW2ldO1xuXG4gICAgaWYgKHRvZG8ucHJvamVjdCA9PT0gXCJJbmJveFwiKSB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHNGcm9tRnVuYyA9IHRvZG9FbGVtZW50cyh0b2RvLCBpKTtcbiAgICAgIHRvZG9zSW5JbmJveC5hcHBlbmQodG9kb0VsZW1lbnRzRnJvbUZ1bmMpO1xuICAgIH1cbiAgfVxuICB0b2Rvc0luSW5ib3guYXBwZW5kKGFkZFRvZG9CdXR0b24pO1xufTtcblxuLy8gc3VibWl0IGJ1dHRvbiB3aGVuIHRoZSBhZGQgdGFzayBidXR0b24gaXMgY2xpY2tlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNyZWF0ZVRvZG8oY3VycmVudFByb2plY3QpO1xuICBmb3JtLnJlc2V0KCk7XG4gIHRvZ2dsZUZvcm0oKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZS10YXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFVzZSB0aGUgc3RvcmVkIGluZGV4IHRvIGNhbGwgdXBkYXRlVG9kb0Z1bmN0aW9uXG4gIGlmIChzZWxlY3RlZFRvZG9JbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LnRvZG9zW3NlbGVjdGVkVG9kb0luZGV4XTtcbiAgICB1cGRhdGVUb2RvRnVuY3Rpb24odG9kbywgY3VycmVudFByb2plY3QpO1xuICB9XG4gIHRvZ2dsZUZvcm0oKTtcbn0pO1xuXG5jb25zdCB0b2RheVRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBhY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHRvZG9JblRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi10b2RheVwiKTtcbiAgY29uc3QgdG9kb3NJbkluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi1pbmJveFwiKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiBhY3RpdmVDb250YWluZXJcbiAgYWN0aXZlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9JblRvZGF5LmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9zSW5JbmJveC5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCB0b2RheUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kYXlIZWFkaW5nLmlkID0gXCJ0b2RheS10b2Rvcy1oZWFkaW5nXCI7XG4gIHRvZGF5SGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgYWN0aXZlQ29udGFpbmVyLmFwcGVuZCh0b2RheUhlYWRpbmcpO1xuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlGb3JtYXR0ZWQgPSB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LnRvZG9zW2ldO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICAgIGlmICh0b2RvRHVlRGF0ZSA9PT0gdG9kYXlGb3JtYXR0ZWQgJiYgdG9kb0xpc3QudG9kb3MuaW5jbHVkZXModG9kbykpIHtcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50c0Zyb21GdW5jID0gdG9kb0VsZW1lbnRzKHRvZG8sIGkpO1xuICAgICAgdG9kb0luVG9kYXkuYXBwZW5kKHRvZG9FbGVtZW50c0Zyb21GdW5jKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIENhbGxzIHRoZSB0b2RheVRvZG9zIGZ1bmN0aW9uIHdoZW4gdGhlIHRvZGF5IHRhYiBpcyBhY3RpdmVcbmNvbnN0IHRvZGF5VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktY29udGFpbmVyXCIpO1xudG9kYXlUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRvZGF5VG9kb3MoKTtcbn0pO1xuXG4vLyBDYWxscyB0aGUgdG9kb3NGdW5jdGlvbiB3aGVuIHRoZSBpbmJveCB0YWIgaXMgYWN0aXZlXG5jb25zdCBpbmJveFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94LWNvbnRhaW5lclwiKTtcbmluYm94VG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjdXJyZW50UHJvamVjdCA9IFwiSW5ib3hcIjtcbiAgdG9kb3NGdW5jdGlvbigpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG59KTtcblxuLy9Qcm9qZWN0cyBzZWN0aW9uIG9mIHRoZSBhcHAgY29kZSBzdGFydHMgaGVyZVxuXG4vLyBEaXNwbGF5cyB0aGUgaW5wdXQgZmllbGRzIGZvciBwcm9qZWN0IG5hbWVcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChgRW50ZXIgdGhlIHByb2plY3QgbmFtZTpgKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtaWRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBzdWJtaXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGNhbmNlbFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY29uc3QgZGlzcGxheVByb2plY3ROYW1lID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pZFwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXG4gIGlmIChwcm9qZWN0TmFtZSkge1xuICAgIC8vIFJldHJpZXZlIGV4aXN0aW5nIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0c1N0cmluZykgfHwgW107XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHN0b3JlZFByb2plY3RzLnNvbWUoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdCA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgaWYgKCFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAvLyBBZGQgdGhlIG5ldyBwcm9qZWN0IHRvIHRoZSBzdG9yZWQgcHJvamVjdHNcbiAgICAgIHN0b3JlZFByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHByb2plY3RzIGluIGxvY2FsU3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuXG4gICAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIHByb2plY3RzQ29udGFpbmVyXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50VmFsdWU7XG5cbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBcIi4vYXNzZXRzL2RlbGV0ZS5wbmdcIjtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuXG4gICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIG5ld1Byb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBzdG9yZWQgcHJvamVjdHNcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gc3RvcmVkUHJvamVjdHNbaV07XG4gICAgICAgICAgICBzdG9yZWRQcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRvZG9zIHJlbGF0ZWQgdG8gdGhlIGRlbGV0ZWQgcHJvamVjdFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcbiAgICAgICAgICAgIGlmICh0b2RvLnByb2plY3QgPT09IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0b2Rvc0Z1bmN0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXNldCB0aGUgaW5wdXQgYW5kIHR1cm4gdGhlIGRpc3BsYXkgb2YgaXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uIG9mZiBhZnRlciBhZGRpbmdcbiAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgcHJvamVjdE5hbWVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBzdWJtaXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjYW5jZWxQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb24gcGFnZSBsb2FkXG5jb25zdCBkaXNwbGF5U3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgLy8gUmV0cmlldmUgZXhpc3RpbmcgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHNTdHJpbmcpIHx8IFtdO1xuXG4gIHN0b3JlZFByb2plY3RzLmZvckVhY2goKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5ld1Byb2plY3ROYW1lLnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlO1xuXG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSBjdXJyZW50VmFsdWU7XG4gICAgICBwcm9qZWN0VG9kb3MoY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVByb2plY3Quc3JjID0gXCIuL2Fzc2V0cy9kZWxldGUucG5nXCI7XG4gICAgZGVsZXRlUHJvamVjdC5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuXG4gICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBzdG9yZWQgcHJvamVjdHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RvcmVkUHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3RzKSk7XG5cbiAgICAgIC8vIFJlbW92ZSB0b2RvcyByZWxhdGVkIHRvIHRoZSBkZWxldGVkIHByb2plY3RcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LnRvZG9zW2ldO1xuICAgICAgICBpZiAodG9kby5wcm9qZWN0ID09PSBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0b2RvTGlzdC50b2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdG9kb3NGdW5jdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3QpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBkaXNwbGF5IHN0b3JlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbmRpc3BsYXlTdG9yZWRQcm9qZWN0cygpO1xuXG4vL0V2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgcHJvamVjdCBuYW1lIGJ1dHRvbiB0aGF0IGNhbGxzIHRoZSBkaXNwbGF5IHByb2plY3QgbmFtZSBmdW5jdGlvblxuY29uc3Qgc3VibWl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0LW5hbWVcIik7XG5zdWJtaXRQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5UHJvamVjdE5hbWUoKTtcbn0pO1xuXG5jb25zdCBjYW5jZWxQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLXByb2plY3QtbmFtZVwiKTtcbmNhbmNlbFByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pZFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3ROYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzdWJtaXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNhbmNlbFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vLyBGdW5jdGlvbiB0byBhZGQgdG9kb3MgdW5kZXIgYSBwcm9qZWN0XG5jb25zdCBwcm9qZWN0VG9kb3MgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgY29uc3QgYWN0aXZlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtY29udGFpbmVyXCIpO1xuICBjb25zdCB0b2Rvc0luSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLWluYm94XCIpO1xuICBjb25zdCB0b2RvSW5Ub2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4tdG9kYXlcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIlxuICApO1xuXG4gIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgaW4gYWN0aXZlQ29udGFpbmVyLCB0b2Rvc0luSW5ib3gsIHRvZG9JblRvZGF5LCBhbmQgdG9kb0luTmV3UHJvamVjdFxuICBhY3RpdmVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb3NJbkluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9JblRvZGF5LmlubmVySFRNTCA9IFwiXCI7XG4gIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RIZWFkaW5nLmlkID0gXCJwcm9qZWN0LXRvZG9zLWhlYWRpbmdcIjtcbiAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgYWN0aXZlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SGVhZGluZyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcblxuICAgIGlmICh0b2RvLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHNGcm9tRnVuYyA9IHRvZG9FbGVtZW50cyh0b2RvLCBpKTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5hcHBlbmQodG9kb0VsZW1lbnRzRnJvbUZ1bmMpO1xuICAgIH1cbiAgfVxuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGFkZFRvZG9CdXR0b24pO1xufTtcblxuLy8gQ2FsbGluZyB0aGUgdG9kb3MgZnVuY3Rpb24gdG8gcmVuZGVyIGV4aXN0aW5nIHRvZG9zIG9uIHBhZ2UgbG9hZFxudG9kb3NGdW5jdGlvbigpO1xuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICAvLyBtZXRob2QgdG8gdG9nZ2xlIGNvbXBsZXRpb24gc3RhdGVcbiAgdXBkYXRlUHJvcGVydGllcyhcbiAgICBuZXdUaXRsZSxcbiAgICBuZXdEZXNjcmlwdGlvbixcbiAgICBuZXdEdWVEYXRlLFxuICAgIG5ld1ByaW9yaXR5LFxuICAgIG5ld1Byb2plY3RcbiAgKSB7XG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gIH1cblxuICAvLyBTdGF0aWMgbWV0aG9kIHRvIGNyZWF0ZSBhIFRvZG8gaW5zdGFuY2UgZnJvbSBhbiBvYmplY3RcbiAgc3RhdGljIGZyb21PYmplY3QodG9kb09iamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICAgIHRvZG9PYmplY3QudGl0bGUsXG4gICAgICB0b2RvT2JqZWN0LmRlc2NyaXB0aW9uLFxuICAgICAgdG9kb09iamVjdC5kdWVEYXRlLFxuICAgICAgdG9kb09iamVjdC5wcmlvcml0eSxcbiAgICAgIHRvZG9PYmplY3QucHJvamVjdFxuICAgICk7XG5cbiAgICB0b2RvLmNvbXBsZXRlZCA9IHRvZG9PYmplY3QuY29tcGxldGVkO1xuXG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gc2V0IHRvZG9zIHRvIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBjb25zdCBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlID0gKHRvZG9zKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGdldCB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IGdldFRvZG9zRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb09iamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHx8IFtdO1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2Rvcy5wdXNoKFRvZG8uZnJvbU9iamVjdCh0b2RvT2JqZWN0c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvcyA9IGdldFRvZG9zRnJvbUxvY2FsU3RvcmFnZSgpOyAvLyBJbml0aWFsaXplIHdpdGggdG9kb3MgZnJvbSBsb2NhbCBzdG9yYWdlO1xuICB9XG5cbiAgY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRoaXMudG9kb3MpOyAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZSB3aXRoIHRoZSBuZXcgdG9kb3NcbiAgICByZXR1cm4gdG9kbztcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcblxuICAvLyBDaGVjayBpZiB0aXRsZSBpcyBlbXB0eVxuICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdGl0bGUgZm9yIHlvdXIgdGFzay5cIik7XG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGRlc2NyaXB0aW9uIGlzIGVtcHR5XG4gIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24gZm9yIHlvdXIgdGFzay5cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGR1ZSBkYXRlIGlzIHNlbGVjdGVkXG4gIGlmIChkYXRlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBkdWUgZGF0ZSBmb3IgeW91ciB0YXNrLlwiKTtcbiAgICBkYXRlSW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBpZiBwcmlvcml0eSBpcyBzZWxlY3RlZFxuICBpZiAocHJpb3JpdHlTZWxlY3QudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBjaG9vc2UgYSBwcmlvcml0eSBmb3IgeW91ciB0YXNrLlwiKTtcbiAgICBwcmlvcml0eVNlbGVjdC5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEFsbCB2YWxpZGF0aW9ucyBwYXNzZWQsIHJldHVybiB0cnVlXG4gIHJldHVybiB0cnVlO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2RvbS5qc1wiO1xuaW1wb3J0IFwiLi92YWxpZGF0aW9uLmpzXCI7XG5pbXBvcnQgXCIuL2RlZmF1bHRUb2Rvcy5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9