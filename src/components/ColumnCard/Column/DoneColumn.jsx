import React from "react";

const DoneColumn = ({ items, updateStatus }) => {
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
                  className="mark_pending"
                  key={item.id}
                  onClick={() => updateStatus(item.id, "pending")}
                >
                  Mark as Progress
                </button>
              </p>
            );
        })}
    </div>
  );
};

export default DoneColumn;
