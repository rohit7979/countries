import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import CountryCard from '../components/CountryCard';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((country, index) => <CountryCard key={index} country={country} />)
      ) : (
        <p>No favorites added.</p>
      )}
    </div>
  );
};

export default Favorites;
