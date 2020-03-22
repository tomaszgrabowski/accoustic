import React from 'react';
import { HeaderSize } from '../../models/Types';
import './Header.css';

interface IProps {
    value: string;
    headerSize: HeaderSize;
    className?: string;
}

const Header = ( props: IProps ) => {
    return React.createElement( `h${ props.headerSize }`, {class: props.className}, props.value );
};

export default Header;
