import { cn } from "@/shared/lib";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { Button } from "antd";
import { cleareCompletedTodos } from "../model/todo-slice";

interface Props {
  className?: string;
}

export const TodoSummary: React.FC<Props> = ({ className }) => {
  const { todos } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const todosLeft = todos.filter((todo) => !todo.status).length;

  const handleClearTodos = () => {
    dispatch(cleareCompletedTodos());
  };

  return (
    <div className={cn("flex gap-10 items-center", className)}>
      <div className="font-semibold">Осталось задач: {todosLeft}</div>
      <Button color="danger" variant="filled" onClick={handleClearTodos}>
        Удалить выполненные
      </Button>
    </div>
  );
};
