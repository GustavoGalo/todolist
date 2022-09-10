import React, { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { AddItem } from "./components/AddItem";
import { Item } from "./interfaces/Item";

const initialList = [
  {
    task: "Pick up Milk",
    priority: 1,
  },
  {
    task: "Buy Eggs",
    priority: 2,
  },
  {
    task: "Buy Bread",
    priority: 3,
  },
];

function App() {
  const [itemList, setItemList] = useState(initialList);

  const isPartOf = (item: Item, items: Item[]): boolean => {
    return items.some((_item) => _item.priority === item.priority);
  };

  const addItem = (item: Item) => {
    if (isPartOf(item, itemList)) {
      alert(`Item with preiority ${item.priority} exists`);
      return;
    }
    setItemList((prev) => [...prev, item]);
  };

  return (
    <div className="App">
      <br />
      <ToDoList items={itemList} />
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
