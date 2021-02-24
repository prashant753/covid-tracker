import CachedData from '../../utils/storageUtility/cachedData';

import {
  FETCH_STATES_FAILURE,
  FETCH_STATES_REQUEST,
  FETCH_STATES_SUCCESS,
} from './actionTypesConstant';

import { getStatesApiData } from '../../utils/api/stateRepo'

// loading
export const fetchStatesRequest = () => ({
  type: FETCH_STATES_REQUEST,
});

// success
export const fetchStatesSuccess = states => ({
  type: FETCH_STATES_SUCCESS,
  payload: states,
});

// error
export const fetchStatesFailure = error => ({
  type: FETCH_STATES_FAILURE,
  payload: error,
});

export const fetchStates = () => async dispatch => {
  dispatch(fetchStatesRequest());

  try {

    const statesData = CachedData.isLsCacheSupported() ? await CachedData.getCachedStatesData() : await getStatesApiData();

    dispatch(fetchStatesSuccess(statesData));

  } catch (error) {
    dispatch(fetchStatesFailure(error));
  }
};
