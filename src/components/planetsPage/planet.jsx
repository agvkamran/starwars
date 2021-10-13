import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import planetNew from '../../assets/planetNew.png';
import planet_bgc_image from '../../assets/bgcstars.png';
import './planet.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getInfoPlanetAC } from '../../redux/saga/planetsPage/action-types';

const Planet = () => {
    let { id } = useParams();
    const planet = useSelector((state) => state.planetsPage.planet);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        dispatch(getInfoPlanetAC(`https://swapi.dev/api/planets/${id}`));
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
                <div className='planet_name'>{planet?.name}</div>
                <div className='planet_text'>Rotation period: {planet?.rotation_period}</div>
                <div className='planet_text'>Orbital period: {planet?.orbital_period}</div>
                <div className='planet_text'>Diameter: {planet?.diameter}</div>
                <div className='planet_text'>Climate: {planet?.climate}</div>
                <div className='planet_text'>Gravity: {planet?.gravity}</div> 
            </div>
        </div>

    return result;
}

export default Planet;