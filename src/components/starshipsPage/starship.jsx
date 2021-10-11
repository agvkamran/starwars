import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import starship from '../../assets/starship.png';
import './starship.css';
import starship_block_image from '../../assets/bgcstars.png';
import { connect } from 'react-redux';
import { setStarshipAC } from '../../redux/starships-reducer';

const Starship = (props) => {
    let { id } = useParams();

    // const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/starships/${id}`)
            .then((starshipsData) => starshipsData.json()).catch(err => console.log('swApi', err));
        // setData(response);
        props.setStarship(response);
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
                <div className='starship_name'>{props.starship.name}</div>
                <div className='starship_text'>MGLT: {props.starship.MGLT}</div>
                <div className='starship_text'>Cargo capacity: {props.starship.cargo_capacity}</div>
                <div className='starship_text'>Created: {props.starship.created}</div>
                <div className='starship_text'>Crew: {props.starship.crew}</div>
                <div className='starship_text'>Manufacturer: {props.starship.manufacturer}</div>
                <div className='starship_text'>Max Atmosphering Speed: {props.starship.max_atmosphering_speed}</div>
            </div>
        </div>

    return result;
}

const mapStateToProps = (state) => {
    return {
        starship: state.starshipsPage.starship
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStarship: (starship) => {
            dispatch(setStarshipAC(starship))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Starship);
