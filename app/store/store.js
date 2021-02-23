import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const Store = () => {
  /* ------------- redux Configuration ------------- */
  const middleware = [];
  const enhancers = [];

  /* ------------- Thunk Middleware ------------- */

  middleware.push(thunk);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  /* ------------- Applying Redux Devtool Extension ------------- */
  if (process.env.NODE_ENV === 'development') {
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
      : enhancers.push(f => f);
  }

  const store = createStore(rootReducer(), compose(...enhancers));

  return store;
};

const store = Store();

export default store;
