import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Main from './Main';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/store';
import { fetchMovies } from './actions/dispatcher';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(fetchMovies())

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
