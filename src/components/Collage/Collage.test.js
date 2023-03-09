import React from 'react';
import ReactDOM from 'react-dom';
import Collage from './Collage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Collage />, div);
  ReactDOM.unmountComponentAtNode(div);
});