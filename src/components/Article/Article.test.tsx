import { shallow } from 'enzyme';
import React from 'react';
import * as faker from 'faker';
import { Article } from './Article';

describe( 'Article', () => {
    test( 'given data when render then show article', () => {
        const testData: any = {
         elements: {
             heading: {
                 value: faker.commerce.productName()
             },
             body: {
                 value: [faker.lorem.paragraph(1), faker.lorem.paragraph(1)]
             },
             mainImage: {
                 value: {
                     leadImageCaption: faker.commerce.productName(),
                     leadImage: faker.image.business()
                 }
             },
             author: faker.name.findName(),
             date: faker.date.recent().toISOString()
         }
        };
        const wrapper = shallow( <Article article={ testData }/> );
        expect( wrapper.exists( 'article' ) ).toBeTruthy();
        expect( wrapper.exists( 'Header' ) ).toBeTruthy();
        expect( wrapper.exists( 'ArticleBody' ) ).toBeTruthy();
        expect( wrapper.exists( 'AsideImage' ) ).toBeTruthy();
        expect( wrapper.exists( 'Footer' ) ).toBeTruthy();
    } );
    
    test( 'given no data when render then show no article', () => {
        const obj = undefined;
        const wrapper = shallow( <Article article={ obj }/> );
        expect( wrapper.exists( 'Article' ) ).toBeFalsy();
    } );
} );
