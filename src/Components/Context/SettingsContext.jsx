// import React, { createContext, useContext, useState } from 'react';

// const SettingsContext = createContext();

// export const SettingsProvider = ({ children }) => {
//   const [itemsPerPage] = useState(3); // Show three items by default
//   const [hideCompleted] = useState(true); // Hide completed items by default

//   return (
//     <SettingsContext.Provider value={{ itemsPerPage, hideCompleted }}>
//       {children}
//     </SettingsContext.Provider>
//   );
// };

// export const useSettings = () => useContext(SettingsContext);

// Components/Context/SettingContext.jsx

// Components/Context/SettingsContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext();

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

  return (
    <SettingsContext.Provider value={{ itemsPerPage, hideCompleted }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
