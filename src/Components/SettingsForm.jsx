// Components/SettingsForm.jsx

import React, { useState } from 'react';
import { useSettings } from './Context/SettingsContext';

const SettingsForm = () => {
  const { itemsPerPage, hideCompleted } = useSettings();
  const [perPage, setPerPage] = useState(itemsPerPage);
  const [showCompleted, setShowCompleted] = useState(hideCompleted);

  const handleSave = () => {
    localStorage.setItem('settings', JSON.stringify({ itemsPerPage: perPage, hideCompleted: showCompleted }));
  };

  return (
    <div>
      <h2>Settings</h2>
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
