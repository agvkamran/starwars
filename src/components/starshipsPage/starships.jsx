import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import search from '../../assets/search.gif';
import starship from '../../assets/starship.png';
import { Link } from 'react-router-dom';
import './starships.css';
import { connect } from 'react-redux';
import { setPagesAC, setPageAC, setStarshipsAC, setFilteredAC } from '../../redux/starships-reducer';


const Starships = (props) => {
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/?page=${props.page}`)
            .then((starshipsData) => starshipsData.json()).catch(e => console.log('swApi', e))
        props.setStarships(response.results);
        props.setPages(response.count);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [props.page]);

    useEffect(() => {
        props.setFiltered('');
    }, [props.starships])

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

    const onChangePeopleValue = (e) => {
        setEvt(e.target.value);
    }

    const searchStarship = () => {
        props.setFiltered(evt);
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
                    {props?.filtered.map((item, index) => {
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

const mapStateToProps = (state) => {
    return {
        starships: state.starshipsPage.starships,
        pages: state.starshipsPage.pages,
        filtered: state.starshipsPage.filtered,
        page: state.starshipsPage.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStarships: (starships) => {
            dispatch(setStarshipsAC(starships))
        },
        setPages: (pages) => {
            dispatch(setPagesAC(pages))
        },
        setFiltered: (query) => {
            dispatch(setFilteredAC(query));
        },
        setPage: (page) => {
            dispatch(setPageAC(page));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Starships);
