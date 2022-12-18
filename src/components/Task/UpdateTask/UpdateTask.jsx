import React from "react";

const UpdateTask = ({
  updateTodo,
  handleChangeTask,
  handleUpdateTask,
  handleCancelTaskUpdate,
}) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={updateTodo && updateTodo.title}
          onChange={(e) => handleChangeTask(e)}
        />
      </div>
      <div>
        <button onClick={handleUpdateTask}>Update</button>
        <button onClick={handleCancelTaskUpdate}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateTask;
