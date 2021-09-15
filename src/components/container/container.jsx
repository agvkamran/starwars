import React, { useState } from "react";
import './container.css';
import yoda from '../../assets/yoda.png';
import robot from '../../assets/robot.png';
import firstCharacter from '../../assets/character1.png';
import secondCharacter from '../../assets/character2.png';

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
},
{
    welcomeText: 'Welcome to our page.',
    wishesText: 'On our page you can find out information about all the characters, planets star wars.',
    pleasantText: 'Pleasant viewing!',
    animationUrl: robot,
    imgUrl: secondCharacter
},
];

const Container = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderItemsLength = sliderItems.length;

    const setPrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(sliderItemsLength - 1)
        }
        else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const setNextSlide = () => {
        if (currentSlide === sliderItemsLength - 1) {
            setCurrentSlide(0)
        }
        else {
            setCurrentSlide(currentSlide + 1)
        }
    }

        console.log(currentSlide);

        return (
            <div className='container_page'>
                {sliderItems.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.welcomeText}
                        </div>
                    )
                })}
                <button onClick={setNextSlide}>Next</button>
                <button onClick={setPrevSlide}>Prev</button>
            </div>
        )
    }

    export default Container;








    {/* <div className='container_page'>
<p className='slider_navigation'>Prev</p>
<div className='container_texts'>
    <p className='welcome_text'>Welcome to our page.</p>
    <p className='wishes_text'>On our page you can find out information about all the characters, planets star wars.</p>
    <p className='pleasant_text'>Pleasant viewing!</p>
    <img src={robot} alt="robot" className='robot' />
</div>
<img src={yoda} alt="yoda_image" className='yoda' />
<p className='slider_navigation'>Next</p>
</div> */}