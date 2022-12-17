import React from "react";

const Column = ({ items, updateStatus }) => {
  return (
    <div className="column">
      <h2>New</h2>
      {items &&
        items.map((item) => {
          if (item && item.status === "new")
            return (
              <p className="item" key={item.id}>
                {item.title}{" "}
                <button
                  className="mark_pending"
                  key={item.id}
                  onClick={() => updateStatus(item.id, "pending")}
                >
                  Mark in Progress
                </button>
              </p>
            );
        })}
    </div>
  );
};

export default Column;
