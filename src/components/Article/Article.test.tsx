import { shallow } from 'enzyme';
import React from 'react';
import { IApiResponse } from '../../models/IApiResponse';
import Article from './Article';

describe( 'Article', () => {
    test( 'given article when render then show article', () => {
        const obj: IApiResponse = {} as IApiResponse;
        const wrapper = shallow( <Article article={ obj } error={ false } loading={ false }/> );
        expect( wrapper.exists( 'Article' ) ).toBeTruthy();
    } );
} );
