import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const addToFavorites = (country) => {
    setFavorites((prev) => [...prev, country]);
  };

  const removeFromFavorites = (country) => {
    setFavorites((prev) => prev.filter((item) => item !== country));
  };

  const addToSearchHistory = (search) => {
    setSearchHistory((prev) => {
      const newHistory = [search, ...prev.filter((item) => item !== search)].slice(0, 5);
      return newHistory;
    });
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, searchHistory, addToSearchHistory }}>
      {children}
    </AppContext.Provider>
  );
};
