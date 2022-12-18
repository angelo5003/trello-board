import React from "react";

const Column = ({
  items,
  setItems,
  updateStatus,
  setUpdateTodo,
  handleDeleteTask,
}) => {
  return (
    <div className="column">
      <h2>New</h2>
      {items &&
        items.map((item) => {
          if (item && item.status === "new")
            return (
              <p className="item" key={item.id}>
                {item.title}
                <button
                  className="edit-task"
                  onClick={() => setUpdateTodo(item)}
                >
                  Edit Task
                </button>

                <button
                  className="mark_pending"
                  key={item.id}
                  onClick={() => updateStatus(item.id, "pending")}
                >
                  In Progress
                </button>
                <button
                  className="delete-task"
                  onClick={() => handleDeleteTask(item.id)}
                >
                  Delete task
                </button>
              </p>
            );
        })}
    </div>
  );
};

export default Column;
