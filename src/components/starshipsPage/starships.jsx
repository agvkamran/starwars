import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import search from '../../assets/search.gif';
import starship from '../../assets/starship.png';
import { Link } from 'react-router-dom';
import './starships.css';
import { setPagesAC, setPageAC, setStarshipsAC, setFilteredAC } from '../../redux/starships/action-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFirstDataStarshipsAC } from '../../redux/saga/starshipsPage/action-types';

const Starships = () => {
    const state = useSelector((state) => state.starshipsPage);
    const dispatch = useDispatch();

    console.log(state);

    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        dispatch(getFirstDataStarshipsAC(`https://swapi.dev/api/starships/?page=${state.page}`));
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [state.page]);

    useEffect(() => {
        // props.setFiltered('');
        dispatch(setFilteredAC(''));
    }, [state.starships])

    const prevPage = () => {
        if (state.page > 1) {
            // props.setPage(state.page - 1);
            dispatch(setPageAC(state.page - 1));
            setEvt("");
        }
    }

    const nextPage = () => {
        if (state.page < state.pages) {
            // props.setPage(state.page + 1);
            dispatch(setPageAC(state.page + 1));
            setEvt("");
        }
    }

    const onChangePeopleValue = (e) => {
        setEvt(e.target.value);
    }

    const searchStarship = () => {
        // props.setFiltered(evt);
        dispatch(setFilteredAC(evt));
    }

    let result = loading
        ? (<Preloader />)
        : (
            <div className='starships_page'>
                <div className='input_elements'>
                    <input type="text" onChange={onChangePeopleValue} value={evt} className='search_input' placeholder='Search starship' />
                    <button className='button_search' onClick={searchStarship}><img src={search} alt="search" className='search' /></button>
                </div>
                <div className='starships'>
                    {state?.filtered.map((item, index) => {
                        let urlParts = item.url.split('/');
                        let id = urlParts[urlParts.length - 2];
                        return (
                            <div key={index} className='starships_block'>
                                <img src={starship} className='starships_image' alt='starships_image' />
                                <div className='text_block_starships'>
                                    <div className='starships_name'>{item.name}</div>
                                    <Link to={`/starships/${id}`} className='more_info'>MoreInfo</Link>
                                </div>
                            </div>
                        )
                    })}
                </div >
                <div className='navigation_buttons'>
                    <button className='navigation' onClick={prevPage}><i className="fas fa-arrow-left"></i></button>
                    <button className='navigation' onClick={nextPage}><i className="fas fa-arrow-right"></i></button>
                </div>
            </div >
        )
    return result;
}

export default Starships;