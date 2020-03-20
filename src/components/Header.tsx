import React from 'react';
import Navigation from './Navigation';

interface IProps {
    appName: string;
}

const Header = ( props: IProps ) => {
    return (
        <header>
            <h1>{ props.appName }</h1>
            <Navigation/>
        </header>
    );
};

export default Header;
