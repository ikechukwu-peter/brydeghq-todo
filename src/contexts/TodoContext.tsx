import { createContext } from "react";
import { TodoContextValue } from "@/interfaces";

// Create a new context with an initial value of an empty array for todos and
// empty functions for adding and completing todos.
export const TodoContext = createContext<TodoContextValue>({
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
});
