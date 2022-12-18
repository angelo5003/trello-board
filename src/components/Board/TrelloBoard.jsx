import React, { useState } from "react";
import Column from "../ColumnCard/Column/Column";
import InProgressColumn from "../ColumnCard/Column/InProgressColumn";
import DoneColumn from "../ColumnCard/Column/DoneColumn";
import AddTask from "../Task/AddTask/AddTask";

import UpdateTask from "../Task/UpdateTask/UpdateTask";

const TrelloBoard = () => {
  // const [newColumn, setNewColumn] = useState([]);

  const [items, setItems] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  console.log(`updateTodo title:`, updateTodo);

  // Change task for update task
  const handleChangeTask = (e) => {
    setUpdateTodo({ ...updateTodo, title: e.target.value });
  };

  // Update Task
  const handleUpdateTask = () => {
    let oldTask = [...items].filter((task) => task.id !== updateTodo.id);
    let updatedObject = [...oldTask, updateTodo];
    setItems(updatedObject);
    setUpdateTodo("");
  };

  // Cancel update Task
  const handleCancelTaskUpdate = () => {
    setUpdateTodo("");
  };

  // Update tasks based on their status, (new, progress, completed)
  const updateStatus = (id, newStatus) => {
    let allItems = items;
    allItems = allItems.map((item) => {
      if (item.id === id) {
        console.log(`in here`);
        item.status = newStatus;
      }
      return item;
    });
    setItems(allItems);
  };

  return (
    <div className="board">
      {/* <CreateColumn newColumn={newColumn} setNewColumn={setNewColumn} /> */}
      {updateTodo && updateTodo ? (
        <UpdateTask
          updateTodo={updateTodo}
          handleChangeTask={handleChangeTask}
          handleUpdateTask={handleUpdateTask}
          handleCancelTaskUpdate={handleCancelTaskUpdate}
        />
      ) : (
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          items={items}
          setItems={setItems}
        />
      )}

      <div className="board-container">
        <Column
          items={items}
          setItems={setItems}
          updateStatus={updateStatus}
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
        />

        <InProgressColumn items={items} updateStatus={updateStatus} />
        <DoneColumn items={items} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default TrelloBoard;
