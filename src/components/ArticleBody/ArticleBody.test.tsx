import { shallow } from 'enzyme';
import * as faker from 'faker';
import React from 'react';
import ArticleBody from './ArticleBody';

describe( 'AsideImage', () => {
    test( 'given data (array of strings) when render then show list of sections', () => {
        const data = [faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement()];
        const wrapper = shallow( <ArticleBody data={ data }/> );
        expect( wrapper.exists( 'main' ) ).toBeTruthy();
        expect( wrapper.find( 'main' ).children().length ).toEqual(3);
    } );
    test( 'given empty data when render then show empty list', () => {
        const data = [] as string[];
        const wrapper = shallow( <ArticleBody data={ data }/> );
        expect( wrapper.exists( 'main' ) ).toBeTruthy();
        expect( wrapper.find( 'main' ).children().length ).toEqual(0);
    } );
} );
