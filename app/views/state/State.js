import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Card from '../../ui/card';
import NotFound from '../../ui/notFound';
import Table from '../../common/table/Table';

import { getStateTotal, isEmptyObject } from '../../utils/DataUtility/DataUtility';

import Constants from '../../constant';

import {
  getIsStateLoading,
  getStateError,
  getStateData,
} from '../../redux/state/selector';
import { fetchStates } from '../../redux/state/actionCreators';

import './state.css';

function State(props) {

  const { isLoading, states, error, fetchStates, match: { params: code } } = props;

  const stateCode = code.stateCode;

  if (!isEmptyObject(states)) {
    if (!Constants.StateName[ stateCode ]) {
      return <NotFound {...props} />
    }
  }

  useEffect(() => {

    if (isEmptyObject(states)) {
      fetchStates();
    }

    window.scrollTo(0, 0);
  }, []);

  const getCards = () => {
    const cardData = !isEmptyObject(states) && getStateTotal(states[ stateCode ].total);

    return (
      <div className="ste10boxesContainer">
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
      <div className="ste10homeHeading">Covid Tracker</div>
      <h3 style={{ textAlign: 'center' }}>
        {
          !isEmptyObject(states) && Constants.StateName[ stateCode ]
        }
      </h3>
      {
        !isEmptyObject(states) &&
        <>
          {getCards()}
          <Table
            headers={Constants.UserConstants.TableHeaders(false)}
            tableData={states[ stateCode ].districts}
            isCountry={false}
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
)(State);
