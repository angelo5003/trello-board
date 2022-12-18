import React from "react";

const InProgressColumn = ({ items, updateStatus, handleDeleteTask }) => {
  return (
    <div className="column">
      <h2>In Progress:</h2>
      {items &&
        items.map((item) => {
          if (item && item.status === "pending")
            return (
              <p className="item" key={item.id}>
                {item.title}{" "}
                <button
                  className="mark_complete"
                  key={item.id}
                  onClick={() => updateStatus(item.id, "completed")}
                >
                  Complete
                </button>
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

export default InProgressColumn;
