import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

import { Router, BrowserRouter, MemoryRouter  } from 'react-router-dom';
//import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';

import { render, fireEvent } from '@testing-library/react';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('testing full app with - testing-library/react', () => {
  let wrapper;
  const history = createMemoryHistory();

  beforeAll(() => {
    wrapper = render(
        <Router history={history}>
          <App/>
        </Router>
    );
  });

  it('initially lands on / route', () => {
    expect(history.location.pathname).toBe("/");
  });

  it('pushes right path to route history', () => {
    history.push('/users');
    expect(history.location.pathname).toBe("/users");
  });

  it('pushes right query param to route history', () => {
   history.push('/courses/1?course=react');
   expect(history.location.search).toBe('?course=react');
  });
});

fdescribe('Clicking route link', () => {
   let wrapper;

    const routerProps = {
      match: {
        path: '/courses/:kd',
        url: '/courses/1',
        params: {
          kd: 1,
        },
      },
      location: {
        search: '?course=React',
      },
    };

    wrapper = render(
          <MemoryRouter>
            <Course props={routerProps}/>
          </MemoryRouter>
    );

    it('clicking /Course page shows right data', () => {
      expect(wrapper.getByText(/You selected/i).textContent).toBe('You selected the Course with ID: 1');
    });

     it('clicking /Course page shows right data', () => {
      expect(wrapper.getByTestId('course-heading')).toHaveTextContent('React');
    });
});
