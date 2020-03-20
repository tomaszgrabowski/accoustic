import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../constants';

const Navigation = () => {
    return (
        <nav>
            <NavLink to={ ROUTES.HOME }>Główna</NavLink>
            <NavLink to={ ROUTES.ARTICLE }>Zadanie</NavLink>
            <NavLink to={ ROUTES.ABOUT_ME }>O mnie</NavLink>
        </nav>
    );
};

export default Navigation;
