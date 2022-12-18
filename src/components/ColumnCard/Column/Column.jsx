import React from "react";

const Column = ({ items, setItems, updateStatus, setUpdateTodo }) => {
  // Delete task
  const handleDeleteTask = (id) => {
    let newTasks = items.filter((task) => task.id !== id);
    setItems(newTasks);
  };

  return (
    <div className="column">
      <h2>New</h2>
      {items &&
        items.map((item) => {
          if (item && item.status === "new")
            return (
              <p className="item" key={item.id}>
                {item.title}
                <button onClick={() => setUpdateTodo(item)}>Edit</button>

                <button
                  className="mark_pending"
                  key={item.id}
                  onClick={() => updateStatus(item.id, "pending")}
                >
                  Mark in Progress
                </button>
                <button onClick={() => handleDeleteTask(item.id)}>
                  Delete task
                </button>
              </p>
            );
        })}
    </div>
  );
};

export default Column;
