import { IApiResponse } from '../models/IApiResponse';

export const articleReducerInitialState: IArticleState = {
    article: undefined,
    loading: false,
    error: false
};

export interface IArticleState {
    loading: boolean,
    error: boolean,
    article: IApiResponse | undefined
}

export interface IAction {
    type: ActionType,
    payload?: any
}

export enum ActionType {
    SET_LOADING,
    SET_ERROR,
    SET_ARTICLE
}

export const articleReducer = ( state: IArticleState, action: IAction ) => {
    switch ( action.type ) {
        case ActionType.SET_ERROR:
            return { error: true, loading: false, article: undefined };
        case ActionType.SET_LOADING:
            return { error: false, loading: true, article: undefined };
        case ActionType.SET_ARTICLE:
            return { error: false, loading: false, article: action.payload };
        default:
            return state;
    }
};


