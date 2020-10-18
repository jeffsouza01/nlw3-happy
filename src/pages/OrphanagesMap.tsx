import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import logoPointerImg from '../images/logoPointer.svg';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';

import logoPointer from '../utils/logoPointer';

interface Orphanages {
    id: number;
    longitude: number;
    latitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanage] = useState<Orphanages[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanage(response.data); 
        })
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoPointerImg} alt="Happy"/>

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

                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            position={[orphanage.latitude,orphanage.longitude]}
                            icon={logoPointer}
                            key={orphanage.id}
                        >

                            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                                {orphanage.name}
                                <Link to={`/orphanage/${orphanage.id}`}>
                                    < FiArrowRight size={20} color={'#fff'}/>
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}

            </Map>


            < Link to='/orphanages/create' className='create-orphanage'>
                <FiPlus size={32} color='#fff'/>
            </Link> 
        </div>
    );
}

export default OrphanagesMap;