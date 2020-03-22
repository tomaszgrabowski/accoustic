import React from 'react';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants';
import { IApiResponse } from '../../models/IApiResponse';
import Section from '../Section/Section';
import WithLoading from '../WithLoading/WithLoading';
import './Article.css';

interface IProps {
    article: IApiResponse | undefined
}

const Article = ( props: IProps ) => {
    return (
        <>
            { props.article &&
            <article>
              <Header value={props.article.elements.heading.value} headerSize={2}/>
              <header>
                <h2>
                    {  }
                </h2>
              </header>
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
