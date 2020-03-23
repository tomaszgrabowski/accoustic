import { shallow } from 'enzyme';
import * as faker from 'faker';
import React from 'react';
import Footer from './Footer';

describe( 'Footer', () => {
    test( 'given author and date when render then show author and date', () => {
        const author = `${ faker.name.firstName() } ${ faker.name.lastName() }`;
        const date = faker.date.recent().toISOString();
        const wrapper = shallow( <Footer author={ author } date={ date }/> );
        expect( wrapper.exists( 'footer' ) ).toBeTruthy();
        expect( wrapper.find( 'span' ).text() ).toEqual( author );
        expect( wrapper.exists( 'Date' ) ).toBeTruthy();
    } );
} );
