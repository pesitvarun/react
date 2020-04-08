import React from 'react';
import './Menustyle.css';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" style={{ padding: '8px' }}>
                            <Link to="home" className="linkStyle" style={{ color: '#fff' }}>Home</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '8px' }}>
                            <Link to="Analytics" className="linkStyle" style={{ color: '#fff' }}>Analytics</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '8px' }}>
                            <Link to="customerlist" className="linkStyle" style={{ color: '#fff' }}>CustomerList</Link>
                        </li>
                        <li className="nav-item" style={{ padding: '8px' }}>
                            <Link to="Test" className="linkStyle" style={{ color: '#fff' }}>Test</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">MY PROFILE</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="login" data-toggle="modal" data-target="#myModal" className="dropdown-item"style={{ color: '#000' }}>LOGIN</Link>
                                <a className="dropdown-item" href="#">MY ORDER</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                </div>
            </nav>               
        </div>
    )
}

export default Menu;