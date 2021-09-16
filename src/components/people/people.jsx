import React, { useEffect, useState } from 'react';
import './people.css'

const People = () => {
    const [people, setPeople] = useState({results: []});
    
    const swApi = async () => {
        const response = await fetch('https://swapi.dev/api/people')
          .then((peopleData) => peopleData.json()).catch(e => console.log('swApi', e))
        setPeople(response);
      }

    useEffect(() => {
        console.log('people useEffect', people)
        swApi();
    }, []);

    return (
        people?.results?.map((item) => {
            return (
                <div className='item'>{item.name}</div>
            )
        })
    )

}

export default People;