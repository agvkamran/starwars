import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import planetNew from '../../assets/planetNew.png';
import planet_bgc_image from '../../assets/bgcstars.png';
import './planet.css';
import { connect } from 'react-redux';
import { setPlanetAC } from '../../redux/planets-reducer';

const Planet = (props) => {
    let { id } = useParams();

    // const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/planets/${id}`)
            .then((planetsData) => planetsData.json()).catch(err => console.log('swApi', err));
        // setData(response);
        props.setPlanet(response);
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
                <div className='planet_name'>{props.planet.name}</div>
                <div className='planet_text'>Rotation period: {props.planet.rotation_period}</div>
                <div className='planet_text'>Orbital period: {props.planet.orbital_period}</div>
                <div className='planet_text'>Diameter: {props.planet.diameter}</div>
                <div className='planet_text'>Climate: {props.planet.climate}</div>
                <div className='planet_text'>Gravity: {props.planet.gravity}</div>
            </div>
        </div>

    return result;
}

const mapStateToProps = (state) => {
    return {
        planet: state.planetsPage.planet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlanet: (planet) => {
            dispatch(setPlanetAC(planet));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
// export default Planet;