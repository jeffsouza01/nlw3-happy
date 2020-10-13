import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import logoPointer from '../images/logoPointer.svg';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

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
            </Map>


            < Link to='' className='create-orphanage'>
                <FiPlus size={32} color='#fff'/>
            </Link> 
        </div>
    );
}

export default OrphanagesMap;