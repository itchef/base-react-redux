import { createStore } from 'redux';

import rootReducers from '../reducers';

export const store = createStore(
  rootReducers,
);

export const rootElement = document.getElementById('app');
