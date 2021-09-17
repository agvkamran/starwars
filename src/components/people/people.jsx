import React, { useEffect, useState } from 'react';
import Preloader from '../../components/preloader/preloader';
import './people.css'

const People = () => {
    const [people, setPeople] = useState({ results: [], urlPage: [] });
    const [isPreloader, setPreloader] = useState(true);

    const swApi = async (pageNumber) => {
        const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
            .then((peopleData) => peopleData.json()).catch(e => console.log('swApi', e))
        console.log(response);
        setPeople({ ...people, results: [...people.results, ...response.results] });
    }

    console.log(people);

    useEffect(() => {
        swApi(1);
    }, []);

    const loadMore = () => {
        swApi(2)
    }

    return (
        people?.results?.map((item) => {
            return (
                <div>
                    <button onClick={loadMore}>LoadMore</button>
                    <div className='item'>{item.name}</div>
                </div>
            )
        })
    )

}


export default People;