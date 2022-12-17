import React from "react";
import { v4 as uuid } from "uuid";

const AddTask = ({ newTask, setNewTask, items, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Add task
  const handleAddTask = () => {
    if (newTask) {
      let newTaskId = uuid();
      let newEntry = { id: newTaskId, title: newTask, status: "new" };
      setItems([...items, newEntry]);
      setNewTask("");
      console.log(`newEntry ID:`, newEntry);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit" onClick={handleAddTask}>
          Add a task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
