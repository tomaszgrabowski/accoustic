import React from 'react';
import { BASE_URL } from '../constants';
import './AsideImage.css';

interface IProps {
    url: string;
    caption: string;
}

const AsideImage = ( props: IProps ) => {
    return (
        <aside>
            <figure>
                <img src={ `${ BASE_URL }${ props.url }` }
                     alt={ props.caption }/>
                <figcaption>{ props.caption }</figcaption>
            </figure>
        </aside>
    );
};

export default AsideImage;
