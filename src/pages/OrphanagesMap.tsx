import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import Leaflet from "leaflet";
import logoPointer from '../images/logoPointer.svg';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
    iconUrl: logoPointer,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175, 1]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoPointer} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>



            < Map 
                center={[-23.4413635,-46.7434585]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                < TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`}
                />

                <Marker 
                    position={[-23.4413635,-46.7434585]}
                    icon={mapIcon}
                >

                    <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                        Lar dos Meninos
                        <Link to="/orphanage/1">
                            < FiArrowRight size={20} color={'#fff'}/>
                        </Link>
                    </Popup>
                </Marker>

            </Map>


            < Link to='/orphanages/create' className='create-orphanage'>
                <FiPlus size={32} color='#fff'/>
            </Link> 
        </div>
    );
}

export default OrphanagesMap;