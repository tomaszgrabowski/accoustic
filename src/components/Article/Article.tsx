import React from 'react';
import ArticleBody from '../../ArticleBody/ArticleBody';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants';
import { IApiResponse } from '../../models/IApiResponse';
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
              <Header value={ props.article.elements.heading.value } headerSize={ 2 }/>
              <ArticleBody data={ props.article.elements.body.values }/>
              <aside>
                <figure>
                  <img src={ `${ BASE_URL }${ props.article.elements.mainImage.value.leadImage.url }` }
                       alt={ props.article.elements.mainImage.value.leadImageCaption.value }/>
                  <figcaption>{ props.article.elements.mainImage.value.leadImageCaption.value }</figcaption>
                </figure>
              </aside>
              <Footer author={ props.article.elements.author.value } date={ props.article.elements.date.value }/>
            </article>
            }
        </>
    );
};

export default WithLoading( Article );
