import React from 'react';
import renderer from 'react-test-renderer';
import { apiResponse } from '../../test/mock';
import ArticlePage from './ArticlePage';

describe( 'ArticlePage', () => {
    test( 'given data when render then show section', () => {
        jest.spyOn( React, 'useReducer' ).mockReturnValue( [
            { error: false, loading: false, article: apiResponse },
            () => {
            }
        ] );
        const wrapper = renderer.create( <ArticlePage/> ).toJSON();
        expect( wrapper ).toMatchSnapshot();
    } );
} );
