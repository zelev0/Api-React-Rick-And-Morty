import React from 'react';
import './styles/location.css';

const Location = ({info}) => {
  return (
    <article className='location'>
        <h2 className='location-name'>{info?.name}</h2>
        <ul className='location-features'>
            <li className='location-feature'><span>Tipo:</span><span>{info?.type}</span></li>
            <li className='location-feature'><span>Dimensión:</span><span>{info?.dimension}</span></li>
            <li className='location-feature'><span>Población:</span><span>{info?.residents?.length}</span></li>
        </ul>
    </article>
  )
}

export default Location