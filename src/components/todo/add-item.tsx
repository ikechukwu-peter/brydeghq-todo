import React, { useState, useContext } from "react";
import { TodoContext } from "@/contexts";

export const AddItem = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useContext(TodoContext);

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(inputValue); // Add a new todo item to the global state
    setInputValue(""); // Reset the input value
  };

  // Handler for input value change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value state
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="A new todo item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
