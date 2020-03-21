import React, { useEffect, useState } from 'react';
import { stripHtmlTags } from '../functions/functions';
import { BASE_URL } from '../constants';
import { ArticleContext } from '../contexts/ArticleContext';
import { IApiResponse } from '../models/IApiResponse';
import { getArticleByGuid } from '../services/data-service';

const ArticlePage = () => {
    const [article, setArticle] = useState<IApiResponse | undefined>( undefined );
    const [error, setError] = useState<string>();
    
    useEffect( () => {
        getArticleByGuid()
            .then( ( response: IApiResponse ) => {
                setArticle( response );
            } )
            .catch( err => {
                setError( err );
            } );
    }, [] );
    
    return (
        <ArticleContext.Provider value={ article }>
            { article &&
            <article>
              <header>{ article.elements.heading.value }</header>
              <time>{ article.elements.date.value }</time>
              <main>{ article.elements.body.values.map( value => stripHtmlTags( value ) ) }</main>
              <footer>{ article.elements.author.value }</footer>
              <aside>
                <figure>
                  <img src={ `${ BASE_URL }${ article.elements.mainImage.value.leadImage.url }` }
                       alt={ article.elements.mainImage.value.leadImageCaption.value }/>
                  <figcaption>{ article.elements.mainImage.value.leadImageCaption.value }</figcaption>
                </figure>
              </aside>
            </article>
            }
        </ArticleContext.Provider>
    );
};

export default ArticlePage;
