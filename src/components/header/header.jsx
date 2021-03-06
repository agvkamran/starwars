import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/swyellow.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className='header_logo' />
            <ul className='nav_list'>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/people' className='link'><li>People</li></Link>
                <Link to='/planets' className='link'><li>Planets</li></Link>
                <Link to='/starships' className='link'><li>Starships</li></Link>
            </ul>
        </header>
    )
}

export default Header;