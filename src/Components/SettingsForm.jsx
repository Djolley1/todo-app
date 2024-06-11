import React, { useState } from 'react';
import { useSettings } from './Context/SettingsContext';

const SettingsForm = () => {
  const { itemsPerPage, hideCompleted, saveSettings } = useSettings();
  const [perPage, setPerPage] = useState(itemsPerPage);
  const [showCompleted, setShowCompleted] = useState(hideCompleted);

//   const handleSave = () => {
//     const validPerPage = Math.max(perPage, 3);
//     localStorage.setItem('settings', JSON.stringify({ itemsPerPage: validPerPage, hideCompleted: showCompleted }));
//     setItemsPerPage(validPerPage);
//     setHideCompleted(showCompleted);
//   };

// const handleSave = () => {
//     const validPerPage = Math.max(perPage, 1); // Adjusted to allow any valid number
//     saveSettings(validPerPage, showCompleted);
//   };

const handleSave = () => {
    saveSettings(perPage, showCompleted);
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Items Per Page: {itemsPerPage}</p>
      <p>Show Completed: {hideCompleted ? "Yes" : "No"}</p>
      <label>
        Items Per Page:
        <input type="number" value={perPage} onChange={(e) => setPerPage(parseInt(e.target.value))} />
      </label>
      <label>
        <input type="checkbox" checked={showCompleted} onChange={(e) => setShowCompleted(e.target.checked)} />
        Hide Completed Items
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SettingsForm;
