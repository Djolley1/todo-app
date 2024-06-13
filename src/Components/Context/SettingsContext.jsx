import React, { createContext, useContext, useEffect, useState } from 'react';

export const SettingsContext = createContext({
  itemsPerPage: 3,
  hideCompleted: true,
  setItemsPerPage: () => {},
  setHideCompleted: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    if (storedSettings) {
      setItemsPerPage(storedSettings.itemsPerPage);
      setHideCompleted(storedSettings.hideCompleted);
    }
  }, []);

  const saveSettings = (perPage, hideCompleted) => {
    localStorage.setItem('settings', JSON.stringify({ itemsPerPage: perPage, hideCompleted }));
    setItemsPerPage(perPage);
    setHideCompleted(hideCompleted);
  };

  return (
    <SettingsContext.Provider value={{ itemsPerPage, hideCompleted, setItemsPerPage, setHideCompleted, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
