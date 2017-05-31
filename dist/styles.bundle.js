webpackJsonp([2,4],{

/***/ 1086:
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

/***/ 1087:
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,"

/***/ }),

/***/ 1088:
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,"

/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(519);


/***/ }),

/***/ 483:
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

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot";

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(799);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1086)(content, {});
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

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Oswald:400,300,700|Open+Sans+Condensed:700,300,300italic|Open+Sans:400,300italic,400italic,600,600italic,700,700italic,800,800italic|PT+Sans:400,400italic,700,700italic);", ""]);
exports.i(__webpack_require__(800), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* import style.css rules */\n", ""]);

// exports


/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(483)();
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\n\n\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(484) + ");\n  src: url(" + __webpack_require__(484) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(1088) + ") format('woff'), url(" + __webpack_require__(1087) + ") format('truetype'), url(" + __webpack_require__(801) + "#FontAwesome) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/***** General *****/\nhtml, body\n{\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden;\n}\nhtml,\nbody {\n  font-family: 'Open Sans Condensed', sans-serif, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;\n  color: #60666c;\n  margin: 0;\n  padding: 0;\n  background: none;\n}\n\n#container {\n  display: none;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.center {\n  text-align: center;\n}\n\n.divider {\n  width: 100%;\n  min-height: 1px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: inline-block;\n  position: relative;\n}\n\n.divider-strip {\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  display: inline-block;\n  position: relative;\n  border-bottom: 1px #e3e3e8 solid;\n}\n\n.divider-strip h1,\n.divider-strip h4 {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n  text-transform: capitalize;\n  font-size: 24px;\n  color: #577088;\n  border-left: 17px #e3e3e8 solid;\n  padding-left: 10px;\n}\n\n.divider-strip.block-title h4 {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  margin-top: 10px;\n  border-left: 17px #e3e3e8 solid;\n  padding-left: 10px;\n}\n\n.divider-post {\n  width: 100%;\n  min-height: 1px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  display: inline-block;\n  position: relative;\n  border-bottom: 1px #e3e3e8 solid;\n}\n\n.strip-block em {\n  font-size: 16px;\n}\n\n.no-float {\n  float: none;\n}\n\n.no-padding-lr {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.margin-right {\n  margin-right: 19px\n}\n\na,\nbutton {\n  outline: none;\n}\n\n/* http://sonspring.com/journal/clearing-floats */\n\n.clear {\n  clear: both;\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n\n/* http://perishablepress.com/press/2008/02/05/lessons-learned-concerning-the-clearfix-css-hack */\n\n.clearfix:after {\n  clear: both;\n  content: ' ';\n  display: block;\n  font-size: 0;\n  line-height: 0;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n\n.clearfix {\n  display: inline-block;\n}\n\n* html .clearfix {\n  height: 1%;\n}\n\n.clearfix {\n  display: block;\n}\n\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner {\n  border: 0;\n}\n\nbutton:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus,\ninput[type=\"submit\"]:focus {\n  border: 0;\n}\n\nsection {\n  padding-top: 30px;\n}\n\n/***** Typography & Element *****/\n\n.imageLeft {\n  float: left;\n  margin: 5px 20px 0 0;\n}\n\n.imageRight {\n  float: right;\n  margin: 5px 0 0 20px;\n}\n\na {\n  color: #577088;\n}\n\na:hover {\n  color: #f14a29;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na {\n  font-family: 'PT Sans', sans-serif, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 400;\n}\n\n\n\n/***** Social link*****/\n\nul.socicon {\n  margin: 0;\n  height: 26px;\n  padding: 0px;\n  overflow: hidden;\n}\n\nul.socicon.top-w {\n  margin: 4px 0;\n  width: 30px;\n  height: 26px;\n  overflow: hidden;\n}\n\nul.socicon li {\n  display: block;\n  padding: 0;\n  margin: 0 0 0 4px;\n  float: left;\n}\n\nul.socicon li a {\n  width: 26px;\n  height: 26px;\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n\nul.socicon li a.dribbble {\n}\n\nul.socicon li a.facebook {\n}\n\nul.socicon li a.twitter {\n}\n\nul.socicon li a.flickr {\n}\n\nul.socicon li a.linkedin {\n}\n\nul.socicon li a.vimeo {\n}\n\nul.socicon li a.google {\n}\n\nul.socicon li a.share-icon {\n}\n\nul.socicon li.last {\n  margin-right: 0;\n}\n\n/***** Main Nav *****/\n\nnav select {\n  display: none;\n  width: 100%;\n}\n\nnav ul {\n  margin: 30px 0;\n}\n\nnav ul li {\n  float: left;\n  margin: 0 0 0 10px;\n  position: relative;\n  z-index: 999;\n  position: relative;\n}\n\nnav ul li a {\n  display: block;\n  margin: 0;\n  padding: 11px 16px;\n  font-size: 16px;\n  font-weight: 400;\n  font-family: 'PT Sans', sans-serif;\n  text-transform: uppercase;\n  line-height: 15px;\n  color: #7493b2;\n}\n\n\n\n\n.post-title {\n  margin: 10px 0;\n  font-size: 36px\n}\n\n\n\n/***** Footer *****/\n\nfooter {\n  margin: 0;\n  padding: 40px 0 0 0;\n  background: #333333;\n  color: #8f8e8e;\n  border-bottom: 5px #262626 solid;\n  border-top: #262626 10px solid;\n}\n\nfooter h3 {\n  margin: 0 0 15px 0;\n  padding: 0 0 10px 0;\n  border-bottom: #262626 1px solid;\n  text-shadow: 1px 1px 0 #262626;\n}\n\n#tweet-list {\n  margin: 0;\n}\n\n.tweets {\n  width: 370px;\n  padding: 0;\n  font-size: 12px;\n  line-height: 16px;\n  overflow: hidden;\n}\n\n.tweets ul li,\n.tweets p {\n  font-size: 15px;\n  line-height: 16px;\n}\n\n.tweets ul li {\n  padding: 10px 10px 10px 35px;\n  margin: 0 0 15px 0;\n  -moz-box-shadow: 0 0 4px #444;\n  -webkit-box-shadow: 0 0 2px #000;\n}\n\n.tweets ul li a {\n  font-style: italic;\n  font-weight: bold;\n  font-size: 12px;\n  color: #f14a29;\n}\n\n.copy {\n  font-size: 13px;\n  text-shadow: 1px 1px 0 #262626;\n  padding: 20px 0 10px 0;\n  color: #7d7d7d;\n}\n\n/***** Flickr *****/\n\n.flickr_badge_image {\n  float: left;\n  margin: 0 10px 10px 0;\n  padding: 3px;\n  background: #262626;\n}\n\n/***** Back to Top *****/\n\n#toTop {\n  display: none;\n  text-decoration: none;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  overflow: hidden;\n  width: 51px;\n  height: 51px;\n  border: none;\n  text-indent: -999px;\n}\n\n#toTopHover {\n  width: 50px;\n  height: 50px;\n  display: block;\n  overflow: hidden;\n  float: left;\n  opacity: 0;\n  -moz-opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n#toTop:active,\n#toTop:focus {\n  outline: none;\n}\n\n/***** Button *****/\n\n.button {\n  margin: 0 0 10px;\n  display: inline-block;\n  padding: 12px 20px 12px;\n  color: #ffffff;\n  font-size: 13px;\n  text-transform: uppercase;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  background: #577088;\n}\n\n.button:hover,\n.button:focus {\n  color: #ffffff;\n  text-decoration: none;\n  outline: none;\n  background: #ddd;\n}\n\n.button:active {\n  color: #ffffff;\n  text-decoration: none;\n  outline: none;\n}\n\n.button.small {\n  padding: 8px 10px 8px;\n  font-size: 12px;\n  line-height: 12px;\n}\n\n.button.large {\n  padding: 16px 25px 16px;\n  font-size: 16px;\n  line-height: 16px;\n}\n\n.button.biglarge {\n  padding: 20px 30px 20px;\n  font-size: 20px;\n  line-height: 20px;\n}\n\n.rounded {\n  -webkit-border-radius: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n}\n\n.button.blue {\n  background: #ddd;\n}\n\n.button.blue:hover {\n  background: #577088;\n}\n\n/***** Button Bootstrap *****/\n\n.btn-success {\n  background-color: #577088;\n  *background-color: #63829f;\n  background-image: -ms-linear-gradient(top, #7f9fbd, #63829f);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#7f9fbd), to(#63829f));\n  background-image: -webkit-linear-gradient(top, #7f9fbd, #63829f);\n  background-image: -o-linear-gradient(top, #7f9fbd, #63829f);\n  background-image: -moz-linear-gradient(top, #7f9fbd, #63829f);\n  background-image: linear-gradient(top, #67f9fbd, #63829f);\n  background-repeat: repeat-x;\n  border-color: #63829f #63829f #63829f;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  filter: progid:dximagetransform.microsoft.gradient(startColorstr='#7f9fbd', endColorstr='#63829f', GradientType=0);\n  filter: progid:dximagetransform.microsoft.gradient(enabled=false);\n}\n\n.btn-success:hover,\n.btn-success:active,\n.btn-success.active,\n.btn-success.disabled,\n.btn-success[disabled] {\n  background-color: #63829f;\n  *background-color: #63829f;\n}\n\n.btn-success:active,\n.btn-success.active {\n  background-color: #408140 \\9;\n}\n\n/***** List style *****/\n\nul.circle li {\n  padding: 0 0 1px 14px;\n  list-style: none outside none;\n  font-size: 13px;\n}\n\nul.square li {\n  padding: 0 0 1px 14px;\n  list-style: none outside none;\n  font-size: 13px;\n}\n\nul.bullet li {\n  padding: 0 0 1px 14px;\n  list-style: none outside none;\n  font-size: 13px;\n}\n\nul.arrow li {\n  padding: 0 0 1px 14px;\n  list-style: none outside none;\n  font-size: 13px;\n}\n\n/***** Message Boxes *****/\n\n.message-box {\n  position: relative;\n  margin: 0 0 20px;\n  padding: 10px 20px;\n  font-size: 14px;\n  line-height: 1.2em;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.message-box .closemsg {\n  position: absolute;\n  display: block;\n  width: 9px;\n  height: 10px;\n  right: 12px;\n  top: 14px;\n  background-position: 0 0;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.message-box.info {\n  background-color: #dff2fa;\n  color: #2e7893;\n  border-color: #85cfec;\n}\n\n.message-box.info .closemsg {\n}\n\n.message-box.note {\n  background-color: #f8f2cb;\n  color: #8f5c0b;\n  border-color: #edca42;\n}\n\n.message-box.note .closemsg {\n}\n\n.message-box.confirm {\n  background-color: #e5f2c0;\n  color: #4a630e;\n  border-color: #aacf49;\n}\n\n.message-box.confirm .closemsg {\n}\n\n.message-box.error {\n  background-color: #ffd4d4;\n  color: #cd0a0a;\n  border-color: #d97676;\n}\n\n.message-box.error .closemsg {\n}\n\n/***** Accordion / Toggle *****/\n\n.open-block-acc {\n  float: left;\n  width: 100%;\n  padding: 10px 0 10px 0;\n  margin: 0 0 5px 0;\n  cursor: pointer;\n}\n\n.open-block-acc span {\n  padding-left: 15px;\n}\n\n.open-block-acc.active {\n  color: #fff;\n}\n\n.accordion-box {\n  float: left;\n  padding: 10px;\n}\n\n.toggle-block {\n  float: left;\n  width: 100%;\n  margin: 0 0 5px 0;\n}\n\n.open-block a {\n  display: block;\n  padding: 10px 10px 10px 15px;\n  text-decoration: none;\n}\n\n.open-block.active a {\n  color: #fff;\n}\n\n.toggle-box {\n  float: left;\n  padding: 10px;\n}\n\n.open-block-acc,\n.open-block {\n  font-family: 'PT Sans', sans-serif, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif;\n}\n\n.open-block-acc:hover,\n.open-block a:hover {\n  background-color: #ddd\n}\n\n/**** Isotope Filtering ****/\n\n.isotope-item {\n  z-index: 2;\n}\n\n.isotope-hidden.isotope-item {\n  pointer-events: none;\n  z-index: 1;\n}\n\n/**** Isotope CSS3 transitions ****/\n\n.isotope,\n.isotope .isotope-item {\n  -webkit-transition-duration: 0.8s;\n  -moz-transition-duration: 0.8s;\n  -ms-transition-duration: 0.8s;\n  -o-transition-duration: 0.8s;\n  transition-duration: 0.8s;\n}\n\n.isotope {\n  -webkit-transition-property: height, width;\n  -moz-transition-property: height, width;\n  -ms-transition-property: height, width;\n  -o-transition-property: height, width;\n  transition-property: height, width;\n}\n\n.isotope .isotope-item {\n  -webkit-transition-property: -webkit-transform, opacity;\n  -moz-transition-property: -moz-transform, opacity;\n  -ms-transition-property: -ms-transform, opacity;\n  -o-transition-property: top, left, opacity;\n  transition-property: transform, opacity;\n}\n\n/**** disabling Isotope CSS3 transitions ****/\n\n.isotope.no-transition,\n.isotope.no-transition .isotope-item,\n.isotope .isotope-item.no-transition {\n  -webkit-transition-duration: 0s;\n  -moz-transition-duration: 0s;\n  -ms-transition-duration: 0s;\n  -o-transition-duration: 0s;\n  transition-duration: 0s;\n}\n\n/* End: Recommended Isotope styles */\n/* disable CSS transitions for containers with infinite scrolling*/\n\n.isotope.infinite-scrolling {\n  -webkit-transition: none;\n  -moz-transition: none;\n  -ms-transition: none;\n  -o-transition: none;\n  transition: none;\n}\n\n.item-block-isotope .number {\n  display: none;\n}\n\n.item-block-isotope * {\n  position: absolute;\n  margin: 0;\n  z-index: 1;\n}\n\n#container {\n  max-width: 1170px;\n  margin: 0 auto;\n  padding: 0;\n  border: none;\n}\n\n.item-block-isotope {\n  width: 288px;\n  height: 150px;\n  margin: 2px;\n  padding: 0;\n  border-radius: 0px;\n  border: none;\n  overflow: hidden;\n  position: relative;\n}\n\n.change-size .item-block-isotope.width2 {\n  width: 580px;\n}\n\n.change-size .item-block-isotope.height2 {\n  height: 300px;\n}\n\n.change-size .item-block-isotope.width3 {\n  width: 872px;\n}\n\n.change-size .item-block-isotope.height3 {\n  height: 300px;\n}\n\n.item-block-isotope img {\n  z-index: -1;\n  width: 100%;\n}\n\n.item-block-isotope .symbol {\n  font-weight: 700;\n  font-size: 28px;\n  left: 20px;\n  top: 20%;\n  width: 90%;\n  font-family: 'PT Sans', sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #577088;\n  z-index: 2;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.item-block-isotope .name {\n  width: 90%;\n  font-family: 'PT Sans', sans-serif;\n  font-size: 14px;\n  left: 20px;\n  top: 40%;\n  font-weight: 400;\n  text-transform: capitalize;\n  color: #577088;\n  z-index: 990;\n}\n\n.hover-desc {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  opacity: 0;\n  bottom: 350px;\n  z-index: 990;\n  text-align: center;\n}\n\n.item-block-isotope.width3 .symbol,\n.item-block-isotope.width2 .symbol {\n  font-size: 72px;\n  top: 20%;\n  padding-bottom: 30px;\n}\n\n.item-block-isotope.width3.item-block-small .symbol,\n.item-block-isotope.width2.item-block-small .symbol {\n  font-size: 28px;\n  left: 20px;\n  top: 20%;\n}\n\n.item-block-isotope .info {\n  width: 40px;\n  height: 40px;\n  display: block;\n  position: absolute;\n  bottom: 10%;\n  right: 5%;\n  z-index: 9999;\n  -webkit-border-radius: 125px;\n  -moz-border-radius: 125px;\n  border-radius: 125px;\n}\n\n/* Responsive\n-------------------------------------------------- */\n\n\n.right li a:hover {color: #fefefe; background-color: #262626;}\n#header-wrap { position: relative;}\n\n#header-wrap img {width: 40%; height: auto; margin: 3px; }\n.thumbnails {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.thumbnails > li {\n    height: 275px;\n}\n.span8 .sproutvideo-player {\n    width: 100%;\n    height: 432px;\n}\n\n#about-image img {\n    padding: 10px 10px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n}\n\n.about-info p {\n    font-size: 16px;\n}\n\n.footer-heading {\n    margin-top: 30px;\n}\n\n\n#logo {\n    float: left;\n    width: 12%;\n    top: 4px;\n    z-index: 1000;\n    position: absolute;\n}\n\n.header2 {\n    width: 108%\n}\n\n\n.navbar .brand {\n    display: inline;\n    /*margin-left: 64px;*/\n    font-size: 31px;\n    color: #213f71;\n\n}\n\n.carousel-caption a {\n    color: #fff;\n}\n\n.bg-inverse {\n    background-color: #8A8A8A !important;\n}\n\n.desc {\n    text-align: center;\n    padding-top: 2%;\n    padding-bottom: 2%;\n}\n\n.desc button {\n    float: left;\n}\n\n.slider-img {\n    width: 1170px;\n    height: 350px;\n}\n\n#list-container {\n    margin-top: 50px;\n}\n\n.child-container {\n    margin-top: 2%;\n}\n\n.postitem_image img {\n   width: 100%;\n   border-width: 2px;\n   border-color: rgb(1, 76, 140);\n}\n\n.post_desc {\n    /*margin-top: -6%;*/\n}\n\n.post_title {\n    color: #0275d8;\n}\n\n#search-component {\n    margin: 20px;\n}\n.paginator, .page-item {\n    margin: 0px;\n}\n#option-card {\n     margin-bottom: 5px;\n }\n\niframe {\n    border: none;\n}\n\n.details {\n    margin-bottom: 35px;\n}\n.empty_post {\n    width: 100%;\n}\n\n.postitem_text {\n\twidth: 100%;\n\theight: 166px;\n}\n\n\n\n#collapseContent { padding-bottom: 30px;}\n\n@media (max-width: 576px) {\n    .right {float: none;}\n    .span8 {float:none;}\n    /* need to ngIf current */\n    /*.row {margin-bottom: 20%; }*/\n    .right li:not(:first-child) {}\n    .right li.icon {\n        float: right;\n        display: block;\n    }\n    .right li {\n        float: none;\n        display: inline;\n    }\n\n\n    .responsive_home {\n        max-width: 100vw;\n    }\n\n    #logo {\n        float: none;\n        display: block;\n        width: 50%;\n        position: relative;\n        margin: auto;\n        margin-bottom: 10px;\n    }\n    .navbar .brand {\n        display: none;\n    }\n\n    .postItem {\n        width: 100%;\n    }\n}\n\n.contact-info {\n    margin-bottom: 30px;\n}\n\n\nh4 {\n    text-align: center;\n}\n\n.post_list {\n    width: 100%;\n    height: auto;\n    margin-bottom: 2%;\n}\n\nspan.italic {\n    font-style: italic;\n}\n\n\n\n.brandContainer {\n\tmargin-left: 12%;\n}\n\n@media (max-width: 576px) and (max-width: 768px) {\n    .right {float: none;}\n    .span8 {float:none;}\n    /* need to ngIf current */\n    /*.row {margin-bottom: 20%; }*/\n    .right li:not(:first-child) {}\n    .right li.icon {\n        float: right;\n        display: block;\n    }\n    .right li {\n        float: none;\n        display: inline;\n    }\n    li.span3.item-block.web.all {\n\n    }\n    #header-wrap img {display: block; margin: 0 auto;}\n\n}\n\n@media (min-width: 768px) and (max-width: 980px) {\n    .icon {display: none;}\n}\n\n@media (max-width: 980px) {\n    .icon {display: none;}\n\n}\n\n@media (max-width: 1024px) {\n    #collapseContent {width: 300%}\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n}\n", ""]);

// exports


/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.svg";

/***/ })

},[1091]);
//# sourceMappingURL=styles.bundle.map