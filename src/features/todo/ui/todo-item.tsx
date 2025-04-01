import { cn } from "@/shared/lib";
import { Button, Checkbox, Tag } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Todo } from "../model";
import { useAppDispatch } from "@/app/store";
import { editTodo, removeTodo, toggleStatusTodo } from "../model/todo-slice";
interface Props {
  className?: string;
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ className, todo }) => {
  const dispatch = useAppDispatch();

  const { dateCreated, description, id, status } = todo;

  const statusTag = status ? (
    <Tag color="green">Выполнено</Tag>
  ) : (
    <Tag color="orange">В процессе</Tag>
  );

  const handleToggleStatus = () => {
    dispatch(toggleStatusTodo(id));
  };

  const handleEdit = () => {
    dispatch(editTodo(id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={cn("flex justify-between items-center gap-3", className)}>
      <Checkbox className="flex flex-1" checked={status} value={id} onChange={handleToggleStatus}>
        <span className={cn(status && "line-through")}>{description}</span>
      </Checkbox>
      <span className="text-gray-400 text-xs">{dateCreated}</span>
      {statusTag}
      <div className="flex flex-1 justify-end gap-2">
        <Button onClick={handleEdit}>
          <Pencil size={16} />
        </Button>
        <Button onClick={handleRemove}>
          <Trash2 size={16} />
        </Button>
      </div>
    </li>
  );
};
