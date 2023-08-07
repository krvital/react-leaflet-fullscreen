'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@react-leaflet/core');
require('leaflet.fullscreen');

var FullscreenControl = core.createControlComponent(function (props) {
  return L.control.fullscreen(props);
});

exports.FullscreenControl = FullscreenControl;
