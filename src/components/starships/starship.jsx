import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import starship from '../../assets/starship.png';
import './starships.css';

const Starship = () => {
    let { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/starships/${id}`)
            .then((starshipsData) => starshipsData.json()).catch(err => console.log('swApi', err));
        setData(response);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, []);

    let result = loading
        ? <Preloader />
        : <div className='starships_block'>
            <img src={starship} className='starships_image' />
            <div className='text_block'>
                <div className='item'>{data.name}</div>
                <div>MGLT: {data.MGLT}</div>
                <div>Cargo capacity: {data.cargo_capacity}</div>
                <div>Created: {data.created}</div>
                <div>Crew: {data.crew}</div>
                <div>Manufacturer: {data.manufacturer}</div>
                <div>Max Atmosphering Speed: {data.max_atmosphering_speed}</div>
            </div>
        </div>

    return result;
}

export default Starship;