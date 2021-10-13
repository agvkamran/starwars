import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import planetNew from '../../assets/planetNew.png'
import search from '../../assets/search.gif';
import './planets.css';
import { Link } from "react-router-dom";
import { setFilteredAC, setPageAC } from '../../redux/planets/action-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFirstDataPlanetsAC } from '../../redux/saga/planetsPage/action-types';

const Planets = () => {
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);
    const state = useSelector((state) => state.planetsPage);
    const dispatch = useDispatch();
    
    const swApi = async () => {
        setLoading(true);
        dispatch(getFirstDataPlanetsAC(`https://swapi.dev/api/planets/?page=${state.page}`));
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [state.page]);

    useEffect(() => {
        dispatch(setFilteredAC(''));
    }, [state.planets])

    const prevPage = () => {
        if (state.page > 1) {
            dispatch(setPageAC(state.page - 1));
            setEvt("");
        }
    }

    const nextPage = () => {
        if (state.page < state.pages) {
            dispatch(setPageAC(state.page + 1));
            setEvt("");
        }
    }

    const onChangePlanetsValue = (e) => {
        setEvt(e.target.value);
    }

    const searchPlanet = () => {
        dispatch(setFilteredAC(evt));
    }

    let result = loading
        ? (<Preloader />)
        : (
            <div className='planets_page'>
                <div className='input_elements'>
                    <input type="text" onChange={onChangePlanetsValue} value={evt} className='search_input' placeholder='Search planet' />
                    <button className='button_search' onClick={searchPlanet}><img src={search} alt="search" className='search' /></button>
                </div>
                <div className='planets'>
                    {state.filtered?.map((item, index) => {
                        let urlParts = item.url.split('/');
                        let id = urlParts[urlParts.length - 2];
                        return (
                            <div key={index} className='planets_block'>
                                <img src={planetNew} alt="planet" className='planets_image' />
                                <div className='text_block_planets'>
                                    <div className='planets_name'>{item.name}</div>
                                    <Link to={`/planets/${id}`} className='more_info'>More Info</Link>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                    </div>
                </div>
                <div className='navigation_buttons'>
                    <button className='navigation' onClick={prevPage}><i className="fas fa-arrow-left"></i></button>
                    <button className='navigation' onClick={nextPage}><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        );
    return result;
}

export default Planets;