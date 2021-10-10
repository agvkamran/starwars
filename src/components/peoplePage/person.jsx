import React, { useState, useEffect } from 'react';
import Preloader from '../preloader/preloader';
import { useParams } from "react-router-dom";
import ch from '../../assets/ch.png';
import person_block_image from '../../assets/bgcstars.png';
import './person.css';
import { connect } from 'react-redux';
import { setPersonAC } from '../../redux/reducer';


const Person = (props) => {
    console.log(props.person);
    let { id } = useParams();
    const [loading, setLoading] = useState(true);

    const swApi = async () => {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/${id}`)
            .then((peopleData) => peopleData.json()).catch(err => console.log('swApi', err));
        props.setPerson(response);
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
                <div className='person_name'>Name: {props.person.name}</div>
                <div className='person_text'>Height: {props.person.height}</div>
                <div className='person_text'>Mass: {props.person.mass}</div>
                <div className='person_text'>Hair color: {props.person.hair_color}</div>
                <div className='person_text'>Skin color: {props.person.skin_color}</div>
                <div className='person_text'>Birth year: {props.person.birth_year}</div>
                <div className='person_text'>Gender: {props.person.gender}</div>
            </div>
        </div>

    return result;
}

const mapStateToProps = (state) => {
    return {
        person: state.dataPage.person
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPerson: (person) => {
            dispatch(setPersonAC(person))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
