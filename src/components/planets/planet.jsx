import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import planet from '../../assets/planet.png';
import './planets.css';

const Planet = () => {
    let { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/planets/${id}`)
            .then((planetsData) => planetsData.json()).catch(err => console.log('swApi', err));
        setData(response);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, []);

    let result = loading
        ? <Preloader />
        : <div className='planets_block'>
            <img src={planet} alt="planet" className='planets_image' />
            <div className='text_block'>
                <div className='item'>{data.name}</div>
                <div>Rotation period: {data.rotation_period}</div>
                <div>Orbital period: {data.orbital_period}</div>
                <div>Diameter: {data.diameter}</div>
                <div>Climate: {data.climate}</div>
                <div>Gravity: {data.gravity}</div>
                <div>Residents: {data.residents.map(item => <div><a href={item}>{item}</a></div>)}</div>
            </div>
        </div>

    return result;
}

export default Planet;