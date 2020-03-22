import React from 'react';
import { HeaderSize, HeaderType } from '../../models/Types';
import './Header.css';

interface IProps {
    value: string;
    headerSize: HeaderSize;
    className?: HeaderType;
}

const Header = ( props: IProps ) => {
    const headerTag = React.createElement( `h${ props.headerSize }`, {}, props.value );
    return React.createElement( `header`, { className: props.className }, headerTag );
};

export default Header;
