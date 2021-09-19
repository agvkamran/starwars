import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import search from '../../assets/search.gif';
import ch from '../../assets/ch.png';
import './people.css'

const People = () => {
    const [data, setData] = useState({ results: [], pages: 0 });
    const [filtered, setFiltered] = useState([])
    const [page, setPage] = useState(1);
    const [evt, setEvt] = useState('');
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
            .then((peopleData) => peopleData.json()).catch(e => console.log('swApi', e))
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
        }
    }

    const nextPage = () => {
        if (page < data.pages) {
            setPage(page + 1);
        }
    }

    const onChangePeopleValue = (e) => {
        setEvt(e.target.value);
    }

    const searchPeople = () => {
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
            <div className='people_page'>
                <div className='input_elements'>
                    <input type="text" onChange={onChangePeopleValue} value={evt} className='search_input' />
                    <button className='button_search' onClick={searchPeople}><img src={search} alt="search" className='search' /></button>
                </div>
                <div className='people'>
                    {filtered.map((item, index) => {
                        return (
                            <div key={index} className='people_block'>
                                <img src={ch} className='people_image' />
                                <div key={index} className='text_block'>
                                    <div>Name: {item.name}</div>
                                    <div>Height{item.height}</div>
                                    <div>Mass{item.mass}</div>
                                    <div>Hair_color{item.hair_color}</div>
                                    <div>Skin_color{item.skin_color}</div>
                                    <div>Birth_year{item.birth_year}</div>
                                    <div>Gender{item.gender}</div>
                                </div>
                            </div>
                        )
                    })}
            </div >
            <div className='navigation_buttons'>
                    <button className='navigation' onClick={prevPage}><i class="fas fa-arrow-left"></i></button>
                    <button className='navigation' onClick={nextPage}><i class="fas fa-arrow-right"></i></button>
                </div>
            </div >
        )
return result;
}

export default People;
