import React from 'react';
import './Menustyle.css';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark primary-color">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="basicExampleNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" style={{ padding: '8px' }}>
                            <Link to="home" className="linkStyle" style={{ color: '#fff' }}>Home</Link>
                        </li>
                        <li class="nav-item" style={{ padding: '8px' }}>
                            <Link to="Analytics" className="linkStyle" style={{ color: '#fff' }}>Analytics</Link>
                        </li>
                        <li class="nav-item" style={{ padding: '8px' }}>
                            <Link to="customerlist" className="linkStyle" style={{ color: '#fff' }}>CustomerList</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">MY PROFILE</a>
                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="login" data-toggle="modal" data-target="#myModal" class="dropdown-item"style={{ color: '#000' }}>LOGIN</Link>
                                <a class="dropdown-item" href="#">MY ORDER</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <div class="md-form my-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                </div>
            </nav>               
        </div>
    )
}

export default Menu;