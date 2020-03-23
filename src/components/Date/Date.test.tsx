import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import * as faker from 'faker';
import React from 'react';
import Date from './Date';

describe( 'Date', () => {
    test( 'given date when render then show date', () => {
        const date = faker.date.recent().toISOString();
        const formattedDate = dayjs(date).format('DD-mm-YYYY HH:mm');
        const wrapper = shallow( <Date date={date} format={'DD-mm-YYYY HH:mm'} /> );
        expect( wrapper.find( 'small' ).text() ).toEqual(formattedDate);
    } );
    
    test( 'given invalid date when render then show notification', () => {
        const date = 'incorrect date';
        const wrapper = shallow( <Date date={date} format={'DD-mm-YYYY HH:mm'} /> );
        expect( wrapper.find( 'small' ).text() ).toEqual('Date not valid');
    } );
} );
