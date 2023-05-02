import React, { useState } from "react";
import { AddItemFormProps } from "../../interfaces";

export const AddItem = ({ onAdd }: AddItemFormProps) => {
  const [inputValue, setInputValue] = useState("");

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(inputValue); // Call the onAdd prop with the input value
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
