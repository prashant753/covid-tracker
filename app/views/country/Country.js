import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import Card from '../../common/card';
import Table from '../../common/table/Table';
import SearchBox from '../search';

import { getTotalData } from '../../utils/DataUtility/DataUtility';

import Constants from '../../constant';

import {
  getIsStateLoading,
  getStateError,
  getStateData,
} from '../../redux/state/selector';
import { fetchStates } from '../../redux/state/actionCreators';

import './country.css';

function Country(props) {
  const { isLoading, states, error, fetchStates } = props;

  useEffect(() => {
    fetchStates();
  }, []);

  const goToStateDetails = stateCode => {
    // Navigate to state details screen
    props.history.push(`/state/${stateCode}`);
  };

  const getCards = () => {
    const cardData = getTotalData(states);

    return (
      <div className="ctry10boxesContainer">
        {Object.keys(cardData).map((key, index) => (
          <div key={`${key + index}`}>
            <Card title={key} value={cardData[ key ] || 'Unknown'} />
          </div>
        ))}
      </div>
    );
  };

  const onSearch = useCallback(searchTerm => {
    // Filter the country data and set
    console.log('--Search term after 500ms', searchTerm);
  }, []);

  return (
    <div className="web-align-1110">
      <div className="ctry10homeHeading">Covid Tracker</div>
      <SearchBox onSearch={onSearch} />
      <h3 style={{ textAlign: 'center' }}>India</h3>
      {Object.keys(states).length > 0 && getCards()}
      {Object.keys(states).length > 0 && (
        <Table
          headers={Constants.UserConstants.TableHeaders(true)}
          tableData={states}
          navigateToState={goToStateDetails}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: getIsStateLoading(state),
  states: getStateData(state),
  error: getStateError(state),
});

export default connect(
  mapStateToProps,
  { fetchStates },
)(Country);
