import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import planet from '../../assets/planet.png'
import search from '../../assets/search.gif';
import './planets.css';

const Planets = () => {
    const [data, setData] = useState({ results: [], pages: 0 });
    const [filtered, setFiltered] = useState([])
    const [page, setPage] = useState(1);
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
            .then((peopleData) => peopleData.json()).catch(err => console.log('swApi', err));
        setData({ results: response.results, pages: Math.ceil(response.count / 10) });
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, [page]);

    useEffect(() => {
        setFiltered(data.results);
    }, [data])

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            setEvt("");
        }
    }

    const nextPage = () => {
        if (page < data.pages) {
            setPage(page + 1);
            setEvt("");
        }
    }

    const onChangePlanetsValue = (e) => {
        setEvt(e.target.value);
    }

    const searchPlanet = () => {
        let filtered = data.results.filter((val) => {
            if (val.name.toLowerCase() === evt.toLowerCase()) {
                return true;
            }

            return false;
        });
        setFiltered(filtered);
    }

    let result = loading
        ? (<Preloader />)
        : (
            <div className='planets_page'>
                <div className='input_elements'>
                    <input type="text" onChange={onChangePlanetsValue} value={evt} className='search_input' />
                    <button className='button_search' onClick={searchPlanet}><img src={search} alt="search" className='search' /></button>
                </div>
                <div className='planets'>
                    {filtered.map((item, index) => {
                        return (
                            <div key={index} className='planets_block'>
                                <img src={planet} alt="planet" className='planets_image' />
                                <div className='text_block'>
                                    <div className='item'>{item.name}</div>
                                    <div>Rotation period: {item.rotation_period}</div>
                                    <div>Orbital period: {item.orbital_period}</div>
                                    <div>Diameter: {item.diameter}</div>
                                    <div>Climate: {item.climate}</div>
                                    <div>Gravity: {item.gravity}</div>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                    </div>
                </div>
                <div className='navigation_buttons'>
                    <button className='navigation' onClick={prevPage}><i class="fas fa-arrow-left"></i></button>
                    <button className='navigation' onClick={nextPage}><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        );

    return result;
}

export default Planets;