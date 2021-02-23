import { combineReducers } from 'redux';

import stateReducer from '../redux/state/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    state: stateReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
