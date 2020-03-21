import React from 'react';

interface IProps {
    data: string;
}

const Section = ( props: IProps ) => {
    return (
        <section dangerouslySetInnerHTML={ { __html: props.data } }/>
    );
};

export default Section;
