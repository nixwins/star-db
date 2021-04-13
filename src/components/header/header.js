import React from 'react';
import './header.css'
const Header = ()=>{
    return(
            <header>
                <div className="logo">Star DB</div>
                <nav>
                    <a href="/people">People</a>
                    <a href="/planets">Planets</a>
                    <a href="/starships">Starships</a>
                </nav>
            </header>
    )
}

export default Header;