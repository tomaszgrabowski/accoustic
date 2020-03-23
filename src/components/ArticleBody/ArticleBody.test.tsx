import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleBody from './ArticleBody';

describe( 'ArticleBody', () => {
    let testData: string[] = [];
    
    beforeEach( () => testData = ['a', 'b', 'c'] );
    
    test( 'given data (array of strings) when render then show list of sections', () => {
        const wrapper = shallow( <ArticleBody data={ testData }/> );
        expect( wrapper.exists( 'main' ) ).toBeTruthy();
        expect( wrapper.find( 'main' ).children().length ).toEqual( 3 );
    } );
    test( 'given empty data when render then show empty list', () => {
        const data = [] as string[];
        const wrapper = shallow( <ArticleBody data={ data }/> );
        expect( wrapper.exists( 'main' ) ).toBeTruthy();
        expect( wrapper.find( 'main' ).children().length ).toEqual( 0 );
    } );
    
    test( 'given ArticleBody component when render then renders properly', () => {
        const wrapper = renderer.create( <ArticleBody data={ testData }/> ).toJSON();
        expect( wrapper ).toMatchSnapshot();
    } );
} );
