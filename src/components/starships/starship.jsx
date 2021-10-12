import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import starship from '../../assets/starship.png';
import './starship.css';
import starship_block_image from '../../assets/bgcstars.png';
import { useSelector } from 'react-redux';
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
        : <div className='starship_block'>
            <div className='starship_block_bgc'>
                <img src={starship_block_image} alt="starship_image_bgc" className='starship_bgc_image' />
            </div>
            <img src={starship} className='starship_image' alt='starship_image' />
            <div className='starship_text_block'>
                <div className='starship_name'>{data.name}</div>
                <div className='starship_text'>MGLT: {data.MGLT}</div>
                <div className='starship_text'>Cargo capacity: {data.cargo_capacity}</div>
                <div className='starship_text'>Created: {data.created}</div>
                <div className='starship_text'>Crew: {data.crew}</div>
                <div className='starship_text'>Manufacturer: {data.manufacturer}</div>
                <div className='starship_text'>Max Atmosphering Speed: {data.max_atmosphering_speed}</div>
            </div>
        </div>

    return result;
}

export default Starship;