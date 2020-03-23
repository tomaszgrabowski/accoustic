import { shallow } from 'enzyme';
import React from 'react';
import * as faker from 'faker';
import { apiResponse } from '../../test/mock';
import { Article } from './Article';
import renderer from 'react-test-renderer';

describe( 'Article', () => {
    let testObj:any = undefined;
    
    beforeEach(()=>{
        testObj = {
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
    });
    test( 'given data when render then show article', () => {
        const wrapper = shallow( <Article article={ testObj }/> );
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
    
    test('given Article component when render then renders properly', () =>{
        const wrapper = renderer.create( <Article article={ apiResponse }/> ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
} );
