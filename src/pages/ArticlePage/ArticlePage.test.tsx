import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ArticlePage from './ArticlePage';

describe( 'Section', () => {
    test( 'given data when render then show section', () => {
        const wrapper = shallow(<ArticlePage/>);
        wrapper.instance().state = { };
        console.log(wrapper.debug());
    } );
} );
