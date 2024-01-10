/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  overflow-x: hidden;
}

body {
  background-color: #ececec;
  box-sizing: border-box;
}
#container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(3, auto);
}

header {
  grid-row: 1/2;
  grid-column: 1/3;
}

header {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  border-bottom: 2px solid #2abd67;
  background-color: #f2f3f5;
  padding: 20px;
  height: 15vh;
}

#main-content {
  margin: 1rem;
  padding: 1rem;
}

nav {
  display: flex;
  flex-direction: column;
  background-color: #fefcfe;
  padding: 20px;
}

/* Media query for smaller screens */
@media (max-width: 1200px) {
  #container {
    grid-template-columns: 1fr; /* Set to one column on smaller screens */
    /* grid-template-rows: repeat(4, auto); */
  }

  header {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  .footer-class {
    grid-row: 4/5;
    grid-column: 1/2;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    height: 10vh;
  }

  nav {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  #main-content {
    grid-row: 3/4;
    grid-column: 1/2;
    margin-bottom: 5em;
  }
}

#logo-container {
  list-style: none;
  transition: transform 0.3s ease-in-out;
  margin: auto 0;
}

#logo-container img {
  width: clamp(1.5rem, 2.5vw, 3rem);
  /* width: 2.5vw; */
}

#logo-container:hover,
#completed-tasks:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.completed-tasks-class {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vw;
  margin: auto 0;
  border-radius: 0.7vw;
  border: 3px solid black;
  font-size: clamp(0.4rem, 1vw, 1.5rem);
  font-family: Arial, Helvetica, sans-serif;
  transition: transform 0.3s ease-in-out;
}

.app-title-class {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto 0;
  font-size: 2rem;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: #374958;
  gap: 0.5vw;
}

#app-title img {
  width: clamp(1.2rem, 2vw, 2rem);
}

#app-title p span {
  color: #2abd67;
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

.nav-bar-hide {
  display: none;
}

#container.container-only {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

#main-content.main-without-nav-bar {
  min-height: 70dvh;
}

#footer-container.without-nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  max-height: 10vh;
  width: 100dvw;
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
  overflow: hidden;
  background-color: #f2f3f5;
  margin: auto auto;
  padding: 2dvw;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 80vw;
}

form input,
form textarea,
form select {
  margin: 0.5rem;
  padding: 0.8rem;
}

.todo-container {
  display: grid;
  justify-content: center;
  grid-template-columns: 5fr 75fr 5fr 5fr;
  padding: 0.8rem;
  margin: 20px;
  border: 2px solid #374958;
  gap: 0.5vw;
}

.todo-container input,
.todo-container p,
.todo-container img {
  margin: 0 auto;
}

.todo-container.active {
  display: grid;
  grid-template-columns: 5fr 75fr 5fr 5fr;
  grid-template-rows: 20px 1fr;
  padding: 3vw;
  justify-content: center;
  border: 2px solid #374958;
}

.todo-detail-container {
  grid-column: 1/5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  border: 2px solid white;
  padding: 10px;
  margin-top: 10px;
  background-color: #ececec;
}

.footer-class {
  grid-row: 3/4;
  grid-column: 1/3;
  background-color: rgb(133, 127, 127);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n\nbody {\n  background-color: #ececec;\n  box-sizing: border-box;\n}\n#container {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: repeat(3, auto);\n}\n\nheader {\n  grid-row: 1/2;\n  grid-column: 1/3;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  border-bottom: 2px solid #2abd67;\n  background-color: #f2f3f5;\n  padding: 20px;\n  height: 15vh;\n}\n\n#main-content {\n  margin: 1rem;\n  padding: 1rem;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #fefcfe;\n  padding: 20px;\n}\n\n/* Media query for smaller screens */\n@media (max-width: 1200px) {\n  #container {\n    grid-template-columns: 1fr; /* Set to one column on smaller screens */\n    /* grid-template-rows: repeat(4, auto); */\n  }\n\n  header {\n    grid-row: 1/2;\n    grid-column: 1/2;\n  }\n\n  .footer-class {\n    grid-row: 4/5;\n    grid-column: 1/2;\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100dvw;\n    height: 10vh;\n  }\n\n  nav {\n    grid-row: 2/3;\n    grid-column: 1/2;\n  }\n\n  #main-content {\n    grid-row: 3/4;\n    grid-column: 1/2;\n    margin-bottom: 5em;\n  }\n}\n\n#logo-container {\n  list-style: none;\n  transition: transform 0.3s ease-in-out;\n  margin: auto 0;\n}\n\n#logo-container img {\n  width: clamp(1.5rem, 2.5vw, 3rem);\n  /* width: 2.5vw; */\n}\n\n#logo-container:hover,\n#completed-tasks:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n.completed-tasks-class {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5vw;\n  margin: auto 0;\n  border-radius: 0.7vw;\n  border: 3px solid black;\n  font-size: clamp(0.4rem, 1vw, 1.5rem);\n  font-family: Arial, Helvetica, sans-serif;\n  transition: transform 0.3s ease-in-out;\n}\n\n.app-title-class {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: auto 0;\n  font-size: 2rem;\n  font-size: clamp(1.2rem, 2.5vw, 2rem);\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  color: #374958;\n  gap: 0.5vw;\n}\n\n#app-title img {\n  width: clamp(1.2rem, 2vw, 2rem);\n}\n\n#app-title p span {\n  color: #2abd67;\n}\n\n#home-heading,\n#projects-heading {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #374958;\n  border-bottom: 2px solid #374958;\n  padding: 5px;\n  font-size: 1.2rem;\n}\n\n#inbox,\n#today,\n#important,\n#this-week,\n#add-project {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n  gap: 5px;\n  margin: 15px 10px;\n  padding: 8px 15px;\n}\n\n#inbox:hover,\n#today:hover,\n#important:hover,\n#this-week:hover,\n#add-project:hover,\n.project-container:hover {\n  cursor: pointer;\n  background-color: #2abd6770;\n  border-radius: 2px;\n}\n\n.nav-bar-hide {\n  display: none;\n}\n\n#container.container-only {\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n}\n\n#main-content.main-without-nav-bar {\n  min-height: 70dvh;\n}\n\n#footer-container.without-nav-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n  max-height: 10vh;\n  width: 100dvw;\n}\n\n#project-name-input {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px auto;\n  align-items: center;\n  padding: 0 5px;\n  background-color: #f2f3f5;\n}\n\n#project-name-id {\n  border-style: none;\n  margin: 5px;\n  padding: 5px;\n  border-radius: 2px;\n  border: 2px solid #374958;\n}\n\n#submit-project-name,\n#cancel-project-name {\n  border-style: none;\n  padding: 5px;\n  margin: 5px;\n  width: 30%;\n  font-size: 1rem;\n  border-radius: 2px;\n  color: white;\n  background-color: #2abd67;\n}\n\n#cancel-project-name {\n  background-color: rgb(190, 4, 4);\n}\n\n.project-container {\n  display: flex;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  gap: 20px;\n  margin: 5px 10px;\n  padding: 8px 15px;\n  justify-content: space-between;\n}\n\n#todos-in-inbox {\n  overflow-y: scroll;\n  max-height: 60vh;\n}\n\n#active-container {\n  background-color: #2abd67;\n  height: 5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 2rem;\n  color: white;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  margin-bottom: 20px;\n}\n\n#add-todo-button {\n  background-color: white;\n  padding: 10px 25px;\n  border-radius: 2px;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.todo-form-container {\n  display: none;\n}\n\n.todo-form-show {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(10, 10, 10, 0.7);\n  width: 100vw;\n  height: 100vh;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n}\n\nform {\n  overflow: hidden;\n  background-color: #f2f3f5;\n  margin: auto auto;\n  padding: 2dvw;\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.5rem;\n  width: 80vw;\n}\n\nform input,\nform textarea,\nform select {\n  margin: 0.5rem;\n  padding: 0.8rem;\n}\n\n.todo-container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 5fr 75fr 5fr 5fr;\n  padding: 0.8rem;\n  margin: 20px;\n  border: 2px solid #374958;\n  gap: 0.5vw;\n}\n\n.todo-container input,\n.todo-container p,\n.todo-container img {\n  margin: 0 auto;\n}\n\n.todo-container.active {\n  display: grid;\n  grid-template-columns: 5fr 75fr 5fr 5fr;\n  grid-template-rows: 20px 1fr;\n  padding: 3vw;\n  justify-content: center;\n  border: 2px solid #374958;\n}\n\n.todo-detail-container {\n  grid-column: 1/5;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 10px;\n  border: 2px solid white;\n  padding: 10px;\n  margin-top: 10px;\n  background-color: #ececec;\n}\n\n.footer-class {\n  grid-row: 3/4;\n  grid-column: 1/3;\n  background-color: rgb(133, 127, 127);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";
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

/***/ "./src/js/responsive.js":
/*!******************************!*\
  !*** ./src/js/responsive.js ***!
  \******************************/
/***/ (() => {

const hideDisplayNaBarElement = document.getElementById("logo-container");

hideDisplayNaBarElement.addEventListener("click", () => {
  const navBarElement = document.getElementById("nav-bar");
  navBarElement.classList.toggle("nav-bar-hide");

  const allElementContainer = document.getElementById("container");
  allElementContainer.classList.toggle("container-only");

  const footerContainer = document.getElementById("footer-container");
  footerContainer.classList.toggle("without-nav-bar");

  const mainContentElement = document.getElementById("main-content");
  mainContentElement.classList.toggle("main-without-nav-bar");
});


/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "assets/delete.png";

/***/ }),

/***/ "./src/assets/refresh.png":
/*!********************************!*\
  !*** ./src/assets/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.js */ "./src/js/validation.js");
/* harmony import */ var _defaultTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultTodos.js */ "./src/js/defaultTodos.js");
/* harmony import */ var _responsive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsive.js */ "./src/js/responsive.js");
/* harmony import */ var _responsive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_responsive_js__WEBPACK_IMPORTED_MODULE_4__);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sS0FBSyx3QkFBd0IsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFV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by1saXN0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2RlZmF1bHRUb2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9yZXNwb25zaXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyYWJkNjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTV2aDtcbn1cblxuI21haW4tY29udGVudCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNmZTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogTWVkaWEgcXVlcnkgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogU2V0IHRvIG9uZSBjb2x1bW4gb24gc21hbGxlciBzY3JlZW5zICovXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7ICovXG4gIH1cblxuICBoZWFkZXIge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgfVxuXG4gIC5mb290ZXItY2xhc3Mge1xuICAgIGdyaWQtcm93OiA0LzU7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwZHZ3O1xuICAgIGhlaWdodDogMTB2aDtcbiAgfVxuXG4gIG5hdiB7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICB9XG5cbiAgI21haW4tY29udGVudCB7XG4gICAgZ3JpZC1yb3c6IDMvNDtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgfVxufVxuXG4jbG9nby1jb250YWluZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbiNsb2dvLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogY2xhbXAoMS41cmVtLCAyLjV2dywgM3JlbSk7XG4gIC8qIHdpZHRoOiAyLjV2dzsgKi9cbn1cblxuI2xvZ28tY29udGFpbmVyOmhvdmVyLFxuI2NvbXBsZXRlZC10YXNrczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmNvbXBsZXRlZC10YXNrcy1jbGFzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjV2dztcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuN3Z3O1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiBjbGFtcCgwLjRyZW0sIDF2dywgMS41cmVtKTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYXBwLXRpdGxlLWNsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMnJlbSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzM3NDk1ODtcbiAgZ2FwOiAwLjV2dztcbn1cblxuI2FwcC10aXRsZSBpbWcge1xuICB3aWR0aDogY2xhbXAoMS4ycmVtLCAydncsIDJyZW0pO1xufVxuXG4jYXBwLXRpdGxlIHAgc3BhbiB7XG4gIGNvbG9yOiAjMmFiZDY3O1xufVxuXG4jaG9tZS1oZWFkaW5nLFxuI3Byb2plY3RzLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzNzQ5NTg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzc0OTU4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jaW5ib3gsXG4jdG9kYXksXG4jaW1wb3J0YW50LFxuI3RoaXMtd2VlayxcbiNhZGQtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogMTVweCAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuI2luYm94OmhvdmVyLFxuI3RvZGF5OmhvdmVyLFxuI2ltcG9ydGFudDpob3ZlcixcbiN0aGlzLXdlZWs6aG92ZXIsXG4jYWRkLXByb2plY3Q6aG92ZXIsXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc3MDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubmF2LWJhci1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbnRhaW5lci5jb250YWluZXItb25seSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI21haW4tY29udGVudC5tYWluLXdpdGhvdXQtbmF2LWJhciB7XG4gIG1pbi1oZWlnaHQ6IDcwZHZoO1xufVxuXG4jZm9vdGVyLWNvbnRhaW5lci53aXRob3V0LW5hdi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMHZoO1xuICBtYXgtaGVpZ2h0OiAxMHZoO1xuICB3aWR0aDogMTAwZHZ3O1xufVxuXG4jcHJvamVjdC1uYW1lLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xufVxuXG4jcHJvamVjdC1uYW1lLWlkIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XG59XG5cbiNzdWJtaXQtcHJvamVjdC1uYW1lLFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XG59XG5cbiNjYW5jZWwtcHJvamVjdC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgNCwgNCk7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiN0b2Rvcy1pbi1pbmJveCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogNjB2aDtcbn1cblxuI2FjdGl2ZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xuICBoZWlnaHQ6IDVyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jYWRkLXRvZG8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4udG9kby1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWZvcm0tc2hvdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNyk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTtcbn1cblxuZm9ybSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBwYWRkaW5nOiAyZHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiA4MHZ3O1xufVxuXG5mb3JtIGlucHV0LFxuZm9ybSB0ZXh0YXJlYSxcbmZvcm0gc2VsZWN0IHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDc1ZnIgNWZyIDVmcjtcbiAgcGFkZGluZzogMC44cmVtO1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzQ5NTg7XG4gIGdhcDogMC41dnc7XG59XG5cbi50b2RvLWNvbnRhaW5lciBpbnB1dCxcbi50b2RvLWNvbnRhaW5lciBwLFxuLnRvZG8tY29udGFpbmVyIGltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udG9kby1jb250YWluZXIuYWN0aXZlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgNzVmciA1ZnIgNWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xuICBwYWRkaW5nOiAzdnc7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xufVxuXG4udG9kby1kZXRhaWwtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG59XG5cbi5mb290ZXItY2xhc3Mge1xuICBncmlkLXJvdzogMy80O1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMjcsIDEyNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwdmg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFB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QUNiLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJhYmQ2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyeSBmb3Igc21hbGxlciBzY3JlZW5zICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBTZXQgdG8gb25lIGNvbHVtbiBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7ICovXFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1jbGFzcyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIH1cXG5cXG4gICNtYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW07XFxuICB9XFxufVxcblxcbiNsb2dvLWNvbnRhaW5lciB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW46IGF1dG8gMDtcXG59XFxuXFxuI2xvZ28tY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogY2xhbXAoMS41cmVtLCAyLjV2dywgM3JlbSk7XFxuICAvKiB3aWR0aDogMi41dnc7ICovXFxufVxcblxcbiNsb2dvLWNvbnRhaW5lcjpob3ZlcixcXG4jY29tcGxldGVkLXRhc2tzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFza3MtY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXZ3O1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjd2dztcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjRyZW0sIDF2dywgMS41cmVtKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hcHAtdGl0bGUtY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAycmVtKTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjMzc0OTU4O1xcbiAgZ2FwOiAwLjV2dztcXG59XFxuXFxuI2FwcC10aXRsZSBpbWcge1xcbiAgd2lkdGg6IGNsYW1wKDEuMnJlbSwgMnZ3LCAycmVtKTtcXG59XFxuXFxuI2FwcC10aXRsZSBwIHNwYW4ge1xcbiAgY29sb3I6ICMyYWJkNjc7XFxufVxcblxcbiNob21lLWhlYWRpbmcsXFxuI3Byb2plY3RzLWhlYWRpbmcge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzM3NDk1ODtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzc0OTU4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNpbmJveCxcXG4jdG9kYXksXFxuI2ltcG9ydGFudCxcXG4jdGhpcy13ZWVrLFxcbiNhZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMTVweCAxMHB4O1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcblxcbiNpbmJveDpob3ZlcixcXG4jdG9kYXk6aG92ZXIsXFxuI2ltcG9ydGFudDpob3ZlcixcXG4jdGhpcy13ZWVrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NzcwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4ubmF2LWJhci1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250YWluZXIuY29udGFpbmVyLW9ubHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNtYWluLWNvbnRlbnQubWFpbi13aXRob3V0LW5hdi1iYXIge1xcbiAgbWluLWhlaWdodDogNzBkdmg7XFxufVxcblxcbiNmb290ZXItY29udGFpbmVyLndpdGhvdXQtbmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWF4LWhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDBkdnc7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lLWlkIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcXG59XFxuXFxuI3N1Ym1pdC1wcm9qZWN0LW5hbWUsXFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgNCwgNCk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHggMTBweDtcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdG9kb3MtaW4taW5ib3gge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWF4LWhlaWdodDogNjB2aDtcXG59XFxuXFxuI2FjdGl2ZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXG4gIGhlaWdodDogNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FkZC10b2RvLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWZvcm0tc2hvdyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC43KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y1O1xcbiAgbWFyZ2luOiBhdXRvIGF1dG87XFxuICBwYWRkaW5nOiAyZHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHRleHRhcmVhLFxcbmZvcm0gc2VsZWN0IHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgNzVmciA1ZnIgNWZyO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NDk1ODtcXG4gIGdhcDogMC41dnc7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciBpbnB1dCxcXG4udG9kby1jb250YWluZXIgcCxcXG4udG9kby1jb250YWluZXIgaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciA3NWZyIDVmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xcbiAgcGFkZGluZzogM3Z3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzc0OTU4O1xcbn1cXG5cXG4udG9kby1kZXRhaWwtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxufVxcblxcbi5mb290ZXItY2xhc3Mge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMjcsIDEyNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0cyB0aGUgb3RoZXIgbW9kdWxlcyBvZiB0aGUgcHJvamVjdFxuaW1wb3J0IHsgVG9kb0xpc3QsIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbi8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgVG9kb0xpc3QgY2xhc3MgaW4gdGhlIHRvZG8uanMgbW9kdWxlXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuXG4vLyBEZWZpbmUgYW4gYXJyYXkgb2YgZGVmYXVsdCB0b2Rvc1xuY29uc3QgZGVmYXVsdFRvZG9zID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVmYXVsdCBUb2RvIDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBmaXJzdCBkZWZhdWx0IHRvZG8uXCIsXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoKSxcbiAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgcHJvamVjdDogXCJJbmJveFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRGVmYXVsdCBUb2RvIDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBzZWNvbmQgZGVmYXVsdCB0b2RvLlwiLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgcHJvamVjdDogXCJJbmJveFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJEZWZhdWx0IFRvZG8gM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHRoaXJkIGRlZmF1bHQgdG9kby5cIixcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgIHByb2plY3Q6IFwiTmV3IFByb2plY3RcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRlZmF1bHQgVG9kbyA0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgZm91dGggZGVmYXVsdCB0b2RvLlwiLFxuICAgIGR1ZURhdGU6IFwiMjAyNC0wMS0wMVwiLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgIHByb2plY3Q6IFwiUGVyc29uYWxcIixcbiAgfSxcbiAgLy8gQWRkIG1vcmUgZGVmYXVsdCB0b2RvcyBhcyBuZWVkZWRcbl07XG5cbi8vIERlZmluZSBhbiBhcnJheSBvZiBkZWZhdWx0IHByb2plY3RzXG5jb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbXG4gIFwiTmV3IFByb2plY3RcIixcbiAgXCJXb3JrXCIsXG4gIFwiUGVyc29uYWxcIiAvKiBBZGQgbW9yZSBkZWZhdWx0IHByb2plY3RzICovLFxuXTtcblxuLy8gRnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBkZWZhdWx0IHRvZG9zIGFuZCBwcm9qZWN0c1xuY29uc3QgaW5pdGlhbGl6ZURlZmF1bHREYXRhID0gKCkgPT4ge1xuICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYWxyZWFkeSB0b2RvcyBhbmQgcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBzdG9yZWRUb2Rvc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIik7XG4gIGNvbnN0IHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb2Rvc1N0cmluZykgfHwgW107XG5cbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHNTdHJpbmcpIHx8IFtdO1xuXG4gIC8vIElmIG5vIHRvZG9zIGFyZSBzdG9yZWQsIGNyZWF0ZSBkZWZhdWx0IHRvZG9zXG4gIGlmIChzdG9yZWRUb2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICBkZWZhdWx0VG9kb3MuZm9yRWFjaCgoZGVmYXVsdFRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCB9ID0gZGVmYXVsdFRvZG87XG4gICAgICB0b2RvTGlzdC5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgZGVmYXVsdCB0b2Rvc1xuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICB9XG5cbiAgLy8gSWYgbm8gcHJvamVjdHMgYXJlIHN0b3JlZCwgY3JlYXRlIGRlZmF1bHQgcHJvamVjdHNcbiAgaWYgKHN0b3JlZFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0b3JlZFByb2plY3RzLnB1c2goLi4uZGVmYXVsdFByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3RzKSk7XG4gIH1cbn07XG5cbi8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgZGVmYXVsdCB0b2RvcyBhbmQgcHJvamVjdHNcbmluaXRpYWxpemVEZWZhdWx0RGF0YSgpO1xuIiwiLy8gSW1wb3J0cyB0aGUgb3RoZXIgbW9kdWxlcyBvZiB0aGUgcHJvamVjdFxuaW1wb3J0IHsgVG9kb0xpc3QsIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UsIFRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiLi92YWxpZGF0aW9uLmpzXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvcmVmcmVzaC5wbmdcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9kZWxldGUucG5nXCI7XG5cbi8vIENyZWF0ZSBhbiBpbiBvZiB0aGUgVG9kb0xpc3QgY2xhc3MgaW4gdGhlIHRvZG8uanMgbW9kdWxlXG5jb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuXG4vLyBBIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIGEgdG9kb1xuY29uc3QgdG9kb1Byb3BlcnR5ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuXG4gIC8vIFJldHVybnMgdGhlIHZhbHVlIG9mIHRpdGxlIGFuZCBhbGwgdGhlIHByb3BlcnRpZXNcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xufTtcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJJbmJveFwiO1xuXG4vLyBDcmVhdGVzIGEgdG9kbyBieSBjYWxsaW5nIHRoZSB0b2RvTGlzdC5jcmVhdGVUb2RvIG1ldGhvZCB0byBjcmVhdGUgdG9kb3NcbmNvbnN0IGNyZWF0ZVRvZG8gPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb1Byb3BlcnRpZXMgPSB0b2RvUHJvcGVydHkoKTtcblxuICBpZiAoY3VycmVudFByb2plY3QgPT09IFwiSW5ib3hcIikge1xuICAgIHRvZG9MaXN0LmNyZWF0ZVRvZG8oXG4gICAgICB0b2RvUHJvcGVydGllcy50aXRsZS52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMuZHVlRGF0ZS52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgY3VycmVudFByb2plY3RcbiAgICApO1xuXG4gICAgdG9kb3NGdW5jdGlvbigpO1xuXG4gICAgLy8gUnVucyB0aGUgdG9kb3NGdW5jdGlvbiBldmVyeXRpbWUgYSBuZXcgdG9kbyBpcyBjcmVhdGVkXG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIHByb2plY3Qtc3BlY2lmaWMgdG9kb3MgaWYgbmVlZGVkXG4gICAgdG9kb0xpc3QuY3JlYXRlVG9kbyhcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzLnRpdGxlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllcy5kdWVEYXRlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXMucHJpb3JpdHkudmFsdWUsXG4gICAgICBjdXJyZW50UHJvamVjdFxuICAgICk7XG5cbiAgICAvL1J1bnMgcHJvamVjdFRvZG9zIGZvciBhIHBhcnRpY3VsYXIgcHJvamVjdCBhcGFydCBmcm9tIGluYm94XG4gICAgcHJvamVjdFRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlVG9kb0Z1bmN0aW9uID0gKHRvZG8sIGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRvZG9Qcm9wZXJ0aWVzVXBkYXRlID0gdG9kb1Byb3BlcnR5KCk7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBcImluYm94XCIpIHtcbiAgICB0b2RvLnVwZGF0ZVByb3BlcnRpZXMoXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS50aXRsZS52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUuZHVlRGF0ZS52YWx1ZSxcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLnByaW9yaXR5LnZhbHVlLFxuICAgICAgdG9kby5wcm9qZWN0XG4gICAgKTtcblxuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kbyk7XG4gICAgdG9kb3NGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHRvZG8udXBkYXRlUHJvcGVydGllcyhcbiAgICAgIHRvZG9Qcm9wZXJ0aWVzVXBkYXRlLnRpdGxlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0b2RvUHJvcGVydGllc1VwZGF0ZS5kdWVEYXRlLnZhbHVlLFxuICAgICAgdG9kb1Byb3BlcnRpZXNVcGRhdGUucHJpb3JpdHkudmFsdWUsXG4gICAgICB0b2RvLnByb2plY3RcbiAgICApO1xuXG4gICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0b2RvKTtcbiAgICBwcm9qZWN0VG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59O1xuXG5sZXQgaXNGb3JtVmlzaWJsZSA9IGZhbHNlO1xuXG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgdGhlXG5leHBvcnQgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gIGlzRm9ybVZpc2libGUgPSAhaXNGb3JtVmlzaWJsZTtcblxuICBpZiAoaXNGb3JtVmlzaWJsZSkge1xuICAgIHRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1mb3JtLXNob3dcIik7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidG9kby1mb3JtLXNob3dcIik7XG4gICAgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xuICB9XG59O1xuXG4vL3Nob3cgb25seSB0aGUgYWRkIHRhc2stYnV0dG9uIHdoZW4gdGhlIGFkZCB0YXNrIGJ1dHRvblxuXG5jb25zdCBzaG93QWRkVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgY29uc3QgdXBkYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlLXRhc2tcIik7XG4gIHVwZGF0ZVRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuLy9zaG93IHRoZSBvbmx5IHRoZSB3aGVuIHRoZSB1cGRhdGUgYnV0dG9uIGlzIGNsaWNrZWRcblxuY29uc3Qgc2hvd1VwZGF0ZVRhc2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbiAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgY29uc3QgdXBkYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlLXRhc2tcIik7XG4gIHVwZGF0ZVRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbi8vQnJpbmdzIHVwIHRoZSBmb3JtIHRvIGFkZCBhICB0b2RvXG5jb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1idXR0b25cIik7XG5hZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgc2hvd0FkZFRhc2tCdXR0b24oKTtcbiAgc2hvd0Zvcm0oZXZlbnQpO1xufSk7XG5cbi8vIFN0b3BzIHRoZSBwcm9wYWdhdGlvbiBvZiB0aGUgc2hvd2Zvcm0gZnVuY3Rpb24gd2l0aGluIHRoZSBmb3JtLCBzbyBjbGlja2luZyBvbiB0aGUgZm9ybSB3aWxsIG5vdCBkaXNzYXBwZWFyIGl0XG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktZm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgaWYgKGlzRm9ybVZpc2libGUpIHtcbiAgICB0b2RvRGV0YWlsc0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tZm9ybS1zaG93XCIpO1xuICAgIHRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBpc0Zvcm1WaXNpYmxlID0gZmFsc2U7XG4gIH1cbn07XG4vLyBUb2dnbGVzIHRoZSBmb3JtIHZpc2liaWxpdHkgd2hlbiB5b3UgY2xpY2sgb24gdGhpcyBjb250YWluZXIsIHdoaWNoIGNvdmVycyB0aGUgd2hvbGUgc2NyZWVuLCBleGNlcHQgb25seSBvbiBwYXJ0cyBvZiB0aGUgZm9ybVxuY29uc3QgdG9kb0RldGFpbHNGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1mb3JtLWNvbnRhaW5lclwiKTtcbnRvZG9EZXRhaWxzRm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0b2dnbGVGb3JtKCk7XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlVG9kb1RpdGxlU3R5bGUodG9kbywgdG9kb1RpdGxlKSB7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgIHRvZG9UaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gIH0gZWxzZSB7XG4gICAgdG9kb1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIHRvZG8gZGV0YWlsc1xuY29uc3QgdG9nZ2xlVG9kb0RldGFpbHMgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgLy8gRmluZCB0aGUgZXhpc3RpbmcgZGV0YWlsIGNvbnRhaW5lciBmb3IgdGhlIGNsaWNrZWQgdG9kb1xuICBjb25zdCBleGlzdGluZ0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGB0b2RvLWRldGFpbC0ke2luZGV4fWBcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdEZXRhaWxDb250YWluZXIpIHtcbiAgICAvLyBJZiB0aGUgY29udGFpbmVyIGV4aXN0cywgcmVtb3ZlIGl0IHRvIGhpZGUgdGhlIGRldGFpbHNcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgZXhpc3RpbmdEZXRhaWxDb250YWluZXIucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIGNvbnRhaW5lciBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgYW5kIGFwcGVuZCBpdCBpbnNpZGUgdGhlIHRvZG8gY29udGFpbmVyXG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgY29uc3QgdG9kb0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0RldGFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWwtY29udGFpbmVyXCIpO1xuICAgIHRvZG9EZXRhaWxDb250YWluZXIuaWQgPSBgdG9kby1kZXRhaWwtJHtpbmRleH1gOyAvLyBVc2UgYW4gaWQgdG8gaWRlbnRpZnkgdGhlIGNvbnRhaW5lclxuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb1RpdGxlLmFwcGVuZChgVGl0bGU6ICR7dG9kb0xpc3QudG9kb3NbaW5kZXhdLnRpdGxlfWApO1xuXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmFwcGVuZChgRGVzY3JpcHRpb246ICR7dG9kb0xpc3QudG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9ufWApO1xuXG4gICAgY29uc3QgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRHVlZGF0ZS5hcHBlbmQoYER1ZWRhdGU6ICR7dG9kb0xpc3QudG9kb3NbaW5kZXhdLmR1ZURhdGV9YCk7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvUHJpb3JpdHkuYXBwZW5kKGBQcmlvcml0eTogJHt0b2RvTGlzdC50b2Rvc1tpbmRleF0ucHJpb3JpdHl9YCk7XG5cbiAgICB0b2RvRGV0YWlsQ29udGFpbmVyLmFwcGVuZChcbiAgICAgIHRvZG9UaXRsZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWVkYXRlLFxuICAgICAgdG9kb1ByaW9yaXR5XG4gICAgKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgZGV0YWlscyBjb250YWluZXIgaW5zaWRlIHRoZSB0b2RvIGNvbnRhaW5lclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9EZXRhaWxDb250YWluZXIpO1xuICB9XG59O1xuXG5sZXQgc2VsZWN0ZWRUb2RvSW5kZXg7XG5cbmNvbnN0IHRvZG9FbGVtZW50cyA9ICh0b2RvLCBpKSA9PiB7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBDb250YWluZXIgZm9yIGVhY2ggdG9kb1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTsgLy8gIGNsYXNzIGZvciBzdHlsaW5nIGlmIG5lZWRlZFxuICB0b2RvQ29udGFpbmVyLmRhdGFzZXQuaW5kZXggPSBpO1xuXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvVGl0bGUuYXBwZW5kKHRvZG8udGl0bGUpO1xuICB0b2RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIHRvZ2dsZVRvZG9EZXRhaWxzKGV2ZW50LCBpKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kb0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b2RvQ29tcGxldGUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgdG9kb0NvbXBsZXRlLnN0eWxlLndpZHRoID0gXCIxNXB4XCI7XG4gIHRvZG9Db21wbGV0ZS5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgdXBkYXRlVG9kb1RpdGxlU3R5bGUodG9kbywgdG9kb1RpdGxlKTtcblxuICB0b2RvQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgdG9kby50b2dnbGVDb21wbGV0ZWQoKTsgLy8gVG9nZ2xlIHRoZSBjb21wbGV0aW9uIHN0YXRlXG4gICAgdXBkYXRlVG9kb1RpdGxlU3R5bGUodG9kbywgdG9kb1RpdGxlKTtcbiAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRvZG9MaXN0LnRvZG9zKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZVRvZG8uc3JjID0gXCIuL2Fzc2V0cy9kZWxldGUucG5nXCI7XG4gIGRlbGV0ZVRvZG8uc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcbiAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG9MaXN0LnRvZG9zLnNwbGljZShpLCAxKTtcbiAgICBzZXRUb2Rvc0luTG9jYWxTdG9yYWdlKHRvZG9MaXN0LnRvZG9zKTtcbiAgICB0b2RvQ29udGFpbmVyLnJlbW92ZSgpOyAvLyBSZW1vdmUgdGhlIHRvZG8gY29udGFpbmVyIGZyb20gdGhlIERPTVxuICAgIHRvZG9zRnVuY3Rpb24oKTtcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHVwZGF0ZVRvZG8uc3JjID0gXCIuL2Fzc2V0cy9yZWZyZXNoLnBuZ1wiO1xuICB1cGRhdGVUb2RvLnN0eWxlLndpZHRoID0gXCIyNXB4XCI7XG4gIHVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93VXBkYXRlVGFza0J1dHRvbigpO1xuICAgIHNob3dGb3JtKCk7XG5cbiAgICBzZWxlY3RlZFRvZG9JbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICB9KTtcblxuICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvQ29tcGxldGUsIHRvZG9UaXRsZSwgZGVsZXRlVG9kbywgdXBkYXRlVG9kbyk7XG5cbiAgcmV0dXJuIHRvZG9Db250YWluZXI7XG59O1xuXG5jb25zdCB0b2Rvc0Z1bmN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBhY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHRvZG9zSW5JbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4taW5ib3hcIik7XG4gIGNvbnN0IHRvZG9JblRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1pbi10b2RheVwiKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiBhY3RpdmVDb250YWluZXJcbiAgYWN0aXZlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9zSW5JbmJveC5pbm5lckhUTUwgPSBcIlwiO1xuICB0b2RvSW5Ub2RheS5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5ib3hIZWFkaW5nLmlkID0gXCJpbmJveC10b2Rvcy1oZWFkaW5nXCI7XG4gIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgYWN0aXZlQ29udGFpbmVyLmFwcGVuZChpbmJveEhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3NbaV07XG5cbiAgICBpZiAodG9kby5wcm9qZWN0ID09PSBcIkluYm94XCIpIHtcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50c0Zyb21GdW5jID0gdG9kb0VsZW1lbnRzKHRvZG8sIGkpO1xuICAgICAgdG9kb3NJbkluYm94LmFwcGVuZCh0b2RvRWxlbWVudHNGcm9tRnVuYyk7XG4gICAgfVxuICB9XG4gIHRvZG9zSW5JbmJveC5hcHBlbmQoYWRkVG9kb0J1dHRvbik7XG59O1xuXG4vLyBzdWJtaXQgYnV0dG9uIHdoZW4gdGhlIGFkZCB0YXNrIGJ1dHRvbiBpcyBjbGlja2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICghdmFsaWRhdGVGb3JtKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY3JlYXRlVG9kbyhjdXJyZW50UHJvamVjdCk7XG4gIGZvcm0ucmVzZXQoKTtcbiAgdG9nZ2xlRm9ybSgpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmICghdmFsaWRhdGVGb3JtKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVXNlIHRoZSBzdG9yZWQgaW5kZXggdG8gY2FsbCB1cGRhdGVUb2RvRnVuY3Rpb25cbiAgaWYgKHNlbGVjdGVkVG9kb0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3Nbc2VsZWN0ZWRUb2RvSW5kZXhdO1xuICAgIHVwZGF0ZVRvZG9GdW5jdGlvbih0b2RvLCBjdXJyZW50UHJvamVjdCk7XG4gIH1cbiAgdG9nZ2xlRm9ybSgpO1xufSk7XG5cbmNvbnN0IHRvZGF5VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9kb0luVG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLXRvZGF5XCIpO1xuICBjb25zdCB0b2Rvc0luSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLWluYm94XCIpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCJcbiAgKTtcblxuICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIGFjdGl2ZUNvbnRhaW5lclxuICBhY3RpdmVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb0luVG9kYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb3NJbkluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHRvZGF5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RheUhlYWRpbmcuaWQgPSBcInRvZGF5LXRvZG9zLWhlYWRpbmdcIjtcbiAgdG9kYXlIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICBhY3RpdmVDb250YWluZXIuYXBwZW5kKHRvZGF5SGVhZGluZyk7XG5cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheUZvcm1hdHRlZCA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QudG9kb3NbaV07XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gICAgaWYgKHRvZG9EdWVEYXRlID09PSB0b2RheUZvcm1hdHRlZCAmJiB0b2RvTGlzdC50b2Rvcy5pbmNsdWRlcyh0b2RvKSkge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzRnJvbUZ1bmMgPSB0b2RvRWxlbWVudHModG9kbywgaSk7XG4gICAgICB0b2RvSW5Ub2RheS5hcHBlbmQodG9kb0VsZW1lbnRzRnJvbUZ1bmMpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gQ2FsbHMgdGhlIHRvZGF5VG9kb3MgZnVuY3Rpb24gd2hlbiB0aGUgdG9kYXkgdGFiIGlzIGFjdGl2ZVxuY29uc3QgdG9kYXlUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS1jb250YWluZXJcIik7XG50b2RheVRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdG9kYXlUb2RvcygpO1xufSk7XG5cbi8vIENhbGxzIHRoZSB0b2Rvc0Z1bmN0aW9uIHdoZW4gdGhlIGluYm94IHRhYiBpcyBhY3RpdmVcbmNvbnN0IGluYm94VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3gtY29udGFpbmVyXCIpO1xuaW5ib3hUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gXCJJbmJveFwiO1xuICB0b2Rvc0Z1bmN0aW9uKCk7XG59KTtcblxuLy9Qcm9qZWN0cyBzZWN0aW9uIG9mIHRoZSBhcHAgY29kZSBzdGFydHMgaGVyZVxuXG4vLyBEaXNwbGF5cyB0aGUgaW5wdXQgZmllbGRzIGZvciBwcm9qZWN0IG5hbWVcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChgRW50ZXIgdGhlIHByb2plY3QgbmFtZTpgKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtaWRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBzdWJtaXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGNhbmNlbFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY29uc3QgZGlzcGxheVByb2plY3ROYW1lID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pZFwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXG4gIGlmIChwcm9qZWN0TmFtZSkge1xuICAgIC8vIFJldHJpZXZlIGV4aXN0aW5nIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0c1N0cmluZykgfHwgW107XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHN0b3JlZFByb2plY3RzLnNvbWUoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdCA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgaWYgKCFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAvLyBBZGQgdGhlIG5ldyBwcm9qZWN0IHRvIHRoZSBzdG9yZWQgcHJvamVjdHNcbiAgICAgIHN0b3JlZFByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHByb2plY3RzIGluIGxvY2FsU3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuXG4gICAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50IGluIHByb2plY3RzQ29udGFpbmVyXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50VmFsdWU7XG5cbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgIHByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBcIi4vYXNzZXRzL2RlbGV0ZS5wbmdcIjtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuXG4gICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIG5ld1Byb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBzdG9yZWQgcHJvamVjdHNcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gc3RvcmVkUHJvamVjdHNbaV07XG4gICAgICAgICAgICBzdG9yZWRQcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRvZG9zIHJlbGF0ZWQgdG8gdGhlIGRlbGV0ZWQgcHJvamVjdFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcbiAgICAgICAgICAgIGlmICh0b2RvLnByb2plY3QgPT09IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodG9kb0xpc3QudG9kb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0b2Rvc0Z1bmN0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXNldCB0aGUgaW5wdXQgYW5kIHR1cm4gdGhlIGRpc3BsYXkgb2YgaXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uIG9mZiBhZnRlciBhZGRpbmdcbiAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgcHJvamVjdE5hbWVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBzdWJtaXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjYW5jZWxQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gZGlzcGxheSBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb24gcGFnZSBsb2FkXG5jb25zdCBkaXNwbGF5U3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgLy8gUmV0cmlldmUgZXhpc3RpbmcgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHNTdHJpbmcpIHx8IFtdO1xuXG4gIHN0b3JlZFByb2plY3RzLmZvckVhY2goKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5ld1Byb2plY3ROYW1lLnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlO1xuXG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSBjdXJyZW50VmFsdWU7XG4gICAgICBwcm9qZWN0VG9kb3MoY3VycmVudFZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVByb2plY3Quc3JjID0gXCIuL2Fzc2V0cy9kZWxldGUucG5nXCI7XG4gICAgZGVsZXRlUHJvamVjdC5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuXG4gICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBzdG9yZWQgcHJvamVjdHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RvcmVkUHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3RzKSk7XG5cbiAgICAgIC8vIFJlbW92ZSB0b2RvcyByZWxhdGVkIHRvIHRoZSBkZWxldGVkIHByb2plY3RcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LnRvZG9zW2ldO1xuICAgICAgICBpZiAodG9kby5wcm9qZWN0ID09PSBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICB0b2RvTGlzdC50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgc2V0VG9kb3NJbkxvY2FsU3RvcmFnZSh0b2RvTGlzdC50b2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdG9kb3NGdW5jdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmQobmV3UHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3QpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBkaXNwbGF5IHN0b3JlZCBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbmRpc3BsYXlTdG9yZWRQcm9qZWN0cygpO1xuXG4vL0V2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgcHJvamVjdCBuYW1lIGJ1dHRvbiB0aGF0IGNhbGxzIHRoZSBkaXNwbGF5IHByb2plY3QgbmFtZSBmdW5jdGlvblxuY29uc3Qgc3VibWl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0LW5hbWVcIik7XG5zdWJtaXRQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5UHJvamVjdE5hbWUoKTtcbn0pO1xuXG5jb25zdCBjYW5jZWxQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLXByb2plY3QtbmFtZVwiKTtcbmNhbmNlbFByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pZFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3ROYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzdWJtaXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNhbmNlbFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vLyBGdW5jdGlvbiB0byBhZGQgdG9kb3MgdW5kZXIgYSBwcm9qZWN0XG5jb25zdCBwcm9qZWN0VG9kb3MgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgY29uc3QgYWN0aXZlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtY29udGFpbmVyXCIpO1xuICBjb25zdCB0b2Rvc0luSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWluLWluYm94XCIpO1xuICBjb25zdCB0b2RvSW5Ub2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtaW4tdG9kYXlcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIlxuICApO1xuXG4gIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgaW4gYWN0aXZlQ29udGFpbmVyLCB0b2Rvc0luSW5ib3gsIHRvZG9JblRvZGF5LCBhbmQgdG9kb0luTmV3UHJvamVjdFxuICBhY3RpdmVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb3NJbkluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gIHRvZG9JblRvZGF5LmlubmVySFRNTCA9IFwiXCI7XG4gIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RIZWFkaW5nLmlkID0gXCJwcm9qZWN0LXRvZG9zLWhlYWRpbmdcIjtcbiAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgYWN0aXZlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SGVhZGluZyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC50b2Rvc1tpXTtcblxuICAgIGlmICh0b2RvLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHNGcm9tRnVuYyA9IHRvZG9FbGVtZW50cyh0b2RvLCBpKTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyRWxlbWVudC5hcHBlbmQodG9kb0VsZW1lbnRzRnJvbUZ1bmMpO1xuICAgIH1cbiAgfVxuICBwcm9qZWN0c0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGFkZFRvZG9CdXR0b24pO1xufTtcblxuLy8gQ2FsbGluZyB0aGUgdG9kb3MgZnVuY3Rpb24gdG8gcmVuZGVyIGV4aXN0aW5nIHRvZG9zIG9uIHBhZ2UgbG9hZFxudG9kb3NGdW5jdGlvbigpO1xuIiwiY29uc3QgaGlkZURpc3BsYXlOYUJhckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ28tY29udGFpbmVyXCIpO1xuXG5oaWRlRGlzcGxheU5hQmFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBuYXZCYXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYmFyXCIpO1xuICBuYXZCYXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtYmFyLWhpZGVcIik7XG5cbiAgY29uc3QgYWxsRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICBhbGxFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb250YWluZXItb25seVwiKTtcblxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3Rlci1jb250YWluZXJcIik7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwid2l0aG91dC1uYXYtYmFyXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpO1xuICBtYWluQ29udGVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4td2l0aG91dC1uYXYtYmFyXCIpO1xufSk7XG4iLCJleHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIG1ldGhvZCB0byB0b2dnbGUgY29tcGxldGlvbiBzdGF0ZVxuICB1cGRhdGVQcm9wZXJ0aWVzKFxuICAgIG5ld1RpdGxlLFxuICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgIG5ld0R1ZURhdGUsXG4gICAgbmV3UHJpb3JpdHksXG4gICAgbmV3UHJvamVjdFxuICApIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8vIFN0YXRpYyBtZXRob2QgdG8gY3JlYXRlIGEgVG9kbyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICBzdGF0aWMgZnJvbU9iamVjdCh0b2RvT2JqZWN0KSB7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgdG9kb09iamVjdC50aXRsZSxcbiAgICAgIHRvZG9PYmplY3QuZGVzY3JpcHRpb24sXG4gICAgICB0b2RvT2JqZWN0LmR1ZURhdGUsXG4gICAgICB0b2RvT2JqZWN0LnByaW9yaXR5LFxuICAgICAgdG9kb09iamVjdC5wcm9qZWN0XG4gICAgKTtcblxuICAgIHRvZG8uY29tcGxldGVkID0gdG9kb09iamVjdC5jb21wbGV0ZWQ7XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBzZXQgdG9kb3MgdG8gbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UgPSAodG9kb3MpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gZ2V0IHRvZG9zIGZyb20gbG9jYWwgc3RvcmFnZVxuY29uc3QgZ2V0VG9kb3NGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCB0b2RvT2JqZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkgfHwgW107XG4gIGNvbnN0IHRvZG9zID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHRvZG9zLnB1c2goVG9kby5mcm9tT2JqZWN0KHRvZG9PYmplY3RzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9zID0gZ2V0VG9kb3NGcm9tTG9jYWxTdG9yYWdlKCk7IC8vIEluaXRpYWxpemUgd2l0aCB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2U7XG4gIH1cblxuICBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIHNldFRvZG9zSW5Mb2NhbFN0b3JhZ2UodGhpcy50b2Rvcyk7IC8vIFVwZGF0ZSBsb2NhbCBzdG9yYWdlIHdpdGggdGhlIG5ldyB0b2Rvc1xuICAgIHJldHVybiB0b2RvO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuXG4gIC8vIENoZWNrIGlmIHRpdGxlIGlzIGVtcHR5XG4gIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgeW91ciB0YXNrLlwiKTtcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZGVzY3JpcHRpb24gaXMgZW1wdHlcbiAgaWYgKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciB0YXNrLlwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZHVlIGRhdGUgaXMgc2VsZWN0ZWRcbiAgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGR1ZSBkYXRlIGZvciB5b3VyIHRhc2suXCIpO1xuICAgIGRhdGVJbnB1dC5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHByaW9yaXR5IGlzIHNlbGVjdGVkXG4gIGlmIChwcmlvcml0eVNlbGVjdC52YWx1ZSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGNob29zZSBhIHByaW9yaXR5IGZvciB5b3VyIHRhc2suXCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gQWxsIHZhbGlkYXRpb25zIHBhc3NlZCwgcmV0dXJuIHRydWVcbiAgcmV0dXJuIHRydWU7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgXCIuL3ZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBcIi4vZGVmYXVsdFRvZG9zLmpzXCI7XG5pbXBvcnQgXCIuL3Jlc3BvbnNpdmUuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==