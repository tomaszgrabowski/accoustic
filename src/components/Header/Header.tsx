import React from 'react';
import { HeaderSize } from '../../models/Types';
import './Header.css';

interface IProps {
    value: string;
    headerSize: HeaderSize;
    className?: string;
}

const Header = ( props: IProps ) => {
    const headerTag = React.createElement( `h${ props.headerSize }`, {}, props.value );
    return React.createElement( `header`, { class: props.className }, headerTag );
};

export default Header;
