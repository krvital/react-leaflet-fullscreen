(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["FullscreenControl"] = factory(require("react"), require("react-leaflet"));
	else
		root["FullscreenControl"] = factory(root["react"], root["react-leaflet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _reactLeaflet = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(3);
	var fullscreen = __webpack_require__(9);

	var FullscreenControl = function (_MapControl) {
	  _inherits(FullscreenControl, _MapControl);

	  function FullscreenControl() {
	    _classCallCheck(this, FullscreenControl);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).apply(this, arguments));
	  }

	  _createClass(FullscreenControl, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.leafletElement = fullscreen(this.props);
	    }
	  }]);

	  return FullscreenControl;
	}(_reactLeaflet.MapControl);

	FullscreenControl.propTypes = {
	  position: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  titleCancel: _react.PropTypes.string,
	  content: _react.PropTypes.node,
	  forceSeparateButton: _react.PropTypes.bool,
	  forcePseudoFullscreen: _react.PropTypes.bool,
	  fullscreenElement: _react.PropTypes.bool
	};

	exports.default = FullscreenControl;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	(function () {

	L.Control.FullScreen = L.Control.extend({
		options: {
			position: 'topleft',
			title: 'Full Screen',
			titleCancel: 'Exit Full Screen',
			forceSeparateButton: false,
			forcePseudoFullscreen: false,
			fullscreenElement: false
		},
		
		onAdd: function (map) {
			var className = 'leaflet-control-zoom-fullscreen', container, content = '';
			
			if (map.zoomControl && !this.options.forceSeparateButton) {
				container = map.zoomControl._container;
			} else {
				container = L.DomUtil.create('div', 'leaflet-bar');
			}
			
			if (this.options.content) {
				content = this.options.content;
			} else {
				className += ' fullscreen-icon';
			}

			this._createButton(this.options.title, className, content, container, this.toggleFullScreen, this);

			this._map.on('enterFullscreen exitFullscreen', this._toggleTitle, this);

			return container;
		},
		
		_createButton: function (title, className, content, container, fn, context) {
			this.link = L.DomUtil.create('a', className, container);
			this.link.href = '#';
			this.link.title = title;
			this.link.innerHTML = content;

			L.DomEvent
				.addListener(this.link, 'click', L.DomEvent.stopPropagation)
				.addListener(this.link, 'click', L.DomEvent.preventDefault)
				.addListener(this.link, 'click', fn, context);
			
			L.DomEvent
				.addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
				.addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
				.addListener(container, fullScreenApi.fullScreenEventName, this._handleEscKey, context);
			
			L.DomEvent
				.addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
				.addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
				.addListener(document, fullScreenApi.fullScreenEventName, this._handleEscKey, context);

			return this.link;
		},
		
		toggleFullScreen: function () {
			var map = this._map;
			map._exitFired = false;
			if (map._isFullscreen) {
				if (fullScreenApi.supportsFullScreen && !this.options.forcePseudoFullscreen) {
					fullScreenApi.cancelFullScreen(this.options.fullscreenElement ? this.options.fullscreenElement : map._container);
				} else {
					L.DomUtil.removeClass(map._container, 'leaflet-pseudo-fullscreen');
				}
				map.invalidateSize();
				map.fire('exitFullscreen');
				map._exitFired = true;
				map._isFullscreen = false;
			}
			else {
				if (fullScreenApi.supportsFullScreen && !this.options.forcePseudoFullscreen) {
					fullScreenApi.requestFullScreen(this.options.fullscreenElement ? this.options.fullscreenElement : map._container);
				} else {
					L.DomUtil.addClass(map._container, 'leaflet-pseudo-fullscreen');
				}
				map.invalidateSize();
				map.fire('enterFullscreen');
				map._isFullscreen = true;
			}
		},
		
		_toggleTitle: function () {
			this.link.title = this._map._isFullscreen ? this.options.title : this.options.titleCancel;
		},
		
		_handleEscKey: function () {
			var map = this._map;
			if (!fullScreenApi.isFullScreen(map) && !map._exitFired) {
				map.fire('exitFullscreen');
				map._exitFired = true;
				map._isFullscreen = false;
			}
		}
	});

	L.Map.addInitHook(function () {
		if (this.options.fullscreenControl) {
			this.fullscreenControl = L.control.fullscreen(this.options.fullscreenControlOptions);
			this.addControl(this.fullscreenControl);
		}
	});

	L.control.fullscreen = function (options) {
		return new L.Control.FullScreen(options);
	};

	/* 
	Native FullScreen JavaScript API
	-------------
	Assumes Mozilla naming conventions instead of W3C for now

	source : http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/

	*/

		var 
			fullScreenApi = { 
				supportsFullScreen: false,
				isFullScreen: function () { return false; }, 
				requestFullScreen: function () {}, 
				cancelFullScreen: function () {},
				fullScreenEventName: '',
				prefix: ''
			},
			browserPrefixes = 'webkit moz o ms khtml'.split(' ');
		
		// check for native support
		if (typeof document.exitFullscreen !== 'undefined') {
			fullScreenApi.supportsFullScreen = true;
		} else {
			// check for fullscreen support by vendor prefix
			for (var i = 0, il = browserPrefixes.length; i < il; i++) {
				fullScreenApi.prefix = browserPrefixes[i];
				if (typeof document[fullScreenApi.prefix + 'CancelFullScreen'] !== 'undefined') {
					fullScreenApi.supportsFullScreen = true;
					break;
				}
			}
			if (typeof document['msExitFullscreen'] !== 'undefined') {
				fullScreenApi.prefix = 'ms';
				fullScreenApi.supportsFullScreen = true;
			}
		}
		
		// update methods to do something useful
		if (fullScreenApi.supportsFullScreen) {
			if (fullScreenApi.prefix === 'ms') {
				fullScreenApi.fullScreenEventName = 'MSFullscreenChange';
			} else {
				fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
			}
			fullScreenApi.isFullScreen = function () {
				switch (this.prefix) {
					case '':
						return document.fullScreen;
					case 'webkit':
						return document.webkitIsFullScreen;
					case 'ms':
						return document.msFullscreenElement;
					default:
						return document[this.prefix + 'FullScreen'];
				}
			};
			fullScreenApi.requestFullScreen = function (el) {
				switch (this.prefix) {
					case '':
						return el.requestFullscreen();
					case 'ms':
						return el.msRequestFullscreen();
					default:
						return el[this.prefix + 'RequestFullScreen']();
				}
			};
			fullScreenApi.cancelFullScreen = function () {
				switch (this.prefix) {
					case '':
						return document.exitFullscreen();
					case 'ms':
						return document.msExitFullscreen();
					default:
						return document[this.prefix + 'CancelFullScreen']();
				}
			};
		}

		// jQuery plugin
		if (typeof jQuery !== 'undefined') {
			jQuery.fn.requestFullScreen = function () {
				return this.each(function () {
					var el = jQuery(this);
					if (fullScreenApi.supportsFullScreen) {
						fullScreenApi.requestFullScreen(el);
					}
				});
			};
		}

		// export api
		window.fullScreenApi = fullScreenApi;
	})();


	/*** EXPORTS FROM exports-loader ***/
	module.exports = L.control.fullscreen;

/***/ }
/******/ ])
});
;