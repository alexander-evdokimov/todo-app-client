import { cn } from "@/shared/lib";
import { FC } from "react";
import { EditTodoForm } from "./ui/edit-todo-form";
import { TodoControls } from "./ui/todo-controls";
import { TodoItem } from "./ui/todo-item";
import { useFiltersTodos } from "./model/use-filters-todos";
import { useAppSelector } from "@/app/store";

interface Props {
  className?: string;
}

export const Todo: FC<Props> = ({ className }) => {
  const { edittingTodoId, todos } = useAppSelector((state) => state.todo);

  const { filteredTodos, filter, searchValue, setFilter, setSearchValue } = useFiltersTodos(todos);

  return (
    <div
      className={cn("mt-[120px] mx-auto w-[840px] p-10 bg-white rounded-xl shadow-md", className)}
    >
      <h1 className="text-3xl font-bold">TODO APP</h1>
      <TodoControls
        onSearch={setSearchValue}
        onSelect={setFilter}
        selectedValue={filter}
        searchValue={searchValue}
        className="mt-10"
      />
      <ul className={cn("flex flex-col gap-2 mt-6", className)}>
        {filteredTodos.map((todo) =>
          edittingTodoId === todo.id ? (
            <EditTodoForm key={todo.id} currentValue={todo.description} />
          ) : (
            <TodoItem key={todo.id} todo={todo} />
          )
        )}
      </ul>
    </div>
  );
};
