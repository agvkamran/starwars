import React, { useState } from "react";
import './container.css';
import yoda from '../../assets/yoda.png';
import robot from '../../assets/robot.png';
import firstCharacter from '../../assets/character3.png';

const sliderItems = [{
    welcomeText: 'Welcome to our page.',
    wishesText: 'On our page you can find out information about all the characters, planets star wars.',
    pleasantText: 'Pleasant viewing!',
    animationUrl: robot,
    imgUrl: yoda
},
{
    welcomeText: 'Welcome to our page.',
    wishesText: 'On our page you can find out information about all the characters, planets star wars.',
    pleasantText: 'Pleasant viewing!',
    animationUrl: robot,
    imgUrl: firstCharacter
}
];

const Container = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const setPrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(sliderItems.length - 1)
        }
        else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const setNextSlide = () => {
        if (currentSlide === sliderItems.length - 1) {
            setCurrentSlide(0)
        }
        else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    return (
        <div className='container_page'>
            <button onClick={setNextSlide} className='navigation_buttons'><i className="fas fa-chevron-circle-left"></i></button>
            {sliderItems.map((item, index) => {
                return (
                    <div>
                        {index === currentSlide && (
                            <div className='slide'>
                                <div className='container_texts'>
                                    <p className='welcome_text'>{item.welcomeText}</p>
                                    <p className='wishes_text'>{item.wishesText}</p>
                                    <p className='pleasant_text'>{item.pleasantText}</p>
                                    <img src={item.animationUrl} className='robot' alt='animation' />
                                </div>
                                <div className='yoda_wrapper'>
                                    <img src={item.imgUrl} className='yoda' alt='character_image' />
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
            <button onClick={setPrevSlide} className='navigation_buttons'><i className="fas fa-chevron-circle-right"></i></button>
        </div>
    )
}

export default Container;



