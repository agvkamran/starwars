import React from "react";
import './container.css';
import yoda from '../../assets/yoda.png';
import robot from '../../assets/robot.png';

const Container = () => {
    return (
        <div className='container_page'>
            <div className='container_texts'>
                <p className='welcome_text'>Welcome to our page.</p>
                <p className='wishes_text'>On our page you can find out information about all the characters, planets star wars.</p>
                <p className='pleasant_text'>Pleasant viewing!</p>
                <img src={robot} alt="robot" className='robot' />
            </div>
            <img src={yoda} alt="yoda_image" className='yoda' />
        </div>
    )
}

export default Container;