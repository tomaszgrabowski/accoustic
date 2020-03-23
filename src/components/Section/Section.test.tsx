import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Section from './Section';

describe( 'Section', () => {
    test( 'given data when render then show section', () => {
        const data = `<p>test</p>`;
        const wrapper = shallow( <Section data={ data }/> );
        expect( wrapper.exists( 'section' ) ).toBeTruthy();
    } );
    
    test( 'given Section component when render then renders properly', () => {
        const wrapper = renderer.create( <Section data={ 'test' }/> ).toJSON();
        expect( wrapper ).toMatchSnapshot();
    } );
} );
