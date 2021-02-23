import React, { useState, useEffect, useRef } from 'react';

import './search.css';

export default function SearchState(props) {
  const { onSearch } = props;
  const [inputValue, setInput] = useState('');

  const setInputValue = event => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Here make the API call to search
      // Check if input value if same as 500 ms ago
      if (inputValue === inputRef.current.value) {
        // FETCH API call with inputValue as search term
        props.onSearch(inputValue);
      }
    }, 500);

    // This will clear the timer closure each time next set timeout opens
    return () => clearTimeout(timer);
  }, [inputValue, onSearch]);

  const inputRef = useRef();
  return (
    <div className="sea10searchBoxContainer">
      <input
        className="sea10searchBox"
        ref={inputRef}
        onChange={setInputValue}
        value={inputValue}
        placeholder="..Search"
      />
    </div>
  );
}
