import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Card from '../../ui/card';
import Table from '../../common/table/Table';
import SearchBox from '../../ui/search';

import { getTotalCountryData, isEmptyObject } from '../../utils/DataUtility/DataUtility';

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

    if (isEmptyObject(states)) {
      fetchStates();
    }

    window.scrollTo(0, 0);
  }, []);

  const goToStateDetails = stateCode => {
    // Navigate to state details screen
    props.history.push(`/state/${stateCode}`);
  };

  const getCards = () => {

    const cardData = getTotalCountryData(states);

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

  return (
    <div className="web-align-1110">
      <div className="ctry10homeHeading">Covid Tracker</div>
      <h3 style={{ textAlign: 'center' }}>India</h3>
      <SearchBox stateList={states} history={props.history} />
      {
        !isEmptyObject(states) &&
        <>
          {getCards()}
          <Table
            headers={Constants.UserConstants.TableHeaders(true)}
            tableData={states}
            navigateToState={goToStateDetails}
            isCountry={true}
          />
        </>
      }
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
