// Defines the shape of props expected by the AddItem component
export interface AddItemFormProps {
  onAdd: (title: string) => void;
}

// Defines the shape of an individual todo item
export interface Item {
  id: number;
  title: string;
  completed: boolean;
  date: Date;
}

// Defines the shape of the value provided by the TodoContext
export interface TodoContextValue {
  todos: Item[]; // An array of Item objects representing the current state of todos
  addTodo: (title: string) => void; // A function to add a new todo item
  completeTodo: (id: number) => void; // A function to complete a todo item
}

// Defines the shape of props expected by the TodoProvider component
export interface Props {
  children: React.ReactNode; // A required prop representing the children of the component
}
