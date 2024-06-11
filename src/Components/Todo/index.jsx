import { useEffect, useState } from "react";
import { Pagination } from '@mantine/core';
import useForm from '../hooks/form';
import { v4 as uuid } from "uuid";
import { useSettings } from '../Context/SettingsContext'
import './styles.scss'; // Import the styles
import Form from '../SettingsForm';

const Todo = () => {
  const { itemsPerPage, hideCompleted } = useSettings();
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const { handleChange, handleSubmit, values } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    const incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incompleteCount} items pending`;
  }, [list]);

  const filteredList = hideCompleted ? list.filter(item => !item.complete) : list;
  const startIndex = (activePage - 1) * itemsPerPage;
  const paginatedList = filteredList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="todo-container">
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>
        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      <Form // Render the List component
        items={paginatedList}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />

      <div>
        {paginatedList.map((item) => (
          <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned To: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => toggleComplete(item.id)}>
              Complete: {item.complete ? "true" : "false"}
            </div>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>

      <Pagination
        total={Math.ceil(filteredList.length / itemsPerPage)}
        page={activePage}
        onChange={setActivePage}
      />
    </div>
  );
};

export default Todo;