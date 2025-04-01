import { cn } from "@/shared/lib";
import { Button, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../model/todo-slice";

interface Props {
  className?: string;
}

export const AddTodoForm: React.FC<Props> = ({ className }) => {
  const [value, setValue] = React.useState("");

  const dispath = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    if (value) {
      dispath(addTodo(value));
      setValue("");
    }
    e.preventDefault();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-3 items-start border-b border-gray-200 pb-4", className)}
    >
      <Input
        className="h-10 w-full"
        value={value}
        onChange={handleInput}
        placeholder="Новая тудушка..."
      />
      <Button type="primary" htmlType="submit">
        Добавить
      </Button>
    </form>
  );
};
