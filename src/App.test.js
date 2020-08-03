import React from 'react';
import {mount} from 'enzyme';
// import {render} from '@testing-library/react';
import {Typography} from '@material-ui/core';

import App from './App';

let wrapper = null;
beforeAll(() => {wrapper = mount(<App/>)});

describe('App Test Suite', () => {
    it('renders react app', () => {
        const typoComp = <Typography variant="h4">Material React App Template</Typography>;
        expect(wrapper.contains(typoComp)).toEqual(true);
    });
});