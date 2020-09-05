import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { DataLayer } from './components/DataLayer';
import reducer, { initialState } from './components/reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.querySelector('#root')
);
