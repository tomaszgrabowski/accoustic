import { shallow } from 'enzyme';
import React from 'react';
import Section from '../../components/Section/Section';
import WithLoading from '../../components/WithLoading/WithLoading';

describe( 'Section', () => {
    test( 'given loading state when render then renders loading text', () => {
        const WithLoadingComponent = WithLoading( Section );
        const wrapper = shallow( <WithLoadingComponent data='test' loading={ true } error={ false }/> );
        expect( wrapper.find( 'div' ).text() ).toEqual( 'Loading...' );
    } );
    
    test( 'given error state when render then renders error text', () => {
        const WithLoadingComponent = WithLoading( Section );
        const wrapper = shallow( <WithLoadingComponent data='test' loading={ false } error={ true }/> );
        expect( wrapper.find( 'div' ).text() ).toEqual( 'Błąd ładowania...' );
    } );
    
    test( 'given loaded state when render then renders child component', () => {
        const WithLoadingComponent = WithLoading( Section );
        const wrapper = shallow( <WithLoadingComponent data='test' loading={ false } error={ false }/> );
        expect( wrapper.exists( 'Section' ) ).toBeTruthy();
    } );
} );
