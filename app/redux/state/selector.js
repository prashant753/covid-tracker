
const isStateUndefined = state => state.state === undefined;

import CachedData from '../../utils/storageUtility/cachedData';

export const getIsStateLoading = state => {
  if (isStateUndefined(state) || state.state.isLoading === undefined) {
    return false;
  }

  return state.state.isLoading;
};

export const getStateData = state => {
  if (
    isStateUndefined(state) ||
    state.state.states === undefined ||
    state.state.states === null
  ) {
    return {};
  }

  return Object.keys(state.state.states).length === 0 ? CachedData.getStateDataFromLocalStorage() || state.state.states : state.state.states;
};

export const getStateError = state => {
  if (
    isStateUndefined(state) ||
    state.state.error === undefined ||
    state.state.error === null
  ) {
    return {};
  }

  return state.state.error;
};
