import { shallow } from 'enzyme';
import React from 'react';
import Section from './Section';

describe( 'Section', () => {
    test( 'given data when render then show section', () => {
        const data = `<p>test</p>`;
        const wrapper = shallow( <Section data={ data }/> );
        expect( wrapper.exists( 'section' ) ).toBeTruthy();
    } );
} );
