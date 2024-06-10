import React, { useEffect } from 'react';
import useFetch from '../hooks/useLocation';
import './styles/residentInfo.css';

const ResidentInfo = ({info}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
      getResident(info);
    }, []);
    
  return (
    <article className='ResidentInfo'>
        <figure className='ResidentInfo__img'>
            <img src={resident?.image} alt="character image" />
            <figcaption className='ResidentInfo__info'>
                <div className={`ResidentInfo__state ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h2 className='ResidentInfo__name'>{resident?.name}</h2>
        <hr className='ResidentInfo__separate' />
        <ul className='ResidentInfo__list'>
            <li className='ResidentInfo__item'><span>RAZA</span><span>{resident?.species}</span></li>
            <li className='ResidentInfo__item'><span>ORIGEN</span><span>{resident?.origin.name}</span></li>
            <li className='ResidentInfo__item'><span>APARICIÓN EN EPISODIOS</span><span>{resident?.episode.length}</span></li>
        </ul>
    </article>
  )
}

export default ResidentInfo