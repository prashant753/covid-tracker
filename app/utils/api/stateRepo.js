import axios from 'axios';

export function getStatesApiData() {
  const url = 'https://api.covid19india.org/v4/min/data.min.json';

  return axios.get(url);
}
