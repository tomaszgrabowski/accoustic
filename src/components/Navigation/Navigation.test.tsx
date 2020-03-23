import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from './Navigation';

test( 'given Footer component when render then renders properly', () => {
    const wrapper = renderer.create( <BrowserRouter><Navigation/></BrowserRouter> ).toJSON();
    expect( wrapper ).toMatchSnapshot();
} );
