import { useState, useEffect } from "react";
import { TodoContext } from "./todo-context";
import { Item, Props, TodoContextValue } from "@/interfaces";

// This component provides the context value for the todo app
export function TodoProvider({ children }: Props) {
  // State to hold the list of todos
  const [todos, setTodos] = useState<Item[]>([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos?.length) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Function to add a new todo item to the list
  const addTodo = (title: string) => {
    const newTodo: Item = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    // Update the state to include the new todo item
    setTodos([...todos, newTodo]);

    // Save the new todo item to local storage
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  // Function to mark a todo item as completed or not completed
  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    // Update the state with the updated list of todos
    setTodos(updatedTodos);
    // Save the updated list of todos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // The context value provided by this component
  const contextValue: TodoContextValue = {
    todos,
    addTodo,
    completeTodo,
  };

  // Render the context provider component with the context value and the children components
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}
