
import { getStatesApiData } from "../../utils/api/stateRepo";
import {
  FETCH_STATES_FAILURE,
  FETCH_STATES_REQUEST,
  FETCH_STATES_SUCCESS,
} from "./actionTypesConstant";

// loading
export const fetchStatesRequest = () => {
  return {
    type: FETCH_STATES_REQUEST,
  };
};

// success
export const fetchStatesSuccess = (states) => {
  return {
    type: FETCH_STATES_SUCCESS,
    payload: states,
  };
};

// error
export const fetchStatesFailure = (error) => {
  return {
    type: FETCH_STATES_FAILURE,
    payload: error,
  };
};

export const fetchStates = () => {
  return async (dispatch) => {
    dispatch(fetchStatesRequest());

    try {
      const statesData = await getStatesApiData();

      dispatch(fetchStatesSuccess(statesData.data));
    } catch (error) {
      dispatch(fetchStatesFailure(error));
    }
  };
};
