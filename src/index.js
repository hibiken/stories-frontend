import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import routes from './routes';
import storiesApp from './reducers';

import { followTag } from './actions';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )(createStore);

let store = createStoreWithMiddleware(storiesApp);
console.log(store.getState());

store.dispatch(followTag(8, 'Rails'));
store.dispatch(followTag(7, 'React'));
store.dispatch(followTag(10, 'Redux'));
console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));


console.log(store.getState());
