import React from 'react';
import Section from '../Section/Section';
import './ArticleBody.css'

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
