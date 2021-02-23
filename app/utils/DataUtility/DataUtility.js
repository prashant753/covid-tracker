export const getTotalData = (obj) => {

  let tConfirmed = 0;

  let tTested = 0;

  let tRecovered = 0;

  let tDeceved = 0;

  for (let state in obj) {

    tConfirmed = tConfirmed + obj[ state ].total.confirmed;

    tTested = tTested + obj[ state ].total.tested;

    tRecovered = tRecovered + obj[ state ].total.recovered;

    // tDeceved = tDeceved + obj[ state ].total.deceased;
  }

  return { 'Total Confirmed': tConfirmed, 'Tested': tTested, 'Recovered': tRecovered };
};
