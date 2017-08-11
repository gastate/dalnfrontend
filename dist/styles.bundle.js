webpackJsonp([2,4],{

/***/ 1396:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 1397:
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,"

/***/ }),

/***/ 1398:
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,"

/***/ }),

/***/ 1399:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfBJREFUeNrElr1qAkEQx+dU1DRGgjY2YuO1YiyFSCClnSC+QHyAgA+R1sbIvUDANwiCIeAHGjhERAWJiNqkCmhxIF5mZD2O4O3tkWgGfrgu6/x37saZkSRJAhuLIXnkDrlEEmxfRb6QF+QZ+eB6ISEL0kgD0QV5Q26s/B3b9CJlBwI/KTMfXKErh1FY0WC+jgpdIJ0/EDnQYT4P/o1keELuee8zHA5DNpuFeDwOgUAA+v0+VCoV3k+qSNGcDNd2N4zFYnq329XNpqqqSGTkG1xM+dEuxwuFAqRSKeO7pmmwXC5BwPa+Pex/cWt3OhKJGOvRaAT5fB5ms5mIEPlOUEQ53ilZlqFYLEIymTT23G43pNNpyGQyIGg5ej913jMulUq6lS0WC9EMrNOjk3lXmc/n0Ov1IBqN7rOObL1ew3Q6hclkIhqRTBFpvNv4/X49FArpiqIYkbTbbR2F9WAwKBqR5rG7CmUXsdlsjL3tdgur1Wr/KWqUDJ8iBykBzIXY6/WCA/skoTGc3sYk1DqDUIuEamcQqrlYp3w9oQj5Vg+17sHutM/nM9aY8k6EHg61juydlXTLNkF1bTgc7teDwQB2u52ISJX5Pl/j+5dWbh5OlF+IKCLDiRkanZoOBJq8cUsSGCBl1rN4A2TNrsJ8CzAAOipakrsZ5c4AAAAASUVORK5CYII="

/***/ }),

/***/ 1400:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAf9JREFUeNrEljFrwlAQx19QlLpUFF3qUkE6KUI6VurSTRChUD+Ai5/CJbNLQQjo6FDsKDhIwSIEKgoFp+DgUhAchC6CIFzvPZIS2vdentS2B78hIbn/u+Pu3mmaphEfO0fukBvkFMk771+Rd2SIPCBLqRcqJOAKGSGgyBi5FvnjvQwh9wcIfOXe8SEVih0YhYiR44srdIK8HEHE5cXx+U3IPKKIi+nxz6pOR6ZE0WKxGKlUKiQQCJDhcEiWS2nBXSIzV+1J9ZSZTAZWqxVQM01T5Z8nN3V5VZFgMAjT6RS8ZlkWFItFv3/zVMiQfRQOh6FUKkEkEoFyuQw82+/3LNJoNMrg+DF805bL5ZizbrcL4/EYRDYYDKDf77OD8dJHhd5EIoVCgQmoGI2q0WhAOp3m+XqjQjuRUKvVAlWjEcXjcVFmdkKhVCr1WV0qVq1WZcWwk6YumUxCrVbzTd92u5VFw1IXxGaykTNvM9brdTKbzchkMiGdTockEglpAzebTbLZbGSf2NzypqW6WCyUUtbr9Vh/+fSRIWxY2g+GYcB6veYK0IPQtCo2e96ddSPkmhdzKBQi2WyW6LrOnmmK5vM5sW1bdTQ+I0V31um/MLld9D+9Jv7l4vuzq9y7nLR/INJWWU680NXJOkDAkq1bmsICeYHc+iyQj86EEdqHAAMAfjDuOk/29eQAAAAASUVORK5CYII="

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(638);


/***/ }),

/***/ 574:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot";

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(957);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1396)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(574)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Oswald:400,300,700|Open+Sans+Condensed:700,300,300italic|Open+Sans:400,300italic,400italic,600,600italic,700,700italic,800,800italic|PT+Sans:400,400italic,700,700italic);", ""]);
exports.i(__webpack_require__(958), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* import style.css rules */\r\n", ""]);

// exports


/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(574)();
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\r\n\r\n\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url(" + __webpack_require__(575) + ");\r\n  src: url(" + __webpack_require__(575) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(1398) + ") format('woff'), url(" + __webpack_require__(1397) + ") format('truetype'), url(" + __webpack_require__(960) + "#FontAwesome) format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n/***** General *****/\r\nhtml, body\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow-x: hidden;\r\n}\r\nhtml,\r\nbody {\r\n  font-family: 'Open Sans Condensed', sans-serif, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;\r\n  color: #60666c;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: none;\r\n}\r\n\r\n#container {\r\n  display: none;\r\n}\r\n\r\n.left {\r\n  float: left;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.divider {\r\n  width: 100%;\r\n  min-height: 1px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.divider-strip {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 10px;\r\n  display: inline-block;\r\n  position: relative;\r\n  border-bottom: 1px #e3e3e8 solid;\r\n}\r\n\r\n.divider-strip h1,\r\n.divider-strip h4 {\r\n  font-family: 'Open Sans Condensed', sans-serif;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n  color: #577088;\r\n  border-left: 17px #e3e3e8 solid;\r\n  padding-left: 10px;\r\n}\r\n\r\n.divider-strip.block-title h4 {\r\n  font-family: 'Open Sans Condensed', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n  margin-top: 10px;\r\n  border-left: 17px #e3e3e8 solid;\r\n  padding-left: 10px;\r\n}\r\n\r\n.divider-post {\r\n  width: 100%;\r\n  min-height: 1px;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  display: inline-block;\r\n  position: relative;\r\n  border-bottom: 1px #e3e3e8 solid;\r\n}\r\n\r\n.strip-block em {\r\n  font-size: 16px;\r\n}\r\n\r\n.no-float {\r\n  float: none;\r\n}\r\n\r\n.no-padding-lr {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.margin-right {\r\n  margin-right: 19px\r\n}\r\n\r\na,\r\nbutton {\r\n  outline: none;\r\n}\r\n\r\n/* http://sonspring.com/journal/clearing-floats */\r\n\r\n.clear {\r\n  clear: both;\r\n  display: block;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* http://perishablepress.com/press/2008/02/05/lessons-learned-concerning-the-clearfix-css-hack */\r\n\r\n.clearfix:after {\r\n  clear: both;\r\n  content: ' ';\r\n  display: block;\r\n  font-size: 0;\r\n  line-height: 0;\r\n  visibility: hidden;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.clearfix {\r\n  display: inline-block;\r\n}\r\n\r\n* html .clearfix {\r\n  height: 1%;\r\n}\r\n\r\n.clearfix {\r\n  display: block;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput[type=\"reset\"]::-moz-focus-inner,\r\ninput[type=\"button\"]::-moz-focus-inner,\r\ninput[type=\"submit\"]::-moz-focus-inner {\r\n  border: 0;\r\n}\r\n\r\nbutton:focus,\r\ninput[type=\"reset\"]:focus,\r\ninput[type=\"button\"]:focus,\r\ninput[type=\"submit\"]:focus {\r\n  border: 0;\r\n}\r\n\r\nsection {\r\n  padding-top: 30px;\r\n}\r\n\r\n/***** Typography & Element *****/\r\n\r\n.imageLeft {\r\n  float: left;\r\n  margin: 5px 20px 0 0;\r\n}\r\n\r\n.imageRight {\r\n  float: right;\r\n  margin: 5px 0 0 20px;\r\n}\r\n\r\na {\r\n  color: #577088;\r\n}\r\n\r\na:hover {\r\n  color: #f14a29;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\na {\r\n  font-family: 'PT Sans', sans-serif, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n\r\n/***** Social link*****/\r\n\r\nul.socicon {\r\n  margin: 0;\r\n  height: 26px;\r\n  padding: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\nul.socicon.top-w {\r\n  margin: 4px 0;\r\n  width: 30px;\r\n  height: 26px;\r\n  overflow: hidden;\r\n}\r\n\r\nul.socicon li {\r\n  display: block;\r\n  padding: 0;\r\n  margin: 0 0 0 4px;\r\n  float: left;\r\n}\r\n\r\nul.socicon li a {\r\n  width: 26px;\r\n  height: 26px;\r\n  display: block;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nul.socicon li a.dribbble {\r\n}\r\n\r\nul.socicon li a.facebook {\r\n}\r\n\r\nul.socicon li a.twitter {\r\n}\r\n\r\nul.socicon li a.flickr {\r\n}\r\n\r\nul.socicon li a.linkedin {\r\n}\r\n\r\nul.socicon li a.vimeo {\r\n}\r\n\r\nul.socicon li a.google {\r\n}\r\n\r\nul.socicon li a.share-icon {\r\n}\r\n\r\nul.socicon li.last {\r\n  margin-right: 0;\r\n}\r\n\r\n/***** Main Nav *****/\r\n\r\nnav select {\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\nnav ul {\r\n  margin: 30px 0;\r\n}\r\n\r\nnav ul li {\r\n  float: left;\r\n  margin: 0 0 0 10px;\r\n  position: relative;\r\n  z-index: 999;\r\n  position: relative;\r\n}\r\n\r\nnav ul li a {\r\n  display: block;\r\n  margin: 0;\r\n  padding: 11px 16px;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  font-family: 'PT Sans', sans-serif;\r\n  text-transform: uppercase;\r\n  line-height: 15px;\r\n  color: #7493b2;\r\n}\r\n\r\n\r\n/***** Footer *****/\r\n\r\nfooter {\r\n  margin: 0;\r\n  padding: 40px 0 0 0;\r\n  background: #333333;\r\n  color: #8f8e8e;\r\n  border-bottom: 5px #262626 solid;\r\n  border-top: #262626 10px solid;\r\n}\r\n\r\nfooter h3 {\r\n  margin: 0 0 15px 0;\r\n  padding: 0 0 10px 0;\r\n  border-bottom: #262626 1px solid;\r\n  text-shadow: 1px 1px 0 #262626;\r\n}\r\n\r\n#tweet-list {\r\n  margin: 0;\r\n}\r\n\r\n.tweets {\r\n  width: 370px;\r\n  padding: 0;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  overflow: hidden;\r\n}\r\n\r\n.tweets ul li,\r\n.tweets p {\r\n  font-size: 15px;\r\n  line-height: 16px;\r\n}\r\n\r\n.tweets ul li {\r\n  padding: 10px 10px 10px 35px;\r\n  margin: 0 0 15px 0;\r\n  -moz-box-shadow: 0 0 4px #444;\r\n  -webkit-box-shadow: 0 0 2px #000;\r\n}\r\n\r\n.tweets ul li a {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  color: #f14a29;\r\n}\r\n\r\n.copy {\r\n  font-size: 13px;\r\n  text-shadow: 1px 1px 0 #262626;\r\n  padding: 20px 0 10px 0;\r\n  color: #7d7d7d;\r\n}\r\n\r\n/***** Flickr *****/\r\n\r\n.flickr_badge_image {\r\n  float: left;\r\n  margin: 0 10px 10px 0;\r\n  padding: 3px;\r\n  background: #262626;\r\n}\r\n\r\n/***** Back to Top *****/\r\n\r\n#toTop {\r\n  display: none;\r\n  text-decoration: none;\r\n  position: fixed;\r\n  bottom: 10px;\r\n  right: 10px;\r\n  overflow: hidden;\r\n  width: 51px;\r\n  height: 51px;\r\n  border: none;\r\n  text-indent: -999px;\r\n}\r\n\r\n#toTopHover {\r\n  width: 50px;\r\n  height: 50px;\r\n  display: block;\r\n  overflow: hidden;\r\n  float: left;\r\n  opacity: 0;\r\n  -moz-opacity: 0;\r\n  filter: alpha(opacity=0);\r\n}\r\n\r\n#toTop:active,\r\n#toTop:focus {\r\n  outline: none;\r\n}\r\n\r\n/***** Button *****/\r\n\r\n.button {\r\n  margin: 0 0 10px;\r\n  display: inline-block;\r\n  padding: 12px 20px 12px;\r\n  color: #ffffff;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  background: #577088;\r\n}\r\n\r\n.button:hover,\r\n.button:focus {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  outline: none;\r\n  background: #ddd;\r\n}\r\n\r\n.button:active {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\n\r\n.button.small {\r\n  padding: 8px 10px 8px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n}\r\n\r\n.button.large {\r\n  padding: 16px 25px 16px;\r\n  font-size: 16px;\r\n  line-height: 16px;\r\n}\r\n\r\n.button.biglarge {\r\n  padding: 20px 30px 20px;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n}\r\n\r\n.rounded {\r\n  -webkit-border-radius: 15px;\r\n  -moz-border-radius: 15px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.button.blue {\r\n  background: #ddd;\r\n}\r\n\r\n.button.blue:hover {\r\n  background: #577088;\r\n}\r\n\r\n/***** Button Bootstrap *****/\r\n\r\n.btn-success {\r\n  background-color: #577088;\r\n  *background-color: #63829f;\r\n  background-image: -ms-linear-gradient(top, #7f9fbd, #63829f);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#7f9fbd), to(#63829f));\r\n  background-image: -webkit-linear-gradient(top, #7f9fbd, #63829f);\r\n  background-image: -o-linear-gradient(top, #7f9fbd, #63829f);\r\n  background-image: -moz-linear-gradient(top, #7f9fbd, #63829f);\r\n  background-image: linear-gradient(top, #67f9fbd, #63829f);\r\n  background-repeat: repeat-x;\r\n  border-color: #63829f #63829f #63829f;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:dximagetransform.microsoft.gradient(startColorstr='#7f9fbd', endColorstr='#63829f', GradientType=0);\r\n  filter: progid:dximagetransform.microsoft.gradient(enabled=false);\r\n}\r\n\r\n.btn-success:hover,\r\n.btn-success:active,\r\n.btn-success.active,\r\n.btn-success.disabled,\r\n.btn-success[disabled] {\r\n  background-color: #63829f;\r\n  *background-color: #63829f;\r\n}\r\n\r\n.btn-success:active,\r\n.btn-success.active {\r\n  background-color: #408140 \\9;\r\n}\r\n\r\n/***** List style *****/\r\n\r\nul.circle li {\r\n  padding: 0 0 1px 14px;\r\n  list-style: none outside none;\r\n  font-size: 13px;\r\n}\r\n\r\nul.square li {\r\n  padding: 0 0 1px 14px;\r\n  list-style: none outside none;\r\n  font-size: 13px;\r\n}\r\n\r\nul.bullet li {\r\n  padding: 0 0 1px 14px;\r\n  list-style: none outside none;\r\n  font-size: 13px;\r\n}\r\n\r\nul.arrow li {\r\n  padding: 0 0 1px 14px;\r\n  list-style: none outside none;\r\n  font-size: 13px;\r\n}\r\n\r\n/***** Message Boxes *****/\r\n\r\n.message-box {\r\n  position: relative;\r\n  margin: 0 0 20px;\r\n  padding: 10px 20px;\r\n  font-size: 14px;\r\n  line-height: 1.2em;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n}\r\n\r\n.message-box .closemsg {\r\n  position: absolute;\r\n  display: block;\r\n  width: 9px;\r\n  height: 10px;\r\n  right: 12px;\r\n  top: 14px;\r\n  background-position: 0 0;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\r\n\r\n.message-box.info {\r\n  background-color: #dff2fa;\r\n  color: #2e7893;\r\n  border-color: #85cfec;\r\n}\r\n\r\n.message-box.info .closemsg {\r\n}\r\n\r\n.message-box.note {\r\n  background-color: #f8f2cb;\r\n  color: #8f5c0b;\r\n  border-color: #edca42;\r\n}\r\n\r\n.message-box.note .closemsg {\r\n}\r\n\r\n.message-box.confirm {\r\n  background-color: #e5f2c0;\r\n  color: #4a630e;\r\n  border-color: #aacf49;\r\n}\r\n\r\n.message-box.confirm .closemsg {\r\n}\r\n\r\n.message-box.error {\r\n  background-color: #ffd4d4;\r\n  color: #cd0a0a;\r\n  border-color: #d97676;\r\n}\r\n\r\n.message-box.error .closemsg {\r\n}\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n\r\n.right li a:hover {color: #fefefe; background-color: #262626;}\r\n#header-wrap { position: relative;}\r\n\r\n#header-wrap img {width: 40%; height: auto; margin: 3px; }\r\n\r\n.span8 .sproutvideo-player {\r\n    width: 100%;\r\n    height: 432px;\r\n}\r\n\r\n#about-image img {\r\n    padding: 10px 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.about-info p {\r\n    font-size: 16px;\r\n}\r\n\r\n.footer-heading {\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n#logo {\r\n    float: left;\r\n    width: 12%;\r\n    top: 4px;\r\n    z-index: 1000;\r\n    position: absolute;\r\n}\r\n\r\n.header2 {\r\n    width: 108%\r\n}\r\n\r\n\r\n.navbar .brand {\r\n    display: inline;\r\n    /*margin-left: 64px;*/\r\n    font-size: 31px;\r\n    color: #213f71;\r\n\r\n}\r\n\r\n.carousel-caption a {\r\n    color: #fff;\r\n}\r\n\r\n.bg-inverse {\r\n    background-color: #8A8A8A !important; /* gray color */\r\n}\r\n\r\n.desc {\r\n    text-align: center;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.desc button {\r\n    float: left;\r\n}\r\n\r\n.slider-img {\r\n    width: 1170px;\r\n    height: 350px;\r\n}\r\n\r\n                    /****  Miscellaneous ****/\r\n\r\n/*For other non-home components that need spacing at the top.*/\r\n.add-top-margin {\r\n    margin-top: 2%;\r\n}\r\n\r\n.col-centered {\r\n    float: none;\r\n    margin: 0 auto;\r\n}\r\n                    /**** Admin View ****/\r\n.admin-sidebar {\r\n    margin-top: 45%;\r\n}\r\n\r\n.admin-link {\r\n    color: #213f71;\r\n}\r\n\r\n.logout-link {\r\n    color: #CC0000;\r\n}\r\n                    /**** Post Detail ****/\r\nul.socicon li a.twitter {\r\n    background: url(" + __webpack_require__(1400) + ") 0 0 no-repeat;\r\n}\r\n\r\nul.socicon li a.facebook {\r\n    background: url(" + __webpack_require__(1399) + ") 0 0 no-repeat;\r\n}\r\n                    /**** Post Item ****/\r\n.postItem {\r\n    width: 100%;\r\n}\r\n                    /**** Post List ****/\r\n\r\n.featured-post-list h3 {\r\n    margin-top: 7%;\r\n}\r\n\r\n#list-container {\r\n    margin-top: 50px;\r\n}\r\n\r\n.postAsset {\r\n    width: 100%;\r\n}\r\n\r\n.post-header {\r\n    padding: 5% 8%;\r\n    background-color: #f5f5f5;\r\n    border-bottom: 1px solid transparent;\r\n}\r\n\r\n.post-header h3 {\r\n    font-size: 133%;\r\n}\r\n\r\n.post-desc {\r\n    padding-top: 4%;\r\n}\r\n\r\n.child-container {\r\n    margin-top: 2%;\r\n}\r\n\r\n.postitem_image img {\r\n   width: 100%;\r\n   border-width: 2px;\r\n   border-color: rgb(1, 76, 140);\r\n}\r\n\r\n.post_list {\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 2%;\r\n    padding: 2% 2%;\r\n}\r\n\r\n.post_title {\r\n    color: #0275d8;\r\n}\r\n\r\n#search-component {\r\n    margin: 20px;\r\n}\r\n.paginator, .page-item {\r\n    margin: 0px;\r\n}\r\n#option-card {\r\n     margin-bottom: 5px;\r\n }\r\n\r\niframe {\r\n    border: none;\r\n}\r\n\r\n.details {\r\n    margin-bottom: 35px;\r\n}\r\n.empty_post {\r\n    width: 100%;\r\n}\r\n\r\n.postitem_text {\r\n\twidth: 100%;\r\n}\r\n\r\n/* Fixes for spacing on post_list*/\r\n\r\n.card {\r\n    height: 375px;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n/* For submit form only */\r\n.card-submit {\r\n    height: 100%;\r\n}\r\n\r\n.card-block {\r\n    overflow: hidden;\r\n}\r\n\r\n.post-desc {\r\n    max-height: 150px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.post-title {\r\n  margin: 10px 0;\r\n  font-size: 36px\r\n}\r\n\r\n\r\n\r\n\r\n#collapseContent { padding-bottom: 30px;}\r\n\r\n@media (max-width: 576px) {\r\n    .right {float: none;}\r\n    .span8 {float:none;}\r\n    /* need to ngIf current */\r\n    /*.row {margin-bottom: 20%; }*/\r\n    .right li:not(:first-child) {}\r\n    .right li.icon {\r\n        float: right;\r\n        display: block;\r\n    }\r\n    .right li {\r\n        float: none;\r\n        display: inline;\r\n    }\r\n\r\n    .responsive_divider {\r\n        display: none;\r\n    }\r\n\r\n    .responsive_home {\r\n        max-width: 100vw;\r\n    }\r\n\r\n\r\n    #logo {\r\n        float: none;\r\n        display: block;\r\n        width: 50%;\r\n        position: relative;\r\n        margin: auto;\r\n        margin-bottom: 10px;\r\n    }\r\n    .navbar .brand {\r\n        display: none;\r\n    }\r\n\r\n\r\n}\r\n\r\n.contact-info {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\nh4 {\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\nspan.italic {\r\n    font-style: italic;\r\n}\r\n\r\n\r\n\r\n.brandContainer {\r\n\tmargin-left: 12%;\r\n}\r\n\r\n@media (max-width: 576px) and (max-width: 768px) {\r\n    .right {float: none;}\r\n    .span8 {float:none;}\r\n    /* need to ngIf current */\r\n    /*.row {margin-bottom: 20%; }*/\r\n    .right li:not(:first-child) {}\r\n    .right li.icon {\r\n        float: right;\r\n        display: block;\r\n    }\r\n    .right li {\r\n        float: none;\r\n        display: inline;\r\n    }\r\n    li.span3.item-block.web.all {\r\n\r\n    }\r\n    #header-wrap img {display: block; margin: 0 auto;}\r\n\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n    .icon {display: none;}\r\n}\r\n\r\n@media (max-width: 980px) {\r\n    .icon {display: none;}\r\n\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    #collapseContent {width: 300%}\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n}\r\n\r\n/* Loading Icon */\r\n.loader {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(33, 63, 113);\r\n}\r\n\r\n.loader h1 {\r\n    text-align: center;\r\n    color: rgb(247,249,253);\r\n}\r\n\r\n\r\n/* Loading Component */\r\n\r\n.loading-grid {\r\n    height: 300px;\r\n    background-color: rgb(211, 211, 211);\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.failed-grid {\r\n    height: 300px;\r\n    background-color: rgb(242, 87, 90);\r\n    margin-bottom: 2%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.svg";

/***/ })

},[1418]);
//# sourceMappingURL=styles.bundle.map