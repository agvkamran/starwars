import React, { useState, useEffect } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import ch from '../../assets/ch.png';
import './people.css';

const Person = () => {
    let { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/${id}`)
            .then((peopleData) => peopleData.json()).catch(err => console.log('swApi', err));
        setData(response);
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, []);

    let result = loading
        ? <Preloader />
        : <div className='people_block'>
            <img src={ch} className='people_image' alt='people_image' />
            <div className='text_block'>
                <div>Name: {data.name}</div>
                <div>Height{data.height}</div>
                <div>Mass{data.mass}</div>
                <div>Hair_color{data.hair_color}</div>
                <div>Skin_color{data.skin_color}</div>
                <div>Birth_year{data.birth_year}</div>
                <div>Gender{data.gender}</div>
            </div>
        </div>

    return result;
}

export default Person;