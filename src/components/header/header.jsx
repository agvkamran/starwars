import React from 'react';
import './header.css';
import logo from '../../assets/swyellow.svg';
import search from '../../assets/search.gif';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className='header_logo' />
            <div className='input_elements'>
                <input type="text" className='search_input' placeholder='Search' />
                <button class='button_search'><img src={search} alt="search" className='search' /></button>
            </div>
            <ul className='nav_list'>
                <li>Home</li>
                <li>People</li>
                <li>Planets</li>
                <li>Films</li>
                <li>Species</li>
                <li>Vehicles</li>
                <li>Starships</li>
                <li>About</li>
            </ul>
        </header>
    )
}

export default Header;