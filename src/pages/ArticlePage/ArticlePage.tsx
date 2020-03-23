import React, { useEffect, useState } from 'react';
import Article from '../../components/Article/Article';
import { ArticleContext } from '../../contexts/ArticleContext';
import { IApiResponse } from '../../models/IApiResponse';
import { getArticleByGuid } from '../../services/data-service';

const ArticlePage = () => {
    const [article, setArticle] = useState<IApiResponse>();
    const [loading, setLoading] = useState<boolean>( false );
    const [error, setError] = useState<boolean>( false );
    
    useEffect( () => {
        setLoading( true );
        getArticleByGuid()
            .then( ( response: IApiResponse ) => {
                setArticle( response );
                setLoading( false );
            } )
            .catch( err => {
                setError( err );
                setLoading( false );
            } );
    }, [] );
    
    return (
        <ArticleContext.Provider value={ article }>
            <Article loading={ loading } article={ article } error={ error }/>
        </ArticleContext.Provider>
    );
};

export default ArticlePage;
