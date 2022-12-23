import React from "react";

const DoneColumn = ({ items, handleDeleteTask }) => {
  return (
    <div className="column">
      <h2>Done:</h2>
      {items &&
        items.map((item) => {
          if (item && item.status === "completed")
            return (
              <p className="item" key={item.id}>
                {item.title}{" "}
                <button
                  className="delete-task"
                  key={item.id}
                  onClick={() => handleDeleteTask(item.id)}
                >
                  Delete Task
                </button>
              </p>
            );
        })}
    </div>
  );
};

export default DoneColumn;
