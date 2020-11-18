import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
import './Navbar.css'


const Navbar = ({ handleChange, searchTerm, favoritesCount }) => {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <Link to='/'>
                    <div className='logo'>
                        <img src={Logo} alt='logo-img' />
                    </div>
                </Link>

                <div className='search-bar'>
                    <input type='text' placeholder='Search' onChange={e => handleChange(e)} value={searchTerm} />
                </div>
            </div>
            <div className='favorites'>
                <Link to='/favorites'>Favorites </Link>
                <span className='favorites__count'>{favoritesCount}</span>
            </div>

        </div>

    )
}

export default Navbar
