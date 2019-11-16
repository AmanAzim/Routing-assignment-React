import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import Users from './Users';

import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
//const rrd = require('react-router-dom');// Just render plain div with its children

//rrd.BrowserRouter = ({children}) => <div>{children}</div>;

xdescribe('testing full app with - enzymet', () => {
  let wrapper;

  beforeAll(() => {

  });

  wrapper = mount(
       <MemoryRouter initialEntries={[ '/users' ]}>
          <App/>
       </MemoryRouter>
  );

  it('Renders <Users upon clicking first NavLink', () => {
      //wrapper.find('NavLink').at(0).simulate('click');
      expect(wrapper.find(Users)).toHaveLength(0);
  });
});