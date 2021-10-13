import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import './starship.css';
import starship_block_image from '../../assets/bgcstars.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import starshipImg from '../../assets/starship.png';
import { getInfoStarshipAC } from '../../redux/saga/starshipsPage/action-types';

const Starship = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const starship = useSelector((state) => state.starshipsPage.starship);
    const dispatch = useDispatch();

    const swApi = async () => {
        setLoading(true);  
        dispatch(getInfoStarshipAC(`https://swapi.dev/api/starships/${id}`));
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
            <img src={starshipImg} className='starship_image' alt='starship_image' />
            <div className='starship_text_block'>
                <div className='starship_name'>{starship?.name}</div>
                <div className='starship_text'>MGLT: {starship?.MGLT}</div>
                <div className='starship_text'>Cargo capacity: {starship?.cargo_capacity}</div>
                <div className='starship_text'>Created: {starship?.created}</div>
                <div className='starship_text'>Crew: {starship?.crew}</div>
                <div className='starship_text'>Manufacturer: {starship?.manufacturer}</div>
                <div className='starship_text'>Max Atmosphering Speed: {starship?.max_atmosphering_speed}</div>
            </div>
        </div>

    return result;
}

export default Starship;