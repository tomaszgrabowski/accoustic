import React from 'react';
import Section from '../components/Section';
import WithLoading from '../components/WithLoading';
import { BASE_URL } from '../constants';
import { IApiResponse } from '../models/IApiResponse';

interface IProps {
    article: IApiResponse | undefined
}

const Article = ( props: IProps ) => {
    return (
        <>
            { props.article &&
            <article>
              <header>{ props.article.elements.heading.value }</header>
              <time>{ props.article.elements.date.value }</time>
                { props.article.elements.body.values.map( value => <Section key={ Math.random() } data={ value }/> ) }
              <footer>{ props.article.elements.author.value }</footer>
              <aside>
                <figure>
                  <img src={ `${ BASE_URL }${ props.article.elements.mainImage.value.leadImage.url }` }
                       alt={ props.article.elements.mainImage.value.leadImageCaption.value }/>
                  <figcaption>{ props.article.elements.mainImage.value.leadImageCaption.value }</figcaption>
                </figure>
              </aside>
              }
            </article>
            }
        </>
    );
};

export default WithLoading( Article );
