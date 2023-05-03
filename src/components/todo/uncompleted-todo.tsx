import { useContext } from "react";
import dayjs from "dayjs";

import { TodoContext } from "@/contexts";
import { capitalizeFirstLetter } from "@/utils";

export const UncompletedTodos = () => {
  const { todos, completeTodo } = useContext(TodoContext);
  const uncompletedTodos = todos.filter((todo) => !todo.completed); // Filter out completed todos

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    todoId: number
  ) => {
    completeTodo(todoId); // Mark todo as completed
  };

  return (
    <div>
      <hr className="my-4 border-grey-200 border-t-1 font-extrabold" />
      <ul className="flex flex-col gap-3 my-3">
        {uncompletedTodos.map((todo) => (
          <li key={todo.id}>
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleCheckboxChange(e, todo.id)}
                className="rounded-xl appearance-none h-6 w-6 border border-grey-100 bg-white checked:bg-blue-600 checked:border-transparent focus:outline-none  hover:bg-grey-200"
              />
              <div className="flex flex-col items-start">
                <span className="text-black font-bold text-medium">
                  {capitalizeFirstLetter(todo.title)}
                </span>

                <p className="text-xs text-grey-200">
                  {dayjs(todo.createdAt).format("MMM, DD, YYYY")}
                </p>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
