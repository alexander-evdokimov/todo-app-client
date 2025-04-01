import { useState, useMemo } from "react";
import { Todo } from "./todo-slice";
import { FilterType } from "./constants";

export const useFiltersTodos = (todos: Todo[]) => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchValue, setSearchValue] = useState("");

  const filteredTodos = useMemo(() => {
    let items = todos.filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.status);
      case "completed":
        return todos.filter((todo) => todo.status);
      default:
        return items;
    }
  }, [todos, filter, searchValue]);

  return {
    filteredTodos,
    filter,
    searchValue,
    setFilter,
    setSearchValue,
  };
};
