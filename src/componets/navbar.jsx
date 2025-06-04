import React from 'react';
import '../NavBar.scss';
import { Link } from 'react-router';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="header">
                <Link to={`/`}>
                    <h1>Home</h1>
                </Link>
                <h2>Popular Cities</h2>
            </div>
            <ul className="nav-list">
                <Link to={`/vejr/London`}>
                    <li className="nav-item"><p>London</p></li>
                </Link>
                <Link to={`/vejr/Tokyo`}>
                    <li className="nav-item"><p>Tokyo</p></li>
                </Link>
                <Link to={`/vejr/sao paulo`}>
                    <li className="nav-item"><p>Sao Paulo</p></li>
                </Link>
                <Link to={`/vejr/Copenhagen`}>
                    <li className="nav-item"><p>Copenhagen</p></li>
                </Link>
                <Link to={`/vejr/Malmo`}>
                    <li className="nav-item"><p>Malmo</p></li>
                </Link>
                <Link to={`/vejr/new york`}>
                    <li className="nav-item"><p>New York</p></li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;


