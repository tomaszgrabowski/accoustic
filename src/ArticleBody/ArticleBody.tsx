import React from 'react';
import Section from '../components/Section/Section';

interface IProps {
    data: string[]
}

const ArticleBody = ( props: IProps ) => {
    return (
        <main>
            { props.data.map( value => <Section key={ Math.random() } data={ value }/> ) }
        </main>
    );
};

export default ArticleBody;
