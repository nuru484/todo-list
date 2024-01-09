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

  {
    title: "Default Todo 3",
    description: "This is the third default todo.",
    dueDate: new Date(),
    priority: "Medium",
    project: "New Project",
  },
  {
    title: "Default Todo 4",
    description: "This is the fouth default todo.",
    dueDate: "2024-01-01",
    priority: "Medium",
    project: "Personal",
  },
  // Add more default todos as needed
];

// Define an array of default projects
const defaultProjects = [
  "New Project",
  "Work",
  "Personal" /* Add more default projects */,
];

// Function to initialize default todos and projects
const initializeDefaultData = () => {
  // Check if there are already todos and projects in local storage
  const storedTodosString = localStorage.getItem("todos");
  const storedTodos = JSON.parse(storedTodosString) || [];

  const storedProjectsString = localStorage.getItem("projects");
  const storedProjects = JSON.parse(storedProjectsString) || [];

  // If no todos are stored, create default todos
  if (storedTodos.length === 0) {
    defaultTodos.forEach((defaultTodo) => {
      const { title, description, dueDate, priority, project } = defaultTodo;
      todoList.createTodo(title, description, dueDate, priority, project);
    });

    // Update local storage with the default todos
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.setTodosInLocalStorage)(todoList.todos);
  }

  // If no projects are stored, create default projects
  if (storedProjects.length === 0) {
    storedProjects.push(...defaultProjects);
    localStorage.setItem("projects", JSON.stringify(storedProjects));
  }
};

// Call the function to initialize default todos and projects
initializeDefaultData();


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
    todosFunction();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxVQUFV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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ1I7QUFDTztBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RlZmF1bHRUb2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmFiZDY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDE1dmg7XG59XG5cbiNsb2dvLWNvbnRhaW5lciB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4jbG9nby1jb250YWluZXI6aG92ZXIsXG4jY29tcGxldGVkLXRhc2tzOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4jY29tcGxldGVkLXRhc2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAzLjE1cHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNhcHAtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMzNzQ5NTg7XG4gIGdhcDogOHB4O1xufVxuI2FwcC10aXRsZSBwIHNwYW4ge1xuICBjb2xvcjogIzJhYmQ2Nztcbn1cblxuI21haW4tY29udGVudCB7XG4gIC8qIG1pbi1oZWlnaHQ6IDUwdmg7ICovXG4gIG1hcmdpbjogMjBweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNmZTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuI2hvbWUtaGVhZGluZyxcbiNwcm9qZWN0cy1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzc0OTU4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM3NDk1ODtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI2luYm94LFxuI3RvZGF5LFxuI2ltcG9ydGFudCxcbiN0aGlzLXdlZWssXG4jYWRkLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDE1cHggMTBweDtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG59XG5cbiNpbmJveDpob3ZlcixcbiN0b2RheTpob3ZlcixcbiNpbXBvcnRhbnQ6aG92ZXIsXG4jdGhpcy13ZWVrOmhvdmVyLFxuI2FkZC1wcm9qZWN0OmhvdmVyLFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3NzA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcbn1cblxuI3Byb2plY3QtbmFtZS1pZCB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xufVxuXG4jc3VibWl0LXByb2plY3QtbmFtZSxcbiNjYW5jZWwtcHJvamVjdC1uYW1lIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMzAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xufVxuXG4jY2FuY2VsLXByb2plY3QtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDQsIDQpO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jcHJvamVjdHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbiN0b2Rvcy1pbi1pbmJveCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogNjB2aDtcbn1cblxuI2FjdGl2ZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xuICBoZWlnaHQ6IDVyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jYWRkLXRvZG8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4udG9kby1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWZvcm0tc2hvdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNyk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmZvcm0gaW5wdXQsXG5mb3JtIHRleHRhcmVhLFxuZm9ybSBzZWxlY3Qge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50b2RvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDc1JSA1JSA1JTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XG59XG5cbi50b2RvLWNvbnRhaW5lci5hY3RpdmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDc1JSA1JSA1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IDFmcjtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XG59XG5cbi50b2RvLWRldGFpbC1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMS80O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMTI3LCAxMjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMHZoO1xuICBtYXgtaGVpZ2h0OiAxMHZoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFFBQVE7QUFDVjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyYWJkNjc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuI2xvZ28tY29udGFpbmVyIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2xvZ28tY29udGFpbmVyOmhvdmVyLFxcbiNjb21wbGV0ZWQtdGFza3M6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI2NvbXBsZXRlZC10YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDMuMTVweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2FwcC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6ICMzNzQ5NTg7XFxuICBnYXA6IDhweDtcXG59XFxuI2FwcC10aXRsZSBwIHNwYW4ge1xcbiAgY29sb3I6ICMyYWJkNjc7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgLyogbWluLWhlaWdodDogNTB2aDsgKi9cXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNmZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jaG9tZS1oZWFkaW5nLFxcbiNwcm9qZWN0cy1oZWFkaW5nIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzNzQ5NTg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM3NDk1ODtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jaW5ib3gsXFxuI3RvZGF5LFxcbiNpbXBvcnRhbnQsXFxuI3RoaXMtd2VlayxcXG4jYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDE1cHggMTBweDtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbn1cXG5cXG4jaW5ib3g6aG92ZXIsXFxuI3RvZGF5OmhvdmVyLFxcbiNpbXBvcnRhbnQ6aG92ZXIsXFxuI3RoaXMtd2Vlazpob3ZlcixcXG4jYWRkLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc3MDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtaWQge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xcbn1cXG5cXG4jc3VibWl0LXByb2plY3QtbmFtZSxcXG4jY2FuY2VsLXByb2plY3QtbmFtZSB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbn1cXG5cXG4jY2FuY2VsLXByb2plY3QtbmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCA0LCA0KTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jdG9kb3MtaW4taW5ib3gge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWF4LWhlaWdodDogNjB2aDtcXG59XFxuXFxuI2FjdGl2ZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXG4gIGhlaWdodDogNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0tc2hvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC43KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICBtYXJnaW46IGF1dG8gYXV0bztcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHRleHRhcmVhLFxcbmZvcm0gc2VsZWN0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDc1JSA1JSA1JTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgNzUlIDUlIDUlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IDFmcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XFxufVxcblxcbi50b2RvLWRldGFpbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMTI3LCAxMjcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIG1heC1oZWlnaHQ6IDEwdmg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzIHRoZSBvdGhlciBtb2R1bGVzIG9mIHRoZSBwcm9qZWN0XG5pbXBvcnQgeyBUb2RvTGlzdCwgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBUb2RvTGlzdCBjbGFzcyBpbiB0aGUgdG9kby5qcyBtb2R1bGVcbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cbi8vIERlZmluZSBhbiBhcnJheSBvZiBkZWZhdWx0IHRvZG9zXG5jb25zdCBkZWZhdWx0VG9kb3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZWZhdWx0IFRvZG8gMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGZpcnN0IGRlZmF1bHQgdG9kby5cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEZWZhdWx0IFRvZG8gMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHNlY29uZCBkZWZhdWx0IHRvZG8uXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKSxcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkRlZmF1bHQgVG9kbyAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgdGhpcmQgZGVmYXVsdCB0b2RvLlwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgcHJvamVjdDogXCJOZXcgUHJvamVjdFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGVmYXVsdCBUb2RvIDRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBmb3V0aCBkZWZhdWx0IHRvZG8uXCIsXG4gICAgZHVlRGF0ZTogXCIyMDI0LTAxLTAxXCIsXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgcHJvamVjdDogXCJQZXJzb25hbFwiLFxuICB9LFxuICAvLyBBZGQgbW9yZSBkZWZhdWx0IHRvZG9zIGFzIG5lZWRlZFxuXTtcblxuLy8gRGVmaW5lIGFuIGFycmF5IG9mIGRlZmF1bHQgcHJvamVjdHNcbmNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IFtcbiAgXCJOZXcgUHJvamVjdFwiLFxuICBcIldvcmtcIixcbiAgXCJQZXJzb25hbFwiIC8qIEFkZCBtb3JlIGRlZmF1bHQgcHJvamVjdHMgKi8sXG5dO1xuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIGRlZmF1bHQgdG9kb3MgYW5kIHByb2plY3RzXG5jb25zdCBpbml0aWFsaXplRGVmYXVsdERhdGEgPSAoKSA9PiB7XG4gIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbHJlYWR5IHRvZG9zIGFuZCBwcm9qZWN0cyBpbiBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHN0b3JlZFRvZG9zU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKTtcbiAgY29uc3Qgc3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG9zU3RyaW5nKSB8fCBbXTtcblxuICBjb25zdCBzdG9yZWRQcm9qZWN0c1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0c1N0cmluZykgfHwgW107XG5cbiAgLy8gSWYgbm8gdG9kb3MgYXJlIHN0b3JlZCwgY3JlYXRlIGRlZmF1bHQgdG9kb3NcbiAgaWYgKHN0b3JlZFRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlZmF1bHRUb2Rvcy5mb3JFYWNoKChkZWZhdWx0VG9kbykgPT4ge1xuICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH0gPSBkZWZhdWx0VG9kbztcbiAgICAgIHRvZG9MaXN0LmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZSB3aXRoIHRoZSBkZWZhdWx0IHRvZG9zXG4gICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0b2RvTGlzdC50b2Rvcyk7XG4gIH1cblxuICAvLyBJZiBubyBwcm9qZWN0cyBhcmUgc3RvcmVkLCBjcmVhdGUgZGVmYXVsdCBwcm9qZWN0c1xuICBpZiAoc3RvcmVkUHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgc3RvcmVkUHJvamVjdHMucHVzaCguLi5kZWZhdWx0UHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpKTtcbiAgfVxufTtcblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBkZWZhdWx0IHRvZG9zIGFuZCBwcm9qZWN0c1xuaW5pdGlhbGl6ZURlZmF1bHREYXRhKCk7XG4iLCIvLyBJbXBvcnRzIHRoZSBvdGhlciBtb2R1bGVzIG9mIHRoZSBwcm9qZWN0XG5pbXBvcnQgeyBUb2RvTGlzdCwgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSwgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCB7IHZhbGlkYXRlRm9ybSB9IGZyb20gXCIuL3ZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9yZWZyZXNoLnBuZ1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2RlbGV0ZS5wbmdcIjtcblxuLy8gQ3JlYXRlIGFuIGluIG9mIHRoZSBUb2RvTGlzdCBjbGFzcyBpbiB0aGUgdG9kby5qcyBtb2R1bGVcbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cbi8vIEEgZnVuY3Rpb24gdG8gZ3JhYiB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnRpZXMgb2YgYSB0b2RvXG5jb25zdCB0b2RvUHJvcGVydHkgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbiAgLy8gUmV0dXJucyB0aGUgdmFsdWUgb2YgdGl0bGUgYW5kIGFsbCB0aGUgcHJvcGVydGllc1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59O1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBcIkluYm94XCI7XG5cbi8vIENyZWF0ZXMgYSB0b2RvIGJ5IGNhbGxpbmcgdGhlIHRvZG9MaXN0LmNyZWF0ZVRvZG8gbWV0aG9kIHRvIGNyZWF0ZSB0b2Rvc1xuY29uc3QgY3JlYXRlVG9kbyA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICBjb25zdCB0b2RvUHJvcGVydGllcyA9IHRvZG9Qcm9wZXJ0eSgpO1xuXG4gIGlmIChjdXJyZW50UHJvamVjdCA9PT0gXCJJbmJveFwiKSB7XG4gICAgdG9kb0xpc3QuY3JlYXRlVG9kbyhcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLnRpdGxlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kdWVEYXRlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMucHJpb3JpdHkudmFsdWUsXG4gICAgICBjdXJyZW50UHJvamVjdFxuICAgICk7XG5cbiAgICB0b2Rvc0Z1bmN0aW9uKCk7XG5cbiAgICAvLyBSdW5zIHRoZSB0b2Rvc0Z1bmN0aW9uIGV2ZXJ5dGltZSBhIG5ldyB0b2RvIGlzIGNyZWF0ZWRcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgcHJvamVjdC1zcGVjaWZpYyB0b2RvcyBpZiBuZWVkZWRcbiAgICB0b2RvTGlzdC5jcmVhdGVUb2RvKFxuICAgICAgdG9kb1Byb3BlcnRpZXMudGl0bGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLmR1ZURhdGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0XG4gICAgKTtcblxuICAgIC8vUnVucyBwcm9qZWN0VG9kb3MgZm9yIGEgcGFydGljdWxhciBwcm9qZWN0IGFwYXJ0IGZyb20gaW5ib3hcbiAgICBwcm9qZWN0VG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVUb2RvRnVuY3Rpb24gPSAodG9kbywgY3VycmVudFByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb1Byb3BlcnRpZXNVcGRhdGUgPSB0b2RvUHJvcGVydHkoKTtcblxuICBpZiAoY3VycmVudFByb2plY3QgPT09IFwiaW5ib3hcIikge1xuICAgIHRvZG8udXBkYXRlUHJvcGVydGllcyhcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLnRpdGxlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5kdWVEYXRlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUucHJpb3JpdHkudmFsdWUsXG4gICAgICB0b2RvLnByb2plY3RcbiAgICApO1xuXG4gICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0b2RvKTtcbiAgICB0b2Rvc0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kby51cGRhdGVQcm9wZXJ0aWVzKFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUudGl0bGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLmR1ZURhdGUudmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5wcmlvcml0eS52YWx1ZSxcbiAgICAgIHRvZG8ucHJvamVjdFxuICAgICk7XG5cbiAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRvZG8pO1xuICAgIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cbn07XG5cbmxldCBpc0Zvcm1WaXNpYmxlID0gZmFsc2U7XG5cbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGVcbmV4cG9ydCBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgaXNGb3JtVmlzaWJsZSA9ICFpc0Zvcm1WaXNpYmxlO1xuXG4gIGlmIChpc0Zvcm1WaXNpYmxlKSB7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tc2hvd1wiKTtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLWZvcm0tc2hvd1wiKTtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gIH1cbn07XG5cbi8vc2hvdyBvbmx5IHRoZSBhZGQgdGFzay1idXR0b24gd2hlbiB0aGUgYWRkIHRhc2sgYnV0dG9uXG5cbmNvbnN0IHNob3dBZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG4gIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBjb25zdCB1cGRhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKTtcbiAgdXBkYXRlVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG4vL3Nob3cgdGhlIG9ubHkgdGhlIHdoZW4gdGhlIHVwZGF0ZSBidXR0b24gaXMgY2xpY2tlZFxuXG5jb25zdCBzaG93VXBkYXRlVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBjb25zdCB1cGRhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKTtcbiAgdXBkYXRlVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuLy9CcmluZ3MgdXAgdGhlIGZvcm0gdG8gYWRkIGEgIHRvZG9cbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ1dHRvblwiKTtcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBzaG93QWRkVGFza0J1dHRvbigpO1xuICBzaG93Rm9ybShldmVudCk7XG59KTtcblxuLy8gU3RvcHMgdGhlIHByb3BhZ2F0aW9uIG9mIHRoZSBzaG93Zm9ybSBmdW5jdGlvbiB3aXRoaW4gdGhlIGZvcm0sIHNvIGNsaWNraW5nIG9uIHRoZSBmb3JtIHdpbGwgbm90IGRpc3NhcHBlYXIgaXRcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1mb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICBpZiAoaXNGb3JtVmlzaWJsZSkge1xuICAgIHRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidG9kby1mb3JtLXNob3dcIik7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGlzRm9ybVZpc2libGUgPSBmYWxzZTtcbiAgfVxufTtcbi8vIFRvZ2dsZXMgdGhlIGZvcm0gdmlzaWJpbGl0eSB3aGVuIHlvdSBjbGljayBvbiB0aGlzIGNvbnRhaW5lciwgd2hpY2ggY292ZXJzIHRoZSB3aG9sZSBzY3JlZW4sIGV4Y2VwdCBvbmx5IG9uIHBhcnRzIG9mIHRoZSBmb3JtXG5jb25zdCB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LWZvcm0tY29udGFpbmVyXCIpO1xudG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRvZ2dsZUZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVUb2RvVGl0bGVTdHlsZSh0b2RvLCB0b2RvVGl0bGUpIHtcbiAgaWYgKHRvZG8uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgdG9kb1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgfSBlbHNlIHtcbiAgICB0b2RvVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgdG9kbyBkZXRhaWxzXG5jb25zdCB0b2dnbGVUb2RvRGV0YWlscyA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcblxuICAvLyBGaW5kIHRoZSBleGlzdGluZyBkZXRhaWwgY29udGFpbmVyIGZvciB0aGUgY2xpY2tlZCB0b2RvXG4gIGNvbnN0IGV4aXN0aW5nRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYHRvZG8tZGV0YWlsLSR7aW5kZXh9YFxuICApO1xuXG4gIGlmIChleGlzdGluZ0RldGFpbENvbnRhaW5lcikge1xuICAgIC8vIElmIHRoZSBjb250YWluZXIgZXhpc3RzLCByZW1vdmUgaXQgdG8gaGlkZSB0aGUgZGV0YWlsc1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBleGlzdGluZ0RldGFpbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY29udGFpbmVyIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBhbmQgYXBwZW5kIGl0IGluc2lkZSB0aGUgdG9kbyBjb250YWluZXJcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICBjb25zdCB0b2RvRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGV0YWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1jb250YWluZXJcIik7XG4gICAgdG9kb0RldGFpbENvbnRhaW5lci5pZCA9IGB0b2RvLWRldGFpbC0ke2luZGV4fWA7IC8vIFVzZSBhbiBpZCB0byBpZGVudGlmeSB0aGUgY29udGFpbmVyXG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvVGl0bGUuYXBwZW5kKGBUaXRsZTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0udGl0bGV9YCk7XG5cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKGBEZXNjcmlwdGlvbjogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0uZGVzY3JpcHRpb259YCk7XG5cbiAgICBjb25zdCB0b2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EdWVkYXRlLmFwcGVuZChgRHVlZGF0ZTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoYFByaW9yaXR5OiAke3RvZG9MaXN0LnRvZG9zW2luZGV4XS5wcmlvcml0eX1gKTtcblxuICAgIHRvZG9EZXRhaWxDb250YWluZXIuYXBwZW5kKFxuICAgICAgdG9kb1RpdGxlLFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb0R1ZWRhdGUsXG4gICAgICB0b2RvUHJpb3JpdHlcbiAgICApO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBkZXRhaWxzIGNvbnRhaW5lciBpbnNpZGUgdGhlIHRvZG8gY29udGFpbmVyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0RldGFpbENvbnRhaW5lcik7XG4gIH1cbn07XG5cbmxldCBzZWxlY3RlZFRvZG9JbmRleDtcblxuY29uc3QgdG9kb0VsZW1lbnRzID0gKHRvZG8sIGkpID0+IHtcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIENvbnRhaW5lciBmb3IgZWFjaCB0b2RvXG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpOyAvLyAgY2xhc3MgZm9yIHN0eWxpbmcgaWYgbmVlZGVkXG4gIHRvZG9Db250YWluZXIuZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9UaXRsZS5hcHBlbmQodG9kby50aXRsZSk7XG4gIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgdG9nZ2xlVG9kb0RldGFpbHMoZXZlbnQsIGkpO1xuICB9KTtcblxuICBjb25zdCB0b2RvQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9Db21wbGV0ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICB0b2RvQ29tcGxldGUuc3R5bGUud2lkdGggPSBcIjE1cHhcIjtcbiAgdG9kb0NvbXBsZXRlLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcblxuICB1cGRhdGVUb2RvVGl0bGVTdHlsZSh0b2RvLCB0b2RvVGl0bGUpO1xuXG4gIHRvZG9Db21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICB0b2RvLnRvZ2dsZUNvbXBsZXRlZCgpOyAvLyBUb2dnbGUgdGhlIGNvbXBsZXRpb24gc3RhdGVcbiAgICB1cGRhdGVUb2RvVGl0bGVTdHlsZSh0b2RvLCB0b2RvVGl0bGUpO1xuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlVG9kby5zcmMgPSBcIi4vYXNzZXRzL2RlbGV0ZS5wbmdcIjtcbiAgZGVsZXRlVG9kby5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKGksIDEpO1xuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICAgIHRvZG9Db250YWluZXIucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgdG9kbyBjb250YWluZXIgZnJvbSB0aGUgRE9NXG4gICAgdG9kb3NGdW5jdGlvbigpO1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdXBkYXRlVG9kby5zcmMgPSBcIi4vYXNzZXRzL3JlZnJlc2gucG5nXCI7XG4gIHVwZGF0ZVRvZG8uc3R5bGUud2lkdGggPSBcIjI1cHhcIjtcbiAgdXBkYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dVcGRhdGVUYXNrQnV0dG9uKCk7XG4gICAgc2hvd0Zvcm0oKTtcblxuICAgIHNlbGVjdGVkVG9kb0luZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG4gIH0pO1xuXG4gIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9Db21wbGV0ZSwgdG9kb1RpdGxlLCBkZWxldGVUb2RvLCB1cGRhdGVUb2RvKTtcblxuICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbn07XG5cbmNvbnN0IHRvZG9zRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9kb3NJbkluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi1pbmJveFwiKTtcbiAgY29uc3QgdG9kb0luVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLXRvZGF5XCIpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCJcbiAgKTtcblxuICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIGFjdGl2ZUNvbnRhaW5lclxuICBhY3RpdmVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb3NJbkluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9JblRvZGF5LmlubmVySFRNTCA9IFwiXCI7XG4gIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGluYm94SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmJveEhlYWRpbmcuaWQgPSBcImluYm94LXRvZG9zLWhlYWRpbmdcIjtcbiAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICBhY3RpdmVDb250YWluZXIuYXBwZW5kKGluYm94SGVhZGluZyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcblxuICAgIGlmICh0b2RvLnByb2plY3QgPT09IFwiSW5ib3hcIikge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzRnJvbUZ1bmMgPSB0b2RvRWxlbWVudHModG9kbywgaSk7XG4gICAgICB0b2Rvc0luSW5ib3guYXBwZW5kKHRvZG9FbGVtZW50c0Zyb21GdW5jKTtcbiAgICB9XG4gIH1cbiAgdG9kb3NJbkluYm94LmFwcGVuZChhZGRUb2RvQnV0dG9uKTtcbn07XG5cbi8vIHN1Ym1pdCBidXR0b24gd2hlbiB0aGUgYWRkIHRhc2sgYnV0dG9uIGlzIGNsaWNrZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjcmVhdGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgZm9ybS5yZXNldCgpO1xuICB0b2dnbGVGb3JtKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFza1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBVc2UgdGhlIHN0b3JlZCBpbmRleCB0byBjYWxsIHVwZGF0ZVRvZG9GdW5jdGlvblxuICBpZiAoc2VsZWN0ZWRUb2RvSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tzZWxlY3RlZFRvZG9JbmRleF07XG4gICAgdXBkYXRlVG9kb0Z1bmN0aW9uKHRvZG8sIGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuICB0b2dnbGVGb3JtKCk7XG59KTtcblxuY29uc3QgdG9kYXlUb2RvcyA9ICgpID0+IHtcbiAgY29uc3QgYWN0aXZlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtY29udGFpbmVyXCIpO1xuICBjb25zdCB0b2RvSW5Ub2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4tdG9kYXlcIik7XG4gIGNvbnN0IHRvZG9zSW5JbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4taW5ib3hcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIlxuICApO1xuXG4gIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgaW4gYWN0aXZlQ29udGFpbmVyXG4gIGFjdGl2ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2RvSW5Ub2RheS5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2Rvc0luSW5ib3guaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdHNDb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgdG9kYXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZGF5SGVhZGluZy5pZCA9IFwidG9kYXktdG9kb3MtaGVhZGluZ1wiO1xuICB0b2RheUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIGFjdGl2ZUNvbnRhaW5lci5hcHBlbmQodG9kYXlIZWFkaW5nKTtcblxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvZGF5Rm9ybWF0dGVkID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgICBpZiAodG9kb0R1ZURhdGUgPT09IHRvZGF5Rm9ybWF0dGVkICYmIHRvZG9MaXN0LnRvZG9zLmluY2x1ZGVzKHRvZG8pKSB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHNGcm9tRnVuYyA9IHRvZG9FbGVtZW50cyh0b2RvLCBpKTtcbiAgICAgIHRvZG9JblRvZGF5LmFwcGVuZCh0b2RvRWxlbWVudHNGcm9tRnVuYyk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBDYWxscyB0aGUgdG9kYXlUb2RvcyBmdW5jdGlvbiB3aGVuIHRoZSB0b2RheSB0YWIgaXMgYWN0aXZlXG5jb25zdCB0b2RheVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LWNvbnRhaW5lclwiKTtcbnRvZGF5VG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0b2RheVRvZG9zKCk7XG59KTtcblxuLy8gQ2FsbHMgdGhlIHRvZG9zRnVuY3Rpb24gd2hlbiB0aGUgaW5ib3ggdGFiIGlzIGFjdGl2ZVxuY29uc3QgaW5ib3hUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveC1jb250YWluZXJcIik7XG5pbmJveFRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3VycmVudFByb2plY3QgPSBcIkluYm94XCI7XG4gIHRvZG9zRnVuY3Rpb24oKTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xufSk7XG5cbi8vUHJvamVjdHMgc2VjdGlvbiBvZiB0aGUgYXBwIGNvZGUgc3RhcnRzIGhlcmVcblxuLy8gRGlzcGxheXMgdGhlIGlucHV0IGZpZWxkcyBmb3IgcHJvamVjdCBuYW1lXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoYEVudGVyIHRoZSBwcm9qZWN0IG5hbWU6YCk7XG5cbiAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWlkXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgc3VibWl0UHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBjYW5jZWxQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtaWRcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcblxuICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAvLyBSZXRyaWV2ZSBleGlzdGluZyBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHNTdHJpbmcpIHx8IFtdO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBzdG9yZWRQcm9qZWN0cy5zb21lKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QgPT09IHByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIGlmICghcHJvamVjdEV4aXN0cykge1xuICAgICAgLy8gQWRkIHRoZSBuZXcgcHJvamVjdCB0byB0aGUgc3RvcmVkIHByb2plY3RzXG4gICAgICBzdG9yZWRQcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwcm9qZWN0cyBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpKTtcblxuICAgICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiBwcm9qZWN0c0NvbnRhaW5lclxuICAgICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgc3RvcmVkUHJvamVjdHMuZm9yRWFjaCgoY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlO1xuXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICBwcm9qZWN0VG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3Quc3JjID0gXCIuL2Fzc2V0cy9kZWxldGUucG5nXCI7XG4gICAgICAgIGRlbGV0ZVByb2plY3Quc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcblxuICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gc3RvcmVkIHByb2plY3RzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHN0b3JlZFByb2plY3RzW2ldO1xuICAgICAgICAgICAgc3RvcmVkUHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpKTtcblxuICAgICAgICAgIC8vIFJlbW92ZSB0b2RvcyByZWxhdGVkIHRvIHRoZSBkZWxldGVkIHByb2plY3RcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3NbaV07XG4gICAgICAgICAgICBpZiAodG9kby5wcm9qZWN0ID09PSBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRvZG9MaXN0LnRvZG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdG9kb3NGdW5jdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IGFuZCB0dXJuIHRoZSBkaXNwbGF5IG9mIGl0IGFuZCB0aGUgc3VibWl0IGJ1dHRvbiBvZmYgYWZ0ZXIgYWRkaW5nXG4gICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIHByb2plY3ROYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgc3VibWl0UHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY2FuY2VsUHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlIG9uIHBhZ2UgbG9hZFxuY29uc3QgZGlzcGxheVN0b3JlZFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlXG4gIGNvbnN0IHN0b3JlZFByb2plY3RzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzU3RyaW5nKSB8fCBbXTtcblxuICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuZXdQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRWYWx1ZTtcblxuICAgIG5ld1Byb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFZhbHVlO1xuICAgICAgcHJvamVjdFRvZG9zKGN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkZWxldGVQcm9qZWN0LnNyYyA9IFwiLi9hc3NldHMvZGVsZXRlLnBuZ1wiO1xuICAgIGRlbGV0ZVByb2plY3Quc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcblxuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gc3RvcmVkIHByb2plY3RzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0b3JlZFByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuXG4gICAgICAvLyBSZW1vdmUgdG9kb3MgcmVsYXRlZCB0byB0aGUgZGVsZXRlZCBwcm9qZWN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcbiAgICAgICAgaWYgKHRvZG8ucHJvamVjdCA9PT0gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgdG9kb0xpc3QudG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRvZG9zRnVuY3Rpb24oKTtcbiAgICB9KTtcblxuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kKG5ld1Byb2plY3ROYW1lLCBkZWxldGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gZGlzcGxheSBzdG9yZWQgcHJvamVjdHMgb24gcGFnZSBsb2FkXG5kaXNwbGF5U3RvcmVkUHJvamVjdHMoKTtcblxuLy9FdmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IHByb2plY3QgbmFtZSBidXR0b24gdGhhdCBjYWxscyB0aGUgZGlzcGxheSBwcm9qZWN0IG5hbWUgZnVuY3Rpb25cbmNvbnN0IHN1Ym1pdFByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdC1uYW1lXCIpO1xuc3VibWl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheVByb2plY3ROYW1lKCk7XG59KTtcblxuY29uc3QgY2FuY2VsUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1wcm9qZWN0LW5hbWVcIik7XG5jYW5jZWxQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtaWRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0TmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc3VibWl0UHJvamVjdE5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjYW5jZWxQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIHRvZG9zIHVuZGVyIGEgcHJvamVjdFxuY29uc3QgcHJvamVjdFRvZG9zID0gKHByb2plY3ROYW1lKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9kb3NJbkluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi1pbmJveFwiKTtcbiAgY29uc3QgdG9kb0luVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLXRvZGF5XCIpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCJcbiAgKTtcblxuICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIGFjdGl2ZUNvbnRhaW5lciwgdG9kb3NJbkluYm94LCB0b2RvSW5Ub2RheSwgYW5kIHRvZG9Jbk5ld1Byb2plY3RcbiAgYWN0aXZlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9zSW5JbmJveC5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2RvSW5Ub2RheS5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0SGVhZGluZy5pZCA9IFwicHJvamVjdC10b2Rvcy1oZWFkaW5nXCI7XG4gIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIGFjdGl2ZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3NbaV07XG5cbiAgICBpZiAodG9kby5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzRnJvbUZ1bmMgPSB0b2RvRWxlbWVudHModG9kbywgaSk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHRvZG9FbGVtZW50c0Zyb21GdW5jKTtcbiAgICB9XG4gIH1cbiAgcHJvamVjdHNDb250YWluZXJFbGVtZW50LmFwcGVuZChhZGRUb2RvQnV0dG9uKTtcbn07XG5cbi8vIENhbGxpbmcgdGhlIHRvZG9zIGZ1bmN0aW9uIHRvIHJlbmRlciBleGlzdGluZyB0b2RvcyBvbiBwYWdlIGxvYWRcbnRvZG9zRnVuY3Rpb24oKTtcbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gbWV0aG9kIHRvIHRvZ2dsZSBjb21wbGV0aW9uIHN0YXRlXG4gIHVwZGF0ZVByb3BlcnRpZXMoXG4gICAgbmV3VGl0bGUsXG4gICAgbmV3RGVzY3JpcHRpb24sXG4gICAgbmV3RHVlRGF0ZSxcbiAgICBuZXdQcmlvcml0eSxcbiAgICBuZXdQcm9qZWN0XG4gICkge1xuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICB9XG5cbiAgLy8gU3RhdGljIG1ldGhvZCB0byBjcmVhdGUgYSBUb2RvIGluc3RhbmNlIGZyb20gYW4gb2JqZWN0XG4gIHN0YXRpYyBmcm9tT2JqZWN0KHRvZG9PYmplY3QpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICB0b2RvT2JqZWN0LnRpdGxlLFxuICAgICAgdG9kb09iamVjdC5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG9PYmplY3QuZHVlRGF0ZSxcbiAgICAgIHRvZG9PYmplY3QucHJpb3JpdHksXG4gICAgICB0b2RvT2JqZWN0LnByb2plY3RcbiAgICApO1xuXG4gICAgdG9kby5jb21wbGV0ZWQgPSB0b2RvT2JqZWN0LmNvbXBsZXRlZDtcblxuICAgIHJldHVybiB0b2RvO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCB0b2RvcyB0byBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3Qgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSA9ICh0b2RvcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59O1xuXG4vLyBGdW5jdGlvbiB0byBnZXQgdG9kb3MgZnJvbSBsb2NhbCBzdG9yYWdlXG5jb25zdCBnZXRUb2Rvc0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9PYmplY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB8fCBbXTtcbiAgY29uc3QgdG9kb3MgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9PYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9kb3MucHVzaChUb2RvLmZyb21PYmplY3QodG9kb09iamVjdHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb3MgPSBnZXRUb2Rvc0Zyb21Mb2NhbFN0b3JhZ2UoKTsgLy8gSW5pdGlhbGl6ZSB3aXRoIHRvZG9zIGZyb20gbG9jYWwgc3RvcmFnZTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0aGlzLnRvZG9zKTsgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgbmV3IHRvZG9zXG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbiAgLy8gQ2hlY2sgaWYgdGl0bGUgaXMgZW1wdHlcbiAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlIGZvciB5b3VyIHRhc2suXCIpO1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBpZiBkZXNjcmlwdGlvbiBpcyBlbXB0eVxuICBpZiAoZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIHRhc2suXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBpZiBkdWUgZGF0ZSBpcyBzZWxlY3RlZFxuICBpZiAoZGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZHVlIGRhdGUgZm9yIHlvdXIgdGFzay5cIik7XG4gICAgZGF0ZUlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgcHJpb3JpdHkgaXMgc2VsZWN0ZWRcbiAgaWYgKHByaW9yaXR5U2VsZWN0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgY2hvb3NlIGEgcHJpb3JpdHkgZm9yIHlvdXIgdGFzay5cIik7XG4gICAgcHJpb3JpdHlTZWxlY3QuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBBbGwgdmFsaWRhdGlvbnMgcGFzc2VkLCByZXR1cm4gdHJ1ZVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9kb20uanNcIjtcbmltcG9ydCBcIi4vdmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9kZWZhdWx0VG9kb3MuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==