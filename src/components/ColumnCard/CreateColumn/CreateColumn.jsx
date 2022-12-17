import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateColumn = ({ newColumn, setNewColumn }) => {
  const [columnTitle, setColumnTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setColumnTitle("");
  };

  const handleChange = (e) => {
    setColumnTitle(e.target.value);
  };

  return (
    <div className="add-column">
      <form onSubmit={handleSubmit}>
        <label>Column Title:</label>
        <input
          type="text"
          value={columnTitle}
          onChange={handleChange}
          placeholder="Title column"
        />
        <button
          type="submit"
          onClick={() =>
            setNewColumn([{ id: uuid(), columnTitle }, ...newColumn])
          }
        >
          Add Column:
        </button>
      </form>
    </div>
  );
};

export default CreateColumn;
