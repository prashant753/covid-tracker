export const getTotalCountryData = obj => {
  let tConfirmed = 0;

  let tTested = 0;

  let tRecovered = 0;

  const tDeceved = 0;

  for (const state in obj) {
    tConfirmed += obj[ state ].total.confirmed;

    tTested += obj[ state ].total.tested;

    tRecovered += obj[ state ].total.recovered;

    // tDeceved = tDeceved + obj[ state ].total.deceased;
  }

  return {
    'Total Confirmed': tConfirmed,
    'Tested': tTested,
    'Recovered': tRecovered,
  };
};

export const getStateTotal = obj => {
  return {
    'Total Confirmed': obj.confirmed,
    'Tested': obj.tested,
    'Recovered': obj.recovered,
  };
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0
};
