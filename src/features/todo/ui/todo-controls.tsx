import { cn } from "@/shared/lib";
import { FiltersTodo } from "./filters-todo";

import React from "react";
import { AddTodoForm } from "./add-todo-form";
import { TodoSummary } from "./todo-summary";
import { FilterType, filterTypes } from "../model/constants";

interface Props {
  className?: string;
  onSearch: (value: string) => void;
  onSelect: (value: FilterType) => void;
  selectedValue: FilterType;
  searchValue: string;
}

export const TodoControls: React.FC<Props> = ({
  className,
  onSelect,
  onSearch,
  selectedValue,
  searchValue,
}) => {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <AddTodoForm />
      <FiltersTodo
        onSearch={onSearch}
        onSelect={onSelect}
        selectedValue={selectedValue}
        searchValue={searchValue}
        options={filterTypes}
      />
      <TodoSummary />
    </div>
  );
};
