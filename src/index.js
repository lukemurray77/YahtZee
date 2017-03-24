import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import reducer from './reduxStuff/reducer';
import { createStore, applyMiddleware  } from 'redux';
// import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';


// const logger = createLogger();
const store = createStore(reducer);



ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
