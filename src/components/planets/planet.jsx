import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import planetNew from '../../assets/planetNew.png';
import planet_bgc_image from '../../assets/bgcstars.png';
import './planet.css';

const Planet = () => {
    let { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/planets/${id}`)
            .then((planetsData) => planetsData.json()).catch(err => console.log('swApi', err));
            console.log(data)
        setData(response);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, []);

    let result = loading
        ? <Preloader />
        : <div className='planet_block'>
            <div className='planet_bgc_image'><img src={planet_bgc_image} alt="planet_bgc_image" /></div>
            <img src={planetNew} alt="planet" className='planet_image' />
            <div className='planet_text_block'>
                <div className='planet_name'>{data.name}</div>
                <div className='planet_text'>Rotation period: {data.rotation_period}</div>
                <div className='planet_text'>Orbital period: {data.orbital_period}</div>
                <div className='planet_text'>Diameter: {data.diameter}</div>
                <div className='planet_text'>Climate: {data.climate}</div>
                <div className='planet_text'>Gravity: {data.gravity}</div>
            </div>
        </div>

    return result;
}

export default Planet;