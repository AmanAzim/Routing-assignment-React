import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('testing full app', () => {
  let wrapper;

  beforeAll(() => {
    const history = createMemoryHistory();
    wrapper = render(
        <Router history={history}>
          <App/>
        </Router>
    );
  });

  it('renders app.js correctly', () => {
    fireEvent.click(wrapper.getByText('Users'));
    expect(wrapper.container.innerHTML).toMatch('The Users Page');
  });
});