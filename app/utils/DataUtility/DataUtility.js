export const getTotalData = obj => {
  let tConfirmed = 0;

  let tTested = 0;

  let tRecovered = 0;

  const tDeceved = 0;

  for (const state in obj) {
    tConfirmed += obj[state].total.confirmed;

    tTested += obj[state].total.tested;

    tRecovered += obj[state].total.recovered;

    // tDeceved = tDeceved + obj[ state ].total.deceased;
  }

  return {
    'Total Confirmed': tConfirmed,
    Tested: tTested,
    Recovered: tRecovered,
  };
};
