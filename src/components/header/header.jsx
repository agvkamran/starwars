import React from 'react';
import './header.css';
import search from '../../assets/search.gif';
import { Link } from 'react-router-dom';
import logo from '../../assets/swyellow.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className='header_logo' />
            <div className='input_elements'>
                <input type="text" className='search_input' placeholder='Search' />
                <button class='button_search'><img src={search} alt="search" className='search' /></button>
            </div>
            <ul className='nav_list'>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/people' className='link'><li>People</li></Link>
                <Link to='/planets' className='link'><li>Planets</li></Link>
                <Link to='/films' className='link'><li>Films</li></Link>
                <Link to='/species' className='link'><li>Species</li></Link>
                <Link to='/vehicles' className='link'><li>Vehicles</li></Link>
                <Link to='/starships' className='link'><li>Starships</li></Link>
                <Link to='/about' className='link'><li>About</li></Link>
            </ul>
            <div className='burger'>
                <i class="fas fa-bars"></i>
                {/* <img src={lightsaber} alt="lightsaber_burger" className='lightsaber'/> */}
                {/* <img src={lightsaber} alt="lightsaber_burger" className='lightsaber'/> */}
                {/* <img src={lightsaber} alt="lightsaber_burger" className='lightsaber'/> */}
            </div>
        </header>
    )
}

export default Header;