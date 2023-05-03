import { useContext, useState } from "react";
import { TodoContext } from "@/contexts";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "@/utils";

/**
 * Component to display a list of completed todos
 * @returns JSX.Element
 */
export const CompletedTodos = (): JSX.Element => {
  const { todos, completeTodo } = useContext(TodoContext);

  // Filter the todos array to only include completed todos
  const completedTodos = todos.filter((todo) => todo.completed);

  // Function to handle changes to the checkbox input
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    todoId: number
  ) => {
    completeTodo(todoId);
  };

  const [showCompletedTodos, setShowCompletedTodos] = useState(false);

  const handleToggleButtonClick = () => {
    setShowCompletedTodos(!showCompletedTodos);
  };

  return (
    <div>
      <hr className="my-4 border-grey-200 border-t-1 font-extrabold" />
      <div className="text-black flex items-center gap-2 my-3">
        <button onClick={handleToggleButtonClick}>
          {showCompletedTodos ? (
            <IoMdArrowDropdown className="text-grey font-bold text-3xl" />
          ) : (
            <IoMdArrowDropright className="text-grey font-bold text-3xl" />
          )}
        </button>
        <p className="font-medium text-grey-100 ">
          {completedTodos.length} Done{" "}
        </p>
      </div>
      {showCompletedTodos && (
        <ul className="flex flex-col gap-3">
          {completedTodos.map((todo) => (
            <li key={todo.id}>
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleCheckboxChange(e, todo.id)}
                  className="rounded-xl appearance-none h-6 w-6 border border-blue-100 bg-blue-100 checked:bg-blue-600 checked:border-transparent focus:outline-none hover:bg-blue-200"
                  style={{
                    backgroundImage: `url(/check.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "50%",
                  }}
                />

                <div className="flex flex-col items-start">
                  <span className="text-grey-200 line-through font-bold text-medium">
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
      )}
    </div>
  );
};
