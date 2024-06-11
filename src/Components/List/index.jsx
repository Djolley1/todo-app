const List = ({ items, toggleComplete, deleteItem }) => (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
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
  
  export default List;