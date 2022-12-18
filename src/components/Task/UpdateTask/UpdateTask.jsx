import React from "react";

const UpdateTask = ({
  updateTodo,
  handleChangeTask,
  handleUpdateTask,
  handleCancelTaskUpdate,
}) => {
  return (
    <div className="update-task-container">
      <div>
        <input
          type="text"
          value={updateTodo && updateTodo.title}
          onChange={(e) => handleChangeTask(e)}
        />
      </div>
      <div className="button-container">
        <button className="update-task-btn" onClick={handleUpdateTask}>
          Update
        </button>
        <button className="cancel-task-btn" onClick={handleCancelTaskUpdate}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateTask;
