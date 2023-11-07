import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    default:
      return state;
  }
};
const store = createStore(reducer, composeWithDevTools());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
