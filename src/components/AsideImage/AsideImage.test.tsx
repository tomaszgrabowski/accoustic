import { shallow } from 'enzyme';
import * as faker from 'faker';
import React from 'react';
import { BASE_URL } from '../../constants';
import AsideImage from './AsideImage';

describe( 'AsideImage', () => {
    test( 'given url and caption when render then show img with proper atl and caption', () => {
        const url = faker.image.nature();
        const caption = faker.commerce.productName();
        const wrapper = shallow( <AsideImage url={ url } caption={ caption }/> );
        expect( wrapper.exists( 'aside' ) ).toBeTruthy();
        expect( wrapper.find( 'img' ).prop( 'src' ) ).toEqual( `${ BASE_URL }${ url }` );
        expect( wrapper.find( 'figcaption' ).text() ).toEqual( caption );
    } );
} );
