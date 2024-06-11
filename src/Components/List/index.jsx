// const List = ({ items, toggleComplete, deleteItem }) => (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           <p>{item.text}</p>
//           <p><small>Difficulty: {item.difficulty}</small></p>
//           <div onClick={() => toggleComplete(item.id)}>
//             Complete: {item.complete.toString()}
//           </div>
//           <button onClick={() => deleteItem(item.id)}>Delete</button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
  
//   export default List;

import React from 'react';
import { useSettings } from '../Context/SettingsContext';

const List = ({ items, toggleComplete, deleteItem }) => {
  const { hideCompleted } = useSettings(); // Using the settings
  const filteredItems = hideCompleted ? items.filter(item => !item.complete) : items;

  return (
    <div>
      {filteredItems.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned To: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default List;
