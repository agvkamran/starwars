// import React, { useState, useEffect } from 'react';
// import Preloader from '../preloader/preloader';
// import { useParams } from "react-router-dom";
// import ch from '../../assets/ch.png';
// import person_block_image from '../../assets/bgcstars.png';

// import './person.css';

// const Person = () => {
//     let { id } = useParams();

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const swApi = async () => {
//         setLoading(true);
//         const response = await fetch(`https://swapi.dev/api/people/${id}`)
//             .then((peopleData) => peopleData.json()).catch(err => console.log('swApi', err));
//         setData(response);
//         setLoading(false);
//     }

//     useEffect(() => {
//         swApi();
//     }, []);

//     let result = loading
//         ? <Preloader />
//         : <div className='person_block'>
//             <div className='person_block_bgc'>
//                 <img src={person_block_image} alt="person_image_bgc" className='person_bgc_image' />
//             </div>
//             <img src={ch} className='person_image' alt='people_image' />
//             <div className='person_text_block'>
//                 <div className='person_name'>Name: {data.name}</div>
//                 <div className='person_text'>Height: {data.height}</div>
//                 <div className='person_text'>Mass: {data.mass}</div>
//                 <div className='person_text'>Hair color: {data.hair_color}</div>
//                 <div className='person_text'>Skin color: {data.skin_color}</div>
//                 <div className='person_text'>Birth year: {data.birth_year}</div>
//                 <div className='person_text'>Gender: {data.gender}</div>
//             </div>
//         </div>

//     return result;
// }

// export default Person;