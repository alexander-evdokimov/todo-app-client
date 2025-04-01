import { cn } from "@/shared/lib";
import { Button, Input } from "antd";

import { Undo } from "lucide-react";
import React from "react";
import { saveEditTodo, editTodo } from "../model/todo-slice";
import { useAppDispatch } from "@/app/store";

interface Props {
  className?: string;
  currentValue: string;
}

export const EditTodoForm: React.FC<Props> = ({ className, currentValue }) => {
  const [value, setValue] = React.useState(currentValue);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(saveEditTodo(value));
    dispatch(editTodo(null));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUndoEdit = () => {
    dispatch(editTodo(null));
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Изменение тудушки..."
        className={cn("w-full", className)}
      />
      <Button onClick={handleUndoEdit}>
        <Undo size={16} />
      </Button>
    </form>
  );
};
