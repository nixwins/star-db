import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="logo"> <Link to="/">Star DB</Link></div>
            <nav>
                <Link to="/people">People</Link>
                <Link to="/planets">Planets</Link>
                <Link to="/starships">Starships</Link>
            </nav>
        </header>
    )
}

export default Header;