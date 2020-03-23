import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import * as faker from 'faker';
import React from 'react';
import renderer from 'react-test-renderer';
import Date from './Date';

describe( 'Date', () => {
    test( 'given date when render then show date', () => {
        const date = faker.date.recent().toISOString();
        const formattedDate = dayjs( date ).format( 'DD-mm-YYYY HH:mm' );
        const wrapper = shallow( <Date date={ date } format={ 'DD-mm-YYYY HH:mm' }/> );
        expect( wrapper.find( 'small' ).text() ).toEqual( formattedDate );
    } );
    
    test( 'given invalid date when render then show notification', () => {
        const date = 'incorrect date';
        const wrapper = shallow( <Date date={ date } format={ 'DD-mm-YYYY HH:mm' }/> );
        expect( wrapper.find( 'small' ).text() ).toEqual( 'Date not valid' );
    } );
    test( 'given Date component when render then renders properly', () => {
        const wrapper = renderer.create( <Date date={ '2012-01-01T23:23:23Z' } format={ 'DD-mm-YYYY HH:mm' }/> ).toJSON();
        expect( wrapper ).toMatchSnapshot();
    } );
    
} );
