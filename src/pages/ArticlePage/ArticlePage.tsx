import React from 'react';
import Article from '../../components/Article/Article';
import { useArticle } from '../../hooks/useArticle';

const ArticlePage = () => {
    const {state} = useArticle();
    return (
        <Article loading={ state.loading } article={ state.article } error={ state.error }/>
    );
};

export default ArticlePage;
