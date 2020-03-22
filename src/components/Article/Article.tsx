import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { IApiResponse } from '../../models/IApiResponse';
import ArticleBody from '../ArticleBody/ArticleBody';
import AsideImage from '../AsideImage/AsideImage';
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
              <Header value={ props.article.elements.heading.value } headerSize={ 2 } className={ 'article-header' }/>
              <div>
                <ArticleBody data={ props.article.elements.body.values }/>
                <AsideImage
                  caption={ props.article.elements.mainImage.value.leadImageCaption.value }
                  url={ props.article.elements.mainImage.value.leadImage.url }/>
              </div>
              <Footer author={ props.article.elements.author.value } date={ props.article.elements.date.value }/>
            </article>
            }
        </>
    );
};

export default WithLoading( Article );
