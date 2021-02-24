import lscache from "lscache";

import { getStatesApiData } from "../api/stateRepo";

lscache.enableWarnings(true);


const getCachedStatesData = async () => {

  const statesData = lscache.get("states");

  // Check if the state data is still there or is being flushed out

  if (statesData !== null) {

    return statesData;

  } else {

    try {
      const stateResponse = await getStatesApiData();

      // Set the state data into local storage for 30 minutes for caching

      lscache.set("states", stateResponse.data, 30);

      return stateResponse.data;

    } catch (error) {

      throw error;

    }
  }
};

const getStateDataFromLocalStorage = () => {
  return lscache.get('states');
}

const isLsCacheSupported = () => {
  return lscache.supported();
}

export default {
  getCachedStatesData,
  getStateDataFromLocalStorage,
  isLsCacheSupported,
}
