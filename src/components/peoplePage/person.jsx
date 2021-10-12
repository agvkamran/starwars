import React, { useState, useEffect } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import ch from '../../assets/ch.png';
import person_block_image from '../../assets/bgcstars.png';
import './person.css';
// import { setPersonAC } from '../../redux/people/action-types';
import { getInfoPersonAC } from '../../redux/saga/peoplePage/action-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Person = () => {
    const person = useSelector((state) => state.dataPage.person);
    const dispatch = useDispatch();

    let { id } = useParams();
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        // const response = await fetch(`https://swapi.dev/api/people/${id}`)
        //     .then((peopleData) => peopleData.json()).catch(err => console.log('swApi', err));
        dispatch(getInfoPersonAC(`https://swapi.dev/api/people/${id}`));
        // props.setPerson(response);
        // dispatch(setPersonAC(response));
        setLoading(false);
    }

    useEffect(() => {
        swApi();
    }, []);

    let result = loading
        ? <Preloader />
        : <div className='person_block'>
            <div className='person_block_bgc'>
                <img src={person_block_image} alt="person_image_bgc" className='person_bgc_image' />
            </div>
            <img src={ch} className='person_image' alt='people_image' />
            <div className='person_text_block'>
                <div className='person_name'>Name: {person?.name}</div>
                <div className='person_text'>Height: {person?.height}</div>
                <div className='person_text'>Mass: {person?.mass}</div>
                <div className='person_text'>Hair color: {person?.hair_color}</div>
                <div className='person_text'>Skin color: {person?.skin_color}</div>
                <div className='person_text'>Birth year: {person?.birth_year}</div>
                <div className='person_text'>Gender: {person?.gender}</div>
            </div>
        </div>

    return result;
}

export default Person;