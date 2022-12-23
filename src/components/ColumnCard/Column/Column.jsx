import React from "react";

const Column = ({ items, updateStatus, setUpdateTodo, handleDeleteTask }) => {
  return (
    <div className="column">
      <h2>New:</h2>
      {items &&
        items.map((item) => {
          if (item && item.status === "new") {
            return (
              <div key={item.id}>
                {" "}
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
              </div>
            );
          }
        })}
    </div>
  );
};

export default Column;
