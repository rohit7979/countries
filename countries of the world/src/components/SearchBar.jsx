import React, { useRef, useEffect, useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const { addToSearchHistory } = useContext(AppContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    onSearch(inputValue);
    addToSearchHistory(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDebounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const debouncedSearch = handleDebounce(handleSearch, 300);

  return (
    <div>
      <input type="text" ref={inputRef} value={inputValue} onChange={handleChange} />
      <button onClick={debouncedSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
