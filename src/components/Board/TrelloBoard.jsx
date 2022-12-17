import React, { useState } from "react";
import Column from "../ColumnCard/Column/Column";
import InProgressColumn from "../ColumnCard/Column/InProgressColumn";
import DoneColumn from "../ColumnCard/Column/DoneColumn";
import AddTask from "../Task/AddTask/AddTask";
import { v4 as uuid } from "uuid";

const TrelloBoard = () => {
  // const [newColumn, setNewColumn] = useState([]);

  const [items, setItems] = useState([
    {
      id: uuid(),
      title: "Manage ORM for client XYZ",
      status: "new",
    },
    {
      id: uuid(),
      title: "getting groceries",
      status: "new",
    },
  ]);

  console.log(`items:`, items);

  const [newTask, setNewTask] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");

  // Change task for update task
  const handleChangeTask = (e) => {};

  // Update Task
  const handleUpdateTask = () => {};

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
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        items={items}
        setItems={setItems}
      />
      <div className="board-container">
        <Column items={items} setItems={setItems} updateStatus={updateStatus} />

        <InProgressColumn items={items} updateStatus={updateStatus} />
        <DoneColumn items={items} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default TrelloBoard;
