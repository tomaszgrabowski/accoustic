import React from 'react';
import Date from '../Date/Date';
import './Footer.css';

interface IProps {
    author: string;
    date: string;
}

const Footer = ( props: IProps ) => {
    return (
        <footer>
            <span>{ props.author }</span>
            <Date date={ props.date } format={ 'DD-mm-YYYY HH:mm' }/>
        </footer>
    );
};

export default Footer;
