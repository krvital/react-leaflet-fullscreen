import PropTypes from 'prop-types'
import { MapControl } from 'react-leaflet'
import 'leaflet.fullscreen'

class FullscreenControl extends MapControl {
  componentWillMount() {
    this.leafletElement = L.control.fullscreen(this.props)
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
}

export default FullscreenControl
