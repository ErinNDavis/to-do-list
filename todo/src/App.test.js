import React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/dom';
import App from './App';

function render(component){
  const root = document.createElement('div');
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
}

test('ToDo', () => {
  const {getByText, getByLabelText} = render(<App/>);

  //after rendering our component
  getByText('TODO');
  getByLabelText('Add Todo');
  getByText('Add #1');

});
