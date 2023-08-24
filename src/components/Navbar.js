import React from 'react';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='nav-itme'>
                    <NavLink to="">Home</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to="movies">Movies</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to="users">Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;