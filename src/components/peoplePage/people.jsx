import React, { useEffect, useState } from 'react';
import './people.css';
import Preloader from '../preloader/preloader';
import search from '../../assets/search.gif';
import ch from '../../assets/ch.png';
import { Link } from 'react-router-dom';
import { setFilteredAC, setPageAC } from '../../redux/people/action-types';
import { getFirstDataPeopleAC } from '../../redux/saga/peoplePage/action-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const People = () => {
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    const state = useSelector((state) => state.dataPage);
    const dispatch = useDispatch();

    const swApi = async () => {
        setLoading(true);
        dispatch(getFirstDataPeopleAC(`https://swapi.dev/api/people/?page=${state.page}`));
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [state.page]);

    useEffect(() => {
        dispatch(setFilteredAC(''));
    }, [state.people])

    const prevPage = () => {
        if (state.page > 1) {
            dispatch(setPageAC(state.page - 1));
            setEvt("");
        }
    }

    const nextPage = () => {
        if (state.page < state.pages) {
            dispatch(setPageAC(state.page + 1))
            setEvt("");
        }
    }

    const onChangePeopleValue = (e) => {
        setEvt(e.target.value);
    }

    const searchPeople = () => {
        dispatch(setFilteredAC(evt))
    }

    let result = loading
        ? (<Preloader />)
        : (
            <div className='people_page'>
                <div className='input_elements'>
                    <input type="text" onChange={onChangePeopleValue} value={evt} className='search_input' placeholder='Search character' />
                    <button className='button_search' onClick={searchPeople}><img src={search} alt="search" className='search' /></button>
                </div>
                <div className='people'>
                    {state.filtered?.map((item, index) => {
                        let urlParts = item.url.split('/');
                        let id = urlParts[urlParts.length - 2];
                        return (
                            <div key={index} className='people_block'>
                                <img src={ch} className='people_image' alt='people_image' />
                                <div key={index} className='text_block_people'>
                                    <div className='people_name'>Name: {item.name}</div>
                                    <Link to={`/people/${id}`} className='more_info'>MoreInfo</Link>
                                </div>
                            </div>
                        )
                    })}
                </div >
                <div className='navigation_buttons'>
                    <button className='navigation' onClick={prevPage}><i className="fas fa-arrow-left"></i></button>
                    <button className='navigation' onClick={nextPage}><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    return result;
}

export default People;