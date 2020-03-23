import { useEffect, useReducer } from 'react';
import { IApiResponse } from '../models/IApiResponse';
import { ActionType, articleReducer, articleReducerInitialState } from '../reducers/article.reducer';
import { getArticleByGuid } from '../services/data-service';

export const useArticle = () => {
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
    
    return state;
};
