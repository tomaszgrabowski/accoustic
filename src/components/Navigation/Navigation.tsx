import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='nav'>
            <NavLink className='link' activeClassName='link-active' to={ ROUTES.HOME }>Główna</NavLink>
            <NavLink className='link' activeClassName='link-active' to={ ROUTES.ARTICLE }>Zadanie</NavLink>
            <NavLink className='link' activeClassName='link-active' to={ ROUTES.ABOUT_ME }>O mnie</NavLink>
        </nav>
    );
};

export default Navigation;
