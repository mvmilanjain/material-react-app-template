// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
// import '@testing-library/jest-dom/extend-expect';

// Enzyme Setup
import 'jest-enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});