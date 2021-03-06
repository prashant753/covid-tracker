import React from 'react';
import PropTypes from 'prop-types';

import Constants from '../../constant';

import './table.css';

/*
  @params
  tableHeaders: Takes and array of headers
  table data: Takes array of table data corresponding to headers
*/

function Table(props) {
  const { navigateToState, tableData, headers, isCountry } = props;

  const getTableDataArray = (data, key) => {
    const arr = [];

    arr.push(isCountry ? Constants.StateName[ key ] : key);

    arr.push(data.confirmed);

    arr.push(data.tested);

    arr.push(data.recovered);

    arr.push(data.deceased);

    return arr;
  };

  const getHeaders = () =>
    headers.map((header, index) => <th key={`${index} ${header}`} className="ctry10heading">{header}</th>)

  const getTableData = () =>
    Object.keys(tableData).map((key) => {
      const onStateClick = () => navigateToState && navigateToState(key);
      const dataArray = getTableDataArray(tableData[ key ].total, key);
      return (
        <tr onClick={onStateClick} className="ctry10tableRow" key={key}>
          {
            dataArray.map((value, index) => <td key={index} className="ctry10tableData">{value}</td>)
          }
        </tr>
      );
    })

  return (
    <div className="ctry10tableContainer">
      <table>
        <tbody>
          <tr>
            {getHeaders()}
          </tr>
          {getTableData()}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableData: PropTypes.object.isRequired,
  navigateToState: PropTypes.func,
};

export default Table;
