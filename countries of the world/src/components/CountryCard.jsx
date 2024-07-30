import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const CountryCard = ({ country }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(AppContext);

  const isFavorite = favorites.includes(country);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(country);
    } else {
      addToFavorites(country);
    }
  };

  return (
    <div className={`country-card ${isFavorite ? 'favorite' : ''}`}>
      <img src={`https://flagsapi.com/${country.cca2}/shiny/64.png`} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p>Currency: {Object.keys(country.currencies)[0]}</p>
      <p>Capital: {country.capital}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <button onClick={toggleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
    </div>
  );
};

export default CountryCard;
