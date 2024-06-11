import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [itemsPerPage] = useState(3); // Show three items by default
  const [hideCompleted] = useState(true); // Hide completed items by default

  return (
    <SettingsContext.Provider value={{ itemsPerPage, hideCompleted }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);