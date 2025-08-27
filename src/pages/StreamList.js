/*
  Course: INT-499 Capstone in Information Technology
  Instructor: John Russel
  Joshua Coman
*/

import React, { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import './StreamList.css';

export default function StreamList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle adding a new item
  const handleAdd = () => {
    if (input.trim() === "") return;
    if (editingIndex !== null) {
      // Update existing item
      const updatedItems = [...items];
      updatedItems[editingIndex].text = input;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, { text: input, completed: false }]);
    }
    setInput("");
  };

  // Delete an item
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Edit an item
  const handleEdit = (index) => {
    setInput(items[index].text);
    setEditingIndex(index);
  };

  // Toggle completion
  const handleComplete = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  return (
    <div className="streamlist-container">
      <h2>StreamList</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="Enter item..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editingIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="items-list">
        {items.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span>{item.text}</span>
            <div className="item-buttons">
              <button onClick={() => handleComplete(index)} title="Complete">
                <FaCheck />
              </button>
              <button onClick={() => handleEdit(index)} title="Edit">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(index)} title="Delete">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
