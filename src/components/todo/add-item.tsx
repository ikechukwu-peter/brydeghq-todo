import React, { useState, useContext } from "react";
import { TodoContext } from "@/contexts";
import cogoToast from "cogo-toast";

export const AddItem = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo, todos } = useContext(TodoContext);

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue) {
      return cogoToast.error("Field is empty");
    }
    const existingTodo = todos.find(
      (todo) => todo.title.toLowerCase() === inputValue.trim().toLowerCase()
    );
    if (existingTodo) {
      return cogoToast.error("A todo item with the same title already exists.");
    }
    addTodo(inputValue.trim()); // Add a new todo item to the global state
    setInputValue(""); // Reset the input value
  };

  // Handler for input value change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value state
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center gap-3 h-full mt-8"
    >
      <input
        className="w-full py-2 px-4 rounded-md border-2 border-gray-200 bg-white text-grey focus:outline-none focus:ring-2 focus:ring-grey-100 focus:border-transparent hover:border-grey-200 placeholder:text-grey-200 h-full"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="A new To do Item..."
      />

      <button
        type="submit"
        className="mr-3 w-[50%] md:w-full py-2 px-4 bg-grey-200 hover:bg-grey-100 focus:bg-grey-200 text-white font-bold rounded-md transition duration-300 ease-in-out h-full"
      >
        Add Item
      </button>
    </form>
  );
};
