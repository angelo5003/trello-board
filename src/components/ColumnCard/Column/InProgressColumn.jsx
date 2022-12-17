import React from "react";

const InProgressColumn = ({ items, updateStatus }) => {
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
                  Mark Complete
                </button>
              </p>
            );
        })}
    </div>
  );
};

export default InProgressColumn;
