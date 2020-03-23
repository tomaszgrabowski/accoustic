import { shallow } from 'enzyme';
import React from 'react';
import ArticlePage from './ArticlePage';

describe( 'ArticlePage', () => {
    test( 'given data when render then show section', () => {
        const wrapper = shallow( <ArticlePage/> );
        console.log( wrapper.debug() );
    } );
} );
