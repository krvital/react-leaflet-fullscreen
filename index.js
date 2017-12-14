require('./node_modules/leaflet.fullscreen/Control.FullScreen.css');
const fullscreen = require('exports?L.control.fullscreen!leaflet.fullscreen');
import PropTypes from 'prop-types';
import { MapControl } from 'react-leaflet';

class FullscreenControl extends MapControl {
  componentWillMount() {
    this.leafletElement = fullscreen(this.props);
  }
}

FullscreenControl.propTypes = {
  position: PropTypes.string,
  title: PropTypes.string,
  titleCancel: PropTypes.string,
  content: PropTypes.node,
  forceSeparateButton: PropTypes.bool,
  forcePseudoFullscreen: PropTypes.bool,
  fullscreenElement: PropTypes.bool
};

export default FullscreenControl;
