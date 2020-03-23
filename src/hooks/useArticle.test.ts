import { act, renderHook } from '@testing-library/react-hooks';
import { ActionType } from '../reducers/article.reducer';
import { useArticle } from './useArticle';

describe( 'useArticle', () => {
    test( 'given error when call then return error in state', () => {
        const { result } = renderHook( () => useArticle() );
        act( () => result.current.dispatch( { type: ActionType.SET_ERROR } )
        );
        expect( result.current.state ).toEqual( { article: undefined, error: true, loading: false } );
    } );
    test( 'given loading when call then return loading in state', () => {
        const { result } = renderHook( () => useArticle() );
        act( () => result.current.dispatch( { type: ActionType.SET_LOADING } )
        );
        expect( result.current.state ).toEqual( { article: undefined, error: false, loading: true } );
    } );
    test( 'given article when call then return article in state', () => {
        const { result } = renderHook( () => useArticle() );
        act( () => result.current.dispatch( { type: ActionType.SET_ARTICLE, payload: 'article' } )
        );
        expect( result.current.state ).toEqual( { article: 'article', error: false, loading: false } );
    } );
} );
