import { shallow } from 'enzyme';
import React from 'react';
import { HeaderType } from '../../models/Types';
import Header from './Header';

describe( 'Header', () => {
    test( 'given size and value when render then show header', () => {
        const value = `test`;
        const headerSize = 1;
        const wrapper = shallow( <Header headerSize={ headerSize } value={ value }/> );
        expect( wrapper.exists( 'header' ) ).toBeTruthy();
        expect( wrapper.exists( 'h1' ) ).toBeTruthy();
        expect( wrapper.find( 'h1' ).text() ).toEqual( value );
    } );
    test( 'given className when render then show header with className', () => {
        const value = `test`;
        const headerSize = 5;
        const className: HeaderType = 'article-header';
        const wrapper = shallow( <Header headerSize={ headerSize } value={ value } className={ className }/> );
        expect( wrapper.is( '.article-header' ) ).toBeTruthy();
    } );
} );
