
const isStateUndefined = (state) => state.state === undefined;

export const getIsStateLoading = (state) => {

  if (isStateUndefined(state) || state.state.isLoading === undefined) {
    return false;
  }

  return state.state.isLoading;

}

export const getStateData = (state) => {


  if (isStateUndefined(state) || state.state.states === undefined || state.state.states === null) {
    return {};
  }

  return state.state.states;
}

export const getStateError = (state) => {

  if (isStateUndefined(state) || state.state.error === undefined || state.state.error === null) {
    return {};
  }

  return state.state.error;
}
