import { cn } from "@/shared/lib";
import { Select } from "antd";
import React from "react";

interface Props {
  className?: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

export const SortTodo: React.FC<Props> = ({ className, options, onSelect }) => {
  return (
    <Select
      className={cn("w-20", className)}
      onChange={(select) => onSelect(select.value)}
      defaultValue={options[0]}
      options={options}
    />
  );
};
