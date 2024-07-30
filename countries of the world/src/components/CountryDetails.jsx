import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

const CountryDetails = ({ currencyCode }) => {
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountriesByCurrency = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${currencyCode}`);
        setCountries(response.data);
        setSortedCountries(response.data); 
        setError(null); 
      } catch (error) {
        console.error('Error fetching countries:', error);
        setCountries([]);
        setSortedCountries([]);
        setError('No countries found for this currency code.');
      }
    };

    if (currencyCode) {
      fetchCountriesByCurrency();
    }
  }, [currencyCode]);

  useEffect(() => {
    if (countries.length > 0) {
      const sortCountries = (order) => {
        const sorted = [...countries].sort((a, b) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          if (order === 'asc') {
            return nameA > nameB ? 1 : -1;
          } else {
            return nameA < nameB ? 1 : -1;
          }
        });
        setSortedCountries(sorted);
      };
      sortCountries(sortOrder);
    }
  }, [sortOrder, countries]);

  return (
    <div>
      <div>
        <button onClick={() => setSortOrder('asc')}>Sort A-Z</button>
        <button onClick={() => setSortOrder('desc')}>Sort Z-A</button>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {sortedCountries.map((country) => (
            <CountryCard key={country.cca2} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
