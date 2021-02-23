import React, { useState, useEffect, useRef } from 'react';

import Constants from '../../constant'

import './search.css';

export default function SearchState(props) {

  const { stateList, history } = props;

  const [ inputValue, setInput ] = useState('');
  const [ searchList, setSearchList ] = useState('');

  const setInputValue = event => {

    setInput(event.target.value);

  };

  const setSearchListData = () => {
    let suggestions = [];
    if (inputValue.length > 0) {

      suggestions = Object.keys(stateList).filter((item) => {
        return Constants.StateName[ item ].toLowerCase().includes(inputValue)
      });
    }

    if (suggestions.length > 10) {
      suggestions = suggestions.slice(0, 10);
    }

    const suggestedStates = suggestions.map(item => {
      return {
        name: Constants.StateName[ item ],
        key: item
      }
    });

    setSearchList(suggestedStates);

  }

  const showSearchList = () => {

    // if (searchList.length === 0 && inputValue) {
    //   return <div>No results found</div>
    // }

    if (searchList.length === 0) return null;


    return <div className="sea10listContainer">
      {
        searchList.map((state, index) => {

          const onStateClick = () => history.push(`/state/${state.key}`);
          return (
            <div
              className="sea10listTitle"
              key={`${state.key} ${index}`}
              onClick={onStateClick}
            >
              {state.name}
            </div>
          )
        })
      }
    </div>
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // Here make the API call to search
      // Check if input value if same as 500 ms ago
      if (inputValue === inputRef.current.value) {
        // FETCH API call with inputValue as search term
        setSearchListData();
      }
    }, 500);

    // This will clear the timer closure each time next set timeout opens
    return () => clearTimeout(timer);
  }, [ inputValue ]);

  const inputRef = useRef();
  return (
    <>
      <div className="sea10searchBoxContainer">
        <input
          className="sea10searchBox"
          ref={inputRef}
          onChange={setInputValue}
          value={inputValue}
          placeholder="Search..."
        />
        {showSearchList()}
      </div>
    </>
  );
}
