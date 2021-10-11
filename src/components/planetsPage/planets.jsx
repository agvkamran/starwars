import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import planetNew from '../../assets/planetNew.png'
import search from '../../assets/search.gif';
import './planets.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setPagesAC, setPlanetsAC, setFilteredAC, setPageAC } from '../../redux/planets-reducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Planets = (props) => {
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    const selector = useSelector((state) => state.planetsPage);
    const dispatch = useDispatch();

    console.log(selector);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/planets/?page=${props.page}`)
            .then((planetsData) => planetsData.json()).catch(err => console.log('swApi', err));
        props.setPlanets(response.results);
        props.setPages(response.count);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [props.page]);

    useEffect(() => {
        props.setFiltered('');
    }, [props.planets])

    const prevPage = () => {
        if (props.page > 1) {
            props.setPage(props.page - 1);
            setEvt("");
        }
    }

    const nextPage = () => {
        if (props.page < props.pages) {
            props.setPage(props.page + 1);
            setEvt("");
        }
    }

    const onChangePlanetsValue = (e) => {
        setEvt(e.target.value);
    }

    const searchPlanet = () => {
        props.setFiltered(evt);
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
                    {props.filtered?.map((item, index) => {
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

const mapStateToProps = (state) => {
    return {
        planets: state.planetsPage.planets,
        pages: state.planetsPage.pages,
        filtered: state.planetsPage.filtered,
        page: state.planetsPage.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlanets: (planets) => {
            dispatch(setPlanetsAC(planets))
        },
        setPages: (pages) => {
            dispatch(setPagesAC(pages))
        },
        setFiltered: (query) => {
            dispatch(setFilteredAC(query));
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
