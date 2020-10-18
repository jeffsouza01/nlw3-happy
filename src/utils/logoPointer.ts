import Leaflet from 'leaflet';

import logoPointerImg from '../images/logoPointer.svg';

const happyMapIcon = Leaflet.icon({
    iconUrl: logoPointerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  export default happyMapIcon;