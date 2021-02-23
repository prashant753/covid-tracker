
const TableHeaders = (isState) => {
  return [ `${isState ? 'State' : 'District'}`, 'Confirmed', 'Tested', 'Recovered', 'Deceased' ]
};

export default {
  TableHeaders,
};
