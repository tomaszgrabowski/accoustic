import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='nav'>
            <NavLink className='link' exact activeClassName='link-active' to={ ROUTES.HOME }>Home</NavLink>
            <NavLink className='link' exact activeClassName='link-active' to={ ROUTES.ARTICLE }>Task</NavLink>
            <NavLink className='link' exact activeClassName='link-active' to={ ROUTES.ABOUT_ME }>About me</NavLink>
        </nav>
    );
};

export default Navigation;
