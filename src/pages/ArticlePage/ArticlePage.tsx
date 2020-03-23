import React, { useEffect, useReducer } from 'react';
import Article from '../../components/Article/Article';
import { IApiResponse } from '../../models/IApiResponse';
import { ActionType, articleReducer, articleReducerInitialState } from '../../reducers/article.reducer';
import { getArticleByGuid } from '../../services/data-service';

const ArticlePage = () => {
    const [state, dispatch] = useReducer( articleReducer, articleReducerInitialState );
    
    useEffect( () => {
        dispatch( { type: ActionType.SET_LOADING } );
        getArticleByGuid()
            .then( ( response: IApiResponse ) => {
                dispatch( { type: ActionType.SET_ARTICLE, payload: response } );
            } )
            .catch( err => {
                dispatch( { type: ActionType.SET_ERROR } );
            } );
    }, [] );
    
    return (
        <Article loading={ state.loading } article={ state.article } error={ state.error }/>
    );
};

export default ArticlePage;
