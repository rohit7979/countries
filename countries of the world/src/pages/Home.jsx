import React, { useState, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import CountryDetails from '../components/CountryDetails';
import { AppContext } from '../contexts/AppContext';

const Home = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const { searchHistory } = useContext(AppContext);

  const handleSearch = (code) => {
    setCurrencyCode(code);
  };

  return (
    <div>
      <h1>Countries of the World</h1>
      <SearchBar onSearch={handleSearch} />
      {currencyCode ? <CountryDetails currencyCode={currencyCode} /> : <p>Enter a currency code to see country details.</p>}
      <h2>Search History</h2>
      <ul>
        {searchHistory.length > 0 ? (
          searchHistory.map((historyItem, index) => <li key={index}>{historyItem}</li>)
        ) : (
          <p>No search history.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
