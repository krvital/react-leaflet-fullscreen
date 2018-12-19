import PropTypes from 'prop-types';
import { MapControl, withLeaflet } from 'react-leaflet';
import 'leaflet.fullscreen';

class FullscreenControl extends MapControl {
  createLeafletElement(props) {
    return L.control.fullscreen(props);
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

export default withLeaflet(FullscreenControl);
